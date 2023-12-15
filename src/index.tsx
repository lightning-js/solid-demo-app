import { render, Canvas, Config, SolidNode, SolidRendererOptions, hexColor } from '@lightningjs/solid';
import { HashRouter, Route } from "@solidjs/router";
import App from './pages/App';
import Browse from './pages/Browse';
import Portal from './pages/Portal';
import TextPage from './pages/Text';
import ButtonsPage from './pages/Buttons';
import FlexPage from './pages/Flex';
import FlexSizePage from './pages/FlexSize';
import FlexColumnSizePage from './pages/FlexColumnSize';
import FlexColumnPage from './pages/FlexColumn';
import ButtonsMaterialPage from './pages/ButtonsMaterial';
import Entity from './pages/Entity';
import People from './pages/People';
import NotFound from './pages/NotFound';
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
    <HashRouter root={App}>
      <Route path="" component={Browse} />
      <Route path="examples" component={Portal} />
      <Route path="browse/:filter" component={Browse} />
      <Route path="text" component={TextPage} />
      <Route path="buttons" component={ButtonsPage} />
      <Route path="flex" component={FlexPage} />
      <Route path="flexsize" component={FlexSizePage} />
      <Route path="flexcolumnsize" component={FlexColumnSizePage} />
      <Route path="flexcolumn" component={FlexColumnPage} />
      <Route path="buttonsmaterial" component={ButtonsMaterialPage} />
      <Route path="entity/people/:id" component={People} />
      <Route path="entity/:type/:id" component={Entity} />
      <Route path="*all" component={NotFound} />
    </HashRouter>
    
  </Canvas>
));

