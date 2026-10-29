/* =====================================================================
   SITE CONTENT — this is the only file you need to edit to change text.
   - Keep the quotes "..." around text and the commas between items.
   - Photos go in the /images folder, 3D models (.stl) in /models.
   ===================================================================== */

const SITE = {
  name: "Mohammad Alfadhel",
  title: "Mechanical Engineering Student",
  email: "maalfadh@uwaterloo.ca",
  phone: "+1 (226) 505-0398",
  linkedin: "https://www.linkedin.com/in/mohammad-al-fadhel",
  resume: "resume.pdf",
  location: "Waterloo, ON",
  portrait: "images/portrait.jpg", // your photo for the Info page

  // Hero headline. The last word is shown in the shiny italic style.
  headline: ["I design, build", "& test"],
  headlineAccent: "machines.",
  intro: "Powertrain @ UW Baja SAE. Based in Waterloo.",
  introSub: "Mechanical Engineering, University of Waterloo.",
};

/* ---------------------------------------------------------------------
   PROJECTS — each one gets its own page automatically.
   id:       short unique name, no spaces (used in the page link)
   cover:    main photo shown on the card
   gallery:  extra photos shown on the project page
   model:    optional .stl file for the 3D viewer (leave "" for none)
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "cvt-primary",
    title: "CVT Primary Reverse-Model",
    tag: "CAD · Baja SAE",
    summary: "Reverse-modelled the CVT primary currently on the Baja car in SolidWorks to support drivetrain optimization.",
    role: "Powertrain Team Member",
    tools: "SolidWorks, calipers, PDM (3DX)",
    timeline: "2026",
    cover: "images/cvt-primary.jpg",
    gallery: ["images/cvt-primary-2.jpg", "images/cvt-primary-3.jpg"],
    model: "models/cvt-primary.stl",
    problem: "The team needed an accurate digital model of the CVT primary clutch running on the current car, so the drivetrain could be analyzed and optimized for next season.",
    process: "Measured the physical clutch and rebuilt its geometry part by part in SolidWorks, then assembled the components and checked fits and clearances against the real hardware.",
    result: "Delivered a usable CAD model of the CVT primary that the powertrain team can use as a baseline for tuning and redesign work.",
  },
  {
    id: "camera-mount",
    title: "Baja Camera Mount",
    tag: "Design · 3D Printing",
    summary: "Designed a camera mount in SolidWorks, 3D-printed it, and installed it on the Baja vehicle.",
    role: "Designer",
    tools: "SolidWorks, FDM 3D printing",
    timeline: "2026",
    cover: "images/camera-mount.jpg",
    gallery: ["images/camera-mount-2.jpg", "images/camera-mount-3.jpg"],
    model: "models/camera-mount.stl",
    problem: "The team needed a secure way to mount a camera on the vehicle to record testing and competition runs over rough terrain.",
    process: "Modelled a mount in SolidWorks to fit the frame tubing and the camera, designed it for printability, and printed and test-fit the part.",
    result: "The mount was installed on the Baja vehicle and used on the car, a full design-to-install loop.",
  },
  {
    id: "oktobajafest",
    title: "OktoBajaFest Pit Crew",
    tag: "Competition · Repair",
    summary: "Pit crew at OktoBajaFest (Colton, NY), helping the team reach a 3rd-place finish in endurance. Replaced and bled a ruptured brake line trackside.",
    role: "Pit Crew",
    tools: "Hand tools, brake bleeding kit",
    timeline: "Fall 2026",
    cover: "images/oktobajafest.jpg",
    gallery: ["images/oktobajafest-2.jpg", "images/oktobajafest-3.jpg"],
    model: "",
    problem: "In endurance racing, every minute in the pits costs places. During the race, a brake line ruptured and the car could not run safely.",
    process: "Worked with the pit crew to diagnose the failure, replaced the ruptured brake line, and bled the brake system under time pressure, then verified the brakes before sending the car back out.",
    result: "The car returned to the track and the team finished 3rd in endurance.",
  },
  {
    id: "driveline-torque",
    title: "Driveline Maintenance & Torque Specs",
    tag: "Diagnostics · Maintenance",
    summary: "Post-competition driveline teardown and diagnostics. Traced repeated fastener failures to missing torque specifications.",
    role: "Powertrain Team Member",
    tools: "Torque wrench, CV grease, bearing inspection",
    timeline: "2026",
    cover: "images/driveline.jpg",
    gallery: ["images/driveline-2.jpg", "images/driveline-3.jpg"],
    model: "",
    problem: "After competition the car had drivetrain noise, and several fasteners had failed during inspection and maintenance.",
    process: "Removed the half-shafts, inspected the reduction box bearings, and repacked the CV joints to address the noise. While investigating the fastener failures, identified missing torque specifications as the root cause.",
    result: "Restored the driveline. Planning to help establish standardized torque specs for the next vehicle so the failures don't repeat.",
  },
  {
    id: "dynamometer",
    title: "Homemade Dynamometer",
    tag: "ME 100 · Testing",
    summary: "Built a dynamometer with a team to test an electric motor, calculating torque from the test data in Excel.",
    role: "Team Member",
    tools: "Shop tools, Excel",
    timeline: "ME 100",
    cover: "images/dynamometer.jpg",
    gallery: ["images/dynamometer-2.jpg"],
    model: "",
    problem: "Characterize the torque output of an electric motor without access to commercial test equipment.",
    process: "Designed and built a simple dynamometer as a team, ran tests on the motor, and collected the measurements.",
    result: "Calculated motor torque from the test data in Excel and compared the results against expectations.",
  },
  {
    id: "engineering-graphics",
    title: "Drawings, GD&T & BOMs",
    tag: "Engineering Graphics",
    summary: "SolidWorks 3D models, engineering drawings to GD&T standards, and bills of materials.",
    role: "Student",
    tools: "SolidWorks, AutoCAD",
    timeline: "Engineering Graphics & Design",
    cover: "images/graphics.jpg",
    gallery: ["images/graphics-2.jpg"],
    model: "",
    problem: "Communicate part geometry and tolerances clearly enough that someone else could manufacture it.",
    process: "Modelled parts and assemblies in SolidWorks, then produced fully dimensioned drawings with GD&T callouts and bills of materials.",
    result: "A set of manufacturing-ready drawings and BOMs following drafting standards.",
  },
  {
    id: "design-reports",
    title: "Feasibility & Post-Mortem Reports",
    tag: "Technical Writing",
    summary: "Co-wrote a feasibility and design evaluation for a pumpless water gun, plus a post-mortem on a failed gravity-powered car.",
    role: "Co-author",
    tools: "Word, Excel",
    timeline: "University of Waterloo",
    cover: "images/reports.jpg",
    gallery: [],
    model: "",
    problem: "Evaluate whether a pumpless water gun toy concept was viable, and learn from a gravity-powered toy car that didn't perform.",
    process: "Analyzed concepts and trade-offs for the water gun, and investigated the root causes behind the gravity car's failure.",
    result: "Two technical reports: one recommending a design direction, and one capturing lessons learned for future builds.",
  },
];

/* ---------------------------------------------------------------------
   EXPERIENCE
   --------------------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: "Powertrain Team Member",
    org: "University of Waterloo Baja SAE Design Team",
    place: "Waterloo, ON",
    dates: "May 2026 – Present",
    points: [
      "Manufacture and assemble powertrain components, supporting fabrication, installation, and vehicle integration.",
      "Conduct vehicle testing, including endurance and steering-radius testing, to identify mechanical issues and assess performance.",
      "Perform post-competition driveline maintenance and diagnostics: half-shaft removal, reduction box bearing inspection, and CV joint repacking.",
      "Identified missing fastener torque specifications as the cause of multiple fastener failures; helping establish standardized torque specs for the next vehicle.",
      "Verify vehicle systems for compliance with SAE Baja rules and support preparation for technical inspection.",
      "Pit crew at OktoBajaFest (Colton, NY), contributing to a 3rd-place endurance finish; replaced and bled a ruptured brake line trackside.",
      "Registered for welding training at the UW engineering machine shop to support upcoming chassis fabrication.",
    ],
  },
  {
    role: "IT Network Technician",
    org: "MAF Group",
    place: "Saudi Arabia",
    dates: "Dec 2024 – Aug 2025",
    points: [
      "Reduced manual data entry time by approximately 20% by designing custom digital tracking forms in MS Access, Zoho, and Excel.",
      "Tracked expiry dates for 4–5 documents per vehicle across 65 vehicles, keeping records organized and up to date.",
      "Logged a large volume of purchase invoices in Excel as the record used for tax filing.",
      "Provided IT support for 8 staff and configured workstations to improve data tracking and internal communication.",
    ],
  },
  {
    role: "Field Project Supervisor (Office Renovation)",
    org: "MAF Group",
    place: "Dhahran, Saudi Arabia",
    dates: "Mar 2025",
    points: [
      "Supervised a 2-floor office renovation (3 offices, an employees' lounge, and 2 washrooms), directing an on-site team of up to 8 workers.",
      "Ensured work met quality and safety standards, handled material procurement, and resolved on-site logistics to keep the project on schedule.",
    ],
  },
];

/* ---------------------------------------------------------------------
   SKILLS
   --------------------------------------------------------------------- */
const SKILLS = [
  { group: "CAD", items: ["SolidWorks", "AutoCAD"] },
  { group: "Design & Drafting", items: ["3D Modelling", "Engineering Drawings", "GD&T", "Bills of Materials"] },
  { group: "Fabrication & Shop", items: ["Lathe & Mill", "Power Tools", "Welding (in training)", "Powertrain Assembly", "Vehicle Testing", "Troubleshooting & Repair"] },
  { group: "Documentation & Data", items: ["PDM (Kenesto & 3DX)", "Technical Reports", "Excel", "Access", "Word", "PowerPoint", "Teams", "Zoho Workspace"] },
  { group: "Safety Training", items: ["WHMIS 2015", "Worker Health & Safety Awareness", "Machine Shop Orientation", "Electrical Awareness"] },
  { group: "Soft Skills", items: ["Teamwork", "Leadership", "Problem-solving", "Project Management"] },
];

const EDUCATION = {
  school: "University of Waterloo",
  degree: "Bachelor of Applied Science (BASc) in Mechanical Engineering",
  place: "Waterloo, ON",
  dates: "Expected Graduation: Apr 2031",
};
