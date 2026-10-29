/* Builds every page from the content in data.js. You normally don't need to edit this file. */

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ARROW = '<span class="arrow">↗</span>';

/* ---------- Images with automatic placeholders ---------- */
function placeholderHTML(src) {
  return `<div class="ph">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>
    <span>Photo coming soon</span><code>${esc(src)}</code></div>`;
}
// If a photo file isn't in /images yet, show a neat placeholder instead of a broken image.
window.phSwap = img => { img.outerHTML = placeholderHTML(img.getAttribute("src")); };
const media = (src, alt = "") =>
  src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="phSwap(this)">` : placeholderHTML("images/…");

/* ---------- Shared header & footer ---------- */
function renderHeader(active) {
  $("#header").innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html"><strong>${esc(SITE.name)}</strong><span>${esc(SITE.title)}</span></a>
      <nav class="pill-nav">
        <span class="pill-indicator"></span>
        <a href="index.html#work" class="${active === "work" ? "active" : ""}">Work</a>
        <a href="info.html" class="${active === "info" ? "active" : ""}">Info</a>
      </nav>
      <div class="header-links">
        <a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn ${ARROW}</a>
        <a href="${esc(SITE.resume)}" target="_blank" rel="noopener">Resume ${ARROW}</a>
      </div>
    </div>`;

  // sliding highlight under the active tab
  const nav = $(".pill-nav"), ind = $(".pill-indicator");
  const moveTo = a => { ind.style.left = a.offsetLeft + "px"; ind.style.width = a.offsetWidth + "px"; };
  const current = $(".pill-nav a.active") || nav.querySelector("a");
  requestAnimationFrame(() => moveTo(current));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("mouseenter", () => moveTo(a)));
  nav.addEventListener("mouseleave", () => moveTo(current));
  addEventListener("resize", () => moveTo(current));

  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  $("#footer").innerHTML = `
    <div class="wrap">
      <div class="contact reveal">
        <h2>Let's build something.</h2>
        <p>Open to co-op and internship opportunities · ${esc(SITE.location)} · Ready to relocate</p>
        <div class="btn-row">
          <a class="btn" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          <a class="btn ghost" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn ${ARROW}</a>
          <a class="btn ghost" href="${esc(SITE.resume)}" target="_blank" rel="noopener">Resume ${ARROW}</a>
        </div>
      </div>
      <div class="footer-bar">
        <span>© ${new Date().getFullYear()} ${esc(SITE.name)}</span>
        <span>${esc(SITE.phone)}</span>
      </div>
    </div>`;
}

/* ---------- Home page ---------- */
function renderHome() {
  $("#hero-headline").innerHTML =
    `<span class="line"><span>${esc(SITE.headline[0])}</span></span>` +
    `<span class="line"><span>${esc(SITE.headline[1])} <span class="accent">${esc(SITE.headlineAccent)}</span></span></span>`;
  $("#hero-intro").innerHTML = `<p>${esc(SITE.intro)}</p><p class="sub">${esc(SITE.introSub)}</p>`;
  $("#work-count").textContent = `${PROJECTS.length} projects`;

  $("#projects").innerHTML = PROJECTS.map((p, i) => `
    <a class="card reveal" style="--d:${(i % 2) * 0.1}s" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="card-media">${media(p.cover, p.title)}</div>
      <div class="card-body">
        <div>
          <span class="tag">${esc(p.tag)}</span>${p.model ? '<span class="badge3d">3D</span>' : ""}
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
        </div>
        <span class="card-go">→</span>
      </div>
    </a>`).join("");

  // cursor-following glow on cards
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  renderExperience($("#experience"));
  renderSkills($("#skills"));

  // gentle parallax on the hero window
  const browser = $(".browser");
  if (browser && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addEventListener("scroll", () => {
      const y = Math.min(scrollY, innerHeight);
      browser.style.translate = `0 ${y * 0.12}px`;
      browser.style.scale = String(1 - y / innerHeight * 0.04);
    }, { passive: true });
  }
}

