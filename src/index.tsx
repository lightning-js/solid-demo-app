import { render, Canvas, Config, SolidNode, SolidRendererOptions, hexColor } from '@lightningjs/solid';
import { Router } from "@solidjs/router";
import App from './pages/App';
import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';
import coreWorkerUrl from './threadx-core-worker.js?importChunkUrl';

Config.debug = false;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = hexColor('#ffffff');
Config.fontSettings.fontSize = 100;

const driver = 'main' as 'main' | 'threadx'; // Use 'main' for main thread-only rendering

render(() =>  (
  <Canvas options={{
    coreExtensionModule: coreExtensionModuleUrl,
    threadXCoreWorkerUrl: driver === 'threadx' ? coreWorkerUrl : undefined,
    // deviceLogicalPixelRatio: 1
  }}>
    <Router>
      <App />
    </Router>
  </Canvas>
));

