var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var _a2;
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { a as assertTruthy, i as isProductionEnvironment, T as TrFontFace, g as getRgbaString, c as createBound, E as EventEmitter, b as getNormalizedRgbaComponents, d as intersectBound, e as intersectRect, f as getNormalizedAlphaComponent, m as mergeColorAlphaPremultiplied, W as WebGlCoreShader, h as memize, j as Texture, k as isBoundPositive, l as boundsOverlap, S as SdfTrFontFace, B as BufferCollection, n as convertBoundToRect, o as copyRect, p as WebGlCoreRenderOp, q as mergeColorAlpha, C as CoreExtension, r as getTimingFunction, s as mergeColorProgress, t as boundInsideBound, u as ColorTexture, v as SubTexture, R as RenderTexture, w as WebGlCoreRenderer } from "./CoreExtension-BeuvW_LH.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class TextureUsageTracker {
  constructor(releaseCallback) {
    __publicField(this, "releaseCallback");
    this.releaseCallback = releaseCallback;
  }
}
class ManualCountTextureUsageTracker extends TextureUsageTracker {
  constructor(releaseCallback, options) {
    var _a3, _b2;
    super(releaseCallback);
    __publicField(this, "textureMap", /* @__PURE__ */ new Map());
    __publicField(this, "zeroReferenceTextureSet", /* @__PURE__ */ new Set());
    __publicField(this, "options");
    this.options = {
      textureCleanupIntervalMs: (_a3 = options.textureCleanupIntervalMs) != null ? _a3 : 1e4,
      textureCleanupAgeThreadholdMs: (_b2 = options.textureCleanupAgeThreadholdMs) != null ? _b2 : 6e4
    };
    setInterval(() => {
      const now = Date.now();
      const thresholdMs = this.options.textureCleanupAgeThreadholdMs;
      for (const textureRefInfo of this.zeroReferenceTextureSet) {
        if (now - textureRefInfo.lastUpdate > thresholdMs) {
          this.releaseCallback(textureRefInfo.id);
          this.textureMap.delete(textureRefInfo.id);
          this.zeroReferenceTextureSet.delete(textureRefInfo);
        }
      }
    }, this.options.textureCleanupIntervalMs);
  }
  registerTexture(texture) {
    var _a3;
    const textureId = (_a3 = texture.options) == null ? void 0 : _a3.id;
    assertTruthy(textureId, "Texture must have an id to be registered");
    if (!this.textureMap.has(textureId)) {
      const textureRefInfo = {
        id: textureId,
        nodeRefCount: 0,
        lastUpdate: Date.now()
      };
      this.textureMap.set(textureId, textureRefInfo);
      this.zeroReferenceTextureSet.add(textureRefInfo);
    }
  }
  incrementTextureRefCount(texture) {
    var _a3;
    const textureId = (_a3 = texture.options) == null ? void 0 : _a3.id;
    assertTruthy(textureId, "Texture must have an id to be registered");
    let textureRefInfo = this.textureMap.get(textureId);
    if (!textureRefInfo) {
      this.registerTexture(texture);
      textureRefInfo = this.textureMap.get(textureId);
    }
    assertTruthy(textureRefInfo, "Texture must have been registered");
    if (texture.txType === "SubTexture") {
      this.incrementTextureRefCount(texture.props.texture);
    }
    textureRefInfo.nodeRefCount++;
    textureRefInfo.lastUpdate = Date.now();
    if (this.zeroReferenceTextureSet.has(textureRefInfo)) {
      this.zeroReferenceTextureSet.delete(textureRefInfo);
    }
  }
  decrementTextureRefCount(texture) {
    var _a3;
    const textureId = (_a3 = texture.options) == null ? void 0 : _a3.id;
    assertTruthy(textureId, "Texture must have an id to be registered");
    const textureRefInfo = this.textureMap.get(textureId);
    assertTruthy(textureRefInfo, "Texture must have been registered");
    textureRefInfo.nodeRefCount--;
    textureRefInfo.lastUpdate = Date.now();
    if (textureRefInfo.nodeRefCount === 0) {
      this.zeroReferenceTextureSet.add(textureRefInfo);
    }
    if (texture.txType === "SubTexture") {
      this.decrementTextureRefCount(texture.props.texture);
    }
  }
}
class FinalizationRegistryTextureUsageTracker extends TextureUsageTracker {
  constructor(releaseCallback) {
    super(releaseCallback);
    __publicField(this, "registry");
    this.registry = new FinalizationRegistry(releaseCallback);
  }
  registerTexture(texture) {
    var _a3, _b2;
    assertTruthy((_a3 = texture.options) == null ? void 0 : _a3.id, "Texture must have an ID to be registered");
    this.registry.register(texture, (_b2 = texture.options) == null ? void 0 : _b2.id);
  }
  incrementTextureRefCount() {
  }
  decrementTextureRefCount() {
  }
}
const stylePropertyMap = {
  alpha: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "opacity", value: "".concat(v) };
  },
  x: (x) => {
    return { prop: "left", value: "".concat(x, "px") };
  },
  y: (y) => {
    return { prop: "top", value: "".concat(y, "px") };
  },
  width: (w) => {
    if (w === 0) {
      return null;
    }
    return { prop: "width", value: "".concat(w, "px") };
  },
  height: (h) => {
    if (h === 0) {
      return null;
    }
    return { prop: "height", value: "".concat(h, "px") };
  },
  zIndex: () => "zIndex",
  fontFamily: () => "font-family",
  fontSize: () => "font-size",
  fontStyle: () => "font-style",
  fontWeight: () => "font-weight",
  fontStretch: () => "font-stretch",
  lineHeight: () => "line-height",
  letterSpacing: () => "letter-spacing",
  textAlign: () => "text-align",
  overflowSuffix: () => "overflow-suffix",
  maxLines: () => "max-lines",
  contain: () => "contain",
  verticalAlign: () => "vertical-align",
  clipping: (v) => {
    if (v === false) {
      return null;
    }
    return { prop: "overflow", value: v ? "hidden" : "visible" };
  },
  rotation: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "transform", value: "rotate(".concat(v, "rad)") };
  },
  scale: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scale(".concat(v, ")") };
  },
  scaleX: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleX(".concat(v, ")") };
  },
  scaleY: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleY(".concat(v, ")") };
  },
  color: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "color", value: convertColorToRgba(v) };
  }
};
const convertColorToRgba = (color) => {
  const a = (color & 255) / 255;
  const b = color >> 8 & 255;
  const g = color >> 16 & 255;
  const r = color >> 24 & 255;
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
};
const domPropertyMap = {
  id: "id"
};
class Inspector {
  constructor(canvas, settings) {
    __publicField(this, "root", null);
    __publicField(this, "canvas", null);
    __publicField(this, "height", 1080);
    __publicField(this, "width", 1920);
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    var _a3, _b2, _c2, _d2, _e2, _f2;
    if (isProductionEnvironment())
      return;
    if (!settings) {
      throw new Error("settings is required");
    }
    this.height = Math.ceil((_b2 = settings.appHeight) != null ? _b2 : 1080 / ((_a3 = settings.deviceLogicalPixelRatio) != null ? _a3 : 1));
    this.width = Math.ceil((_d2 = settings.appWidth) != null ? _d2 : 1900 / ((_c2 = settings.deviceLogicalPixelRatio) != null ? _c2 : 1));
    this.scaleX = (_e2 = settings.deviceLogicalPixelRatio) != null ? _e2 : 1;
    this.scaleY = (_f2 = settings.deviceLogicalPixelRatio) != null ? _f2 : 1;
    this.canvas = canvas;
    this.root = document.createElement("div");
    this.setRootPosition();
    document.body.appendChild(this.root);
    const mutationObserver = new MutationObserver(this.setRootPosition.bind(this));
    mutationObserver.observe(canvas, {
      attributes: true,
      childList: false,
      subtree: false
    });
    const resizeObserver = new ResizeObserver(this.setRootPosition.bind(this));
    resizeObserver.observe(canvas);
    window.addEventListener("resize", this.setRootPosition.bind(this));
    console.warn("Inspector is enabled, this will impact performance");
  }
  setRootPosition() {
    if (this.root === null || this.canvas === null) {
      return;
    }
    const rect = this.canvas.getBoundingClientRect();
    const top = document.documentElement.scrollTop + rect.top;
    const left = document.documentElement.scrollLeft + rect.left;
    this.root.id = "root";
    this.root.style.left = "".concat(left, "px");
    this.root.style.top = "".concat(top, "px");
    this.root.style.width = "".concat(this.width, "px");
    this.root.style.height = "".concat(this.height, "px");
    this.root.style.position = "absolute";
    this.root.style.transformOrigin = "0 0 0";
    this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")");
    this.root.style.overflow = "hidden";
    this.root.style.zIndex = "65534";
  }
  createDiv(node, properties) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.id = node.id.toString();
    for (const key2 in properties) {
      this.updateNodeProperty(
        div,
        // really typescript? really?
        key2,
        properties[key2]
      );
    }
    return div;
  }
  createNode(driver, properties) {
    const node = driver.createNode(properties);
    const div = this.createDiv(node, properties);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createTextNode(driver, properties) {
    const node = driver.createTextNode(properties);
    const div = this.createDiv(node, properties);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createProxy(node, div) {
    return new Proxy(node, {
      set: (target, property, value) => {
        this.updateNodeProperty(div, property, value);
        return Reflect.set(target, property, value);
      },
      get: (target, property, receiver) => {
        if (property === "destroy") {
          this.destroyNode(target);
        }
        if (property === "animate") {
          return (props, settings) => {
            const anim = target.animate(props, settings);
            return new Proxy(anim, {
              get: (target2, property2, receiver2) => {
                if (property2 === "start") {
                  this.animateNode(div, node, props, settings);
                }
                return Reflect.get(target2, property2, receiver2);
              }
            });
          };
        }
        return Reflect.get(target, property, receiver);
      }
    });
  }
  destroyNode(node) {
    const div = document.getElementById(node.id.toString());
    div == null ? void 0 : div.remove();
  }
  updateNodeProperty(div, property, value) {
    var _a3;
    if (this.root === null || value === void 0 || value === null) {
      return;
    }
    if (property === "parent") {
      const parentId = value.id;
      if (parentId === 1) {
        this.root.appendChild(div);
        return;
      }
      const parent = document.getElementById(parentId.toString());
      parent == null ? void 0 : parent.appendChild(div);
      return;
    }
    if (property === "text") {
      div.innerHTML = String(value);
      div.style.visibility = "hidden";
      return;
    }
    if (property === "src" && value) {
      div.setAttribute("data-src", String(value));
      return;
    }
    if (stylePropertyMap[property]) {
      const mappedStyleResponse = (_a3 = stylePropertyMap[property]) == null ? void 0 : _a3.call(stylePropertyMap, value);
      if (mappedStyleResponse === null) {
        return;
      }
      if (typeof mappedStyleResponse === "string") {
        div.style.setProperty(mappedStyleResponse, String(value));
        return;
      }
      if (typeof mappedStyleResponse === "object") {
        div.style.setProperty(mappedStyleResponse.prop, mappedStyleResponse.value);
      }
      return;
    }
    if (domPropertyMap[property]) {
      div.setAttribute(String(stylePropertyMap[property]), String(value));
      return;
    }
    if (property === "data") {
      for (const key2 in value) {
        div.setAttribute("data-".concat(key2), String(value[key2]));
      }
      return;
    }
  }
  // simple animation handler
  animateNode(div, node, props, settings) {
    const {
      duration = 1e3,
      delay: delay2 = 0
      // easing = 'linear',
      // repeat = 0,
      // loop = false,
      // stopMethod = false,
    } = settings;
    const { x, y, width, height, alpha = 1, rotation = 0, scale = 1, color } = props;
    function animate() {
      setTimeout(() => {
        div.style.top = "".concat(y, "px");
        div.style.left = "".concat(x, "px");
        div.style.width = "".concat(width, "px");
        div.style.height = "".concat(height, "px");
        div.style.opacity = "".concat(alpha);
        div.style.rotate = "".concat(rotation, "rad");
        div.style.scale = "".concat(scale);
        div.style.color = convertColorToRgba(color);
      }, duration);
    }
    setTimeout(animate, delay2);
  }
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/solid-demo-app/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector('link[href="'.concat(dep, '"]').concat(cssSelector))) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error("Unable to preload CSS for ".concat(dep))));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
class ShaderEffect {
  constructor(options) {
    __publicField(this, "priority", 1);
    __publicField(this, "name", "");
    __publicField(this, "ref");
    __publicField(this, "target");
    __publicField(this, "passParameters", "");
    __publicField(this, "declaredUniforms", "");
    __publicField(this, "uniformInfo", {});
    const { ref, target, props = {} } = options;
    this.ref = ref;
    this.target = target;
    const uniformInfo = {};
    const passParameters = [];
    let declaredUniforms = "";
    const uniforms = this.constructor.uniforms || {};
    for (const u in uniforms) {
      const unif = uniforms[u];
      const uniType = unif.type;
      const uniformName = "".concat(ref, "_").concat(u);
      let define = "";
      if (unif.size) {
        define = "[".concat(unif.size(props), "]");
      }
      passParameters.push(uniformName);
      declaredUniforms += "uniform ".concat(uniType, " ").concat(uniformName).concat(define, ";");
      uniformInfo[u] = { name: uniformName, uniform: uniforms[u].method };
    }
    this.passParameters = passParameters.join(",");
    this.declaredUniforms = declaredUniforms;
    this.uniformInfo = uniformInfo;
  }
  static getEffectKey(props) {
    return "";
  }
  static getMethodParameters(uniforms, props) {
    const res = [];
    for (const u in uniforms) {
      const uni = uniforms[u];
      let define = "";
      if (uni.size) {
        define = "[".concat(uni.size(props), "]");
      }
      res.push("".concat(uni.type, " ").concat(u).concat(define));
    }
    return res.join(",");
  }
  static resolveDefaults(props) {
    return {};
  }
  static makeEffectKey(props) {
    return false;
  }
}
__publicField(ShaderEffect, "uniforms", {});
__publicField(ShaderEffect, "methods");
__publicField(ShaderEffect, "onShaderMask");
__publicField(ShaderEffect, "onColorize");
__publicField(ShaderEffect, "onEffectMask");
const trPropSetterDefaults = {
  x: (state, value) => {
    state.props.x = value;
  },
  y: (state, value) => {
    state.props.y = value;
  },
  width: (state, value) => {
    state.props.width = value;
  },
  height: (state, value) => {
    state.props.height = value;
  },
  color: (state, value) => {
    state.props.color = value;
  },
  zIndex: (state, value) => {
    state.props.zIndex = value;
  },
  fontFamily: (state, value) => {
    state.props.fontFamily = value;
  },
  fontWeight: (state, value) => {
    state.props.fontWeight = value;
  },
  fontStyle: (state, value) => {
    state.props.fontStyle = value;
  },
  fontStretch: (state, value) => {
    state.props.fontStretch = value;
  },
  fontSize: (state, value) => {
    state.props.fontSize = value;
  },
  text: (state, value) => {
    state.props.text = value;
  },
  textAlign: (state, value) => {
    state.props.textAlign = value;
  },
  contain: (state, value) => {
    state.props.contain = value;
  },
  offsetY: (state, value) => {
    state.props.offsetY = value;
  },
  scrollable: (state, value) => {
    state.props.scrollable = value;
  },
  scrollY: (state, value) => {
    state.props.scrollY = value;
  },
  letterSpacing: (state, value) => {
    state.props.letterSpacing = value;
  },
  lineHeight: (state, value) => {
    state.props.lineHeight = value;
  },
  maxLines: (state, value) => {
    state.props.maxLines = value;
  },
  textBaseline: (state, value) => {
    state.props.textBaseline = value;
  },
  verticalAlign: (state, value) => {
    state.props.verticalAlign = value;
  },
  overflowSuffix: (state, value) => {
    state.props.overflowSuffix = value;
  },
  debug: (state, value) => {
    state.props.debug = value;
  }
};
class TextRenderer {
  constructor(stage) {
    __publicField(this, "stage");
    __publicField(this, "set");
    this.stage = stage;
    const propSetters = {
      ...trPropSetterDefaults,
      ...this.getPropertySetters()
    };
    this.set = Object.freeze(Object.fromEntries(Object.entries(propSetters).map(([key2, setter]) => {
      return [
        key2,
        (state, value) => {
          if (state.props[key2] !== value) {
            setter(state, value);
            this.stage.requestRender();
          }
        }
      ];
    })));
  }
  setStatus(state, status, error) {
    if (state.status === status) {
      return;
    }
    state.status = status;
    state.emitter.emit(status, error);
  }
  /**
   * Allows the CoreTextNode to communicate changes to the isRenderable state of
   * the itself.
   *
   * @param state
   * @param renderable
   */
  setIsRenderable(state, renderable) {
    state.isRenderable = renderable;
  }
  /**
   * Destroy/Clean up the state object
   *
   * @remarks
   * Opposite of createState(). Frees any event listeners / resources held by
   * the state that may not reliably get garbage collected.
   *
   * @param state
   */
  destroyState(state) {
    const stateEvents = ["loading", "loaded", "failed"];
    stateEvents.forEach((eventName) => {
      state.emitter.off(eventName);
    });
  }
  /**
   * Schedule a state update via queueMicrotask
   *
   * @remarks
   * This method is used to schedule a state update via queueMicrotask. This
   * method should be called whenever a state update is needed, and it will
   * ensure that the state is only updated once per microtask.
   * @param state
   * @returns
   */
  scheduleUpdateState(state) {
    if (state.updateScheduled) {
      return;
    }
    state.updateScheduled = true;
    queueMicrotask(() => {
      state.updateScheduled = false;
      this.updateState(state);
    });
  }
}
class WebTrFontFace extends TrFontFace {
  constructor(fontFamily, descriptors, fontUrl) {
    super(fontFamily, descriptors);
    __publicField(this, "fontFace");
    __publicField(this, "fontUrl");
    const fontUrlWithoutParentheses = fontUrl.replace(/\(|\)/g, "");
    const determinedDescriptors = this.descriptors;
    const cssDescriptors = {
      style: determinedDescriptors.style,
      weight: typeof determinedDescriptors.weight === "number" ? "".concat(determinedDescriptors.weight) : determinedDescriptors.weight,
      stretch: determinedDescriptors.stretch,
      unicodeRange: determinedDescriptors.unicodeRange,
      variant: determinedDescriptors.variant,
      featureSettings: determinedDescriptors.featureSettings,
      display: determinedDescriptors.display
    };
    const fontFace = new FontFace(fontFamily, "url(".concat(fontUrlWithoutParentheses, ")"), cssDescriptors);
    fontFace.load().then(() => {
      this.loaded = true;
      this.emit("loaded");
    }).catch(console.error);
    this.fontFace = fontFace;
    this.fontUrl = fontUrl;
  }
}
const MAX_TEXTURE_DIMENSION = 2048;
function calcHeight(textBaseline, fontSize, lineHeight, numLines, offsetY) {
  const baselineOffset = textBaseline !== "bottom" ? 0.5 * fontSize : 0;
  return lineHeight * (numLines - 1) + baselineOffset + Math.max(lineHeight, fontSize) + (offsetY || 0);
}
class LightningTextTextureRenderer {
  constructor(canvas, context) {
    __publicField(this, "_canvas");
    __publicField(this, "_context");
    __publicField(this, "_settings");
    __publicField(this, "renderInfo");
    this._canvas = canvas;
    this._context = context;
    this._settings = this.mergeDefaults({});
  }
  set settings(v) {
    this._settings = this.mergeDefaults(v);
  }
  get settings() {
    return this._settings;
  }
  getPrecision() {
    return this._settings.precision;
  }
  setFontProperties() {
    this._context.font = this._getFontSetting();
    this._context.textBaseline = this._settings.textBaseline;
  }
  _getFontSetting() {
    const ff = [this._settings.fontFace];
    const ffs = [];
    for (let i = 0, n = ff.length; i < n; i++) {
      if (ff[i] === "serif" || ff[i] === "sans-serif") {
        ffs.push(ff[i]);
      } else {
        ffs.push('"'.concat(ff[i], '"'));
      }
    }
    return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(ffs.join(","));
  }
  _load() {
    if (document.fonts) {
      const fontSetting = this._getFontSetting();
      try {
        if (!document.fonts.check(fontSetting, this._settings.text)) {
          return document.fonts.load(fontSetting, this._settings.text).catch((err) => {
            console.warn("[Lightning] Font load error", err, fontSetting);
          }).then(() => {
            if (!document.fonts.check(fontSetting, this._settings.text)) {
              console.warn("[Lightning] Font not found", fontSetting);
            }
          });
        }
      } catch (e) {
        console.warn("[Lightning] Can't check font loading for " + fontSetting);
      }
    }
  }
  calculateRenderInfo() {
    const renderInfo = {};
    const precision = this.getPrecision();
    const paddingLeft = this._settings.paddingLeft * precision;
    const paddingRight = this._settings.paddingRight * precision;
    const fontSize = this._settings.fontSize * precision;
    let offsetY = this._settings.offsetY === null ? null : this._settings.offsetY * precision;
    let lineHeight = (this._settings.lineHeight || fontSize) * precision;
    const w = this._settings.w * precision;
    const h = this._settings.h * precision;
    let wordWrapWidth = this._settings.wordWrapWidth * precision;
    const cutSx = this._settings.cutSx * precision;
    const cutEx = this._settings.cutEx * precision;
    const cutSy = this._settings.cutSy * precision;
    const cutEy = this._settings.cutEy * precision;
    const letterSpacing = (this._settings.letterSpacing || 0) * precision;
    const textIndent = this._settings.textIndent * precision;
    this.setFontProperties();
    let width = w || 2048 / this.getPrecision();
    let innerWidth = width - paddingLeft;
    if (innerWidth < 10) {
      width += 10 - innerWidth;
      innerWidth = 10;
    }
    if (!wordWrapWidth) {
      wordWrapWidth = innerWidth;
    }
    if (this._settings.textOverflow && !this._settings.wordWrap) {
      let suffix;
      switch (this._settings.textOverflow) {
        case "clip":
          suffix = "";
          break;
        case "ellipsis":
          suffix = this._settings.overflowSuffix;
          break;
        default:
          suffix = this._settings.textOverflow;
      }
      this._settings.text = this.wrapWord(this._settings.text, wordWrapWidth - textIndent, suffix);
    }
    let linesInfo;
    if (this._settings.wordWrap) {
      linesInfo = this.wrapText(this._settings.text, wordWrapWidth, letterSpacing, textIndent);
    } else {
      linesInfo = { l: this._settings.text.split(/(?:\r\n|\r|\n)/), n: [] };
      const n = linesInfo.l.length;
      for (let i = 0; i < n - 1; i++) {
        linesInfo.n.push(i);
      }
    }
    let lines = linesInfo.l;
    if (this._settings.maxLines && lines.length > this._settings.maxLines) {
      const usedLines = lines.slice(0, this._settings.maxLines);
      let otherLines = null;
      if (this._settings.overflowSuffix) {
        const w2 = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0;
        const al = this.wrapText(usedLines[usedLines.length - 1], wordWrapWidth - w2, letterSpacing, textIndent);
        usedLines[usedLines.length - 1] = "".concat(al.l[0]).concat(this._settings.overflowSuffix);
        otherLines = [al.l.length > 1 ? al.l[1] : ""];
      } else {
        otherLines = [""];
      }
      let i;
      const n = lines.length;
      let j = 0;
      const m = linesInfo.n.length;
      for (i = this._settings.maxLines; i < n; i++) {
        otherLines[j] += "".concat(otherLines[j] ? " " : "").concat(lines[i]);
        if (i + 1 < m && linesInfo.n[i + 1]) {
          j++;
        }
      }
      renderInfo.remainingText = otherLines.join("\n");
      renderInfo.moreTextLines = true;
      lines = usedLines;
    } else {
      renderInfo.moreTextLines = false;
      renderInfo.remainingText = "";
    }
    let maxLineWidth = 0;
    const lineWidths = [];
    for (let i = 0; i < lines.length; i++) {
      const lineWidth = this.measureText(lines[i], letterSpacing) + (i === 0 ? textIndent : 0);
      lineWidths.push(lineWidth);
      maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }
    renderInfo.lineWidths = lineWidths;
    if (!w) {
      width = maxLineWidth + paddingLeft + paddingRight;
      innerWidth = maxLineWidth;
    }
    lineHeight = lineHeight || fontSize;
    let height;
    if (h) {
      height = h;
    } else {
      height = calcHeight(this._settings.textBaseline, fontSize, lineHeight, lines.length, offsetY);
    }
    if (offsetY === null) {
      offsetY = fontSize;
    }
    renderInfo.w = width;
    renderInfo.h = height;
    renderInfo.lines = lines;
    renderInfo.precision = precision;
    if (!width) {
      width = 1;
    }
    if (!height) {
      height = 1;
    }
    if (cutSx || cutEx) {
      width = Math.min(width, cutEx - cutSx);
    }
    if (cutSy || cutEy) {
      height = Math.min(height, cutEy - cutSy);
    }
    renderInfo.width = width;
    renderInfo.innerWidth = innerWidth;
    renderInfo.height = height;
    renderInfo.fontSize = fontSize;
    renderInfo.cutSx = cutSx;
    renderInfo.cutSy = cutSy;
    renderInfo.cutEx = cutEx;
    renderInfo.cutEy = cutEy;
    renderInfo.lineHeight = lineHeight;
    renderInfo.lineWidths = lineWidths;
    renderInfo.offsetY = offsetY;
    renderInfo.paddingLeft = paddingLeft;
    renderInfo.paddingRight = paddingRight;
    renderInfo.letterSpacing = letterSpacing;
    renderInfo.textIndent = textIndent;
    return renderInfo;
  }
  draw(renderInfo, linesOverride) {
    const precision = this.getPrecision();
    const lines = (linesOverride == null ? void 0 : linesOverride.lines) || renderInfo.lines;
    const lineWidths = (linesOverride == null ? void 0 : linesOverride.lineWidths) || renderInfo.lineWidths;
    const height = linesOverride ? calcHeight(this._settings.textBaseline, renderInfo.fontSize, renderInfo.lineHeight, linesOverride.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * precision) : renderInfo.height;
    this._canvas.width = Math.min(Math.ceil(renderInfo.width + this._settings.textRenderIssueMargin), MAX_TEXTURE_DIMENSION);
    this._canvas.height = Math.min(Math.ceil(height), MAX_TEXTURE_DIMENSION);
    this.setFontProperties();
    if (renderInfo.fontSize >= 128) {
      this._context.globalAlpha = 0.01;
      this._context.fillRect(0, 0, 0.01, 0.01);
      this._context.globalAlpha = 1;
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
    }
    let linePositionX;
    let linePositionY;
    const drawLines = [];
    for (let i = 0, n = lines.length; i < n; i++) {
      linePositionX = i === 0 ? renderInfo.textIndent : 0;
      linePositionY = i * renderInfo.lineHeight + renderInfo.offsetY;
      if (this._settings.verticalAlign == "middle") {
        linePositionY += (renderInfo.lineHeight - renderInfo.fontSize) / 2;
      } else if (this._settings.verticalAlign == "bottom") {
        linePositionY += renderInfo.lineHeight - renderInfo.fontSize;
      }
      if (this._settings.textAlign === "right") {
        linePositionX += renderInfo.innerWidth - lineWidths[i];
      } else if (this._settings.textAlign === "center") {
        linePositionX += (renderInfo.innerWidth - lineWidths[i]) / 2;
      }
      linePositionX += renderInfo.paddingLeft;
      drawLines.push({
        text: lines[i],
        x: linePositionX,
        y: linePositionY,
        w: lineWidths[i]
      });
    }
    if (this._settings.highlight) {
      const color = this._settings.highlightColor;
      const hlHeight = this._settings.highlightHeight * precision || renderInfo.fontSize * 1.5;
      const offset = this._settings.highlightOffset * precision;
      const hlPaddingLeft = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * precision : renderInfo.paddingLeft;
      const hlPaddingRight = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * precision : renderInfo.paddingRight;
      this._context.fillStyle = getRgbaString(color);
      for (let i = 0; i < drawLines.length; i++) {
        const drawLine = drawLines[i];
        this._context.fillRect(drawLine.x - hlPaddingLeft, drawLine.y - renderInfo.offsetY + offset, drawLine.w + hlPaddingRight + hlPaddingLeft, hlHeight);
      }
    }
    let prevShadowSettings = null;
    if (this._settings.shadow) {
      prevShadowSettings = [
        this._context.shadowColor,
        this._context.shadowOffsetX,
        this._context.shadowOffsetY,
        this._context.shadowBlur
      ];
      this._context.shadowColor = getRgbaString(this._settings.shadowColor);
      this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
      this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
      this._context.shadowBlur = this._settings.shadowBlur * precision;
    }
    this._context.fillStyle = getRgbaString(this._settings.textColor);
    for (let i = 0, n = drawLines.length; i < n; i++) {
      const drawLine = drawLines[i];
      if (renderInfo.letterSpacing === 0) {
        this._context.fillText(drawLine.text, drawLine.x, drawLine.y);
      } else {
        const textSplit = drawLine.text.split("");
        let x = drawLine.x;
        for (let i2 = 0, j = textSplit.length; i2 < j; i2++) {
          this._context.fillText(textSplit[i2], x, drawLine.y);
          x += this.measureText(textSplit[i2], renderInfo.letterSpacing);
        }
      }
    }
    if (prevShadowSettings) {
      this._context.shadowColor = prevShadowSettings[0];
      this._context.shadowOffsetX = prevShadowSettings[1];
      this._context.shadowOffsetY = prevShadowSettings[2];
      this._context.shadowBlur = prevShadowSettings[3];
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(renderInfo.cutSx, renderInfo.cutSy);
    }
    this.renderInfo = renderInfo;
  }
  wrapWord(word, wordWrapWidth, suffix) {
    const suffixWidth = this._context.measureText(suffix).width;
    const wordLen = word.length;
    const wordWidth = this._context.measureText(word).width;
    if (wordWidth <= wordWrapWidth) {
      return word;
    }
    let cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
    let truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
    if (truncWordWidth > wordWrapWidth) {
      while (cutoffIndex > 0) {
        truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
        if (truncWordWidth > wordWrapWidth) {
          cutoffIndex -= 1;
        } else {
          break;
        }
      }
    } else {
      while (cutoffIndex < wordLen) {
        truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
        if (truncWordWidth < wordWrapWidth) {
          cutoffIndex += 1;
        } else {
          cutoffIndex -= 1;
          break;
        }
      }
    }
    return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : "");
  }
  /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   */
  wrapText(text2, wordWrapWidth, letterSpacing, indent = 0) {
    const lines = text2.split(/\r?\n/g);
    let allLines = [];
    const realNewlines = [];
    for (let i = 0; i < lines.length; i++) {
      const resultLines = [];
      let result = "";
      let spaceLeft = wordWrapWidth - indent;
      const words = lines[i].split(" ");
      for (let j = 0; j < words.length; j++) {
        const wordWidth = this.measureText(words[j], letterSpacing);
        const wordWidthWithSpace = wordWidth + this.measureText(" ", letterSpacing);
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            resultLines.push(result);
            result = "";
          }
          result += words[j];
          spaceLeft = wordWrapWidth - wordWidth - (j === 0 ? indent : 0);
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += " ".concat(words[j]);
        }
      }
      resultLines.push(result);
      result = "";
      allLines = allLines.concat(resultLines);
      if (i < lines.length - 1) {
        realNewlines.push(allLines.length);
      }
    }
    return { l: allLines, n: realNewlines };
  }
  measureText(word, space = 0) {
    if (!space) {
      return this._context.measureText(word).width;
    }
    return word.split("").reduce((acc, char) => {
      return acc + this._context.measureText(char).width + space;
    }, 0);
  }
  mergeDefaults(settings) {
    return {
      text: "",
      w: 0,
      h: 0,
      fontStyle: "normal",
      fontSize: 40,
      fontFace: null,
      wordWrap: true,
      wordWrapWidth: 0,
      wordBreak: false,
      textOverflow: "",
      lineHeight: null,
      textBaseline: "alphabetic",
      textAlign: "left",
      verticalAlign: "top",
      offsetY: null,
      maxLines: 0,
      overflowSuffix: "...",
      textColor: [1, 1, 1, 1],
      paddingLeft: 0,
      paddingRight: 0,
      shadow: false,
      shadowColor: [0, 0, 0, 1],
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 5,
      highlight: false,
      highlightHeight: 0,
      highlightColor: [0, 0, 0, 1],
      highlightOffset: 0,
      highlightPaddingLeft: 0,
      highlightPaddingRight: 0,
      letterSpacing: 0,
      textIndent: 0,
      cutSx: 0,
      cutEx: 0,
      cutSy: 0,
      cutEy: 0,
      advancedRenderer: false,
      fontBaselineRatio: 0,
      precision: 1,
      textRenderIssueMargin: 0,
      ...settings
    };
  }
}
const resolvedGlobal = typeof self === "undefined" ? globalThis : self;
const globalFontSet = ((_a2 = resolvedGlobal.document) == null ? void 0 : _a2.fonts) || resolvedGlobal.fonts;
function getFontCssString(props) {
  const { fontFamily, fontStyle, fontWeight, fontStretch, fontSize } = props;
  return [fontStyle, fontWeight, fontStretch, "".concat(fontSize, "px"), fontFamily].join(" ");
}
const tmpElementBounds = createBound(0, 0, 0, 0);
class CanvasTextRenderer extends TextRenderer {
  constructor(stage) {
    super(stage);
    __publicField(this, "canvas");
    __publicField(this, "context");
    __publicField(this, "rendererBounds");
    if (typeof OffscreenCanvas !== "undefined") {
      this.canvas = new OffscreenCanvas(0, 0);
    } else {
      this.canvas = document.createElement("canvas");
    }
    let context = this.canvas.getContext("2d");
    if (!context) {
      this.canvas = document.createElement("canvas");
      context = this.canvas.getContext("2d");
    }
    assertTruthy(context);
    this.context = context;
    this.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: this.stage.options.appWidth,
      y2: this.stage.options.appHeight
    };
  }
  //#region Overrides
  getPropertySetters() {
    return {
      fontFamily: (state, value) => {
        state.props.fontFamily = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontWeight: (state, value) => {
        state.props.fontWeight = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontStyle: (state, value) => {
        state.props.fontStyle = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontStretch: (state, value) => {
        state.props.fontStretch = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontSize: (state, value) => {
        state.props.fontSize = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      text: (state, value) => {
        state.props.text = value;
        this.invalidateLayoutCache(state);
      },
      textAlign: (state, value) => {
        state.props.textAlign = value;
        this.invalidateLayoutCache(state);
      },
      color: (state, value) => {
        state.props.color = value;
        this.invalidateLayoutCache(state);
      },
      x: (state, value) => {
        state.props.x = value;
        this.invalidateVisibleWindowCache(state);
      },
      y: (state, value) => {
        state.props.y = value;
        this.invalidateVisibleWindowCache(state);
      },
      contain: (state, value) => {
        state.props.contain = value;
        this.invalidateLayoutCache(state);
      },
      width: (state, value) => {
        state.props.width = value;
        if (state.props.contain !== "none") {
          this.invalidateLayoutCache(state);
        }
      },
      height: (state, value) => {
        state.props.height = value;
        if (state.props.contain === "both") {
          this.invalidateLayoutCache(state);
        }
      },
      offsetY: (state, value) => {
        state.props.offsetY = value;
        this.invalidateLayoutCache(state);
      },
      scrollY: (state, value) => {
        state.props.scrollY = value;
      },
      letterSpacing: (state, value) => {
        state.props.letterSpacing = value;
        this.invalidateLayoutCache(state);
      },
      lineHeight: (state, value) => {
        state.props.lineHeight = value;
        this.invalidateLayoutCache(state);
      },
      maxLines: (state, value) => {
        state.props.maxLines = value;
        this.invalidateLayoutCache(state);
      },
      textBaseline: (state, value) => {
        state.props.textBaseline = value;
        this.invalidateLayoutCache(state);
      },
      verticalAlign: (state, value) => {
        state.props.verticalAlign = value;
        this.invalidateLayoutCache(state);
      },
      overflowSuffix: (state, value) => {
        state.props.overflowSuffix = value;
        this.invalidateLayoutCache(state);
      }
      // debug: (state, value) => {
      //   state.props.debug = value;
      // },
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canRenderFont(props) {
    return true;
  }
  isFontFaceSupported(fontFace) {
    return fontFace instanceof WebTrFontFace;
  }
  addFontFace(fontFace) {
    assertTruthy(fontFace instanceof WebTrFontFace);
    globalFontSet.add(fontFace.fontFace);
  }
  createState(props) {
    return {
      props,
      status: "initialState",
      updateScheduled: false,
      emitter: new EventEmitter(),
      canvasPages: void 0,
      lightning2TextRenderer: new LightningTextTextureRenderer(this.canvas, this.context),
      renderWindow: void 0,
      visibleWindow: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        valid: false
      },
      renderInfo: void 0,
      forceFullLayoutCalc: false,
      textW: 0,
      textH: 0,
      fontInfo: void 0,
      fontFaceLoadedHandler: void 0,
      isRenderable: false,
      debugData: {
        updateCount: 0,
        layoutCount: 0,
        drawCount: 0,
        lastLayoutNumCharacters: 0,
        layoutSum: 0,
        drawSum: 0,
        bufferSize: 0
      }
    };
  }
  updateState(state) {
    var _a3, _b2;
    if (state.status === "initialState") {
      this.setStatus(state, "loading");
    }
    if (!state.fontInfo) {
      const cssString = getFontCssString(state.props);
      state.fontInfo = {
        cssString,
        // TODO: For efficiency we would use this here but it's not reliable on WPE -> document.fonts.check(cssString),
        loaded: false
      };
      if (!state.fontInfo.loaded) {
        globalFontSet.load(cssString).then(this.onFontLoaded.bind(this, state, cssString)).catch(this.onFontLoadError.bind(this, state, cssString));
        return;
      }
    }
    if (!state.fontInfo.loaded) {
      return;
    }
    if (!state.renderInfo) {
      const maxLines = state.props.maxLines;
      const containedMaxLines = state.props.contain === "both" ? Math.floor((state.props.height - state.props.offsetY) / state.props.lineHeight) : 0;
      const calcMaxLines = containedMaxLines > 0 && maxLines > 0 ? Math.min(containedMaxLines, maxLines) : Math.max(containedMaxLines, maxLines);
      state.lightning2TextRenderer.settings = {
        text: state.props.text,
        textAlign: state.props.textAlign,
        fontFace: state.props.fontFamily,
        fontSize: state.props.fontSize,
        fontStyle: [
          state.props.fontStretch,
          state.props.fontStyle,
          state.props.fontWeight
        ].join(" "),
        textColor: getNormalizedRgbaComponents(state.props.color),
        offsetY: state.props.fontSize + state.props.offsetY,
        wordWrap: state.props.contain !== "none",
        wordWrapWidth: state.props.contain === "none" ? void 0 : state.props.width,
        letterSpacing: state.props.letterSpacing,
        lineHeight: state.props.lineHeight,
        maxLines: calcMaxLines,
        textBaseline: state.props.textBaseline,
        verticalAlign: state.props.verticalAlign,
        overflowSuffix: state.props.overflowSuffix
      };
      state.renderInfo = state.lightning2TextRenderer.calculateRenderInfo();
      state.textH = state.renderInfo.lineHeight * state.renderInfo.lines.length;
      state.textW = state.renderInfo.width;
      state.renderWindow = void 0;
    }
    const { x, y, width, height, scrollY, contain } = state.props;
    const { visibleWindow } = state;
    let { renderWindow, canvasPages } = state;
    if (!visibleWindow.valid) {
      const elementBounds = createBound(x, y, contain !== "none" ? x + width : Infinity, contain === "both" ? y + height : Infinity, tmpElementBounds);
      intersectBound(this.rendererBounds, elementBounds, visibleWindow);
      visibleWindow.valid = true;
    }
    const visibleWindowHeight = visibleWindow.y2 - visibleWindow.y1;
    const maxLinesPerCanvasPage = Math.ceil(visibleWindowHeight / state.renderInfo.lineHeight);
    if (visibleWindowHeight === 0) {
      canvasPages = void 0;
      renderWindow = void 0;
      this.setStatus(state, "loaded");
      return;
    } else if (renderWindow && canvasPages) {
      const renderWindowScreenX1 = x + renderWindow.x1;
      const renderWindowScreenY1 = y - scrollY + renderWindow.y1;
      const renderWindowScreenX2 = x + renderWindow.x2;
      const renderWindowScreenY2 = y - scrollY + renderWindow.y2;
      if (renderWindowScreenX1 <= visibleWindow.x1 && renderWindowScreenX2 >= visibleWindow.x2 && renderWindowScreenY1 <= visibleWindow.y1 && renderWindowScreenY2 >= visibleWindow.y2) {
        this.setStatus(state, "loaded");
        return;
      }
      if (renderWindowScreenY2 < visibleWindow.y2) {
        renderWindow.y1 += maxLinesPerCanvasPage * state.renderInfo.lineHeight;
        renderWindow.y2 += maxLinesPerCanvasPage * state.renderInfo.lineHeight;
        canvasPages.push(canvasPages.shift());
        canvasPages[2].lineNumStart = canvasPages[1].lineNumStart + maxLinesPerCanvasPage;
        canvasPages[2].lineNumEnd = canvasPages[2].lineNumStart + maxLinesPerCanvasPage;
        canvasPages[2].valid = false;
      } else if (renderWindowScreenY1 > visibleWindow.y1) {
        renderWindow.y1 -= maxLinesPerCanvasPage * state.renderInfo.lineHeight;
        renderWindow.y2 -= maxLinesPerCanvasPage * state.renderInfo.lineHeight;
        canvasPages.unshift(canvasPages.pop());
        canvasPages[0].lineNumStart = canvasPages[1].lineNumStart - maxLinesPerCanvasPage;
        canvasPages[0].lineNumEnd = canvasPages[0].lineNumStart + maxLinesPerCanvasPage;
        canvasPages[0].valid = false;
      }
    } else {
      const pageHeight = state.renderInfo.lineHeight * maxLinesPerCanvasPage;
      const page1Block = Math.ceil(scrollY / pageHeight);
      const page1LineStart = page1Block * maxLinesPerCanvasPage;
      const page0LineStart = page1LineStart - maxLinesPerCanvasPage;
      const page2LineStart = page1LineStart + maxLinesPerCanvasPage;
      canvasPages = [
        {
          texture: canvasPages == null ? void 0 : canvasPages[0].texture,
          lineNumStart: page0LineStart,
          lineNumEnd: page0LineStart + maxLinesPerCanvasPage,
          valid: false
        },
        {
          texture: canvasPages == null ? void 0 : canvasPages[1].texture,
          lineNumStart: page1LineStart,
          lineNumEnd: page1LineStart + maxLinesPerCanvasPage,
          valid: false
        },
        {
          texture: canvasPages == null ? void 0 : canvasPages[2].texture,
          lineNumStart: page2LineStart,
          lineNumEnd: page2LineStart + maxLinesPerCanvasPage,
          valid: false
        }
      ];
      state.canvasPages = canvasPages;
      const scrollYNearestPage = page1Block * pageHeight;
      renderWindow = {
        x1: 0,
        y1: scrollYNearestPage - pageHeight,
        x2: width,
        y2: scrollYNearestPage + pageHeight * 2
      };
    }
    state.renderWindow = renderWindow;
    performance.now();
    for (const pageInfo of canvasPages) {
      if (pageInfo.valid)
        continue;
      if (pageInfo.lineNumStart < 0) {
        (_a3 = pageInfo.texture) == null ? void 0 : _a3.setRenderableOwner(state, false);
        pageInfo.texture = this.stage.txManager.loadTexture("ImageTexture", {
          src: ""
        });
        pageInfo.texture.setRenderableOwner(state, state.isRenderable);
        pageInfo.valid = true;
        continue;
      }
      state.lightning2TextRenderer.draw(state.renderInfo, {
        lines: state.renderInfo.lines.slice(pageInfo.lineNumStart, pageInfo.lineNumEnd),
        lineWidths: state.renderInfo.lineWidths.slice(pageInfo.lineNumStart, pageInfo.lineNumEnd)
      });
      if (!(this.canvas.width === 0 || this.canvas.height === 0)) {
        (_b2 = pageInfo.texture) == null ? void 0 : _b2.setRenderableOwner(state, false);
        pageInfo.texture = this.stage.txManager.loadTexture("ImageTexture", {
          src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
        }, {
          preload: true
        });
        pageInfo.texture.setRenderableOwner(state, state.isRenderable);
      }
      pageInfo.valid = true;
    }
    this.setStatus(state, "loaded");
  }
  renderQuads(state, transform, clippingRect, alpha) {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
    const { stage } = this;
    const { canvasPages, textW = 0, textH = 0, renderWindow } = state;
    if (!canvasPages || !renderWindow)
      return;
    const {
      x,
      y,
      scrollY,
      contain,
      width,
      height
      /*, debug*/
    } = state.props;
    const elementRect = {
      x,
      y,
      width: contain !== "none" ? width : textW,
      height: contain === "both" ? height : textH
    };
    intersectRect({
      x: 0,
      y: 0,
      width: stage.options.appWidth,
      height: stage.options.appHeight
    }, elementRect);
    assertTruthy(canvasPages, "canvasPages is not defined");
    assertTruthy(renderWindow, "renderWindow is not defined");
    const renderWindowHeight = renderWindow.y2 - renderWindow.y1;
    const pageSize = renderWindowHeight / 3;
    const { zIndex, color } = state.props;
    const combinedAlpha = alpha * getNormalizedAlphaComponent(color);
    const quadColor = mergeColorAlphaPremultiplied(4294967295, combinedAlpha);
    if (canvasPages[0].valid) {
      this.stage.renderer.addQuad({
        alpha: combinedAlpha,
        clippingRect,
        colorBl: quadColor,
        colorBr: quadColor,
        colorTl: quadColor,
        colorTr: quadColor,
        width: ((_b2 = (_a3 = canvasPages[0].texture) == null ? void 0 : _a3.dimensions) == null ? void 0 : _b2.width) || 0,
        height: ((_d2 = (_c2 = canvasPages[0].texture) == null ? void 0 : _c2.dimensions) == null ? void 0 : _d2.height) || 0,
        texture: canvasPages[0].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex,
        tx: transform.tx,
        ty: transform.ty - scrollY + renderWindow.y1,
        ta: transform.ta,
        tb: transform.tb,
        tc: transform.tc,
        td: transform.td
      });
    }
    if (canvasPages[1].valid) {
      this.stage.renderer.addQuad({
        alpha: combinedAlpha,
        clippingRect,
        colorBl: quadColor,
        colorBr: quadColor,
        colorTl: quadColor,
        colorTr: quadColor,
        width: ((_f2 = (_e2 = canvasPages[1].texture) == null ? void 0 : _e2.dimensions) == null ? void 0 : _f2.width) || 0,
        height: ((_h2 = (_g2 = canvasPages[1].texture) == null ? void 0 : _g2.dimensions) == null ? void 0 : _h2.height) || 0,
        texture: canvasPages[1].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex,
        tx: transform.tx,
        ty: transform.ty - scrollY + renderWindow.y1 + pageSize,
        ta: transform.ta,
        tb: transform.tb,
        tc: transform.tc,
        td: transform.td
      });
    }
    if (canvasPages[2].valid) {
      this.stage.renderer.addQuad({
        alpha: combinedAlpha,
        clippingRect,
        colorBl: quadColor,
        colorBr: quadColor,
        colorTl: quadColor,
        colorTr: quadColor,
        width: ((_j2 = (_i2 = canvasPages[2].texture) == null ? void 0 : _i2.dimensions) == null ? void 0 : _j2.width) || 0,
        height: ((_l2 = (_k2 = canvasPages[2].texture) == null ? void 0 : _k2.dimensions) == null ? void 0 : _l2.height) || 0,
        texture: canvasPages[2].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex,
        tx: transform.tx,
        ty: transform.ty - scrollY + renderWindow.y1 + pageSize + pageSize,
        ta: transform.ta,
        tb: transform.tb,
        tc: transform.tc,
        td: transform.td
      });
    }
  }
  setIsRenderable(state, renderable) {
    var _a3;
    super.setIsRenderable(state, renderable);
    (_a3 = state.canvasPages) == null ? void 0 : _a3.forEach((pageInfo) => {
      var _a4;
      (_a4 = pageInfo.texture) == null ? void 0 : _a4.setRenderableOwner(state, renderable);
    });
  }
  destroyState(state) {
    var _a3;
    (_a3 = state.canvasPages) == null ? void 0 : _a3.forEach((pageInfo) => {
      var _a4;
      (_a4 = pageInfo.texture) == null ? void 0 : _a4.setRenderableOwner(state, false);
    });
  }
  //#endregion Overrides
  /**
   * Invalidate the visible window stored in the state. This will cause a new
   * visible window to be calculated on the next update.
   *
   * @param state
   */
  invalidateVisibleWindowCache(state) {
    state.visibleWindow.valid = false;
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  /**
   * Invalidate the layout cache stored in the state. This will cause the text
   * to be re-layed out on the next update.
   *
   * @remarks
   * This also invalidates the visible window cache.
   *
   * @param state
   */
  invalidateLayoutCache(state) {
    state.renderInfo = void 0;
    state.visibleWindow.valid = false;
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  onFontLoaded(state, cssString) {
    var _a3;
    if (cssString !== ((_a3 = state.fontInfo) == null ? void 0 : _a3.cssString) || !state.fontInfo) {
      return;
    }
    state.fontInfo.loaded = true;
    this.scheduleUpdateState(state);
  }
  onFontLoadError(state, cssString, error) {
    var _a3;
    if (cssString !== ((_a3 = state.fontInfo) == null ? void 0 : _a3.cssString) || !state.fontInfo) {
      return;
    }
    state.fontInfo.loaded = true;
    console.error("CanvasTextRenderer: Error loading font '".concat(state.fontInfo.cssString, "'"), error);
    this.scheduleUpdateState(state);
  }
}
class DefaultShader extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
}
__publicField(DefaultShader, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
class DefaultShaderBatched extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: [
        "a_position",
        "a_textureCoordinate",
        "a_color",
        "a_textureIndex"
      ],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_textures[0]", uniform: "uniform1iv" }
      ]
    });
    __publicField(this, "supportsIndexedTextures", true);
  }
  bindTextures(texture) {
    const { renderer: renderer2, glw } = this;
    if (texture.length > renderer2.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) {
      throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(renderer2.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
    }
    texture.forEach((t, i) => {
      glw.activeTexture(i);
      glw.bindTexture(t.ctxTexture);
    });
    const samplers = Array.from(Array(texture.length).keys());
    this.setUniform("u_textures[0]", samplers);
  }
}
__publicField(DefaultShaderBatched, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: (textureUnits) => "\n      #define txUnits ".concat(textureUnits, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(textureUnits, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(textureUnits).keys()).map((idx) => "\n          ".concat(idx !== 0 ? "else " : "", "if (idx == ").concat(idx, ") {\n            return texture2D(textures[").concat(idx, "], uv);\n          }\n        ")).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ")
});
const effectCache = /* @__PURE__ */ new Map();
const getResolvedEffect = (effects, effectContructors) => {
  const key2 = JSON.stringify(effects);
  if (effectCache.has(key2)) {
    return effectCache.get(key2);
  }
  const value = (effects != null ? effects : []).map((effect2) => ({
    type: effect2.type,
    props: effectContructors[effect2.type].resolveDefaults(effect2.props || {})
  }));
  effectCache.set(key2, value);
  return value;
};
const _DynamicShader = class _DynamicShader extends WebGlCoreShader {
  constructor(renderer2, props, effectContructors) {
    const shader = _DynamicShader.createShader(props, effectContructors);
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_alpha", uniform: "uniform1f" },
        ...shader.uniforms
      ],
      shaderSources: {
        vertex: shader.vertex,
        fragment: shader.fragment
      }
    });
    __publicField(this, "effects", []);
    this.effects = shader.effects;
    this.calculateProps = memize(this.calculateProps.bind(this));
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  calculateProps(effects) {
    const regEffects = this.renderer.shManager.getRegisteredEffects();
    const results = [];
    effects == null ? void 0 : effects.forEach((eff, index) => {
      var _a3;
      const effect2 = this.effects[index];
      const fxClass = regEffects[effect2.name];
      const props = (_a3 = eff.props) != null ? _a3 : {};
      const uniInfo = effect2.uniformInfo;
      Object.keys(props).forEach((p) => {
        const fxProp = fxClass.uniforms[p];
        const propInfo = uniInfo[p];
        let value = fxProp.validator ? fxProp.validator(props[p], props) : props[p];
        if (Array.isArray(value)) {
          value = new Float32Array(value);
        }
        results.push({ name: propInfo.name, value });
      });
    });
    return results;
  }
  bindProps(props) {
    const results = this.calculateProps(props.effects);
    results.forEach((r) => {
      this.setUniform(r.name, r.value);
    });
  }
  canBatchShaderProps(propsA, propsB) {
    if (propsA.$dimensions.width !== propsB.$dimensions.width || propsA.$dimensions.height !== propsB.$dimensions.height || propsA.effects.length !== propsB.effects.length) {
      return false;
    }
    const propsEffectsLen = propsA.effects.length;
    let i = 0;
    for (; i < propsEffectsLen; i++) {
      const effectA = propsA.effects[i];
      const effectB = propsB.effects[i];
      if (effectA.type !== effectB.type) {
        return false;
      }
      for (const key2 in effectA.props) {
        if (effectB.props && !effectB.props[key2] || effectA.props[key2] !== effectB.props[key2]) {
          return false;
        }
      }
    }
    return true;
  }
  static createShader(props, effectContructors) {
    const effectNameCount = {};
    const methods = {};
    let declareUniforms = "";
    const uniforms = [];
    const uFx = [];
    const effects = props.effects.map((effect2) => {
      const baseClass = effectContructors[effect2.type];
      const key2 = baseClass.getEffectKey(effect2.props || {});
      effectNameCount[key2] = effectNameCount[key2] ? ++effectNameCount[key2] : 1;
      const nr = effectNameCount[key2];
      if (nr === 1) {
        uFx.push({ key: key2, type: effect2.type, props: effect2.props });
      }
      const fxClass = new baseClass({
        ref: "".concat(key2).concat(nr === 1 ? "" : nr),
        target: key2,
        props: effect2.props
      });
      declareUniforms += fxClass.declaredUniforms;
      uniforms.push(...Object.values(fxClass.uniformInfo));
      return fxClass;
    });
    let effectMethods = "";
    uFx == null ? void 0 : uFx.forEach((fx) => {
      var _a3;
      const fxClass = effectContructors[fx.type];
      const fxProps = fxClass.resolveDefaults((_a3 = fx.props) != null ? _a3 : {});
      const remap = [];
      for (const m in fxClass.methods) {
        let cm = m;
        const fxMethod = fxClass.methods[m];
        if (methods[m] && methods[m] !== fxMethod) {
          cm = _DynamicShader.resolveMethodDuplicate(m, fxMethod, methods);
        }
        methods[cm] = fxMethod.replace("function", cm);
        remap.push({ m, cm });
      }
      let onShaderMask = fxClass.onShaderMask instanceof Function ? fxClass.onShaderMask(fxProps) : fxClass.onShaderMask;
      let onColorize = fxClass.onColorize instanceof Function ? fxClass.onColorize(fxProps) : fxClass.onColorize;
      let onEffectMask = fxClass.onEffectMask instanceof Function ? fxClass.onEffectMask(fxProps) : fxClass.onEffectMask;
      remap.forEach((r) => {
        const { m, cm } = r;
        const reg = new RegExp("\\$".concat(m), "g");
        if (onShaderMask) {
          onShaderMask = onShaderMask.replace(reg, cm);
        }
        if (onColorize) {
          onColorize = onColorize.replace(reg, cm);
        }
        if (onEffectMask) {
          onEffectMask = onEffectMask.replace(reg, cm);
        }
      });
      const methodParameters = fxClass.getMethodParameters(fxClass.uniforms, fxProps);
      const pm = methodParameters.length > 0 ? ", ".concat(methodParameters) : "";
      if (onShaderMask) {
        effectMethods += "\n        float fx_".concat(fx.key, "_onShaderMask(float shaderMask ").concat(pm, ") {\n          ").concat(onShaderMask, "\n        }\n        ");
      }
      if (onColorize) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onColorize, "\n          }\n        ");
      }
      if (onEffectMask) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onEffectMask, "\n          }\n        ");
      }
    });
    let sharedMethods = "";
    for (const m in methods) {
      sharedMethods += methods[m];
    }
    let currentMask = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))";
    let drawEffects = "\n\n    ";
    for (let i = 0; i < effects.length; i++) {
      const current = effects[i];
      const pm = current.passParameters.length > 0 ? ", ".concat(current.passParameters) : "";
      const currentClass = effectContructors[current.name];
      if (currentClass.onShaderMask) {
        drawEffects += "\n        shaderMask = fx_".concat(current.target, "_onShaderMask(shaderMask ").concat(pm, ");\n        ");
      }
      if (currentClass.onColorize) {
        drawEffects += "\n        maskColor = fx_".concat(current.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(pm, ");\n        ");
      }
      if (currentClass.onEffectMask) {
        currentMask = "fx_".concat(current.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(pm, ")");
      }
      const next = effects[i + 1];
      if (next === void 0 || effectContructors[next.name].onEffectMask) {
        drawEffects += "\n          shaderColor = ".concat(currentMask, ";\n        ");
      }
    }
    return {
      effects,
      uniforms,
      fragment: _DynamicShader.fragment(declareUniforms, sharedMethods, effectMethods, drawEffects),
      vertex: _DynamicShader.vertex()
    };
  }
  static resolveMethodDuplicate(key2, effectMethod, methodCollection, increment = 0) {
    const m = key2 + (increment > 0 ? increment : "");
    if (methodCollection[m] && methodCollection[m] !== effectMethod) {
      return this.resolveMethodDuplicate(key2, effectMethod, methodCollection, ++increment);
    }
    return m;
  }
  static resolveDefaults(props, effectContructors) {
    return {
      effects: getResolvedEffect(props.effects, effectContructors),
      $dimensions: {
        width: 0,
        height: 0
      },
      $alpha: 0
    };
  }
  static makeCacheKey(props, effectContructors) {
    var _a3;
    let fx = "";
    (_a3 = props.effects) == null ? void 0 : _a3.forEach((effect2) => {
      const baseClass = effectContructors[effect2.type];
      const key2 = baseClass.getEffectKey(effect2.props || {});
      fx += ",".concat(key2);
    });
    return "DynamicShader".concat(fx);
  }
};
__publicField(_DynamicShader, "z$__type__Props");
__publicField(_DynamicShader, "vertex", () => "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ");
__publicField(_DynamicShader, "fragment", (uniforms, methods, effectMethods, drawEffects) => "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(uniforms, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(methods, "\n\n    ").concat(effectMethods, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(drawEffects, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  "));
let DynamicShader = _DynamicShader;
class RoundedRectangle extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_radius", uniform: "uniform1f" }
      ]
    });
  }
  static resolveDefaults(props) {
    return {
      radius: props.radius || 10,
      $dimensions: {
        width: 0,
        height: 0
      }
    };
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    this.setUniform("u_radius", props.radius);
  }
  canBatchShaderProps(propsA, propsB) {
    return propsA.radius === propsB.radius && propsA.$dimensions.width === propsB.$dimensions.width && propsA.$dimensions.height === propsB.$dimensions.height;
  }
}
__publicField(RoundedRectangle, "z$__type__Props");
__publicField(RoundedRectangle, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
const IDENTITY_MATRIX_3x3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
const _SdfShader = class _SdfShader extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_transform", uniform: "uniformMatrix3fv" },
        { name: "u_scrollY", uniform: "uniform1f" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_color", uniform: "uniform4fv" },
        { name: "u_size", uniform: "uniform1f" },
        { name: "u_distanceRange", uniform: "uniform1f" },
        { name: "u_debug", uniform: "uniform1i" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    const resolvedProps = _SdfShader.resolveDefaults(props);
    for (const key2 in resolvedProps) {
      if (key2 === "transform") {
        this.setUniform("u_transform", false, resolvedProps[key2]);
      } else if (key2 === "scrollY") {
        this.setUniform("u_scrollY", resolvedProps[key2]);
      } else if (key2 === "color") {
        const components = getNormalizedRgbaComponents(resolvedProps.color);
        this.setUniform("u_color", components);
      } else if (key2 === "size") {
        this.setUniform("u_size", resolvedProps[key2]);
      } else if (key2 === "distanceRange") {
        this.setUniform("u_distanceRange", resolvedProps[key2]);
      } else if (key2 === "debug") {
        this.setUniform("u_debug", resolvedProps[key2] ? 1 : 0);
      }
    }
  }
  static resolveDefaults(props = {}) {
    var _a3, _b2, _c2, _d2, _e2, _f2;
    return {
      transform: (_a3 = props.transform) != null ? _a3 : IDENTITY_MATRIX_3x3,
      scrollY: (_b2 = props.scrollY) != null ? _b2 : 0,
      color: (_c2 = props.color) != null ? _c2 : 4294967295,
      size: (_d2 = props.size) != null ? _d2 : 16,
      distanceRange: (_e2 = props.distanceRange) != null ? _e2 : 1,
      debug: (_f2 = props.debug) != null ? _f2 : false
    };
  }
};
__publicField(_SdfShader, "shaderSources", {
  vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
let SdfShader = _SdfShader;
class RadiusEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radius");
  }
  static getEffectKey() {
    return "radius";
  }
  static resolveDefaults(props) {
    var _a3;
    return {
      radius: (_a3 = props.radius) != null ? _a3 : 10
    };
  }
}
__publicField(RadiusEffect, "z$__type__Props");
__publicField(RadiusEffect, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: (value) => {
      let r = value;
      if (Array.isArray(r)) {
        if (r.length === 2) {
          r = [r[0], r[1], r[0], r[1]];
        } else if (r.length === 3) {
          r = [r[0], r[1], r[2], r[0]];
        } else if (r.length !== 4) {
          r = [r[0], r[0], r[0], r[0]];
        }
      } else if (typeof r === "number") {
        r = [r, r, r, r];
      }
      return r;
    }
  }
});
__publicField(RadiusEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(RadiusEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  ");
__publicField(RadiusEffect, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
class BorderEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "border");
  }
  static getEffectKey() {
    return "border";
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      color: (_b2 = props.color) != null ? _b2 : 4294967295
    };
  }
}
__publicField(BorderEffect, "z$__type__Props");
__publicField(BorderEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderEffect, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  ");
__publicField(BorderEffect, "onColorize", "\n    return color;\n  ");
const _LinearGradientEffect = class _LinearGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "linearGradient");
  }
  static getEffectKey(props) {
    return "linearGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    const colors = (_a3 = props.colors) != null ? _a3 : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      angle: (_b2 = props.angle) != null ? _b2 : 0
    };
  }
};
__publicField(_LinearGradientEffect, "z$__type__Props");
__publicField(_LinearGradientEffect, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      const cols = rgbas.map((rgbas2) => getNormalizedRgbaComponents(rgbas2));
      return cols.reduce((acc, val) => acc.concat(val), []);
    },
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_LinearGradientEffect, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
});
__publicField(_LinearGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_LinearGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(_LinearGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let LinearGradientEffect = _LinearGradientEffect;
class GrayscaleEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "grayscale");
  }
  static getEffectKey() {
    return "grayscale";
  }
  static resolveDefaults(props) {
    var _a3;
    return {
      amount: (_a3 = props.amount) != null ? _a3 : 1
    };
  }
}
__publicField(GrayscaleEffect, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
});
__publicField(GrayscaleEffect, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
class BorderRightEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderRight");
  }
  static getEffectKey() {
    return "borderRight";
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      color: (_b2 = props.color) != null ? _b2 : 4294967295
    };
  }
}
__publicField(BorderRightEffect, "z$__type__Props");
__publicField(BorderRightEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderRightEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderRightEffect, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderRightEffect, "onColorize", "\n    return color;\n  ");
class BorderTopEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderTop");
  }
  static getEffectKey() {
    return "borderTop";
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      color: (_b2 = props.color) != null ? _b2 : 4294967295
    };
  }
}
__publicField(BorderTopEffect, "z$__type__Props");
__publicField(BorderTopEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderTopEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderTopEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderTopEffect, "onColorize", "\n    return color;\n  ");
class BorderBottomEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderBottom");
  }
  static getEffectKey() {
    return "borderBottom";
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      color: (_b2 = props.color) != null ? _b2 : 4294967295
    };
  }
}
__publicField(BorderBottomEffect, "z$__type__Props");
__publicField(BorderBottomEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderBottomEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderBottomEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderBottomEffect, "onColorize", "\n    return color;\n  ");
class BorderLeftEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderLeft");
  }
  static getEffectKey() {
    return "borderLeft";
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      color: (_b2 = props.color) != null ? _b2 : 4294967295
    };
  }
}
__publicField(BorderLeftEffect, "z$__type__Props");
__publicField(BorderLeftEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderLeftEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderLeftEffect, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderLeftEffect, "onColorize", "\n    return color;\n  ");
class GlitchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "glitch");
  }
  static getEffectKey(props) {
    return "glitch";
  }
  static resolveDefaults(props) {
    var _a3, _b2, _c2, _d2, _e2;
    return {
      amplitude: (_a3 = props.amplitude) != null ? _a3 : 0.2,
      narrowness: (_b2 = props.narrowness) != null ? _b2 : 4,
      blockiness: (_c2 = props.blockiness) != null ? _c2 : 2,
      minimizer: (_d2 = props.minimizer) != null ? _d2 : 8,
      time: (_e2 = props.time) != null ? _e2 : Date.now()
    };
  }
}
__publicField(GlitchEffect, "z$__type__Props");
__publicField(GlitchEffect, "uniforms", {
  amplitude: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  narrowness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  blockiness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  minimizer: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  time: {
    value: 0,
    method: "uniform1f",
    validator: (value) => {
      return (Date.now() - value) % 1e3;
    },
    type: "float"
  }
});
__publicField(GlitchEffect, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
});
__publicField(GlitchEffect, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
class FadeOutEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "fadeOut");
  }
  static getEffectKey() {
    return "fadeOut";
  }
  static resolveDefaults(props) {
    var _a3;
    return {
      fade: (_a3 = props.fade) != null ? _a3 : 10
    };
  }
}
__publicField(FadeOutEffect, "z$__type__Props");
__publicField(FadeOutEffect, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: (value) => {
      let r = value;
      if (Array.isArray(r)) {
        if (r.length === 2) {
          r = [r[0], r[1], r[0], r[1]];
        } else if (r.length === 3) {
          r = [r[0], r[1], r[2], r[0]];
        } else if (r.length !== 4) {
          r = [r[0], r[0], r[0], r[0]];
        }
      } else if (typeof r === "number") {
        r = [r, r, r, r];
      }
      return r;
    }
  }
});
__publicField(FadeOutEffect, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
const _RadialGradientEffect = class _RadialGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialGradient");
  }
  static getEffectKey(props) {
    return "radialGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a3, _b2, _c2, _d2, _e2;
    const colors = (_a3 = props.colors) != null ? _a3 : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      width: (_b2 = props.width) != null ? _b2 : 0,
      height: (_d2 = (_c2 = props.height) != null ? _c2 : props.width) != null ? _d2 : 0,
      pivot: (_e2 = props.pivot) != null ? _e2 : [0.5, 0.5]
    };
  }
};
__publicField(_RadialGradientEffect, "z$__type__Props");
__publicField(_RadialGradientEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  pivot: {
    value: [0.5, 0.5],
    method: "uniform2fv",
    type: "vec2"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      const cols = rgbas.map((rgbas2) => getNormalizedRgbaComponents(rgbas2));
      return cols.reduce((acc, val) => acc.concat(val), []);
    },
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_RadialGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_RadialGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(_RadialGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let RadialGradientEffect = _RadialGradientEffect;
class RadialProgressEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialProgress");
  }
  static getEffectKey() {
    return "radialProgress";
  }
  static resolveDefaults(props) {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 10,
      progress: (_b2 = props.progress) != null ? _b2 : 0.5,
      offset: (_c2 = props.offset) != null ? _c2 : 0,
      range: (_d2 = props.range) != null ? _d2 : Math.PI * 2,
      rounded: (_e2 = props.rounded) != null ? _e2 : false,
      radius: (_f2 = props.radius) != null ? _f2 : 1,
      color: (_g2 = props.color) != null ? _g2 : 4294967295
    };
  }
}
__publicField(RadialProgressEffect, "z$__type__Props");
__publicField(RadialProgressEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  progress: {
    value: 0.5,
    method: "uniform1f",
    type: "float"
  },
  offset: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  range: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  rounded: {
    value: 0,
    method: "uniform1f",
    type: "float",
    validator: (value) => {
      return value ? 1 : 0;
    }
  },
  radius: {
    value: 1,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: (rgba) => getNormalizedRgbaComponents(rgba),
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(RadialProgressEffect, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
});
__publicField(RadialProgressEffect, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  ");
__publicField(RadialProgressEffect, "onColorize", "\n    return color;\n  ");
class HolePunchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "holePunch");
  }
  static getEffectKey() {
    return "holePunch";
  }
  static resolveDefaults(props) {
    var _a3;
    return {
      x: props.x || 0,
      y: props.y || 0,
      width: props.width || 50,
      height: props.height || 50,
      radius: (_a3 = props.radius) != null ? _a3 : 0
    };
  }
}
__publicField(HolePunchEffect, "z$__type__Props");
__publicField(HolePunchEffect, "uniforms", {
  x: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  y: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: (value) => {
      let r = value;
      if (Array.isArray(r)) {
        if (r.length === 2) {
          r = [r[0], r[1], r[0], r[1]];
        } else if (r.length === 3) {
          r = [r[0], r[1], r[2], r[0]];
        } else if (r.length !== 4) {
          r = [r[0], r[0], r[0], r[0]];
        }
      } else if (typeof r === "number") {
        r = [r, r, r, r];
      }
      return r;
    }
  }
});
__publicField(HolePunchEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(HolePunchEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  ");
__publicField(HolePunchEffect, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
class CoreShaderManager {
  constructor() {
    __publicField(this, "shCache", /* @__PURE__ */ new Map());
    __publicField(this, "shConstructors", {});
    __publicField(this, "attachedShader", null);
    __publicField(this, "effectConstructors", {});
    __publicField(this, "renderer");
    this.registerShaderType("DefaultShader", DefaultShader);
    this.registerShaderType("DefaultShaderBatched", DefaultShaderBatched);
    this.registerShaderType("RoundedRectangle", RoundedRectangle);
    this.registerShaderType("DynamicShader", DynamicShader);
    this.registerShaderType("SdfShader", SdfShader);
    this.registerEffectType("border", BorderEffect);
    this.registerEffectType("borderBottom", BorderBottomEffect);
    this.registerEffectType("borderLeft", BorderLeftEffect);
    this.registerEffectType("borderRight", BorderRightEffect);
    this.registerEffectType("borderTop", BorderTopEffect);
    this.registerEffectType("fadeOut", FadeOutEffect);
    this.registerEffectType("linearGradient", LinearGradientEffect);
    this.registerEffectType("radialGradient", RadialGradientEffect);
    this.registerEffectType("grayscale", GrayscaleEffect);
    this.registerEffectType("glitch", GlitchEffect);
    this.registerEffectType("radius", RadiusEffect);
    this.registerEffectType("radialProgress", RadialProgressEffect);
    this.registerEffectType("holePunch", HolePunchEffect);
  }
  registerShaderType(shType, shClass) {
    this.shConstructors[shType] = shClass;
  }
  registerEffectType(effectType, effectClass) {
    this.effectConstructors[effectType] = effectClass;
  }
  getRegisteredEffects() {
    return this.effectConstructors;
  }
  getRegisteredShaders() {
    return this.shConstructors;
  }
  loadShader(shType, props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const ShaderClass = this.shConstructors[shType];
    if (!ShaderClass) {
      throw new Error('Shader type "'.concat(shType, '" is not registered'));
    }
    if (shType === "DynamicShader") {
      return this.loadDynamicShader(props);
    }
    const resolvedProps = ShaderClass.resolveDefaults(props);
    const cacheKey = ShaderClass.makeCacheKey(resolvedProps) || ShaderClass.name;
    if (cacheKey && this.shCache.has(cacheKey)) {
      return {
        shader: this.shCache.get(cacheKey),
        props: resolvedProps
      };
    }
    const shader = new ShaderClass(this.renderer, props);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return {
      shader,
      props: resolvedProps
    };
  }
  loadDynamicShader(props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const resolvedProps = DynamicShader.resolveDefaults(props, this.effectConstructors);
    const cacheKey = DynamicShader.makeCacheKey(resolvedProps, this.effectConstructors);
    if (cacheKey && this.shCache.has(cacheKey)) {
      return {
        shader: this.shCache.get(cacheKey),
        props: resolvedProps
      };
    }
    const shader = new DynamicShader(this.renderer, props, this.effectConstructors);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return {
      shader,
      props: resolvedProps
    };
  }
  useShader(shader) {
    if (this.attachedShader === shader) {
      return;
    }
    if (this.attachedShader) {
      this.attachedShader.detach();
    }
    shader.attach();
    this.attachedShader = shader;
  }
}
class ContextSpy {
  constructor() {
    __publicField(this, "data", {});
  }
  reset() {
    this.data = {};
  }
  increment(name) {
    if (!this.data[name]) {
      this.data[name] = 0;
    }
    this.data[name]++;
  }
  getData() {
    return { ...this.data };
  }
}
function isCompressedTextureContainer(url) {
  return /\.(ktx|pvr)$/.test(url);
}
const loadCompressedTexture = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  if (url.indexOf(".ktx") !== -1) {
    return loadKTXData(arrayBuffer);
  }
  return loadPVRData(arrayBuffer);
};
const loadKTXData = async (buffer) => {
  const view = new DataView(buffer);
  const littleEndian = view.getUint32(12) === 16909060 ? true : false;
  const mipmaps = [];
  const data = {
    glInternalFormat: view.getUint32(28, littleEndian),
    pixelWidth: view.getUint32(36, littleEndian),
    pixelHeight: view.getUint32(40, littleEndian),
    numberOfMipmapLevels: view.getUint32(56, littleEndian),
    bytesOfKeyValueData: view.getUint32(60, littleEndian)
  };
  let offset = 64;
  offset += data.bytesOfKeyValueData;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const imageSize = view.getUint32(offset);
    offset += 4;
    mipmaps.push(view.buffer.slice(offset, imageSize));
    offset += imageSize;
  }
  return {
    data: {
      glInternalFormat: data.glInternalFormat,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "ktx"
    },
    premultiplyAlpha: false
  };
};
const loadPVRData = async (buffer) => {
  const pvrHeaderLength = 13;
  const pvrFormatEtc1 = 36196;
  const pvrWidth = 7;
  const pvrHeight = 6;
  const pvrMipmapCount = 11;
  const pvrMetadata = 12;
  const arrayBuffer = buffer;
  const header = new Int32Array(arrayBuffer, 0, pvrHeaderLength);
  const dataOffset = header[pvrMetadata] + 52;
  const pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
  const mipmaps = [];
  const data = {
    pixelWidth: header[pvrWidth],
    pixelHeight: header[pvrHeight],
    numberOfMipmapLevels: header[pvrMipmapCount] || 0
  };
  let offset = 0;
  let width = data.pixelWidth || 0;
  let height = data.pixelHeight || 0;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
    const view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
    mipmaps.push(view);
    offset += level;
    width = width >> 1;
    height = height >> 1;
  }
  return {
    data: {
      glInternalFormat: pvrFormatEtc1,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "pvr"
    },
    premultiplyAlpha: false
  };
};
const _ImageTexture = class _ImageTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _ImageTexture.resolveDefaults(props);
  }
  hasAlphaChannel(mimeType) {
    return mimeType.indexOf("image/png") !== -1;
  }
  async getTextureData() {
    const { src, premultiplyAlpha } = this.props;
    if (!src) {
      return {
        data: null
      };
    }
    if (src instanceof ImageData) {
      return {
        data: src,
        premultiplyAlpha
      };
    }
    if (isCompressedTextureContainer(src)) {
      return loadCompressedTexture(src);
    }
    if (this.txManager.imageWorkerManager) {
      return await this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha);
    } else if (this.txManager.hasCreateImageBitmap) {
      const response = await fetch(src);
      const blob = await response.blob();
      const hasAlphaChannel = premultiplyAlpha != null ? premultiplyAlpha : this.hasAlphaChannel(blob.type);
      return {
        data: await createImageBitmap(blob, {
          premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
          colorSpaceConversion: "none",
          imageOrientation: "none"
        }),
        premultiplyAlpha: hasAlphaChannel
      };
    } else {
      const img = new Image();
      if (!(src.substr(0, 5) == "data:")) {
        img.crossOrigin = "Anonymous";
      }
      img.src = src;
      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
      }).catch((e) => {
        console.error(e);
      });
      return {
        data: img,
        premultiplyAlpha: premultiplyAlpha != null ? premultiplyAlpha : true
      };
    }
  }
  static makeCacheKey(props) {
    const resolvedProps = _ImageTexture.resolveDefaults(props);
    if (resolvedProps.src instanceof ImageData) {
      return false;
    }
    return "ImageTexture,".concat(resolvedProps.src, ",").concat(resolvedProps.premultiplyAlpha);
  }
  static resolveDefaults(props) {
    var _a3, _b2;
    return {
      src: (_a3 = props.src) != null ? _a3 : "",
      premultiplyAlpha: (_b2 = props.premultiplyAlpha) != null ? _b2 : true
      // null,
    };
  }
};
__publicField(_ImageTexture, "z$__type__Props");
let ImageTexture = _ImageTexture;
const FLOATS_PER_GLYPH = 24;
function getStartConditions(sdfFontSize, sdfLineHeight, lineHeight, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH) {
  const startLineIndex = Math.min(Math.max(renderWindow.firstLineIdx, 0), lineCache.length);
  const sdfStartX = 0;
  let sdfVerticalAlignYOffset = 0;
  if (verticalAlign === "middle") {
    sdfVerticalAlignYOffset = (sdfLineHeight - sdfFontSize) / 2;
  } else if (verticalAlign === "bottom") {
    sdfVerticalAlignYOffset = sdfLineHeight - sdfFontSize;
  }
  const sdfOffsetY = offsetY / fontSizeRatio;
  const sdfStartY = sdfOffsetY + startLineIndex * sdfLineHeight + sdfVerticalAlignYOffset;
  if (textH && sdfStartY >= textH / fontSizeRatio) {
    return;
  }
  return {
    sdfX: sdfStartX,
    sdfY: sdfStartY,
    lineIndex: startLineIndex
  };
}
class PeekableIterator {
  constructor(iterator, indexBase = 0) {
    __publicField(this, "iterator");
    __publicField(this, "peekBuffer", []);
    __publicField(this, "_lastIndex");
    this.iterator = iterator;
    this.iterator = iterator;
    this._lastIndex = indexBase - 1;
    this.peekBuffer = [];
  }
  next() {
    const nextResult = this.peekBuffer.length > 0 ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.peekBuffer.pop()
    ) : this.iterator.next();
    if (nextResult.done) {
      this._lastIndex = -1;
    } else {
      this._lastIndex++;
    }
    return nextResult;
  }
  peek() {
    if (this.peekBuffer.length > 0) {
      return this.peekBuffer[0];
    }
    const result = this.iterator.next();
    this.peekBuffer.push(result);
    return result;
  }
  get lastIndex() {
    return this._lastIndex;
  }
}
function* getUnicodeCodepoints(text2, start = 0) {
  let i = start;
  while (i < text2.length) {
    const codePoint = text2.codePointAt(i);
    if (codePoint === void 0) {
      throw new Error("Invalid Unicode code point");
    }
    yield codePoint;
    i += codePoint <= 65535 ? 1 : 2;
  }
}
function measureText(text2, shaperProps, shaper) {
  const glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, 0), 0));
  let width = 0;
  for (const glyph of glyphs) {
    if (glyph.mapped) {
      width += glyph.xAdvance;
    }
  }
  return width;
}
function layoutText(curLineIndex, startX, startY, text2, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, rwSdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines) {
  assertTruthy(trFontFace, "Font face must be loaded");
  assertTruthy(trFontFace.loaded, "Font face must be loaded");
  assertTruthy(trFontFace.data, "Font face must be loaded");
  assertTruthy(trFontFace.shaper, "Font face must be loaded");
  const fontSizeRatio = fontSize / trFontFace.data.info.size;
  const vertexLineHeight = lineHeight / fontSizeRatio;
  const vertexW = width / fontSizeRatio;
  const vertexLSpacing = letterSpacing / fontSizeRatio;
  const startingLineCacheEntry = lineCache[curLineIndex];
  const startingCodepointIndex = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.codepointIndex) || 0;
  const startingMaxX = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxX) || 0;
  const startingMaxY = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxY) || 0;
  let maxX = startingMaxX;
  let maxY = startingMaxY;
  let curX = startX;
  let curY = startY;
  let bufferOffset = 0;
  const lastWord = {
    codepointIndex: -1,
    bufferOffset: -1,
    xStart: -1
  };
  const shaper = trFontFace.shaper;
  const shaperProps = {
    letterSpacing: vertexLSpacing
  };
  let glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, startingCodepointIndex), startingCodepointIndex));
  let glyphResult;
  let curLineBufferStart = -1;
  const bufferLineInfos = [];
  const vertexTruncateHeight = height / fontSizeRatio;
  const overflowSuffVertexWidth = measureText(overflowSuffix, shaperProps, shaper);
  let moreLines = true;
  while (moreLines) {
    const nextLineWillFit = (maxLines === 0 || curLineIndex + 1 < maxLines) && (contain !== "both" || scrollable || curY + vertexLineHeight + trFontFace.maxCharHeight <= vertexTruncateHeight);
    const lineVertexW = nextLineWillFit ? vertexW : vertexW - overflowSuffVertexWidth;
    let xStartLastWordBoundary = 0;
    const lineIsBelowWindowTop = curY + vertexLineHeight >= rwSdf.y1;
    const lineIsAboveWindowBottom = curY <= rwSdf.y2;
    const lineIsWithinWindow = lineIsBelowWindowTop && lineIsAboveWindowBottom;
    while ((glyphResult = glyphs.next()) && !glyphResult.done) {
      const glyph = glyphResult.value;
      if (curLineIndex === lineCache.length) {
        lineCache.push({
          codepointIndex: glyph.cluster,
          maxY,
          maxX
        });
      } else if (curLineIndex > lineCache.length) {
        throw new Error("Unexpected lineCache length");
      }
      if (glyph.codepoint === 32 || glyph.codepoint === 10) {
        if (lastWord.codepointIndex !== -1) {
          lastWord.codepointIndex = -1;
          xStartLastWordBoundary = curX;
        }
      } else if (lastWord.codepointIndex === -1) {
        lastWord.codepointIndex = glyph.cluster;
        lastWord.bufferOffset = bufferOffset;
        lastWord.xStart = xStartLastWordBoundary;
      }
      if (glyph.mapped) {
        const charEndX = curX + glyph.xOffset + glyph.width;
        if (
          // We are containing the text
          contain !== "none" && // The current glyph reaches outside the contained width
          charEndX >= lineVertexW && // There is a last word that we can break to the next line
          lastWord.codepointIndex !== -1 && // Prevents infinite loop when a single word is longer than the width
          lastWord.xStart > 0
        ) {
          if (nextLineWillFit) {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, lastWord.codepointIndex), lastWord.codepointIndex));
            bufferOffset = lastWord.bufferOffset;
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            curX = lastWord.xStart;
            bufferOffset = lastWord.bufferOffset;
            contain = "none";
          }
        } else {
          const quadX = curX + glyph.xOffset;
          const quadY = curY + glyph.yOffset;
          if (lineIsWithinWindow) {
            if (curLineBufferStart === -1) {
              curLineBufferStart = bufferOffset;
            }
            const atlasEntry = trFontFace.getAtlasEntry(glyph.glyphId);
            const u = atlasEntry.x / trFontFace.data.common.scaleW;
            const v = atlasEntry.y / trFontFace.data.common.scaleH;
            const uvWidth = atlasEntry.width / trFontFace.data.common.scaleW;
            const uvHeight = atlasEntry.height / trFontFace.data.common.scaleH;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v + uvHeight;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v + uvHeight;
          }
          maxY = Math.max(maxY, quadY + glyph.height);
          maxX = Math.max(maxX, quadX + glyph.width);
          curX += glyph.xAdvance;
        }
      } else {
        if (glyph.codepoint === 10) {
          if (nextLineWillFit) {
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            contain = "none";
          }
        }
      }
    }
    if (curLineBufferStart !== -1) {
      bufferLineInfos.push({
        bufferStart: curLineBufferStart,
        bufferEnd: bufferOffset
      });
      curLineBufferStart = -1;
    }
    curX = 0;
    curY += vertexLineHeight;
    curLineIndex++;
    lastWord.codepointIndex = -1;
    xStartLastWordBoundary = 0;
    if (!forceFullLayoutCalc && contain === "both" && curY > rwSdf.y2) {
      moreLines = false;
    } else if (glyphResult && glyphResult.done) {
      moreLines = false;
    } else if (!nextLineWillFit) {
      moreLines = false;
    }
  }
  if (textAlign === "center") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = (vertexTextW - lineWidth) / 2;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  } else if (textAlign === "right") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = line.bufferEnd === line.bufferStart ? 0 : (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = vertexTextW - lineWidth;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  }
  assertTruthy(glyphResult);
  return {
    bufferNumFloats: bufferOffset,
    bufferNumQuads: bufferOffset / 16,
    layoutNumCharacters: glyphResult.done ? text2.length - startingCodepointIndex : glyphResult.value.cluster - startingCodepointIndex + 1,
    fullyProcessed: !!glyphResult.done,
    maxX,
    maxY
  };
}
function roundUpToMultiple(value, multiple) {
  return Math.ceil(value / multiple) * multiple;
}
function roundDownToMultiple(value, multiple) {
  return Math.floor(value / multiple) * multiple;
}
function setRenderWindow(outRenderWindow, x, y, scrollY, lineHeight, bufferMargin, visibleWindow, fontSizeRatio) {
  const { screen, sdf } = outRenderWindow;
  if (!isBoundPositive(visibleWindow)) {
    screen.x1 = 0;
    screen.y1 = 0;
    screen.x2 = 0;
    screen.y2 = 0;
    sdf.x1 = 0;
    sdf.y1 = 0;
    sdf.x2 = 0;
    sdf.y2 = 0;
    outRenderWindow.numLines = 0;
    outRenderWindow.firstLineIdx = 0;
  } else {
    const x1 = visibleWindow.x1 - x;
    const x2 = x1 + (visibleWindow.x2 - visibleWindow.x1);
    const y1Base = visibleWindow.y1 - y + scrollY;
    const y1 = roundDownToMultiple(y1Base - bufferMargin, lineHeight || 1);
    const y2 = roundUpToMultiple(y1Base + (visibleWindow.y2 - visibleWindow.y1) + bufferMargin, lineHeight || 1);
    screen.x1 = x1;
    screen.y1 = y1;
    screen.x2 = x2;
    screen.y2 = y2;
    sdf.x1 = x1 / fontSizeRatio;
    sdf.y1 = y1 / fontSizeRatio;
    sdf.x2 = x2 / fontSizeRatio;
    sdf.y2 = y2 / fontSizeRatio;
    outRenderWindow.numLines = Math.ceil((y2 - y1) / lineHeight);
    outRenderWindow.firstLineIdx = lineHeight ? Math.floor(y1 / lineHeight) : 0;
  }
  outRenderWindow.valid = true;
}
const weightConversions = {
  normal: 400,
  bold: 700,
  bolder: 900,
  lighter: 100
};
const fontWeightToNumber = (weight) => {
  if (typeof weight === "number") {
    return weight;
  }
  return weightConversions[weight] || 400;
};
function rawResolveFontToUse(familyMapsByPriority, family, weightIn, style, stretch) {
  let weight = fontWeightToNumber(weightIn);
  for (const fontFamiles of familyMapsByPriority) {
    const fontFaces = fontFamiles[family];
    if (!fontFaces) {
      continue;
    }
    if (fontFaces.size === 1) {
      console.warn("TrFontManager: Only one font face found for family: '".concat(family, "' - will be used for all weights and styles"));
      return fontFaces.values().next().value;
    }
    const weightMap = /* @__PURE__ */ new Map();
    for (const fontFace of fontFaces) {
      const fontFamilyWeight = fontWeightToNumber(fontFace.descriptors.weight);
      if (fontFamilyWeight === weight && fontFace.descriptors.style === style && fontFace.descriptors.stretch === stretch) {
        return fontFace;
      }
      weightMap.set(fontFamilyWeight, fontFace);
    }
    const msg = "TrFontManager: No exact match: '".concat(family, " Weight: ").concat(weight, " Style: ").concat(style, " Stretch: ").concat(stretch, "'");
    console.error(msg);
    if (weight === 400 && weightMap.has(500)) {
      return weightMap.get(500);
    }
    if (weight === 500 && weightMap.has(400)) {
      return weightMap.get(400);
    }
    if (weight < 400) {
      while (weight > 0) {
        if (weightMap.has(weight)) {
          return weightMap.get(weight);
        }
        weight -= 100;
      }
      weight = 600;
    }
    while (weight < 1e3) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight += 100;
    }
    weight = 500;
    while (weight > 0) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight -= 100;
    }
  }
  return;
}
const resolveFontToUse = memize(rawResolveFontToUse);
class TrFontManager {
  constructor(textRenderers) {
    __publicField(this, "textRenderers");
    this.textRenderers = textRenderers;
  }
  addFontFace(font) {
    for (const trId in this.textRenderers) {
      const tr = this.textRenderers[trId];
      if (tr && tr.isFontFaceSupported(font)) {
        tr.addFontFace(font);
      }
    }
  }
  /**
   * Utility method to resolve a single font face from a list of prioritized family maps based on
   * a set of font properties.
   *
   * @remarks
   * These are to be used by a text renderer to resolve a font face if needed.
   *
   * @param familyMapsByPriority
   * @param props
   * @returns
   */
  static resolveFontFace(familyMapsByPriority, props) {
    const { fontFamily, fontWeight, fontStyle, fontStretch } = props;
    return resolveFontToUse(familyMapsByPriority, fontFamily, fontWeight, fontStyle, fontStretch);
  }
}
const tmpRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
class SdfTextRenderer extends TextRenderer {
  constructor(stage) {
    super(stage);
    /**
     * Map of font family names to a set of font faces.
     */
    __publicField(this, "ssdfFontFamilies", {});
    __publicField(this, "msdfFontFamilies", {});
    __publicField(this, "fontFamilyArray", [
      this.ssdfFontFamilies,
      this.msdfFontFamilies
    ]);
    __publicField(this, "sdfShader");
    __publicField(this, "rendererBounds");
    this.sdfShader = this.stage.shManager.loadShader("SdfShader").shader;
    this.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: this.stage.options.appWidth,
      y2: this.stage.options.appHeight
    };
  }
  //#region Overrides
  getPropertySetters() {
    return {
      fontFamily: (state, value) => {
        state.props.fontFamily = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontWeight: (state, value) => {
        state.props.fontWeight = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStyle: (state, value) => {
        state.props.fontStyle = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStretch: (state, value) => {
        state.props.fontStretch = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontSize: (state, value) => {
        state.props.fontSize = value;
        this.invalidateLayoutCache(state);
      },
      text: (state, value) => {
        state.props.text = value;
        this.invalidateLayoutCache(state);
      },
      textAlign: (state, value) => {
        state.props.textAlign = value;
        this.invalidateLayoutCache(state);
      },
      color: (state, value) => {
        state.props.color = value;
      },
      x: (state, value) => {
        state.props.x = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsX(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      y: (state, value) => {
        state.props.y = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsY(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      contain: (state, value) => {
        state.props.contain = value;
        this.invalidateLayoutCache(state);
      },
      width: (state, value) => {
        state.props.width = value;
        if (state.props.contain !== "none") {
          this.invalidateLayoutCache(state);
        }
      },
      height: (state, value) => {
        state.props.height = value;
        if (state.props.contain === "both") {
          this.invalidateLayoutCache(state);
        }
      },
      offsetY: (state, value) => {
        state.props.offsetY = value;
        this.invalidateLayoutCache(state);
      },
      scrollable: (state, value) => {
        state.props.scrollable = value;
        this.invalidateLayoutCache(state);
      },
      scrollY: (state, value) => {
        state.props.scrollY = value;
        this.scheduleUpdateState(state);
      },
      letterSpacing: (state, value) => {
        state.props.letterSpacing = value;
        this.invalidateLayoutCache(state);
      },
      lineHeight: (state, value) => {
        state.props.lineHeight = value;
        this.invalidateLayoutCache(state);
      },
      maxLines: (state, value) => {
        state.props.maxLines = value;
        this.invalidateLayoutCache(state);
      },
      textBaseline: (state, value) => {
        state.props.textBaseline = value;
        this.invalidateLayoutCache(state);
      },
      verticalAlign: (state, value) => {
        state.props.verticalAlign = value;
        this.invalidateLayoutCache(state);
      },
      overflowSuffix: (state, value) => {
        state.props.overflowSuffix = value;
        this.invalidateLayoutCache(state);
      },
      debug: (state, value) => {
        state.props.debug = value;
      }
    };
  }
  canRenderFont(props) {
    const { fontFamily } = props;
    return fontFamily in this.ssdfFontFamilies || fontFamily in this.msdfFontFamilies || fontFamily === "$$SDF_FAILURE_TEST$$";
  }
  isFontFaceSupported(fontFace) {
    return fontFace instanceof SdfTrFontFace;
  }
  addFontFace(fontFace) {
    assertTruthy(fontFace instanceof SdfTrFontFace);
    const familyName = fontFace.fontFamily;
    const fontFamiles = fontFace.type === "ssdf" ? this.ssdfFontFamilies : fontFace.type === "msdf" ? this.msdfFontFamilies : void 0;
    if (!fontFamiles) {
      console.warn("Invalid font face type: ".concat(fontFace.type));
      return;
    }
    let faceSet = fontFamiles[familyName];
    if (!faceSet) {
      faceSet = /* @__PURE__ */ new Set();
      fontFamiles[familyName] = faceSet;
    }
    faceSet.add(fontFace);
  }
  createState(props) {
    return {
      props,
      status: "initialState",
      updateScheduled: false,
      emitter: new EventEmitter(),
      lineCache: [],
      forceFullLayoutCalc: false,
      renderWindow: {
        screen: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        sdf: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        firstLineIdx: 0,
        numLines: 0,
        valid: false
      },
      elementBounds: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        valid: false
      },
      clippingRect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        valid: false
      },
      bufferNumFloats: 0,
      bufferNumQuads: 0,
      vertexBuffer: void 0,
      webGlBuffers: null,
      bufferUploaded: false,
      textH: void 0,
      textW: void 0,
      distanceRange: 0,
      trFontFace: void 0,
      isRenderable: false,
      debugData: {
        updateCount: 0,
        layoutCount: 0,
        lastLayoutNumCharacters: 0,
        layoutSum: 0,
        drawSum: 0,
        drawCount: 0,
        bufferSize: 0
      }
    };
  }
  updateState(state) {
    let { trFontFace } = state;
    const { textH, lineCache, debugData, forceFullLayoutCalc } = state;
    debugData.updateCount++;
    if (state.status === "initialState") {
      this.setStatus(state, "loading");
    }
    if (!trFontFace) {
      trFontFace = this.resolveFontFace(state.props);
      state.trFontFace = trFontFace;
      if (!trFontFace) {
        const msg = "SdfTextRenderer: Could not resolve font face for family: '".concat(state.props.fontFamily, "'");
        console.error(msg);
        this.setStatus(state, "failed", new Error(msg));
        return;
      }
      trFontFace.texture.setRenderableOwner(state, state.isRenderable);
    }
    if (!trFontFace.loaded) {
      trFontFace.once("loaded", () => {
        this.scheduleUpdateState(state);
      });
      return;
    }
    assertTruthy(trFontFace.data, "Font face data should be loaded");
    const { text: text2, fontSize, x, y, contain, width, height, lineHeight, verticalAlign, scrollable, overflowSuffix, maxLines } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { renderWindow } = state;
    const sdfFontSize = trFontFace.data.info.size;
    const fontSizeRatio = fontSize / sdfFontSize;
    const sdfLineHeight = lineHeight / fontSizeRatio;
    state.distanceRange = fontSizeRatio * trFontFace.data.distanceField.distanceRange;
    const neededLength = text2.length * FLOATS_PER_GLYPH;
    let vertexBuffer = state.vertexBuffer;
    if (!vertexBuffer || vertexBuffer.length < neededLength) {
      vertexBuffer = new Float32Array(neededLength * 2);
    }
    const elementBounds = state.elementBounds;
    if (!elementBounds.valid) {
      this.setElementBoundsX(state);
      this.setElementBoundsY(state);
      elementBounds.valid = true;
    }
    if (!forceFullLayoutCalc && renderWindow.valid) {
      const rwScreen = renderWindow.screen;
      if (x + rwScreen.x1 <= elementBounds.x1 && x + rwScreen.x2 >= elementBounds.x2 && y - scrollY + rwScreen.y1 <= elementBounds.y1 && y - scrollY + rwScreen.y2 >= elementBounds.y2) {
        this.setStatus(state, "loaded");
        return;
      }
      renderWindow.valid = false;
      this.setStatus(state, "loading");
    }
    const { offsetY, textAlign } = state.props;
    if (!renderWindow.valid) {
      const isPossiblyOnScreen = boundsOverlap(elementBounds, this.rendererBounds);
      if (!isPossiblyOnScreen) {
        return;
      }
      setRenderWindow(renderWindow, x, y, scrollY, lineHeight, contain === "both" ? elementBounds.y2 - elementBounds.y1 : 0, elementBounds, fontSizeRatio);
    }
    const start = getStartConditions(sdfFontSize, sdfLineHeight, lineHeight, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH);
    if (!start) {
      this.setStatus(state, "loaded");
      return;
    }
    const { letterSpacing } = state.props;
    const out2 = layoutText(start.lineIndex, start.sdfX, start.sdfY, text2, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, renderWindow.sdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines);
    state.bufferUploaded = false;
    state.bufferNumFloats = out2.bufferNumFloats;
    state.bufferNumQuads = out2.bufferNumQuads;
    state.vertexBuffer = vertexBuffer;
    state.renderWindow = renderWindow;
    debugData.lastLayoutNumCharacters = out2.layoutNumCharacters;
    debugData.bufferSize = vertexBuffer.byteLength;
    if (out2.fullyProcessed) {
      state.textW = out2.maxX * fontSizeRatio;
      state.textH = out2.maxY * fontSizeRatio;
    }
    this.setStatus(state, "loaded");
  }
  renderQuads(state, transform, clippingRect, alpha, parentHasRenderTexture, framebufferDimensions) {
    var _a3, _b2, _c2;
    if (!state.vertexBuffer) {
      return;
    }
    const { renderer: renderer2 } = this.stage;
    const { fontSize, color, contain, scrollable, zIndex, debug } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { textW = 0, textH = 0, distanceRange, vertexBuffer, bufferUploaded, trFontFace, elementBounds } = state;
    let { webGlBuffers } = state;
    if (!webGlBuffers) {
      const glw = renderer2.glw;
      const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
      const webGlBuffer = glw.createBuffer();
      assertTruthy(webGlBuffer);
      state.webGlBuffers = new BufferCollection([
        {
          buffer: webGlBuffer,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 0
              // start at the beginning of the buffer
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }
      ]);
      state.bufferUploaded = false;
      assertTruthy(state.webGlBuffers);
      webGlBuffers = state.webGlBuffers;
    }
    if (!bufferUploaded) {
      const glw = renderer2.glw;
      const buffer = (_a3 = webGlBuffers == null ? void 0 : webGlBuffers.getBuffer("a_textureCoordinate")) != null ? _a3 : null;
      glw.arrayBufferData(buffer, vertexBuffer, glw.STATIC_DRAW);
      state.bufferUploaded = true;
    }
    assertTruthy(trFontFace);
    if (scrollable && contain === "both") {
      assertTruthy(elementBounds.valid);
      const elementRect = convertBoundToRect(elementBounds, tmpRect);
      if (clippingRect.valid) {
        state.clippingRect.valid = true;
        clippingRect = intersectRect(clippingRect, elementRect, state.clippingRect);
      } else {
        state.clippingRect.valid = true;
        clippingRect = copyRect(elementRect, state.clippingRect);
      }
    }
    const renderOp = new WebGlCoreRenderOp(renderer2.glw, renderer2.options, webGlBuffers, this.sdfShader, {
      transform: transform.data,
      // IMPORTANT: The SDF Shader expects the color NOT to be premultiplied
      // for the best blending results. Which is why we use `mergeColorAlpha`
      // instead of `mergeColorAlphaPremultiplied` here.
      color: mergeColorAlpha(color, alpha),
      size: fontSize / (((_b2 = trFontFace.data) == null ? void 0 : _b2.info.size) || 0),
      scrollY,
      distanceRange,
      debug: debug.sdfShaderDebug
    }, alpha, clippingRect, { height: textH, width: textW }, 0, zIndex, false, parentHasRenderTexture, framebufferDimensions);
    const texture = (_c2 = state.trFontFace) == null ? void 0 : _c2.texture;
    assertTruthy(texture);
    const ctxTexture = this.stage.txManager.getCtxTexture(texture);
    renderOp.addTexture(ctxTexture);
    renderOp.length = state.bufferNumFloats;
    renderOp.numQuads = state.bufferNumQuads;
    renderer2.addRenderOp(renderOp);
  }
  setIsRenderable(state, renderable) {
    var _a3;
    super.setIsRenderable(state, renderable);
    (_a3 = state.trFontFace) == null ? void 0 : _a3.texture.setRenderableOwner(state, renderable);
  }
  destroyState(state) {
    var _a3;
    super.destroyState(state);
    (_a3 = state.trFontFace) == null ? void 0 : _a3.texture.setRenderableOwner(state, false);
  }
  //#endregion Overrides
  resolveFontFace(props) {
    return TrFontManager.resolveFontFace(this.fontFamilyArray, props);
  }
  /**
   * Release the loaded SDF font face
   *
   * @param state
   */
  releaseFontFace(state) {
    if (state.trFontFace) {
      state.trFontFace.texture.setRenderableOwner(state, false);
      state.trFontFace = void 0;
    }
  }
  /**
   * Invalidate the layout cache stored in the state. This will cause the text
   * to be re-layed out on the next update.
   *
   * @remarks
   * This also invalidates the visible window cache.
   *
   * @param state
   */
  invalidateLayoutCache(state) {
    state.renderWindow.valid = false;
    state.elementBounds.valid = false;
    state.textH = void 0;
    state.textW = void 0;
    state.lineCache = [];
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  setElementBoundsX(state) {
    const { x, contain, width } = state.props;
    const { elementBounds } = state;
    elementBounds.x1 = x;
    elementBounds.x2 = contain !== "none" ? x + width : Infinity;
  }
  setElementBoundsY(state) {
    const { y, contain, height } = state.props;
    const { elementBounds } = state;
    elementBounds.y1 = y;
    elementBounds.y2 = contain === "both" ? y + height : Infinity;
  }
}
function classExtendsCoreExtension(Class) {
  return Class.prototype instanceof CoreExtension;
}
async function loadCoreExtension(coreExtensionModule, stage) {
  let module;
  try {
    console.log("Loading core extension", coreExtensionModule);
    module = await __vitePreload(() => import(
      coreExtensionModule
      /* @vite-ignore */
    ), true ? [] : void 0);
  } catch (e) {
    console.error("The core extension module at '".concat(coreExtensionModule, "' could not be loaded."));
    console.error(e);
    return;
  }
  if (!module.default) {
    console.error("The core extension module at '".concat(coreExtensionModule, "' does not have a default export."));
    return;
  }
  const ExtensionClass = module.default;
  if (classExtendsCoreExtension(ExtensionClass)) {
    const coreExtension = new ExtensionClass();
    try {
      await coreExtension.run(stage);
    } catch (e) {
      console.error("The core extension at '".concat(coreExtensionModule, "' threw an error."));
      console.error(e);
    }
  } else {
    console.error("The core extension at '".concat(coreExtensionModule, "' does not extend CoreExtension."));
  }
}
function santizeCustomDataMap(d) {
  const validTypes = { boolean: true, string: true, number: true };
  const keys = Object.keys(d);
  for (let i = 0; i < keys.length; i++) {
    const key2 = keys[i];
    if (!key2) {
      continue;
    }
    const value = d[key2];
    const valueType = typeof value;
    if (valueType === "string" && value.length > 2048) {
      console.warn("Custom Data value for ".concat(key2, " is too long, it will be truncated to 2048 characters"));
      d[key2] = value.substring(0, 2048);
    }
    if (!validTypes[valueType]) {
      console.warn("Custom Data value for ".concat(key2, " is not a boolean, string, or number, it will be ignored"));
      delete d[key2];
    }
  }
  return d;
}
class RendererMain extends EventEmitter {
  /**
   * Constructs a new Renderer instance
   *
   * @param settings Renderer settings
   * @param target Element ID or HTMLElement to insert the canvas into
   * @param driver Core Driver to use
   */
  constructor(settings, target, driver) {
    var _a3, _b2, _c2, _d2;
    super();
    __publicField(this, "root", null);
    __publicField(this, "driver");
    __publicField(this, "canvas");
    __publicField(this, "settings");
    __publicField(this, "inspector", null);
    __publicField(this, "nodes", /* @__PURE__ */ new Map());
    __publicField(this, "nextTextureId", 1);
    /**
     * Texture Usage Tracker for Usage Based Texture Garbage Collection
     *
     * @remarks
     * For internal use only. DO NOT ACCESS.
     */
    __publicField(this, "textureTracker");
    const resolvedSettings = {
      appWidth: settings.appWidth || 1920,
      appHeight: settings.appHeight || 1080,
      txMemByteThreshold: settings.txMemByteThreshold || 124e6,
      boundsMargin: settings.boundsMargin || 0,
      deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: (_a3 = settings.clearColor) != null ? _a3 : 0,
      coreExtensionModule: settings.coreExtensionModule || null,
      experimental_FinalizationRegistryTextureUsageTracker: (_b2 = settings.experimental_FinalizationRegistryTextureUsageTracker) != null ? _b2 : false,
      textureCleanupOptions: settings.textureCleanupOptions || {},
      fpsUpdateInterval: settings.fpsUpdateInterval || 0,
      numImageWorkers: settings.numImageWorkers !== void 0 ? settings.numImageWorkers : 2,
      enableContextSpy: (_c2 = settings.enableContextSpy) != null ? _c2 : false,
      enableInspector: (_d2 = settings.enableInspector) != null ? _d2 : false
    };
    this.settings = resolvedSettings;
    const { appWidth, appHeight, deviceLogicalPixelRatio, devicePhysicalPixelRatio, enableInspector } = resolvedSettings;
    const releaseCallback = (textureId) => {
      this.driver.releaseTexture(textureId);
    };
    const useFinalizationRegistryTracker = resolvedSettings.experimental_FinalizationRegistryTextureUsageTracker && typeof FinalizationRegistry === "function";
    this.textureTracker = useFinalizationRegistryTracker ? new FinalizationRegistryTextureUsageTracker(releaseCallback) : new ManualCountTextureUsageTracker(releaseCallback, this.settings.textureCleanupOptions);
    const deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
    const deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
    this.driver = driver;
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
    canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
    canvas.style.width = "".concat(deviceLogicalWidth, "px");
    canvas.style.height = "".concat(deviceLogicalHeight, "px");
    let targetEl;
    if (typeof target === "string") {
      targetEl = document.getElementById(target);
    } else {
      targetEl = target;
    }
    if (!targetEl) {
      throw new Error("Could not find target element");
    }
    driver.onCreateNode = (node) => {
      this.nodes.set(node.id, node);
    };
    driver.onBeforeDestroyNode = (node) => {
      this.nodes.delete(node.id);
    };
    driver.onFpsUpdate = (fpsData) => {
      this.emit("fpsUpdate", fpsData);
    };
    driver.onFrameTick = (frameTickData) => {
      this.emit("frameTick", frameTickData);
    };
    driver.onIdle = () => {
      this.emit("idle");
    };
    targetEl.appendChild(canvas);
    if (enableInspector && !isProductionEnvironment()) {
      this.inspector = new Inspector(canvas, resolvedSettings);
    }
  }
  /**
   * Initialize the renderer
   *
   * @remarks
   * This method must be called and resolved asyncronously before any other
   * methods are called.
   */
  async init() {
    await this.driver.init(this, this.settings, this.canvas);
    this.root = this.driver.getRootNode();
  }
  /**
   * Create a new scene graph node
   *
   * @remarks
   * A node is the main graphical building block of the Renderer scene graph. It
   * can be a container for other nodes, or it can be a leaf node that renders a
   * solid color, gradient, image, or specific texture, using a specific shader.
   *
   * To create a text node, see {@link createTextNode}.
   *
   * See {@link INode} for more details.
   *
   * @param props
   * @returns
   */
  createNode(props) {
    if (this.inspector) {
      return this.inspector.createNode(this.driver, this.resolveNodeDefaults(props));
    }
    return this.driver.createNode(this.resolveNodeDefaults(props));
  }
  /**
   * Create a new scene graph text node
   *
   * @remarks
   * A text node is the second graphical building block of the Renderer scene
   * graph. It renders text using a specific text renderer that is automatically
   * chosen based on the font requested and what type of fonts are installed
   * into an app via a CoreExtension.
   *
   * See {@link ITextNode} for more details.
   *
   * @param props
   * @returns
   */
  createTextNode(props) {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s;
    const fontSize = (_a3 = props.fontSize) != null ? _a3 : 16;
    const data = {
      ...this.resolveNodeDefaults(props),
      text: (_b2 = props.text) != null ? _b2 : "",
      textRendererOverride: (_c2 = props.textRendererOverride) != null ? _c2 : null,
      fontSize,
      fontFamily: (_d2 = props.fontFamily) != null ? _d2 : "sans-serif",
      fontStyle: (_e2 = props.fontStyle) != null ? _e2 : "normal",
      fontWeight: (_f2 = props.fontWeight) != null ? _f2 : "normal",
      fontStretch: (_g2 = props.fontStretch) != null ? _g2 : "normal",
      textAlign: (_h2 = props.textAlign) != null ? _h2 : "left",
      contain: (_i2 = props.contain) != null ? _i2 : "none",
      scrollable: (_j2 = props.scrollable) != null ? _j2 : false,
      scrollY: (_k2 = props.scrollY) != null ? _k2 : 0,
      offsetY: (_l2 = props.offsetY) != null ? _l2 : 0,
      letterSpacing: (_m2 = props.letterSpacing) != null ? _m2 : 0,
      lineHeight: (_n2 = props.lineHeight) != null ? _n2 : fontSize,
      maxLines: (_o2 = props.maxLines) != null ? _o2 : 0,
      textBaseline: (_p2 = props.textBaseline) != null ? _p2 : "alphabetic",
      verticalAlign: (_q2 = props.verticalAlign) != null ? _q2 : "top",
      overflowSuffix: (_r2 = props.overflowSuffix) != null ? _r2 : "...",
      debug: (_s = props.debug) != null ? _s : {}
    };
    if (this.inspector) {
      return this.inspector.createTextNode(this.driver, data);
    }
    return this.driver.createTextNode(data);
  }
  /**
   * Resolves the default property values for a Node
   *
   * @remarks
   * This method is used internally by the RendererMain to resolve the default
   * property values for a Node. It is exposed publicly so that it can be used
   * by Core Driver implementations.
   *
   * @param props
   * @returns
   */
  resolveNodeDefaults(props) {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z;
    const color = (_a3 = props.color) != null ? _a3 : 4294967295;
    const colorTl = (_d2 = (_c2 = (_b2 = props.colorTl) != null ? _b2 : props.colorTop) != null ? _c2 : props.colorLeft) != null ? _d2 : color;
    const colorTr = (_g2 = (_f2 = (_e2 = props.colorTr) != null ? _e2 : props.colorTop) != null ? _f2 : props.colorRight) != null ? _g2 : color;
    const colorBl = (_j2 = (_i2 = (_h2 = props.colorBl) != null ? _h2 : props.colorBottom) != null ? _i2 : props.colorLeft) != null ? _j2 : color;
    const colorBr = (_m2 = (_l2 = (_k2 = props.colorBr) != null ? _k2 : props.colorBottom) != null ? _l2 : props.colorRight) != null ? _m2 : color;
    const data = santizeCustomDataMap((_n2 = props.data) != null ? _n2 : {});
    const parentHasRenderTexture = (_r2 = (_q2 = (_o2 = props.parent) == null ? void 0 : _o2.rtt) != null ? _q2 : (_p2 = props.parent) == null ? void 0 : _p2.parentHasRenderTexture) != null ? _r2 : false;
    return {
      x: (_s = props.x) != null ? _s : 0,
      y: (_t = props.y) != null ? _t : 0,
      width: (_u = props.width) != null ? _u : 0,
      height: (_v = props.height) != null ? _v : 0,
      alpha: (_w = props.alpha) != null ? _w : 1,
      autosize: (_x = props.autosize) != null ? _x : false,
      clipping: (_y = props.clipping) != null ? _y : false,
      color,
      colorTop: (_z = props.colorTop) != null ? _z : color,
      colorBottom: (_A = props.colorBottom) != null ? _A : color,
      colorLeft: (_B = props.colorLeft) != null ? _B : color,
      colorRight: (_C = props.colorRight) != null ? _C : color,
      colorBl,
      colorBr,
      colorTl,
      colorTr,
      zIndex: (_D = props.zIndex) != null ? _D : 0,
      zIndexLocked: (_E = props.zIndexLocked) != null ? _E : 0,
      parent: (_F = props.parent) != null ? _F : null,
      texture: (_G = props.texture) != null ? _G : null,
      shader: (_H = props.shader) != null ? _H : null,
      // Since setting the `src` will trigger a texture load, we need to set it after
      // we set the texture. Otherwise, problems happen.
      src: (_I = props.src) != null ? _I : "",
      scale: (_J = props.scale) != null ? _J : null,
      scaleX: (_L = (_K = props.scaleX) != null ? _K : props.scale) != null ? _L : 1,
      scaleY: (_N = (_M = props.scaleY) != null ? _M : props.scale) != null ? _N : 1,
      mount: (_O = props.mount) != null ? _O : 0,
      mountX: (_Q = (_P = props.mountX) != null ? _P : props.mount) != null ? _Q : 0,
      mountY: (_S = (_R = props.mountY) != null ? _R : props.mount) != null ? _S : 0,
      pivot: (_T = props.pivot) != null ? _T : 0.5,
      pivotX: (_V = (_U = props.pivotX) != null ? _U : props.pivot) != null ? _V : 0.5,
      pivotY: (_X = (_W = props.pivotY) != null ? _W : props.pivot) != null ? _X : 0.5,
      rotation: (_Y = props.rotation) != null ? _Y : 0,
      rtt: (_Z = props.rtt) != null ? _Z : false,
      parentHasRenderTexture,
      data
    };
  }
  /**
   * Destroy a node
   *
   * @remarks
   * This method destroys a node but does not destroy its children.
   *
   * @param node
   * @returns
   */
  destroyNode(node) {
    if (this.inspector) {
      this.inspector.destroyNode(node);
    }
    return this.driver.destroyNode(node);
  }
  /**
   * Create a new texture reference
   *
   * @remarks
   * This method creates a new reference to a texture. The texture is not
   * loaded until it is used on a node.
   *
   * It can be assigned to a node's `texture` property, or it can be used
   * when creating a SubTexture.
   *
   * @param textureType
   * @param props
   * @param options
   * @returns
   */
  createTexture(textureType, props, options) {
    const id = this.nextTextureId++;
    const desc = {
      descType: "texture",
      txType: textureType,
      props,
      options: {
        ...options,
        // This ID is used to identify the texture in the CoreTextureManager's
        // ID Texture Map cache.
        id
      }
    };
    this.textureTracker.registerTexture(desc);
    return desc;
  }
  /**
   * Create a new shader reference
   *
   * @remarks
   * This method creates a new reference to a shader. The shader is not
   * loaded until it is used on a Node.
   *
   * It can be assigned to a Node's `shader` property.
   *
   * @param shaderType
   * @param props
   * @returns
   */
  createShader(shaderType, props) {
    return {
      descType: "shader",
      shType: shaderType,
      props
    };
  }
  /**
   * Get a Node by its ID
   *
   * @param id
   * @returns
   */
  getNodeById(id) {
    return this.nodes.get(id) || null;
  }
  toggleFreeze() {
    throw new Error("Not implemented");
  }
  advanceFrame() {
    throw new Error("Not implemented");
  }
  /**
   * Re-render the current frame without advancing any running animations.
   *
   * @remarks
   * Any state changes will be reflected in the re-rendered frame. Useful for
   * debugging.
   *
   * May not do anything if the render loop is running on a separate worker.
   */
  rerender() {
    throw new Error("Not implemented");
  }
}
class CoreAnimation extends EventEmitter {
  //fixme - aint got not time for this
  constructor(node, props, settings) {
    super();
    __publicField(this, "node");
    __publicField(this, "props");
    __publicField(this, "settings");
    __publicField(this, "propStartValues", {});
    __publicField(this, "restoreValues", {});
    __publicField(this, "progress", 0);
    __publicField(this, "delayFor", 0);
    __publicField(this, "timingFunction");
    __publicField(this, "propsList");
    this.node = node;
    this.props = props;
    this.settings = settings;
    this.propStartValues = {};
    this.propsList = Object.keys(props);
    this.propsList.forEach((propName) => {
      this.propStartValues[propName] = node[propName];
    });
    this.timingFunction = (t) => t;
    if (settings.easing && typeof settings.easing === "string") {
      this.timingFunction = getTimingFunction(settings.easing);
    }
    this.delayFor = settings.delay || 0;
  }
  reset() {
    this.progress = 0;
    this.delayFor = this.settings.delay || 0;
    this.update(0);
  }
  restore() {
    this.reset();
    Object.keys(this.props).forEach((propName) => {
      this.node[propName] = this.propStartValues[propName];
    });
  }
  reverse() {
    this.progress = 0;
    Object.keys(this.props).forEach((propName) => {
      const startValue = this.props[propName];
      const endValue = this.propStartValues[propName];
      this.props[propName] = endValue;
      this.propStartValues[propName] = startValue;
    });
    if (!this.settings.loop) {
      this.settings.stopMethod = false;
    }
  }
  applyEasing(p, s, e) {
    return (this.timingFunction(p) || p) * (e - s) + s;
  }
  update(dt) {
    const { duration, loop, easing, stopMethod } = this.settings;
    if (!duration) {
      this.emit("finished", {});
      return;
    }
    if (this.delayFor > 0) {
      this.delayFor -= dt;
      return;
    }
    if (this.delayFor <= 0 && this.progress === 0) {
      this.emit("start", {});
    }
    this.progress += dt / duration;
    if (this.progress > 1) {
      this.progress = loop ? 0 : 1;
      if (stopMethod) {
        this.emit("finished", {});
        return;
      }
    }
    for (let i = 0; i < this.propsList.length; i++) {
      const propName = this.propsList[i];
      const propValue = this.props[propName];
      const startValue = this.propStartValues[propName];
      const endValue = propValue;
      if (propName.indexOf("color") !== -1) {
        if (startValue === endValue) {
          this.node[propName] = startValue;
          continue;
        }
        if (easing) {
          const easingProgressValue = this.timingFunction(this.progress) || this.progress;
          const easingColorValue = mergeColorProgress(startValue, endValue, easingProgressValue);
          this.node[propName] = easingColorValue;
          continue;
        }
        this.node[propName] = mergeColorProgress(startValue, endValue, this.progress);
        continue;
      }
      if (easing) {
        this.node[propName] = this.applyEasing(this.progress, startValue, endValue);
        continue;
      }
      this.node[propName] = startValue + (endValue - startValue) * this.progress;
    }
    if (this.progress === 1) {
      this.emit("finished", {});
    }
  }
}
class CoreAnimationController {
  constructor(manager, animation) {
    __publicField(this, "manager");
    __publicField(this, "animation");
    __publicField(this, "startedPromise", null);
    /**
     * If this is null, then the animation hasn't started yet.
     */
    __publicField(this, "startedResolve", null);
    __publicField(this, "stoppedPromise", null);
    /**
     * If this is null, then the animation is in a finished / stopped state.
     */
    __publicField(this, "stoppedResolve", null);
    __publicField(this, "state");
    this.manager = manager;
    this.animation = animation;
    this.state = "stopped";
  }
  start() {
    this.makeStartedPromise();
    this.animation.once("start", this.started.bind(this));
    this.makeStoppedPromise();
    this.animation.once("finished", this.finished.bind(this));
    if (!this.manager.activeAnimations.has(this.animation)) {
      this.manager.registerAnimation(this.animation);
    }
    this.state = "running";
    return this;
  }
  stop() {
    this.manager.unregisterAnimation(this.animation);
    if (this.stoppedResolve !== null) {
      this.stoppedResolve();
      this.stoppedResolve = null;
    }
    this.animation.reset();
    this.state = "stopped";
    return this;
  }
  pause() {
    this.manager.unregisterAnimation(this.animation);
    this.state = "paused";
    return this;
  }
  restore() {
    this.stoppedResolve = null;
    this.animation.restore();
    return this;
  }
  waitUntilStarted() {
    this.makeStartedPromise();
    const promise = this.startedPromise;
    assertTruthy(promise);
    return promise;
  }
  waitUntilStopped() {
    this.makeStoppedPromise();
    const promise = this.stoppedPromise;
    assertTruthy(promise);
    return promise;
  }
  makeStartedPromise() {
    if (this.startedResolve === null) {
      this.startedPromise = new Promise((resolve) => {
        this.startedResolve = resolve;
      });
    }
  }
  makeStoppedPromise() {
    if (this.stoppedResolve === null) {
      this.stoppedPromise = new Promise((resolve) => {
        this.stoppedResolve = resolve;
      });
    }
  }
  started() {
    assertTruthy(this.startedResolve);
    this.startedResolve(this);
    this.startedResolve = null;
  }
  finished() {
    assertTruthy(this.stoppedResolve);
    const { loop, stopMethod } = this.animation.settings;
    if (stopMethod === "reverse") {
      this.animation.reverse();
      this.start();
      return;
    }
    this.stoppedResolve();
    this.stoppedResolve = null;
    if (loop) {
      return;
    }
    this.manager.unregisterAnimation(this.animation);
  }
}
const m0 = 0;
const m1 = 3;
const m2 = 6;
const m3 = 1;
const m4 = 4;
const m5 = 7;
const m6 = 2;
const m7 = 5;
const m8 = 8;
class Matrix3d {
  /**
   * Creates a new 3x3 matrix.
   *
   * @param entries Row-major 3x3 matrix
   */
  constructor(entries) {
    __publicField(this, "data");
    if (entries) {
      this.data = new Float32Array(9);
      this.data[m0] = entries[0];
      this.data[m1] = entries[3];
      this.data[m2] = entries[6];
      this.data[m3] = entries[1];
      this.data[m4] = entries[4];
      this.data[m5] = entries[7];
      this.data[m6] = entries[2];
      this.data[m7] = entries[5];
      this.data[m8] = entries[8];
    } else {
      this.data = new Float32Array(9);
    }
  }
  /**
   * Returns a temporary matrix that can be used for calculations.
   *
   * @remarks
   * This is useful for avoiding allocations in tight loops.
   *
   * The matrix is not guaranteed to be the same between calls.
   *
   * @returns
   */
  static get temp() {
    return tempMatrix;
  }
  static multiply(a, b, out) {
    const e0 = a.data[m0] * b.data[m0] + a.data[m1] * b.data[m3] + a.data[m2] * b.data[m6];
    const e1 = a.data[m0] * b.data[m1] + a.data[m1] * b.data[m4] + a.data[m2] * b.data[m7];
    const e2 = a.data[m0] * b.data[m2] + a.data[m1] * b.data[m5] + a.data[m2] * b.data[m8];
    const e3 = a.data[m3] * b.data[m0] + a.data[m4] * b.data[m3] + a.data[m5] * b.data[m6];
    const e4 = a.data[m3] * b.data[m1] + a.data[m4] * b.data[m4] + a.data[m5] * b.data[m7];
    const e5 = a.data[m3] * b.data[m2] + a.data[m4] * b.data[m5] + a.data[m5] * b.data[m8];
    const e6 = a.data[m6] * b.data[m0] + a.data[m7] * b.data[m3] + a.data[m8] * b.data[m6];
    const e7 = a.data[m6] * b.data[m1] + a.data[m7] * b.data[m4] + a.data[m8] * b.data[m7];
    const e8 = a.data[m6] * b.data[m2] + a.data[m7] * b.data[m5] + a.data[m8] * b.data[m8];
    if (!out) {
      out = new Matrix3d();
    }
    out.data[m0] = e0;
    out.data[m1] = e1;
    out.data[m2] = e2;
    out.data[m3] = e3;
    out.data[m4] = e4;
    out.data[m5] = e5;
    out.data[m6] = e6;
    out.data[m7] = e7;
    out.data[m8] = e8;
    return out;
  }
  static identity(out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.data[m0] = 1;
    out.data[m1] = 0;
    out.data[m2] = 0;
    out.data[m3] = 0;
    out.data[m4] = 1;
    out.data[m5] = 0;
    out.data[m6] = 0;
    out.data[m7] = 0;
    out.data[m8] = 1;
    return out;
  }
  static translate(x, y, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.data[m0] = 1;
    out.data[m1] = 0;
    out.data[m2] = x;
    out.data[m3] = 0;
    out.data[m4] = 1;
    out.data[m5] = y;
    out.data[m6] = 0;
    out.data[m7] = 0;
    out.data[m8] = 1;
    return out;
  }
  static scale(sx, sy, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.data[m0] = sx;
    out.data[m1] = 0;
    out.data[m2] = 0;
    out.data[m3] = 0;
    out.data[m4] = sy;
    out.data[m5] = 0;
    out.data[m6] = 0;
    out.data[m7] = 0;
    out.data[m8] = 1;
    return out;
  }
  static rotate(angle, out) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    if (!out) {
      out = new Matrix3d();
    }
    out.data[m0] = cos;
    out.data[m1] = -sin;
    out.data[m2] = 0;
    out.data[m3] = sin;
    out.data[m4] = cos;
    out.data[m5] = 0;
    out.data[m6] = 0;
    out.data[m7] = 0;
    out.data[m8] = 1;
    return out;
  }
  static copy(src, dst, transpose) {
    if (!dst) {
      dst = new Matrix3d();
    }
    dst.data[0] = src.data[0];
    dst.data[1] = src.data[1];
    dst.data[2] = src.data[2];
    dst.data[3] = src.data[3];
    dst.data[4] = src.data[4];
    dst.data[5] = src.data[5];
    dst.data[6] = src.data[6];
    dst.data[7] = src.data[7];
    dst.data[8] = src.data[8];
    return dst;
  }
  translate(x, y) {
    this.data[m2] = this.data[m0] * x + this.data[m1] * y + this.data[m2];
    this.data[m5] = this.data[m3] * x + this.data[m4] * y + this.data[m5];
    return this;
  }
  scale(sx, sy) {
    this.data[m0] = this.data[m0] * sx;
    this.data[m1] = this.data[m1] * sy;
    this.data[m3] = this.data[m3] * sx;
    this.data[m4] = this.data[m4] * sy;
    return this;
  }
  rotate(angle) {
    if (angle === 0 || !(angle % Math.PI * 2)) {
      return this;
    }
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const e0 = this.data[m0] * cos + this.data[m1] * sin;
    const e1 = this.data[m1] * cos - this.data[m0] * sin;
    const e3 = this.data[m3] * cos + this.data[m4] * sin;
    const e4 = this.data[m4] * cos - this.data[m3] * sin;
    this.data[m0] = e0;
    this.data[m1] = e1;
    this.data[m3] = e3;
    this.data[m4] = e4;
    return this;
  }
  multiply(other) {
    return Matrix3d.multiply(this, other, this);
  }
  get tx() {
    return this.data[m2];
  }
  get ty() {
    return this.data[m5];
  }
  get ta() {
    return this.data[m0];
  }
  get tb() {
    return this.data[m1];
  }
  get tc() {
    return this.data[m3];
  }
  get td() {
    return this.data[m4];
  }
  transformPoint(x, y) {
    return [
      this.data[m0] * x + this.data[m1] * y + this.data[m2],
      this.data[m3] * x + this.data[m4] * y + this.data[m3]
    ];
  }
}
const tempMatrix = new Matrix3d();
const rx1 = 0;
const rx2 = 2;
const rx3 = 4;
const rx4 = 6;
const ry1 = 1;
const ry2 = 3;
const ry3 = 5;
const ry4 = 7;
class RenderCoords {
  constructor(entries) {
    __publicField(this, "data");
    this.data = new Float32Array(8);
    if (entries) {
      this.data[rx1] = entries[rx1];
      this.data[rx2] = entries[rx2];
      this.data[rx3] = entries[rx3];
      this.data[rx4] = entries[rx4];
      this.data[ry1] = entries[ry1];
      this.data[ry2] = entries[ry2];
      this.data[ry3] = entries[ry3];
      this.data[ry4] = entries[ry4];
    }
  }
  static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
    if (!out) {
      out = new RenderCoords();
    }
    out.data[rx1] = x1;
    out.data[rx2] = x2;
    out.data[rx3] = x3;
    out.data[rx4] = x4;
    out.data[ry1] = y1;
    out.data[ry2] = y2;
    out.data[ry3] = y3;
    out.data[ry4] = y4;
    return out;
  }
  get x1() {
    return this.data[rx1];
  }
  get x2() {
    return this.data[rx2];
  }
  get x3() {
    return this.data[rx3];
  }
  get x4() {
    return this.data[rx4];
  }
  get y1() {
    return this.data[ry1];
  }
  get y2() {
    return this.data[ry2];
  }
  get y3() {
    return this.data[ry3];
  }
  get y4() {
    return this.data[ry4];
  }
}
var CoreNodeRenderState;
(function(CoreNodeRenderState2) {
  CoreNodeRenderState2[CoreNodeRenderState2["Init"] = 0] = "Init";
  CoreNodeRenderState2[CoreNodeRenderState2["OutOfBounds"] = 2] = "OutOfBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InBounds"] = 4] = "InBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InViewport"] = 8] = "InViewport";
})(CoreNodeRenderState || (CoreNodeRenderState = {}));
const CoreNodeRenderStateMap = /* @__PURE__ */ new Map();
CoreNodeRenderStateMap.set(CoreNodeRenderState.Init, "init");
CoreNodeRenderStateMap.set(CoreNodeRenderState.OutOfBounds, "outOfBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InBounds, "inBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InViewport, "inViewport");
var UpdateType;
(function(UpdateType2) {
  UpdateType2[UpdateType2["Children"] = 1] = "Children";
  UpdateType2[UpdateType2["ScaleRotate"] = 2] = "ScaleRotate";
  UpdateType2[UpdateType2["Local"] = 4] = "Local";
  UpdateType2[UpdateType2["Global"] = 8] = "Global";
  UpdateType2[UpdateType2["Clipping"] = 16] = "Clipping";
  UpdateType2[UpdateType2["CalculatedZIndex"] = 32] = "CalculatedZIndex";
  UpdateType2[UpdateType2["ZIndexSortedChildren"] = 64] = "ZIndexSortedChildren";
  UpdateType2[UpdateType2["PremultipliedColors"] = 128] = "PremultipliedColors";
  UpdateType2[UpdateType2["WorldAlpha"] = 256] = "WorldAlpha";
  UpdateType2[UpdateType2["RenderState"] = 512] = "RenderState";
  UpdateType2[UpdateType2["IsRenderable"] = 1024] = "IsRenderable";
  UpdateType2[UpdateType2["None"] = 0] = "None";
  UpdateType2[UpdateType2["All"] = 2047] = "All";
})(UpdateType || (UpdateType = {}));
class CoreNode extends EventEmitter {
  constructor(stage, props) {
    super();
    __publicField(this, "stage");
    __publicField(this, "children", []);
    __publicField(this, "props");
    __publicField(this, "updateType", UpdateType.All);
    __publicField(this, "globalTransform");
    __publicField(this, "scaleRotateTransform");
    __publicField(this, "localTransform");
    __publicField(this, "renderCoords");
    __publicField(this, "renderBound");
    __publicField(this, "strictBound");
    __publicField(this, "preloadBound");
    __publicField(this, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: false
    });
    __publicField(this, "isRenderable", false);
    __publicField(this, "renderState", CoreNodeRenderState.Init);
    __publicField(this, "worldAlpha", 1);
    __publicField(this, "premultipliedColorTl", 0);
    __publicField(this, "premultipliedColorTr", 0);
    __publicField(this, "premultipliedColorBl", 0);
    __publicField(this, "premultipliedColorBr", 0);
    __publicField(this, "calcZIndex", 0);
    __publicField(this, "hasRTTupdates", false);
    __publicField(this, "onTextureLoaded", (target, dimensions) => {
      this.autosizeNode(dimensions);
      if (this.parentHasRenderTexture) {
        this.setRTTUpdates(1);
      }
      this.emit("loaded", {
        type: "texture",
        dimensions
      });
      queueMicrotask(() => {
        this.stage.requestRender();
      });
    });
    __publicField(this, "onTextureFailed", (target, error) => {
      this.emit("failed", {
        type: "texture",
        error
      });
    });
    __publicField(this, "onTextureFreed", (target) => {
      this.emit("freed", {
        type: "texture"
      });
    });
    this.stage = stage;
    this.props = {
      ...props,
      parent: null,
      // Assign a default value to parentHasRenderTexture
      parentHasRenderTexture: false
    };
    this.parent = props.parent;
    this.rtt = props.rtt;
    this.updateScaleRotateTransform();
  }
  //#region Textures
  loadTexture(textureType, props, options = null) {
    if (this.props.texture) {
      this.unloadTexture();
    }
    const { txManager } = this.stage;
    const texture = txManager.loadTexture(textureType, props, options);
    this.props.texture = texture;
    this.props.textureOptions = options;
    this.setUpdateType(UpdateType.IsRenderable);
    queueMicrotask(() => {
      if (texture.state === "loaded") {
        this.onTextureLoaded(texture, texture.dimensions);
      } else if (texture.state === "failed") {
        this.onTextureFailed(texture, texture.error);
      } else if (texture.state === "freed") {
        this.onTextureFreed(texture);
      }
      texture.on("loaded", this.onTextureLoaded);
      texture.on("failed", this.onTextureFailed);
      texture.on("freed", this.onTextureFreed);
    });
  }
  unloadTexture() {
    if (this.props.texture) {
      const { texture } = this.props;
      texture.off("loaded", this.onTextureLoaded);
      texture.off("failed", this.onTextureFailed);
      texture.off("freed", this.onTextureFreed);
      texture.setRenderableOwner(this, false);
    }
    this.props.texture = null;
    this.props.textureOptions = null;
    this.setUpdateType(UpdateType.IsRenderable);
  }
  autosizeNode(dimensions) {
    if (this.autosize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
    }
  }
  //#endregion Textures
  loadShader(shaderType, props) {
    const shManager = this.stage.renderer.getShaderManager();
    assertTruthy(shManager);
    const { shader, props: p } = shManager.loadShader(shaderType, props);
    this.props.shader = shader;
    this.props.shaderProps = p;
    this.setUpdateType(UpdateType.IsRenderable);
  }
  /**
   * Change types types is used to determine the scope of the changes being applied
   *
   * @remarks
   * See {@link UpdateType} for more information on each type
   *
   * @param type
   */
  setUpdateType(type) {
    this.updateType |= type;
    const parent = this.props.parent;
    if (parent && !(parent.updateType & UpdateType.Children)) {
      parent.setUpdateType(UpdateType.Children);
    }
    if (this.parentHasRenderTexture) {
      this.setRTTUpdates(type);
    }
  }
  sortChildren() {
    this.children.sort((a, b) => a.calcZIndex - b.calcZIndex);
  }
  updateScaleRotateTransform() {
    this.scaleRotateTransform = Matrix3d.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
  }
  updateLocalTransform() {
    assertTruthy(this.scaleRotateTransform);
    const pivotTranslateX = this.props.pivotX * this.props.width;
    const pivotTranslateY = this.props.pivotY * this.props.height;
    const mountTranslateX = this.props.mountX * this.props.width;
    const mountTranslateY = this.props.mountY * this.props.height;
    this.localTransform = Matrix3d.translate(pivotTranslateX - mountTranslateX + this.props.x, pivotTranslateY - mountTranslateY + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-pivotTranslateX, -pivotTranslateY);
    this.setUpdateType(UpdateType.Global);
  }
  /**
   * @todo: test for correct calculation flag
   * @param delta
   */
  update(delta, parentClippingRect) {
    var _a3;
    if (this.updateType & UpdateType.ScaleRotate) {
      this.updateScaleRotateTransform();
      this.setUpdateType(UpdateType.Local);
    }
    if (this.updateType & UpdateType.Local) {
      this.updateLocalTransform();
      this.setUpdateType(UpdateType.Global);
    }
    const parent = this.props.parent;
    let childUpdateType = UpdateType.None;
    if (this.updateType & UpdateType.Global) {
      assertTruthy(this.localTransform);
      this.globalTransform = Matrix3d.copy((parent == null ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
      if (this.parentHasRenderTexture && ((_a3 = this.props.parent) == null ? void 0 : _a3.rtt)) {
        this.globalTransform = Matrix3d.identity();
      }
      if (parent) {
        this.globalTransform.multiply(this.localTransform);
      }
      this.calculateRenderCoords();
      this.updateBoundingRect();
      this.setUpdateType(UpdateType.Clipping | UpdateType.RenderState | UpdateType.Children);
      childUpdateType |= UpdateType.Global;
    }
    if (this.updateType & UpdateType.Clipping) {
      this.calculateClippingRect(parentClippingRect);
      this.setUpdateType(UpdateType.Children);
      childUpdateType |= UpdateType.Clipping;
    }
    if (this.updateType & UpdateType.WorldAlpha) {
      if (parent) {
        this.worldAlpha = parent.worldAlpha * this.props.alpha;
      } else {
        this.worldAlpha = this.props.alpha;
      }
      this.setUpdateType(UpdateType.Children | UpdateType.PremultipliedColors | UpdateType.IsRenderable);
      childUpdateType |= UpdateType.WorldAlpha;
    }
    if (this.updateType & UpdateType.PremultipliedColors) {
      this.premultipliedColorTl = mergeColorAlphaPremultiplied(this.props.colorTl, this.worldAlpha, true);
      if (this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl) {
        this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl;
      } else {
        this.premultipliedColorTr = mergeColorAlphaPremultiplied(this.props.colorTr, this.worldAlpha, true);
        this.premultipliedColorBl = mergeColorAlphaPremultiplied(this.props.colorBl, this.worldAlpha, true);
        this.premultipliedColorBr = mergeColorAlphaPremultiplied(this.props.colorBr, this.worldAlpha, true);
      }
    }
    if (this.updateType & UpdateType.RenderState) {
      this.updateRenderState(parentClippingRect);
      this.setUpdateType(UpdateType.IsRenderable);
    }
    if (this.updateType & UpdateType.IsRenderable) {
      this.updateIsRenderable();
    }
    if (parent && this.updateType & UpdateType.CalculatedZIndex) {
      this.calculateZIndex();
      parent.setUpdateType(UpdateType.ZIndexSortedChildren);
    }
    if (this.updateType & UpdateType.Children && this.children.length && !this.rtt) {
      this.children.forEach((child) => {
        child.setUpdateType(childUpdateType);
        if (child.updateType === 0) {
          return;
        }
        child.update(delta, this.clippingRect);
      });
    }
    if (this.updateType & UpdateType.ZIndexSortedChildren) {
      this.sortChildren();
    }
    this.updateType = 0;
  }
  //check if CoreNode is renderable based on props
  checkRenderProps() {
    if (this.props.texture) {
      return true;
    }
    if (!this.props.width || !this.props.height) {
      return false;
    }
    if (this.props.shader) {
      return true;
    }
    if (this.props.clipping) {
      return true;
    }
    if (this.props.color !== 0) {
      return true;
    }
    if (this.props.colorTop !== 0) {
      return true;
    }
    if (this.props.colorBottom !== 0) {
      return true;
    }
    if (this.props.colorLeft !== 0) {
      return true;
    }
    if (this.props.colorRight !== 0) {
      return true;
    }
    if (this.props.colorTl !== 0) {
      return true;
    }
    if (this.props.colorTr !== 0) {
      return true;
    }
    if (this.props.colorBl !== 0) {
      return true;
    }
    if (this.props.colorBr !== 0) {
      return true;
    }
    return false;
  }
  checkRenderBounds(parentClippingRect) {
    assertTruthy(this.renderBound);
    const rectW = parentClippingRect.width || this.stage.root.width;
    const rectH = parentClippingRect.height || this.stage.root.height;
    this.strictBound = createBound(parentClippingRect.x, parentClippingRect.y, parentClippingRect.x + rectW, parentClippingRect.y + rectH, this.strictBound);
    const renderM = this.stage.boundsMargin;
    this.preloadBound = createBound(parentClippingRect.x - renderM[3], parentClippingRect.y - renderM[0], parentClippingRect.x + rectW + renderM[1], parentClippingRect.y + rectH + renderM[2], this.preloadBound);
    if (boundInsideBound(this.renderBound, this.strictBound)) {
      return CoreNodeRenderState.InViewport;
    }
    if (boundInsideBound(this.renderBound, this.preloadBound)) {
      return CoreNodeRenderState.InBounds;
    }
    return CoreNodeRenderState.OutOfBounds;
  }
  updateRenderState(parentClippingRect) {
    const renderState = this.checkRenderBounds(parentClippingRect);
    if (renderState !== this.renderState) {
      let previous = this.renderState;
      this.renderState = renderState;
      if (previous === CoreNodeRenderState.InViewport) {
        this.emit("outOfViewport", {
          previous,
          current: renderState
        });
      }
      if (previous < CoreNodeRenderState.InBounds && renderState === CoreNodeRenderState.InViewport) {
        this.emit(CoreNodeRenderStateMap.get(CoreNodeRenderState.InBounds), {
          previous,
          current: renderState
        });
        previous = CoreNodeRenderState.InBounds;
      } else if (previous > CoreNodeRenderState.InBounds && renderState === CoreNodeRenderState.OutOfBounds) {
        this.emit(CoreNodeRenderStateMap.get(CoreNodeRenderState.InBounds), {
          previous,
          current: renderState
        });
        previous = CoreNodeRenderState.InBounds;
      }
      const event = CoreNodeRenderStateMap.get(renderState);
      assertTruthy(event);
      this.emit(event, {
        previous,
        current: renderState
      });
    }
  }
  setRenderState(state) {
    if (state !== this.renderState) {
      this.renderState = state;
      this.emit(CoreNodeRenderState[state]);
    }
  }
  /**
   * This function updates the `isRenderable` property based on certain conditions.
   *
   * @returns
   */
  updateIsRenderable() {
    let newIsRenderable;
    if (this.worldAlpha === 0 || !this.checkRenderProps()) {
      newIsRenderable = false;
    } else {
      newIsRenderable = this.renderState > CoreNodeRenderState.OutOfBounds;
    }
    if (this.isRenderable !== newIsRenderable) {
      this.isRenderable = newIsRenderable;
      this.onChangeIsRenderable(newIsRenderable);
    }
  }
  onChangeIsRenderable(isRenderable) {
    var _a3;
    (_a3 = this.props.texture) == null ? void 0 : _a3.setRenderableOwner(this, isRenderable);
  }
  calculateRenderCoords() {
    const { width, height, globalTransform: transform } = this;
    assertTruthy(transform);
    const { tx, ty, ta, tb, tc, td } = transform;
    if (tb === 0 && tc === 0) {
      const minX = tx;
      const maxX = tx + width * ta;
      const minY = ty;
      const maxY = ty + height * td;
      this.renderCoords = RenderCoords.translate(
        //top-left
        minX,
        minY,
        //top-right
        maxX,
        minY,
        //bottom-right
        maxX,
        maxY,
        //bottom-left
        minX,
        maxY,
        this.renderCoords
      );
    } else {
      this.renderCoords = RenderCoords.translate(
        //top-left
        tx,
        ty,
        //top-right
        tx + width * ta,
        ty + width * tc,
        //bottom-right
        tx + width * ta + height * tb,
        ty + width * tc + height * td,
        //bottom-left
        tx + height * tb,
        ty + height * td,
        this.renderCoords
      );
    }
  }
  updateBoundingRect() {
    const { renderCoords, globalTransform: transform } = this;
    assertTruthy(transform);
    assertTruthy(renderCoords);
    const { tb, tc } = transform;
    const { x1, y1, x3, y3 } = renderCoords;
    if (tb === 0 || tc === 0) {
      this.renderBound = createBound(x1, y1, x3, y3, this.renderBound);
    } else {
      const { x2, x4, y2, y4 } = renderCoords;
      this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
    }
  }
  /**
   * This function calculates the clipping rectangle for a node.
   *
   * The function then checks if the node is rotated. If the node requires clipping and is not rotated, a new clipping rectangle is created based on the node's global transform and dimensions.
   * If a parent clipping rectangle exists, it is intersected with the node's clipping rectangle (if it exists), or replaces the node's clipping rectangle.
   *
   * Finally, the node's parentClippingRect and clippingRect properties are updated.
   */
  calculateClippingRect(parentClippingRect) {
    assertTruthy(this.globalTransform);
    const { clippingRect, props, globalTransform: gt } = this;
    const { clipping } = props;
    const isRotated = gt.tb !== 0 || gt.tc !== 0;
    if (clipping && !isRotated) {
      clippingRect.x = gt.tx;
      clippingRect.y = gt.ty;
      clippingRect.width = this.width * gt.ta;
      clippingRect.height = this.height * gt.td;
      clippingRect.valid = true;
    } else {
      clippingRect.valid = false;
    }
    if (parentClippingRect.valid && clippingRect.valid) {
      intersectRect(parentClippingRect, clippingRect, clippingRect);
    } else if (parentClippingRect.valid) {
      copyRect(parentClippingRect, clippingRect);
      clippingRect.valid = true;
    }
  }
  calculateZIndex() {
    var _a3, _b2;
    const props = this.props;
    const z = props.zIndex || 0;
    const p = ((_a3 = props.parent) == null ? void 0 : _a3.zIndex) || 0;
    let zIndex = z;
    if ((_b2 = props.parent) == null ? void 0 : _b2.zIndexLocked) {
      zIndex = z < p ? z : p;
    }
    this.calcZIndex = zIndex;
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    this.unloadTexture();
    this.clippingRect.valid = false;
    this.isRenderable = false;
    delete this.renderCoords;
    delete this.renderBound;
    delete this.strictBound;
    delete this.preloadBound;
    delete this.globalTransform;
    delete this.scaleRotateTransform;
    delete this.localTransform;
    this.props.texture = null;
    this.props.shader = null;
    this.removeAllListeners();
    this.parent = null;
  }
  renderQuads(renderer2) {
    const { width, height, texture, textureOptions, shader, shaderProps, rtt, parentHasRenderTexture } = this.props;
    if (parentHasRenderTexture) {
      if (!renderer2.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer2.activeRttNode) {
        return;
      }
    }
    const { premultipliedColorTl, premultipliedColorTr, premultipliedColorBl, premultipliedColorBr } = this;
    const { zIndex, worldAlpha, globalTransform: gt, clippingRect } = this;
    assertTruthy(gt);
    renderer2.addQuad({
      width,
      height,
      colorTl: premultipliedColorTl,
      colorTr: premultipliedColorTr,
      colorBl: premultipliedColorBl,
      colorBr: premultipliedColorBr,
      texture,
      textureOptions,
      zIndex,
      shader,
      shaderProps,
      alpha: worldAlpha,
      clippingRect,
      tx: gt.tx,
      ty: gt.ty,
      ta: gt.ta,
      tb: gt.tb,
      tc: gt.tc,
      td: gt.td,
      rtt,
      parentHasRenderTexture,
      framebufferDimensions: this.framebufferDimensions
    });
  }
  //#region Properties
  get id() {
    return this.props.id;
  }
  get x() {
    return this.props.x;
  }
  set x(value) {
    if (this.props.x !== value) {
      this.props.x = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get absX() {
    var _a3, _b2, _c2;
    return this.props.x + (((_a3 = this.props.parent) == null ? void 0 : _a3.absX) || ((_c2 = (_b2 = this.props.parent) == null ? void 0 : _b2.globalTransform) == null ? void 0 : _c2.tx) || 0);
  }
  get absY() {
    var _a3, _b2;
    return this.props.y + ((_b2 = (_a3 = this.props.parent) == null ? void 0 : _a3.absY) != null ? _b2 : 0);
  }
  get y() {
    return this.props.y;
  }
  set y(value) {
    if (this.props.y !== value) {
      this.props.y = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    if (this.props.width !== value) {
      this.props.width = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    if (this.props.height !== value) {
      this.props.height = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get scale() {
    return this.scaleX;
  }
  set scale(value) {
    this.scaleX = value;
    this.scaleY = value;
  }
  get scaleX() {
    return this.props.scaleX;
  }
  set scaleX(value) {
    if (this.props.scaleX !== value) {
      this.props.scaleX = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get scaleY() {
    return this.props.scaleY;
  }
  set scaleY(value) {
    if (this.props.scaleY !== value) {
      this.props.scaleY = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get mount() {
    return this.props.mount;
  }
  set mount(value) {
    if (this.props.mountX !== value || this.props.mountY !== value) {
      this.props.mountX = value;
      this.props.mountY = value;
      this.props.mount = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountX() {
    return this.props.mountX;
  }
  set mountX(value) {
    if (this.props.mountX !== value) {
      this.props.mountX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountY() {
    return this.props.mountY;
  }
  set mountY(value) {
    if (this.props.mountY !== value) {
      this.props.mountY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivot() {
    return this.props.pivot;
  }
  set pivot(value) {
    if (this.props.pivotX !== value || this.props.pivotY !== value) {
      this.props.pivotX = value;
      this.props.pivotY = value;
      this.props.pivot = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotX() {
    return this.props.pivotX;
  }
  set pivotX(value) {
    if (this.props.pivotX !== value) {
      this.props.pivotX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotY() {
    return this.props.pivotY;
  }
  set pivotY(value) {
    if (this.props.pivotY !== value) {
      this.props.pivotY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get rotation() {
    return this.props.rotation;
  }
  set rotation(value) {
    if (this.props.rotation !== value) {
      this.props.rotation = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get alpha() {
    return this.props.alpha;
  }
  set alpha(value) {
    this.props.alpha = value;
    this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha);
  }
  get autosize() {
    return this.props.autosize;
  }
  set autosize(value) {
    this.props.autosize = value;
  }
  get clipping() {
    return this.props.clipping;
  }
  set clipping(value) {
    this.props.clipping = value;
    this.setUpdateType(UpdateType.Clipping);
  }
  get color() {
    return this.props.color;
  }
  set color(value) {
    if (this.props.colorTl !== value || this.props.colorTr !== value || this.props.colorBl !== value || this.props.colorBr !== value) {
      this.colorTl = value;
      this.colorTr = value;
      this.colorBl = value;
      this.colorBr = value;
    }
    this.props.color = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTop() {
    return this.props.colorTop;
  }
  set colorTop(value) {
    if (this.props.colorTl !== value || this.props.colorTr !== value) {
      this.colorTl = value;
      this.colorTr = value;
    }
    this.props.colorTop = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBottom() {
    return this.props.colorBottom;
  }
  set colorBottom(value) {
    if (this.props.colorBl !== value || this.props.colorBr !== value) {
      this.colorBl = value;
      this.colorBr = value;
    }
    this.props.colorBottom = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorLeft() {
    return this.props.colorLeft;
  }
  set colorLeft(value) {
    if (this.props.colorTl !== value || this.props.colorBl !== value) {
      this.colorTl = value;
      this.colorBl = value;
    }
    this.props.colorLeft = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorRight() {
    return this.props.colorRight;
  }
  set colorRight(value) {
    if (this.props.colorTr !== value || this.props.colorBr !== value) {
      this.colorTr = value;
      this.colorBr = value;
    }
    this.props.colorRight = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTl() {
    return this.props.colorTl;
  }
  set colorTl(value) {
    this.props.colorTl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTr() {
    return this.props.colorTr;
  }
  set colorTr(value) {
    this.props.colorTr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBl() {
    return this.props.colorBl;
  }
  set colorBl(value) {
    this.props.colorBl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBr() {
    return this.props.colorBr;
  }
  set colorBr(value) {
    this.props.colorBr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  // we're only interested in parent zIndex to test
  // if we should use node zIndex is higher then parent zIndex
  get zIndexLocked() {
    return this.props.zIndexLocked || 0;
  }
  set zIndexLocked(value) {
    this.props.zIndexLocked = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get zIndex() {
    return this.props.zIndex;
  }
  set zIndex(value) {
    this.props.zIndex = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get parent() {
    return this.props.parent;
  }
  set parent(newParent) {
    const oldParent = this.props.parent;
    if (oldParent === newParent) {
      return;
    }
    this.props.parent = newParent;
    if (oldParent) {
      const index = oldParent.children.indexOf(this);
      assertTruthy(index !== -1, "CoreNode.parent: Node not found in old parent's children!");
      oldParent.children.splice(index, 1);
      oldParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
    }
    if (newParent) {
      newParent.children.push(this);
      this.setUpdateType(UpdateType.All);
      newParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
      if (newParent.rtt || newParent.parentHasRenderTexture) {
        this.setRTTUpdates(UpdateType.All);
      }
    }
    this.parentHasRenderTexture = (newParent == null ? void 0 : newParent.rtt) || (newParent == null ? void 0 : newParent.parentHasRenderTexture);
    this.updateScaleRotateTransform();
  }
  get rtt() {
    return this.props.rtt;
  }
  set rtt(value) {
    var _a3;
    if (!value) {
      return;
    }
    this.props.rtt = true;
    this.hasRTTupdates = true;
    (_a3 = this.stage.renderer) == null ? void 0 : _a3.renderToTexture(this);
  }
  set parentHasRenderTexture(value) {
    this.props.parentHasRenderTexture = !!value;
  }
  get parentHasRenderTexture() {
    return this.props.parentHasRenderTexture;
  }
  /**
   * Returns the framebuffer dimensions of the node.
   * If the node has a render texture, the dimensions are the same as the node's dimensions.
   * If the node does not have a render texture, the dimensions are inherited from the parent.
   * If the node parent has a render texture and the node is a render texture, the nodes dimensions are used.
   */
  get framebufferDimensions() {
    var _a3;
    if (this.parentHasRenderTexture && !this.rtt) {
      return (_a3 = this.parent) == null ? void 0 : _a3.framebufferDimensions;
    }
    return { width: this.width, height: this.height };
  }
  /**
   * Returns the parent render texture node if it exists.
   */
  get parentRenderTexture() {
    let parent = this.parent;
    while (parent) {
      if (parent.rtt) {
        return parent;
      }
      parent = parent.parent;
    }
    return null;
  }
  get texture() {
    return this.props.texture;
  }
  setRTTUpdates(type) {
    var _a3;
    this.hasRTTupdates = true;
    (_a3 = this.parent) == null ? void 0 : _a3.setRTTUpdates(type);
  }
}
let nextId = 1;
function getNewId() {
  return nextId++;
}
class MainOnlyNode extends EventEmitter {
  constructor(props, rendererMain, stage, coreNode) {
    var _a3;
    super();
    __publicField(this, "rendererMain");
    __publicField(this, "stage");
    __publicField(this, "id");
    __publicField(this, "coreNode");
    // Prop stores
    __publicField(this, "_children", []);
    __publicField(this, "_src", "");
    __publicField(this, "_parent", null);
    __publicField(this, "_texture", null);
    __publicField(this, "_shader", null);
    __publicField(this, "_data", {});
    __publicField(this, "onTextureLoaded", (target, payload) => {
      this.emit("loaded", payload);
    });
    __publicField(this, "onTextureFailed", (target, payload) => {
      this.emit("failed", payload);
    });
    __publicField(this, "onTextureFreed", (target, payload) => {
      this.emit("freed", payload);
    });
    __publicField(this, "onOutOfBounds", (target, payload) => {
      this.emit("outOfBounds", payload);
    });
    __publicField(this, "onInBounds", (target, payload) => {
      this.emit("inBounds", payload);
    });
    __publicField(this, "onOutOfViewport", (target, payload) => {
      this.emit("outOfViewport", payload);
    });
    __publicField(this, "onInViewport", (target, payload) => {
      this.emit("inViewport", payload);
    });
    this.rendererMain = rendererMain;
    this.stage = stage;
    this.id = (_a3 = coreNode == null ? void 0 : coreNode.id) != null ? _a3 : getNewId();
    this.coreNode = coreNode || new CoreNode(this.stage, {
      id: this.id,
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      alpha: props.alpha,
      autosize: props.autosize,
      clipping: props.clipping,
      color: props.color,
      colorTop: props.colorTop,
      colorBottom: props.colorBottom,
      colorLeft: props.colorLeft,
      colorRight: props.colorRight,
      colorTl: props.colorTl,
      colorTr: props.colorTr,
      colorBl: props.colorBl,
      colorBr: props.colorBr,
      zIndex: props.zIndex,
      zIndexLocked: props.zIndexLocked,
      scaleX: props.scaleX,
      scaleY: props.scaleY,
      mountX: props.mountX,
      mountY: props.mountY,
      mount: props.mount,
      pivot: props.pivot,
      pivotX: props.pivotX,
      pivotY: props.pivotY,
      rotation: props.rotation,
      parent: null,
      shader: null,
      shaderProps: null,
      texture: null,
      textureOptions: null,
      rtt: props.rtt,
      parentHasRenderTexture: props.parentHasRenderTexture
    });
    this.coreNode.on("loaded", this.onTextureLoaded);
    this.coreNode.on("failed", this.onTextureFailed);
    this.coreNode.on("freed", this.onTextureFreed);
    this.coreNode.on("outOfBounds", this.onOutOfBounds);
    this.coreNode.on("inBounds", this.onInBounds);
    this.coreNode.on("outOfViewport", this.onOutOfViewport);
    this.coreNode.on("inViewport", this.onInViewport);
    this.parent = props.parent;
    this.shader = props.shader;
    this.texture = props.texture;
    this.src = props.src;
    this.rtt = props.rtt;
    this._data = props.data;
  }
  get x() {
    return this.coreNode.x;
  }
  set x(value) {
    this.coreNode.x = value;
  }
  get y() {
    return this.coreNode.y;
  }
  set y(value) {
    this.coreNode.y = value;
  }
  get width() {
    return this.coreNode.width;
  }
  set width(value) {
    this.coreNode.width = value;
  }
  get height() {
    return this.coreNode.height;
  }
  set height(value) {
    this.coreNode.height = value;
  }
  get alpha() {
    return this.coreNode.alpha;
  }
  set alpha(value) {
    this.coreNode.alpha = value;
  }
  get autosize() {
    return this.coreNode.autosize;
  }
  set autosize(value) {
    this.coreNode.autosize = value;
  }
  get clipping() {
    return this.coreNode.clipping;
  }
  set clipping(value) {
    this.coreNode.clipping = value;
  }
  get color() {
    return this.coreNode.color;
  }
  set color(value) {
    this.coreNode.color = value;
  }
  get colorTop() {
    return this.coreNode.colorTop;
  }
  set colorTop(value) {
    this.coreNode.colorTop = value;
  }
  get colorBottom() {
    return this.coreNode.colorBottom;
  }
  set colorBottom(value) {
    this.coreNode.colorBottom = value;
  }
  get colorLeft() {
    return this.coreNode.colorLeft;
  }
  set colorLeft(value) {
    this.coreNode.colorLeft = value;
  }
  get colorRight() {
    return this.coreNode.colorRight;
  }
  set colorRight(value) {
    this.coreNode.colorRight = value;
  }
  get colorTl() {
    return this.coreNode.colorTl;
  }
  set colorTl(value) {
    this.coreNode.colorTl = value;
  }
  get colorTr() {
    return this.coreNode.colorTr;
  }
  set colorTr(value) {
    this.coreNode.colorTr = value;
  }
  get colorBl() {
    return this.coreNode.colorBl;
  }
  set colorBl(value) {
    this.coreNode.colorBl = value;
  }
  get colorBr() {
    return this.coreNode.colorBr;
  }
  set colorBr(value) {
    this.coreNode.colorBr = value;
  }
  get scale() {
    if (this.scaleX !== this.scaleY) {
      return null;
    }
    return this.coreNode.scaleX;
  }
  set scale(value) {
    if (value === null) {
      return;
    }
    this.coreNode.scaleX = value;
    this.coreNode.scaleY = value;
  }
  get scaleX() {
    return this.coreNode.scaleX;
  }
  set scaleX(value) {
    this.coreNode.scaleX = value;
  }
  get scaleY() {
    return this.coreNode.scaleY;
  }
  set scaleY(value) {
    this.coreNode.scaleY = value;
  }
  get mount() {
    return this.coreNode.mount;
  }
  set mount(value) {
    this.coreNode.mount = value;
  }
  get mountX() {
    return this.coreNode.mountX;
  }
  set mountX(value) {
    this.coreNode.mountX = value;
  }
  get mountY() {
    return this.coreNode.mountY;
  }
  set mountY(value) {
    this.coreNode.mountY = value;
  }
  get pivot() {
    return this.coreNode.pivot;
  }
  set pivot(value) {
    this.coreNode.pivot = value;
  }
  get pivotX() {
    return this.coreNode.pivotX;
  }
  set pivotX(value) {
    this.coreNode.pivotX = value;
  }
  get pivotY() {
    return this.coreNode.pivotY;
  }
  set pivotY(value) {
    this.coreNode.pivotY = value;
  }
  get rotation() {
    return this.coreNode.rotation;
  }
  set rotation(value) {
    this.coreNode.rotation = value;
  }
  get parent() {
    return this._parent;
  }
  set parent(newParent) {
    var _a3;
    const oldParent = this._parent;
    this._parent = newParent;
    this.coreNode.parent = (_a3 = newParent == null ? void 0 : newParent.coreNode) != null ? _a3 : null;
    if (oldParent) {
      const index = oldParent.children.indexOf(this);
      assertTruthy(index !== -1, "MainOnlyNode.parent: Node not found in old parent's children!");
      oldParent.children.splice(index, 1);
    }
    if (newParent) {
      newParent.children.push(this);
    }
  }
  get children() {
    return this._children;
  }
  get zIndex() {
    return this.coreNode.zIndex;
  }
  set zIndex(value) {
    this.coreNode.zIndex = value;
  }
  get zIndexLocked() {
    return this.coreNode.zIndexLocked;
  }
  set zIndexLocked(value) {
    this.coreNode.zIndexLocked = value;
  }
  get src() {
    return this._src;
  }
  set src(imageUrl) {
    if (this._src === imageUrl) {
      return;
    }
    this._src = imageUrl;
    if (!imageUrl) {
      this.texture = null;
      return;
    }
    this.texture = this.rendererMain.createTexture("ImageTexture", {
      src: imageUrl
    });
  }
  //#region Texture
  get texture() {
    return this._texture;
  }
  set texture(texture) {
    if (this._texture === texture) {
      return;
    }
    if (this._texture) {
      this.rendererMain.textureTracker.decrementTextureRefCount(this._texture);
    }
    if (texture) {
      this.rendererMain.textureTracker.incrementTextureRefCount(texture);
    }
    this._texture = texture;
    if (texture) {
      this.coreNode.loadTexture(texture.txType, texture.props, texture.options);
    } else {
      this.coreNode.unloadTexture();
    }
  }
  get rtt() {
    return this.coreNode.rtt;
  }
  set rtt(value) {
    if (value) {
      this.texture = this.rendererMain.createTexture("RenderTexture", {
        width: this.width,
        height: this.height
      }, { preload: true, flipY: true });
    }
    this.coreNode.rtt = value;
  }
  get parentHasRenderTexture() {
    return this.coreNode.parentHasRenderTexture;
  }
  set parentHasRenderTexture(value) {
    this.coreNode.parentHasRenderTexture = value;
  }
  //#endregion Texture
  get shader() {
    return this._shader;
  }
  set shader(shader) {
    if (this._shader === shader) {
      return;
    }
    this._shader = shader;
    if (shader) {
      this.coreNode.loadShader(shader.shType, shader.props);
    }
  }
  get data() {
    return this._data;
  }
  set data(d) {
    this._data = santizeCustomDataMap(d);
  }
  destroy() {
    this.emit("beforeDestroy", {});
    let child = this.children[0];
    while (child) {
      child.destroy();
      child = this.children[0];
    }
    this.coreNode.destroy();
    this.parent = null;
    this.texture = null;
    this.emit("afterDestroy", {});
    this.removeAllListeners();
  }
  flush() {
  }
  animate(props, settings) {
    const animation = new CoreAnimation(this.coreNode, props, settings);
    const controller = new CoreAnimationController(this.stage.animationManager, animation);
    return controller;
  }
}
const startLoop = (stage) => {
  let isIdle = false;
  const runLoop = () => {
    stage.updateAnimations();
    if (!stage.hasSceneUpdates()) {
      stage.calculateFps();
      setTimeout(runLoop, 16.666666666666668);
      if (!isIdle) {
        stage.emit("idle");
        isIdle = true;
      }
      return;
    }
    isIdle = false;
    stage.drawFrame();
    requestAnimationFrame(runLoop);
  };
  requestAnimationFrame(runLoop);
};
const getTimeStamp = () => {
  return performance ? performance.now() : Date.now();
};
class AnimationManager {
  constructor() {
    __publicField(this, "activeAnimations", /* @__PURE__ */ new Set());
  }
  registerAnimation(animation) {
    this.activeAnimations.add(animation);
  }
  unregisterAnimation(animation) {
    this.activeAnimations.delete(animation);
  }
  update(dt) {
    this.activeAnimations.forEach((animation) => {
      animation.update(dt);
    });
  }
}
class ImageWorkerManager {
  constructor(numImageWorkers) {
    __publicField(this, "imageWorkersEnabled", true);
    __publicField(this, "messageManager", {});
    __publicField(this, "workers", []);
    __publicField(this, "workerIndex", 0);
    this.workers = this.createWorkers(numImageWorkers);
    this.workers.forEach((worker) => {
      worker.onmessage = this.handleMessage.bind(this);
    });
  }
  handleMessage(event) {
    const { src, data, error } = event.data;
    const msg = this.messageManager[src];
    if (msg) {
      const [resolve, reject] = msg;
      delete this.messageManager[src];
      if (error) {
        reject(new Error(error));
      } else {
        resolve(data);
      }
    }
  }
  createWorkers(numWorkers = 1) {
    const workerCode = "\n      function hasAlphaChannel(mimeType) {\n          return (mimeType.indexOf(\"image/png\") !== -1);\n      }\n\n      function getImage(src, premultiplyAlpha) {\n        return new Promise(function(resolve, reject) {\n          var xhr = new XMLHttpRequest();\n          xhr.open('GET', src, true);\n          xhr.responseType = 'blob';\n\n          xhr.onload = function() {\n            if (xhr.status === 200) {\n              var blob = xhr.response;\n              var hasAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);\n\n              createImageBitmap(blob, {\n                premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',\n                colorSpaceConversion: 'none',\n                imageOrientation: 'none'\n              }).then(function(data) {\n                resolve({ data: data, premultiplyAlpha: premultiplyAlpha });\n              }).catch(function(error) {\n                reject(error);\n              });\n            } else {\n              reject(new Error('Failed to load image: ' + xhr.statusText));\n            }\n          };\n\n          xhr.onerror = function() {\n            reject(new Error('Network error occurred while trying to fetch the image.'));\n          };\n\n          xhr.send();\n        });\n      }\n\n      self.onmessage = (event) => {\n        var src = event.data.src;\n        var premultiplyAlpha = event.data.premultiplyAlpha;\n\n        getImage(src, premultiplyAlpha)\n          .then(function(data) {\n              self.postMessage({ src: src, data: data }, [data.data]);\n          })\n          .catch(function(error) {\n              self.postMessage({ src: src, error: error.message });\n          });\n      };\n    ";
    const blob = new Blob([workerCode.replace('"use strict";', "")], {
      type: "application/javascript"
    });
    const blobURL = (self.URL ? URL : webkitURL).createObjectURL(blob);
    const workers = [];
    for (let i = 0; i < numWorkers; i++) {
      workers.push(new Worker(blobURL));
    }
    return workers;
  }
  getNextWorker() {
    const worker = this.workers[this.workerIndex];
    this.workerIndex = (this.workerIndex + 1) % this.workers.length;
    return worker;
  }
  convertUrlToAbsolute(url) {
    const absoluteUrl = new URL(url, self.location.href);
    return absoluteUrl.href;
  }
  getImage(src, premultiplyAlpha) {
    return new Promise((resolve, reject) => {
      try {
        if (this.workers) {
          const absoluteSrcUrl = this.convertUrlToAbsolute(src);
          this.messageManager[absoluteSrcUrl] = [resolve, reject];
          this.getNextWorker().postMessage({
            src: absoluteSrcUrl,
            premultiplyAlpha
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
const _NoiseTexture = class _NoiseTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _NoiseTexture.resolveDefaults(props);
  }
  async getTextureData() {
    const { width, height } = this.props;
    const size2 = width * height * 4;
    const pixelData8 = new Uint8ClampedArray(size2);
    for (let i = 0; i < size2; i += 4) {
      const v = Math.floor(Math.random() * 256);
      pixelData8[i] = v;
      pixelData8[i + 1] = v;
      pixelData8[i + 2] = v;
      pixelData8[i + 3] = 255;
    }
    return {
      data: new ImageData(pixelData8, width, height)
    };
  }
  static makeCacheKey(props) {
    const resolvedProps = _NoiseTexture.resolveDefaults(props);
    return "NoiseTexture,".concat(resolvedProps.width, ",").concat(resolvedProps.height, ",").concat(resolvedProps.cacheId);
  }
  static resolveDefaults(props) {
    var _a3, _b2, _c2;
    return {
      width: (_a3 = props.width) != null ? _a3 : 128,
      height: (_b2 = props.height) != null ? _b2 : 128,
      cacheId: (_c2 = props.cacheId) != null ? _c2 : 0
    };
  }
};
__publicField(_NoiseTexture, "z$__type__Props");
let NoiseTexture = _NoiseTexture;
class CoreTextureManager {
  constructor(numImageWorkers) {
    /**
     * Amount of used memory defined in pixels
     */
    __publicField(this, "usedMemory", 0);
    __publicField(this, "txConstructors", {});
    __publicField(this, "textureKeyCache", /* @__PURE__ */ new Map());
    __publicField(this, "textureIdCache", /* @__PURE__ */ new Map());
    __publicField(this, "ctxTextureCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "textureRefCountMap", /* @__PURE__ */ new WeakMap());
    __publicField(this, "imageWorkerManager", null);
    __publicField(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    __publicField(this, "hasWorker", !!self.Worker);
    /**
     * Renderer that this texture manager is associated with
     *
     * @remarks
     * This MUST be set before the texture manager is used. Otherwise errors
     * will occur when using the texture manager.
     */
    __publicField(this, "renderer");
    if (this.hasCreateImageBitmap && this.hasWorker) {
      this.imageWorkerManager = new ImageWorkerManager(numImageWorkers);
    }
    if (!this.hasCreateImageBitmap) {
      console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
    }
    this.registerTextureType("ImageTexture", ImageTexture);
    this.registerTextureType("ColorTexture", ColorTexture);
    this.registerTextureType("NoiseTexture", NoiseTexture);
    this.registerTextureType("SubTexture", SubTexture);
    this.registerTextureType("RenderTexture", RenderTexture);
  }
  registerTextureType(textureType, textureClass) {
    this.txConstructors[textureType] = textureClass;
  }
  loadTexture(textureType, props, options = null) {
    var _a3;
    const TextureClass = this.txConstructors[textureType];
    if (!TextureClass) {
      throw new Error('Texture type "'.concat(textureType, '" is not registered'));
    }
    let texture;
    if ((options == null ? void 0 : options.id) !== void 0 && this.textureIdCache.has(options.id)) {
      texture = this.textureIdCache.get(options.id);
    }
    if (!texture) {
      const descId = options == null ? void 0 : options.id;
      const cacheKey = (_a3 = options == null ? void 0 : options.cacheKey) != null ? _a3 : TextureClass.makeCacheKey(props);
      if (cacheKey && this.textureKeyCache.has(cacheKey)) {
        texture = this.textureKeyCache.get(cacheKey);
      } else {
        texture = new TextureClass(this, props);
      }
      if (descId) {
        this.addTextureIdToCache(descId, cacheKey, texture);
      }
    }
    if (options == null ? void 0 : options.preload) {
      const ctxTx = this.getCtxTexture(texture);
      ctxTx.load();
    }
    return texture;
  }
  /**
   * Add a `Texture` to the texture cache by its texture desc ID and cache key
   *
   * @remarks
   * This is used internally by the `CoreTextureManager` to cache textures
   * when they are created.
   *
   * It handles updating the texture ID cache, texture key cache, and texture
   * reference count map.
   *
   * @param textureDescId
   * @param cacheKey
   * @param texture
   */
  addTextureIdToCache(textureDescId, cacheKey, texture) {
    const { textureIdCache, textureRefCountMap } = this;
    textureIdCache.set(textureDescId, texture);
    if (textureRefCountMap.has(texture)) {
      textureRefCountMap.get(texture).count++;
    } else {
      textureRefCountMap.set(texture, { cacheKey, count: 1 });
      if (cacheKey) {
        this.textureKeyCache.set(cacheKey, texture);
      }
    }
  }
  /**
   * Remove a `Texture` from the texture cache by its texture desc ID
   *
   * @remarks
   * This is called externally by when we know (at least reasonably well) that
   * the `TextureRef` in the Main API space has been is no longer used. This
   * allows us to remove the `Texture` from the Usage Cache so that it can be
   * garbage collected as well.
   *
   * @param textureDescId
   */
  removeTextureIdFromCache(textureDescId) {
    var _a3;
    const { textureIdCache, textureRefCountMap } = this;
    const texture = textureIdCache.get(textureDescId);
    if (!texture) {
      return;
    }
    textureIdCache.delete(textureDescId);
    if (textureRefCountMap.has(texture)) {
      const refCountObj = textureRefCountMap.get(texture);
      assertTruthy(refCountObj);
      refCountObj.count--;
      if (refCountObj.count === 0) {
        textureRefCountMap.delete(texture);
        if (refCountObj.cacheKey) {
          this.textureKeyCache.delete(refCountObj.cacheKey);
        }
      }
    }
    (_a3 = this.ctxTextureCache.get(texture)) == null ? void 0 : _a3.free();
  }
  /**
   * Get an object containing debug information about the texture manager.
   *
   * @returns
   */
  getDebugInfo() {
    return {
      keyCacheSize: this.textureKeyCache.size,
      idCacheSize: this.textureIdCache.size
    };
  }
  /**
   * Get a CoreContextTexture for the given Texture source.
   *
   * @remarks
   * If the texture source already has an allocated CoreContextTexture, it will be
   * returned from the cache. Otherwise, a new CoreContextTexture will be created
   * and cached.
   *
   * ContextTextures are stored in a WeakMap, so they will be garbage collected
   * when the Texture source is no longer referenced.
   *
   * @param textureSource
   * @returns
   */
  getCtxTexture(textureSource) {
    if (this.ctxTextureCache.has(textureSource)) {
      return this.ctxTextureCache.get(textureSource);
    }
    const texture = this.renderer.createCtxTexture(textureSource);
    this.ctxTextureCache.set(textureSource, texture);
    return texture;
  }
}
class TextureMemoryManager {
  /**
   * @param byteThreshold Number of texture bytes to trigger garbage collection
   */
  constructor(byteThreshold) {
    __publicField(this, "memUsed", 0);
    __publicField(this, "textures", /* @__PURE__ */ new Map());
    __publicField(this, "threshold");
    this.threshold = byteThreshold;
    if (byteThreshold === 0) {
      this.setTextureMemUse = () => {
      };
    }
  }
  setTextureMemUse(ctxTexture, byteSize) {
    if (this.textures.has(ctxTexture)) {
      this.memUsed -= this.textures.get(ctxTexture);
    }
    if (byteSize === 0) {
      this.textures.delete(ctxTexture);
      return;
    } else {
      this.memUsed += byteSize;
      this.textures.set(ctxTexture, byteSize);
    }
    if (this.memUsed > this.threshold) {
      this.gc();
    }
  }
  gc() {
    this.textures.forEach((byteSize, ctxTexture) => {
      if (!ctxTexture.renderable) {
        ctxTexture.free();
      }
    });
  }
}
const bufferMemory = 2e6;
class Stage extends EventEmitter {
  /**
   * Stage constructor
   */
  constructor(options) {
    super();
    __publicField(this, "options");
    /// Module Instances
    __publicField(this, "animationManager");
    __publicField(this, "txManager");
    __publicField(this, "txMemManager");
    __publicField(this, "fontManager");
    __publicField(this, "textRenderers");
    __publicField(this, "shManager");
    __publicField(this, "renderer");
    __publicField(this, "root");
    __publicField(this, "boundsMargin");
    /// State
    __publicField(this, "deltaTime", 0);
    __publicField(this, "lastFrameTime", 0);
    __publicField(this, "currentFrameTime", 0);
    __publicField(this, "fpsNumFrames", 0);
    __publicField(this, "fpsElapsedTime", 0);
    __publicField(this, "renderRequested", false);
    /// Debug data
    __publicField(this, "contextSpy", null);
    this.options = options;
    const { canvas, clearColor, rootId, debug, appWidth, appHeight, boundsMargin, enableContextSpy, numImageWorkers, txMemByteThreshold } = options;
    this.txManager = new CoreTextureManager(numImageWorkers);
    this.txMemManager = new TextureMemoryManager(txMemByteThreshold);
    this.shManager = new CoreShaderManager();
    this.animationManager = new AnimationManager();
    this.contextSpy = enableContextSpy ? new ContextSpy() : null;
    let bm = [0, 0, 0, 0];
    if (boundsMargin) {
      bm = Array.isArray(boundsMargin) ? boundsMargin : [boundsMargin, boundsMargin, boundsMargin, boundsMargin];
    }
    this.boundsMargin = bm;
    if (debug == null ? void 0 : debug.monitorTextureCache) {
      setInterval(() => {
        assertTruthy(this.txManager);
        const debugInfo = this.txManager.getDebugInfo();
        console.log("Texture ID Cache Size: ", debugInfo.idCacheSize);
        console.log("Texture Key Cache Size: ", debugInfo.keyCacheSize);
      }, 1e3);
    }
    this.renderer = new WebGlCoreRenderer({
      stage: this,
      canvas,
      pixelRatio: options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio,
      clearColor: clearColor != null ? clearColor : 4278190080,
      bufferMemory,
      txManager: this.txManager,
      txMemManager: this.txMemManager,
      shManager: this.shManager,
      contextSpy: this.contextSpy
    });
    this.txManager.renderer = this.renderer;
    this.textRenderers = {
      canvas: new CanvasTextRenderer(this),
      sdf: new SdfTextRenderer(this)
    };
    this.fontManager = new TrFontManager(this.textRenderers);
    const rootNode = new CoreNode(this, {
      id: rootId,
      x: 0,
      y: 0,
      width: appWidth,
      height: appHeight,
      alpha: 1,
      autosize: false,
      clipping: false,
      color: 0,
      colorTop: 0,
      colorBottom: 0,
      colorLeft: 0,
      colorRight: 0,
      colorTl: 0,
      colorTr: 0,
      colorBl: 0,
      colorBr: 0,
      zIndex: 0,
      zIndexLocked: 0,
      scaleX: 1,
      scaleY: 1,
      mountX: 0,
      mountY: 0,
      mount: 0,
      pivot: 0.5,
      pivotX: 0.5,
      pivotY: 0.5,
      rotation: 0,
      parent: null,
      texture: null,
      textureOptions: null,
      shader: null,
      shaderProps: null,
      rtt: false
    });
    this.root = rootNode;
    {
      startLoop(this);
    }
  }
  /**
   * Update animations
   */
  updateAnimations() {
    const { animationManager } = this;
    if (!this.root) {
      return;
    }
    this.lastFrameTime = this.currentFrameTime;
    this.currentFrameTime = getTimeStamp();
    this.deltaTime = !this.lastFrameTime ? 100 / 6 : this.currentFrameTime - this.lastFrameTime;
    this.emit("frameTick", {
      time: this.currentFrameTime,
      delta: this.deltaTime
    });
    animationManager.update(this.deltaTime);
  }
  /**
   * Check if the scene has updates
   */
  hasSceneUpdates() {
    return !!this.root.updateType || this.renderRequested;
  }
  /**
   * Start a new frame draw
   */
  drawFrame() {
    const { renderer: renderer2, renderRequested } = this;
    if (this.root.updateType !== 0) {
      this.root.update(this.deltaTime, this.root.clippingRect);
    }
    renderer2 == null ? void 0 : renderer2.reset();
    if (renderer2.rttNodes.length > 0) {
      renderer2.renderRTTNodes();
    }
    this.addQuads(this.root);
    renderer2 == null ? void 0 : renderer2.render();
    this.calculateFps();
    if (renderRequested) {
      this.renderRequested = false;
    }
  }
  calculateFps() {
    var _a3, _b2, _c2;
    const { fpsUpdateInterval } = this.options;
    if (fpsUpdateInterval) {
      this.fpsNumFrames++;
      this.fpsElapsedTime += this.deltaTime;
      if (this.fpsElapsedTime >= fpsUpdateInterval) {
        const fps2 = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0;
        this.fpsElapsedTime = 0;
        this.emit("fpsUpdate", {
          fps: fps2,
          contextSpyData: (_b2 = (_a3 = this.contextSpy) == null ? void 0 : _a3.getData()) != null ? _b2 : null
        });
        (_c2 = this.contextSpy) == null ? void 0 : _c2.reset();
      }
    }
  }
  addQuads(node) {
    assertTruthy(this.renderer && node.globalTransform);
    if (node.isRenderable) {
      node.renderQuads(this.renderer);
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (!child) {
        continue;
      }
      if ((child == null ? void 0 : child.worldAlpha) === 0) {
        continue;
      }
      this.addQuads(child);
    }
  }
  /**
   * Request a render pass without forcing an update
   */
  requestRender() {
    this.renderRequested = true;
  }
  /**
   * Given a font name, and possible renderer override, return the best compatible text renderer.
   *
   * @remarks
   * Will always return at least a canvas renderer if no other suitable renderer can be resolved.
   *
   * @param fontFamily
   * @param textRendererOverride
   * @returns
   */
  resolveTextRenderer(trProps, textRendererOverride = null) {
    let rendererId = textRendererOverride;
    let overrideFallback = false;
    if (rendererId) {
      const possibleRenderer = this.textRenderers[rendererId];
      if (!possibleRenderer) {
        console.warn("Text renderer override '".concat(rendererId, "' not found."));
        rendererId = null;
        overrideFallback = true;
      } else if (!possibleRenderer.canRenderFont(trProps)) {
        console.warn("Cannot use override text renderer '".concat(rendererId, "' for font"), trProps);
        rendererId = null;
        overrideFallback = true;
      }
    }
    if (!rendererId) {
      for (const [trId, tr] of Object.entries(this.textRenderers)) {
        if (trId === "canvas") {
          continue;
        }
        if (tr.canRenderFont(trProps)) {
          rendererId = trId;
          break;
        }
      }
      if (!rendererId) {
        rendererId = "canvas";
      }
    }
    if (overrideFallback) {
      console.warn("Falling back to text renderer ".concat(String(rendererId)));
    }
    const resolvedTextRenderer = this.textRenderers[rendererId];
    assertTruthy(resolvedTextRenderer, "resolvedTextRenderer undefined");
    return resolvedTextRenderer;
  }
}
class CoreTextNode extends CoreNode {
  constructor(stage, props) {
    super(stage, props);
    __publicField(this, "textRenderer");
    __publicField(this, "trState");
    __publicField(this, "_textRendererOverride", null);
    __publicField(this, "onTextLoaded", () => {
      const { contain } = this;
      const setWidth = this.trState.props.width;
      const setHeight = this.trState.props.height;
      const calcWidth = this.trState.textW || 0;
      const calcHeight2 = this.trState.textH || 0;
      if (contain === "both") {
        this.props.width = setWidth;
        this.props.height = setHeight;
      } else if (contain === "width") {
        this.props.width = setWidth;
        this.props.height = calcHeight2;
      } else if (contain === "none") {
        this.props.width = calcWidth;
        this.props.height = calcHeight2;
      }
      this.updateLocalTransform();
      this.stage.requestRender();
      this.emit("loaded", {
        type: "text",
        dimensions: {
          width: this.trState.textW || 0,
          height: this.trState.textH || 0
        }
      });
    });
    __publicField(this, "onTextFailed", (target, error) => {
      this.emit("failed", {
        type: "text",
        error
      });
    });
    this._textRendererOverride = props.textRendererOverride;
    const { resolvedTextRenderer, textRendererState } = this.resolveTextRendererAndState({
      x: this.absX,
      y: this.absY,
      width: props.width,
      height: props.height,
      textAlign: props.textAlign,
      color: props.color,
      zIndex: props.zIndex,
      contain: props.contain,
      scrollable: props.scrollable,
      scrollY: props.scrollY,
      offsetY: props.offsetY,
      letterSpacing: props.letterSpacing,
      debug: props.debug,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontStretch: props.fontStretch,
      fontStyle: props.fontStyle,
      fontWeight: props.fontWeight,
      text: props.text,
      lineHeight: props.lineHeight,
      maxLines: props.maxLines,
      textBaseline: props.textBaseline,
      verticalAlign: props.verticalAlign,
      overflowSuffix: props.overflowSuffix
    });
    this.textRenderer = resolvedTextRenderer;
    this.trState = textRendererState;
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    this.props.width = value;
    this.textRenderer.set.width(this.trState, value);
    if (this.contain === "none") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    this.props.height = value;
    this.textRenderer.set.height(this.trState, value);
    if (this.contain !== "both") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get color() {
    return this.trState.props.color;
  }
  set color(value) {
    this.textRenderer.set.color(this.trState, value);
  }
  get text() {
    return this.trState.props.text;
  }
  set text(value) {
    this.textRenderer.set.text(this.trState, value);
  }
  get textRendererOverride() {
    return this._textRendererOverride;
  }
  set textRendererOverride(value) {
    this._textRendererOverride = value;
    this.textRenderer.destroyState(this.trState);
    const { resolvedTextRenderer, textRendererState } = this.resolveTextRendererAndState(this.trState.props);
    this.textRenderer = resolvedTextRenderer;
    this.trState = textRendererState;
  }
  get fontSize() {
    return this.trState.props.fontSize;
  }
  set fontSize(value) {
    this.textRenderer.set.fontSize(this.trState, value);
  }
  get fontFamily() {
    return this.trState.props.fontFamily;
  }
  set fontFamily(value) {
    this.textRenderer.set.fontFamily(this.trState, value);
  }
  get fontStretch() {
    return this.trState.props.fontStretch;
  }
  set fontStretch(value) {
    this.textRenderer.set.fontStretch(this.trState, value);
  }
  get fontStyle() {
    return this.trState.props.fontStyle;
  }
  set fontStyle(value) {
    this.textRenderer.set.fontStyle(this.trState, value);
  }
  get fontWeight() {
    return this.trState.props.fontWeight;
  }
  set fontWeight(value) {
    this.textRenderer.set.fontWeight(this.trState, value);
  }
  get textAlign() {
    return this.trState.props.textAlign;
  }
  set textAlign(value) {
    this.textRenderer.set.textAlign(this.trState, value);
  }
  get contain() {
    return this.trState.props.contain;
  }
  set contain(value) {
    this.textRenderer.set.contain(this.trState, value);
  }
  get scrollable() {
    return this.trState.props.scrollable;
  }
  set scrollable(value) {
    this.textRenderer.set.scrollable(this.trState, value);
  }
  get scrollY() {
    return this.trState.props.scrollY;
  }
  set scrollY(value) {
    this.textRenderer.set.scrollY(this.trState, value);
  }
  get offsetY() {
    return this.trState.props.offsetY;
  }
  set offsetY(value) {
    this.textRenderer.set.offsetY(this.trState, value);
  }
  get letterSpacing() {
    return this.trState.props.letterSpacing;
  }
  set letterSpacing(value) {
    this.textRenderer.set.letterSpacing(this.trState, value);
  }
  get lineHeight() {
    return this.trState.props.lineHeight;
  }
  set lineHeight(value) {
    if (this.textRenderer.set.lineHeight) {
      this.textRenderer.set.lineHeight(this.trState, value);
    }
  }
  get maxLines() {
    return this.trState.props.maxLines;
  }
  set maxLines(value) {
    if (this.textRenderer.set.maxLines) {
      this.textRenderer.set.maxLines(this.trState, value);
    }
  }
  get textBaseline() {
    return this.trState.props.textBaseline;
  }
  set textBaseline(value) {
    if (this.textRenderer.set.textBaseline) {
      this.textRenderer.set.textBaseline(this.trState, value);
    }
  }
  get verticalAlign() {
    return this.trState.props.verticalAlign;
  }
  set verticalAlign(value) {
    if (this.textRenderer.set.verticalAlign) {
      this.textRenderer.set.verticalAlign(this.trState, value);
    }
  }
  get overflowSuffix() {
    return this.trState.props.overflowSuffix;
  }
  set overflowSuffix(value) {
    if (this.textRenderer.set.overflowSuffix) {
      this.textRenderer.set.overflowSuffix(this.trState, value);
    }
  }
  get debug() {
    return this.trState.props.debug;
  }
  set debug(value) {
    this.textRenderer.set.debug(this.trState, value);
  }
  update(delta, parentClippingRect) {
    super.update(delta, parentClippingRect);
    assertTruthy(this.globalTransform);
    this.textRenderer.set.x(this.trState, this.globalTransform.tx);
    this.textRenderer.set.y(this.trState, this.globalTransform.ty);
  }
  checkRenderProps() {
    if (this.trState.props.text !== "") {
      return true;
    }
    return super.checkRenderProps();
  }
  onChangeIsRenderable(isRenderable) {
    super.onChangeIsRenderable(isRenderable);
    this.textRenderer.setIsRenderable(this.trState, isRenderable);
  }
  renderQuads(renderer2) {
    var _a3, _b2;
    assertTruthy(this.globalTransform);
    if (this.parentHasRenderTexture) {
      if (!renderer2.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer2.activeRttNode) {
        return;
      }
    }
    if (this.parentHasRenderTexture && ((_a3 = this.props.parent) == null ? void 0 : _a3.rtt)) {
      this.globalTransform = Matrix3d.identity();
      this.globalTransform.multiply((_b2 = this.localTransform) != null ? _b2 : Matrix3d.identity());
    }
    assertTruthy(this.globalTransform);
    this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions);
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    super.destroy();
    this.textRenderer.destroyState(this.trState);
  }
  /**
   * Resolve a text renderer and a new state based on the current text renderer props provided
   * @param props
   * @returns
   */
  resolveTextRendererAndState(props) {
    const resolvedTextRenderer = this.stage.resolveTextRenderer(props, this._textRendererOverride);
    const textRendererState = resolvedTextRenderer.createState(props);
    textRendererState.emitter.on("loaded", this.onTextLoaded);
    textRendererState.emitter.on("failed", this.onTextFailed);
    resolvedTextRenderer.scheduleUpdateState(textRendererState);
    return {
      resolvedTextRenderer,
      textRendererState
    };
  }
}
class MainOnlyTextNode extends MainOnlyNode {
  constructor(props, rendererMain, stage) {
    super(props, rendererMain, stage, new CoreTextNode(stage, {
      id: getNewId(),
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      alpha: props.alpha,
      autosize: props.autosize,
      clipping: props.clipping,
      color: props.color,
      colorTop: props.colorTop,
      colorBottom: props.colorBottom,
      colorLeft: props.colorLeft,
      colorRight: props.colorRight,
      colorTl: props.colorTl,
      colorTr: props.colorTr,
      colorBl: props.colorBl,
      colorBr: props.colorBr,
      zIndex: props.zIndex,
      zIndexLocked: props.zIndexLocked,
      scaleX: props.scaleX,
      scaleY: props.scaleY,
      mountX: props.mountX,
      mountY: props.mountY,
      mount: props.mount,
      pivot: props.pivot,
      pivotX: props.pivotX,
      pivotY: props.pivotY,
      rotation: props.rotation,
      // Text properties
      text: props.text,
      fontSize: props.fontSize,
      fontFamily: props.fontFamily,
      fontWeight: props.fontWeight,
      fontStretch: props.fontStretch,
      fontStyle: props.fontStyle,
      contain: props.contain,
      scrollable: props.scrollable,
      letterSpacing: props.letterSpacing,
      textAlign: props.textAlign,
      scrollY: props.scrollY,
      offsetY: props.offsetY,
      textRendererOverride: props.textRendererOverride,
      lineHeight: props.lineHeight,
      maxLines: props.maxLines,
      textBaseline: props.textBaseline,
      verticalAlign: props.verticalAlign,
      overflowSuffix: props.overflowSuffix,
      debug: props.debug,
      // These properties will get set appropriately in the base MainOnlyNode class
      parent: null,
      texture: null,
      textureOptions: null,
      shader: null,
      shaderProps: null,
      rtt: false,
      parentHasRenderTexture: false
    }));
  }
  get text() {
    return this.coreNode.text;
  }
  set text(value) {
    this.coreNode.text = value;
  }
  get textRendererOverride() {
    return this.coreNode.textRendererOverride;
  }
  set textRendererOverride(value) {
    this.coreNode.textRendererOverride = value;
  }
  get fontSize() {
    return this.coreNode.fontSize;
  }
  set fontSize(value) {
    this.coreNode.fontSize = value;
  }
  get fontFamily() {
    return this.coreNode.fontFamily;
  }
  set fontFamily(value) {
    this.coreNode.fontFamily = value;
  }
  get fontWeight() {
    return this.coreNode.fontWeight;
  }
  set fontWeight(value) {
    this.coreNode.fontWeight = value;
  }
  get fontStretch() {
    return this.coreNode.fontStretch;
  }
  set fontStretch(value) {
    this.coreNode.fontStretch = value;
  }
  get fontStyle() {
    return this.coreNode.fontStyle;
  }
  set fontStyle(value) {
    this.coreNode.fontStyle = value;
  }
  get textAlign() {
    return this.coreNode.textAlign;
  }
  set textAlign(value) {
    this.coreNode.textAlign = value;
  }
  get contain() {
    return this.coreNode.contain;
  }
  set contain(value) {
    this.coreNode.contain = value;
  }
  get scrollable() {
    return this.coreNode.scrollable;
  }
  set scrollable(value) {
    this.coreNode.scrollable = value;
  }
  get scrollY() {
    return this.coreNode.scrollY;
  }
  set scrollY(value) {
    this.coreNode.scrollY = value;
  }
  get offsetY() {
    return this.coreNode.offsetY;
  }
  set offsetY(value) {
    this.coreNode.offsetY = value;
  }
  get letterSpacing() {
    return this.coreNode.letterSpacing;
  }
  set letterSpacing(value) {
    this.coreNode.letterSpacing = value;
  }
  get lineHeight() {
    return this.coreNode.lineHeight;
  }
  set lineHeight(value) {
    if (value) {
      this.coreNode.lineHeight = value;
    }
  }
  get maxLines() {
    return this.coreNode.maxLines;
  }
  set maxLines(value) {
    if (value) {
      this.coreNode.maxLines = value;
    }
  }
  get textBaseline() {
    return this.coreNode.textBaseline;
  }
  set textBaseline(value) {
    if (value) {
      this.coreNode.textBaseline = value;
    }
  }
  get verticalAlign() {
    return this.coreNode.verticalAlign;
  }
  set verticalAlign(value) {
    if (value) {
      this.coreNode.verticalAlign = value;
    }
  }
  get overflowSuffix() {
    return this.coreNode.overflowSuffix;
  }
  set overflowSuffix(value) {
    if (value) {
      this.coreNode.overflowSuffix = value;
    }
  }
  get debug() {
    return this.coreNode.debug;
  }
  set debug(value) {
    this.coreNode.debug = value;
  }
}
class MainCoreDriver {
  constructor() {
    __publicField(this, "root", null);
    __publicField(this, "stage", null);
    __publicField(this, "rendererMain", null);
  }
  async init(rendererMain, rendererSettings, canvas) {
    this.stage = new Stage({
      rootId: getNewId(),
      appWidth: rendererSettings.appWidth,
      appHeight: rendererSettings.appHeight,
      txMemByteThreshold: rendererSettings.txMemByteThreshold,
      boundsMargin: rendererSettings.boundsMargin,
      deviceLogicalPixelRatio: rendererSettings.deviceLogicalPixelRatio,
      devicePhysicalPixelRatio: rendererSettings.devicePhysicalPixelRatio,
      clearColor: rendererSettings.clearColor,
      canvas,
      fpsUpdateInterval: rendererSettings.fpsUpdateInterval,
      enableContextSpy: rendererSettings.enableContextSpy,
      numImageWorkers: rendererSettings.numImageWorkers,
      debug: {
        monitorTextureCache: false
      }
    });
    this.rendererMain = rendererMain;
    assertTruthy(this.stage.root);
    const node = new MainOnlyNode(rendererMain.resolveNodeDefaults({}), this.rendererMain, this.stage, this.stage.root);
    this.root = node;
    node.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, node));
    this.onCreateNode(node);
    if (rendererSettings.coreExtensionModule) {
      await loadCoreExtension(rendererSettings.coreExtensionModule, this.stage);
    }
    this.stage.on("fpsUpdate", (stage, fpsData) => {
      this.onFpsUpdate(fpsData);
    });
    this.stage.on("frameTick", (stage, frameTickData) => {
      this.onFrameTick(frameTickData);
    });
    this.stage.on("idle", () => {
      this.onIdle();
    });
  }
  createNode(props) {
    assertTruthy(this.rendererMain);
    assertTruthy(this.stage);
    const node = new MainOnlyNode(props, this.rendererMain, this.stage);
    node.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, node));
    this.onCreateNode(node);
    return node;
  }
  createTextNode(props) {
    assertTruthy(this.rendererMain);
    assertTruthy(this.stage);
    const node = new MainOnlyTextNode(props, this.rendererMain, this.stage);
    node.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, node));
    this.onCreateNode(node);
    return node;
  }
  // TODO: Remove?
  destroyNode(node) {
    node.destroy();
  }
  releaseTexture(id) {
    const { stage } = this;
    assertTruthy(stage);
    stage.txManager.removeTextureIdFromCache(id);
  }
  getRootNode() {
    assertTruthy(this.root);
    return this.root;
  }
  //#region Event Methods
  // The implementations for these event methods are provided by RendererMain
  onCreateNode(node) {
    throw new Error("Method not implemented.");
  }
  onBeforeDestroyNode(node) {
    throw new Error("Method not implemented.");
  }
  onFpsUpdate(fpsData) {
    throw new Error("Method not implemented.");
  }
  onFrameTick(frameTickData) {
    throw new Error("Method not implemented.");
  }
  onIdle() {
    throw new Error("Method not implemented.");
  }
}
const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const signalOptions = {
  equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const NO_INIT = {};
var Owner = null;
let Transition = null;
let ExternalSourceConfig = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: current ? current.context : null,
    owner: current
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE);
  updateComputation(c);
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  if (!options || !options.render)
    c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  updateComputation(c);
  return readSignal.bind(c);
}
function isPromise(v) {
  return v && typeof v === "object" && "then" in v;
}
function createResource(pSource, pFetcher, pOptions) {
  let source;
  let fetcher;
  let options;
  if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
    source = true;
    fetcher = pSource;
    options = pFetcher || {};
  } else {
    source = pSource;
    fetcher = pFetcher;
    options = pOptions || {};
  }
  let pr = null, initP = NO_INIT, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
  const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
    equals: false
  }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
  function loadEnd(p, v, error2, key2) {
    if (pr === p) {
      pr = null;
      key2 !== void 0 && (resolved = true);
      if ((p === initP || v === initP) && options.onHydrated)
        queueMicrotask(
          () => options.onHydrated(key2, {
            value: v
          })
        );
      initP = NO_INIT;
      completeLoad(v, error2);
    }
    return v;
  }
  function completeLoad(v, err) {
    runUpdates(() => {
      if (err === void 0)
        setValue(() => v);
      setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
      setError(err);
      for (const c of contexts.keys())
        c.decrement();
      contexts.clear();
    }, false);
  }
  function read() {
    const c = SuspenseContext, v = value(), err = error();
    if (err !== void 0 && !pr)
      throw err;
    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();
        if (pr) {
          if (c.resolved)
            ;
          else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }
    return v;
  }
  function load(refetching = true) {
    if (refetching !== false && scheduled)
      return;
    scheduled = false;
    const lookup = dynamic ? dynamic() : source;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(value));
      return;
    }
    const p = initP !== NO_INIT ? initP : untrack(
      () => fetcher(lookup, {
        value: value(),
        refetching
      })
    );
    if (!isPromise(p)) {
      loadEnd(pr, p, void 0, lookup);
      return p;
    }
    pr = p;
    if ("value" in p) {
      if (p.status === "success")
        loadEnd(pr, p.value, void 0, lookup);
      else
        loadEnd(pr, void 0, void 0, lookup);
      return p;
    }
    scheduled = true;
    queueMicrotask(() => scheduled = false);
    runUpdates(() => {
      setState(resolved ? "refreshing" : "pending");
      trigger();
    }, false);
    return p.then(
      (v) => loadEnd(p, v, void 0, lookup),
      (e) => loadEnd(p, void 0, castError(e), lookup)
    );
  }
  Object.defineProperties(read, {
    state: {
      get: () => state()
    },
    error: {
      get: () => error()
    },
    loading: {
      get() {
        const s = state();
        return s === "pending" || s === "refreshing";
      }
    },
    latest: {
      get() {
        if (!resolved)
          return read();
        const err = error();
        if (err && !pr)
          throw err;
        return value();
      }
    }
  });
  if (dynamic)
    createComputed(() => load(false));
  else
    load(false);
  return [
    read,
    {
      refetch: load,
      mutate: setValue
    }
  ];
}
function createSelector(source, fn = equalFn, options) {
  const subs = /* @__PURE__ */ new Map();
  const node = createComputation(
    (p) => {
      const v = source();
      for (const [key2, val] of subs.entries())
        if (fn(key2, v) !== fn(key2, p)) {
          for (const c of val.values()) {
            c.state = STALE;
            if (c.pure)
              Updates.push(c);
            else
              Effects.push(c);
          }
        }
      return v;
    },
    void 0,
    true,
    STALE
  );
  updateComputation(node);
  return (key2) => {
    const listener = Listener;
    if (listener) {
      let l;
      if (l = subs.get(key2))
        l.add(listener);
      else
        subs.set(key2, l = /* @__PURE__ */ new Set([listener]));
      onCleanup(() => {
        l.delete(listener);
        !l.size && subs.delete(key2);
      });
    }
    return fn(
      key2,
      node.value
    );
  };
}
function batch(fn) {
  return runUpdates(fn, false);
}
function untrack(fn) {
  if (Listener === null)
    return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig)
      ;
    return fn();
  } finally {
    Listener = listener;
  }
}
function on(deps, fn, options) {
  const isArray2 = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return (prevValue) => {
    let input2;
    if (isArray2) {
      input2 = Array(deps.length);
      for (let i = 0; i < deps.length; i++)
        input2[i] = deps[i]();
    } else
      input2 = deps();
    if (defer) {
      defer = false;
      return prevValue;
    }
    const result = untrack(() => fn(input2, prevInput, prevValue));
    prevInput = input2;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null)
    ;
  else if (Owner.cleanups === null)
    Owner.cleanups = [fn];
  else
    Owner.cleanups.push(fn);
  return fn;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  const prevListener = Listener;
  Owner = o;
  Listener = null;
  try {
    return runUpdates(fn, true);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
    Listener = prevListener;
  }
}
function startTransition(fn) {
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    runUpdates(fn, false);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
function createContext(defaultValue, options) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return Owner && Owner.context && Owner.context[context.id] !== void 0 ? Owner.context[context.id] : context.defaultValue;
}
function children(fn) {
  const children2 = createMemo(fn);
  const memo2 = createMemo(() => resolveChildren(children2()));
  memo2.toArray = () => {
    const c = memo2();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo2;
}
let SuspenseContext;
function readSignal() {
  if (this.sources && this.state) {
    if (this.state === STALE)
      updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o))
            ;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure)
              Updates.push(o);
            else
              Effects.push(o);
            if (o.observers)
              markDownstream(o);
          }
          if (!TransitionRunning)
            o.state = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (false)
            ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn)
    return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(
    node,
    node.value,
    time
  );
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue);
    } else
      node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Owner === null)
    ;
  else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned)
        Owner.owned = [c];
      else
        Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  if (node.state === 0)
    return;
  if (node.state === PENDING)
    return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback))
    return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (node.state === STALE) {
      updateComputation(node);
    } else if (node.state === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates)
    return fn();
  let wait = false;
  if (!init)
    Updates = [];
  if (Effects)
    wait = true;
  else
    Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait)
      Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait)
    return;
  const e = Effects;
  Effects = null;
  if (e.length)
    runUpdates(() => runEffects(e), false);
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++)
    runTop(queue[i]);
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user)
      runTop(e);
    else
      queue[userLength++] = e;
  }
  for (i = 0; i < userLength; i++)
    runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
          runTop(source);
      } else if (state === PENDING)
        lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING;
      if (o.pure)
        Updates.push(o);
      else
        Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--)
      cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--)
      node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
}
function castError(err) {
  if (err instanceof Error)
    return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError(err, owner = Owner) {
  const error = castError(err);
  throw error;
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length)
    return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i = 0; i < children2.length; i++) {
      const result = resolveChildren(children2[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id, options) {
  return function provider(props) {
    let res;
    createRenderEffect(
      () => res = untrack(() => {
        Owner.context = {
          ...Owner.context,
          [id]: props.value
        };
        return children(() => props.children);
      }),
      void 0
    );
    return res;
  };
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++)
    d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], i, j;
    newItems[$TRACK];
    return untrack(() => {
      let newLen = newItems.length, newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++)
          ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else
            disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else
            mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function createComponent$1(Comp, props) {
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY)
      return receiver;
    return _.get(property);
  },
  has(_, property) {
    if (property === $PROXY)
      return true;
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
  for (let i = 0, length = this.length; i < length; ++i) {
    const v = this[i]();
    if (v !== void 0)
      return v;
  }
}
function mergeProps$1(...sources) {
  let proxy = false;
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i];
    proxy = proxy || !!s && $PROXY in s;
    sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
  }
  if (proxy) {
    return new Proxy(
      {
        get(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            const v = resolveSource(sources[i])[property];
            if (v !== void 0)
              return v;
          }
        },
        has(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            if (property in resolveSource(sources[i]))
              return true;
          }
          return false;
        },
        keys() {
          const keys = [];
          for (let i = 0; i < sources.length; i++)
            keys.push(...Object.keys(resolveSource(sources[i])));
          return [...new Set(keys)];
        }
      },
      propTraps
    );
  }
  const sourcesMap = {};
  const defined = /* @__PURE__ */ Object.create(null);
  for (let i = sources.length - 1; i >= 0; i--) {
    const source = sources[i];
    if (!source)
      continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    for (let i2 = sourceKeys.length - 1; i2 >= 0; i2--) {
      const key2 = sourceKeys[i2];
      if (key2 === "__proto__" || key2 === "constructor")
        continue;
      const desc = Object.getOwnPropertyDescriptor(source, key2);
      if (!defined[key2]) {
        defined[key2] = desc.get ? {
          enumerable: true,
          configurable: true,
          get: resolveSources.bind(sourcesMap[key2] = [desc.get.bind(source)])
        } : desc.value !== void 0 ? desc : void 0;
      } else {
        const sources2 = sourcesMap[key2];
        if (sources2) {
          if (desc.get)
            sources2.push(desc.get.bind(source));
          else if (desc.value !== void 0)
            sources2.push(() => desc.value);
        }
      }
    }
  }
  const target = {};
  const definedKeys = Object.keys(defined);
  for (let i = definedKeys.length - 1; i >= 0; i--) {
    const key2 = definedKeys[i], desc = defined[key2];
    if (desc && desc.get)
      Object.defineProperty(target, key2, desc);
    else
      target[key2] = desc ? desc.value : void 0;
  }
  return target;
}
function splitProps(props, ...keys) {
  if ($PROXY in props) {
    const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
    const res = keys.map((k) => {
      return new Proxy(
        {
          get(property) {
            return k.includes(property) ? props[property] : void 0;
          },
          has(property) {
            return k.includes(property) && property in props;
          },
          keys() {
            return k.filter((property) => property in props);
          }
        },
        propTraps
      );
    });
    res.push(
      new Proxy(
        {
          get(property) {
            return blocked.has(property) ? void 0 : props[property];
          },
          has(property) {
            return blocked.has(property) ? false : property in props;
          },
          keys() {
            return Object.keys(props).filter((k) => !blocked.has(k));
          }
        },
        propTraps
      )
    );
    return res;
  }
  const otherObject = {};
  const objects = keys.map(() => ({}));
  for (const propName of Object.getOwnPropertyNames(props)) {
    const desc = Object.getOwnPropertyDescriptor(props, propName);
    const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
    let blocked = false;
    let objectIndex = 0;
    for (const k of keys) {
      if (k.includes(propName)) {
        blocked = true;
        isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
      }
      ++objectIndex;
    }
    if (!blocked) {
      isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
    }
  }
  return [...objects, otherObject];
}
const narrowedError = (name) => "Stale read from <".concat(name, ">.");
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}
function Show(props) {
  const keyed = props.keyed;
  const condition = createMemo(() => props.when, void 0, {
    equals: (a, b) => keyed ? a === b : !a === !b
  });
  return createMemo(
    () => {
      const c = condition();
      if (c) {
        const child = props.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(
          () => child(
            keyed ? c : () => {
              if (!untrack(condition))
                throw narrowedError("Show");
              return props.when;
            }
          )
        ) : child;
      }
      return props.fallback;
    },
    void 0,
    void 0
  );
}
function resetErrorBoundaries() {
}
const DEV = void 0;
let renderer;
let createShader;
function startLightningRenderer(options = {}, rootId = "app") {
  const driver = new MainCoreDriver();
  renderer = new RendererMain(options, rootId, driver);
  createShader = renderer.createShader.bind(renderer);
  return renderer;
}
class Children extends Array {
  constructor(node) {
    super();
    __publicField(this, "_parent");
    this._parent = node;
  }
  get selected() {
    return this[this._parent.selected || 0];
  }
  get firstChild() {
    return this[0];
  }
  insert(node, beforeNode) {
    if (beforeNode) {
      const index = this.indexOf(beforeNode);
      this.splice(index, 0, node);
    } else {
      this.push(node);
    }
    node.parent = this._parent;
    this._parent._isDirty = true;
  }
  remove(node) {
    const nodeIndexToRemove = this.indexOf(node);
    if (nodeIndexToRemove >= 0) {
      this.splice(nodeIndexToRemove, 1);
    }
  }
}
function isDevEnv() {
  return { "BASE_URL": "/solid-demo-app/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false, "LEGACY": false } && false;
}
const isDev$1 = isDevEnv() || false;
const config = {
  debug: false,
  animationsEnabled: true,
  animationSettings: {
    duration: 250,
    easing: "ease-in-out"
  },
  fontSettings: {
    fontFamily: "Ubuntu",
    fontSize: 100
  }
};
function hasDebug(node) {
  return isObject(node) && node.debug;
}
function log(msg, node, ...args) {
  if (isDev$1) {
    if (config.debug || hasDebug(node) || hasDebug(args[0])) {
      console.log(msg, node, ...args);
    }
  }
}
function isFunc$1(item) {
  return typeof item === "function";
}
function isObject(item) {
  return typeof item === "object";
}
function isArray$1(item) {
  return Array.isArray(item);
}
function isString(item) {
  return typeof item === "string";
}
function isNumber(item) {
  return typeof item === "number";
}
function isInteger(item) {
  return Number.isInteger(item);
}
function keyExists(obj, keys) {
  for (const key2 of keys) {
    if (key2 in obj) {
      return true;
    }
  }
  return false;
}
function flattenStyles(obj, result = {}) {
  if (isArray$1(obj)) {
    obj.forEach((item) => {
      flattenStyles(item, result);
    });
  } else if (obj) {
    for (const key2 in obj) {
      if (result[key2] === void 0) {
        result[key2] = obj[key2];
      }
    }
  }
  return result;
}
class States extends Array {
  constructor(callback, initialState = {}) {
    var __super = (...args) => {
      super(...args);
      __publicField(this, "onChange");
      return this;
    };
    if (isArray$1(initialState)) {
      __super(...initialState);
    } else if (isString(initialState)) {
      __super(initialState);
    } else {
      __super(
        ...Object.entries(initialState).filter(([_key, value]) => value).map(([key2]) => key2)
      );
    }
    this.onChange = callback;
    return this;
  }
  has(state) {
    return this.indexOf(state) >= 0;
  }
  is(state) {
    return this.indexOf(state) >= 0;
  }
  add(state) {
    this.push(state);
    this.onChange();
  }
  toggle(state) {
    if (this.has(state)) {
      this.remove(state);
    } else {
      this.add(state);
    }
  }
  remove(state) {
    const stateIndexToRemove = this.indexOf(state);
    if (stateIndexToRemove >= 0) {
      this.splice(stateIndexToRemove, 1);
      this.onChange();
    }
  }
}
function calculateFlex(node) {
  const children2 = [];
  let hasOrder = false;
  for (let i = 0; i < node.children.length; i++) {
    const c = node.children[i];
    if (c.name === "TextNode") {
      continue;
    }
    if (c.flexItem === false) {
      continue;
    }
    if (c.name === "text" && c.text !== "" && !(c.width || c.height)) {
      return false;
    }
    if (c.flexOrder !== void 0) {
      hasOrder = true;
    }
    children2.push(c);
  }
  if (hasOrder) {
    children2.sort((a, b) => (a.flexOrder || 0) - (b.flexOrder || 0));
  }
  const numChildren = children2.length;
  const direction = node.flexDirection || "row";
  const isRow = direction === "row";
  const dimension = isRow ? "width" : "height";
  const crossDimension = isRow ? "height" : "width";
  const marginOne = isRow ? "marginLeft" : "marginTop";
  const marginTwo = isRow ? "marginRight" : "marginBottom";
  const prop = isRow ? "x" : "y";
  const crossProp = isRow ? "y" : "x";
  const containerSize = node[dimension] || 0;
  const containerCrossSize = node[crossDimension] || 0;
  const gap = node.gap || 0;
  const justify = node.justifyContent || "flexStart";
  const align = node.alignItems;
  let itemSize = 0;
  if (["center", "spaceBetween", "spaceEvenly"].includes(justify)) {
    itemSize = children2.reduce((prev, c) => prev + (c[dimension] || 0), 0);
  }
  const crossAlignChild = containerCrossSize && align ? (c) => {
    if (align === "flexStart") {
      c[crossProp] = 0;
    } else if (align === "center") {
      c[crossProp] = (containerCrossSize - (c[crossDimension] || 0)) / 2;
    } else if (align === "flexEnd") {
      c[crossProp] = containerCrossSize - (c[crossDimension] || 0);
    }
  } : (c) => c;
  if (justify === "flexStart") {
    let start = 0;
    children2.forEach((c) => {
      c[prop] = start + (c[marginOne] || 0);
      start += (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    });
    if (node.flexBoundary !== "fixed") {
      const calculatedSize = start - gap;
      if (calculatedSize !== node[dimension]) {
        node[dimension] = calculatedSize;
        return true;
      }
    }
  } else if (justify === "flexEnd") {
    let start = containerSize;
    for (let i = numChildren - 1; i >= 0; i--) {
      const c = children2[i];
      assertTruthy(c);
      c[prop] = start - (c[dimension] || 0) - (c[marginTwo] || 0);
      start -= (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
  } else if (justify === "center") {
    let start = (containerSize - (itemSize + gap * (numChildren - 1))) / 2;
    children2.forEach((c) => {
      c[prop] = start;
      start += (c[dimension] || 0) + gap;
      crossAlignChild(c);
    });
  } else if (justify === "spaceBetween") {
    const toPad = (containerSize - itemSize) / (numChildren - 1);
    let start = 0;
    children2.forEach((c) => {
      c[prop] = start;
      start += (c[dimension] || 0) + toPad;
      crossAlignChild(c);
    });
  } else if (justify === "spaceEvenly") {
    const toPad = (containerSize - itemSize) / (numChildren + 1);
    let start = toPad;
    children2.forEach((c) => {
      c[prop] = start;
      start += (c[dimension] || 0) + toPad;
      crossAlignChild(c);
    });
  }
  return false;
}
const [activeElement, setActiveElement] = createSignal(void 0);
const { animationSettings: defaultAnimationSettings } = config;
function convertEffectsToShader(styleEffects) {
  const effects = [];
  for (const [type, props] of Object.entries(
    styleEffects
  )) {
    effects.push({ type, props });
  }
  return createShader("DynamicShader", { effects });
}
function borderAccessor(direction = "") {
  return {
    set(value) {
      if (isNumber(value)) {
        value = { width: value, color: 255 };
      }
      this.effects = {
        ...this.effects || {},
        ...{ ["border".concat(direction)]: value }
      };
      this["_border".concat(direction)] = value;
    },
    get() {
      return this["_border".concat(direction)];
    }
  };
}
const LightningRendererNumberProps = [
  "alpha",
  "color",
  "colorTop",
  "colorRight",
  "colorLeft",
  "colorBottom",
  "colorTl",
  "colorTr",
  "colorBl",
  "colorBr",
  "height",
  "fontSize",
  "lineHeight",
  "mount",
  "mountX",
  "mountY",
  "pivot",
  "pivotX",
  "pivotY",
  "rotation",
  "scale",
  "width",
  "worldX",
  "worldY",
  "x",
  "y",
  "zIndex",
  "zIndexLocked"
];
const LightningRendererNonAnimatingProps = [
  "autosize",
  "clipping",
  "contain",
  "fontFamily",
  "fontStretch",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "maxLines",
  "offsetY",
  "overflowSuffix",
  "rtt",
  "scrollable",
  "scrollY",
  "src",
  "text",
  "textAlign",
  "textBaseline",
  "textOverflow",
  "texture",
  "verticalAlign",
  "wordWrap"
];
class ElementNode extends Object {
  constructor(name) {
    super();
    __publicField(this, "id");
    __publicField(this, "debug");
    __publicField(this, "name");
    __publicField(this, "lng");
    __publicField(this, "renderer");
    __publicField(this, "selected");
    __publicField(this, "autofocus");
    __publicField(this, "flexItem");
    __publicField(this, "flexOrder");
    __publicField(this, "flexBoundary");
    // default is undefined - contained for flex calculated size
    __publicField(this, "_queueDelete");
    __publicField(this, "forwardFocus");
    __publicField(this, "_undoStyles");
    __publicField(this, "_renderProps");
    __publicField(this, "_effects");
    __publicField(this, "_parent");
    __publicField(this, "_shader");
    __publicField(this, "_style");
    __publicField(this, "_states");
    __publicField(this, "_events");
    __publicField(this, "_animationSettings");
    __publicField(this, "_borderRadius");
    __publicField(this, "_border");
    __publicField(this, "_borderLeft");
    __publicField(this, "_borderRight");
    __publicField(this, "_borderTop");
    __publicField(this, "_borderBottom");
    __publicField(this, "_autosized");
    // Public but uses _ prefix
    __publicField(this, "_isDirty");
    // Public but uses _ prefix
    __publicField(this, "_animationQueue", []);
    __publicField(this, "_animationQueueSettings");
    __publicField(this, "_animationRunning", false);
    __publicField(this, "children");
    this.name = name;
    this._renderProps = {};
    this.children = new Children(this);
  }
  get effects() {
    return this._effects;
  }
  set effects(v) {
    this._effects = v;
    if (this.lng) {
      this.shader = convertEffectsToShader(v);
    }
  }
  get parent() {
    return this._parent;
  }
  set parent(p) {
    var _a3;
    this._parent = p;
    if (this.lng) {
      this.lng.parent = (_a3 = p == null ? void 0 : p.lng) != null ? _a3 : null;
    }
  }
  get shader() {
    return this._shader;
  }
  set shader(v) {
    if (isArray$1(v)) {
      this._shader = createShader(...v);
    } else {
      this._shader = v;
    }
    this._sendToLightning("shader", this._shader);
  }
  _sendToLightningAnimatable(name, value) {
    if (this.lng) {
      if (config.animationsEnabled && this.transition && (this.transition === true || this.transition[name])) {
        const animationSettings = this.transition === true || this.transition[name] === true ? void 0 : this.transition[name];
        return this.animate({ [name]: value }, animationSettings).start();
      }
      this.lng[name] = value;
    } else {
      this._renderProps[name] = value;
    }
  }
  _sendToLightning(name, value) {
    if (this.lng) {
      this.lng[name] = value;
    } else {
      this._renderProps[name] = value;
    }
  }
  animate(props, animationSettings) {
    assertTruthy(this.lng, "Node must be rendered before animating");
    return this.lng.animate(props, animationSettings || this.animationSettings);
  }
  chain(props, animationSettings) {
    if (this._animationRunning) {
      this._animationQueue = [];
      this._animationRunning = false;
    }
    if (animationSettings) {
      this._animationQueueSettings = animationSettings;
    } else if (!this._animationQueueSettings) {
      this._animationQueueSettings = animationSettings || this.animationSettings;
    }
    animationSettings = animationSettings || this._animationQueueSettings;
    this._animationQueue.push({ props, animationSettings });
    return this;
  }
  async start() {
    let animation = this._animationQueue.shift();
    while (animation) {
      this._animationRunning = true;
      await this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();
      animation = this._animationQueue.shift();
    }
    this._animationRunning = false;
    this._animationQueueSettings = void 0;
  }
  setFocus() {
    if (this.lng) {
      if (this.forwardFocus !== void 0) {
        if (isFunc$1(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== false) {
            return;
          }
        } else {
          const focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
          if (focusedIndex !== null && focusedIndex < this.children.length) {
            const child = this.children[focusedIndex];
            child instanceof ElementNode && child.setFocus();
            return;
          }
        }
      }
      queueMicrotask(() => setActiveElement(this));
    } else {
      this.autofocus = true;
    }
  }
  isTextNode() {
    return this.name === "text";
  }
  _resizeOnTextLoad() {
    this.lng.on("loaded", (_node, loadedPayload) => {
      if (loadedPayload.type === "text") {
        const { dimensions } = loadedPayload;
        this.parent.updateLayout(this, dimensions);
      }
    });
  }
  getText() {
    return this.children.map((c) => c.text).join("");
  }
  destroy() {
    var _a3;
    if (this._queueDelete) {
      (_a3 = this.lng) == null ? void 0 : _a3.destroy();
    }
  }
  // Must be set before render
  set onEvents(events) {
    this._events = events;
  }
  get onEvents() {
    return this._events || [];
  }
  set style(values) {
    if (isArray$1(values)) {
      this._style = flattenStyles(values);
    } else {
      this._style = values;
    }
    for (const key2 in this._style) {
      if (this[key2] === void 0) {
        this[key2] = this._style[key2];
      }
    }
  }
  get style() {
    return this._style;
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  getChildById(id) {
    return this.children.find((c) => c.id === id);
  }
  searchChildrenById(id) {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child instanceof ElementNode) {
        if (child.id === id) {
          return child;
        }
        const found = child.searchChildrenById(id);
        if (found) {
          return found;
        }
      }
    }
  }
  set states(states) {
    this._states = new States(this._stateChanged.bind(this), states);
    if (this.lng) {
      this._stateChanged();
    }
  }
  get states() {
    this._states = this._states || new States(this._stateChanged.bind(this));
    return this._states;
  }
  get animationSettings() {
    return this._animationSettings || defaultAnimationSettings;
  }
  set animationSettings(animationSettings) {
    this._animationSettings = animationSettings;
  }
  updateLayout(child, dimensions) {
    var _a3, _b2;
    if (this.hasChildren) {
      log("Layout: ", this);
      let changedLayout = false;
      if (isFunc$1(this.onBeforeLayout)) {
        changedLayout = this.onBeforeLayout.call(
          this,
          child,
          dimensions
        );
      }
      if (this.display === "flex") {
        if (calculateFlex(this) || changedLayout) {
          (_a3 = this.parent) == null ? void 0 : _a3.updateLayout();
        }
      } else if (changedLayout) {
        (_b2 = this.parent) == null ? void 0 : _b2.updateLayout();
      }
      isFunc$1(this.onLayout) && this.onLayout.call(this, child, dimensions);
    }
  }
  _stateChanged() {
    log("State Changed: ", this, this.states);
    if (this.forwardStates) {
      const states2 = this.states.slice();
      this.children.forEach((c) => c.states = states2);
    }
    const states = this.states;
    if (this._undoStyles || this.style && keyExists(this.style, states)) {
      this._undoStyles = this._undoStyles || [];
      const stylesToUndo = {};
      this._undoStyles.forEach((styleKey) => {
        stylesToUndo[styleKey] = this.style[styleKey];
      });
      const newStyles = states.reduce((acc, state) => {
        const styles2 = this.style[state];
        if (styles2) {
          acc = {
            ...acc,
            ...styles2
          };
        }
        return acc;
      }, {});
      this._undoStyles = Object.keys(newStyles);
      if (newStyles.transition !== void 0) {
        this.transition = newStyles.transition;
      }
      Object.assign(this, stylesToUndo, newStyles);
    }
  }
  render() {
    const node = this;
    const parent = this.parent;
    if (!parent) {
      console.warn("Parent not set - no node created for: ", this);
      return;
    }
    if (!parent.lng) {
      console.warn("Parent not rendered yet: ", this);
      return;
    }
    if (this.lng) {
      console.warn("Node already rendered: ", this);
      return;
    }
    if (parent._isDirty) {
      parent.updateLayout();
      parent._isDirty = false;
    }
    if (this.states.length) {
      this._stateChanged();
    }
    const props = node._renderProps;
    props.x = props.x || 0;
    props.y = props.y || 0;
    if (parent.lng) {
      props.parent = parent.lng;
    }
    if (node._effects) {
      this.shader = convertEffectsToShader(node._effects);
    }
    if (node.isTextNode()) {
      if (config.fontSettings) {
        for (const key2 in config.fontSettings) {
          if (props[key2] === void 0) {
            props[key2] = config.fontSettings[key2];
          }
        }
      }
      props.text = node.getText();
      if (props.contain) {
        if (!props.width) {
          props.width = (parent.width || 0) - props.x - (props.marginRight || 0);
          node._autosized = true;
        }
        if (props.contain === "both" && !props.height && !props.maxLines) {
          props.height = (parent.height || 0) - props.y - (props.marginBottom || 0);
          node._autosized = true;
        }
      }
      log("Rendering: ", this, props);
      node.lng = renderer.createTextNode(props);
      if (!props.width || !props.height) {
        node._autosized = true;
        node._resizeOnTextLoad();
      }
    } else {
      if (!props.texture) {
        if (isNaN(props.width)) {
          props.width = (parent.width || 0) - props.x;
          node._autosized = true;
        }
        if (isNaN(props.height)) {
          props.height = (parent.height || 0) - props.y;
          node._autosized = true;
        }
        if (!props.color && !props.src) {
          props.color = 0;
        }
      }
      log("Rendering: ", this, props);
      node.lng = renderer.createNode(props);
    }
    if (node.onFail) {
      node.lng.on("failed", node.onFail);
    }
    if (node.onLoad) {
      node.lng.on("loaded", node.onLoad);
    }
    isFunc$1(this.onCreate) && this.onCreate.call(this, node);
    node.onEvents.forEach(([name, handler]) => {
      var _a3;
      (_a3 = node.lng) == null ? void 0 : _a3.on(name, (inode, data) => handler(node, data));
    });
    if (node.lng.div) {
      node.lng.div.solid = node;
    }
    if (node.name !== "text") {
      node.children.forEach((c) => {
        if (c.render) {
          c.render();
        } else if (c.text !== "") {
          console.warn("TextNode outside of <Text>: ", c);
        }
      });
    }
    node.autofocus && node.setFocus();
    delete this._renderProps;
  }
}
for (const key2 of LightningRendererNumberProps) {
  Object.defineProperty(ElementNode.prototype, key2, {
    get() {
      return this.lng ? this.lng[key2] : this._renderProps[key2];
    },
    set(v) {
      this._sendToLightningAnimatable(key2, v);
    }
  });
}
for (const key2 of LightningRendererNonAnimatingProps) {
  Object.defineProperty(ElementNode.prototype, key2, {
    get() {
      return this.lng ? this.lng[key2] : this._renderProps[key2];
    },
    set(v) {
      this._sendToLightning(key2, v);
    }
  });
}
Object.defineProperties(ElementNode.prototype, {
  borderRadius: {
    set(radius) {
      this._borderRadius = radius;
      this.effects = {
        ...this.effects || {},
        ...{ radius: { radius } }
      };
    },
    get() {
      return this._borderRadius;
    }
  },
  border: borderAccessor(),
  borderLeft: borderAccessor("Left"),
  borderRight: borderAccessor("Right"),
  borderTop: borderAccessor("Top"),
  borderBottom: borderAccessor("Bottom")
});
Object.defineProperties(ElementNode.prototype, {
  linearGradient: {
    set(props = {}) {
      this._linearGradient = props;
      this.effects = {
        ...this.effects || {},
        ...{ linearGradient: props }
      };
    },
    get() {
      return this._linearGradient;
    }
  }
});
const Text = (props) => (() => {
  var _el$ = createElement("text");
  spread(_el$, props, false);
  return _el$;
})();
const View = (props) => (() => {
  var _el$ = createElement("node");
  spread(_el$, props, false);
  return _el$;
})();
function createRenderer$1({
  createElement: createElement2,
  createTextNode: createTextNode2,
  isTextNode,
  replaceText,
  insertNode: insertNode2,
  removeNode,
  setProperty,
  getParentNode,
  getFirstChild,
  getNextSibling
}) {
  function insert2(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial)
      initial = [];
    if (typeof accessor !== "function")
      return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    while (typeof current === "function")
      current = current();
    if (value === current)
      return current;
    const t = typeof value, multi = marker !== void 0;
    if (t === "string" || t === "number") {
      if (t === "number")
        value = value.toString();
      if (multi) {
        let node = current[0];
        if (node && isTextNode(node)) {
          replaceText(node, value);
        } else
          node = createTextNode2(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          replaceText(getFirstChild(parent), current = value);
        } else {
          cleanChildren(parent, current, marker, createTextNode2(value));
          current = value;
        }
      }
    } else if (value == null || t === "boolean") {
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function")
          v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      if (normalizeIncomingArray(array, value, unwrapArray)) {
        createRenderEffect(
          () => current = insertExpression(parent, array, current, marker, true)
        );
        return () => current;
      }
      if (array.length === 0) {
        const replacement = cleanChildren(parent, current, marker);
        if (multi)
          return current = replacement;
      } else {
        if (Array.isArray(current)) {
          if (current.length === 0) {
            appendNodes(parent, array, marker);
          } else
            reconcileArrays(parent, current, array);
        } else if (current == null || current === "") {
          appendNodes(parent, array);
        } else {
          reconcileArrays(parent, multi && current || [getFirstChild(parent)], array);
        }
      }
      current = array;
    } else {
      if (Array.isArray(current)) {
        if (multi)
          return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !getFirstChild(parent)) {
        insertNode2(parent, value);
      } else
        replaceNode(parent, value, getFirstChild(parent));
      current = value;
    }
    return current;
  }
  function normalizeIncomingArray(normalized, array, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i], t;
      if (item == null || item === true || item === false)
        ;
      else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item) || dynamic;
      } else if ((t = typeof item) === "string" || t === "number") {
        normalized.push(createTextNode2(item));
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function")
            item = item();
          dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else
        normalized.push(item);
    }
    return dynamic;
  }
  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
        while (bStart < bEnd)
          insertNode2(parentNode, b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart]))
            removeNode(parentNode, a[aStart]);
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = getNextSibling(a[--aEnd]);
        insertNode2(parentNode, b[bStart++], getNextSibling(a[aStart++]));
        insertNode2(parentNode, b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = /* @__PURE__ */ new Map();
          let i = bStart;
          while (i < bEnd)
            map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart, sequence = 1, t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence)
                break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index)
                insertNode2(parentNode, b[bStart++], node);
            } else
              replaceNode(parentNode, b[bStart++], a[aStart++]);
          } else
            aStart++;
        } else
          removeNode(parentNode, a[aStart++]);
      }
    }
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) {
      let removed;
      while (removed = getFirstChild(parent))
        removeNode(parent, removed);
      replacement && insertNode2(parent, replacement);
      return "";
    }
    const node = replacement || createTextNode2("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = getParentNode(el) === parent;
          if (!inserted && !i)
            isParent ? replaceNode(parent, node, el) : insertNode2(parent, node, marker);
          else
            isParent && removeNode(parent, el);
        } else
          inserted = true;
      }
    } else
      insertNode2(parent, node, marker);
    return [node];
  }
  function appendNodes(parent, array, marker) {
    for (let i = 0, len = array.length; i < len; i++)
      insertNode2(parent, array[i], marker);
  }
  function replaceNode(parent, newNode, oldNode) {
    insertNode2(parent, newNode, oldNode);
    removeNode(parent, oldNode);
  }
  function spreadExpression(node, props, prevProps = {}, skipChildren) {
    props || (props = {});
    if (!skipChildren) {
      createRenderEffect(
        () => prevProps.children = insertExpression(node, props.children, prevProps.children)
      );
    }
    createRenderEffect(() => props.ref && props.ref(node));
    createRenderEffect(() => {
      for (const prop in props) {
        if (prop === "children" || prop === "ref")
          continue;
        const value = props[prop];
        if (value === prevProps[prop])
          continue;
        setProperty(node, prop, value, prevProps[prop]);
        prevProps[prop] = value;
      }
    });
    return prevProps;
  }
  return {
    render(code, element) {
      let disposer;
      createRoot((dispose2) => {
        disposer = dispose2;
        insert2(element, code());
      });
      return disposer;
    },
    insert: insert2,
    spread(node, accessor, skipChildren) {
      if (typeof accessor === "function") {
        createRenderEffect((current) => spreadExpression(node, accessor(), current, skipChildren));
      } else
        spreadExpression(node, accessor, void 0, skipChildren);
    },
    createElement: createElement2,
    createTextNode: createTextNode2,
    insertNode: insertNode2,
    setProp(node, name, value, prev) {
      setProperty(node, name, value, prev);
      return value;
    },
    mergeProps: mergeProps$1,
    effect: createRenderEffect,
    memo: createMemo,
    createComponent: createComponent$1,
    use(fn, element, arg) {
      return untrack(() => fn(element, arg));
    }
  };
}
function createRenderer(options) {
  const renderer2 = createRenderer$1(options);
  renderer2.mergeProps = mergeProps$1;
  return renderer2;
}
const universalLightning = {
  createElement(name) {
    return new ElementNode(name);
  },
  createTextNode(text2) {
    return { name: "TextNode", text: text2, parent: void 0 };
  },
  replaceText(node, value) {
    log("Replace Text: ", node, value);
    node.text = value;
    const parent = node.parent;
    assertTruthy(parent);
    parent.text = parent.getText();
  },
  setProperty(node, name, value = true) {
    node[name] = value;
  },
  insertNode(parent, node, anchor) {
    log("INSERT: ", parent, node, anchor);
    parent.children.insert(node, anchor);
    node._queueDelete = false;
    if (node instanceof ElementNode) {
      parent.lng && node.render();
    } else if (parent.isTextNode()) {
      parent.text = parent.getText();
    }
  },
  isTextNode(node) {
    return node.isTextNode();
  },
  removeNode(parent, node) {
    log("REMOVE: ", parent, node);
    parent.children.remove(node);
    node._queueDelete = true;
    if (node instanceof ElementNode) {
      queueMicrotask(() => node.destroy());
    }
  },
  getParentNode(node) {
    return node.parent;
  },
  getFirstChild(node) {
    return node.children[0];
  },
  getNextSibling(node) {
    const children2 = node.parent.children || [];
    const index = children2.indexOf(node) + 1;
    if (index < children2.length) {
      return children2[index];
    }
    return void 0;
  }
};
const solidRenderer = createRenderer(universalLightning);
const render = async function(code, node) {
  const renderer2 = startLightningRenderer(config.rendererOptions, node);
  await renderer2.init();
  const rootNode = new ElementNode("App");
  rootNode.lng = renderer2.root;
  const dispose2 = solidRenderer.render(code, rootNode);
  return {
    dispose: dispose2,
    rootNode,
    renderer: renderer2
  };
};
const {
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
  use
} = solidRenderer;
function hexColor(color = "") {
  if (isInteger(color)) {
    return color;
  }
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      return Number(
        color.replace("#", "0x") + (color.length === 7 ? "ff" : "")
      );
    }
    if (color.startsWith("0x")) {
      return Number(color);
    }
    return Number("0x" + (color.length === 6 ? color + "ff" : color));
  }
  return 0;
}
const $$EVENTS = "_$DX_DELEGATE";
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function eventHandler(e) {
  const key2 = "$$".concat(e.type);
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  while (node) {
    const handler = node[key2];
    if (handler && !node.disabled) {
      const data = node["".concat(key2, "Data")];
      data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble)
        return;
    }
    node = node._$host || node.parentNode || node.host;
  }
}
const voidFn = () => void 0;
const isServer = false;
function createBeforeLeave() {
  let listeners = /* @__PURE__ */ new Set();
  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  let ignore = false;
  function confirm(to, options) {
    if (ignore)
      return !(ignore = false);
    const e = {
      to,
      options,
      defaultPrevented: false,
      preventDefault: () => e.defaultPrevented = true
    };
    for (const l of listeners)
      l.listener({
        ...e,
        from: l.location,
        retry: (force) => {
          force && (ignore = true);
          l.navigate(to, { ...options, resolve: false });
        }
      });
    return !e.defaultPrevented;
  }
  return {
    subscribe,
    confirm
  };
}
let depth;
function saveCurrentDepth() {
  if (!window.history.state || window.history.state._depth == null) {
    window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, "");
  }
  depth = window.history.state._depth;
}
{
  saveCurrentDepth();
}
function keepDepth(state) {
  return {
    ...state,
    _depth: window.history.state && window.history.state._depth
  };
}
function notifyIfNotBlocked(notify, block) {
  let ignore = false;
  return () => {
    const prevDepth = depth;
    saveCurrentDepth();
    const delta = prevDepth == null ? null : depth - prevDepth;
    if (ignore) {
      ignore = false;
      return;
    }
    if (delta && block(delta)) {
      ignore = true;
      window.history.go(-delta);
    } else {
      notify();
    }
  };
}
const hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
const trimPathRegex = /^\/+|(\/)\/+$/g;
const mockBase = "http://sr";
function normalizePath(path, omitSlash = false) {
  const s = path.replace(trimPathRegex, "$1");
  return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
  if (hasSchemeRegex.test(path)) {
    return void 0;
  }
  const basePath2 = normalizePath(base);
  const fromPath = from && normalizePath(from);
  let result = "";
  if (!fromPath || path.startsWith("/")) {
    result = basePath2;
  } else if (fromPath.toLowerCase().indexOf(basePath2.toLowerCase()) !== 0) {
    result = basePath2 + fromPath;
  } else {
    result = fromPath;
  }
  return (result || "/") + normalizePath(path, !result);
}
function invariant(value, message) {
  if (value == null) {
    throw new Error(message);
  }
  return value;
}
function joinPaths(from, to) {
  return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
  const params = {};
  url.searchParams.forEach((value, key2) => {
    params[key2] = value;
  });
  return params;
}
function createMatcher(path, partial, matchFilters) {
  const [pattern, splat] = path.split("/*", 2);
  const segments = pattern.split("/").filter(Boolean);
  const len = segments.length;
  return (location) => {
    const locSegments = location.split("/").filter(Boolean);
    const lenDiff = locSegments.length - len;
    if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) {
      return null;
    }
    const match = {
      path: len ? "" : "/",
      params: {}
    };
    const matchFilter = (s) => matchFilters === void 0 ? void 0 : matchFilters[s];
    for (let i = 0; i < len; i++) {
      const segment = segments[i];
      const locSegment = locSegments[i];
      const dynamic = segment[0] === ":";
      const key2 = dynamic ? segment.slice(1) : segment;
      if (dynamic && matchSegment(locSegment, matchFilter(key2))) {
        match.params[key2] = locSegment;
      } else if (dynamic || !matchSegment(locSegment, segment)) {
        return null;
      }
      match.path += "/".concat(locSegment);
    }
    if (splat) {
      const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
      if (matchSegment(remainder, matchFilter(splat))) {
        match.params[splat] = remainder;
      } else {
        return null;
      }
    }
    return match;
  };
}
function matchSegment(input2, filter) {
  const isEqual = (s) => s.localeCompare(input2, void 0, { sensitivity: "base" }) === 0;
  if (filter === void 0) {
    return true;
  } else if (typeof filter === "string") {
    return isEqual(filter);
  } else if (typeof filter === "function") {
    return filter(input2);
  } else if (Array.isArray(filter)) {
    return filter.some(isEqual);
  } else if (filter instanceof RegExp) {
    return filter.test(input2);
  }
  return false;
}
function scoreRoute(route) {
  const [pattern, splat] = route.pattern.split("/*", 2);
  const segments = pattern.split("/").filter(Boolean);
  return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === void 0 ? 0 : 1));
}
function createMemoObject(fn) {
  const map = /* @__PURE__ */ new Map();
  const owner = getOwner();
  return new Proxy({}, {
    get(_, property) {
      if (!map.has(property)) {
        runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
      }
      return map.get(property)();
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys() {
      return Reflect.ownKeys(fn());
    }
  });
}
function expandOptionals(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
const MAX_REDIRECTS = 100;
const RouterContextObj = createContext();
const RouteContextObj = createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
const useNavigate = () => useRouter().navigatorFactory();
const useLocation = () => useRouter().location;
const useMatch = (path, matchFilters) => {
  const location = useLocation();
  const matchers = createMemo(() => expandOptionals(path()).map((path2) => createMatcher(path2, void 0, matchFilters)));
  return createMemo(() => {
    for (const matcher of matchers()) {
      const match = matcher(location.pathname);
      if (match)
        return match;
    }
  });
};
const useParams = () => useRouter().params;
function createRoutes(routeDef, base = "") {
  const { component, load, children: children2, info } = routeDef;
  const isLeaf = !children2 || Array.isArray(children2) && !children2.length;
  const shared = {
    key: routeDef,
    component,
    load,
    info
  };
  return asArray(routeDef.path).reduce((acc, path) => {
    for (const originalPath of expandOptionals(path)) {
      const path2 = joinPaths(base, originalPath);
      let pattern = isLeaf ? path2 : path2.split("/*", 1)[0];
      pattern = pattern.split("/").map((s) => {
        return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
      }).join("/");
      acc.push({
        ...shared,
        originalPath,
        pattern,
        matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
      });
    }
    return acc;
  }, []);
}
function createBranch(routes, index = 0) {
  return {
    routes,
    score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
    matcher(location) {
      const matches = [];
      for (let i = routes.length - 1; i >= 0; i--) {
        const route = routes[i];
        const match = route.matcher(location);
        if (!match) {
          return null;
        }
        matches.unshift({
          ...match,
          route
        });
      }
      return matches;
    }
  };
}
function asArray(value) {
  return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", stack = [], branches = []) {
  const routeDefs = asArray(routeDef);
  for (let i = 0, len = routeDefs.length; i < len; i++) {
    const def = routeDefs[i];
    if (def && typeof def === "object") {
      if (!def.hasOwnProperty("path"))
        def.path = "";
      const routes = createRoutes(def, base);
      for (const route of routes) {
        stack.push(route);
        const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
        if (def.children && !isEmptyArray) {
          createBranches(def.children, route.pattern, stack, branches);
        } else {
          const branch = createBranch([...stack], branches.length);
          branches.push(branch);
        }
        stack.pop();
      }
    }
  }
  return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches(branches, location) {
  for (let i = 0, len = branches.length; i < len; i++) {
    const match = branches[i].matcher(location);
    if (match) {
      return match;
    }
  }
  return [];
}
function createLocation(path, state) {
  const origin = new URL(mockBase);
  const url = createMemo((prev) => {
    const path_ = path();
    try {
      return new URL(path_, origin);
    } catch (err) {
      console.error("Invalid path ".concat(path_));
      return prev;
    }
  }, origin, {
    equals: (a, b) => a.href === b.href
  });
  const pathname = createMemo(() => url().pathname);
  const search = createMemo(() => url().search, true);
  const hash = createMemo(() => url().hash);
  const key2 = () => "";
  return {
    get pathname() {
      return pathname();
    },
    get search() {
      return search();
    },
    get hash() {
      return hash();
    },
    get state() {
      return state();
    },
    get key() {
      return key2();
    },
    query: createMemoObject(on(search, () => extractSearchParams(url())))
  };
}
let intent;
function createRouterContext(integration, branches, getContext, options = {}) {
  const { signal: [source, setSource], utils = {} } = integration;
  const parsePath = utils.parsePath || ((p) => p);
  const renderPath = utils.renderPath || ((p) => p);
  const beforeLeave = utils.beforeLeave || createBeforeLeave();
  const basePath2 = resolvePath("", options.base || "");
  if (basePath2 === void 0) {
    throw new Error("".concat(basePath2, " is not a valid base path"));
  } else if (basePath2 && !source().value) {
    setSource({ value: basePath2, replace: true, scroll: false });
  }
  const [isRouting, setIsRouting] = createSignal(false);
  const start = async (callback) => {
    setIsRouting(true);
    try {
      await startTransition(callback);
    } finally {
      setIsRouting(false);
    }
  };
  const [reference, setReference] = createSignal(source().value);
  const [state, setState] = createSignal(source().state);
  const location = createLocation(reference, state);
  const referrers = [];
  const submissions = createSignal([]);
  const matches = createMemo(() => getRouteMatches(branches(), location.pathname));
  const params = createMemoObject(() => {
    const m = matches();
    const params2 = {};
    for (let i = 0; i < m.length; i++) {
      Object.assign(params2, m[i].params);
    }
    return params2;
  });
  const baseRoute = {
    pattern: basePath2,
    path: () => basePath2,
    outlet: () => null,
    resolvePath(to) {
      return resolvePath(basePath2, to);
    }
  };
  createRenderEffect(() => {
    const { value, state: state2 } = source();
    untrack(() => {
      if (value !== reference()) {
        start(() => {
          intent = "native";
          setReference(value);
          setState(state2);
          resetErrorBoundaries();
          submissions[1]([]);
        }).then(() => {
          intent = void 0;
        });
      }
    });
  });
  return {
    base: baseRoute,
    location,
    params,
    isRouting,
    renderPath,
    parsePath,
    navigatorFactory,
    matches,
    beforeLeave,
    preloadRoute,
    singleFlight: options.singleFlight === void 0 ? true : options.singleFlight,
    submissions
  };
  function navigateFromRoute(route, to, options2) {
    untrack(() => {
      if (typeof to === "number") {
        if (!to) {
        } else if (utils.go) {
          utils.go(to);
        } else {
          console.warn("Router integration does not support relative routing");
        }
        return;
      }
      const { replace, resolve, scroll, state: nextState } = {
        replace: false,
        resolve: true,
        scroll: true,
        ...options2
      };
      const resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
      if (resolvedTo === void 0) {
        throw new Error("Path '".concat(to, "' is not a routable path"));
      } else if (referrers.length >= MAX_REDIRECTS) {
        throw new Error("Too many redirects");
      }
      const current = reference();
      if (resolvedTo !== current || nextState !== state()) {
        if (isServer)
          ;
        else if (beforeLeave.confirm(resolvedTo, options2)) {
          const len = referrers.push({ value: current, replace, scroll, state: state() });
          start(() => {
            intent = "navigate";
            setReference(resolvedTo);
            setState(nextState);
            resetErrorBoundaries();
            submissions[1]([]);
          }).then(() => {
            if (referrers.length === len) {
              intent = void 0;
              navigateEnd({
                value: resolvedTo,
                state: nextState
              });
            }
          });
        }
      }
    });
  }
  function navigatorFactory(route) {
    route = route || useContext(RouteContextObj) || baseRoute;
    return (to, options2) => navigateFromRoute(route, to, options2);
  }
  function navigateEnd(next) {
    const first = referrers[0];
    if (first) {
      if (next.value !== first.value || next.state !== first.state) {
        setSource({
          ...next,
          replace: first.replace,
          scroll: first.scroll
        });
      }
      referrers.length = 0;
    }
  }
  function preloadRoute(url, preloadData) {
    const matches2 = getRouteMatches(branches(), url.pathname);
    const prevIntent = intent;
    intent = "preload";
    for (let match in matches2) {
      const { route, params: params2 } = matches2[match];
      route.component && route.component.preload && route.component.preload();
      const { load } = route;
      preloadData && load && runWithOwner(getContext(), () => load({
        params: params2,
        location: {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash,
          query: extractSearchParams(url),
          state: null,
          key: ""
        },
        intent: "preload"
      }));
    }
    intent = prevIntent;
  }
}
function createRouteContext(router, parent, outlet, match) {
  const { base, location, params } = router;
  const { pattern, component, load } = match().route;
  const path = createMemo(() => match().path);
  component && component.preload && component.preload();
  const data = load ? load({ params, location, intent: intent || "initial" }) : void 0;
  const route = {
    parent,
    pattern,
    path,
    outlet: () => component ? createComponent$1(component, {
      params,
      location,
      data,
      get children() {
        return outlet();
      }
    }) : outlet(),
    resolvePath(to) {
      return resolvePath(base.path(), to, path());
    }
  };
  return route;
}
const createRouterComponent = (router) => (props) => {
  const {
    base
  } = props;
  const routeDefs = children(() => props.children);
  const branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
  let context;
  const routerState = createRouterContext(router, branches, () => context, {
    base,
    singleFlight: props.singleFlight
  });
  router.create && router.create(routerState);
  return createComponent(RouterContextObj.Provider, {
    value: routerState,
    get children() {
      return createComponent(Root, {
        routerState,
        get root() {
          return props.root;
        },
        get load() {
          return props.rootLoad;
        },
        get children() {
          return [memo(() => (context = getOwner()) && null), createComponent(Routes, {
            routerState,
            get branches() {
              return branches();
            }
          })];
        }
      });
    }
  });
};
function Root(props) {
  const location = props.routerState.location;
  const params = props.routerState.params;
  const data = createMemo(() => props.load && untrack(() => props.load({
    params,
    location,
    intent: "preload"
  })));
  return createComponent(Show, {
    get when() {
      return props.root;
    },
    keyed: true,
    get fallback() {
      return props.children;
    },
    children: (Root2) => createComponent(Root2, {
      params,
      location,
      get data() {
        return data();
      },
      get children() {
        return props.children;
      }
    })
  });
}
function Routes(props) {
  const disposers = [];
  let root;
  const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
    let equal = prevMatches && nextMatches.length === prevMatches.length;
    const next = [];
    for (let i = 0, len = nextMatches.length; i < len; i++) {
      const prevMatch = prevMatches && prevMatches[i];
      const nextMatch = nextMatches[i];
      if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
        next[i] = prev[i];
      } else {
        equal = false;
        if (disposers[i]) {
          disposers[i]();
        }
        createRoot((dispose2) => {
          disposers[i] = dispose2;
          next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => props.routerState.matches()[i]);
        });
      }
    }
    disposers.splice(nextMatches.length).forEach((dispose2) => dispose2());
    if (prev && equal) {
      return prev;
    }
    root = next[0];
    return next;
  }));
  return createOutlet(() => routeStates() && root)();
}
const createOutlet = (child) => {
  return () => createComponent(Show, {
    get when() {
      return child();
    },
    keyed: true,
    children: (child2) => createComponent(RouteContextObj.Provider, {
      value: child2,
      get children() {
        return child2.outlet();
      }
    })
  });
};
const Route = (props) => {
  const childRoutes = children(() => props.children);
  return mergeProps$1(props, {
    get children() {
      return childRoutes();
    }
  });
};
function intercept([value, setValue], get2, set) {
  return [get2 ? () => get2(value()) : value, set ? (v) => setValue(set(v)) : setValue];
}
function querySelector(selector) {
  if (selector === "#") {
    return null;
  }
  try {
    return document.querySelector(selector);
  } catch (e) {
    return null;
  }
}
function createRouter(config2) {
  let ignore = false;
  const wrap = (value) => typeof value === "string" ? { value } : value;
  const signal = intercept(createSignal(wrap(config2.get()), { equals: (a, b) => a.value === b.value }), void 0, (next) => {
    !ignore && config2.set(next);
    return next;
  });
  config2.init && onCleanup(config2.init((value = config2.get()) => {
    ignore = true;
    signal[1](wrap(value));
    ignore = false;
  }));
  return createRouterComponent({
    signal,
    create: config2.create,
    utils: config2.utils
  });
}
function bindEvent(target, type, handler) {
  target.addEventListener(type, handler);
  return () => target.removeEventListener(type, handler);
}
function scrollToHash(hash, fallbackTop) {
  const el = querySelector("#".concat(hash));
  if (el) {
    el.scrollIntoView();
  } else if (fallbackTop) {
    window.scrollTo(0, 0);
  }
}
const actions = /* @__PURE__ */ new Map();
function setupNativeEvents(preload2 = true, explicitLinks = false, actionBase = "/_server") {
  return (router) => {
    const basePath2 = router.base.path();
    const navigateFromRoute = router.navigatorFactory(router.base);
    let preloadTimeout = {};
    function isSvg(el) {
      return el.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function handleAnchor(evt) {
      if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey)
        return;
      const a = evt.composedPath().find((el) => el instanceof Node && el.nodeName.toUpperCase() === "A");
      if (!a || explicitLinks && !a.hasAttribute("link"))
        return;
      const svg = isSvg(a);
      const href = svg ? a.href.baseVal : a.href;
      const target = svg ? a.target.baseVal : a.target;
      if (target || !href && !a.hasAttribute("state"))
        return;
      const rel = (a.getAttribute("rel") || "").split(/\s+/);
      if (a.hasAttribute("download") || rel && rel.includes("external"))
        return;
      const url = svg ? new URL(href, document.baseURI) : new URL(href);
      if (url.origin !== window.location.origin || basePath2 && url.pathname && !url.pathname.toLowerCase().startsWith(basePath2.toLowerCase()))
        return;
      return [a, url];
    }
    function handleAnchorClick(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      const to = router.parsePath(url.pathname + url.search + url.hash);
      const state = a.getAttribute("state");
      evt.preventDefault();
      navigateFromRoute(to, {
        resolve: false,
        replace: a.hasAttribute("replace"),
        scroll: !a.hasAttribute("noscroll"),
        state: state && JSON.parse(state)
      });
    }
    function handleAnchorPreload(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (!preloadTimeout[url.pathname])
        router.preloadRoute(url, a.getAttribute("preload") !== "false");
    }
    function handleAnchorIn(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (preloadTimeout[url.pathname])
        return;
      preloadTimeout[url.pathname] = setTimeout(() => {
        router.preloadRoute(url, a.getAttribute("preload") !== "false");
        delete preloadTimeout[url.pathname];
      }, 200);
    }
    function handleAnchorOut(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [, url] = res;
      if (preloadTimeout[url.pathname]) {
        clearTimeout(preloadTimeout[url.pathname]);
        delete preloadTimeout[url.pathname];
      }
    }
    function handleFormSubmit(evt) {
      let actionRef = evt.submitter && evt.submitter.hasAttribute("formaction") ? evt.submitter.getAttribute("formaction") : evt.target.getAttribute("action");
      if (!actionRef)
        return;
      if (!actionRef.startsWith("https://action/")) {
        const url = new URL(actionRef, mockBase);
        actionRef = router.parsePath(url.pathname + url.search);
        if (!actionRef.startsWith(actionBase))
          return;
      }
      if (evt.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const handler = actions.get(actionRef);
      if (handler) {
        evt.preventDefault();
        const data = new FormData(evt.target);
        if (evt.submitter && evt.submitter.name)
          data.append(evt.submitter.name, evt.submitter.value);
        handler.call({ r: router, f: evt.target }, data);
      }
    }
    delegateEvents(["click", "submit"]);
    document.addEventListener("click", handleAnchorClick);
    if (preload2) {
      document.addEventListener("mouseover", handleAnchorIn);
      document.addEventListener("mouseout", handleAnchorOut);
      document.addEventListener("focusin", handleAnchorPreload);
      document.addEventListener("touchstart", handleAnchorPreload);
    }
    document.addEventListener("submit", handleFormSubmit);
    onCleanup(() => {
      document.removeEventListener("click", handleAnchorClick);
      if (preload2) {
        document.removeEventListener("mouseover", handleAnchorIn);
        document.removeEventListener("mouseout", handleAnchorOut);
        document.removeEventListener("focusin", handleAnchorPreload);
        document.removeEventListener("touchstart", handleAnchorPreload);
      }
      document.removeEventListener("submit", handleFormSubmit);
    });
  };
}
function hashParser(str) {
  const to = str.replace(/^.*?#/, "");
  if (!to.startsWith("/")) {
    const [, path = "/"] = window.location.hash.split("#", 2);
    return "".concat(path, "#").concat(to);
  }
  return to;
}
function HashRouter(props) {
  const getSource = () => window.location.hash.slice(1);
  const beforeLeave = createBeforeLeave();
  return createRouter({
    get: getSource,
    set({ value, replace, scroll, state }) {
      if (replace) {
        window.history.replaceState(keepDepth(state), "", "#" + value);
      } else {
        window.location.hash = value;
      }
      const hashIndex = value.indexOf("#");
      const hash = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
      scrollToHash(hash, scroll);
      saveCurrentDepth();
    },
    init: (notify) => bindEvent(window, "hashchange", notifyIfNotBlocked(notify, (delta) => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
    create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
    utils: {
      go: (delta) => window.history.go(delta),
      renderPath: (path) => "#".concat(path),
      parsePath: hashParser,
      beforeLeave
    }
  })(props);
}
var isDev = !!DEV;
var tryOnCleanup = isDev ? (fn) => getOwner() ? onCleanup(fn) : fn : onCleanup;
function makeEventListener(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
}
function createSingletonRoot(factory, detachedOwner = getOwner()) {
  let listeners = 0, value, disposeRoot;
  return () => {
    listeners++;
    onCleanup(() => {
      listeners--;
      queueMicrotask(() => {
        if (!listeners && disposeRoot) {
          disposeRoot();
          disposeRoot = value = void 0;
        }
      });
    });
    if (!disposeRoot) {
      createRoot((dispose2) => value = factory(disposeRoot = dispose2), detachedOwner);
    }
    return value;
  };
}
var useKeyDownEvent = /* @__PURE__ */ createSingletonRoot(
  () => {
    const [event, setEvent] = createSignal(null);
    makeEventListener(window, "keydown", (e) => {
      setEvent(e);
      setTimeout(() => setEvent(null));
    });
    return event;
  }
);
function isFunc(item) {
  return typeof item === "function";
}
function isArray(item) {
  return Array.isArray(item);
}
const keyMapEntries = {
  ArrowLeft: "Left",
  ArrowRight: "Right",
  ArrowUp: "Up",
  ArrowDown: "Down",
  Enter: "Enter",
  l: "Last",
  " ": "Space",
  Backspace: "Back",
  Escape: "Escape"
};
const [focusPath, setFocusPath] = createSignal([]);
const useFocusManager = (userKeyMap) => {
  const keypressEvent = useKeyDownEvent();
  if (userKeyMap) {
    for (const [key2, value] of Object.entries(userKeyMap)) {
      if (isArray(value)) {
        value.forEach((v) => {
          keyMapEntries[v] = key2;
        });
      } else {
        keyMapEntries[value] = key2;
      }
    }
  }
  createEffect(on(activeElement, (currentFocusedElm, prevFocusedElm, prevFocusPath2 = []) => {
    let current = currentFocusedElm;
    const fp = [];
    while (current) {
      if (!current.states.has("focus")) {
        current.states.add("focus");
        isFunc(current.onFocus) && current.onFocus.call(current, currentFocusedElm, prevFocusedElm);
      }
      fp.push(current);
      current = current.parent;
    }
    prevFocusPath2.forEach((elm) => {
      if (!fp.includes(elm)) {
        elm.states.remove("focus");
        isFunc(elm.onBlur) && elm.onBlur.call(elm, currentFocusedElm, prevFocusedElm);
      }
    });
    setFocusPath(fp);
    return fp;
  }, { defer: true }));
  createEffect(() => {
    const e = keypressEvent();
    if (e) {
      const mappedKeyEvent = keyMapEntries[e.key] || keyMapEntries[e.keyCode];
      untrack(() => {
        const fp = focusPath();
        let finalFocusElm = void 0;
        for (const elm of fp) {
          finalFocusElm = finalFocusElm || elm;
          if (mappedKeyEvent) {
            const onKeyHandler = elm["on".concat(mappedKeyEvent)];
            if (isFunc(onKeyHandler)) {
              if (onKeyHandler.call(elm, e, elm, finalFocusElm) === true) {
                break;
              }
            }
          } else {
            console.log("Unhandled key event: ".concat(e.key));
          }
          if (isFunc(elm.onKeyPress)) {
            if (elm.onKeyPress.call(elm, e, mappedKeyEvent, elm, finalFocusElm) === true) {
              break;
            }
          }
        }
        return false;
      });
    }
  });
  return focusPath;
};
function withPadding(el, padding) {
  const pad = padding();
  let top, left, right, bottom;
  if (Array.isArray(pad)) {
    if (pad.length === 2) {
      top = bottom = pad[0];
      left = right = pad[1];
    } else if (pad.length === 3) {
      top = pad[0];
      left = right = pad[1];
      bottom = pad[2];
    } else {
      [top, right, bottom, left] = pad;
    }
  } else {
    top = right = bottom = left = pad;
  }
  el.onBeforeLayout = (node, size2) => {
    if (size2) {
      el.width = el.children.reduce((acc, c) => {
        return acc + (c.width || 0);
      }, 0) + left + right;
      const firstChild = el.children[0];
      if (firstChild) {
        firstChild.x = left;
        firstChild.marginLeft = left;
      }
      let maxHeight = 0;
      el.children.forEach((c) => {
        c.y = top;
        c.marginTop = top;
        maxHeight = Math.max(maxHeight, c.height || 0);
      });
      el.height = maxHeight + top + bottom;
      return true;
    }
  };
}
function flattenStrings(series = []) {
  const flattenedSeries = [];
  let i;
  for (i = 0; i < series.length; i++) {
    const s = series[i];
    if (typeof s === "string" && !s.includes("PAUSE-")) {
      flattenedSeries.push(series[i]);
    } else {
      break;
    }
  }
  return [flattenedSeries.join(",\b ")].concat(series.slice(i));
}
function delay(pause) {
  return new Promise((resolve) => {
    setTimeout(resolve, pause);
  });
}
function speak(phrase, utterances, lang = "en-US") {
  const synth = window.speechSynthesis;
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = lang;
    utterance.onend = () => {
      resolve();
    };
    utterance.onerror = (e) => {
      reject(e);
    };
    utterances.push(utterance);
    synth.speak(utterance);
  });
}
function speakSeries(series, lang, root = true) {
  const synth = window.speechSynthesis;
  const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
  const nestedSeriesResults = [];
  const utterances = [];
  let active = true;
  const seriesChain = (async () => {
    try {
      while (active && remainingPhrases.length) {
        const phrase = await Promise.resolve(remainingPhrases.shift());
        if (!active) {
          break;
        } else if (typeof phrase === "string" && phrase.includes("PAUSE-")) {
          let pause = Number(phrase.split("PAUSE-")[1]) * 1e3;
          if (isNaN(pause)) {
            pause = 0;
          }
          await delay(pause);
        } else if (typeof phrase === "string" && phrase.length) {
          const totalRetries = 3;
          let retriesLeft = totalRetries;
          while (active && retriesLeft > 0) {
            try {
              await speak(phrase, utterances, lang);
              retriesLeft = 0;
            } catch (e) {
              if (e instanceof SpeechSynthesisErrorEvent) {
                if (e.error === "network") {
                  retriesLeft--;
                  console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                  await delay(500 * (totalRetries - retriesLeft));
                } else if (e.error === "canceled" || e.error === "interrupted") {
                  retriesLeft = 0;
                } else {
                  throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                }
              } else {
                throw e;
              }
            }
          }
        } else if (typeof phrase === "function") {
          const seriesResult = speakSeries(phrase(), lang, false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        } else if (Array.isArray(phrase)) {
          const seriesResult = speakSeries(phrase, lang, false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        }
      }
    } finally {
      active = false;
    }
  })();
  return {
    series: seriesChain,
    get active() {
      return active;
    },
    append: (toSpeak) => {
      remainingPhrases.push(toSpeak);
    },
    cancel: () => {
      if (!active) {
        return;
      }
      if (root) {
        synth.cancel();
      }
      nestedSeriesResults.forEach((nestedSeriesResults2) => {
        nestedSeriesResults2.cancel();
      });
      active = false;
    }
  };
}
let currentSeries;
function SpeechEngine(toSpeak, lang = "en-US") {
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak, lang);
  return currentSeries;
}
var debounce = (callback, wait) => {
  let timeoutId;
  const clear = () => clearTimeout(timeoutId);
  if (getOwner())
    onCleanup(clear);
  const debounced = (...args) => {
    if (timeoutId !== void 0)
      clear();
    timeoutId = setTimeout(() => callback(...args), wait);
  };
  return Object.assign(debounced, { clear });
};
let resetFocusPathTimer;
let prevFocusPath = [];
let currentlySpeaking;
let voiceOutDisabled = false;
const fiveMinutes = 3e5;
function debounceWithFlush(callback, time) {
  const trigger = debounce(callback, time);
  let scopedValue;
  const debounced = (newValue) => {
    scopedValue = newValue;
    trigger(newValue);
  };
  debounced.flush = () => {
    trigger.clear();
    callback(scopedValue);
  };
  debounced.clear = trigger.clear;
  return debounced;
}
function getElmName(elm) {
  return elm.id || elm.name;
}
function onFocusChangeCore(focusPath2 = []) {
  if (!Announcer.onFocusChange || !Announcer.enabled) {
    return;
  }
  const loaded = focusPath2.every((elm) => !elm.loading);
  const focusDiff = focusPath2.filter((elm) => !prevFocusPath.includes(elm));
  resetFocusPathTimer();
  if (!loaded && Announcer.onFocusChange) {
    Announcer.onFocusChange([]);
    return;
  }
  prevFocusPath = focusPath2.slice(0);
  const toAnnounceText = [];
  const toAnnounce = focusDiff.reduce((acc, elm) => {
    if (elm.announce) {
      acc.push([getElmName(elm), "Announce", elm.announce]);
      toAnnounceText.push(elm.announce);
    } else if (elm.title) {
      acc.push([getElmName(elm), "Title", elm.title]);
      toAnnounceText.push(elm.title);
    } else {
      acc.push([getElmName(elm), "No Announce", ""]);
    }
    return acc;
  }, []);
  focusDiff.reverse().reduce((acc, elm) => {
    if (elm.announceContext) {
      acc.push([getElmName(elm), "Context", elm.announceContext]);
      toAnnounceText.push(elm.announceContext);
    } else {
      acc.push([getElmName(elm), "No Context", ""]);
    }
    return acc;
  }, toAnnounce);
  if (Announcer.debug) {
    console.table(toAnnounce);
  }
  if (toAnnounceText.length) {
    return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
  }
}
function textToSpeech(toSpeak) {
  if (voiceOutDisabled) {
    return;
  }
  return currentlySpeaking = SpeechEngine(toSpeak);
}
const Announcer = {
  debug: false,
  enabled: true,
  cancel: function() {
    currentlySpeaking && currentlySpeaking.cancel();
  },
  clearPrevFocus: function(depth2 = 0) {
    prevFocusPath = prevFocusPath.slice(0, depth2);
    resetFocusPathTimer();
  },
  speak: function(text2, { append = false, notification = false } = {}) {
    if (Announcer.onFocusChange && Announcer.enabled) {
      Announcer.onFocusChange.flush();
      if (append && currentlySpeaking && currentlySpeaking.active) {
        currentlySpeaking.append(text2);
      } else {
        Announcer.cancel();
        textToSpeech(text2);
      }
      if (notification) {
        voiceOutDisabled = true;
        currentlySpeaking == null ? void 0 : currentlySpeaking.series.finally(() => {
          voiceOutDisabled = false;
          Announcer.refresh();
        }).catch(console.error);
      }
    }
    return currentlySpeaking;
  },
  refresh: function(depth2 = 0) {
    Announcer.clearPrevFocus(depth2);
    Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
  },
  setupTimers: function({ focusDebounce = 400, focusChangeTimeout = fiveMinutes } = {}) {
    Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce);
    resetFocusPathTimer = debounceWithFlush(() => {
      prevFocusPath = [];
    }, focusChangeTimeout);
  }
};
const useAnnouncer = () => {
  Announcer.setupTimers();
  createEffect(on(focusPath, Announcer.onFocusChange, { defer: true }));
  return Announcer;
};
function createSpriteMap(src, subTextures) {
  const spriteMapTexture = renderer.createTexture("ImageTexture", {
    src
  });
  return subTextures.reduce((acc, t) => {
    const { x, y, width, height } = t;
    acc[t.name] = renderer.createTexture("SubTexture", {
      texture: spriteMapTexture,
      x,
      y,
      width,
      height
    });
    return acc;
  }, {});
}
const [globalBackground, setGlobalBackground] = createSignal("");
const theme = {
  name: "Base Lightning TV",
  alpha: {
    primary: 1,
    secondary: 0.7,
    tertiary: 0.1,
    inactive: 0.5,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.3,
    alpha3: 0.5,
    alpha4: 0.7,
    alpha5: 0.9
  },
  animation: {
    duration: {
      none: 0,
      xfast: 0.1,
      fast: 0.25,
      normal: 0.5,
      slow: 0.75,
      xslow: 0.9
    },
    delay: {
      none: 0,
      xfast: 0.01,
      fast: 0.025,
      normal: 0.05,
      slow: 0.075,
      xslow: 0.09
    },
    expressive: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    expressiveEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    expressiveExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standard: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standardEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standardExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utility: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utilityEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utilityExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    }
  },
  asset: {
    arrowLeft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",
    arrowRight: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",
    backspaceOutline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",
    check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="
  },
  color: {
    palette: {
      "blue-20": "0xbecffeff",
      "blue-40": "0x93a9fdff",
      "blue-90": "0x000033ff",
      "grey-05": "0xf8f7faff",
      "grey-40": "0x929096ff",
      "grey-70": "0x48474bff",
      "grey-90": "0x181819ff"
    },
    white: "0xffffffff",
    black: "0x000000ff",
    grey: "0x929096ff",
    red: "0xe74c3cff",
    orange: "0xdc7633ff",
    yellow: "0xf7dc6fff",
    green: "0x2ecc71ff",
    blue: "0x93a9fdff",
    purple: "0x663399ff",
    material: "0x181819ff",
    materialBrand: "0x000033ff",
    overlay: "0x181819b3",
    textNeutral: "0xf8f7faff",
    textNeutralSecondary: "0xf8f7fab3",
    textNeutralTertiary: "0xf8f7fa1a",
    textNeutralDisabled: "0xf8f7fa80",
    textInverse: "0x181819ff",
    textInverseSecondary: "0x181819b3",
    textInverseTertiary: "0x1818191a",
    textInverseDisabled: "0x18181980",
    textBrand: "0x93a9fdff",
    textBrandSecondary: "0x93a9fdb3",
    textBrandTertiary: "0x93a9fd1a",
    textBrandDisabled: "0x93a9fd80",
    textPositive: "0x2ecc71ff",
    textNegative: "0xe74c3cff",
    textInfo: "0x93a9fdff",
    textCaution: "0xdc7633ff",
    fillTransparent: "0xffffff0",
    fillNeutral: "0xf8f7faff",
    fillNeutralSecondary: "0xf8f7fab3",
    fillNeutralTertiary: "0xf8f7fa1a",
    fillNeutralDisabled: "0xf8f7fa80",
    fillInverse: "0x181819ff",
    fillInverseSecondary: "0x181819b3",
    fillInverseTertiary: "0x1818191a",
    fillInverseDisabled: "0x18181980",
    fillBrand: "0x93a9fdff",
    fillBrandSecondary: "0x93a9fdb3",
    fillBrandTertiary: "0x93a9fd1a",
    fillBrandDisabled: "0x93a9fd80",
    fillPositive: "0x2ecc71ff",
    fillNegative: "0xe74c3cff",
    fillInfo: "0x93a9fdff",
    fillCaution: "0xdc7633ff",
    strokeNeutral: "0xf8f7faff",
    strokeNeutralSecondary: "0xf8f7fab3",
    strokeNeutralTertiary: "0xf8f7fa1a",
    strokeNeutralDisabled: "0xf8f7fa80",
    strokeInverse: "0x181819ff",
    strokeInverseSecondary: "0x181819b3",
    strokeInverseTertiary: "0x1818191a",
    strokeInverseDisabled: "0x18181980",
    strokeBrand: "0x93a9fdff",
    strokeBrandSecondary: "0x93a9fdb3",
    strokeBrandTertiary: "0x93a9fd1a",
    strokeBrandDisabled: "0x93a9fd80",
    strokePositive: "0x2ecc71ff",
    strokeNegative: "0xe74c3cff",
    strokeInfo: "0x93a9fdff",
    strokeCaution: "0xdc7633ff",
    interactiveNeutral: "0xffffff1a",
    interactiveNeutralFocus: "0xffffffff",
    interactiveNeutralFocusSoft: "0xffffff1a",
    interactiveInverse: "0x48474b1a",
    interactiveInverseFocus: "0x48474bff",
    interactiveInverseFocusSoft: "0x48474b1a",
    interactiveBrand: "0xbecffe1a",
    interactiveBrandFocus: "0xbecffeff",
    interactiveBrandFocusSoft: "0xbecffe1a",
    shadowNeutral: "0x000000b3",
    shadowNeutralFocus: "0x000000b3",
    shadowNeutralFocusSoft: "0x000000b3",
    shadowNeutralText: "0x000000ff",
    shadowInverse: "0x000000b3",
    shadowInverseFocus: "0x000000b3",
    shadowInverseFocusSoft: "0x000000b3",
    shadowInverseText: "0x000000ff",
    shadowBrand: "0x000000b3",
    shadowBrandFocus: "0x000000b3",
    shadowBrandFocusSoft: "0x000000b3",
    shadowBrandText: "0x000000ff"
  },
  font: [],
  layout: {
    columnCount: 10,
    focusScale: 1.2,
    gutterX: 20,
    gutterY: 20,
    marginX: 150,
    marginY: 150,
    safe: 50,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: "Arial",
      fontSize: 75,
      lineHeight: 85,
      fontWeight: 500,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    display2: {
      fontFamily: "Arial",
      fontSize: 50,
      lineHeight: 60,
      fontWeight: 500,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline1: {
      fontFamily: "Arial",
      fontSize: 35,
      fontWeight: 500,
      lineHeight: 48,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline2: {
      fontFamily: "Arial",
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 40,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline3: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 36,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body1: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 300,
      lineHeight: 40,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body2: {
      fontFamily: "Arial",
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body3: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    button1: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    button2: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    callout1: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    caption1: {
      fontFamily: "Arial",
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    tag1: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    footnote1: {
      fontFamily: "Arial",
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 30,
      verticalAlign: "middle",
      textBaseline: "bottom"
    }
  },
  componentConfig: {
    Keyboard: {
      base: {
        keyProps: {
          delete: {
            title: null,
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
          }
        }
      }
    }
  }
};
function Background() {
  let bg1, bg2, heroMask;
  let active = 0;
  const alpha = 1;
  const animationSettings = {
    duration: 750,
    easing: "ease-in-out"
  };
  const bgStyles = {
    alpha,
    color: 4294967295
  };
  function changeBackgrounds(img) {
    if (img.startsWith("#")) {
      bg1.color = hexColor(img);
      bg1.src = "";
      bg1.alpha = 1;
      active = 1;
      bg2.alpha = 0;
      heroMask.alpha = 0;
      return;
    } else {
      bg1.color = 4294967295;
      heroMask.alpha = 1;
    }
    if (active === 0) {
      bg1.src = img;
      active = 1;
      return;
    }
    if (active === 1) {
      bg2.src = img;
      active = 2;
      bg2.alpha = 0;
      bg2.animate({
        alpha
      }, animationSettings).start();
      bg1.animate({
        alpha: 0
      }, animationSettings).start();
      return;
    }
    if (active === 2) {
      bg1.src = img;
      active = 1;
      bg1.alpha = 0;
      bg1.animate({
        alpha
      }, animationSettings).start();
      bg2.animate({
        alpha: 0
      }, animationSettings).start();
    }
  }
  createEffect(on(globalBackground, (img) => {
    changeBackgrounds(img);
  }, {
    defer: true
  }));
  return createComponent(View, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [createComponent(View, {
        ref(r$) {
          var _ref$ = bg1;
          typeof _ref$ === "function" ? _ref$(r$) : bg1 = r$;
        },
        style: bgStyles
      }), createComponent(View, {
        ref(r$) {
          var _ref$2 = bg2;
          typeof _ref$2 === "function" ? _ref$2(r$) : bg2 = r$;
        },
        style: bgStyles,
        alpha: 0
      }), createComponent(View, {
        ref(r$) {
          var _ref$3 = heroMask;
          typeof _ref$3 === "function" ? _ref$3(r$) : heroMask = r$;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return hexColor(theme.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
function objectFromEntries(entries) {
  if (!entries || !entries[Symbol.iterator]) {
    throw new Error("objectFromEntries requires a single iterable argument");
  }
  const obj = {};
  for (const [key2, value] of entries) {
    obj[key2] = value;
  }
  return obj;
}
const defaultModeKeys = ["focus", "disabled"];
const defaultToneKeys = ["brand", "inverse", "neutral"];
function makeComponentStyles({ themeKeys, base, modes, tones, themeStyles: themeStyles2, modeKeys = defaultModeKeys, toneKeys = defaultToneKeys }, debug = false) {
  const makeToneStyles = (tones2, themeComponentStyles, modeStyles) => {
    const toneStyles = toneKeys.map((tone) => {
      var _a3, _b2;
      const styles2 = {};
      const styleList = new Set(
        [].concat.apply([], [(_a3 = tones2 == null ? void 0 : tones2[tone]) != null ? _a3 : {}, (_b2 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) != null ? _b2 : {}].map(Object.keys))
      );
      styleList.forEach((styleKey) => {
        var _a4;
        var _a22, _b22;
        if (!modeKeys.includes(styleKey)) {
          styles2[styleKey] = (_a4 = (_a22 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _a22[styleKey]) != null ? _a4 : (_b22 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _b22[styleKey];
        }
      });
      modeKeys.forEach((mode) => {
        var _a22, _b22;
        styles2[mode] = {
          ...modeStyles[mode],
          // fallbacks from base.mode
          ...(_a22 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _a22[mode],
          // component configured tone.mode
          ...(_b22 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _b22[mode]
          // theme configure tone.mode
        };
      });
      return [tone, styles2];
    });
    return objectFromEntries(toneStyles);
  };
  const makeModeStyles = (modes2, themeComponentStyles) => {
    const modeStyles = modeKeys.map((mode) => {
      return [mode, { ...modes2 == null ? void 0 : modes2[mode], ...themeComponentStyles == null ? void 0 : themeComponentStyles[mode] }];
    });
    const modeObject = objectFromEntries(modeStyles);
    return modeObject;
  };
  const makeBaseStyles = (base2, themeComponentStyles) => {
    const baseStyles = {
      ...base2,
      ...themeComponentStyles.base
    };
    return baseStyles;
  };
  const mapThemeKeysToSolid = (stylesToMap) => objectFromEntries(
    Object.entries(themeKeys).filter(([_, themeKey]) => stylesToMap[themeKey]).map(([solidKey, themeKey]) => [solidKey, stylesToMap[themeKey]])
  );
  const convertComponentConfig = (themeStyles3) => {
    const convertedThemeStyles = objectFromEntries(
      // iterate through each variant
      Object.entries(themeStyles3).map(([variantName, styles2]) => {
        const convertedStyles = mapThemeKeysToSolid(styles2);
        Object.entries(styles2).filter(([styleName, _]) => modeKeys.includes(styleName)).forEach(([modeName, modeStyles]) => {
          convertedStyles[modeName] = mapThemeKeysToSolid(modeStyles);
        });
        return [variantName, convertedStyles];
      })
    );
    return convertedThemeStyles;
  };
  const generateSolidStylesFromLookupObject = (base2, modes2, tones2) => {
    const themeComponentStyles = convertComponentConfig(themeStyles2);
    debug && console.log(themeComponentStyles);
    const baseStyles = makeBaseStyles(base2, themeComponentStyles);
    debug && console.log(baseStyles);
    const modeStyles = makeModeStyles(modes2, themeComponentStyles);
    debug && console.log(modeStyles);
    const toneStyles = makeToneStyles(tones2, themeComponentStyles, modeStyles);
    debug && console.log(toneStyles);
    return {
      base: {
        ...baseStyles,
        ...modeStyles
      },
      tones: toneStyles
    };
  };
  return generateSolidStylesFromLookupObject(base, modes, tones);
}
function withScrolling(adjustment = 0) {
  return (componentRef, selectedElement, selected = 0, lastSelected) => {
    var _a3, _b2, _c2, _d2;
    if (componentRef.children.length === 0) {
      return;
    }
    const dimension = componentRef.flexDirection === "row" ? "width" : "height";
    const axis = componentRef.flexDirection === "row" ? "x" : "y";
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || "auto";
    const [lastItem, containerSize] = updateLastIndex(componentRef);
    let rootPosition = (_a3 = componentRef[axis]) != null ? _a3 : 0;
    const selectedPosition = (_b2 = selectedElement == null ? void 0 : selectedElement[axis]) != null ? _b2 : 0;
    const selectedSize = (_c2 = selectedElement == null ? void 0 : selectedElement[dimension]) != null ? _c2 : 0;
    const direct = lastSelected === void 0 ? "none" : selected > lastSelected ? "positive" : "negative";
    let next = rootPosition;
    if (scroll === "auto") {
      if (componentRef.scrollIndex != void 0 && componentRef.scrollIndex >= 0) {
        if (componentRef.selected >= componentRef.scrollIndex) {
          if (direct === "positive") {
            next = rootPosition - selectedSize - gap;
          } else {
            next = rootPosition + selectedSize + gap;
          }
        }
      } else if (Math.abs(rootPosition) + containerSize < lastItem.position + lastItem.size || selectedPosition < Math.abs(rootPosition)) {
        next = -selectedPosition + adjustment;
      }
    } else if (scroll === "always" || scroll === "edge" && direct === "negative" && Math.abs(rootPosition) > selectedPosition) {
      next = -selectedPosition + adjustment;
    } else if (scroll === "edge" && direct === "positive" && Math.abs(rootPosition) + containerSize < selectedPosition + selectedSize) {
      next = rootPosition - selectedSize - gap;
    } else if (scroll === "edge" && direct === "none") {
      let currentChildIndex = 0;
      let currentChild, currentChildSize;
      while (currentChildIndex < componentRef.children.length && Math.abs(rootPosition) + containerSize < selectedPosition + selectedSize) {
        currentChild = componentRef.children[currentChildIndex++];
        currentChildSize = (_d2 = currentChild[dimension]) != null ? _d2 : 0;
        rootPosition -= currentChildSize + gap;
      }
      next = rootPosition;
    }
    if (axis === "x" && componentRef.x !== next) {
      componentRef.x = next;
    } else if (axis === "y" && componentRef.y !== next) {
      componentRef.y = next;
    }
  };
}
function updateLastIndex(items) {
  let lastItem, containerSize;
  if (items.flexDirection === "row") {
    lastItem = {
      position: items.children[items.children.length - 1].x,
      size: items.children[items.children.length - 1].width
    };
    containerSize = items.width;
  } else {
    lastItem = {
      position: items.children[items.children.length - 1].y,
      size: items.children[items.children.length - 1].height
    };
    containerSize = items.height;
  }
  return [lastItem, containerSize];
}
const chainFunctions = (...args) => {
  const onlyFunctions = args.filter((func) => typeof func === "function");
  if (onlyFunctions.length === 0) {
    return void 0;
  }
  if (onlyFunctions.length === 1) {
    return onlyFunctions[0];
  }
  return function(...innerArgs) {
    let result;
    for (const func of onlyFunctions) {
      result = func.apply(this, innerArgs);
      if (result === true) {
        return result;
      }
    }
    return result;
  };
};
function onGridFocus() {
  if (!this || this.selected === void 0 || this.children.length === 0)
    return false;
  let child = this.children[this.selected];
  while (child == null ? void 0 : child.skipFocus) {
    this.selected++;
    child = this.children[this.selected];
  }
  if (!(child instanceof ElementNode))
    return false;
  child.setFocus();
  return true;
}
function handleNavigation(direction) {
  return function() {
    var _a22, _b2, _c2;
    const numChildren = this.children.length;
    const wrap = this.wrap;
    const lastSelected = this.selected || 0;
    if (numChildren === 0) {
      return false;
    }
    if (direction === "right" || direction === "down") {
      do {
        this.selected = (this.selected || 0) % numChildren + 1;
        if (this.selected >= numChildren) {
          if (!wrap) {
            this.selected = void 0;
            break;
          }
          this.selected = 0;
        }
      } while ((_a22 = this.children[this.selected]) == null ? void 0 : _a22.skipFocus);
    } else if (direction === "left" || direction === "up") {
      do {
        this.selected = (this.selected || 0) % numChildren - 1;
        if (this.selected < 0) {
          if (!wrap) {
            this.selected = void 0;
            break;
          }
          this.selected = numChildren - 1;
        }
      } while ((_b2 = this.children[this.selected]) == null ? void 0 : _b2.skipFocus);
    }
    if (this.selected === void 0) {
      this.selected = lastSelected;
      if ((_c2 = this.children[this.selected]) == null ? void 0 : _c2.states.has("focus")) {
        return false;
      }
    }
    const active = this.children[this.selected];
    this.onSelectedChanged && this.onSelectedChanged.call(this, this, active, this.selected, lastSelected);
    if (this.plinko && lastSelected !== void 0) {
      const lastSelectedChild = this.children[lastSelected];
      const num = lastSelectedChild.selected || 0;
      active.selected = num < active.children.length ? num : active.children.length - 1;
    }
    active.setFocus();
    return true;
  };
}
function getWidthByUpCount$1(theme2, upCount = 1) {
  const screenW = theme2.layout.screenW;
  const columnCount = theme2.layout.columnCount;
  const marginX = theme2.layout.marginX;
  const gutterX = theme2.layout.gutterX;
  if (upCount < 1 || upCount > columnCount) {
    console.error("Column expects a number between 1 & ".concat(columnCount, ". Received ").concat(upCount));
    return;
  }
  const columnWidth = screenW - marginX * 2;
  const columnGapTotal = (upCount - 1) * gutterX;
  const totalColumnsWidth = columnWidth - columnGapTotal;
  return totalColumnsWidth / upCount;
}
const { Artwork: { defaultTone: defaultTone$f, ...themeStyles$e } = { styles: {} } } = (_a = theme) == null ? void 0 : _a.componentConfig;
const container$f = {
  themeKeys: {
    fillColor: "fillColor",
    scale: "imageScale",
    pivotX: "imageScalePivotX",
    pivotY: "imageScalePivotY"
  },
  base: {
    fallbackSrc: void 0,
    fillColor: theme.color.overlay,
    gradientColor: theme.color.material,
    pivotX: 0.5,
    pivotY: 0.5,
    scale: void 0
  },
  themeStyles: themeStyles$e
};
makeComponentStyles(container$f);
const { Badge: { defaultTone: defaultTone$e, ...themeStyles$d } = { styles: {} } } = (_b = theme) == null ? void 0 : _b.componentConfig;
const container$e = {
  themeKeys: {
    color: "backgroundColor"
  },
  base: {
    color: theme.color.fillInverseSecondary,
    borderRadius: theme.radius.sm,
    // borderRadius must be applied _before_ border to prevent the node from breaking
    border: {
      color: theme.color.strokeInverse,
      width: theme.stroke.sm
    },
    display: "flex",
    justifyContent: "spaceEvenly",
    padding: [
      theme.spacer.md - theme.stroke.sm,
      theme.spacer.xs + theme.stroke.sm,
      theme.spacer.md + theme.stroke.sm,
      theme.spacer.md + theme.stroke.sm
    ]
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutralSecondary,
      borderRadius: theme.radius.sm,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    },
    brand: {
      color: theme.color.fillBrand,
      borderRadius: theme.radius.sm,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    }
  },
  themeStyles: themeStyles$d
};
const text$7 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.tag1,
    color: theme.color.textNeutral
  },
  tones: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$d
};
const icon$2 = {
  themeKeys: {
    color: "iconColor"
  },
  base: {
    color: theme.color.textNeutral
  },
  tones: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$d
};
makeComponentStyles(container$e);
makeComponentStyles(icon$2);
makeComponentStyles(text$7);
const { Button: { defaultTone: defaultTone$d, ...themeStyles$c } = { styles: {} } } = (_c = theme) == null ? void 0 : _c.componentConfig;
const { Surface: { surfaceDefaultTone, ...surfaceThemeStyles$1 } = { styles: {} } } = (_d = theme) == null ? void 0 : _d.componentConfig;
const container$d = {
  themeKeys: {
    textAlign: "textAlign",
    borderRadius: "radius",
    color: "backgroundColor",
    justifyContent: "justifyContent"
  },
  base: {
    height: theme.typography.button1.lineHeight + theme.spacer.xl * 2,
    display: "flex",
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm,
    contentColor: theme.color.fillNeutral
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand,
      focus: {
        color: theme.color.fillNeutral
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles$1,
    ...themeStyles$c
  }
};
const content = {
  themeKeys: {
    color: "contentColor"
  },
  base: {
    color: theme.color.textNeutral
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles$1,
    ...themeStyles$c
  }
};
const text$6 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    textAlign: "left",
    color: theme.color.textNeutral,
    ...theme.typography.button1
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles$1,
    ...themeStyles$c
  }
};
const Container$c = makeComponentStyles(container$d);
const Content = makeComponentStyles(content);
const Text$5 = makeComponentStyles(text$6);
const styles$c = {
  tone: defaultTone$d || surfaceDefaultTone || "neutral",
  Container: Container$c,
  Content,
  Text: Text$5
};
const Button$1 = (props) => {
  return createComponent(View, mergeProps(props, {
    get style() {
      var _a3;
      var _a22;
      return [
        ...[props.style].flat(),
        //
        (_a22 = styles$c.Container.tones) == null ? void 0 : _a22[(_a3 = props.tone) != null ? _a3 : styles$c.tone],
        styles$c.Container.base
      ];
    },
    forwardStates: true,
    get children() {
      return createComponent(Text, {
        get style() {
          var _a3;
          var _a22;
          return [
            ...[(_a22 = props.style) == null ? void 0 : _a22.Text].flat(),
            //
            styles$c.Text.tones[(_a3 = props.tone) != null ? _a3 : styles$c.tone],
            styles$c.Text.base
          ];
        },
        get children() {
          return props.children;
        }
      });
    }
  }));
};
const { Checkbox: { defaultTone: defaultTone$c, ...themeStyles$b } = { styles: {} } } = (_e = theme) == null ? void 0 : _e.componentConfig;
const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl;
const container$c = {
  themeKeys: {
    color: "color",
    borderRadius: "borderRadius",
    border: "border",
    justifyContent: "justifyContent"
  },
  base: {
    width: size,
    height: size,
    display: "flex",
    justifyContent: "center",
    color: theme.color.fillNeutral,
    alignItems: "center",
    borderRadius: size / 4,
    border: {
      color: theme.color.strokeInverse,
      width: strokeWidth
    }
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  tones: {
    brand: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: strokeWidth
        },
        color: theme.color.fillBrand
      }
    },
    neutral: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillInverseSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: strokeWidth
        },
        color: theme.color.fillNeutral
      }
    },
    inverse: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeInverseSecondary,
          width: strokeWidth
        },
        color: theme.color.fillInverse
      }
    }
  },
  modeKeys: ["focus", "disabled", "checked"],
  themeStyles: themeStyles$b
};
const icon$1 = {
  themeKeys: {
    color: "color"
  },
  base: {
    width: theme.spacer.lg,
    height: theme.spacer.lg,
    src: theme.asset.check
  },
  tones: {
    neutral: {
      color: theme.color.fillInverse
    },
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillInverse
    }
  },
  themeStyles: themeStyles$b
};
makeComponentStyles(container$c);
makeComponentStyles(icon$1);
const { Icon: { defaultTone: defaultTone$b, ...themeStyles$a } = { styles: {} } } = (_f = theme) == null ? void 0 : _f.componentConfig;
const container$b = {
  themeKeys: {
    color: "color"
  },
  base: {
    width: 100,
    height: 100,
    color: theme.color.fillInverse
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  },
  themeStyles: themeStyles$a
};
makeComponentStyles(container$b);
const { Column: { defaultTone: defaultTone$a, ...themeStyles$9 } = { styles: {} } } = (_g = theme) == null ? void 0 : _g.componentConfig;
const container$a = {
  themeKeys: {
    gap: "itemSpacing",
    scrollIndex: "scrollIndex",
    itemTransition: "itemTransition"
  },
  base: {
    display: "flex",
    flexBoundary: "fixed",
    flexDirection: "column",
    gap: theme.layout.gutterY,
    itemTransition: {
      ...theme.animation.standardEntrance,
      duration: theme.animation.duration.fast
    }
  },
  themeStyles: themeStyles$9
};
const Container$9 = makeComponentStyles(container$a);
const styles$9 = {
  tone: defaultTone$a || "neutral",
  Container: Container$9
};
const Column = (props) => {
  const onUp = handleNavigation("up");
  const onDown = handleNavigation("down");
  return createComponent(View, mergeProps(props, {
    get onUp() {
      return chainFunctions(props.onUp, onUp);
    },
    get onDown() {
      return chainFunctions(props.onDown, onDown);
    },
    get selected() {
      return props.selected || 0;
    },
    forwardFocus: onGridFocus,
    get onCreate() {
      return chainFunctions((elm) => {
        var _a3, _b2;
        return withScrolling(props.y).call(elm, elm, elm.children[(_a3 = props.selected) != null ? _a3 : 0], (_b2 = props.selected) != null ? _b2 : 0, void 0);
      }, props.onCreate);
    },
    get onSelectedChanged() {
      return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? withScrolling(props.y) : void 0);
    },
    get style() {
      var _a3;
      return [...[props.style].flat(), styles$9.Container.tones[(_a3 = props.tone) != null ? _a3 : styles$9.tone], styles$9.Container.base];
    }
  }));
};
const { Label: { defaultTone: defaultTone$9, ...themeStyles$8 } = { styles: {} } } = (_h = theme) == null ? void 0 : _h.componentConfig;
const container$9 = {
  themeKeys: {
    color: "backgroundColor",
    borderRadius: "radius"
  },
  base: {
    display: "flex",
    justifyContent: "center",
    color: theme.color.textNeutral,
    padding: [theme.spacer.md, theme.spacer.lg],
    // TODO themed padding values
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    height: theme.typography.caption1.lineHeight + theme.spacer.md,
    neutral: {
      backgroundColor: theme.color.fillNeutral
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.orange
      }
    }
  },
  themeStyles: themeStyles$8
};
const text$5 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.caption1,
    color: theme.color.textInverse
  },
  tones: {
    inverse: {
      color: theme.color.textNeutral
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$8
};
makeComponentStyles(container$9);
makeComponentStyles(text$5);
const { Rating: { styles: themeStyles$7, defaultTone: defaultTone$8 } = { styles: {}, defaultTone: "neutral" } } = (_i = theme) == null ? void 0 : _i.componentConfig;
const container$8 = {
  themeKeys: {
    justifyContent: "justifyContent",
    itemSpacing: "itemSpacing"
  },
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    itemSpacing: theme.spacer.sm
  },
  toneModes: {},
  themeStyles: themeStyles$7
};
const text$4 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.body2
  },
  toneModes: {},
  themeStyles: themeStyles$7
};
const icon = {
  themeKeys: {
    color: "color"
  },
  base: {
    height: theme.typography.body2.lineHeight,
    width: theme.typography.body2.lineHeight,
    color: theme.color.fillNeutral,
    marginRight: theme.spacer.sm
  },
  toneModes: {},
  themeStyles: themeStyles$7
};
makeComponentStyles(container$8);
makeComponentStyles(icon);
makeComponentStyles(text$4);
const { Details: { defaultTone: defaultTone$7, ...themeStyles$6 } = { styles: {} } } = (_j = theme) == null ? void 0 : _j.componentConfig;
const container$7 = {
  themeKeys: {
    alignItems: "alignItems",
    contentSpacing: "contentSpacing",
    badgeContentSpacing: "badgeContentSpacing",
    ratingContentSpacing: "ratingContentSpacing"
  },
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    contentSpacing: theme.spacer.lg,
    badgeContentSpacing: theme.spacer.sm,
    ratingContentSpacing: theme.spacer.lg
  },
  themeStyles: themeStyles$6
};
const text$3 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.body2,
    marginRight: theme.spacer.lg,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$6
};
makeComponentStyles(container$7);
makeComponentStyles(text$3);
const { Metadata: { defaultTone: defaultTone$6, ...themeStyles$5 } = { styles: {} } } = (_k = theme) == null ? void 0 : _k.componentConfig;
const container$6 = {
  themeKeys: {
    justifyContent: "justifyContent",
    alpha: "alpha"
  },
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles: themeStyles$5
};
const titleText = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    maxLines: 1,
    contain: "width",
    ...theme.typography.headline3,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$5
};
const descriptionText = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    contain: "width",
    maxLines: 2,
    ...theme.typography.body2,
    color: theme.color.textNeutralSecondary
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverseSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutralSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$5
};
makeComponentStyles(container$6);
makeComponentStyles(descriptionText);
makeComponentStyles(titleText);
const { ProgressBar: { defaultTone: defaultTone$5, ...themeStyles$4 } = { styles: {} } } = (_l = theme) == null ? void 0 : _l.componentConfig;
const container$5 = {
  themeKeys: {
    color: "barColor",
    borderRadius: "borderRadius"
  },
  base: {
    height: theme.spacer.md,
    color: theme.color.fillNeutralTertiary,
    borderRadius: theme.radius.xs
  },
  tones: {
    inverse: {
      color: theme.color.fillInverseTertiary
    }
  },
  themeStyles: themeStyles$4
};
const progress = {
  themeKeys: {
    color: "progressColor",
    borderRadius: "borderRadius"
  },
  base: {
    borderRadius: theme.radius.xs,
    color: theme.color.fillNeutral
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  },
  themeStyles: themeStyles$4
};
makeComponentStyles(container$5);
makeComponentStyles(progress);
const { Row: { defaultTone: defaultTone$4, ...themeStyles$3 } = { styles: {} } } = (_m = theme) == null ? void 0 : _m.componentConfig;
const container$4 = {
  themeKeys: {
    gap: "itemSpacing",
    scrollIndex: "scrollIndex",
    itemTransition: "itemTransition"
  },
  base: {
    display: "flex",
    flexBoundary: "fixed",
    flexDirection: "row",
    gap: theme.layout.gutterX,
    itemTransition: {
      ...theme.animation.standardEntrance,
      duration: theme.animation.duration.fast
    }
  },
  themeStyles: themeStyles$3
};
const Container$3 = makeComponentStyles(container$4);
const styles$3 = {
  tone: defaultTone$4,
  Container: Container$3
};
const Row = (props) => {
  const onLeft = handleNavigation("left");
  const onRight = handleNavigation("right");
  return createComponent(View, mergeProps(props, {
    get selected() {
      return props.selected || 0;
    },
    get onLeft() {
      return chainFunctions(props.onLeft, onLeft);
    },
    get onRight() {
      return chainFunctions(props.onRight, onRight);
    },
    forwardFocus: onGridFocus,
    get onCreate() {
      return chainFunctions((elm) => {
        var _a3, _b2;
        return withScrolling(props.x).call(elm, elm, elm.children[(_a3 = props.selected) != null ? _a3 : 0], (_b2 = props.selected) != null ? _b2 : 0, void 0);
      }, props.onCreate);
    },
    get onSelectedChanged() {
      return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? withScrolling(props.x) : void 0);
    },
    get tone() {
      var _a3;
      return (_a3 = props.tone) != null ? _a3 : styles$3.tone;
    },
    get style() {
      return [...[props.style].flat(), styles$3.Container.tones[props.tone || styles$3.tone], styles$3.Container.base];
    },
    get states() {
      var _a3;
      return (_a3 = props.tone) != null ? _a3 : styles$3.tone;
    }
  }));
};
const { Keyboard: { defaultTone: defaultTone$3, ...themeStyles$2 } = { styles: {} } } = (_n = theme) == null ? void 0 : _n.componentConfig;
const container$3 = {
  themeKeys: {
    keySpacing: "keySpacing",
    screenW: "screenW",
    marginX: "marginX"
  },
  base: {
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    height: 100
  },
  // @ts-expect-error see TODO
  themeStyles: themeStyles$2
};
const key = {
  themeKeys: {
    keySpacing: "keySpacing",
    textAlign: "textAlign",
    borderRadius: "borderRadius",
    color: "backgroundColor",
    justifyContent: "justifyContent",
    baseWidth: "baseWidth",
    sizes: "sizes",
    contentColor: "contentColor"
    // what is this used for
  },
  base: {
    keySpacing: theme.spacer.md,
    height: theme.spacer.md * 9,
    paddingX: theme.spacer.md,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    contentColor: theme.color.fillNeutral,
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocus,
        contentColor: theme.color.fillNeutral
      }
    },
    brand: {
      focus: {
        contentColor: theme.color.fillNeutral
      }
    }
  },
  // @ts-expect-error see TODO
  themeStyles: themeStyles$2
};
const text$2 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    textAlign: "left",
    color: theme.color.textNeutral,
    ...theme.typography.headline2
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      focus: {
        color: theme.color.textNeutral
      }
    }
  },
  // @ts-expect-error see TODO
  themeStyles: themeStyles$2
};
makeComponentStyles(container$3);
makeComponentStyles(key);
makeComponentStyles(text$2);
const { Key: { defaultTone: defaultTone$2, ...themeStyles$1 } = { styles: {} } } = (_o = theme) == null ? void 0 : _o.componentConfig;
const container$2 = {
  themeKeys: {
    keySpacing: "keySpacing",
    textAlign: "textAlign",
    borderRadius: "borderRadius",
    color: "backgroundColor",
    justifyContent: "justifyContent",
    baseWidth: "baseWidth",
    sizes: "sizes",
    contentColor: "contentColor"
  },
  base: {
    keySpacing: theme.spacer.md,
    height: theme.spacer.md * 9,
    paddingX: theme.spacer.md,
    contentColor: theme.color.fillNeutral,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    padding: [theme.spacer.md],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocus,
        contentColor: theme.color.fillNeutral
      }
    },
    brand: {
      focus: {
        contentColor: theme.color.fillNeutral
      }
    }
  },
  themeStyles: themeStyles$1
};
const text$1 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    textAlign: "left",
    color: theme.color.textNeutral,
    ...theme.typography.headline2
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      focus: {
        color: theme.color.textNeutral
      }
    }
  },
  themeStyles: themeStyles$1
};
makeComponentStyles(container$2);
makeComponentStyles(text$1);
const { Input: { defaultTone: defaultTone$1, ...themeStyles } = { styles: {} } } = (_p = theme) == null ? void 0 : _p.componentConfig;
const container$1 = {
  themeKeys: {
    justifyContent: "justifyContent"
  },
  base: {
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    width: 100,
    height: 100,
    actualTitle: ""
  },
  themeStyles
};
const input = {
  themeKeys: {
    borderRadius: "borderRadius",
    color: "backgroundColor"
  },
  base: {
    width: getWidthByUpCount$1(theme, 4),
    height: 100,
    display: "flex",
    flexDirection: "column",
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    contentColor: theme.color.fillInverse,
    borderRadius: theme.radius.sm,
    marginX: theme.spacer.xxxl
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand,
      focus: {
        color: theme.color.fillNeutral
      }
    }
  },
  themeStyles
};
const text = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    textAlign: "left",
    color: theme.color.textNeutral,
    ...theme.typography.button1
  },
  themeStyles
};
makeComponentStyles(container$1);
makeComponentStyles(input);
makeComponentStyles(text);
const { Tile: { defaultTone, ...tileThemeStyles } = { styles: {} } } = (_q = theme) == null ? void 0 : _q.componentConfig;
const { Surface: { defaultSurfaceTone, ...surfaceThemeStyles } = { styles: {} } } = (_r = theme) == null ? void 0 : _r.componentConfig;
const container = {
  themeKeys: {
    alpha: "alpha",
    paddingYProgress: "paddingYProgress"
  },
  base: {
    width: 400,
    height: 240,
    padding: [40, 10],
    // TODO support separate paddingX and paddingY values from theme, possibly formatter
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    borderRadius: theme.radius.md,
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...tileThemeStyles
  }
};
const insetBottom = {
  themeKeys: {},
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    mountY: 1
  },
  themeStyles: tileThemeStyles
};
const standardBottom = {
  themeKeys: {},
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart"
  },
  themeStyles: tileThemeStyles
};
const logoContainer = {
  themeKeys: {},
  base: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  },
  themeStyles: tileThemeStyles
};
makeComponentStyles(container);
makeComponentStyles(insetBottom);
makeComponentStyles(standardBottom);
makeComponentStyles(logoContainer);
const fpsStyle = {
  color: 255,
  height: 150,
  width: 330,
  x: 1910,
  y: 10,
  mountX: 1,
  alpha: 0.8,
  zIndex: 100
};
const fpsLabel = {
  x: 10,
  fontSize: 22,
  textColor: hexColor("#f6f6f6")
};
const fpsValue = {
  fontSize: 22,
  textColor: hexColor("#f6f6f6")
};
const [fps, setFps] = createSignal(0);
const [avgFps, setAvgFps] = createSignal(0);
const [minFps, setMinFps] = createSignal(99);
const [maxFps, setMaxFps] = createSignal(0);
const [isLoadedCount, setIsLoadedCount] = createSignal(0);
const [isLoadingCount, setIsLoadingCount] = createSignal(0);
const [isFailedCount, setIsFailedCount] = createSignal(0);
let count = 0;
let totalFps = 0;
const calcFps = (fps2) => {
  if (!fps2)
    return;
  setFps(fps2);
  setMinFps((prev) => Math.min(fps2, prev));
  setMaxFps((prev) => Math.max(fps2, prev));
  totalFps += fps2;
  count++;
  setAvgFps(Math.round(totalFps / count));
};
const calcPerformanceMetrics = (stage) => {
  let isLoadedCount2 = 0;
  let isLoadingCount2 = 0;
  let isFailedCount2 = 0;
  stage.txManager.textureIdCache.forEach((value, key2, map) => {
    if (value.state === "loaded") {
      isLoadedCount2++;
    }
    if (value.state === "loading") {
      isLoadingCount2++;
    }
    if (value.state === "failed") {
      isFailedCount2++;
    }
  });
  setIsLoadedCount(isLoadedCount2);
  setIsLoadingCount(isLoadingCount2);
  setIsFailedCount(isFailedCount2);
};
function setupFPS(root) {
  root.renderer.on("fpsUpdate", (target, fpsData) => {
    const fps2 = typeof fpsData === "number" ? fpsData : fpsData.fps;
    if (fps2 > 5) {
      calcFps(fps2);
      calcPerformanceMetrics(target.root.stage);
    }
  });
}
const FPSCounter = (props) => {
  return createComponent(View, mergeProps(props, {
    style: fpsStyle,
    get children() {
      return [createComponent(View, {
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "FPS:"
          }), createComponent(Text, {
            style: fpsValue,
            x: 90,
            get children() {
              return fps();
            }
          })];
        }
      }), createComponent(View, {
        x: 160,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "AVG:"
          }), createComponent(Text, {
            style: fpsValue,
            x: 100,
            get children() {
              return avgFps();
            }
          })];
        }
      }), createComponent(View, {
        x: 0,
        y: 20,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "MIN:"
          }), createComponent(Text, {
            style: fpsValue,
            x: 90,
            get children() {
              return minFps();
            }
          })];
        }
      }), createComponent(View, {
        x: 160,
        y: 20,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "MAX:"
          }), createComponent(Text, {
            style: fpsValue,
            x: 100,
            get children() {
              return maxFps();
            }
          })];
        }
      }), createComponent(View, {
        x: 0,
        y: 50,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "Loaded Textures Cnt:"
          }), createComponent(Text, {
            style: fpsLabel,
            x: 270,
            get children() {
              return isLoadedCount();
            }
          })];
        }
      }), createComponent(View, {
        x: 0,
        y: 80,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "Loading Textures Cnt:"
          }), createComponent(Text, {
            style: fpsLabel,
            x: 270,
            get children() {
              return isLoadingCount();
            }
          })];
        }
      }), createComponent(View, {
        x: 0,
        y: 110,
        get children() {
          return [createComponent(Text, {
            style: fpsLabel,
            children: "Failed Textures Cnt:"
          }), createComponent(Text, {
            style: fpsLabel,
            x: 270,
            get children() {
              return isFailedCount();
            }
          })];
        }
      })];
    }
  }));
};
const styles$1 = {
  Column: {
    flexDirection: "column",
    display: "flex",
    width: 320,
    height: 600,
    y: 360,
    gap: 20,
    zIndex: 101,
    transition: {
      x: {
        duration: 250,
        easing: "ease-in-out"
      }
    },
    x: 8,
    focus: {
      x: theme.layout.marginX
    }
  },
  Gradient: {
    zIndex: 99,
    color: hexColor("#000000"),
    src: "./assets/sidenav.png",
    alpha: 0,
    width: 1200,
    height: 1080,
    focus: {
      alpha: 1
    },
    transition: { alpha: true }
  },
  NavButton: {
    zIndex: 102,
    height: 70,
    width: 100,
    borderRadius: 8,
    focus: {
      color: hexColor("#424242")
    },
    active: {
      width: 328,
      height: 70
    }
  }
};
const basePath = "/solid-demo-app/";
const icons = [{
  name: "experiment",
  width: 81,
  height: 100,
  x: 0,
  y: 0
}, {
  name: "trending",
  width: 100,
  height: 56,
  x: 81,
  y: 0
}, {
  name: "tv",
  width: 100,
  height: 68,
  x: 181,
  y: 0
}, {
  name: "movie",
  width: 94,
  height: 100,
  x: 282,
  y: 0
}];
function Icon(props) {
  const sprite = createSpriteMap(basePath + "assets/icons_white.png", icons);
  return createComponent(View, mergeProps(props, {
    get texture() {
      return sprite[props.name];
    },
    get width() {
      return sprite[props.name].props.width;
    },
    get height() {
      return sprite[props.name].props.height;
    },
    get x() {
      return (100 - (sprite[props.name].props.width || 0)) / 2;
    },
    get y() {
      return (100 - (sprite[props.name].props.height || 0)) / 2;
    }
  }));
}
function NavButton(props) {
  return createComponent(View, mergeProps(props, {
    forwardStates: true,
    get style() {
      return styles$1.NavButton;
    },
    get children() {
      return [createComponent(View, {
        y: -16,
        get children() {
          return createComponent(Icon, {
            scale: 0.5,
            get name() {
              return props.icon;
            }
          });
        }
      }), createComponent(Text, {
        style: {
          fontSize: 38,
          x: 116,
          y: 18,
          height: 50,
          alpha: 0,
          active: {
            alpha: 1
          }
        },
        get children() {
          return props.children;
        }
      })];
    }
  }));
}
function NavDrawer(props) {
  let backdrop;
  const navigate = useNavigate();
  function onFocus() {
    backdrop.states.add("focus");
    this.children.forEach((c) => c.states.add("active"));
    this.children.selected.setFocus();
  }
  function onBlur() {
    backdrop.states.remove("focus");
    this.selected = 0;
    this.children.forEach((c) => c.states.remove("active"));
  }
  function handleNavigate(page) {
    const isOnPage = useMatch(() => page);
    if (isOnPage()) {
      return props.focusPage();
    }
    navigate(page);
  }
  return [createComponent(View, {
    flexItem: false,
    x: 40,
    y: 30,
    zIndex: 105,
    get alpha() {
      return props.showWidgets ? 1 : 0;
    },
    get children() {
      return [createComponent(Text, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), createComponent(View, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      })];
    }
  }), createComponent(Column, mergeProps(props, {
    onFocus,
    onBlur,
    get style() {
      return styles$1.Column;
    },
    scroll: "none",
    get children() {
      return [createComponent(NavButton, {
        onEnter: () => handleNavigate("/browse/all"),
        icon: "trending",
        children: "Trending"
      }), createComponent(NavButton, {
        icon: "movie",
        onEnter: () => handleNavigate("/browse/movie"),
        children: "Movies"
      }), createComponent(NavButton, {
        icon: "tv",
        onEnter: () => handleNavigate("/browse/tv"),
        children: "TV"
      }), createComponent(NavButton, {
        icon: "experiment",
        onEnter: () => handleNavigate("/examples"),
        children: "Examples"
      })];
    }
  })), createComponent(View, {
    ref(r$) {
      var _ref$ = backdrop;
      typeof _ref$ === "function" ? _ref$(r$) : backdrop = r$;
    },
    get style() {
      return styles$1.Gradient;
    }
  })];
}
const App = (props) => {
  useFocusManager({
    Announcer: ["a"],
    Menu: ["m"],
    Escape: ["Escape", 27],
    Backspace: ["Backspace", 8],
    Left: ["ArrowLeft", 37],
    Right: ["ArrowRight", 39],
    Up: ["ArrowUp", 38],
    Down: ["ArrowDown", 40],
    Enter: ["Enter", 13]
  });
  const announcer = useAnnouncer();
  announcer.enabled = false;
  const navigate = useNavigate();
  let navDrawer, lastFocused;
  setupFPS({
    renderer
  });
  function focusNavDrawer() {
    if (navDrawer.states.has("focus")) {
      return false;
    }
    lastFocused = activeElement();
    return navDrawer.setFocus();
  }
  const [showWidgets, setShowWidgets] = createSignal(true);
  const location = useLocation();
  const showOnPaths = ["/browse", "/entity"];
  createEffect(() => {
    const currentPath = location.pathname;
    let matchesPartial = showOnPaths.some((path) => currentPath.startsWith(path));
    if (currentPath === "/") {
      matchesPartial = true;
    }
    setShowWidgets(matchesPartial);
  });
  return createComponent(View, {
    ref(r$) {
      var _ref$ = window.APP;
      typeof _ref$ === "function" ? _ref$(r$) : window.APP = r$;
    },
    onAnnouncer: () => announcer.enabled = !announcer.enabled,
    onLast: () => history.back(),
    onMenu: () => navigate("/"),
    style: {
      width: 1920,
      height: 1080
    },
    onBackspace: focusNavDrawer,
    onLeft: focusNavDrawer,
    onRight: () => navDrawer.states.has("focus") && lastFocused.setFocus(),
    get children() {
      return [createComponent(Background, {}), createComponent(FPSCounter, {
        mountX: 1,
        x: 1910,
        y: 10,
        get alpha() {
          return showWidgets() ? 1 : 0;
        }
      }), memo(() => props.children), createComponent(NavDrawer, {
        ref(r$) {
          var _ref$2 = navDrawer;
          typeof _ref$2 === "function" ? _ref$2(r$) : navDrawer = r$;
        },
        focusPage: () => lastFocused.setFocus(),
        get showWidgets() {
          return showWidgets();
        }
      })];
    }
  });
};
const styles = {
  Page: {
    width: 1920,
    height: 1080
  },
  headlineText: {
    width: 1200,
    height: 240,
    x: 360,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    y: 455,
    contain: "both",
    fontSize: 66,
    textAlign: "center"
  },
  headlineSubText: {
    width: 960,
    height: 170,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    x: 530,
    y: 655,
    contain: "both",
    fontSize: 48,
    textAlign: "center"
  },
  itemsContainer: {
    width: theme.layout.screenW,
    height: 600,
    y: 560,
    x: 0,
    zIndex: 2
  },
  Thumbnail: {
    borderRadius: 16,
    width: 185,
    height: 278,
    scale: 1,
    zIndex: 2,
    transition: { scale: { duration: 250, easing: "ease-in-out" } },
    border: { width: 0, color: 0 },
    focus: { scale: 1.1, border: { color: 4294967142, width: 8 } }
  },
  FocusRing: {
    borderRadius: 16,
    width: 194,
    height: 286,
    y: -5,
    x: -5,
    zIndex: -1
  },
  FPS: {
    color: 255,
    height: 42,
    width: 140,
    x: 20,
    y: 20,
    zIndex: 100
  },
  FPSLabel: {
    x: 10,
    y: 0,
    fontSize: 36,
    textColor: hexColor("#ffffff")
  },
  FPSValue: {
    x: 90,
    y: 0,
    fontSize: 36,
    textColor: hexColor("#ffffff")
  },
  showHeadline: { x: 70, y: 20 },
  headlineBlur: {
    width: 1920,
    height: 150,
    x: 0,
    y: 0,
    zIndex: 14,
    alpha: 0.9,
    color: hexColor("#000000")
  },
  RowTitle: {
    height: 60,
    width: 300,
    marginBottom: -40,
    fontSize: 36,
    color: hexColor("#f0f0f0"),
    zIndex: 2
  },
  Row: {
    display: "flex",
    justifyContent: "spaceBetween",
    height: 300
  },
  Column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    gap: 64,
    width: theme.layout.screenW - 2 * theme.layout.marginX,
    x: theme.layout.marginX + theme.layout.gutterX,
    y: 48,
    transition: { y: { duration: 250, easing: "ease-in-out" } },
    zIndex: 2
  },
  Rect: {
    width: 250,
    height: 100,
    y: 10,
    x: 300,
    color: hexColor("#0000ff")
  },
  peopleBio: {
    ...theme.typography.body1,
    fontFamily: "Ubuntu",
    fontWeight: "normal",
    contain: "both",
    width: 780,
    height: 340
  }
};
const Button = {
  width: 120,
  height: 40,
  color: hexColor("#000000"),
  borderRadius: 8,
  border: { width: 2, color: hexColor("#3333ff") },
  scale: 1,
  focus: {
    scale: 1.1,
    border: { width: 5, color: hexColor("#333333") }
  },
  transition: { scale: true, color: true }
};
const TopBar = {
  color: hexColor("#00A699"),
  height: 8,
  y: 2,
  x: -4,
  width: Button.width + 8
};
const ButtonText = {
  fontSize: 12,
  y: 12,
  // lineHeight: Button.height, // TODO: Add back when lineHeight is supported
  contain: "width",
  textAlign: "center",
  color: hexColor("#F6F6F9"),
  height: Button.height,
  width: Button.width
};
const buttonStyles = {
  container: Button,
  topBar: TopBar,
  text: ButtonText
};
const MaterialButton = {
  width: 386,
  height: 136,
  color: hexColor("#715cab"),
  focus: {
    color: hexColor("#5a39a2")
  },
  disabled: {
    color: hexColor("#291d43")
  }
};
const MaterialButtonText = {
  fontSize: 32,
  contain: "width",
  textAlign: "center",
  mountY: -0.35,
  color: hexColor("#FFFFFF"),
  height: MaterialButton.height,
  width: MaterialButton.width,
  // lineHeight: MaterialButton.height, // TODO: Add back when lineHeight is supported
  focus: {
    fontSize: 40
  },
  disabled: {
    color: hexColor("#909090")
  }
};
function Thumbnail(props) {
  return createComponent(View, mergeProps(props, {
    get style() {
      return styles.Thumbnail;
    }
  }));
}
function TileRow(props) {
  const [local, others] = splitProps(props, ["items"]);
  return createComponent(Row, mergeProps(others, {
    get style() {
      return styles.Row;
    },
    get children() {
      return createComponent(For, {
        get each() {
          return local.items;
        },
        children: (item) => createComponent(Thumbnail, item)
      });
    }
  }));
}
const API_KEY_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA";
const API_BASE = "https://api.themoviedb.org/3";
let tmdbConfig;
let baseImageUrl;
const basePosterSize = "w185";
const defaultFetchParams = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY_V4
  }
};
function getImageUrl(path, posterSize = basePosterSize) {
  return baseImageUrl + posterSize + path;
}
function get(path, params = {}) {
  if (tmdbConfig) {
    return _get(path, params);
  } else {
    return loadConfig().then(() => _get(path, params));
  }
}
function _get(path, params = {}) {
  return fetch(API_BASE + path, {
    ...defaultFetchParams,
    ...params
  }).then((r) => r.json());
}
function loadConfig() {
  return _get("/configuration").then((data) => {
    var _a3;
    tmdbConfig = data;
    baseImageUrl = (_a3 = data.images) == null ? void 0 : _a3.secure_base_url;
    return data;
  });
}
const api = {
  get,
  loadConfig
};
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}
function chunkArray(array, size2 = 7) {
  let result = [];
  for (let i = 0, j = array.length; i < j; i += size2) {
    result.push(array.slice(i, i + size2));
  }
  return result;
}
function convertItemsToTiles(items = []) {
  return items.map((item) => ({
    src: getImageUrl(item.poster_path || item.profile_path),
    tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
    backdrop: getImageUrl(item.backdrop_path, "w1280"),
    href: "/entity/".concat(item.media_type || "people", "/").concat(item.id),
    shortTitle: truncateString(item.title || item.name, 30),
    title: item.title || item.name,
    data: item,
    entityInfo: {
      type: item.media_type || "people",
      id: item.id
    },
    heroContent: {
      title: item.title || item.name,
      description: item.overview
    }
  }));
}
let cache = /* @__PURE__ */ new Map();
const leftoverTiles = /* @__PURE__ */ new Map();
function browseProvider(filter) {
  return (pageIndex) => {
    const url = "/trending/".concat(filter, "/week?page=").concat(pageIndex);
    if (cache.has(url)) {
      return cache.get(url);
    }
    let result = api.get(url).then((trending) => {
      let results = trending.results.filter((r) => !r.adult);
      let tiles = (leftoverTiles.has(filter) ? leftoverTiles.get(filter) : []).concat(convertItemsToTiles(results));
      let chunks = chunkArray(tiles);
      if (chunks[chunks.length - 1].length < 7) {
        leftoverTiles.set(filter, chunks.pop());
      } else {
        leftoverTiles.delete(filter);
      }
      return chunks;
    });
    cache.set(url, result);
    return result;
  };
}
function createInfiniteScroll(fetcher) {
  const [pages, setPages] = createSignal([]);
  const [page, setPage] = createSignal(1);
  const [end, setEnd] = createSignal(false);
  const [contents] = createResource(page, fetcher);
  createComputed(() => {
    const content2 = contents();
    if (!content2)
      return;
    batch(() => {
      if (content2.length === 0)
        setEnd(true);
      setPages((p) => [...p, ...content2]);
    });
  });
  return {
    pages,
    page,
    setPage,
    setPages,
    end,
    setEnd
  };
}
const blockWidth = 900;
const ContentBlockStyle = {
  display: "flex",
  flexDirection: "column",
  x: 50,
  y: 100,
  width: blockWidth,
  height: 220,
  gap: 16
};
const HeadlineStyles = {
  ...theme.typography.display2,
  fontFamily: "Ubuntu",
  fontWeight: 700,
  maxLines: 1,
  width: blockWidth,
  contain: "width"
};
const Headline = (props) => createComponent(Text, mergeProps(props, {
  style: HeadlineStyles
}));
const DescriptionStyles = {
  ...theme.typography.body1,
  fontFamily: "Ubuntu",
  fontWeight: 400,
  lineHeight: 32,
  width: blockWidth,
  maxLines: 3,
  contain: "width"
};
const BadgeStyle = {
  fontSize: 16,
  lineHeight: 20
};
const Description = (props) => createComponent(Text, mergeProps(props, {
  style: DescriptionStyles,
  get children() {
    return props.children;
  }
}));
const Badge = (props) => {
  return (() => {
    var _el$ = createElement("node");
    use(withPadding, _el$, () => [8, 13, 11, 13]);
    spread(_el$, mergeProps(props, {
      "style": {
        color: "0x00000099",
        borderRadius: 8,
        border: {
          width: 2,
          color: "0xffffffff"
        }
      }
    }), true);
    insert(_el$, createComponent(Text, {
      style: BadgeStyle,
      get children() {
        return props.children;
      }
    }));
    return _el$;
  })();
};
const MetaTextStyle = {
  ...theme.typography.body2,
  fontFamily: "Ubuntu",
  fontWeight: 400
};
const Metadata = (props) => createComponent(View, {
  style: {
    display: "flex",
    flexDirection: "row",
    gap: 18,
    width: blockWidth,
    height: 48
  },
  get children() {
    return [createComponent(View, {
      y: -4,
      src: "./assets/stars.png",
      width: 188,
      height: 31
    }), createComponent(View, {
      y: -4,
      flexItem: false,
      clipping: true,
      get width() {
        return 188 * props.voteAverage / 10;
      },
      height: 31,
      get children() {
        return createComponent(View, {
          src: "./assets/stars-full.png",
          width: 188,
          height: 31
        });
      }
    }), createComponent(Text, {
      style: MetaTextStyle,
      get children() {
        return [memo(() => props.voteCount), " reviews"];
      }
    }), createComponent(Text, {
      style: MetaTextStyle,
      get children() {
        return props.metaText;
      }
    }), createComponent(For, {
      get each() {
        return props.badges;
      },
      children: (item) => createComponent(Badge, {
        y: -5,
        children: item
      })
    })];
  }
});
const ContentBlock = (props) => createComponent(View, mergeProps(props, {
  id: "contentBlock",
  style: ContentBlockStyle,
  get children() {
    return [createComponent(Headline, {
      get children() {
        return props.title;
      }
    }), createComponent(Description, {
      get children() {
        return props.description;
      }
    }), createComponent(Show, {
      get when() {
        return props.voteCount;
      },
      get children() {
        return createComponent(Metadata, {
          get metaText() {
            return props.metaText;
          },
          get badges() {
            return props.badges;
          },
          get voteCount() {
            return props.voteCount;
          },
          get voteAverage() {
            return props.voteAverage;
          }
        });
      }
    })];
  }
}));
function minutesToHMM(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
}
function formatDate(dateString) {
  const parts = dateString.split("-");
  return parts[1] + "/" + parts[2] + "/" + parts[0];
}
function justYear(dateString) {
  const parts = dateString.split("-");
  return parts[0];
}
function getRecommendations({ type, id }) {
  return api.get("/".concat(type, "/").concat(id, "/recommendations")).then(({ results }) => {
    if (results.length) {
      return convertItemsToTiles(results.slice(0, 7));
    }
    return api.get("/trending/".concat(type, "/week?page=1")).then(({ results: results2 }) => convertItemsToTiles(results2.slice(0, 7)));
  });
}
function getCredits$1({ type, id }) {
  return api.get("/".concat(type, "/").concat(id, "/credits")).then(({ cast }) => convertItemsToTiles(cast.slice(0, 7)));
}
function getInfo$1({ type, id }) {
  let rt = type === "movie" ? {
    rtCrit: 86,
    rtFan: 92
  } : {};
  return api.get("/".concat(type, "/").concat(id)).then((data) => ({
    backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
    heroContent: {
      title: data.title || data.name,
      description: data.overview,
      badges: ["HD", "CC"],
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      metaText: type === "movie" ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : "".concat(justYear(data.first_air_date), " - ").concat(justYear(data.last_air_date)),
      reviews: rt
    },
    ...data
  }));
}
const Browse = () => {
  const params = useParams();
  const [columnY, setcolumnY] = createSignal(0);
  const [entityInfo, setEntityInfo] = createSignal();
  createResource(entityInfo, getInfo$1);
  const [heroContent, setHeroContent] = createSignal({});
  const navigate = useNavigate();
  const isFirst = createSelector(() => {
    return 0;
  });
  const provider = createMemo(() => {
    return createInfiniteScroll(browseProvider(params.filter || "all"));
  });
  const delayedBackgrounds = debounce((img) => setGlobalBackground(img), 400);
  const delayedHero = debounce((content2) => setHeroContent(content2), 200);
  createEffect(on(activeElement, (elm) => {
    if (elm.backdrop) {
      delayedBackgrounds(elm.backdrop);
    }
    if (elm.heroContent) {
      delayedHero(elm.heroContent);
    }
  }, {
    defer: true
  }));
  function onRowFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    setcolumnY((this.y || 0) * -1 + 24);
    let numPages = provider().pages().length;
    if (numPages === 0 || this.parent.selected && this.parent.selected >= numPages - 2) {
      provider().setPage((p) => p + 1);
    }
  }
  function onEnter() {
    let entity = this.children.selected;
    assertTruthy(entity && entity.href);
    navigate(entity.href);
    return true;
  }
  return createComponent(Show, {
    get when() {
      return provider().pages().length;
    },
    get children() {
      return [createComponent(ContentBlock, mergeProps({
        y: 360,
        x: 162
      }, heroContent)), createComponent(View, {
        clipping: true,
        get style() {
          return styles.itemsContainer;
        },
        get children() {
          return createComponent(Column, {
            plinko: true,
            announce: "All Trending - Week",
            get y() {
              return columnY();
            },
            get style() {
              return styles.Column;
            },
            get children() {
              return createComponent(For, {
                get each() {
                  return provider().pages();
                },
                children: (items, i) => createComponent(TileRow, {
                  get autofocus() {
                    return isFirst(i());
                  },
                  items,
                  width: 1620,
                  onFocus: onRowFocus,
                  onEnter
                })
              });
            }
          });
        }
      })];
    }
  });
};
const Portal = () => {
  const navigate = useNavigate();
  const isFirst = createSelector(() => {
    return 0;
  });
  function onEnter() {
    let entity = this.children.selected;
    assertTruthy(entity && entity.id);
    navigate("/" + entity.id);
  }
  const demos = [{
    title: "Flex Row",
    id: "flex",
    description: "Flex Row Implementation"
  }, {
    title: "Flex Column",
    id: "flexcolumn",
    description: "Flex Column Implementation"
  }, {
    title: "Flex Row Vertical Align",
    id: "flexsize",
    description: "Flex Row Vertical Align Implementation"
  }, {
    title: "Flex Column Vertical Align",
    id: "flexcolumnsize",
    description: "Flex Column Vertical Align Implementation"
  }, {
    title: "Buttons",
    id: "buttons",
    description: "Demo a few buttons"
  }, {
    title: "Text",
    id: "text",
    description: "Text layout with flexbox"
  }, {
    title: "Create Elements",
    id: "create",
    description: "Testing Show + children + inserting text"
  }, {
    title: "Viewport",
    id: "viewport",
    description: "Events going in and out of viewport"
  }];
  function DemoTile(props) {
    const Container = {
      width: 370,
      height: 320,
      borderRadius: 6,
      scale: 1,
      color: 405488895,
      transition: {
        color: true,
        scale: true
      },
      focus: {
        scale: 1.1,
        color: 4294967295
      }
    };
    const [color, setColor] = createSignal(4294967295);
    return createComponent(View, mergeProps(props, {
      onFocus: () => setColor(255),
      onBlur: () => setColor(4294967295),
      style: Container,
      get children() {
        return createComponent(View, {
          x: 30,
          get children() {
            return [createComponent(Text, {
              y: 30,
              fontSize: 84,
              get color() {
                return color();
              },
              get children() {
                return props.index;
              }
            }), createComponent(Text, {
              y: 140,
              fontSize: 42,
              width: 340,
              height: 42,
              contain: "both",
              get color() {
                return color();
              },
              get children() {
                return props.title;
              }
            }), createComponent(Text, {
              y: 200,
              fontSize: 28,
              width: 330,
              contain: "width",
              get color() {
                return color();
              },
              get children() {
                return props.description;
              }
            })];
          }
        });
      }
    }));
  }
  const [rowX, setRowX] = createSignal(140);
  function moveRow(row) {
    setRowX(row.selected * -400 + 140);
  }
  return createComponent(View, {
    colorTop: 1147903743,
    colorBottom: 743406847,
    get children() {
      return [createComponent(View, {
        x: 120,
        get children() {
          return [createComponent(View, {
            src: "./assets/solidjs.png",
            width: 101,
            height: 90,
            y: 40
          }), createComponent(Text, {
            fontSize: 90,
            x: 110,
            y: 40,
            children: "Examples"
          }), createComponent(View, {
            y: 140,
            height: 1,
            width: 1800,
            color: 3906468351
          })];
        }
      }), createComponent(Row, {
        onSelectedChanged: moveRow,
        onEnter,
        transition: {
          x: {
            delay: 20,
            duration: 300
          }
        },
        get x() {
          return rowX();
        },
        y: 300,
        width: 4400,
        get style() {
          return styles.Row;
        },
        justifyContent: "flexStart",
        gap: 40,
        get children() {
          return createComponent(For, {
            each: demos,
            children: (demo, i) => createComponent(DemoTile, mergeProps({
              get autofocus() {
                return isFirst(i());
              },
              get index() {
                return i();
              }
            }, demo))
          });
        }
      })];
    }
  });
};
const TextPage = () => {
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 350,
    x: 150,
    gap: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  };
  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  };
  const Title = {
    fontSize: 42
  };
  const Overview = {
    width: OverviewContainer.width,
    fontSize: 26,
    contain: "width"
  };
  const Subline = {
    fontSize: 26
  };
  onMount(() => {
    setGlobalBackground("#000000");
  });
  return createComponent(View, {
    autofocus: true,
    style: OverviewContainer,
    get children() {
      return [createComponent(Text, {
        style: Title,
        children: "Title of the Page"
      }), createComponent(Text, {
        style: Overview,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempor tellus. Sed eu leo purus. Vestibulum sollicitudin eget tellus a varius. Phasellus est turpis, volutpat sed blandit sit amet, rutrum sit amet mauris. In dignissim elit orci, a sollicitudin ipsum faucibus et. Quisque vel quam rutrum, faucibus augue sed, scelerisque nunc."
      }), createComponent(View, {
        style: SublineContainer,
        get children() {
          return [createComponent(Text, {
            style: Subline,
            children: "Subline Text"
          }), createComponent(View, {
            width: 28,
            height: 28,
            src: "./assets/rt-popcorn.png"
          }), createComponent(Text, {
            style: Subline,
            children: "More Text"
          })];
        }
      })];
    }
  });
};
const CreatePage = () => {
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 50,
    x: 150,
    gap: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  };
  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  };
  const Title = {
    fontSize: 42
  };
  const Subline = {
    fontSize: 26
  };
  let myBox, childRef;
  onMount(() => {
    setGlobalBackground("#000000");
    myBox.animate({
      x: 100
    }, {
      duration: 2e3
    }).start();
  });
  const [insertTest, setInsertTest] = createSignal();
  const [emptyTest, setEmptyTest] = createSignal();
  setTimeout(() => {
    var _a3;
    setInsertTest("- Inserted -");
    (_a3 = childRef.getChildById("child1")) == null ? void 0 : _a3.animate({
      x: 600
    }, {
      duration: 2e3
    }).start();
  }, 2e3);
  const styleChild = {
    width: 400,
    height: 300,
    // Solid blue
    color: hexColor("#0000ff")
  };
  const someOtherStyle = {
    // pretty red
    color: hexColor("#f54242"),
    focus: {
      // pretty blue
      color: hexColor("#4287f5")
    }
  };
  function ChildTest(props) {
    const resolved = children(() => props.children);
    return createComponent(View, mergeProps(props, {
      get style() {
        return [someOtherStyle, props.style, [styleChild]];
      },
      get children() {
        return [createComponent(View, {
          id: "child1",
          width: 100,
          height: 100,
          get color() {
            return hexColor("#ff0000");
          },
          y: 25,
          get children() {
            return [memo(() => resolved()), createComponent(View, {
              id: "subChild",
              x: 150,
              width: 100,
              height: 100,
              get color() {
                return hexColor("#00ff00");
              }
            }), createComponent(Text, {
              get children() {
                return props.title;
              }
            })];
          }
        }), createComponent(View, {
          width: 100,
          height: 100,
          get color() {
            return hexColor("#ffff00");
          },
          y: 175,
          get children() {
            return resolved();
          }
        })];
      }
    }));
  }
  const borderStyles = {
    borderLeft: {
      width: 8,
      color: 95598118
    },
    borderTop: {
      width: 8,
      color: 631422246
    },
    borderRight: {
      width: 8,
      color: 95598118
    },
    borderBottom: {
      width: 8,
      color: 3316790822
    }
  };
  const childTestPassedStyles = {
    // grey color
    color: hexColor("#cccccc"),
    focus: {
      // black
      color: hexColor("#000000")
    }
  };
  const childTestPassedStyles2 = {
    // white color
    color: hexColor("#ffffff"),
    focus: {
      // white something...
      color: hexColor("#f6f6cc")
    }
  };
  function hasFocus(elm) {
    return elm.states.has("focus");
  }
  return createComponent(View, {
    style: OverviewContainer,
    get children() {
      return [createComponent(Text, {
        style: Title,
        children: "Title of the Page"
      }), createComponent(View, {
        style: SublineContainer,
        get children() {
          return [createComponent(Text, {
            get children() {
              return emptyTest();
            }
          }), createComponent(Text, {
            style: Subline,
            get children() {
              return ["Sub ", memo(() => insertTest()), " Text"];
            }
          }), createComponent(Show, {
            get when() {
              return insertTest();
            },
            get children() {
              return createComponent(View, {
                width: 28,
                height: 28,
                src: "./assets/rt-popcorn.png"
              });
            }
          }), createComponent(Text, {
            style: Subline,
            children: "More Text"
          })];
        }
      }), createComponent(ChildTest, {
        autofocus: true,
        ref(r$) {
          var _ref$ = childRef;
          typeof _ref$ === "function" ? _ref$(r$) : childRef = r$;
        },
        style: [childTestPassedStyles2, childTestPassedStyles],
        get children() {
          return createComponent(Text, {
            children: "Child Test"
          });
        }
      }), createComponent(View, {
        ref(r$) {
          var _ref$2 = myBox;
          typeof _ref$2 === "function" ? _ref$2(r$) : myBox = r$;
        },
        style: borderStyles,
        width: 100,
        height: 100,
        get color() {
          return hexColor("#00ff00");
        },
        x: 900,
        y: 400,
        get alpha() {
          return hasFocus(myBox) ? 1 : 0.2;
        }
      })];
    }
  });
};
const ViewportPage = () => {
  let ball, invervalTimer;
  const [ballStatus, setBallStatus] = createSignal([]);
  const styleBall = {
    width: 100,
    height: 100,
    x: -400,
    y: -400,
    rotation: 0,
    borderRadius: 50,
    color: hexColor("#4287f5"),
    transition: {
      x: {
        duration: 1250,
        easing: "linear"
      },
      y: {
        duration: 1250,
        easing: "linear"
      },
      rotation: {
        duration: 1400,
        easing: "ease-in-out"
      }
    }
  };
  const Title = {
    fontSize: 32,
    x: 960,
    y: 540,
    mount: 0.5,
    lineheight: 52
  };
  const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
  onMount(() => {
    setGlobalBackground("#000000");
    ball.x = (1920 - 100) / 2;
    ball.y = (1080 - 100) / 2;
    invervalTimer = setInterval(() => {
      ball.rotation = randomIntBetween(-90, 90);
      ball.x = randomIntBetween(-300, 2220);
      ball.y = randomIntBetween(-300, 1380);
    }, 2500);
  });
  function logEvent(name, elm) {
    setBallStatus((prev) => {
      return [...prev, name].slice(-4);
    });
    console.log(name);
  }
  onCleanup(() => {
    clearInterval(invervalTimer);
  });
  return createComponent(View, {
    get children() {
      return [createComponent(Text, {
        style: Title,
        get children() {
          return ballStatus().join("\n");
        }
      }), createComponent(View, {
        autofocus: true,
        style: styleBall,
        ref(r$) {
          var _ref$ = ball;
          typeof _ref$ === "function" ? _ref$(r$) : ball = r$;
        },
        onEvents: [["inBounds", (elm) => logEvent("inBounds")], ["outOfBounds", (elm) => logEvent("outOfBounds")], ["inViewport", (elm) => logEvent("inViewport")], ["outOfViewport", (elm) => logEvent("outOfViewport")]]
      })];
    }
  });
};
const ButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle("disabled");
  }
  const RowStyles = {
    display: "flex",
    justifyContent: "flexStart",
    width: 1500,
    height: 300,
    color: hexColor("00000000"),
    gap: 26,
    y: 400
  };
  function Button2(props) {
    return createComponent(View, mergeProps(props, {
      forwardStates: true,
      get style() {
        return buttonStyles.container;
      },
      get children() {
        return createComponent(Text, {
          get style() {
            return buttonStyles.text;
          },
          get children() {
            return props.children;
          }
        });
      }
    }));
  }
  const Badge2 = (props) => {
    return (() => {
      var _el$ = createElement("node");
      use(withPadding, _el$, () => [10, 15]);
      spread(_el$, mergeProps(props, {
        get style() {
          return {
            color: hexColor("#000000be"),
            borderRadius: 8,
            border: {
              width: 2,
              color: hexColor("#ffffff")
            }
          };
        }
      }), true);
      insert(_el$, createComponent(Text, {
        style: {
          fontSize: 20
          // TODO: lineHeight is not supported by renderer yet
          // lineHeight: 20,
        },
        get children() {
          return props.children;
        }
      }));
      return _el$;
    })();
  };
  return [createComponent(Row, {
    x: 100,
    y: 200,
    gap: 5,
    style: RowStyles,
    get children() {
      return [createComponent(Badge2, {
        children: "HD"
      }), createComponent(Badge2, {
        children: "PG13"
      }), createComponent(Badge2, {
        children: "NC17"
      }), createComponent(Text, {
        fontSize: 30,
        children: "I like bananas"
      }), createComponent(Badge2, {
        children: "DOLBY"
      })];
    }
  }), createComponent(Row, {
    x: 100,
    gap: 40,
    style: RowStyles,
    get children() {
      return [createComponent(Button2, {
        autofocus: true,
        onEnter,
        children: "TV Shows"
      }), createComponent(Button2, {
        states: {
          active: true,
          disabled: false
        },
        children: "Movies"
      }), createComponent(Button2, {
        states: "active",
        children: "Sports"
      }), createComponent(Button2, {
        states: "disabled",
        children: "News"
      })];
    }
  })];
};
const FlexPage = () => {
  const RowStyles = {
    display: "flex",
    justifyContent: "flexStart",
    width: 1600,
    height: 110,
    color: hexColor("#4dabf5")
  };
  const rowTitle = {
    fontSize: 44,
    marginTop: 25,
    marginBottom: -20,
    skipFocus: true
  };
  function Block(props) {
    const styles2 = {
      width: 200,
      height: 100,
      y: 5,
      color: 392801023
    };
    return createComponent(View, mergeProps(props, {
      style: styles2
    }));
  }
  const [columnY, setColumnY] = createSignal(50);
  function onFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    setColumnY(150 + (this.y || 0) * -1);
  }
  onMount(() => {
    setGlobalBackground("#333333");
  });
  const gap = 50;
  return createComponent(Column, {
    x: 160,
    get y() {
      return columnY();
    },
    gap: 30,
    height: 850,
    get width() {
      return RowStyles.width;
    },
    get style() {
      return styles.Column;
    },
    get children() {
      return [createComponent(Text, {
        style: rowTitle,
        children: "Flex Start"
      }), createComponent(Row, {
        gap,
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            autofocus: true
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex Start - Margin Left"
      }), createComponent(Row, {
        gap,
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            marginLeft: 100
          }), createComponent(Block, {}), createComponent(Block, {
            marginLeft: 100
          }), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex End"
      }), createComponent(Row, {
        gap,
        justifyContent: "flexEnd",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex End - Margin Right"
      }), createComponent(Row, {
        gap,
        justifyContent: "flexEnd",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {
            marginRight: 100
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
            marginRight: 100
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Center - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "center",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Space Between - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "spaceBetween",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Space Evenly - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "spaceEvenly",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      })];
    }
  });
};
const FlexSizePage = () => {
  const RowStyles = {
    display: "flex",
    justifyContent: "flexStart",
    width: 1600,
    height: 110,
    color: hexColor("#4dabf5")
  };
  const rowTitle = {
    fontSize: 44,
    marginTop: 25,
    marginBottom: -20,
    skipFocus: true
  };
  function Block(props) {
    const styles2 = {
      width: 200,
      height: 100,
      y: 5,
      color: 392801023
    };
    return createComponent(View, mergeProps(props, {
      style: styles2
    }));
  }
  function randSize() {
    return Math.floor(Math.random() * 91) + 10;
  }
  const [columnY, setColumnY] = createSignal(50);
  function onFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    setColumnY(150 + (this.y || 0) * -1);
  }
  onMount(() => {
    setGlobalBackground("#333333");
  });
  const gap = 50;
  return createComponent(Column, {
    x: 160,
    get y() {
      return columnY();
    },
    gap: 30,
    height: 850,
    get width() {
      return RowStyles.width;
    },
    get style() {
      return styles.Column;
    },
    get children() {
      return [createComponent(Text, {
        style: rowTitle,
        children: "Flex Start - AlignItems: center"
      }), createComponent(Row, {
        alignItems: "center",
        gap,
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            autofocus: true,
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex Start - Margin Left - AlignItems: flexStart"
      }), createComponent(Row, {
        gap,
        alignItems: "flexStart",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            marginLeft: 100,
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            marginLeft: 100,
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex End - AlignItems: flexEnd"
      }), createComponent(Row, {
        gap,
        justifyContent: "flexEnd",
        alignItems: "flexEnd",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Flex End - Margin Right"
      }), createComponent(Row, {
        gap,
        justifyContent: "flexEnd",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            marginRight: 100,
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            marginRight: 100,
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Center - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "center",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Space Between - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "spaceBetween",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      }), createComponent(Text, {
        style: rowTitle,
        children: "Space Evenly - No Margin Support"
      }), createComponent(Row, {
        gap,
        justifyContent: "spaceEvenly",
        style: RowStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          }), createComponent(Block, {
            get height() {
              return randSize();
            }
          })];
        }
      })];
    }
  });
};
const FlexColumnPage$1 = () => {
  const RowStyles = {
    display: "flex",
    justifyContent: "spaceEvenly",
    width: 1920,
    y: 100,
    height: 880,
    color: hexColor("00000000")
  };
  const ColumnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    color: hexColor("#4dabf5"),
    height: 850,
    width: 80
  };
  const rowTitle = {
    fontSize: 44,
    y: 20,
    x: 150
  };
  function Block(props) {
    const styles2 = {
      width: randSize(),
      height: 80,
      x: 5,
      color: hexColor("#1769aa")
    };
    return createComponent(View, mergeProps(props, {
      style: styles2
    }));
  }
  function randSize() {
    return Math.floor(Math.random() * 61) + 10;
  }
  const [columnY, setColumnY] = createSignal(50);
  function onFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    setColumnY(150 + (this.y || 0) * -1);
  }
  onMount(() => {
    setGlobalBackground("#333333");
  });
  const gap = 50;
  return [createComponent(Text, {
    style: rowTitle,
    children: "Start, MarginTop, End, MarginBottom, Center, Between, Evenly"
  }), createComponent(Row, {
    gap,
    style: RowStyles,
    onFocus,
    get children() {
      return [createComponent(Column, {
        gap: 30,
        style: ColumnStyles,
        alignItems: "center",
        get children() {
          return [createComponent(Block, {
            autofocus: true
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        style: ColumnStyles,
        onFocus,
        alignItems: "flexStart",
        get children() {
          return [createComponent(Block, {
            marginTop: 100
          }), createComponent(Block, {}), createComponent(Block, {
            marginTop: 100
          }), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        alignItems: "flexEnd",
        justifyContent: "flexEnd",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "flexEnd",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {
            marginBottom: 100
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
            marginBottom: 100
          })];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "center",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "spaceBetween",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "spaceEvenly",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      })];
    }
  })];
};
const FlexColumnPage = () => {
  const RowStyles = {
    display: "flex",
    justifyContent: "spaceEvenly",
    width: 1920,
    y: 100,
    height: 880,
    color: hexColor("00000000")
  };
  const ColumnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    color: hexColor("#4dabf5"),
    height: 850,
    width: 60
  };
  const rowTitle = {
    fontSize: 44,
    y: 20,
    x: 150
  };
  function Block(props) {
    const styles2 = {
      width: 50,
      height: 80,
      x: 5,
      color: hexColor("#1769aa")
    };
    return createComponent(View, mergeProps(props, {
      style: styles2
    }));
  }
  const [columnY, setColumnY] = createSignal(50);
  function onFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    setColumnY(150 + (this.y || 0) * -1);
  }
  onMount(() => {
    setGlobalBackground("#333333");
  });
  const gap = 50;
  return [createComponent(Text, {
    style: rowTitle,
    children: "Start, MarginTop, End, MarginBottom, Center, Between, Evenly"
  }), createComponent(Row, {
    gap,
    style: RowStyles,
    onFocus,
    get children() {
      return [createComponent(Column, {
        gap: 30,
        style: ColumnStyles,
        get children() {
          return [createComponent(Block, {
            autofocus: true
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {
            marginTop: 100
          }), createComponent(Block, {}), createComponent(Block, {
            marginTop: 100
          }), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "flexEnd",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "flexEnd",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {
            marginBottom: 100
          }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
            marginBottom: 100
          })];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "center",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "spaceBetween",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      }), createComponent(Column, {
        gap,
        justifyContent: "spaceEvenly",
        style: ColumnStyles,
        onFocus,
        get children() {
          return [createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {})];
        }
      })];
    }
  })];
};
const MaterialButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle("disabled");
  }
  const RowStyles = {
    display: "flex",
    justifyContent: "flexStart",
    width: 1500,
    height: 300,
    color: hexColor("00000000"),
    gap: 26,
    y: 400,
    x: 100
  };
  const MaterialButton2 = {
    width: 386,
    height: 136,
    color: "0x715cabff",
    focus: {
      color: "0x5a39a2ff"
    },
    disabled: {
      color: "0x291d43ff"
    }
  };
  const RoundedRectangle2 = ["RoundedRectangle", {
    radius: 65
  }];
  function Button2(props) {
    return createComponent(View, mergeProps(props, {
      forwardStates: true,
      style: MaterialButton2,
      shader: RoundedRectangle2,
      get children() {
        return createComponent(Text, {
          style: MaterialButtonText,
          get children() {
            return props.children;
          }
        });
      }
    }));
  }
  return createComponent(Row, {
    style: RowStyles,
    get children() {
      return [createComponent(Button2, {
        autofocus: true,
        onEnter,
        children: "Focused"
      }), createComponent(Button2, {
        states: {
          active: true,
          disabled: false
        },
        children: "Normal"
      }), createComponent(Button2, {
        states: "disabled",
        children: "Disabled"
      })];
    }
  });
};
const manifestUri = "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";
function initApp() {
  shaka.polyfill.installAll();
  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error("Browser not supported!");
  }
}
async function initPlayer() {
  const video = document.getElementById("video");
  const player = new shaka.Player();
  await player.attach(video);
  window.player = player;
  player.addEventListener("error", onErrorEvent);
  try {
    await player.load(manifestUri);
    console.log("The video has now been loaded!");
  } catch (e) {
    onError(e);
  }
}
function onErrorEvent(event) {
  onError(event.detail);
}
function onError(error) {
  console.error("Error code", error.code, "object", error);
}
function playVideo() {
  const video = document.getElementById("video");
  video.hidden = false;
  setTimeout(() => video.play(), 50);
  video.focus();
  return video;
}
function closeVideo() {
  const video = document.getElementById("video");
  video.hidden = true;
  video.pause();
  return video;
}
document.addEventListener("DOMContentLoaded", initApp);
const Entity = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data] = createResource(() => ({
    ...params
  }), getInfo$1);
  const [credits] = createResource(() => ({
    ...params
  }), getCredits$1);
  const [recommendations] = createResource(() => ({
    ...params
  }), getRecommendations);
  const [backdropAlpha, setBackdropAlpha] = createSignal(0);
  createEffect(on(data, (data2) => {
    setGlobalBackground(data2.backgroundImage);
  }, {
    defer: true
  }));
  const columnY = 640;
  const Backdrop = {
    color: hexColor("#000000"),
    alpha: 0,
    width: 1900,
    height: 890,
    x: -160,
    y: columnY,
    borderRadius: 30
  };
  function onRowFocus() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    columnRef.y = columnY;
    backdropRef.y = columnY;
    backdropRef.alpha = 0;
  }
  function onRowFocusAnimate() {
    var _a3;
    (_a3 = this.children.selected) == null ? void 0 : _a3.setFocus();
    columnRef.y = 200;
    backdropRef.y = 160;
    backdropRef.alpha = 0.9;
  }
  function onEnter() {
    let entity = this.children.selected;
    assertTruthy(entity && entity.href);
    navigate(entity.href);
  }
  function onEscape() {
    closeVideo();
    document.getElementsByTagName("canvas")[0].focus();
    entityActions.setFocus();
    setBackdropAlpha(0);
  }
  function onEnterTrailer() {
    const video = playVideo();
    setActiveElement(video);
    setBackdropAlpha(0.9);
  }
  let columnRef, backdropRef, entityActions;
  return createComponent(Show, {
    get when() {
      return data();
    },
    keyed: true,
    get children() {
      return [createComponent(View, {
        x: 170,
        onUp: () => entityActions.setFocus(),
        onEscape,
        get children() {
          return [createComponent(ContentBlock, mergeProps({
            y: 260
          }, () => data().heroContent)), createComponent(Row, {
            ref(r$) {
              var _ref$ = entityActions;
              typeof _ref$ === "function" ? _ref$(r$) : entityActions = r$;
            },
            y: 500,
            scroll: "none",
            height: 90,
            width: 640,
            gap: 40,
            onDown: () => columnRef.setFocus(),
            onEnter: onEnterTrailer,
            get children() {
              return [createComponent(Button$1, {
                width: 300,
                autofocus: true,
                children: "Play"
              }), createComponent(Button$1, {
                width: 300,
                children: "Resume"
              })];
            }
          }), createComponent(Column, {
            ref(r$) {
              var _ref$2 = columnRef;
              typeof _ref$2 === "function" ? _ref$2(r$) : columnRef = r$;
            },
            x: 0,
            y: columnY,
            get style() {
              return styles.Column;
            },
            zIndex: 5,
            get children() {
              return createComponent(Show, {
                get when() {
                  return memo(() => !!recommendations())() && credits();
                },
                get children() {
                  return [createComponent(Text, {
                    skipFocus: true,
                    get style() {
                      return styles.RowTitle;
                    },
                    children: "Recommendations"
                  }), createComponent(TileRow, {
                    onFocus: onRowFocus,
                    onEnter,
                    get items() {
                      return recommendations();
                    },
                    width: 1620
                  }), createComponent(Text, {
                    skipFocus: true,
                    get style() {
                      return styles.RowTitle;
                    },
                    children: "Cast and Crew"
                  }), createComponent(TileRow, {
                    onFocus: onRowFocusAnimate,
                    onEnter,
                    get items() {
                      return credits();
                    },
                    width: 1620
                  })];
                }
              });
            }
          }), createComponent(View, {
            ref(r$) {
              var _ref$3 = backdropRef;
              typeof _ref$3 === "function" ? _ref$3(r$) : backdropRef = r$;
            },
            style: Backdrop,
            transition: {
              alpha: true,
              y: true
            }
          })];
        }
      }), createComponent(View, {
        get alpha() {
          return backdropAlpha();
        },
        get color() {
          return hexColor("#000000");
        },
        zIndex: 200,
        transition: {
          alpha: true
        }
      })];
    }
  });
};
function getCredits({ id }) {
  return api.get("/person/".concat(id, "/combined_credits")).then(({ cast }) => convertItemsToTiles(cast.slice(0, 7)));
}
function getInfo({ id }) {
  return api.get("/person/".concat(id)).then((data) => ({
    backgroundImage: getImageUrl(data.profile_path, "original"),
    heroContent: {
      title: data.title || data.name,
      description: data.biography
    },
    ...data
  }));
}
const People = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data] = createResource(() => ({
    ...params
  }), getInfo);
  const [credits] = createResource(() => ({
    ...params
  }), getCredits);
  const Backdrop = {
    color: hexColor("#000000"),
    alpha: 0.8,
    width: 800,
    height: 440,
    x: 130,
    y: 180,
    borderRadius: 30
  };
  function onEnter() {
    let entity = this.children.selected;
    assertTruthy(entity && entity.href);
    navigate(entity.href);
  }
  onMount(() => {
    setGlobalBackground("#333333");
  });
  return createComponent(Show, {
    get when() {
      return data();
    },
    keyed: true,
    get children() {
      return [createComponent(View, {
        get src() {
          return data().backgroundImage;
        },
        width: 400,
        autosize: true,
        y: 0,
        x: 1800,
        mountX: 1
      }), createComponent(View, {
        x: 150,
        y: 200,
        width: 800,
        gap: 24,
        get style() {
          return styles.Column;
        },
        zIndex: 3,
        get children() {
          return [createComponent(Text, {
            contain: "width",
            fontFamily: "Ubuntu",
            get style() {
              return theme.typography.display2;
            },
            get children() {
              return data().name;
            }
          }), createComponent(Text, {
            contain: "both",
            get style() {
              return styles.peopleBio;
            },
            get children() {
              return data().biography;
            }
          })];
        }
      }), createComponent(View, {
        style: Backdrop
      }), createComponent(Column, {
        y: 670,
        x: 140,
        get style() {
          return styles.Column;
        },
        scroll: "none",
        get children() {
          return createComponent(Show, {
            get when() {
              return credits();
            },
            get children() {
              return [createComponent(Text, {
                skipFocus: true,
                get style() {
                  return styles.RowTitle;
                },
                children: "Credits"
              }), createComponent(TileRow, {
                autofocus: true,
                onEnter,
                get items() {
                  return credits();
                }
              })];
            }
          });
        }
      })];
    }
  });
};
const NotFound = () => {
  return (() => {
    var _el$ = createElement("node");
    setProp(_el$, "style", {
      width: 1920,
      height: 1080,
      color: 868483072
    });
    return _el$;
  })();
};
const coreExtensionModuleUrl = new URL("AppCoreExtensions-C8PFmbSm.js", import.meta.url).href;
config.debug = false;
config.animationsEnabled = true;
config.fontSettings.fontFamily = "Ubuntu";
config.fontSettings.color = hexColor("#f6f6f6");
config.fontSettings.fontSize = 32;
config.rendererOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  fpsUpdateInterval: 200,
  enableInspector: true
  // deviceLogicalPixelRatio: 1
};
render(() => createComponent(HashRouter, {
  root: (props) => createComponent(App, props),
  get children() {
    return [createComponent(Route, {
      path: "",
      component: Browse
    }), createComponent(Route, {
      path: "examples",
      component: Portal
    }), createComponent(Route, {
      path: "browse/:filter",
      component: Browse
    }), createComponent(Route, {
      path: "text",
      component: TextPage
    }), createComponent(Route, {
      path: "buttons",
      component: ButtonsPage
    }), createComponent(Route, {
      path: "flex",
      component: FlexPage
    }), createComponent(Route, {
      path: "create",
      component: CreatePage
    }), createComponent(Route, {
      path: "viewport",
      component: ViewportPage
    }), createComponent(Route, {
      path: "flexsize",
      component: FlexSizePage
    }), createComponent(Route, {
      path: "flexcolumnsize",
      component: FlexColumnPage$1
    }), createComponent(Route, {
      path: "flexcolumn",
      component: FlexColumnPage
    }), createComponent(Route, {
      path: "buttonsmaterial",
      component: MaterialButtonsPage
    }), createComponent(Route, {
      path: "entity/people/:id",
      component: People
    }), createComponent(Route, {
      path: "entity/:type/:id",
      component: Entity
    }), createComponent(Route, {
      path: "*all",
      component: NotFound
    })];
  }
}));
export {
  __vite_legacy_guard
};
//# sourceMappingURL=index-CK5NAQdx.js.map
