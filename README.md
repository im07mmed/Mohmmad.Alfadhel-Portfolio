# Mohammad's Portfolio: How to update & publish

## Preview on your computer
Double-click **`index.html`**. It opens in your browser.
(The 3D viewer only works once the site is online. On your computer it shows a "coming soon" box, which is normal.)

## Pages
- **`index.html`** is the Info page (the first page visitors see): headline, about, education, experience, skills.
- **`work.html`** has the project cards.
- **`project.html`** is one template that shows any project.
- `info.html` only forwards old links to the home page.

## Change any text
Open **`js/data.js`** in Notepad or VS Code. Everything is there: your headline, projects, experience, and skills.
- Keep the `"quotes"` around text and the `,` commas between items.
- Save, then refresh the browser.

Your bio paragraph is in **`index.html`**. Search for `Edit your bio here`.

## Add photos
Put your photos in the **`images`** folder using the exact names below. They appear automatically.
Until a photo exists, the site shows a grey "Photo coming soon" box with the filename it's expecting.

> **Capital letters matter online.** Your PC treats `photo.JPG` and `photo.jpg` as the same file, but the web server doesn't.
> The site now tries both versions of the ending (`.jpg`/`.JPG`, `.stl`/`.STL`), but the part *before* the dot must match exactly.

**Photo shapes (so nothing important gets cut off):**
| Where | Best shape | What happens |
|---|---|---|
| Project card (Work page) | **4:3 landscape**, the normal shape of a phone photo held sideways | Other shapes get trimmed at the edges to fit the card |
| Project page main photo & gallery | **Any shape** | Always shown whole, never cropped |
| Portrait photos | **3:4 portrait**, the normal shape of a phone photo held upright | Other shapes get trimmed to fit |

Keep each photo under about 500 KB (around 1600 px wide) so the site loads fast. Squoosh.app shrinks photos for free.

**Rotating portraits:** name them `portrait.jpg`, `portrait-2.jpg`, `portrait-3.jpg`, `portrait-4.jpg`. Any that don't exist are skipped.
To use more photos or change the speed, edit `portraits` and `portraitSeconds` near the top of `data.js`.

| Project | Main photo | Extra gallery photos |
|---|---|---|
| CVT Primary | `cvt-primary.jpg` | `cvt-primary-2.jpg`, `cvt-primary-3.jpg` |
| Camera Mount | `camera-mount.jpg` | `camera-mount-2.jpg`, `camera-mount-3.jpg` |
| OktoBajaFest | `oktobajafest.jpg` | `oktobajafest-2.jpg`, `oktobajafest-3.jpg` |
| Driveline & Torque | `driveline.jpg` | `driveline-2.jpg`, `driveline-3.jpg` |
| Dynamometer | `dynamometer.jpg` | `dynamometer-2.jpg` |
| Drawings / GD&T | `graphics.jpg` | `graphics-2.jpg` |
| Reports | `reports.jpg` | — |
| Photos of you (Info page) | `portrait.jpg` | `portrait-2.jpg`, `portrait-3.jpg`, `portrait-4.jpg` |

Want more or fewer gallery photos? Edit the `gallery: [ ... ]` list for that project in `data.js`.
Tip: keep photos under ~1 MB each so the site loads fast. Squoosh.app can shrink them.

## Add 3D models
In SolidWorks: **File → Save As → STL (*.stl)**. Then save the file to the **`models`** folder as:
- `cvt-primary.stl`
- `camera-mount.stl`

To add a 3D model to another project, set its `model: "models/your-file.stl"` in `data.js`.

## Add your resume
Save your resume PDF in this folder as **`resume.pdf`**. The Resume buttons link to it.

## Publish online (GitHub Pages, free)
1. Create an account at github.com. Your username becomes your web address.
2. Click **+ → New repository**. Name it exactly `YOURUSERNAME.github.io`, set it to **Public**, and click **Create**.
3. Click **"uploading an existing file"**, then drag in **everything inside this `portfolio` folder** (not the folder itself). Click **Commit changes**.
4. Wait about a minute, then visit **https://YOURUSERNAME.github.io**.

**To update later:** open the repository on GitHub, click **Add file → Upload files**, drag in the changed files, and commit. They replace the old versions.
