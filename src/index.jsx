import { render, Canvas, Config } from '@lightningjs/solid';
import { Router } from "@solidjs/router";
import App from './pages/App';
import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';
import coreWorkerUrl from './threadx-core-worker.js?importChunkUrl';

Config.debug = false;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;
Config.fontSettings.fontSize = 100;
Config.keyMap.m = 'Menu';
Config.keyMap.t = 'Text';
Config.keyMap.b = 'Buttons';

const driver = 'threadx'; // Use 'main' for main thread-only rendering

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: driver === 'threadx' ? coreWorkerUrl : undefined,
  // deviceLogicalPixelRatio: 1
}

render(() =>  (
  <Canvas options={RenderOptions}>
    <Router>
      <App />
    </Router>
  </Canvas>
));

