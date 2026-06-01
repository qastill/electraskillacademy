const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
const openIdx = lines.findIndex(l => l.trim() === '<style>'); // blok pertama (~baris 114)
if (openIdx < 0) throw new Error('<style> tidak ketemu');
let closeIdx = -1;
for (let i = openIdx + 1; i < lines.length; i++) { if (lines[i].trim() === '</style>') { closeIdx = i; break; } }
if (closeIdx < 0) throw new Error('</style> tidak ketemu');
console.log('open line', openIdx + 1, 'close line', closeIdx + 1, 'baris CSS:', closeIdx - openIdx - 1);
const css = lines.slice(openIdx + 1, closeIdx).join('\n');
const ob = (css.match(/\{/g) || []).length, cb = (css.match(/\}/g) || []).length;
console.log('brace { } :', ob, cb, ob === cb ? 'BALANCED' : 'MISMATCH');
if (ob !== cb) throw new Error('brace mismatch - abort');
fs.writeFileSync('styles.css', css + '\n');
const link = '<link rel="stylesheet" href="/styles.css">';
fs.writeFileSync('index.html', [...lines.slice(0, openIdx), link, ...lines.slice(closeIdx + 1)].join('\n'));
console.log('OK. styles.css bytes:', fs.statSync('styles.css').size);
