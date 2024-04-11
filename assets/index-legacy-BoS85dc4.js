;
(function () {
  var _excluded = ["defaultTone"],
    _excluded2 = ["defaultTone"],
    _excluded3 = ["defaultTone"],
    _excluded4 = ["surfaceDefaultTone"],
    _excluded5 = ["defaultTone"],
    _excluded6 = ["defaultTone"],
    _excluded7 = ["defaultTone"],
    _excluded8 = ["defaultTone"],
    _excluded9 = ["defaultTone"],
    _excluded10 = ["defaultTone"],
    _excluded11 = ["defaultTone"],
    _excluded12 = ["defaultTone"],
    _excluded13 = ["defaultTone"],
    _excluded14 = ["defaultTone"],
    _excluded15 = ["defaultTone"],
    _excluded16 = ["defaultTone"],
    _excluded17 = ["defaultSurfaceTone"];
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  System.register(['./CoreExtension-legacy-BzZDDgL-.js'], function (exports, module) {
    'use strict';

    var assertTruthy, isProductionEnvironment, TrFontFace, getRgbaString, createBound, EventEmitter, getNormalizedRgbaComponents, intersectBound, intersectRect, getNormalizedAlphaComponent, mergeColorAlphaPremultiplied, WebGlCoreShader, memize, Texture, isBoundPositive, boundsOverlap, SdfTrFontFace, BufferCollection, convertBoundToRect, copyRect, WebGlCoreRenderOp, mergeColorAlpha, CoreExtension, getTimingFunction, mergeColorProgress, boundInsideBound, ColorTexture, SubTexture, RenderTexture, WebGlCoreRenderer;
    return {
      setters: [module => {
        assertTruthy = module.a;
        isProductionEnvironment = module.i;
        TrFontFace = module.T;
        getRgbaString = module.g;
        createBound = module.c;
        EventEmitter = module.E;
        getNormalizedRgbaComponents = module.b;
        intersectBound = module.d;
        intersectRect = module.e;
        getNormalizedAlphaComponent = module.f;
        mergeColorAlphaPremultiplied = module.m;
        WebGlCoreShader = module.W;
        memize = module.h;
        Texture = module.j;
        isBoundPositive = module.k;
        boundsOverlap = module.l;
        SdfTrFontFace = module.S;
        BufferCollection = module.B;
        convertBoundToRect = module.n;
        copyRect = module.o;
        WebGlCoreRenderOp = module.p;
        mergeColorAlpha = module.q;
        CoreExtension = module.C;
        getTimingFunction = module.r;
        mergeColorProgress = module.s;
        boundInsideBound = module.t;
        ColorTexture = module.u;
        SubTexture = module.v;
        RenderTexture = module.R;
        WebGlCoreRenderer = module.w;
      }],
      execute: function execute() {
        var _resolvedGlobal$docum, _LinearGradientEffect, _RadialGradientEffect;
        var _marked = /*#__PURE__*/_regeneratorRuntime().mark(getUnicodeCodepoints);
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "html, body, * { padding: 0; margin: 0 }\nvideo { position: absolute; top: 0; left: 0; z-index: 2; outline: none; }\n.center-element {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}";
        document.head.appendChild(__vite_style__);
        false && function polyfill() {
          var relList = document.createElement('link').relList;
          if (relList && relList.supports && relList.supports('modulepreload')) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(mutations => {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var mutation = _step2.value;
                if (mutation.type !== 'childList') {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var node = _step3.value;
                    if (node.tagName === 'LINK' && node.rel === 'modulepreload') processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            var fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === 'use-credentials') fetchOpts.credentials = 'include';else if (link.crossOrigin === 'anonymous') fetchOpts.credentials = 'omit';else fetchOpts.credentials = 'same-origin';
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep)
              // ep marker = processed
              return;
            link.ep = true;
            // prepopulate the load record
            var fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Texture Usage Tracker for Usage Based Texture Garbage Collection
         */
        class TextureUsageTracker {
          constructor(releaseCallback) {
            _defineProperty(this, "releaseCallback", void 0);
            this.releaseCallback = releaseCallback;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Usage-based Texture Garbage Collection Registry
         */
        class ManualCountTextureUsageTracker extends TextureUsageTracker {
          constructor(releaseCallback, options) {
            var _options$textureClean, _options$textureClean2;
            super(releaseCallback);
            _defineProperty(this, "textureMap", new Map());
            _defineProperty(this, "zeroReferenceTextureSet", new Set());
            _defineProperty(this, "options", void 0);
            this.options = {
              textureCleanupIntervalMs: (_options$textureClean = options.textureCleanupIntervalMs) !== null && _options$textureClean !== void 0 ? _options$textureClean : 10000,
              textureCleanupAgeThreadholdMs: (_options$textureClean2 = options.textureCleanupAgeThreadholdMs) !== null && _options$textureClean2 !== void 0 ? _options$textureClean2 : 60000
            };
            // Periodically check for textures that are no longer referenced by any
            // Nodes and notify RendererMain to release them.
            setInterval(() => {
              var now = Date.now();
              var thresholdMs = this.options.textureCleanupAgeThreadholdMs;
              var _iterator4 = _createForOfIteratorHelper(this.zeroReferenceTextureSet),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var textureRefInfo = _step4.value;
                  if (now - textureRefInfo.lastUpdate > thresholdMs) {
                    this.releaseCallback(textureRefInfo.id);
                    this.textureMap.delete(textureRefInfo.id);
                    this.zeroReferenceTextureSet.delete(textureRefInfo);
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }, this.options.textureCleanupIntervalMs);
          }
          registerTexture(texture) {
            var _texture$options;
            var textureId = (_texture$options = texture.options) === null || _texture$options === void 0 ? void 0 : _texture$options.id;
            assertTruthy(textureId, 'Texture must have an id to be registered');
            if (!this.textureMap.has(textureId)) {
              var textureRefInfo = {
                id: textureId,
                nodeRefCount: 0,
                lastUpdate: Date.now()
              };
              this.textureMap.set(textureId, textureRefInfo);
              this.zeroReferenceTextureSet.add(textureRefInfo);
            }
          }
          incrementTextureRefCount(texture) {
            var _texture$options2;
            var textureId = (_texture$options2 = texture.options) === null || _texture$options2 === void 0 ? void 0 : _texture$options2.id;
            assertTruthy(textureId, 'Texture must have an id to be registered');
            var textureRefInfo = this.textureMap.get(textureId);
            if (!textureRefInfo) {
              // Texture has not been registered yet, so register it now.
              // This may happen if the TextureRef was cleaned up from the registry
              // but was still alive in memory and eventually re-used.
              this.registerTexture(texture);
              textureRefInfo = this.textureMap.get(textureId);
            }
            assertTruthy(textureRefInfo, 'Texture must have been registered');
            if (texture.txType === 'SubTexture') {
              // If this is a SubTexture, then increment the reference count of the
              // parent texture as well.
              this.incrementTextureRefCount(texture.props.texture);
            }
            textureRefInfo.nodeRefCount++;
            textureRefInfo.lastUpdate = Date.now();
            if (this.zeroReferenceTextureSet.has(textureRefInfo)) {
              this.zeroReferenceTextureSet.delete(textureRefInfo);
            }
          }
          decrementTextureRefCount(texture) {
            var _texture$options3;
            var textureId = (_texture$options3 = texture.options) === null || _texture$options3 === void 0 ? void 0 : _texture$options3.id;
            assertTruthy(textureId, 'Texture must have an id to be registered');
            var textureRefInfo = this.textureMap.get(textureId);
            assertTruthy(textureRefInfo, 'Texture must have been registered');
            textureRefInfo.nodeRefCount--;
            textureRefInfo.lastUpdate = Date.now();
            if (textureRefInfo.nodeRefCount === 0) {
              this.zeroReferenceTextureSet.add(textureRefInfo);
            }
            if (texture.txType === 'SubTexture') {
              // If this is a SubTexture, then decrement the reference count of the
              // parent texture as well.
              this.decrementTextureRefCount(texture.props.texture);
            }
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class FinalizationRegistryTextureUsageTracker extends TextureUsageTracker {
          constructor(releaseCallback) {
            super(releaseCallback);
            _defineProperty(this, "registry", void 0);
            this.registry = new FinalizationRegistry(releaseCallback);
          }
          registerTexture(texture) {
            var _texture$options4, _texture$options5;
            assertTruthy((_texture$options4 = texture.options) === null || _texture$options4 === void 0 ? void 0 : _texture$options4.id, 'Texture must have an ID to be registered');
            this.registry.register(texture, (_texture$options5 = texture.options) === null || _texture$options5 === void 0 ? void 0 : _texture$options5.id);
          }
          incrementTextureRefCount() {
            // No-op for FinalizationRegistry
          }
          decrementTextureRefCount() {
            // No-op for FinalizationRegistry
          }
        }
        var stylePropertyMap = {
          alpha: v => {
            if (v === 1) {
              return null;
            }
            return {
              prop: 'opacity',
              value: `${v}`
            };
          },
          x: _x => {
            return {
              prop: 'left',
              value: `${_x}px`
            };
          },
          y: _y => {
            return {
              prop: 'top',
              value: `${_y}px`
            };
          },
          width: w => {
            if (w === 0) {
              return null;
            }
            return {
              prop: 'width',
              value: `${w}px`
            };
          },
          height: h => {
            if (h === 0) {
              return null;
            }
            return {
              prop: 'height',
              value: `${h}px`
            };
          },
          zIndex: () => 'zIndex',
          fontFamily: () => 'font-family',
          fontSize: () => 'font-size',
          fontStyle: () => 'font-style',
          fontWeight: () => 'font-weight',
          fontStretch: () => 'font-stretch',
          lineHeight: () => 'line-height',
          letterSpacing: () => 'letter-spacing',
          textAlign: () => 'text-align',
          overflowSuffix: () => 'overflow-suffix',
          maxLines: () => 'max-lines',
          contain: () => 'contain',
          verticalAlign: () => 'vertical-align',
          clipping: v => {
            if (v === false) {
              return null;
            }
            return {
              prop: 'overflow',
              value: v ? 'hidden' : 'visible'
            };
          },
          rotation: v => {
            if (v === 0) {
              return null;
            }
            return {
              prop: 'transform',
              value: `rotate(${v}rad)`
            };
          },
          scale: v => {
            if (v === 1) {
              return null;
            }
            return {
              prop: 'transform',
              value: `scale(${v})`
            };
          },
          scaleX: v => {
            if (v === 1) {
              return null;
            }
            return {
              prop: 'transform',
              value: `scaleX(${v})`
            };
          },
          scaleY: v => {
            if (v === 1) {
              return null;
            }
            return {
              prop: 'transform',
              value: `scaleY(${v})`
            };
          },
          color: v => {
            if (v === 0) {
              return null;
            }
            return {
              prop: 'color',
              value: convertColorToRgba(v)
            };
          }
        };
        var convertColorToRgba = color => {
          var a = (color & 0xff) / 255;
          var b = color >> 8 & 0xff;
          var g = color >> 16 & 0xff;
          var r = color >> 24 & 0xff;
          return `rgba(${r},${g},${b},${a})`;
        };
        var domPropertyMap = {
          id: 'id'
        };
        class Inspector {
          constructor(canvas, settings) {
            var _settings$appHeight, _settings$deviceLogic, _settings$appWidth, _settings$deviceLogic2, _settings$deviceLogic3, _settings$deviceLogic4;
            _defineProperty(this, "root", null);
            _defineProperty(this, "canvas", null);
            _defineProperty(this, "height", 1080);
            _defineProperty(this, "width", 1920);
            _defineProperty(this, "scaleX", 1);
            _defineProperty(this, "scaleY", 1);
            if (isProductionEnvironment()) return;
            if (!settings) {
              throw new Error('settings is required');
            }
            // calc dimensions based on the devicePixelRatio
            this.height = Math.ceil((_settings$appHeight = settings.appHeight) !== null && _settings$appHeight !== void 0 ? _settings$appHeight : 1080 / ((_settings$deviceLogic = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic !== void 0 ? _settings$deviceLogic : 1));
            this.width = Math.ceil((_settings$appWidth = settings.appWidth) !== null && _settings$appWidth !== void 0 ? _settings$appWidth : 1900 / ((_settings$deviceLogic2 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic2 !== void 0 ? _settings$deviceLogic2 : 1));
            this.scaleX = (_settings$deviceLogic3 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic3 !== void 0 ? _settings$deviceLogic3 : 1;
            this.scaleY = (_settings$deviceLogic4 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic4 !== void 0 ? _settings$deviceLogic4 : 1;
            this.canvas = canvas;
            this.root = document.createElement('div');
            this.setRootPosition();
            document.body.appendChild(this.root);
            //listen for changes on canvas
            var mutationObserver = new MutationObserver(this.setRootPosition.bind(this));
            mutationObserver.observe(canvas, {
              attributes: true,
              childList: false,
              subtree: false
            });
            // Create a ResizeObserver to watch for changes in the element's size
            var resizeObserver = new ResizeObserver(this.setRootPosition.bind(this));
            resizeObserver.observe(canvas);
            //listen for changes on window
            window.addEventListener('resize', this.setRootPosition.bind(this));
            console.warn('Inspector is enabled, this will impact performance');
          }
          setRootPosition() {
            if (this.root === null || this.canvas === null) {
              return;
            }
            // get the world position of the canvas object, so we can match the inspector to it
            var rect = this.canvas.getBoundingClientRect();
            var top = document.documentElement.scrollTop + rect.top;
            var left = document.documentElement.scrollLeft + rect.left;
            this.root.id = 'root';
            this.root.style.left = `${left}px`;
            this.root.style.top = `${top}px`;
            this.root.style.width = `${this.width}px`;
            this.root.style.height = `${this.height}px`;
            this.root.style.position = 'absolute';
            this.root.style.transformOrigin = '0 0 0';
            this.root.style.transform = `scale(${this.scaleX}, ${this.scaleY})`;
            this.root.style.overflow = 'hidden';
            this.root.style.zIndex = '65534';
          }
          createDiv(node, properties) {
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.id = node.id.toString();
            // set initial properties
            for (var _key2 in properties) {
              this.updateNodeProperty(div,
              // really typescript? really?
              _key2, properties[_key2]);
            }
            return div;
          }
          createNode(driver, properties) {
            var node = driver.createNode(properties);
            var div = this.createDiv(node, properties);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            div.node = node;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            node.div = div;
            return this.createProxy(node, div);
          }
          createTextNode(driver, properties) {
            var node = driver.createTextNode(properties);
            var div = this.createDiv(node, properties);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            div.node = node;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
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
                if (property === 'destroy') {
                  this.destroyNode(target);
                }
                if (property === 'animate') {
                  return (props, settings) => {
                    var anim = target.animate(props, settings);
                    // Trap the animate start function so we can update the inspector accordingly
                    return new Proxy(anim, {
                      get: (target, property, receiver) => {
                        if (property === 'start') {
                          this.animateNode(div, node, props, settings);
                        }
                        return Reflect.get(target, property, receiver);
                      }
                    });
                  };
                }
                return Reflect.get(target, property, receiver);
              }
            });
          }
          destroyNode(node) {
            var div = document.getElementById(node.id.toString());
            div === null || div === void 0 || div.remove();
          }
          updateNodeProperty(div, property,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value) {
            if (this.root === null || value === undefined || value === null) {
              return;
            }
            /**
             * Special case for parent property
             */
            if (property === 'parent') {
              var parentId = value.id;
              // only way to detect if the parent is the root node
              // if you are reading this and have a better way, please let me know
              if (parentId === 1) {
                this.root.appendChild(div);
                return;
              }
              var parent = document.getElementById(parentId.toString());
              parent === null || parent === void 0 || parent.appendChild(div);
              return;
            }
            // special case for text
            if (property === 'text') {
              div.innerHTML = String(value);
              // hide text because we can't render SDF fonts
              // it would look weird and obstruct the WebGL rendering
              div.style.visibility = 'hidden';
              return;
            }
            // special case for images
            // we're not setting any CSS properties to avoid images getting loaded twice
            // as the renderer will handle the loading of the image. Setting it to `data-src`
            if (property === 'src' && value) {
              div.setAttribute(`data-src`, String(value));
              return;
            }
            // special case for color gradients (normal colors are handled by the stylePropertyMap)
            // FIXME the renderer seems to return the same number for all colors
            // if (gradientColorPropertyMap.includes(property as string)) {
            //   const color = convertColorToRgba(value as number);
            //   div.setAttribute(`data-${property}`, color);
            //   return;
            // }
            // CSS mappable attribute
            if (stylePropertyMap[property]) {
              var _stylePropertyMap$pro;
              var mappedStyleResponse = (_stylePropertyMap$pro = stylePropertyMap[property]) === null || _stylePropertyMap$pro === void 0 ? void 0 : _stylePropertyMap$pro.call(stylePropertyMap, value);
              if (mappedStyleResponse === null) {
                return;
              }
              if (typeof mappedStyleResponse === 'string') {
                div.style.setProperty(mappedStyleResponse, String(value));
                return;
              }
              if (typeof mappedStyleResponse === 'object') {
                div.style.setProperty(mappedStyleResponse.prop, mappedStyleResponse.value);
              }
              return;
            }
            // DOM properties
            if (domPropertyMap[property]) {
              div.setAttribute(String(stylePropertyMap[property]), String(value));
              return;
            }
            // custom data properties
            if (property === 'data') {
              for (var _key3 in value) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                div.setAttribute(`data-${_key3}`, String(value[_key3]));
              }
              return;
            }
          }
          // simple animation handler
          animateNode(div, node, props, settings) {
            var _settings$duration = settings.duration,
              duration = _settings$duration === void 0 ? 1000 : _settings$duration,
              _settings$delay = settings.delay,
              delay = _settings$delay === void 0 ? 0 : _settings$delay;
            var x = props.x,
              y = props.y,
              width = props.width,
              height = props.height,
              _props$alpha = props.alpha,
              alpha = _props$alpha === void 0 ? 1 : _props$alpha,
              _props$rotation = props.rotation,
              rotation = _props$rotation === void 0 ? 0 : _props$rotation,
              _props$scale = props.scale,
              scale = _props$scale === void 0 ? 1 : _props$scale,
              color = props.color;
            // ignoring loops and repeats for now, as that might be a bit too much for the inspector
            function animate() {
              setTimeout(() => {
                div.style.top = `${y}px`;
                div.style.left = `${x}px`;
                div.style.width = `${width}px`;
                div.style.height = `${height}px`;
                div.style.opacity = `${alpha}`;
                div.style.rotate = `${rotation}rad`;
                div.style.scale = `${scale}`;
                div.style.color = convertColorToRgba(color);
              }, duration);
            }
            setTimeout(animate, delay);
          }
        }
        var scriptRel = 'modulepreload';
        var assetsURL = function assetsURL(dep) {
          return "/solid-demo-app/" + dep;
        };
        var seen = {};
        var __vitePreload = function preload(baseModule, deps, importerUrl) {
          var promise = Promise.resolve();
          // @ts-expect-error false will be replaced with boolean later
          if (false && deps && deps.length > 0) {
            var links = document.getElementsByTagName('link');
            var cspNonceMeta = document.querySelector('meta[property=csp-nonce]');
            // `.nonce` should be used to get along with nonce hiding (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce#accessing_nonces_and_nonce_hiding)
            // Firefox 67-74 uses modern chunks and supports CSP nonce, but does not support `.nonce`
            // in that case fallback to getAttribute
            var cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute('nonce'));
            promise = Promise.all(deps.map(dep => {
              // @ts-expect-error assetsURL is declared before preload.toString()
              dep = assetsURL(dep);
              if (dep in seen) return;
              seen[dep] = true;
              var isCss = dep.endsWith('.css');
              var cssSelector = isCss ? '[rel="stylesheet"]' : '';
              var isBaseRelative = !!importerUrl;
              // check if the file is already preloaded by SSR markup
              if (isBaseRelative) {
                // When isBaseRelative is true then we have `importerUrl` and `dep` is
                // already converted to an absolute URL by the `assetsURL` function
                for (var i = links.length - 1; i >= 0; i--) {
                  var _link = links[i];
                  // The `links[i].href` is an absolute URL thanks to browser doing the work
                  // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                  if (_link.href === dep && (!isCss || _link.rel === 'stylesheet')) {
                    return;
                  }
                }
              } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
              }
              var link = document.createElement('link');
              link.rel = isCss ? 'stylesheet' : scriptRel;
              if (!isCss) {
                link.as = 'script';
                link.crossOrigin = '';
              }
              link.href = dep;
              if (cspNonce) {
                link.setAttribute('nonce', cspNonce);
              }
              document.head.appendChild(link);
              if (isCss) {
                return new Promise((res, rej) => {
                  link.addEventListener('load', res);
                  link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
                });
              }
            }));
          }
          return promise.then(() => baseModule()).catch(err => {
            var e = new Event('vite:preloadError', {
              cancelable: true
            });
            // @ts-expect-error custom payload
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
              throw err;
            }
          });
        };
        class ShaderEffect {
          static getEffectKey(props) {
            return '';
          }
          static getMethodParameters(uniforms, props) {
            var res = [];
            for (var u in uniforms) {
              var uni = uniforms[u];
              var define = '';
              if (uni.size) {
                define = `[${uni.size(props)}]`;
              }
              res.push(`${uni.type} ${u}${define}`);
            }
            return res.join(',');
          }
          constructor(options) {
            _defineProperty(this, "priority", 1);
            _defineProperty(this, "name", '');
            _defineProperty(this, "ref", void 0);
            _defineProperty(this, "target", void 0);
            _defineProperty(this, "passParameters", '');
            _defineProperty(this, "declaredUniforms", '');
            _defineProperty(this, "uniformInfo", {});
            var ref = options.ref,
              target = options.target,
              _options$props = options.props,
              props = _options$props === void 0 ? {} : _options$props;
            this.ref = ref;
            this.target = target;
            var uniformInfo = {};
            var passParameters = [];
            var declaredUniforms = '';
            var uniforms = this.constructor.uniforms || {};
            for (var u in uniforms) {
              var unif = uniforms[u];
              var uniType = unif.type;
              //make unique uniform name
              var uniformName = `${ref}_${u}`;
              var define = '';
              if (unif.size) {
                define = `[${unif.size(props)}]`;
              }
              passParameters.push(uniformName);
              declaredUniforms += `uniform ${uniType} ${uniformName}${define};`;
              uniformInfo[u] = {
                name: uniformName,
                uniform: uniforms[u].method
              };
            }
            this.passParameters = passParameters.join(',');
            this.declaredUniforms = declaredUniforms;
            this.uniformInfo = uniformInfo;
          }
          static resolveDefaults(props) {
            return {};
          }
          static makeEffectKey(props) {
            return false;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        _defineProperty(ShaderEffect, "uniforms", {});
        _defineProperty(ShaderEffect, "methods", void 0);
        _defineProperty(ShaderEffect, "onShaderMask", void 0);
        _defineProperty(ShaderEffect, "onColorize", void 0);
        _defineProperty(ShaderEffect, "onEffectMask", void 0);
        var trPropSetterDefaults = {
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
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "set", void 0);
            this.stage = stage;
            var propSetters = _objectSpread(_objectSpread({}, trPropSetterDefaults), this.getPropertySetters());
            // For each prop setter add a wrapper method that checks if the prop is
            // different before calling the setter
            this.set = Object.freeze(Object.fromEntries(Object.entries(propSetters).map(([key, setter]) => {
              return [key, (state, value) => {
                if (state.props[key] !== value) {
                  setter(state, value);
                  // Assume any prop change will require a render
                  // This is required because otherwise a paused RAF will result
                  // in renders when text props are changed.
                  this.stage.requestRender();
                }
              }];
            })));
          }
          setStatus(state, status, error) {
            // Don't emit the same status twice
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
            var stateEvents = ['loading', 'loaded', 'failed'];
            // Remove the old event listeners from previous state obj there was one
            stateEvents.forEach(eventName => {
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class WebTrFontFace extends TrFontFace {
          constructor(fontFamily, descriptors, fontUrl) {
            super(fontFamily, descriptors);
            // Filter out parentheses from fontUrl
            _defineProperty(this, "fontFace", void 0);
            _defineProperty(this, "fontUrl", void 0);
            var fontUrlWithoutParentheses = fontUrl.replace(/\(|\)/g, '');
            // Defaults for descriptors resolved in the super constructor
            var determinedDescriptors = this.descriptors;
            // Convert TrFontFaceDescriptors to CSS FontFaceDescriptors
            var cssDescriptors = {
              style: determinedDescriptors.style,
              weight: typeof determinedDescriptors.weight === 'number' ? `${determinedDescriptors.weight}` : determinedDescriptors.weight,
              stretch: determinedDescriptors.stretch,
              unicodeRange: determinedDescriptors.unicodeRange,
              variant: determinedDescriptors.variant,
              featureSettings: determinedDescriptors.featureSettings,
              display: determinedDescriptors.display
            };
            var fontFace = new FontFace(fontFamily, `url(${fontUrlWithoutParentheses})`, cssDescriptors);
            fontFace.load().then(() => {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
              this.loaded = true;
              this.emit('loaded');
            }).catch(console.error);
            this.fontFace = fontFace;
            this.fontUrl = fontUrl;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        var MAX_TEXTURE_DIMENSION = 2048;
        /**
         * Calculate height for the canvas
         *
         * @param textBaseline
         * @param fontSize
         * @param lineHeight
         * @param numLines
         * @param offsetY
         * @returns
         */
        function calcHeight(textBaseline, fontSize, lineHeight, numLines, offsetY) {
          var baselineOffset = textBaseline !== 'bottom' ? 0.5 * fontSize : 0;
          return lineHeight * (numLines - 1) + baselineOffset + Math.max(lineHeight, fontSize) + (offsetY || 0);
        }
        class LightningTextTextureRenderer {
          constructor(canvas, context) {
            _defineProperty(this, "_canvas", void 0);
            _defineProperty(this, "_context", void 0);
            _defineProperty(this, "_settings", void 0);
            _defineProperty(this, "renderInfo", void 0);
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
            var ff = [this._settings.fontFace];
            var ffs = [];
            for (var i = 0, n = ff.length; i < n; i++) {
              if (ff[i] === 'serif' || ff[i] === 'sans-serif') {
                ffs.push(ff[i]);
              } else {
                ffs.push(`"${ff[i]}"`);
              }
            }
            return `${this._settings.fontStyle} ${this._settings.fontSize * this.getPrecision()}px ${ffs.join(',')}`;
          }
          _load() {
            if (document.fonts) {
              var fontSetting = this._getFontSetting();
              try {
                if (!document.fonts.check(fontSetting, this._settings.text)) {
                  // Use a promise that waits for loading.
                  return document.fonts.load(fontSetting, this._settings.text).catch(err => {
                    // Just load the fallback font.
                    console.warn('[Lightning] Font load error', err, fontSetting);
                  }).then(() => {
                    if (!document.fonts.check(fontSetting, this._settings.text)) {
                      console.warn('[Lightning] Font not found', fontSetting);
                    }
                  });
                }
              } catch (e) {
                console.warn("[Lightning] Can't check font loading for " + fontSetting);
              }
            }
          }
          calculateRenderInfo() {
            var renderInfo = {};
            var precision = this.getPrecision();
            var paddingLeft = this._settings.paddingLeft * precision;
            var paddingRight = this._settings.paddingRight * precision;
            var fontSize = this._settings.fontSize * precision;
            var offsetY = this._settings.offsetY === null ? null : this._settings.offsetY * precision;
            var lineHeight = (this._settings.lineHeight || fontSize) * precision;
            var w = this._settings.w * precision;
            var h = this._settings.h * precision;
            var wordWrapWidth = this._settings.wordWrapWidth * precision;
            var cutSx = this._settings.cutSx * precision;
            var cutEx = this._settings.cutEx * precision;
            var cutSy = this._settings.cutSy * precision;
            var cutEy = this._settings.cutEy * precision;
            var letterSpacing = (this._settings.letterSpacing || 0) * precision;
            var textIndent = this._settings.textIndent * precision;
            // Set font properties.
            this.setFontProperties();
            // Total width.
            var width = w || 2048 / this.getPrecision();
            // Inner width.
            var innerWidth = width - paddingLeft;
            if (innerWidth < 10) {
              width += 10 - innerWidth;
              innerWidth = 10;
            }
            if (!wordWrapWidth) {
              wordWrapWidth = innerWidth;
            }
            // Text overflow
            if (this._settings.textOverflow && !this._settings.wordWrap) {
              var suffix;
              switch (this._settings.textOverflow) {
                case 'clip':
                  suffix = '';
                  break;
                case 'ellipsis':
                  suffix = this._settings.overflowSuffix;
                  break;
                default:
                  suffix = this._settings.textOverflow;
              }
              this._settings.text = this.wrapWord(this._settings.text, wordWrapWidth - textIndent, suffix);
            }
            // word wrap
            // preserve original text
            var linesInfo;
            if (this._settings.wordWrap) {
              linesInfo = this.wrapText(this._settings.text, wordWrapWidth, letterSpacing, textIndent);
            } else {
              linesInfo = {
                l: this._settings.text.split(/(?:\r\n|\r|\n)/),
                n: []
              };
              var n = linesInfo.l.length;
              for (var i = 0; i < n - 1; i++) {
                linesInfo.n.push(i);
              }
            }
            var lines = linesInfo.l;
            if (this._settings.maxLines && lines.length > this._settings.maxLines) {
              var usedLines = lines.slice(0, this._settings.maxLines);
              var otherLines = null;
              if (this._settings.overflowSuffix) {
                // Wrap again with max lines suffix enabled.
                var _w = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0;
                var al = this.wrapText(usedLines[usedLines.length - 1], wordWrapWidth - _w, letterSpacing, textIndent);
                usedLines[usedLines.length - 1] = `${al.l[0]}${this._settings.overflowSuffix}`;
                otherLines = [al.l.length > 1 ? al.l[1] : ''];
              } else {
                otherLines = [''];
              }
              // Re-assemble the remaining text.
              var _i2;
              var _n2 = lines.length;
              var j = 0;
              var m = linesInfo.n.length;
              for (_i2 = this._settings.maxLines; _i2 < _n2; _i2++) {
                otherLines[j] += `${otherLines[j] ? ' ' : ''}${lines[_i2]}`;
                if (_i2 + 1 < m && linesInfo.n[_i2 + 1]) {
                  j++;
                }
              }
              renderInfo.remainingText = otherLines.join('\n');
              renderInfo.moreTextLines = true;
              lines = usedLines;
            } else {
              renderInfo.moreTextLines = false;
              renderInfo.remainingText = '';
            }
            // calculate text width
            var maxLineWidth = 0;
            var lineWidths = [];
            for (var _i3 = 0; _i3 < lines.length; _i3++) {
              var lineWidth = this.measureText(lines[_i3], letterSpacing) + (_i3 === 0 ? textIndent : 0);
              lineWidths.push(lineWidth);
              maxLineWidth = Math.max(maxLineWidth, lineWidth);
            }
            renderInfo.lineWidths = lineWidths;
            if (!w) {
              // Auto-set width to max text length.
              width = maxLineWidth + paddingLeft + paddingRight;
              innerWidth = maxLineWidth;
            }
            // calculate text height
            lineHeight = lineHeight || fontSize;
            var height;
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
              // To prevent canvas errors.
              width = 1;
            }
            if (!height) {
              // To prevent canvas errors.
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
            var precision = this.getPrecision();
            // Allow lines to be overriden for partial rendering.
            var lines = (linesOverride === null || linesOverride === void 0 ? void 0 : linesOverride.lines) || renderInfo.lines;
            var lineWidths = (linesOverride === null || linesOverride === void 0 ? void 0 : linesOverride.lineWidths) || renderInfo.lineWidths;
            var height = linesOverride ? calcHeight(this._settings.textBaseline, renderInfo.fontSize, renderInfo.lineHeight, linesOverride.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * precision) : renderInfo.height;
            // Add extra margin to prevent issue with clipped text when scaling.
            this._canvas.width = Math.min(Math.ceil(renderInfo.width + this._settings.textRenderIssueMargin), MAX_TEXTURE_DIMENSION);
            this._canvas.height = Math.min(Math.ceil(height), MAX_TEXTURE_DIMENSION);
            // Canvas context has been reset.
            this.setFontProperties();
            if (renderInfo.fontSize >= 128) {
              // WpeWebKit bug: must force compositing because cairo-traps-compositor will not work with text first.
              this._context.globalAlpha = 0.01;
              this._context.fillRect(0, 0, 0.01, 0.01);
              this._context.globalAlpha = 1.0;
            }
            if (renderInfo.cutSx || renderInfo.cutSy) {
              this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
            }
            var linePositionX;
            var linePositionY;
            var drawLines = [];
            // Draw lines line by line.
            for (var i = 0, n = lines.length; i < n; i++) {
              linePositionX = i === 0 ? renderInfo.textIndent : 0;
              // By default, text is aligned to top
              linePositionY = i * renderInfo.lineHeight + renderInfo.offsetY;
              if (this._settings.verticalAlign == 'middle') {
                linePositionY += (renderInfo.lineHeight - renderInfo.fontSize) / 2;
              } else if (this._settings.verticalAlign == 'bottom') {
                linePositionY += renderInfo.lineHeight - renderInfo.fontSize;
              }
              if (this._settings.textAlign === 'right') {
                linePositionX += renderInfo.innerWidth - lineWidths[i];
              } else if (this._settings.textAlign === 'center') {
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
            // Highlight.
            if (this._settings.highlight) {
              var color = this._settings.highlightColor;
              var hlHeight = this._settings.highlightHeight * precision || renderInfo.fontSize * 1.5;
              var offset = this._settings.highlightOffset * precision;
              var hlPaddingLeft = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * precision : renderInfo.paddingLeft;
              var hlPaddingRight = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * precision : renderInfo.paddingRight;
              this._context.fillStyle = getRgbaString(color);
              for (var _i4 = 0; _i4 < drawLines.length; _i4++) {
                var drawLine = drawLines[_i4];
                this._context.fillRect(drawLine.x - hlPaddingLeft, drawLine.y - renderInfo.offsetY + offset, drawLine.w + hlPaddingRight + hlPaddingLeft, hlHeight);
              }
            }
            // Text shadow.
            var prevShadowSettings = null;
            if (this._settings.shadow) {
              prevShadowSettings = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur];
              this._context.shadowColor = getRgbaString(this._settings.shadowColor);
              this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
              this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
              this._context.shadowBlur = this._settings.shadowBlur * precision;
            }
            this._context.fillStyle = getRgbaString(this._settings.textColor);
            for (var _i5 = 0, _n3 = drawLines.length; _i5 < _n3; _i5++) {
              var _drawLine = drawLines[_i5];
              if (renderInfo.letterSpacing === 0) {
                this._context.fillText(_drawLine.text, _drawLine.x, _drawLine.y);
              } else {
                var textSplit = _drawLine.text.split('');
                var x = _drawLine.x;
                for (var _i6 = 0, j = textSplit.length; _i6 < j; _i6++) {
                  this._context.fillText(textSplit[_i6], x, _drawLine.y);
                  x += this.measureText(textSplit[_i6], renderInfo.letterSpacing);
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
            var suffixWidth = this._context.measureText(suffix).width;
            var wordLen = word.length;
            var wordWidth = this._context.measureText(word).width;
            /* If word fits wrapWidth, do nothing */
            if (wordWidth <= wordWrapWidth) {
              return word;
            }
            /* Make initial guess for text cuttoff */
            var cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
            var truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
            /* In case guess was overestimated, shrink it letter by letter. */
            if (truncWordWidth > wordWrapWidth) {
              while (cutoffIndex > 0) {
                truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
                if (truncWordWidth > wordWrapWidth) {
                  cutoffIndex -= 1;
                } else {
                  break;
                }
              }
              /* In case guess was underestimated, extend it letter by letter. */
            } else {
              while (cutoffIndex < wordLen) {
                truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
                if (truncWordWidth < wordWrapWidth) {
                  cutoffIndex += 1;
                } else {
                  // Finally, when bound is crossed, retract last letter.
                  cutoffIndex -= 1;
                  break;
                }
              }
            }
            /* If wrapWidth is too short to even contain suffix alone, return empty string */
            return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : '');
          }
          /**
           * Applies newlines to a string to have it optimally fit into the horizontal
           * bounds set by the Text object's wordWrapWidth property.
           */
          wrapText(text, wordWrapWidth, letterSpacing, indent = 0) {
            // Greedy wrapping algorithm that will wrap words as the line grows longer.
            // than its horizontal bounds.
            var lines = text.split(/\r?\n/g);
            var allLines = [];
            var realNewlines = [];
            for (var i = 0; i < lines.length; i++) {
              var resultLines = [];
              var result = '';
              var spaceLeft = wordWrapWidth - indent;
              var words = lines[i].split(' ');
              for (var j = 0; j < words.length; j++) {
                var wordWidth = this.measureText(words[j], letterSpacing);
                var wordWidthWithSpace = wordWidth + this.measureText(' ', letterSpacing);
                if (j === 0 || wordWidthWithSpace > spaceLeft) {
                  // Skip printing the newline if it's the first word of the line that is.
                  // greater than the word wrap width.
                  if (j > 0) {
                    resultLines.push(result);
                    result = '';
                  }
                  result += words[j];
                  spaceLeft = wordWrapWidth - wordWidth - (j === 0 ? indent : 0);
                } else {
                  spaceLeft -= wordWidthWithSpace;
                  result += ` ${words[j]}`;
                }
              }
              resultLines.push(result);
              result = '';
              allLines = allLines.concat(resultLines);
              if (i < lines.length - 1) {
                realNewlines.push(allLines.length);
              }
            }
            return {
              l: allLines,
              n: realNewlines
            };
          }
          measureText(word, space = 0) {
            if (!space) {
              return this._context.measureText(word).width;
            }
            return word.split('').reduce((acc, char) => {
              return acc + this._context.measureText(char).width + space;
            }, 0);
          }
          mergeDefaults(settings) {
            return _objectSpread({
              text: '',
              w: 0,
              h: 0,
              fontStyle: 'normal',
              fontSize: 40,
              fontFace: null,
              wordWrap: true,
              wordWrapWidth: 0,
              wordBreak: false,
              textOverflow: '',
              lineHeight: null,
              textBaseline: 'alphabetic',
              textAlign: 'left',
              verticalAlign: 'top',
              offsetY: null,
              maxLines: 0,
              overflowSuffix: '...',
              textColor: [1.0, 1.0, 1.0, 1.0],
              paddingLeft: 0,
              paddingRight: 0,
              shadow: false,
              shadowColor: [0.0, 0.0, 0.0, 1.0],
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              highlight: false,
              highlightHeight: 0,
              highlightColor: [0.0, 0.0, 0.0, 1.0],
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
              textRenderIssueMargin: 0
            }, settings);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var resolvedGlobal = typeof self === 'undefined' ? globalThis : self;
        /**
         * Global font set regardless of if run in the main thread or a web worker
         */
        var globalFontSet = ((_resolvedGlobal$docum = resolvedGlobal.document) === null || _resolvedGlobal$docum === void 0 ? void 0 : _resolvedGlobal$docum.fonts) || resolvedGlobal.fonts;
        function getFontCssString(props) {
          var fontFamily = props.fontFamily,
            fontStyle = props.fontStyle,
            fontWeight = props.fontWeight,
            fontStretch = props.fontStretch,
            fontSize = props.fontSize;
          return [fontStyle, fontWeight, fontStretch, `${fontSize}px`, fontFamily].join(' ');
        }
        /**
         * Ephemeral bounds object used for intersection calculations
         *
         * @remarks
         * Used to avoid creating a new object every time we need to intersect
         * element bounds.
         */
        var tmpElementBounds = createBound(0, 0, 0, 0);
        class CanvasTextRenderer extends TextRenderer {
          constructor(stage) {
            super(stage);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "context", void 0);
            _defineProperty(this, "rendererBounds", void 0);
            if (typeof OffscreenCanvas !== 'undefined') {
              this.canvas = new OffscreenCanvas(0, 0);
            } else {
              this.canvas = document.createElement('canvas');
            }
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            var context = this.canvas.getContext('2d');
            if (!context) {
              // A browser may appear to support OffscreenCanvas but not actually support the Canvas '2d' context
              // Here we try getting the context again after falling back to an HTMLCanvasElement.
              // See: https://github.com/lightning-js/renderer/issues/26#issuecomment-1750438486
              this.canvas = document.createElement('canvas');
              context = this.canvas.getContext('2d');
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
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontWeight: (state, value) => {
                state.props.fontWeight = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontStyle: (state, value) => {
                state.props.fontStyle = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontStretch: (state, value) => {
                state.props.fontStretch = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontSize: (state, value) => {
                state.props.fontSize = value;
                state.fontInfo = undefined;
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
                // Only invalidate layout cache if we're containing in the horizontal direction
                if (state.props.contain !== 'none') {
                  this.invalidateLayoutCache(state);
                }
              },
              height: (state, value) => {
                state.props.height = value;
                // Only invalidate layout cache if we're containing in the vertical direction
                if (state.props.contain === 'both') {
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
            // The canvas renderer can render any font because it automatically
            // falls back to system fonts. The CanvasTextRenderer should be
            // checked last if other renderers are preferred.
            return true;
          }
          isFontFaceSupported(fontFace) {
            return fontFace instanceof WebTrFontFace;
          }
          addFontFace(fontFace) {
            // Make sure the font face is an Canvas font face (it should have already passed
            // the `isFontFaceSupported` check)
            assertTruthy(fontFace instanceof WebTrFontFace);
            // We simply add the font face to the document
            // @ts-expect-error `add()` method should be available from a FontFaceSet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            globalFontSet.add(fontFace.fontFace);
          }
          createState(props) {
            return {
              props,
              status: 'initialState',
              updateScheduled: false,
              emitter: new EventEmitter(),
              canvasPages: undefined,
              lightning2TextRenderer: new LightningTextTextureRenderer(this.canvas, this.context),
              renderWindow: undefined,
              visibleWindow: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                valid: false
              },
              renderInfo: undefined,
              forceFullLayoutCalc: false,
              textW: 0,
              textH: 0,
              fontInfo: undefined,
              fontFaceLoadedHandler: undefined,
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
            // On the first update call we need to set the status to loading
            if (state.status === 'initialState') {
              this.setStatus(state, 'loading');
            }
            // If fontInfo is invalid, we need to establish it
            if (!state.fontInfo) {
              var cssString = getFontCssString(state.props);
              state.fontInfo = {
                cssString: cssString,
                // TODO: For efficiency we would use this here but it's not reliable on WPE -> document.fonts.check(cssString),
                loaded: false
              };
              // If font is not loaded, set up a handler to update the font info when the font loads
              if (!state.fontInfo.loaded) {
                globalFontSet.load(cssString).then(this.onFontLoaded.bind(this, state, cssString)).catch(this.onFontLoadError.bind(this, state, cssString));
                return;
              }
            }
            // If we're waiting for a font face to load, don't render anything
            if (!state.fontInfo.loaded) {
              return;
            }
            if (!state.renderInfo) {
              var maxLines = state.props.maxLines;
              var containedMaxLines = state.props.contain === 'both' ? Math.floor((state.props.height - state.props.offsetY) / state.props.lineHeight) : 0;
              var calcMaxLines = containedMaxLines > 0 && maxLines > 0 ? Math.min(containedMaxLines, maxLines) : Math.max(containedMaxLines, maxLines);
              state.lightning2TextRenderer.settings = {
                text: state.props.text,
                textAlign: state.props.textAlign,
                fontFace: state.props.fontFamily,
                fontSize: state.props.fontSize,
                fontStyle: [state.props.fontStretch, state.props.fontStyle, state.props.fontWeight].join(' '),
                textColor: getNormalizedRgbaComponents(state.props.color),
                offsetY: state.props.fontSize + state.props.offsetY,
                wordWrap: state.props.contain !== 'none',
                wordWrapWidth: state.props.contain === 'none' ? undefined : state.props.width,
                letterSpacing: state.props.letterSpacing,
                lineHeight: state.props.lineHeight,
                maxLines: calcMaxLines,
                textBaseline: state.props.textBaseline,
                verticalAlign: state.props.verticalAlign,
                overflowSuffix: state.props.overflowSuffix
              };
              // const renderInfoCalculateTime = performance.now();
              state.renderInfo = state.lightning2TextRenderer.calculateRenderInfo();
              // console.log(
              //   'Render info calculated in',
              //   performance.now() - renderInfoCalculateTime,
              //   'ms',
              // );
              state.textH = state.renderInfo.lineHeight * state.renderInfo.lines.length;
              state.textW = state.renderInfo.width;
              // Invalidate renderWindow because the renderInfo changed
              state.renderWindow = undefined;
            }
            var _state$props = state.props,
              x = _state$props.x,
              y = _state$props.y,
              width = _state$props.width,
              height = _state$props.height,
              scrollY = _state$props.scrollY,
              contain = _state$props.contain;
            var visibleWindow = state.visibleWindow;
            var renderWindow = state.renderWindow,
              canvasPages = state.canvasPages;
            if (!visibleWindow.valid) {
              // Figure out whats actually in the bounds of the renderer/canvas (visibleWindow)
              var elementBounds = createBound(x, y, contain !== 'none' ? x + width : Infinity, contain === 'both' ? y + height : Infinity, tmpElementBounds);
              /**
               * Area that is visible on the screen.
               */
              intersectBound(this.rendererBounds, elementBounds, visibleWindow);
              visibleWindow.valid = true;
            }
            var visibleWindowHeight = visibleWindow.y2 - visibleWindow.y1;
            var maxLinesPerCanvasPage = Math.ceil(visibleWindowHeight / state.renderInfo.lineHeight);
            if (visibleWindowHeight === 0) {
              // Nothing to render. Clear any canvasPages and existing renderWindow
              // Return early.
              canvasPages = undefined;
              renderWindow = undefined;
              this.setStatus(state, 'loaded');
              return;
            } else if (renderWindow && canvasPages) {
              // Return early if we're still viewing inside the established render window
              // No need to re-render what we've already rendered
              var renderWindowScreenX1 = x + renderWindow.x1;
              var renderWindowScreenY1 = y - scrollY + renderWindow.y1;
              var renderWindowScreenX2 = x + renderWindow.x2;
              var renderWindowScreenY2 = y - scrollY + renderWindow.y2;
              if (renderWindowScreenX1 <= visibleWindow.x1 && renderWindowScreenX2 >= visibleWindow.x2 && renderWindowScreenY1 <= visibleWindow.y1 && renderWindowScreenY2 >= visibleWindow.y2) {
                this.setStatus(state, 'loaded');
                return;
              }
              if (renderWindowScreenY2 < visibleWindow.y2) {
                // We've scrolled up, so we need to render the next page
                renderWindow.y1 += maxLinesPerCanvasPage * state.renderInfo.lineHeight;
                renderWindow.y2 += maxLinesPerCanvasPage * state.renderInfo.lineHeight;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                canvasPages.push(canvasPages.shift());
                canvasPages[2].lineNumStart = canvasPages[1].lineNumStart + maxLinesPerCanvasPage;
                canvasPages[2].lineNumEnd = canvasPages[2].lineNumStart + maxLinesPerCanvasPage;
                canvasPages[2].valid = false;
              } else if (renderWindowScreenY1 > visibleWindow.y1) {
                // We've scrolled down, so we need to render the previous page
                renderWindow.y1 -= maxLinesPerCanvasPage * state.renderInfo.lineHeight;
                renderWindow.y2 -= maxLinesPerCanvasPage * state.renderInfo.lineHeight;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                canvasPages.unshift(canvasPages.pop());
                canvasPages[0].lineNumStart = canvasPages[1].lineNumStart - maxLinesPerCanvasPage;
                canvasPages[0].lineNumEnd = canvasPages[0].lineNumStart + maxLinesPerCanvasPage;
                canvasPages[0].valid = false;
              }
            } else {
              var _canvasPages, _canvasPages2, _canvasPages3;
              var pageHeight = state.renderInfo.lineHeight * maxLinesPerCanvasPage;
              var page1Block = Math.ceil(scrollY / pageHeight);
              var page1LineStart = page1Block * maxLinesPerCanvasPage;
              var page0LineStart = page1LineStart - maxLinesPerCanvasPage;
              var page2LineStart = page1LineStart + maxLinesPerCanvasPage;
              // We haven't rendered anything yet, so we need to render the first page
              // If canvasPages already exist, let's re-use the textures
              canvasPages = [{
                texture: (_canvasPages = canvasPages) === null || _canvasPages === void 0 ? void 0 : _canvasPages[0].texture,
                lineNumStart: page0LineStart,
                lineNumEnd: page0LineStart + maxLinesPerCanvasPage,
                valid: false
              }, {
                texture: (_canvasPages2 = canvasPages) === null || _canvasPages2 === void 0 ? void 0 : _canvasPages2[1].texture,
                lineNumStart: page1LineStart,
                lineNumEnd: page1LineStart + maxLinesPerCanvasPage,
                valid: false
              }, {
                texture: (_canvasPages3 = canvasPages) === null || _canvasPages3 === void 0 ? void 0 : _canvasPages3[2].texture,
                lineNumStart: page2LineStart,
                lineNumEnd: page2LineStart + maxLinesPerCanvasPage,
                valid: false
              }];
              state.canvasPages = canvasPages;
              var scrollYNearestPage = page1Block * pageHeight;
              renderWindow = {
                x1: 0,
                y1: scrollYNearestPage - pageHeight,
                x2: width,
                y2: scrollYNearestPage + pageHeight * 2
              };
            }
            state.renderWindow = renderWindow;
            performance.now();
            var _iterator5 = _createForOfIteratorHelper(canvasPages),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var pageInfo = _step5.value;
                if (pageInfo.valid) continue;
                if (pageInfo.lineNumStart < 0) {
                  var _pageInfo$texture;
                  (_pageInfo$texture = pageInfo.texture) === null || _pageInfo$texture === void 0 || _pageInfo$texture.setRenderableOwner(state, false);
                  pageInfo.texture = this.stage.txManager.loadTexture('ImageTexture', {
                    src: ''
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
                  var _pageInfo$texture2;
                  (_pageInfo$texture2 = pageInfo.texture) === null || _pageInfo$texture2 === void 0 || _pageInfo$texture2.setRenderableOwner(state, false);
                  pageInfo.texture = this.stage.txManager.loadTexture('ImageTexture', {
                    src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
                  }, {
                    preload: true
                  });
                  pageInfo.texture.setRenderableOwner(state, state.isRenderable);
                }
                pageInfo.valid = true;
              }
              // console.log('pageDrawTime', performance.now() - pageDrawTime, 'ms');
              // Report final status
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            this.setStatus(state, 'loaded');
          }
          renderQuads(state, transform, clippingRect, alpha) {
            var stage = this.stage;
            var canvasPages = state.canvasPages,
              _state$textW = state.textW,
              textW = _state$textW === void 0 ? 0 : _state$textW,
              _state$textH = state.textH,
              textH = _state$textH === void 0 ? 0 : _state$textH,
              renderWindow = state.renderWindow;
            if (!canvasPages || !renderWindow) return;
            var _state$props2 = state.props,
              x = _state$props2.x,
              y = _state$props2.y,
              scrollY = _state$props2.scrollY,
              contain = _state$props2.contain,
              width = _state$props2.width,
              height = _state$props2.height;
            var elementRect = {
              x: x,
              y: y,
              width: contain !== 'none' ? width : textW,
              height: contain === 'both' ? height : textH
            };
            intersectRect({
              x: 0,
              y: 0,
              width: stage.options.appWidth,
              height: stage.options.appHeight
            }, elementRect);
            // if (!debug.disableScissor) {
            //   renderer.enableScissor(
            //     visibleRect.x,
            //     visibleRect.y,
            //     visibleRect.w,
            //     visibleRect.h,
            //   );
            // }
            assertTruthy(canvasPages, 'canvasPages is not defined');
            assertTruthy(renderWindow, 'renderWindow is not defined');
            var renderWindowHeight = renderWindow.y2 - renderWindow.y1;
            var pageSize = renderWindowHeight / 3.0;
            var _state$props3 = state.props,
              zIndex = _state$props3.zIndex,
              color = _state$props3.color;
            // Color alpha of text is not properly rendered to the Canvas texture, so we
            // need to apply it here.
            var combinedAlpha = alpha * getNormalizedAlphaComponent(color);
            var quadColor = mergeColorAlphaPremultiplied(0xffffffff, combinedAlpha);
            if (canvasPages[0].valid) {
              var _canvasPages$0$textur, _canvasPages$0$textur2;
              this.stage.renderer.addQuad({
                alpha: combinedAlpha,
                clippingRect,
                colorBl: quadColor,
                colorBr: quadColor,
                colorTl: quadColor,
                colorTr: quadColor,
                width: ((_canvasPages$0$textur = canvasPages[0].texture) === null || _canvasPages$0$textur === void 0 || (_canvasPages$0$textur = _canvasPages$0$textur.dimensions) === null || _canvasPages$0$textur === void 0 ? void 0 : _canvasPages$0$textur.width) || 0,
                height: ((_canvasPages$0$textur2 = canvasPages[0].texture) === null || _canvasPages$0$textur2 === void 0 || (_canvasPages$0$textur2 = _canvasPages$0$textur2.dimensions) === null || _canvasPages$0$textur2 === void 0 ? void 0 : _canvasPages$0$textur2.height) || 0,
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
              var _canvasPages$1$textur, _canvasPages$1$textur2;
              this.stage.renderer.addQuad({
                alpha: combinedAlpha,
                clippingRect,
                colorBl: quadColor,
                colorBr: quadColor,
                colorTl: quadColor,
                colorTr: quadColor,
                width: ((_canvasPages$1$textur = canvasPages[1].texture) === null || _canvasPages$1$textur === void 0 || (_canvasPages$1$textur = _canvasPages$1$textur.dimensions) === null || _canvasPages$1$textur === void 0 ? void 0 : _canvasPages$1$textur.width) || 0,
                height: ((_canvasPages$1$textur2 = canvasPages[1].texture) === null || _canvasPages$1$textur2 === void 0 || (_canvasPages$1$textur2 = _canvasPages$1$textur2.dimensions) === null || _canvasPages$1$textur2 === void 0 ? void 0 : _canvasPages$1$textur2.height) || 0,
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
              var _canvasPages$2$textur, _canvasPages$2$textur2;
              this.stage.renderer.addQuad({
                alpha: combinedAlpha,
                clippingRect,
                colorBl: quadColor,
                colorBr: quadColor,
                colorTl: quadColor,
                colorTr: quadColor,
                width: ((_canvasPages$2$textur = canvasPages[2].texture) === null || _canvasPages$2$textur === void 0 || (_canvasPages$2$textur = _canvasPages$2$textur.dimensions) === null || _canvasPages$2$textur === void 0 ? void 0 : _canvasPages$2$textur.width) || 0,
                height: ((_canvasPages$2$textur2 = canvasPages[2].texture) === null || _canvasPages$2$textur2 === void 0 || (_canvasPages$2$textur2 = _canvasPages$2$textur2.dimensions) === null || _canvasPages$2$textur2 === void 0 ? void 0 : _canvasPages$2$textur2.height) || 0,
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
            // renderer.disableScissor();
            // if (debug.showElementRect) {
            //   this.renderer.drawBorder(
            //     Colors.Blue,
            //     elementRect.x,
            //     elementRect.y,
            //     elementRect.w,
            //     elementRect.h,
            //   );
            // }
            // if (debug.showVisibleRect) {
            //   this.renderer.drawBorder(
            //     Colors.Green,
            //     visibleRect.x,
            //     visibleRect.y,
            //     visibleRect.w,
            //     visibleRect.h,
            //   );
            // }
            // if (debug.showRenderWindow && renderWindow) {
            //   this.renderer.drawBorder(
            //     Colors.Red,
            //     x + renderWindow.x1,
            //     y + renderWindow.y1 - scrollY,
            //     x + renderWindow.x2 - (x + renderWindow.x1),
            //     y + renderWindow.y2 - scrollY - (y + renderWindow.y1 - scrollY),
            //   );
            // }
          }
          setIsRenderable(state, renderable) {
            var _state$canvasPages;
            super.setIsRenderable(state, renderable);
            // Set state object owner from any canvas page textures
            (_state$canvasPages = state.canvasPages) === null || _state$canvasPages === void 0 || _state$canvasPages.forEach(pageInfo => {
              var _pageInfo$texture3;
              (_pageInfo$texture3 = pageInfo.texture) === null || _pageInfo$texture3 === void 0 || _pageInfo$texture3.setRenderableOwner(state, renderable);
            });
          }
          destroyState(state) {
            var _state$canvasPages2;
            // Remove state object owner from any canvas page textures
            (_state$canvasPages2 = state.canvasPages) === null || _state$canvasPages2 === void 0 || _state$canvasPages2.forEach(pageInfo => {
              var _pageInfo$texture4;
              (_pageInfo$texture4 = pageInfo.texture) === null || _pageInfo$texture4 === void 0 || _pageInfo$texture4.setRenderableOwner(state, false);
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
            this.setStatus(state, 'loading');
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
            state.renderInfo = undefined;
            state.visibleWindow.valid = false;
            this.setStatus(state, 'loading');
            this.scheduleUpdateState(state);
          }
          onFontLoaded(state, cssString) {
            var _state$fontInfo;
            if (cssString !== ((_state$fontInfo = state.fontInfo) === null || _state$fontInfo === void 0 ? void 0 : _state$fontInfo.cssString) || !state.fontInfo) {
              return;
            }
            state.fontInfo.loaded = true;
            this.scheduleUpdateState(state);
          }
          onFontLoadError(state, cssString, error) {
            var _state$fontInfo2;
            if (cssString !== ((_state$fontInfo2 = state.fontInfo) === null || _state$fontInfo2 === void 0 ? void 0 : _state$fontInfo2.cssString) || !state.fontInfo) {
              return;
            }
            // Font didn't actually load, but we'll log the error and mark it as loaded
            // because the browser can still render with a fallback font.
            state.fontInfo.loaded = true;
            console.error(`CanvasTextRenderer: Error loading font '${state.fontInfo.cssString}'`, error);
            this.scheduleUpdateState(state);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class DefaultShader extends WebGlCoreShader {
          constructor(renderer) {
            super({
              renderer,
              attributes: ['a_position', 'a_textureCoordinate', 'a_color'],
              uniforms: [{
                name: 'u_resolution',
                uniform: 'uniform2fv'
              }, {
                name: 'u_pixelRatio',
                uniform: 'uniform1f'
              }, {
                name: 'u_texture',
                uniform: 'uniform2fv'
              }]
            });
          }
          bindTextures(textures) {
            var glw = this.glw;
            glw.activeTexture(0);
            glw.bindTexture(textures[0].ctxTexture);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // import type { Texture } from '../textures/Texture';
        _defineProperty(DefaultShader, "shaderSources", {
          vertex: `
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;
      attribute vec4 a_color;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;


      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
        vec2 normalized = a_position * u_pixelRatio;
        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);

        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;

        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);
        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;
      }
    `,
          fragment: `
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform sampler2D u_texture;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
          vec4 color = texture2D(u_texture, v_textureCoordinate);
          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);
      }
    `
        });
        class DefaultShaderBatched extends WebGlCoreShader {
          constructor(renderer) {
            super({
              renderer,
              attributes: ['a_position', 'a_textureCoordinate', 'a_color', 'a_textureIndex'],
              uniforms: [{
                name: 'u_resolution',
                uniform: 'uniform2fv'
              }, {
                name: 'u_pixelRatio',
                uniform: 'uniform1f'
              }, {
                name: 'u_textures[0]',
                uniform: 'uniform1iv'
              }]
            });
            _defineProperty(this, "supportsIndexedTextures", true);
          }
          bindTextures(texture) {
            var renderer = this.renderer,
              glw = this.glw;
            if (texture.length > renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) {
              throw new Error(`DefaultShaderBatched: Cannot bind more than ${renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS} textures`);
            }
            texture.forEach((t, i) => {
              glw.activeTexture(i);
              glw.bindTexture(t.ctxTexture);
            });
            var samplers = Array.from(Array(texture.length).keys());
            this.setUniform('u_textures[0]', samplers);
          }
        }
        _defineProperty(DefaultShaderBatched, "shaderSources", {
          vertex: `
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_textureCoordinate;
      attribute vec2 a_position;
      attribute vec4 a_color;
      attribute float a_textureIndex;
      attribute float a_depth;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;
      varying float v_textureIndex;

      void main(){
        vec2 normalized = a_position * u_pixelRatio / u_resolution;
        vec2 zero_two = normalized * 2.0;
        vec2 clip_space = zero_two - 1.0;

        // pass to fragment
        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;
        v_textureIndex = a_textureIndex;

        // flip y
        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
      }
    `,
          fragment: textureUnits => `
      #define txUnits ${textureUnits}
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform sampler2D u_image;
      uniform sampler2D u_textures[txUnits];

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;
      varying float v_textureIndex;

      vec4 sampleFromTexture(sampler2D textures[${textureUnits}], int idx, vec2 uv) {
        ${Array.from(Array(textureUnits).keys()).map(idx => `
          ${idx !== 0 ? 'else ' : ''}if (idx == ${idx}) {
            return texture2D(textures[${idx}], uv);
          }
        `).join('')}
        return texture2D(textures[0], uv);
      }

      void main(){
        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);
      }
    `
        });
        var effectCache = new Map();
        var getResolvedEffect = (effects, effectContructors) => {
          var key = JSON.stringify(effects);
          if (effectCache.has(key)) {
            return effectCache.get(key);
          }
          var value = (effects !== null && effects !== void 0 ? effects : []).map(effect => ({
            type: effect.type,
            props: effectContructors[effect.type].resolveDefaults(effect.props || {})
          }));
          effectCache.set(key, value);
          return value;
        };
        class DynamicShader extends WebGlCoreShader {
          constructor(renderer, props, effectContructors) {
            var shader = DynamicShader.createShader(props, effectContructors);
            super({
              renderer,
              attributes: ['a_position', 'a_textureCoordinate', 'a_color'],
              uniforms: [{
                name: 'u_resolution',
                uniform: 'uniform2fv'
              }, {
                name: 'u_pixelRatio',
                uniform: 'uniform1f'
              }, {
                name: 'u_texture',
                uniform: 'uniform2fv'
              }, {
                name: 'u_dimensions',
                uniform: 'uniform2fv'
              }, {
                name: 'u_alpha',
                uniform: 'uniform1f'
              }, ...shader.uniforms],
              shaderSources: {
                vertex: shader.vertex,
                fragment: shader.fragment
              }
            });
            _defineProperty(this, "effects", []);
            this.effects = shader.effects;
            this.calculateProps = memize(this.calculateProps.bind(this));
          }
          bindTextures(textures) {
            var glw = this.glw;
            glw.activeTexture(0);
            glw.bindTexture(textures[0].ctxTexture);
          }
          calculateProps(effects) {
            var regEffects = this.renderer.shManager.getRegisteredEffects();
            var results = [];
            effects === null || effects === void 0 || effects.forEach((eff, index) => {
              var _eff$props;
              var effect = this.effects[index];
              var fxClass = regEffects[effect.name];
              var props = (_eff$props = eff.props) !== null && _eff$props !== void 0 ? _eff$props : {};
              var uniInfo = effect.uniformInfo;
              Object.keys(props).forEach(p => {
                var fxProp = fxClass.uniforms[p];
                var propInfo = uniInfo[p];
                var value = fxProp.validator ? fxProp.validator(props[p], props) : props[p];
                if (Array.isArray(value)) {
                  value = new Float32Array(value);
                }
                results.push({
                  name: propInfo.name,
                  value
                });
              });
            });
            return results;
          }
          bindProps(props) {
            var results = this.calculateProps(props.effects);
            results.forEach(r => {
              this.setUniform(r.name, r.value);
            });
          }
          canBatchShaderProps(propsA, propsB) {
            if (propsA.$dimensions.width !== propsB.$dimensions.width || propsA.$dimensions.height !== propsB.$dimensions.height || propsA.effects.length !== propsB.effects.length) {
              return false;
            }
            var propsEffectsLen = propsA.effects.length;
            var i = 0;
            for (; i < propsEffectsLen; i++) {
              var effectA = propsA.effects[i];
              var effectB = propsB.effects[i];
              if (effectA.type !== effectB.type) {
                return false;
              }
              for (var _key4 in effectA.props) {
                if (effectB.props && !effectB.props[_key4] || effectA.props[_key4] !== effectB.props[_key4]) {
                  return false;
                }
              }
            }
            return true;
          }
          static createShader(props, effectContructors) {
            //counts duplicate effects
            var effectNameCount = {};
            var methods = {};
            var declareUniforms = '';
            var uniforms = [];
            var uFx = [];
            var effects = props.effects.map(effect => {
              var baseClass = effectContructors[effect.type];
              var key = baseClass.getEffectKey(effect.props || {});
              effectNameCount[key] = effectNameCount[key] ? ++effectNameCount[key] : 1;
              var nr = effectNameCount[key];
              if (nr === 1) {
                uFx.push({
                  key,
                  type: effect.type,
                  props: effect.props
                });
              }
              //initialize new effect class;
              var fxClass = new baseClass({
                ref: `${key}${nr === 1 ? '' : nr}`,
                target: key,
                props: effect.props
              });
              declareUniforms += fxClass.declaredUniforms;
              uniforms.push(...Object.values(fxClass.uniformInfo));
              return fxClass;
            });
            //build source
            var effectMethods = '';
            uFx === null || uFx === void 0 || uFx.forEach(fx => {
              var _fx$props;
              var fxClass = effectContructors[fx.type];
              var fxProps = fxClass.resolveDefaults((_fx$props = fx.props) !== null && _fx$props !== void 0 ? _fx$props : {});
              var remap = [];
              for (var m in fxClass.methods) {
                var cm = m;
                var fxMethod = fxClass.methods[m];
                if (methods[m] && methods[m] !== fxMethod) {
                  cm = DynamicShader.resolveMethodDuplicate(m, fxMethod, methods);
                }
                methods[cm] = fxMethod.replace('function', cm);
                remap.push({
                  m,
                  cm
                });
              }
              var onShaderMask = fxClass.onShaderMask instanceof Function ? fxClass.onShaderMask(fxProps) : fxClass.onShaderMask;
              var onColorize = fxClass.onColorize instanceof Function ? fxClass.onColorize(fxProps) : fxClass.onColorize;
              var onEffectMask = fxClass.onEffectMask instanceof Function ? fxClass.onEffectMask(fxProps) : fxClass.onEffectMask;
              remap.forEach(r => {
                var m = r.m,
                  cm = r.cm;
                var reg = new RegExp(`\\$${m}`, 'g');
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
              var methodParameters = fxClass.getMethodParameters(fxClass.uniforms, fxProps);
              var pm = methodParameters.length > 0 ? `, ${methodParameters}` : '';
              if (onShaderMask) {
                effectMethods += `
        float fx_${fx.key}_onShaderMask(float shaderMask ${pm}) {
          ${onShaderMask}
        }
        `;
              }
              if (onColorize) {
                effectMethods += `
          vec4 fx_${fx.key}_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor${pm}) {
            ${onColorize}
          }
        `;
              }
              if (onEffectMask) {
                effectMethods += `
          vec4 fx_${fx.key}_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor${pm}) {
            ${onEffectMask}
          }
        `;
              }
            });
            var sharedMethods = '';
            for (var m in methods) {
              sharedMethods += methods[m];
            }
            //fill main functions
            var currentMask = `mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))`;
            var drawEffects = `

    `;
            for (var i = 0; i < effects.length; i++) {
              var current = effects[i];
              var pm = current.passParameters.length > 0 ? `, ${current.passParameters}` : '';
              var currentClass = effectContructors[current.name];
              if (currentClass.onShaderMask) {
                drawEffects += `
        shaderMask = fx_${current.target}_onShaderMask(shaderMask ${pm});
        `;
              }
              if (currentClass.onColorize) {
                drawEffects += `
        maskColor = fx_${current.target}_onColorize(shaderMask, maskColor, shaderColor${pm});
        `;
              }
              if (currentClass.onEffectMask) {
                currentMask = `fx_${current.target}_onEffectMask(shaderMask, maskColor, shaderColor${pm})`;
              }
              var next = effects[i + 1];
              if (next === undefined || effectContructors[next.name].onEffectMask) {
                drawEffects += `
          shaderColor = ${currentMask};
        `;
              }
            }
            return {
              effects,
              uniforms,
              fragment: DynamicShader.fragment(declareUniforms, sharedMethods, effectMethods, drawEffects),
              vertex: DynamicShader.vertex()
            };
          }
          static resolveMethodDuplicate(key, effectMethod, methodCollection, increment = 0) {
            var m = key + (increment > 0 ? increment : '');
            if (methodCollection[m] && methodCollection[m] !== effectMethod) {
              return this.resolveMethodDuplicate(key, effectMethod, methodCollection, ++increment);
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
            var _props$effects;
            var fx = '';
            (_props$effects = props.effects) === null || _props$effects === void 0 || _props$effects.forEach(effect => {
              var baseClass = effectContructors[effect.type];
              var key = baseClass.getEffectKey(effect.props || {});
              fx += `,${key}`;
            });
            return `DynamicShader${fx}`;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Similar to the {@link DefaultShader} but cuts out 4 rounded rectangle corners
         * as defined by the specified corner {@link RoundedRectangleProps.radius}
         */
        _defineProperty(DynamicShader, "z$__type__Props", void 0);
        _defineProperty(DynamicShader, "vertex", () => `
    # ifdef GL_FRAGMENT_PRESICISON_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    attribute vec2 a_textureCoordinate;
    attribute vec2 a_position;
    attribute vec4 a_color;
    attribute float a_textureIndex;

    uniform vec2 u_resolution;
    uniform float u_pixelRatio;

    varying vec4 v_color;
    varying vec2 v_textureCoordinate;
    varying float v_textureIndex;

    void main(){
      vec2 normalized = a_position * u_pixelRatio / u_resolution;
      vec2 zero_two = normalized * 2.0;
      vec2 clip_space = zero_two - 1.0;

      // pass to fragment
      v_color = a_color;
      v_textureCoordinate = a_textureCoordinate;
      v_textureIndex = a_textureIndex;

      // flip y
      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
    }
  `);
        _defineProperty(DynamicShader, "fragment", (uniforms, methods, effectMethods, drawEffects) => `
    # ifdef GL_FRAGMENT_PRESICISON_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    #define PI 3.14159265359

    uniform vec2 u_resolution;
    uniform vec2 u_dimensions;
    uniform float u_alpha;
    uniform float u_radius;
    uniform sampler2D u_texture;
    uniform float u_pixelRatio;

    ${uniforms}

    varying vec4 v_color;
    varying vec2 v_textureCoordinate;

    ${methods}

    ${effectMethods}

    void main() {
      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;
      vec2 d = abs(p) - (u_dimensions) * 0.5;
      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));

      vec4 shaderColor = vec4(0.0);
      float shaderMask = lng_DefaultMask;

      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;

      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));

      ${drawEffects}

      gl_FragColor = shaderColor * u_alpha;
    }
  `);
        class RoundedRectangle extends WebGlCoreShader {
          constructor(renderer) {
            super({
              renderer,
              attributes: ['a_position', 'a_textureCoordinate', 'a_color'],
              uniforms: [{
                name: 'u_resolution',
                uniform: 'uniform2fv'
              }, {
                name: 'u_pixelRatio',
                uniform: 'uniform1f'
              }, {
                name: 'u_texture',
                uniform: 'uniform2f'
              }, {
                name: 'u_dimensions',
                uniform: 'uniform2fv'
              }, {
                name: 'u_radius',
                uniform: 'uniform1f'
              }]
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
            var glw = this.glw;
            glw.activeTexture(0);
            glw.bindTexture(textures[0].ctxTexture);
          }
          bindProps(props) {
            this.setUniform('u_radius', props.radius);
          }
          canBatchShaderProps(propsA, propsB) {
            return propsA.radius === propsB.radius && propsA.$dimensions.width === propsB.$dimensions.width && propsA.$dimensions.height === propsB.$dimensions.height;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        _defineProperty(RoundedRectangle, "z$__type__Props", void 0);
        _defineProperty(RoundedRectangle, "shaderSources", {
          vertex: `
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;
      attribute vec4 a_color;
      attribute float a_textureIndex;
      attribute float a_depth;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
        vec2 normalized = a_position * u_pixelRatio / u_resolution;
        vec2 zero_two = normalized * 2.0;
        vec2 clip_space = zero_two - 1.0;

        // pass to fragment
        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;

        // flip y
        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
      }
    `,
          fragment: `
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform vec2 u_dimensions;
      uniform float u_radius;
      uniform sampler2D u_texture;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      float boxDist(vec2 p, vec2 size, float radius){
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }

      float fillMask(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }

      void main() {
        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;
        vec2 halfDimensions = u_dimensions * 0.5;

        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);
        gl_FragColor = mix(vec4(0.0), color, fillMask(d));
      }
    `
        });
        var IDENTITY_MATRIX_3x3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        /**
         * SdfShader supports multi-channel and single-channel signed distance field textures.
         *
         * @remarks
         * This Shader is used by the {@link SdfTextRenderer}. Do not use thie Shader
         * directly. Instead create a Text Node and assign a SDF font family to it.
         *
         * @internalRemarks
         * The only thing this shader does to support multi-channel SDFs is to
         * add a median function to the fragment shader. If this one function call
         * ends up being a performance bottleneck we can always look at ways to
         * remove it.
         */
        class SdfShader extends WebGlCoreShader {
          constructor(renderer) {
            super({
              renderer,
              attributes: ['a_position', 'a_textureCoordinate'],
              uniforms: [{
                name: 'u_resolution',
                uniform: 'uniform2fv'
              }, {
                name: 'u_transform',
                uniform: 'uniformMatrix3fv'
              }, {
                name: 'u_scrollY',
                uniform: 'uniform1f'
              }, {
                name: 'u_pixelRatio',
                uniform: 'uniform1f'
              }, {
                name: 'u_texture',
                uniform: 'uniform2f'
              }, {
                name: 'u_color',
                uniform: 'uniform4fv'
              }, {
                name: 'u_size',
                uniform: 'uniform1f'
              }, {
                name: 'u_distanceRange',
                uniform: 'uniform1f'
              }, {
                name: 'u_debug',
                uniform: 'uniform1i'
              }]
            });
          }
          bindTextures(textures) {
            var glw = this.glw;
            glw.activeTexture(0);
            glw.bindTexture(textures[0].ctxTexture);
          }
          bindProps(props) {
            var resolvedProps = SdfShader.resolveDefaults(props);
            for (var _key5 in resolvedProps) {
              if (_key5 === 'transform') {
                this.setUniform('u_transform', false, resolvedProps[_key5]);
              } else if (_key5 === 'scrollY') {
                this.setUniform('u_scrollY', resolvedProps[_key5]);
              } else if (_key5 === 'color') {
                var components = getNormalizedRgbaComponents(resolvedProps.color);
                this.setUniform('u_color', components);
              } else if (_key5 === 'size') {
                this.setUniform('u_size', resolvedProps[_key5]);
              } else if (_key5 === 'distanceRange') {
                this.setUniform('u_distanceRange', resolvedProps[_key5]);
              } else if (_key5 === 'debug') {
                this.setUniform('u_debug', resolvedProps[_key5] ? 1.0 : 0.0);
              }
            }
          }
          static resolveDefaults(props = {}) {
            var _props$transform, _props$scrollY, _props$color, _props$size, _props$distanceRange, _props$debug;
            return {
              transform: (_props$transform = props.transform) !== null && _props$transform !== void 0 ? _props$transform : IDENTITY_MATRIX_3x3,
              scrollY: (_props$scrollY = props.scrollY) !== null && _props$scrollY !== void 0 ? _props$scrollY : 0,
              color: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 0xffffffff,
              size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 16,
              distanceRange: (_props$distanceRange = props.distanceRange) !== null && _props$distanceRange !== void 0 ? _props$distanceRange : 1.0,
              debug: (_props$debug = props.debug) !== null && _props$debug !== void 0 ? _props$debug : false
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Masks the current maskcolor with rounded corners similar to {@link RoundedRectangle}
         */
        _defineProperty(SdfShader, "shaderSources", {
          vertex: `
      // an attribute is an input (in) to a vertex shader.
      // It will receive data from a buffer
      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;

      uniform vec2 u_resolution;
      uniform mat3 u_transform;
      uniform float u_scrollY;
      uniform float u_pixelRatio;
      uniform float u_size;

      varying vec2 v_texcoord;

      void main() {
        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);
        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;

        // Calculate screen space with pixel ratio
        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);

        gl_Position = vec4(screenSpace, 0.0, 1.0);
        v_texcoord = a_textureCoordinate;

      }
    `,
          fragment: `
      precision highp float;

      uniform vec4 u_color;
      uniform sampler2D u_texture;
      uniform float u_distanceRange;
      uniform float u_pixelRatio;
      uniform int u_debug;

      varying vec2 v_texcoord;

      float median(float r, float g, float b) {
          return max(min(r, g), min(max(r, g), b));
      }

      void main() {
          vec3 sample = texture2D(u_texture, v_texcoord).rgb;
          if (u_debug == 1) {
            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);
            return;
          }
          float scaledDistRange = u_distanceRange * u_pixelRatio;
          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);
          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;

          // Build the final color.
          // IMPORTANT: We must premultiply the color by the alpha value before returning it.
          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);
      }
    `
        });
        class RadiusEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'radius');
          }
          static getEffectKey() {
            return `radius`;
          }
          static resolveDefaults(props) {
            var _props$radius;
            return {
              radius: (_props$radius = props.radius) !== null && _props$radius !== void 0 ? _props$radius : 10
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The BorderEffect renders a border along all edges of an element
         */
        _defineProperty(RadiusEffect, "z$__type__Props", void 0);
        _defineProperty(RadiusEffect, "uniforms", {
          radius: {
            value: 0,
            method: 'uniform4fv',
            type: 'vec4',
            validator: value => {
              var r = value;
              if (Array.isArray(r)) {
                if (r.length === 2) {
                  r = [r[0], r[1], r[0], r[1]];
                } else if (r.length === 3) {
                  r = [r[0], r[1], r[2], r[0]];
                } else if (r.length !== 4) {
                  r = [r[0], r[0], r[0], r[0]];
                }
              } else if (typeof r === 'number') {
                r = [r, r, r, r];
              }
              return r;
            }
          }
        });
        _defineProperty(RadiusEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          boxDist: `
      float function(vec2 p, vec2 size, float radius) {
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }
    `
        });
        _defineProperty(RadiusEffect, "onShaderMask", `
  vec2 halfDimensions = u_dimensions * 0.5;
  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);
  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);
  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);
  `);
        _defineProperty(RadiusEffect, "onEffectMask", `
  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));
  `);
        class BorderEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'border');
          }
          static getEffectKey() {
            return `border`;
          }
          static resolveDefaults(props) {
            var _props$width, _props$color2;
            return {
              width: (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 10,
              color: (_props$color2 = props.color) !== null && _props$color2 !== void 0 ? _props$color2 : 0xffffffff
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Linear Gradient effect over a effect mask
         */
        _defineProperty(BorderEffect, "z$__type__Props", void 0);
        _defineProperty(BorderEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(BorderEffect, "onEffectMask", `
  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);
  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);
  `);
        _defineProperty(BorderEffect, "onColorize", `
    return color;
  `);
        class LinearGradientEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'linearGradient');
          }
          static getEffectKey(props) {
            return `linearGradient${props.colors.length}`;
          }
          static resolveDefaults(props) {
            var _props$colors, _props$angle;
            var colors = (_props$colors = props.colors) !== null && _props$colors !== void 0 ? _props$colors : [0xff000000, 0xffffffff];
            var stops = props.stops || [];
            if (stops.length === 0 || stops.length !== colors.length) {
              var colorsL = colors.length;
              var i = 0;
              var tmp = stops;
              for (; i < colorsL; i++) {
                if (stops[i]) {
                  tmp[i] = stops[i];
                  if (stops[i - 1] === undefined && tmp[i - 2] !== undefined) {
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
              angle: (_props$angle = props.angle) !== null && _props$angle !== void 0 ? _props$angle : 0
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Grayscale effect grayscales the color values of the current mask color
         */
        _LinearGradientEffect = LinearGradientEffect;
        _defineProperty(LinearGradientEffect, "z$__type__Props", void 0);
        _defineProperty(LinearGradientEffect, "uniforms", {
          angle: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          colors: {
            value: 0xffffffff,
            validator: rgbas => {
              var cols = rgbas.map(rgbas => getNormalizedRgbaComponents(rgbas));
              return cols.reduce((acc, val) => acc.concat(val), []);
            },
            size: props => props.colors.length,
            method: 'uniform4fv',
            type: 'vec4'
          },
          stops: {
            value: [],
            size: props => props.colors.length,
            method: 'uniform1fv',
            type: 'float'
          }
        });
        _defineProperty(LinearGradientEffect, "methods", {
          fromLinear: `
      vec4 function(vec4 linearRGB) {
        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);
        vec4 lower = linearRGB * vec4(12.92);
        return mix(higher, lower, 1.0);
      }
    `,
          toLinear: `
      vec4 function(vec4 sRGB) {
        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));
        vec4 lower = sRGB/vec4(12.92);
        return mix(higher, lower, 1.0);
      }
    `,
          calcPoint: `
      vec2 function(float d, float angle) {
        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);
      }
    `
        });
        _defineProperty(LinearGradientEffect, "ColorLoop", amount => {
          var loop = '';
          for (var i = 2; i < amount; i++) {
            loop += `colorOut = mix(colorOut, colors[${i}], clamp((dist - stops[${i - 1}]) / (stops[${i}] - stops[${i - 1}]), 0.0, 1.0));`;
          }
          return loop;
        });
        _defineProperty(LinearGradientEffect, "onColorize", props => {
          var colors = props.colors.length || 1;
          return `
      float a = angle - (PI / 180.0 * 90.0);
      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));
      vec2 f = $calcPoint(lineDist * 0.5, a);
      vec2 t = $calcPoint(lineDist * 0.5, a + PI);
      vec2 gradVec = t - f;
      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);

      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);
      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));
      ${_LinearGradientEffect.ColorLoop(colors)}
      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));
    `;
        });
        class GrayscaleEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'grayscale');
          }
          static getEffectKey() {
            return `grayscale`;
          }
          static resolveDefaults(props) {
            var _props$amount;
            return {
              amount: (_props$amount = props.amount) !== null && _props$amount !== void 0 ? _props$amount : 1
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The BorderBottomEffect renders a border on the right side of an element
         */
        _defineProperty(GrayscaleEffect, "uniforms", {
          amount: {
            value: 1,
            method: 'uniform1f',
            type: 'float'
          }
        });
        _defineProperty(GrayscaleEffect, "onColorize", `
    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;
    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);
  `);
        class BorderRightEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'borderRight');
          }
          static getEffectKey() {
            return `borderRight`;
          }
          static resolveDefaults(props) {
            var _props$width2, _props$color3;
            return {
              width: (_props$width2 = props.width) !== null && _props$width2 !== void 0 ? _props$width2 : 10,
              color: (_props$color3 = props.color) !== null && _props$color3 !== void 0 ? _props$color3 : 0xffffffff
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The BorderBottomEffect renders a border on the top side of an element
         */
        _defineProperty(BorderRightEffect, "z$__type__Props", void 0);
        _defineProperty(BorderRightEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(BorderRightEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          rectDist: `
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `
        });
        _defineProperty(BorderRightEffect, "onEffectMask", `
  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `);
        _defineProperty(BorderRightEffect, "onColorize", `
    return color;
  `);
        class BorderTopEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'borderTop');
          }
          static getEffectKey() {
            return `borderTop`;
          }
          static resolveDefaults(props) {
            var _props$width3, _props$color4;
            return {
              width: (_props$width3 = props.width) !== null && _props$width3 !== void 0 ? _props$width3 : 10,
              color: (_props$color4 = props.color) !== null && _props$color4 !== void 0 ? _props$color4 : 0xffffffff
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The BorderBottomEffect renders a border on the bottom side of an element
         */
        _defineProperty(BorderTopEffect, "z$__type__Props", void 0);
        _defineProperty(BorderTopEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(BorderTopEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          rectDist: `
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `
        });
        _defineProperty(BorderTopEffect, "onEffectMask", `
  vec2 pos = vec2(0.0, width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `);
        _defineProperty(BorderTopEffect, "onColorize", `
    return color;
  `);
        class BorderBottomEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'borderBottom');
          }
          static getEffectKey() {
            return `borderBottom`;
          }
          static resolveDefaults(props) {
            var _props$width4, _props$color5;
            return {
              width: (_props$width4 = props.width) !== null && _props$width4 !== void 0 ? _props$width4 : 10,
              color: (_props$color5 = props.color) !== null && _props$color5 !== void 0 ? _props$color5 : 0xffffffff
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The BorderBottomEffect renders a border on the left of an element
         */
        _defineProperty(BorderBottomEffect, "z$__type__Props", void 0);
        _defineProperty(BorderBottomEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(BorderBottomEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          rectDist: `
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `
        });
        _defineProperty(BorderBottomEffect, "onEffectMask", `
  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `);
        _defineProperty(BorderBottomEffect, "onColorize", `
    return color;
  `);
        class BorderLeftEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'borderLeft');
          }
          static getEffectKey() {
            return `borderLeft`;
          }
          static resolveDefaults(props) {
            var _props$width5, _props$color6;
            return {
              width: (_props$width5 = props.width) !== null && _props$width5 !== void 0 ? _props$width5 : 10,
              color: (_props$color6 = props.color) !== null && _props$color6 !== void 0 ? _props$color6 : 0xffffffff
            };
          }
        }

        /**
         * Renders a Glitch effect using the incoming texture
         */
        _defineProperty(BorderLeftEffect, "z$__type__Props", void 0);
        _defineProperty(BorderLeftEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(BorderLeftEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          rectDist: `
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `
        });
        _defineProperty(BorderLeftEffect, "onEffectMask", `
  vec2 pos = vec2(width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `);
        _defineProperty(BorderLeftEffect, "onColorize", `
    return color;
  `);
        class GlitchEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'glitch');
          }
          static getEffectKey(props) {
            return `glitch`;
          }
          static resolveDefaults(props) {
            var _props$amplitude, _props$narrowness, _props$blockiness, _props$minimizer, _props$time;
            return {
              amplitude: (_props$amplitude = props.amplitude) !== null && _props$amplitude !== void 0 ? _props$amplitude : 0.2,
              narrowness: (_props$narrowness = props.narrowness) !== null && _props$narrowness !== void 0 ? _props$narrowness : 4.0,
              blockiness: (_props$blockiness = props.blockiness) !== null && _props$blockiness !== void 0 ? _props$blockiness : 2.0,
              minimizer: (_props$minimizer = props.minimizer) !== null && _props$minimizer !== void 0 ? _props$minimizer : 8.0,
              time: (_props$time = props.time) !== null && _props$time !== void 0 ? _props$time : Date.now()
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        _defineProperty(GlitchEffect, "z$__type__Props", void 0);
        _defineProperty(GlitchEffect, "uniforms", {
          amplitude: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          narrowness: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          blockiness: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          minimizer: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          time: {
            value: 0,
            method: 'uniform1f',
            validator: value => {
              return (Date.now() - value) % 1000;
            },
            type: 'float'
          }
        });
        _defineProperty(GlitchEffect, "methods", {
          rand: `
      float function(vec2 p, float time) {
        float t = floor(time * 20.) / 10.;
        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);
      }
    `,
          noise: `
      float function(vec2 uv, float blockiness, float time) {
        vec2 lv = fract(uv);
        vec2 id = floor(uv);

        float n1 = rand(id, time);
        float n2 = rand(id+vec2(1,0), time);
        float n3 = rand(id+vec2(0,1), time);
        float n4 = rand(id+vec2(1,1), time);
        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);
        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);
      }
    `,
          fbm: `
      float function(vec2 uv, int count, float blockiness, float complexity, float time) {
        float val = 0.0;
        float amp = 0.5;
        const int MAX_ITERATIONS = 10;

        for(int i = 0; i < MAX_ITERATIONS; i++) {
          if(i >= count) {break;}
          val += amp * noise(uv, blockiness, time);
          amp *= 0.5;
          uv *= complexity;
        }
        return val;
      }
    `
        });
        _defineProperty(GlitchEffect, "onColorize", `
    vec2 uv = v_textureCoordinate.xy;
    float aspect = u_dimensions.x / u_dimensions.y;
    vec2 a = vec2(uv.x * aspect , uv.y);
    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));

    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);
    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);
    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);
    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);

    vec3 f = vec3(colR, colG, colB);
    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);
  `);
        class FadeOutEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'fadeOut');
          }
          static getEffectKey() {
            return `fadeOut`;
          }
          static resolveDefaults(props) {
            var _props$fade;
            return {
              fade: (_props$fade = props.fade) !== null && _props$fade !== void 0 ? _props$fade : 10
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        _defineProperty(FadeOutEffect, "z$__type__Props", void 0);
        _defineProperty(FadeOutEffect, "uniforms", {
          fade: {
            value: 0,
            method: 'uniform4fv',
            type: 'vec4',
            validator: value => {
              var r = value;
              if (Array.isArray(r)) {
                if (r.length === 2) {
                  r = [r[0], r[1], r[0], r[1]];
                } else if (r.length === 3) {
                  r = [r[0], r[1], r[2], r[0]];
                } else if (r.length !== 4) {
                  r = [r[0], r[0], r[0], r[0]];
                }
              } else if (typeof r === 'number') {
                r = [r, r, r, r];
              }
              return r;
            }
          }
        });
        _defineProperty(FadeOutEffect, "onColorize", `
  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;
  vec2 pos1;
  vec2 pos2;
  vec2 d;
  float c;
  vec4 result = maskColor;


  if(fade[0] > 0.0) {
    pos1 = vec2(point.x, point.y);
    pos2 = vec2(point.x, point.y + fade[0]);
    d = pos2 - pos1;
    c = dot(pos1, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[1] > 0.0) {
    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);
    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);
    d = pos1 - pos2;
    c = dot(pos2, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[2] > 0.0) {
    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);
    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);
    d = pos1 - pos2;
    c = dot(pos2, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[3] > 0.0) {
    pos1 = vec2(point.x, point.y);
    pos2 = vec2(point.x + fade[3], point.y);
    d = pos2 - pos1;
    c = dot(pos1, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  return result;
  `);
        class RadialGradientEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'radialGradient');
          }
          static getEffectKey(props) {
            return `radialGradient${props.colors.length}`;
          }
          static resolveDefaults(props) {
            var _props$colors2, _props$width6, _ref, _props$height, _props$pivot;
            var colors = (_props$colors2 = props.colors) !== null && _props$colors2 !== void 0 ? _props$colors2 : [0xff000000, 0xffffffff];
            var stops = props.stops || [];
            if (stops.length === 0 || stops.length !== colors.length) {
              var colorsL = colors.length;
              var i = 0;
              var tmp = stops;
              for (; i < colorsL; i++) {
                if (stops[i]) {
                  tmp[i] = stops[i];
                  if (stops[i - 1] === undefined && tmp[i - 2] !== undefined) {
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
              width: (_props$width6 = props.width) !== null && _props$width6 !== void 0 ? _props$width6 : 0,
              height: (_ref = (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : props.width) !== null && _ref !== void 0 ? _ref : 0,
              pivot: (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : [0.5, 0.5]
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The RadialProgressEffect renders a border along all edges of an element
         */
        _RadialGradientEffect = RadialGradientEffect;
        _defineProperty(RadialGradientEffect, "z$__type__Props", void 0);
        _defineProperty(RadialGradientEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          height: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          pivot: {
            value: [0.5, 0.5],
            method: 'uniform2fv',
            type: 'vec2'
          },
          colors: {
            value: 0xffffffff,
            validator: rgbas => {
              var cols = rgbas.map(rgbas => getNormalizedRgbaComponents(rgbas));
              return cols.reduce((acc, val) => acc.concat(val), []);
            },
            size: props => props.colors.length,
            method: 'uniform4fv',
            type: 'vec4'
          },
          stops: {
            value: [],
            size: props => props.colors.length,
            method: 'uniform1fv',
            type: 'float'
          }
        });
        _defineProperty(RadialGradientEffect, "ColorLoop", amount => {
          var loop = '';
          for (var i = 2; i < amount; i++) {
            loop += `colorOut = mix(colorOut, colors[${i}], clamp((dist - stops[${i - 1}]) / (stops[${i}] - stops[${i - 1}]), 0.0, 1.0));`;
          }
          return loop;
        });
        _defineProperty(RadialGradientEffect, "onColorize", props => {
          var colors = props.colors.length || 1;
          return `
      vec2 point = v_textureCoordinate.xy * u_dimensions;
      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);

      float dist = length((point - projection) / vec2(width, height));

      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);
      vec4 colorOut = mix(colors[0], colors[1], stopCalc);
      ${_RadialGradientEffect.ColorLoop(colors)}
      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));
    `;
        });
        class RadialProgressEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'radialProgress');
          }
          static getEffectKey() {
            return `radialProgress`;
          }
          static resolveDefaults(props) {
            var _props$width7, _props$progress, _props$offset, _props$range, _props$rounded, _props$radius2, _props$color7;
            return {
              width: (_props$width7 = props.width) !== null && _props$width7 !== void 0 ? _props$width7 : 10,
              progress: (_props$progress = props.progress) !== null && _props$progress !== void 0 ? _props$progress : 0.5,
              offset: (_props$offset = props.offset) !== null && _props$offset !== void 0 ? _props$offset : 0,
              range: (_props$range = props.range) !== null && _props$range !== void 0 ? _props$range : Math.PI * 2,
              rounded: (_props$rounded = props.rounded) !== null && _props$rounded !== void 0 ? _props$rounded : false,
              radius: (_props$radius2 = props.radius) !== null && _props$radius2 !== void 0 ? _props$radius2 : 1,
              color: (_props$color7 = props.color) !== null && _props$color7 !== void 0 ? _props$color7 : 0xffffffff
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Masks the current maskcolor a holepunch effect with rounded corners similar to {@link RoundedRectangle}
         */
        _defineProperty(RadialProgressEffect, "z$__type__Props", void 0);
        _defineProperty(RadialProgressEffect, "uniforms", {
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          progress: {
            value: 0.5,
            method: 'uniform1f',
            type: 'float'
          },
          offset: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          range: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          rounded: {
            value: 0,
            method: 'uniform1f',
            type: 'float',
            validator: value => {
              return value ? 1 : 0;
            }
          },
          radius: {
            value: 1,
            method: 'uniform1f',
            type: 'float'
          },
          color: {
            value: 0xffffffff,
            validator: rgba => getNormalizedRgbaComponents(rgba),
            method: 'uniform4fv',
            type: 'vec4'
          }
        });
        _defineProperty(RadialProgressEffect, "methods", {
          rotateUV: `
    vec2 function(vec2 uv, float d) {
      float s = sin(d);
      float c = cos(d);
      mat2 rotMatrix = mat2(c, -s, s, c);
      return uv * rotMatrix;
    }
    `,
          drawDot: `
    float function(vec2 uv, vec2 p, float r) {
      uv += p;
      float circle = length(uv) - r;
      return clamp(-circle, 0.0, 1.0);
    }
    `
        });
        _defineProperty(RadialProgressEffect, "onEffectMask", `
    float outerRadius = radius * u_dimensions.y * 0.5;

    float endAngle = range * progress - 0.0005;

    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;

    uv = $rotateUV(uv, -(offset));
    float linewidth = width * u_pixelRatio;
    float circle = length(uv) - (outerRadius - linewidth) ;
    circle = abs(circle) - linewidth;
    circle = clamp(-circle, 0.0, 1.0);

    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);
    float p = endAngle / (PI * 2.);

    circle *= step(fract(angle), fract(p));

    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));
    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));

    return mix(shaderColor, maskColor, circle);
  `);
        _defineProperty(RadialProgressEffect, "onColorize", `
    return color;
  `);
        class HolePunchEffect extends ShaderEffect {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "name", 'holePunch');
          }
          static getEffectKey() {
            return `holePunch`;
          }
          static resolveDefaults(props) {
            var _props$radius3;
            return {
              x: props.x || 0,
              y: props.y || 0,
              width: props.width || 50,
              height: props.height || 50,
              radius: (_props$radius3 = props.radius) !== null && _props$radius3 !== void 0 ? _props$radius3 : 0
            };
          }
        }
        _defineProperty(HolePunchEffect, "z$__type__Props", void 0);
        _defineProperty(HolePunchEffect, "uniforms", {
          x: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          y: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          width: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          height: {
            value: 0,
            method: 'uniform1f',
            type: 'float'
          },
          radius: {
            value: 0,
            method: 'uniform4fv',
            type: 'vec4',
            validator: value => {
              var r = value;
              if (Array.isArray(r)) {
                if (r.length === 2) {
                  r = [r[0], r[1], r[0], r[1]];
                } else if (r.length === 3) {
                  r = [r[0], r[1], r[2], r[0]];
                } else if (r.length !== 4) {
                  r = [r[0], r[0], r[0], r[0]];
                }
              } else if (typeof r === 'number') {
                r = [r, r, r, r];
              }
              return r;
            }
          }
        });
        _defineProperty(HolePunchEffect, "methods", {
          fillMask: `
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,
          boxDist: `
      float function(vec2 p, vec2 size, float radius) {
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }
    `
        });
        _defineProperty(HolePunchEffect, "onShaderMask", `
  vec2 halfDimensions = u_dimensions * 0.5;
  vec2 size = vec2(width, height) * 0.5;
  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);
  vec2 pos = basePos - size;
  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);
  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);
  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);
  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);
  return $boxDist(pos, size, r);
  `);
        _defineProperty(HolePunchEffect, "onEffectMask", `
  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));
  `);
        class CoreShaderManager {
          constructor() {
            _defineProperty(this, "shCache", new Map());
            _defineProperty(this, "shConstructors", {});
            _defineProperty(this, "attachedShader", null);
            _defineProperty(this, "effectConstructors", {});
            _defineProperty(this, "renderer", void 0);
            this.registerShaderType('DefaultShader', DefaultShader);
            this.registerShaderType('DefaultShaderBatched', DefaultShaderBatched);
            this.registerShaderType('RoundedRectangle', RoundedRectangle);
            this.registerShaderType('DynamicShader', DynamicShader);
            this.registerShaderType('SdfShader', SdfShader);
            this.registerEffectType('border', BorderEffect);
            this.registerEffectType('borderBottom', BorderBottomEffect);
            this.registerEffectType('borderLeft', BorderLeftEffect);
            this.registerEffectType('borderRight', BorderRightEffect);
            this.registerEffectType('borderTop', BorderTopEffect);
            this.registerEffectType('fadeOut', FadeOutEffect);
            this.registerEffectType('linearGradient', LinearGradientEffect);
            this.registerEffectType('radialGradient', RadialGradientEffect);
            this.registerEffectType('grayscale', GrayscaleEffect);
            this.registerEffectType('glitch', GlitchEffect);
            this.registerEffectType('radius', RadiusEffect);
            this.registerEffectType('radialProgress', RadialProgressEffect);
            this.registerEffectType('holePunch', HolePunchEffect);
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
              throw new Error(`Renderer is not been defined`);
            }
            var ShaderClass = this.shConstructors[shType];
            if (!ShaderClass) {
              throw new Error(`Shader type "${shType}" is not registered`);
            }
            if (shType === 'DynamicShader') {
              return this.loadDynamicShader(props);
            }
            var resolvedProps = ShaderClass.resolveDefaults(props);
            var cacheKey = ShaderClass.makeCacheKey(resolvedProps) || ShaderClass.name;
            if (cacheKey && this.shCache.has(cacheKey)) {
              return {
                shader: this.shCache.get(cacheKey),
                props: resolvedProps
              };
            }
            // @ts-expect-error ShaderClass WILL accept a Renderer
            var shader = new ShaderClass(this.renderer, props);
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
              throw new Error(`Renderer is not been defined`);
            }
            var resolvedProps = DynamicShader.resolveDefaults(props, this.effectConstructors);
            var cacheKey = DynamicShader.makeCacheKey(resolvedProps, this.effectConstructors);
            if (cacheKey && this.shCache.has(cacheKey)) {
              return {
                shader: this.shCache.get(cacheKey),
                props: resolvedProps
              };
            }
            var shader = new DynamicShader(this.renderer, props, this.effectConstructors);
            if (cacheKey) {
              this.shCache.set(cacheKey, shader);
            }
            return {
              shader: shader,
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Class that keeps track of the invocations of Context methods when
         * the `enableContextSpy` renderer option is enabled.
         */
        class ContextSpy {
          constructor() {
            _defineProperty(this, "data", {});
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
            return _objectSpread({}, this.data);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Tests if the given location is a compressed texture container
         * @param url
         * @remarks
         * This function is used to determine if the given image url is a compressed
         * and only supports the following extensions: .ktx and .pvr
         * @returns
         */
        function isCompressedTextureContainer(url) {
          return /\.(ktx|pvr)$/.test(url);
        }
        /**
         * Loads a compressed texture container
         * @param url
         * @returns
         */
        var loadCompressedTexture = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
            var response, arrayBuffer;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(url);
                case 2:
                  response = _context.sent;
                  _context.next = 5;
                  return response.arrayBuffer();
                case 5:
                  arrayBuffer = _context.sent;
                  if (!(url.indexOf('.ktx') !== -1)) {
                    _context.next = 8;
                    break;
                  }
                  return _context.abrupt("return", loadKTXData(arrayBuffer));
                case 8:
                  return _context.abrupt("return", loadPVRData(arrayBuffer));
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function loadCompressedTexture(_x2) {
            return _ref2.apply(this, arguments);
          };
        }();
        /**
         * Loads a KTX texture container and returns the texture data
         * @param buffer
         * @returns
         */
        var loadKTXData = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(buffer) {
            var view, littleEndian, mipmaps, data, offset, i, imageSize;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  view = new DataView(buffer);
                  littleEndian = view.getUint32(12) === 16909060 ? true : false;
                  mipmaps = [];
                  data = {
                    glInternalFormat: view.getUint32(28, littleEndian),
                    pixelWidth: view.getUint32(36, littleEndian),
                    pixelHeight: view.getUint32(40, littleEndian),
                    numberOfMipmapLevels: view.getUint32(56, littleEndian),
                    bytesOfKeyValueData: view.getUint32(60, littleEndian)
                  };
                  offset = 64; // Key Value Pairs of data start at byte offset 64
                  // But the only known kvp is the API version, so skipping parsing.
                  offset += data.bytesOfKeyValueData;
                  for (i = 0; i < data.numberOfMipmapLevels; i++) {
                    imageSize = view.getUint32(offset);
                    offset += 4;
                    mipmaps.push(view.buffer.slice(offset, imageSize));
                    offset += imageSize;
                  }
                  return _context2.abrupt("return", {
                    data: {
                      glInternalFormat: data.glInternalFormat,
                      mipmaps,
                      width: data.pixelWidth || 0,
                      height: data.pixelHeight || 0,
                      type: 'ktx'
                    },
                    premultiplyAlpha: false
                  });
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function loadKTXData(_x3) {
            return _ref3.apply(this, arguments);
          };
        }();
        /**
         * Loads a PVR texture container and returns the texture data
         * @param buffer
         * @returns
         */
        var loadPVRData = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(buffer) {
            var pvrHeaderLength, pvrFormatEtc1, pvrWidth, pvrHeight, pvrMipmapCount, pvrMetadata, arrayBuffer, header, dataOffset, pvrtcData, mipmaps, data, offset, width, height, i, level, view;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // pvr header length in 32 bits
                  pvrHeaderLength = 13; // for now only we only support: COMPRESSED_RGB_ETC1_WEBGL
                  pvrFormatEtc1 = 0x8d64;
                  pvrWidth = 7;
                  pvrHeight = 6;
                  pvrMipmapCount = 11;
                  pvrMetadata = 12;
                  arrayBuffer = buffer;
                  header = new Int32Array(arrayBuffer, 0, pvrHeaderLength); // @ts-expect-error Object possibly undefined
                  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                  dataOffset = header[pvrMetadata] + 52;
                  pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
                  mipmaps = [];
                  data = {
                    pixelWidth: header[pvrWidth],
                    pixelHeight: header[pvrHeight],
                    numberOfMipmapLevels: header[pvrMipmapCount] || 0
                  };
                  offset = 0;
                  width = data.pixelWidth || 0;
                  height = data.pixelHeight || 0;
                  for (i = 0; i < data.numberOfMipmapLevels; i++) {
                    level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
                    view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
                    mipmaps.push(view);
                    offset += level;
                    width = width >> 1;
                    height = height >> 1;
                  }
                  return _context3.abrupt("return", {
                    data: {
                      glInternalFormat: pvrFormatEtc1,
                      mipmaps: mipmaps,
                      width: data.pixelWidth || 0,
                      height: data.pixelHeight || 0,
                      type: 'pvr'
                    },
                    premultiplyAlpha: false
                  });
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function loadPVRData(_x4) {
            return _ref4.apply(this, arguments);
          };
        }();

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Texture consisting of an image loaded from a URL
         *
         * @remarks
         * The ImageTexture's {@link ImageTextureProps.src} prop defines the image URL
         * to be downloaded.
         *
         * By default, the texture's alpha values will be premultiplied into its color
         * values which is generally the desired setting before they are sent to the
         * texture's associated {@link Shader}. However, in special cases you may want
         * the Shader to receive straight (non-premultiplied) values. In that case you
         * can disable the default behavior by setting the
         * {@link ImageTextureProps.premultiplyAlpha} prop to `false`.
         */
        class ImageTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            this.props = ImageTexture.resolveDefaults(props);
          }
          hasAlphaChannel(mimeType) {
            return mimeType.indexOf('image/png') !== -1;
          }
          getTextureData() {
            var _this = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this$props, src, premultiplyAlpha, response, blob, hasAlphaChannel, img;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _this$props = _this.props, src = _this$props.src, premultiplyAlpha = _this$props.premultiplyAlpha;
                    if (src) {
                      _context4.next = 3;
                      break;
                    }
                    return _context4.abrupt("return", {
                      data: null
                    });
                  case 3:
                    if (!(src instanceof ImageData)) {
                      _context4.next = 5;
                      break;
                    }
                    return _context4.abrupt("return", {
                      data: src,
                      premultiplyAlpha
                    });
                  case 5:
                    if (!isCompressedTextureContainer(src)) {
                      _context4.next = 7;
                      break;
                    }
                    return _context4.abrupt("return", loadCompressedTexture(src));
                  case 7:
                    if (!_this.txManager.imageWorkerManager) {
                      _context4.next = 13;
                      break;
                    }
                    _context4.next = 10;
                    return _this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha);
                  case 10:
                    return _context4.abrupt("return", _context4.sent);
                  case 13:
                    if (!_this.txManager.hasCreateImageBitmap) {
                      _context4.next = 28;
                      break;
                    }
                    _context4.next = 16;
                    return fetch(src);
                  case 16:
                    response = _context4.sent;
                    _context4.next = 19;
                    return response.blob();
                  case 19:
                    blob = _context4.sent;
                    hasAlphaChannel = premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : _this.hasAlphaChannel(blob.type);
                    _context4.next = 23;
                    return createImageBitmap(blob, {
                      premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',
                      colorSpaceConversion: 'none',
                      imageOrientation: 'none'
                    });
                  case 23:
                    _context4.t0 = _context4.sent;
                    _context4.t1 = hasAlphaChannel;
                    return _context4.abrupt("return", {
                      data: _context4.t0,
                      premultiplyAlpha: _context4.t1
                    });
                  case 28:
                    img = new Image();
                    if (!(src.substr(0, 5) == "data:")) {
                      // Base64.
                      img.crossOrigin = "Anonymous";
                    }
                    img.src = src;
                    _context4.next = 33;
                    return new Promise((resolve, reject) => {
                      img.onload = () => resolve();
                      img.onerror = () => reject(new Error(`Failed to load image`));
                    }).catch(e => {
                      console.error(e);
                    });
                  case 33:
                    return _context4.abrupt("return", {
                      data: img,
                      premultiplyAlpha: premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true
                    });
                  case 34:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }))();
          }
          static makeCacheKey(props) {
            var resolvedProps = ImageTexture.resolveDefaults(props);
            // ImageTextures sourced by ImageData are non-cacheable
            if (resolvedProps.src instanceof ImageData) {
              return false;
            }
            return `ImageTexture,${resolvedProps.src},${resolvedProps.premultiplyAlpha}`;
          }
          static resolveDefaults(props) {
            var _props$src, _props$premultiplyAlp;
            return {
              src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : '',
              premultiplyAlpha: (_props$premultiplyAlp = props.premultiplyAlpha) !== null && _props$premultiplyAlp !== void 0 ? _props$premultiplyAlp : true // null,
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Number of floating point numbers that represent a single glyph in the SDF vertex buffer.
         *
         * @remarks
         * The vertex buffer contains:
         *  - 6 vertex positions
         *  - 6 texture coordinates
         *  - = 12 positions/coordinates per glyph
         *
         * Each vertex position and texture coordinate consist of 2 floating point numbers (x/y).
         * So there are 12 * 2 = 24 floating point numbers that make up a single glyph.
         */
        _defineProperty(ImageTexture, "z$__type__Props", void 0);
        var FLOATS_PER_GLYPH = 24;

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Gets the start conditions for the layout loop.
         *
         * @remarks
         * Returns `undefined` if the layout loop should not be run.
         *
         * @param fontSize
         * @param fontSizeRatio
         * @param sdfLineHeight
         * @param renderWindow
         * @param lineCache
         * @param textH
         * @returns
         */
        function getStartConditions(sdfFontSize, sdfLineHeight, lineHeight, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH) {
          // State variables
          var startLineIndex = Math.min(Math.max(renderWindow.firstLineIdx, 0), lineCache.length);
          // TODO: (fontSize / 6.4286 / fontSizeRatio) Adding this to the startY helps the text line up better with Canvas rendered text
          var sdfStartX = 0;
          var sdfVerticalAlignYOffset = 0;
          if (verticalAlign === 'middle') {
            sdfVerticalAlignYOffset = (sdfLineHeight - sdfFontSize) / 2;
          } else if (verticalAlign === 'bottom') {
            sdfVerticalAlignYOffset = sdfLineHeight - sdfFontSize;
          }
          var sdfOffsetY = offsetY / fontSizeRatio;
          var sdfStartY = sdfOffsetY + startLineIndex * sdfLineHeight + sdfVerticalAlignYOffset; // TODO: Figure out what determines the initial y offset of text.
          // Don't attempt to render anything if we know we're starting past the established end of the text
          if (textH && sdfStartY >= textH / fontSizeRatio) {
            return;
          }
          return {
            sdfX: sdfStartX,
            sdfY: sdfStartY,
            lineIndex: startLineIndex
          };
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A wrapper Generator class that makes a generator peekable.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        class PeekableIterator {
          constructor(iterator, indexBase = 0) {
            _defineProperty(this, "iterator", void 0);
            _defineProperty(this, "peekBuffer", []);
            _defineProperty(this, "_lastIndex", void 0);
            this.iterator = iterator;
            this.iterator = iterator;
            this._lastIndex = indexBase - 1;
            this.peekBuffer = [];
          }
          next() {
            var nextResult = this.peekBuffer.length > 0 ?
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.peekBuffer.pop() : this.iterator.next();
            if (nextResult.done) {
              this._lastIndex = -1;
            } else {
              this._lastIndex++;
            }
            return nextResult;
          }
          peek() {
            if (this.peekBuffer.length > 0) {
              // We know that the buffer is not empty, so we can safely use the
              // non-null assertion operator
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              return this.peekBuffer[0];
            }
            var result = this.iterator.next();
            this.peekBuffer.push(result);
            return result;
          }
          get lastIndex() {
            return this._lastIndex;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // Reversible Generator Wrapper Class
        /**
         * Generator function that yields each Unicode code point in the given string.
         */
        function getUnicodeCodepoints(text, start = 0) {
          var i, codePoint;
          return _regeneratorRuntime().wrap(function getUnicodeCodepoints$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                i = start;
              case 1:
                if (!(i < text.length)) {
                  _context5.next = 10;
                  break;
                }
                codePoint = text.codePointAt(i);
                if (!(codePoint === undefined)) {
                  _context5.next = 5;
                  break;
                }
                throw new Error('Invalid Unicode code point');
              case 5:
                _context5.next = 7;
                return codePoint;
              case 7:
                i += codePoint <= 0xffff ? 1 : 2;
                _context5.next = 1;
                break;
              case 10:
              case "end":
                return _context5.stop();
            }
          }, _marked);
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Measures a single-line of text width ignoring any unmapped glyphs including line breaks
         *
         * @param text
         * @param shaperProps
         * @param shaper
         * @returns
         */
        function measureText(text, shaperProps, shaper) {
          var glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, 0), 0));
          var width = 0;
          var _iterator6 = _createForOfIteratorHelper(glyphs),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var glyph = _step6.value;
              if (glyph.mapped) {
                width += glyph.xAdvance;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          return width;
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function layoutText(curLineIndex, startX, startY, text, textAlign, width, height, fontSize, lineHeight, letterSpacing,
        /**
         * Mutated
         */
        vertexBuffer, contain,
        /**
         * Mutated
         */
        lineCache, rwSdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines) {
          assertTruthy(trFontFace, 'Font face must be loaded');
          assertTruthy(trFontFace.loaded, 'Font face must be loaded');
          assertTruthy(trFontFace.data, 'Font face must be loaded');
          assertTruthy(trFontFace.shaper, 'Font face must be loaded');
          // Regardless of fontSize (or other scaling properties), we layout the vertices of each glyph
          // using the fixed coordinate space determined by font size used to produce the atlas.
          // Scaling for display is handled by shader uniforms inexpensively.
          // So we have:
          //  - vertex space: the space in which the vertices of each glyph are laid out
          //  - screen space: the screen pixel space
          // Input properties such as x, y, w, fontSize, letterSpacing, etc. are all expressed in screen space.
          // We convert these to the vertex space by dividing them the `fontSizeRatio` factor.
          /**
           * See above
           */
          var fontSizeRatio = fontSize / trFontFace.data.info.size;
          /**
           * `lineHeight` in vertex coordinates
           */
          var vertexLineHeight = lineHeight / fontSizeRatio;
          /**
           * `w` in vertex coordinates
           */
          var vertexW = width / fontSizeRatio;
          /**
           * `letterSpacing` in vertex coordinates
           */
          var vertexLSpacing = letterSpacing / fontSizeRatio;
          var startingLineCacheEntry = lineCache[curLineIndex];
          var startingCodepointIndex = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.codepointIndex) || 0;
          var startingMaxX = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.maxX) || 0;
          var startingMaxY = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.maxY) || 0;
          var maxX = startingMaxX;
          var maxY = startingMaxY;
          var curX = startX;
          var curY = startY;
          var bufferOffset = 0;
          /**
           * Buffer offset to last word boundry. This is -1 when we aren't in a word boundry.
           */
          var lastWord = {
            codepointIndex: -1,
            bufferOffset: -1,
            xStart: -1
          };
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          var shaper = trFontFace.shaper;
          var shaperProps = {
            letterSpacing: vertexLSpacing
          };
          // Get glyphs
          var glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, startingCodepointIndex), startingCodepointIndex));
          var glyphResult;
          var curLineBufferStart = -1;
          var bufferLineInfos = [];
          var vertexTruncateHeight = height / fontSizeRatio;
          var overflowSuffVertexWidth = measureText(overflowSuffix, shaperProps, shaper);
          // Line-by-line layout
          var moreLines = true;
          while (moreLines) {
            var nextLineWillFit = (maxLines === 0 || curLineIndex + 1 < maxLines) && (contain !== 'both' || scrollable || curY + vertexLineHeight + trFontFace.maxCharHeight <= vertexTruncateHeight);
            var lineVertexW = nextLineWillFit ? vertexW : vertexW - overflowSuffVertexWidth;
            /**
             * Vertex X position to the beginning of the last word boundary. This becomes -1 when we start traversing a word.
             */
            var xStartLastWordBoundary = 0;
            var lineIsBelowWindowTop = curY + vertexLineHeight >= rwSdf.y1;
            var lineIsAboveWindowBottom = curY <= rwSdf.y2;
            var lineIsWithinWindow = lineIsBelowWindowTop && lineIsAboveWindowBottom;
            // Layout glyphs in this line
            // Any break statements in this while loop will trigger a line break
            while ((glyphResult = glyphs.next()) && !glyphResult.done) {
              var glyph = glyphResult.value;
              if (curLineIndex === lineCache.length) {
                lineCache.push({
                  codepointIndex: glyph.cluster,
                  maxY,
                  maxX
                });
              } else if (curLineIndex > lineCache.length) {
                throw new Error('Unexpected lineCache length');
              }
              // If we encounter a word boundary (white space or newline) we invalidate
              // the lastWord and set the xStartLastWordBoundary if we haven't already.
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
                // Mapped glyph
                var charEndX = curX + glyph.xOffset + glyph.width;
                // Word wrap check
                if (
                // We are containing the text
                contain !== 'none' &&
                // The current glyph reaches outside the contained width
                charEndX >= lineVertexW &&
                // There is a last word that we can break to the next line
                lastWord.codepointIndex !== -1 &&
                // Prevents infinite loop when a single word is longer than the width
                lastWord.xStart > 0) {
                  // The current word is about to go off the edge of the container width
                  // Reinitialize the iterator starting at the last word
                  // and proceeding to the next line
                  if (nextLineWillFit) {
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, lastWord.codepointIndex), lastWord.codepointIndex));
                    bufferOffset = lastWord.bufferOffset;
                    break;
                  } else {
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
                    curX = lastWord.xStart;
                    bufferOffset = lastWord.bufferOffset;
                    // HACK: For the rest of the line when inserting the overflow suffix,
                    // set contain = 'none' to prevent an infinite loop.
                    contain = 'none';
                  }
                } else {
                  // This glyph fits, so we can add it to the buffer
                  var quadX = curX + glyph.xOffset;
                  var quadY = curY + glyph.yOffset;
                  // Only add to buffer for rendering if the line is within the render window
                  if (lineIsWithinWindow) {
                    if (curLineBufferStart === -1) {
                      curLineBufferStart = bufferOffset;
                    }
                    var atlasEntry = trFontFace.getAtlasEntry(glyph.glyphId);
                    // Add texture coordinates
                    var u = atlasEntry.x / trFontFace.data.common.scaleW;
                    var v = atlasEntry.y / trFontFace.data.common.scaleH;
                    var uvWidth = atlasEntry.width / trFontFace.data.common.scaleW;
                    var uvHeight = atlasEntry.height / trFontFace.data.common.scaleH;
                    // TODO: (Performance) We can optimize this by using ELEMENT_ARRAY_BUFFER
                    // eliminating the need to duplicate vertices
                    // Top-left
                    vertexBuffer[bufferOffset++] = quadX;
                    vertexBuffer[bufferOffset++] = quadY;
                    vertexBuffer[bufferOffset++] = u;
                    vertexBuffer[bufferOffset++] = v;
                    // Top-right
                    vertexBuffer[bufferOffset++] = quadX + glyph.width;
                    vertexBuffer[bufferOffset++] = quadY;
                    vertexBuffer[bufferOffset++] = u + uvWidth;
                    vertexBuffer[bufferOffset++] = v;
                    // Bottom-left
                    vertexBuffer[bufferOffset++] = quadX;
                    vertexBuffer[bufferOffset++] = quadY + glyph.height;
                    vertexBuffer[bufferOffset++] = u;
                    vertexBuffer[bufferOffset++] = v + uvHeight;
                    // Bottom-right
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
                // Unmapped character
                // Handle newlines
                if (glyph.codepoint === 10) {
                  if (nextLineWillFit) {
                    // The whole line fit, so we can break to the next line
                    break;
                  } else {
                    // The whole line won't fit, so we need to add the overflow suffix
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
                    // HACK: For the rest of the line when inserting the overflow suffix,
                    // set contain = 'none' to prevent an infinite loop.
                    contain = 'none';
                  }
                }
              }
            }
            // Prepare for the next line...
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
            // Figure out if there are any more lines to render...
            if (!forceFullLayoutCalc && contain === 'both' && curY > rwSdf.y2) {
              // Stop layout calculation early (for performance purposes) if:
              // - We're not forcing a full layout calculation (for width/height calculation)
              // - ...and we're containing the text vertically+horizontally (contain === 'both')
              // - ...and we have a render window
              // - ...and the next line is below the bottom of the render window
              moreLines = false;
            } else if (glyphResult && glyphResult.done) {
              // If we've reached the end of the text, we know we're done
              moreLines = false;
            } else if (!nextLineWillFit) {
              // If we're contained vertically+horizontally (contain === 'both')
              // but not scrollable and the next line won't fit, we're done.
              moreLines = false;
            }
          }
          // Use textAlign to determine if we need to adjust the x position of the text
          // in the buffer line by line
          if (textAlign === 'center') {
            var vertexTextW = contain === 'none' ? maxX : vertexW;
            for (var i = 0; i < bufferLineInfos.length; i++) {
              var line = bufferLineInfos[i];
              // - 4 = the x position of a rightmost vertex
              var lineWidth =
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart];
              var xOffset = (vertexTextW - lineWidth) / 2;
              for (var j = line.bufferStart; j < line.bufferEnd; j += 4) {
                vertexBuffer[j] += xOffset;
              }
            }
          } else if (textAlign === 'right') {
            var _vertexTextW = contain === 'none' ? maxX : vertexW;
            for (var _i7 = 0; _i7 < bufferLineInfos.length; _i7++) {
              var _line = bufferLineInfos[_i7];
              var _lineWidth = _line.bufferEnd === _line.bufferStart ? 0 :
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              vertexBuffer[_line.bufferEnd - 4] - vertexBuffer[_line.bufferStart];
              var _xOffset = _vertexTextW - _lineWidth;
              for (var _j2 = _line.bufferStart; _j2 < _line.bufferEnd; _j2 += 4) {
                vertexBuffer[_j2] += _xOffset;
              }
            }
          }
          assertTruthy(glyphResult);
          return {
            bufferNumFloats: bufferOffset,
            bufferNumQuads: bufferOffset / 16,
            layoutNumCharacters: glyphResult.done ? text.length - startingCodepointIndex : glyphResult.value.cluster - startingCodepointIndex + 1,
            fullyProcessed: !!glyphResult.done,
            maxX,
            maxY
          };
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Round up to the nearest multiple of the given number.
         *
         * @param value
         * @param multiple
         * @returns
         */
        function roundUpToMultiple(value, multiple) {
          return Math.ceil(value / multiple) * multiple;
        }
        /**
         * Round down to the nearest multiple of the given number.
         *
         * @param value
         * @param multiple
         * @returns
         */
        function roundDownToMultiple(value, multiple) {
          return Math.floor(value / multiple) * multiple;
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Create a render window from the given parameters.
         *
         * @remarks
         * The render window is a rectangle that defines the area of the text that
         * should be rendered. It is used to skip rendering parts of the text that
         * are outside of the render window. The render window is relative to the
         * text's top left corner of the overrall text.
         *
         * @param x The x coordinate of the text element's top left corner relative to the screen.
         * @param y The y coordinate of the text element's top left corner relative to the screen.
         * @param scrollY The amount of pixels to scroll the text vertically.
         * @param lineHeight The number of extra lines to render above and below the visible window.
         * @param visibleWindow The visible window of the text element relative to the screen
         * @returns
         */
        function setRenderWindow(outRenderWindow, x, y, scrollY, lineHeight, bufferMargin, visibleWindow, fontSizeRatio) {
          var screen = outRenderWindow.screen,
            sdf = outRenderWindow.sdf;
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
            var x1 = visibleWindow.x1 - x;
            var x2 = x1 + (visibleWindow.x2 - visibleWindow.x1);
            var y1Base = visibleWindow.y1 - y + scrollY;
            var y1 = roundDownToMultiple(y1Base - bufferMargin, lineHeight || 1);
            var y2 = roundUpToMultiple(y1Base + (visibleWindow.y2 - visibleWindow.y1) + bufferMargin, lineHeight || 1);
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var weightConversions = {
          normal: 400,
          bold: 700,
          bolder: 900,
          lighter: 100
        };
        var fontWeightToNumber = weight => {
          if (typeof weight === 'number') {
            return weight;
          }
          return weightConversions[weight] || 400;
        };
        function rawResolveFontToUse(familyMapsByPriority, family, weightIn, style, stretch) {
          var weight = fontWeightToNumber(weightIn);
          var _iterator7 = _createForOfIteratorHelper(familyMapsByPriority),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var fontFamiles = _step7.value;
              var fontFaces = fontFamiles[family];
              if (!fontFaces) {
                continue;
              }
              if (fontFaces.size === 1) {
                // No Exact match found, find nearest weight match
                console.warn(`TrFontManager: Only one font face found for family: '${family}' - will be used for all weights and styles`);
                return fontFaces.values().next().value;
              }
              var weightMap = new Map();
              var _iterator8 = _createForOfIteratorHelper(fontFaces),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var fontFace = _step8.value;
                  var fontFamilyWeight = fontWeightToNumber(fontFace.descriptors.weight);
                  if (fontFamilyWeight === weight && fontFace.descriptors.style === style && fontFace.descriptors.stretch === stretch) {
                    return fontFace;
                  }
                  weightMap.set(fontFamilyWeight, fontFace);
                }
                // No Exact match found, find nearest weight match
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              var msg = `TrFontManager: No exact match: '${family} Weight: ${weight} Style: ${style} Stretch: ${stretch}'`;
              console.error(msg);
              // Follow the CSS font-weight algorithm to find the nearest weight match
              // https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-matching-algorithm
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
                // reset back for the next loop
                weight = 600;
              }
              while (weight < 1000) {
                if (weightMap.has(weight)) {
                  return weightMap.get(weight);
                }
                weight += 100;
              }
              // finally check lower again
              weight = 500;
              while (weight > 0) {
                if (weightMap.has(weight)) {
                  return weightMap.get(weight);
                }
                weight -= 100;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return;
        }
        var resolveFontToUse = memize(rawResolveFontToUse);
        class TrFontManager {
          constructor(textRenderers) {
            _defineProperty(this, "textRenderers", void 0);
            this.textRenderers = textRenderers;
            // Intentionally left blank
          }
          addFontFace(font) {
            // All the font face to all of the text renderers that support it
            for (var trId in this.textRenderers) {
              var tr = this.textRenderers[trId];
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
            var fontFamily = props.fontFamily,
              fontWeight = props.fontWeight,
              fontStyle = props.fontStyle,
              fontStretch = props.fontStretch;
            return resolveFontToUse(familyMapsByPriority, fontFamily, fontWeight, fontStyle, fontStretch);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Ephemeral rect object used for calculations
         */
        var tmpRect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        /**
         * Singleton class for rendering text using signed distance fields.
         *
         * @remarks
         * SdfTextRenderer supports both single-channel and multi-channel signed distance fields.
         */
        class SdfTextRenderer extends TextRenderer {
          constructor(stage) {
            super(stage);
            /**
             * Map of font family names to a set of font faces.
             */
            _defineProperty(this, "ssdfFontFamilies", {});
            _defineProperty(this, "msdfFontFamilies", {});
            _defineProperty(this, "fontFamilyArray", [this.ssdfFontFamilies, this.msdfFontFamilies]);
            _defineProperty(this, "sdfShader", void 0);
            _defineProperty(this, "rendererBounds", void 0);
            this.sdfShader = this.stage.shManager.loadShader('SdfShader').shader;
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
                  // Only schedule an update if the text is not already rendered
                  // (renderWindow is invalid) and the element possibly overlaps the screen
                  // This is to avoid unnecessary updates when we know text is off-screen
                  if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
                    this.scheduleUpdateState(state);
                  }
                }
              },
              y: (state, value) => {
                state.props.y = value;
                if (state.elementBounds.valid) {
                  this.setElementBoundsY(state);
                  // See x() for explanation
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
                // Only invalidate layout cache if we're containing in the horizontal direction
                if (state.props.contain !== 'none') {
                  this.invalidateLayoutCache(state);
                }
              },
              height: (state, value) => {
                state.props.height = value;
                // Only invalidate layout cache if we're containing in the vertical direction
                if (state.props.contain === 'both') {
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
                // Scrolling doesn't need to invalidate any caches, but it does need to
                // schedule an update
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
            // TODO: Support matching on font stretch, weight and style (if/when needed)
            // For now we just match on the font family name
            // '$$SDF_FAILURE_TEST$$' is used to test the 'failure' event coming from text
            var fontFamily = props.fontFamily;
            return fontFamily in this.ssdfFontFamilies || fontFamily in this.msdfFontFamilies || fontFamily === '$$SDF_FAILURE_TEST$$';
          }
          isFontFaceSupported(fontFace) {
            return fontFace instanceof SdfTrFontFace;
          }
          addFontFace(fontFace) {
            // Make sure the font face is an SDF font face (it should have already passed
            // the `isFontFaceSupported` check)
            assertTruthy(fontFace instanceof SdfTrFontFace);
            var familyName = fontFace.fontFamily;
            var fontFamiles = fontFace.type === 'ssdf' ? this.ssdfFontFamilies : fontFace.type === 'msdf' ? this.msdfFontFamilies : undefined;
            if (!fontFamiles) {
              console.warn(`Invalid font face type: ${fontFace.type}`);
              return;
            }
            var faceSet = fontFamiles[familyName];
            if (!faceSet) {
              faceSet = new Set();
              fontFamiles[familyName] = faceSet;
            }
            faceSet.add(fontFace);
          }
          createState(props) {
            return {
              props,
              status: 'initialState',
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
              vertexBuffer: undefined,
              webGlBuffers: null,
              bufferUploaded: false,
              textH: undefined,
              textW: undefined,
              distanceRange: 0,
              trFontFace: undefined,
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
            var trFontFace = state.trFontFace;
            var textH = state.textH,
              lineCache = state.lineCache,
              debugData = state.debugData,
              forceFullLayoutCalc = state.forceFullLayoutCalc;
            debugData.updateCount++;
            // On the first update call we need to set the status to loading
            if (state.status === 'initialState') {
              this.setStatus(state, 'loading');
            }
            // Resolve font face if we haven't yet
            if (!trFontFace) {
              trFontFace = this.resolveFontFace(state.props);
              state.trFontFace = trFontFace;
              if (!trFontFace) {
                var msg = `SdfTextRenderer: Could not resolve font face for family: '${state.props.fontFamily}'`;
                console.error(msg);
                this.setStatus(state, 'failed', new Error(msg));
                return;
              }
              trFontFace.texture.setRenderableOwner(state, state.isRenderable);
            }
            // If the font hasn't been loaded yet, stop here.
            // Listen for the 'loaded' event and forward fontLoaded event
            if (!trFontFace.loaded) {
              trFontFace.once('loaded', () => {
                this.scheduleUpdateState(state);
              });
              return;
            }
            // If the font is loaded then so should the data
            assertTruthy(trFontFace.data, 'Font face data should be loaded');
            var _state$props4 = state.props,
              text = _state$props4.text,
              fontSize = _state$props4.fontSize,
              x = _state$props4.x,
              y = _state$props4.y,
              contain = _state$props4.contain,
              width = _state$props4.width,
              height = _state$props4.height,
              lineHeight = _state$props4.lineHeight,
              verticalAlign = _state$props4.verticalAlign,
              scrollable = _state$props4.scrollable,
              overflowSuffix = _state$props4.overflowSuffix,
              maxLines = _state$props4.maxLines;
            // scrollY only has an effect when contain === 'both' and scrollable === true
            var scrollY = contain === 'both' && scrollable ? state.props.scrollY : 0;
            var renderWindow = state.renderWindow;
            /**
             * The font size of the SDF font face (the basis for SDF space units)
             */
            var sdfFontSize = trFontFace.data.info.size;
            /**
             * Divide screen space units by this to get the SDF space units
             * Mulitple SDF space units by this to get screen space units
             */
            var fontSizeRatio = fontSize / sdfFontSize;
            // Needed in renderWindow calculation
            var sdfLineHeight = lineHeight / fontSizeRatio;
            state.distanceRange = fontSizeRatio * trFontFace.data.distanceField.distanceRange;
            // Allocate buffers if needed
            var neededLength = text.length * FLOATS_PER_GLYPH;
            var vertexBuffer = state.vertexBuffer;
            if (!vertexBuffer || vertexBuffer.length < neededLength) {
              vertexBuffer = new Float32Array(neededLength * 2);
            }
            var elementBounds = state.elementBounds;
            if (!elementBounds.valid) {
              this.setElementBoundsX(state);
              this.setElementBoundsY(state);
              elementBounds.valid = true;
            }
            // Return early if we're still viewing inside the established render window
            // No need to re-render what we've already rendered
            // (Only if there's an established renderWindow and we're not suppressing early exit)
            if (!forceFullLayoutCalc && renderWindow.valid) {
              var rwScreen = renderWindow.screen;
              if (x + rwScreen.x1 <= elementBounds.x1 && x + rwScreen.x2 >= elementBounds.x2 && y - scrollY + rwScreen.y1 <= elementBounds.y1 && y - scrollY + rwScreen.y2 >= elementBounds.y2) {
                this.setStatus(state, 'loaded');
                return;
              }
              // Otherwise invalidate the renderWindow so it can be redone
              renderWindow.valid = false;
              this.setStatus(state, 'loading');
            }
            var _state$props5 = state.props,
              offsetY = _state$props5.offsetY,
              textAlign = _state$props5.textAlign;
            // Create a new renderWindow if needed
            if (!renderWindow.valid) {
              var isPossiblyOnScreen = boundsOverlap(elementBounds, this.rendererBounds);
              if (!isPossiblyOnScreen) {
                // If the element is not possibly on screen, we can skip the layout and rendering completely
                return;
              }
              setRenderWindow(renderWindow, x, y, scrollY, lineHeight, contain === 'both' ? elementBounds.y2 - elementBounds.y1 : 0, elementBounds, fontSizeRatio);
              // console.log('newRenderWindow', renderWindow);
            }
            var start = getStartConditions(sdfFontSize, sdfLineHeight, lineHeight, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH);
            if (!start) {
              // Nothing to render, return early, but still mark as loaded (since the text is just scrolled
              // out of view)
              this.setStatus(state, 'loaded');
              return;
            }
            var letterSpacing = state.props.letterSpacing;
            var out2 = layoutText(start.lineIndex, start.sdfX, start.sdfY, text, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, renderWindow.sdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines);
            state.bufferUploaded = false;
            state.bufferNumFloats = out2.bufferNumFloats;
            state.bufferNumQuads = out2.bufferNumQuads;
            state.vertexBuffer = vertexBuffer;
            state.renderWindow = renderWindow;
            debugData.lastLayoutNumCharacters = out2.layoutNumCharacters;
            debugData.bufferSize = vertexBuffer.byteLength;
            // If we didn't exit early, we know we have completely computed w/h
            if (out2.fullyProcessed) {
              state.textW = out2.maxX * fontSizeRatio;
              state.textH = out2.maxY * fontSizeRatio;
            }
            // if (state.props.debug.printLayoutTime) {
            //   debugData.layoutSum += performance.now() - updateStartTime;
            //   debugData.layoutCount++;
            // }
            this.setStatus(state, 'loaded');
          }
          renderQuads(state, transform, clippingRect, alpha, parentHasRenderTexture, framebufferDimensions) {
            var _trFontFace$data, _state$trFontFace;
            if (!state.vertexBuffer) {
              // Nothing to draw
              return;
            }
            var renderer = this.stage.renderer;
            var _state$props6 = state.props,
              fontSize = _state$props6.fontSize,
              color = _state$props6.color,
              contain = _state$props6.contain,
              scrollable = _state$props6.scrollable,
              zIndex = _state$props6.zIndex,
              debug = _state$props6.debug;
            // scrollY only has an effect when contain === 'both' and scrollable === true
            var scrollY = contain === 'both' && scrollable ? state.props.scrollY : 0;
            var _state$textW2 = state.textW,
              textW = _state$textW2 === void 0 ? 0 : _state$textW2,
              _state$textH2 = state.textH,
              textH = _state$textH2 === void 0 ? 0 : _state$textH2,
              distanceRange = state.distanceRange,
              vertexBuffer = state.vertexBuffer,
              bufferUploaded = state.bufferUploaded,
              trFontFace = state.trFontFace,
              elementBounds = state.elementBounds;
            var webGlBuffers = state.webGlBuffers;
            if (!webGlBuffers) {
              var glw = renderer.glw;
              var stride = 4 * Float32Array.BYTES_PER_ELEMENT;
              var webGlBuffer = glw.createBuffer();
              assertTruthy(webGlBuffer);
              state.webGlBuffers = new BufferCollection([{
                buffer: webGlBuffer,
                attributes: {
                  a_position: {
                    name: 'a_position',
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride,
                    offset: 0 // start at the beginning of the buffer
                  },
                  a_textureCoordinate: {
                    name: 'a_textureCoordinate',
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride,
                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                  }
                }
              }]);
              state.bufferUploaded = false;
              assertTruthy(state.webGlBuffers);
              webGlBuffers = state.webGlBuffers;
            }
            if (!bufferUploaded) {
              var _webGlBuffers$getBuff, _webGlBuffers;
              var _glw = renderer.glw;
              var buffer = (_webGlBuffers$getBuff = (_webGlBuffers = webGlBuffers) === null || _webGlBuffers === void 0 ? void 0 : _webGlBuffers.getBuffer('a_textureCoordinate')) !== null && _webGlBuffers$getBuff !== void 0 ? _webGlBuffers$getBuff : null;
              _glw.arrayBufferData(buffer, vertexBuffer, _glw.STATIC_DRAW);
              state.bufferUploaded = true;
            }
            assertTruthy(trFontFace);
            if (scrollable && contain === 'both') {
              assertTruthy(elementBounds.valid);
              var elementRect = convertBoundToRect(elementBounds, tmpRect);
              if (clippingRect.valid) {
                state.clippingRect.valid = true;
                clippingRect = intersectRect(clippingRect, elementRect, state.clippingRect);
              } else {
                state.clippingRect.valid = true;
                clippingRect = copyRect(elementRect, state.clippingRect);
              }
            }
            var renderOp = new WebGlCoreRenderOp(renderer.glw, renderer.options, webGlBuffers, this.sdfShader, {
              transform: transform.data,
              // IMPORTANT: The SDF Shader expects the color NOT to be premultiplied
              // for the best blending results. Which is why we use `mergeColorAlpha`
              // instead of `mergeColorAlphaPremultiplied` here.
              color: mergeColorAlpha(color, alpha),
              size: fontSize / (((_trFontFace$data = trFontFace.data) === null || _trFontFace$data === void 0 ? void 0 : _trFontFace$data.info.size) || 0),
              scrollY,
              distanceRange,
              debug: debug.sdfShaderDebug
            }, alpha, clippingRect, {
              height: textH,
              width: textW
            }, 0, zIndex, false, parentHasRenderTexture, framebufferDimensions);
            var texture = (_state$trFontFace = state.trFontFace) === null || _state$trFontFace === void 0 ? void 0 : _state$trFontFace.texture;
            assertTruthy(texture);
            var ctxTexture = this.stage.txManager.getCtxTexture(texture);
            renderOp.addTexture(ctxTexture);
            renderOp.length = state.bufferNumFloats;
            renderOp.numQuads = state.bufferNumQuads;
            renderer.addRenderOp(renderOp);
            // if (!debug.disableScissor) {
            //   renderer.enableScissor(
            //     visibleRect.x,
            //     visibleRect.y,
            //     visibleRect.w,
            //     visibleRect.h,
            //   );
            // }
            // Draw the arrays
            // gl.drawArrays(
            //   gl.TRIANGLES, // Primitive type
            //   0,
            //   bufferNumVertices, // Number of verticies
            // );
            // renderer.disableScissor();
            // if (debug.showElementRect) {
            //   this.renderer.drawBorder(
            //     Colors.Blue,
            //     elementRect.x,
            //     elementRect.y,
            //     elementRect.w,
            //     elementRect.h,
            //   );
            // }
            // if (debug.showVisibleRect) {
            //   this.renderer.drawBorder(
            //     Colors.Green,
            //     visibleRect.x,
            //     visibleRect.y,
            //     visibleRect.w,
            //     visibleRect.h,
            //   );
            // }
            // if (debug.showRenderWindow && renderWindow) {
            //   this.renderer.drawBorder(
            //     Colors.Red,
            //     x + renderWindow.x1,
            //     y + renderWindow.y1 - scrollY,
            //     x + renderWindow.x2 - (x + renderWindow.x1),
            //     y + renderWindow.y2 - scrollY - (y + renderWindow.y1 - scrollY),
            //   );
            // }
            // if (debug.printLayoutTime) {
            //   debugData.drawSum += performance.now() - drawStartTime;
            //   debugData.drawCount++;
            // }
          }
          setIsRenderable(state, renderable) {
            var _state$trFontFace2;
            super.setIsRenderable(state, renderable);
            (_state$trFontFace2 = state.trFontFace) === null || _state$trFontFace2 === void 0 || _state$trFontFace2.texture.setRenderableOwner(state, renderable);
          }
          destroyState(state) {
            var _state$trFontFace3;
            super.destroyState(state);
            // If there's a Font Face assigned we must free the owner relation to its texture
            (_state$trFontFace3 = state.trFontFace) === null || _state$trFontFace3 === void 0 || _state$trFontFace3.texture.setRenderableOwner(state, false);
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
              state.trFontFace = undefined;
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
            state.textH = undefined;
            state.textW = undefined;
            state.lineCache = [];
            this.setStatus(state, 'loading');
            this.scheduleUpdateState(state);
          }
          setElementBoundsX(state) {
            var _state$props7 = state.props,
              x = _state$props7.x,
              contain = _state$props7.contain,
              width = _state$props7.width;
            var elementBounds = state.elementBounds;
            elementBounds.x1 = x;
            elementBounds.x2 = contain !== 'none' ? x + width : Infinity;
          }
          setElementBoundsY(state) {
            var _state$props8 = state.props,
              y = _state$props8.y,
              contain = _state$props8.contain,
              height = _state$props8.height;
            var elementBounds = state.elementBounds;
            elementBounds.y1 = y;
            elementBounds.y2 = contain === 'both' ? y + height : Infinity;
          }
        }

        /**
         * Type guard that checks if a Class extends CoreExtension.
         *
         * @param Class
         * @returns
         */
        function classExtendsCoreExtension(Class) {
          return Class.prototype instanceof CoreExtension;
        }
        function loadCoreExtension(_x5, _x6) {
          return _loadCoreExtension.apply(this, arguments);
        }
        function _loadCoreExtension() {
          _loadCoreExtension = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(coreExtensionModule, stage) {
            var module$1, ExtensionClass, coreExtension;
            return _regeneratorRuntime().wrap(function _callee12$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.prev = 0;
                  console.log('Loading core extension', coreExtensionModule);
                  _context13.next = 4;
                  return __vitePreload(() => module.import(coreExtensionModule /* @vite-ignore */), false ? "__VITE_PRELOAD__" : void 0);
                case 4:
                  module$1 = _context13.sent;
                  _context13.next = 12;
                  break;
                case 7:
                  _context13.prev = 7;
                  _context13.t0 = _context13["catch"](0);
                  console.error(`The core extension module at '${coreExtensionModule}' could not be loaded.`);
                  console.error(_context13.t0);
                  return _context13.abrupt("return");
                case 12:
                  if (module$1.default) {
                    _context13.next = 15;
                    break;
                  }
                  console.error(`The core extension module at '${coreExtensionModule}' does not have a default export.`);
                  return _context13.abrupt("return");
                case 15:
                  ExtensionClass = module$1.default;
                  if (!classExtendsCoreExtension(ExtensionClass)) {
                    _context13.next = 29;
                    break;
                  }
                  coreExtension = new ExtensionClass();
                  _context13.prev = 18;
                  _context13.next = 21;
                  return coreExtension.run(stage);
                case 21:
                  _context13.next = 27;
                  break;
                case 23:
                  _context13.prev = 23;
                  _context13.t1 = _context13["catch"](18);
                  console.error(`The core extension at '${coreExtensionModule}' threw an error.`);
                  console.error(_context13.t1);
                case 27:
                  _context13.next = 30;
                  break;
                case 29:
                  console.error(`The core extension at '${coreExtensionModule}' does not extend CoreExtension.`);
                case 30:
                case "end":
                  return _context13.stop();
              }
            }, _callee12, null, [[0, 7], [18, 23]]);
          }));
          return _loadCoreExtension.apply(this, arguments);
        }
        function santizeCustomDataMap(d) {
          var validTypes = {
            boolean: true,
            string: true,
            number: true
          };
          var keys = Object.keys(d);
          for (var i = 0; i < keys.length; i++) {
            var _key6 = keys[i];
            if (!_key6) {
              continue;
            }
            var value = d[_key6];
            var valueType = typeof value;
            // Typescript doesn't understand the above const valueType ¯\_(ツ)_/¯
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore-next-line
            if (valueType === 'string' && value.length > 2048) {
              console.warn(`Custom Data value for ${_key6} is too long, it will be truncated to 2048 characters`);
              // same here, see above comment, this can only be a string at this point
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore-next-line
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              d[_key6] = value.substring(0, 2048);
            }
            if (!validTypes[valueType]) {
              console.warn(`Custom Data value for ${_key6} is not a boolean, string, or number, it will be ignored`);
              delete d[_key6];
            }
          }
          return d;
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The Renderer Main API
         *
         * @remarks
         * This is the primary class used to configure and operate the Renderer.
         *
         * It is used to create and destroy Nodes, as well as Texture and Shader
         * references.
         *
         * Example:
         * ```ts
         * import { RendererMain, MainCoreDriver } from '@lightningjs/renderer';
         *
         * // Initialize the Renderer
         * const renderer = new RendererMain(
         *   {
         *     appWidth: 1920,
         *     appHeight: 1080
         *   },
         *   'app',
         *   new MainCoreDriver(),
         * );
         * ```
         */
        class RendererMain extends EventEmitter {
          /**
           * Constructs a new Renderer instance
           *
           * @param settings Renderer settings
           * @param target Element ID or HTMLElement to insert the canvas into
           * @param driver Core Driver to use
           */
          constructor(settings, target, driver) {
            var _settings$clearColor, _settings$experimenta, _settings$enableConte, _settings$enableInspe;
            super();
            _defineProperty(this, "root", null);
            _defineProperty(this, "driver", void 0);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "settings", void 0);
            _defineProperty(this, "inspector", null);
            _defineProperty(this, "nodes", new Map());
            _defineProperty(this, "nextTextureId", 1);
            /**
             * Texture Usage Tracker for Usage Based Texture Garbage Collection
             *
             * @remarks
             * For internal use only. DO NOT ACCESS.
             */
            _defineProperty(this, "textureTracker", void 0);
            var resolvedSettings = {
              appWidth: settings.appWidth || 1920,
              appHeight: settings.appHeight || 1080,
              txMemByteThreshold: settings.txMemByteThreshold || 124e6,
              boundsMargin: settings.boundsMargin || 0,
              deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
              devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || window.devicePixelRatio,
              clearColor: (_settings$clearColor = settings.clearColor) !== null && _settings$clearColor !== void 0 ? _settings$clearColor : 0x00000000,
              coreExtensionModule: settings.coreExtensionModule || null,
              experimental_FinalizationRegistryTextureUsageTracker: (_settings$experimenta = settings.experimental_FinalizationRegistryTextureUsageTracker) !== null && _settings$experimenta !== void 0 ? _settings$experimenta : false,
              textureCleanupOptions: settings.textureCleanupOptions || {},
              fpsUpdateInterval: settings.fpsUpdateInterval || 0,
              numImageWorkers: settings.numImageWorkers !== undefined ? settings.numImageWorkers : 2,
              enableContextSpy: (_settings$enableConte = settings.enableContextSpy) !== null && _settings$enableConte !== void 0 ? _settings$enableConte : false,
              enableInspector: (_settings$enableInspe = settings.enableInspector) !== null && _settings$enableInspe !== void 0 ? _settings$enableInspe : false
            };
            this.settings = resolvedSettings;
            var appWidth = resolvedSettings.appWidth,
              appHeight = resolvedSettings.appHeight,
              deviceLogicalPixelRatio = resolvedSettings.deviceLogicalPixelRatio,
              devicePhysicalPixelRatio = resolvedSettings.devicePhysicalPixelRatio,
              enableInspector = resolvedSettings.enableInspector;
            var releaseCallback = textureId => {
              this.driver.releaseTexture(textureId);
            };
            var useFinalizationRegistryTracker = resolvedSettings.experimental_FinalizationRegistryTextureUsageTracker && typeof FinalizationRegistry === 'function';
            this.textureTracker = useFinalizationRegistryTracker ? new FinalizationRegistryTextureUsageTracker(releaseCallback) : new ManualCountTextureUsageTracker(releaseCallback, this.settings.textureCleanupOptions);
            var deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
            var deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
            this.driver = driver;
            var canvas = document.createElement('canvas');
            this.canvas = canvas;
            canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
            canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
            canvas.style.width = `${deviceLogicalWidth}px`;
            canvas.style.height = `${deviceLogicalHeight}px`;
            var targetEl;
            if (typeof target === 'string') {
              targetEl = document.getElementById(target);
            } else {
              targetEl = target;
            }
            if (!targetEl) {
              throw new Error('Could not find target element');
            }
            // Hook up the driver's callbacks
            driver.onCreateNode = node => {
              this.nodes.set(node.id, node);
            };
            driver.onBeforeDestroyNode = node => {
              this.nodes.delete(node.id);
            };
            driver.onFpsUpdate = fpsData => {
              this.emit('fpsUpdate', fpsData);
            };
            driver.onFrameTick = frameTickData => {
              this.emit('frameTick', frameTickData);
            };
            driver.onIdle = () => {
              this.emit('idle');
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
          init() {
            var _this2 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _this2.driver.init(_this2, _this2.settings, _this2.canvas);
                  case 2:
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                    _this2.root = _this2.driver.getRootNode();
                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }, _callee5);
            }))();
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
            var _props$fontSize, _props$text, _props$textRendererOv, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$fontStretch, _props$textAlign, _props$contain, _props$scrollable, _props$scrollY2, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$textBaseline, _props$verticalAlign, _props$overflowSuffix, _props$debug2;
            var fontSize = (_props$fontSize = props.fontSize) !== null && _props$fontSize !== void 0 ? _props$fontSize : 16;
            var data = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(props)), {}, {
              text: (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : '',
              textRendererOverride: (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null,
              fontSize,
              fontFamily: (_props$fontFamily = props.fontFamily) !== null && _props$fontFamily !== void 0 ? _props$fontFamily : 'sans-serif',
              fontStyle: (_props$fontStyle = props.fontStyle) !== null && _props$fontStyle !== void 0 ? _props$fontStyle : 'normal',
              fontWeight: (_props$fontWeight = props.fontWeight) !== null && _props$fontWeight !== void 0 ? _props$fontWeight : 'normal',
              fontStretch: (_props$fontStretch = props.fontStretch) !== null && _props$fontStretch !== void 0 ? _props$fontStretch : 'normal',
              textAlign: (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : 'left',
              contain: (_props$contain = props.contain) !== null && _props$contain !== void 0 ? _props$contain : 'none',
              scrollable: (_props$scrollable = props.scrollable) !== null && _props$scrollable !== void 0 ? _props$scrollable : false,
              scrollY: (_props$scrollY2 = props.scrollY) !== null && _props$scrollY2 !== void 0 ? _props$scrollY2 : 0,
              offsetY: (_props$offsetY = props.offsetY) !== null && _props$offsetY !== void 0 ? _props$offsetY : 0,
              letterSpacing: (_props$letterSpacing = props.letterSpacing) !== null && _props$letterSpacing !== void 0 ? _props$letterSpacing : 0,
              lineHeight: (_props$lineHeight = props.lineHeight) !== null && _props$lineHeight !== void 0 ? _props$lineHeight : fontSize,
              maxLines: (_props$maxLines = props.maxLines) !== null && _props$maxLines !== void 0 ? _props$maxLines : 0,
              textBaseline: (_props$textBaseline = props.textBaseline) !== null && _props$textBaseline !== void 0 ? _props$textBaseline : 'alphabetic',
              verticalAlign: (_props$verticalAlign = props.verticalAlign) !== null && _props$verticalAlign !== void 0 ? _props$verticalAlign : 'top',
              overflowSuffix: (_props$overflowSuffix = props.overflowSuffix) !== null && _props$overflowSuffix !== void 0 ? _props$overflowSuffix : '...',
              debug: (_props$debug2 = props.debug) !== null && _props$debug2 !== void 0 ? _props$debug2 : {}
            });
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
            var _props$color8, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _ref9, _ref10, _props$colorBl, _ref11, _ref12, _props$colorBr, _props$data, _ref13, _props$parent$rtt, _props$parent, _props$parent2, _props$x, _props$y, _props$width8, _props$height2, _props$alpha2, _props$autosize, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _props$zIndex, _props$zIndexLocked, _props$parent3, _props$texture, _props$shader, _props$src2, _props$scale2, _ref14, _props$scaleX, _ref15, _props$scaleY, _props$mount, _ref16, _props$mountX, _ref17, _props$mountY, _props$pivot2, _ref18, _props$pivotX, _ref19, _props$pivotY, _props$rotation2, _props$rtt;
            var color = (_props$color8 = props.color) !== null && _props$color8 !== void 0 ? _props$color8 : 0xffffffff;
            var colorTl = (_ref5 = (_ref6 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : props.colorTop) !== null && _ref6 !== void 0 ? _ref6 : props.colorLeft) !== null && _ref5 !== void 0 ? _ref5 : color;
            var colorTr = (_ref7 = (_ref8 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : props.colorTop) !== null && _ref8 !== void 0 ? _ref8 : props.colorRight) !== null && _ref7 !== void 0 ? _ref7 : color;
            var colorBl = (_ref9 = (_ref10 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : props.colorBottom) !== null && _ref10 !== void 0 ? _ref10 : props.colorLeft) !== null && _ref9 !== void 0 ? _ref9 : color;
            var colorBr = (_ref11 = (_ref12 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : props.colorBottom) !== null && _ref12 !== void 0 ? _ref12 : props.colorRight) !== null && _ref11 !== void 0 ? _ref11 : color;
            var data = santizeCustomDataMap((_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : {});
            var parentHasRenderTexture = (_ref13 = (_props$parent$rtt = (_props$parent = props.parent) === null || _props$parent === void 0 ? void 0 : _props$parent.rtt) !== null && _props$parent$rtt !== void 0 ? _props$parent$rtt : (_props$parent2 = props.parent) === null || _props$parent2 === void 0 ? void 0 : _props$parent2.parentHasRenderTexture) !== null && _ref13 !== void 0 ? _ref13 : false;
            return {
              x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
              y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
              width: (_props$width8 = props.width) !== null && _props$width8 !== void 0 ? _props$width8 : 0,
              height: (_props$height2 = props.height) !== null && _props$height2 !== void 0 ? _props$height2 : 0,
              alpha: (_props$alpha2 = props.alpha) !== null && _props$alpha2 !== void 0 ? _props$alpha2 : 1,
              autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
              clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
              color,
              colorTop: (_props$colorTop = props.colorTop) !== null && _props$colorTop !== void 0 ? _props$colorTop : color,
              colorBottom: (_props$colorBottom = props.colorBottom) !== null && _props$colorBottom !== void 0 ? _props$colorBottom : color,
              colorLeft: (_props$colorLeft = props.colorLeft) !== null && _props$colorLeft !== void 0 ? _props$colorLeft : color,
              colorRight: (_props$colorRight = props.colorRight) !== null && _props$colorRight !== void 0 ? _props$colorRight : color,
              colorBl,
              colorBr,
              colorTl,
              colorTr,
              zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
              zIndexLocked: (_props$zIndexLocked = props.zIndexLocked) !== null && _props$zIndexLocked !== void 0 ? _props$zIndexLocked : 0,
              parent: (_props$parent3 = props.parent) !== null && _props$parent3 !== void 0 ? _props$parent3 : null,
              texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
              shader: (_props$shader = props.shader) !== null && _props$shader !== void 0 ? _props$shader : null,
              // Since setting the `src` will trigger a texture load, we need to set it after
              // we set the texture. Otherwise, problems happen.
              src: (_props$src2 = props.src) !== null && _props$src2 !== void 0 ? _props$src2 : '',
              scale: (_props$scale2 = props.scale) !== null && _props$scale2 !== void 0 ? _props$scale2 : null,
              scaleX: (_ref14 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : props.scale) !== null && _ref14 !== void 0 ? _ref14 : 1,
              scaleY: (_ref15 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : props.scale) !== null && _ref15 !== void 0 ? _ref15 : 1,
              mount: (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0,
              mountX: (_ref16 = (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : props.mount) !== null && _ref16 !== void 0 ? _ref16 : 0,
              mountY: (_ref17 = (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : props.mount) !== null && _ref17 !== void 0 ? _ref17 : 0,
              pivot: (_props$pivot2 = props.pivot) !== null && _props$pivot2 !== void 0 ? _props$pivot2 : 0.5,
              pivotX: (_ref18 = (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : props.pivot) !== null && _ref18 !== void 0 ? _ref18 : 0.5,
              pivotY: (_ref19 = (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : props.pivot) !== null && _ref19 !== void 0 ? _ref19 : 0.5,
              rotation: (_props$rotation2 = props.rotation) !== null && _props$rotation2 !== void 0 ? _props$rotation2 : 0,
              rtt: (_props$rtt = props.rtt) !== null && _props$rtt !== void 0 ? _props$rtt : false,
              parentHasRenderTexture,
              data: data
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
            var id = this.nextTextureId++;
            var desc = {
              descType: 'texture',
              txType: textureType,
              props,
              options: _objectSpread(_objectSpread({}, options), {}, {
                // This ID is used to identify the texture in the CoreTextureManager's
                // ID Texture Map cache.
                id
              })
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
              descType: 'shader',
              shType: shaderType,
              props: props
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
            throw new Error('Not implemented');
          }
          advanceFrame() {
            throw new Error('Not implemented');
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
            throw new Error('Not implemented');
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class CoreAnimation extends EventEmitter {
          //fixme - aint got not time for this
          constructor(node, props, settings) {
            super();
            _defineProperty(this, "node", void 0);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "settings", void 0);
            _defineProperty(this, "propStartValues", {});
            _defineProperty(this, "restoreValues", {});
            _defineProperty(this, "progress", 0);
            _defineProperty(this, "delayFor", 0);
            _defineProperty(this, "timingFunction", void 0);
            _defineProperty(this, "propsList", void 0);
            this.node = node;
            this.props = props;
            this.settings = settings;
            this.propStartValues = {};
            this.propsList = Object.keys(props);
            this.propsList.forEach(propName => {
              this.propStartValues[propName] = node[propName];
            });
            this.timingFunction = t => t;
            if (settings.easing && typeof settings.easing === 'string') {
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
            Object.keys(this.props).forEach(propName => {
              this.node[propName] = this.propStartValues[propName];
            });
          }
          reverse() {
            this.progress = 0;
            Object.keys(this.props).forEach(propName => {
              // set the start value to the current value
              var startValue = this.props[propName];
              var endValue = this.propStartValues[propName];
              // swap the start and end values
              this.props[propName] = endValue;
              this.propStartValues[propName] = startValue;
            });
            // restore stop method if we are not looping
            if (!this.settings.loop) {
              this.settings.stopMethod = false;
            }
          }
          applyEasing(p, s, e) {
            return (this.timingFunction(p) || p) * (e - s) + s;
          }
          update(dt) {
            var _this$settings = this.settings,
              duration = _this$settings.duration,
              loop = _this$settings.loop,
              easing = _this$settings.easing,
              stopMethod = _this$settings.stopMethod;
            if (!duration) {
              this.emit('finished', {});
              return;
            }
            if (this.delayFor > 0) {
              this.delayFor -= dt;
              return;
            }
            if (this.delayFor <= 0 && this.progress === 0) {
              this.emit('start', {});
            }
            this.progress += dt / duration;
            if (this.progress > 1) {
              this.progress = loop ? 0 : 1;
              if (stopMethod) {
                // If there's a stop method emit finished so the stop method can be applied.
                // TODO: We should probably reevaluate how stopMethod is implemented as currently
                // stop method 'reset' does not work when looping.
                this.emit('finished', {});
                return;
              }
            }
            for (var i = 0; i < this.propsList.length; i++) {
              var propName = this.propsList[i];
              var propValue = this.props[propName];
              var startValue = this.propStartValues[propName];
              var endValue = propValue;
              if (propName.indexOf('color') !== -1) {
                // check if we have to change the color to begin with
                if (startValue === endValue) {
                  this.node[propName] = startValue;
                  continue;
                }
                if (easing) {
                  var easingProgressValue = this.timingFunction(this.progress) || this.progress;
                  var easingColorValue = mergeColorProgress(startValue, endValue, easingProgressValue);
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
              this.emit('finished', {});
            }
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class CoreAnimationController {
          constructor(manager, animation) {
            _defineProperty(this, "manager", void 0);
            _defineProperty(this, "animation", void 0);
            _defineProperty(this, "startedPromise", null);
            /**
             * If this is null, then the animation hasn't started yet.
             */
            _defineProperty(this, "startedResolve", null);
            _defineProperty(this, "stoppedPromise", null);
            /**
             * If this is null, then the animation is in a finished / stopped state.
             */
            _defineProperty(this, "stoppedResolve", null);
            _defineProperty(this, "state", void 0);
            this.manager = manager;
            this.animation = animation;
            this.state = 'stopped';
          }
          start() {
            this.makeStartedPromise();
            this.animation.once('start', this.started.bind(this));
            this.makeStoppedPromise();
            this.animation.once('finished', this.finished.bind(this));
            // prevent registering the same animation twice
            if (!this.manager.activeAnimations.has(this.animation)) {
              this.manager.registerAnimation(this.animation);
            }
            this.state = 'running';
            return this;
          }
          stop() {
            this.manager.unregisterAnimation(this.animation);
            if (this.stoppedResolve !== null) {
              this.stoppedResolve();
              this.stoppedResolve = null;
            }
            this.animation.reset();
            this.state = 'stopped';
            return this;
          }
          pause() {
            this.manager.unregisterAnimation(this.animation);
            this.state = 'paused';
            return this;
          }
          restore() {
            this.stoppedResolve = null;
            this.animation.restore();
            return this;
          }
          waitUntilStarted() {
            this.makeStartedPromise();
            var promise = this.startedPromise;
            assertTruthy(promise);
            return promise;
          }
          waitUntilStopped() {
            this.makeStoppedPromise();
            var promise = this.stoppedPromise;
            assertTruthy(promise);
            return promise;
          }
          makeStartedPromise() {
            if (this.startedResolve === null) {
              this.startedPromise = new Promise(resolve => {
                this.startedResolve = resolve;
              });
            }
          }
          makeStoppedPromise() {
            if (this.stoppedResolve === null) {
              this.stoppedPromise = new Promise(resolve => {
                this.stoppedResolve = resolve;
              });
            }
          }
          started() {
            assertTruthy(this.startedResolve);
            // resolve promise (and pass current this to continue to the chain)
            this.startedResolve(this);
            this.startedResolve = null;
          }
          finished() {
            assertTruthy(this.stoppedResolve);
            // If the animation is looping, then we need to restart it.
            var _this$animation$setti = this.animation.settings,
              loop = _this$animation$setti.loop,
              stopMethod = _this$animation$setti.stopMethod;
            if (stopMethod === 'reverse') {
              this.animation.reverse();
              this.start();
              return;
            }
            // resolve promise
            this.stoppedResolve();
            this.stoppedResolve = null;
            if (loop) {
              return;
            }
            // unregister animation
            this.manager.unregisterAnimation(this.animation);
          }
        }

        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        // Matrix3d is a 3x3 matrix in column-major order because that's how WebGL likes it.
        // The matrix is stored in a Float32Array in the following order:
        // | 0 3 6 |
        // | 1 4 7 |
        // | 2 5 8 |
        // The following constants are used to index into the array in a row-major way.
        var m0 = 0;
        var m1 = 3;
        var m2 = 6;
        var m3 = 1;
        var m4 = 4;
        var m5 = 7;
        var m6 = 2;
        var m7 = 5;
        var m8 = 8;
        /**
         * A 3x3 matrix representing a 2D transformation.
         *
         * @remarks
         * The matrix is stored in column-major order in the `data` property which can
         * be passed directly to a WebGL shader uniform.
         *
         * The matrix is stored in a Float32Array in the following index order:
         * | 0 3 6 |
         * | 1 4 7 |
         * | 2 5 8 |
         *
         * Only the first two rows are really used for the transformation. The last row is
         * generally always `[0, 0, 1]` if you only use the 2D transformation methods
         * provided by this class.
         *
         * For convenience, entries in the first two rows can be accessed by the following
         * getter properties:
         * | ta tb tx |
         * | tc td ty |
         * | 0  0  1  |
         */
        class Matrix3d {
          /**
           * Creates a new 3x3 matrix.
           *
           * @param entries Row-major 3x3 matrix
           */
          constructor(entries) {
            _defineProperty(this, "data", void 0);
            if (entries) {
              // Transpose the input matrix so that it's in column-major order.
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
            var e0 = a.data[m0] * b.data[m0] + a.data[m1] * b.data[m3] + a.data[m2] * b.data[m6];
            var e1 = a.data[m0] * b.data[m1] + a.data[m1] * b.data[m4] + a.data[m2] * b.data[m7];
            var e2 = a.data[m0] * b.data[m2] + a.data[m1] * b.data[m5] + a.data[m2] * b.data[m8];
            var e3 = a.data[m3] * b.data[m0] + a.data[m4] * b.data[m3] + a.data[m5] * b.data[m6];
            var e4 = a.data[m3] * b.data[m1] + a.data[m4] * b.data[m4] + a.data[m5] * b.data[m7];
            var e5 = a.data[m3] * b.data[m2] + a.data[m4] * b.data[m5] + a.data[m5] * b.data[m8];
            var e6 = a.data[m6] * b.data[m0] + a.data[m7] * b.data[m3] + a.data[m8] * b.data[m6];
            var e7 = a.data[m6] * b.data[m1] + a.data[m7] * b.data[m4] + a.data[m8] * b.data[m7];
            var e8 = a.data[m6] * b.data[m2] + a.data[m7] * b.data[m5] + a.data[m8] * b.data[m8];
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
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
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
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var e0 = this.data[m0] * cos + this.data[m1] * sin;
            var e1 = this.data[m1] * cos - this.data[m0] * sin;
            var e3 = this.data[m3] * cos + this.data[m4] * sin;
            var e4 = this.data[m4] * cos - this.data[m3] * sin;
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
            return [this.data[m0] * x + this.data[m1] * y + this.data[m2], this.data[m3] * x + this.data[m4] * y + this.data[m3]];
          }
        }
        var tempMatrix = new Matrix3d();
        var rx1 = 0;
        var rx2 = 2;
        var rx3 = 4;
        var rx4 = 6;
        var ry1 = 1;
        var ry2 = 3;
        var ry3 = 5;
        var ry4 = 7;
        class RenderCoords {
          constructor(entries) {
            _defineProperty(this, "data", void 0);
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var CoreNodeRenderState;
        (function (CoreNodeRenderState) {
          CoreNodeRenderState[CoreNodeRenderState["Init"] = 0] = "Init";
          CoreNodeRenderState[CoreNodeRenderState["OutOfBounds"] = 2] = "OutOfBounds";
          CoreNodeRenderState[CoreNodeRenderState["InBounds"] = 4] = "InBounds";
          CoreNodeRenderState[CoreNodeRenderState["InViewport"] = 8] = "InViewport";
        })(CoreNodeRenderState || (CoreNodeRenderState = {}));
        var CoreNodeRenderStateMap = new Map();
        CoreNodeRenderStateMap.set(CoreNodeRenderState.Init, 'init');
        CoreNodeRenderStateMap.set(CoreNodeRenderState.OutOfBounds, 'outOfBounds');
        CoreNodeRenderStateMap.set(CoreNodeRenderState.InBounds, 'inBounds');
        CoreNodeRenderStateMap.set(CoreNodeRenderState.InViewport, 'inViewport');
        var UpdateType;
        (function (UpdateType) {
          /**
           * Child updates
           */
          UpdateType[UpdateType["Children"] = 1] = "Children";
          /**
           * Scale/Rotate transform update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `scaleRotateTransform`
           */
          UpdateType[UpdateType["ScaleRotate"] = 2] = "ScaleRotate";
          /**
           * Translate transform update (x/y/width/height/pivot/mount)
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `localTransform`
           */
          UpdateType[UpdateType["Local"] = 4] = "Local";
          /**
           * Global Transform update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `globalTransform`
           * - `renderCoords`
           * - `renderBound`
           */
          UpdateType[UpdateType["Global"] = 8] = "Global";
          /**
           * Clipping rect update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `clippingRect`
           */
          UpdateType[UpdateType["Clipping"] = 16] = "Clipping";
          /**
           * Calculated ZIndex update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `calcZIndex`
           */
          UpdateType[UpdateType["CalculatedZIndex"] = 32] = "CalculatedZIndex";
          /**
           * Z-Index Sorted Children update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `children` (sorts children by their `calcZIndex`)
           */
          UpdateType[UpdateType["ZIndexSortedChildren"] = 64] = "ZIndexSortedChildren";
          /**
           * Premultiplied Colors update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `premultipliedColorTl`
           * - `premultipliedColorTr`
           * - `premultipliedColorBl`
           * - `premultipliedColorBr`
           */
          UpdateType[UpdateType["PremultipliedColors"] = 128] = "PremultipliedColors";
          /**
           * World Alpha update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `worldAlpha` = `parent.worldAlpha` * `alpha`
           */
          UpdateType[UpdateType["WorldAlpha"] = 256] = "WorldAlpha";
          /**
           * Render State update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `renderState`
           */
          UpdateType[UpdateType["RenderState"] = 512] = "RenderState";
          /**
           * Is Renderable update
           *
           * @remarks
           * CoreNode Properties Updated:
           * - `isRenderable`
           */
          UpdateType[UpdateType["IsRenderable"] = 1024] = "IsRenderable";
          /**
           * None
           */
          UpdateType[UpdateType["None"] = 0] = "None";
          /**
           * All
           */
          UpdateType[UpdateType["All"] = 2047] = "All";
        })(UpdateType || (UpdateType = {}));
        class CoreNode extends EventEmitter {
          constructor(stage, props) {
            super();
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "children", []);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "updateType", UpdateType.All);
            _defineProperty(this, "globalTransform", void 0);
            _defineProperty(this, "scaleRotateTransform", void 0);
            _defineProperty(this, "localTransform", void 0);
            _defineProperty(this, "renderCoords", void 0);
            _defineProperty(this, "renderBound", void 0);
            _defineProperty(this, "strictBound", void 0);
            _defineProperty(this, "preloadBound", void 0);
            _defineProperty(this, "clippingRect", {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              valid: false
            });
            _defineProperty(this, "isRenderable", false);
            _defineProperty(this, "renderState", CoreNodeRenderState.Init);
            _defineProperty(this, "worldAlpha", 1);
            _defineProperty(this, "premultipliedColorTl", 0);
            _defineProperty(this, "premultipliedColorTr", 0);
            _defineProperty(this, "premultipliedColorBl", 0);
            _defineProperty(this, "premultipliedColorBr", 0);
            _defineProperty(this, "calcZIndex", 0);
            _defineProperty(this, "hasRTTupdates", false);
            _defineProperty(this, "onTextureLoaded", (target, dimensions) => {
              this.autosizeNode(dimensions);
              // If parent has a render texture, flag that we need to update
              // @todo: Reserve type for RTT updates
              if (this.parentHasRenderTexture) {
                this.setRTTUpdates(1);
              }
              this.emit('loaded', {
                type: 'texture',
                dimensions
              });
              queueMicrotask(() => {
                // Texture was loaded. In case the RAF loop has already stopped, we request
                // a render to ensure the texture is rendered.
                this.stage.requestRender();
              });
            });
            _defineProperty(this, "onTextureFailed", (target, error) => {
              this.emit('failed', {
                type: 'texture',
                error
              });
            });
            _defineProperty(this, "onTextureFreed", target => {
              this.emit('freed', {
                type: 'texture'
              });
            });
            this.stage = stage;
            this.props = _objectSpread(_objectSpread({}, props), {}, {
              parent: null,
              // Assign a default value to parentHasRenderTexture
              parentHasRenderTexture: false
            });
            // Allow for parent to be processed appropriately
            this.parent = props.parent;
            // Allow for Render Texture to be processed appropriately
            this.rtt = props.rtt;
            this.updateScaleRotateTransform();
          }
          //#region Textures
          loadTexture(textureType, props, options = null) {
            // First unload any existing texture
            if (this.props.texture) {
              this.unloadTexture();
            }
            var txManager = this.stage.txManager;
            var texture = txManager.loadTexture(textureType, props, options);
            this.props.texture = texture;
            this.props.textureOptions = options;
            this.setUpdateType(UpdateType.IsRenderable);
            // If texture is already loaded / failed, trigger loaded event manually
            // so that users get a consistent event experience.
            // We do this in a microtask to allow listeners to be attached in the same
            // synchronous task after calling loadTexture()
            queueMicrotask(() => {
              if (texture.state === 'loaded') {
                this.onTextureLoaded(texture, texture.dimensions);
              } else if (texture.state === 'failed') {
                this.onTextureFailed(texture, texture.error);
              } else if (texture.state === 'freed') {
                this.onTextureFreed(texture);
              }
              texture.on('loaded', this.onTextureLoaded);
              texture.on('failed', this.onTextureFailed);
              texture.on('freed', this.onTextureFreed);
            });
          }
          unloadTexture() {
            if (this.props.texture) {
              var texture = this.props.texture;
              texture.off('loaded', this.onTextureLoaded);
              texture.off('failed', this.onTextureFailed);
              texture.off('freed', this.onTextureFreed);
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
            var shManager = this.stage.renderer.getShaderManager();
            assertTruthy(shManager);
            var _shManager$loadShader = shManager.loadShader(shaderType, props),
              shader = _shManager$loadShader.shader,
              p = _shManager$loadShader.props;
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
            // If we're updating this node at all, we need to inform the parent
            // (and all ancestors) that their children need updating as well
            var parent = this.props.parent;
            if (parent && !(parent.updateType & UpdateType.Children)) {
              parent.setUpdateType(UpdateType.Children);
            }
            // If node is part of RTT texture
            // Flag that we need to update
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
            var pivotTranslateX = this.props.pivotX * this.props.width;
            var pivotTranslateY = this.props.pivotY * this.props.height;
            var mountTranslateX = this.props.mountX * this.props.width;
            var mountTranslateY = this.props.mountY * this.props.height;
            this.localTransform = Matrix3d.translate(pivotTranslateX - mountTranslateX + this.props.x, pivotTranslateY - mountTranslateY + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-pivotTranslateX, -pivotTranslateY);
            this.setUpdateType(UpdateType.Global);
          }
          /**
           * @todo: test for correct calculation flag
           * @param delta
           */
          update(delta, parentClippingRect) {
            if (this.updateType & UpdateType.ScaleRotate) {
              this.updateScaleRotateTransform();
              this.setUpdateType(UpdateType.Local);
            }
            if (this.updateType & UpdateType.Local) {
              this.updateLocalTransform();
              this.setUpdateType(UpdateType.Global);
            }
            var parent = this.props.parent;
            var childUpdateType = UpdateType.None;
            if (this.updateType & UpdateType.Global) {
              var _this$props$parent;
              assertTruthy(this.localTransform);
              this.globalTransform = Matrix3d.copy((parent === null || parent === void 0 ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
              if (this.parentHasRenderTexture && (_this$props$parent = this.props.parent) !== null && _this$props$parent !== void 0 && _this$props$parent.rtt) {
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
              // If all the colors are the same just sent them all to the same value
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
            // No need to update zIndex if there is no parent
            if (parent && this.updateType & UpdateType.CalculatedZIndex) {
              this.calculateZIndex();
              // Tell parent to re-sort children
              parent.setUpdateType(UpdateType.ZIndexSortedChildren);
            }
            if (this.updateType & UpdateType.Children && this.children.length && !this.rtt) {
              this.children.forEach(child => {
                // Trigger the depenedent update types on the child
                child.setUpdateType(childUpdateType);
                // If child has no updates, skip
                if (child.updateType === 0) {
                  return;
                }
                child.update(delta, this.clippingRect);
              });
            }
            // Sorting children MUST happen after children have been updated so
            // that they have the oppotunity to update their calculated zIndex.
            if (this.updateType & UpdateType.ZIndexSortedChildren) {
              // reorder z-index
              this.sortChildren();
            }
            // reset update type
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
            // Consider removing these checks and just using the color property check above.
            // Maybe add a forceRender prop for nodes that should always render.
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
            var rectW = parentClippingRect.width || this.stage.root.width;
            var rectH = parentClippingRect.height || this.stage.root.height;
            this.strictBound = createBound(parentClippingRect.x, parentClippingRect.y, parentClippingRect.x + rectW, parentClippingRect.y + rectH, this.strictBound);
            var renderM = this.stage.boundsMargin;
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
            var renderState = this.checkRenderBounds(parentClippingRect);
            if (renderState !== this.renderState) {
              var previous = this.renderState;
              this.renderState = renderState;
              if (previous === CoreNodeRenderState.InViewport) {
                this.emit('outOfViewport', {
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
              var event = CoreNodeRenderStateMap.get(renderState);
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
            var newIsRenderable;
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
            var _this$props$texture;
            (_this$props$texture = this.props.texture) === null || _this$props$texture === void 0 || _this$props$texture.setRenderableOwner(this, isRenderable);
          }
          calculateRenderCoords() {
            var width = this.width,
              height = this.height,
              transform = this.globalTransform;
            assertTruthy(transform);
            var tx = transform.tx,
              ty = transform.ty,
              ta = transform.ta,
              tb = transform.tb,
              tc = transform.tc,
              td = transform.td;
            if (tb === 0 && tc === 0) {
              var minX = tx;
              var maxX = tx + width * ta;
              var minY = ty;
              var maxY = ty + height * td;
              this.renderCoords = RenderCoords.translate(
              //top-left
              minX, minY,
              //top-right
              maxX, minY,
              //bottom-right
              maxX, maxY,
              //bottom-left
              minX, maxY, this.renderCoords);
            } else {
              this.renderCoords = RenderCoords.translate(
              //top-left
              tx, ty,
              //top-right
              tx + width * ta, ty + width * tc,
              //bottom-right
              tx + width * ta + height * tb, ty + width * tc + height * td,
              //bottom-left
              tx + height * tb, ty + height * td, this.renderCoords);
            }
          }
          updateBoundingRect() {
            var renderCoords = this.renderCoords,
              transform = this.globalTransform;
            assertTruthy(transform);
            assertTruthy(renderCoords);
            var tb = transform.tb,
              tc = transform.tc;
            var x1 = renderCoords.x1,
              y1 = renderCoords.y1,
              x3 = renderCoords.x3,
              y3 = renderCoords.y3;
            if (tb === 0 || tc === 0) {
              this.renderBound = createBound(x1, y1, x3, y3, this.renderBound);
            } else {
              var x2 = renderCoords.x2,
                x4 = renderCoords.x4,
                y2 = renderCoords.y2,
                y4 = renderCoords.y4;
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
            var clippingRect = this.clippingRect,
              props = this.props,
              gt = this.globalTransform;
            var clipping = props.clipping;
            var isRotated = gt.tb !== 0 || gt.tc !== 0;
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
              // Intersect parent clipping rect with node clipping rect
              intersectRect(parentClippingRect, clippingRect, clippingRect);
            } else if (parentClippingRect.valid) {
              // Copy parent clipping rect
              copyRect(parentClippingRect, clippingRect);
              clippingRect.valid = true;
            }
          }
          calculateZIndex() {
            var _props$parent4, _props$parent5;
            var props = this.props;
            var z = props.zIndex || 0;
            var p = ((_props$parent4 = props.parent) === null || _props$parent4 === void 0 ? void 0 : _props$parent4.zIndex) || 0;
            var zIndex = z;
            if ((_props$parent5 = props.parent) !== null && _props$parent5 !== void 0 && _props$parent5.zIndexLocked) {
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
          renderQuads(renderer) {
            var _this$props2 = this.props,
              width = _this$props2.width,
              height = _this$props2.height,
              texture = _this$props2.texture,
              textureOptions = _this$props2.textureOptions,
              shader = _this$props2.shader,
              shaderProps = _this$props2.shaderProps,
              rtt = _this$props2.rtt,
              parentHasRenderTexture = _this$props2.parentHasRenderTexture;
            // Prevent quad rendering if parent has a render texture
            // and renderer is not currently rendering to a texture
            if (parentHasRenderTexture) {
              if (!renderer.renderToTextureActive) {
                return;
              }
              // Prevent quad rendering if parent render texture is not the active render texture
              if (this.parentRenderTexture !== renderer.activeRttNode) {
                return;
              }
            }
            var premultipliedColorTl = this.premultipliedColorTl,
              premultipliedColorTr = this.premultipliedColorTr,
              premultipliedColorBl = this.premultipliedColorBl,
              premultipliedColorBr = this.premultipliedColorBr;
            var zIndex = this.zIndex,
              worldAlpha = this.worldAlpha,
              gt = this.globalTransform,
              clippingRect = this.clippingRect;
            assertTruthy(gt);
            // add to list of renderables to be sorted before rendering
            renderer.addQuad({
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
            var _this$props$parent2, _this$props$parent3;
            return this.props.x + (((_this$props$parent2 = this.props.parent) === null || _this$props$parent2 === void 0 ? void 0 : _this$props$parent2.absX) || ((_this$props$parent3 = this.props.parent) === null || _this$props$parent3 === void 0 || (_this$props$parent3 = _this$props$parent3.globalTransform) === null || _this$props$parent3 === void 0 ? void 0 : _this$props$parent3.tx) || 0);
          }
          get absY() {
            var _this$props$parent$ab, _this$props$parent4;
            return this.props.y + ((_this$props$parent$ab = (_this$props$parent4 = this.props.parent) === null || _this$props$parent4 === void 0 ? void 0 : _this$props$parent4.absY) !== null && _this$props$parent$ab !== void 0 ? _this$props$parent$ab : 0);
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
            // The CoreNode `scale` property is only used by Animations.
            // Unlike INode, `null` should never be possibility for Animations.
            return this.scaleX;
          }
          set scale(value) {
            // The CoreNode `scale` property is only used by Animations.
            // Unlike INode, `null` should never be possibility for Animations.
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
            this.children.forEach(child => {
              child.setUpdateType(UpdateType.CalculatedZIndex);
            });
          }
          get zIndex() {
            return this.props.zIndex;
          }
          set zIndex(value) {
            this.props.zIndex = value;
            this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
            this.children.forEach(child => {
              child.setUpdateType(UpdateType.CalculatedZIndex);
            });
          }
          get parent() {
            return this.props.parent;
          }
          set parent(newParent) {
            var oldParent = this.props.parent;
            if (oldParent === newParent) {
              return;
            }
            this.props.parent = newParent;
            if (oldParent) {
              var index = oldParent.children.indexOf(this);
              assertTruthy(index !== -1, "CoreNode.parent: Node not found in old parent's children!");
              oldParent.children.splice(index, 1);
              oldParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
            }
            if (newParent) {
              newParent.children.push(this);
              // Since this node has a new parent, to be safe, have it do a full update.
              this.setUpdateType(UpdateType.All);
              // Tell parent that it's children need to be updated and sorted.
              newParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
              if (newParent.rtt || newParent.parentHasRenderTexture) {
                this.setRTTUpdates(UpdateType.All);
              }
            }
            this.parentHasRenderTexture = (newParent === null || newParent === void 0 ? void 0 : newParent.rtt) || (newParent === null || newParent === void 0 ? void 0 : newParent.parentHasRenderTexture);
            this.updateScaleRotateTransform();
          }
          get rtt() {
            return this.props.rtt;
          }
          set rtt(value) {
            var _this$stage$renderer;
            if (!value) {
              return;
            }
            this.props.rtt = true;
            this.hasRTTupdates = true;
            // Store RTT nodes in a separate list
            (_this$stage$renderer = this.stage.renderer) === null || _this$stage$renderer === void 0 || _this$stage$renderer.renderToTexture(this);
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
            if (this.parentHasRenderTexture && !this.rtt) {
              var _this$parent;
              return (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.framebufferDimensions;
            }
            return {
              width: this.width,
              height: this.height
            };
          }
          /**
           * Returns the parent render texture node if it exists.
           */
          get parentRenderTexture() {
            var parent = this.parent;
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
            var _this$parent2;
            this.hasRTTupdates = true;
            (_this$parent2 = this.parent) === null || _this$parent2 === void 0 || _this$parent2.setRTTUpdates(type);
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var nextId = 1;
        function getNewId() {
          return nextId++;
        }
        class MainOnlyNode extends EventEmitter {
          constructor(props, rendererMain, stage, coreNode) {
            var _coreNode$id;
            super();
            _defineProperty(this, "rendererMain", void 0);
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "id", void 0);
            _defineProperty(this, "coreNode", void 0);
            // Prop stores
            _defineProperty(this, "_children", []);
            _defineProperty(this, "_src", '');
            _defineProperty(this, "_parent", null);
            _defineProperty(this, "_texture", null);
            _defineProperty(this, "_shader", null);
            _defineProperty(this, "_data", {});
            _defineProperty(this, "onTextureLoaded", (target, payload) => {
              this.emit('loaded', payload);
            });
            _defineProperty(this, "onTextureFailed", (target, payload) => {
              this.emit('failed', payload);
            });
            _defineProperty(this, "onTextureFreed", (target, payload) => {
              this.emit('freed', payload);
            });
            _defineProperty(this, "onOutOfBounds", (target, payload) => {
              this.emit('outOfBounds', payload);
            });
            _defineProperty(this, "onInBounds", (target, payload) => {
              this.emit('inBounds', payload);
            });
            _defineProperty(this, "onOutOfViewport", (target, payload) => {
              this.emit('outOfViewport', payload);
            });
            _defineProperty(this, "onInViewport", (target, payload) => {
              this.emit('inViewport', payload);
            });
            this.rendererMain = rendererMain;
            this.stage = stage;
            this.id = (_coreNode$id = coreNode === null || coreNode === void 0 ? void 0 : coreNode.id) !== null && _coreNode$id !== void 0 ? _coreNode$id : getNewId();
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
            // Forward loaded/failed events
            this.coreNode.on('loaded', this.onTextureLoaded);
            this.coreNode.on('failed', this.onTextureFailed);
            this.coreNode.on('freed', this.onTextureFreed);
            this.coreNode.on('outOfBounds', this.onOutOfBounds);
            this.coreNode.on('inBounds', this.onInBounds);
            this.coreNode.on('outOfViewport', this.onOutOfViewport);
            this.coreNode.on('inViewport', this.onInViewport);
            // Assign properties to this object
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
            // We ignore `null` when it's set.
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
            var _newParent$coreNode;
            var oldParent = this._parent;
            this._parent = newParent;
            this.coreNode.parent = (_newParent$coreNode = newParent === null || newParent === void 0 ? void 0 : newParent.coreNode) !== null && _newParent$coreNode !== void 0 ? _newParent$coreNode : null;
            if (oldParent) {
              var index = oldParent.children.indexOf(this);
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
            this.texture = this.rendererMain.createTexture('ImageTexture', {
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
              this.texture = this.rendererMain.createTexture('RenderTexture', {
                width: this.width,
                height: this.height
              }, {
                preload: true,
                flipY: true
              });
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
            this.emit('beforeDestroy', {});
            //use while loop since setting parent to null removes it from array
            var child = this.children[0];
            while (child) {
              child.destroy();
              child = this.children[0];
            }
            this.coreNode.destroy();
            this.parent = null;
            this.texture = null;
            this.emit('afterDestroy', {});
            this.removeAllListeners();
          }
          flush() {
            // No-op
          }
          animate(props, settings) {
            var animation = new CoreAnimation(this.coreNode, props, settings);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
            var controller = new CoreAnimationController(this.stage.animationManager, animation);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return controller;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Platform render loop initiator
         */
        var startLoop = stage => {
          var isIdle = false;
          var runLoop = () => {
            stage.updateAnimations();
            if (!stage.hasSceneUpdates()) {
              // We still need to calculate the fps else it looks like the app is frozen
              stage.calculateFps();
              setTimeout(runLoop, 16.666666666666668);
              if (!isIdle) {
                stage.emit('idle');
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
        /**
         * Return unix timestamp
         * @return {number}
         */
        var getTimeStamp = () => {
          return performance ? performance.now() : Date.now();
        };

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class AnimationManager {
          constructor() {
            _defineProperty(this, "activeAnimations", new Set());
          }
          registerAnimation(animation) {
            this.activeAnimations.add(animation);
          }
          unregisterAnimation(animation) {
            this.activeAnimations.delete(animation);
          }
          update(dt) {
            this.activeAnimations.forEach(animation => {
              animation.update(dt);
            });
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class ImageWorkerManager {
          constructor(numImageWorkers) {
            _defineProperty(this, "imageWorkersEnabled", true);
            _defineProperty(this, "messageManager", {});
            _defineProperty(this, "workers", []);
            _defineProperty(this, "workerIndex", 0);
            this.workers = this.createWorkers(numImageWorkers);
            this.workers.forEach(worker => {
              worker.onmessage = this.handleMessage.bind(this);
            });
          }
          handleMessage(event) {
            var _event$data = event.data,
              src = _event$data.src,
              data = _event$data.data,
              error = _event$data.error;
            var msg = this.messageManager[src];
            if (msg) {
              var _msg = _slicedToArray(msg, 2),
                resolve = _msg[0],
                reject = _msg[1];
              delete this.messageManager[src];
              if (error) {
                reject(new Error(error));
              } else {
                resolve(data);
              }
            }
          }
          createWorkers(numWorkers = 1) {
            var workerCode = `
      function hasAlphaChannel(mimeType) {
          return (mimeType.indexOf("image/png") !== -1);
      }

      function getImage(src, premultiplyAlpha) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);
          xhr.responseType = 'blob';

          xhr.onload = function() {
            if (xhr.status === 200) {
              var blob = xhr.response;
              var hasAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);

              createImageBitmap(blob, {
                premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',
                colorSpaceConversion: 'none',
                imageOrientation: 'none'
              }).then(function(data) {
                resolve({ data: data, premultiplyAlpha: premultiplyAlpha });
              }).catch(function(error) {
                reject(error);
              });
            } else {
              reject(new Error('Failed to load image: ' + xhr.statusText));
            }
          };

          xhr.onerror = function() {
            reject(new Error('Network error occurred while trying to fetch the image.'));
          };

          xhr.send();
        });
      }

      self.onmessage = (event) => {
        var src = event.data.src;
        var premultiplyAlpha = event.data.premultiplyAlpha;

        getImage(src, premultiplyAlpha)
          .then(function(data) {
              self.postMessage({ src: src, data: data }, [data.data]);
          })
          .catch(function(error) {
              self.postMessage({ src: src, error: error.message });
          });
      };
    `;
            var blob = new Blob([workerCode.replace('"use strict";', '')], {
              type: 'application/javascript'
            });
            var blobURL = (self.URL ? URL : webkitURL).createObjectURL(blob);
            var workers = [];
            for (var i = 0; i < numWorkers; i++) {
              workers.push(new Worker(blobURL));
            }
            return workers;
          }
          getNextWorker() {
            var worker = this.workers[this.workerIndex];
            this.workerIndex = (this.workerIndex + 1) % this.workers.length;
            return worker;
          }
          convertUrlToAbsolute(url) {
            var absoluteUrl = new URL(url, self.location.href);
            return absoluteUrl.href;
          }
          getImage(src, premultiplyAlpha) {
            return new Promise((resolve, reject) => {
              try {
                if (this.workers) {
                  var absoluteSrcUrl = this.convertUrlToAbsolute(src);
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Texture consisting of a random grid of greyscale pixels
         *
         * @remarks
         * The width and height of the NoiseTexture are defined by it's
         * {@link NoiseTextureProps.width} and {@link NoiseTextureProps.height}
         * properties. The {@link NoiseTextureProps.cacheId} prop can be varied in order
         * to bypass cache and get newly randomized texture data.
         */
        class NoiseTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            this.props = NoiseTexture.resolveDefaults(props);
          }
          getTextureData() {
            var _this3 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this3$props, width, height, size, pixelData8, i, v;
              return _regeneratorRuntime().wrap(function _callee6$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _this3$props = _this3.props, width = _this3$props.width, height = _this3$props.height;
                    size = width * height * 4;
                    pixelData8 = new Uint8ClampedArray(size);
                    for (i = 0; i < size; i += 4) {
                      v = Math.floor(Math.random() * 256);
                      pixelData8[i] = v;
                      pixelData8[i + 1] = v;
                      pixelData8[i + 2] = v;
                      pixelData8[i + 3] = 255;
                    }
                    return _context7.abrupt("return", {
                      data: new ImageData(pixelData8, width, height)
                    });
                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee6);
            }))();
          }
          static makeCacheKey(props) {
            var resolvedProps = NoiseTexture.resolveDefaults(props);
            return `NoiseTexture,${resolvedProps.width},${resolvedProps.height},${resolvedProps.cacheId}`;
          }
          static resolveDefaults(props) {
            var _props$width9, _props$height3, _props$cacheId;
            return {
              width: (_props$width9 = props.width) !== null && _props$width9 !== void 0 ? _props$width9 : 128,
              height: (_props$height3 = props.height) !== null && _props$height3 !== void 0 ? _props$height3 : 128,
              cacheId: (_props$cacheId = props.cacheId) !== null && _props$cacheId !== void 0 ? _props$cacheId : 0
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        _defineProperty(NoiseTexture, "z$__type__Props", void 0);
        class CoreTextureManager {
          constructor(numImageWorkers) {
            /**
             * Amount of used memory defined in pixels
             */
            _defineProperty(this, "usedMemory", 0);
            _defineProperty(this, "txConstructors", {});
            _defineProperty(this, "textureKeyCache", new Map());
            _defineProperty(this, "textureIdCache", new Map());
            _defineProperty(this, "ctxTextureCache", new WeakMap());
            _defineProperty(this, "textureRefCountMap", new WeakMap());
            _defineProperty(this, "imageWorkerManager", null);
            _defineProperty(this, "hasCreateImageBitmap", !!self.createImageBitmap);
            _defineProperty(this, "hasWorker", !!self.Worker);
            /**
             * Renderer that this texture manager is associated with
             *
             * @remarks
             * This MUST be set before the texture manager is used. Otherwise errors
             * will occur when using the texture manager.
             */
            _defineProperty(this, "renderer", void 0);
            // Register default known texture types
            if (this.hasCreateImageBitmap && this.hasWorker) {
              this.imageWorkerManager = new ImageWorkerManager(numImageWorkers);
            }
            if (!this.hasCreateImageBitmap) {
              console.warn('[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.');
            }
            this.registerTextureType('ImageTexture', ImageTexture);
            this.registerTextureType('ColorTexture', ColorTexture);
            this.registerTextureType('NoiseTexture', NoiseTexture);
            this.registerTextureType('SubTexture', SubTexture);
            this.registerTextureType('RenderTexture', RenderTexture);
          }
          registerTextureType(textureType, textureClass) {
            this.txConstructors[textureType] = textureClass;
          }
          loadTexture(textureType, props, options = null) {
            var TextureClass = this.txConstructors[textureType];
            if (!TextureClass) {
              throw new Error(`Texture type "${textureType}" is not registered`);
            }
            var texture;
            // If an ID is specified, try to get the texture from the ID cache first
            if ((options === null || options === void 0 ? void 0 : options.id) !== undefined && this.textureIdCache.has(options.id)) {
              // console.log('Getting texture by texture desc ID', options.id);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              texture = this.textureIdCache.get(options.id);
            }
            // If the texture is not found in the ID cache, try to get it from the key cache
            if (!texture) {
              var _options$cacheKey;
              var descId = options === null || options === void 0 ? void 0 : options.id;
              var cacheKey = (_options$cacheKey = options === null || options === void 0 ? void 0 : options.cacheKey) !== null && _options$cacheKey !== void 0 ? _options$cacheKey : TextureClass.makeCacheKey(props);
              if (cacheKey && this.textureKeyCache.has(cacheKey)) {
                // console.log('Getting texture by cache key', cacheKey);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                texture = this.textureKeyCache.get(cacheKey);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
                texture = new TextureClass(this, props);
              }
              if (descId) {
                this.addTextureIdToCache(descId, cacheKey, texture);
              }
            }
            if (options !== null && options !== void 0 && options.preload) {
              var ctxTx = this.getCtxTexture(texture);
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
            var textureIdCache = this.textureIdCache,
              textureRefCountMap = this.textureRefCountMap;
            textureIdCache.set(textureDescId, texture);
            if (textureRefCountMap.has(texture)) {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              textureRefCountMap.get(texture).count++;
            } else {
              textureRefCountMap.set(texture, {
                cacheKey,
                count: 1
              });
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
            var _this$ctxTextureCache;
            var textureIdCache = this.textureIdCache,
              textureRefCountMap = this.textureRefCountMap;
            var texture = textureIdCache.get(textureDescId);
            if (!texture) {
              // Sometimes a texture is removed from the cache before it ever gets
              // added to the cache. This is fine and not an error.
              return;
            }
            textureIdCache.delete(textureDescId);
            if (textureRefCountMap.has(texture)) {
              var refCountObj = textureRefCountMap.get(texture);
              assertTruthy(refCountObj);
              refCountObj.count--;
              if (refCountObj.count === 0) {
                textureRefCountMap.delete(texture);
                // If the texture is not referenced anywhere else, remove it from the key cache
                // as well.
                // This should allow the `Texture` instance to be garbage collected.
                if (refCountObj.cacheKey) {
                  this.textureKeyCache.delete(refCountObj.cacheKey);
                }
              }
            }
            // Free the ctx texture if it exists.
            (_this$ctxTextureCache = this.ctxTextureCache.get(texture)) === null || _this$ctxTextureCache === void 0 || _this$ctxTextureCache.free();
          }
          /**
           * Get an object containing debug information about the texture manager.
           *
           * @returns
           */
          getDebugInfo() {
            // const textureSet = new Set<Texture>();
            // for (const texture of this.textureIdCache.values()) {
            //   textureSet.add(texture);
            // }
            // for (const texture of this.textureKeyCache.values()) {
            //   textureSet.add(texture);
            // }
            // TODO: Output number of bytes used by textures
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
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              return this.ctxTextureCache.get(textureSource);
            }
            var texture = this.renderer.createCtxTexture(textureSource);
            this.ctxTextureCache.set(textureSource, texture);
            return texture;
          }
        }
        class TextureMemoryManager {
          /**
           * @param byteThreshold Number of texture bytes to trigger garbage collection
           */
          constructor(byteThreshold) {
            _defineProperty(this, "memUsed", 0);
            _defineProperty(this, "textures", new Map());
            _defineProperty(this, "threshold", void 0);
            this.threshold = byteThreshold;
            // If the threshold is 0, we disable the memory manager by replacing the
            // setTextureMemUse method with a no-op function.
            if (byteThreshold === 0) {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              this.setTextureMemUse = () => {};
            }
          }
          setTextureMemUse(ctxTexture, byteSize) {
            if (this.textures.has(ctxTexture)) {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var bufferMemory = 2e6;
        class Stage extends EventEmitter {
          /**
           * Stage constructor
           */
          constructor(options) {
            super();
            _defineProperty(this, "options", void 0);
            /// Module Instances
            _defineProperty(this, "animationManager", void 0);
            _defineProperty(this, "txManager", void 0);
            _defineProperty(this, "txMemManager", void 0);
            _defineProperty(this, "fontManager", void 0);
            _defineProperty(this, "textRenderers", void 0);
            _defineProperty(this, "shManager", void 0);
            _defineProperty(this, "renderer", void 0);
            _defineProperty(this, "root", void 0);
            _defineProperty(this, "boundsMargin", void 0);
            /// State
            _defineProperty(this, "deltaTime", 0);
            _defineProperty(this, "lastFrameTime", 0);
            _defineProperty(this, "currentFrameTime", 0);
            _defineProperty(this, "fpsNumFrames", 0);
            _defineProperty(this, "fpsElapsedTime", 0);
            _defineProperty(this, "renderRequested", false);
            /// Debug data
            _defineProperty(this, "contextSpy", null);
            this.options = options;
            var canvas = options.canvas,
              clearColor = options.clearColor,
              rootId = options.rootId,
              debug = options.debug,
              appWidth = options.appWidth,
              appHeight = options.appHeight,
              boundsMargin = options.boundsMargin,
              enableContextSpy = options.enableContextSpy,
              numImageWorkers = options.numImageWorkers,
              txMemByteThreshold = options.txMemByteThreshold;
            this.txManager = new CoreTextureManager(numImageWorkers);
            this.txMemManager = new TextureMemoryManager(txMemByteThreshold);
            this.shManager = new CoreShaderManager();
            this.animationManager = new AnimationManager();
            this.contextSpy = enableContextSpy ? new ContextSpy() : null;
            var bm = [0, 0, 0, 0];
            if (boundsMargin) {
              bm = Array.isArray(boundsMargin) ? boundsMargin : [boundsMargin, boundsMargin, boundsMargin, boundsMargin];
            }
            this.boundsMargin = bm;
            if (debug !== null && debug !== void 0 && debug.monitorTextureCache) {
              setInterval(() => {
                assertTruthy(this.txManager);
                var debugInfo = this.txManager.getDebugInfo();
                console.log('Texture ID Cache Size: ', debugInfo.idCacheSize);
                console.log('Texture Key Cache Size: ', debugInfo.keyCacheSize);
              }, 1000);
            }
            this.renderer = new WebGlCoreRenderer({
              stage: this,
              canvas,
              pixelRatio: options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio,
              clearColor: clearColor !== null && clearColor !== void 0 ? clearColor : 0xff000000,
              bufferMemory,
              txManager: this.txManager,
              txMemManager: this.txMemManager,
              shManager: this.shManager,
              contextSpy: this.contextSpy
            });
            // Must do this after renderer is created
            this.txManager.renderer = this.renderer;
            this.textRenderers = {
              canvas: new CanvasTextRenderer(this),
              sdf: new SdfTextRenderer(this)
            };
            this.fontManager = new TrFontManager(this.textRenderers);
            // create root node
            var rootNode = new CoreNode(this, {
              id: rootId,
              x: 0,
              y: 0,
              width: appWidth,
              height: appHeight,
              alpha: 1,
              autosize: false,
              clipping: false,
              color: 0x00000000,
              colorTop: 0x00000000,
              colorBottom: 0x00000000,
              colorLeft: 0x00000000,
              colorRight: 0x00000000,
              colorTl: 0x00000000,
              colorTr: 0x00000000,
              colorBl: 0x00000000,
              colorBr: 0x00000000,
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
            // execute platform start loop
            {
              startLoop(this);
            }
          }
          /**
           * Update animations
           */
          updateAnimations() {
            var animationManager = this.animationManager;
            if (!this.root) {
              return;
            }
            this.lastFrameTime = this.currentFrameTime;
            this.currentFrameTime = getTimeStamp();
            this.deltaTime = !this.lastFrameTime ? 100 / 6 : this.currentFrameTime - this.lastFrameTime;
            this.emit('frameTick', {
              time: this.currentFrameTime,
              delta: this.deltaTime
            });
            // step animation
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
            var renderer = this.renderer,
              renderRequested = this.renderRequested;
            // Update tree if needed
            if (this.root.updateType !== 0) {
              this.root.update(this.deltaTime, this.root.clippingRect);
            }
            // Reset render operations and clear the canvas
            renderer === null || renderer === void 0 || renderer.reset();
            // If we have RTT nodes draw them first
            // So we can use them as textures in the main scene
            if (renderer.rttNodes.length > 0) {
              renderer.renderRTTNodes();
            }
            // Fill quads buffer
            this.addQuads(this.root);
            // Perform render pass
            renderer === null || renderer === void 0 || renderer.render();
            this.calculateFps();
            // Reset renderRequested flag if it was set
            if (renderRequested) {
              this.renderRequested = false;
            }
          }
          calculateFps() {
            // If there's an FPS update interval, emit the FPS update event
            // when the specified interval has elapsed.
            var fpsUpdateInterval = this.options.fpsUpdateInterval;
            if (fpsUpdateInterval) {
              this.fpsNumFrames++;
              this.fpsElapsedTime += this.deltaTime;
              if (this.fpsElapsedTime >= fpsUpdateInterval) {
                var _this$contextSpy$getD, _this$contextSpy, _this$contextSpy2;
                var _fps = Math.round(this.fpsNumFrames * 1000 / this.fpsElapsedTime);
                this.fpsNumFrames = 0;
                this.fpsElapsedTime = 0;
                this.emit('fpsUpdate', {
                  fps: _fps,
                  contextSpyData: (_this$contextSpy$getD = (_this$contextSpy = this.contextSpy) === null || _this$contextSpy === void 0 ? void 0 : _this$contextSpy.getData()) !== null && _this$contextSpy$getD !== void 0 ? _this$contextSpy$getD : null
                });
                (_this$contextSpy2 = this.contextSpy) === null || _this$contextSpy2 === void 0 || _this$contextSpy2.reset();
              }
            }
          }
          addQuads(node) {
            assertTruthy(this.renderer && node.globalTransform);
            if (node.isRenderable) {
              node.renderQuads(this.renderer);
            }
            for (var i = 0; i < node.children.length; i++) {
              var child = node.children[i];
              if (!child) {
                continue;
              }
              if ((child === null || child === void 0 ? void 0 : child.worldAlpha) === 0) {
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
            var rendererId = textRendererOverride;
            var overrideFallback = false;
            // Check if the override is valid (if one is provided)
            if (rendererId) {
              var possibleRenderer = this.textRenderers[rendererId];
              if (!possibleRenderer) {
                console.warn(`Text renderer override '${rendererId}' not found.`);
                rendererId = null;
                overrideFallback = true;
              } else if (!possibleRenderer.canRenderFont(trProps)) {
                console.warn(`Cannot use override text renderer '${rendererId}' for font`, trProps);
                rendererId = null;
                overrideFallback = true;
              }
            }
            if (!rendererId) {
              // Iterate through the text renderers and find the first one that can render the font
              for (var _i8 = 0, _Object$entries = Object.entries(this.textRenderers); _i8 < _Object$entries.length; _i8++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i8], 2),
                  trId = _Object$entries$_i[0],
                  tr = _Object$entries$_i[1];
                if (trId === 'canvas') {
                  // Canvas is always a fallback
                  continue;
                }
                if (tr.canRenderFont(trProps)) {
                  rendererId = trId;
                  break;
                }
              }
              if (!rendererId) {
                // If no renderer can be found, use the canvas renderer
                rendererId = 'canvas';
              }
            }
            if (overrideFallback) {
              console.warn(`Falling back to text renderer ${String(rendererId)}`);
            }
            // By now we are guaranteed to have a valid rendererId (at least Canvas);
            var resolvedTextRenderer = this.textRenderers[rendererId];
            assertTruthy(resolvedTextRenderer, 'resolvedTextRenderer undefined');
            // Need to explicitly cast to TextRenderer because TS doesn't like
            // the covariant state argument in the setter method map
            return resolvedTextRenderer;
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class CoreTextNode extends CoreNode {
          constructor(stage, props) {
            super(stage, props);
            _defineProperty(this, "textRenderer", void 0);
            _defineProperty(this, "trState", void 0);
            _defineProperty(this, "_textRendererOverride", null);
            _defineProperty(this, "onTextLoaded", () => {
              var contain = this.contain;
              var setWidth = this.trState.props.width;
              var setHeight = this.trState.props.height;
              var calcWidth = this.trState.textW || 0;
              var calcHeight = this.trState.textH || 0;
              if (contain === 'both') {
                this.props.width = setWidth;
                this.props.height = setHeight;
              } else if (contain === 'width') {
                this.props.width = setWidth;
                this.props.height = calcHeight;
              } else if (contain === 'none') {
                this.props.width = calcWidth;
                this.props.height = calcHeight;
              }
              this.updateLocalTransform();
              // Incase the RAF loop has been stopped already before text was loaded,
              // we request a render so it can be drawn.
              this.stage.requestRender();
              this.emit('loaded', {
                type: 'text',
                dimensions: {
                  width: this.trState.textW || 0,
                  height: this.trState.textH || 0
                }
              });
            });
            _defineProperty(this, "onTextFailed", (target, error) => {
              this.emit('failed', {
                type: 'text',
                error
              });
            });
            this._textRendererOverride = props.textRendererOverride;
            var _this$resolveTextRend = this.resolveTextRendererAndState({
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
              }),
              resolvedTextRenderer = _this$resolveTextRend.resolvedTextRenderer,
              textRendererState = _this$resolveTextRend.textRendererState;
            this.textRenderer = resolvedTextRenderer;
            this.trState = textRendererState;
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            this.props.width = value;
            this.textRenderer.set.width(this.trState, value);
            // If not containing, we must update the local transform to account for the
            // new width
            if (this.contain === 'none') {
              this.setUpdateType(UpdateType.Local);
            }
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            this.props.height = value;
            this.textRenderer.set.height(this.trState, value);
            // If not containing in the horizontal direction, we must update the local
            // transform to account for the new height
            if (this.contain !== 'both') {
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
            var _this$resolveTextRend2 = this.resolveTextRendererAndState(this.trState.props),
              resolvedTextRenderer = _this$resolveTextRend2.resolvedTextRenderer,
              textRendererState = _this$resolveTextRend2.textRendererState;
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
            // globalTransform is updated in super.update(delta)
            this.textRenderer.set.x(this.trState, this.globalTransform.tx);
            this.textRenderer.set.y(this.trState, this.globalTransform.ty);
          }
          checkRenderProps() {
            if (this.trState.props.text !== '') {
              return true;
            }
            return super.checkRenderProps();
          }
          onChangeIsRenderable(isRenderable) {
            super.onChangeIsRenderable(isRenderable);
            this.textRenderer.setIsRenderable(this.trState, isRenderable);
          }
          renderQuads(renderer) {
            var _this$props$parent5;
            assertTruthy(this.globalTransform);
            // Prevent quad rendering if parent has a render texture
            // and this node is not the render texture
            if (this.parentHasRenderTexture) {
              if (!renderer.renderToTextureActive) {
                return;
              }
              // Prevent quad rendering if parent render texture is not the active render texture
              if (this.parentRenderTexture !== renderer.activeRttNode) {
                return;
              }
            }
            if (this.parentHasRenderTexture && (_this$props$parent5 = this.props.parent) !== null && _this$props$parent5 !== void 0 && _this$props$parent5.rtt) {
              var _this$localTransform;
              this.globalTransform = Matrix3d.identity();
              this.globalTransform.multiply((_this$localTransform = this.localTransform) !== null && _this$localTransform !== void 0 ? _this$localTransform : Matrix3d.identity());
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
            var resolvedTextRenderer = this.stage.resolveTextRenderer(props, this._textRendererOverride);
            var textRendererState = resolvedTextRenderer.createState(props);
            textRendererState.emitter.on('loaded', this.onTextLoaded);
            textRendererState.emitter.on('failed', this.onTextFailed);
            resolvedTextRenderer.scheduleUpdateState(textRendererState);
            return {
              resolvedTextRenderer,
              textRendererState
            };
          }
        }

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
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

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2023 Comcast Cable Communications Management, LLC.
         *
         * Licensed under the Apache License, Version 2.0 (the License);
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class MainCoreDriver {
          constructor() {
            _defineProperty(this, "root", null);
            _defineProperty(this, "stage", null);
            _defineProperty(this, "rendererMain", null);
          }
          init(rendererMain, rendererSettings, canvas) {
            var _this4 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var node;
              return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _this4.stage = new Stage({
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
                    _this4.rendererMain = rendererMain;
                    assertTruthy(_this4.stage.root);
                    node = new MainOnlyNode(rendererMain.resolveNodeDefaults({}), _this4.rendererMain, _this4.stage, _this4.stage.root);
                    _this4.root = node;
                    node.once('beforeDestroy', _this4.onBeforeDestroyNode.bind(_this4, node));
                    _this4.onCreateNode(node);
                    // Load the Core Extension Module if one was specified.
                    if (!rendererSettings.coreExtensionModule) {
                      _context8.next = 10;
                      break;
                    }
                    _context8.next = 10;
                    return loadCoreExtension(rendererSettings.coreExtensionModule, _this4.stage);
                  case 10:
                    // Forward fpsUpdate events from the stage to RendererMain
                    _this4.stage.on('fpsUpdate', (stage, fpsData) => {
                      _this4.onFpsUpdate(fpsData);
                    });
                    _this4.stage.on('frameTick', (stage, frameTickData) => {
                      _this4.onFrameTick(frameTickData);
                    });
                    _this4.stage.on('idle', () => {
                      _this4.onIdle();
                    });
                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }, _callee7);
            }))();
          }
          createNode(props) {
            assertTruthy(this.rendererMain);
            assertTruthy(this.stage);
            var node = new MainOnlyNode(props, this.rendererMain, this.stage);
            node.once('beforeDestroy', this.onBeforeDestroyNode.bind(this, node));
            this.onCreateNode(node);
            return node;
          }
          createTextNode(props) {
            assertTruthy(this.rendererMain);
            assertTruthy(this.stage);
            var node = new MainOnlyTextNode(props, this.rendererMain, this.stage);
            node.once('beforeDestroy', this.onBeforeDestroyNode.bind(this, node));
            this.onCreateNode(node);
            return node;
          }
          // TODO: Remove?
          destroyNode(node) {
            node.destroy();
          }
          releaseTexture(id) {
            var stage = this.stage;
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
            throw new Error('Method not implemented.');
          }
          onBeforeDestroyNode(node) {
            throw new Error('Method not implemented.');
          }
          onFpsUpdate(fpsData) {
            throw new Error('Method not implemented.');
          }
          onFrameTick(frameTickData) {
            throw new Error('Method not implemented.');
          }
          onIdle() {
            throw new Error('Method not implemented.');
          }
        }
        var equalFn = (a, b) => a === b;
        var $PROXY = Symbol("solid-proxy");
        var $TRACK = Symbol("solid-track");
        var signalOptions = {
          equals: equalFn
        };
        var runEffects = runQueue;
        var STALE = 1;
        var PENDING = 2;
        var UNOWNED = {
          owned: null,
          cleanups: null,
          context: null,
          owner: null
        };
        var NO_INIT = {};
        var Owner = null;
        var Transition = null;
        var ExternalSourceConfig = null;
        var Listener = null;
        var Updates = null;
        var Effects = null;
        var ExecCount = 0;
        function createRoot(fn, detachedOwner) {
          var listener = Listener,
            owner = Owner,
            unowned = fn.length === 0,
            current = detachedOwner === undefined ? owner : detachedOwner,
            root = unowned ? UNOWNED : {
              owned: null,
              cleanups: null,
              context: current ? current.context : null,
              owner: current
            },
            updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
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
          var s = {
            value,
            observers: null,
            observerSlots: null,
            comparator: options.equals || undefined
          };
          var setter = value => {
            if (typeof value === "function") {
              value = value(s.value);
            }
            return writeSignal(s, value);
          };
          return [readSignal.bind(s), setter];
        }
        function createComputed(fn, value, options) {
          var c = createComputation(fn, value, true, STALE);
          updateComputation(c);
        }
        function createRenderEffect(fn, value, options) {
          var c = createComputation(fn, value, false, STALE);
          updateComputation(c);
        }
        function createEffect(fn, value, options) {
          runEffects = runUserEffects;
          var c = createComputation(fn, value, false, STALE);
          if (!options || !options.render) c.user = true;
          Effects ? Effects.push(c) : updateComputation(c);
        }
        function createMemo(fn, value, options) {
          options = options ? Object.assign({}, signalOptions, options) : signalOptions;
          var c = createComputation(fn, value, true, 0);
          c.observers = null;
          c.observerSlots = null;
          c.comparator = options.equals || undefined;
          updateComputation(c);
          return readSignal.bind(c);
        }
        function isPromise(v) {
          return v && typeof v === "object" && "then" in v;
        }
        function createResource(pSource, pFetcher, pOptions) {
          var source;
          var fetcher;
          var options;
          if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
            source = true;
            fetcher = pSource;
            options = pFetcher || {};
          } else {
            source = pSource;
            fetcher = pFetcher;
            options = pOptions || {};
          }
          var pr = null,
            initP = NO_INIT,
            scheduled = false,
            resolved = ("initialValue" in options),
            dynamic = typeof source === "function" && createMemo(source);
          var contexts = new Set(),
            _ref20 = (options.storage || createSignal)(options.initialValue),
            _ref21 = _slicedToArray(_ref20, 2),
            value = _ref21[0],
            setValue = _ref21[1],
            _createSignal = createSignal(undefined),
            _createSignal2 = _slicedToArray(_createSignal, 2),
            error = _createSignal2[0],
            setError = _createSignal2[1],
            _createSignal3 = createSignal(undefined, {
              equals: false
            }),
            _createSignal4 = _slicedToArray(_createSignal3, 2),
            track = _createSignal4[0],
            trigger = _createSignal4[1],
            _createSignal5 = createSignal(resolved ? "ready" : "unresolved"),
            _createSignal6 = _slicedToArray(_createSignal5, 2),
            state = _createSignal6[0],
            setState = _createSignal6[1];
          function loadEnd(p, v, error, key) {
            if (pr === p) {
              pr = null;
              key !== undefined && (resolved = true);
              if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(() => options.onHydrated(key, {
                value: v
              }));
              initP = NO_INIT;
              completeLoad(v, error);
            }
            return v;
          }
          function completeLoad(v, err) {
            runUpdates(() => {
              if (err === undefined) setValue(() => v);
              setState(err !== undefined ? "errored" : resolved ? "ready" : "unresolved");
              setError(err);
              var _iterator9 = _createForOfIteratorHelper(contexts.keys()),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var c = _step9.value;
                  c.decrement();
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              contexts.clear();
            }, false);
          }
          function read() {
            var c = SuspenseContext,
              v = value(),
              err = error();
            if (err !== undefined && !pr) throw err;
            if (Listener && !Listener.user && c) {
              createComputed(() => {
                track();
                if (pr) {
                  if (c.resolved) ;else if (!contexts.has(c)) {
                    c.increment();
                    contexts.add(c);
                  }
                }
              });
            }
            return v;
          }
          function load(refetching = true) {
            if (refetching !== false && scheduled) return;
            scheduled = false;
            var lookup = dynamic ? dynamic() : source;
            if (lookup == null || lookup === false) {
              loadEnd(pr, untrack(value));
              return;
            }
            var p = initP !== NO_INIT ? initP : untrack(() => fetcher(lookup, {
              value: value(),
              refetching
            }));
            if (!isPromise(p)) {
              loadEnd(pr, p, undefined, lookup);
              return p;
            }
            pr = p;
            if ("value" in p) {
              if (p.status === "success") loadEnd(pr, p.value, undefined, lookup);else loadEnd(pr, undefined, undefined, lookup);
              return p;
            }
            scheduled = true;
            queueMicrotask(() => scheduled = false);
            runUpdates(() => {
              setState(resolved ? "refreshing" : "pending");
              trigger();
            }, false);
            return p.then(v => loadEnd(p, v, undefined, lookup), e => loadEnd(p, undefined, castError(e), lookup));
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
                var s = state();
                return s === "pending" || s === "refreshing";
              }
            },
            latest: {
              get() {
                if (!resolved) return read();
                var err = error();
                if (err && !pr) throw err;
                return value();
              }
            }
          });
          if (dynamic) createComputed(() => load(false));else load(false);
          return [read, {
            refetch: load,
            mutate: setValue
          }];
        }
        function createSelector(source, fn = equalFn, options) {
          var subs = new Map();
          var node = createComputation(p => {
            var v = source();
            var _iterator10 = _createForOfIteratorHelper(subs.entries()),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                  _key7 = _step10$value[0],
                  val = _step10$value[1];
                if (fn(_key7, v) !== fn(_key7, p)) {
                  var _iterator11 = _createForOfIteratorHelper(val.values()),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var c = _step11.value;
                      c.state = STALE;
                      if (c.pure) Updates.push(c);else Effects.push(c);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            return v;
          }, undefined, true, STALE);
          updateComputation(node);
          return key => {
            var listener = Listener;
            if (listener) {
              var l;
              if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
              onCleanup(() => {
                l.delete(listener);
                !l.size && subs.delete(key);
              });
            }
            return fn(key, node.value);
          };
        }
        function batch(fn) {
          return runUpdates(fn, false);
        }
        function untrack(fn) {
          if (Listener === null) return fn();
          var listener = Listener;
          Listener = null;
          try {
            if (ExternalSourceConfig) ;
            return fn();
          } finally {
            Listener = listener;
          }
        }
        function on(deps, fn, options) {
          var isArray = Array.isArray(deps);
          var prevInput;
          var defer = options && options.defer;
          return prevValue => {
            var input;
            if (isArray) {
              input = Array(deps.length);
              for (var i = 0; i < deps.length; i++) input[i] = deps[i]();
            } else input = deps();
            if (defer) {
              defer = false;
              return prevValue;
            }
            var result = untrack(() => fn(input, prevInput, prevValue));
            prevInput = input;
            return result;
          };
        }
        function onMount(fn) {
          createEffect(() => untrack(fn));
        }
        function onCleanup(fn) {
          if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
          return fn;
        }
        function getOwner() {
          return Owner;
        }
        function runWithOwner(o, fn) {
          var prev = Owner;
          var prevListener = Listener;
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
          var l = Listener;
          var o = Owner;
          return Promise.resolve().then(() => {
            Listener = l;
            Owner = o;
            var t;
            runUpdates(fn, false);
            Listener = Owner = null;
            return t ? t.done : undefined;
          });
        }
        function createContext(defaultValue, options) {
          var id = Symbol("context");
          return {
            id,
            Provider: createProvider(id),
            defaultValue
          };
        }
        function useContext(context) {
          return Owner && Owner.context && Owner.context[context.id] !== undefined ? Owner.context[context.id] : context.defaultValue;
        }
        function children(fn) {
          var children = createMemo(fn);
          var memo = createMemo(() => resolveChildren(children()));
          memo.toArray = () => {
            var c = memo();
            return Array.isArray(c) ? c : c != null ? [c] : [];
          };
          return memo;
        }
        var SuspenseContext;
        function readSignal() {
          if (this.sources && this.state) {
            if (this.state === STALE) updateComputation(this);else {
              var updates = Updates;
              Updates = null;
              runUpdates(() => lookUpstream(this), false);
              Updates = updates;
            }
          }
          if (Listener) {
            var sSlot = this.observers ? this.observers.length : 0;
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
          var current = node.value;
          if (!node.comparator || !node.comparator(current, value)) {
            node.value = value;
            if (node.observers && node.observers.length) {
              runUpdates(() => {
                for (var i = 0; i < node.observers.length; i += 1) {
                  var o = node.observers[i];
                  var TransitionRunning = Transition && Transition.running;
                  if (TransitionRunning && Transition.disposed.has(o)) ;
                  if (TransitionRunning ? !o.tState : !o.state) {
                    if (o.pure) Updates.push(o);else Effects.push(o);
                    if (o.observers) markDownstream(o);
                  }
                  if (!TransitionRunning) o.state = STALE;
                }
                if (Updates.length > 10e5) {
                  Updates = [];
                  if (false) ;
                  throw new Error();
                }
              }, false);
            }
          }
          return value;
        }
        function updateComputation(node) {
          if (!node.fn) return;
          cleanNode(node);
          var time = ExecCount;
          runComputation(node, node.value, time);
        }
        function runComputation(node, value, time) {
          var nextValue;
          var owner = Owner,
            listener = Listener;
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
            } else node.value = nextValue;
            node.updatedAt = time;
          }
        }
        function createComputation(fn, init, pure, state = STALE, options) {
          var c = {
            fn,
            state: state,
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
          if (Owner === null) ;else if (Owner !== UNOWNED) {
            {
              if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
            }
          }
          return c;
        }
        function runTop(node) {
          if (node.state === 0) return;
          if (node.state === PENDING) return lookUpstream(node);
          if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
          var ancestors = [node];
          while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
            if (node.state) ancestors.push(node);
          }
          for (var i = ancestors.length - 1; i >= 0; i--) {
            node = ancestors[i];
            if (node.state === STALE) {
              updateComputation(node);
            } else if (node.state === PENDING) {
              var updates = Updates;
              Updates = null;
              runUpdates(() => lookUpstream(node, ancestors[0]), false);
              Updates = updates;
            }
          }
        }
        function runUpdates(fn, init) {
          if (Updates) return fn();
          var wait = false;
          if (!init) Updates = [];
          if (Effects) wait = true;else Effects = [];
          ExecCount++;
          try {
            var res = fn();
            completeUpdates(wait);
            return res;
          } catch (err) {
            if (!wait) Effects = null;
            Updates = null;
            handleError(err);
          }
        }
        function completeUpdates(wait) {
          if (Updates) {
            runQueue(Updates);
            Updates = null;
          }
          if (wait) return;
          var e = Effects;
          Effects = null;
          if (e.length) runUpdates(() => runEffects(e), false);
        }
        function runQueue(queue) {
          for (var i = 0; i < queue.length; i++) runTop(queue[i]);
        }
        function runUserEffects(queue) {
          var i,
            userLength = 0;
          for (i = 0; i < queue.length; i++) {
            var e = queue[i];
            if (!e.user) runTop(e);else queue[userLength++] = e;
          }
          for (i = 0; i < userLength; i++) runTop(queue[i]);
        }
        function lookUpstream(node, ignore) {
          node.state = 0;
          for (var i = 0; i < node.sources.length; i += 1) {
            var source = node.sources[i];
            if (source.sources) {
              var state = source.state;
              if (state === STALE) {
                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
              } else if (state === PENDING) lookUpstream(source, ignore);
            }
          }
        }
        function markDownstream(node) {
          for (var i = 0; i < node.observers.length; i += 1) {
            var o = node.observers[i];
            if (!o.state) {
              o.state = PENDING;
              if (o.pure) Updates.push(o);else Effects.push(o);
              o.observers && markDownstream(o);
            }
          }
        }
        function cleanNode(node) {
          var i;
          if (node.sources) {
            while (node.sources.length) {
              var source = node.sources.pop(),
                index = node.sourceSlots.pop(),
                obs = source.observers;
              if (obs && obs.length) {
                var n = obs.pop(),
                  s = source.observerSlots.pop();
                if (index < obs.length) {
                  n.sourceSlots[s] = index;
                  obs[index] = n;
                  source.observerSlots[index] = s;
                }
              }
            }
          }
          if (node.owned) {
            for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
            node.owned = null;
          }
          if (node.cleanups) {
            for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
            node.cleanups = null;
          }
          node.state = 0;
        }
        function castError(err) {
          if (err instanceof Error) return err;
          return new Error(typeof err === "string" ? err : "Unknown error", {
            cause: err
          });
        }
        function handleError(err, owner = Owner) {
          var error = castError(err);
          throw error;
        }
        function resolveChildren(children) {
          if (typeof children === "function" && !children.length) return resolveChildren(children());
          if (Array.isArray(children)) {
            var results = [];
            for (var i = 0; i < children.length; i++) {
              var result = resolveChildren(children[i]);
              Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
            }
            return results;
          }
          return children;
        }
        function createProvider(id, options) {
          return function provider(props) {
            var res;
            createRenderEffect(() => res = untrack(() => {
              Owner.context = _objectSpread(_objectSpread({}, Owner.context), {}, {
                [id]: props.value
              });
              return children(() => props.children);
            }), undefined);
            return res;
          };
        }
        var FALLBACK = Symbol("fallback");
        function dispose(d) {
          for (var i = 0; i < d.length; i++) d[i]();
        }
        function mapArray(list, mapFn, options = {}) {
          var items = [],
            mapped = [],
            disposers = [],
            len = 0,
            indexes = mapFn.length > 1 ? [] : null;
          onCleanup(() => dispose(disposers));
          return () => {
            var newItems = list() || [],
              i,
              j;
            newItems[$TRACK];
            return untrack(() => {
              var newLen = newItems.length,
                newIndices,
                newIndicesNext,
                temp,
                tempdisposers,
                tempIndexes,
                start,
                end,
                newEnd,
                item;
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
                  mapped[0] = createRoot(disposer => {
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
                for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
                  temp[newEnd] = mapped[end];
                  tempdisposers[newEnd] = disposers[end];
                  indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = new Map();
                newIndicesNext = new Array(newEnd + 1);
                for (j = newEnd; j >= start; j--) {
                  item = newItems[j];
                  i = newIndices.get(item);
                  newIndicesNext[j] = i === undefined ? -1 : i;
                  newIndices.set(item, j);
                }
                for (i = start; i <= end; i++) {
                  item = items[i];
                  j = newIndices.get(item);
                  if (j !== undefined && j !== -1) {
                    temp[j] = mapped[i];
                    tempdisposers[j] = disposers[i];
                    indexes && (tempIndexes[j] = indexes[i]);
                    j = newIndicesNext[j];
                    newIndices.set(item, j);
                  } else disposers[i]();
                }
                for (j = start; j < newLen; j++) {
                  if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                      indexes[j] = tempIndexes[j];
                      indexes[j](j);
                    }
                  } else mapped[j] = createRoot(mapper);
                }
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
              }
              return mapped;
            });
            function mapper(disposer) {
              disposers[j] = disposer;
              if (indexes) {
                var _createSignal7 = createSignal(j),
                  _createSignal8 = _slicedToArray(_createSignal7, 2),
                  s = _createSignal8[0],
                  set = _createSignal8[1];
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
        var propTraps = {
          get(_, property, receiver) {
            if (property === $PROXY) return receiver;
            return _.get(property);
          },
          has(_, property) {
            if (property === $PROXY) return true;
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
          for (var i = 0, length = this.length; i < length; ++i) {
            var v = this[i]();
            if (v !== undefined) return v;
          }
        }
        function mergeProps$1(...sources) {
          var proxy = false;
          for (var i = 0; i < sources.length; i++) {
            var s = sources[i];
            proxy = proxy || !!s && $PROXY in s;
            sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
          }
          if (proxy) {
            return new Proxy({
              get(property) {
                for (var _i9 = sources.length - 1; _i9 >= 0; _i9--) {
                  var v = resolveSource(sources[_i9])[property];
                  if (v !== undefined) return v;
                }
              },
              has(property) {
                for (var _i10 = sources.length - 1; _i10 >= 0; _i10--) {
                  if (property in resolveSource(sources[_i10])) return true;
                }
                return false;
              },
              keys() {
                var keys = [];
                for (var _i11 = 0; _i11 < sources.length; _i11++) keys.push(...Object.keys(resolveSource(sources[_i11])));
                return [...new Set(keys)];
              }
            }, propTraps);
          }
          var sourcesMap = {};
          var defined = Object.create(null);
          for (var _i12 = sources.length - 1; _i12 >= 0; _i12--) {
            var source = sources[_i12];
            if (!source) continue;
            var sourceKeys = Object.getOwnPropertyNames(source);
            var _loop = function _loop() {
              var key = sourceKeys[_i13];
              if (key === "__proto__" || key === "constructor") return 1; // continue
              var desc = Object.getOwnPropertyDescriptor(source, key);
              if (!defined[key]) {
                defined[key] = desc.get ? {
                  enumerable: true,
                  configurable: true,
                  get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
                } : desc.value !== undefined ? desc : undefined;
              } else {
                var _sources = sourcesMap[key];
                if (_sources) {
                  if (desc.get) _sources.push(desc.get.bind(source));else if (desc.value !== undefined) _sources.push(() => desc.value);
                }
              }
            };
            for (var _i13 = sourceKeys.length - 1; _i13 >= 0; _i13--) {
              if (_loop()) continue;
            }
          }
          var target = {};
          var definedKeys = Object.keys(defined);
          for (var _i14 = definedKeys.length - 1; _i14 >= 0; _i14--) {
            var _key8 = definedKeys[_i14],
              desc = defined[_key8];
            if (desc && desc.get) Object.defineProperty(target, _key8, desc);else target[_key8] = desc ? desc.value : undefined;
          }
          return target;
        }
        function splitProps(props, ...keys) {
          if ($PROXY in props) {
            var blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
            var res = keys.map(k => {
              return new Proxy({
                get(property) {
                  return k.includes(property) ? props[property] : undefined;
                },
                has(property) {
                  return k.includes(property) && property in props;
                },
                keys() {
                  return k.filter(property => property in props);
                }
              }, propTraps);
            });
            res.push(new Proxy({
              get(property) {
                return blocked.has(property) ? undefined : props[property];
              },
              has(property) {
                return blocked.has(property) ? false : property in props;
              },
              keys() {
                return Object.keys(props).filter(k => !blocked.has(k));
              }
            }, propTraps));
            return res;
          }
          var otherObject = {};
          var objects = keys.map(() => ({}));
          var _iterator12 = _createForOfIteratorHelper(Object.getOwnPropertyNames(props)),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var propName = _step12.value;
              var desc = Object.getOwnPropertyDescriptor(props, propName);
              var isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
              var _blocked = false;
              var objectIndex = 0;
              var _iterator13 = _createForOfIteratorHelper(keys),
                _step13;
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var k = _step13.value;
                  if (k.includes(propName)) {
                    _blocked = true;
                    isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
                  }
                  ++objectIndex;
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              if (!_blocked) {
                isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
          return [...objects, otherObject];
        }
        var narrowedError = name => `Stale read from <${name}>.`;
        function For(props) {
          var fallback = "fallback" in props && {
            fallback: () => props.fallback
          };
          return createMemo(mapArray(() => props.each, props.children, fallback || undefined));
        }
        function Show(props) {
          var keyed = props.keyed;
          var condition = createMemo(() => props.when, undefined, {
            equals: (a, b) => keyed ? a === b : !a === !b
          });
          return createMemo(() => {
            var c = condition();
            if (c) {
              var child = props.children;
              var fn = typeof child === "function" && child.length > 0;
              return fn ? untrack(() => child(keyed ? c : () => {
                if (!untrack(condition)) throw narrowedError("Show");
                return props.when;
              })) : child;
            }
            return props.fallback;
          }, undefined, undefined);
        }
        function resetErrorBoundaries() {}
        var DEV = undefined;
        var renderer;
        var createShader;
        function startLightningRenderer(options = {}, rootId = "app") {
          var driver = new MainCoreDriver();
          renderer = new RendererMain(options, rootId, driver);
          createShader = renderer.createShader.bind(renderer);
          return renderer;
        }
        class Children extends Array {
          constructor(node) {
            super();
            _defineProperty(this, "_parent", void 0);
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
              var index = this.indexOf(beforeNode);
              this.splice(index, 0, node);
            } else {
              this.push(node);
            }
            node.parent = this._parent;
            this._parent._isDirty = true;
          }
          remove(node) {
            var nodeIndexToRemove = this.indexOf(node);
            if (nodeIndexToRemove >= 0) {
              this.splice(nodeIndexToRemove, 1);
            }
          }
        }
        function isDevEnv() {
          return {
            "BASE_URL": "/solid-demo-app/",
            "MODE": "production",
            "DEV": false,
            "PROD": true,
            "SSR": false,
            "LEGACY": true
          } && false;
        }
        var isDev$1 = isDevEnv() || false;
        var config = {
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
          var _iterator14 = _createForOfIteratorHelper(keys),
            _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _key9 = _step14.value;
              if (_key9 in obj) {
                return true;
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
          return false;
        }
        function flattenStyles(obj, result = {}) {
          if (isArray$1(obj)) {
            obj.forEach(item => {
              flattenStyles(item, result);
            });
          } else if (obj) {
            for (var _key10 in obj) {
              if (result[_key10] === void 0) {
                result[_key10] = obj[_key10];
              }
            }
          }
          return result;
        }
        class States extends Array {
          constructor(callback, initialState = {}) {
            if (isArray$1(initialState)) {
              super(...initialState);
              _defineProperty(this, "onChange", void 0);
            } else if (isString(initialState)) {
              super(initialState);
              _defineProperty(this, "onChange", void 0);
            } else {
              super(...Object.entries(initialState).filter(([_key, value]) => value).map(([key]) => key));
              _defineProperty(this, "onChange", void 0);
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
            var stateIndexToRemove = this.indexOf(state);
            if (stateIndexToRemove >= 0) {
              this.splice(stateIndexToRemove, 1);
              this.onChange();
            }
          }
        }
        function calculateFlex(node) {
          var children = [];
          var hasOrder = false;
          for (var i = 0; i < node.children.length; i++) {
            var c = node.children[i];
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
            children.push(c);
          }
          if (hasOrder) {
            children.sort((a, b) => (a.flexOrder || 0) - (b.flexOrder || 0));
          }
          var numChildren = children.length;
          var direction = node.flexDirection || "row";
          var isRow = direction === "row";
          var dimension = isRow ? "width" : "height";
          var crossDimension = isRow ? "height" : "width";
          var marginOne = isRow ? "marginLeft" : "marginTop";
          var marginTwo = isRow ? "marginRight" : "marginBottom";
          var prop = isRow ? "x" : "y";
          var crossProp = isRow ? "y" : "x";
          var containerSize = node[dimension] || 0;
          var containerCrossSize = node[crossDimension] || 0;
          var gap = node.gap || 0;
          var justify = node.justifyContent || "flexStart";
          var align = node.alignItems;
          var itemSize = 0;
          if (["center", "spaceBetween", "spaceEvenly"].includes(justify)) {
            itemSize = children.reduce((prev, c) => prev + (c[dimension] || 0), 0);
          }
          var crossAlignChild = containerCrossSize && align ? c => {
            if (align === "flexStart") {
              c[crossProp] = 0;
            } else if (align === "center") {
              c[crossProp] = (containerCrossSize - (c[crossDimension] || 0)) / 2;
            } else if (align === "flexEnd") {
              c[crossProp] = containerCrossSize - (c[crossDimension] || 0);
            }
          } : c => c;
          if (justify === "flexStart") {
            var start = 0;
            children.forEach(c => {
              c[prop] = start + (c[marginOne] || 0);
              start += (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
              crossAlignChild(c);
            });
            if (node.flexBoundary !== "fixed") {
              var calculatedSize = start - gap;
              if (calculatedSize !== node[dimension]) {
                node[dimension] = calculatedSize;
                return true;
              }
            }
          } else if (justify === "flexEnd") {
            var _start = containerSize;
            for (var _i15 = numChildren - 1; _i15 >= 0; _i15--) {
              var _c3 = children[_i15];
              assertTruthy(_c3);
              _c3[prop] = _start - (_c3[dimension] || 0) - (_c3[marginTwo] || 0);
              _start -= (_c3[dimension] || 0) + gap + (_c3[marginOne] || 0) + (_c3[marginTwo] || 0);
              crossAlignChild(_c3);
            }
          } else if (justify === "center") {
            var _start2 = (containerSize - (itemSize + gap * (numChildren - 1))) / 2;
            children.forEach(c => {
              c[prop] = _start2;
              _start2 += (c[dimension] || 0) + gap;
              crossAlignChild(c);
            });
          } else if (justify === "spaceBetween") {
            var toPad = (containerSize - itemSize) / (numChildren - 1);
            var _start3 = 0;
            children.forEach(c => {
              c[prop] = _start3;
              _start3 += (c[dimension] || 0) + toPad;
              crossAlignChild(c);
            });
          } else if (justify === "spaceEvenly") {
            var _toPad = (containerSize - itemSize) / (numChildren + 1);
            var _start4 = _toPad;
            children.forEach(c => {
              c[prop] = _start4;
              _start4 += (c[dimension] || 0) + _toPad;
              crossAlignChild(c);
            });
          }
          return false;
        }
        var _createSignal9 = createSignal(void 0),
          _createSignal10 = _slicedToArray(_createSignal9, 2),
          activeElement = _createSignal10[0],
          setActiveElement = _createSignal10[1];
        var defaultAnimationSettings = config.animationSettings;
        function convertEffectsToShader(styleEffects) {
          var effects = [];
          for (var _i16 = 0, _Object$entries2 = Object.entries(styleEffects); _i16 < _Object$entries2.length; _i16++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i16], 2),
              type = _Object$entries2$_i[0],
              props = _Object$entries2$_i[1];
            effects.push({
              type,
              props
            });
          }
          return createShader("DynamicShader", {
            effects
          });
        }
        function borderAccessor(direction = "") {
          return {
            set(value) {
              if (isNumber(value)) {
                value = {
                  width: value,
                  color: 255
                };
              }
              this.effects = _objectSpread(_objectSpread({}, this.effects || {}), {
                [`border${direction}`]: value
              });
              this[`_border${direction}`] = value;
            },
            get() {
              return this[`_border${direction}`];
            }
          };
        }
        var LightningRendererNumberProps = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"];
        var LightningRendererNonAnimatingProps = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"];
        class ElementNode extends Object {
          constructor(name) {
            super();
            _defineProperty(this, "id", void 0);
            _defineProperty(this, "debug", void 0);
            _defineProperty(this, "name", void 0);
            _defineProperty(this, "lng", void 0);
            _defineProperty(this, "renderer", void 0);
            _defineProperty(this, "selected", void 0);
            _defineProperty(this, "autofocus", void 0);
            _defineProperty(this, "flexItem", void 0);
            _defineProperty(this, "flexOrder", void 0);
            _defineProperty(this, "flexBoundary", void 0);
            // default is undefined - contained for flex calculated size
            _defineProperty(this, "_queueDelete", void 0);
            _defineProperty(this, "forwardFocus", void 0);
            _defineProperty(this, "_undoStyles", void 0);
            _defineProperty(this, "_renderProps", void 0);
            _defineProperty(this, "_effects", void 0);
            _defineProperty(this, "_parent", void 0);
            _defineProperty(this, "_shader", void 0);
            _defineProperty(this, "_style", void 0);
            _defineProperty(this, "_states", void 0);
            _defineProperty(this, "_events", void 0);
            _defineProperty(this, "_animationSettings", void 0);
            _defineProperty(this, "_borderRadius", void 0);
            _defineProperty(this, "_border", void 0);
            _defineProperty(this, "_borderLeft", void 0);
            _defineProperty(this, "_borderRight", void 0);
            _defineProperty(this, "_borderTop", void 0);
            _defineProperty(this, "_borderBottom", void 0);
            _defineProperty(this, "_autosized", void 0);
            // Public but uses _ prefix
            _defineProperty(this, "_isDirty", void 0);
            // Public but uses _ prefix
            _defineProperty(this, "_animationQueue", []);
            _defineProperty(this, "_animationQueueSettings", void 0);
            _defineProperty(this, "_animationRunning", false);
            _defineProperty(this, "children", void 0);
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
            this._parent = p;
            if (this.lng) {
              var _p$lng;
              this.lng.parent = (_p$lng = p === null || p === void 0 ? void 0 : p.lng) !== null && _p$lng !== void 0 ? _p$lng : null;
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
                var animationSettings = this.transition === true || this.transition[name] === true ? void 0 : this.transition[name];
                return this.animate({
                  [name]: value
                }, animationSettings).start();
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
            this._animationQueue.push({
              props,
              animationSettings
            });
            return this;
          }
          start() {
            var _this5 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var animation;
              return _regeneratorRuntime().wrap(function _callee8$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    animation = _this5._animationQueue.shift();
                  case 1:
                    if (!animation) {
                      _context9.next = 8;
                      break;
                    }
                    _this5._animationRunning = true;
                    _context9.next = 5;
                    return _this5.animate(animation.props, animation.animationSettings).start().waitUntilStopped();
                  case 5:
                    animation = _this5._animationQueue.shift();
                    _context9.next = 1;
                    break;
                  case 8:
                    _this5._animationRunning = false;
                    _this5._animationQueueSettings = void 0;
                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }, _callee8);
            }))();
          }
          setFocus() {
            if (this.lng) {
              if (this.forwardFocus !== void 0) {
                if (isFunc$1(this.forwardFocus)) {
                  if (this.forwardFocus.call(this, this) !== false) {
                    return;
                  }
                } else {
                  var focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
                  if (focusedIndex !== null && focusedIndex < this.children.length) {
                    var child = this.children[focusedIndex];
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
                var dimensions = loadedPayload.dimensions;
                this.parent.updateLayout(this, dimensions);
              }
            });
          }
          getText() {
            return this.children.map(c => c.text).join("");
          }
          destroy() {
            if (this._queueDelete) {
              var _this$lng;
              (_this$lng = this.lng) === null || _this$lng === void 0 || _this$lng.destroy();
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
            for (var _key11 in this._style) {
              if (this[_key11] === void 0) {
                this[_key11] = this._style[_key11];
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
            return this.children.find(c => c.id === id);
          }
          searchChildrenById(id) {
            for (var i = 0; i < this.children.length; i++) {
              var child = this.children[i];
              if (child instanceof ElementNode) {
                if (child.id === id) {
                  return child;
                }
                var found = child.searchChildrenById(id);
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
            if (this.hasChildren) {
              log("Layout: ", this);
              var changedLayout = false;
              if (isFunc$1(this.onBeforeLayout)) {
                changedLayout = this.onBeforeLayout.call(this, child, dimensions);
              }
              if (this.display === "flex") {
                if (calculateFlex(this) || changedLayout) {
                  var _this$parent3;
                  (_this$parent3 = this.parent) === null || _this$parent3 === void 0 || _this$parent3.updateLayout();
                }
              } else if (changedLayout) {
                var _this$parent4;
                (_this$parent4 = this.parent) === null || _this$parent4 === void 0 || _this$parent4.updateLayout();
              }
              isFunc$1(this.onLayout) && this.onLayout.call(this, child, dimensions);
            }
          }
          _stateChanged() {
            log("State Changed: ", this, this.states);
            if (this.forwardStates) {
              var states2 = this.states.slice();
              this.children.forEach(c => c.states = states2);
            }
            var states = this.states;
            if (this._undoStyles || this.style && keyExists(this.style, states)) {
              this._undoStyles = this._undoStyles || [];
              var stylesToUndo = {};
              this._undoStyles.forEach(styleKey => {
                stylesToUndo[styleKey] = this.style[styleKey];
              });
              var newStyles = states.reduce((acc, state) => {
                var styles = this.style[state];
                if (styles) {
                  acc = _objectSpread(_objectSpread({}, acc), styles);
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
            var node = this;
            var parent = this.parent;
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
            var props = node._renderProps;
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
                for (var _key12 in config.fontSettings) {
                  if (props[_key12] === void 0) {
                    props[_key12] = config.fontSettings[_key12];
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
              var _node$lng;
              (_node$lng = node.lng) === null || _node$lng === void 0 || _node$lng.on(name, (inode, data) => handler(node, data));
            });
            if (node.lng.div) {
              node.lng.div.solid = node;
            }
            if (node.name !== "text") {
              node.children.forEach(c => {
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
        var _loop2 = function _loop2() {
          var key = _LightningRendererNum[_i17];
          Object.defineProperty(ElementNode.prototype, key, {
            get() {
              return this.lng ? this.lng[key] : this._renderProps[key];
            },
            set(v) {
              this._sendToLightningAnimatable(key, v);
            }
          });
        };
        for (var _i17 = 0, _LightningRendererNum = LightningRendererNumberProps; _i17 < _LightningRendererNum.length; _i17++) {
          _loop2();
        }
        var _loop3 = function _loop3() {
          var key = _LightningRendererNon[_i18];
          Object.defineProperty(ElementNode.prototype, key, {
            get() {
              return this.lng ? this.lng[key] : this._renderProps[key];
            },
            set(v) {
              this._sendToLightning(key, v);
            }
          });
        };
        for (var _i18 = 0, _LightningRendererNon = LightningRendererNonAnimatingProps; _i18 < _LightningRendererNon.length; _i18++) {
          _loop3();
        }
        Object.defineProperties(ElementNode.prototype, {
          borderRadius: {
            set(radius) {
              this._borderRadius = radius;
              this.effects = _objectSpread(_objectSpread({}, this.effects || {}), {
                radius: {
                  radius
                }
              });
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
              this.effects = _objectSpread(_objectSpread({}, this.effects || {}), {
                linearGradient: props
              });
            },
            get() {
              return this._linearGradient;
            }
          }
        });
        var Text = props => (() => {
          var _el$ = createElement("text");
          spread(_el$, props, false);
          return _el$;
        })();
        var View = props => (() => {
          var _el$ = createElement("node");
          spread(_el$, props, false);
          return _el$;
        })();
        function createRenderer$1({
          createElement,
          createTextNode,
          isTextNode,
          replaceText,
          insertNode,
          removeNode,
          setProperty,
          getParentNode,
          getFirstChild,
          getNextSibling
        }) {
          function insert(parent, accessor, marker, initial) {
            if (marker !== undefined && !initial) initial = [];
            if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
            createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
          }
          function insertExpression(parent, value, current, marker, unwrapArray) {
            while (typeof current === "function") current = current();
            if (value === current) return current;
            var t = typeof value,
              multi = marker !== undefined;
            if (t === "string" || t === "number") {
              if (t === "number") value = value.toString();
              if (multi) {
                var node = current[0];
                if (node && isTextNode(node)) {
                  replaceText(node, value);
                } else node = createTextNode(value);
                current = cleanChildren(parent, current, marker, node);
              } else {
                if (current !== "" && typeof current === "string") {
                  replaceText(getFirstChild(parent), current = value);
                } else {
                  cleanChildren(parent, current, marker, createTextNode(value));
                  current = value;
                }
              }
            } else if (value == null || t === "boolean") {
              current = cleanChildren(parent, current, marker);
            } else if (t === "function") {
              createRenderEffect(() => {
                var v = value();
                while (typeof v === "function") v = v();
                current = insertExpression(parent, v, current, marker);
              });
              return () => current;
            } else if (Array.isArray(value)) {
              var array = [];
              if (normalizeIncomingArray(array, value, unwrapArray)) {
                createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
                return () => current;
              }
              if (array.length === 0) {
                var replacement = cleanChildren(parent, current, marker);
                if (multi) return current = replacement;
              } else {
                if (Array.isArray(current)) {
                  if (current.length === 0) {
                    appendNodes(parent, array, marker);
                  } else reconcileArrays(parent, current, array);
                } else if (current == null || current === "") {
                  appendNodes(parent, array);
                } else {
                  reconcileArrays(parent, multi && current || [getFirstChild(parent)], array);
                }
              }
              current = array;
            } else {
              if (Array.isArray(current)) {
                if (multi) return current = cleanChildren(parent, current, marker, value);
                cleanChildren(parent, current, null, value);
              } else if (current == null || current === "" || !getFirstChild(parent)) {
                insertNode(parent, value);
              } else replaceNode(parent, value, getFirstChild(parent));
              current = value;
            }
            return current;
          }
          function normalizeIncomingArray(normalized, array, unwrap) {
            var dynamic = false;
            for (var i = 0, len = array.length; i < len; i++) {
              var item = array[i],
                t = void 0;
              if (item == null || item === true || item === false) ;else if (Array.isArray(item)) {
                dynamic = normalizeIncomingArray(normalized, item) || dynamic;
              } else if ((t = typeof item) === "string" || t === "number") {
                normalized.push(createTextNode(item));
              } else if (t === "function") {
                if (unwrap) {
                  while (typeof item === "function") item = item();
                  dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
                } else {
                  normalized.push(item);
                  dynamic = true;
                }
              } else normalized.push(item);
            }
            return dynamic;
          }
          function reconcileArrays(parentNode, a, b) {
            var bLength = b.length,
              aEnd = a.length,
              bEnd = bLength,
              aStart = 0,
              bStart = 0,
              after = getNextSibling(a[aEnd - 1]),
              map = null;
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
                var node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
                while (bStart < bEnd) insertNode(parentNode, b[bStart++], node);
              } else if (bEnd === bStart) {
                while (aStart < aEnd) {
                  if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
                  aStart++;
                }
              } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                var _node2 = getNextSibling(a[--aEnd]);
                insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++]));
                insertNode(parentNode, b[--bEnd], _node2);
                a[aEnd] = b[bEnd];
              } else {
                if (!map) {
                  map = new Map();
                  var i = bStart;
                  while (i < bEnd) map.set(b[i], i++);
                }
                var index = map.get(a[aStart]);
                if (index != null) {
                  if (bStart < index && index < bEnd) {
                    var _i19 = aStart,
                      sequence = 1,
                      t = void 0;
                    while (++_i19 < aEnd && _i19 < bEnd) {
                      if ((t = map.get(a[_i19])) == null || t !== index + sequence) break;
                      sequence++;
                    }
                    if (sequence > index - bStart) {
                      var _node3 = a[aStart];
                      while (bStart < index) insertNode(parentNode, b[bStart++], _node3);
                    } else replaceNode(parentNode, b[bStart++], a[aStart++]);
                  } else aStart++;
                } else removeNode(parentNode, a[aStart++]);
              }
            }
          }
          function cleanChildren(parent, current, marker, replacement) {
            if (marker === undefined) {
              var removed;
              while (removed = getFirstChild(parent)) removeNode(parent, removed);
              replacement && insertNode(parent, replacement);
              return "";
            }
            var node = replacement || createTextNode("");
            if (current.length) {
              var inserted = false;
              for (var i = current.length - 1; i >= 0; i--) {
                var el = current[i];
                if (node !== el) {
                  var isParent = getParentNode(el) === parent;
                  if (!inserted && !i) isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker);else isParent && removeNode(parent, el);
                } else inserted = true;
              }
            } else insertNode(parent, node, marker);
            return [node];
          }
          function appendNodes(parent, array, marker) {
            for (var i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
          }
          function replaceNode(parent, newNode, oldNode) {
            insertNode(parent, newNode, oldNode);
            removeNode(parent, oldNode);
          }
          function spreadExpression(node, props, prevProps = {}, skipChildren) {
            props || (props = {});
            if (!skipChildren) {
              createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
            }
            createRenderEffect(() => props.ref && props.ref(node));
            createRenderEffect(() => {
              for (var prop in props) {
                if (prop === "children" || prop === "ref") continue;
                var value = props[prop];
                if (value === prevProps[prop]) continue;
                setProperty(node, prop, value, prevProps[prop]);
                prevProps[prop] = value;
              }
            });
            return prevProps;
          }
          return {
            render(code, element) {
              var disposer;
              createRoot(dispose => {
                disposer = dispose;
                insert(element, code());
              });
              return disposer;
            },
            insert,
            spread(node, accessor, skipChildren) {
              if (typeof accessor === "function") {
                createRenderEffect(current => spreadExpression(node, accessor(), current, skipChildren));
              } else spreadExpression(node, accessor, undefined, skipChildren);
            },
            createElement,
            createTextNode,
            insertNode,
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
          var renderer = createRenderer$1(options);
          renderer.mergeProps = mergeProps$1;
          return renderer;
        }
        var universalLightning = {
          createElement(name) {
            return new ElementNode(name);
          },
          createTextNode(text) {
            return {
              name: "TextNode",
              text,
              parent: void 0
            };
          },
          replaceText(node, value) {
            log("Replace Text: ", node, value);
            node.text = value;
            var parent = node.parent;
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
            var children = node.parent.children || [];
            var index = children.indexOf(node) + 1;
            if (index < children.length) {
              return children[index];
            }
            return void 0;
          }
        };
        var solidRenderer = createRenderer(universalLightning);
        var render = /*#__PURE__*/function () {
          var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(code, node) {
            var renderer, rootNode, dispose;
            return _regeneratorRuntime().wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  renderer = startLightningRenderer(config.rendererOptions, node);
                  _context10.next = 3;
                  return renderer.init();
                case 3:
                  rootNode = new ElementNode("App");
                  rootNode.lng = renderer.root;
                  dispose = solidRenderer.render(code, rootNode);
                  return _context10.abrupt("return", {
                    dispose,
                    rootNode,
                    renderer
                  });
                case 7:
                case "end":
                  return _context10.stop();
              }
            }, _callee9);
          }));
          return function render(_x7, _x8) {
            return _ref22.apply(this, arguments);
          };
        }();
        var effect = solidRenderer.effect,
          memo = solidRenderer.memo,
          createComponent = solidRenderer.createComponent,
          createElement = solidRenderer.createElement,
          createTextNode = solidRenderer.createTextNode,
          insertNode = solidRenderer.insertNode,
          insert = solidRenderer.insert,
          spread = solidRenderer.spread,
          setProp = solidRenderer.setProp,
          mergeProps = solidRenderer.mergeProps,
          use = solidRenderer.use;
        function hexColor(color = "") {
          if (isInteger(color)) {
            return color;
          }
          if (typeof color === "string") {
            if (color.startsWith("#")) {
              return Number(color.replace("#", "0x") + (color.length === 7 ? "ff" : ""));
            }
            if (color.startsWith("0x")) {
              return Number(color);
            }
            return Number("0x" + (color.length === 6 ? color + "ff" : color));
          }
          return 0;
        }
        var $$EVENTS = "_$DX_DELEGATE";
        function delegateEvents(eventNames, document = window.document) {
          var e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
          for (var i = 0, l = eventNames.length; i < l; i++) {
            var name = eventNames[i];
            if (!e.has(name)) {
              e.add(name);
              document.addEventListener(name, eventHandler);
            }
          }
        }
        function eventHandler(e) {
          var key = `$$${e.type}`;
          var node = e.composedPath && e.composedPath()[0] || e.target;
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
            var handler = node[key];
            if (handler && !node.disabled) {
              var data = node[`${key}Data`];
              data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
              if (e.cancelBubble) return;
            }
            node = node._$host || node.parentNode || node.host;
          }
        }
        var voidFn = () => undefined;
        var isServer = false;
        function createBeforeLeave() {
          var listeners = new Set();
          function subscribe(listener) {
            listeners.add(listener);
            return () => listeners.delete(listener);
          }
          var ignore = false;
          function confirm(to, options) {
            if (ignore) return !(ignore = false);
            var e = {
              to,
              options,
              defaultPrevented: false,
              preventDefault: () => e.defaultPrevented = true
            };
            var _iterator15 = _createForOfIteratorHelper(listeners),
              _step15;
            try {
              var _loop4 = function _loop4() {
                var l = _step15.value;
                l.listener(_objectSpread(_objectSpread({}, e), {}, {
                  from: l.location,
                  retry: force => {
                    force && (ignore = true);
                    l.navigate(to, _objectSpread(_objectSpread({}, options), {}, {
                      resolve: false
                    }));
                  }
                }));
              };
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                _loop4();
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
            return !e.defaultPrevented;
          }
          return {
            subscribe,
            confirm
          };
        }
        // The following supports browser initiated blocking (eg back/forward)
        var depth;
        function saveCurrentDepth() {
          if (!window.history.state || window.history.state._depth == null) {
            window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
              _depth: window.history.length - 1
            }), "");
          }
          depth = window.history.state._depth;
        }
        {
          saveCurrentDepth();
        }
        function keepDepth(state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            _depth: window.history.state && window.history.state._depth
          });
        }
        function notifyIfNotBlocked(notify, block) {
          var ignore = false;
          return () => {
            var prevDepth = depth;
            saveCurrentDepth();
            var delta = prevDepth == null ? null : depth - prevDepth;
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
        var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
        var trimPathRegex = /^\/+|(\/)\/+$/g;
        var mockBase = "http://sr";
        function normalizePath(path, omitSlash = false) {
          var s = path.replace(trimPathRegex, "$1");
          return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
        }
        function resolvePath(base, path, from) {
          if (hasSchemeRegex.test(path)) {
            return undefined;
          }
          var basePath = normalizePath(base);
          var fromPath = from && normalizePath(from);
          var result = "";
          if (!fromPath || path.startsWith("/")) {
            result = basePath;
          } else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) {
            result = basePath + fromPath;
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
          var params = {};
          url.searchParams.forEach((value, key) => {
            params[key] = value;
          });
          return params;
        }
        function createMatcher(path, partial, matchFilters) {
          var _path$split = path.split("/*", 2),
            _path$split2 = _slicedToArray(_path$split, 2),
            pattern = _path$split2[0],
            splat = _path$split2[1];
          var segments = pattern.split("/").filter(Boolean);
          var len = segments.length;
          return location => {
            var locSegments = location.split("/").filter(Boolean);
            var lenDiff = locSegments.length - len;
            if (lenDiff < 0 || lenDiff > 0 && splat === undefined && !partial) {
              return null;
            }
            var match = {
              path: len ? "" : "/",
              params: {}
            };
            var matchFilter = s => matchFilters === undefined ? undefined : matchFilters[s];
            for (var i = 0; i < len; i++) {
              var segment = segments[i];
              var locSegment = locSegments[i];
              var dynamic = segment[0] === ":";
              var _key13 = dynamic ? segment.slice(1) : segment;
              if (dynamic && matchSegment(locSegment, matchFilter(_key13))) {
                match.params[_key13] = locSegment;
              } else if (dynamic || !matchSegment(locSegment, segment)) {
                return null;
              }
              match.path += `/${locSegment}`;
            }
            if (splat) {
              var remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
              if (matchSegment(remainder, matchFilter(splat))) {
                match.params[splat] = remainder;
              } else {
                return null;
              }
            }
            return match;
          };
        }
        function matchSegment(input, filter) {
          var isEqual = s => s.localeCompare(input, undefined, {
            sensitivity: "base"
          }) === 0;
          if (filter === undefined) {
            return true;
          } else if (typeof filter === "string") {
            return isEqual(filter);
          } else if (typeof filter === "function") {
            return filter(input);
          } else if (Array.isArray(filter)) {
            return filter.some(isEqual);
          } else if (filter instanceof RegExp) {
            return filter.test(input);
          }
          return false;
        }
        function scoreRoute(route) {
          var _route$pattern$split = route.pattern.split("/*", 2),
            _route$pattern$split2 = _slicedToArray(_route$pattern$split, 2),
            pattern = _route$pattern$split2[0],
            splat = _route$pattern$split2[1];
          var segments = pattern.split("/").filter(Boolean);
          return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === undefined ? 0 : 1));
        }
        function createMemoObject(fn) {
          var map = new Map();
          var owner = getOwner();
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
          var match = /(\/?\:[^\/]+)\?/.exec(pattern);
          if (!match) return [pattern];
          var prefix = pattern.slice(0, match.index);
          var suffix = pattern.slice(match.index + match[0].length);
          var prefixes = [prefix, prefix += match[1]];
          // This section handles adjacent optional params. We don't actually want all permuations since
          // that will lead to equivalent routes which have the same number of params. For example
          // `/:a?/:b?/:c`? only has the unique expansion: `/`, `/:a`, `/:a/:b`, `/:a/:b/:c` and we can
          // discard `/:b`, `/:c`, `/:b/:c` by building them up in order and not recursing. This also helps
          // ensure predictability where earlier params have precidence.
          while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
            prefixes.push(prefix += match[1]);
            suffix = suffix.slice(match[0].length);
          }
          return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map(p => p + expansion)], []);
        }
        var MAX_REDIRECTS = 100;
        var RouterContextObj = createContext();
        var RouteContextObj = createContext();
        var useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
        var useNavigate = () => useRouter().navigatorFactory();
        var useLocation = () => useRouter().location;
        var useMatch = (path, matchFilters) => {
          var location = useLocation();
          var matchers = createMemo(() => expandOptionals(path()).map(path => createMatcher(path, undefined, matchFilters)));
          return createMemo(() => {
            var _iterator16 = _createForOfIteratorHelper(matchers()),
              _step16;
            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var matcher = _step16.value;
                var match = matcher(location.pathname);
                if (match) return match;
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          });
        };
        var useParams = () => useRouter().params;
        function createRoutes(routeDef, base = "") {
          var component = routeDef.component,
            load = routeDef.load,
            children = routeDef.children,
            info = routeDef.info;
          var isLeaf = !children || Array.isArray(children) && !children.length;
          var shared = {
            key: routeDef,
            component,
            load,
            info
          };
          return asArray(routeDef.path).reduce((acc, path) => {
            var _iterator17 = _createForOfIteratorHelper(expandOptionals(path)),
              _step17;
            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var originalPath = _step17.value;
                var _path = joinPaths(base, originalPath);
                var pattern = isLeaf ? _path : _path.split("/*", 1)[0];
                pattern = pattern.split("/").map(s => {
                  return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
                }).join("/");
                acc.push(_objectSpread(_objectSpread({}, shared), {}, {
                  originalPath,
                  pattern,
                  matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
                }));
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
            return acc;
          }, []);
        }
        function createBranch(routes, index = 0) {
          return {
            routes,
            score: scoreRoute(routes[routes.length - 1]) * 10000 - index,
            matcher(location) {
              var matches = [];
              for (var i = routes.length - 1; i >= 0; i--) {
                var route = routes[i];
                var match = route.matcher(location);
                if (!match) {
                  return null;
                }
                matches.unshift(_objectSpread(_objectSpread({}, match), {}, {
                  route
                }));
              }
              return matches;
            }
          };
        }
        function asArray(value) {
          return Array.isArray(value) ? value : [value];
        }
        function createBranches(routeDef, base = "", stack = [], branches = []) {
          var routeDefs = asArray(routeDef);
          for (var i = 0, len = routeDefs.length; i < len; i++) {
            var def = routeDefs[i];
            if (def && typeof def === "object") {
              if (!def.hasOwnProperty("path")) def.path = "";
              var routes = createRoutes(def, base);
              var _iterator18 = _createForOfIteratorHelper(routes),
                _step18;
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var route = _step18.value;
                  stack.push(route);
                  var isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
                  if (def.children && !isEmptyArray) {
                    createBranches(def.children, route.pattern, stack, branches);
                  } else {
                    var branch = createBranch([...stack], branches.length);
                    branches.push(branch);
                  }
                  stack.pop();
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
          }
          // Stack will be empty on final return
          return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
        }
        function getRouteMatches(branches, location) {
          for (var i = 0, len = branches.length; i < len; i++) {
            var match = branches[i].matcher(location);
            if (match) {
              return match;
            }
          }
          return [];
        }
        function createLocation(path, state) {
          var origin = new URL(mockBase);
          var url = createMemo(prev => {
            var path_ = path();
            try {
              return new URL(path_, origin);
            } catch (err) {
              console.error(`Invalid path ${path_}`);
              return prev;
            }
          }, origin, {
            equals: (a, b) => a.href === b.href
          });
          var pathname = createMemo(() => url().pathname);
          var search = createMemo(() => url().search, true);
          var hash = createMemo(() => url().hash);
          var key = () => "";
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
              return key();
            },
            query: createMemoObject(on(search, () => extractSearchParams(url())))
          };
        }
        var intent;
        function createRouterContext(integration, branches, getContext, options = {}) {
          var _integration$signal = _slicedToArray(integration.signal, 2),
            source = _integration$signal[0],
            setSource = _integration$signal[1],
            _integration$utils = integration.utils,
            utils = _integration$utils === void 0 ? {} : _integration$utils;
          var parsePath = utils.parsePath || (p => p);
          var renderPath = utils.renderPath || (p => p);
          var beforeLeave = utils.beforeLeave || createBeforeLeave();
          var basePath = resolvePath("", options.base || "");
          if (basePath === undefined) {
            throw new Error(`${basePath} is not a valid base path`);
          } else if (basePath && !source().value) {
            setSource({
              value: basePath,
              replace: true,
              scroll: false
            });
          }
          var _createSignal11 = createSignal(false),
            _createSignal12 = _slicedToArray(_createSignal11, 2),
            isRouting = _createSignal12[0],
            setIsRouting = _createSignal12[1];
          var start = /*#__PURE__*/function () {
            var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(callback) {
              return _regeneratorRuntime().wrap(function _callee10$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    setIsRouting(true);
                    _context11.prev = 1;
                    _context11.next = 4;
                    return startTransition(callback);
                  case 4:
                    _context11.prev = 4;
                    setIsRouting(false);
                    return _context11.finish(4);
                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }, _callee10, null, [[1,, 4, 7]]);
            }));
            return function start(_x9) {
              return _ref23.apply(this, arguments);
            };
          }();
          var _createSignal13 = createSignal(source().value),
            _createSignal14 = _slicedToArray(_createSignal13, 2),
            reference = _createSignal14[0],
            setReference = _createSignal14[1];
          var _createSignal15 = createSignal(source().state),
            _createSignal16 = _slicedToArray(_createSignal15, 2),
            state = _createSignal16[0],
            setState = _createSignal16[1];
          var location = createLocation(reference, state);
          var referrers = [];
          var submissions = createSignal([]);
          var matches = createMemo(() => getRouteMatches(branches(), location.pathname));
          var params = createMemoObject(() => {
            var m = matches();
            var params = {};
            for (var i = 0; i < m.length; i++) {
              Object.assign(params, m[i].params);
            }
            return params;
          });
          var baseRoute = {
            pattern: basePath,
            path: () => basePath,
            outlet: () => null,
            resolvePath(to) {
              return resolvePath(basePath, to);
            }
          };
          createRenderEffect(() => {
            var _source = source(),
              value = _source.value,
              state = _source.state;
            // Untrack this whole block so `start` doesn't cause Solid's Listener to be preserved
            untrack(() => {
              if (value !== reference()) {
                start(() => {
                  intent = "native";
                  setReference(value);
                  setState(state);
                  resetErrorBoundaries();
                  submissions[1]([]);
                }).then(() => {
                  intent = undefined;
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
            singleFlight: options.singleFlight === undefined ? true : options.singleFlight,
            submissions
          };
          function navigateFromRoute(route, to, options) {
            // Untrack in case someone navigates in an effect - don't want to track `reference` or route paths
            untrack(() => {
              if (typeof to === "number") {
                if (!to) {
                  // A delta of 0 means stay at the current location, so it is ignored
                } else if (utils.go) {
                  utils.go(to);
                } else {
                  console.warn("Router integration does not support relative routing");
                }
                return;
              }
              var _replace$resolve$scro = _objectSpread({
                  replace: false,
                  resolve: true,
                  scroll: true
                }, options),
                replace = _replace$resolve$scro.replace,
                resolve = _replace$resolve$scro.resolve,
                scroll = _replace$resolve$scro.scroll,
                nextState = _replace$resolve$scro.state;
              var resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
              if (resolvedTo === undefined) {
                throw new Error(`Path '${to}' is not a routable path`);
              } else if (referrers.length >= MAX_REDIRECTS) {
                throw new Error("Too many redirects");
              }
              var current = reference();
              if (resolvedTo !== current || nextState !== state()) {
                if (isServer) ;else if (beforeLeave.confirm(resolvedTo, options)) {
                  var len = referrers.push({
                    value: current,
                    replace,
                    scroll,
                    state: state()
                  });
                  start(() => {
                    intent = "navigate";
                    setReference(resolvedTo);
                    setState(nextState);
                    resetErrorBoundaries();
                    submissions[1]([]);
                  }).then(() => {
                    if (referrers.length === len) {
                      intent = undefined;
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
            // Workaround for vite issue (https://github.com/vitejs/vite/issues/3803)
            route = route || useContext(RouteContextObj) || baseRoute;
            return (to, options) => navigateFromRoute(route, to, options);
          }
          function navigateEnd(next) {
            var first = referrers[0];
            if (first) {
              if (next.value !== first.value || next.state !== first.state) {
                setSource(_objectSpread(_objectSpread({}, next), {}, {
                  replace: first.replace,
                  scroll: first.scroll
                }));
              }
              referrers.length = 0;
            }
          }
          function preloadRoute(url, preloadData) {
            var matches = getRouteMatches(branches(), url.pathname);
            var prevIntent = intent;
            intent = "preload";
            var _loop5 = function _loop5() {
              var _matches$match = matches[match],
                route = _matches$match.route,
                params = _matches$match.params;
              route.component && route.component.preload && route.component.preload();
              var load = route.load;
              preloadData && load && runWithOwner(getContext(), () => load({
                params,
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
            };
            for (var match in matches) {
              _loop5();
            }
            intent = prevIntent;
          }
        }
        function createRouteContext(router, parent, _outlet, match) {
          var base = router.base,
            location = router.location,
            params = router.params;
          var _match$route = match().route,
            pattern = _match$route.pattern,
            component = _match$route.component,
            load = _match$route.load;
          var path = createMemo(() => match().path);
          component && component.preload && component.preload();
          var data = load ? load({
            params,
            location,
            intent: intent || "initial"
          }) : undefined;
          var route = {
            parent,
            pattern,
            path,
            outlet: () => component ? createComponent$1(component, {
              params,
              location,
              data,
              get children() {
                return _outlet();
              }
            }) : _outlet(),
            resolvePath(to) {
              return resolvePath(base.path(), to, path());
            }
          };
          return route;
        }
        var createRouterComponent = router => props => {
          var base = props.base;
          var routeDefs = children(() => props.children);
          var branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
          var context;
          var routerState = createRouterContext(router, branches, () => context, {
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
          var location = props.routerState.location;
          var params = props.routerState.params;
          var data = createMemo(() => props.load && untrack(() => props.load({
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
            children: Root2 => createComponent(Root2, {
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
          var disposers = [];
          var root;
          var routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
            var equal = prevMatches && nextMatches.length === prevMatches.length;
            var next = [];
            var _loop6 = function _loop6(i) {
              var prevMatch = prevMatches && prevMatches[i];
              var nextMatch = nextMatches[i];
              if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
                next[i] = prev[i];
              } else {
                equal = false;
                if (disposers[i]) {
                  disposers[i]();
                }
                createRoot(dispose => {
                  disposers[i] = dispose;
                  next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => props.routerState.matches()[i]);
                });
              }
            };
            for (var i = 0, len = nextMatches.length; i < len; i++) {
              _loop6(i);
            }
            disposers.splice(nextMatches.length).forEach(dispose => dispose());
            if (prev && equal) {
              return prev;
            }
            root = next[0];
            return next;
          }));
          return createOutlet(() => routeStates() && root)();
        }
        var createOutlet = child => {
          return () => createComponent(Show, {
            get when() {
              return child();
            },
            keyed: true,
            children: child2 => createComponent(RouteContextObj.Provider, {
              value: child2,
              get children() {
                return child2.outlet();
              }
            })
          });
        };
        var Route = props => {
          var childRoutes = children(() => props.children);
          return mergeProps$1(props, {
            get children() {
              return childRoutes();
            }
          });
        };
        function intercept([value, setValue], get, set) {
          return [get ? () => get(value()) : value, set ? v => setValue(set(v)) : setValue];
        }
        function querySelector(selector) {
          if (selector === "#") {
            return null;
          }
          // Guard against selector being an invalid CSS selector
          try {
            return document.querySelector(selector);
          } catch (e) {
            return null;
          }
        }
        function createRouter(config) {
          var ignore = false;
          var wrap = value => typeof value === "string" ? {
            value
          } : value;
          var signal = intercept(createSignal(wrap(config.get()), {
            equals: (a, b) => a.value === b.value
          }), undefined, next => {
            !ignore && config.set(next);
            return next;
          });
          config.init && onCleanup(config.init((value = config.get()) => {
            ignore = true;
            signal[1](wrap(value));
            ignore = false;
          }));
          return createRouterComponent({
            signal,
            create: config.create,
            utils: config.utils
          });
        }
        function bindEvent(target, type, handler) {
          target.addEventListener(type, handler);
          return () => target.removeEventListener(type, handler);
        }
        function scrollToHash(hash, fallbackTop) {
          var el = querySelector(`#${hash}`);
          if (el) {
            el.scrollIntoView();
          } else if (fallbackTop) {
            window.scrollTo(0, 0);
          }
        }
        var actions = /* #__PURE__ */new Map();
        function setupNativeEvents(preload = true, explicitLinks = false, actionBase = "/_server") {
          return router => {
            var basePath = router.base.path();
            var navigateFromRoute = router.navigatorFactory(router.base);
            var preloadTimeout = {};
            function isSvg(el) {
              return el.namespaceURI === "http://www.w3.org/2000/svg";
            }
            function handleAnchor(evt) {
              if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey) return;
              var a = evt.composedPath().find(el => el instanceof Node && el.nodeName.toUpperCase() === "A");
              if (!a || explicitLinks && !a.hasAttribute("link")) return;
              var svg = isSvg(a);
              var href = svg ? a.href.baseVal : a.href;
              var target = svg ? a.target.baseVal : a.target;
              if (target || !href && !a.hasAttribute("state")) return;
              var rel = (a.getAttribute("rel") || "").split(/\s+/);
              if (a.hasAttribute("download") || rel && rel.includes("external")) return;
              var url = svg ? new URL(href, document.baseURI) : new URL(href);
              if (url.origin !== window.location.origin || basePath && url.pathname && !url.pathname.toLowerCase().startsWith(basePath.toLowerCase())) return;
              return [a, url];
            }
            function handleAnchorClick(evt) {
              var res = handleAnchor(evt);
              if (!res) return;
              var _res = _slicedToArray(res, 2),
                a = _res[0],
                url = _res[1];
              var to = router.parsePath(url.pathname + url.search + url.hash);
              var state = a.getAttribute("state");
              evt.preventDefault();
              navigateFromRoute(to, {
                resolve: false,
                replace: a.hasAttribute("replace"),
                scroll: !a.hasAttribute("noscroll"),
                state: state && JSON.parse(state)
              });
            }
            function handleAnchorPreload(evt) {
              var res = handleAnchor(evt);
              if (!res) return;
              var _res2 = _slicedToArray(res, 2),
                a = _res2[0],
                url = _res2[1];
              if (!preloadTimeout[url.pathname]) router.preloadRoute(url, a.getAttribute("preload") !== "false");
            }
            function handleAnchorIn(evt) {
              var res = handleAnchor(evt);
              if (!res) return;
              var _res3 = _slicedToArray(res, 2),
                a = _res3[0],
                url = _res3[1];
              if (preloadTimeout[url.pathname]) return;
              preloadTimeout[url.pathname] = setTimeout(() => {
                router.preloadRoute(url, a.getAttribute("preload") !== "false");
                delete preloadTimeout[url.pathname];
              }, 200);
            }
            function handleAnchorOut(evt) {
              var res = handleAnchor(evt);
              if (!res) return;
              var _res4 = _slicedToArray(res, 2),
                url = _res4[1];
              if (preloadTimeout[url.pathname]) {
                clearTimeout(preloadTimeout[url.pathname]);
                delete preloadTimeout[url.pathname];
              }
            }
            function handleFormSubmit(evt) {
              var actionRef = evt.submitter && evt.submitter.hasAttribute("formaction") ? evt.submitter.getAttribute("formaction") : evt.target.getAttribute("action");
              if (!actionRef) return;
              if (!actionRef.startsWith("https://action/")) {
                // normalize server actions
                var url = new URL(actionRef, mockBase);
                actionRef = router.parsePath(url.pathname + url.search);
                if (!actionRef.startsWith(actionBase)) return;
              }
              if (evt.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
              var handler = actions.get(actionRef);
              if (handler) {
                evt.preventDefault();
                var data = new FormData(evt.target);
                if (evt.submitter && evt.submitter.name) data.append(evt.submitter.name, evt.submitter.value);
                handler.call({
                  r: router,
                  f: evt.target
                }, data);
              }
            }
            // ensure delegated event run first
            delegateEvents(["click", "submit"]);
            document.addEventListener("click", handleAnchorClick);
            if (preload) {
              document.addEventListener("mouseover", handleAnchorIn);
              document.addEventListener("mouseout", handleAnchorOut);
              document.addEventListener("focusin", handleAnchorPreload);
              document.addEventListener("touchstart", handleAnchorPreload);
            }
            document.addEventListener("submit", handleFormSubmit);
            onCleanup(() => {
              document.removeEventListener("click", handleAnchorClick);
              if (preload) {
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
          var to = str.replace(/^.*?#/, "");
          // Hash-only hrefs like `#foo` from plain anchors will come in as `/#foo` whereas a link to
          // `/foo` will be `/#/foo`. Check if the to starts with a `/` and if not append it as a hash
          // to the current path so we can handle these in-page anchors correctly.
          if (!to.startsWith("/")) {
            var _window$location$hash = window.location.hash.split("#", 2),
              _window$location$hash2 = _slicedToArray(_window$location$hash, 2),
              _window$location$hash3 = _window$location$hash2[1],
              path = _window$location$hash3 === void 0 ? "/" : _window$location$hash3;
            return `${path}#${to}`;
          }
          return to;
        }
        function HashRouter(props) {
          var getSource = () => window.location.hash.slice(1);
          var beforeLeave = createBeforeLeave();
          return createRouter({
            get: getSource,
            set({
              value,
              replace,
              scroll,
              state
            }) {
              if (replace) {
                window.history.replaceState(keepDepth(state), "", "#" + value);
              } else {
                window.location.hash = value;
              }
              var hashIndex = value.indexOf("#");
              var hash = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
              scrollToHash(hash, scroll);
              saveCurrentDepth();
            },
            init: notify => bindEvent(window, "hashchange", notifyIfNotBlocked(notify, delta => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
            create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
            utils: {
              go: delta => window.history.go(delta),
              renderPath: path => `#${path}`,
              parsePath: hashParser,
              beforeLeave
            }
          })(props);
        }
        var isDev = !!DEV;
        var tryOnCleanup = isDev ? fn => getOwner() ? onCleanup(fn) : fn : onCleanup;

        // src/eventListener.ts
        function makeEventListener(target, type, handler, options) {
          target.addEventListener(type, handler, options);
          return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
        }
        function createSingletonRoot(factory, detachedOwner = getOwner()) {
          var listeners = 0,
            value,
            disposeRoot;
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
              createRoot(dispose => value = factory(disposeRoot = dispose), detachedOwner);
            }
            return value;
          };
        }
        var useKeyDownEvent = /* @__PURE__ */createSingletonRoot(() => {
          var _createSignal17 = createSignal(null),
            _createSignal18 = _slicedToArray(_createSignal17, 2),
            event = _createSignal18[0],
            setEvent = _createSignal18[1];
          makeEventListener(window, "keydown", e => {
            setEvent(e);
            setTimeout(() => setEvent(null));
          });
          return event;
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        function isFunc(item) {
          return typeof item === 'function';
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function isArray(item) {
          return Array.isArray(item);
        }

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        var keyMapEntries = {
          ArrowLeft: 'Left',
          ArrowRight: 'Right',
          ArrowUp: 'Up',
          ArrowDown: 'Down',
          Enter: 'Enter',
          l: 'Last',
          ' ': 'Space',
          Backspace: 'Back',
          Escape: 'Escape'
        };
        var _createSignal19 = createSignal([]),
          _createSignal20 = _slicedToArray(_createSignal19, 2),
          focusPath = _createSignal20[0],
          setFocusPath = _createSignal20[1];
        var useFocusManager = userKeyMap => {
          var keypressEvent = useKeyDownEvent();
          if (userKeyMap) {
            var _loop7 = function _loop7() {
              var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i20], 2),
                key = _Object$entries3$_i[0],
                value = _Object$entries3$_i[1];
              if (isArray(value)) {
                value.forEach(v => {
                  keyMapEntries[v] = key;
                });
              } else {
                keyMapEntries[value] = key;
              }
            };
            // Flatten the userKeyMap to a hash
            for (var _i20 = 0, _Object$entries3 = Object.entries(userKeyMap); _i20 < _Object$entries3.length; _i20++) {
              _loop7();
            }
          }
          createEffect(on(activeElement, (currentFocusedElm, prevFocusedElm, prevFocusPath = []) => {
            var current = currentFocusedElm;
            var fp = [];
            while (current) {
              if (!current.states.has('focus')) {
                current.states.add('focus');
                isFunc(current.onFocus) && current.onFocus.call(current, currentFocusedElm, prevFocusedElm);
              }
              fp.push(current);
              current = current.parent;
            }
            prevFocusPath.forEach(elm => {
              if (!fp.includes(elm)) {
                elm.states.remove('focus');
                isFunc(elm.onBlur) && elm.onBlur.call(elm, currentFocusedElm, prevFocusedElm);
              }
            });
            setFocusPath(fp);
            return fp;
          }, {
            defer: true
          }));
          createEffect(() => {
            var e = keypressEvent();
            if (e) {
              // Search keyMap for the value of the pressed key or keyCode if value undefined
              var mappedKeyEvent = keyMapEntries[e.key] || keyMapEntries[e.keyCode];
              untrack(() => {
                var fp = focusPath();
                var finalFocusElm = undefined;
                var _iterator19 = _createForOfIteratorHelper(fp),
                  _step19;
                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var elm = _step19.value;
                    finalFocusElm = finalFocusElm || elm;
                    if (mappedKeyEvent) {
                      var onKeyHandler = elm[`on${mappedKeyEvent}`];
                      if (isFunc(onKeyHandler)) {
                        if (onKeyHandler.call(elm, e, elm, finalFocusElm) === true) {
                          break;
                        }
                      }
                    } else {
                      console.log(`Unhandled key event: ${e.key}`);
                    }
                    if (isFunc(elm.onKeyPress)) {
                      if (elm.onKeyPress.call(elm, e, mappedKeyEvent, elm, finalFocusElm) === true) {
                        break;
                      }
                    }
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
                return false;
              });
            }
          });
          return focusPath;
        };

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        // To use with TS import withPadding and then put withPadding; on the next line to prevent tree shaking
        function withPadding(el, padding) {
          var pad = padding();
          var top, left, right, bottom;
          if (Array.isArray(pad)) {
            // top right bottom left
            if (pad.length === 2) {
              top = bottom = pad[0];
              left = right = pad[1];
            } else if (pad.length === 3) {
              top = pad[0];
              left = right = pad[1];
              bottom = pad[2];
            } else {
              var _pad = _slicedToArray(pad, 4);
              top = _pad[0];
              right = _pad[1];
              bottom = _pad[2];
              left = _pad[3];
            }
          } else {
            top = right = bottom = left = pad;
          }
          el.onBeforeLayout = (node, size) => {
            if (size) {
              el.width = el.children.reduce((acc, c) => {
                return acc + (c.width || 0);
              }, 0) + left + right;
              var firstChild = el.children[0];
              if (firstChild) {
                // set padding or marginLeft for flex
                firstChild.x = left;
                firstChild.marginLeft = left;
              }
              var maxHeight = 0;
              el.children.forEach(c => {
                c.y = top;
                c.marginTop = top;
                maxHeight = Math.max(maxHeight, c.height || 0);
              });
              el.height = maxHeight + top + bottom;
              // let flex know we need to re-layout
              return true;
            }
          };
        }

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* global SpeechSynthesisErrorEvent */
        function flattenStrings(series = []) {
          var flattenedSeries = [];
          var i;
          for (i = 0; i < series.length; i++) {
            var s = series[i];
            if (typeof s === 'string' && !s.includes('PAUSE-')) {
              flattenedSeries.push(series[i]);
            } else {
              break;
            }
          }
          // add a "word boundary" to ensure the Announcer doesn't automatically try to
          // interpret strings that look like dates but are not actually dates
          // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
          // when read together, "Sun 1993" is interpretted as "Sunday 1993"
          return [flattenedSeries.join(',\b ')].concat(series.slice(i));
        }
        function delay(pause) {
          return new Promise(resolve => {
            setTimeout(resolve, pause);
          });
        }
        /**
         * Speak a string
         *
         * @param phrase Phrase to speak
         * @param utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
         * @param lang Language to speak in
         * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
         */
        function speak(phrase, utterances, lang = 'en-US') {
          var synth = window.speechSynthesis;
          return new Promise((resolve, reject) => {
            var utterance = new SpeechSynthesisUtterance(phrase);
            utterance.lang = lang;
            utterance.onend = () => {
              resolve();
            };
            utterance.onerror = e => {
              reject(e);
            };
            utterances.push(utterance);
            synth.speak(utterance);
          });
        }
        function speakSeries(series, lang, root = true) {
          var synth = window.speechSynthesis;
          var remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
          var nestedSeriesResults = [];
          /*
            We hold this array of SpeechSynthesisUtterances in order to prevent them from being
            garbage collected prematurely on STB hardware which can cause the 'onend' events of
            utterances to not fire consistently.
          */
          var utterances = [];
          var active = true;
          var seriesChain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var phrase, pause, totalRetries, retriesLeft, seriesResult, _seriesResult;
            return _regeneratorRuntime().wrap(function _callee11$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.prev = 0;
                case 1:
                  if (!(active && remainingPhrases.length)) {
                    _context12.next = 62;
                    break;
                  }
                  _context12.next = 4;
                  return Promise.resolve(remainingPhrases.shift());
                case 4:
                  phrase = _context12.sent;
                  if (active) {
                    _context12.next = 9;
                    break;
                  }
                  return _context12.abrupt("break", 62);
                case 9:
                  if (!(typeof phrase === 'string' && phrase.includes('PAUSE-'))) {
                    _context12.next = 16;
                    break;
                  }
                  // Pause it
                  pause = Number(phrase.split('PAUSE-')[1]) * 1000;
                  if (isNaN(pause)) {
                    pause = 0;
                  }
                  _context12.next = 14;
                  return delay(pause);
                case 14:
                  _context12.next = 60;
                  break;
                case 16:
                  if (!(typeof phrase === 'string' && phrase.length)) {
                    _context12.next = 48;
                    break;
                  }
                  // Speak it
                  totalRetries = 3;
                  retriesLeft = totalRetries;
                case 19:
                  if (!(active && retriesLeft > 0)) {
                    _context12.next = 46;
                    break;
                  }
                  _context12.prev = 20;
                  _context12.next = 23;
                  return speak(phrase, utterances, lang);
                case 23:
                  retriesLeft = 0;
                  _context12.next = 44;
                  break;
                case 26:
                  _context12.prev = 26;
                  _context12.t0 = _context12["catch"](20);
                  if (!(_context12.t0 instanceof SpeechSynthesisErrorEvent)) {
                    _context12.next = 43;
                    break;
                  }
                  if (!(_context12.t0.error === 'network')) {
                    _context12.next = 36;
                    break;
                  }
                  retriesLeft--;
                  console.warn(`Speech synthesis network error. Retries left: ${retriesLeft}`);
                  _context12.next = 34;
                  return delay(500 * (totalRetries - retriesLeft));
                case 34:
                  _context12.next = 41;
                  break;
                case 36:
                  if (!(_context12.t0.error === 'canceled' || _context12.t0.error === 'interrupted')) {
                    _context12.next = 40;
                    break;
                  }
                  // Cancel or interrupt error (ignore)
                  retriesLeft = 0;
                  _context12.next = 41;
                  break;
                case 40:
                  throw new Error(`SpeechSynthesisErrorEvent: ${_context12.t0.error}`);
                case 41:
                  _context12.next = 44;
                  break;
                case 43:
                  throw _context12.t0;
                case 44:
                  _context12.next = 19;
                  break;
                case 46:
                  _context12.next = 60;
                  break;
                case 48:
                  if (!(typeof phrase === 'function')) {
                    _context12.next = 55;
                    break;
                  }
                  seriesResult = speakSeries(phrase(), lang, false);
                  nestedSeriesResults.push(seriesResult);
                  _context12.next = 53;
                  return seriesResult.series;
                case 53:
                  _context12.next = 60;
                  break;
                case 55:
                  if (!Array.isArray(phrase)) {
                    _context12.next = 60;
                    break;
                  }
                  // Speak it (recursively)
                  _seriesResult = speakSeries(phrase, lang, false);
                  nestedSeriesResults.push(_seriesResult);
                  _context12.next = 60;
                  return _seriesResult.series;
                case 60:
                  _context12.next = 1;
                  break;
                case 62:
                  _context12.prev = 62;
                  active = false;
                  return _context12.finish(62);
                case 65:
                case "end":
                  return _context12.stop();
              }
            }, _callee11, null, [[0,, 62, 65], [20, 26]]);
          }))();
          return {
            series: seriesChain,
            get active() {
              return active;
            },
            append: toSpeak => {
              remainingPhrases.push(toSpeak);
            },
            cancel: () => {
              if (!active) {
                return;
              }
              if (root) {
                synth.cancel();
              }
              nestedSeriesResults.forEach(nestedSeriesResults => {
                nestedSeriesResults.cancel();
              });
              active = false;
            }
          };
        }
        var currentSeries;
        function SpeechEngine(toSpeak, lang = 'en-US') {
          currentSeries && currentSeries.cancel();
          currentSeries = speakSeries(toSpeak, lang);
          return currentSeries;
        }

        // src/index.ts
        var debounce = (callback, wait) => {
          var timeoutId;
          var clear = () => clearTimeout(timeoutId);
          if (getOwner()) onCleanup(clear);
          var debounced = (...args) => {
            if (timeoutId !== void 0) clear();
            timeoutId = setTimeout(() => callback(...args), wait);
          };
          return Object.assign(debounced, {
            clear
          });
        };

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        var resetFocusPathTimer;
        var prevFocusPath = [];
        var currentlySpeaking;
        var voiceOutDisabled = false;
        var fiveMinutes = 300000;
        function debounceWithFlush(callback, time) {
          var trigger = debounce(callback, time);
          var scopedValue;
          var debounced = newValue => {
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
        function onFocusChangeCore(focusPath = []) {
          if (!Announcer.onFocusChange || !Announcer.enabled) {
            return;
          }
          var loaded = focusPath.every(elm => !elm.loading);
          var focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
          resetFocusPathTimer();
          if (!loaded && Announcer.onFocusChange) {
            Announcer.onFocusChange([]);
            return;
          }
          prevFocusPath = focusPath.slice(0);
          var toAnnounceText = [];
          var toAnnounce = focusDiff.reduce((acc, elm) => {
            if (elm.announce) {
              acc.push([getElmName(elm), 'Announce', elm.announce]);
              toAnnounceText.push(elm.announce);
            } else if (elm.title) {
              acc.push([getElmName(elm), 'Title', elm.title]);
              toAnnounceText.push(elm.title);
            } else {
              acc.push([getElmName(elm), 'No Announce', '']);
            }
            return acc;
          }, []);
          focusDiff.reverse().reduce((acc, elm) => {
            if (elm.announceContext) {
              acc.push([getElmName(elm), 'Context', elm.announceContext]);
              toAnnounceText.push(elm.announceContext);
            } else {
              acc.push([getElmName(elm), 'No Context', '']);
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
        var Announcer = {
          debug: false,
          enabled: true,
          cancel: function cancel() {
            currentlySpeaking && currentlySpeaking.cancel();
          },
          clearPrevFocus: function clearPrevFocus(depth = 0) {
            prevFocusPath = prevFocusPath.slice(0, depth);
            resetFocusPathTimer();
          },
          speak: function speak(text, {
            append = false,
            notification = false
          } = {}) {
            if (Announcer.onFocusChange && Announcer.enabled) {
              Announcer.onFocusChange.flush();
              if (append && currentlySpeaking && currentlySpeaking.active) {
                currentlySpeaking.append(text);
              } else {
                Announcer.cancel();
                textToSpeech(text);
              }
              if (notification) {
                var _currentlySpeaking;
                voiceOutDisabled = true;
                (_currentlySpeaking = currentlySpeaking) === null || _currentlySpeaking === void 0 || _currentlySpeaking.series.finally(() => {
                  voiceOutDisabled = false;
                  Announcer.refresh();
                }).catch(console.error);
              }
            }
            return currentlySpeaking;
          },
          refresh: function refresh(depth = 0) {
            Announcer.clearPrevFocus(depth);
            Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
          },
          setupTimers: function setupTimers({
            focusDebounce = 400,
            focusChangeTimeout = fiveMinutes
          } = {}) {
            Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce);
            resetFocusPathTimer = debounceWithFlush(() => {
              // Reset focus path for full announce
              prevFocusPath = [];
            }, focusChangeTimeout);
          }
        };

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        var useAnnouncer = () => {
          Announcer.setupTimers();
          createEffect(on(focusPath, Announcer.onFocusChange, {
            defer: true
          }));
          return Announcer;
        };

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        function createSpriteMap(src, subTextures) {
          var spriteMapTexture = renderer.createTexture('ImageTexture', {
            src
          });
          return subTextures.reduce((acc, t) => {
            var x = t.x,
              y = t.y,
              width = t.width,
              height = t.height;
            acc[t.name] = renderer.createTexture('SubTexture', {
              texture: spriteMapTexture,
              x,
              y,
              width,
              height
            });
            return acc;
          }, {});
        }
        var _createSignal21 = createSignal(""),
          _createSignal22 = _slicedToArray(_createSignal21, 2),
          globalBackground = _createSignal22[0],
          setGlobalBackground = _createSignal22[1];
        var theme = {
          name: 'Base Lightning TV',
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
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            expressiveEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            expressiveExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standard: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standardEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standardExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utility: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utilityEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utilityExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            }
          },
          asset: {
            arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
            arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
            backspaceOutline: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC',
            check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
          },
          color: {
            palette: {
              'blue-20': '0xbecffeff',
              'blue-40': '0x93a9fdff',
              'blue-90': '0x000033ff',
              'grey-05': '0xf8f7faff',
              'grey-40': '0x929096ff',
              'grey-70': '0x48474bff',
              'grey-90': '0x181819ff'
            },
            white: '0xffffffff',
            black: '0x000000ff',
            grey: '0x929096ff',
            red: '0xe74c3cff',
            orange: '0xdc7633ff',
            yellow: '0xf7dc6fff',
            green: '0x2ecc71ff',
            blue: '0x93a9fdff',
            purple: '0x663399ff',
            material: '0x181819ff',
            materialBrand: '0x000033ff',
            overlay: '0x181819b3',
            textNeutral: '0xf8f7faff',
            textNeutralSecondary: '0xf8f7fab3',
            textNeutralTertiary: '0xf8f7fa1a',
            textNeutralDisabled: '0xf8f7fa80',
            textInverse: '0x181819ff',
            textInverseSecondary: '0x181819b3',
            textInverseTertiary: '0x1818191a',
            textInverseDisabled: '0x18181980',
            textBrand: '0x93a9fdff',
            textBrandSecondary: '0x93a9fdb3',
            textBrandTertiary: '0x93a9fd1a',
            textBrandDisabled: '0x93a9fd80',
            textPositive: '0x2ecc71ff',
            textNegative: '0xe74c3cff',
            textInfo: '0x93a9fdff',
            textCaution: '0xdc7633ff',
            fillTransparent: '0xffffff0',
            fillNeutral: '0xf8f7faff',
            fillNeutralSecondary: '0xf8f7fab3',
            fillNeutralTertiary: '0xf8f7fa1a',
            fillNeutralDisabled: '0xf8f7fa80',
            fillInverse: '0x181819ff',
            fillInverseSecondary: '0x181819b3',
            fillInverseTertiary: '0x1818191a',
            fillInverseDisabled: '0x18181980',
            fillBrand: '0x93a9fdff',
            fillBrandSecondary: '0x93a9fdb3',
            fillBrandTertiary: '0x93a9fd1a',
            fillBrandDisabled: '0x93a9fd80',
            fillPositive: '0x2ecc71ff',
            fillNegative: '0xe74c3cff',
            fillInfo: '0x93a9fdff',
            fillCaution: '0xdc7633ff',
            strokeNeutral: '0xf8f7faff',
            strokeNeutralSecondary: '0xf8f7fab3',
            strokeNeutralTertiary: '0xf8f7fa1a',
            strokeNeutralDisabled: '0xf8f7fa80',
            strokeInverse: '0x181819ff',
            strokeInverseSecondary: '0x181819b3',
            strokeInverseTertiary: '0x1818191a',
            strokeInverseDisabled: '0x18181980',
            strokeBrand: '0x93a9fdff',
            strokeBrandSecondary: '0x93a9fdb3',
            strokeBrandTertiary: '0x93a9fd1a',
            strokeBrandDisabled: '0x93a9fd80',
            strokePositive: '0x2ecc71ff',
            strokeNegative: '0xe74c3cff',
            strokeInfo: '0x93a9fdff',
            strokeCaution: '0xdc7633ff',
            interactiveNeutral: '0xffffff1a',
            interactiveNeutralFocus: '0xffffffff',
            interactiveNeutralFocusSoft: '0xffffff1a',
            interactiveInverse: '0x48474b1a',
            interactiveInverseFocus: '0x48474bff',
            interactiveInverseFocusSoft: '0x48474b1a',
            interactiveBrand: '0xbecffe1a',
            interactiveBrandFocus: '0xbecffeff',
            interactiveBrandFocusSoft: '0xbecffe1a',
            shadowNeutral: '0x000000b3',
            shadowNeutralFocus: '0x000000b3',
            shadowNeutralFocusSoft: '0x000000b3',
            shadowNeutralText: '0x000000ff',
            shadowInverse: '0x000000b3',
            shadowInverseFocus: '0x000000b3',
            shadowInverseFocusSoft: '0x000000b3',
            shadowInverseText: '0x000000ff',
            shadowBrand: '0x000000b3',
            shadowBrandFocus: '0x000000b3',
            shadowBrandFocusSoft: '0x000000b3',
            shadowBrandText: '0x000000ff'
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
          radius: {
            none: 0,
            xs: 2,
            sm: 4,
            md: 8,
            lg: 16,
            xl: 24
          },
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
          stroke: {
            none: 0,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8
          },
          typography: {
            display1: {
              fontFamily: 'Arial',
              fontSize: 75,
              lineHeight: 85,
              fontWeight: 500,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            display2: {
              fontFamily: 'Arial',
              fontSize: 50,
              lineHeight: 60,
              fontWeight: 500,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline1: {
              fontFamily: 'Arial',
              fontSize: 35,
              fontWeight: 500,
              lineHeight: 48,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline2: {
              fontFamily: 'Arial',
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 40,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline3: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 500,
              lineHeight: 36,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body1: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 300,
              lineHeight: 40,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body2: {
              fontFamily: 'Arial',
              fontSize: 22,
              fontWeight: 300,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body3: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 300,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            button1: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            button2: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            callout1: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            caption1: {
              fontFamily: 'Arial',
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 24,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            tag1: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 24,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            footnote1: {
              fontFamily: 'Arial',
              fontSize: 22,
              fontWeight: 300,
              lineHeight: 30,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            }
          },
          componentConfig: {
            Keyboard: {
              base: {
                keyProps: {
                  delete: {
                    title: null,
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC'
                  }
                }
              }
            }
          }
        };
        function Background() {
          var bg1, bg2, heroMask;
          var active = 0;
          var alpha = 1;
          var animationSettings = {
            duration: 750,
            easing: "ease-in-out"
          };
          var bgStyles = {
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
          createEffect(on(globalBackground, img => {
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
          var obj = {};
          var _iterator20 = _createForOfIteratorHelper(entries),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _step20$value = _slicedToArray(_step20.value, 2),
                key2 = _step20$value[0],
                value = _step20$value[1];
              obj[key2] = value;
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
          return obj;
        }
        var defaultModeKeys = ["focus", "disabled"];
        var defaultToneKeys = ["brand", "inverse", "neutral"];
        function makeComponentStyles({
          themeKeys,
          base,
          modes,
          tones,
          themeStyles: themeStyles2,
          modeKeys = defaultModeKeys,
          toneKeys = defaultToneKeys
        }, debug = false) {
          var makeToneStyles = (tones2, themeComponentStyles, modeStyles) => {
            var toneStyles = toneKeys.map(tone => {
              var _ref25, _ref26;
              var styles2 = {};
              var styleList = new Set([].concat.apply([], [(_ref25 = tones2 == null ? void 0 : tones2[tone]) !== null && _ref25 !== void 0 ? _ref25 : {}, (_ref26 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) !== null && _ref26 !== void 0 ? _ref26 : {}].map(Object.keys)));
              styleList.forEach(styleKey => {
                var _a2, _b2;
                if (!modeKeys.includes(styleKey)) {
                  var _ref27;
                  styles2[styleKey] = (_ref27 = (_a2 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _a2[styleKey]) !== null && _ref27 !== void 0 ? _ref27 : (_b2 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _b2[styleKey];
                }
              });
              modeKeys.forEach(mode => {
                var _a2, _b2;
                styles2[mode] = _objectSpread(_objectSpread(_objectSpread({}, modeStyles[mode]), (_a2 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _a2[mode]), (_b2 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _b2[mode]);
              });
              return [tone, styles2];
            });
            return objectFromEntries(toneStyles);
          };
          var makeModeStyles = (modes2, themeComponentStyles) => {
            var modeStyles = modeKeys.map(mode => {
              return [mode, _objectSpread(_objectSpread({}, modes2 == null ? void 0 : modes2[mode]), themeComponentStyles == null ? void 0 : themeComponentStyles[mode])];
            });
            var modeObject = objectFromEntries(modeStyles);
            return modeObject;
          };
          var makeBaseStyles = (base2, themeComponentStyles) => {
            var baseStyles = _objectSpread(_objectSpread({}, base2), themeComponentStyles.base);
            return baseStyles;
          };
          var mapThemeKeysToSolid = stylesToMap => objectFromEntries(Object.entries(themeKeys).filter(([_, themeKey]) => stylesToMap[themeKey]).map(([solidKey, themeKey]) => [solidKey, stylesToMap[themeKey]]));
          var convertComponentConfig = themeStyles3 => {
            var convertedThemeStyles = objectFromEntries(
            // iterate through each variant
            Object.entries(themeStyles3).map(([variantName, styles2]) => {
              var convertedStyles = mapThemeKeysToSolid(styles2);
              Object.entries(styles2).filter(([styleName, _]) => modeKeys.includes(styleName)).forEach(([modeName, modeStyles]) => {
                convertedStyles[modeName] = mapThemeKeysToSolid(modeStyles);
              });
              return [variantName, convertedStyles];
            }));
            return convertedThemeStyles;
          };
          var generateSolidStylesFromLookupObject = (base2, modes2, tones2) => {
            var themeComponentStyles = convertComponentConfig(themeStyles2);
            debug && console.log(themeComponentStyles);
            var baseStyles = makeBaseStyles(base2, themeComponentStyles);
            debug && console.log(baseStyles);
            var modeStyles = makeModeStyles(modes2, themeComponentStyles);
            debug && console.log(modeStyles);
            var toneStyles = makeToneStyles(tones2, themeComponentStyles, modeStyles);
            debug && console.log(toneStyles);
            return {
              base: _objectSpread(_objectSpread({}, baseStyles), modeStyles),
              tones: toneStyles
            };
          };
          return generateSolidStylesFromLookupObject(base, modes, tones);
        }
        function withScrolling(adjustment = 0) {
          return (componentRef, selectedElement, selected = 0, lastSelected) => {
            var _componentRef$axis, _ref28, _ref29;
            if (componentRef.children.length === 0) {
              return;
            }
            var dimension = componentRef.flexDirection === "row" ? "width" : "height";
            var axis = componentRef.flexDirection === "row" ? "x" : "y";
            var gap = componentRef.gap || 0;
            var scroll = componentRef.scroll || "auto";
            var _updateLastIndex = updateLastIndex(componentRef),
              _updateLastIndex2 = _slicedToArray(_updateLastIndex, 2),
              lastItem = _updateLastIndex2[0],
              containerSize = _updateLastIndex2[1];
            var rootPosition = (_componentRef$axis = componentRef[axis]) !== null && _componentRef$axis !== void 0 ? _componentRef$axis : 0;
            var selectedPosition = (_ref28 = selectedElement == null ? void 0 : selectedElement[axis]) !== null && _ref28 !== void 0 ? _ref28 : 0;
            var selectedSize = (_ref29 = selectedElement == null ? void 0 : selectedElement[dimension]) !== null && _ref29 !== void 0 ? _ref29 : 0;
            var direct = lastSelected === void 0 ? "none" : selected > lastSelected ? "positive" : "negative";
            var next = rootPosition;
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
              var currentChildIndex = 0;
              var currentChild, currentChildSize;
              while (currentChildIndex < componentRef.children.length && Math.abs(rootPosition) + containerSize < selectedPosition + selectedSize) {
                var _currentChild$dimensi;
                currentChild = componentRef.children[currentChildIndex++];
                currentChildSize = (_currentChild$dimensi = currentChild[dimension]) !== null && _currentChild$dimensi !== void 0 ? _currentChild$dimensi : 0;
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
          var lastItem, containerSize;
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
        var chainFunctions = (...args) => {
          var onlyFunctions = args.filter(func => typeof func === "function");
          if (onlyFunctions.length === 0) {
            return void 0;
          }
          if (onlyFunctions.length === 1) {
            return onlyFunctions[0];
          }
          return function (...innerArgs) {
            var result;
            var _iterator21 = _createForOfIteratorHelper(onlyFunctions),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var func = _step21.value;
                result = func.apply(this, innerArgs);
                if (result === true) {
                  return result;
                }
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
            return result;
          };
        };
        function onGridFocus() {
          if (!this || this.selected === void 0 || this.children.length === 0) return false;
          var child = this.children[this.selected];
          while (child == null ? void 0 : child.skipFocus) {
            this.selected++;
            child = this.children[this.selected];
          }
          if (!(child instanceof ElementNode)) return false;
          child.setFocus();
          return true;
        }
        function handleNavigation(direction) {
          return function () {
            var _a2, _b2, _c2;
            var numChildren = this.children.length;
            var wrap = this.wrap;
            var lastSelected = this.selected || 0;
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
              } while ((_a2 = this.children[this.selected]) == null ? void 0 : _a2.skipFocus);
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
            var active = this.children[this.selected];
            this.onSelectedChanged && this.onSelectedChanged.call(this, this, active, this.selected, lastSelected);
            if (this.plinko && lastSelected !== void 0) {
              var lastSelectedChild = this.children[lastSelected];
              var num = lastSelectedChild.selected || 0;
              active.selected = num < active.children.length ? num : active.children.length - 1;
            }
            active.setFocus();
            return true;
          };
        }
        function getWidthByUpCount$1(theme2, upCount = 1) {
          var screenW = theme2.layout.screenW;
          var columnCount = theme2.layout.columnCount;
          var marginX = theme2.layout.marginX;
          var gutterX = theme2.layout.gutterX;
          if (upCount < 1 || upCount > columnCount) {
            console.error(`Column expects a number between 1 & ${columnCount}. Received ${upCount}`);
            return;
          }
          var columnWidth = screenW - marginX * 2;
          var columnGapTotal = (upCount - 1) * gutterX;
          var totalColumnsWidth = columnWidth - columnGapTotal;
          return totalColumnsWidth / upCount;
        }
        var _ref30 = (_a = theme) == null ? void 0 : _a.componentConfig,
          _ref30$Artwork = _ref30.Artwork,
          _ref30$Artwork2 = _ref30$Artwork === void 0 ? {
            styles: {}
          } : _ref30$Artwork,
          defaultTone$f = _ref30$Artwork2.defaultTone,
          themeStyles$e = _objectWithoutProperties(_ref30$Artwork2, _excluded);
        var container$f = {
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
        var _ref31 = (_b = theme) == null ? void 0 : _b.componentConfig,
          _ref31$Badge = _ref31.Badge,
          _ref31$Badge2 = _ref31$Badge === void 0 ? {
            styles: {}
          } : _ref31$Badge,
          defaultTone$e = _ref31$Badge2.defaultTone,
          themeStyles$d = _objectWithoutProperties(_ref31$Badge2, _excluded2);
        var container$e = {
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
            padding: [theme.spacer.md - theme.stroke.sm, theme.spacer.xs + theme.stroke.sm, theme.spacer.md + theme.stroke.sm, theme.spacer.md + theme.stroke.sm]
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
        var text$7 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread(_objectSpread({}, theme.typography.tag1), {}, {
            color: theme.color.textNeutral
          }),
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
        var icon$2 = {
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
        var _ref32 = (_c = theme) == null ? void 0 : _c.componentConfig,
          _ref32$Button = _ref32.Button,
          _ref32$Button2 = _ref32$Button === void 0 ? {
            styles: {}
          } : _ref32$Button,
          defaultTone$d = _ref32$Button2.defaultTone,
          themeStyles$c = _objectWithoutProperties(_ref32$Button2, _excluded3);
        var _ref33 = (_d = theme) == null ? void 0 : _d.componentConfig,
          _ref33$Surface = _ref33.Surface,
          _ref33$Surface2 = _ref33$Surface === void 0 ? {
            styles: {}
          } : _ref33$Surface,
          surfaceDefaultTone = _ref33$Surface2.surfaceDefaultTone,
          surfaceThemeStyles$1 = _objectWithoutProperties(_ref33$Surface2, _excluded4);
        var container$d = {
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
          themeStyles: _objectSpread(_objectSpread({}, surfaceThemeStyles$1), themeStyles$c)
        };
        var content = {
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
          themeStyles: _objectSpread(_objectSpread({}, surfaceThemeStyles$1), themeStyles$c)
        };
        var text$6 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread({
            textAlign: "left",
            color: theme.color.textNeutral
          }, theme.typography.button1),
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
          themeStyles: _objectSpread(_objectSpread({}, surfaceThemeStyles$1), themeStyles$c)
        };
        var Container$c = makeComponentStyles(container$d);
        var Content = makeComponentStyles(content);
        var Text$5 = makeComponentStyles(text$6);
        var styles$c = {
          tone: defaultTone$d || surfaceDefaultTone || "neutral",
          Container: Container$c,
          Content,
          Text: Text$5
        };
        var Button$1 = props => {
          return createComponent(View, mergeProps(props, {
            get style() {
              var _props$tone;
              var _a2;
              return [...[props.style].flat(),
              //
              (_a2 = styles$c.Container.tones) == null ? void 0 : _a2[(_props$tone = props.tone) !== null && _props$tone !== void 0 ? _props$tone : styles$c.tone], styles$c.Container.base];
            },
            forwardStates: true,
            get children() {
              return createComponent(Text, {
                get style() {
                  var _props$tone2;
                  var _a2;
                  return [...[(_a2 = props.style) == null ? void 0 : _a2.Text].flat(),
                  //
                  styles$c.Text.tones[(_props$tone2 = props.tone) !== null && _props$tone2 !== void 0 ? _props$tone2 : styles$c.tone], styles$c.Text.base];
                },
                get children() {
                  return props.children;
                }
              });
            }
          }));
        };
        var _ref34 = (_e = theme) == null ? void 0 : _e.componentConfig,
          _ref34$Checkbox = _ref34.Checkbox,
          _ref34$Checkbox2 = _ref34$Checkbox === void 0 ? {
            styles: {}
          } : _ref34$Checkbox,
          defaultTone$c = _ref34$Checkbox2.defaultTone,
          themeStyles$b = _objectWithoutProperties(_ref34$Checkbox2, _excluded5);
        var strokeWidth = theme.stroke.sm;
        var size = theme.spacer.xxl;
        var container$c = {
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
        var icon$1 = {
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
        var _ref35 = (_f = theme) == null ? void 0 : _f.componentConfig,
          _ref35$Icon = _ref35.Icon,
          _ref35$Icon2 = _ref35$Icon === void 0 ? {
            styles: {}
          } : _ref35$Icon,
          defaultTone$b = _ref35$Icon2.defaultTone,
          themeStyles$a = _objectWithoutProperties(_ref35$Icon2, _excluded6);
        var container$b = {
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
        var _ref36 = (_g = theme) == null ? void 0 : _g.componentConfig,
          _ref36$Column = _ref36.Column,
          _ref36$Column2 = _ref36$Column === void 0 ? {
            styles: {}
          } : _ref36$Column,
          defaultTone$a = _ref36$Column2.defaultTone,
          themeStyles$9 = _objectWithoutProperties(_ref36$Column2, _excluded7);
        var container$a = {
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
            itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
              duration: theme.animation.duration.fast
            })
          },
          themeStyles: themeStyles$9
        };
        var Container$9 = makeComponentStyles(container$a);
        var styles$9 = {
          tone: defaultTone$a || "neutral",
          Container: Container$9
        };
        var Column = props => {
          var onUp = handleNavigation("up");
          var onDown = handleNavigation("down");
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
              return chainFunctions(elm => {
                var _props$selected, _props$selected2;
                return withScrolling(props.y).call(elm, elm, elm.children[(_props$selected = props.selected) !== null && _props$selected !== void 0 ? _props$selected : 0], (_props$selected2 = props.selected) !== null && _props$selected2 !== void 0 ? _props$selected2 : 0, void 0);
              }, props.onCreate);
            },
            get onSelectedChanged() {
              return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? withScrolling(props.y) : void 0);
            },
            get style() {
              var _props$tone3;
              return [...[props.style].flat(), styles$9.Container.tones[(_props$tone3 = props.tone) !== null && _props$tone3 !== void 0 ? _props$tone3 : styles$9.tone], styles$9.Container.base];
            }
          }));
        };
        var _ref37 = (_h = theme) == null ? void 0 : _h.componentConfig,
          _ref37$Label = _ref37.Label,
          _ref37$Label2 = _ref37$Label === void 0 ? {
            styles: {}
          } : _ref37$Label,
          defaultTone$9 = _ref37$Label2.defaultTone,
          themeStyles$8 = _objectWithoutProperties(_ref37$Label2, _excluded8);
        var container$9 = {
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
        var text$5 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
            color: theme.color.textInverse
          }),
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
        var _ref38 = (_i = theme) == null ? void 0 : _i.componentConfig,
          _ref38$Rating = _ref38.Rating,
          _ref38$Rating2 = _ref38$Rating === void 0 ? {
            styles: {},
            defaultTone: "neutral"
          } : _ref38$Rating,
          themeStyles$7 = _ref38$Rating2.styles,
          defaultTone$8 = _ref38$Rating2.defaultTone;
        var container$8 = {
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
        var text$4 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread({
            color: theme.color.textNeutral
          }, theme.typography.body2),
          toneModes: {},
          themeStyles: themeStyles$7
        };
        var icon = {
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
        var _ref39 = (_j = theme) == null ? void 0 : _j.componentConfig,
          _ref39$Details = _ref39.Details,
          _ref39$Details2 = _ref39$Details === void 0 ? {
            styles: {}
          } : _ref39$Details,
          defaultTone$7 = _ref39$Details2.defaultTone,
          themeStyles$6 = _objectWithoutProperties(_ref39$Details2, _excluded9);
        var container$7 = {
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
        var text$3 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
            marginRight: theme.spacer.lg,
            color: theme.color.textNeutral
          }),
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
        var _ref40 = (_k = theme) == null ? void 0 : _k.componentConfig,
          _ref40$Metadata = _ref40.Metadata,
          _ref40$Metadata2 = _ref40$Metadata === void 0 ? {
            styles: {}
          } : _ref40$Metadata,
          defaultTone$6 = _ref40$Metadata2.defaultTone,
          themeStyles$5 = _objectWithoutProperties(_ref40$Metadata2, _excluded10);
        var container$6 = {
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
        var titleText = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread(_objectSpread({
            maxLines: 1,
            contain: "width"
          }, theme.typography.headline3), {}, {
            color: theme.color.textNeutral
          }),
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
        var descriptionText = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread(_objectSpread({
            contain: "width",
            maxLines: 2
          }, theme.typography.body2), {}, {
            color: theme.color.textNeutralSecondary
          }),
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
        var _ref41 = (_l = theme) == null ? void 0 : _l.componentConfig,
          _ref41$ProgressBar = _ref41.ProgressBar,
          _ref41$ProgressBar2 = _ref41$ProgressBar === void 0 ? {
            styles: {}
          } : _ref41$ProgressBar,
          defaultTone$5 = _ref41$ProgressBar2.defaultTone,
          themeStyles$4 = _objectWithoutProperties(_ref41$ProgressBar2, _excluded11);
        var container$5 = {
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
        var progress = {
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
        var _ref42 = (_m = theme) == null ? void 0 : _m.componentConfig,
          _ref42$Row = _ref42.Row,
          _ref42$Row2 = _ref42$Row === void 0 ? {
            styles: {}
          } : _ref42$Row,
          defaultTone$4 = _ref42$Row2.defaultTone,
          themeStyles$3 = _objectWithoutProperties(_ref42$Row2, _excluded12);
        var container$4 = {
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
            itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
              duration: theme.animation.duration.fast
            })
          },
          themeStyles: themeStyles$3
        };
        var Container$3 = makeComponentStyles(container$4);
        var styles$3 = {
          tone: defaultTone$4,
          Container: Container$3
        };
        var Row = props => {
          var onLeft = handleNavigation("left");
          var onRight = handleNavigation("right");
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
              return chainFunctions(elm => {
                var _props$selected3, _props$selected4;
                return withScrolling(props.x).call(elm, elm, elm.children[(_props$selected3 = props.selected) !== null && _props$selected3 !== void 0 ? _props$selected3 : 0], (_props$selected4 = props.selected) !== null && _props$selected4 !== void 0 ? _props$selected4 : 0, void 0);
              }, props.onCreate);
            },
            get onSelectedChanged() {
              return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? withScrolling(props.x) : void 0);
            },
            get tone() {
              var _props$tone4;
              return (_props$tone4 = props.tone) !== null && _props$tone4 !== void 0 ? _props$tone4 : styles$3.tone;
            },
            get style() {
              return [...[props.style].flat(), styles$3.Container.tones[props.tone || styles$3.tone], styles$3.Container.base];
            },
            get states() {
              var _props$tone5;
              return (_props$tone5 = props.tone) !== null && _props$tone5 !== void 0 ? _props$tone5 : styles$3.tone;
            }
          }));
        };
        var _ref43 = (_n = theme) == null ? void 0 : _n.componentConfig,
          _ref43$Keyboard = _ref43.Keyboard,
          _ref43$Keyboard2 = _ref43$Keyboard === void 0 ? {
            styles: {}
          } : _ref43$Keyboard,
          defaultTone$3 = _ref43$Keyboard2.defaultTone,
          themeStyles$2 = _objectWithoutProperties(_ref43$Keyboard2, _excluded13);
        var container$3 = {
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
        var key = {
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
        var text$2 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread({
            textAlign: "left",
            color: theme.color.textNeutral
          }, theme.typography.headline2),
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
        var _ref44 = (_o = theme) == null ? void 0 : _o.componentConfig,
          _ref44$Key = _ref44.Key,
          _ref44$Key2 = _ref44$Key === void 0 ? {
            styles: {}
          } : _ref44$Key,
          defaultTone$2 = _ref44$Key2.defaultTone,
          themeStyles$1 = _objectWithoutProperties(_ref44$Key2, _excluded14);
        var container$2 = {
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
        var text$1 = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread({
            textAlign: "left",
            color: theme.color.textNeutral
          }, theme.typography.headline2),
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
        var _ref45 = (_p = theme) == null ? void 0 : _p.componentConfig,
          _ref45$Input = _ref45.Input,
          _ref45$Input2 = _ref45$Input === void 0 ? {
            styles: {}
          } : _ref45$Input,
          defaultTone$1 = _ref45$Input2.defaultTone,
          themeStyles = _objectWithoutProperties(_ref45$Input2, _excluded15);
        var container$1 = {
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
        var input = {
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
        var text = {
          themeKeys: {
            color: "textColor"
          },
          base: _objectSpread({
            textAlign: "left",
            color: theme.color.textNeutral
          }, theme.typography.button1),
          themeStyles
        };
        makeComponentStyles(container$1);
        makeComponentStyles(input);
        makeComponentStyles(text);
        var _ref46 = (_q = theme) == null ? void 0 : _q.componentConfig,
          _ref46$Tile = _ref46.Tile,
          _ref46$Tile2 = _ref46$Tile === void 0 ? {
            styles: {}
          } : _ref46$Tile,
          defaultTone = _ref46$Tile2.defaultTone,
          tileThemeStyles = _objectWithoutProperties(_ref46$Tile2, _excluded16);
        var _ref47 = (_r = theme) == null ? void 0 : _r.componentConfig,
          _ref47$Surface = _ref47.Surface,
          _ref47$Surface2 = _ref47$Surface === void 0 ? {
            styles: {}
          } : _ref47$Surface,
          defaultSurfaceTone = _ref47$Surface2.defaultSurfaceTone,
          surfaceThemeStyles = _objectWithoutProperties(_ref47$Surface2, _excluded17);
        var container = {
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
          themeStyles: _objectSpread(_objectSpread({}, surfaceThemeStyles), tileThemeStyles)
        };
        var insetBottom = {
          themeKeys: {},
          base: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            mountY: 1
          },
          themeStyles: tileThemeStyles
        };
        var standardBottom = {
          themeKeys: {},
          base: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart"
          },
          themeStyles: tileThemeStyles
        };
        var logoContainer = {
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
        var fpsStyle = {
          color: 255,
          height: 150,
          width: 330,
          x: 1910,
          y: 10,
          mountX: 1,
          alpha: 0.8,
          zIndex: 100
        };
        var fpsLabel = {
          x: 10,
          fontSize: 22,
          textColor: hexColor("#f6f6f6")
        };
        var fpsValue = {
          fontSize: 22,
          textColor: hexColor("#f6f6f6")
        };
        var _createSignal23 = createSignal(0),
          _createSignal24 = _slicedToArray(_createSignal23, 2),
          fps = _createSignal24[0],
          setFps = _createSignal24[1];
        var _createSignal25 = createSignal(0),
          _createSignal26 = _slicedToArray(_createSignal25, 2),
          avgFps = _createSignal26[0],
          setAvgFps = _createSignal26[1];
        var _createSignal27 = createSignal(99),
          _createSignal28 = _slicedToArray(_createSignal27, 2),
          minFps = _createSignal28[0],
          setMinFps = _createSignal28[1];
        var _createSignal29 = createSignal(0),
          _createSignal30 = _slicedToArray(_createSignal29, 2),
          maxFps = _createSignal30[0],
          setMaxFps = _createSignal30[1];
        var _createSignal31 = createSignal(0),
          _createSignal32 = _slicedToArray(_createSignal31, 2),
          isLoadedCount = _createSignal32[0],
          setIsLoadedCount = _createSignal32[1];
        var _createSignal33 = createSignal(0),
          _createSignal34 = _slicedToArray(_createSignal33, 2),
          isLoadingCount = _createSignal34[0],
          setIsLoadingCount = _createSignal34[1];
        var _createSignal35 = createSignal(0),
          _createSignal36 = _slicedToArray(_createSignal35, 2),
          isFailedCount = _createSignal36[0],
          setIsFailedCount = _createSignal36[1];
        var count = 0;
        var totalFps = 0;
        var calcFps = fps2 => {
          if (!fps2) return;
          setFps(fps2);
          setMinFps(prev => Math.min(fps2, prev));
          setMaxFps(prev => Math.max(fps2, prev));
          totalFps += fps2;
          count++;
          setAvgFps(Math.round(totalFps / count));
        };
        var calcPerformanceMetrics = stage => {
          var isLoadedCount2 = 0;
          var isLoadingCount2 = 0;
          var isFailedCount2 = 0;
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
            var fps2 = typeof fpsData === "number" ? fpsData : fpsData.fps;
            if (fps2 > 5) {
              calcFps(fps2);
              calcPerformanceMetrics(target.root.stage);
            }
          });
        }
        var FPSCounter = props => {
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
        var styles$1 = {
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
            transition: {
              alpha: true
            }
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
        var basePath = "/solid-demo-app/";
        var icons = [{
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
          var sprite = createSpriteMap(basePath + "assets/icons_white.png", icons);
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
          var backdrop;
          var navigate = useNavigate();
          function onFocus() {
            backdrop.states.add("focus");
            this.children.forEach(c => c.states.add("active"));
            this.children.selected.setFocus();
          }
          function onBlur() {
            backdrop.states.remove("focus");
            this.selected = 0;
            this.children.forEach(c => c.states.remove("active"));
          }
          function handleNavigate(page) {
            var isOnPage = useMatch(() => page);
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
        var App = props => {
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
          var announcer = useAnnouncer();
          announcer.enabled = false;
          var navigate = useNavigate();
          var navDrawer, lastFocused;
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
          var _createSignal37 = createSignal(true),
            _createSignal38 = _slicedToArray(_createSignal37, 2),
            showWidgets = _createSignal38[0],
            setShowWidgets = _createSignal38[1];
          var location = useLocation();
          var showOnPaths = ["/browse", "/entity"];
          createEffect(() => {
            var currentPath = location.pathname;
            var matchesPartial = showOnPaths.some(path => currentPath.startsWith(path));
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
        var styles = {
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
            transition: {
              scale: {
                duration: 250,
                easing: "ease-in-out"
              }
            },
            border: {
              width: 0,
              color: 0
            },
            focus: {
              scale: 1.1,
              border: {
                color: 4294967142,
                width: 8
              }
            }
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
          showHeadline: {
            x: 70,
            y: 20
          },
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
            transition: {
              y: {
                duration: 250,
                easing: "ease-in-out"
              }
            },
            zIndex: 2
          },
          Rect: {
            width: 250,
            height: 100,
            y: 10,
            x: 300,
            color: hexColor("#0000ff")
          },
          peopleBio: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
            fontFamily: "Ubuntu",
            fontWeight: "normal",
            contain: "both",
            width: 780,
            height: 340
          })
        };
        var Button = {
          width: 120,
          height: 40,
          color: hexColor("#000000"),
          borderRadius: 8,
          border: {
            width: 2,
            color: hexColor("#3333ff")
          },
          scale: 1,
          focus: {
            scale: 1.1,
            border: {
              width: 5,
              color: hexColor("#333333")
            }
          },
          transition: {
            scale: true,
            color: true
          }
        };
        var TopBar = {
          color: hexColor("#00A699"),
          height: 8,
          y: 2,
          x: -4,
          width: Button.width + 8
        };
        var ButtonText = {
          fontSize: 12,
          y: 12,
          // lineHeight: Button.height, // TODO: Add back when lineHeight is supported
          contain: "width",
          textAlign: "center",
          color: hexColor("#F6F6F9"),
          height: Button.height,
          width: Button.width
        };
        var buttonStyles = {
          container: Button,
          topBar: TopBar,
          text: ButtonText
        };
        var MaterialButton = {
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
        var MaterialButtonText = {
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
          var _splitProps = splitProps(props, ["items"]),
            _splitProps2 = _slicedToArray(_splitProps, 2),
            local = _splitProps2[0],
            others = _splitProps2[1];
          return createComponent(Row, mergeProps(others, {
            get style() {
              return styles.Row;
            },
            get children() {
              return createComponent(For, {
                get each() {
                  return local.items;
                },
                children: item => createComponent(Thumbnail, item)
              });
            }
          }));
        }
        var API_KEY_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA";
        var API_BASE = "https://api.themoviedb.org/3";
        var tmdbConfig;
        var baseImageUrl;
        var basePosterSize = "w185";
        var defaultFetchParams = {
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
          return fetch(API_BASE + path, _objectSpread(_objectSpread({}, defaultFetchParams), params)).then(r => r.json());
        }
        function loadConfig() {
          return _get("/configuration").then(data => {
            var _data$images;
            tmdbConfig = data;
            baseImageUrl = (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images.secure_base_url;
            return data;
          });
        }
        var api = {
          get,
          loadConfig
        };
        function truncateString(str, maxLength) {
          if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + "...";
          }
          return str;
        }
        function chunkArray(array, size = 7) {
          var result = [];
          for (var i = 0, j = array.length; i < j; i += size) {
            result.push(array.slice(i, i + size));
          }
          return result;
        }
        function convertItemsToTiles(items = []) {
          return items.map(item => ({
            src: getImageUrl(item.poster_path || item.profile_path),
            tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
            backdrop: getImageUrl(item.backdrop_path, "w1280"),
            href: `/entity/${item.media_type || "people"}/${item.id}`,
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
        var cache = /* @__PURE__ */new Map();
        var leftoverTiles = /* @__PURE__ */new Map();
        function browseProvider(filter) {
          return pageIndex => {
            var url = `/trending/${filter}/week?page=${pageIndex}`;
            if (cache.has(url)) {
              return cache.get(url);
            }
            var result = api.get(url).then(trending => {
              var results = trending.results.filter(r => !r.adult);
              var tiles = (leftoverTiles.has(filter) ? leftoverTiles.get(filter) : []).concat(convertItemsToTiles(results));
              var chunks = chunkArray(tiles);
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
          var _createSignal39 = createSignal([]),
            _createSignal40 = _slicedToArray(_createSignal39, 2),
            pages = _createSignal40[0],
            setPages = _createSignal40[1];
          var _createSignal41 = createSignal(1),
            _createSignal42 = _slicedToArray(_createSignal41, 2),
            page = _createSignal42[0],
            setPage = _createSignal42[1];
          var _createSignal43 = createSignal(false),
            _createSignal44 = _slicedToArray(_createSignal43, 2),
            end = _createSignal44[0],
            setEnd = _createSignal44[1];
          var _createResource = createResource(page, fetcher),
            _createResource2 = _slicedToArray(_createResource, 1),
            contents = _createResource2[0];
          createComputed(() => {
            var content = contents();
            if (!content) return;
            batch(() => {
              if (content.length === 0) setEnd(true);
              setPages(p => [...p, ...content]);
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
        var blockWidth = 900;
        var ContentBlockStyle = {
          display: "flex",
          flexDirection: "column",
          x: 50,
          y: 100,
          width: blockWidth,
          height: 220,
          gap: 16
        };
        var HeadlineStyles = _objectSpread(_objectSpread({}, theme.typography.display2), {}, {
          fontFamily: "Ubuntu",
          fontWeight: 700,
          maxLines: 1,
          width: blockWidth,
          contain: "width"
        });
        var Headline = props => createComponent(Text, mergeProps(props, {
          style: HeadlineStyles
        }));
        var DescriptionStyles = _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
          fontFamily: "Ubuntu",
          fontWeight: 400,
          lineHeight: 32,
          width: blockWidth,
          maxLines: 3,
          contain: "width"
        });
        var BadgeStyle = {
          fontSize: 16,
          lineHeight: 20
        };
        var Description = props => createComponent(Text, mergeProps(props, {
          style: DescriptionStyles,
          get children() {
            return props.children;
          }
        }));
        var Badge = props => {
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
        var MetaTextStyle = _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          fontFamily: "Ubuntu",
          fontWeight: 400
        });
        var Metadata = props => createComponent(View, {
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
              children: item => createComponent(Badge, {
                y: -5,
                children: item
              })
            })];
          }
        });
        var ContentBlock = props => createComponent(View, mergeProps(props, {
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
          var hours = Math.floor(minutes / 60);
          var remainingMinutes = minutes % 60;
          return hours + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
        }
        function formatDate(dateString) {
          var parts = dateString.split("-");
          return parts[1] + "/" + parts[2] + "/" + parts[0];
        }
        function justYear(dateString) {
          var parts = dateString.split("-");
          return parts[0];
        }
        function getRecommendations({
          type,
          id
        }) {
          return api.get(`/${type}/${id}/recommendations`).then(({
            results
          }) => {
            if (results.length) {
              return convertItemsToTiles(results.slice(0, 7));
            }
            return api.get(`/trending/${type}/week?page=1`).then(({
              results
            }) => convertItemsToTiles(results.slice(0, 7)));
          });
        }
        function getCredits$1({
          type,
          id
        }) {
          return api.get(`/${type}/${id}/credits`).then(({
            cast
          }) => convertItemsToTiles(cast.slice(0, 7)));
        }
        function getInfo$1({
          type,
          id
        }) {
          var rt = type === "movie" ? {
            rtCrit: 86,
            rtFan: 92
          } : {};
          return api.get(`/${type}/${id}`).then(data => _objectSpread({
            backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
            heroContent: {
              title: data.title || data.name,
              description: data.overview,
              badges: ["HD", "CC"],
              voteAverage: data.vote_average,
              voteCount: data.vote_count,
              metaText: type === "movie" ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : `${justYear(data.first_air_date)} - ${justYear(data.last_air_date)}`,
              reviews: rt
            }
          }, data));
        }
        var Browse = () => {
          var params = useParams();
          var _createSignal45 = createSignal(0),
            _createSignal46 = _slicedToArray(_createSignal45, 2),
            columnY = _createSignal46[0],
            setcolumnY = _createSignal46[1];
          var _createSignal47 = createSignal(),
            _createSignal48 = _slicedToArray(_createSignal47, 2),
            entityInfo = _createSignal48[0],
            setEntityInfo = _createSignal48[1];
          createResource(entityInfo, getInfo$1);
          var _createSignal49 = createSignal({}),
            _createSignal50 = _slicedToArray(_createSignal49, 2),
            heroContent = _createSignal50[0],
            setHeroContent = _createSignal50[1];
          var navigate = useNavigate();
          var isFirst = createSelector(() => {
            return 0;
          });
          var provider = createMemo(() => {
            return createInfiniteScroll(browseProvider(params.filter || "all"));
          });
          var delayedBackgrounds = debounce(img => setGlobalBackground(img), 400);
          var delayedHero = debounce(content => setHeroContent(content), 200);
          createEffect(on(activeElement, elm => {
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
            var _this$children$select;
            (_this$children$select = this.children.selected) === null || _this$children$select === void 0 || _this$children$select.setFocus();
            setcolumnY((this.y || 0) * -1 + 24);
            var numPages = provider().pages().length;
            if (numPages === 0 || this.parent.selected && this.parent.selected >= numPages - 2) {
              provider().setPage(p => p + 1);
            }
          }
          function onEnter() {
            var entity = this.children.selected;
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
        var Portal = () => {
          var navigate = useNavigate();
          var isFirst = createSelector(() => {
            return 0;
          });
          function onEnter() {
            var entity = this.children.selected;
            assertTruthy(entity && entity.id);
            navigate("/" + entity.id);
          }
          var demos = [{
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
            var Container = {
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
            var _createSignal51 = createSignal(4294967295),
              _createSignal52 = _slicedToArray(_createSignal51, 2),
              color = _createSignal52[0],
              setColor = _createSignal52[1];
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
          var _createSignal53 = createSignal(140),
            _createSignal54 = _slicedToArray(_createSignal53, 2),
            rowX = _createSignal54[0],
            setRowX = _createSignal54[1];
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
        var TextPage = () => {
          var OverviewContainer = {
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
          var SublineContainer = {
            width: 900,
            height: 36,
            gap: 6,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexStart",
            color: hexColor("00000000")
          };
          var Title = {
            fontSize: 42
          };
          var Overview = {
            width: OverviewContainer.width,
            fontSize: 26,
            contain: "width"
          };
          var Subline = {
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
        var CreatePage = () => {
          var OverviewContainer = {
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
          var SublineContainer = {
            width: 900,
            height: 36,
            gap: 6,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexStart",
            color: hexColor("00000000")
          };
          var Title = {
            fontSize: 42
          };
          var Subline = {
            fontSize: 26
          };
          var myBox, childRef;
          onMount(() => {
            setGlobalBackground("#000000");
            myBox.animate({
              x: 100
            }, {
              duration: 2e3
            }).start();
          });
          var _createSignal55 = createSignal(),
            _createSignal56 = _slicedToArray(_createSignal55, 2),
            insertTest = _createSignal56[0],
            setInsertTest = _createSignal56[1];
          var _createSignal57 = createSignal(),
            _createSignal58 = _slicedToArray(_createSignal57, 2),
            emptyTest = _createSignal58[0],
            setEmptyTest = _createSignal58[1];
          setTimeout(() => {
            var _childRef$getChildByI;
            setInsertTest("- Inserted -");
            (_childRef$getChildByI = childRef.getChildById("child1")) === null || _childRef$getChildByI === void 0 || _childRef$getChildByI.animate({
              x: 600
            }, {
              duration: 2e3
            }).start();
          }, 2e3);
          var styleChild = {
            width: 400,
            height: 300,
            // Solid blue
            color: hexColor("#0000ff")
          };
          var someOtherStyle = {
            // pretty red
            color: hexColor("#f54242"),
            focus: {
              // pretty blue
              color: hexColor("#4287f5")
            }
          };
          function ChildTest(props) {
            var resolved = children(() => props.children);
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
          var borderStyles = {
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
          var childTestPassedStyles = {
            // grey color
            color: hexColor("#cccccc"),
            focus: {
              // black
              color: hexColor("#000000")
            }
          };
          var childTestPassedStyles2 = {
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
        var ViewportPage = () => {
          var ball, invervalTimer;
          var _createSignal59 = createSignal([]),
            _createSignal60 = _slicedToArray(_createSignal59, 2),
            ballStatus = _createSignal60[0],
            setBallStatus = _createSignal60[1];
          var styleBall = {
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
          var Title = {
            fontSize: 32,
            x: 960,
            y: 540,
            mount: 0.5,
            lineheight: 52
          };
          var randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
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
            setBallStatus(prev => {
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
                onEvents: [["inBounds", elm => logEvent("inBounds")], ["outOfBounds", elm => logEvent("outOfBounds")], ["inViewport", elm => logEvent("inViewport")], ["outOfViewport", elm => logEvent("outOfViewport")]]
              })];
            }
          });
        };
        var ButtonsPage = () => {
          function onEnter(event, elm) {
            this.states.toggle("disabled");
          }
          var RowStyles = {
            display: "flex",
            justifyContent: "flexStart",
            width: 1500,
            height: 300,
            color: hexColor("00000000"),
            gap: 26,
            y: 400
          };
          function Button(props) {
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
          var Badge = props => {
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
              return [createComponent(Badge, {
                children: "HD"
              }), createComponent(Badge, {
                children: "PG13"
              }), createComponent(Badge, {
                children: "NC17"
              }), createComponent(Text, {
                fontSize: 30,
                children: "I like bananas"
              }), createComponent(Badge, {
                children: "DOLBY"
              })];
            }
          }), createComponent(Row, {
            x: 100,
            gap: 40,
            style: RowStyles,
            get children() {
              return [createComponent(Button, {
                autofocus: true,
                onEnter,
                children: "TV Shows"
              }), createComponent(Button, {
                states: {
                  active: true,
                  disabled: false
                },
                children: "Movies"
              }), createComponent(Button, {
                states: "active",
                children: "Sports"
              }), createComponent(Button, {
                states: "disabled",
                children: "News"
              })];
            }
          })];
        };
        var FlexPage = () => {
          var RowStyles = {
            display: "flex",
            justifyContent: "flexStart",
            width: 1600,
            height: 110,
            color: hexColor("#4dabf5")
          };
          var rowTitle = {
            fontSize: 44,
            marginTop: 25,
            marginBottom: -20,
            skipFocus: true
          };
          function Block(props) {
            var styles2 = {
              width: 200,
              height: 100,
              y: 5,
              color: 392801023
            };
            return createComponent(View, mergeProps(props, {
              style: styles2
            }));
          }
          var _createSignal61 = createSignal(50),
            _createSignal62 = _slicedToArray(_createSignal61, 2),
            columnY = _createSignal62[0],
            setColumnY = _createSignal62[1];
          function onFocus() {
            var _this$children$select2;
            (_this$children$select2 = this.children.selected) === null || _this$children$select2 === void 0 || _this$children$select2.setFocus();
            setColumnY(150 + (this.y || 0) * -1);
          }
          onMount(() => {
            setGlobalBackground("#333333");
          });
          var gap = 50;
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
        var FlexSizePage = () => {
          var RowStyles = {
            display: "flex",
            justifyContent: "flexStart",
            width: 1600,
            height: 110,
            color: hexColor("#4dabf5")
          };
          var rowTitle = {
            fontSize: 44,
            marginTop: 25,
            marginBottom: -20,
            skipFocus: true
          };
          function Block(props) {
            var styles2 = {
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
          var _createSignal63 = createSignal(50),
            _createSignal64 = _slicedToArray(_createSignal63, 2),
            columnY = _createSignal64[0],
            setColumnY = _createSignal64[1];
          function onFocus() {
            var _this$children$select3;
            (_this$children$select3 = this.children.selected) === null || _this$children$select3 === void 0 || _this$children$select3.setFocus();
            setColumnY(150 + (this.y || 0) * -1);
          }
          onMount(() => {
            setGlobalBackground("#333333");
          });
          var gap = 50;
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
        var FlexColumnPage$1 = () => {
          var RowStyles = {
            display: "flex",
            justifyContent: "spaceEvenly",
            width: 1920,
            y: 100,
            height: 880,
            color: hexColor("00000000")
          };
          var ColumnStyles = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            color: hexColor("#4dabf5"),
            height: 850,
            width: 80
          };
          var rowTitle = {
            fontSize: 44,
            y: 20,
            x: 150
          };
          function Block(props) {
            var styles = {
              width: randSize(),
              height: 80,
              x: 5,
              color: hexColor("#1769aa")
            };
            return createComponent(View, mergeProps(props, {
              style: styles
            }));
          }
          function randSize() {
            return Math.floor(Math.random() * 61) + 10;
          }
          var _createSignal65 = createSignal(50),
            _createSignal66 = _slicedToArray(_createSignal65, 2),
            columnY = _createSignal66[0],
            setColumnY = _createSignal66[1];
          function onFocus() {
            var _this$children$select4;
            (_this$children$select4 = this.children.selected) === null || _this$children$select4 === void 0 || _this$children$select4.setFocus();
            setColumnY(150 + (this.y || 0) * -1);
          }
          onMount(() => {
            setGlobalBackground("#333333");
          });
          var gap = 50;
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
        var FlexColumnPage = () => {
          var RowStyles = {
            display: "flex",
            justifyContent: "spaceEvenly",
            width: 1920,
            y: 100,
            height: 880,
            color: hexColor("00000000")
          };
          var ColumnStyles = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            color: hexColor("#4dabf5"),
            height: 850,
            width: 60
          };
          var rowTitle = {
            fontSize: 44,
            y: 20,
            x: 150
          };
          function Block(props) {
            var styles = {
              width: 50,
              height: 80,
              x: 5,
              color: hexColor("#1769aa")
            };
            return createComponent(View, mergeProps(props, {
              style: styles
            }));
          }
          var _createSignal67 = createSignal(50),
            _createSignal68 = _slicedToArray(_createSignal67, 2),
            columnY = _createSignal68[0],
            setColumnY = _createSignal68[1];
          function onFocus() {
            var _this$children$select5;
            (_this$children$select5 = this.children.selected) === null || _this$children$select5 === void 0 || _this$children$select5.setFocus();
            setColumnY(150 + (this.y || 0) * -1);
          }
          onMount(() => {
            setGlobalBackground("#333333");
          });
          var gap = 50;
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
        var MaterialButtonsPage = () => {
          function onEnter(event, elm) {
            this.states.toggle("disabled");
          }
          var RowStyles = {
            display: "flex",
            justifyContent: "flexStart",
            width: 1500,
            height: 300,
            color: hexColor("00000000"),
            gap: 26,
            y: 400,
            x: 100
          };
          var MaterialButton = {
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
          var RoundedRectangle = ["RoundedRectangle", {
            radius: 65
          }];
          function Button(props) {
            return createComponent(View, mergeProps(props, {
              forwardStates: true,
              style: MaterialButton,
              shader: RoundedRectangle,
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
              return [createComponent(Button, {
                autofocus: true,
                onEnter,
                children: "Focused"
              }), createComponent(Button, {
                states: {
                  active: true,
                  disabled: false
                },
                children: "Normal"
              }), createComponent(Button, {
                states: "disabled",
                children: "Disabled"
              })];
            }
          });
        };

        // Documentation from Shaka player:
        // https://shaka-player-demo.appspot.com/docs/api/tutorial-basic-usage.html

        var manifestUri = "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";
        function initApp() {
          // Install built-in polyfills to patch browser incompatibilities.
          shaka.polyfill.installAll();

          // Check to see if the browser supports the basic APIs Shaka needs.
          if (shaka.Player.isBrowserSupported()) {
            // Everything looks good!
            initPlayer();
          } else {
            // This browser does not have the minimum set of APIs we need.
            console.error("Browser not supported!");
          }
        }
        function initPlayer() {
          return _initPlayer.apply(this, arguments);
        }
        function _initPlayer() {
          _initPlayer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var video, player;
            return _regeneratorRuntime().wrap(function _callee13$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  // Create a Player instance.
                  video = document.getElementById("video");
                  player = new shaka.Player();
                  _context14.next = 4;
                  return player.attach(video);
                case 4:
                  // Attach player to the window to make it easy to access in the JS console.
                  window.player = player;

                  // Listen for error events.
                  player.addEventListener("error", onErrorEvent);

                  // Try to load a manifest.
                  // This is an asynchronous process.
                  _context14.prev = 6;
                  _context14.next = 9;
                  return player.load(manifestUri);
                case 9:
                  // This runs if the asynchronous load is successful.
                  console.log("The video has now been loaded!");
                  _context14.next = 15;
                  break;
                case 12:
                  _context14.prev = 12;
                  _context14.t0 = _context14["catch"](6);
                  // onError is executed if the asynchronous load fails.
                  onError(_context14.t0);
                case 15:
                case "end":
                  return _context14.stop();
              }
            }, _callee13, null, [[6, 12]]);
          }));
          return _initPlayer.apply(this, arguments);
        }
        function onErrorEvent(event) {
          // Extract the shaka.util.Error object from the event.
          onError(event.detail);
        }
        function onError(error) {
          // Log the error.
          console.error("Error code", error.code, "object", error);
        }
        function playVideo() {
          var video = document.getElementById("video");
          video.hidden = false;
          // Needs delay from hidden to play in Chrome
          setTimeout(() => video.play(), 50);
          video.focus();
          return video;
        }
        function closeVideo() {
          var video = document.getElementById("video");
          video.hidden = true;
          video.pause();
          return video;
        }
        document.addEventListener("DOMContentLoaded", initApp);
        var Entity = () => {
          var params = useParams();
          var navigate = useNavigate();
          var _createResource3 = createResource(() => _objectSpread({}, params), getInfo$1),
            _createResource4 = _slicedToArray(_createResource3, 1),
            data = _createResource4[0];
          var _createResource5 = createResource(() => _objectSpread({}, params), getCredits$1),
            _createResource6 = _slicedToArray(_createResource5, 1),
            credits = _createResource6[0];
          var _createResource7 = createResource(() => _objectSpread({}, params), getRecommendations),
            _createResource8 = _slicedToArray(_createResource7, 1),
            recommendations = _createResource8[0];
          var _createSignal69 = createSignal(0),
            _createSignal70 = _slicedToArray(_createSignal69, 2),
            backdropAlpha = _createSignal70[0],
            setBackdropAlpha = _createSignal70[1];
          createEffect(on(data, data2 => {
            setGlobalBackground(data2.backgroundImage);
          }, {
            defer: true
          }));
          var columnY = 640;
          var Backdrop = {
            color: hexColor("#000000"),
            alpha: 0,
            width: 1900,
            height: 890,
            x: -160,
            y: columnY,
            borderRadius: 30
          };
          function onRowFocus() {
            var _this$children$select6;
            (_this$children$select6 = this.children.selected) === null || _this$children$select6 === void 0 || _this$children$select6.setFocus();
            columnRef.y = columnY;
            backdropRef.y = columnY;
            backdropRef.alpha = 0;
          }
          function onRowFocusAnimate() {
            var _this$children$select7;
            (_this$children$select7 = this.children.selected) === null || _this$children$select7 === void 0 || _this$children$select7.setFocus();
            columnRef.y = 200;
            backdropRef.y = 160;
            backdropRef.alpha = 0.9;
          }
          function onEnter() {
            var entity = this.children.selected;
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
            var video = playVideo();
            setActiveElement(video);
            setBackdropAlpha(0.9);
          }
          var columnRef, backdropRef, entityActions;
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
        function getCredits({
          id
        }) {
          return api.get(`/person/${id}/combined_credits`).then(({
            cast
          }) => convertItemsToTiles(cast.slice(0, 7)));
        }
        function getInfo({
          id
        }) {
          return api.get(`/person/${id}`).then(data => _objectSpread({
            backgroundImage: getImageUrl(data.profile_path, "original"),
            heroContent: {
              title: data.title || data.name,
              description: data.biography
            }
          }, data));
        }
        var People = () => {
          var params = useParams();
          var navigate = useNavigate();
          var _createResource9 = createResource(() => _objectSpread({}, params), getInfo),
            _createResource10 = _slicedToArray(_createResource9, 1),
            data = _createResource10[0];
          var _createResource11 = createResource(() => _objectSpread({}, params), getCredits),
            _createResource12 = _slicedToArray(_createResource11, 1),
            credits = _createResource12[0];
          var Backdrop = {
            color: hexColor("#000000"),
            alpha: 0.8,
            width: 800,
            height: 440,
            x: 130,
            y: 180,
            borderRadius: 30
          };
          function onEnter() {
            var entity = this.children.selected;
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
        var NotFound = () => {
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
        var coreExtensionModuleUrl = new URL('AppCoreExtensions-legacy-BzG4a-Q5.js', module.meta.url).href;
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
          root: props => createComponent(App, props),
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
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-BoS85dc4.js.map
