/* 3D viewer for SolidWorks parts exported as .stl (File → Save As → STL). */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

function showMessage(el, title, text) {
  el.innerHTML = `<div class="viewer-msg"><div><strong>${title}</strong>${text}</div></div>`;
}

function initViewer() {
  const el = document.getElementById("viewer");
  if (!el || el.dataset.ready) return;
  el.dataset.ready = "1";
  const file = el.dataset.model;
  showMessage(el, "Loading model…", "");

  const loader = new STLLoader();
  const fail = () => showMessage(el, "3D model coming soon",
      `Export the part from SolidWorks as STL and save it as <code>${file}</code>.<br>
       <small>(3D models only load once the site is online, or through a local preview server.)</small>`);
  // try "part.stl", then "part.STL" (web servers care about capital letters)
  loader.load(
    file,
    geometry => build(el, geometry),
    undefined,
    () => altCase(file) ? loader.load(altCase(file), geometry => build(el, geometry), undefined, fail) : fail()
  );
}

function build(el, geometry) {
  el.innerHTML = "";

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

  // centre the part and scale it to a standard size, whatever units it was exported in
  geometry.computeVertexNormals();
  geometry.center();
  geometry.computeBoundingSphere();
  const s = 1 / geometry.boundingSphere.radius;
  geometry.scale(s, s, s);

  const material = new THREE.MeshStandardMaterial({ color: 0xb9bcc0, metalness: 0.65, roughness: 0.35 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // studio lighting
  scene.add(new THREE.HemisphereLight(0xffffff, 0x222222, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 1.2); rim.position.set(-4, 2, -4); scene.add(rim);

  // soft shadow disc under the part
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1.1, 48),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.05;
  scene.add(shadow);

  const home = new THREE.Vector3(2.4, 1.4, 2.8);
  camera.position.copy(home);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.6;
  controls.minDistance = 1.5;
  controls.maxDistance = 8;

  const hint = document.createElement("div");
  hint.className = "viewer-hint";
  hint.textContent = "Drag to rotate · Scroll to zoom · Right-drag to pan";
  el.appendChild(hint);

  const reset = document.createElement("button");
  reset.className = "viewer-reset";
  reset.textContent = "Reset view";
  reset.onclick = () => { camera.position.copy(home); controls.target.set(0, 0, 0); controls.autoRotate = true; };
  el.appendChild(reset);

  // stop spinning once the visitor takes control
  controls.addEventListener("start", () => { controls.autoRotate = false; hint.style.opacity = "0"; });

  const resize = () => {
    const w = el.clientWidth, h = el.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(el);
  resize();

  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
}

if (document.getElementById("viewer")) initViewer();
document.addEventListener("content-ready", initViewer);