function renderExperience(el) {
  el.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="job reveal ${job.points.length > 3 ? "collapsed" : ""}">
      <div class="job-meta"><span class="dates">${esc(job.dates)}</span>${esc(job.place)}</div>
      <div>
        <h3>${esc(job.role)}</h3>
        <div class="org">${esc(job.org)}</div>
        <ul>${job.points.map(pt => `<li>${esc(pt)}</li>`).join("")}</ul>
        ${job.points.length > 3 ? `<button class="more-btn" data-job="${i}">Show ${job.points.length - 3} more</button>` : ""}
      </div>
    </div>`).join("");

  el.querySelectorAll(".more-btn").forEach(btn => btn.addEventListener("click", () => {
    const job = btn.closest(".job");
    const open = job.classList.toggle("collapsed");
    const extra = EXPERIENCE[btn.dataset.job].points.length - 3;
    btn.textContent = open ? `Show ${extra} more` : "Show less";
  }));
}

function renderSkills(el) {
  el.innerHTML = SKILLS.map((g, i) => `
    <div class="skill-group reveal" style="--d:${(i % 3) * 0.08}s">
      <h4>${esc(g.group)}</h4>
      <div class="chips">${g.items.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");
}

/* ---------- Project page ---------- */
function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const idx = Math.max(0, PROJECTS.findIndex(p => p.id === id));
  const p = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.title = `${p.title} — ${SITE.name}`;

  const steps = [["01", "Problem", p.problem], ["02", "Process", p.process], ["03", "Result", p.result]];

  $("#project").innerHTML = `
    <section class="project-hero wrap">
      <a class="back" href="index.html#work">← All work</a>
      <div class="tag reveal">${esc(p.tag)}</div>
      <h1 class="reveal">${esc(p.title)}</h1>
      <p class="lead reveal">${esc(p.summary)}</p>
      <dl class="facts reveal">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Tools</dt><dd>${esc(p.tools)}</dd></div>
        <div><dt>When</dt><dd>${esc(p.timeline)}</dd></div>
      </dl>
      <div class="project-cover reveal">${media(p.cover, p.title)}</div>
    </section>

    <section class="story wrap">
      ${steps.map(([n, h, t]) => `<div class="story-row reveal"><h3><span>${n}</span>${h}</h3><p>${esc(t)}</p></div>`).join("")}
    </section>

    ${p.model ? `
    <section class="wrap">
      <div class="section-head reveal"><h2>Explore the <em>model</em></h2><span>Drag to rotate · scroll to zoom</span></div>
      <div class="viewer reveal" id="viewer" data-model="${esc(p.model)}"></div>
    </section>` : ""}

    ${p.gallery.length ? `
    <section class="wrap">
      <div class="section-head reveal"><h2>Gallery</h2><span>${p.gallery.length} photos</span></div>
      <div class="gallery">${p.gallery.map((g, i) => `<figure class="reveal" style="--d:${(i % 2) * 0.1}s">${media(g, p.title)}</figure>`).join("")}</div>
    </section>` : ""}

    <nav class="pager wrap">
      <a href="project.html?id=${encodeURIComponent(prev.id)}" class="reveal"><small>← Previous</small><strong>${esc(prev.title)}</strong></a>
      <a href="project.html?id=${encodeURIComponent(next.id)}" class="next reveal"><small>Next →</small><strong>${esc(next.title)}</strong></a>
    </nav>`;
}

/* ---------- Info page ---------- */
function renderInfo() {
  $("#portrait").innerHTML = media(SITE.portrait, SITE.name);
  const e = EDUCATION;
  $("#edu").innerHTML = `
    <div><h3>${esc(e.school)}</h3><p>${esc(e.degree)}</p></div>
    <div class="right">${esc(e.place)}<br>${esc(e.dates)}</div>`;
  renderExperience($("#experience"));
  renderSkills($("#skills"));
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

/* ---------- Smooth page transitions ---------- */
function initTransitions() {
  document.addEventListener("click", e => {
    const a = e.target.closest("a");
    if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.protocol === "mailto:") return;
    const samePage = url.pathname === location.pathname && url.search === location.search;
    if (samePage) return; // let #anchor links scroll normally
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = a.href; }, 300);
  });
  // restore the page if the user comes back with the browser's Back button
  addEventListener("pageshow", () => document.body.classList.remove("leaving"));
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  renderHeader(page === "info" ? "info" : "work");
  if (page === "home") renderHome();
  if (page === "project") renderProject();
  if (page === "info") renderInfo();
  renderFooter();
  initReveal();
  initTransitions();
  document.dispatchEvent(new Event("content-ready"));
});
