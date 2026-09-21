# Current character source

The landing page uses the public Sketchfab Viewer API for **Worker talk animation** by **Bazsi1986**:
https://sketchfab.com/3d-models/worker-talk-animation-620e27e5126f40d080c5d4bffab9eedb

License: Creative Commons Attribution 4.0 (https://creativecommons.org/licenses/by/4.0/). Credit and source links are visible immediately below the stage. The unchanged artist-supplied public thumbnail is `worker-poster.jpg` and is used only as a labelled loading/error preview.

The original rigged GLB/FBX was **not downloaded**. The official download requires authentication, and the attempted Google-to-Sketchfab return failed with HTTP 502. No protected model files, cookies, or credentials were extracted. This revision uses the supported public embed, not a local Three.js model or a rendered video.

The source provides one body/hand gesture animation. Its author explicitly states that the eyes and mouth are not animated. It does not include walking, EV repair, solar-panel inspection or other task-specific clips. The same base character currently previews all Academy selections; the complete curriculum still follows the selected Academy. This is not a delivery of 16 unique AAA-quality engineer assets.

The rejected procedural character renderer remains in the repository but is no longer imported by the landing page. The walk/work/idle controls remain hidden because those clips are not supplied by this asset. Pause, reduced-motion and offscreen controls apply to the real source animation.

Only one public viewer is mounted, and it is reused across Academy selections. Loading failures retain a clearly labelled static preview. SDK: https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js (official pinned version). Hosting and model availability depend on Sketchfab. No downloads, purchases or paid subscriptions are required to view the public embed.

To complete the native Three.js version, obtain the rigged model through the official authenticated download, preserve attribution, inspect the rig, and author/retarget appropriate task clips. Do not claim the source's talking gestures are diagnostic or safety procedures.
