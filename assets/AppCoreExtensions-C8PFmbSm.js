function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { C as CoreExtension, S as SdfTrFontFace } from "./CoreExtension-BeuvW_LH.js";
const basePath = "/solid-demo-app/";
class AppCoreExtension extends CoreExtension {
  async run(stage) {
    stage.fontManager.addFontFace(
      new SdfTrFontFace(
        "Ubuntu",
        { weight: 700 },
        "msdf",
        stage,
        basePath + "fonts/Ubuntu-Bold.msdf.png",
        basePath + "fonts/Ubuntu-Bold.msdf.json"
      )
    );
    stage.fontManager.addFontFace(
      new SdfTrFontFace(
        "Ubuntu",
        { weight: 400 },
        "msdf",
        stage,
        basePath + "fonts/Ubuntu-Regular.msdf.png",
        basePath + "fonts/Ubuntu-Regular.msdf.json"
      )
    );
  }
}
export {
  __vite_legacy_guard,
  AppCoreExtension as default
};
//# sourceMappingURL=AppCoreExtensions-C8PFmbSm.js.map
