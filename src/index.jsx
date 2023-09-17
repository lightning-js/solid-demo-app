import { render, Canvas, Config } from '@lightningjs/solid';
import { Router } from "@solidjs/router";
import App from './pages/App';
import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';

Config.debug = false;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;
Config.fontSettings.fontSize = 100;
Config.keyMap.m = 'Menu';
Config.keyMap.t = 'Text';
Config.keyMap.b = 'Buttons';

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  driver: 'threadx',
  // deviceLogicalPixelRatio: 1
}

render(() =>  (
  <Canvas options={RenderOptions}>
    <Router>
      <App />
    </Router>
  </Canvas>
));

