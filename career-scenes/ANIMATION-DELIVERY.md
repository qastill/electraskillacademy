# Electra character animation — asset handoff

## Current implementation

The homepage uses `career-viewer.js` to embed the public Sketchfab model **Worker talk animation** by Bazsi1986. See `CHARACTER-SOURCE.md` for its source, CC BY 4.0 attribution and limitations. One worker with a single body/hand gesture animation is shared by all Academies. The model is not a locally downloaded GLB, and the current viewer does not supply walking, facial animation, profession-specific activities or environments. Actual animation playback in the deployed page has not been visually verified.

The previous procedural `career-three.js` renderer and concept sheets remain in the repository for reference, but that renderer is no longer imported by the homepage. `career-assets.js` still defines the Academy identities; its video fields are not used by the current model viewer.

The viewer adapter handles pause, reduced motion, offscreen/hidden tab state and a labelled local source-thumbnail fallback. Curriculum selection and the full original header are preserved. The briefs below describe outstanding production assets, not features completed by this preview.

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

Preferred delivery: licensed/original rigged GLB per profession with PBR textures, authored idle/task clips, correct hand/prop constraints and facial morph targets. Add a native Three.js GLTFLoader/AnimationMixer adapter only after the assets can be downloaded legitimately and their license permits web delivery. Validate the actual rendered motion, loop, anatomy, props, mobile performance and fallback before calling the result complete.

An accepted alternative is a reviewed MP4 H.264 video render, 24/30 fps, 6–10 seconds, seamless beginning/end, no audio track, with an ordinary poster. That would require a video adapter in place of the current Sketchfab adapter and explicit video labelling. Merely setting a video field in `career-assets.js` does not enable video playback in the current implementation.

No source GLB was downloaded during the latest replacement: the attempted Sketchfab sign-in callback returned HTTP 502. The public embed is used without extracting private viewer assets. No paid generation or asset purchase was performed.
