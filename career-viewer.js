/* Public Sketchfab viewer. This does not download or extract the model asset. */
const MODEL = '620e27e5126f40d080c5d4bffab9eedb';
const SDK = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
let sdkPromise;

function loadSDK() {
  if (window.Sketchfab) return Promise.resolve(window.Sketchfab);
  if (!sdkPromise) sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = setTimeout(() => {
      script.remove();
      reject(new Error('Viewer SDK timed out'));
    }, 20000);
    script.src = SDK;
    script.async = true;
    script.onload = () => {
      clearTimeout(timeout);
      window.Sketchfab ? resolve(window.Sketchfab) : reject(new Error('Viewer SDK unavailable'));
    };
    script.onerror = () => { clearTimeout(timeout); reject(new Error('Viewer SDK failed to load')); };
    document.head.append(script);
  }).catch(error => { sdkPromise = null; throw error; });
  return sdkPromise;
}

export function createCareerRenderer(host, onFailure) {
  let api, frame, readyPromise, running = false, disposed = false, timer;
  const sync = () => {
    if (!api || disposed) return;
    // Only the source's real animation is exposed; there is no invented walk clip.
    if (running) api.play();
    else api.pause();
  };
  async function load() {
    const Sketchfab = await loadSDK();
    if (disposed) throw new Error('Viewer disposed');
    return new Promise((resolve, reject) => {
      frame = document.createElement('iframe');
      frame.className = 'career-model-viewer';
      frame.title = 'Karakter pekerja 3D beranimasi — Bazsi1986';
      frame.allow = 'autoplay; fullscreen';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      host.append(frame);
      let settled = false;
      function fail(error) {
        if (settled || disposed) return;
        settled = true;
        clearTimeout(timer);
        frame.remove();
        reject(error);
      }
      timer = setTimeout(() => fail(new Error('Model loading timed out')), 60000);
      new Sketchfab('1.12.1', frame).init(MODEL, {
        autostart: 1,
        animation_autoplay: 0,
        camera: 0,
        transparent: 1,
        dnt: 1,
        ui_infos: 0,
        ui_controls: 0,
        ui_hint: 0,
        ui_stop: 0,
        ui_sound: 0,
        success(viewer) {
          if (disposed) return;
          viewer.addEventListener('viewerready', () => {
            if (settled || disposed) return;
            viewer.getAnimations((error, clips) => {
              if (error || !clips?.length) return fail(new Error('No usable character animation'));
              viewer.setCurrentAnimationByUID(clips[0][0], () => {
                if (settled || disposed) return;
                settled = true;
                clearTimeout(timer);
                api = viewer;
                api.setCycleMode('loop_all');
                sync();
                resolve({ provider: 'Sketchfab', animation: clips[0][1] });
              });
            });
          });
          viewer.start();
        },
        error: () => fail(new Error('Public 3D viewer unavailable'))
      });
    });
  }
  return {
    select() {
      if (!readyPromise) readyPromise = load().catch(error => {
        readyPromise = null;
        onFailure?.(error);
        throw error;
      });
      return readyPromise;
    },
    setRunning(value) { running = !!value; sync(); },
    dispose() {
      running = false;
      if (api) api.pause();
      disposed = true;
      clearTimeout(timer);
      frame?.remove();
      api = null;
    }
  };
}
