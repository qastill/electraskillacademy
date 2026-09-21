# Three.js implementation update

The homepage now renders original procedural 3D humans and career equipment using vendored Three.js r180 (MIT). Joint animation is sampled into AnimationClips and played/blended with AnimationMixer. Work, walk-in-place, and idle modes are available. These are articulated mesh models, not a downloaded photorealistic skinned GLB. Their appearance is simplified and is not AAA/ultra-realistic. No video generation or paid assets were used. The production-art brief below remains relevant for replacing these prototypes with high-detail rigged assets.

All 16 careers use their own scene, colors and profession props. WebGL failure falls back to the existing labelled concept art. Reduced motion renders a still 3D scene. Only one renderer and active career scene are retained.

## Previous asset handoff

# Electra character animation — asset handoff

## Current state

The preview has **no animated human asset**. The former four-frame image dissolves have been removed. All 16 visuals are static concept art, explicitly labelled in the interface. `career-assets.js` has `video: null` for every profession. Do not describe the preview as a completed AAA animation or interactive 3D.

The implemented video adapter uses only the selected profession, with muted inline looping playback, an underlying still while loading, explicit error fallback, offscreen/tab pause, manual pause, reduced-motion support, and disposal when switching. No production video source is fabricated. A rigged model viewer has not been implemented because no suitable model is available.

## EV first: concrete production brief

Produce an original photorealistic adult Indonesian EV engineer in a cinematic premium electric vehicle service bay. Realistic adult anatomy, detailed skin, modern charcoal workwear, safety shoes, subtle electric-blue accents. Show a stationary EV with its service compartment and a clearly identifiable charging unit; the charger is not connected while service work is performed. No visible exposed live high-voltage handling. Believable tablet and safe diagnostic tool. Human is the visual focus, with full hands visible.

8-second seamless loop, fixed medium-wide camera, no camera zoom or panning:
- 0–2s: natural breathing and subtle weight shift while reading diagnostic tablet.
- 2–4s: eyes and head turn toward the vehicle; natural blink.
- 4–6s: right hand operates a low-voltage diagnostic interface while left hand supports tablet; restrained, physically plausible movement.
- 6–8s: hand, head, and torso return continuously to the exact initial pose.

Preserve face, finger count, tool geometry, vehicle shape and lighting throughout. No dissolves, cuts, text, logos, cartoon features, floating objects, outfit morphing, reversed tools or unsafe electrical contact. Charcoal environment, soft blue practical light, amber rim light, natural contact shadows. A renderer/artist must verify the loop; a generated video is not guaranteed to meet these requirements without review.

## Other profession loops

| ID | Character and activity | Distinct environment |
|---|---|---|
| S10 | Female solar engineer in helmet and field clothing, kneeling; checks panel tilt using inclinometer, reads measurement, returns to initial pose | Ground-mounted PV array; warm daylight |
| S3 | Distribution engineer in task-appropriate PPE scans closed switchgear with thermal camera | Distribution room, closed energized enclosures |
| S6 | Smart-casual auditor reviews measured energy values on tablet and looks toward metering equipment | Commercial building plant room |
| S15 | BESS engineer reads and operates cabinet control screen; natural hand and eye coordination | Closed storage cabinets, status lighting |
| S16 | Automation engineer operates HMI; robot moves smoothly behind a physical safety barrier | Industrial cell; distinctive cool lighting |
| S1 | Installation engineer inspects a de-energized building panel | Building electrical room |
| S2 | Industrial engineer checks a stopped isolated motor using a measurement instrument | Manufacturing maintenance area |
| S4 | Transmission engineer reviews substation observations from a safe walkway | Outdoor high-voltage yard at safe distance |
| S5 | Data scientist alternates between keyboard and energy dashboards | Control analytics workspace |
| S7 | Renewable engineer reviews turbine monitoring data | Wind farm operations station |
| S8 | Safety engineer checks a lockout procedure on isolated equipment | Clearly controlled maintenance zone |
| S9 | Technical sales engineer demonstrates an electrical product to camera | Product demonstration showroom |
| S11 | Sustainability analyst compares emissions measurements on a tablet | Building energy monitoring station |
| S13 | Waste-to-energy engineer reviews process controls | Enclosed plant control room |
| S14 | Hydrogen engineer inspects a remote status display | Controlled hydrogen facility; no open handling |

Every profession needs a distinct face, silhouette, clothing, posture, props, environment and task. Use the same 6–10s smooth loop requirement, not the same animation pasted onto every character.

## Delivery and integration

Preferred source: licensed/original rigged GLB with PBR textures, authored idle/task clips, correct hand/prop constraints and facial morph targets. That route requires implementing and validating a real model renderer after the asset exists.

Accepted alternative implemented here: reviewed MP4 H.264 video render, 24/30 fps, 6–10 seconds, seamless beginning/end, no audio track. Target 1080p desktop with a mobile crop and compressed download; deliver an ordinary poster image as well. Check faces, hands, looping, technical safety and commercial use rights before adding to the site. AI-generated video should be labelled as video animation, not as a freely interactive model.

Place approved video under `/career-scenes/ev-engineer.mp4` and set `ELECTRA_CAREERS.S12.video` to that URL in `career-assets.js`. Repeat per ID only when its own approved asset exists. Currently poster assets are 2×2 concept sheets; the UI crops the first cell. Replace the sheet/crop styling when ordinary posters are delivered.

Higgsfield was discovered as an available, unconnected video-generation integration. A connection is needed before using it here. No credits have been spent, no video created, and no model downloaded during this revision.
