# Realistic catalog artwork

All 120 Library titles and all 73 simulator, virtual-lab and calculator entries resolve to local realistic imagery through `esaCatalogCover` / `esaCatalogArt` in `catalog-art.js`.

Fifteen original portrait illustrations were generated with the built-in image_gen tool. Exact prompts are recorded in `catalog-art-prompts.json`. Production copies are 640 × 960 WebP, quality 82, totaling about 1.1 MB. Related titles and editions share topic artwork and retain their own HTML title, author and edition. Five existing Library cover paintings and relevant existing Academy photographs are reused without modification.

Images are decorative, lazy-loaded, and decoded asynchronously. Fixed card geometry prevents loading shifts. Book titles are selectable HTML, not generated lettering. Failed images reveal the existing inline vector fallback; books retain all metadata. These are editorial cover illustrations, not wiring instructions.

Validation: `node tests/academy-labs.test.mjs` checks every catalog entry, all 16 Academy practice sections, local asset existence and critical topic mapping. Browser checks verify all 120 cover image decodes, title/metadata containment at 1440/390/320px, fallback visibility and original book destinations.
