import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCareerRenderer } from '../career-viewer.js';

function setup({ animations = [['gesture', 'Talking', 8]] } = {}) {
  const calls = [], frames = [], ready = [];
  globalThis.document = {
    createElement: () => ({ remove() { this.removed = true; } }),
    head: { append() {} }
  };
  const api = {
    addEventListener(event, fn) { if (event === 'viewerready') ready.push(fn); },
    start() { queueMicrotask(() => ready.forEach(fn => fn())); },
    getAnimations(fn) { fn(null, animations); },
    setCurrentAnimationByUID(id, fn) { calls.push(['clip', id]); fn(); },
    setCycleMode(mode) { calls.push(['cycle', mode]); },
    play() { calls.push(['play']); },
    pause() { calls.push(['pause']); }
  };
  globalThis.window = { Sketchfab: class {
    constructor(version, frame) { calls.push(['construct', version]); frames.push(frame); }
    init(id, options) { calls.push(['init', id, options.animation_autoplay]); options.success(api); }
  } };
  return { calls, frames, host: { append() {} } };
}

test('uses the artist animation; one viewer survives repeated Academy selections', async () => {
  const { calls, frames, host } = setup();
  const renderer = createCareerRenderer(host);
  const results = await Promise.all([renderer.select('S12'), renderer.select('S10')]);
  assert.equal(frames.length, 1);
  assert.equal(results[0].animation, 'Talking');
  assert(calls.some(c => c[0] === 'clip' && c[1] === 'gesture'));
  assert(calls.some(c => c[0] === 'cycle' && c[1] === 'loop_all'));
  assert(!calls.some(c => c[0] === 'play'), 'initial load stays paused until controller allows motion');
  renderer.setRunning(true);
  assert.equal(calls.at(-1)[0], 'play');
  renderer.setRunning(false);
  assert.equal(calls.at(-1)[0], 'pause');
  renderer.dispose();
  assert(frames[0].removed);
  renderer.setRunning(true);
  assert.equal(calls.at(-1)[0], 'pause', 'disposed viewer cannot restart');
});

test('rejects a source without animation and removes the failed viewer', async () => {
  const { frames, host } = setup({ animations: [] });
  let failed = false;
  const renderer = createCareerRenderer(host, () => { failed = true; });
  await assert.rejects(renderer.select('S12'), /No usable character animation/);
  assert(failed);
  assert(frames[0].removed);
  renderer.dispose();
});
