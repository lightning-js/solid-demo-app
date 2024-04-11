/**
 * es6-proxy-polyfill
 * @version 2.1.1
 * @author Ambit-Tsai <ambit_tsai@qq.com>
 * @license Apache-2.0
 * @see {@link https://github.com/ambit-tsai/es6-proxy-polyfill#readme}
 */
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
      ? define(n)
      : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Proxy =
          n());
})(this, function () {
  "use strict";
  var t,
    n = "[[ProxyTarget]]",
    e = "[[ProxyHandler]]",
    r = "[[Get]]",
    o = "[[Set]]",
    i = "[[Call]]",
    c = "[[Construct]]",
    u = "__proto__",
    f = "REVOKED",
    a = Object.defineProperty,
    s = Object.defineProperties,
    p = Object.getPrototypeOf,
    y = Object.getOwnPropertyDescriptor,
    _ = !!s && h(s),
    l = _
      ? Object.__proto__
        ? p
        : function (t) {
            return "function" == typeof t ? t.__proto__ || {} : p(t);
          }
      : function (t) {
          return (_isVbObject(t) && _getVbInternalOf(t).__proto__) || {};
        };
  function h(t) {
    return "function" == typeof t && /\[native code\]/.test(t.toString());
  }
  function v(t, n) {
    if (this instanceof v) return b(new g(t, n));
    d("Constructor Proxy requires 'new'");
  }
  function b(e) {
    var u = e[n];
    return "function" == typeof u
      ? (function (t) {
          var e = t[n];
          function r() {
            return this instanceof r
              ? t[c](arguments, r)
              : t[i](this, arguments);
          }
          if (((r.prototype = e.prototype), _)) {
            var o = m(t),
              u = T(p(e), o);
            for (var f in (w(r, u), (o = R(e, t)))) j(r, f) && delete o[f];
            s(r, o);
          } else C(r, e);
          return r;
        })(e)
      : u instanceof Array
        ? (function (e) {
            var i,
              c,
              u = e[n];
            _ &&
              (((i = m(e)).concat.get = function () {
                var t = e[r]("concat", this);
                return t === Array.prototype.concat ? t.bind(u) : t;
              }),
              (c = T(p(u), i)));
            return (
              ((i = R(u, e)).length.set = function (r) {
                var i = r - u.length;
                e[o]("length", r, this),
                  i &&
                    (function (e, r, o) {
                      var i = o[n];
                      if (e > 0)
                        for (var c = i.length, u = c - e; u < c; ++u) {
                          var f = y(r, u);
                          f ? a(i, u, f) : (i[u] = t),
                            (f = V(i, u, o)),
                            a(r, u, f);
                        }
                      else
                        for (var s = (u = i.length) - e; u < s; ++u)
                          delete r[u];
                    })(i, this, e);
              }),
              T(c, i)
            );
          })(e)
        : (function (t) {
            var e,
              r,
              o = t[n];
            _ && ((e = m(t)), (r = T(p(o), e)));
            return (e = R(o, t)), T(r, e);
          })(e);
  }
  function g(t, r) {
    (P(t) && P(r)) ||
      d("Cannot create proxy with a non-object as target or handler"),
      (l(t).__PROXY__ || l(r).__PROXY__) === f &&
        d("Cannot create proxy with a revoked proxy as target or handler"),
      (this[n] = t),
      (this[e] = r);
  }
  function O(t, n) {
    t || d("Cannot perform '" + n + "' on a proxy that has been revoked");
  }
  function d(t) {
    throw new TypeError(t);
  }
  function P(t) {
    return !!t && ("object" == typeof t || "function" == typeof t);
  }
  function j(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }
  (v.revocable = function (r, o) {
    this instanceof v.revocable && d("Proxy.revocable is not a constructor");
    var i = new g(r, o),
      c = b(i);
    return {
      proxy: c,
      revoke: function () {
        (i[n] = t), (i[e] = t), _ || (l(c).__PROXY__ = f);
      },
    };
  }),
    (g.prototype[r] = function (r, o) {
      var i = this[e];
      return (
        O(i, "get"),
        i.get == t
          ? this[n][r]
          : "function" == typeof i.get
            ? i.get(this[n], r, o)
            : void d("Trap 'get' is not a function: " + i.get)
      );
    }),
    (g.prototype[o] = function (r, o, i) {
      var c = this[e];
      if ((O(c, "set"), c.set == t)) this[n][r] = o;
      else {
        if ("function" == typeof c.set) {
          var u = c.set(this[n], r, o, i);
          return (
            u ||
              console.warn(
                "Trap 'set' returned false for property '" + r + "'"
              ),
            Boolean(u)
          );
        }
        d("Trap 'set' is not a function: " + c.set);
      }
    }),
    (g.prototype[i] = function (r, o) {
      var i = this[e];
      return (
        O(i, "apply"),
        i.apply == t
          ? this[n].apply(r, o)
          : "function" == typeof i.apply
            ? i.apply(this[n], r, o)
            : void d("Trap 'apply' is not a function: " + i.apply)
      );
    }),
    (g.prototype[c] = function (r, o) {
      var i,
        c = this[e];
      if (
        (O(c, "construct"),
        c.construct == t
          ? (i = (function (t, n) {
              for (var e = [], r = 0, o = n.length; r < o; ++r)
                e.push("args[" + r + "]");
              return new Function(
                "Ctor",
                "args",
                "return new Ctor(" + e.join(", ") + ")"
              )(t, n);
            })(this[n], r))
          : "function" == typeof c.construct
            ? (i = c.construct(this[n], r, o))
            : d("Trap 'construct' is not a function: " + c.construct),
        P(i))
      )
        return i;
      d("Trap 'construct' returned non-object: " + i);
    });
  var x =
      Object.getOwnPropertyNames ||
      function (t) {
        var n = [];
        for (var e in t) j(t, e) && n.push(e);
        return n;
      },
    w = h(Object.setPrototypeOf)
      ? Object.setPrototypeOf
      : Object.__proto__
        ? function (t, n) {
            return (t.__proto__ = n), t;
          }
        : function (t, n) {
            return a(t, u, { value: n });
          },
    T = _
      ? Object.create
      : function (n, e) {
          var r = s({}, e);
          if (_isVbObject(r)) {
            var o = {};
            (o.__PROXY__ = t), (_getVbInternalOf(r).__proto__ = o);
          }
          return r;
        },
    C =
      Object.assign ||
      function (t, n) {
        for (var e in n) j(n, e) && (t[e] = n[e]);
        return t;
      };
  function m(e) {
    for (var r = {}, o = e[n]; (o = p(o)); ) {
      var i = R(o, e);
      C(r, i);
    }
    return (
      (r.__PROXY__ = {
        get: function () {
          return e[n] ? t : f;
        },
      }),
      r
    );
  }
  function R(t, n) {
    for (var e = x(t), r = {}, o = e.length - 1; o >= 0; --o)
      r[e[o]] = V(t, e[o], n);
    return r;
  }
  function V(t, n, e) {
    var i = y(t, n);
    return {
      get: function () {
        return e[r](n, this);
      },
      set: function (t) {
        e[o](n, t, this);
      },
      enumerable: i.enumerable,
      configurable: i.configurable,
    };
  }
  return "undefined" == typeof Proxy ? v : Proxy;
});
!(function () {
  "use strict";
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {},
    e = function (t) {
      return t && t.Math === Math && t;
    },
    r =
      e("object" == typeof globalThis && globalThis) ||
      e("object" == typeof window && window) ||
      e("object" == typeof self && self) ||
      e("object" == typeof t && t) ||
      e("object" == typeof t && t) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    n = {},
    i = function (t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    },
    o = !i(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    a = !i(function () {
      var t = function () {}.bind();
      return "function" != typeof t || t.hasOwnProperty("prototype");
    }),
    u = a,
    c = Function.prototype.call,
    s = u
      ? c.bind(c)
      : function () {
          return c.apply(c, arguments);
        },
    f = {},
    h = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    p = l && !h.call({ 1: 2 }, 1);
  f.f = p
    ? function (t) {
        var e = l(this, t);
        return !!e && e.enumerable;
      }
    : h;
  var v,
    d,
    g = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    y = a,
    m = Function.prototype,
    w = m.call,
    b = y && m.bind.bind(w, w),
    S = y
      ? b
      : function (t) {
          return function () {
            return w.apply(t, arguments);
          };
        },
    x = S,
    A = x({}.toString),
    E = x("".slice),
    O = function (t) {
      return E(A(t), 8, -1);
    },
    T = i,
    R = O,
    I = Object,
    P = S("".split),
    j = T(function () {
      return !I("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" === R(t) ? P(t, "") : I(t);
        }
      : I,
    k = function (t) {
      return null == t;
    },
    L = k,
    C = TypeError,
    U = function (t) {
      if (L(t)) throw new C("Can't call method on " + t);
      return t;
    },
    M = j,
    F = U,
    B = function (t) {
      return M(F(t));
    },
    _ = "object" == typeof document && document.all,
    D =
      void 0 === _ && void 0 !== _
        ? function (t) {
            return "function" == typeof t || t === _;
          }
        : function (t) {
            return "function" == typeof t;
          },
    z = D,
    N = function (t) {
      return "object" == typeof t ? null !== t : z(t);
    },
    q = r,
    H = D,
    W = function (t, e) {
      return arguments.length < 2
        ? ((r = q[t]), H(r) ? r : void 0)
        : q[t] && q[t][e];
      var r;
    },
    $ = S({}.isPrototypeOf),
    G = ("undefined" != typeof navigator && String(navigator.userAgent)) || "",
    V = r,
    Y = G,
    J = V.process,
    K = V.Deno,
    Q = (J && J.versions) || (K && K.version),
    X = Q && Q.v8;
  X && (d = (v = X.split("."))[0] > 0 && v[0] < 4 ? 1 : +(v[0] + v[1])),
    !d &&
      Y &&
      (!(v = Y.match(/Edge\/(\d+)/)) || v[1] >= 74) &&
      (v = Y.match(/Chrome\/(\d+)/)) &&
      (d = +v[1]);
  var Z = d,
    tt = Z,
    et = i,
    rt = r.String,
    nt =
      !!Object.getOwnPropertySymbols &&
      !et(function () {
        var t = Symbol("symbol detection");
        return (
          !rt(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && tt && tt < 41)
        );
      }),
    it = nt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    ot = W,
    at = D,
    ut = $,
    ct = Object,
    st = it
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          var e = ot("Symbol");
          return at(e) && ut(e.prototype, ct(t));
        },
    ft = String,
    ht = function (t) {
      try {
        return ft(t);
      } catch (e) {
        return "Object";
      }
    },
    lt = D,
    pt = ht,
    vt = TypeError,
    dt = function (t) {
      if (lt(t)) return t;
      throw new vt(pt(t) + " is not a function");
    },
    gt = dt,
    yt = k,
    mt = function (t, e) {
      var r = t[e];
      return yt(r) ? void 0 : gt(r);
    },
    wt = s,
    bt = D,
    St = N,
    xt = TypeError,
    At = function (t, e) {
      var r, n;
      if ("string" === e && bt((r = t.toString)) && !St((n = wt(r, t))))
        return n;
      if (bt((r = t.valueOf)) && !St((n = wt(r, t)))) return n;
      if ("string" !== e && bt((r = t.toString)) && !St((n = wt(r, t))))
        return n;
      throw new xt("Can't convert object to primitive value");
    },
    Et = { exports: {} },
    Ot = r,
    Tt = Object.defineProperty,
    Rt = function (t, e) {
      try {
        Tt(Ot, t, { value: e, configurable: !0, writable: !0 });
      } catch (r) {
        Ot[t] = e;
      }
      return e;
    },
    It = r,
    Pt = Rt,
    jt = "__core-js_shared__",
    kt = (Et.exports = It[jt] || Pt(jt, {}));
  (kt.versions || (kt.versions = [])).push({
    version: "3.36.1",
    mode: "global",
    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
  var Lt = Et.exports,
    Ct = Lt,
    Ut = function (t, e) {
      return Ct[t] || (Ct[t] = e || {});
    },
    Mt = U,
    Ft = Object,
    Bt = function (t) {
      return Ft(Mt(t));
    },
    _t = Bt,
    Dt = S({}.hasOwnProperty),
    zt =
      Object.hasOwn ||
      function (t, e) {
        return Dt(_t(t), e);
      },
    Nt = S,
    qt = 0,
    Ht = Math.random(),
    Wt = Nt((1).toString),
    $t = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Wt(++qt + Ht, 36);
    },
    Gt = Ut,
    Vt = zt,
    Yt = $t,
    Jt = nt,
    Kt = it,
    Qt = r.Symbol,
    Xt = Gt("wks"),
    Zt = Kt ? Qt.for || Qt : (Qt && Qt.withoutSetter) || Yt,
    te = function (t) {
      return (
        Vt(Xt, t) || (Xt[t] = Jt && Vt(Qt, t) ? Qt[t] : Zt("Symbol." + t)),
        Xt[t]
      );
    },
    ee = s,
    re = N,
    ne = st,
    ie = mt,
    oe = At,
    ae = TypeError,
    ue = te("toPrimitive"),
    ce = function (t, e) {
      if (!re(t) || ne(t)) return t;
      var r,
        n = ie(t, ue);
      if (n) {
        if (
          (void 0 === e && (e = "default"), (r = ee(n, t, e)), !re(r) || ne(r))
        )
          return r;
        throw new ae("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), oe(t, e);
    },
    se = ce,
    fe = st,
    he = function (t) {
      var e = se(t, "string");
      return fe(e) ? e : e + "";
    },
    le = N,
    pe = r.document,
    ve = le(pe) && le(pe.createElement),
    de = function (t) {
      return ve ? pe.createElement(t) : {};
    },
    ge = de,
    ye =
      !o &&
      !i(function () {
        return (
          7 !==
          Object.defineProperty(ge("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    me = o,
    we = s,
    be = f,
    Se = g,
    xe = B,
    Ae = he,
    Ee = zt,
    Oe = ye,
    Te = Object.getOwnPropertyDescriptor;
  n.f = me
    ? Te
    : function (t, e) {
        if (((t = xe(t)), (e = Ae(e)), Oe))
          try {
            return Te(t, e);
          } catch (r) {}
        if (Ee(t, e)) return Se(!we(be.f, t, e), t[e]);
      };
  var Re = {},
    Ie =
      o &&
      i(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      }),
    Pe = N,
    je = String,
    ke = TypeError,
    Le = function (t) {
      if (Pe(t)) return t;
      throw new ke(je(t) + " is not an object");
    },
    Ce = o,
    Ue = ye,
    Me = Ie,
    Fe = Le,
    Be = he,
    _e = TypeError,
    De = Object.defineProperty,
    ze = Object.getOwnPropertyDescriptor,
    Ne = "enumerable",
    qe = "configurable",
    He = "writable";
  Re.f = Ce
    ? Me
      ? function (t, e, r) {
          if (
            (Fe(t),
            (e = Be(e)),
            Fe(r),
            "function" == typeof t &&
              "prototype" === e &&
              "value" in r &&
              He in r &&
              !r[He])
          ) {
            var n = ze(t, e);
            n &&
              n[He] &&
              ((t[e] = r.value),
              (r = {
                configurable: qe in r ? r[qe] : n[qe],
                enumerable: Ne in r ? r[Ne] : n[Ne],
                writable: !1,
              }));
          }
          return De(t, e, r);
        }
      : De
    : function (t, e, r) {
        if ((Fe(t), (e = Be(e)), Fe(r), Ue))
          try {
            return De(t, e, r);
          } catch (n) {}
        if ("get" in r || "set" in r) throw new _e("Accessors not supported");
        return "value" in r && (t[e] = r.value), t;
      };
  var We = Re,
    $e = g,
    Ge = o
      ? function (t, e, r) {
          return We.f(t, e, $e(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    Ve = { exports: {} },
    Ye = o,
    Je = zt,
    Ke = Function.prototype,
    Qe = Ye && Object.getOwnPropertyDescriptor,
    Xe = Je(Ke, "name"),
    Ze = {
      EXISTS: Xe,
      PROPER: Xe && "something" === function () {}.name,
      CONFIGURABLE: Xe && (!Ye || (Ye && Qe(Ke, "name").configurable)),
    },
    tr = D,
    er = Lt,
    rr = S(Function.toString);
  tr(er.inspectSource) ||
    (er.inspectSource = function (t) {
      return rr(t);
    });
  var nr,
    ir,
    or,
    ar = er.inspectSource,
    ur = D,
    cr = r.WeakMap,
    sr = ur(cr) && /native code/.test(String(cr)),
    fr = $t,
    hr = Ut("keys"),
    lr = function (t) {
      return hr[t] || (hr[t] = fr(t));
    },
    pr = {},
    vr = sr,
    dr = r,
    gr = N,
    yr = Ge,
    mr = zt,
    wr = Lt,
    br = lr,
    Sr = pr,
    xr = "Object already initialized",
    Ar = dr.TypeError,
    Er = dr.WeakMap;
  if (vr || wr.state) {
    var Or = wr.state || (wr.state = new Er());
    (Or.get = Or.get),
      (Or.has = Or.has),
      (Or.set = Or.set),
      (nr = function (t, e) {
        if (Or.has(t)) throw new Ar(xr);
        return (e.facade = t), Or.set(t, e), e;
      }),
      (ir = function (t) {
        return Or.get(t) || {};
      }),
      (or = function (t) {
        return Or.has(t);
      });
  } else {
    var Tr = br("state");
    (Sr[Tr] = !0),
      (nr = function (t, e) {
        if (mr(t, Tr)) throw new Ar(xr);
        return (e.facade = t), yr(t, Tr, e), e;
      }),
      (ir = function (t) {
        return mr(t, Tr) ? t[Tr] : {};
      }),
      (or = function (t) {
        return mr(t, Tr);
      });
  }
  var Rr = {
      set: nr,
      get: ir,
      has: or,
      enforce: function (t) {
        return or(t) ? ir(t) : nr(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!gr(e) || (r = ir(e)).type !== t)
            throw new Ar("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    },
    Ir = S,
    Pr = i,
    jr = D,
    kr = zt,
    Lr = o,
    Cr = Ze.CONFIGURABLE,
    Ur = ar,
    Mr = Rr.enforce,
    Fr = Rr.get,
    Br = String,
    _r = Object.defineProperty,
    Dr = Ir("".slice),
    zr = Ir("".replace),
    Nr = Ir([].join),
    qr =
      Lr &&
      !Pr(function () {
        return 8 !== _r(function () {}, "length", { value: 8 }).length;
      }),
    Hr = String(String).split("String"),
    Wr = (Ve.exports = function (t, e, r) {
      "Symbol(" === Dr(Br(e), 0, 7) &&
        (e = "[" + zr(Br(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
        r && r.getter && (e = "get " + e),
        r && r.setter && (e = "set " + e),
        (!kr(t, "name") || (Cr && t.name !== e)) &&
          (Lr ? _r(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
        qr &&
          r &&
          kr(r, "arity") &&
          t.length !== r.arity &&
          _r(t, "length", { value: r.arity });
      try {
        r && kr(r, "constructor") && r.constructor
          ? Lr && _r(t, "prototype", { writable: !1 })
          : t.prototype && (t.prototype = void 0);
      } catch (i) {}
      var n = Mr(t);
      return (
        kr(n, "source") || (n.source = Nr(Hr, "string" == typeof e ? e : "")), t
      );
    });
  Function.prototype.toString = Wr(function () {
    return (jr(this) && Fr(this).source) || Ur(this);
  }, "toString");
  var $r = Ve.exports,
    Gr = D,
    Vr = Re,
    Yr = $r,
    Jr = Rt,
    Kr = function (t, e, r, n) {
      n || (n = {});
      var i = n.enumerable,
        o = void 0 !== n.name ? n.name : e;
      if ((Gr(r) && Yr(r, o, n), n.global)) i ? (t[e] = r) : Jr(e, r);
      else {
        try {
          n.unsafe ? t[e] && (i = !0) : delete t[e];
        } catch (a) {}
        i
          ? (t[e] = r)
          : Vr.f(t, e, {
              value: r,
              enumerable: !1,
              configurable: !n.nonConfigurable,
              writable: !n.nonWritable,
            });
      }
      return t;
    },
    Qr = {},
    Xr = Math.ceil,
    Zr = Math.floor,
    tn =
      Math.trunc ||
      function (t) {
        var e = +t;
        return (e > 0 ? Zr : Xr)(e);
      },
    en = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : tn(e);
    },
    rn = en,
    nn = Math.max,
    on = Math.min,
    an = function (t, e) {
      var r = rn(t);
      return r < 0 ? nn(r + e, 0) : on(r, e);
    },
    un = en,
    cn = Math.min,
    sn = function (t) {
      var e = un(t);
      return e > 0 ? cn(e, 9007199254740991) : 0;
    },
    fn = sn,
    hn = function (t) {
      return fn(t.length);
    },
    ln = B,
    pn = an,
    vn = hn,
    dn = function (t) {
      return function (e, r, n) {
        var i = ln(e),
          o = vn(i);
        if (0 === o) return !t && -1;
        var a,
          u = pn(n, o);
        if (t && r != r) {
          for (; o > u; ) if ((a = i[u++]) != a) return !0;
        } else
          for (; o > u; u++)
            if ((t || u in i) && i[u] === r) return t || u || 0;
        return !t && -1;
      };
    },
    gn = { includes: dn(!0), indexOf: dn(!1) },
    yn = zt,
    mn = B,
    wn = gn.indexOf,
    bn = pr,
    Sn = S([].push),
    xn = function (t, e) {
      var r,
        n = mn(t),
        i = 0,
        o = [];
      for (r in n) !yn(bn, r) && yn(n, r) && Sn(o, r);
      for (; e.length > i; ) yn(n, (r = e[i++])) && (~wn(o, r) || Sn(o, r));
      return o;
    },
    An = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    En = xn,
    On = An.concat("length", "prototype");
  Qr.f =
    Object.getOwnPropertyNames ||
    function (t) {
      return En(t, On);
    };
  var Tn = {};
  Tn.f = Object.getOwnPropertySymbols;
  var Rn = W,
    In = Qr,
    Pn = Tn,
    jn = Le,
    kn = S([].concat),
    Ln =
      Rn("Reflect", "ownKeys") ||
      function (t) {
        var e = In.f(jn(t)),
          r = Pn.f;
        return r ? kn(e, r(t)) : e;
      },
    Cn = zt,
    Un = Ln,
    Mn = n,
    Fn = Re,
    Bn = function (t, e, r) {
      for (var n = Un(e), i = Fn.f, o = Mn.f, a = 0; a < n.length; a++) {
        var u = n[a];
        Cn(t, u) || (r && Cn(r, u)) || i(t, u, o(e, u));
      }
    },
    _n = i,
    Dn = D,
    zn = /#|\.prototype\./,
    Nn = function (t, e) {
      var r = Hn[qn(t)];
      return r === $n || (r !== Wn && (Dn(e) ? _n(e) : !!e));
    },
    qn = (Nn.normalize = function (t) {
      return String(t).replace(zn, ".").toLowerCase();
    }),
    Hn = (Nn.data = {}),
    Wn = (Nn.NATIVE = "N"),
    $n = (Nn.POLYFILL = "P"),
    Gn = Nn,
    Vn = r,
    Yn = n.f,
    Jn = Ge,
    Kn = Kr,
    Qn = Rt,
    Xn = Bn,
    Zn = Gn,
    ti = function (t, e) {
      var r,
        n,
        i,
        o,
        a,
        u = t.target,
        c = t.global,
        s = t.stat;
      if ((r = c ? Vn : s ? Vn[u] || Qn(u, {}) : Vn[u] && Vn[u].prototype))
        for (n in e) {
          if (
            ((o = e[n]),
            (i = t.dontCallGetSet ? (a = Yn(r, n)) && a.value : r[n]),
            !Zn(c ? n : u + (s ? "." : "#") + n, t.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            Xn(o, i);
          }
          (t.sham || (i && i.sham)) && Jn(o, "sham", !0), Kn(r, n, o, t);
        }
    },
    ei = {};
  ei[te("toStringTag")] = "z";
  var ri = "[object z]" === String(ei),
    ni = ri,
    ii = D,
    oi = O,
    ai = te("toStringTag"),
    ui = Object,
    ci =
      "Arguments" ===
      oi(
        (function () {
          return arguments;
        })()
      ),
    si = ni
      ? oi
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
              ? "Null"
              : "string" ==
                  typeof (r = (function (t, e) {
                    try {
                      return t[e];
                    } catch (r) {}
                  })((e = ui(t)), ai))
                ? r
                : ci
                  ? oi(e)
                  : "Object" === (n = oi(e)) && ii(e.callee)
                    ? "Arguments"
                    : n;
        },
    fi = si,
    hi = String,
    li = function (t) {
      if ("Symbol" === fi(t))
        throw new TypeError("Cannot convert a Symbol value to a string");
      return hi(t);
    },
    pi = {},
    vi = xn,
    di = An,
    gi =
      Object.keys ||
      function (t) {
        return vi(t, di);
      },
    yi = o,
    mi = Ie,
    wi = Re,
    bi = Le,
    Si = B,
    xi = gi;
  pi.f =
    yi && !mi
      ? Object.defineProperties
      : function (t, e) {
          bi(t);
          for (var r, n = Si(e), i = xi(e), o = i.length, a = 0; o > a; )
            wi.f(t, (r = i[a++]), n[r]);
          return t;
        };
  var Ai,
    Ei = W("document", "documentElement"),
    Oi = Le,
    Ti = pi,
    Ri = An,
    Ii = pr,
    Pi = Ei,
    ji = de,
    ki = "prototype",
    Li = "script",
    Ci = lr("IE_PROTO"),
    Ui = function () {},
    Mi = function (t) {
      return "<" + Li + ">" + t + "</" + Li + ">";
    },
    Fi = function (t) {
      t.write(Mi("")), t.close();
      var e = t.parentWindow.Object;
      return (t = null), e;
    },
    Bi = function () {
      try {
        Ai = new ActiveXObject("htmlfile");
      } catch (i) {}
      var t, e, r;
      Bi =
        "undefined" != typeof document
          ? document.domain && Ai
            ? Fi(Ai)
            : ((e = ji("iframe")),
              (r = "java" + Li + ":"),
              (e.style.display = "none"),
              Pi.appendChild(e),
              (e.src = String(r)),
              (t = e.contentWindow.document).open(),
              t.write(Mi("document.F=Object")),
              t.close(),
              t.F)
          : Fi(Ai);
      for (var n = Ri.length; n--; ) delete Bi[ki][Ri[n]];
      return Bi();
    };
  Ii[Ci] = !0;
  var _i =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((Ui[ki] = Oi(t)), (r = new Ui()), (Ui[ki] = null), (r[Ci] = t))
            : (r = Bi()),
          void 0 === e ? r : Ti.f(r, e)
        );
      },
    Di = {},
    zi = S([].slice),
    Ni = O,
    qi = B,
    Hi = Qr.f,
    Wi = zi,
    $i =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [];
  Di.f = function (t) {
    return $i && "Window" === Ni(t)
      ? (function (t) {
          try {
            return Hi(t);
          } catch (e) {
            return Wi($i);
          }
        })(t)
      : Hi(qi(t));
  };
  var Gi = $r,
    Vi = Re,
    Yi = function (t, e, r) {
      return (
        r.get && Gi(r.get, e, { getter: !0 }),
        r.set && Gi(r.set, e, { setter: !0 }),
        Vi.f(t, e, r)
      );
    },
    Ji = {},
    Ki = te;
  Ji.f = Ki;
  var Qi = r,
    Xi = zt,
    Zi = Ji,
    to = Re.f,
    eo = function (t) {
      var e = Qi.Symbol || (Qi.Symbol = {});
      Xi(e, t) || to(e, t, { value: Zi.f(t) });
    },
    ro = s,
    no = W,
    io = te,
    oo = Kr,
    ao = function () {
      var t = no("Symbol"),
        e = t && t.prototype,
        r = e && e.valueOf,
        n = io("toPrimitive");
      e &&
        !e[n] &&
        oo(
          e,
          n,
          function (t) {
            return ro(r, this);
          },
          { arity: 1 }
        );
    },
    uo = Re.f,
    co = zt,
    so = te("toStringTag"),
    fo = function (t, e, r) {
      t && !r && (t = t.prototype),
        t && !co(t, so) && uo(t, so, { configurable: !0, value: e });
    },
    ho = O,
    lo = S,
    po = function (t) {
      if ("Function" === ho(t)) return lo(t);
    },
    vo = dt,
    go = a,
    yo = po(po.bind),
    mo = function (t, e) {
      return (
        vo(t),
        void 0 === e
          ? t
          : go
            ? yo(t, e)
            : function () {
                return t.apply(e, arguments);
              }
      );
    },
    wo = O,
    bo =
      Array.isArray ||
      function (t) {
        return "Array" === wo(t);
      },
    So = S,
    xo = i,
    Ao = D,
    Eo = si,
    Oo = ar,
    To = function () {},
    Ro = W("Reflect", "construct"),
    Io = /^\s*(?:class|function)\b/,
    Po = So(Io.exec),
    jo = !Io.test(To),
    ko = function (t) {
      if (!Ao(t)) return !1;
      try {
        return Ro(To, [], t), !0;
      } catch (e) {
        return !1;
      }
    },
    Lo = function (t) {
      if (!Ao(t)) return !1;
      switch (Eo(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return jo || !!Po(Io, Oo(t));
      } catch (e) {
        return !0;
      }
    };
  Lo.sham = !0;
  var Co =
      !Ro ||
      xo(function () {
        var t;
        return (
          ko(ko.call) ||
          !ko(Object) ||
          !ko(function () {
            t = !0;
          }) ||
          t
        );
      })
        ? Lo
        : ko,
    Uo = bo,
    Mo = Co,
    Fo = N,
    Bo = te("species"),
    _o = Array,
    Do = function (t) {
      var e;
      return (
        Uo(t) &&
          ((e = t.constructor),
          ((Mo(e) && (e === _o || Uo(e.prototype))) ||
            (Fo(e) && null === (e = e[Bo]))) &&
            (e = void 0)),
        void 0 === e ? _o : e
      );
    },
    zo = function (t, e) {
      return new (Do(t))(0 === e ? 0 : e);
    },
    No = mo,
    qo = j,
    Ho = Bt,
    Wo = hn,
    $o = zo,
    Go = S([].push),
    Vo = function (t) {
      var e = 1 === t,
        r = 2 === t,
        n = 3 === t,
        i = 4 === t,
        o = 6 === t,
        a = 7 === t,
        u = 5 === t || o;
      return function (c, s, f, h) {
        for (
          var l,
            p,
            v = Ho(c),
            d = qo(v),
            g = Wo(d),
            y = No(s, f),
            m = 0,
            w = h || $o,
            b = e ? w(c, g) : r || a ? w(c, 0) : void 0;
          g > m;
          m++
        )
          if ((u || m in d) && ((p = y((l = d[m]), m, v)), t))
            if (e) b[m] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return l;
                case 6:
                  return m;
                case 2:
                  Go(b, l);
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  Go(b, l);
              }
        return o ? -1 : n || i ? i : b;
      };
    },
    Yo = {
      forEach: Vo(0),
      map: Vo(1),
      filter: Vo(2),
      some: Vo(3),
      every: Vo(4),
      find: Vo(5),
      findIndex: Vo(6),
      filterReject: Vo(7),
    },
    Jo = ti,
    Ko = r,
    Qo = s,
    Xo = S,
    Zo = o,
    ta = nt,
    ea = i,
    ra = zt,
    na = $,
    ia = Le,
    oa = B,
    aa = he,
    ua = li,
    ca = g,
    sa = _i,
    fa = gi,
    ha = Qr,
    la = Di,
    pa = Tn,
    va = n,
    da = Re,
    ga = pi,
    ya = f,
    ma = Kr,
    wa = Yi,
    ba = Ut,
    Sa = pr,
    xa = $t,
    Aa = te,
    Ea = Ji,
    Oa = eo,
    Ta = ao,
    Ra = fo,
    Ia = Rr,
    Pa = Yo.forEach,
    ja = lr("hidden"),
    ka = "Symbol",
    La = "prototype",
    Ca = Ia.set,
    Ua = Ia.getterFor(ka),
    Ma = Object[La],
    Fa = Ko.Symbol,
    Ba = Fa && Fa[La],
    _a = Ko.RangeError,
    Da = Ko.TypeError,
    za = Ko.QObject,
    Na = va.f,
    qa = da.f,
    Ha = la.f,
    Wa = ya.f,
    $a = Xo([].push),
    Ga = ba("symbols"),
    Va = ba("op-symbols"),
    Ya = ba("wks"),
    Ja = !za || !za[La] || !za[La].findChild,
    Ka = function (t, e, r) {
      var n = Na(Ma, e);
      n && delete Ma[e], qa(t, e, r), n && t !== Ma && qa(Ma, e, n);
    },
    Qa =
      Zo &&
      ea(function () {
        return (
          7 !==
          sa(
            qa({}, "a", {
              get: function () {
                return qa(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? Ka
        : qa,
    Xa = function (t, e) {
      var r = (Ga[t] = sa(Ba));
      return (
        Ca(r, { type: ka, tag: t, description: e }),
        Zo || (r.description = e),
        r
      );
    },
    Za = function (t, e, r) {
      t === Ma && Za(Va, e, r), ia(t);
      var n = aa(e);
      return (
        ia(r),
        ra(Ga, n)
          ? (r.enumerable
              ? (ra(t, ja) && t[ja][n] && (t[ja][n] = !1),
                (r = sa(r, { enumerable: ca(0, !1) })))
              : (ra(t, ja) || qa(t, ja, ca(1, sa(null))), (t[ja][n] = !0)),
            Qa(t, n, r))
          : qa(t, n, r)
      );
    },
    tu = function (t, e) {
      ia(t);
      var r = oa(e),
        n = fa(r).concat(iu(r));
      return (
        Pa(n, function (e) {
          (Zo && !Qo(eu, r, e)) || Za(t, e, r[e]);
        }),
        t
      );
    },
    eu = function (t) {
      var e = aa(t),
        r = Qo(Wa, this, e);
      return (
        !(this === Ma && ra(Ga, e) && !ra(Va, e)) &&
        (!(r || !ra(this, e) || !ra(Ga, e) || (ra(this, ja) && this[ja][e])) ||
          r)
      );
    },
    ru = function (t, e) {
      var r = oa(t),
        n = aa(e);
      if (r !== Ma || !ra(Ga, n) || ra(Va, n)) {
        var i = Na(r, n);
        return (
          !i || !ra(Ga, n) || (ra(r, ja) && r[ja][n]) || (i.enumerable = !0), i
        );
      }
    },
    nu = function (t) {
      var e = Ha(oa(t)),
        r = [];
      return (
        Pa(e, function (t) {
          ra(Ga, t) || ra(Sa, t) || $a(r, t);
        }),
        r
      );
    },
    iu = function (t) {
      var e = t === Ma,
        r = Ha(e ? Va : oa(t)),
        n = [];
      return (
        Pa(r, function (t) {
          !ra(Ga, t) || (e && !ra(Ma, t)) || $a(n, Ga[t]);
        }),
        n
      );
    };
  ta ||
    ((Fa = function () {
      if (na(Ba, this)) throw new Da("Symbol is not a constructor");
      var t =
          arguments.length && void 0 !== arguments[0]
            ? ua(arguments[0])
            : void 0,
        e = xa(t),
        r = function (t) {
          var n = void 0 === this ? Ko : this;
          n === Ma && Qo(r, Va, t),
            ra(n, ja) && ra(n[ja], e) && (n[ja][e] = !1);
          var i = ca(1, t);
          try {
            Qa(n, e, i);
          } catch (o) {
            if (!(o instanceof _a)) throw o;
            Ka(n, e, i);
          }
        };
      return Zo && Ja && Qa(Ma, e, { configurable: !0, set: r }), Xa(e, t);
    }),
    ma((Ba = Fa[La]), "toString", function () {
      return Ua(this).tag;
    }),
    ma(Fa, "withoutSetter", function (t) {
      return Xa(xa(t), t);
    }),
    (ya.f = eu),
    (da.f = Za),
    (ga.f = tu),
    (va.f = ru),
    (ha.f = la.f = nu),
    (pa.f = iu),
    (Ea.f = function (t) {
      return Xa(Aa(t), t);
    }),
    Zo &&
      (wa(Ba, "description", {
        configurable: !0,
        get: function () {
          return Ua(this).description;
        },
      }),
      ma(Ma, "propertyIsEnumerable", eu, { unsafe: !0 }))),
    Jo(
      { global: !0, constructor: !0, wrap: !0, forced: !ta, sham: !ta },
      { Symbol: Fa }
    ),
    Pa(fa(Ya), function (t) {
      Oa(t);
    }),
    Jo(
      { target: ka, stat: !0, forced: !ta },
      {
        useSetter: function () {
          Ja = !0;
        },
        useSimple: function () {
          Ja = !1;
        },
      }
    ),
    Jo(
      { target: "Object", stat: !0, forced: !ta, sham: !Zo },
      {
        create: function (t, e) {
          return void 0 === e ? sa(t) : tu(sa(t), e);
        },
        defineProperty: Za,
        defineProperties: tu,
        getOwnPropertyDescriptor: ru,
      }
    ),
    Jo(
      { target: "Object", stat: !0, forced: !ta },
      { getOwnPropertyNames: nu }
    ),
    Ta(),
    Ra(Fa, ka),
    (Sa[ja] = !0);
  var ou = nt && !!Symbol.for && !!Symbol.keyFor,
    au = ti,
    uu = W,
    cu = zt,
    su = li,
    fu = Ut,
    hu = ou,
    lu = fu("string-to-symbol-registry"),
    pu = fu("symbol-to-string-registry");
  au(
    { target: "Symbol", stat: !0, forced: !hu },
    {
      for: function (t) {
        var e = su(t);
        if (cu(lu, e)) return lu[e];
        var r = uu("Symbol")(e);
        return (lu[e] = r), (pu[r] = e), r;
      },
    }
  );
  var vu = ti,
    du = zt,
    gu = st,
    yu = ht,
    mu = ou,
    wu = Ut("symbol-to-string-registry");
  vu(
    { target: "Symbol", stat: !0, forced: !mu },
    {
      keyFor: function (t) {
        if (!gu(t)) throw new TypeError(yu(t) + " is not a symbol");
        if (du(wu, t)) return wu[t];
      },
    }
  );
  var bu = a,
    Su = Function.prototype,
    xu = Su.apply,
    Au = Su.call,
    Eu =
      ("object" == typeof Reflect && Reflect.apply) ||
      (bu
        ? Au.bind(xu)
        : function () {
            return Au.apply(xu, arguments);
          }),
    Ou = bo,
    Tu = D,
    Ru = O,
    Iu = li,
    Pu = S([].push),
    ju = ti,
    ku = W,
    Lu = Eu,
    Cu = s,
    Uu = S,
    Mu = i,
    Fu = D,
    Bu = st,
    _u = zi,
    Du = function (t) {
      if (Tu(t)) return t;
      if (Ou(t)) {
        for (var e = t.length, r = [], n = 0; n < e; n++) {
          var i = t[n];
          "string" == typeof i
            ? Pu(r, i)
            : ("number" != typeof i &&
                "Number" !== Ru(i) &&
                "String" !== Ru(i)) ||
              Pu(r, Iu(i));
        }
        var o = r.length,
          a = !0;
        return function (t, e) {
          if (a) return (a = !1), e;
          if (Ou(this)) return e;
          for (var n = 0; n < o; n++) if (r[n] === t) return e;
        };
      }
    },
    zu = nt,
    Nu = String,
    qu = ku("JSON", "stringify"),
    Hu = Uu(/./.exec),
    Wu = Uu("".charAt),
    $u = Uu("".charCodeAt),
    Gu = Uu("".replace),
    Vu = Uu((1).toString),
    Yu = /[\uD800-\uDFFF]/g,
    Ju = /^[\uD800-\uDBFF]$/,
    Ku = /^[\uDC00-\uDFFF]$/,
    Qu =
      !zu ||
      Mu(function () {
        var t = ku("Symbol")("stringify detection");
        return (
          "[null]" !== qu([t]) ||
          "{}" !== qu({ a: t }) ||
          "{}" !== qu(Object(t))
        );
      }),
    Xu = Mu(function () {
      return (
        '"\\udf06\\ud834"' !== qu("\udf06\ud834") ||
        '"\\udead"' !== qu("\udead")
      );
    }),
    Zu = function (t, e) {
      var r = _u(arguments),
        n = Du(e);
      if (Fu(n) || (void 0 !== t && !Bu(t)))
        return (
          (r[1] = function (t, e) {
            if ((Fu(n) && (e = Cu(n, this, Nu(t), e)), !Bu(e))) return e;
          }),
          Lu(qu, null, r)
        );
    },
    tc = function (t, e, r) {
      var n = Wu(r, e - 1),
        i = Wu(r, e + 1);
      return (Hu(Ju, t) && !Hu(Ku, i)) || (Hu(Ku, t) && !Hu(Ju, n))
        ? "\\u" + Vu($u(t, 0), 16)
        : t;
    };
  qu &&
    ju(
      { target: "JSON", stat: !0, arity: 3, forced: Qu || Xu },
      {
        stringify: function (t, e, r) {
          var n = _u(arguments),
            i = Lu(Qu ? Zu : qu, null, n);
          return Xu && "string" == typeof i ? Gu(i, Yu, tc) : i;
        },
      }
    );
  var ec = Tn,
    rc = Bt;
  ti(
    {
      target: "Object",
      stat: !0,
      forced:
        !nt ||
        i(function () {
          ec.f(1);
        }),
    },
    {
      getOwnPropertySymbols: function (t) {
        var e = ec.f;
        return e ? e(rc(t)) : [];
      },
    }
  );
  var nc = ti,
    ic = o,
    oc = S,
    ac = zt,
    uc = D,
    cc = $,
    sc = li,
    fc = Yi,
    hc = Bn,
    lc = r.Symbol,
    pc = lc && lc.prototype;
  if (ic && uc(lc) && (!("description" in pc) || void 0 !== lc().description)) {
    var vc = {},
      dc = function () {
        var t =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : sc(arguments[0]),
          e = cc(pc, this) ? new lc(t) : void 0 === t ? lc() : lc(t);
        return "" === t && (vc[e] = !0), e;
      };
    hc(dc, lc), (dc.prototype = pc), (pc.constructor = dc);
    var gc =
        "Symbol(description detection)" === String(lc("description detection")),
      yc = oc(pc.valueOf),
      mc = oc(pc.toString),
      wc = /^Symbol\((.*)\)[^)]+$/,
      bc = oc("".replace),
      Sc = oc("".slice);
    fc(pc, "description", {
      configurable: !0,
      get: function () {
        var t = yc(this);
        if (ac(vc, t)) return "";
        var e = mc(t),
          r = gc ? Sc(e, 7, -1) : bc(e, wc, "$1");
        return "" === r ? void 0 : r;
      },
    }),
      nc({ global: !0, constructor: !0, forced: !0 }, { Symbol: dc });
  }
  eo("asyncIterator");
  var xc = ao;
  eo("toPrimitive"), xc();
  var Ac = W,
    Ec = fo;
  eo("toStringTag"), Ec(Ac("Symbol"), "Symbol");
  var Oc = S,
    Tc = dt,
    Rc = function (t, e, r) {
      try {
        return Oc(Tc(Object.getOwnPropertyDescriptor(t, e)[r]));
      } catch (n) {}
    },
    Ic = N,
    Pc = function (t) {
      return Ic(t) || null === t;
    },
    jc = String,
    kc = TypeError,
    Lc = Rc,
    Cc = N,
    Uc = U,
    Mc = function (t) {
      if (Pc(t)) return t;
      throw new kc("Can't set " + jc(t) + " as a prototype");
    },
    Fc =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Lc(Object.prototype, "__proto__", "set"))(r, []),
                (e = r instanceof Array);
            } catch (n) {}
            return function (r, n) {
              return (
                Uc(r), Mc(n), Cc(r) ? (e ? t(r, n) : (r.__proto__ = n), r) : r
              );
            };
          })()
        : void 0),
    Bc = Re.f,
    _c = function (t, e, r) {
      r in t ||
        Bc(t, r, {
          configurable: !0,
          get: function () {
            return e[r];
          },
          set: function (t) {
            e[r] = t;
          },
        });
    },
    Dc = D,
    zc = N,
    Nc = Fc,
    qc = function (t, e, r) {
      var n, i;
      return (
        Nc &&
          Dc((n = e.constructor)) &&
          n !== r &&
          zc((i = n.prototype)) &&
          i !== r.prototype &&
          Nc(t, i),
        t
      );
    },
    Hc = li,
    Wc = N,
    $c = Ge,
    Gc = Error,
    Vc = S("".replace),
    Yc = String(new Gc("zxcasd").stack),
    Jc = /\n\s*at [^:]*:[^\n]*/,
    Kc = Jc.test(Yc),
    Qc = g,
    Xc = !i(function () {
      var t = new Error("a");
      return (
        !("stack" in t) ||
        (Object.defineProperty(t, "stack", Qc(1, 7)), 7 !== t.stack)
      );
    }),
    Zc = Ge,
    ts = function (t, e) {
      if (Kc && "string" == typeof t && !Gc.prepareStackTrace)
        for (; e--; ) t = Vc(t, Jc, "");
      return t;
    },
    es = Xc,
    rs = Error.captureStackTrace,
    ns = W,
    is = zt,
    os = Ge,
    as = $,
    us = Fc,
    cs = Bn,
    ss = _c,
    fs = qc,
    hs = function (t, e) {
      return void 0 === t ? (arguments.length < 2 ? "" : e) : Hc(t);
    },
    ls = function (t, e) {
      Wc(e) && "cause" in e && $c(t, "cause", e.cause);
    },
    ps = function (t, e, r, n) {
      es && (rs ? rs(t, e) : Zc(t, "stack", ts(r, n)));
    },
    vs = o,
    ds = ti,
    gs = Eu,
    ys = function (t, e, r, n) {
      var i = "stackTraceLimit",
        o = n ? 2 : 1,
        a = t.split("."),
        u = a[a.length - 1],
        c = ns.apply(null, a);
      if (c) {
        var s = c.prototype;
        if ((is(s, "cause") && delete s.cause, !r)) return c;
        var f = ns("Error"),
          h = e(function (t, e) {
            var r = hs(n ? e : t, void 0),
              i = n ? new c(t) : new c();
            return (
              void 0 !== r && os(i, "message", r),
              ps(i, h, i.stack, 2),
              this && as(s, this) && fs(i, this, h),
              arguments.length > o && ls(i, arguments[o]),
              i
            );
          });
        (h.prototype = s),
          "Error" !== u
            ? us
              ? us(h, f)
              : cs(h, f, { name: !0 })
            : vs && i in c && (ss(h, c, i), ss(h, c, "prepareStackTrace")),
          cs(h, c);
        try {
          s.name !== u && os(s, "name", u), (s.constructor = h);
        } catch (l) {}
        return h;
      }
    },
    ms = "WebAssembly",
    ws = r[ms],
    bs = 7 !== new Error("e", { cause: 7 }).cause,
    Ss = function (t, e) {
      var r = {};
      (r[t] = ys(t, e, bs)),
        ds({ global: !0, constructor: !0, arity: 1, forced: bs }, r);
    },
    xs = function (t, e) {
      if (ws && ws[t]) {
        var r = {};
        (r[t] = ys(ms + "." + t, e, bs)),
          ds(
            { target: ms, stat: !0, constructor: !0, arity: 1, forced: bs },
            r
          );
      }
    };
  Ss("Error", function (t) {
    return function (e) {
      return gs(t, this, arguments);
    };
  }),
    Ss("EvalError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    Ss("RangeError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    Ss("ReferenceError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    Ss("SyntaxError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    Ss("TypeError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    Ss("URIError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    xs("CompileError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    xs("LinkError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    }),
    xs("RuntimeError", function (t) {
      return function (e) {
        return gs(t, this, arguments);
      };
    });
  var As = te,
    Es = _i,
    Os = Re.f,
    Ts = As("unscopables"),
    Rs = Array.prototype;
  void 0 === Rs[Ts] && Os(Rs, Ts, { configurable: !0, value: Es(null) });
  var Is,
    Ps,
    js,
    ks = function (t) {
      Rs[Ts][t] = !0;
    },
    Ls = {},
    Cs = !i(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Us = zt,
    Ms = D,
    Fs = Bt,
    Bs = Cs,
    _s = lr("IE_PROTO"),
    Ds = Object,
    zs = Ds.prototype,
    Ns = Bs
      ? Ds.getPrototypeOf
      : function (t) {
          var e = Fs(t);
          if (Us(e, _s)) return e[_s];
          var r = e.constructor;
          return Ms(r) && e instanceof r
            ? r.prototype
            : e instanceof Ds
              ? zs
              : null;
        },
    qs = i,
    Hs = D,
    Ws = N,
    $s = Ns,
    Gs = Kr,
    Vs = te("iterator"),
    Ys = !1;
  [].keys &&
    ("next" in (js = [].keys())
      ? (Ps = $s($s(js))) !== Object.prototype && (Is = Ps)
      : (Ys = !0));
  var Js =
    !Ws(Is) ||
    qs(function () {
      var t = {};
      return Is[Vs].call(t) !== t;
    });
  Js && (Is = {}),
    Hs(Is[Vs]) ||
      Gs(Is, Vs, function () {
        return this;
      });
  var Ks = { IteratorPrototype: Is, BUGGY_SAFARI_ITERATORS: Ys },
    Qs = Ks.IteratorPrototype,
    Xs = _i,
    Zs = g,
    tf = fo,
    ef = Ls,
    rf = function () {
      return this;
    },
    nf = function (t, e, r, n) {
      var i = e + " Iterator";
      return (
        (t.prototype = Xs(Qs, { next: Zs(+!n, r) })),
        tf(t, i, !1),
        (ef[i] = rf),
        t
      );
    },
    of = ti,
    af = s,
    uf = D,
    cf = nf,
    sf = Ns,
    ff = Fc,
    hf = fo,
    lf = Ge,
    pf = Kr,
    vf = Ls,
    df = Ze.PROPER,
    gf = Ze.CONFIGURABLE,
    yf = Ks.IteratorPrototype,
    mf = Ks.BUGGY_SAFARI_ITERATORS,
    wf = te("iterator"),
    bf = "keys",
    Sf = "values",
    xf = "entries",
    Af = function () {
      return this;
    },
    Ef = function (t, e, r, n, i, o, a) {
      cf(r, e, n);
      var u,
        c,
        s,
        f = function (t) {
          if (t === i && d) return d;
          if (!mf && t && t in p) return p[t];
          switch (t) {
            case bf:
            case Sf:
            case xf:
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        h = e + " Iterator",
        l = !1,
        p = t.prototype,
        v = p[wf] || p["@@iterator"] || (i && p[i]),
        d = (!mf && v) || f(i),
        g = ("Array" === e && p.entries) || v;
      if (
        (g &&
          (u = sf(g.call(new t()))) !== Object.prototype &&
          u.next &&
          (sf(u) !== yf && (ff ? ff(u, yf) : uf(u[wf]) || pf(u, wf, Af)),
          hf(u, h, !0)),
        df &&
          i === Sf &&
          v &&
          v.name !== Sf &&
          (gf
            ? lf(p, "name", Sf)
            : ((l = !0),
              (d = function () {
                return af(v, this);
              }))),
        i)
      )
        if (((c = { values: f(Sf), keys: o ? d : f(bf), entries: f(xf) }), a))
          for (s in c) (mf || l || !(s in p)) && pf(p, s, c[s]);
        else of({ target: e, proto: !0, forced: mf || l }, c);
      return p[wf] !== d && pf(p, wf, d, { name: i }), (vf[e] = d), c;
    },
    Of = function (t, e) {
      return { value: t, done: e };
    },
    Tf = B,
    Rf = ks,
    If = Ls,
    Pf = Rr,
    jf = Re.f,
    kf = Ef,
    Lf = Of,
    Cf = o,
    Uf = "Array Iterator",
    Mf = Pf.set,
    Ff = Pf.getterFor(Uf),
    Bf = kf(
      Array,
      "Array",
      function (t, e) {
        Mf(this, { type: Uf, target: Tf(t), index: 0, kind: e });
      },
      function () {
        var t = Ff(this),
          e = t.target,
          r = t.index++;
        if (!e || r >= e.length) return (t.target = void 0), Lf(void 0, !0);
        switch (t.kind) {
          case "keys":
            return Lf(r, !1);
          case "values":
            return Lf(e[r], !1);
        }
        return Lf([r, e[r]], !1);
      },
      "values"
    ),
    _f = (If.Arguments = If.Array);
  if ((Rf("keys"), Rf("values"), Rf("entries"), Cf && "values" !== _f.name))
    try {
      jf(_f, "name", { value: "values" });
    } catch (_q) {}
  var Df = o,
    zf = bo,
    Nf = TypeError,
    qf = Object.getOwnPropertyDescriptor,
    Hf =
      Df &&
      !(function () {
        if (void 0 !== this) return !0;
        try {
          Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (_q) {
          return _q instanceof TypeError;
        }
      })()
        ? function (t, e) {
            if (zf(t) && !qf(t, "length").writable)
              throw new Nf("Cannot set read only .length");
            return (t.length = e);
          }
        : function (t, e) {
            return (t.length = e);
          },
    Wf = TypeError,
    $f = function (t) {
      if (t > 9007199254740991) throw Wf("Maximum allowed index exceeded");
      return t;
    },
    Gf = Bt,
    Vf = hn,
    Yf = Hf,
    Jf = $f;
  ti(
    {
      target: "Array",
      proto: !0,
      arity: 1,
      forced:
        i(function () {
          return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
        }) ||
        !(function () {
          try {
            Object.defineProperty([], "length", { writable: !1 }).push();
          } catch (_q) {
            return _q instanceof TypeError;
          }
        })(),
    },
    {
      push: function (t) {
        var e = Gf(this),
          r = Vf(e),
          n = arguments.length;
        Jf(r + n);
        for (var i = 0; i < n; i++) (e[r] = arguments[i]), r++;
        return Yf(e, r), r;
      },
    }
  );
  var Kf = o,
    Qf = Re,
    Xf = g,
    Zf = function (t, e, r) {
      Kf ? Qf.f(t, e, Xf(0, r)) : (t[e] = r);
    },
    th = i,
    eh = Z,
    rh = te("species"),
    nh = function (t) {
      return (
        eh >= 51 ||
        !th(function () {
          var e = [];
          return (
            ((e.constructor = {})[rh] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    ih = ti,
    oh = bo,
    ah = Co,
    uh = N,
    ch = an,
    sh = hn,
    fh = B,
    hh = Zf,
    lh = te,
    ph = zi,
    vh = nh("slice"),
    dh = lh("species"),
    gh = Array,
    yh = Math.max;
  ih(
    { target: "Array", proto: !0, forced: !vh },
    {
      slice: function (t, e) {
        var r,
          n,
          i,
          o = fh(this),
          a = sh(o),
          u = ch(t, a),
          c = ch(void 0 === e ? a : e, a);
        if (
          oh(o) &&
          ((r = o.constructor),
          ((ah(r) && (r === gh || oh(r.prototype))) ||
            (uh(r) && null === (r = r[dh]))) &&
            (r = void 0),
          r === gh || void 0 === r)
        )
          return ph(o, u, c);
        for (
          n = new (void 0 === r ? gh : r)(yh(c - u, 0)), i = 0;
          u < c;
          u++, i++
        )
          u in o && hh(n, i, o[u]);
        return (n.length = i), n;
      },
    }
  );
  var mh = Le,
    wh = At,
    bh = TypeError,
    Sh = zt,
    xh = Kr,
    Ah = function (t) {
      if ((mh(this), "string" === t || "default" === t)) t = "string";
      else if ("number" !== t) throw new bh("Incorrect hint");
      return wh(this, t);
    },
    Eh = te("toPrimitive"),
    Oh = Date.prototype;
  Sh(Oh, Eh) || xh(Oh, Eh, Ah), fo(r.JSON, "JSON", !0), fo(Math, "Math", !0);
  var Th = Bt,
    Rh = Ns,
    Ih = Cs;
  ti(
    {
      target: "Object",
      stat: !0,
      forced: i(function () {
        Rh(1);
      }),
      sham: !Ih,
    },
    {
      getPrototypeOf: function (t) {
        return Rh(Th(t));
      },
    }
  );
  var Ph = si,
    jh = ri
      ? {}.toString
      : function () {
          return "[object " + Ph(this) + "]";
        };
  ri || Kr(Object.prototype, "toString", jh, { unsafe: !0 });
  var kh,
    Lh,
    Ch,
    Uh,
    Mh = "process" === O(r.process),
    Fh = W,
    Bh = Yi,
    _h = o,
    Dh = te("species"),
    zh = function (t) {
      var e = Fh(t);
      _h &&
        e &&
        !e[Dh] &&
        Bh(e, Dh, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Nh = $,
    qh = TypeError,
    Hh = function (t, e) {
      if (Nh(e, t)) return t;
      throw new qh("Incorrect invocation");
    },
    Wh = Co,
    $h = ht,
    Gh = TypeError,
    Vh = function (t) {
      if (Wh(t)) return t;
      throw new Gh($h(t) + " is not a constructor");
    },
    Yh = Le,
    Jh = Vh,
    Kh = k,
    Qh = te("species"),
    Xh = function (t, e) {
      var r,
        n = Yh(t).constructor;
      return void 0 === n || Kh((r = Yh(n)[Qh])) ? e : Jh(r);
    },
    Zh = TypeError,
    tl = function (t, e) {
      if (t < e) throw new Zh("Not enough arguments");
      return t;
    },
    el = /(?:ipad|iphone|ipod).*applewebkit/i.test(G),
    rl = r,
    nl = Eu,
    il = mo,
    ol = D,
    al = zt,
    ul = i,
    cl = Ei,
    sl = zi,
    fl = de,
    hl = tl,
    ll = el,
    pl = Mh,
    vl = rl.setImmediate,
    dl = rl.clearImmediate,
    gl = rl.process,
    yl = rl.Dispatch,
    ml = rl.Function,
    wl = rl.MessageChannel,
    bl = rl.String,
    Sl = 0,
    xl = {},
    Al = "onreadystatechange";
  ul(function () {
    kh = rl.location;
  });
  var El = function (t) {
      if (al(xl, t)) {
        var e = xl[t];
        delete xl[t], e();
      }
    },
    Ol = function (t) {
      return function () {
        El(t);
      };
    },
    Tl = function (t) {
      El(t.data);
    },
    Rl = function (t) {
      rl.postMessage(bl(t), kh.protocol + "//" + kh.host);
    };
  (vl && dl) ||
    ((vl = function (t) {
      hl(arguments.length, 1);
      var e = ol(t) ? t : ml(t),
        r = sl(arguments, 1);
      return (
        (xl[++Sl] = function () {
          nl(e, void 0, r);
        }),
        Lh(Sl),
        Sl
      );
    }),
    (dl = function (t) {
      delete xl[t];
    }),
    pl
      ? (Lh = function (t) {
          gl.nextTick(Ol(t));
        })
      : yl && yl.now
        ? (Lh = function (t) {
            yl.now(Ol(t));
          })
        : wl && !ll
          ? ((Uh = (Ch = new wl()).port2),
            (Ch.port1.onmessage = Tl),
            (Lh = il(Uh.postMessage, Uh)))
          : rl.addEventListener &&
              ol(rl.postMessage) &&
              !rl.importScripts &&
              kh &&
              "file:" !== kh.protocol &&
              !ul(Rl)
            ? ((Lh = Rl), rl.addEventListener("message", Tl, !1))
            : (Lh =
                Al in fl("script")
                  ? function (t) {
                      cl.appendChild(fl("script"))[Al] = function () {
                        cl.removeChild(this), El(t);
                      };
                    }
                  : function (t) {
                      setTimeout(Ol(t), 0);
                    }));
  var Il = { set: vl, clear: dl },
    Pl = r,
    jl = o,
    kl = Object.getOwnPropertyDescriptor,
    Ll = function (t) {
      if (!jl) return Pl[t];
      var e = kl(Pl, t);
      return e && e.value;
    },
    Cl = function () {
      (this.head = null), (this.tail = null);
    };
  Cl.prototype = {
    add: function (t) {
      var e = { item: t, next: null },
        r = this.tail;
      r ? (r.next = e) : (this.head = e), (this.tail = e);
    },
    get: function () {
      var t = this.head;
      if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
    },
  };
  var Ul,
    Ml,
    Fl,
    Bl,
    _l,
    Dl = Cl,
    zl = /ipad|iphone|ipod/i.test(G) && "undefined" != typeof Pebble,
    Nl = /web0s(?!.*chrome)/i.test(G),
    ql = r,
    Hl = Ll,
    Wl = mo,
    $l = Il.set,
    Gl = Dl,
    Vl = el,
    Yl = zl,
    Jl = Nl,
    Kl = Mh,
    Ql = ql.MutationObserver || ql.WebKitMutationObserver,
    Xl = ql.document,
    Zl = ql.process,
    tp = ql.Promise,
    ep = Hl("queueMicrotask");
  if (!ep) {
    var rp = new Gl(),
      np = function () {
        var t, e;
        for (Kl && (t = Zl.domain) && t.exit(); (e = rp.get()); )
          try {
            e();
          } catch (_q) {
            throw (rp.head && Ul(), _q);
          }
        t && t.enter();
      };
    Vl || Kl || Jl || !Ql || !Xl
      ? !Yl && tp && tp.resolve
        ? (((Bl = tp.resolve(void 0)).constructor = tp),
          (_l = Wl(Bl.then, Bl)),
          (Ul = function () {
            _l(np);
          }))
        : Kl
          ? (Ul = function () {
              Zl.nextTick(np);
            })
          : (($l = Wl($l, ql)),
            (Ul = function () {
              $l(np);
            }))
      : ((Ml = !0),
        (Fl = Xl.createTextNode("")),
        new Ql(np).observe(Fl, { characterData: !0 }),
        (Ul = function () {
          Fl.data = Ml = !Ml;
        })),
      (ep = function (t) {
        rp.head || Ul(), rp.add(t);
      });
  }
  var ip = ep,
    op = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (_q) {
        return { error: !0, value: _q };
      }
    },
    ap = r.Promise,
    up = "object" == typeof Deno && Deno && "object" == typeof Deno.version,
    cp = !up && !Mh && "object" == typeof window && "object" == typeof document,
    sp = r,
    fp = ap,
    hp = D,
    lp = Gn,
    pp = ar,
    vp = te,
    dp = cp,
    gp = up,
    yp = Z;
  fp && fp.prototype;
  var mp = vp("species"),
    wp = !1,
    bp = hp(sp.PromiseRejectionEvent),
    Sp = lp("Promise", function () {
      var t = pp(fp),
        e = t !== String(fp);
      if (!e && 66 === yp) return !0;
      if (!yp || yp < 51 || !/native code/.test(t)) {
        var r = new fp(function (t) {
            t(1);
          }),
          n = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        if (
          (((r.constructor = {})[mp] = n),
          !(wp = r.then(function () {}) instanceof n))
        )
          return !0;
      }
      return !e && (dp || gp) && !bp;
    }),
    xp = { CONSTRUCTOR: Sp, REJECTION_EVENT: bp, SUBCLASSING: wp },
    Ap = {},
    Ep = dt,
    Op = TypeError,
    Tp = function (t) {
      var e, r;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r)
          throw new Op("Bad Promise constructor");
        (e = t), (r = n);
      })),
        (this.resolve = Ep(e)),
        (this.reject = Ep(r));
    };
  Ap.f = function (t) {
    return new Tp(t);
  };
  var Rp,
    Ip,
    Pp,
    jp = ti,
    kp = Mh,
    Lp = r,
    Cp = s,
    Up = Kr,
    Mp = Fc,
    Fp = fo,
    Bp = zh,
    _p = dt,
    Dp = D,
    zp = N,
    Np = Hh,
    qp = Xh,
    Hp = Il.set,
    Wp = ip,
    $p = function (t, e) {
      try {
        1 === arguments.length ? console.error(t) : console.error(t, e);
      } catch (_q) {}
    },
    Gp = op,
    Vp = Dl,
    Yp = Rr,
    Jp = ap,
    Kp = Ap,
    Qp = "Promise",
    Xp = xp.CONSTRUCTOR,
    Zp = xp.REJECTION_EVENT,
    tv = xp.SUBCLASSING,
    ev = Yp.getterFor(Qp),
    rv = Yp.set,
    nv = Jp && Jp.prototype,
    iv = Jp,
    ov = nv,
    av = Lp.TypeError,
    uv = Lp.document,
    cv = Lp.process,
    sv = Kp.f,
    fv = sv,
    hv = !!(uv && uv.createEvent && Lp.dispatchEvent),
    lv = "unhandledrejection",
    pv = function (t) {
      var e;
      return !(!zp(t) || !Dp((e = t.then))) && e;
    },
    vv = function (t, e) {
      var r,
        n,
        i,
        o = e.value,
        a = 1 === e.state,
        u = a ? t.ok : t.fail,
        c = t.resolve,
        s = t.reject,
        f = t.domain;
      try {
        u
          ? (a || (2 === e.rejection && wv(e), (e.rejection = 1)),
            !0 === u
              ? (r = o)
              : (f && f.enter(), (r = u(o)), f && (f.exit(), (i = !0))),
            r === t.promise
              ? s(new av("Promise-chain cycle"))
              : (n = pv(r))
                ? Cp(n, r, c, s)
                : c(r))
          : s(o);
      } catch (_q) {
        f && !i && f.exit(), s(_q);
      }
    },
    dv = function (t, e) {
      t.notified ||
        ((t.notified = !0),
        Wp(function () {
          for (var r, n = t.reactions; (r = n.get()); ) vv(r, t);
          (t.notified = !1), e && !t.rejection && yv(t);
        }));
    },
    gv = function (t, e, r) {
      var n, i;
      hv
        ? (((n = uv.createEvent("Event")).promise = e),
          (n.reason = r),
          n.initEvent(t, !1, !0),
          Lp.dispatchEvent(n))
        : (n = { promise: e, reason: r }),
        !Zp && (i = Lp["on" + t])
          ? i(n)
          : t === lv && $p("Unhandled promise rejection", r);
    },
    yv = function (t) {
      Cp(Hp, Lp, function () {
        var e,
          r = t.facade,
          n = t.value;
        if (
          mv(t) &&
          ((e = Gp(function () {
            kp ? cv.emit("unhandledRejection", n, r) : gv(lv, r, n);
          })),
          (t.rejection = kp || mv(t) ? 2 : 1),
          e.error)
        )
          throw e.value;
      });
    },
    mv = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    wv = function (t) {
      Cp(Hp, Lp, function () {
        var e = t.facade;
        kp
          ? cv.emit("rejectionHandled", e)
          : gv("rejectionhandled", e, t.value);
      });
    },
    bv = function (t, e, r) {
      return function (n) {
        t(e, n, r);
      };
    },
    Sv = function (t, e, r) {
      t.done ||
        ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), dv(t, !0));
    },
    xv = function (t, e, r) {
      if (!t.done) {
        (t.done = !0), r && (t = r);
        try {
          if (t.facade === e) throw new av("Promise can't be resolved itself");
          var n = pv(e);
          n
            ? Wp(function () {
                var r = { done: !1 };
                try {
                  Cp(n, e, bv(xv, r, t), bv(Sv, r, t));
                } catch (_q) {
                  Sv(r, _q, t);
                }
              })
            : ((t.value = e), (t.state = 1), dv(t, !1));
        } catch (_q) {
          Sv({ done: !1 }, _q, t);
        }
      }
    };
  if (
    Xp &&
    ((ov = (iv = function (t) {
      Np(this, ov), _p(t), Cp(Rp, this);
      var e = ev(this);
      try {
        t(bv(xv, e), bv(Sv, e));
      } catch (_q) {
        Sv(e, _q);
      }
    }).prototype),
    ((Rp = function (t) {
      rv(this, {
        type: Qp,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Vp(),
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Up(ov, "then", function (t, e) {
      var r = ev(this),
        n = sv(qp(this, iv));
      return (
        (r.parent = !0),
        (n.ok = !Dp(t) || t),
        (n.fail = Dp(e) && e),
        (n.domain = kp ? cv.domain : void 0),
        0 === r.state
          ? r.reactions.add(n)
          : Wp(function () {
              vv(n, r);
            }),
        n.promise
      );
    })),
    (Ip = function () {
      var t = new Rp(),
        e = ev(t);
      (this.promise = t), (this.resolve = bv(xv, e)), (this.reject = bv(Sv, e));
    }),
    (Kp.f = sv =
      function (t) {
        return t === iv || undefined === t ? new Ip(t) : fv(t);
      }),
    Dp(Jp) && nv !== Object.prototype)
  ) {
    (Pp = nv.then),
      tv ||
        Up(
          nv,
          "then",
          function (t, e) {
            var r = this;
            return new iv(function (t, e) {
              Cp(Pp, r, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        );
    try {
      delete nv.constructor;
    } catch (_q) {}
    Mp && Mp(nv, ov);
  }
  jp({ global: !0, constructor: !0, wrap: !0, forced: Xp }, { Promise: iv }),
    Fp(iv, Qp, !1),
    Bp(Qp);
  var Av = Ls,
    Ev = te("iterator"),
    Ov = Array.prototype,
    Tv = function (t) {
      return void 0 !== t && (Av.Array === t || Ov[Ev] === t);
    },
    Rv = si,
    Iv = mt,
    Pv = k,
    jv = Ls,
    kv = te("iterator"),
    Lv = function (t) {
      if (!Pv(t)) return Iv(t, kv) || Iv(t, "@@iterator") || jv[Rv(t)];
    },
    Cv = s,
    Uv = dt,
    Mv = Le,
    Fv = ht,
    Bv = Lv,
    _v = TypeError,
    Dv = function (t, e) {
      var r = arguments.length < 2 ? Bv(t) : e;
      if (Uv(r)) return Mv(Cv(r, t));
      throw new _v(Fv(t) + " is not iterable");
    },
    zv = s,
    Nv = Le,
    qv = mt,
    Hv = function (t, e, r) {
      var n, i;
      Nv(t);
      try {
        if (!(n = qv(t, "return"))) {
          if ("throw" === e) throw r;
          return r;
        }
        n = zv(n, t);
      } catch (_q) {
        (i = !0), (n = _q);
      }
      if ("throw" === e) throw r;
      if (i) throw n;
      return Nv(n), r;
    },
    Wv = mo,
    $v = s,
    Gv = Le,
    Vv = ht,
    Yv = Tv,
    Jv = hn,
    Kv = $,
    Qv = Dv,
    Xv = Lv,
    Zv = Hv,
    td = TypeError,
    ed = function (t, e) {
      (this.stopped = t), (this.result = e);
    },
    rd = ed.prototype,
    nd = function (t, e, r) {
      var n,
        i,
        o,
        a,
        u,
        c,
        s,
        f = r && r.that,
        h = !(!r || !r.AS_ENTRIES),
        l = !(!r || !r.IS_RECORD),
        p = !(!r || !r.IS_ITERATOR),
        v = !(!r || !r.INTERRUPTED),
        d = Wv(e, f),
        g = function (t) {
          return n && Zv(n, "normal", t), new ed(!0, t);
        },
        y = function (t) {
          return h
            ? (Gv(t), v ? d(t[0], t[1], g) : d(t[0], t[1]))
            : v
              ? d(t, g)
              : d(t);
        };
      if (l) n = t.iterator;
      else if (p) n = t;
      else {
        if (!(i = Xv(t))) throw new td(Vv(t) + " is not iterable");
        if (Yv(i)) {
          for (o = 0, a = Jv(t); a > o; o++)
            if ((u = y(t[o])) && Kv(rd, u)) return u;
          return new ed(!1);
        }
        n = Qv(t, i);
      }
      for (c = l ? t.next : n.next; !(s = $v(c, n)).done; ) {
        try {
          u = y(s.value);
        } catch (_q) {
          Zv(n, "throw", _q);
        }
        if ("object" == typeof u && u && Kv(rd, u)) return u;
      }
      return new ed(!1);
    },
    id = te("iterator"),
    od = !1;
  try {
    var ad = 0,
      ud = {
        next: function () {
          return { done: !!ad++ };
        },
        return: function () {
          od = !0;
        },
      };
    (ud[id] = function () {
      return this;
    }),
      Array.from(ud, function () {
        throw 2;
      });
  } catch (_q) {}
  var cd = function (t, e) {
      try {
        if (!e && !od) return !1;
      } catch (_q) {
        return !1;
      }
      var r = !1;
      try {
        var n = {};
        (n[id] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(n);
      } catch (_q) {}
      return r;
    },
    sd = ap,
    fd =
      xp.CONSTRUCTOR ||
      !cd(function (t) {
        sd.all(t).then(void 0, function () {});
      }),
    hd = s,
    ld = dt,
    pd = Ap,
    vd = op,
    dd = nd;
  ti(
    { target: "Promise", stat: !0, forced: fd },
    {
      all: function (t) {
        var e = this,
          r = pd.f(e),
          n = r.resolve,
          i = r.reject,
          o = vd(function () {
            var r = ld(e.resolve),
              o = [],
              a = 0,
              u = 1;
            dd(t, function (t) {
              var c = a++,
                s = !1;
              u++,
                hd(r, e, t).then(function (t) {
                  s || ((s = !0), (o[c] = t), --u || n(o));
                }, i);
            }),
              --u || n(o);
          });
        return o.error && i(o.value), r.promise;
      },
    }
  );
  var gd = ti,
    yd = xp.CONSTRUCTOR,
    md = ap,
    wd = W,
    bd = D,
    Sd = Kr,
    xd = md && md.prototype;
  if (
    (gd(
      { target: "Promise", proto: !0, forced: yd, real: !0 },
      {
        catch: function (t) {
          return this.then(void 0, t);
        },
      }
    ),
    bd(md))
  ) {
    var Ad = wd("Promise").prototype.catch;
    xd.catch !== Ad && Sd(xd, "catch", Ad, { unsafe: !0 });
  }
  var Ed = s,
    Od = dt,
    Td = Ap,
    Rd = op,
    Id = nd;
  ti(
    { target: "Promise", stat: !0, forced: fd },
    {
      race: function (t) {
        var e = this,
          r = Td.f(e),
          n = r.reject,
          i = Rd(function () {
            var i = Od(e.resolve);
            Id(t, function (t) {
              Ed(i, e, t).then(r.resolve, n);
            });
          });
        return i.error && n(i.value), r.promise;
      },
    }
  );
  var Pd = Ap;
  ti(
    { target: "Promise", stat: !0, forced: xp.CONSTRUCTOR },
    {
      reject: function (t) {
        var e = Pd.f(this);
        return (0, e.reject)(t), e.promise;
      },
    }
  );
  var jd = Le,
    kd = N,
    Ld = Ap,
    Cd = function (t, e) {
      if ((jd(t), kd(e) && e.constructor === t)) return e;
      var r = Ld.f(t);
      return (0, r.resolve)(e), r.promise;
    },
    Ud = ti,
    Md = xp.CONSTRUCTOR,
    Fd = Cd;
  W("Promise"),
    Ud(
      { target: "Promise", stat: !0, forced: Md },
      {
        resolve: function (t) {
          return Fd(this, t);
        },
      }
    );
  var Bd = S,
    _d = dt,
    Dd = N,
    zd = zt,
    Nd = zi,
    qd = a,
    Hd = Function,
    Wd = Bd([].concat),
    $d = Bd([].join),
    Gd = {},
    Vd = qd
      ? Hd.bind
      : function (t) {
          var e = _d(this),
            r = e.prototype,
            n = Nd(arguments, 1),
            i = function () {
              var r = Wd(n, Nd(arguments));
              return this instanceof i
                ? (function (t, e, r) {
                    if (!zd(Gd, e)) {
                      for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
                      Gd[e] = Hd("C,a", "return new C(" + $d(n, ",") + ")");
                    }
                    return Gd[e](t, r);
                  })(e, r.length, r)
                : e.apply(t, r);
            };
          return Dd(r) && (i.prototype = r), i;
        },
    Yd = ti,
    Jd = Eu,
    Kd = Vd,
    Qd = Vh,
    Xd = Le,
    Zd = N,
    tg = _i,
    eg = i,
    rg = W("Reflect", "construct"),
    ng = Object.prototype,
    ig = [].push,
    og = eg(function () {
      function t() {}
      return !(rg(function () {}, [], t) instanceof t);
    }),
    ag = !eg(function () {
      rg(function () {});
    }),
    ug = og || ag;
  Yd(
    { target: "Reflect", stat: !0, forced: ug, sham: ug },
    {
      construct: function (t, e) {
        Qd(t), Xd(e);
        var r = arguments.length < 3 ? t : Qd(arguments[2]);
        if (ag && !og) return rg(t, e, r);
        if (t === r) {
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }
          var n = [null];
          return Jd(ig, n, e), new (Jd(Kd, t, n))();
        }
        var i = r.prototype,
          o = tg(Zd(i) ? i : ng),
          a = Jd(t, o, e);
        return Zd(a) ? a : o;
      },
    }
  );
  var cg = ti,
    sg = r,
    fg = Hh,
    hg = Le,
    lg = D,
    pg = Ns,
    vg = Yi,
    dg = Zf,
    gg = i,
    yg = zt,
    mg = Ks.IteratorPrototype,
    wg = o,
    bg = "constructor",
    Sg = "Iterator",
    xg = te("toStringTag"),
    Ag = TypeError,
    Eg = sg[Sg],
    Og =
      !lg(Eg) ||
      Eg.prototype !== mg ||
      !gg(function () {
        Eg({});
      }),
    Tg = function () {
      if ((fg(this, mg), pg(this) === mg))
        throw new Ag("Abstract class Iterator not directly constructable");
    },
    Rg = function (t, e) {
      wg
        ? vg(mg, t, {
            configurable: !0,
            get: function () {
              return e;
            },
            set: function (e) {
              if ((hg(this), this === mg))
                throw new Ag("You can't redefine this property");
              yg(this, t) ? (this[t] = e) : dg(this, t, e);
            },
          })
        : (mg[t] = e);
    };
  yg(mg, xg) || Rg(xg, Sg),
    (!Og && yg(mg, bg) && mg[bg] !== Object) || Rg(bg, Tg),
    (Tg.prototype = mg),
    cg({ global: !0, constructor: !0, forced: Og }, { Iterator: Tg });
  var Ig = function (t) {
      return { iterator: t, next: t.next, done: !1 };
    },
    Pg = nd,
    jg = dt,
    kg = Le,
    Lg = Ig;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      forEach: function (t) {
        kg(this), jg(t);
        var e = Lg(this),
          r = 0;
        Pg(
          e,
          function (e) {
            t(e, r++);
          },
          { IS_RECORD: !0 }
        );
      },
    }
  );
  var Cg = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Ug = de("span").classList,
    Mg = Ug && Ug.constructor && Ug.constructor.prototype,
    Fg = Mg === Object.prototype ? void 0 : Mg,
    Bg = i,
    _g = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        Bg(function () {
          r.call(
            null,
            e ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    },
    Dg = Yo.forEach,
    zg = _g("forEach")
      ? [].forEach
      : function (t) {
          return Dg(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
    Ng = r,
    qg = Cg,
    Hg = Fg,
    Wg = zg,
    $g = Ge,
    Gg = function (t) {
      if (t && t.forEach !== Wg)
        try {
          $g(t, "forEach", Wg);
        } catch (_q) {
          t.forEach = Wg;
        }
    };
  for (var Vg in qg) qg[Vg] && Gg(Ng[Vg] && Ng[Vg].prototype);
  Gg(Hg);
  var Yg = r,
    Jg = Cg,
    Kg = Fg,
    Qg = Bf,
    Xg = Ge,
    Zg = fo,
    ty = te("iterator"),
    ey = Qg.values,
    ry = function (t, e) {
      if (t) {
        if (t[ty] !== ey)
          try {
            Xg(t, ty, ey);
          } catch (_q) {
            t[ty] = ey;
          }
        if ((Zg(t, e, !0), Jg[e]))
          for (var r in Qg)
            if (t[r] !== Qg[r])
              try {
                Xg(t, r, Qg[r]);
              } catch (_q) {
                t[r] = Qg[r];
              }
      }
    };
  for (var ny in Jg) ry(Yg[ny] && Yg[ny].prototype, ny);
  ry(Kg, "DOMTokenList");
  var iy = ti,
    oy = i,
    ay = bo,
    uy = N,
    cy = Bt,
    sy = hn,
    fy = $f,
    hy = Zf,
    ly = zo,
    py = nh,
    vy = Z,
    dy = te("isConcatSpreadable"),
    gy =
      vy >= 51 ||
      !oy(function () {
        var t = [];
        return (t[dy] = !1), t.concat()[0] !== t;
      }),
    yy = function (t) {
      if (!uy(t)) return !1;
      var e = t[dy];
      return void 0 !== e ? !!e : ay(t);
    };
  iy(
    { target: "Array", proto: !0, arity: 1, forced: !gy || !py("concat") },
    {
      concat: function (t) {
        var e,
          r,
          n,
          i,
          o,
          a = cy(this),
          u = ly(a, 0),
          c = 0;
        for (e = -1, n = arguments.length; e < n; e++)
          if (yy((o = -1 === e ? a : arguments[e])))
            for (i = sy(o), fy(c + i), r = 0; r < i; r++, c++)
              r in o && hy(u, c, o[r]);
          else fy(c + 1), hy(u, c++, o);
        return (u.length = c), u;
      },
    }
  );
  var my = Bt,
    wy = an,
    by = hn,
    Sy = function (t) {
      for (
        var e = my(this),
          r = by(e),
          n = arguments.length,
          i = wy(n > 1 ? arguments[1] : void 0, r),
          o = n > 2 ? arguments[2] : void 0,
          a = void 0 === o ? r : wy(o, r);
        a > i;

      )
        e[i++] = t;
      return e;
    },
    xy = ks;
  ti({ target: "Array", proto: !0 }, { fill: Sy }), xy("fill");
  var Ay = Yo.filter;
  ti(
    { target: "Array", proto: !0, forced: !nh("filter") },
    {
      filter: function (t) {
        return Ay(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Ey = ti,
    Oy = Yo.find,
    Ty = ks,
    Ry = "find",
    Iy = !0;
  Ry in [] &&
    Array(1)[Ry](function () {
      Iy = !1;
    }),
    Ey(
      { target: "Array", proto: !0, forced: Iy },
      {
        find: function (t) {
          return Oy(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Ty(Ry);
  var Py = ti,
    jy = Yo.findIndex,
    ky = ks,
    Ly = "findIndex",
    Cy = !0;
  Ly in [] &&
    Array(1)[Ly](function () {
      Cy = !1;
    }),
    Py(
      { target: "Array", proto: !0, forced: Cy },
      {
        findIndex: function (t) {
          return jy(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    ky(Ly);
  var Uy = Le,
    My = Hv,
    Fy = function (t, e, r, n) {
      try {
        return n ? e(Uy(r)[0], r[1]) : e(r);
      } catch (_q) {
        My(t, "throw", _q);
      }
    },
    By = mo,
    _y = s,
    Dy = Bt,
    zy = Fy,
    Ny = Tv,
    qy = Co,
    Hy = hn,
    Wy = Zf,
    $y = Dv,
    Gy = Lv,
    Vy = Array,
    Yy = function (t) {
      var e = Dy(t),
        r = qy(this),
        n = arguments.length,
        i = n > 1 ? arguments[1] : void 0,
        o = void 0 !== i;
      o && (i = By(i, n > 2 ? arguments[2] : void 0));
      var a,
        u,
        c,
        s,
        f,
        h,
        l = Gy(e),
        p = 0;
      if (!l || (this === Vy && Ny(l)))
        for (a = Hy(e), u = r ? new this(a) : Vy(a); a > p; p++)
          (h = o ? i(e[p], p) : e[p]), Wy(u, p, h);
      else
        for (
          u = r ? new this() : [], f = (s = $y(e, l)).next;
          !(c = _y(f, s)).done;
          p++
        )
          (h = o ? zy(s, i, [c.value, p], !0) : c.value), Wy(u, p, h);
      return (u.length = p), u;
    },
    Jy = Yy;
  ti(
    {
      target: "Array",
      stat: !0,
      forced: !cd(function (t) {
        Array.from(t);
      }),
    },
    { from: Jy }
  );
  var Ky = ti,
    Qy = gn.indexOf,
    Xy = _g,
    Zy = po([].indexOf),
    tm = !!Zy && 1 / Zy([1], 1, -0) < 0;
  Ky(
    { target: "Array", proto: !0, forced: tm || !Xy("indexOf") },
    {
      indexOf: function (t) {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        return tm ? Zy(this, t, e) || 0 : Qy(this, t, e);
      },
    }
  );
  var em = Yo.map;
  ti(
    { target: "Array", proto: !0, forced: !nh("map") },
    {
      map: function (t) {
        return em(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var rm = ht,
    nm = TypeError,
    im = function (t, e) {
      if (!delete t[e])
        throw new nm("Cannot delete property " + rm(e) + " of " + rm(t));
    },
    om = ti,
    am = Bt,
    um = an,
    cm = en,
    sm = hn,
    fm = Hf,
    hm = $f,
    lm = zo,
    pm = Zf,
    vm = im,
    dm = nh("splice"),
    gm = Math.max,
    ym = Math.min;
  om(
    { target: "Array", proto: !0, forced: !dm },
    {
      splice: function (t, e) {
        var r,
          n,
          i,
          o,
          a,
          u,
          c = am(this),
          s = sm(c),
          f = um(t, s),
          h = arguments.length;
        for (
          0 === h
            ? (r = n = 0)
            : 1 === h
              ? ((r = 0), (n = s - f))
              : ((r = h - 2), (n = ym(gm(cm(e), 0), s - f))),
            hm(s + r - n),
            i = lm(c, n),
            o = 0;
          o < n;
          o++
        )
          (a = f + o) in c && pm(i, o, c[a]);
        if (((i.length = n), r < n)) {
          for (o = f; o < s - n; o++)
            (u = o + r), (a = o + n) in c ? (c[u] = c[a]) : vm(c, u);
          for (o = s; o > s - n + r; o--) vm(c, o - 1);
        } else if (r > n)
          for (o = s - n; o > f; o--)
            (u = o + r - 1), (a = o + n - 1) in c ? (c[u] = c[a]) : vm(c, u);
        for (o = 0; o < r; o++) c[o + f] = arguments[o + 2];
        return fm(c, s - n + r), i;
      },
    }
  );
  var mm = Bt,
    wm = hn,
    bm = Hf,
    Sm = im,
    xm = $f;
  ti(
    {
      target: "Array",
      proto: !0,
      arity: 1,
      forced:
        1 !== [].unshift(0) ||
        !(function () {
          try {
            Object.defineProperty([], "length", { writable: !1 }).unshift();
          } catch (_q) {
            return _q instanceof TypeError;
          }
        })(),
    },
    {
      unshift: function (t) {
        var e = mm(this),
          r = wm(e),
          n = arguments.length;
        if (n) {
          xm(r + n);
          for (var i = r; i--; ) {
            var o = i + n;
            i in e ? (e[o] = e[i]) : Sm(e, o);
          }
          for (var a = 0; a < n; a++) e[a] = arguments[a];
        }
        return bm(e, r + n);
      },
    }
  );
  var Am = O,
    Em = TypeError,
    Om =
      Rc(ArrayBuffer.prototype, "byteLength", "get") ||
      function (t) {
        if ("ArrayBuffer" !== Am(t)) throw new Em("ArrayBuffer expected");
        return t.byteLength;
      },
    Tm = Om,
    Rm = S(ArrayBuffer.prototype.slice),
    Im = function (t) {
      if (0 !== Tm(t)) return !1;
      try {
        return Rm(t, 0, 0), !1;
      } catch (_q) {
        return !0;
      }
    },
    Pm = o,
    jm = Yi,
    km = Im,
    Lm = ArrayBuffer.prototype;
  Pm &&
    !("detached" in Lm) &&
    jm(Lm, "detached", {
      configurable: !0,
      get: function () {
        return km(this);
      },
    });
  var Cm,
    Um,
    Mm,
    Fm,
    Bm = en,
    _m = sn,
    Dm = RangeError,
    zm = function (t) {
      if (void 0 === t) return 0;
      var e = Bm(t),
        r = _m(e);
      if (e !== r) throw new Dm("Wrong length or index");
      return r;
    },
    Nm = Mh,
    qm = i,
    Hm = Z,
    Wm = cp,
    $m = up,
    Gm = Mh,
    Vm = r.structuredClone,
    Ym =
      !!Vm &&
      !qm(function () {
        if (($m && Hm > 92) || (Gm && Hm > 94) || (Wm && Hm > 97)) return !1;
        var t = new ArrayBuffer(8),
          e = Vm(t, { transfer: [t] });
        return 0 !== t.byteLength || 8 !== e.byteLength;
      }),
    Jm = r,
    Km = function (t) {
      try {
        if (Nm) return Function('return require("' + t + '")')();
      } catch (_q) {}
    },
    Qm = Ym,
    Xm = Jm.structuredClone,
    Zm = Jm.ArrayBuffer,
    tw = Jm.MessageChannel,
    ew = !1;
  if (Qm)
    ew = function (t) {
      Xm(t, { transfer: [t] });
    };
  else if (Zm)
    try {
      tw || ((Cm = Km("worker_threads")) && (tw = Cm.MessageChannel)),
        tw &&
          ((Um = new tw()),
          (Mm = new Zm(2)),
          (Fm = function (t) {
            Um.port1.postMessage(null, [t]);
          }),
          2 === Mm.byteLength && (Fm(Mm), 0 === Mm.byteLength && (ew = Fm)));
    } catch (_q) {}
  var rw = r,
    nw = S,
    iw = Rc,
    ow = zm,
    aw = Im,
    uw = Om,
    cw = ew,
    sw = Ym,
    fw = rw.structuredClone,
    hw = rw.ArrayBuffer,
    lw = rw.DataView,
    pw = rw.TypeError,
    vw = Math.min,
    dw = hw.prototype,
    gw = lw.prototype,
    yw = nw(dw.slice),
    mw = iw(dw, "resizable", "get"),
    ww = iw(dw, "maxByteLength", "get"),
    bw = nw(gw.getInt8),
    Sw = nw(gw.setInt8),
    xw =
      (sw || cw) &&
      function (t, e, r) {
        var n,
          i = uw(t),
          o = void 0 === e ? i : ow(e),
          a = !mw || !mw(t);
        if (aw(t)) throw new pw("ArrayBuffer is detached");
        if (sw && ((t = fw(t, { transfer: [t] })), i === o && (r || a)))
          return t;
        if (i >= o && (!r || a)) n = yw(t, 0, o);
        else {
          var u = r && !a && ww ? { maxByteLength: ww(t) } : void 0;
          n = new hw(o, u);
          for (
            var c = new lw(t), s = new lw(n), f = vw(o, i), h = 0;
            h < f;
            h++
          )
            Sw(s, h, bw(c, h));
        }
        return sw || cw(t), n;
      },
    Aw = xw;
  Aw &&
    ti(
      { target: "ArrayBuffer", proto: !0 },
      {
        transfer: function () {
          return Aw(this, arguments.length ? arguments[0] : void 0, !0);
        },
      }
    );
  var Ew = xw;
  Ew &&
    ti(
      { target: "ArrayBuffer", proto: !0 },
      {
        transferToFixedLength: function () {
          return Ew(this, arguments.length ? arguments[0] : void 0, !1);
        },
      }
    );
  var Ow = { exports: {} },
    Tw = i(function () {
      if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
      }
    }),
    Rw = i,
    Iw = N,
    Pw = O,
    jw = Tw,
    kw = Object.isExtensible,
    Lw =
      Rw(function () {
        kw(1);
      }) || jw
        ? function (t) {
            return (
              !!Iw(t) && (!jw || "ArrayBuffer" !== Pw(t)) && (!kw || kw(t))
            );
          }
        : kw,
    Cw = !i(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Uw = ti,
    Mw = S,
    Fw = pr,
    Bw = N,
    _w = zt,
    Dw = Re.f,
    zw = Qr,
    Nw = Di,
    qw = Lw,
    Hw = Cw,
    Ww = !1,
    $w = $t("meta"),
    Gw = 0,
    Vw = function (t) {
      Dw(t, $w, { value: { objectID: "O" + Gw++, weakData: {} } });
    },
    Yw = (Ow.exports = {
      enable: function () {
        (Yw.enable = function () {}), (Ww = !0);
        var t = zw.f,
          e = Mw([].splice),
          r = {};
        (r[$w] = 1),
          t(r).length &&
            ((zw.f = function (r) {
              for (var n = t(r), i = 0, o = n.length; i < o; i++)
                if (n[i] === $w) {
                  e(n, i, 1);
                  break;
                }
              return n;
            }),
            Uw(
              { target: "Object", stat: !0, forced: !0 },
              { getOwnPropertyNames: Nw.f }
            ));
      },
      fastKey: function (t, e) {
        if (!Bw(t))
          return "symbol" == typeof t
            ? t
            : ("string" == typeof t ? "S" : "P") + t;
        if (!_w(t, $w)) {
          if (!qw(t)) return "F";
          if (!e) return "E";
          Vw(t);
        }
        return t[$w].objectID;
      },
      getWeakData: function (t, e) {
        if (!_w(t, $w)) {
          if (!qw(t)) return !0;
          if (!e) return !1;
          Vw(t);
        }
        return t[$w].weakData;
      },
      onFreeze: function (t) {
        return Hw && Ww && qw(t) && !_w(t, $w) && Vw(t), t;
      },
    });
  Fw[$w] = !0;
  var Jw = Ow.exports,
    Kw = ti,
    Qw = r,
    Xw = S,
    Zw = Gn,
    tb = Kr,
    eb = Jw,
    rb = nd,
    nb = Hh,
    ib = D,
    ob = k,
    ab = N,
    ub = i,
    cb = cd,
    sb = fo,
    fb = qc,
    hb = function (t, e, r) {
      var n = -1 !== t.indexOf("Map"),
        i = -1 !== t.indexOf("Weak"),
        o = n ? "set" : "add",
        a = Qw[t],
        u = a && a.prototype,
        c = a,
        s = {},
        f = function (t) {
          var e = Xw(u[t]);
          tb(
            u,
            t,
            "add" === t
              ? function (t) {
                  return e(this, 0 === t ? 0 : t), this;
                }
              : "delete" === t
                ? function (t) {
                    return !(i && !ab(t)) && e(this, 0 === t ? 0 : t);
                  }
                : "get" === t
                  ? function (t) {
                      return i && !ab(t) ? void 0 : e(this, 0 === t ? 0 : t);
                    }
                  : "has" === t
                    ? function (t) {
                        return !(i && !ab(t)) && e(this, 0 === t ? 0 : t);
                      }
                    : function (t, r) {
                        return e(this, 0 === t ? 0 : t, r), this;
                      }
          );
        };
      if (
        Zw(
          t,
          !ib(a) ||
            !(
              i ||
              (u.forEach &&
                !ub(function () {
                  new a().entries().next();
                }))
            )
        )
      )
        (c = r.getConstructor(e, t, n, o)), eb.enable();
      else if (Zw(t, !0)) {
        var h = new c(),
          l = h[o](i ? {} : -0, 1) !== h,
          p = ub(function () {
            h.has(1);
          }),
          v = cb(function (t) {
            new a(t);
          }),
          d =
            !i &&
            ub(function () {
              for (var t = new a(), e = 5; e--; ) t[o](e, e);
              return !t.has(-0);
            });
        v ||
          (((c = e(function (t, e) {
            nb(t, u);
            var r = fb(new a(), t, c);
            return ob(e) || rb(e, r[o], { that: r, AS_ENTRIES: n }), r;
          })).prototype = u),
          (u.constructor = c)),
          (p || d) && (f("delete"), f("has"), n && f("get")),
          (d || l) && f(o),
          i && u.clear && delete u.clear;
      }
      return (
        (s[t] = c),
        Kw({ global: !0, constructor: !0, forced: c !== a }, s),
        sb(c, t),
        i || r.setStrong(c, t, n),
        c
      );
    },
    lb = Kr,
    pb = function (t, e, r) {
      for (var n in e) lb(t, n, e[n], r);
      return t;
    },
    vb = _i,
    db = Yi,
    gb = pb,
    yb = mo,
    mb = Hh,
    wb = k,
    bb = nd,
    Sb = Ef,
    xb = Of,
    Ab = zh,
    Eb = o,
    Ob = Jw.fastKey,
    Tb = Rr.set,
    Rb = Rr.getterFor,
    Ib = {
      getConstructor: function (t, e, r, n) {
        var i = t(function (t, i) {
            mb(t, o),
              Tb(t, {
                type: e,
                index: vb(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              Eb || (t.size = 0),
              wb(i) || bb(i, t[n], { that: t, AS_ENTRIES: r });
          }),
          o = i.prototype,
          a = Rb(e),
          u = function (t, e, r) {
            var n,
              i,
              o = a(t),
              u = c(t, e);
            return (
              u
                ? (u.value = r)
                : ((o.last = u =
                    {
                      index: (i = Ob(e, !0)),
                      key: e,
                      value: r,
                      previous: (n = o.last),
                      next: void 0,
                      removed: !1,
                    }),
                  o.first || (o.first = u),
                  n && (n.next = u),
                  Eb ? o.size++ : t.size++,
                  "F" !== i && (o.index[i] = u)),
              t
            );
          },
          c = function (t, e) {
            var r,
              n = a(t),
              i = Ob(e);
            if ("F" !== i) return n.index[i];
            for (r = n.first; r; r = r.next) if (r.key === e) return r;
          };
        return (
          gb(o, {
            clear: function () {
              for (var t = a(this), e = t.first; e; )
                (e.removed = !0),
                  e.previous && (e.previous = e.previous.next = void 0),
                  (e = e.next);
              (t.first = t.last = void 0),
                (t.index = vb(null)),
                Eb ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = this,
                r = a(e),
                n = c(e, t);
              if (n) {
                var i = n.next,
                  o = n.previous;
                delete r.index[n.index],
                  (n.removed = !0),
                  o && (o.next = i),
                  i && (i.previous = o),
                  r.first === n && (r.first = i),
                  r.last === n && (r.last = o),
                  Eb ? r.size-- : e.size--;
              }
              return !!n;
            },
            forEach: function (t) {
              for (
                var e,
                  r = a(this),
                  n = yb(t, arguments.length > 1 ? arguments[1] : void 0);
                (e = e ? e.next : r.first);

              )
                for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!c(this, t);
            },
          }),
          gb(
            o,
            r
              ? {
                  get: function (t) {
                    var e = c(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return u(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return u(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          Eb &&
            db(o, "size", {
              configurable: !0,
              get: function () {
                return a(this).size;
              },
            }),
          i
        );
      },
      setStrong: function (t, e, r) {
        var n = e + " Iterator",
          i = Rb(e),
          o = Rb(n);
        Sb(
          t,
          e,
          function (t, e) {
            Tb(this, {
              type: n,
              target: t,
              state: i(t),
              kind: e,
              last: void 0,
            });
          },
          function () {
            for (var t = o(this), e = t.kind, r = t.last; r && r.removed; )
              r = r.previous;
            return t.target && (t.last = r = r ? r.next : t.state.first)
              ? xb(
                  "keys" === e
                    ? r.key
                    : "values" === e
                      ? r.value
                      : [r.key, r.value],
                  !1
                )
              : ((t.target = void 0), xb(void 0, !0));
          },
          r ? "entries" : "values",
          !r,
          !0
        ),
          Ab(e);
      },
    };
  hb(
    "Map",
    function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Ib
  );
  var Pb = ti,
    jb = Math.hypot,
    kb = Math.abs,
    Lb = Math.sqrt;
  Pb(
    {
      target: "Math",
      stat: !0,
      arity: 2,
      forced: !!jb && jb(1 / 0, NaN) !== 1 / 0,
    },
    {
      hypot: function (t, e) {
        for (var r, n, i = 0, o = 0, a = arguments.length, u = 0; o < a; )
          u < (r = kb(arguments[o++]))
            ? ((i = i * (n = u / r) * n + 1), (u = r))
            : (i += r > 0 ? (n = r / u) * n : r);
        return u === 1 / 0 ? 1 / 0 : u * Lb(i);
      },
    }
  );
  var Cb = ti,
    Ub = i,
    Mb = B,
    Fb = n.f,
    Bb = o;
  Cb(
    {
      target: "Object",
      stat: !0,
      forced:
        !Bb ||
        Ub(function () {
          Fb(1);
        }),
      sham: !Bb,
    },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return Fb(Mb(t), e);
      },
    }
  );
  var _b = Ln,
    Db = B,
    zb = n,
    Nb = Zf;
  ti(
    { target: "Object", stat: !0, sham: !o },
    {
      getOwnPropertyDescriptors: function (t) {
        for (
          var e, r, n = Db(t), i = zb.f, o = _b(n), a = {}, u = 0;
          o.length > u;

        )
          void 0 !== (r = i(n, (e = o[u++]))) && Nb(a, e, r);
        return a;
      },
    }
  );
  var qb = Le,
    Hb = function () {
      var t = qb(this),
        e = "";
      return (
        t.hasIndices && (e += "d"),
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.unicodeSets && (e += "v"),
        t.sticky && (e += "y"),
        e
      );
    },
    Wb = i,
    $b = r.RegExp,
    Gb = Wb(function () {
      var t = $b("a", "y");
      return (t.lastIndex = 2), null !== t.exec("abcd");
    }),
    Vb =
      Gb ||
      Wb(function () {
        return !$b("a", "y").sticky;
      }),
    Yb =
      Gb ||
      Wb(function () {
        var t = $b("^r", "gy");
        return (t.lastIndex = 2), null !== t.exec("str");
      }),
    Jb = { BROKEN_CARET: Yb, MISSED_STICKY: Vb, UNSUPPORTED_Y: Gb },
    Kb = i,
    Qb = r.RegExp,
    Xb = Kb(function () {
      var t = Qb(".", "s");
      return !(t.dotAll && t.test("\n") && "s" === t.flags);
    }),
    Zb = i,
    tS = r.RegExp,
    eS = Zb(function () {
      var t = tS("(?<a>b)", "g");
      return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
    }),
    rS = s,
    nS = S,
    iS = li,
    oS = Hb,
    aS = Jb,
    uS = _i,
    cS = Rr.get,
    sS = Xb,
    fS = eS,
    hS = Ut("native-string-replace", String.prototype.replace),
    lS = RegExp.prototype.exec,
    pS = lS,
    vS = nS("".charAt),
    dS = nS("".indexOf),
    gS = nS("".replace),
    yS = nS("".slice),
    mS = (function () {
      var t = /a/,
        e = /b*/g;
      return (
        rS(lS, t, "a"), rS(lS, e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
      );
    })(),
    wS = aS.BROKEN_CARET,
    bS = void 0 !== /()??/.exec("")[1];
  (mS || bS || wS || sS || fS) &&
    (pS = function (t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        u,
        c = this,
        s = cS(c),
        f = iS(t),
        h = s.raw;
      if (h)
        return (
          (h.lastIndex = c.lastIndex),
          (e = rS(pS, h, f)),
          (c.lastIndex = h.lastIndex),
          e
        );
      var l = s.groups,
        p = wS && c.sticky,
        v = rS(oS, c),
        d = c.source,
        g = 0,
        y = f;
      if (
        (p &&
          ((v = gS(v, "y", "")),
          -1 === dS(v, "g") && (v += "g"),
          (y = yS(f, c.lastIndex)),
          c.lastIndex > 0 &&
            (!c.multiline ||
              (c.multiline && "\n" !== vS(f, c.lastIndex - 1))) &&
            ((d = "(?: " + d + ")"), (y = " " + y), g++),
          (r = new RegExp("^(?:" + d + ")", v))),
        bS && (r = new RegExp("^" + d + "$(?!\\s)", v)),
        mS && (n = c.lastIndex),
        (i = rS(lS, p ? r : c, y)),
        p
          ? i
            ? ((i.input = yS(i.input, g)),
              (i[0] = yS(i[0], g)),
              (i.index = c.lastIndex),
              (c.lastIndex += i[0].length))
            : (c.lastIndex = 0)
          : mS && i && (c.lastIndex = c.global ? i.index + i[0].length : n),
        bS &&
          i &&
          i.length > 1 &&
          rS(hS, i[0], r, function () {
            for (o = 1; o < arguments.length - 2; o++)
              void 0 === arguments[o] && (i[o] = void 0);
          }),
        i && l)
      )
        for (i.groups = a = uS(null), o = 0; o < l.length; o++)
          a[(u = l[o])[0]] = i[u[1]];
      return i;
    });
  var SS = pS;
  ti({ target: "RegExp", proto: !0, forced: /./.exec !== SS }, { exec: SS });
  var xS,
    AS,
    ES = ti,
    OS = s,
    TS = D,
    RS = Le,
    IS = li,
    PS =
      ((xS = !1),
      ((AS = /[ac]/).exec = function () {
        return (xS = !0), /./.exec.apply(this, arguments);
      }),
      !0 === AS.test("abc") && xS),
    jS = /./.test;
  ES(
    { target: "RegExp", proto: !0, forced: !PS },
    {
      test: function (t) {
        var e = RS(this),
          r = IS(t),
          n = e.exec;
        if (!TS(n)) return OS(jS, e, r);
        var i = OS(n, e, r);
        return null !== i && (RS(i), !0);
      },
    }
  );
  var kS = s,
    LS = zt,
    CS = $,
    US = Hb,
    MS = RegExp.prototype,
    FS = function (t) {
      var e = t.flags;
      return void 0 !== e || "flags" in MS || LS(t, "flags") || !CS(MS, t)
        ? e
        : kS(US, t);
    },
    BS = Ze.PROPER,
    _S = Kr,
    DS = Le,
    zS = li,
    NS = i,
    qS = FS,
    HS = "toString",
    WS = RegExp.prototype,
    $S = WS[HS],
    GS = NS(function () {
      return "/a/b" !== $S.call({ source: "a", flags: "b" });
    }),
    VS = BS && $S.name !== HS;
  (GS || VS) &&
    _S(
      WS,
      HS,
      function () {
        var t = DS(this);
        return "/" + zS(t.source) + "/" + zS(qS(t));
      },
      { unsafe: !0 }
    ),
    hb(
      "Set",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      Ib
    );
  var YS,
    JS,
    KS,
    QS = { exports: {} },
    XS = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
    ZS = XS,
    tx = o,
    ex = r,
    rx = D,
    nx = N,
    ix = zt,
    ox = si,
    ax = ht,
    ux = Ge,
    cx = Kr,
    sx = Yi,
    fx = $,
    hx = Ns,
    lx = Fc,
    px = te,
    vx = $t,
    dx = Rr.enforce,
    gx = Rr.get,
    yx = ex.Int8Array,
    mx = yx && yx.prototype,
    wx = ex.Uint8ClampedArray,
    bx = wx && wx.prototype,
    Sx = yx && hx(yx),
    xx = mx && hx(mx),
    Ax = Object.prototype,
    Ex = ex.TypeError,
    Ox = px("toStringTag"),
    Tx = vx("TYPED_ARRAY_TAG"),
    Rx = "TypedArrayConstructor",
    Ix = ZS && !!lx && "Opera" !== ox(ex.opera),
    Px = !1,
    jx = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8,
    },
    kx = { BigInt64Array: 8, BigUint64Array: 8 },
    Lx = function (t) {
      var e = hx(t);
      if (nx(e)) {
        var r = gx(e);
        return r && ix(r, Rx) ? r[Rx] : Lx(e);
      }
    },
    Cx = function (t) {
      if (!nx(t)) return !1;
      var e = ox(t);
      return ix(jx, e) || ix(kx, e);
    };
  for (YS in jx)
    (KS = (JS = ex[YS]) && JS.prototype) ? (dx(KS)[Rx] = JS) : (Ix = !1);
  for (YS in kx) (KS = (JS = ex[YS]) && JS.prototype) && (dx(KS)[Rx] = JS);
  if (
    (!Ix || !rx(Sx) || Sx === Function.prototype) &&
    ((Sx = function () {
      throw new Ex("Incorrect invocation");
    }),
    Ix)
  )
    for (YS in jx) ex[YS] && lx(ex[YS], Sx);
  if ((!Ix || !xx || xx === Ax) && ((xx = Sx.prototype), Ix))
    for (YS in jx) ex[YS] && lx(ex[YS].prototype, xx);
  if ((Ix && hx(bx) !== xx && lx(bx, xx), tx && !ix(xx, Ox)))
    for (YS in ((Px = !0),
    sx(xx, Ox, {
      configurable: !0,
      get: function () {
        return nx(this) ? this[Tx] : void 0;
      },
    }),
    jx))
      ex[YS] && ux(ex[YS], Tx, YS);
  var Ux = {
      NATIVE_ARRAY_BUFFER_VIEWS: Ix,
      TYPED_ARRAY_TAG: Px && Tx,
      aTypedArray: function (t) {
        if (Cx(t)) return t;
        throw new Ex("Target is not a typed array");
      },
      aTypedArrayConstructor: function (t) {
        if (rx(t) && (!lx || fx(Sx, t))) return t;
        throw new Ex(ax(t) + " is not a typed array constructor");
      },
      exportTypedArrayMethod: function (t, e, r, n) {
        if (tx) {
          if (r)
            for (var i in jx) {
              var o = ex[i];
              if (o && ix(o.prototype, t))
                try {
                  delete o.prototype[t];
                } catch (_q) {
                  try {
                    o.prototype[t] = e;
                  } catch (a) {}
                }
            }
          (xx[t] && !r) || cx(xx, t, r ? e : (Ix && mx[t]) || e, n);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var n, i;
        if (tx) {
          if (lx) {
            if (r)
              for (n in jx)
                if ((i = ex[n]) && ix(i, t))
                  try {
                    delete i[t];
                  } catch (_q) {}
            if (Sx[t] && !r) return;
            try {
              return cx(Sx, t, r ? e : (Ix && Sx[t]) || e);
            } catch (_q) {}
          }
          for (n in jx) !(i = ex[n]) || (i[t] && !r) || cx(i, t, e);
        }
      },
      getTypedArrayConstructor: Lx,
      isView: function (t) {
        if (!nx(t)) return !1;
        var e = ox(t);
        return "DataView" === e || ix(jx, e) || ix(kx, e);
      },
      isTypedArray: Cx,
      TypedArray: Sx,
      TypedArrayPrototype: xx,
    },
    Mx = r,
    Fx = i,
    Bx = cd,
    _x = Ux.NATIVE_ARRAY_BUFFER_VIEWS,
    Dx = Mx.ArrayBuffer,
    zx = Mx.Int8Array,
    Nx =
      !_x ||
      !Fx(function () {
        zx(1);
      }) ||
      !Fx(function () {
        new zx(-1);
      }) ||
      !Bx(function (t) {
        new zx(), new zx(null), new zx(1.5), new zx(t);
      }, !0) ||
      Fx(function () {
        return 1 !== new zx(new Dx(2), 1, void 0).length;
      }),
    qx =
      Math.sign ||
      function (t) {
        var e = +t;
        return 0 === e || e != e ? e : e < 0 ? -1 : 1;
      },
    Hx = Math.abs,
    Wx = 2220446049250313e-31,
    $x = 1 / Wx,
    Gx = function (t, e, r, n) {
      var i = +t,
        o = Hx(i),
        a = qx(i);
      if (o < n)
        return (
          a *
          (function (t) {
            return t + $x - $x;
          })(o / n / e) *
          n *
          e
        );
      var u = (1 + e / Wx) * o,
        c = u - (u - o);
      return c > r || c != c ? a * (1 / 0) : a * c;
    },
    Vx =
      Math.fround ||
      function (t) {
        return Gx(
          t,
          1.1920928955078125e-7,
          34028234663852886e22,
          11754943508222875e-54
        );
      },
    Yx = Array,
    Jx = Math.abs,
    Kx = Math.pow,
    Qx = Math.floor,
    Xx = Math.log,
    Zx = Math.LN2,
    tA = {
      pack: function (t, e, r) {
        var n,
          i,
          o,
          a = Yx(r),
          u = 8 * r - e - 1,
          c = (1 << u) - 1,
          s = c >> 1,
          f = 23 === e ? Kx(2, -24) - Kx(2, -77) : 0,
          h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
          l = 0;
        for (
          (t = Jx(t)) != t || t === 1 / 0
            ? ((i = t != t ? 1 : 0), (n = c))
            : ((n = Qx(Xx(t) / Zx)),
              t * (o = Kx(2, -n)) < 1 && (n--, (o *= 2)),
              (t += n + s >= 1 ? f / o : f * Kx(2, 1 - s)) * o >= 2 &&
                (n++, (o /= 2)),
              n + s >= c
                ? ((i = 0), (n = c))
                : n + s >= 1
                  ? ((i = (t * o - 1) * Kx(2, e)), (n += s))
                  : ((i = t * Kx(2, s - 1) * Kx(2, e)), (n = 0)));
          e >= 8;

        )
          (a[l++] = 255 & i), (i /= 256), (e -= 8);
        for (n = (n << e) | i, u += e; u > 0; )
          (a[l++] = 255 & n), (n /= 256), (u -= 8);
        return (a[--l] |= 128 * h), a;
      },
      unpack: function (t, e) {
        var r,
          n = t.length,
          i = 8 * n - e - 1,
          o = (1 << i) - 1,
          a = o >> 1,
          u = i - 7,
          c = n - 1,
          s = t[c--],
          f = 127 & s;
        for (s >>= 7; u > 0; ) (f = 256 * f + t[c--]), (u -= 8);
        for (r = f & ((1 << -u) - 1), f >>= -u, u += e; u > 0; )
          (r = 256 * r + t[c--]), (u -= 8);
        if (0 === f) f = 1 - a;
        else {
          if (f === o) return r ? NaN : s ? -1 / 0 : 1 / 0;
          (r += Kx(2, e)), (f -= a);
        }
        return (s ? -1 : 1) * r * Kx(2, f - e);
      },
    },
    eA = r,
    rA = S,
    nA = o,
    iA = XS,
    oA = Ge,
    aA = Yi,
    uA = pb,
    cA = i,
    sA = Hh,
    fA = en,
    hA = sn,
    lA = zm,
    pA = Vx,
    vA = tA,
    dA = Ns,
    gA = Fc,
    yA = Sy,
    mA = zi,
    wA = qc,
    bA = Bn,
    SA = fo,
    xA = Rr,
    AA = Ze.PROPER,
    EA = Ze.CONFIGURABLE,
    OA = "ArrayBuffer",
    TA = "DataView",
    RA = "prototype",
    IA = "Wrong index",
    PA = xA.getterFor(OA),
    jA = xA.getterFor(TA),
    kA = xA.set,
    LA = eA[OA],
    CA = LA,
    UA = CA && CA[RA],
    MA = eA[TA],
    FA = MA && MA[RA],
    BA = Object.prototype,
    _A = eA.Array,
    DA = eA.RangeError,
    zA = rA(yA),
    NA = rA([].reverse),
    qA = vA.pack,
    HA = vA.unpack,
    WA = function (t) {
      return [255 & t];
    },
    $A = function (t) {
      return [255 & t, (t >> 8) & 255];
    },
    GA = function (t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
    },
    VA = function (t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
    },
    YA = function (t) {
      return qA(pA(t), 23, 4);
    },
    JA = function (t) {
      return qA(t, 52, 8);
    },
    KA = function (t, e, r) {
      aA(t[RA], e, {
        configurable: !0,
        get: function () {
          return r(this)[e];
        },
      });
    },
    QA = function (t, e, r, n) {
      var i = jA(t),
        o = lA(r),
        a = !!n;
      if (o + e > i.byteLength) throw new DA(IA);
      var u = i.bytes,
        c = o + i.byteOffset,
        s = mA(u, c, c + e);
      return a ? s : NA(s);
    },
    XA = function (t, e, r, n, i, o) {
      var a = jA(t),
        u = lA(r),
        c = n(+i),
        s = !!o;
      if (u + e > a.byteLength) throw new DA(IA);
      for (var f = a.bytes, h = u + a.byteOffset, l = 0; l < e; l++)
        f[h + l] = c[s ? l : e - l - 1];
    };
  if (iA) {
    var ZA = AA && LA.name !== OA;
    cA(function () {
      LA(1);
    }) &&
    cA(function () {
      new LA(-1);
    }) &&
    !cA(function () {
      return new LA(), new LA(1.5), new LA(NaN), 1 !== LA.length || (ZA && !EA);
    })
      ? ZA && EA && oA(LA, "name", OA)
      : (((CA = function (t) {
          return sA(this, UA), wA(new LA(lA(t)), this, CA);
        })[RA] = UA),
        (UA.constructor = CA),
        bA(CA, LA)),
      gA && dA(FA) !== BA && gA(FA, BA);
    var tE = new MA(new CA(2)),
      eE = rA(FA.setInt8);
    tE.setInt8(0, 2147483648),
      tE.setInt8(1, 2147483649),
      (!tE.getInt8(0) && tE.getInt8(1)) ||
        uA(
          FA,
          {
            setInt8: function (t, e) {
              eE(this, t, (e << 24) >> 24);
            },
            setUint8: function (t, e) {
              eE(this, t, (e << 24) >> 24);
            },
          },
          { unsafe: !0 }
        );
  } else
    (UA = (CA = function (t) {
      sA(this, UA);
      var e = lA(t);
      kA(this, { type: OA, bytes: zA(_A(e), 0), byteLength: e }),
        nA || ((this.byteLength = e), (this.detached = !1));
    })[RA]),
      (MA = function (t, e, r) {
        sA(this, FA), sA(t, UA);
        var n = PA(t),
          i = n.byteLength,
          o = fA(e);
        if (o < 0 || o > i) throw new DA("Wrong offset");
        if (o + (r = void 0 === r ? i - o : hA(r)) > i)
          throw new DA("Wrong length");
        kA(this, {
          type: TA,
          buffer: t,
          byteLength: r,
          byteOffset: o,
          bytes: n.bytes,
        }),
          nA ||
            ((this.buffer = t), (this.byteLength = r), (this.byteOffset = o));
      }),
      (FA = MA[RA]),
      nA &&
        (KA(CA, "byteLength", PA),
        KA(MA, "buffer", jA),
        KA(MA, "byteLength", jA),
        KA(MA, "byteOffset", jA)),
      uA(FA, {
        getInt8: function (t) {
          return (QA(this, 1, t)[0] << 24) >> 24;
        },
        getUint8: function (t) {
          return QA(this, 1, t)[0];
        },
        getInt16: function (t) {
          var e = QA(this, 2, t, arguments.length > 1 && arguments[1]);
          return (((e[1] << 8) | e[0]) << 16) >> 16;
        },
        getUint16: function (t) {
          var e = QA(this, 2, t, arguments.length > 1 && arguments[1]);
          return (e[1] << 8) | e[0];
        },
        getInt32: function (t) {
          return VA(QA(this, 4, t, arguments.length > 1 && arguments[1]));
        },
        getUint32: function (t) {
          return VA(QA(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
        },
        getFloat32: function (t) {
          return HA(QA(this, 4, t, arguments.length > 1 && arguments[1]), 23);
        },
        getFloat64: function (t) {
          return HA(QA(this, 8, t, arguments.length > 1 && arguments[1]), 52);
        },
        setInt8: function (t, e) {
          XA(this, 1, t, WA, e);
        },
        setUint8: function (t, e) {
          XA(this, 1, t, WA, e);
        },
        setInt16: function (t, e) {
          XA(this, 2, t, $A, e, arguments.length > 2 && arguments[2]);
        },
        setUint16: function (t, e) {
          XA(this, 2, t, $A, e, arguments.length > 2 && arguments[2]);
        },
        setInt32: function (t, e) {
          XA(this, 4, t, GA, e, arguments.length > 2 && arguments[2]);
        },
        setUint32: function (t, e) {
          XA(this, 4, t, GA, e, arguments.length > 2 && arguments[2]);
        },
        setFloat32: function (t, e) {
          XA(this, 4, t, YA, e, arguments.length > 2 && arguments[2]);
        },
        setFloat64: function (t, e) {
          XA(this, 8, t, JA, e, arguments.length > 2 && arguments[2]);
        },
      });
  SA(CA, OA), SA(MA, TA);
  var rE = { ArrayBuffer: CA, DataView: MA },
    nE = N,
    iE = Math.floor,
    oE =
      Number.isInteger ||
      function (t) {
        return !nE(t) && isFinite(t) && iE(t) === t;
      },
    aE = en,
    uE = RangeError,
    cE = function (t) {
      var e = aE(t);
      if (e < 0) throw new uE("The argument can't be less than 0");
      return e;
    },
    sE = RangeError,
    fE = function (t, e) {
      var r = cE(t);
      if (r % e) throw new sE("Wrong offset");
      return r;
    },
    hE = Math.round,
    lE = si,
    pE = function (t) {
      var e = lE(t);
      return "BigInt64Array" === e || "BigUint64Array" === e;
    },
    vE = ce,
    dE = TypeError,
    gE = function (t) {
      var e = vE(t, "number");
      if ("number" == typeof e) throw new dE("Can't convert number to bigint");
      return BigInt(e);
    },
    yE = mo,
    mE = s,
    wE = Vh,
    bE = Bt,
    SE = hn,
    xE = Dv,
    AE = Lv,
    EE = Tv,
    OE = pE,
    TE = Ux.aTypedArrayConstructor,
    RE = gE,
    IE = hn,
    PE = function (t, e, r) {
      for (
        var n = 0, i = arguments.length > 2 ? r : IE(e), o = new t(i);
        i > n;

      )
        o[n] = e[n++];
      return o;
    },
    jE = ti,
    kE = r,
    LE = s,
    CE = o,
    UE = Nx,
    ME = Ux,
    FE = rE,
    BE = Hh,
    _E = g,
    DE = Ge,
    zE = oE,
    NE = sn,
    qE = zm,
    HE = fE,
    WE = function (t) {
      var e = hE(t);
      return e < 0 ? 0 : e > 255 ? 255 : 255 & e;
    },
    $E = he,
    GE = zt,
    VE = si,
    YE = N,
    JE = st,
    KE = _i,
    QE = $,
    XE = Fc,
    ZE = Qr.f,
    tO = function (t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        u,
        c,
        s = wE(this),
        f = bE(t),
        h = arguments.length,
        l = h > 1 ? arguments[1] : void 0,
        p = void 0 !== l,
        v = AE(f);
      if (v && !EE(v))
        for (c = (u = xE(f, v)).next, f = []; !(a = mE(c, u)).done; )
          f.push(a.value);
      for (
        p && h > 2 && (l = yE(l, arguments[2])),
          r = SE(f),
          n = new (TE(s))(r),
          i = OE(n),
          e = 0;
        r > e;
        e++
      )
        (o = p ? l(f[e], e) : f[e]), (n[e] = i ? RE(o) : +o);
      return n;
    },
    eO = Yo.forEach,
    rO = zh,
    nO = Yi,
    iO = Re,
    oO = n,
    aO = PE,
    uO = qc,
    cO = Rr.get,
    sO = Rr.set,
    fO = Rr.enforce,
    hO = iO.f,
    lO = oO.f,
    pO = kE.RangeError,
    vO = FE.ArrayBuffer,
    dO = vO.prototype,
    gO = FE.DataView,
    yO = ME.NATIVE_ARRAY_BUFFER_VIEWS,
    mO = ME.TYPED_ARRAY_TAG,
    wO = ME.TypedArray,
    bO = ME.TypedArrayPrototype,
    SO = ME.isTypedArray,
    xO = "BYTES_PER_ELEMENT",
    AO = "Wrong length",
    EO = function (t, e) {
      nO(t, e, {
        configurable: !0,
        get: function () {
          return cO(this)[e];
        },
      });
    },
    OO = function (t) {
      var e;
      return (
        QE(dO, t) || "ArrayBuffer" === (e = VE(t)) || "SharedArrayBuffer" === e
      );
    },
    TO = function (t, e) {
      return SO(t) && !JE(e) && e in t && zE(+e) && e >= 0;
    },
    RO = function (t, e) {
      return (e = $E(e)), TO(t, e) ? _E(2, t[e]) : lO(t, e);
    },
    IO = function (t, e, r) {
      return (
        (e = $E(e)),
        !(TO(t, e) && YE(r) && GE(r, "value")) ||
        GE(r, "get") ||
        GE(r, "set") ||
        r.configurable ||
        (GE(r, "writable") && !r.writable) ||
        (GE(r, "enumerable") && !r.enumerable)
          ? hO(t, e, r)
          : ((t[e] = r.value), t)
      );
    };
  CE
    ? (yO ||
        ((oO.f = RO),
        (iO.f = IO),
        EO(bO, "buffer"),
        EO(bO, "byteOffset"),
        EO(bO, "byteLength"),
        EO(bO, "length")),
      jE(
        { target: "Object", stat: !0, forced: !yO },
        { getOwnPropertyDescriptor: RO, defineProperty: IO }
      ),
      (QS.exports = function (t, e, r) {
        var n = t.match(/\d+/)[0] / 8,
          i = t + (r ? "Clamped" : "") + "Array",
          o = "get" + t,
          a = "set" + t,
          u = kE[i],
          c = u,
          s = c && c.prototype,
          f = {},
          h = function (t, e) {
            hO(t, e, {
              get: function () {
                return (function (t, e) {
                  var r = cO(t);
                  return r.view[o](e * n + r.byteOffset, !0);
                })(this, e);
              },
              set: function (t) {
                return (function (t, e, i) {
                  var o = cO(t);
                  o.view[a](e * n + o.byteOffset, r ? WE(i) : i, !0);
                })(this, e, t);
              },
              enumerable: !0,
            });
          };
        yO
          ? UE &&
            ((c = e(function (t, e, r, i) {
              return (
                BE(t, s),
                uO(
                  YE(e)
                    ? OO(e)
                      ? void 0 !== i
                        ? new u(e, HE(r, n), i)
                        : void 0 !== r
                          ? new u(e, HE(r, n))
                          : new u(e)
                      : SO(e)
                        ? aO(c, e)
                        : LE(tO, c, e)
                    : new u(qE(e)),
                  t,
                  c
                )
              );
            })),
            XE && XE(c, wO),
            eO(ZE(u), function (t) {
              t in c || DE(c, t, u[t]);
            }),
            (c.prototype = s))
          : ((c = e(function (t, e, r, i) {
              BE(t, s);
              var o,
                a,
                u,
                f = 0,
                l = 0;
              if (YE(e)) {
                if (!OO(e)) return SO(e) ? aO(c, e) : LE(tO, c, e);
                (o = e), (l = HE(r, n));
                var p = e.byteLength;
                if (void 0 === i) {
                  if (p % n) throw new pO(AO);
                  if ((a = p - l) < 0) throw new pO(AO);
                } else if ((a = NE(i) * n) + l > p) throw new pO(AO);
                u = a / n;
              } else (u = qE(e)), (o = new vO((a = u * n)));
              for (
                sO(t, {
                  buffer: o,
                  byteOffset: l,
                  byteLength: a,
                  length: u,
                  view: new gO(o),
                });
                f < u;

              )
                h(t, f++);
            })),
            XE && XE(c, wO),
            (s = c.prototype = KE(bO))),
          s.constructor !== c && DE(s, "constructor", c),
          (fO(s).TypedArrayConstructor = c),
          mO && DE(s, mO, i);
        var l = c !== u;
        (f[i] = c),
          jE({ global: !0, constructor: !0, forced: l, sham: !yO }, f),
          xO in c || DE(c, xO, n),
          xO in s || DE(s, xO, n),
          rO(i);
      }))
    : (QS.exports = function () {});
  var PO = QS.exports;
  PO("Float32", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
    PO("Uint8", function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    }),
    PO(
      "Uint8",
      function (t) {
        return function (e, r, n) {
          return t(this, e, r, n);
        };
      },
      !0
    ),
    PO("Uint16", function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    }),
    PO("Uint32", function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  var jO = hn,
    kO = en,
    LO = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("at", function (t) {
    var e = LO(this),
      r = jO(e),
      n = kO(t),
      i = n >= 0 ? n : r + n;
    return i < 0 || i >= r ? void 0 : e[i];
  });
  var CO = Bt,
    UO = an,
    MO = hn,
    FO = im,
    BO = Math.min,
    _O =
      [].copyWithin ||
      function (t, e) {
        var r = CO(this),
          n = MO(r),
          i = UO(t, n),
          o = UO(e, n),
          a = arguments.length > 2 ? arguments[2] : void 0,
          u = BO((void 0 === a ? n : UO(a, n)) - o, n - i),
          c = 1;
        for (
          o < i && i < o + u && ((c = -1), (o += u - 1), (i += u - 1));
          u-- > 0;

        )
          o in r ? (r[i] = r[o]) : FO(r, i), (i += c), (o += c);
        return r;
      },
    DO = Ux,
    zO = S(_O),
    NO = DO.aTypedArray;
  (0, DO.exportTypedArrayMethod)("copyWithin", function (t, e) {
    return zO(NO(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
  });
  var qO = Yo.every,
    HO = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("every", function (t) {
    return qO(HO(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var WO = Sy,
    $O = gE,
    GO = si,
    VO = s,
    YO = i,
    JO = Ux.aTypedArray,
    KO = Ux.exportTypedArrayMethod,
    QO = S("".slice);
  KO(
    "fill",
    function (t) {
      var e = arguments.length;
      JO(this);
      var r = "Big" === QO(GO(this), 0, 3) ? $O(t) : +t;
      return VO(
        WO,
        this,
        r,
        e > 1 ? arguments[1] : void 0,
        e > 2 ? arguments[2] : void 0
      );
    },
    YO(function () {
      var t = 0;
      return (
        new Int8Array(2).fill({
          valueOf: function () {
            return t++;
          },
        }),
        1 !== t
      );
    })
  );
  var XO = Xh,
    ZO = Ux.aTypedArrayConstructor,
    tT = Ux.getTypedArrayConstructor,
    eT = function (t) {
      return ZO(XO(t, tT(t)));
    },
    rT = PE,
    nT = eT,
    iT = Yo.filter,
    oT = function (t, e) {
      return rT(nT(t), e);
    },
    aT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("filter", function (t) {
    var e = iT(aT(this), t, arguments.length > 1 ? arguments[1] : void 0);
    return oT(this, e);
  });
  var uT = Yo.find,
    cT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("find", function (t) {
    return uT(cT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var sT = Yo.findIndex,
    fT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("findIndex", function (t) {
    return sT(fT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var hT = mo,
    lT = j,
    pT = Bt,
    vT = hn,
    dT = function (t) {
      var e = 1 === t;
      return function (r, n, i) {
        for (var o, a = pT(r), u = lT(a), c = vT(u), s = hT(n, i); c-- > 0; )
          if (s((o = u[c]), c, a))
            switch (t) {
              case 0:
                return o;
              case 1:
                return c;
            }
        return e ? -1 : void 0;
      };
    },
    gT = { findLast: dT(0), findLastIndex: dT(1) },
    yT = gT.findLast,
    mT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("findLast", function (t) {
    return yT(mT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var wT = gT.findLastIndex,
    bT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("findLastIndex", function (t) {
    return wT(bT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var ST = Yo.forEach,
    xT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("forEach", function (t) {
    ST(xT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var AT = gn.includes,
    ET = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("includes", function (t) {
    return AT(ET(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var OT = gn.indexOf,
    TT = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("indexOf", function (t) {
    return OT(TT(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var RT = r,
    IT = i,
    PT = S,
    jT = Ux,
    kT = Bf,
    LT = te("iterator"),
    CT = RT.Uint8Array,
    UT = PT(kT.values),
    MT = PT(kT.keys),
    FT = PT(kT.entries),
    BT = jT.aTypedArray,
    _T = jT.exportTypedArrayMethod,
    DT = CT && CT.prototype,
    zT = !IT(function () {
      DT[LT].call([1]);
    }),
    NT =
      !!DT && DT.values && DT[LT] === DT.values && "values" === DT.values.name,
    qT = function () {
      return UT(BT(this));
    };
  _T(
    "entries",
    function () {
      return FT(BT(this));
    },
    zT
  ),
    _T(
      "keys",
      function () {
        return MT(BT(this));
      },
      zT
    ),
    _T("values", qT, zT || !NT, { name: "values" }),
    _T(LT, qT, zT || !NT, { name: "values" });
  var HT = Ux.aTypedArray,
    WT = Ux.exportTypedArrayMethod,
    $T = S([].join);
  WT("join", function (t) {
    return $T(HT(this), t);
  });
  var GT = Eu,
    VT = B,
    YT = en,
    JT = hn,
    KT = _g,
    QT = Math.min,
    XT = [].lastIndexOf,
    ZT = !!XT && 1 / [1].lastIndexOf(1, -0) < 0,
    tR = KT("lastIndexOf"),
    eR =
      ZT || !tR
        ? function (t) {
            if (ZT) return GT(XT, this, arguments) || 0;
            var e = VT(this),
              r = JT(e);
            if (0 === r) return -1;
            var n = r - 1;
            for (
              arguments.length > 1 && (n = QT(n, YT(arguments[1]))),
                n < 0 && (n = r + n);
              n >= 0;
              n--
            )
              if (n in e && e[n] === t) return n || 0;
            return -1;
          }
        : XT,
    rR = Eu,
    nR = eR,
    iR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("lastIndexOf", function (t) {
    var e = arguments.length;
    return rR(nR, iR(this), e > 1 ? [t, arguments[1]] : [t]);
  });
  var oR = Yo.map,
    aR = eT,
    uR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("map", function (t) {
    return oR(
      uR(this),
      t,
      arguments.length > 1 ? arguments[1] : void 0,
      function (t, e) {
        return new (aR(t))(e);
      }
    );
  });
  var cR = dt,
    sR = Bt,
    fR = j,
    hR = hn,
    lR = TypeError,
    pR = "Reduce of empty array with no initial value",
    vR = function (t) {
      return function (e, r, n, i) {
        var o = sR(e),
          a = fR(o),
          u = hR(o);
        if ((cR(r), 0 === u && n < 2)) throw new lR(pR);
        var c = t ? u - 1 : 0,
          s = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (c in a) {
              (i = a[c]), (c += s);
              break;
            }
            if (((c += s), t ? c < 0 : u <= c)) throw new lR(pR);
          }
        for (; t ? c >= 0 : u > c; c += s) c in a && (i = r(i, a[c], c, o));
        return i;
      };
    },
    dR = { left: vR(!1), right: vR(!0) },
    gR = dR.left,
    yR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("reduce", function (t) {
    var e = arguments.length;
    return gR(yR(this), t, e, e > 1 ? arguments[1] : void 0);
  });
  var mR = dR.right,
    wR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("reduceRight", function (t) {
    var e = arguments.length;
    return mR(wR(this), t, e, e > 1 ? arguments[1] : void 0);
  });
  var bR = Ux.aTypedArray,
    SR = Ux.exportTypedArrayMethod,
    xR = Math.floor;
  SR("reverse", function () {
    for (var t, e = this, r = bR(e).length, n = xR(r / 2), i = 0; i < n; )
      (t = e[i]), (e[i++] = e[--r]), (e[r] = t);
    return e;
  });
  var AR = r,
    ER = s,
    OR = Ux,
    TR = hn,
    RR = fE,
    IR = Bt,
    PR = i,
    jR = AR.RangeError,
    kR = AR.Int8Array,
    LR = kR && kR.prototype,
    CR = LR && LR.set,
    UR = OR.aTypedArray,
    MR = OR.exportTypedArrayMethod,
    FR = !PR(function () {
      var t = new Uint8ClampedArray(2);
      return ER(CR, t, { length: 1, 0: 3 }, 1), 3 !== t[1];
    }),
    BR =
      FR &&
      OR.NATIVE_ARRAY_BUFFER_VIEWS &&
      PR(function () {
        var t = new kR(2);
        return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1];
      });
  MR(
    "set",
    function (t) {
      UR(this);
      var e = RR(arguments.length > 1 ? arguments[1] : void 0, 1),
        r = IR(t);
      if (FR) return ER(CR, this, r, e);
      var n = this.length,
        i = TR(r),
        o = 0;
      if (i + e > n) throw new jR("Wrong length");
      for (; o < i; ) this[e + o] = r[o++];
    },
    !FR || BR
  );
  var _R = eT,
    DR = zi,
    zR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)(
    "slice",
    function (t, e) {
      for (
        var r = DR(zR(this), t, e),
          n = _R(this),
          i = 0,
          o = r.length,
          a = new n(o);
        o > i;

      )
        a[i] = r[i++];
      return a;
    },
    i(function () {
      new Int8Array(1).slice();
    })
  );
  var NR = Yo.some,
    qR = Ux.aTypedArray;
  (0, Ux.exportTypedArrayMethod)("some", function (t) {
    return NR(qR(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var HR = zi,
    WR = Math.floor,
    $R = function (t, e) {
      var r = t.length;
      if (r < 8)
        for (var n, i, o = 1; o < r; ) {
          for (i = o, n = t[o]; i && e(t[i - 1], n) > 0; ) t[i] = t[--i];
          i !== o++ && (t[i] = n);
        }
      else
        for (
          var a = WR(r / 2),
            u = $R(HR(t, 0, a), e),
            c = $R(HR(t, a), e),
            s = u.length,
            f = c.length,
            h = 0,
            l = 0;
          h < s || l < f;

        )
          t[h + l] =
            h < s && l < f
              ? e(u[h], c[l]) <= 0
                ? u[h++]
                : c[l++]
              : h < s
                ? u[h++]
                : c[l++];
      return t;
    },
    GR = $R,
    VR = G.match(/firefox\/(\d+)/i),
    YR = !!VR && +VR[1],
    JR = /MSIE|Trident/.test(G),
    KR = G.match(/AppleWebKit\/(\d+)\./),
    QR = !!KR && +KR[1],
    XR = po,
    ZR = i,
    tI = dt,
    eI = GR,
    rI = YR,
    nI = JR,
    iI = Z,
    oI = QR,
    aI = Ux.aTypedArray,
    uI = Ux.exportTypedArrayMethod,
    cI = r.Uint16Array,
    sI = cI && XR(cI.prototype.sort),
    fI = !(
      !sI ||
      (ZR(function () {
        sI(new cI(2), null);
      }) &&
        ZR(function () {
          sI(new cI(2), {});
        }))
    ),
    hI =
      !!sI &&
      !ZR(function () {
        if (iI) return iI < 74;
        if (rI) return rI < 67;
        if (nI) return !0;
        if (oI) return oI < 602;
        var t,
          e,
          r = new cI(516),
          n = Array(516);
        for (t = 0; t < 516; t++)
          (e = t % 4), (r[t] = 515 - t), (n[t] = t - 2 * e + 3);
        for (
          sI(r, function (t, e) {
            return ((t / 4) | 0) - ((e / 4) | 0);
          }),
            t = 0;
          t < 516;
          t++
        )
          if (r[t] !== n[t]) return !0;
      });
  uI(
    "sort",
    function (t) {
      return (
        void 0 !== t && tI(t),
        hI
          ? sI(this, t)
          : eI(
              aI(this),
              (function (t) {
                return function (e, r) {
                  return void 0 !== t
                    ? +t(e, r) || 0
                    : r != r
                      ? -1
                      : e != e
                        ? 1
                        : 0 === e && 0 === r
                          ? 1 / e > 0 && 1 / r < 0
                            ? 1
                            : -1
                          : e > r;
                };
              })(t)
            )
      );
    },
    !hI || fI
  );
  var lI = Eu,
    pI = Ux,
    vI = i,
    dI = zi,
    gI = r.Int8Array,
    yI = pI.aTypedArray,
    mI = pI.exportTypedArrayMethod,
    wI = [].toLocaleString,
    bI =
      !!gI &&
      vI(function () {
        wI.call(new gI(1));
      });
  mI(
    "toLocaleString",
    function () {
      return lI(wI, bI ? dI(yI(this)) : yI(this), dI(arguments));
    },
    vI(function () {
      return [1, 2].toLocaleString() !== new gI([1, 2]).toLocaleString();
    }) ||
      !vI(function () {
        gI.prototype.toLocaleString.call([1, 2]);
      })
  );
  var SI = hn,
    xI = function (t, e) {
      for (var r = SI(t), n = new e(r), i = 0; i < r; i++) n[i] = t[r - i - 1];
      return n;
    },
    AI = Ux.aTypedArray,
    EI = Ux.getTypedArrayConstructor;
  (0, Ux.exportTypedArrayMethod)("toReversed", function () {
    return xI(AI(this), EI(this));
  });
  var OI = dt,
    TI = PE,
    RI = Ux.aTypedArray,
    II = Ux.getTypedArrayConstructor,
    PI = Ux.exportTypedArrayMethod,
    jI = S(Ux.TypedArrayPrototype.sort);
  PI("toSorted", function (t) {
    void 0 !== t && OI(t);
    var e = RI(this),
      r = TI(II(e), e);
    return jI(r, t);
  });
  var kI = Ux.exportTypedArrayMethod,
    LI = i,
    CI = S,
    UI = r.Uint8Array,
    MI = (UI && UI.prototype) || {},
    FI = [].toString,
    BI = CI([].join);
  LI(function () {
    FI.call({});
  }) &&
    (FI = function () {
      return BI(this);
    });
  var _I = MI.toString !== FI;
  kI("toString", FI, _I);
  var DI = hn,
    zI = en,
    NI = RangeError,
    qI = function (t, e, r, n) {
      var i = DI(t),
        o = zI(r),
        a = o < 0 ? i + o : o;
      if (a >= i || a < 0) throw new NI("Incorrect index");
      for (var u = new e(i), c = 0; c < i; c++) u[c] = c === a ? n : t[c];
      return u;
    },
    HI = pE,
    WI = en,
    $I = gE,
    GI = Ux.aTypedArray,
    VI = Ux.getTypedArrayConstructor,
    YI = Ux.exportTypedArrayMethod,
    JI = !!(function () {
      try {
        new Int8Array(1).with(2, {
          valueOf: function () {
            throw 8;
          },
        });
      } catch (_q) {
        return 8 === _q;
      }
    })();
  YI(
    "with",
    {
      with: function (t, e) {
        var r = GI(this),
          n = WI(t),
          i = HI(r) ? $I(e) : +e;
        return qI(r, VI(r), n, i);
      },
    }.with,
    !JI
  );
  var KI = S,
    QI = pb,
    XI = Jw.getWeakData,
    ZI = Hh,
    tP = Le,
    eP = k,
    rP = N,
    nP = nd,
    iP = zt,
    oP = Rr.set,
    aP = Rr.getterFor,
    uP = Yo.find,
    cP = Yo.findIndex,
    sP = KI([].splice),
    fP = 0,
    hP = function (t) {
      return t.frozen || (t.frozen = new lP());
    },
    lP = function () {
      this.entries = [];
    },
    pP = function (t, e) {
      return uP(t.entries, function (t) {
        return t[0] === e;
      });
    };
  lP.prototype = {
    get: function (t) {
      var e = pP(this, t);
      if (e) return e[1];
    },
    has: function (t) {
      return !!pP(this, t);
    },
    set: function (t, e) {
      var r = pP(this, t);
      r ? (r[1] = e) : this.entries.push([t, e]);
    },
    delete: function (t) {
      var e = cP(this.entries, function (e) {
        return e[0] === t;
      });
      return ~e && sP(this.entries, e, 1), !!~e;
    },
  };
  var vP,
    dP = {
      getConstructor: function (t, e, r, n) {
        var i = t(function (t, i) {
            ZI(t, o),
              oP(t, { type: e, id: fP++, frozen: void 0 }),
              eP(i) || nP(i, t[n], { that: t, AS_ENTRIES: r });
          }),
          o = i.prototype,
          a = aP(e),
          u = function (t, e, r) {
            var n = a(t),
              i = XI(tP(e), !0);
            return !0 === i ? hP(n).set(e, r) : (i[n.id] = r), t;
          };
        return (
          QI(o, {
            delete: function (t) {
              var e = a(this);
              if (!rP(t)) return !1;
              var r = XI(t);
              return !0 === r
                ? hP(e).delete(t)
                : r && iP(r, e.id) && delete r[e.id];
            },
            has: function (t) {
              var e = a(this);
              if (!rP(t)) return !1;
              var r = XI(t);
              return !0 === r ? hP(e).has(t) : r && iP(r, e.id);
            },
          }),
          QI(
            o,
            r
              ? {
                  get: function (t) {
                    var e = a(this);
                    if (rP(t)) {
                      var r = XI(t);
                      return !0 === r ? hP(e).get(t) : r ? r[e.id] : void 0;
                    }
                  },
                  set: function (t, e) {
                    return u(this, t, e);
                  },
                }
              : {
                  add: function (t) {
                    return u(this, t, !0);
                  },
                }
          ),
          i
        );
      },
    },
    gP = Cw,
    yP = r,
    mP = S,
    wP = pb,
    bP = Jw,
    SP = hb,
    xP = dP,
    AP = N,
    EP = Rr.enforce,
    OP = i,
    TP = sr,
    RP = Object,
    IP = Array.isArray,
    PP = RP.isExtensible,
    jP = RP.isFrozen,
    kP = RP.isSealed,
    LP = RP.freeze,
    CP = RP.seal,
    UP = !yP.ActiveXObject && "ActiveXObject" in yP,
    MP = function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    FP = SP("WeakMap", MP, xP),
    BP = FP.prototype,
    _P = mP(BP.set);
  if (TP)
    if (UP) {
      (vP = xP.getConstructor(MP, "WeakMap", !0)), bP.enable();
      var DP = mP(BP.delete),
        zP = mP(BP.has),
        NP = mP(BP.get);
      wP(BP, {
        delete: function (t) {
          if (AP(t) && !PP(t)) {
            var e = EP(this);
            return (
              e.frozen || (e.frozen = new vP()),
              DP(this, t) || e.frozen.delete(t)
            );
          }
          return DP(this, t);
        },
        has: function (t) {
          if (AP(t) && !PP(t)) {
            var e = EP(this);
            return (
              e.frozen || (e.frozen = new vP()), zP(this, t) || e.frozen.has(t)
            );
          }
          return zP(this, t);
        },
        get: function (t) {
          if (AP(t) && !PP(t)) {
            var e = EP(this);
            return (
              e.frozen || (e.frozen = new vP()),
              zP(this, t) ? NP(this, t) : e.frozen.get(t)
            );
          }
          return NP(this, t);
        },
        set: function (t, e) {
          if (AP(t) && !PP(t)) {
            var r = EP(this);
            r.frozen || (r.frozen = new vP()),
              zP(this, t) ? _P(this, t, e) : r.frozen.set(t, e);
          } else _P(this, t, e);
          return this;
        },
      });
    } else
      gP &&
        OP(function () {
          var t = LP([]);
          return _P(new FP(), t, 1), !jP(t);
        }) &&
        wP(BP, {
          set: function (t, e) {
            var r;
            return (
              IP(t) && (jP(t) ? (r = LP) : kP(t) && (r = CP)),
              _P(this, t, e),
              r && r(t),
              this
            );
          },
        });
  var qP = nd,
    HP = dt,
    WP = Le,
    $P = Ig;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      every: function (t) {
        WP(this), HP(t);
        var e = $P(this),
          r = 0;
        return !qP(
          e,
          function (e, n) {
            if (!t(e, r++)) return n();
          },
          { IS_RECORD: !0, INTERRUPTED: !0 }
        ).stopped;
      },
    }
  );
  var GP = s,
    VP = _i,
    YP = Ge,
    JP = pb,
    KP = Rr,
    QP = mt,
    XP = Ks.IteratorPrototype,
    ZP = Of,
    tj = Hv,
    ej = te("toStringTag"),
    rj = "IteratorHelper",
    nj = "WrapForValidIterator",
    ij = KP.set,
    oj = function (t) {
      var e = KP.getterFor(t ? nj : rj);
      return JP(VP(XP), {
        next: function () {
          var r = e(this);
          if (t) return r.nextHandler();
          try {
            var n = r.done ? void 0 : r.nextHandler();
            return ZP(n, r.done);
          } catch (_q) {
            throw ((r.done = !0), _q);
          }
        },
        return: function () {
          var r = e(this),
            n = r.iterator;
          if (((r.done = !0), t)) {
            var i = QP(n, "return");
            return i ? GP(i, n) : ZP(void 0, !0);
          }
          if (r.inner)
            try {
              tj(r.inner.iterator, "normal");
            } catch (_q) {
              return tj(n, "throw", _q);
            }
          return tj(n, "normal"), ZP(void 0, !0);
        },
      });
    },
    aj = oj(!0),
    uj = oj(!1);
  YP(uj, ej, "Iterator Helper");
  var cj = function (t, e) {
      var r = function (r, n) {
        n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
          (n.type = e ? nj : rj),
          (n.nextHandler = t),
          (n.counter = 0),
          (n.done = !1),
          ij(this, n);
      };
      return (r.prototype = e ? aj : uj), r;
    },
    sj = ti,
    fj = s,
    hj = dt,
    lj = Le,
    pj = Ig,
    vj = Fy,
    dj = cj(function () {
      for (var t, e, r = this.iterator, n = this.predicate, i = this.next; ; ) {
        if (((t = lj(fj(i, r))), (this.done = !!t.done))) return;
        if (((e = t.value), vj(r, n, [e, this.counter++], !0))) return e;
      }
    });
  sj(
    { target: "Iterator", proto: !0, real: !0, forced: false },
    {
      filter: function (t) {
        return lj(this), hj(t), new dj(pj(this), { predicate: t });
      },
    }
  );
  var gj = nd,
    yj = dt,
    mj = Le,
    wj = Ig;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      find: function (t) {
        mj(this), yj(t);
        var e = wj(this),
          r = 0;
        return gj(
          e,
          function (e, n) {
            if (t(e, r++)) return n(e);
          },
          { IS_RECORD: !0, INTERRUPTED: !0 }
        ).result;
      },
    }
  );
  var bj = s,
    Sj = dt,
    xj = Le,
    Aj = Ig,
    Ej = Fy,
    Oj = cj(function () {
      var t = this.iterator,
        e = xj(bj(this.next, t));
      if (!(this.done = !!e.done))
        return Ej(t, this.mapper, [e.value, this.counter++], !0);
    });
  ti(
    { target: "Iterator", proto: !0, real: !0, forced: false },
    {
      map: function (t) {
        return xj(this), Sj(t), new Oj(Aj(this), { mapper: t });
      },
    }
  );
  var Tj = S,
    Rj = Set.prototype,
    Ij = {
      Set: Set,
      add: Tj(Rj.add),
      has: Tj(Rj.has),
      remove: Tj(Rj.delete),
      proto: Rj,
    },
    Pj = Ij.has,
    jj = function (t) {
      return Pj(t), t;
    },
    kj = s,
    Lj = function (t, e, r) {
      for (var n, i, o = r ? t : t.iterator, a = t.next; !(n = kj(a, o)).done; )
        if (void 0 !== (i = e(n.value))) return i;
    },
    Cj = S,
    Uj = Lj,
    Mj = Ij.Set,
    Fj = Ij.proto,
    Bj = Cj(Fj.forEach),
    _j = Cj(Fj.keys),
    Dj = _j(new Mj()).next,
    zj = function (t, e, r) {
      return r ? Uj({ iterator: _j(t), next: Dj }, e) : Bj(t, e);
    },
    Nj = zj,
    qj = Ij.Set,
    Hj = Ij.add,
    Wj = function (t) {
      var e = new qj();
      return (
        Nj(t, function (t) {
          Hj(e, t);
        }),
        e
      );
    },
    $j =
      Rc(Ij.proto, "size", "get") ||
      function (t) {
        return t.size;
      },
    Gj = dt,
    Vj = Le,
    Yj = s,
    Jj = en,
    Kj = Ig,
    Qj = "Invalid size",
    Xj = RangeError,
    Zj = TypeError,
    tk = Math.max,
    ek = function (t, e) {
      (this.set = t),
        (this.size = tk(e, 0)),
        (this.has = Gj(t.has)),
        (this.keys = Gj(t.keys));
    };
  ek.prototype = {
    getIterator: function () {
      return Kj(Vj(Yj(this.keys, this.set)));
    },
    includes: function (t) {
      return Yj(this.has, this.set, t);
    },
  };
  var rk = function (t) {
      Vj(t);
      var e = +t.size;
      if (e != e) throw new Zj(Qj);
      var r = Jj(e);
      if (r < 0) throw new Xj(Qj);
      return new ek(t, r);
    },
    nk = jj,
    ik = Wj,
    ok = $j,
    ak = rk,
    uk = zj,
    ck = Lj,
    sk = Ij.has,
    fk = Ij.remove,
    hk = W,
    lk = function (t) {
      return {
        size: t,
        has: function () {
          return !1;
        },
        keys: function () {
          return {
            next: function () {
              return { done: !0 };
            },
          };
        },
      };
    },
    pk = function (t) {
      var e = hk("Set");
      try {
        new e()[t](lk(0));
        try {
          return new e()[t](lk(-1)), !1;
        } catch (r) {
          return !0;
        }
      } catch (_q) {
        return !1;
      }
    },
    vk = function (t) {
      var e = nk(this),
        r = ak(t),
        n = ik(e);
      return (
        ok(e) <= r.size
          ? uk(e, function (t) {
              r.includes(t) && fk(n, t);
            })
          : ck(r.getIterator(), function (t) {
              sk(e, t) && fk(n, t);
            }),
        n
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("difference") },
    { difference: vk }
  );
  var dk = jj,
    gk = $j,
    yk = rk,
    mk = zj,
    wk = Lj,
    bk = Ij.Set,
    Sk = Ij.add,
    xk = Ij.has,
    Ak = i,
    Ek = function (t) {
      var e = dk(this),
        r = yk(t),
        n = new bk();
      return (
        gk(e) > r.size
          ? wk(r.getIterator(), function (t) {
              xk(e, t) && Sk(n, t);
            })
          : mk(e, function (t) {
              r.includes(t) && Sk(n, t);
            }),
        n
      );
    };
  ti(
    {
      target: "Set",
      proto: !0,
      real: !0,
      forced:
        !pk("intersection") ||
        Ak(function () {
          return (
            "3,2" !==
            String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
          );
        }),
    },
    { intersection: Ek }
  );
  var Ok = jj,
    Tk = Ij.has,
    Rk = $j,
    Ik = rk,
    Pk = zj,
    jk = Lj,
    kk = Hv,
    Lk = function (t) {
      var e = Ok(this),
        r = Ik(t);
      if (Rk(e) <= r.size)
        return (
          !1 !==
          Pk(
            e,
            function (t) {
              if (r.includes(t)) return !1;
            },
            !0
          )
        );
      var n = r.getIterator();
      return (
        !1 !==
        jk(n, function (t) {
          if (Tk(e, t)) return kk(n, "normal", !1);
        })
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("isDisjointFrom") },
    { isDisjointFrom: Lk }
  );
  var Ck = jj,
    Uk = $j,
    Mk = zj,
    Fk = rk,
    Bk = function (t) {
      var e = Ck(this),
        r = Fk(t);
      return (
        !(Uk(e) > r.size) &&
        !1 !==
          Mk(
            e,
            function (t) {
              if (!r.includes(t)) return !1;
            },
            !0
          )
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("isSubsetOf") },
    { isSubsetOf: Bk }
  );
  var _k = jj,
    Dk = Ij.has,
    zk = $j,
    Nk = rk,
    qk = Lj,
    Hk = Hv,
    Wk = function (t) {
      var e = _k(this),
        r = Nk(t);
      if (zk(e) < r.size) return !1;
      var n = r.getIterator();
      return (
        !1 !==
        qk(n, function (t) {
          if (!Dk(e, t)) return Hk(n, "normal", !1);
        })
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("isSupersetOf") },
    { isSupersetOf: Wk }
  );
  var $k = jj,
    Gk = Wj,
    Vk = rk,
    Yk = Lj,
    Jk = Ij.add,
    Kk = Ij.has,
    Qk = Ij.remove,
    Xk = function (t) {
      var e = $k(this),
        r = Vk(t).getIterator(),
        n = Gk(e);
      return (
        Yk(r, function (t) {
          Kk(e, t) ? Qk(n, t) : Jk(n, t);
        }),
        n
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("symmetricDifference") },
    { symmetricDifference: Xk }
  );
  var Zk = jj,
    tL = Ij.add,
    eL = Wj,
    rL = rk,
    nL = Lj,
    iL = function (t) {
      var e = Zk(this),
        r = rL(t).getIterator(),
        n = eL(e);
      return (
        nL(r, function (t) {
          tL(n, t);
        }),
        n
      );
    };
  ti(
    { target: "Set", proto: !0, real: !0, forced: !pk("union") },
    { union: iL }
  );
  var oL = r,
    aL = ip,
    uL = dt,
    cL = tl,
    sL = o;
  ti(
    {
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: i(function () {
        return (
          sL &&
          1 !==
            Object.getOwnPropertyDescriptor(oL, "queueMicrotask").value.length
        );
      }),
    },
    {
      queueMicrotask: function (t) {
        cL(arguments.length, 1), aL(uL(t));
      },
    }
  );
  var fL = ti,
    hL = r,
    lL = Yi,
    pL = o,
    vL = TypeError,
    dL = Object.defineProperty,
    gL = hL.self !== hL;
  try {
    if (pL) {
      var yL = Object.getOwnPropertyDescriptor(hL, "self");
      (!gL && yL && yL.get && yL.enumerable) ||
        lL(hL, "self", {
          get: function () {
            return hL;
          },
          set: function (t) {
            if (this !== hL) throw new vL("Illegal invocation");
            dL(hL, "self", {
              value: t,
              writable: !0,
              configurable: !0,
              enumerable: !0,
            });
          },
          configurable: !0,
          enumerable: !0,
        });
    } else fL({ global: !0, simple: !0, forced: gL }, { self: hL });
  } catch (_q) {}
  var mL = bo,
    wL = hn,
    bL = $f,
    SL = mo,
    xL = function (t, e, r, n, i, o, a, u) {
      for (var c, s, f = i, h = 0, l = !!a && SL(a, u); h < n; )
        h in r &&
          ((c = l ? l(r[h], h, e) : r[h]),
          o > 0 && mL(c)
            ? ((s = wL(c)), (f = xL(t, e, c, s, f, o - 1) - 1))
            : (bL(f + 1), (t[f] = c)),
          f++),
          h++;
      return f;
    },
    AL = xL,
    EL = Bt,
    OL = hn,
    TL = en,
    RL = zo;
  ti(
    { target: "Array", proto: !0 },
    {
      flat: function () {
        var t = arguments.length ? arguments[0] : void 0,
          e = EL(this),
          r = OL(e),
          n = RL(e, 0);
        return (n.length = AL(n, e, e, r, 0, void 0 === t ? 1 : TL(t))), n;
      },
    }
  );
  var IL = gn.includes,
    PL = ks;
  ti(
    {
      target: "Array",
      proto: !0,
      forced: i(function () {
        return !Array(1).includes();
      }),
    },
    {
      includes: function (t) {
        return IL(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    PL("includes");
  var jL = dR.left;
  ti(
    {
      target: "Array",
      proto: !0,
      forced: (!Mh && Z > 79 && Z < 83) || !_g("reduce"),
    },
    {
      reduce: function (t) {
        var e = arguments.length;
        return jL(this, t, e, e > 1 ? arguments[1] : void 0);
      },
    }
  );
  var kL = ti,
    LL = S,
    CL = dt,
    UL = Bt,
    ML = hn,
    FL = im,
    BL = li,
    _L = i,
    DL = GR,
    zL = _g,
    NL = YR,
    qL = JR,
    HL = Z,
    WL = QR,
    $L = [],
    GL = LL($L.sort),
    VL = LL($L.push),
    YL = _L(function () {
      $L.sort(void 0);
    }),
    JL = _L(function () {
      $L.sort(null);
    }),
    KL = zL("sort"),
    QL = !_L(function () {
      if (HL) return HL < 70;
      if (!(NL && NL > 3)) {
        if (qL) return !0;
        if (WL) return WL < 603;
        var t,
          e,
          r,
          n,
          i = "";
        for (t = 65; t < 76; t++) {
          switch (((e = String.fromCharCode(t)), t)) {
            case 66:
            case 69:
            case 70:
            case 72:
              r = 3;
              break;
            case 68:
            case 71:
              r = 4;
              break;
            default:
              r = 2;
          }
          for (n = 0; n < 47; n++) $L.push({ k: e + n, v: r });
        }
        for (
          $L.sort(function (t, e) {
            return e.v - t.v;
          }),
            n = 0;
          n < $L.length;
          n++
        )
          (e = $L[n].k.charAt(0)), i.charAt(i.length - 1) !== e && (i += e);
        return "DGBEFHACIJK" !== i;
      }
    });
  kL(
    { target: "Array", proto: !0, forced: YL || !JL || !KL || !QL },
    {
      sort: function (t) {
        void 0 !== t && CL(t);
        var e = UL(this);
        if (QL) return void 0 === t ? GL(e) : GL(e, t);
        var r,
          n,
          i = [],
          o = ML(e);
        for (n = 0; n < o; n++) n in e && VL(i, e[n]);
        for (
          DL(
            i,
            (function (t) {
              return function (e, r) {
                return void 0 === r
                  ? -1
                  : void 0 === e
                    ? 1
                    : void 0 !== t
                      ? +t(e, r) || 0
                      : BL(e) > BL(r)
                        ? 1
                        : -1;
              };
            })(t)
          ),
            r = ML(i),
            n = 0;
          n < r;

        )
          e[n] = i[n++];
        for (; n < o; ) FL(e, n++);
        return e;
      },
    }
  ),
    ks("flat");
  var XL = r;
  ti({ global: !0, forced: XL.globalThis !== XL }, { globalThis: XL });
  var ZL = o,
    tC = S,
    eC = s,
    rC = i,
    nC = gi,
    iC = Tn,
    oC = f,
    aC = Bt,
    uC = j,
    cC = Object.assign,
    sC = Object.defineProperty,
    fC = tC([].concat),
    hC =
      !cC ||
      rC(function () {
        if (
          ZL &&
          1 !==
            cC(
              { b: 1 },
              cC(
                sC({}, "a", {
                  enumerable: !0,
                  get: function () {
                    sC(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          r = Symbol("assign detection"),
          n = "abcdefghijklmnopqrst";
        return (
          (t[r] = 7),
          n.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 !== cC({}, t)[r] || nC(cC({}, e)).join("") !== n
        );
      })
        ? function (t, e) {
            for (
              var r = aC(t), n = arguments.length, i = 1, o = iC.f, a = oC.f;
              n > i;

            )
              for (
                var u,
                  c = uC(arguments[i++]),
                  s = o ? fC(nC(c), o(c)) : nC(c),
                  f = s.length,
                  h = 0;
                f > h;

              )
                (u = s[h++]), (ZL && !eC(a, c, u)) || (r[u] = c[u]);
            return r;
          }
        : cC,
    lC = hC;
  ti(
    { target: "Object", stat: !0, arity: 2, forced: Object.assign !== lC },
    { assign: lC }
  );
  var pC = o,
    vC = i,
    dC = S,
    gC = Ns,
    yC = gi,
    mC = B,
    wC = dC(f.f),
    bC = dC([].push),
    SC =
      pC &&
      vC(function () {
        var t = Object.create(null);
        return (t[2] = 2), !wC(t, 2);
      }),
    xC = function (t) {
      return function (e) {
        for (
          var r,
            n = mC(e),
            i = yC(n),
            o = SC && null === gC(n),
            a = i.length,
            u = 0,
            c = [];
          a > u;

        )
          (r = i[u++]),
            (pC && !(o ? r in n : wC(n, r))) || bC(c, t ? [r, n[r]] : n[r]);
        return c;
      };
    },
    AC = { entries: xC(!0), values: xC(!1) },
    EC = AC.entries;
  ti(
    { target: "Object", stat: !0 },
    {
      entries: function (t) {
        return EC(t);
      },
    }
  );
  var OC = ti,
    TC = Cw,
    RC = i,
    IC = N,
    PC = Jw.onFreeze,
    jC = Object.freeze;
  OC(
    {
      target: "Object",
      stat: !0,
      forced: RC(function () {
        jC(1);
      }),
      sham: !TC,
    },
    {
      freeze: function (t) {
        return jC && IC(t) ? jC(PC(t)) : t;
      },
    }
  );
  var kC = nd,
    LC = Zf;
  ti(
    { target: "Object", stat: !0 },
    {
      fromEntries: function (t) {
        var e = {};
        return (
          kC(
            t,
            function (t, r) {
              LC(e, t, r);
            },
            { AS_ENTRIES: !0 }
          ),
          e
        );
      },
    }
  );
  var CC = AC.values;
  ti(
    { target: "Object", stat: !0 },
    {
      values: function (t) {
        return CC(t);
      },
    }
  );
  var UC = ti,
    MC = ap,
    FC = i,
    BC = W,
    _C = D,
    DC = Xh,
    zC = Cd,
    NC = Kr,
    qC = MC && MC.prototype;
  if (
    (UC(
      {
        target: "Promise",
        proto: !0,
        real: !0,
        forced:
          !!MC &&
          FC(function () {
            qC.finally.call({ then: function () {} }, function () {});
          }),
      },
      {
        finally: function (t) {
          var e = DC(this, BC("Promise")),
            r = _C(t);
          return this.then(
            r
              ? function (r) {
                  return zC(e, t()).then(function () {
                    return r;
                  });
                }
              : t,
            r
              ? function (r) {
                  return zC(e, t()).then(function () {
                    throw r;
                  });
                }
              : t
          );
        },
      }
    ),
    _C(MC))
  ) {
    var HC = BC("Promise").prototype.finally;
    qC.finally !== HC && NC(qC, "finally", HC, { unsafe: !0 });
  }
  var WC = zt,
    $C = function (t) {
      return void 0 !== t && (WC(t, "value") || WC(t, "writable"));
    },
    GC = s,
    VC = N,
    YC = Le,
    JC = $C,
    KC = n,
    QC = Ns;
  ti(
    { target: "Reflect", stat: !0 },
    {
      get: function t(e, r) {
        var n,
          i,
          o = arguments.length < 3 ? e : arguments[2];
        return YC(e) === o
          ? e[r]
          : (n = KC.f(e, r))
            ? JC(n)
              ? n.value
              : void 0 === n.get
                ? void 0
                : GC(n.get, o)
            : VC((i = QC(e)))
              ? t(i, r, o)
              : void 0;
      },
    }
  ),
    ti({ target: "Reflect", stat: !0 }, { ownKeys: Ln });
  var XC = ti,
    ZC = s,
    tU = Le,
    eU = N,
    rU = $C,
    nU = Re,
    iU = n,
    oU = Ns,
    aU = g;
  var uU = i(function () {
    var t = function () {},
      e = nU.f(new t(), "a", { configurable: !0 });
    return !1 !== Reflect.set(t.prototype, "a", 1, e);
  });
  XC(
    { target: "Reflect", stat: !0, forced: uU },
    {
      set: function t(e, r, n) {
        var i,
          o,
          a,
          u = arguments.length < 4 ? e : arguments[3],
          c = iU.f(tU(e), r);
        if (!c) {
          if (eU((o = oU(e)))) return t(o, r, n, u);
          c = aU(0);
        }
        if (rU(c)) {
          if (!1 === c.writable || !eU(u)) return !1;
          if ((i = iU.f(u, r))) {
            if (i.get || i.set || !1 === i.writable) return !1;
            (i.value = n), nU.f(u, r, i);
          } else nU.f(u, r, aU(0, n));
        } else {
          if (void 0 === (a = c.set)) return !1;
          ZC(a, u, n);
        }
        return !0;
      },
    }
  );
  var cU = N,
    sU = O,
    fU = te("match"),
    hU = function (t) {
      var e;
      return cU(t) && (void 0 !== (e = t[fU]) ? !!e : "RegExp" === sU(t));
    },
    lU = o,
    pU = r,
    vU = S,
    dU = Gn,
    gU = qc,
    yU = Ge,
    mU = _i,
    wU = Qr.f,
    bU = $,
    SU = hU,
    xU = li,
    AU = FS,
    EU = Jb,
    OU = _c,
    TU = Kr,
    RU = i,
    IU = zt,
    PU = Rr.enforce,
    jU = zh,
    kU = Xb,
    LU = eS,
    CU = te("match"),
    UU = pU.RegExp,
    MU = UU.prototype,
    FU = pU.SyntaxError,
    BU = vU(MU.exec),
    _U = vU("".charAt),
    DU = vU("".replace),
    zU = vU("".indexOf),
    NU = vU("".slice),
    qU = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    HU = /a/g,
    WU = /a/g,
    $U = new UU(HU) !== HU,
    GU = EU.MISSED_STICKY,
    VU = EU.UNSUPPORTED_Y,
    YU =
      lU &&
      (!$U ||
        GU ||
        kU ||
        LU ||
        RU(function () {
          return (
            (WU[CU] = !1),
            UU(HU) !== HU || UU(WU) === WU || "/a/i" !== String(UU(HU, "i"))
          );
        }));
  if (dU("RegExp", YU)) {
    for (
      var JU = function (t, e) {
          var r,
            n,
            i,
            o,
            a,
            u,
            c = bU(MU, this),
            s = SU(t),
            f = void 0 === e,
            h = [],
            l = t;
          if (!c && s && f && t.constructor === JU) return t;
          if (
            ((s || bU(MU, t)) && ((t = t.source), f && (e = AU(l))),
            (t = void 0 === t ? "" : xU(t)),
            (e = void 0 === e ? "" : xU(e)),
            (l = t),
            kU &&
              ("dotAll" in HU) &&
              (n = !!e && zU(e, "s") > -1) &&
              (e = DU(e, /s/g, "")),
            (r = e),
            GU &&
              ("sticky" in HU) &&
              (i = !!e && zU(e, "y") > -1) &&
              VU &&
              (e = DU(e, /y/g, "")),
            LU &&
              ((o = (function (t) {
                for (
                  var e,
                    r = t.length,
                    n = 0,
                    i = "",
                    o = [],
                    a = mU(null),
                    u = !1,
                    c = !1,
                    s = 0,
                    f = "";
                  n <= r;
                  n++
                ) {
                  if ("\\" === (e = _U(t, n))) e += _U(t, ++n);
                  else if ("]" === e) u = !1;
                  else if (!u)
                    switch (!0) {
                      case "[" === e:
                        u = !0;
                        break;
                      case "(" === e:
                        BU(qU, NU(t, n + 1)) && ((n += 2), (c = !0)),
                          (i += e),
                          s++;
                        continue;
                      case ">" === e && c:
                        if ("" === f || IU(a, f))
                          throw new FU("Invalid capture group name");
                        (a[f] = !0), (o[o.length] = [f, s]), (c = !1), (f = "");
                        continue;
                    }
                  c ? (f += e) : (i += e);
                }
                return [i, o];
              })(t)),
              (t = o[0]),
              (h = o[1])),
            (a = gU(UU(t, e), c ? this : MU, JU)),
            (n || i || h.length) &&
              ((u = PU(a)),
              n &&
                ((u.dotAll = !0),
                (u.raw = JU(
                  (function (t) {
                    for (
                      var e, r = t.length, n = 0, i = "", o = !1;
                      n <= r;
                      n++
                    )
                      "\\" !== (e = _U(t, n))
                        ? o || "." !== e
                          ? ("[" === e ? (o = !0) : "]" === e && (o = !1),
                            (i += e))
                          : (i += "[\\s\\S]")
                        : (i += e + _U(t, ++n));
                    return i;
                  })(t),
                  r
                ))),
              i && (u.sticky = !0),
              h.length && (u.groups = h)),
            t !== l)
          )
            try {
              yU(a, "source", "" === l ? "(?:)" : l);
            } catch (_q) {}
          return a;
        },
        KU = wU(UU),
        QU = 0;
      KU.length > QU;

    )
      OU(JU, UU, KU[QU++]);
    (MU.constructor = JU),
      (JU.prototype = MU),
      TU(pU, "RegExp", JU, { constructor: !0 });
  }
  jU("RegExp");
  var XU = o,
    ZU = Xb,
    tM = O,
    eM = Yi,
    rM = Rr.get,
    nM = RegExp.prototype,
    iM = TypeError;
  XU &&
    ZU &&
    eM(nM, "dotAll", {
      configurable: !0,
      get: function () {
        if (this !== nM) {
          if ("RegExp" === tM(this)) return !!rM(this).dotAll;
          throw new iM("Incompatible receiver, RegExp required");
        }
      },
    });
  var oM = r,
    aM = fo;
  ti({ global: !0 }, { Reflect: {} }), aM(oM.Reflect, "Reflect", !0);
  var uM = o,
    cM = Jb.MISSED_STICKY,
    sM = O,
    fM = Yi,
    hM = Rr.get,
    lM = RegExp.prototype,
    pM = TypeError;
  uM &&
    cM &&
    fM(lM, "sticky", {
      configurable: !0,
      get: function () {
        if (this !== lM) {
          if ("RegExp" === sM(this)) return !!hM(this).sticky;
          throw new pM("Incompatible receiver, RegExp required");
        }
      },
    });
  var vM = hU,
    dM = TypeError,
    gM = function (t) {
      if (vM(t)) throw new dM("The method doesn't accept regular expressions");
      return t;
    },
    yM = te("match"),
    mM = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (r) {
        try {
          return (e[yM] = !1), "/./"[t](e);
        } catch (n) {}
      }
      return !1;
    },
    wM = ti,
    bM = po,
    SM = n.f,
    xM = sn,
    AM = li,
    EM = gM,
    OM = U,
    TM = mM,
    RM = bM("".slice),
    IM = Math.min,
    PM = TM("endsWith"),
    jM =
      !PM &&
      !!(function () {
        var t = SM(String.prototype, "endsWith");
        return t && !t.writable;
      })();
  wM(
    { target: "String", proto: !0, forced: !jM && !PM },
    {
      endsWith: function (t) {
        var e = AM(OM(this));
        EM(t);
        var r = arguments.length > 1 ? arguments[1] : void 0,
          n = e.length,
          i = void 0 === r ? n : IM(xM(r), n),
          o = AM(t);
        return RM(e, i - o.length, i) === o;
      },
    }
  );
  var kM = ti,
    LM = gM,
    CM = U,
    UM = li,
    MM = mM,
    FM = S("".indexOf);
  kM(
    { target: "String", proto: !0, forced: !MM("includes") },
    {
      includes: function (t) {
        return !!~FM(
          UM(CM(this)),
          UM(LM(t)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var BM = s,
    _M = Kr,
    DM = SS,
    zM = i,
    NM = te,
    qM = Ge,
    HM = NM("species"),
    WM = RegExp.prototype,
    $M = function (t, e, r, n) {
      var i = NM(t),
        o = !zM(function () {
          var e = {};
          return (
            (e[i] = function () {
              return 7;
            }),
            7 !== ""[t](e)
          );
        }),
        a =
          o &&
          !zM(function () {
            var e = !1,
              r = /a/;
            return (
              "split" === t &&
                (((r = {}).constructor = {}),
                (r.constructor[HM] = function () {
                  return r;
                }),
                (r.flags = ""),
                (r[i] = /./[i])),
              (r.exec = function () {
                return (e = !0), null;
              }),
              r[i](""),
              !e
            );
          });
      if (!o || !a || r) {
        var u = /./[i],
          c = e(i, ""[t], function (t, e, r, n, i) {
            var a = e.exec;
            return a === DM || a === WM.exec
              ? o && !i
                ? { done: !0, value: BM(u, e, r, n) }
                : { done: !0, value: BM(t, r, e, n) }
              : { done: !1 };
          });
        _M(String.prototype, t, c[0]), _M(WM, i, c[1]);
      }
      n && qM(WM[i], "sham", !0);
    },
    GM = S,
    VM = en,
    YM = li,
    JM = U,
    KM = GM("".charAt),
    QM = GM("".charCodeAt),
    XM = GM("".slice),
    ZM = function (t) {
      return function (e, r) {
        var n,
          i,
          o = YM(JM(e)),
          a = VM(r),
          u = o.length;
        return a < 0 || a >= u
          ? t
            ? ""
            : void 0
          : (n = QM(o, a)) < 55296 ||
              n > 56319 ||
              a + 1 === u ||
              (i = QM(o, a + 1)) < 56320 ||
              i > 57343
            ? t
              ? KM(o, a)
              : n
            : t
              ? XM(o, a, a + 2)
              : i - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    tF = { codeAt: ZM(!1), charAt: ZM(!0) },
    eF = tF.charAt,
    rF = function (t, e, r) {
      return e + (r ? eF(t, e).length : 1);
    },
    nF = S,
    iF = Bt,
    oF = Math.floor,
    aF = nF("".charAt),
    uF = nF("".replace),
    cF = nF("".slice),
    sF = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    fF = /\$([$&'`]|\d{1,2})/g,
    hF = s,
    lF = Le,
    pF = D,
    vF = O,
    dF = SS,
    gF = TypeError,
    yF = function (t, e) {
      var r = t.exec;
      if (pF(r)) {
        var n = hF(r, t, e);
        return null !== n && lF(n), n;
      }
      if ("RegExp" === vF(t)) return hF(dF, t, e);
      throw new gF("RegExp#exec called on incompatible receiver");
    },
    mF = Eu,
    wF = s,
    bF = S,
    SF = $M,
    xF = i,
    AF = Le,
    EF = D,
    OF = k,
    TF = en,
    RF = sn,
    IF = li,
    PF = U,
    jF = rF,
    kF = mt,
    LF = function (t, e, r, n, i, o) {
      var a = r + t.length,
        u = n.length,
        c = fF;
      return (
        void 0 !== i && ((i = iF(i)), (c = sF)),
        uF(o, c, function (o, c) {
          var s;
          switch (aF(c, 0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return cF(e, 0, r);
            case "'":
              return cF(e, a);
            case "<":
              s = i[cF(c, 1, -1)];
              break;
            default:
              var f = +c;
              if (0 === f) return o;
              if (f > u) {
                var h = oF(f / 10);
                return 0 === h
                  ? o
                  : h <= u
                    ? void 0 === n[h - 1]
                      ? aF(c, 1)
                      : n[h - 1] + aF(c, 1)
                    : o;
              }
              s = n[f - 1];
          }
          return void 0 === s ? "" : s;
        })
      );
    },
    CF = yF,
    UF = te("replace"),
    MF = Math.max,
    FF = Math.min,
    BF = bF([].concat),
    _F = bF([].push),
    DF = bF("".indexOf),
    zF = bF("".slice),
    NF = "$0" === "a".replace(/./, "$0"),
    qF = !!/./[UF] && "" === /./[UF]("a", "$0"),
    HF = !xF(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    });
  SF(
    "replace",
    function (t, e, r) {
      var n = qF ? "$" : "$0";
      return [
        function (t, r) {
          var n = PF(this),
            i = OF(t) ? void 0 : kF(t, UF);
          return i ? wF(i, t, n, r) : wF(e, IF(n), t, r);
        },
        function (t, i) {
          var o = AF(this),
            a = IF(t);
          if ("string" == typeof i && -1 === DF(i, n) && -1 === DF(i, "$<")) {
            var u = r(e, o, a, i);
            if (u.done) return u.value;
          }
          var c = EF(i);
          c || (i = IF(i));
          var s,
            f = o.global;
          f && ((s = o.unicode), (o.lastIndex = 0));
          for (var h, l = []; null !== (h = CF(o, a)) && (_F(l, h), f); ) {
            "" === IF(h[0]) && (o.lastIndex = jF(a, RF(o.lastIndex), s));
          }
          for (var p, v = "", d = 0, g = 0; g < l.length; g++) {
            for (
              var y,
                m = IF((h = l[g])[0]),
                w = MF(FF(TF(h.index), a.length), 0),
                b = [],
                S = 1;
              S < h.length;
              S++
            )
              _F(b, void 0 === (p = h[S]) ? p : String(p));
            var x = h.groups;
            if (c) {
              var A = BF([m], b, w, a);
              void 0 !== x && _F(A, x), (y = IF(mF(i, void 0, A)));
            } else y = LF(m, a, w, b, x, i);
            w >= d && ((v += zF(a, d, w) + y), (d = w + m.length));
          }
          return v + zF(a, d);
        },
      ];
    },
    !HF || !NF || qF
  );
  var WF =
      Object.is ||
      function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      },
    $F = s,
    GF = Le,
    VF = k,
    YF = U,
    JF = WF,
    KF = li,
    QF = mt,
    XF = yF;
  $M("search", function (t, e, r) {
    return [
      function (e) {
        var r = YF(this),
          n = VF(e) ? void 0 : QF(e, t);
        return n ? $F(n, e, r) : new RegExp(e)[t](KF(r));
      },
      function (t) {
        var n = GF(this),
          i = KF(t),
          o = r(e, n, i);
        if (o.done) return o.value;
        var a = n.lastIndex;
        JF(a, 0) || (n.lastIndex = 0);
        var u = XF(n, i);
        return (
          JF(n.lastIndex, a) || (n.lastIndex = a), null === u ? -1 : u.index
        );
      },
    ];
  });
  var ZF = s,
    tB = S,
    eB = $M,
    rB = Le,
    nB = k,
    iB = U,
    oB = Xh,
    aB = rF,
    uB = sn,
    cB = li,
    sB = mt,
    fB = yF,
    hB = i,
    lB = Jb.UNSUPPORTED_Y,
    pB = Math.min,
    vB = tB([].push),
    dB = tB("".slice),
    gB = !hB(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(t);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    }),
    yB =
      "c" === "abbc".split(/(b)*/)[1] ||
      4 !== "test".split(/(?:)/, -1).length ||
      2 !== "ab".split(/(?:ab)*/).length ||
      4 !== ".".split(/(.?)(.?)/).length ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length;
  eB(
    "split",
    function (t, e, r) {
      var n = "0".split(void 0, 0).length
        ? function (t, r) {
            return void 0 === t && 0 === r ? [] : ZF(e, this, t, r);
          }
        : e;
      return [
        function (e, r) {
          var i = iB(this),
            o = nB(e) ? void 0 : sB(e, t);
          return o ? ZF(o, e, i, r) : ZF(n, cB(i), e, r);
        },
        function (t, i) {
          var o = rB(this),
            a = cB(t);
          if (!yB) {
            var u = r(n, o, a, i, n !== e);
            if (u.done) return u.value;
          }
          var c = oB(o, RegExp),
            s = o.unicode,
            f =
              (o.ignoreCase ? "i" : "") +
              (o.multiline ? "m" : "") +
              (o.unicode ? "u" : "") +
              (lB ? "g" : "y"),
            h = new c(lB ? "^(?:" + o.source + ")" : o, f),
            l = void 0 === i ? 4294967295 : i >>> 0;
          if (0 === l) return [];
          if (0 === a.length) return null === fB(h, a) ? [a] : [];
          for (var p = 0, v = 0, d = []; v < a.length; ) {
            h.lastIndex = lB ? 0 : v;
            var g,
              y = fB(h, lB ? dB(a, v) : a);
            if (
              null === y ||
              (g = pB(uB(h.lastIndex + (lB ? v : 0)), a.length)) === p
            )
              v = aB(a, v, s);
            else {
              if ((vB(d, dB(a, p, v)), d.length === l)) return d;
              for (var m = 1; m <= y.length - 1; m++)
                if ((vB(d, y[m]), d.length === l)) return d;
              v = p = g;
            }
          }
          return vB(d, dB(a, p)), d;
        },
      ];
    },
    yB || !gB,
    lB
  );
  var mB = ti,
    wB = po,
    bB = n.f,
    SB = sn,
    xB = li,
    AB = gM,
    EB = U,
    OB = mM,
    TB = wB("".slice),
    RB = Math.min,
    IB = OB("startsWith"),
    PB =
      !IB &&
      !!(function () {
        var t = bB(String.prototype, "startsWith");
        return t && !t.writable;
      })();
  mB(
    { target: "String", proto: !0, forced: !PB && !IB },
    {
      startsWith: function (t) {
        var e = xB(EB(this));
        AB(t);
        var r = SB(RB(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          n = xB(t);
        return TB(e, r, r + n.length) === n;
      },
    }
  ),
    PO("Int32", function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  var jB = nd,
    kB = dt,
    LB = Le,
    CB = Ig,
    UB = TypeError;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      reduce: function (t) {
        LB(this), kB(t);
        var e = CB(this),
          r = arguments.length < 2,
          n = r ? void 0 : arguments[1],
          i = 0;
        if (
          (jB(
            e,
            function (e) {
              r ? ((r = !1), (n = e)) : (n = t(n, e, i)), i++;
            },
            { IS_RECORD: !0 }
          ),
          r)
        )
          throw new UB("Reduce of empty iterator with no initial value");
        return n;
      },
    }
  );
  var MB = nd,
    FB = dt,
    BB = Le,
    _B = Ig;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      some: function (t) {
        BB(this), FB(t);
        var e = _B(this),
          r = 0;
        return MB(
          e,
          function (e, n) {
            if (t(e, r++)) return n();
          },
          { IS_RECORD: !0, INTERRUPTED: !0 }
        ).stopped;
      },
    }
  );
  var DB = Le,
    zB = nd,
    NB = Ig,
    qB = [].push;
  ti(
    { target: "Iterator", proto: !0, real: !0 },
    {
      toArray: function () {
        var t = [];
        return zB(NB(DB(this)), qB, { that: t, IS_RECORD: !0 }), t;
      },
    }
  );
  var HB = S,
    WB = zt,
    $B = SyntaxError,
    GB = parseInt,
    VB = String.fromCharCode,
    YB = HB("".charAt),
    JB = HB("".slice),
    KB = HB(/./.exec),
    QB = {
      '\\"': '"',
      "\\\\": "\\",
      "\\/": "/",
      "\\b": "\b",
      "\\f": "\f",
      "\\n": "\n",
      "\\r": "\r",
      "\\t": "\t",
    },
    XB = /^[\da-f]{4}$/i,
    ZB = /^[\u0000-\u001F]$/,
    t_ = ti,
    e_ = o,
    r_ = r,
    n_ = W,
    i_ = S,
    o_ = s,
    a_ = D,
    u_ = N,
    c_ = bo,
    s_ = zt,
    f_ = li,
    h_ = hn,
    l_ = Zf,
    p_ = i,
    v_ = function (t, e) {
      for (var r = !0, n = ""; e < t.length; ) {
        var i = YB(t, e);
        if ("\\" === i) {
          var o = JB(t, e, e + 2);
          if (WB(QB, o)) (n += QB[o]), (e += 2);
          else {
            if ("\\u" !== o)
              throw new $B('Unknown escape sequence: "' + o + '"');
            var a = JB(t, (e += 2), e + 4);
            if (!KB(XB, a)) throw new $B("Bad Unicode escape at: " + e);
            (n += VB(GB(a, 16))), (e += 4);
          }
        } else {
          if ('"' === i) {
            (r = !1), e++;
            break;
          }
          if (KB(ZB, i))
            throw new $B("Bad control character in string literal at: " + e);
          (n += i), e++;
        }
      }
      if (r) throw new $B("Unterminated string at: " + e);
      return { value: n, end: e };
    },
    d_ = nt,
    g_ = r_.JSON,
    y_ = r_.Number,
    m_ = r_.SyntaxError,
    w_ = g_ && g_.parse,
    b_ = n_("Object", "keys"),
    S_ = Object.getOwnPropertyDescriptor,
    x_ = i_("".charAt),
    A_ = i_("".slice),
    E_ = i_(/./.exec),
    O_ = i_([].push),
    T_ = /^\d$/,
    R_ = /^[1-9]$/,
    I_ = /^(?:-|\d)$/,
    P_ = /^[\t\n\r ]$/,
    j_ = function (t, e, r, n) {
      var i,
        o,
        a,
        u,
        c,
        s = t[e],
        f = n && s === n.value,
        h = f && "string" == typeof n.source ? { source: n.source } : {};
      if (u_(s)) {
        var l = c_(s),
          p = f ? n.nodes : l ? [] : {};
        if (l)
          for (i = p.length, a = h_(s), u = 0; u < a; u++)
            k_(s, u, j_(s, "" + u, r, u < i ? p[u] : void 0));
        else
          for (o = b_(s), a = h_(o), u = 0; u < a; u++)
            (c = o[u]), k_(s, c, j_(s, c, r, s_(p, c) ? p[c] : void 0));
      }
      return o_(r, t, e, s, h);
    },
    k_ = function (t, e, r) {
      if (e_) {
        var n = S_(t, e);
        if (n && !n.configurable) return;
      }
      void 0 === r ? delete t[e] : l_(t, e, r);
    },
    L_ = function (t, e, r, n) {
      (this.value = t), (this.end = e), (this.source = r), (this.nodes = n);
    },
    C_ = function (t, e) {
      (this.source = t), (this.index = e);
    };
  C_.prototype = {
    fork: function (t) {
      return new C_(this.source, t);
    },
    parse: function () {
      var t = this.source,
        e = this.skip(P_, this.index),
        r = this.fork(e),
        n = x_(t, e);
      if (E_(I_, n)) return r.number();
      switch (n) {
        case "{":
          return r.object();
        case "[":
          return r.array();
        case '"':
          return r.string();
        case "t":
          return r.keyword(!0);
        case "f":
          return r.keyword(!1);
        case "n":
          return r.keyword(null);
      }
      throw new m_('Unexpected character: "' + n + '" at: ' + e);
    },
    node: function (t, e, r, n, i) {
      return new L_(e, n, t ? null : A_(this.source, r, n), i);
    },
    object: function () {
      for (
        var t = this.source, e = this.index + 1, r = !1, n = {}, i = {};
        e < t.length;

      ) {
        if (((e = this.until(['"', "}"], e)), "}" === x_(t, e) && !r)) {
          e++;
          break;
        }
        var o = this.fork(e).string(),
          a = o.value;
        (e = o.end),
          (e = this.until([":"], e) + 1),
          (e = this.skip(P_, e)),
          (o = this.fork(e).parse()),
          l_(i, a, o),
          l_(n, a, o.value),
          (e = this.until([",", "}"], o.end));
        var u = x_(t, e);
        if ("," === u) (r = !0), e++;
        else if ("}" === u) {
          e++;
          break;
        }
      }
      return this.node(1, n, this.index, e, i);
    },
    array: function () {
      for (
        var t = this.source, e = this.index + 1, r = !1, n = [], i = [];
        e < t.length;

      ) {
        if (((e = this.skip(P_, e)), "]" === x_(t, e) && !r)) {
          e++;
          break;
        }
        var o = this.fork(e).parse();
        if (
          (O_(i, o),
          O_(n, o.value),
          (e = this.until([",", "]"], o.end)),
          "," === x_(t, e))
        )
          (r = !0), e++;
        else if ("]" === x_(t, e)) {
          e++;
          break;
        }
      }
      return this.node(1, n, this.index, e, i);
    },
    string: function () {
      var t = this.index,
        e = v_(this.source, this.index + 1);
      return this.node(0, e.value, t, e.end);
    },
    number: function () {
      var t = this.source,
        e = this.index,
        r = e;
      if (("-" === x_(t, r) && r++, "0" === x_(t, r))) r++;
      else {
        if (!E_(R_, x_(t, r))) throw new m_("Failed to parse number at: " + r);
        r = this.skip(T_, ++r);
      }
      if (
        ("." === x_(t, r) && (r = this.skip(T_, ++r)),
        "e" === x_(t, r) || "E" === x_(t, r)) &&
        (r++,
        ("+" !== x_(t, r) && "-" !== x_(t, r)) || r++,
        r === (r = this.skip(T_, r)))
      )
        throw new m_("Failed to parse number's exponent value at: " + r);
      return this.node(0, y_(A_(t, e, r)), e, r);
    },
    keyword: function (t) {
      var e = "" + t,
        r = this.index,
        n = r + e.length;
      if (A_(this.source, r, n) !== e)
        throw new m_("Failed to parse value at: " + r);
      return this.node(0, t, r, n);
    },
    skip: function (t, e) {
      for (var r = this.source; e < r.length && E_(t, x_(r, e)); e++);
      return e;
    },
    until: function (t, e) {
      e = this.skip(P_, e);
      for (var r = x_(this.source, e), n = 0; n < t.length; n++)
        if (t[n] === r) return e;
      throw new m_('Unexpected character: "' + r + '" at: ' + e);
    },
  };
  var U_ = p_(function () {
      var t,
        e = "9007199254740993";
      return (
        w_(e, function (e, r, n) {
          t = n.source;
        }),
        t !== e
      );
    }),
    M_ =
      d_ &&
      !p_(function () {
        return 1 / w_("-0 \t") != -1 / 0;
      });
  t_(
    { target: "JSON", stat: !0, forced: U_ },
    {
      parse: function (t, e) {
        return M_ && !a_(e)
          ? w_(t)
          : (function (t, e) {
              t = f_(t);
              var r = new C_(t, 0),
                n = r.parse(),
                i = n.value,
                o = r.skip(P_, n.end);
              if (o < t.length)
                throw new m_(
                  'Unexpected extra character: "' +
                    x_(t, o) +
                    '" after the parsed data at: ' +
                    o
                );
              return a_(e) ? j_({ "": i }, "", e, n) : i;
            })(t, e);
      },
    }
  );
  var F_ = tF.charAt,
    B_ = li,
    __ = Rr,
    D_ = Ef,
    z_ = Of,
    N_ = "String Iterator",
    q_ = __.set,
    H_ = __.getterFor(N_);
  D_(
    String,
    "String",
    function (t) {
      q_(this, { type: N_, string: B_(t), index: 0 });
    },
    function () {
      var t,
        e = H_(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? z_(void 0, !0)
        : ((t = F_(r, n)), (e.index += t.length), z_(t, !1));
    }
  );
  var W_ = i,
    $_ = o,
    G_ = te("iterator"),
    V_ = !W_(function () {
      var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        r = new URLSearchParams("a=1&a=2&b=3"),
        n = "";
      return (
        (t.pathname = "c%20d"),
        e.forEach(function (t, r) {
          e.delete("b"), (n += r + t);
        }),
        r.delete("a", 2),
        r.delete("b", void 0),
        (!e.size && !$_) ||
          !e.sort ||
          "http://a/c%20d?a=1&c=3" !== t.href ||
          "3" !== e.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !e[G_] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== n ||
          "x" !== new URL("http://x", void 0).host
      );
    }),
    Y_ = S,
    J_ = 2147483647,
    K_ = /[^\0-\u007E]/,
    Q_ = /[.\u3002\uFF0E\uFF61]/g,
    X_ = "Overflow: input needs wider integers to process",
    Z_ = RangeError,
    tD = Y_(Q_.exec),
    eD = Math.floor,
    rD = String.fromCharCode,
    nD = Y_("".charCodeAt),
    iD = Y_([].join),
    oD = Y_([].push),
    aD = Y_("".replace),
    uD = Y_("".split),
    cD = Y_("".toLowerCase),
    sD = function (t) {
      return t + 22 + 75 * (t < 26);
    },
    fD = function (t, e, r) {
      var n = 0;
      for (t = r ? eD(t / 700) : t >> 1, t += eD(t / e); t > 455; )
        (t = eD(t / 35)), (n += 36);
      return eD(n + (36 * t) / (t + 38));
    },
    hD = function (t) {
      var e = [];
      t = (function (t) {
        for (var e = [], r = 0, n = t.length; r < n; ) {
          var i = nD(t, r++);
          if (i >= 55296 && i <= 56319 && r < n) {
            var o = nD(t, r++);
            56320 == (64512 & o)
              ? oD(e, ((1023 & i) << 10) + (1023 & o) + 65536)
              : (oD(e, i), r--);
          } else oD(e, i);
        }
        return e;
      })(t);
      var r,
        n,
        i = t.length,
        o = 128,
        a = 0,
        u = 72;
      for (r = 0; r < t.length; r++) (n = t[r]) < 128 && oD(e, rD(n));
      var c = e.length,
        s = c;
      for (c && oD(e, "-"); s < i; ) {
        var f = J_;
        for (r = 0; r < t.length; r++) (n = t[r]) >= o && n < f && (f = n);
        var h = s + 1;
        if (f - o > eD((J_ - a) / h)) throw new Z_(X_);
        for (a += (f - o) * h, o = f, r = 0; r < t.length; r++) {
          if ((n = t[r]) < o && ++a > J_) throw new Z_(X_);
          if (n === o) {
            for (var l = a, p = 36; ; ) {
              var v = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
              if (l < v) break;
              var d = l - v,
                g = 36 - v;
              oD(e, rD(sD(v + (d % g)))), (l = eD(d / g)), (p += 36);
            }
            oD(e, rD(sD(l))), (u = fD(a, h, s === c)), (a = 0), s++;
          }
        }
        a++, o++;
      }
      return iD(e, "");
    },
    lD = ti,
    pD = r,
    vD = Ll,
    dD = s,
    gD = S,
    yD = o,
    mD = V_,
    wD = Kr,
    bD = Yi,
    SD = pb,
    xD = fo,
    AD = nf,
    ED = Rr,
    OD = Hh,
    TD = D,
    RD = zt,
    ID = mo,
    PD = si,
    jD = Le,
    kD = N,
    LD = li,
    CD = _i,
    UD = g,
    MD = Dv,
    FD = Lv,
    BD = Of,
    _D = tl,
    DD = GR,
    zD = te("iterator"),
    ND = "URLSearchParams",
    qD = ND + "Iterator",
    HD = ED.set,
    WD = ED.getterFor(ND),
    $D = ED.getterFor(qD),
    GD = vD("fetch"),
    VD = vD("Request"),
    YD = vD("Headers"),
    JD = VD && VD.prototype,
    KD = YD && YD.prototype,
    QD = pD.RegExp,
    XD = pD.TypeError,
    ZD = pD.decodeURIComponent,
    tz = pD.encodeURIComponent,
    ez = gD("".charAt),
    rz = gD([].join),
    nz = gD([].push),
    iz = gD("".replace),
    oz = gD([].shift),
    az = gD([].splice),
    uz = gD("".split),
    cz = gD("".slice),
    sz = /\+/g,
    fz = Array(4),
    hz = function (t) {
      return (
        fz[t - 1] || (fz[t - 1] = QD("((?:%[\\da-f]{2}){" + t + "})", "gi"))
      );
    },
    lz = function (t) {
      try {
        return ZD(t);
      } catch (_q) {
        return t;
      }
    },
    pz = function (t) {
      var e = iz(t, sz, " "),
        r = 4;
      try {
        return ZD(e);
      } catch (_q) {
        for (; r; ) e = iz(e, hz(r--), lz);
        return e;
      }
    },
    vz = /[!'()~]|%20/g,
    dz = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
    },
    gz = function (t) {
      return dz[t];
    },
    yz = function (t) {
      return iz(tz(t), vz, gz);
    },
    mz = AD(
      function (t, e) {
        HD(this, { type: qD, target: WD(t).entries, index: 0, kind: e });
      },
      ND,
      function () {
        var t = $D(this),
          e = t.target,
          r = t.index++;
        if (!e || r >= e.length) return (t.target = void 0), BD(void 0, !0);
        var n = e[r];
        switch (t.kind) {
          case "keys":
            return BD(n.key, !1);
          case "values":
            return BD(n.value, !1);
        }
        return BD([n.key, n.value], !1);
      },
      !0
    ),
    wz = function (t) {
      (this.entries = []),
        (this.url = null),
        void 0 !== t &&
          (kD(t)
            ? this.parseObject(t)
            : this.parseQuery(
                "string" == typeof t ? ("?" === ez(t, 0) ? cz(t, 1) : t) : LD(t)
              ));
    };
  wz.prototype = {
    type: ND,
    bindURL: function (t) {
      (this.url = t), this.update();
    },
    parseObject: function (t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        u,
        c = this.entries,
        s = FD(t);
      if (s)
        for (r = (e = MD(t, s)).next; !(n = dD(r, e)).done; ) {
          if (
            ((o = (i = MD(jD(n.value))).next),
            (a = dD(o, i)).done || (u = dD(o, i)).done || !dD(o, i).done)
          )
            throw new XD("Expected sequence with length 2");
          nz(c, { key: LD(a.value), value: LD(u.value) });
        }
      else for (var f in t) RD(t, f) && nz(c, { key: f, value: LD(t[f]) });
    },
    parseQuery: function (t) {
      if (t)
        for (var e, r, n = this.entries, i = uz(t, "&"), o = 0; o < i.length; )
          (e = i[o++]).length &&
            ((r = uz(e, "=")),
            nz(n, { key: pz(oz(r)), value: pz(rz(r, "=")) }));
    },
    serialize: function () {
      for (var t, e = this.entries, r = [], n = 0; n < e.length; )
        (t = e[n++]), nz(r, yz(t.key) + "=" + yz(t.value));
      return rz(r, "&");
    },
    update: function () {
      (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
      this.url && this.url.update();
    },
  };
  var bz = function () {
      OD(this, Sz);
      var t = HD(this, new wz(arguments.length > 0 ? arguments[0] : void 0));
      yD || (this.size = t.entries.length);
    },
    Sz = bz.prototype;
  if (
    (SD(
      Sz,
      {
        append: function (t, e) {
          var r = WD(this);
          _D(arguments.length, 2),
            nz(r.entries, { key: LD(t), value: LD(e) }),
            yD || this.length++,
            r.updateURL();
        },
        delete: function (t) {
          for (
            var e = WD(this),
              r = _D(arguments.length, 1),
              n = e.entries,
              i = LD(t),
              o = r < 2 ? void 0 : arguments[1],
              a = void 0 === o ? o : LD(o),
              u = 0;
            u < n.length;

          ) {
            var c = n[u];
            if (c.key !== i || (void 0 !== a && c.value !== a)) u++;
            else if ((az(n, u, 1), void 0 !== a)) break;
          }
          yD || (this.size = n.length), e.updateURL();
        },
        get: function (t) {
          var e = WD(this).entries;
          _D(arguments.length, 1);
          for (var r = LD(t), n = 0; n < e.length; n++)
            if (e[n].key === r) return e[n].value;
          return null;
        },
        getAll: function (t) {
          var e = WD(this).entries;
          _D(arguments.length, 1);
          for (var r = LD(t), n = [], i = 0; i < e.length; i++)
            e[i].key === r && nz(n, e[i].value);
          return n;
        },
        has: function (t) {
          for (
            var e = WD(this).entries,
              r = _D(arguments.length, 1),
              n = LD(t),
              i = r < 2 ? void 0 : arguments[1],
              o = void 0 === i ? i : LD(i),
              a = 0;
            a < e.length;

          ) {
            var u = e[a++];
            if (u.key === n && (void 0 === o || u.value === o)) return !0;
          }
          return !1;
        },
        set: function (t, e) {
          var r = WD(this);
          _D(arguments.length, 1);
          for (
            var n, i = r.entries, o = !1, a = LD(t), u = LD(e), c = 0;
            c < i.length;
            c++
          )
            (n = i[c]).key === a &&
              (o ? az(i, c--, 1) : ((o = !0), (n.value = u)));
          o || nz(i, { key: a, value: u }),
            yD || (this.size = i.length),
            r.updateURL();
        },
        sort: function () {
          var t = WD(this);
          DD(t.entries, function (t, e) {
            return t.key > e.key ? 1 : -1;
          }),
            t.updateURL();
        },
        forEach: function (t) {
          for (
            var e,
              r = WD(this).entries,
              n = ID(t, arguments.length > 1 ? arguments[1] : void 0),
              i = 0;
            i < r.length;

          )
            n((e = r[i++]).value, e.key, this);
        },
        keys: function () {
          return new mz(this, "keys");
        },
        values: function () {
          return new mz(this, "values");
        },
        entries: function () {
          return new mz(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
    wD(Sz, zD, Sz.entries, { name: "entries" }),
    wD(
      Sz,
      "toString",
      function () {
        return WD(this).serialize();
      },
      { enumerable: !0 }
    ),
    yD &&
      bD(Sz, "size", {
        get: function () {
          return WD(this).entries.length;
        },
        configurable: !0,
        enumerable: !0,
      }),
    xD(bz, ND),
    lD({ global: !0, constructor: !0, forced: !mD }, { URLSearchParams: bz }),
    !mD && TD(YD))
  ) {
    var xz = gD(KD.has),
      Az = gD(KD.set),
      Ez = function (t) {
        if (kD(t)) {
          var e,
            r = t.body;
          if (PD(r) === ND)
            return (
              (e = t.headers ? new YD(t.headers) : new YD()),
              xz(e, "content-type") ||
                Az(
                  e,
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ),
              CD(t, { body: UD(0, LD(r)), headers: UD(0, e) })
            );
        }
        return t;
      };
    if (
      (TD(GD) &&
        lD(
          { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
          {
            fetch: function (t) {
              return GD(t, arguments.length > 1 ? Ez(arguments[1]) : {});
            },
          }
        ),
      TD(VD))
    ) {
      var Oz = function (t) {
        return (
          OD(this, JD), new VD(t, arguments.length > 1 ? Ez(arguments[1]) : {})
        );
      };
      (JD.constructor = Oz),
        (Oz.prototype = JD),
        lD(
          { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
          { Request: Oz }
        );
    }
  }
  var Tz,
    Rz = ti,
    Iz = o,
    Pz = V_,
    jz = r,
    kz = mo,
    Lz = S,
    Cz = Kr,
    Uz = Yi,
    Mz = Hh,
    Fz = zt,
    Bz = hC,
    _z = Yy,
    Dz = zi,
    zz = tF.codeAt,
    Nz = function (t) {
      var e,
        r,
        n = [],
        i = uD(aD(cD(t), Q_, "."), ".");
      for (e = 0; e < i.length; e++)
        (r = i[e]), oD(n, tD(K_, r) ? "xn--" + hD(r) : r);
      return iD(n, ".");
    },
    qz = li,
    Hz = fo,
    Wz = tl,
    $z = { URLSearchParams: bz, getState: WD },
    Gz = Rr,
    Vz = Gz.set,
    Yz = Gz.getterFor("URL"),
    Jz = $z.URLSearchParams,
    Kz = $z.getState,
    Qz = jz.URL,
    Xz = jz.TypeError,
    Zz = jz.parseInt,
    tN = Math.floor,
    eN = Math.pow,
    rN = Lz("".charAt),
    nN = Lz(/./.exec),
    iN = Lz([].join),
    oN = Lz((1).toString),
    aN = Lz([].pop),
    uN = Lz([].push),
    cN = Lz("".replace),
    sN = Lz([].shift),
    fN = Lz("".split),
    hN = Lz("".slice),
    lN = Lz("".toLowerCase),
    pN = Lz([].unshift),
    vN = "Invalid scheme",
    dN = "Invalid host",
    gN = "Invalid port",
    yN = /[a-z]/i,
    mN = /[\d+-.a-z]/i,
    wN = /\d/,
    bN = /^0x/i,
    SN = /^[0-7]+$/,
    xN = /^\d+$/,
    AN = /^[\da-f]+$/i,
    EN = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    ON = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    TN = /^[\u0000-\u0020]+/,
    RN = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
    IN = /[\t\n\r]/g,
    PN = function (t) {
      var e, r, n, i;
      if ("number" == typeof t) {
        for (e = [], r = 0; r < 4; r++) pN(e, t % 256), (t = tN(t / 256));
        return iN(e, ".");
      }
      if ("object" == typeof t) {
        for (
          e = "",
            n = (function (t) {
              for (var e = null, r = 1, n = null, i = 0, o = 0; o < 8; o++)
                0 !== t[o]
                  ? (i > r && ((e = n), (r = i)), (n = null), (i = 0))
                  : (null === n && (n = o), ++i);
              return i > r && ((e = n), (r = i)), e;
            })(t),
            r = 0;
          r < 8;
          r++
        )
          (i && 0 === t[r]) ||
            (i && (i = !1),
            n === r
              ? ((e += r ? ":" : "::"), (i = !0))
              : ((e += oN(t[r], 16)), r < 7 && (e += ":")));
        return "[" + e + "]";
      }
      return t;
    },
    jN = {},
    kN = Bz({}, jN, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
    LN = Bz({}, kN, { "#": 1, "?": 1, "{": 1, "}": 1 }),
    CN = Bz({}, LN, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1,
    }),
    UN = function (t, e) {
      var r = zz(t, 0);
      return r > 32 && r < 127 && !Fz(e, t) ? t : encodeURIComponent(t);
    },
    MN = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
    FN = function (t, e) {
      var r;
      return (
        2 === t.length &&
        nN(yN, rN(t, 0)) &&
        (":" === (r = rN(t, 1)) || (!e && "|" === r))
      );
    },
    BN = function (t) {
      var e;
      return (
        t.length > 1 &&
        FN(hN(t, 0, 2)) &&
        (2 === t.length ||
          "/" === (e = rN(t, 2)) ||
          "\\" === e ||
          "?" === e ||
          "#" === e)
      );
    },
    _N = function (t) {
      return "." === t || "%2e" === lN(t);
    },
    DN = {},
    zN = {},
    NN = {},
    qN = {},
    HN = {},
    WN = {},
    $N = {},
    GN = {},
    VN = {},
    YN = {},
    JN = {},
    KN = {},
    QN = {},
    XN = {},
    ZN = {},
    tq = {},
    eq = {},
    rq = {},
    nq = {},
    iq = {},
    oq = {},
    aq = function (t, e, r) {
      var n,
        i,
        o,
        a = qz(t);
      if (e) {
        if ((i = this.parse(a))) throw new Xz(i);
        this.searchParams = null;
      } else {
        if ((void 0 !== r && (n = new aq(r, !0)), (i = this.parse(a, null, n))))
          throw new Xz(i);
        (o = Kz(new Jz())).bindURL(this), (this.searchParams = o);
      }
    };
  aq.prototype = {
    type: "URL",
    parse: function (t, e, r) {
      var n,
        i,
        o,
        a,
        u,
        c = this,
        s = e || DN,
        f = 0,
        h = "",
        l = !1,
        p = !1,
        v = !1;
      for (
        t = qz(t),
          e ||
            ((c.scheme = ""),
            (c.username = ""),
            (c.password = ""),
            (c.host = null),
            (c.port = null),
            (c.path = []),
            (c.query = null),
            (c.fragment = null),
            (c.cannotBeABaseURL = !1),
            (t = cN(t, TN, "")),
            (t = cN(t, RN, "$1"))),
          t = cN(t, IN, ""),
          n = _z(t);
        f <= n.length;

      ) {
        switch (((i = n[f]), s)) {
          case DN:
            if (!i || !nN(yN, i)) {
              if (e) return vN;
              s = NN;
              continue;
            }
            (h += lN(i)), (s = zN);
            break;
          case zN:
            if (i && (nN(mN, i) || "+" === i || "-" === i || "." === i))
              h += lN(i);
            else {
              if (":" !== i) {
                if (e) return vN;
                (h = ""), (s = NN), (f = 0);
                continue;
              }
              if (
                e &&
                (c.isSpecial() !== Fz(MN, h) ||
                  ("file" === h &&
                    (c.includesCredentials() || null !== c.port)) ||
                  ("file" === c.scheme && !c.host))
              )
                return;
              if (((c.scheme = h), e))
                return void (
                  c.isSpecial() &&
                  MN[c.scheme] === c.port &&
                  (c.port = null)
                );
              (h = ""),
                "file" === c.scheme
                  ? (s = XN)
                  : c.isSpecial() && r && r.scheme === c.scheme
                    ? (s = qN)
                    : c.isSpecial()
                      ? (s = GN)
                      : "/" === n[f + 1]
                        ? ((s = HN), f++)
                        : ((c.cannotBeABaseURL = !0), uN(c.path, ""), (s = nq));
            }
            break;
          case NN:
            if (!r || (r.cannotBeABaseURL && "#" !== i)) return vN;
            if (r.cannotBeABaseURL && "#" === i) {
              (c.scheme = r.scheme),
                (c.path = Dz(r.path)),
                (c.query = r.query),
                (c.fragment = ""),
                (c.cannotBeABaseURL = !0),
                (s = oq);
              break;
            }
            s = "file" === r.scheme ? XN : WN;
            continue;
          case qN:
            if ("/" !== i || "/" !== n[f + 1]) {
              s = WN;
              continue;
            }
            (s = VN), f++;
            break;
          case HN:
            if ("/" === i) {
              s = YN;
              break;
            }
            s = rq;
            continue;
          case WN:
            if (((c.scheme = r.scheme), i === Tz))
              (c.username = r.username),
                (c.password = r.password),
                (c.host = r.host),
                (c.port = r.port),
                (c.path = Dz(r.path)),
                (c.query = r.query);
            else if ("/" === i || ("\\" === i && c.isSpecial())) s = $N;
            else if ("?" === i)
              (c.username = r.username),
                (c.password = r.password),
                (c.host = r.host),
                (c.port = r.port),
                (c.path = Dz(r.path)),
                (c.query = ""),
                (s = iq);
            else {
              if ("#" !== i) {
                (c.username = r.username),
                  (c.password = r.password),
                  (c.host = r.host),
                  (c.port = r.port),
                  (c.path = Dz(r.path)),
                  c.path.length--,
                  (s = rq);
                continue;
              }
              (c.username = r.username),
                (c.password = r.password),
                (c.host = r.host),
                (c.port = r.port),
                (c.path = Dz(r.path)),
                (c.query = r.query),
                (c.fragment = ""),
                (s = oq);
            }
            break;
          case $N:
            if (!c.isSpecial() || ("/" !== i && "\\" !== i)) {
              if ("/" !== i) {
                (c.username = r.username),
                  (c.password = r.password),
                  (c.host = r.host),
                  (c.port = r.port),
                  (s = rq);
                continue;
              }
              s = YN;
            } else s = VN;
            break;
          case GN:
            if (((s = VN), "/" !== i || "/" !== rN(h, f + 1))) continue;
            f++;
            break;
          case VN:
            if ("/" !== i && "\\" !== i) {
              s = YN;
              continue;
            }
            break;
          case YN:
            if ("@" === i) {
              l && (h = "%40" + h), (l = !0), (o = _z(h));
              for (var d = 0; d < o.length; d++) {
                var g = o[d];
                if (":" !== g || v) {
                  var y = UN(g, CN);
                  v ? (c.password += y) : (c.username += y);
                } else v = !0;
              }
              h = "";
            } else if (
              i === Tz ||
              "/" === i ||
              "?" === i ||
              "#" === i ||
              ("\\" === i && c.isSpecial())
            ) {
              if (l && "" === h) return "Invalid authority";
              (f -= _z(h).length + 1), (h = ""), (s = JN);
            } else h += i;
            break;
          case JN:
          case KN:
            if (e && "file" === c.scheme) {
              s = tq;
              continue;
            }
            if (":" !== i || p) {
              if (
                i === Tz ||
                "/" === i ||
                "?" === i ||
                "#" === i ||
                ("\\" === i && c.isSpecial())
              ) {
                if (c.isSpecial() && "" === h) return dN;
                if (
                  e &&
                  "" === h &&
                  (c.includesCredentials() || null !== c.port)
                )
                  return;
                if ((a = c.parseHost(h))) return a;
                if (((h = ""), (s = eq), e)) return;
                continue;
              }
              "[" === i ? (p = !0) : "]" === i && (p = !1), (h += i);
            } else {
              if ("" === h) return dN;
              if ((a = c.parseHost(h))) return a;
              if (((h = ""), (s = QN), e === KN)) return;
            }
            break;
          case QN:
            if (!nN(wN, i)) {
              if (
                i === Tz ||
                "/" === i ||
                "?" === i ||
                "#" === i ||
                ("\\" === i && c.isSpecial()) ||
                e
              ) {
                if ("" !== h) {
                  var m = Zz(h, 10);
                  if (m > 65535) return gN;
                  (c.port = c.isSpecial() && m === MN[c.scheme] ? null : m),
                    (h = "");
                }
                if (e) return;
                s = eq;
                continue;
              }
              return gN;
            }
            h += i;
            break;
          case XN:
            if (((c.scheme = "file"), "/" === i || "\\" === i)) s = ZN;
            else {
              if (!r || "file" !== r.scheme) {
                s = rq;
                continue;
              }
              switch (i) {
                case Tz:
                  (c.host = r.host), (c.path = Dz(r.path)), (c.query = r.query);
                  break;
                case "?":
                  (c.host = r.host),
                    (c.path = Dz(r.path)),
                    (c.query = ""),
                    (s = iq);
                  break;
                case "#":
                  (c.host = r.host),
                    (c.path = Dz(r.path)),
                    (c.query = r.query),
                    (c.fragment = ""),
                    (s = oq);
                  break;
                default:
                  BN(iN(Dz(n, f), "")) ||
                    ((c.host = r.host), (c.path = Dz(r.path)), c.shortenPath()),
                    (s = rq);
                  continue;
              }
            }
            break;
          case ZN:
            if ("/" === i || "\\" === i) {
              s = tq;
              break;
            }
            r &&
              "file" === r.scheme &&
              !BN(iN(Dz(n, f), "")) &&
              (FN(r.path[0], !0) ? uN(c.path, r.path[0]) : (c.host = r.host)),
              (s = rq);
            continue;
          case tq:
            if (i === Tz || "/" === i || "\\" === i || "?" === i || "#" === i) {
              if (!e && FN(h)) s = rq;
              else if ("" === h) {
                if (((c.host = ""), e)) return;
                s = eq;
              } else {
                if ((a = c.parseHost(h))) return a;
                if (("localhost" === c.host && (c.host = ""), e)) return;
                (h = ""), (s = eq);
              }
              continue;
            }
            h += i;
            break;
          case eq:
            if (c.isSpecial()) {
              if (((s = rq), "/" !== i && "\\" !== i)) continue;
            } else if (e || "?" !== i)
              if (e || "#" !== i) {
                if (i !== Tz && ((s = rq), "/" !== i)) continue;
              } else (c.fragment = ""), (s = oq);
            else (c.query = ""), (s = iq);
            break;
          case rq:
            if (
              i === Tz ||
              "/" === i ||
              ("\\" === i && c.isSpecial()) ||
              (!e && ("?" === i || "#" === i))
            ) {
              if (
                (".." === (u = lN((u = h))) ||
                "%2e." === u ||
                ".%2e" === u ||
                "%2e%2e" === u
                  ? (c.shortenPath(),
                    "/" === i ||
                      ("\\" === i && c.isSpecial()) ||
                      uN(c.path, ""))
                  : _N(h)
                    ? "/" === i ||
                      ("\\" === i && c.isSpecial()) ||
                      uN(c.path, "")
                    : ("file" === c.scheme &&
                        !c.path.length &&
                        FN(h) &&
                        (c.host && (c.host = ""), (h = rN(h, 0) + ":")),
                      uN(c.path, h)),
                (h = ""),
                "file" === c.scheme && (i === Tz || "?" === i || "#" === i))
              )
                for (; c.path.length > 1 && "" === c.path[0]; ) sN(c.path);
              "?" === i
                ? ((c.query = ""), (s = iq))
                : "#" === i && ((c.fragment = ""), (s = oq));
            } else h += UN(i, LN);
            break;
          case nq:
            "?" === i
              ? ((c.query = ""), (s = iq))
              : "#" === i
                ? ((c.fragment = ""), (s = oq))
                : i !== Tz && (c.path[0] += UN(i, jN));
            break;
          case iq:
            e || "#" !== i
              ? i !== Tz &&
                ("'" === i && c.isSpecial()
                  ? (c.query += "%27")
                  : (c.query += "#" === i ? "%23" : UN(i, jN)))
              : ((c.fragment = ""), (s = oq));
            break;
          case oq:
            i !== Tz && (c.fragment += UN(i, kN));
        }
        f++;
      }
    },
    parseHost: function (t) {
      var e, r, n;
      if ("[" === rN(t, 0)) {
        if ("]" !== rN(t, t.length - 1)) return dN;
        if (
          ((e = (function (t) {
            var e,
              r,
              n,
              i,
              o,
              a,
              u,
              c = [0, 0, 0, 0, 0, 0, 0, 0],
              s = 0,
              f = null,
              h = 0,
              l = function () {
                return rN(t, h);
              };
            if (":" === l()) {
              if (":" !== rN(t, 1)) return;
              (h += 2), (f = ++s);
            }
            for (; l(); ) {
              if (8 === s) return;
              if (":" !== l()) {
                for (e = r = 0; r < 4 && nN(AN, l()); )
                  (e = 16 * e + Zz(l(), 16)), h++, r++;
                if ("." === l()) {
                  if (0 === r) return;
                  if (((h -= r), s > 6)) return;
                  for (n = 0; l(); ) {
                    if (((i = null), n > 0)) {
                      if (!("." === l() && n < 4)) return;
                      h++;
                    }
                    if (!nN(wN, l())) return;
                    for (; nN(wN, l()); ) {
                      if (((o = Zz(l(), 10)), null === i)) i = o;
                      else {
                        if (0 === i) return;
                        i = 10 * i + o;
                      }
                      if (i > 255) return;
                      h++;
                    }
                    (c[s] = 256 * c[s] + i), (2 != ++n && 4 !== n) || s++;
                  }
                  if (4 !== n) return;
                  break;
                }
                if (":" === l()) {
                  if ((h++, !l())) return;
                } else if (l()) return;
                c[s++] = e;
              } else {
                if (null !== f) return;
                h++, (f = ++s);
              }
            }
            if (null !== f)
              for (a = s - f, s = 7; 0 !== s && a > 0; )
                (u = c[s]), (c[s--] = c[f + a - 1]), (c[f + --a] = u);
            else if (8 !== s) return;
            return c;
          })(hN(t, 1, -1))),
          !e)
        )
          return dN;
        this.host = e;
      } else if (this.isSpecial()) {
        if (((t = Nz(t)), nN(EN, t))) return dN;
        if (
          ((e = (function (t) {
            var e,
              r,
              n,
              i,
              o,
              a,
              u,
              c = fN(t, ".");
            if (
              (c.length && "" === c[c.length - 1] && c.length--,
              (e = c.length) > 4)
            )
              return t;
            for (r = [], n = 0; n < e; n++) {
              if ("" === (i = c[n])) return t;
              if (
                ((o = 10),
                i.length > 1 &&
                  "0" === rN(i, 0) &&
                  ((o = nN(bN, i) ? 16 : 8), (i = hN(i, 8 === o ? 1 : 2))),
                "" === i)
              )
                a = 0;
              else {
                if (!nN(10 === o ? xN : 8 === o ? SN : AN, i)) return t;
                a = Zz(i, o);
              }
              uN(r, a);
            }
            for (n = 0; n < e; n++)
              if (((a = r[n]), n === e - 1)) {
                if (a >= eN(256, 5 - e)) return null;
              } else if (a > 255) return null;
            for (u = aN(r), n = 0; n < r.length; n++)
              u += r[n] * eN(256, 3 - n);
            return u;
          })(t)),
          null === e)
        )
          return dN;
        this.host = e;
      } else {
        if (nN(ON, t)) return dN;
        for (e = "", r = _z(t), n = 0; n < r.length; n++) e += UN(r[n], jN);
        this.host = e;
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
    },
    includesCredentials: function () {
      return "" !== this.username || "" !== this.password;
    },
    isSpecial: function () {
      return Fz(MN, this.scheme);
    },
    shortenPath: function () {
      var t = this.path,
        e = t.length;
      !e || ("file" === this.scheme && 1 === e && FN(t[0], !0)) || t.length--;
    },
    serialize: function () {
      var t = this,
        e = t.scheme,
        r = t.username,
        n = t.password,
        i = t.host,
        o = t.port,
        a = t.path,
        u = t.query,
        c = t.fragment,
        s = e + ":";
      return (
        null !== i
          ? ((s += "//"),
            t.includesCredentials() && (s += r + (n ? ":" + n : "") + "@"),
            (s += PN(i)),
            null !== o && (s += ":" + o))
          : "file" === e && (s += "//"),
        (s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + iN(a, "/") : ""),
        null !== u && (s += "?" + u),
        null !== c && (s += "#" + c),
        s
      );
    },
    setHref: function (t) {
      var e = this.parse(t);
      if (e) throw new Xz(e);
      this.searchParams.update();
    },
    getOrigin: function () {
      var t = this.scheme,
        e = this.port;
      if ("blob" === t)
        try {
          return new uq(t.path[0]).origin;
        } catch (_q) {
          return "null";
        }
      return "file" !== t && this.isSpecial()
        ? t + "://" + PN(this.host) + (null !== e ? ":" + e : "")
        : "null";
    },
    getProtocol: function () {
      return this.scheme + ":";
    },
    setProtocol: function (t) {
      this.parse(qz(t) + ":", DN);
    },
    getUsername: function () {
      return this.username;
    },
    setUsername: function (t) {
      var e = _z(qz(t));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var r = 0; r < e.length; r++) this.username += UN(e[r], CN);
      }
    },
    getPassword: function () {
      return this.password;
    },
    setPassword: function (t) {
      var e = _z(qz(t));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var r = 0; r < e.length; r++) this.password += UN(e[r], CN);
      }
    },
    getHost: function () {
      var t = this.host,
        e = this.port;
      return null === t ? "" : null === e ? PN(t) : PN(t) + ":" + e;
    },
    setHost: function (t) {
      this.cannotBeABaseURL || this.parse(t, JN);
    },
    getHostname: function () {
      var t = this.host;
      return null === t ? "" : PN(t);
    },
    setHostname: function (t) {
      this.cannotBeABaseURL || this.parse(t, KN);
    },
    getPort: function () {
      var t = this.port;
      return null === t ? "" : qz(t);
    },
    setPort: function (t) {
      this.cannotHaveUsernamePasswordPort() ||
        ("" === (t = qz(t)) ? (this.port = null) : this.parse(t, QN));
    },
    getPathname: function () {
      var t = this.path;
      return this.cannotBeABaseURL ? t[0] : t.length ? "/" + iN(t, "/") : "";
    },
    setPathname: function (t) {
      this.cannotBeABaseURL || ((this.path = []), this.parse(t, eq));
    },
    getSearch: function () {
      var t = this.query;
      return t ? "?" + t : "";
    },
    setSearch: function (t) {
      "" === (t = qz(t))
        ? (this.query = null)
        : ("?" === rN(t, 0) && (t = hN(t, 1)),
          (this.query = ""),
          this.parse(t, iq)),
        this.searchParams.update();
    },
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    getHash: function () {
      var t = this.fragment;
      return t ? "#" + t : "";
    },
    setHash: function (t) {
      "" !== (t = qz(t))
        ? ("#" === rN(t, 0) && (t = hN(t, 1)),
          (this.fragment = ""),
          this.parse(t, oq))
        : (this.fragment = null);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    },
  };
  var uq = function (t) {
      var e = Mz(this, cq),
        r = Wz(arguments.length, 1) > 1 ? arguments[1] : void 0,
        n = Vz(e, new aq(t, !1, r));
      Iz ||
        ((e.href = n.serialize()),
        (e.origin = n.getOrigin()),
        (e.protocol = n.getProtocol()),
        (e.username = n.getUsername()),
        (e.password = n.getPassword()),
        (e.host = n.getHost()),
        (e.hostname = n.getHostname()),
        (e.port = n.getPort()),
        (e.pathname = n.getPathname()),
        (e.search = n.getSearch()),
        (e.searchParams = n.getSearchParams()),
        (e.hash = n.getHash()));
    },
    cq = uq.prototype,
    sq = function (t, e) {
      return {
        get: function () {
          return Yz(this)[t]();
        },
        set:
          e &&
          function (t) {
            return Yz(this)[e](t);
          },
        configurable: !0,
        enumerable: !0,
      };
    };
  if (
    (Iz &&
      (Uz(cq, "href", sq("serialize", "setHref")),
      Uz(cq, "origin", sq("getOrigin")),
      Uz(cq, "protocol", sq("getProtocol", "setProtocol")),
      Uz(cq, "username", sq("getUsername", "setUsername")),
      Uz(cq, "password", sq("getPassword", "setPassword")),
      Uz(cq, "host", sq("getHost", "setHost")),
      Uz(cq, "hostname", sq("getHostname", "setHostname")),
      Uz(cq, "port", sq("getPort", "setPort")),
      Uz(cq, "pathname", sq("getPathname", "setPathname")),
      Uz(cq, "search", sq("getSearch", "setSearch")),
      Uz(cq, "searchParams", sq("getSearchParams")),
      Uz(cq, "hash", sq("getHash", "setHash"))),
    Cz(
      cq,
      "toJSON",
      function () {
        return Yz(this).serialize();
      },
      { enumerable: !0 }
    ),
    Cz(
      cq,
      "toString",
      function () {
        return Yz(this).serialize();
      },
      { enumerable: !0 }
    ),
    Qz)
  ) {
    var fq = Qz.createObjectURL,
      hq = Qz.revokeObjectURL;
    fq && Cz(uq, "createObjectURL", kz(fq, Qz)),
      hq && Cz(uq, "revokeObjectURL", kz(hq, Qz));
  }
  Hz(uq, "URL"),
    Rz({ global: !0, constructor: !0, forced: !Pz, sham: !Iz }, { URL: uq });
  var lq = s;
  ti(
    { target: "URL", proto: !0, enumerable: !0 },
    {
      toJSON: function () {
        return lq(URL.prototype.toString, this);
      },
    }
  );
  var pq = Kr,
    vq = S,
    dq = li,
    gq = tl,
    yq = URLSearchParams,
    mq = yq.prototype,
    wq = vq(mq.append),
    bq = vq(mq.delete),
    Sq = vq(mq.forEach),
    xq = vq([].push),
    Aq = new yq("a=1&a=2&b=3");
  Aq.delete("a", 1),
    Aq.delete("b", void 0),
    Aq + "" != "a=2" &&
      pq(
        mq,
        "delete",
        function (t) {
          var e = arguments.length,
            r = e < 2 ? void 0 : arguments[1];
          if (e && void 0 === r) return bq(this, t);
          var n = [];
          Sq(this, function (t, e) {
            xq(n, { key: e, value: t });
          }),
            gq(e, 1);
          for (
            var i, o = dq(t), a = dq(r), u = 0, c = 0, s = !1, f = n.length;
            u < f;

          )
            (i = n[u++]), s || i.key === o ? ((s = !0), bq(this, i.key)) : c++;
          for (; c < f; )
            ((i = n[c++]).key === o && i.value === a) ||
              wq(this, i.key, i.value);
        },
        { enumerable: !0, unsafe: !0 }
      );
  var Eq = Kr,
    Oq = S,
    Tq = li,
    Rq = tl,
    Iq = URLSearchParams,
    Pq = Iq.prototype,
    jq = Oq(Pq.getAll),
    kq = Oq(Pq.has),
    Lq = new Iq("a=1");
  (!Lq.has("a", 2) && Lq.has("a", void 0)) ||
    Eq(
      Pq,
      "has",
      function (t) {
        var e = arguments.length,
          r = e < 2 ? void 0 : arguments[1];
        if (e && void 0 === r) return kq(this, t);
        var n = jq(this, t);
        Rq(e, 1);
        for (var i = Tq(r), o = 0; o < n.length; ) if (n[o++] === i) return !0;
        return !1;
      },
      { enumerable: !0, unsafe: !0 }
    );
  var Cq = o,
    Uq = S,
    Mq = Yi,
    Fq = URLSearchParams.prototype,
    Bq = Uq(Fq.forEach);
  Cq &&
    !("size" in Fq) &&
    Mq(Fq, "size", {
      get: function () {
        var t = 0;
        return (
          Bq(this, function () {
            t++;
          }),
          t
        );
      },
      configurable: !0,
      enumerable: !0,
    }),
    /*!
     * SJS 6.14.3
     */ (function () {
      function e(t, e) {
        return (
          (e || "") +
          " (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#" +
          t +
          ")"
        );
      }
      function r(t, e) {
        if (
          (-1 !== t.indexOf("\\") && (t = t.replace(E, "/")),
          "/" === t[0] && "/" === t[1])
        )
          return e.slice(0, e.indexOf(":") + 1) + t;
        if (
          ("." === t[0] &&
            ("/" === t[1] ||
              ("." === t[1] &&
                ("/" === t[2] || (2 === t.length && (t += "/")))) ||
              (1 === t.length && (t += "/")))) ||
          "/" === t[0]
        ) {
          var r,
            n = e.slice(0, e.indexOf(":") + 1);
          if (
            ((r =
              "/" === e[n.length + 1]
                ? "file:" !== n
                  ? (r = e.slice(n.length + 2)).slice(r.indexOf("/") + 1)
                  : e.slice(8)
                : e.slice(n.length + ("/" === e[n.length]))),
            "/" === t[0])
          )
            return e.slice(0, e.length - r.length - 1) + t;
          for (
            var i = r.slice(0, r.lastIndexOf("/") + 1) + t,
              o = [],
              a = -1,
              u = 0;
            u < i.length;
            u++
          )
            -1 !== a
              ? "/" === i[u] && (o.push(i.slice(a, u + 1)), (a = -1))
              : "." === i[u]
                ? "." !== i[u + 1] || ("/" !== i[u + 2] && u + 2 !== i.length)
                  ? "/" === i[u + 1] || u + 1 === i.length
                    ? (u += 1)
                    : (a = u)
                  : (o.pop(), (u += 2))
                : (a = u);
          return (
            -1 !== a && o.push(i.slice(a)),
            e.slice(0, e.length - r.length) + o.join("")
          );
        }
      }
      function n(t, e) {
        return r(t, e) || (-1 !== t.indexOf(":") ? t : r("./" + t, e));
      }
      function i(t, e, n, i, o) {
        for (var a in t) {
          var u = r(a, n) || a,
            f = t[a];
          if ("string" == typeof f) {
            var h = s(i, r(f, n) || f, o);
            h ? (e[u] = h) : c("W1", a, f);
          }
        }
      }
      function o(t, e, r) {
        var o;
        for (o in (t.imports && i(t.imports, r.imports, e, r, null),
        t.scopes || {})) {
          var a = n(o, e);
          i(t.scopes[o], r.scopes[a] || (r.scopes[a] = {}), e, r, a);
        }
        for (o in t.depcache || {}) r.depcache[n(o, e)] = t.depcache[o];
        for (o in t.integrity || {}) r.integrity[n(o, e)] = t.integrity[o];
      }
      function a(t, e) {
        if (e[t]) return t;
        var r = t.length;
        do {
          var n = t.slice(0, r + 1);
          if (n in e) return n;
        } while (-1 !== (r = t.lastIndexOf("/", r - 1)));
      }
      function u(t, e) {
        var r = a(t, e);
        if (r) {
          var n = e[r];
          if (null === n) return;
          if (!(t.length > r.length && "/" !== n[n.length - 1]))
            return n + t.slice(r.length);
          c("W2", r, n);
        }
      }
      function c(t, r, n) {
        console.warn(e(t, [n, r].join(", ")));
      }
      function s(t, e, r) {
        for (var n = t.scopes, i = r && a(r, n); i; ) {
          var o = u(e, n[i]);
          if (o) return o;
          i = a(i.slice(0, i.lastIndexOf("/")), n);
        }
        return u(e, t.imports) || (-1 !== e.indexOf(":") && e);
      }
      function f() {
        this[T] = {};
      }
      function h(t, r, n, i) {
        var o = t[T][r];
        if (o) return o;
        var a = [],
          u = Object.create(null);
        O && Object.defineProperty(u, O, { value: "Module" });
        var c = Promise.resolve()
            .then(function () {
              return t.instantiate(r, n, i);
            })
            .then(
              function (n) {
                if (!n) throw Error(e(2, r));
                var i = n[1](
                  function (t, e) {
                    o.h = !0;
                    var r = !1;
                    if ("string" == typeof t)
                      (t in u && u[t] === e) || ((u[t] = e), (r = !0));
                    else {
                      for (var n in t)
                        (e = t[n]),
                          (n in u && u[n] === e) || ((u[n] = e), (r = !0));
                      t && t.__esModule && (u.__esModule = t.__esModule);
                    }
                    if (r)
                      for (var i = 0; i < a.length; i++) {
                        var c = a[i];
                        c && c(u);
                      }
                    return e;
                  },
                  2 === n[1].length
                    ? {
                        import: function (e, n) {
                          return t.import(e, r, n);
                        },
                        meta: t.createContext(r),
                      }
                    : void 0
                );
                return (
                  (o.e = i.execute || function () {}),
                  [n[0], i.setters || [], n[2] || []]
                );
              },
              function (t) {
                throw ((o.e = null), (o.er = t), t);
              }
            ),
          s = c.then(function (e) {
            return Promise.all(
              e[0].map(function (n, i) {
                var o = e[1][i],
                  a = e[2][i];
                return Promise.resolve(t.resolve(n, r)).then(function (e) {
                  var n = h(t, e, r, a);
                  return Promise.resolve(n.I).then(function () {
                    return o && (n.i.push(o), (!n.h && n.I) || o(n.n)), n;
                  });
                });
              })
            ).then(function (t) {
              o.d = t;
            });
          });
        return (o = t[T][r] =
          {
            id: r,
            i: a,
            n: u,
            m: i,
            I: c,
            L: s,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0,
          });
      }
      function l(t, e, r, n) {
        if (!n[e.id])
          return (
            (n[e.id] = !0),
            Promise.resolve(e.L)
              .then(function () {
                return (
                  (e.p && null !== e.p.e) || (e.p = r),
                  Promise.all(
                    e.d.map(function (e) {
                      return l(t, e, r, n);
                    })
                  )
                );
              })
              .catch(function (t) {
                if (e.er) throw t;
                throw ((e.e = null), t);
              })
          );
      }
      function p(t, e) {
        return (e.C = l(t, e, e, {})
          .then(function () {
            return v(t, e, {});
          })
          .then(function () {
            return e.n;
          }));
      }
      function v(t, e, r) {
        function n() {
          try {
            var t = o.call(I);
            if (t)
              return (
                (t = t.then(
                  function () {
                    (e.C = e.n), (e.E = null);
                  },
                  function (t) {
                    throw ((e.er = t), (e.E = null), t);
                  }
                )),
                (e.E = t)
              );
            (e.C = e.n), (e.L = e.I = void 0);
          } catch (r) {
            throw ((e.er = r), r);
          }
        }
        if (!r[e.id]) {
          if (((r[e.id] = !0), !e.e)) {
            if (e.er) throw e.er;
            return e.E ? e.E : void 0;
          }
          var i,
            o = e.e;
          return (
            (e.e = null),
            e.d.forEach(function (n) {
              try {
                var o = v(t, n, r);
                o && (i = i || []).push(o);
              } catch (u) {
                throw ((e.er = u), u);
              }
            }),
            i ? Promise.all(i).then(n) : n()
          );
        }
      }
      function d() {
        [].forEach.call(document.querySelectorAll("script"), function (t) {
          if (!t.sp)
            if ("systemjs-module" === t.type) {
              if (((t.sp = !0), !t.src)) return;
              System.import(
                "import:" === t.src.slice(0, 7) ? t.src.slice(7) : n(t.src, g)
              ).catch(function (e) {
                if (
                  e.message.indexOf(
                    "https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3"
                  ) > -1
                ) {
                  var r = document.createEvent("Event");
                  r.initEvent("error", !1, !1), t.dispatchEvent(r);
                }
                return Promise.reject(e);
              });
            } else if ("systemjs-importmap" === t.type) {
              t.sp = !0;
              var r = t.src
                ? (System.fetch || fetch)(t.src, {
                    integrity: t.integrity,
                    passThrough: !0,
                  })
                    .then(function (t) {
                      if (!t.ok) throw Error(t.status);
                      return t.text();
                    })
                    .catch(function (r) {
                      return (
                        (r.message = e("W4", t.src) + "\n" + r.message),
                        console.warn(r),
                        "function" == typeof t.onerror && t.onerror(),
                        "{}"
                      );
                    })
                : t.innerHTML;
              k = k
                .then(function () {
                  return r;
                })
                .then(function (r) {
                  !(function (t, r, n) {
                    var i = {};
                    try {
                      i = JSON.parse(r);
                    } catch (u) {
                      console.warn(Error(e("W5")));
                    }
                    o(i, n, t);
                  })(L, r, t.src || g);
                });
            }
        });
      }
      var g,
        y = "undefined" != typeof Symbol,
        m = "undefined" != typeof self,
        w = "undefined" != typeof document,
        b = m ? self : t;
      if (w) {
        var S = document.querySelector("base[href]");
        S && (g = S.href);
      }
      if (!g && "undefined" != typeof location) {
        var x = (g = location.href.split("#")[0].split("?")[0]).lastIndexOf(
          "/"
        );
        -1 !== x && (g = g.slice(0, x + 1));
      }
      var A,
        E = /\\/g,
        O = y && Symbol.toStringTag,
        T = y ? Symbol() : "@",
        R = f.prototype;
      (R.import = function (t, e, r) {
        var n = this;
        return (
          e && "object" == typeof e && ((r = e), (e = void 0)),
          Promise.resolve(n.prepareImport())
            .then(function () {
              return n.resolve(t, e, r);
            })
            .then(function (t) {
              var e = h(n, t, void 0, r);
              return e.C || p(n, e);
            })
        );
      }),
        (R.createContext = function (t) {
          var e = this;
          return {
            url: t,
            resolve: function (r, n) {
              return Promise.resolve(e.resolve(r, n || t));
            },
          };
        }),
        (R.register = function (t, e, r) {
          A = [t, e, r];
        }),
        (R.getRegister = function () {
          var t = A;
          return (A = void 0), t;
        });
      var I = Object.freeze(Object.create(null));
      b.System = new f();
      var P,
        j,
        k = Promise.resolve(),
        L = { imports: {}, scopes: {}, depcache: {}, integrity: {} },
        C = w;
      if (
        ((R.prepareImport = function (t) {
          return (C || t) && (d(), (C = !1)), k;
        }),
        w && (d(), window.addEventListener("DOMContentLoaded", d)),
        (R.addImportMap = function (t, e) {
          o(t, e || g, L);
        }),
        w)
      ) {
        window.addEventListener("error", function (t) {
          (M = t.filename), (F = t.error);
        });
        var U = location.origin;
      }
      R.createScript = function (t) {
        var e = document.createElement("script");
        (e.async = !0), t.indexOf(U + "/") && (e.crossOrigin = "anonymous");
        var r = L.integrity[t];
        return r && (e.integrity = r), (e.src = t), e;
      };
      var M,
        F,
        B = {},
        _ = R.register;
      (R.register = function (t, e) {
        if (w && "loading" === document.readyState && "string" != typeof t) {
          var r = document.querySelectorAll("script[src]"),
            n = r[r.length - 1];
          if (n) {
            P = t;
            var i = this;
            j = setTimeout(function () {
              (B[n.src] = [t, e]), i.import(n.src);
            });
          }
        } else P = void 0;
        return _.call(this, t, e);
      }),
        (R.instantiate = function (t, r) {
          var n = B[t];
          if (n) return delete B[t], n;
          var i = this;
          return Promise.resolve(R.createScript(t)).then(function (n) {
            return new Promise(function (o, a) {
              n.addEventListener("error", function () {
                a(Error(e(3, [t, r].join(", "))));
              }),
                n.addEventListener("load", function () {
                  if ((document.head.removeChild(n), M === t)) a(F);
                  else {
                    var e = i.getRegister(t);
                    e && e[0] === P && clearTimeout(j), o(e);
                  }
                }),
                document.head.appendChild(n);
            });
          });
        }),
        (R.shouldFetch = function () {
          return !1;
        }),
        "undefined" != typeof fetch && (R.fetch = fetch);
      var D = R.instantiate,
        z = /^(text|application)\/(x-)?javascript(;|$)/;
      (R.instantiate = function (t, r, n) {
        var i = this;
        return this.shouldFetch(t, r, n)
          ? this.fetch(t, {
              credentials: "same-origin",
              integrity: L.integrity[t],
              meta: n,
            }).then(function (n) {
              if (!n.ok)
                throw Error(e(7, [n.status, n.statusText, t, r].join(", ")));
              var o = n.headers.get("content-type");
              if (!o || !z.test(o)) throw Error(e(4, o));
              return n.text().then(function (e) {
                return (
                  e.indexOf("//# sourceURL=") < 0 &&
                    (e += "\n//# sourceURL=" + t),
                  (0, eval)(e),
                  i.getRegister(t)
                );
              });
            })
          : D.apply(this, arguments);
      }),
        (R.resolve = function (t, n) {
          return (
            s(L, r(t, (n = n || g)) || t, n) ||
            (function (t, r) {
              throw Error(e(8, [t, r].join(", ")));
            })(t, n)
          );
        });
      var N = R.instantiate;
      (R.instantiate = function (t, e, r) {
        var n = L.depcache[t];
        if (n)
          for (var i = 0; i < n.length; i++) h(this, this.resolve(n[i], t), t);
        return N.call(this, t, e, r);
      }),
        m &&
          "function" == typeof importScripts &&
          (R.instantiate = function (t) {
            var e = this;
            return Promise.resolve().then(function () {
              return importScripts(t), e.getRegister(t);
            });
          });
    })();
})();
