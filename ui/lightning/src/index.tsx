import {
  render,
  Config,
  SolidNode,
  SolidRendererOptions,
  hexColor,
  ElementNode,
} from "@lightningjs/solid";
import { HashRouter, Route } from "@solidjs/router";
import App from "./pages/App";
import Browse from "./pages/Browse";
import Portal from "./pages/Portal";
import TextPage from "./pages/Text";
import CreatePage from "./pages/Create";
import ViewportPage from "./pages/Viewport";
import ButtonsPage from "./pages/Buttons";
import FlexPage from "./pages/Flex";
import FlexSizePage from "./pages/FlexSize";
import FlexColumnSizePage from "./pages/FlexColumnSize";
import FlexColumnPage from "./pages/FlexColumn";
import ButtonsMaterialPage from "./pages/ButtonsMaterial";
import Entity from "./pages/Entity";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import coreExtensionModuleUrl from "./AppCoreExtensions.js?importChunkUrl";

const logFps = true;
Config.debug = false;
Config.animationsEnabled = true;
Config.fontSettings.fontFamily = "Ubuntu";
Config.fontSettings.color = hexColor("#ffffff");
Config.fontSettings.fontSize = 32;
Config.rendererOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  fpsUpdateInterval: logFps ? 1000 : 0,
  enableInspector: true,
  // deviceLogicalPixelRatio: 1
};

render(() => (
  <HashRouter root={(props) => <App {...props} />}>
    <Route path="" component={Browse} />
    <Route path="examples" component={Portal} />
    <Route path="browse/:filter" component={Browse} />
    <Route path="text" component={TextPage} />
    <Route path="buttons" component={ButtonsPage} />
    <Route path="flex" component={FlexPage} />
    <Route path="create" component={CreatePage} />
    <Route path="viewport" component={ViewportPage} />
    <Route path="flexsize" component={FlexSizePage} />
    <Route path="flexcolumnsize" component={FlexColumnSizePage} />
    <Route path="flexcolumn" component={FlexColumnPage} />
    <Route path="buttonsmaterial" component={ButtonsMaterialPage} />
    <Route path="entity/people/:id" component={People} />
    <Route path="entity/:type/:id" component={Entity} />
    <Route path="*all" component={NotFound} />
  </HashRouter>
));
