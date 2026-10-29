# Mohammad's Portfolio: How to update & publish

## Preview on your computer
Double-click **`index.html`**. It opens in your browser.
(The 3D viewer only works once the site is online. On your computer it shows a "coming soon" box, which is normal.)

## Change any text
Open **`js/data.js`** in Notepad or VS Code. Everything is there: your headline, projects, experience, and skills.
- Keep the `"quotes"` around text and the `,` commas between items.
- Save, then refresh the browser.

Your bio paragraph is in **`info.html`**. Search for `Edit your bio here`.

## Add photos
Put your photos in the **`images`** folder using the exact names below. They appear automatically.
Until a photo exists, the site shows a grey "Photo coming soon" box with the filename it's expecting.

| Project | Main photo | Extra gallery photos |
|---|---|---|
| CVT Primary | `cvt-primary.jpg` | `cvt-primary-2.jpg`, `cvt-primary-3.jpg` |
| Camera Mount | `camera-mount.jpg` | `camera-mount-2.jpg`, `camera-mount-3.jpg` |
| OktoBajaFest | `oktobajafest.jpg` | `oktobajafest-2.jpg`, `oktobajafest-3.jpg` |
| Driveline & Torque | `driveline.jpg` | `driveline-2.jpg`, `driveline-3.jpg` |
| Dynamometer | `dynamometer.jpg` | `dynamometer-2.jpg` |
| Drawings / GD&T | `graphics.jpg` | `graphics-2.jpg` |
| Reports | `reports.jpg` | — |
| Your headshot (Info page) | `portrait.jpg` | — |

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
