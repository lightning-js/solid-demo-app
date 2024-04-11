;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        exports({
          a: assertTruthy,
          c: createBound,
          d: intersectBound,
          e: intersectRect,
          f: getNormalizedAlphaComponent,
          g: getRgbaString,
          h: memize,
          i: isProductionEnvironment,
          k: isBoundPositive,
          l: boundsOverlap,
          m: mergeColorAlphaPremultiplied,
          n: convertBoundToRect,
          o: copyRect,
          q: mergeColorAlpha,
          s: mergeColorProgress,
          t: boundInsideBound
        });
        function createWebGLContext(canvas, contextSpy) {
          var config = {
            alpha: true,
            antialias: false,
            depth: false,
            stencil: true,
            desynchronized: false,
            // Disabled because it prevents Visual Regression Tests from working
            // failIfMajorPerformanceCaveat: true,
            powerPreference: "high-performance",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false
          };
          var gl =
          // TODO: Remove this assertion once this issue is fixed in TypeScript
          // https://github.com/microsoft/TypeScript/issues/53614
          canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config);
          if (!gl) {
            throw new Error("Unable to create WebGL context");
          }
          if (contextSpy) {
            return new Proxy(gl, {
              get(target, prop) {
                var value = target[prop];
                if (typeof value === "function") {
                  contextSpy.increment(String(prop));
                  return value.bind(target);
                }
                return value;
              }
            });
          }
          return gl;
        }
        function assertTruthy(condition, message) {
          if (isProductionEnvironment()) return;
          if (!condition) {
            throw new Error(message || "Assertion failed");
          }
        }
        function mergeColorProgress(rgba1, rgba2, p) {
          var r1 = Math.trunc(rgba1 >>> 24);
          var g1 = Math.trunc(rgba1 >>> 16 & 255);
          var b1 = Math.trunc(rgba1 >>> 8 & 255);
          var a1 = Math.trunc(rgba1 & 255);
          var r2 = Math.trunc(rgba2 >>> 24);
          var g2 = Math.trunc(rgba2 >>> 16 & 255);
          var b2 = Math.trunc(rgba2 >>> 8 & 255);
          var a2 = Math.trunc(rgba2 & 255);
          var r = Math.round(r2 * p + r1 * (1 - p));
          var g = Math.round(g2 * p + g1 * (1 - p));
          var b = Math.round(b2 * p + b1 * (1 - p));
          var a = Math.round(a2 * p + a1 * (1 - p));
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function mergeColorAlpha(rgba, alpha) {
          var r = rgba >>> 24;
          var g = rgba >>> 16 & 255;
          var b = rgba >>> 8 & 255;
          var a = Math.trunc((rgba & 255) * alpha);
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function mergeColorAlphaPremultiplied(rgba, alpha, flipEndianess = false) {
          var newAlpha = (rgba & 255) / 255 * alpha;
          var r = Math.trunc((rgba >>> 24) * newAlpha);
          var g = Math.trunc((rgba >>> 16 & 255) * newAlpha);
          var b = Math.trunc((rgba >>> 8 & 255) * newAlpha);
          var a = Math.trunc(newAlpha * 255);
          if (flipEndianess) {
            return (a << 24 | b << 16 | g << 8 | r) >>> 0;
          }
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function hasOwn(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        function isProductionEnvironment() {
          return {
            "BASE_URL": "/solid-demo-app/",
            "MODE": "production",
            "DEV": false,
            "PROD": true,
            "SSR": false,
            "LEGACY": true
          } && true;
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
         * EventEmitter base class
         */
        class EventEmitter {
          constructor() {
            _defineProperty(this, "eventListeners", {});
          }
          on(event, listener) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              listeners = [];
            }
            listeners.push(listener);
            this.eventListeners[event] = listeners;
          }
          off(event, listener) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              return;
            }
            if (!listener) {
              delete this.eventListeners[event];
              return;
            }
            var index = listeners.indexOf(listener);
            if (index >= 0) {
              listeners.splice(index, 1);
            }
          }
          once(event, listener) {
            var onceListener = (target, data) => {
              this.off(event, onceListener);
              listener(target, data);
            };
            this.on(event, onceListener);
          }
          emit(event, data) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              return;
            }
            [...listeners].forEach(listener => {
              listener(this, data);
            });
          }
          removeAllListeners() {
            this.eventListeners = {};
          }
        }
        exports("E", EventEmitter);

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
        class CoreShader {
          // abstract draw(): void;
          static makeCacheKey(props) {
            return false;
          }
          static resolveDefaults(props) {
            return {};
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
        //#endregion Types
        function createShader(glw, type, source) {
          var shader = glw.createShader(type);
          if (!shader) {
            throw new Error();
          }
          glw.shaderSource(shader, source);
          glw.compileShader(shader);
          var success = glw.getShaderParameter(shader, glw.COMPILE_STATUS);
          if (success) {
            return shader;
          }
          console.log(glw.getShaderInfoLog(shader));
          glw.deleteShader(shader);
        }
        function createProgram(glw, vertexShader, fragmentShader) {
          var program = glw.createProgram();
          if (!program) {
            throw new Error();
          }
          glw.attachShader(program, vertexShader);
          glw.attachShader(program, fragmentShader);
          glw.linkProgram(program);
          var success = glw.getProgramParameter(program, glw.LINK_STATUS);
          if (success) {
            return program;
          }
          console.log(glw.getProgramInfoLog(program));
          glw.deleteProgram(program);
          return undefined;
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
         * Generic WebGL Utility Functions
         *
         * @remarks
         * Nothing here should be coupled to Renderer logic / types.
         *
         * @param gl
         * @returns
         */
        function isWebGl2(gl) {
          return self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext;
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
        class WebGlCoreShader extends CoreShader {
          constructor(options) {
            super();
            _defineProperty(this, "boundBufferCollection", null);
            _defineProperty(this, "buffersBound", false);
            _defineProperty(this, "program", void 0);
            /**
             * Vertex Array Object
             *
             * @remarks
             * Used by WebGL2 Only
             */
            _defineProperty(this, "vao", void 0);
            _defineProperty(this, "renderer", void 0);
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "attributeBuffers", void 0);
            _defineProperty(this, "attributeLocations", void 0);
            _defineProperty(this, "attributeNames", void 0);
            _defineProperty(this, "uniformLocations", void 0);
            _defineProperty(this, "uniformTypes", void 0);
            _defineProperty(this, "supportsIndexedTextures", void 0);
            var renderer = this.renderer = options.renderer;
            var glw = this.glw = this.renderer.glw;
            this.supportsIndexedTextures = options.supportsIndexedTextures || false;
            // Check that extensions are supported
            var webGl2 = glw.isWebGl2();
            var requiredExtensions = webGl2 && options.webgl2Extensions || !webGl2 && options.webgl1Extensions || [];
            var glVersion = webGl2 ? '2.0' : '1.0';
            requiredExtensions.forEach(extensionName => {
              if (!glw.getExtension(extensionName)) {
                throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL ${glVersion} but wasn't found`);
              }
            });
            // Gather shader sources
            // - If WebGL 2 and special WebGL 2 sources are provided, we copy those sources and delete
            // the extra copy of them to save memory.
            // TODO: This could be further made optimal by just caching the compiled shaders and completely deleting
            // the source code
            var shaderSources = options.shaderSources || this.constructor.shaderSources;
            if (!shaderSources) {
              throw new Error(`Shader "${this.constructor.name}" is missing shaderSources.`);
            } else if (webGl2 && shaderSources !== null && shaderSources !== void 0 && shaderSources.webGl2) {
              shaderSources.fragment = shaderSources.webGl2.fragment;
              shaderSources.vertex = shaderSources.webGl2.vertex;
              delete shaderSources.webGl2;
            }
            var textureUnits = renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
            var vertexSource = shaderSources.vertex instanceof Function ? shaderSources.vertex(textureUnits) : shaderSources.vertex;
            var fragmentSource = shaderSources.fragment instanceof Function ? shaderSources.fragment(textureUnits) : shaderSources.fragment;
            var vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
            var fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
            if (!vertexShader || !fragmentShader) {
              throw new Error();
            }
            var program = createProgram(glw, vertexShader, fragmentShader);
            if (!program) {
              throw new Error();
            }
            this.program = program;
            if (webGl2) {
              var vao = glw.createVertexArray();
              if (!vao) {
                throw new Error();
              }
              this.vao = vao;
              glw.bindVertexArray(this.vao);
            }
            this.attributeLocations = {};
            this.attributeBuffers = {};
            this.attributeNames = [];
            [...options.attributes].forEach(attributeName => {
              var location = glw.getAttribLocation(this.program, attributeName);
              if (location < 0) {
                throw new Error(`${this.constructor.name}: Vertex shader must have an attribute "${attributeName}"!`);
              }
              var buffer = glw.createBuffer();
              if (!buffer) {
                throw new Error(`${this.constructor.name}: Could not create buffer for attribute "${attributeName}"`);
              }
              this.attributeLocations[attributeName] = location;
              this.attributeBuffers[attributeName] = buffer;
              this.attributeNames.push(attributeName);
            });
            this.uniformLocations = {};
            this.uniformTypes = {};
            options.uniforms.forEach(uniform => {
              var location = glw.getUniformLocation(this.program, uniform.name);
              this.uniformTypes[uniform.name] = uniform.uniform;
              if (!location) {
                console.warn(`Shader "${this.constructor.name}" could not get uniform location for "${uniform.name}"`);
                return;
              }
              this.uniformLocations[uniform.name] = location;
            });
          }
          bindBufferAttribute(location, buffer, attribute) {
            var glw = this.glw;
            glw.enableVertexAttribArray(location);
            glw.vertexAttribPointer(buffer, location, attribute.size, attribute.type, attribute.normalized, attribute.stride, attribute.offset);
          }
          disableAttribute(location) {
            this.glw.disableVertexAttribArray(location);
          }
          disableAttributes() {
            for (var loc in this.attributeLocations) {
              this.disableAttribute(this.attributeLocations[loc]);
            }
            this.boundBufferCollection = null;
          }
          /**
           * Given two sets of Shader props destined for this Shader, determine if they can be batched together
           * to reduce the number of draw calls.
           *
           * @remarks
           * This is used by the {@link WebGlCoreRenderer} to determine if it can batch multiple consecutive draw
           * calls into a single draw call.
           *
           * By default, this returns false (meaning no batching is allowed), but can be
           * overridden by child classes to provide more efficient batching.
           *
           * @param propsA
           * @param propsB
           * @returns
           */
          canBatchShaderProps(propsA, propsB) {
            return false;
          }
          bindRenderOp(renderOp, props) {
            this.bindBufferCollection(renderOp.buffers);
            if (renderOp.textures.length > 0) {
              this.bindTextures(renderOp.textures);
            }
            var glw = renderOp.glw,
              parentHasRenderTexture = renderOp.parentHasRenderTexture,
              renderToTexture = renderOp.renderToTexture;
            // Skip if the parent and current operation both have render textures
            if (renderToTexture && parentHasRenderTexture) {
              return;
            }
            // Bind render texture framebuffer dimensions as resolution
            // if the parent has a render texture
            if (parentHasRenderTexture) {
              var _ref = renderOp.framebufferDimensions || {},
                width = _ref.width,
                height = _ref.height;
              // Force pixel ratio to 1.0 for render textures since they are always 1:1
              // the final render texture will be rendered to the screen with the correct pixel ratio
              this.setUniform('u_pixelRatio', 1.0);
              // Set resolution to the framebuffer dimensions
              this.setUniform('u_resolution', new Float32Array([width !== null && width !== void 0 ? width : 0, height !== null && height !== void 0 ? height : 0]));
            } else {
              this.setUniform('u_pixelRatio', renderOp.options.pixelRatio);
              this.setUniform('u_resolution', new Float32Array([glw.canvas.width, glw.canvas.height]));
            }
            if (props) {
              // Bind optional automatic uniforms
              // These are only bound if their keys are present in the props.
              if (hasOwn(props, '$dimensions')) {
                var dimensions = props.$dimensions;
                if (!dimensions) {
                  dimensions = renderOp.dimensions;
                }
                this.setUniform('u_dimensions', [dimensions.width, dimensions.height]);
              }
              if (hasOwn(props, '$alpha')) {
                var alpha = props.$alpha;
                if (!alpha) {
                  alpha = renderOp.alpha;
                }
                this.setUniform('u_alpha', alpha);
              }
              this.bindProps(props);
            }
          }
          setUniform(name, ...value) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-argument
            this.glw.setUniform(this.uniformTypes[name], this.uniformLocations[name], ...value);
          }
          bindBufferCollection(buffer) {
            if (this.boundBufferCollection === buffer) {
              return;
            }
            for (var attributeName in this.attributeLocations) {
              var resolvedBuffer = buffer.getBuffer(attributeName);
              var resolvedInfo = buffer.getAttributeInfo(attributeName);
              assertTruthy(resolvedBuffer, `Buffer for "${attributeName}" not found`);
              assertTruthy(resolvedInfo);
              this.bindBufferAttribute(this.attributeLocations[attributeName], resolvedBuffer, resolvedInfo);
            }
            this.boundBufferCollection = buffer;
          }
          bindProps(props) {
            // Implement in child class
          }
          bindTextures(textures) {
            // no defaults
          }
          attach() {
            this.glw.useProgram(this.program);
            this.glw.useProgram(this.program);
            if (this.glw.isWebGl2() && this.vao) {
              this.glw.bindVertexArray(this.vao);
            }
          }
          detach() {
            this.disableAttributes();
          }
        }
        _defineProperty(WebGlCoreShader, "shaderSources", void 0);
        exports("W", WebGlCoreShader);

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
         * Represents a source of texture data for a CoreContextTexture.
         *
         * @remarks
         * Texture sources are used to populate a CoreContextTexture when that texture
         * is loaded. Texture data retrieved by the CoreContextTexture by the
         * `getTextureData` method. It's the responsibility of the concerete `Texture`
         * subclass to implement this method appropriately.
         */
        class Texture extends EventEmitter {
          constructor(txManager) {
            super();
            _defineProperty(this, "txManager", void 0);
            /**
             * The dimensions of the texture
             *
             * @remarks
             * Until the texture data is loaded for the first time the value will be
             * `null`.
             */
            _defineProperty(this, "dimensions", null);
            _defineProperty(this, "error", null);
            _defineProperty(this, "state", 'freed');
            _defineProperty(this, "renderableOwners", new Set());
            this.txManager = txManager;
          }
          /**
           * Add/remove an owner to/from the Texture based on its renderability.
           *
           * @remarks
           * Any object can own a texture, be it a CoreNode or even the state object
           * from a Text Renderer.
           *
           * When the reference to the texture that an owner object holds is replaced
           * or cleared it must call this with `renderable=false` to release the owner
           * association.
           *
           * @param owner
           * @param renderable
           */
          setRenderableOwner(owner, renderable) {
            if (renderable) {
              this.renderableOwners.add(owner);
            } else {
              this.renderableOwners.delete(owner);
            }
          }
          /**
           * Returns true if the texture is assigned to any Nodes that are renderable.
           */
          get renderable() {
            return this.renderableOwners.size > 0;
          }
          /**
           * Set the state of the texture
           *
           * @remark
           * Intended for internal-use only but declared public so that it can be set
           * by it's associated {@link CoreContextTexture}
           *
           * @param state
           * @param args
           */
          setState(state, ...args) {
            if (this.state !== state) {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
              this.state = state;
              if (state === 'loaded') {
                var loadedArgs = args;
                this.dimensions = loadedArgs[0];
              } else if (state === 'failed') {
                var failedArgs = args;
                this.error = failedArgs[0];
              }
              this.emit(state, ...args);
            }
          }
          /**
           * Make a cache key for this texture.
           *
           * @remarks
           * Each concrete `Texture` subclass must implement this method to provide an
           * appropriate cache key for the texture type including the texture's
           * properties that uniquely identify a copy of the texture. If the texture
           * type does not support caching, then this method should return `false`.
           *
           * @param props
           * @returns
           * A cache key for this texture or `false` if the texture type does not
           * support caching.
           */
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          static makeCacheKey(props) {
            return false;
          }
          /**
           * Resolve the default values for the texture's properties.
           *
           * @remarks
           * Each concrete `Texture` subclass must implement this method to provide
           * default values for the texture's optional properties.
           *
           * @param props
           * @returns
           * The default values for the texture's properties.
           */
          static resolveDefaults(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          props) {
            return {};
          }
        }
        exports("j", Texture);

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
        var getNormalizedRgbaComponents = exports("b", rgba => {
          var r = rgba >>> 24;
          var g = rgba >>> 16 & 0xff;
          var b = rgba >>> 8 & 0xff;
          var a = rgba & 0xff;
          return [r / 255, g / 255, b / 255, a / 255];
        });
        function getNormalizedAlphaComponent(rgba) {
          return (rgba & 0xff) / 255.0;
        }
        /**
         * Get a CSS color string from a RGBA color
         *
         * @param color
         * @returns
         */
        function getRgbaString(color) {
          var r = Math.floor(color[0] * 255.0);
          var g = Math.floor(color[1] * 255.0);
          var b = Math.floor(color[2] * 255.0);
          var a = Math.floor(color[3] * 255.0);
          return `rgba(${r},${g},${b},${a.toFixed(4)})`;
        }
        function createBound(x1, y1, x2, y2, out) {
          if (out) {
            out.x1 = x1;
            out.y1 = y1;
            out.x2 = x2;
            out.y2 = y2;
            return out;
          }
          return {
            x1,
            y1,
            x2,
            y2
          };
        }
        function intersectBound(a, b, out) {
          var intersection = createBound(Math.max(a.x1, b.x1), Math.max(a.y1, b.y1), Math.min(a.x2, b.x2), Math.min(a.y2, b.y2), out);
          if (intersection.x1 < intersection.x2 && intersection.y1 < intersection.y2) {
            return intersection;
          }
          return createBound(0, 0, 0, 0, intersection);
        }
        function boundsOverlap(a, b) {
          return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
        }
        function convertBoundToRect(bound, out) {
          if (out) {
            out.x = bound.x1;
            out.y = bound.y1;
            out.width = bound.x2 - bound.x1;
            out.height = bound.y2 - bound.y1;
            return out;
          }
          return {
            x: bound.x1,
            y: bound.y1,
            width: bound.x2 - bound.x1,
            height: bound.y2 - bound.y1
          };
        }
        function intersectRect(a, b, out) {
          var x = Math.max(a.x, b.x);
          var y = Math.max(a.y, b.y);
          var width = Math.min(a.x + a.width, b.x + b.width) - x;
          var height = Math.min(a.y + a.height, b.y + b.height) - y;
          if (width > 0 && height > 0) {
            if (out) {
              out.x = x;
              out.y = y;
              out.width = width;
              out.height = height;
              return out;
            }
            return {
              x,
              y,
              width,
              height
            };
          }
          if (out) {
            out.x = 0;
            out.y = 0;
            out.width = 0;
            out.height = 0;
            return out;
          }
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        function copyRect(a, out) {
          if (out) {
            out.x = a.x;
            out.y = a.y;
            out.width = a.width;
            out.height = a.height;
            return out;
          }
          return {
            x: a.x,
            y: a.y,
            width: a.width,
            height: a.height
          };
        }
        function compareRect(a, b) {
          if (a === b) {
            return true;
          }
          if (a === null || b === null) {
            return false;
          }
          return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
        }
        function boundInsideBound(bound1, bound2) {
          return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
        }
        function isBoundPositive(bound) {
          return bound.x1 < bound.x2 && bound.y1 < bound.y2;
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
        class TrFontFace extends EventEmitter {
          constructor(fontFamily, descriptors) {
            super();
            _defineProperty(this, "fontFamily", void 0);
            _defineProperty(this, "descriptors", void 0);
            _defineProperty(this, "loaded", false);
            this.fontFamily = fontFamily;
            this.descriptors = _objectSpread({
              style: 'normal',
              weight: 'normal',
              stretch: 'normal'
            }, descriptors);
          }
          /**
           * Convert a TrFontFaceDescriptors to a FontFaceDescriptors which differ slightly
           *
           * @param descriptors
           * @returns
           */
          static convertToCssFontFaceDescriptors(descriptors) {
            return {
              style: descriptors.style,
              weight: typeof descriptors.weight === 'number' ? `${descriptors.weight}` : descriptors.weight,
              stretch: descriptors.stretch,
              unicodeRange: descriptors.unicodeRange,
              variant: descriptors.variant,
              featureSettings: descriptors.featureSettings,
              display: descriptors.display
            };
          }
        }
        exports("T", TrFontFace);

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
        class CoreContextTexture {
          constructor(memManager, textureSource) {
            _defineProperty(this, "memManager", void 0);
            _defineProperty(this, "textureSource", void 0);
            this.memManager = memManager;
            this.textureSource = textureSource;
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
        class CoreRenderer {
          constructor(stage) {
            _defineProperty(this, "stage", void 0);
            this.stage = stage;
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
        class CoreRenderOp {}

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
         * Can render multiple quads with multiple textures (up to vertex shader texture limit)
         *
         */
        class WebGlCoreRenderOp extends CoreRenderOp {
          constructor(glw, options, buffers, shader, shaderProps, alpha, clippingRect, dimensions, bufferIdx, zIndex, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
            super();
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "options", void 0);
            _defineProperty(this, "buffers", void 0);
            _defineProperty(this, "shader", void 0);
            _defineProperty(this, "shaderProps", void 0);
            _defineProperty(this, "alpha", void 0);
            _defineProperty(this, "clippingRect", void 0);
            _defineProperty(this, "dimensions", void 0);
            _defineProperty(this, "bufferIdx", void 0);
            _defineProperty(this, "zIndex", void 0);
            _defineProperty(this, "renderToTexture", void 0);
            _defineProperty(this, "parentHasRenderTexture", void 0);
            _defineProperty(this, "framebufferDimensions", void 0);
            _defineProperty(this, "length", 0);
            _defineProperty(this, "numQuads", 0);
            _defineProperty(this, "textures", []);
            _defineProperty(this, "maxTextures", void 0);
            this.glw = glw;
            this.options = options;
            this.buffers = buffers;
            this.shader = shader;
            this.shaderProps = shaderProps;
            this.alpha = alpha;
            this.clippingRect = clippingRect;
            this.dimensions = dimensions;
            this.bufferIdx = bufferIdx;
            this.zIndex = zIndex;
            this.renderToTexture = renderToTexture;
            this.parentHasRenderTexture = parentHasRenderTexture;
            this.framebufferDimensions = framebufferDimensions;
            this.maxTextures = shader.supportsIndexedTextures ? glw.getParameter(glw.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
          }
          addTexture(texture) {
            var textures = this.textures,
              maxTextures = this.maxTextures;
            var existingIdx = textures.findIndex(t => t === texture);
            if (existingIdx !== -1) {
              return existingIdx;
            }
            var newIdx = textures.length;
            if (newIdx >= maxTextures) {
              return 0xffffffff;
            }
            this.textures.push(texture);
            return newIdx;
          }
          draw() {
            var glw = this.glw,
              shader = this.shader,
              shaderProps = this.shaderProps,
              options = this.options;
            var shManager = options.shManager;
            shManager.useShader(shader);
            shader.bindRenderOp(this, shaderProps);
            // TODO: Reduce calculations required
            var quadIdx = this.bufferIdx / 24 * 6 * 2;
            // Clipping
            if (this.clippingRect.valid) {
              var _this$clippingRect = this.clippingRect,
                x = _this$clippingRect.x,
                y = _this$clippingRect.y,
                width = _this$clippingRect.width,
                height = _this$clippingRect.height;
              var pixelRatio = options.pixelRatio;
              var canvasHeight = options.canvas.height;
              var clipX = Math.round(x * pixelRatio);
              var clipWidth = Math.round(width * pixelRatio);
              var clipHeight = Math.round(height * pixelRatio);
              var clipY = Math.round(canvasHeight - clipHeight - y * pixelRatio);
              glw.setScissorTest(true);
              glw.scissor(clipX, clipY, clipWidth, clipHeight);
            } else {
              glw.setScissorTest(false);
            }
            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
          }
        }
        exports("p", WebGlCoreRenderOp);

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
         * Get device specific webgl parameters
         * @param glw
         */
        function getWebGlParameters(glw) {
          var params = {
            MAX_RENDERBUFFER_SIZE: 0,
            MAX_TEXTURE_SIZE: 0,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            MAX_VIEWPORT_DIMS: 0,
            MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
            MAX_TEXTURE_IMAGE_UNITS: 0,
            MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
            MAX_VERTEX_ATTRIBS: 0,
            MAX_VARYING_VECTORS: 0,
            MAX_VERTEX_UNIFORM_VECTORS: 0,
            MAX_FRAGMENT_UNIFORM_VECTORS: 0
          };
          // Map over all parameters and get them
          var keys = Object.keys(params);
          keys.forEach(key => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            params[key] = glw.getParameter(glw[key]);
          });
          return params;
        }
        /**
         * Get device webgl extensions
         * @param glw
         */
        function getWebGlExtensions(glw) {
          var extensions = {
            ANGLE_instanced_arrays: null,
            WEBGL_compressed_texture_s3tc: null,
            WEBGL_compressed_texture_astc: null,
            WEBGL_compressed_texture_etc: null,
            WEBGL_compressed_texture_etc1: null,
            WEBGL_compressed_texture_pvrtc: null,
            WEBKIT_WEBGL_compressed_texture_pvrtc: null,
            WEBGL_compressed_texture_s3tc_srgb: null,
            OES_vertex_array_object: null
          };
          // Map over all extensions and get them
          var keys = Object.keys(extensions);
          keys.forEach(key => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            extensions[key] = glw.getExtension(key);
          });
          return extensions;
        }
        /**
         * Allocate big memory chunk that we
         * can re-use to draw quads
         *
         * @param glw
         * @param size
         */
        function createIndexBuffer(glw, size) {
          var maxQuads = ~~(size / 80);
          var indices = new Uint16Array(maxQuads * 6);
          for (var i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
            indices[i] = j;
            indices[i + 1] = j + 1;
            indices[i + 2] = j + 2;
            indices[i + 3] = j + 2;
            indices[i + 4] = j + 1;
            indices[i + 5] = j + 3;
          }
          var buffer = glw.createBuffer();
          glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
        }
        /**
         * Checks if an object is of type HTMLImageElement.
         * This is used because we cant check for HTMLImageElement directly when the
         * renderer is running in a seperate web worker context.
         *
         * @param obj
         * @returns
         */
        function isHTMLImageElement(obj) {
          return obj !== null && typeof obj === 'object' && obj.constructor && obj.constructor.name === 'HTMLImageElement';
        }

        /**
         * Memize options object.
         *
         * @typedef MemizeOptions
         *
         * @property {number} [maxSize] Maximum size of the cache.
         */

        /**
         * Internal cache entry.
         *
         * @typedef MemizeCacheNode
         *
         * @property {?MemizeCacheNode|undefined} [prev] Previous node.
         * @property {?MemizeCacheNode|undefined} [next] Next node.
         * @property {Array<*>}                   args   Function arguments for cache
         *                                               entry.
         * @property {*}                          val    Function result.
         */

        /**
         * Properties of the enhanced function for controlling cache.
         *
         * @typedef MemizeMemoizedFunction
         *
         * @property {()=>void} clear Clear the cache.
         */

        /**
         * Accepts a function to be memoized, and returns a new memoized function, with
         * optional options.
         *
         * @template {(...args: any[]) => any} F
         *
         * @param {F}             fn        Function to memoize.
         * @param {MemizeOptions} [options] Options object.
         *
         * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
         */
        function memize(fn, options) {
          var size = 0;

          /** @type {?MemizeCacheNode|undefined} */
          var head;

          /** @type {?MemizeCacheNode|undefined} */
          var tail;
          options = options || {};
          function memoized( /* ...args */
          ) {
            var node = head,
              len = arguments.length,
              args,
              i;
            searchCache: while (node) {
              // Perform a shallow equality test to confirm that whether the node
              // under test is a candidate for the arguments passed. Two arrays
              // are shallowly equal if their length matches and each entry is
              // strictly equal between the two sets. Avoid abstracting to a
              // function which could incur an arguments leaking deoptimization.

              // Check whether node arguments match arguments length
              if (node.args.length !== arguments.length) {
                node = node.next;
                continue;
              }

              // Check whether node arguments match arguments values
              for (i = 0; i < len; i++) {
                if (node.args[i] !== arguments[i]) {
                  node = node.next;
                  continue searchCache;
                }
              }

              // At this point we can assume we've found a match

              // Surface matched node to head if not already
              if (node !== head) {
                // As tail, shift to previous. Must only shift if not also
                // head, since if both head and tail, there is no previous.
                if (node === tail) {
                  tail = node.prev;
                }

                // Adjust siblings to point to each other. If node was tail,
                // this also handles new tail's empty `next` assignment.
                /** @type {MemizeCacheNode} */
                node.prev.next = node.next;
                if (node.next) {
                  node.next.prev = node.prev;
                }
                node.next = head;
                node.prev = null;
                /** @type {MemizeCacheNode} */
                head.prev = node;
                head = node;
              }

              // Return immediately
              return node.val;
            }

            // No cached value found. Continue to insertion phase:

            // Create a copy of arguments (avoid leaking deoptimization)
            args = new Array(len);
            for (i = 0; i < len; i++) {
              args[i] = arguments[i];
            }
            node = {
              args: args,
              // Generate the result from original function
              val: fn.apply(null, args)
            };

            // Don't need to check whether node is already head, since it would
            // have been returned above already if it was

            // Shift existing head down list
            if (head) {
              head.prev = node;
              node.next = head;
            } else {
              // If no head, follows that there's no tail (at initial or reset)
              tail = node;
            }

            // Trim tail if we're reached max size and are pending cache insertion
            if (size === /** @type {MemizeOptions} */options.maxSize) {
              tail = /** @type {MemizeCacheNode} */tail.prev;
              /** @type {MemizeCacheNode} */
              tail.next = null;
            } else {
              size++;
            }
            head = node;
            return node.val;
          }
          memoized.clear = function () {
            head = null;
            tail = null;
            size = 0;
          };

          // Ignore reason: There's not a clear solution to create an intersection of
          // the function with additional properties, where the goal is to retain the
          // function signature of the incoming argument and add control properties
          // on the return value.

          // @ts-ignore
          return memoized;
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
         * Core Utility Functions
         *
         * @module
         */
        var isPowerOfTwo = value => {
          return value && !(value & value - 1);
        };
        var getTimingBezier = (a, b, c, d) => {
          var xc = 3.0 * a;
          var xb = 3.0 * (c - a) - xc;
          var xa = 1.0 - xc - xb;
          var yc = 3.0 * b;
          var yb = 3.0 * (d - b) - yc;
          var ya = 1.0 - yc - yb;
          return function (time) {
            if (time >= 1.0) {
              return 1;
            }
            if (time <= 0) {
              return 0;
            }
            var t = 0.5,
              cbx,
              cbxd,
              dx;
            for (var it = 0; it < 20; it++) {
              cbx = t * (t * (t * xa + xb) + xc);
              dx = time - cbx;
              if (dx > -1e-8 && dx < 1e-8) {
                return t * (t * (t * ya + yb) + yc);
              }
              // Cubic bezier derivative.
              cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
              if (cbxd > 1e-10 && cbxd < 1e-10) {
                // Problematic. Fall back to binary search method.
                break;
              }
              t += dx / cbxd;
            }
            // Fallback: binary search method. This is more reliable when there are near-0 slopes.
            var minT = 0;
            var maxT = 1;
            for (var _it = 0; _it < 20; _it++) {
              t = 0.5 * (minT + maxT);
              cbx = t * (t * (t * xa + xb) + xc);
              dx = time - cbx;
              if (dx > -1e-8 && dx < 1e-8) {
                // Solution found!
                return t * (t * (t * ya + yb) + yc);
              }
              if (dx < 0) {
                maxT = t;
              } else {
                minT = t;
              }
            }
          };
        };
        var getTimingFunction = exports("r", memize(str => {
          switch (str) {
            case 'linear':
              return function (time) {
                return time;
              };
            case 'ease':
              return getTimingBezier(0.25, 0.1, 0.25, 1.0);
            case 'ease-in':
              return getTimingBezier(0.42, 0, 1.0, 1.0);
            case 'ease-out':
              return getTimingBezier(0, 0, 0.58, 1.0);
            case 'ease-in-out':
              return getTimingBezier(0.42, 0, 0.58, 1.0);
            case 'ease-in-sine':
              return getTimingBezier(0.12, 0, 0.39, 0);
            case 'ease-out-sine':
              return getTimingBezier(0.12, 0, 0.39, 0);
            case 'ease-in-out-sine':
              return getTimingBezier(0.37, 0, 0.63, 1);
            case 'ease-in-cubic':
              return getTimingBezier(0.32, 0, 0.67, 0);
            case 'ease-out-cubic':
              return getTimingBezier(0.33, 1, 0.68, 1);
            case 'ease-in-out-cubic':
              return getTimingBezier(0.65, 0, 0.35, 1);
            case 'ease-in-circ':
              return getTimingBezier(0.55, 0, 1, 0.45);
            case 'ease-out-circ':
              return getTimingBezier(0, 0.55, 0.45, 1);
            case 'ease-in-out-circ':
              return getTimingBezier(0.85, 0, 0.15, 1);
            case 'ease-in-back':
              return getTimingBezier(0.36, 0, 0.66, -0.56);
            case 'ease-out-back':
              return getTimingBezier(0.34, 1.56, 0.64, 1);
            case 'ease-in-out-back':
              return getTimingBezier(0.68, -0.6, 0.32, 1.6);
            case 'step-start':
              return function () {
                return 1;
              };
            case 'step-end':
              return function (time) {
                return time === 1 ? 1 : 0;
              };
            default:
              // eslint-disable-next-line no-case-declarations
              var s = 'cubic-bezier(';
              if (str && str.indexOf(s) === 0) {
                var parts = str.substr(s.length, str.length - s.length - 1).split(',');
                if (parts.length !== 4) {
                  console.warn('Unknown timing function: ' + str);
                  // Fallback: use linear.
                  return function (time) {
                    return time;
                  };
                }
                var a = parseFloat(parts[0] || '0.42');
                var b = parseFloat(parts[1] || '0');
                var c = parseFloat(parts[2] || '1');
                var d = parseFloat(parts[3] || '1');
                if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
                  console.warn(' Unknown timing function: ' + str);
                  // Fallback: use linear.
                  return function (time) {
                    return time;
                  };
                }
                return getTimingBezier(a, b, c, d);
              } else {
                console.warn('Unknown timing function: ' + str);
                // Fallback: use linear.
                return function (time) {
                  return time;
                };
              }
          }
        }));
        if (!Math.hypot) Math.hypot = (...args) => {
          var y = 0,
            i = args.length;
          while (i--) {
            y += args[i] * args[i];
          }
          return Math.sqrt(y);
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
        var TRANSPARENT_TEXTURE_DATA = new Uint8Array([0, 0, 0, 0]);
        /**
         * A wrapper around a WebGLTexture that handles loading the texture data
         * from a Texture source and uploading it to the GPU as well as freeing
         * the uploaded texture.
         *
         * @remarks
         * When accessing the ctxTexture property, the texture will be loaded if
         * it hasn't been already. ctxTexture will always return a valid WebGLTexture
         * and trigger the loading/uploading of the texture's data if it hasn't been
         * loaded yet.
         */
        class WebGlCoreCtxTexture extends CoreContextTexture {
          constructor(glw, memManager, textureSource) {
            super(memManager, textureSource);
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "_nativeCtxTexture", null);
            _defineProperty(this, "_state", 'freed');
            _defineProperty(this, "_w", 0);
            _defineProperty(this, "_h", 0);
            this.glw = glw;
          }
          get ctxTexture() {
            if (this._state === 'freed') {
              this.load();
            }
            assertTruthy(this._nativeCtxTexture);
            return this._nativeCtxTexture;
          }
          get renderable() {
            return this.textureSource.renderable;
          }
          get w() {
            return this._w;
          }
          get h() {
            return this._h;
          }
          /**
           * Load the texture data from the Texture source and upload it to the GPU
           *
           * @remarks
           * This method is called automatically when accessing the ctxTexture property
           * if the texture hasn't been loaded yet. But it can also be called manually
           * to force the texture to be pre-loaded prior to accessing the ctxTexture
           * property.
           */
          load() {
            // If the texture is already loading or loaded, don't load it again.
            if (this._state === 'loading' || this._state === 'loaded') {
              return;
            }
            this._state = 'loading';
            this.textureSource.setState('loading');
            this._nativeCtxTexture = this.createNativeCtxTexture();
            this.onLoadRequest().then(({
              width,
              height
            }) => {
              if (this._state === 'freed') {
                return;
              }
              this._state = 'loaded';
              this._w = width;
              this._h = height;
              // Update the texture source's width and height so that it can be used
              // for rendering.
              this.textureSource.setState('loaded', {
                width,
                height
              });
            }).catch(err => {
              this._state = 'failed';
              this.textureSource.setState('failed', err);
              console.error(err);
            });
          }
          /**
           * Called when the texture data needs to be loaded and uploaded to a texture
           */
          onLoadRequest() {
            var _this = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this$textureSource;
              var glw, memManager, textureData, width, height, data, _mipmaps$, _textureData$data, mipmaps, _textureData$data$wid, _width, _textureData$data$hei, _height, type, glInternalFormat, view;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    glw = _this.glw, memManager = _this.memManager; // Set to a 1x1 transparent texture
                    glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                    memManager.setTextureMemUse(_this, TRANSPARENT_TEXTURE_DATA.byteLength);
                    _context.next = 5;
                    return (_this$textureSource = _this.textureSource) === null || _this$textureSource === void 0 ? void 0 : _this$textureSource.getTextureData();
                  case 5:
                    textureData = _context.sent;
                    if (_this._nativeCtxTexture) {
                      _context.next = 9;
                      break;
                    }
                    assertTruthy(_this._state === 'freed');
                    return _context.abrupt("return", {
                      width: 0,
                      height: 0
                    });
                  case 9:
                    width = 0;
                    height = 0;
                    assertTruthy(_this._nativeCtxTexture);
                    glw.activeTexture(0);
                    // If textureData is null, the texture is empty (0, 0) and we don't need to
                    // upload any data to the GPU.
                    if (textureData.data instanceof ImageBitmap || textureData.data instanceof ImageData ||
                    // not using typeof HTMLImageElement due to web worker
                    isHTMLImageElement(textureData.data)) {
                      data = textureData.data;
                      width = data.width;
                      height = data.height;
                      glw.bindTexture(_this._nativeCtxTexture);
                      glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                      glw.texImage2D(0, glw.RGBA, glw.RGBA, glw.UNSIGNED_BYTE, data);
                      memManager.setTextureMemUse(_this, width * height * 4);
                      // generate mipmaps for power-of-2 textures or in WebGL2RenderingContext
                      if (glw.isWebGl2() || isPowerOfTwo(width) && isPowerOfTwo(height)) {
                        glw.generateMipmap();
                      }
                    } else if (textureData.data === null) {
                      width = 0;
                      height = 0;
                      // Reset to a 1x1 transparent texture
                      glw.bindTexture(_this._nativeCtxTexture);
                      glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
                      memManager.setTextureMemUse(_this, TRANSPARENT_TEXTURE_DATA.byteLength);
                    } else if ('mipmaps' in textureData.data && textureData.data.mipmaps) {
                      _textureData$data = textureData.data, mipmaps = _textureData$data.mipmaps, _textureData$data$wid = _textureData$data.width, _width = _textureData$data$wid === void 0 ? 0 : _textureData$data$wid, _textureData$data$hei = _textureData$data.height, _height = _textureData$data$hei === void 0 ? 0 : _textureData$data$hei, type = _textureData$data.type, glInternalFormat = _textureData$data.glInternalFormat;
                      view = type === 'ktx' ? new DataView((_mipmaps$ = mipmaps[0]) !== null && _mipmaps$ !== void 0 ? _mipmaps$ : new ArrayBuffer(0)) : mipmaps[0];
                      glw.bindTexture(_this._nativeCtxTexture);
                      glw.compressedTexImage2D(0, glInternalFormat, _width, _height, 0, view);
                      glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                      glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                      glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                      glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                      memManager.setTextureMemUse(_this, view.byteLength);
                    } else {
                      console.error(`WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned`, textureData);
                    }
                    return _context.abrupt("return", {
                      width,
                      height
                    });
                  case 15:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
          /**
           * Free the WebGLTexture from the GPU
           *
           * @returns
           */
          free() {
            if (this._state === 'freed') {
              return;
            }
            this._state = 'freed';
            this.textureSource.setState('freed');
            this._w = 0;
            this._h = 0;
            if (!this._nativeCtxTexture) {
              return;
            }
            var glw = this.glw,
              memManager = this.memManager;
            glw.deleteTexture(this._nativeCtxTexture);
            memManager.setTextureMemUse(this, 0);
            this._nativeCtxTexture = null;
          }
          /**
           * Create native context texture
           *
           * @remarks
           * When this method returns the returned texture will be bound to the GL context state.
           *
           * @param width
           * @param height
           * @returns
           */
          createNativeCtxTexture() {
            var glw = this.glw;
            var nativeTexture = glw.createTexture();
            if (!nativeTexture) {
              throw new Error('Could not create WebGL Texture');
            }
            // On initial load request, create a 1x1 transparent texture to use until
            // the texture data is finally loaded.
            glw.activeTexture(0);
            glw.bindTexture(nativeTexture);
            // linear texture filtering
            glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
            glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
            // texture wrapping method
            glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
            glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
            return nativeTexture;
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
         * Texture consisting of only a 1x1 color pixel
         *
         * @remarks
         * The pixel color is set with the {@link ColorTextureProps.color} prop.
         *
         * This is the default texture used for a Node if it's
         * {@link INodeWritableProps.texture} prop is set to `null` (the default)
         *
         * Generally the 1x1 color pixel is stretched to whatever the set dimensions of
         * a Node are.
         */
        class ColorTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            this.props = ColorTexture.resolveDefaults(props || {});
          }
          get color() {
            return this.props.color;
          }
          set color(color) {
            this.props.color = color;
          }
          getTextureData() {
            var _this2 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var pixelData32, pixelData8;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    pixelData32 = new Uint32Array([_this2.color]);
                    pixelData8 = new Uint8ClampedArray(pixelData32.buffer);
                    return _context2.abrupt("return", {
                      data: new ImageData(pixelData8, 1, 1),
                      premultiplyAlpha: true
                    });
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))();
          }
          static makeCacheKey(props) {
            var resolvedProps = ColorTexture.resolveDefaults(props);
            return `ColorTexture,${resolvedProps.color}`;
          }
          static resolveDefaults(props) {
            return {
              color: props.color || 0xffffffff
            };
          }
        }
        _defineProperty(ColorTexture, "z$__type__Props", void 0);
        exports("u", ColorTexture);

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
         * A Texture that is a sub-region of another Texture.
         *
         * @remarks
         * The parent texture can be a Sprite Sheet/Texture Atlas and set using the
         * {@link SubTextureProps.texture} prop. The sub-region relative to the parent
         * texture is defined with the {@link SubTextureProps.x},
         * {@link SubTextureProps.y}, {@link SubTextureProps.width}, and
         * {@link SubTextureProps.height} pixel values.
         */
        class SubTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "parentTexture", void 0);
            _defineProperty(this, "onParentTxLoaded", () => {
              // We ignore the parent's passed dimensions, and simply use the SubTexture's
              // configured dimensions (because that's all that matters here)
              this.setState('loaded', {
                width: this.props.width,
                height: this.props.height
              });
            });
            _defineProperty(this, "onParentTxFailed", (target, error) => {
              this.setState('failed', error);
            });
            this.parentTexture = this.txManager.loadTexture(props.texture.txType, props.texture.props, props.texture.options);
            this.props = SubTexture.resolveDefaults(props || {});
            // If parent texture is already loaded / failed, trigger loaded event manually
            // so that users get a consistent event experience.
            // We do this in a microtask to allow listeners to be attached in the same
            // synchronous task after calling loadTexture()
            queueMicrotask(() => {
              var parentTx = this.parentTexture;
              if (parentTx.state === 'loaded') {
                this.onParentTxLoaded(parentTx, parentTx.dimensions);
              } else if (parentTx.state === 'failed') {
                this.onParentTxFailed(parentTx, parentTx.error);
              }
              parentTx.on('loaded', this.onParentTxLoaded);
              parentTx.on('failed', this.onParentTxFailed);
            });
          }
          getTextureData() {
            var _this3 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", {
                      data: _this3.props
                    });
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }))();
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          static makeCacheKey(props) {
            return false;
          }
          static resolveDefaults(props) {
            return {
              texture: props.texture,
              x: props.x || 0,
              y: props.y || 0,
              width: props.width || 0,
              height: props.height || 0
            };
          }
        }
        _defineProperty(SubTexture, "z$__type__Props", void 0);
        exports("v", SubTexture);

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
        class WebGlCoreCtxSubTexture extends WebGlCoreCtxTexture {
          constructor(glw, memManager, textureSource) {
            super(glw, memManager, textureSource);
          }
          onLoadRequest() {
            var _this4 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _props$data, _props$data2;
              var props;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this4.textureSource.getTextureData();
                  case 2:
                    props = _context4.sent;
                    return _context4.abrupt("return", {
                      width: ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.width) || 0,
                      height: ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.height) || 0
                    });
                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }))();
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
         * Represents a collection of WebGL Buffers along with their associated
         * vertex attribute formats.
         */
        class BufferCollection {
          constructor(config) {
            _defineProperty(this, "config", void 0);
            this.config = config;
          }
          /**
           * Get the WebGLBuffer associated with the given attribute name if it exists.
           *
           * @param attributeName
           * @returns
           */
          getBuffer(attributeName) {
            var _this$config$find;
            return (_this$config$find = this.config.find(item => item.attributes[attributeName])) === null || _this$config$find === void 0 ? void 0 : _this$config$find.buffer;
          }
          /**
           * Get the AttributeInfo associated with the given attribute name if it exists.
           *
           * @param attributeName
           * @returns
           */
          getAttributeInfo(attributeName) {
            var _this$config$find2;
            return (_this$config$find2 = this.config.find(item => item.attributes[attributeName])) === null || _this$config$find2 === void 0 ? void 0 : _this$config$find2.attributes[attributeName];
          }
        }
        exports("B", BufferCollection);

        /* eslint-disable @typescript-eslint/no-unsafe-return */
        /* eslint-disable @typescript-eslint/no-explicit-any */
        /* eslint-disable @typescript-eslint/no-unsafe-argument */
        /**
         * Optimized WebGL Context Wrapper
         *
         * @remarks
         * This class contains the subset of the WebGLRenderingContext & WebGL2RenderingContext
         * API that is used by the renderer. Select high volume WebGL methods include
         * caching optimizations to avoid making WebGL calls if the state is already set
         * to the desired value.
         *
         * While most methods contained are direct passthroughs to the WebGL context,
         * some methods combine multiple WebGL calls into one for convenience, modify
         * arguments to be more convenient, or are replaced by more specific methods.
         *
         * Not all methods are optimized. Only methods that are called frequently
         * and/or have a high cost are optimized.
         *
         * A subset of GLenum constants are also exposed as properties on this class
         * for convenience.
         */
        class WebGlContextWrapper {
          //#endregion WebGL Enums
          constructor(gl) {
            _defineProperty(this, "gl", void 0);
            //#region Cached WebGL State
            _defineProperty(this, "activeTextureUnit", 0);
            _defineProperty(this, "texture2dUnits", void 0);
            _defineProperty(this, "texture2dParams", new WeakMap());
            _defineProperty(this, "scissorEnabled", void 0);
            _defineProperty(this, "scissorX", void 0);
            _defineProperty(this, "scissorY", void 0);
            _defineProperty(this, "scissorWidth", void 0);
            _defineProperty(this, "scissorHeight", void 0);
            _defineProperty(this, "blendEnabled", void 0);
            _defineProperty(this, "blendSrcRgb", void 0);
            _defineProperty(this, "blendDstRgb", void 0);
            _defineProperty(this, "blendSrcAlpha", void 0);
            _defineProperty(this, "blendDstAlpha", void 0);
            _defineProperty(this, "boundArrayBuffer", void 0);
            _defineProperty(this, "boundElementArrayBuffer", void 0);
            _defineProperty(this, "curProgram", void 0);
            _defineProperty(this, "programUniforms", new WeakMap());
            //#endregion Cached WebGL State
            //#region Canvas
            _defineProperty(this, "canvas", void 0);
            //#endregion Canvas
            //#region WebGL Enums
            _defineProperty(this, "MAX_RENDERBUFFER_SIZE", void 0);
            _defineProperty(this, "MAX_TEXTURE_SIZE", void 0);
            _defineProperty(this, "MAX_VIEWPORT_DIMS", void 0);
            _defineProperty(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_VERTEX_ATTRIBS", void 0);
            _defineProperty(this, "MAX_VARYING_VECTORS", void 0);
            _defineProperty(this, "MAX_VERTEX_UNIFORM_VECTORS", void 0);
            _defineProperty(this, "MAX_FRAGMENT_UNIFORM_VECTORS", void 0);
            _defineProperty(this, "TEXTURE_MAG_FILTER", void 0);
            _defineProperty(this, "TEXTURE_MIN_FILTER", void 0);
            _defineProperty(this, "TEXTURE_WRAP_S", void 0);
            _defineProperty(this, "TEXTURE_WRAP_T", void 0);
            _defineProperty(this, "LINEAR", void 0);
            _defineProperty(this, "CLAMP_TO_EDGE", void 0);
            _defineProperty(this, "RGBA", void 0);
            _defineProperty(this, "UNSIGNED_BYTE", void 0);
            _defineProperty(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", void 0);
            _defineProperty(this, "UNPACK_FLIP_Y_WEBGL", void 0);
            _defineProperty(this, "FLOAT", void 0);
            _defineProperty(this, "TRIANGLES", void 0);
            _defineProperty(this, "UNSIGNED_SHORT", void 0);
            _defineProperty(this, "ONE", void 0);
            _defineProperty(this, "ONE_MINUS_SRC_ALPHA", void 0);
            _defineProperty(this, "VERTEX_SHADER", void 0);
            _defineProperty(this, "FRAGMENT_SHADER", void 0);
            _defineProperty(this, "STATIC_DRAW", void 0);
            _defineProperty(this, "COMPILE_STATUS", void 0);
            _defineProperty(this, "LINK_STATUS", void 0);
            _defineProperty(this, "DYNAMIC_DRAW", void 0);
            _defineProperty(this, "COLOR_ATTACHMENT0", void 0);
            this.gl = gl;
            // The following code extracts the current state of the WebGL context
            // to our local JavaScript cached version of it. This is so we can
            // avoid making WebGL calls if we don't need to.
            // We could assume that the WebGL context is in a default state, but
            // in the future we may want to support restoring a broken WebGL context
            // and this will help with that.
            this.activeTextureUnit = gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0;
            var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            // save current texture units
            this.texture2dUnits = new Array(maxTextureUnits).fill(undefined).map((_, i) => {
              this.activeTexture(i);
              return gl.getParameter(gl.TEXTURE_BINDING_2D);
            });
            // restore active texture unit
            this.activeTexture(this.activeTextureUnit);
            this.scissorEnabled = gl.isEnabled(gl.SCISSOR_TEST);
            var scissorBox = gl.getParameter(gl.SCISSOR_BOX);
            this.scissorX = scissorBox[0];
            this.scissorY = scissorBox[1];
            this.scissorWidth = scissorBox[2];
            this.scissorHeight = scissorBox[3];
            this.blendEnabled = gl.isEnabled(gl.BLEND);
            this.blendSrcRgb = gl.getParameter(gl.BLEND_SRC_RGB);
            this.blendDstRgb = gl.getParameter(gl.BLEND_DST_RGB);
            this.blendSrcAlpha = gl.getParameter(gl.BLEND_SRC_ALPHA);
            this.blendDstAlpha = gl.getParameter(gl.BLEND_DST_ALPHA);
            this.boundArrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
            this.boundElementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
            this.curProgram = gl.getParameter(gl.CURRENT_PROGRAM);
            this.canvas = gl.canvas;
            // Extract GLenums
            this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
            this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
            this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
            this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
            this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
            this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
            this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
            this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
            this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
            this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
            this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
            this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
            this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
            this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
            this.LINEAR = gl.LINEAR;
            this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
            this.RGBA = gl.RGBA;
            this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
            this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
            this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
            this.FLOAT = gl.FLOAT;
            this.TRIANGLES = gl.TRIANGLES;
            this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
            this.ONE = gl.ONE;
            this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
            this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
            this.TRIANGLES = gl.TRIANGLES;
            this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
            this.VERTEX_SHADER = gl.VERTEX_SHADER;
            this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
            this.STATIC_DRAW = gl.STATIC_DRAW;
            this.COMPILE_STATUS = gl.COMPILE_STATUS;
            this.LINK_STATUS = gl.LINK_STATUS;
            this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
            this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
          }
          /**
           * Returns true if the WebGL context is WebGL2
           *
           * @returns
           */
          isWebGl2() {
            return isWebGl2(this.gl);
          }
          /**
           * ```
           * gl.activeTexture(textureUnit + gl.TEXTURE0);
           * ```
           *
           * @remarks
           * **WebGL Difference**: `textureUnit` is based from 0, not `gl.TEXTURE0`.
           *
           * @param textureUnit
           */
          activeTexture(textureUnit) {
            var gl = this.gl;
            if (this.activeTextureUnit !== textureUnit) {
              gl.activeTexture(textureUnit + gl.TEXTURE0);
              this.activeTextureUnit = textureUnit;
            }
          }
          /**
           * ```
           * gl.bindTexture(gl.TEXTURE_2D, texture);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           *
           * @param texture
           */
          bindTexture(texture) {
            var gl = this.gl,
              activeTextureUnit = this.activeTextureUnit,
              texture2dUnits = this.texture2dUnits;
            if (texture2dUnits[activeTextureUnit] === texture) {
              return;
            }
            texture2dUnits[activeTextureUnit] = texture;
            gl.bindTexture(this.gl.TEXTURE_2D, texture);
          }
          _getActiveTexture() {
            var activeTextureUnit = this.activeTextureUnit,
              texture2dUnits = this.texture2dUnits;
            return texture2dUnits[activeTextureUnit];
          }
          /**
           * ```
           * gl.texParameteri(gl.TEXTURE_2D, pname, param);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           *
           * @param pname
           * @param param
           * @returns
           */
          texParameteri(pname, param) {
            var gl = this.gl,
              texture2dParams = this.texture2dParams;
            var activeTexture = this._getActiveTexture();
            if (!activeTexture) {
              throw new Error('No active texture');
            }
            var textureParams = texture2dParams.get(activeTexture);
            if (!textureParams) {
              textureParams = {};
              texture2dParams.set(activeTexture, textureParams);
            }
            if (textureParams[pname] === param) {
              return;
            }
            textureParams[pname] = param;
            gl.texParameteri(gl.TEXTURE_2D, pname, param);
          }
          texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
            var gl = this.gl;
            if (format) {
              gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels);
            } else {
              gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
            }
          }
          /**
           * ```
           * gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, data);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           */
          compressedTexImage2D(level, internalformat, width, height, border, data) {
            var gl = this.gl;
            gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalformat, width, height, border, data);
          }
          /**
           * ```
           * gl.pixelStorei(pname, param);
           * ```
           *
           * @param pname
           * @param param
           */
          pixelStorei(pname, param) {
            var gl = this.gl;
            gl.pixelStorei(pname, param);
          }
          /**
           * ```
           * gl.generateMipmap(gl.TEXTURE_2D);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           */
          generateMipmap() {
            var gl = this.gl;
            gl.generateMipmap(gl.TEXTURE_2D);
          }
          /**
           * ```
           * gl.createTexture();
           * ```
           *
           * @returns
           */
          createTexture() {
            var gl = this.gl;
            return gl.createTexture();
          }
          /**
           * ```
           * gl.deleteTexture(texture);
           * ```
           *
           * @param texture
           */
          deleteTexture(texture) {
            var gl = this.gl;
            if (texture) {
              this.texture2dParams.delete(texture);
            }
            gl.deleteTexture(texture);
          }
          /**
           * ```
           * gl.viewport(x, y, width, height);
           * ```
           */
          viewport(x, y, width, height) {
            var gl = this.gl;
            gl.viewport(x, y, width, height);
          }
          /**
           * ```
           * gl.clearColor(red, green, blue, alpha);
           * ```
           *
           * @param red
           * @param green
           * @param blue
           * @param alpha
           */
          clearColor(red, green, blue, alpha) {
            var gl = this.gl;
            gl.clearColor(red, green, blue, alpha);
          }
          /**
           * ```
           * gl["enable"|"disable"](gl.SCISSOR_TEST);
           * ```
           * @param enable
           */
          setScissorTest(enable) {
            var gl = this.gl,
              scissorEnabled = this.scissorEnabled;
            if (enable === scissorEnabled) {
              return;
            }
            if (enable) {
              gl.enable(gl.SCISSOR_TEST);
            } else {
              gl.disable(gl.SCISSOR_TEST);
            }
            this.scissorEnabled = enable;
          }
          /**
           * ```
           * gl.scissor(x, y, width, height);
           * ```
           *
           * @param x
           * @param y
           * @param width
           * @param height
           */
          scissor(x, y, width, height) {
            var gl = this.gl,
              scissorX = this.scissorX,
              scissorY = this.scissorY,
              scissorWidth = this.scissorWidth,
              scissorHeight = this.scissorHeight;
            if (x !== scissorX || y !== scissorY || width !== scissorWidth || height !== scissorHeight) {
              gl.scissor(x, y, width, height);
              this.scissorX = x;
              this.scissorY = y;
              this.scissorWidth = width;
              this.scissorHeight = height;
            }
          }
          /**
           * ```
           * gl["enable"|"disable"](gl.BLEND);
           * ```
           *
           * @param blend
           * @returns
           */
          setBlend(blend) {
            var gl = this.gl,
              blendEnabled = this.blendEnabled;
            if (blend === blendEnabled) {
              return;
            }
            if (blend) {
              gl.enable(gl.BLEND);
            } else {
              gl.disable(gl.BLEND);
            }
            this.blendEnabled = blend;
          }
          /**
           * ```
           * gl.blendFunc(src, dst);
           * ```
           *
           * @param src
           * @param dst
           */
          blendFunc(src, dst) {
            var gl = this.gl,
              blendSrcRgb = this.blendSrcRgb,
              blendDstRgb = this.blendDstRgb,
              blendSrcAlpha = this.blendSrcAlpha,
              blendDstAlpha = this.blendDstAlpha;
            if (src !== blendSrcRgb || dst !== blendDstRgb || src !== blendSrcAlpha || dst !== blendDstAlpha) {
              gl.blendFunc(src, dst);
              this.blendSrcRgb = src;
              this.blendDstRgb = dst;
              this.blendSrcAlpha = src;
              this.blendDstAlpha = dst;
            }
          }
          /**
           * ```
           * gl.createBuffer();
           * ```
           *
           * @returns
           */
          createBuffer() {
            var gl = this.gl;
            return gl.createBuffer();
          }
          /**
           * ```
           * gl.createFramebuffer();
           * ```
           * @returns
           */
          createFramebuffer() {
            var gl = this.gl;
            return gl.createFramebuffer();
          }
          /**
           * ```
           * gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
           * ```
           *
           * @param framebuffer
           */
          bindFramebuffer(framebuffer) {
            var gl = this.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
          }
          /**
           * ```
           * gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.FRAMEBUFFER` and textarget is always `gl.TEXTURE_2D`
           */
          framebufferTexture2D(attachment, texture, level) {
            var gl = this.gl;
            gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
          }
          /**
           * ```
           * gl.clear(gl.COLOR_BUFFER_BIT);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Clear mask is always `gl.COLOR_BUFFER_BIT`
           */
          clear() {
            var gl = this.gl;
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
           * gl.bufferData(gl.ARRAY_BUFFER, data, usage);
           * ```
           *
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
           *
           * @param buffer
           * @param data
           * @param usage
           */
          arrayBufferData(buffer, data, usage) {
            var gl = this.gl,
              boundArrayBuffer = this.boundArrayBuffer;
            if (boundArrayBuffer !== buffer) {
              gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
              this.boundArrayBuffer = buffer;
            }
            gl.bufferData(gl.ARRAY_BUFFER, data, usage);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
           * gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
           * ```
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
           *
           * @param buffer
           * @param data
           * @param usage
           */
          elementArrayBufferData(buffer, data, usage) {
            var gl = this.gl,
              boundElementArrayBuffer = this.boundElementArrayBuffer;
            if (boundElementArrayBuffer !== buffer) {
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
              this.boundElementArrayBuffer = buffer;
            }
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
           * gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
           * ```
           *
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.vertexAttribPointer` are combined into one function.
           *
           * @param buffer
           * @param index
           * @param size
           * @param type
           * @param normalized
           * @param stride
           * @param offset
           */
          vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
            var gl = this.gl,
              boundArrayBuffer = this.boundArrayBuffer;
            if (boundArrayBuffer !== buffer) {
              gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
              this.boundArrayBuffer = buffer;
            }
            gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
          }
          /**
           * ```
           * gl.useProgram(program);
           * ```
           *
           * @param program
           * @returns
           */
          useProgram(program) {
            var gl = this.gl,
              curProgram = this.curProgram;
            if (curProgram === program) {
              return;
            }
            gl.useProgram(program);
            this.curProgram = program;
          }
          setUniform(type, location, ...args) {
            var gl = this.gl,
              programUniforms = this.programUniforms;
            var uniforms = programUniforms.get(this.curProgram);
            if (!uniforms) {
              uniforms = new Map();
              programUniforms.set(this.curProgram, uniforms);
            }
            var uniformArgs = uniforms.get(location);
            if (!uniformArgs || !compareArrays(uniformArgs, args)) {
              uniforms.set(location, args);
              gl[type](location, ...args);
            }
          }
          /**
           * ```
           * gl.getParameter(pname);
           * ```
           *
           * @param pname
           * @returns
           */
          getParameter(pname) {
            var gl = this.gl;
            return gl.getParameter(pname);
          }
          /**
           * ```
           * gl.drawElements(mode, count, type, offset);
           * ```
           *
           * @param mode
           * @param count
           * @param type
           * @param offset
           */
          drawElements(mode, count, type, offset) {
            var gl = this.gl;
            gl.drawElements(mode, count, type, offset);
          }
          /**
           * ```
           * gl.drawArrays(mode, first, count);
           * ```
           *
           * @param name
           * @returns
           */
          getExtension(name) {
            var gl = this.gl;
            return gl.getExtension(name);
          }
          /**
           * ```
           * gl.createVertexArray();
           * ```
           *
           * @returns
           */
          createVertexArray() {
            var gl = this.gl;
            assertTruthy(gl instanceof WebGL2RenderingContext);
            return gl.createVertexArray();
          }
          /**
           * ```
           * gl.bindVertexArray(vertexArray);
           * ```
           *
           * @param vertexArray
           */
          bindVertexArray(vertexArray) {
            var gl = this.gl;
            assertTruthy(gl instanceof WebGL2RenderingContext);
            gl.bindVertexArray(vertexArray);
          }
          /**
           * ```
           * gl.getAttribLocation(program, name);
           * ```
           *
           * @param program
           * @param name
           * @returns
           */
          getAttribLocation(program, name) {
            var gl = this.gl;
            return gl.getAttribLocation(program, name);
          }
          /**
           * ```
           * gl.getUniformLocation(program, name);
           * ```
           *
           * @param program
           * @param name
           * @returns
           */
          getUniformLocation(program, name) {
            var gl = this.gl;
            return gl.getUniformLocation(program, name);
          }
          /**
           * ```
           * gl.enableVertexAttribArray(index);
           * ```
           *
           * @param index
           */
          enableVertexAttribArray(index) {
            var gl = this.gl;
            gl.enableVertexAttribArray(index);
          }
          /**
           * ```
           * gl.disableVertexAttribArray(index);
           * ```
           *
           * @param index
           */
          disableVertexAttribArray(index) {
            var gl = this.gl;
            gl.disableVertexAttribArray(index);
          }
          /**
           * ```
           * gl.createShader(type);
           * ```
           *
           * @param type
           * @returns
           */
          createShader(type) {
            var gl = this.gl;
            return gl.createShader(type);
          }
          /**
           * ```
           * gl.compileShader(shader);
           * ```
           *
           * @param shader
           * @returns
           */
          compileShader(shader) {
            var gl = this.gl;
            gl.compileShader(shader);
          }
          /**
           * ```
           * gl.attachShader(program, shader);
           * ```
           *
           * @param program
           * @param shader
           */
          attachShader(program, shader) {
            var gl = this.gl;
            gl.attachShader(program, shader);
          }
          /**
           * ```
           * gl.linkProgram(program);
           * ```
           *
           * @param program
           */
          linkProgram(program) {
            var gl = this.gl;
            gl.linkProgram(program);
          }
          /**
           * ```
           * gl.deleteProgram(shader);
           * ```
           *
           * @param shader
           */
          deleteProgram(shader) {
            var gl = this.gl;
            gl.deleteProgram(shader);
          }
          /**
           * ```
           * gl.getShaderParameter(shader, pname);
           * ```
           *
           * @param shader
           * @param pname
           */
          getShaderParameter(shader, pname) {
            var gl = this.gl;
            return gl.getShaderParameter(shader, pname);
          }
          /**
           * ```
           * gl.getShaderInfoLog(shader);
           * ```
           *
           * @param shader
           */
          getShaderInfoLog(shader) {
            var gl = this.gl;
            return gl.getShaderInfoLog(shader);
          }
          /**
           * ```
           * gl.createProgram();
           * ```
           *
           * @returns
           */
          createProgram() {
            var gl = this.gl;
            return gl.createProgram();
          }
          /**
           * ```
           * gl.getProgramParameter(program, pname);
           * ```
           *
           * @param program
           * @param pname
           * @returns
           */
          getProgramParameter(program, pname) {
            var gl = this.gl;
            return gl.getProgramParameter(program, pname);
          }
          /**
           * ```
           * gl.getProgramInfoLog(program);
           * ```
           *
           * @param program
           * @returns
           */
          getProgramInfoLog(program) {
            var gl = this.gl;
            return gl.getProgramInfoLog(program);
          }
          /**
           * ```
           * gl.shaderSource(shader, source);
           * ```
           *
           * @param shader
           * @param source
           */
          shaderSource(shader, source) {
            var gl = this.gl;
            gl.shaderSource(shader, source);
          }
          /**
           * ```
           * gl.deleteShader(shader);
           * ```
           *
           * @param shader
           */
          deleteShader(shader) {
            var gl = this.gl;
            gl.deleteShader(shader);
          }
        }
        /**
         * Compare two arrays for equality.
         *
         * @remarks
         * This function will not try to compare nested arrays or Float32Arrays and
         * instead will always return false when they are encountered.
         *
         * @param a
         * @param b
         * @returns
         */
        function compareArrays(a, b) {
          if (a.length !== b.length) {
            return false;
          }
          return a.every((v, i) => {
            // Don't bother to compare nested arrays or Float32Arrays
            if (Array.isArray(v) || v instanceof Float32Array) {
              return false;
            } else {
              return v === b[i];
            }
          });
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
        class RenderTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            this.props = RenderTexture.resolveDefaults(props || {});
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            this.props.width = value;
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            this.props.height = value;
          }
          getTextureData() {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", {
                      data: null,
                      premultiplyAlpha: null
                    });
                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }))();
          }
          static resolveDefaults(props) {
            return {
              width: props.width || 256,
              height: props.height || 256
            };
          }
        }
        _defineProperty(RenderTexture, "z$__type__Props", void 0);
        exports("R", RenderTexture);

        /*
         * If not stated otherwise in this file or this component's LICENSE file the
         * following copyright and licenses apply:
         *
         * Copyright 2024 Comcast Cable Communications Management, LLC.
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
        class WebGlCoreCtxRenderTexture extends WebGlCoreCtxTexture {
          constructor(glw, memManager, textureSource) {
            super(glw, memManager, textureSource);
            // Create Framebuffer object
            _defineProperty(this, "framebuffer", void 0);
            var framebuffer = glw.createFramebuffer();
            assertTruthy(framebuffer, 'Unable to create framebuffer');
            this.framebuffer = framebuffer;
          }
          onLoadRequest() {
            var _this5 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var glw, memManager, nativeTexture, _this5$textureSource, width, height;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    glw = _this5.glw, memManager = _this5.memManager;
                    nativeTexture = _this5._nativeCtxTexture = _this5.createNativeCtxTexture();
                    _this5$textureSource = _this5.textureSource, width = _this5$textureSource.width, height = _this5$textureSource.height; // Set the dimensions of the render texture
                    glw.texImage2D(0, glw.RGBA, width, height, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                    // Update the texture memory manager
                    memManager.setTextureMemUse(_this5, width * height * 4);
                    // Bind the framebuffer
                    glw.bindFramebuffer(_this5.framebuffer);
                    // Attach the texture to the framebuffer
                    glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
                    // Unbind the framebuffer
                    glw.bindFramebuffer(null);
                    return _context6.abrupt("return", {
                      width,
                      height
                    });
                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }))();
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
        var WORDS_PER_QUAD = 24;
        class WebGlCoreRenderer extends CoreRenderer {
          constructor(options) {
            super(options.stage);
            //// WebGL Native Context and Data
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "system", void 0);
            //// Core Managers
            _defineProperty(this, "txManager", void 0);
            _defineProperty(this, "txMemManager", void 0);
            _defineProperty(this, "shManager", void 0);
            //// Options
            _defineProperty(this, "options", void 0);
            //// Persistent data
            _defineProperty(this, "quadBuffer", new ArrayBuffer(1024 * 1024 * 4));
            _defineProperty(this, "fQuadBuffer", new Float32Array(this.quadBuffer));
            _defineProperty(this, "uiQuadBuffer", new Uint32Array(this.quadBuffer));
            _defineProperty(this, "renderOps", []);
            //// Render Op / Buffer Filling State
            _defineProperty(this, "curBufferIdx", 0);
            _defineProperty(this, "curRenderOp", null);
            _defineProperty(this, "rttNodes", []);
            _defineProperty(this, "activeRttNode", null);
            //// Default Shader
            _defineProperty(this, "defaultShader", void 0);
            _defineProperty(this, "quadBufferCollection", void 0);
            /**
             * White pixel texture used by default when no texture is specified.
             */
            _defineProperty(this, "defaultTexture", void 0);
            /**
             * Whether the renderer is currently rendering to a texture.
             */
            _defineProperty(this, "renderToTextureActive", false);
            var canvas = options.canvas,
              clearColor = options.clearColor,
              bufferMemory = options.bufferMemory;
            this.options = options;
            this.txManager = options.txManager;
            this.txMemManager = options.txMemManager;
            this.shManager = options.shManager;
            this.defaultTexture = new ColorTexture(this.txManager);
            // When the default texture is loaded, request a render in case the
            // RAF is paused. Fixes: https://github.com/lightning-js/renderer/issues/123
            this.defaultTexture.once('loaded', () => {
              this.stage.requestRender();
            });
            var gl = createWebGLContext(canvas, options.contextSpy);
            var glw = this.glw = new WebGlContextWrapper(gl);
            var color = getNormalizedRgbaComponents(clearColor);
            glw.viewport(0, 0, canvas.width, canvas.height);
            glw.clearColor(color[0], color[1], color[2], color[3]);
            glw.setBlend(true);
            glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
            createIndexBuffer(glw, bufferMemory);
            this.system = {
              parameters: getWebGlParameters(this.glw),
              extensions: getWebGlExtensions(this.glw)
            };
            this.shManager.renderer = this;
            this.defaultShader = this.shManager.loadShader('DefaultShader').shader;
            var quadBuffer = glw.createBuffer();
            assertTruthy(quadBuffer);
            var stride = 6 * Float32Array.BYTES_PER_ELEMENT;
            this.quadBufferCollection = new BufferCollection([{
              buffer: quadBuffer,
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
                },
                a_color: {
                  name: 'a_color',
                  size: 4,
                  type: glw.UNSIGNED_BYTE,
                  normalized: true,
                  stride,
                  offset: 4 * Float32Array.BYTES_PER_ELEMENT
                },
                a_textureIndex: {
                  name: 'a_textureIndex',
                  size: 1,
                  type: glw.FLOAT,
                  normalized: false,
                  stride,
                  offset: 5 * Float32Array.BYTES_PER_ELEMENT
                }
              }
            }]);
          }
          reset() {
            var glw = this.glw;
            this.curBufferIdx = 0;
            this.curRenderOp = null;
            this.renderOps.length = 0;
            glw.setScissorTest(false);
            glw.clear();
          }
          getShaderManager() {
            return this.shManager;
          }
          createCtxTexture(textureSource) {
            if (textureSource instanceof SubTexture) {
              return new WebGlCoreCtxSubTexture(this.glw, this.txMemManager, textureSource);
            } else if (textureSource instanceof RenderTexture) {
              return new WebGlCoreCtxRenderTexture(this.glw, this.txMemManager, textureSource);
            }
            return new WebGlCoreCtxTexture(this.glw, this.txMemManager, textureSource);
          }
          /**
           * This function adds a quad (a rectangle composed of two triangles) to the WebGL rendering pipeline.
           *
           * It takes a set of options that define the quad's properties, such as its dimensions, colors, texture, shader, and transformation matrix.
           * The function first updates the shader properties with the current dimensions if necessary, then sets the default texture if none is provided.
           * It then checks if a new render operation is needed, based on the current shader and clipping rectangle.
           * If a new render operation is needed, it creates one and updates the current render operation.
           * The function then adjusts the texture coordinates based on the texture options and adds the texture to the texture manager.
           *
           * Finally, it calculates the vertices for the quad, taking into account any transformations, and adds them to the quad buffer.
           * The function updates the length and number of quads in the current render operation, and updates the current buffer index.
           */
          addQuad(params) {
            var _texture, _textureOptions$flipX, _textureOptions$flipY;
            var fQuadBuffer = this.fQuadBuffer,
              uiQuadBuffer = this.uiQuadBuffer;
            var width = params.width,
              height = params.height,
              colorTl = params.colorTl,
              colorTr = params.colorTr,
              colorBl = params.colorBl,
              colorBr = params.colorBr,
              textureOptions = params.textureOptions,
              shader = params.shader,
              shaderProps = params.shaderProps,
              alpha = params.alpha,
              clippingRect = params.clippingRect,
              tx = params.tx,
              ty = params.ty,
              ta = params.ta,
              tb = params.tb,
              tc = params.tc,
              td = params.td,
              renderToTexture = params.rtt,
              parentHasRenderTexture = params.parentHasRenderTexture,
              framebufferDimensions = params.framebufferDimensions;
            var texture = params.texture;
            /**
             * If the shader props contain any automatic properties, update it with the
             * current dimensions that will be used to render the quad.
             */
            if (shaderProps && hasOwn(shaderProps, '$dimensions')) {
              var dimensions = shaderProps.$dimensions;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              dimensions.width = width;
              dimensions.height = height;
            }
            texture = (_texture = texture) !== null && _texture !== void 0 ? _texture : this.defaultTexture;
            assertTruthy(texture instanceof Texture, 'Invalid texture type');
            var bufferIdx = this.curBufferIdx,
              curRenderOp = this.curRenderOp;
            var targetDims = {
              width,
              height
            };
            var targetShader = shader || this.defaultShader;
            assertTruthy(targetShader instanceof WebGlCoreShader);
            if (!this.reuseRenderOp(params)) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              this.newRenderOp(targetShader, shaderProps, alpha, targetDims, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions);
              curRenderOp = this.curRenderOp;
              assertTruthy(curRenderOp);
            }
            var flipX = (_textureOptions$flipX = textureOptions === null || textureOptions === void 0 ? void 0 : textureOptions.flipX) !== null && _textureOptions$flipX !== void 0 ? _textureOptions$flipX : false;
            var flipY = (_textureOptions$flipY = textureOptions === null || textureOptions === void 0 ? void 0 : textureOptions.flipY) !== null && _textureOptions$flipY !== void 0 ? _textureOptions$flipY : false;
            var texCoordX1 = 0;
            var texCoordY1 = 0;
            var texCoordX2 = 1;
            var texCoordY2 = 1;
            if (texture instanceof SubTexture) {
              var _texture$props = texture.props,
                _tx = _texture$props.x,
                _ty = _texture$props.y,
                tw = _texture$props.width,
                th = _texture$props.height;
              var _ref2 = texture.parentTexture.dimensions || {
                  width: 0,
                  height: 0
                },
                _ref2$width = _ref2.width,
                parentW = _ref2$width === void 0 ? 0 : _ref2$width,
                _ref2$height = _ref2.height,
                parentH = _ref2$height === void 0 ? 0 : _ref2$height;
              texCoordX1 = _tx / parentW;
              texCoordX2 = texCoordX1 + tw / parentW;
              texCoordY1 = _ty / parentH;
              texCoordY2 = texCoordY1 + th / parentH;
              texture = texture.parentTexture;
            }
            // Flip texture coordinates if dictated by texture options
            if (flipX) {
              var _ref3 = [texCoordX2, texCoordX1];
              texCoordX1 = _ref3[0];
              texCoordX2 = _ref3[1];
            }
            if (flipY) {
              var _ref4 = [texCoordY2, texCoordY1];
              texCoordY1 = _ref4[0];
              texCoordY2 = _ref4[1];
            }
            var txManager = this.stage.txManager;
            var ctxTexture = txManager.getCtxTexture(texture);
            assertTruthy(ctxTexture instanceof WebGlCoreCtxTexture);
            var textureIdx = this.addTexture(ctxTexture, bufferIdx);
            curRenderOp = this.curRenderOp;
            assertTruthy(curRenderOp);
            // render quad advanced
            if (tb !== 0 || tc !== 0) {
              // Upper-Left
              fQuadBuffer[bufferIdx++] = tx; // vertexX
              fQuadBuffer[bufferIdx++] = ty; // vertexY
              fQuadBuffer[bufferIdx++] = texCoordX1; // texCoordX
              fQuadBuffer[bufferIdx++] = texCoordY1; // texCoordY
              uiQuadBuffer[bufferIdx++] = colorTl; // color
              fQuadBuffer[bufferIdx++] = textureIdx; // texIndex
              // Upper-Right
              fQuadBuffer[bufferIdx++] = tx + width * ta;
              fQuadBuffer[bufferIdx++] = ty + width * tc;
              fQuadBuffer[bufferIdx++] = texCoordX2;
              fQuadBuffer[bufferIdx++] = texCoordY1;
              uiQuadBuffer[bufferIdx++] = colorTr;
              fQuadBuffer[bufferIdx++] = textureIdx;
              // Lower-Left
              fQuadBuffer[bufferIdx++] = tx + height * tb;
              fQuadBuffer[bufferIdx++] = ty + height * td;
              fQuadBuffer[bufferIdx++] = texCoordX1;
              fQuadBuffer[bufferIdx++] = texCoordY2;
              uiQuadBuffer[bufferIdx++] = colorBl;
              fQuadBuffer[bufferIdx++] = textureIdx;
              // Lower-Right
              fQuadBuffer[bufferIdx++] = tx + width * ta + height * tb;
              fQuadBuffer[bufferIdx++] = ty + width * tc + height * td;
              fQuadBuffer[bufferIdx++] = texCoordX2;
              fQuadBuffer[bufferIdx++] = texCoordY2;
              uiQuadBuffer[bufferIdx++] = colorBr;
              fQuadBuffer[bufferIdx++] = textureIdx;
            } else {
              // Calculate the right corner of the quad
              // multiplied by the scale
              var rightCornerX = tx + width * ta;
              var rightCornerY = ty + height * td;
              // Upper-Left
              fQuadBuffer[bufferIdx++] = tx; // vertexX
              fQuadBuffer[bufferIdx++] = ty; // vertexY
              fQuadBuffer[bufferIdx++] = texCoordX1; // texCoordX
              fQuadBuffer[bufferIdx++] = texCoordY1; // texCoordY
              uiQuadBuffer[bufferIdx++] = colorTl; // color
              fQuadBuffer[bufferIdx++] = textureIdx; // texIndex
              // Upper-Right
              fQuadBuffer[bufferIdx++] = rightCornerX;
              fQuadBuffer[bufferIdx++] = ty;
              fQuadBuffer[bufferIdx++] = texCoordX2;
              fQuadBuffer[bufferIdx++] = texCoordY1;
              uiQuadBuffer[bufferIdx++] = colorTr;
              fQuadBuffer[bufferIdx++] = textureIdx;
              // Lower-Left
              fQuadBuffer[bufferIdx++] = tx;
              fQuadBuffer[bufferIdx++] = rightCornerY;
              fQuadBuffer[bufferIdx++] = texCoordX1;
              fQuadBuffer[bufferIdx++] = texCoordY2;
              uiQuadBuffer[bufferIdx++] = colorBl;
              fQuadBuffer[bufferIdx++] = textureIdx;
              // Lower-Right
              fQuadBuffer[bufferIdx++] = rightCornerX;
              fQuadBuffer[bufferIdx++] = rightCornerY;
              fQuadBuffer[bufferIdx++] = texCoordX2;
              fQuadBuffer[bufferIdx++] = texCoordY2;
              uiQuadBuffer[bufferIdx++] = colorBr;
              fQuadBuffer[bufferIdx++] = textureIdx;
            }
            // Update the length of the current render op
            curRenderOp.length += WORDS_PER_QUAD;
            curRenderOp.numQuads++;
            this.curBufferIdx = bufferIdx;
          }
          /**
           * Replace the existing RenderOp with a new one that uses the specified Shader
           * and starts at the specified buffer index.
           *
           * @param shader
           * @param bufferIdx
           */
          newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
            var curRenderOp = new WebGlCoreRenderOp(this.glw, this.options, this.quadBufferCollection, shader, shaderProps, alpha, clippingRect, dimensions, bufferIdx, 0,
            // Z-Index is only used for explictly added Render Ops
            renderToTexture, parentHasRenderTexture, framebufferDimensions);
            this.curRenderOp = curRenderOp;
            this.renderOps.push(curRenderOp);
          }
          /**
           * Add a texture to the current RenderOp. If the texture cannot be added to the
           * current RenderOp, a new RenderOp will be created and the texture will be added
           * to that one.
           *
           * If the texture cannot be added to the new RenderOp, an error will be thrown.
           *
           * @param texture
           * @param bufferIdx
           * @param recursive
           * @returns Assigned Texture Index of the texture in the render op
           */
          addTexture(texture, bufferIdx, recursive) {
            var curRenderOp = this.curRenderOp;
            assertTruthy(curRenderOp);
            var textureIdx = curRenderOp.addTexture(texture);
            // TODO: Refactor to be more DRY
            if (textureIdx === 0xffffffff) {
              if (recursive) {
                throw new Error('Unable to add texture to render op');
              }
              var shader = curRenderOp.shader,
                shaderProps = curRenderOp.shaderProps,
                dimensions = curRenderOp.dimensions,
                clippingRect = curRenderOp.clippingRect,
                alpha = curRenderOp.alpha;
              this.newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx);
              return this.addTexture(texture, bufferIdx, true);
            }
            return textureIdx;
          }
          /**
           * Test if the current Render operation can be reused for the specified parameters.
           * @param params
           * @returns
           */
          reuseRenderOp(params) {
            var _this$curRenderOp;
            var shader = params.shader,
              shaderProps = params.shaderProps,
              parentHasRenderTexture = params.parentHasRenderTexture,
              rtt = params.rtt,
              clippingRect = params.clippingRect;
            var targetShader = shader || this.defaultShader;
            // Switching shader program will require a new render operation
            if (((_this$curRenderOp = this.curRenderOp) === null || _this$curRenderOp === void 0 ? void 0 : _this$curRenderOp.shader) !== targetShader) {
              return false;
            }
            // Switching clipping rect will require a new render operation
            if (!compareRect(this.curRenderOp.clippingRect, clippingRect)) {
              return false;
            }
            // Force new render operation if rendering to texture
            // @todo: This needs to be improved, render operations could also be reused
            // for rendering to texture
            if (parentHasRenderTexture || rtt) {
              return false;
            }
            // Check if the shader can batch the shader properties
            if (this.curRenderOp.shader !== this.defaultShader && (!shaderProps || !this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps, shaderProps))) {
              return false;
            }
            // Render operation can be reused
            return true;
          }
          /**
           * add RenderOp to the render pipeline
           */
          addRenderOp(renderable) {
            this.renderOps.push(renderable);
            this.curRenderOp = null;
          }
          /**
           * Render the current set of RenderOps to render to the specified surface.
           *
           * TODO: 'screen' is the only supported surface at the moment.
           *
           * @param surface
           */
          render(surface = 'screen') {
            var _this$quadBufferColle;
            var glw = this.glw,
              quadBuffer = this.quadBuffer;
            var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
            var buffer = (_this$quadBufferColle = this.quadBufferCollection.getBuffer('a_position')) !== null && _this$quadBufferColle !== void 0 ? _this$quadBufferColle : null;
            glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
            this.renderOps.forEach((renderOp, i) => {
              renderOp.draw();
            });
          }
          renderToTexture(node) {
            for (var i = 0; i < this.rttNodes.length; i++) {
              if (this.rttNodes[i] === node) {
                return;
              }
            }
            // @todo: Better bottom up rendering order
            this.rttNodes.unshift(node);
          }
          renderRTTNodes() {
            var glw = this.glw;
            var txManager = this.stage.txManager;
            // Render all associated RTT nodes to their textures
            for (var i = 0; i < this.rttNodes.length; i++) {
              var node = this.rttNodes[i];
              // Skip nodes that don't have RTT updates
              if (!node || !node.hasRTTupdates) {
                continue;
              }
              // Set the active RTT node to the current node
              // So we can prevent rendering children of nested RTT nodes
              this.activeRttNode = node;
              assertTruthy(node.texture, 'RTT node missing texture');
              var ctxTexture = txManager.getCtxTexture(node.texture);
              assertTruthy(ctxTexture instanceof WebGlCoreCtxRenderTexture);
              this.renderToTextureActive = true;
              // Bind the the texture's framebuffer
              glw.bindFramebuffer(ctxTexture.framebuffer);
              glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
              glw.clear();
              // Render all associated quads to the texture
              for (var _i = 0; _i < node.children.length; _i++) {
                var child = node.children[_i];
                if (!child) {
                  continue;
                }
                child.update(this.stage.deltaTime, {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                  valid: false
                });
                this.stage.addQuads(child);
                child.hasRTTupdates = false;
              }
              // Render all associated quads to the texture
              this.render();
              // Reset render operations
              this.renderOps.length = 0;
              node.hasRTTupdates = false;
            }
            // Bind the default framebuffer
            glw.bindFramebuffer(null);
            glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
            this.renderToTextureActive = false;
          }
        }
        exports("w", WebGlCoreRenderer);

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
        var SpecialCodepoints = {
          LINE_FEED: 0x0a,
          CARRIAGE_RETURN: 0x0d,
          SPACE: 0x20,
          TAB: 0x09,
          ZERO_WIDTH_SPACE: 0x200b,
          ZERO_WIDTH_NON_JOINER: 0x200c,
          ZERO_WIDTH_JOINER: 0x200d,
          LEFT_TO_RIGHT_MARK: 0x200e,
          RIGHT_TO_LEFT_MARK: 0x200f,
          LEFT_TO_RIGHT_EMBEDDING: 0x202a,
          RIGHT_TO_LEFT_EMBEDDING: 0x202b,
          POP_DIRECTIONAL_FORMATTING: 0x202c,
          LEFT_TO_RIGHT_OVERRIDE: 0x202d,
          RIGHT_TO_LEFT_OVERRIDE: 0x202e,
          LINE_SEPARATOR: 0x2028,
          PARAGRAPH_SEPARATOR: 0x2029,
          OBJECT_REPLACEMENT_CHARACTER: 0xfffc,
          REPLACEMENT_CHARACTER: 0xfffd,
          ZERO_WIDTH_NO_BREAK_SPACE: 0xfeff,
          LEFT_TO_RIGHT_ISOLATE: 0x2066,
          RIGHT_TO_LEFT_ISOLATE: 0x2067,
          FIRST_STRONG_ISOLATE: 0x2068,
          POP_DIRECTIONAL_ISOLATE: 0x2069,
          INHIBIT_SYMMETRIC_SWAPPING: 0x206a,
          ACTIVATE_SYMMETRIC_SWAPPING: 0x206b,
          INHIBIT_ARABIC_FORM_SHAPING: 0x206c,
          ACTIVATE_ARABIC_FORM_SHAPING: 0x206d,
          NATIONAL_DIGIT_SHAPES: 0x206e,
          NOMINAL_DIGIT_SHAPES: 0x206f,
          LEFT_TO_RIGHT_BOUNDARY: 0x200e,
          RIGHT_TO_LEFT_BOUNDARY: 0x200f
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
        class FontShaper {}

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
        class SdfFontShaper extends FontShaper {
          constructor(data, glyphMap) {
            super();
            _defineProperty(this, "data", void 0);
            _defineProperty(this, "glyphMap", void 0);
            _defineProperty(this, "kernings", void 0);
            this.data = data;
            this.glyphMap = glyphMap;
            var kernings = this.kernings = {};
            data.kernings.forEach(kerning => {
              var second = kerning.second;
              var firsts = kernings[second] = kernings[second] || {};
              firsts[kerning.first] = kerning.amount;
            });
            this.kernings = kernings;
          }
          shapeText(props, codepoints) {
            var _this6 = this;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var codepointResult, lastGlyphId, codepoint, glyph, _this6$kernings$glyph, kerning;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    lastGlyphId = undefined;
                  case 1:
                    if (!((codepointResult = codepoints.peek()) && !codepointResult.done)) {
                      _context7.next = 17;
                      break;
                    }
                    codepoint = codepointResult.value;
                    glyph = _this6.glyphMap.get(codepoint);
                    codepoints.next();
                    if (!(glyph !== undefined)) {
                      _context7.next = 12;
                      break;
                    }
                    // We found a glyph for this codepoint
                    // Yield the mapped glyph info
                    /**
                     * Kerning includes any possible additional letter spacing
                     */
                    kerning = lastGlyphId !== undefined ? (((_this6$kernings$glyph = _this6.kernings[glyph.id]) === null || _this6$kernings$glyph === void 0 ? void 0 : _this6$kernings$glyph[lastGlyphId]) || 0) + props.letterSpacing : 0;
                    lastGlyphId = glyph.id;
                    _context7.next = 10;
                    return {
                      mapped: true,
                      glyphId: glyph.id,
                      codepoint,
                      cluster: codepoints.lastIndex,
                      xAdvance: glyph.xadvance + kerning,
                      yAdvance: 0,
                      xOffset: glyph.xoffset + kerning,
                      yOffset: glyph.yoffset,
                      xBearing: 0,
                      yBearing: 0,
                      width: glyph.width,
                      height: glyph.height
                    };
                  case 10:
                    _context7.next = 15;
                    break;
                  case 12:
                    // We didn't find a glyph for this codepoint
                    // Yield the unmapped codepoint info
                    // If this codepoint is a linebreak, we should reset the last glyph id
                    // so that the next glyph will not be kerned with the last glyph of the
                    // previous line.
                    if (codepoint === SpecialCodepoints.LINE_FEED) {
                      lastGlyphId = undefined;
                    }
                    _context7.next = 15;
                    return {
                      mapped: false,
                      codepoint,
                      cluster: codepoints.lastIndex
                    };
                  case 15:
                    _context7.next = 1;
                    break;
                  case 17:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            })();
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
        // import type { Renderer } from '../../../Renderer';
        class SdfTrFontFace extends TrFontFace {
          constructor(fontFamily, descriptors, type, stage, atlasUrl, atlasDataUrl) {
            var _this7;
            super(fontFamily, descriptors);
            _this7 = this;
            _defineProperty(this, "type", void 0);
            _defineProperty(this, "texture", void 0);
            /**
             * Height of the tallest character in the font including the whitespace above it
             */
            _defineProperty(this, "maxCharHeight", 0);
            _defineProperty(this, "data", void 0);
            _defineProperty(this, "shaper", void 0);
            _defineProperty(this, "glyphMap", new Map());
            this.type = type;
            var renderer = stage.renderer;
            assertTruthy(renderer instanceof WebGlCoreRenderer, 'SDF Font Faces can only be used with the WebGL Renderer');
            this.texture = stage.txManager.loadTexture('ImageTexture', {
              src: atlasUrl,
              // IMPORTANT: The SDF shader requires the alpha channel to NOT be
              // premultiplied on the atlas texture. If it is premultiplied, the
              // rendering of SDF glyphs (especially single-channel SDF fonts) will
              // be very jagged.
              premultiplyAlpha: false
            }, {
              preload: true
            });
            this.texture.on('loaded', () => {
              this.checkLoaded();
            });
            // Set this.data to the fetched data from dataUrl
            fetch(atlasDataUrl).then( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(response) {
                var maxCharHeight;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return response.json();
                    case 2:
                      _this7.data = _context8.sent;
                      // Add all the glyphs to the glyph map
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      maxCharHeight = 0;
                      _this7.data.chars.forEach(glyph => {
                        _this7.glyphMap.set(glyph.id, glyph);
                        var charHeight = glyph.yoffset + glyph.height;
                        if (charHeight > maxCharHeight) {
                          maxCharHeight = charHeight;
                        }
                      });
                      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                      _this7.maxCharHeight = maxCharHeight;
                      // We know `data` is defined here, because we just set it
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      _this7.shaper = new SdfFontShaper(_this7.data, _this7.glyphMap);
                      _this7.checkLoaded();
                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x) {
                return _ref5.apply(this, arguments);
              };
            }()).catch(console.error);
          }
          getAtlasEntry(glyphId) {
            var glyph = this.glyphMap.get(glyphId);
            if (glyph === undefined) {
              throw new Error(`Glyph ${glyphId} not found in font ${this.fontFamily}`);
            }
            return {
              x: glyph.x,
              y: glyph.y,
              width: glyph.width,
              height: glyph.height
            };
          }
          checkLoaded() {
            if (this.loaded) return;
            if (this.texture.state === 'loaded' && this.data) {
              this.loaded = true;
              this.emit('loaded');
            }
          }
        }
        exports("S", SdfTrFontFace);

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
         * Base class for Core extensions.
         *
         * @remarks
         * Core extensions are used to extend the Core Renderer with custom code such as
         * custom fonts, custom shaders, custom textures, custom animation functions,
         * and more.
         */
        class CoreExtension {}
        exports("C", CoreExtension);
      }
    };
  });
})();
//# sourceMappingURL=CoreExtension-legacy-BzZDDgL-.js.map
