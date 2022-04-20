var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/react-image-gallery/build/image-gallery.js
var require_image_gallery = __commonJS({
  "node_modules/react-image-gallery/build/image-gallery.js"(exports, module2) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module2 == "object" ? module2.exports = t(require("react")) : typeof define == "function" && define.amd ? define(["react"], t) : typeof exports == "object" ? exports.ImageGallery = t(require("react")) : e.ImageGallery = t(e.React);
    }(exports, function(e) {
      return (() => {
        var t = { 703: (e2, t2, n2) => {
          "use strict";
          var i2 = n2(414);
          function r2() {
          }
          function a() {
          }
          a.resetWarningCache = r2, e2.exports = function() {
            function e3(e4, t4, n4, r3, a2, s) {
              if (s !== i2) {
                var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw o.name = "Invariant Violation", o;
              }
            }
            function t3() {
              return e3;
            }
            e3.isRequired = e3;
            var n3 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: a, resetWarningCache: r2 };
            return n3.PropTypes = n3, n3;
          };
        }, 697: (e2, t2, n2) => {
          e2.exports = n2(703)();
        }, 414: (e2) => {
          "use strict";
          e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        }, 590: (e2) => {
          var t2 = typeof Element != "undefined", n2 = typeof Map == "function", i2 = typeof Set == "function", r2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
          function a(e3, s) {
            if (e3 === s)
              return true;
            if (e3 && s && typeof e3 == "object" && typeof s == "object") {
              if (e3.constructor !== s.constructor)
                return false;
              var o, l, u, c;
              if (Array.isArray(e3)) {
                if ((o = e3.length) != s.length)
                  return false;
                for (l = o; l-- != 0; )
                  if (!a(e3[l], s[l]))
                    return false;
                return true;
              }
              if (n2 && e3 instanceof Map && s instanceof Map) {
                if (e3.size !== s.size)
                  return false;
                for (c = e3.entries(); !(l = c.next()).done; )
                  if (!s.has(l.value[0]))
                    return false;
                for (c = e3.entries(); !(l = c.next()).done; )
                  if (!a(l.value[1], s.get(l.value[0])))
                    return false;
                return true;
              }
              if (i2 && e3 instanceof Set && s instanceof Set) {
                if (e3.size !== s.size)
                  return false;
                for (c = e3.entries(); !(l = c.next()).done; )
                  if (!s.has(l.value[0]))
                    return false;
                return true;
              }
              if (r2 && ArrayBuffer.isView(e3) && ArrayBuffer.isView(s)) {
                if ((o = e3.length) != s.length)
                  return false;
                for (l = o; l-- != 0; )
                  if (e3[l] !== s[l])
                    return false;
                return true;
              }
              if (e3.constructor === RegExp)
                return e3.source === s.source && e3.flags === s.flags;
              if (e3.valueOf !== Object.prototype.valueOf)
                return e3.valueOf() === s.valueOf();
              if (e3.toString !== Object.prototype.toString)
                return e3.toString() === s.toString();
              if ((o = (u = Object.keys(e3)).length) !== Object.keys(s).length)
                return false;
              for (l = o; l-- != 0; )
                if (!Object.prototype.hasOwnProperty.call(s, u[l]))
                  return false;
              if (t2 && e3 instanceof Element)
                return false;
              for (l = o; l-- != 0; )
                if ((u[l] !== "_owner" && u[l] !== "__v" && u[l] !== "__o" || !e3.$$typeof) && !a(e3[u[l]], s[u[l]]))
                  return false;
              return true;
            }
            return e3 != e3 && s != s;
          }
          e2.exports = function(e3, t3) {
            try {
              return a(e3, t3);
            } catch (e4) {
              if ((e4.message || "").match(/stack|recursion/i))
                return console.warn("react-fast-compare cannot handle circular refs"), false;
              throw e4;
            }
          };
        }, 37: function(e2, t2, n2) {
          !function(e3, t3) {
            function n3() {
              return (n3 = Object.assign || function(e4) {
                for (var t4 = 1; t4 < arguments.length; t4++) {
                  var n4 = arguments[t4];
                  for (var i3 in n4)
                    Object.prototype.hasOwnProperty.call(n4, i3) && (e4[i3] = n4[i3]);
                }
                return e4;
              }).apply(this, arguments);
            }
            var i2 = "Left", r2 = "Right", a = "Down", s = { delta: 10, preventDefaultTouchmoveEvent: false, rotationAngle: 0, trackMouse: false, trackTouch: true }, o = { first: true, initial: [0, 0], start: 0, swiping: false, xy: [0, 0] }, l = "mousemove", u = "mouseup";
            function c(e4, t4) {
              if (t4 === 0)
                return e4;
              var n4 = Math.PI / 180 * t4;
              return [e4[0] * Math.cos(n4) + e4[1] * Math.sin(n4), e4[1] * Math.cos(n4) - e4[0] * Math.sin(n4)];
            }
            function h(e4, t4) {
              var s2 = function(t5) {
                t5 && "touches" in t5 && t5.touches.length > 1 || e4(function(e5, i3) {
                  i3.trackMouse && (document.addEventListener(l, h2), document.addEventListener(u, f));
                  var r3 = "touches" in t5 ? t5.touches[0] : t5, a2 = c([r3.clientX, r3.clientY], i3.rotationAngle);
                  return n3({}, e5, o, { initial: [].concat(a2), xy: a2, start: t5.timeStamp || 0 });
                });
              }, h2 = function(t5) {
                e4(function(e5, s3) {
                  if ("touches" in t5 && t5.touches.length > 1)
                    return e5;
                  var o2 = "touches" in t5 ? t5.touches[0] : t5, l2 = c([o2.clientX, o2.clientY], s3.rotationAngle), u2 = l2[0], h3 = l2[1], d2 = u2 - e5.xy[0], f2 = h3 - e5.xy[1], p2 = Math.abs(d2), m2 = Math.abs(f2), v = (t5.timeStamp || 0) - e5.start, g = Math.sqrt(p2 * p2 + m2 * m2) / (v || 1), b = [d2 / (v || 1), f2 / (v || 1)];
                  if (p2 < s3.delta && m2 < s3.delta && !e5.swiping)
                    return e5;
                  var y = function(e6, t6, n4, s4) {
                    return e6 > t6 ? n4 > 0 ? r2 : i2 : s4 > 0 ? a : "Up";
                  }(p2, m2, d2, f2), w = { absX: p2, absY: m2, deltaX: d2, deltaY: f2, dir: y, event: t5, first: e5.first, initial: e5.initial, velocity: g, vxvy: b };
                  s3.onSwiping && s3.onSwiping(w);
                  var T = false;
                  return (s3.onSwiping || s3.onSwiped || "onSwiped" + y in s3) && (T = true), T && s3.preventDefaultTouchmoveEvent && s3.trackTouch && t5.cancelable && t5.preventDefault(), n3({}, e5, { first: false, eventData: w, swiping: true });
                });
              }, d = function(t5) {
                e4(function(e5, i3) {
                  var r3;
                  if (e5.swiping && e5.eventData) {
                    r3 = n3({}, e5.eventData, { event: t5 }), i3.onSwiped && i3.onSwiped(r3);
                    var a2 = "onSwiped" + r3.dir;
                    a2 in i3 && i3[a2](r3);
                  } else
                    i3.onTap && i3.onTap({ event: t5 });
                  return n3({}, e5, o, { eventData: r3 });
                });
              }, f = function(e5) {
                document.removeEventListener(l, h2), document.removeEventListener(u, f), d(e5);
              }, p = function(e5, t5) {
                var n4 = function() {
                };
                if (e5 && e5.addEventListener) {
                  var i3 = [["touchstart", s2], ["touchmove", h2], ["touchend", d]];
                  i3.forEach(function(n5) {
                    var i4 = n5[0], r3 = n5[1];
                    return e5.addEventListener(i4, r3, { passive: t5 });
                  }), n4 = function() {
                    return i3.forEach(function(t6) {
                      var n5 = t6[0], i4 = t6[1];
                      return e5.removeEventListener(n5, i4);
                    });
                  };
                }
                return n4;
              }, m = { ref: function(t5) {
                t5 !== null && e4(function(e5, i3) {
                  if (e5.el === t5)
                    return e5;
                  var r3 = {};
                  return e5.el && e5.el !== t5 && e5.cleanUpTouch && (e5.cleanUpTouch(), r3.cleanUpTouch = void 0), i3.trackTouch && t5 && (r3.cleanUpTouch = p(t5, !i3.preventDefaultTouchmoveEvent)), n3({}, e5, { el: t5 }, r3);
                });
              } };
              return t4.trackMouse && (m.onMouseDown = s2), [m, p];
            }
            e3.DOWN = a, e3.LEFT = i2, e3.RIGHT = r2, e3.UP = "Up", e3.useSwipeable = function(e4) {
              var i3 = e4.trackMouse, r3 = t3.useRef(n3({}, o)), a2 = t3.useRef(n3({}, s));
              a2.current = n3({}, s, e4);
              var l2 = t3.useMemo(function() {
                return h(function(e5) {
                  return r3.current = e5(r3.current, a2.current);
                }, { trackMouse: i3 });
              }, [i3]), u2 = l2[0], c2 = l2[1];
              return r3.current = function(e5, t4, i4) {
                var r4 = {};
                return !t4.trackTouch && e5.cleanUpTouch ? (e5.cleanUpTouch(), r4.cleanUpTouch = void 0) : t4.trackTouch && !e5.cleanUpTouch && e5.el && (r4.cleanUpTouch = i4(e5.el, !t4.preventDefaultTouchmoveEvent)), n3({}, e5, r4);
              }(r3.current, a2.current, c2), u2;
            };
          }(t2, n2(888));
        }, 888: (t2) => {
          "use strict";
          t2.exports = e;
        } }, n = {};
        function i(e2) {
          var r2 = n[e2];
          if (r2 !== void 0)
            return r2.exports;
          var a = n[e2] = { exports: {} };
          return t[e2].call(a.exports, a, a.exports, i), a.exports;
        }
        i.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return i.d(t2, { a: t2 }), t2;
        }, i.d = (e2, t2) => {
          for (var n2 in t2)
            i.o(t2, n2) && !i.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, i.g = function() {
          if (typeof globalThis == "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if (typeof window == "object")
              return window;
          }
        }(), i.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), i.r = (e2) => {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return (() => {
          "use strict";
          function e2(t3) {
            var n3, i2, r2 = "";
            if (typeof t3 == "string" || typeof t3 == "number")
              r2 += t3;
            else if (typeof t3 == "object")
              if (Array.isArray(t3))
                for (n3 = 0; n3 < t3.length; n3++)
                  t3[n3] && (i2 = e2(t3[n3])) && (r2 && (r2 += " "), r2 += i2);
              else
                for (n3 in t3)
                  t3[n3] && (r2 && (r2 += " "), r2 += n3);
            return r2;
          }
          function t2() {
            for (var t3, n3, i2 = 0, r2 = ""; i2 < arguments.length; )
              (t3 = arguments[i2++]) && (n3 = e2(t3)) && (r2 && (r2 += " "), r2 += n3);
            return r2;
          }
          i.r(r), i.d(r, { default: () => Me });
          var n2 = i(888), a = i.n(n2);
          const s = function(e3) {
            var t3 = typeof e3;
            return e3 != null && (t3 == "object" || t3 == "function");
          }, o = typeof global == "object" && global && global.Object === Object && global;
          var l = typeof self == "object" && self && self.Object === Object && self;
          const u = o || l || Function("return this")(), c = function() {
            return u.Date.now();
          };
          var h = /\s/;
          var d = /^\s+/;
          const f = function(e3) {
            return e3 ? e3.slice(0, function(e4) {
              for (var t3 = e4.length; t3-- && h.test(e4.charAt(t3)); )
                ;
              return t3;
            }(e3) + 1).replace(d, "") : e3;
          }, p = u.Symbol;
          var m = Object.prototype, v = m.hasOwnProperty, g = m.toString, b = p ? p.toStringTag : void 0;
          var y = Object.prototype.toString;
          var w = p ? p.toStringTag : void 0;
          const T = function(e3) {
            return e3 == null ? e3 === void 0 ? "[object Undefined]" : "[object Null]" : w && w in Object(e3) ? function(e4) {
              var t3 = v.call(e4, b), n3 = e4[b];
              try {
                e4[b] = void 0;
                var i2 = true;
              } catch (e5) {
              }
              var r2 = g.call(e4);
              return i2 && (t3 ? e4[b] = n3 : delete e4[b]), r2;
            }(e3) : function(e4) {
              return y.call(e4);
            }(e3);
          };
          var S = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, E = /^0o[0-7]+$/i, I = parseInt;
          const k = function(e3) {
            if (typeof e3 == "number")
              return e3;
            if (function(e4) {
              return typeof e4 == "symbol" || function(e5) {
                return e5 != null && typeof e5 == "object";
              }(e4) && T(e4) == "[object Symbol]";
            }(e3))
              return NaN;
            if (s(e3)) {
              var t3 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
              e3 = s(t3) ? t3 + "" : t3;
            }
            if (typeof e3 != "string")
              return e3 === 0 ? e3 : +e3;
            e3 = f(e3);
            var n3 = O.test(e3);
            return n3 || E.test(e3) ? I(e3.slice(2), n3 ? 2 : 8) : S.test(e3) ? NaN : +e3;
          };
          var x = Math.max, _ = Math.min;
          const L = function(e3, t3, n3) {
            var i2, r2, a2, o2, l2, u2, h2 = 0, d2 = false, f2 = false, p2 = true;
            if (typeof e3 != "function")
              throw new TypeError("Expected a function");
            function m2(t4) {
              var n4 = i2, a3 = r2;
              return i2 = r2 = void 0, h2 = t4, o2 = e3.apply(a3, n4);
            }
            function v2(e4) {
              return h2 = e4, l2 = setTimeout(b2, t3), d2 ? m2(e4) : o2;
            }
            function g2(e4) {
              var n4 = e4 - u2;
              return u2 === void 0 || n4 >= t3 || n4 < 0 || f2 && e4 - h2 >= a2;
            }
            function b2() {
              var e4 = c();
              if (g2(e4))
                return y2(e4);
              l2 = setTimeout(b2, function(e5) {
                var n4 = t3 - (e5 - u2);
                return f2 ? _(n4, a2 - (e5 - h2)) : n4;
              }(e4));
            }
            function y2(e4) {
              return l2 = void 0, p2 && i2 ? m2(e4) : (i2 = r2 = void 0, o2);
            }
            function w2() {
              var e4 = c(), n4 = g2(e4);
              if (i2 = arguments, r2 = this, u2 = e4, n4) {
                if (l2 === void 0)
                  return v2(u2);
                if (f2)
                  return clearTimeout(l2), l2 = setTimeout(b2, t3), m2(u2);
              }
              return l2 === void 0 && (l2 = setTimeout(b2, t3)), o2;
            }
            return t3 = k(t3) || 0, s(n3) && (d2 = !!n3.leading, a2 = (f2 = "maxWait" in n3) ? x(k(n3.maxWait) || 0, t3) : a2, p2 = "trailing" in n3 ? !!n3.trailing : p2), w2.cancel = function() {
              l2 !== void 0 && clearTimeout(l2), h2 = 0, i2 = u2 = r2 = l2 = void 0;
            }, w2.flush = function() {
              return l2 === void 0 ? o2 : y2(c());
            }, w2;
          }, P = function(e3, t3, n3) {
            var i2 = true, r2 = true;
            if (typeof e3 != "function")
              throw new TypeError("Expected a function");
            return s(n3) && (i2 = "leading" in n3 ? !!n3.leading : i2, r2 = "trailing" in n3 ? !!n3.trailing : r2), L(e3, t3, { leading: i2, maxWait: t3, trailing: r2 });
          };
          var M = i(590), R = i.n(M), D = function() {
            if (typeof Map != "undefined")
              return Map;
            function e3(e4, t3) {
              var n3 = -1;
              return e4.some(function(e5, i2) {
                return e5[0] === t3 && (n3 = i2, true);
              }), n3;
            }
            return function() {
              function t3() {
                this.__entries__ = [];
              }
              return Object.defineProperty(t3.prototype, "size", { get: function() {
                return this.__entries__.length;
              }, enumerable: true, configurable: true }), t3.prototype.get = function(t4) {
                var n3 = e3(this.__entries__, t4), i2 = this.__entries__[n3];
                return i2 && i2[1];
              }, t3.prototype.set = function(t4, n3) {
                var i2 = e3(this.__entries__, t4);
                ~i2 ? this.__entries__[i2][1] = n3 : this.__entries__.push([t4, n3]);
              }, t3.prototype.delete = function(t4) {
                var n3 = this.__entries__, i2 = e3(n3, t4);
                ~i2 && n3.splice(i2, 1);
              }, t3.prototype.has = function(t4) {
                return !!~e3(this.__entries__, t4);
              }, t3.prototype.clear = function() {
                this.__entries__.splice(0);
              }, t3.prototype.forEach = function(e4, t4) {
                t4 === void 0 && (t4 = null);
                for (var n3 = 0, i2 = this.__entries__; n3 < i2.length; n3++) {
                  var r2 = i2[n3];
                  e4.call(t4, r2[1], r2[0]);
                }
              }, t3;
            }();
          }(), F = typeof window != "undefined" && typeof document != "undefined" && window.document === document, C = i.g !== void 0 && i.g.Math === Math ? i.g : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")(), W = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(C) : function(e3) {
            return setTimeout(function() {
              return e3(Date.now());
            }, 1e3 / 60);
          }, N = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], j = typeof MutationObserver != "undefined", z = function() {
            function e3() {
              this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e4, t3) {
                var n3 = false, i2 = false, r2 = 0;
                function a2() {
                  n3 && (n3 = false, e4()), i2 && o2();
                }
                function s2() {
                  W(a2);
                }
                function o2() {
                  var e5 = Date.now();
                  if (n3) {
                    if (e5 - r2 < 2)
                      return;
                    i2 = true;
                  } else
                    n3 = true, i2 = false, setTimeout(s2, 20);
                  r2 = e5;
                }
                return o2;
              }(this.refresh.bind(this));
            }
            return e3.prototype.addObserver = function(e4) {
              ~this.observers_.indexOf(e4) || this.observers_.push(e4), this.connected_ || this.connect_();
            }, e3.prototype.removeObserver = function(e4) {
              var t3 = this.observers_, n3 = t3.indexOf(e4);
              ~n3 && t3.splice(n3, 1), !t3.length && this.connected_ && this.disconnect_();
            }, e3.prototype.refresh = function() {
              this.updateObservers_() && this.refresh();
            }, e3.prototype.updateObservers_ = function() {
              var e4 = this.observers_.filter(function(e5) {
                return e5.gatherActive(), e5.hasActive();
              });
              return e4.forEach(function(e5) {
                return e5.broadcastActive();
              }), e4.length > 0;
            }, e3.prototype.connect_ = function() {
              F && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), j ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
            }, e3.prototype.disconnect_ = function() {
              F && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
            }, e3.prototype.onTransitionEnd_ = function(e4) {
              var t3 = e4.propertyName, n3 = t3 === void 0 ? "" : t3;
              N.some(function(e5) {
                return !!~n3.indexOf(e5);
              }) && this.refresh();
            }, e3.getInstance = function() {
              return this.instance_ || (this.instance_ = new e3()), this.instance_;
            }, e3.instance_ = null, e3;
          }(), B = function(e3, t3) {
            for (var n3 = 0, i2 = Object.keys(t3); n3 < i2.length; n3++) {
              var r2 = i2[n3];
              Object.defineProperty(e3, r2, { value: t3[r2], enumerable: false, writable: false, configurable: true });
            }
            return e3;
          }, A = function(e3) {
            return e3 && e3.ownerDocument && e3.ownerDocument.defaultView || C;
          }, G = V(0, 0, 0, 0);
          function U(e3) {
            return parseFloat(e3) || 0;
          }
          function H(e3) {
            for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
              t3[n3 - 1] = arguments[n3];
            return t3.reduce(function(t4, n4) {
              return t4 + U(e3["border-" + n4 + "-width"]);
            }, 0);
          }
          var q = typeof SVGGraphicsElement != "undefined" ? function(e3) {
            return e3 instanceof A(e3).SVGGraphicsElement;
          } : function(e3) {
            return e3 instanceof A(e3).SVGElement && typeof e3.getBBox == "function";
          };
          function K(e3) {
            return F ? q(e3) ? function(e4) {
              var t3 = e4.getBBox();
              return V(0, 0, t3.width, t3.height);
            }(e3) : function(e4) {
              var t3 = e4.clientWidth, n3 = e4.clientHeight;
              if (!t3 && !n3)
                return G;
              var i2 = A(e4).getComputedStyle(e4), r2 = function(e5) {
                for (var t4 = {}, n4 = 0, i3 = ["top", "right", "bottom", "left"]; n4 < i3.length; n4++) {
                  var r3 = i3[n4], a3 = e5["padding-" + r3];
                  t4[r3] = U(a3);
                }
                return t4;
              }(i2), a2 = r2.left + r2.right, s2 = r2.top + r2.bottom, o2 = U(i2.width), l2 = U(i2.height);
              if (i2.boxSizing === "border-box" && (Math.round(o2 + a2) !== t3 && (o2 -= H(i2, "left", "right") + a2), Math.round(l2 + s2) !== n3 && (l2 -= H(i2, "top", "bottom") + s2)), !function(e5) {
                return e5 === A(e5).document.documentElement;
              }(e4)) {
                var u2 = Math.round(o2 + a2) - t3, c2 = Math.round(l2 + s2) - n3;
                Math.abs(u2) !== 1 && (o2 -= u2), Math.abs(c2) !== 1 && (l2 -= c2);
              }
              return V(r2.left, r2.top, o2, l2);
            }(e3) : G;
          }
          function V(e3, t3, n3, i2) {
            return { x: e3, y: t3, width: n3, height: i2 };
          }
          var X = function() {
            function e3(e4) {
              this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = V(0, 0, 0, 0), this.target = e4;
            }
            return e3.prototype.isActive = function() {
              var e4 = K(this.target);
              return this.contentRect_ = e4, e4.width !== this.broadcastWidth || e4.height !== this.broadcastHeight;
            }, e3.prototype.broadcastRect = function() {
              var e4 = this.contentRect_;
              return this.broadcastWidth = e4.width, this.broadcastHeight = e4.height, e4;
            }, e3;
          }(), Y = function(e3, t3) {
            var n3, i2, r2, a2, s2, o2, l2, u2 = (i2 = (n3 = t3).x, r2 = n3.y, a2 = n3.width, s2 = n3.height, o2 = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, l2 = Object.create(o2.prototype), B(l2, { x: i2, y: r2, width: a2, height: s2, top: r2, right: i2 + a2, bottom: s2 + r2, left: i2 }), l2);
            B(this, { target: e3, contentRect: u2 });
          }, $ = function() {
            function e3(e4, t3, n3) {
              if (this.activeObservations_ = [], this.observations_ = new D(), typeof e4 != "function")
                throw new TypeError("The callback provided as parameter 1 is not a function.");
              this.callback_ = e4, this.controller_ = t3, this.callbackCtx_ = n3;
            }
            return e3.prototype.observe = function(e4) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (typeof Element != "undefined" && Element instanceof Object) {
                if (!(e4 instanceof A(e4).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t3 = this.observations_;
                t3.has(e4) || (t3.set(e4, new X(e4)), this.controller_.addObserver(this), this.controller_.refresh());
              }
            }, e3.prototype.unobserve = function(e4) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (typeof Element != "undefined" && Element instanceof Object) {
                if (!(e4 instanceof A(e4).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t3 = this.observations_;
                t3.has(e4) && (t3.delete(e4), t3.size || this.controller_.removeObserver(this));
              }
            }, e3.prototype.disconnect = function() {
              this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
            }, e3.prototype.gatherActive = function() {
              var e4 = this;
              this.clearActive(), this.observations_.forEach(function(t3) {
                t3.isActive() && e4.activeObservations_.push(t3);
              });
            }, e3.prototype.broadcastActive = function() {
              if (this.hasActive()) {
                var e4 = this.callbackCtx_, t3 = this.activeObservations_.map(function(e5) {
                  return new Y(e5.target, e5.broadcastRect());
                });
                this.callback_.call(e4, t3, e4), this.clearActive();
              }
            }, e3.prototype.clearActive = function() {
              this.activeObservations_.splice(0);
            }, e3.prototype.hasActive = function() {
              return this.activeObservations_.length > 0;
            }, e3;
          }(), J = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new D(), Q = function e3(t3) {
            if (!(this instanceof e3))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var n3 = z.getInstance(), i2 = new $(t3, n3, this);
            J.set(this, i2);
          };
          ["observe", "unobserve", "disconnect"].forEach(function(e3) {
            Q.prototype[e3] = function() {
              var t3;
              return (t3 = J.get(this))[e3].apply(t3, arguments);
            };
          });
          const Z = C.ResizeObserver !== void 0 ? C.ResizeObserver : Q;
          var ee = i(37), te = i(697), ne = a().memo(function(e3) {
            var t3 = e3.description, n3 = e3.fullscreen, i2 = e3.handleImageLoaded, r2 = e3.isFullscreen, s2 = e3.onImageError, o2 = e3.original, l2 = e3.originalAlt, u2 = e3.originalHeight, c2 = e3.originalWidth, h2 = e3.originalTitle, d2 = e3.sizes, f2 = e3.srcSet, p2 = r2 && n3 || o2;
            return a().createElement(a().Fragment, null, a().createElement("img", { className: "image-gallery-image", src: p2, alt: l2, srcSet: f2, height: u2, width: c2, sizes: d2, title: h2, onLoad: function(e4) {
              return i2(e4, o2);
            }, onError: s2 }), t3 && a().createElement("span", { className: "image-gallery-description" }, t3));
          });
          ne.displayName = "Item", ne.propTypes = { description: te.string, fullscreen: te.string, handleImageLoaded: te.func.isRequired, isFullscreen: te.bool, onImageError: te.func.isRequired, original: te.string.isRequired, originalAlt: te.string, originalHeight: te.string, originalWidth: te.string, originalTitle: te.string, sizes: te.string, srcSet: te.string }, ne.defaultProps = { description: "", fullscreen: "", isFullscreen: false, originalAlt: "", originalHeight: "", originalWidth: "", originalTitle: "", sizes: "", srcSet: "" };
          const ie = ne;
          var re = { left: a().createElement("polyline", { points: "15 18 9 12 15 6" }), right: a().createElement("polyline", { points: "9 18 15 12 9 6" }), maximize: a().createElement("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }), minimize: a().createElement("path", { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }), play: a().createElement("polygon", { points: "5 3 19 12 5 21 5 3" }), pause: a().createElement(a().Fragment, null, a().createElement("rect", { x: "6", y: "4", width: "4", height: "16" }), a().createElement("rect", { x: "14", y: "4", width: "4", height: "16" })) }, ae = function(e3) {
            var t3 = e3.strokeWidth, n3 = e3.viewBox, i2 = e3.icon;
            return a().createElement("svg", { className: "image-gallery-svg", xmlns: "http://www.w3.org/2000/svg", viewBox: n3, fill: "none", stroke: "currentColor", strokeWidth: t3, strokeLinecap: "round", strokeLinejoin: "round" }, re[i2]);
          };
          ae.propTypes = { strokeWidth: te.number, viewBox: te.string, icon: (0, te.oneOf)(["left", "right", "maximize", "minimize", "play", "pause"]).isRequired }, ae.defaultProps = { strokeWidth: 1, viewBox: "0 0 24 24" };
          const se = ae;
          var oe = a().memo(function(e3) {
            var t3 = e3.isFullscreen, n3 = e3.onClick;
            return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-fullscreen-button", onClick: n3, "aria-label": "Open Fullscreen" }, a().createElement(se, { strokeWidth: 2, icon: t3 ? "minimize" : "maximize" }));
          });
          oe.displayName = "Fullscreen", oe.propTypes = { isFullscreen: te.bool.isRequired, onClick: te.func.isRequired };
          const le = oe;
          var ue = a().memo(function(e3) {
            var t3 = e3.disabled, n3 = e3.onClick;
            return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-left-nav", disabled: t3, onClick: n3, "aria-label": "Previous Slide" }, a().createElement(se, { icon: "left", viewBox: "6 0 12 24" }));
          });
          ue.displayName = "LeftNav", ue.propTypes = { disabled: te.bool.isRequired, onClick: te.func.isRequired };
          const ce = ue;
          var he = a().memo(function(e3) {
            var t3 = e3.disabled, n3 = e3.onClick;
            return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-right-nav", disabled: t3, onClick: n3, "aria-label": "Next Slide" }, a().createElement(se, { icon: "right", viewBox: "6 0 12 24" }));
          });
          he.displayName = "RightNav", he.propTypes = { disabled: te.bool.isRequired, onClick: te.func.isRequired };
          const de = he;
          var fe = a().memo(function(e3) {
            var t3 = e3.isPlaying, n3 = e3.onClick;
            return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-play-button", onClick: n3, "aria-label": "Play or Pause Slideshow" }, a().createElement(se, { strokeWidth: 2, icon: t3 ? "pause" : "play" }));
          });
          fe.displayName = "PlayPause", fe.propTypes = { isPlaying: te.bool.isRequired, onClick: te.func.isRequired };
          const pe = fe;
          function me() {
            return (me = Object.assign || function(e3) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = arguments[t3];
                for (var i2 in n3)
                  Object.prototype.hasOwnProperty.call(n3, i2) && (e3[i2] = n3[i2]);
              }
              return e3;
            }).apply(this, arguments);
          }
          var ve = function(e3) {
            var t3 = e3.children, n3 = e3.className, i2 = e3.delta, r2 = e3.onSwiping, s2 = e3.onSwiped, o2 = (0, ee.useSwipeable)({ delta: i2, onSwiping: r2, onSwiped: s2 });
            return a().createElement("div", me({}, o2, { className: n3 }), t3);
          };
          ve.propTypes = { children: te.node.isRequired, className: te.string, delta: te.number, onSwiped: te.func, onSwiping: te.func }, ve.defaultProps = { className: "", delta: 0, onSwiping: function() {
          }, onSwiped: function() {
          } };
          const ge = ve;
          function be(e3) {
            return (be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            })(e3);
          }
          function ye(e3, t3) {
            var n3 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var i2 = Object.getOwnPropertySymbols(e3);
              t3 && (i2 = i2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n3.push.apply(n3, i2);
            }
            return n3;
          }
          function we(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3] != null ? arguments[t3] : {};
              t3 % 2 ? ye(Object(n3), true).forEach(function(t4) {
                Te(e3, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ye(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e3;
          }
          function Te(e3, t3, n3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
          }
          function Se(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var i2 = t3[n3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          function Oe(e3, t3) {
            return (Oe = Object.setPrototypeOf || function(e4, t4) {
              return e4.__proto__ = t4, e4;
            })(e3, t3);
          }
          function Ee(e3, t3) {
            return !t3 || be(t3) !== "object" && typeof t3 != "function" ? Ie(e3) : t3;
          }
          function Ie(e3) {
            if (e3 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e3;
          }
          function ke(e3) {
            return (ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
              return e4.__proto__ || Object.getPrototypeOf(e4);
            })(e3);
          }
          var xe = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"], _e = (0, te.arrayOf)((0, te.shape)({ srcSet: te.string, media: te.string }));
          function Le(e3) {
            var t3 = parseInt(e3.keyCode || e3.which || 0, 10);
            return t3 === 66 || t3 === 62;
          }
          var Pe = function(e3) {
            !function(e4, t3) {
              if (typeof t3 != "function" && t3 !== null)
                throw new TypeError("Super expression must either be null or a function");
              e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && Oe(e4, t3);
            }(l2, e3);
            var n3, i2, r2, s2, o2 = (r2 = l2, s2 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, t3 = ke(r2);
              if (s2) {
                var n4 = ke(this).constructor;
                e4 = Reflect.construct(t3, arguments, n4);
              } else
                e4 = t3.apply(this, arguments);
              return Ee(this, e4);
            });
            function l2(e4) {
              var t3;
              return function(e5, t4) {
                if (!(e5 instanceof t4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, l2), (t3 = o2.call(this, e4)).state = { currentIndex: e4.startIndex, thumbsTranslate: 0, thumbsSwipedTranslate: 0, currentSlideOffset: 0, galleryWidth: 0, thumbnailsWrapperWidth: 0, thumbnailsWrapperHeight: 0, thumbsStyle: { transition: "all ".concat(e4.slideDuration, "ms ease-out") }, isFullscreen: false, isSwipingThumbnail: false, isPlaying: false }, t3.loadedImages = {}, t3.imageGallery = a().createRef(), t3.thumbnailsWrapper = a().createRef(), t3.thumbnails = a().createRef(), t3.imageGallerySlideWrapper = a().createRef(), t3.handleImageLoaded = t3.handleImageLoaded.bind(Ie(t3)), t3.handleKeyDown = t3.handleKeyDown.bind(Ie(t3)), t3.handleMouseDown = t3.handleMouseDown.bind(Ie(t3)), t3.handleTouchMove = t3.handleTouchMove.bind(Ie(t3)), t3.handleOnSwiped = t3.handleOnSwiped.bind(Ie(t3)), t3.handleScreenChange = t3.handleScreenChange.bind(Ie(t3)), t3.handleSwiping = t3.handleSwiping.bind(Ie(t3)), t3.handleThumbnailSwiping = t3.handleThumbnailSwiping.bind(Ie(t3)), t3.handleOnThumbnailSwiped = t3.handleOnThumbnailSwiped.bind(Ie(t3)), t3.onThumbnailMouseLeave = t3.onThumbnailMouseLeave.bind(Ie(t3)), t3.handleImageError = t3.handleImageError.bind(Ie(t3)), t3.pauseOrPlay = t3.pauseOrPlay.bind(Ie(t3)), t3.renderThumbInner = t3.renderThumbInner.bind(Ie(t3)), t3.renderItem = t3.renderItem.bind(Ie(t3)), t3.slideLeft = t3.slideLeft.bind(Ie(t3)), t3.slideRight = t3.slideRight.bind(Ie(t3)), t3.toggleFullScreen = t3.toggleFullScreen.bind(Ie(t3)), t3.togglePlay = t3.togglePlay.bind(Ie(t3)), t3.unthrottledSlideToIndex = t3.slideToIndex, t3.slideToIndex = P(t3.unthrottledSlideToIndex, e4.slideDuration, { trailing: false }), e4.lazyLoad && (t3.lazyLoaded = []), t3;
            }
            return n3 = l2, (i2 = [{ key: "componentDidMount", value: function() {
              var e4 = this.props, t3 = e4.autoPlay, n4 = e4.useWindowKeyDown;
              t3 && this.play(), n4 ? window.addEventListener("keydown", this.handleKeyDown) : this.imageGallery.current.addEventListener("keydown", this.handleKeyDown), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("touchmove", this.handleTouchMove, { passive: false }), this.initResizeObserver(this.imageGallerySlideWrapper), this.addScreenChangeEvent();
            } }, { key: "componentDidUpdate", value: function(e4, t3) {
              var n4 = this.props, i3 = n4.items, r3 = n4.lazyLoad, a2 = n4.slideDuration, s3 = n4.slideInterval, o3 = n4.startIndex, l3 = n4.thumbnailPosition, u2 = n4.showThumbnails, c2 = n4.useWindowKeyDown, h2 = this.state.currentIndex, d2 = e4.items.length !== i3.length, f2 = !R()(e4.items, i3), p2 = e4.startIndex !== o3, m2 = e4.thumbnailPosition !== l3, v2 = e4.showThumbnails !== u2;
              s3 === e4.slideInterval && a2 === e4.slideDuration || (this.pause(), this.play()), m2 && (this.removeResizeObserver(), this.initResizeObserver(this.imageGallerySlideWrapper)), (d2 || v2) && this.handleResize(), t3.currentIndex !== h2 && this.slideThumbnailBar(), e4.slideDuration !== a2 && (this.slideToIndex = P(this.unthrottledSlideToIndex, a2, { trailing: false })), !r3 || e4.lazyLoad && !f2 || (this.lazyLoaded = []), c2 !== e4.useWindowKeyDown && (c2 ? (this.imageGallery.current.removeEventListener("keydown", this.handleKeyDown), window.addEventListener("keydown", this.handleKeyDown)) : (window.removeEventListener("keydown", this.handleKeyDown), this.imageGallery.current.addEventListener("keydown", this.handleKeyDown))), (p2 || f2) && this.setState({ currentIndex: o3 });
            } }, { key: "componentWillUnmount", value: function() {
              var e4 = this.props.useWindowKeyDown;
              window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("touchmove", this.handleTouchMove), this.removeScreenChangeEvent(), this.removeResizeObserver(), this.playPauseIntervalId && (window.clearInterval(this.playPauseIntervalId), this.playPauseIntervalId = null), this.transitionTimer && window.clearTimeout(this.transitionTimer), e4 ? window.removeEventListener("keydown", this.handleKeyDown) : this.imageGallery.current.removeEventListener("keydown", this.handleKeyDown);
            } }, { key: "onSliding", value: function() {
              var e4 = this, t3 = this.state, n4 = t3.currentIndex, i3 = t3.isTransitioning, r3 = this.props, a2 = r3.onSlide, s3 = r3.slideDuration;
              this.transitionTimer = window.setTimeout(function() {
                i3 && (e4.setState({ isTransitioning: !i3, isSwipingThumbnail: false }), a2 && a2(n4));
              }, s3 + 50);
            } }, { key: "onThumbnailClick", value: function(e4, t3) {
              var n4 = this.props.onThumbnailClick;
              e4.target.parentNode.parentNode.blur(), this.slideToIndex(t3, e4), n4 && n4(e4, t3);
            } }, { key: "onThumbnailMouseOver", value: function(e4, t3) {
              var n4 = this;
              this.thumbnailMouseOverTimer && (window.clearTimeout(this.thumbnailMouseOverTimer), this.thumbnailMouseOverTimer = null), this.thumbnailMouseOverTimer = window.setTimeout(function() {
                n4.slideToIndex(t3), n4.pause();
              }, 300);
            } }, { key: "onThumbnailMouseLeave", value: function() {
              if (this.thumbnailMouseOverTimer) {
                var e4 = this.props.autoPlay;
                window.clearTimeout(this.thumbnailMouseOverTimer), this.thumbnailMouseOverTimer = null, e4 && this.play();
              }
            } }, { key: "setThumbsTranslate", value: function(e4) {
              this.setState({ thumbsTranslate: e4 });
            } }, { key: "setModalFullscreen", value: function(e4) {
              var t3 = this.props.onScreenChange;
              this.setState({ modalFullscreen: e4 }), t3 && t3(e4);
            } }, { key: "getThumbsTranslate", value: function(e4) {
              var t3, n4 = this.props, i3 = n4.disableThumbnailScroll, r3 = n4.items, a2 = this.state, s3 = a2.thumbnailsWrapperWidth, o3 = a2.thumbnailsWrapperHeight, l3 = this.thumbnails && this.thumbnails.current;
              if (i3)
                return 0;
              if (l3) {
                if (this.isThumbnailVertical()) {
                  if (l3.scrollHeight <= o3)
                    return 0;
                  t3 = l3.scrollHeight - o3;
                } else {
                  if (l3.scrollWidth <= s3 || s3 <= 0)
                    return 0;
                  t3 = l3.scrollWidth - s3;
                }
                return e4 * (t3 / (r3.length - 1));
              }
              return 0;
            } }, { key: "getAlignmentClassName", value: function(e4) {
              var t3 = this.state.currentIndex, n4 = this.props, i3 = n4.infinite, r3 = n4.items, a2 = "", s3 = "left", o3 = "right";
              switch (e4) {
                case t3 - 1:
                  a2 = " ".concat(s3);
                  break;
                case t3:
                  a2 = " ".concat("center");
                  break;
                case t3 + 1:
                  a2 = " ".concat(o3);
              }
              return r3.length >= 3 && i3 && (e4 === 0 && t3 === r3.length - 1 ? a2 = " ".concat(o3) : e4 === r3.length - 1 && t3 === 0 && (a2 = " ".concat(s3))), a2;
            } }, { key: "getTranslateXForTwoSlide", value: function(e4) {
              var t3 = this.state, n4 = t3.currentIndex, i3 = t3.currentSlideOffset, r3 = t3.previousIndex, a2 = n4 !== r3, s3 = e4 === 0 && r3 === 0, o3 = e4 === 1 && r3 === 1, l3 = e4 === 0 && n4 === 1, u2 = e4 === 1 && n4 === 0, c2 = i3 === 0, h2 = -100 * n4 + 100 * e4 + i3;
              return i3 > 0 ? this.direction = "left" : i3 < 0 && (this.direction = "right"), u2 && i3 > 0 && (h2 = -100 + i3), l3 && i3 < 0 && (h2 = 100 + i3), a2 ? s3 && c2 && this.direction === "left" ? h2 = 100 : o3 && c2 && this.direction === "right" && (h2 = -100) : (u2 && c2 && this.direction === "left" && (h2 = -100), l3 && c2 && this.direction === "right" && (h2 = 100)), h2;
            } }, { key: "getThumbnailBarHeight", value: function() {
              return this.isThumbnailVertical() ? { height: this.state.gallerySlideWrapperHeight } : {};
            } }, { key: "getSlideStyle", value: function(e4) {
              var t3 = this.state, n4 = t3.currentIndex, i3 = t3.currentSlideOffset, r3 = t3.slideStyle, a2 = this.props, s3 = a2.infinite, o3 = a2.items, l3 = a2.useTranslate3D, u2 = a2.isRTL, c2 = -100 * n4, h2 = o3.length - 1, d2 = (c2 + 100 * e4) * (u2 ? -1 : 1) + i3;
              s3 && o3.length > 2 && (n4 === 0 && e4 === h2 ? d2 = -100 * (u2 ? -1 : 1) + i3 : n4 === h2 && e4 === 0 && (d2 = 100 * (u2 ? -1 : 1) + i3)), s3 && o3.length === 2 && (d2 = this.getTranslateXForTwoSlide(e4));
              var f2 = "translate(".concat(d2, "%, 0)");
              return l3 && (f2 = "translate3d(".concat(d2, "%, 0, 0)")), we({ display: this.isSlideVisible(e4) ? "inherit" : "none", WebkitTransform: f2, MozTransform: f2, msTransform: f2, OTransform: f2, transform: f2 }, r3);
            } }, { key: "getCurrentIndex", value: function() {
              return this.state.currentIndex;
            } }, { key: "getThumbnailStyle", value: function() {
              var e4, t3 = this.props, n4 = t3.useTranslate3D, i3 = t3.isRTL, r3 = this.state, a2 = r3.thumbsTranslate, s3 = r3.thumbsStyle, o3 = i3 ? -1 * a2 : a2;
              return this.isThumbnailVertical() ? (e4 = "translate(0, ".concat(a2, "px)"), n4 && (e4 = "translate3d(0, ".concat(a2, "px, 0)"))) : (e4 = "translate(".concat(o3, "px, 0)"), n4 && (e4 = "translate3d(".concat(o3, "px, 0, 0)"))), we({ WebkitTransform: e4, MozTransform: e4, msTransform: e4, OTransform: e4, transform: e4 }, s3);
            } }, { key: "getSlideItems", value: function() {
              var e4 = this, n4 = this.state.currentIndex, i3 = this.props, r3 = i3.items, s3 = i3.slideOnThumbnailOver, o3 = i3.onClick, l3 = i3.lazyLoad, u2 = i3.onTouchMove, c2 = i3.onTouchEnd, h2 = i3.onTouchStart, d2 = i3.onMouseOver, f2 = i3.onMouseLeave, p2 = i3.renderItem, m2 = i3.renderThumbInner, v2 = i3.showThumbnails, g2 = i3.showBullets, b2 = [], y2 = [], w2 = [];
              return r3.forEach(function(i4, r4) {
                var T2 = e4.getAlignmentClassName(r4), S2 = i4.originalClass ? " ".concat(i4.originalClass) : "", O2 = i4.thumbnailClass ? " ".concat(i4.thumbnailClass) : "", E2 = i4.renderItem || p2 || e4.renderItem, I2 = i4.renderThumbInner || m2 || e4.renderThumbInner, k2 = !l3 || T2 || e4.lazyLoaded[r4];
                k2 && l3 && !e4.lazyLoaded[r4] && (e4.lazyLoaded[r4] = true);
                var x2 = e4.getSlideStyle(r4), _2 = a().createElement("div", { "aria-label": "Go to Slide ".concat(r4 + 1), key: "slide-".concat(r4), tabIndex: "-1", className: "image-gallery-slide ".concat(T2, " ").concat(S2), style: x2, onClick: o3, onKeyUp: e4.handleSlideKeyUp, onTouchMove: u2, onTouchEnd: c2, onTouchStart: h2, onMouseOver: d2, onFocus: d2, onMouseLeave: f2, role: "button" }, k2 ? E2(i4) : a().createElement("div", { style: { height: "100%" } }));
                if (b2.push(_2), v2 && i4.thumbnail) {
                  var L2 = t2("image-gallery-thumbnail", O2, { active: n4 === r4 });
                  y2.push(a().createElement("button", { key: "thumbnail-".concat(r4), type: "button", tabIndex: "0", "aria-pressed": n4 === r4 ? "true" : "false", "aria-label": "Go to Slide ".concat(r4 + 1), className: L2, onMouseLeave: s3 ? e4.onThumbnailMouseLeave : null, onMouseOver: function(t3) {
                    return e4.handleThumbnailMouseOver(t3, r4);
                  }, onFocus: function(t3) {
                    return e4.handleThumbnailMouseOver(t3, r4);
                  }, onKeyUp: function(t3) {
                    return e4.handleThumbnailKeyUp(t3, r4);
                  }, onClick: function(t3) {
                    return e4.onThumbnailClick(t3, r4);
                  } }, I2(i4)));
                }
                if (g2) {
                  var P2 = t2("image-gallery-bullet", i4.bulletClass, { active: n4 === r4 });
                  w2.push(a().createElement("button", { type: "button", key: "bullet-".concat(r4), className: P2, onClick: function(t3) {
                    return i4.bulletOnClick && i4.bulletOnClick({ item: i4, itemIndex: r4, currentIndex: n4 }), t3.target.blur(), e4.slideToIndex.call(e4, r4, t3);
                  }, "aria-pressed": n4 === r4 ? "true" : "false", "aria-label": "Go to Slide ".concat(r4 + 1) }));
                }
              }), { slides: b2, thumbnails: y2, bullets: w2 };
            } }, { key: "ignoreIsTransitioning", value: function() {
              var e4 = this.props.items, t3 = this.state, n4 = t3.previousIndex, i3 = t3.currentIndex, r3 = e4.length - 1;
              return Math.abs(n4 - i3) > 1 && !(n4 === 0 && i3 === r3) && !(n4 === r3 && i3 === 0);
            } }, { key: "isFirstOrLastSlide", value: function(e4) {
              return e4 === this.props.items.length - 1 || e4 === 0;
            } }, { key: "slideIsTransitioning", value: function(e4) {
              var t3 = this.state, n4 = t3.isTransitioning, i3 = t3.previousIndex, r3 = t3.currentIndex;
              return n4 && !(e4 === i3 || e4 === r3);
            } }, { key: "isSlideVisible", value: function(e4) {
              return !this.slideIsTransitioning(e4) || this.ignoreIsTransitioning() && !this.isFirstOrLastSlide(e4);
            } }, { key: "slideThumbnailBar", value: function() {
              var e4 = this.state, t3 = e4.currentIndex, n4 = e4.isSwipingThumbnail, i3 = -this.getThumbsTranslate(t3);
              n4 || (t3 === 0 ? this.setState({ thumbsTranslate: 0, thumbsSwipedTranslate: 0 }) : this.setState({ thumbsTranslate: i3, thumbsSwipedTranslate: i3 }));
            } }, { key: "canSlide", value: function() {
              return this.props.items.length >= 2;
            } }, { key: "canSlideLeft", value: function() {
              var e4 = this.props, t3 = e4.infinite, n4 = e4.isRTL;
              return t3 || (n4 ? this.canSlideNext() : this.canSlidePrevious());
            } }, { key: "canSlideRight", value: function() {
              var e4 = this.props, t3 = e4.infinite, n4 = e4.isRTL;
              return t3 || (n4 ? this.canSlidePrevious() : this.canSlideNext());
            } }, { key: "canSlidePrevious", value: function() {
              return this.state.currentIndex > 0;
            } }, { key: "canSlideNext", value: function() {
              return this.state.currentIndex < this.props.items.length - 1;
            } }, { key: "handleSwiping", value: function(e4) {
              var t3 = e4.event, n4 = e4.absX, i3 = e4.dir, r3 = this.props, a2 = r3.disableSwipe, s3 = r3.stopPropagation, o3 = this.state, l3 = o3.galleryWidth, u2 = o3.isTransitioning, c2 = o3.swipingUpDown, h2 = o3.swipingLeftRight;
              if (i3 !== ee.UP && i3 !== ee.DOWN && !c2 || h2) {
                if (i3 !== ee.LEFT && i3 !== ee.RIGHT || h2 || this.setState({ swipingLeftRight: true }), !a2) {
                  var d2 = this.props.swipingTransitionDuration;
                  if (s3 && t3.preventDefault(), u2)
                    this.setState({ currentSlideOffset: 0 });
                  else {
                    var f2 = i3 === ee.RIGHT ? 1 : -1, p2 = n4 / l3 * 100;
                    Math.abs(p2) >= 100 && (p2 = 100);
                    var m2 = { transition: "transform ".concat(d2, "ms ease-out") };
                    this.setState({ currentSlideOffset: f2 * p2, slideStyle: m2 });
                  }
                }
              } else
                c2 || this.setState({ swipingUpDown: true });
            } }, { key: "handleThumbnailSwiping", value: function(e4) {
              var t3 = e4.event, n4 = e4.absX, i3 = e4.absY, r3 = e4.dir, a2 = this.props, s3 = a2.stopPropagation, o3 = a2.swipingThumbnailTransitionDuration, l3 = this.state, u2 = l3.thumbsSwipedTranslate, c2 = l3.thumbnailsWrapperHeight, h2 = l3.thumbnailsWrapperWidth, d2 = l3.swipingUpDown, f2 = l3.swipingLeftRight;
              if (this.isThumbnailVertical()) {
                if ((r3 === ee.LEFT || r3 === ee.RIGHT || f2) && !d2)
                  return void (f2 || this.setState({ swipingLeftRight: true }));
                r3 !== ee.UP && r3 !== ee.DOWN || d2 || this.setState({ swipingUpDown: true });
              } else {
                if ((r3 === ee.UP || r3 === ee.DOWN || d2) && !f2)
                  return void (d2 || this.setState({ swipingUpDown: true }));
                r3 !== ee.LEFT && r3 !== ee.RIGHT || f2 || this.setState({ swipingLeftRight: true });
              }
              var p2, m2, v2, g2, b2, y2 = this.thumbnails && this.thumbnails.current;
              if (this.isThumbnailVertical() ? (p2 = u2 + (r3 === ee.DOWN ? i3 : -i3), m2 = y2.scrollHeight - c2 + 20, v2 = Math.abs(p2) > m2, g2 = p2 > 20, b2 = y2.scrollHeight <= c2) : (p2 = u2 + (r3 === ee.RIGHT ? n4 : -n4), m2 = y2.scrollWidth - h2 + 20, v2 = Math.abs(p2) > m2, g2 = p2 > 20, b2 = y2.scrollWidth <= h2), !b2 && (r3 !== ee.LEFT && r3 !== ee.UP || !v2) && (r3 !== ee.RIGHT && r3 !== ee.DOWN || !g2)) {
                s3 && t3.stopPropagation();
                var w2 = { transition: "transform ".concat(o3, "ms ease-out") };
                this.setState({ thumbsTranslate: p2, thumbsStyle: w2 });
              }
            } }, { key: "handleOnThumbnailSwiped", value: function() {
              var e4 = this.state.thumbsTranslate, t3 = this.props.slideDuration;
              this.resetSwipingDirection(), this.setState({ isSwipingThumbnail: true, thumbsSwipedTranslate: e4, thumbsStyle: { transition: "all ".concat(t3, "ms ease-out") } });
            } }, { key: "sufficientSwipe", value: function() {
              var e4 = this.state.currentSlideOffset, t3 = this.props.swipeThreshold;
              return Math.abs(e4) > t3;
            } }, { key: "resetSwipingDirection", value: function() {
              var e4 = this.state, t3 = e4.swipingUpDown, n4 = e4.swipingLeftRight;
              t3 && this.setState({ swipingUpDown: false }), n4 && this.setState({ swipingLeftRight: false });
            } }, { key: "handleOnSwiped", value: function(e4) {
              var t3 = e4.event, n4 = e4.dir, i3 = e4.velocity, r3 = this.props, a2 = r3.disableSwipe, s3 = r3.stopPropagation, o3 = r3.flickThreshold;
              if (!a2) {
                var l3 = this.props.isRTL;
                s3 && t3.stopPropagation(), this.resetSwipingDirection();
                var u2 = (n4 === ee.LEFT ? 1 : -1) * (l3 ? -1 : 1), c2 = n4 === ee.UP || n4 === ee.DOWN, h2 = i3 > o3 && !c2;
                this.handleOnSwipedTo(u2, h2);
              }
            } }, { key: "handleOnSwipedTo", value: function(e4, t3) {
              var n4 = this.state, i3 = n4.currentIndex, r3 = n4.isTransitioning, a2 = i3;
              !this.sufficientSwipe() && !t3 || r3 || (a2 += e4), (e4 === -1 && !this.canSlideLeft() || e4 === 1 && !this.canSlideRight()) && (a2 = i3), this.unthrottledSlideToIndex(a2);
            } }, { key: "handleTouchMove", value: function(e4) {
              this.state.swipingLeftRight && e4.preventDefault();
            } }, { key: "handleMouseDown", value: function() {
              this.imageGallery.current.classList.add("image-gallery-using-mouse");
            } }, { key: "handleKeyDown", value: function(e4) {
              var t3 = this.props, n4 = t3.disableKeyDown, i3 = t3.useBrowserFullscreen, r3 = this.state.isFullscreen;
              if (this.imageGallery.current.classList.remove("image-gallery-using-mouse"), !n4)
                switch (parseInt(e4.keyCode || e4.which || 0, 10)) {
                  case 37:
                    this.canSlideLeft() && !this.playPauseIntervalId && this.slideLeft(e4);
                    break;
                  case 39:
                    this.canSlideRight() && !this.playPauseIntervalId && this.slideRight(e4);
                    break;
                  case 27:
                    r3 && !i3 && this.exitFullScreen();
                }
            } }, { key: "handleImageError", value: function(e4) {
              var t3 = this.props.onErrorImageURL;
              t3 && e4.target.src.indexOf(t3) === -1 && (e4.target.src = t3);
            } }, { key: "removeResizeObserver", value: function() {
              this.resizeObserver && this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current && (this.resizeObserver.unobserve(this.imageGallerySlideWrapper.current), this.resizeObserver = null);
            } }, { key: "handleResize", value: function() {
              var e4 = this.state.currentIndex;
              this.resizeObserver && (this.imageGallery && this.imageGallery.current && this.setState({ galleryWidth: this.imageGallery.current.offsetWidth }), this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current && this.setState({ gallerySlideWrapperHeight: this.imageGallerySlideWrapper.current.offsetHeight }), this.thumbnailsWrapper && this.thumbnailsWrapper.current && (this.isThumbnailVertical() ? this.setState({ thumbnailsWrapperHeight: this.thumbnailsWrapper.current.offsetHeight }) : this.setState({ thumbnailsWrapperWidth: this.thumbnailsWrapper.current.offsetWidth })), this.setThumbsTranslate(-this.getThumbsTranslate(e4)));
            } }, { key: "initResizeObserver", value: function(e4) {
              var t3 = this;
              this.resizeObserver = new Z(L(function(e5) {
                e5 && e5.forEach(function() {
                  t3.handleResize();
                });
              }, 300)), this.resizeObserver.observe(e4.current);
            } }, { key: "toggleFullScreen", value: function() {
              this.state.isFullscreen ? this.exitFullScreen() : this.fullScreen();
            } }, { key: "togglePlay", value: function() {
              this.playPauseIntervalId ? this.pause() : this.play();
            } }, { key: "handleScreenChange", value: function() {
              var e4 = this.props, t3 = e4.onScreenChange, n4 = e4.useBrowserFullscreen, i3 = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement, r3 = this.imageGallery.current === i3;
              t3 && t3(r3), n4 && this.setState({ isFullscreen: r3 });
            } }, { key: "slideToIndex", value: function(e4, t3) {
              var n4 = this.state, i3 = n4.currentIndex, r3 = n4.isTransitioning, a2 = this.props, s3 = a2.items, o3 = a2.slideDuration, l3 = a2.onBeforeSlide;
              if (!r3) {
                t3 && this.playPauseIntervalId && (this.pause(false), this.play(false));
                var u2 = s3.length - 1, c2 = e4;
                e4 < 0 ? c2 = u2 : e4 > u2 && (c2 = 0), l3 && c2 !== i3 && l3(c2), this.setState({ previousIndex: i3, currentIndex: c2, isTransitioning: c2 !== i3, currentSlideOffset: 0, slideStyle: { transition: "all ".concat(o3, "ms ease-out") } }, this.onSliding);
              }
            } }, { key: "slideLeft", value: function(e4) {
              var t3 = this.props.isRTL;
              this.slideTo(e4, t3 ? "right" : "left");
            } }, { key: "slideRight", value: function(e4) {
              var t3 = this.props.isRTL;
              this.slideTo(e4, t3 ? "left" : "right");
            } }, { key: "slideTo", value: function(e4, t3) {
              var n4 = this, i3 = this.state, r3 = i3.currentIndex, a2 = i3.currentSlideOffset, s3 = i3.isTransitioning, o3 = this.props.items, l3 = r3 + (t3 === "left" ? -1 : 1);
              s3 || (o3.length === 2 ? this.setState({ currentSlideOffset: a2 + (t3 === "left" ? 1e-3 : -1e-3), slideStyle: { transition: "none" } }, function() {
                window.setTimeout(function() {
                  return n4.slideToIndex(l3, e4);
                }, 25);
              }) : this.slideToIndex(l3, e4));
            } }, { key: "handleThumbnailMouseOver", value: function(e4, t3) {
              this.props.slideOnThumbnailOver && this.onThumbnailMouseOver(e4, t3);
            } }, { key: "handleThumbnailKeyUp", value: function(e4, t3) {
              Le(e4) && this.onThumbnailClick(e4, t3);
            } }, { key: "handleSlideKeyUp", value: function(e4) {
              Le(e4) && (0, this.props.onClick)(e4);
            } }, { key: "isThumbnailVertical", value: function() {
              var e4 = this.props.thumbnailPosition;
              return e4 === "left" || e4 === "right";
            } }, { key: "addScreenChangeEvent", value: function() {
              var e4 = this;
              xe.forEach(function(t3) {
                document.addEventListener(t3, e4.handleScreenChange);
              });
            } }, { key: "removeScreenChangeEvent", value: function() {
              var e4 = this;
              xe.forEach(function(t3) {
                document.removeEventListener(t3, e4.handleScreenChange);
              });
            } }, { key: "fullScreen", value: function() {
              var e4 = this.props.useBrowserFullscreen, t3 = this.imageGallery.current;
              e4 ? t3.requestFullscreen ? t3.requestFullscreen() : t3.msRequestFullscreen ? t3.msRequestFullscreen() : t3.mozRequestFullScreen ? t3.mozRequestFullScreen() : t3.webkitRequestFullscreen ? t3.webkitRequestFullscreen() : this.setModalFullscreen(true) : this.setModalFullscreen(true), this.setState({ isFullscreen: true });
            } }, { key: "exitFullScreen", value: function() {
              var e4 = this.state.isFullscreen, t3 = this.props.useBrowserFullscreen;
              e4 && (t3 ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this.setModalFullscreen(false) : this.setModalFullscreen(false), this.setState({ isFullscreen: false }));
            } }, { key: "pauseOrPlay", value: function() {
              var e4 = this.props.infinite, t3 = this.state.currentIndex;
              e4 || this.canSlideRight() ? this.slideToIndex(t3 + 1) : this.pause();
            } }, { key: "play", value: function() {
              var e4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t3 = this.props, n4 = t3.onPlay, i3 = t3.slideInterval, r3 = t3.slideDuration, a2 = this.state.currentIndex;
              this.playPauseIntervalId || (this.setState({ isPlaying: true }), this.playPauseIntervalId = window.setInterval(this.pauseOrPlay, Math.max(i3, r3)), n4 && e4 && n4(a2));
            } }, { key: "pause", value: function() {
              var e4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t3 = this.props.onPause, n4 = this.state.currentIndex;
              this.playPauseIntervalId && (window.clearInterval(this.playPauseIntervalId), this.playPauseIntervalId = null, this.setState({ isPlaying: false }), t3 && e4 && t3(n4));
            } }, { key: "isImageLoaded", value: function(e4) {
              return !!this.loadedImages[e4.original] || (this.loadedImages[e4.original] = true, false);
            } }, { key: "handleImageLoaded", value: function(e4, t3) {
              var n4 = this.props.onImageLoad;
              !this.loadedImages[t3] && n4 && (this.loadedImages[t3] = true, n4(e4));
            } }, { key: "renderItem", value: function(e4) {
              var t3 = this.state.isFullscreen, n4 = this.props.onImageError || this.handleImageError;
              return a().createElement(ie, { description: e4.description, fullscreen: e4.fullscreen, handleImageLoaded: this.handleImageLoaded, isFullscreen: t3, onImageError: n4, original: e4.original, originalAlt: e4.originalAlt, originalHeight: e4.originalHeight, originalWidth: e4.originalWidth, originalTitle: e4.originalTitle, sizes: e4.sizes, srcSet: e4.srcSet });
            } }, { key: "renderThumbInner", value: function(e4) {
              var t3 = this.props.onThumbnailError || this.handleImageError;
              return a().createElement("span", { className: "image-gallery-thumbnail-inner" }, a().createElement("img", { className: "image-gallery-thumbnail-image", src: e4.thumbnail, height: e4.thumbnailHeight, width: e4.thumbnailWidth, alt: e4.thumbnailAlt, title: e4.thumbnailTitle, onError: t3 }), e4.thumbnailLabel && a().createElement("div", { className: "image-gallery-thumbnail-label" }, e4.thumbnailLabel));
            } }, { key: "render", value: function() {
              var e4 = this.state, n4 = e4.currentIndex, i3 = e4.isFullscreen, r3 = e4.modalFullscreen, s3 = e4.isPlaying, o3 = this.props, l3 = o3.additionalClass, u2 = o3.disableThumbnailSwipe, c2 = o3.indexSeparator, h2 = o3.isRTL, d2 = o3.items, f2 = o3.thumbnailPosition, p2 = o3.renderFullscreenButton, m2 = o3.renderCustomControls, v2 = o3.renderLeftNav, g2 = o3.renderRightNav, b2 = o3.showBullets, y2 = o3.showFullscreenButton, w2 = o3.showIndex, T2 = o3.showThumbnails, S2 = o3.showNav, O2 = o3.showPlayButton, E2 = o3.renderPlayPauseButton, I2 = this.getThumbnailStyle(), k2 = this.getSlideItems(), x2 = k2.slides, _2 = k2.thumbnails, L2 = k2.bullets, P2 = t2("image-gallery-slide-wrapper", f2, { "image-gallery-rtl": h2 }), M2 = a().createElement("div", { ref: this.imageGallerySlideWrapper, className: P2 }, m2 && m2(), this.canSlide() ? a().createElement(a().Fragment, null, S2 && a().createElement(a().Fragment, null, v2(this.slideLeft, !this.canSlideLeft()), g2(this.slideRight, !this.canSlideRight())), a().createElement(ge, { className: "image-gallery-swipe", delta: 0, onSwiping: this.handleSwiping, onSwiped: this.handleOnSwiped }, a().createElement("div", { className: "image-gallery-slides" }, x2))) : a().createElement("div", { className: "image-gallery-slides" }, x2), O2 && E2(this.togglePlay, s3), b2 && a().createElement("div", { className: "image-gallery-bullets" }, a().createElement("div", { className: "image-gallery-bullets-container", role: "navigation", "aria-label": "Bullet Navigation" }, L2)), y2 && p2(this.toggleFullScreen, i3), w2 && a().createElement("div", { className: "image-gallery-index" }, a().createElement("span", { className: "image-gallery-index-current" }, n4 + 1), a().createElement("span", { className: "image-gallery-index-separator" }, c2), a().createElement("span", { className: "image-gallery-index-total" }, d2.length))), R2 = t2("image-gallery", l3, { "fullscreen-modal": r3 }), D2 = t2("image-gallery-content", f2, { fullscreen: i3 }), F2 = t2("image-gallery-thumbnails-wrapper", f2, { "thumbnails-wrapper-rtl": !this.isThumbnailVertical() && h2 }, { "thumbnails-swipe-horizontal": !this.isThumbnailVertical() && !u2 }, { "thumbnails-swipe-vertical": this.isThumbnailVertical() && !u2 });
              return a().createElement("div", { ref: this.imageGallery, className: R2, "aria-live": "polite" }, a().createElement("div", { className: D2 }, (f2 === "bottom" || f2 === "right") && M2, T2 && _2.length > 0 ? a().createElement(ge, { className: F2, delta: 0, onSwiping: !u2 && this.handleThumbnailSwiping, onSwiped: !u2 && this.handleOnThumbnailSwiped }, a().createElement("div", { className: "image-gallery-thumbnails", ref: this.thumbnailsWrapper, style: this.getThumbnailBarHeight() }, a().createElement("div", { ref: this.thumbnails, className: "image-gallery-thumbnails-container", style: I2, "aria-label": "Thumbnail Navigation" }, _2))) : null, (f2 === "top" || f2 === "left") && M2));
            } }]) && Se(n3.prototype, i2), l2;
          }(a().Component);
          Pe.propTypes = { flickThreshold: te.number, items: (0, te.arrayOf)((0, te.shape)({ bulletClass: te.string, bulletOnClick: te.func, description: te.string, original: te.string, originalHeight: te.number, originalWidth: te.number, thumbnailHeight: te.number, thumbnailWidth: te.number, fullscreen: te.string, originalAlt: te.string, originalTitle: te.string, thumbnail: te.string, thumbnailAlt: te.string, thumbnailLabel: te.string, thumbnailTitle: te.string, originalClass: te.string, thumbnailClass: te.string, renderItem: te.func, renderThumbInner: te.func, imageSet: _e, srcSet: te.string, sizes: te.string })).isRequired, showNav: te.bool, autoPlay: te.bool, lazyLoad: te.bool, infinite: te.bool, showIndex: te.bool, showBullets: te.bool, showThumbnails: te.bool, showPlayButton: te.bool, showFullscreenButton: te.bool, disableThumbnailScroll: te.bool, disableKeyDown: te.bool, disableSwipe: te.bool, disableThumbnailSwipe: te.bool, useBrowserFullscreen: te.bool, onErrorImageURL: te.string, indexSeparator: te.string, thumbnailPosition: (0, te.oneOf)(["top", "bottom", "left", "right"]), startIndex: te.number, slideDuration: te.number, slideInterval: te.number, slideOnThumbnailOver: te.bool, swipeThreshold: te.number, swipingTransitionDuration: te.number, swipingThumbnailTransitionDuration: te.number, onSlide: te.func, onBeforeSlide: te.func, onScreenChange: te.func, onPause: te.func, onPlay: te.func, onClick: te.func, onImageLoad: te.func, onImageError: te.func, onTouchMove: te.func, onTouchEnd: te.func, onTouchStart: te.func, onMouseOver: te.func, onMouseLeave: te.func, onThumbnailError: te.func, onThumbnailClick: te.func, renderCustomControls: te.func, renderLeftNav: te.func, renderRightNav: te.func, renderPlayPauseButton: te.func, renderFullscreenButton: te.func, renderItem: te.func, renderThumbInner: te.func, stopPropagation: te.bool, additionalClass: te.string, useTranslate3D: te.bool, isRTL: te.bool, useWindowKeyDown: te.bool }, Pe.defaultProps = { onErrorImageURL: "", additionalClass: "", showNav: true, autoPlay: false, lazyLoad: false, infinite: true, showIndex: false, showBullets: false, showThumbnails: true, showPlayButton: true, showFullscreenButton: true, disableThumbnailScroll: false, disableKeyDown: false, disableSwipe: false, disableThumbnailSwipe: false, useTranslate3D: true, isRTL: false, useBrowserFullscreen: true, flickThreshold: 0.4, stopPropagation: false, indexSeparator: " / ", thumbnailPosition: "bottom", startIndex: 0, slideDuration: 450, swipingTransitionDuration: 0, swipingThumbnailTransitionDuration: 0, onSlide: null, onBeforeSlide: null, onScreenChange: null, onPause: null, onPlay: null, onClick: null, onImageLoad: null, onImageError: null, onTouchMove: null, onTouchEnd: null, onTouchStart: null, onMouseOver: null, onMouseLeave: null, onThumbnailError: null, onThumbnailClick: null, renderCustomControls: null, renderThumbInner: null, renderItem: null, slideInterval: 3e3, slideOnThumbnailOver: false, swipeThreshold: 30, renderLeftNav: function(e3, t3) {
            return a().createElement(ce, { onClick: e3, disabled: t3 });
          }, renderRightNav: function(e3, t3) {
            return a().createElement(de, { onClick: e3, disabled: t3 });
          }, renderPlayPauseButton: function(e3, t3) {
            return a().createElement(pe, { onClick: e3, isPlaying: t3 });
          }, renderFullscreenButton: function(e3, t3) {
            return a().createElement(le, { onClick: e3, isFullscreen: t3 });
          }, useWindowKeyDown: true };
          const Me = Pe;
        })(), r;
      })();
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_react2 = require("@remix-run/react");
var import_framer_motion = require("framer-motion");

// app/styles/global.css
var global_default = "/build/_assets/global-V2NNA5EF.css";

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;0,900;1,900&display=swap"
    }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Dis Nou Net Jy",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement("link", {
    rel: "shortcut icon",
    href: "./fav.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "Dis Nou Net Jy | Dis Net Jy | DNJ"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: "POST THY SELF"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:url",
    content: "https://disnounetjy.vercel.app/"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    content: "https://disnounetjy.vercel.app/ogImg.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "twitter:image",
    content: "https://disnounetjy.vercel.app//ogImg.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "twitter:site",
    content: "@ahwelgemoed"
  }), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null)), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/laaste-gedig.tsx
var laaste_gedig_exports = {};
__export(laaste_gedig_exports, {
  default: () => laaste_gedig_default
});
init_react();

// app/components/LastPoem.tsx
init_react();

// node_modules/marked/lib/marked.esm.js
init_react();
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text, [])
    };
    lexer2.state.inLink = false;
    return token;
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape(text)
    };
  }
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links2) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links2[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.lex(src);
  }
  static lexInline(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links2 = Object.keys(this.tokens.links);
      if (links2.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links2.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer = class {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger = class {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
function marked(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
}
marked.options = marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens2 = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens2) {
          walkTokens2.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
};
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = Parser.parse;
var lexer = Lexer.lex;

// app/helpers/lastPoem.ts
init_react();
var lastPoem = `
Haai, hoe gaan dit?

ons het lank laas gesels. 

wel... hoe s\xEA mens die

*DIS NET JY* of *DNJ* is nou *DIS NOU NET JY* 

Ons het 'n goeie tyd agter die rug, tussen 2016 en 2021 is daar 1795 gedigte geskryf deur ek, jy en hulle. 

DNJ het vir 5 jaar en 3 "seisoene" geleef.

3 websites, 3 foon apps, 3 databases.

Ons was in _Ons Klyntji Zine_, ons was beste-este vriende met [klyntji.com](https://klyntji.com/).

en, 

iewers in 2021 het ek designs vir seisoen 4 begin, maar...

ek weet nie...

Soms met die tipe goed verloor jy jou stoom, en soms kom dit terug, maar die keer het dit v\xEAr-v\xEAr weg gebly.

'n Maand of so gelede het ek die server vir [WATSE](https://watse.klyntji.com/) ge-update en was DNJ perongeluk vir 'n maand lank offline. Nie 'n haan het gekraai in daardie tydperk nie... en toe besef ek: 

en ek het besef.

DNJ het sy werk gedoen. 

Ek, jy en hulle, het ons werk gedoen.

Die learning curve was styl: oor coding, oor myself en oor jou.

Dit het my geleer hoe om native apps en servers te bou.

Dit het my geleer eks sleg met Design.

Dit het my geleer ek ken jou nie.

DNJ het my die geleentheid gegee om uit my situasie te kom. 

sonder jou

Dit het my vriende toegelaat om hulleself vir 'n oomblik lank uit hulle situasies te skryf.

maar

Met tyd het ons situasies verander, ek praat Engels, ek leer Nederlands en onthou Afrikaans,
my vriende skilder in die Oos Kaap en die tafels staan afgedek, ons nog praat soms,
maar ons is 30+ en vir een of ander rede beteken dit iets.

en so sit ek DNJ en vir jou agter my

Ek los al die data hier.

Vir wanner ons mekaar mis.

Ons laste gedig.

Ons was hier... dit was fokken lekker.

Onthou my so

`;
var images = [
  {
    original: "./demo/Seisoen1_1.gif",
    description: "Seisoen 1"
  },
  {
    original: "./demo/Seisoen2_1.png",
    description: "Seisoen 2"
  },
  {
    original: "./demo/Seisoen3_1.gif",
    description: "Seisoen 3"
  },
  {
    original: "./demo/Seisoen3_2.jpg",
    description: "Seisoen 3"
  },
  {
    original: "./demo/Seisoen3_3.jpg",
    description: "Seisoen 3"
  },
  {
    original: "./demo/Seisoen4_1.png",
    description: "Seisoen 4"
  }
];

// app/components/LastPoem.tsx
var import_react_image_gallery = __toESM(require_image_gallery());
var LastPoem = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "poem-container"
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: marked(lastPoem) }
  }), /* @__PURE__ */ React.createElement(import_react_image_gallery.default, {
    items: images,
    infinite: true,
    autoPlay: true,
    showNav: false,
    showPlayButton: false,
    showThumbnails: false,
    showFullscreenButton: false
  }));
};
var LastPoem_default = LastPoem;

// app/components/Layout.tsx
init_react();
var import_react3 = require("@remix-run/react");
var import_framer_motion2 = require("framer-motion");

// app/helpers/anamations.ts
init_react();
var ContainerAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  }
};
var ItemsAnimation = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 5 }
};

// app/components/Layout.tsx
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-container"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./dnnj.svg",
    className: "d-logo"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "button-container-header"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/laaste-gedig"
  }, "ons laste gedig")), /* @__PURE__ */ React.createElement("button", {
    className: "button"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/diedigters"
  }, "die digters")), /* @__PURE__ */ React.createElement("button", {
    className: "button"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://klyntji.com/"
  }, "klyntji"))), /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
    initial: "hidden",
    animate: "visible",
    variants: ContainerAnimation
  }, children)));
};
var Layout_default = Layout;

// app/components/LayoutItem.tsx
init_react();
var import_framer_motion3 = require("framer-motion");
var LayoutItem = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_framer_motion3.motion.div, {
    variants: ItemsAnimation
  }, children);
};
var LayoutItem_default = LayoutItem;

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/laaste-gedig.tsx
var LasteGedig = () => {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("h3", null, "Die Lasste Gedig"), /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement(LastPoem_default, null)));
};
var laaste_gedig_default = LasteGedig;

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/diedigters.tsx
var diedigters_exports = {};
__export(diedigters_exports, {
  default: () => diedigters_default,
  loader: () => loader
});
init_react();
var import_node = require("@remix-run/node");
var import_react4 = require("@remix-run/react");

// app/components/Poets.tsx
init_react();
var Poets = ({ poets }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "poets-components"
  }, poets.map((poet) => {
    const sanity = poet.replace("@", "").replace(" ", "");
    return /* @__PURE__ */ React.createElement("div", {
      key: poet,
      className: "poet"
    }, /* @__PURE__ */ React.createElement("a", {
      className: "poet-link",
      target: "_blank",
      href: `https://www.instagram.com/${sanity}/`
    }, sanity));
  })));
};
var Poets_default = Poets;

// app/models/poems.server.ts
init_react();

// app/models/publishedPoems.json
var publishedPoems_default = [
  {
    id: "5e66161b5ee429768df2ba88",
    title: "Dis al",
    bodyText: "Fok ek mis jou",
    date: "2018-12-24T23:11:13+02:00",
    handle: ""
  },
  {
    id: "5e66161b5ee429768df2ba8a",
    title: "Goed",
    bodyText: "Dis soos die windDis soos jy, Dis beter om mekaar so te verloor -Terwyl die seks nog seks is nie liefde maak nie.Voor jy my weer maak rook, en my kop verloor,Dis amper kersfees",
    date: "2019-11-13T20:44:58+02:00",
    handle: ""
  },
  {
    id: "5e6616205ee429768df2ba9c",
    title: "Winter is op ons",
    bodyText: "Winter is op ons, \nmis toe gevou in serpe en wit kop berge,\ndonker oggende,\nduisend blaai briewe\nwat n\xEArens gaan,\nkaggel rook stink ons baaitjies op\nrooi wyn gesprekke\nwat in sirkels navigeer, \ngeen resolusie, \nnet hoop. ",
    date: "2018-07-24T13:00:50+02:00",
    handle: ""
  },
  {
    id: "5e6616235ee429768df2baa6",
    title: "Laatnag Gedagtes",
    bodyText: "my o\xEA is swaar, slaap ontduik my\njy tuimel in my gedagtes rond\ndie nag se stilte hang swaar in die lug\nherinner aan die stilte tussen ons\nen\nek \nhaat \ndit...",
    date: "2018-11-08T23:05:42+02:00",
    handle: ""
  },
  {
    id: "5e6616245ee429768df2baaa",
    title: "Digter by Dertig",
    bodyText: "nog 'n nag te nugter\nek ek nog steeds geen digter\ndertig dik en depressief\nen niemand het my lief\n",
    date: "2018-08-01T13:05:53+02:00",
    handle: ""
  },
  {
    id: "5e6616245ee429768df2baa8",
    title: "Maar net nog 'n gedagte",
    bodyText: "Vanaand dink ek weer aan als, en jou - moeg gebaklei teen die idee van vergeet. Ek wonder of jy nog aan my dink...seker nie meer nie. Jy beweeg en ek staan stil, vasgevang in my eie gedagtes.",
    date: "2019-01-29T21:38:33+02:00",
    handle: ""
  },
  {
    id: "5e6616265ee429768df2bab0",
    title: "Up on ol' Brokeback",
    bodyText: '"I wish I knew how to quit you." \n- Jack (Fucking) Twist ',
    date: "2019-05-08T23:49:20+02:00",
    handle: ""
  },
  {
    id: "5e66161a5ee429768df2ba86",
    title: "Sorrie",
    bodyText: "Ek was die ou wat die middelste cubicle gebruik het",
    date: "2019-02-15T10:39:07+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e66161c5ee429768df2ba8f",
    title: "vrydaggrappie",
    bodyText: "na\xEFwe rymwoorde \nis onnodige moorde \nvanuit dieselfde ou oorde \n\nmoeg. uitgedien. holrug gery\npo\xEBsie deur niemand beny\nskiet deur oog en elke sy \n\ntradisie is dood\ngod blykbaar ook\ndie gaan op in rook \n\ngedig moet nou ent kry\nwoorde wil net vry\nmaar ek is bly\n\nhierdie\nis ook nou\nuiteindelik verby\n \n \n\n\n",
    date: "2019-06-28T21:46:41+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e66161e5ee429768df2ba94",
    title: "...",
    bodyText: "Wanneer ek alleen voel vereenselwig ek my met die lirieke van liedjies wat ek weet ek nooit self sal kan skryf nie",
    date: "2019-08-31T20:13:54+02:00",
    handle: ""
  },
  {
    id: "5e6616175ee429768df2ba7b",
    title: "in swart-en-wit ",
    bodyText: "op die paaie van\nmy palms\nskyn/skuil\ndie\nson(de) ",
    date: "2019-07-02T12:48:41+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e66161c5ee429768df2ba8d",
    title: "Marcell Duchamp",
    bodyText: "die gedig 'n ramp",
    date: "2019-04-23T12:12:17+02:00",
    handle: ""
  },
  {
    id: "5e66161d5ee429768df2ba91",
    title: "god.",
    bodyText: "\u2018n Bedoeling vir genesinghet ek verander in my selfbeseringEk het op universiteit in \u2018n swart gat myself met \u2018n guitar in die hand gevind In \u2018n hoek in die kamer, kaalvoet en bewerig besig om chords te leer vir liedjiesWat my verlate ma geluister hetIn die oggend terwyl sy regmaak vir werkSy het elke oggend 07:00 by die deur uitgestap, 17:00 haar terugkeer gemaak Tot sy eendag nooit weer het nie. Ek leer die chords opsoek na genesing,Herhaling word \u2018n tipe van selfskending Em Bm C AmEm Bm C Am...Jy wil weet hoekom ek nie vir jou kan speel nie, my lief, mag jy my nooit so seer sien nie",
    date: "2019-09-28T09:09:06+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e66161f5ee429768df2ba99",
    title: "Pharos-verligting ",
    bodyText: "Die patina-gespikkelde gesig staar terug uit die verweerde spie\xEBlDie versonke oogkaste en donker sakke verlig deur flikkerende vlamDie agtergrond is strak, donker, gesluk deur die donker nagOorhoofs skitter die melkweg, momenteel weggesteek deur die deurdringende ligtoringstraalPharos, oorspronklik Grieks vir ligtoring. ",
    date: "2020-01-08T00:25:36+02:00",
    handle: "mabethc"
  },
  {
    id: "5e66161d5ee429768df2ba92",
    title: "Huisie in die Karoo",
    bodyText: "Ons sit en geselsgesels oor ons lewenspaaiePaaie met soveel hartseerHartseer wat niks en niemand kan fixOns drink die lekkerste koffie een koppie na die ander. Lekker boeretroos.Jou o\xE8 glitter as jy praat van 'n huisie in die KarooDie Karoo waar daar niks gebeur'n plek v\xE8r van die mensdomWant mensdom breek net jou hart'n huisie met 'n hoender of twee'n koeie vir melk vir die koffieEk ruik die boere troosmet n tuisgemaakte beskuitAl wat jy sien as die wind op komDie rollende bosse Bosse wat aan hou rolRol tot in die v\xEArteDan kom die vraag by my opIs ons gejaagde lewe ook maar nie dieselde want ons kry nie tyd vir niksDie wind klap jou van links na regs nes hoe mense doen. Mensekind jyt 'n huisie in die karoo nodig om weereens jouself te vind ver van almal en alles  wat jou seer gemaak het. ",
    date: "2019-07-19T19:49:40+02:00",
    handle: ""
  },
  {
    id: "5e6616255ee429768df2baad",
    title: "Blou dam vibes",
    bodyText: "See\nSon\nSand\nSangria\nSpeedo's\nSkeerroom\nStrandstoele\nSonbrandroom\nStrandsambrele\n\nStrandvakansie skop af ",
    date: "2018-12-17T06:47:31+02:00",
    handle: ""
  },
  {
    id: "5e6616245ee429768df2baab",
    title: "Poem on a public space",
    bodyText: "Not safe for work. ",
    date: "2019-05-24T18:56:08+02:00",
    handle: "hlaphogiven"
  },
  {
    id: "5e6616285ee429768df2bab3",
    title: "Insit",
    bodyText: "Dis net koolstof baby",
    date: "2018-07-27T23:51:44+02:00",
    handle: ""
  },
  {
    id: "5e6616135ee429768df2ba75",
    title: "*Vat n sigaret*",
    bodyText: "***Persoon light n sigaret en kyk soos n cowboy in my o\xEB, maar verby my siel***Hy kyk verby my siel, maar steeds dieo in my o\xEBEk hoor hoe kletter my ma se gedagtes soos dit verby my ore vliegHulle wil weet hoekom eet ek nieEn hoekom slaap ek nieEn hoekom is ek soos ek isEk lig my skouers en vat ook n sigaret, ",
    date: "2019-10-25T00:47:26+02:00",
    handle: "eks.talita.x"
  },
  {
    id: "5e6616215ee429768df2ba9f",
    title: "sy't my wese kom binneval\xA0",
    bodyText: "en ek weet nie:hoe om haar uit te kry nie\xA0hoe om haar uit te hou nie\xA0of ek haar wil uith\xEA nieof ek haar wil uithou niejy't my wese kom aanval... en\xA0 \xA0 \xA0 \xA0 \xA0\xA0           ek\xA0dink\xA0           ek\xA0word\xA0           mal. ",
    date: "2019-08-03T20:48:26+02:00",
    handle: ""
  },
  {
    id: "5e6616225ee429768df2baa3",
    title: "Kammakastig",
    bodyText: `Die frase \u201Ckamma kam(s)tig\u201D is saamgestel uit leenwoorde vanaf die Khoi taal, wat 'voorgee' of 'soos' beteken.* 

\u2018n Moontlike goeie verduideliking kan in die volgende sin gevind word:

"My vriend Frikkie, is so goed soos \u2019n hand vol vlie\xEB."

In enige (verbeelde) geval waar daar letterlik \u2019n hand vol vlie\xEB besit word, is dit totaal en al nutteloos en gewoonlik baie onhigi\xEBnies. In hierdie figuurlike geval, verwys dit na die opinie dat Frikkie onbetroubaar (en moontlik ook onhigi\xEBnies) is. In beide gevalle word daar net voorgegee.

______
*Henning Andersen (red.), Historical Linguistics 1993, John Benjamins Publishing, Amsterdam, 1995, bl. 95.
`,
    date: "2018-12-05T08:07:58+02:00",
    handle: ""
  },
  {
    id: "5e6616155ee429768df2ba78",
    title: "Felt cute, discarded it later. ",
    bodyText: "Should've put a ring on it. T'was cute. ",
    date: "2019-09-25T00:06:00+02:00",
    handle: ""
  },
  {
    id: "5e6616245ee429768df2baa9",
    title: "2.0",
    bodyText: "Die skrif is aan die muur:\nwondergom. ",
    date: "2019-05-15T11:58:59+02:00",
    handle: "ek.is.anouk"
  },
  {
    id: "5e66161a5ee429768df2ba84",
    title: "Dis genoeg.",
    bodyText: "Verligting.",
    date: "2020-01-10T12:24:42+02:00",
    handle: ""
  },
  {
    id: "5e66161f5ee429768df2ba97",
    title: "1",
    bodyText: "Lentedag... ",
    date: "2019-09-01T13:35:44+02:00",
    handle: ""
  },
  {
    id: "5e6616205ee429768df2ba9b",
    title: "\u{1F343}\u{1F343}",
    bodyText: "what can cause a resolute rose to crumble like potpourri?\n\nperhaps it is the scars that smell faintly of trickling blood (this scent was once a prominent reality, but now it is reserved for the hollow caverns of memory, along with the blades and words that pierced the na\xEFve flesh)\n\nwhat can cause a resolute rose to crumble like potpourri?\n\nperhaps it is the nauseating fragrance of being so easily forgotten (being pushed into a round corner and then emerging in too many shapes when remembered again, often only fleetingly)\n\nwhat can cause a resolute rose to crumble like potpourri?\n\nperhaps it is the vulgar stench of loving in silence (it pierces through the senses until every breath of oxygen is polluted with yearning for a love that is obscenely oblivious to it\u2019s existence)\n\nwhat can cause a resolute rose to crumble like potpourri?\n\nperhaps it is the perfumed expectancy that you are more thorn than rose (it smells sweet and bold to be pierce through life unscathed but it\u2019s not the world you\u2019ve been stabbing at, it\u2019s your own existence, and now you\u2019re all bled out)\n\nand you\u2019ve crumbled like potpourri. you\u2019re a subtle fragrance, still appreciated.\n\nbut you\u2019re dead.",
    date: "2019-01-07T20:16:03+02:00",
    handle: ""
  },
  {
    id: "5e66161e5ee429768df2ba96",
    title: "Life",
    bodyText: "Gister se drome\nVandag se nagmerries",
    date: "2019-04-17T20:20:54+02:00",
    handle: ""
  },
  {
    id: "5e6616155ee429768df2ba76",
    title: "Vrouwees in SA",
    bodyText: "Die nuusopskrifte volg my,Ek moet oor my skouer loerWat skuil om elke hoek en draai?Tragedie, die dood, nog 'n meisie ontvoerS\xEA my dan hoe moet ek leef,en ook al hierdie dinge vermy?Dis moeilik om 'n vrou te wees...In SA\n\n-ajvt\n",
    date: "2019-09-02T20:47:36+02:00",
    handle: ""
  },
  {
    id: "5e66161f5ee429768df2ba98",
    title: "Maak nie",
    bodyText: "Maak nie saak wat,\nDi\xE9 lewe bly kak",
    date: "2018-08-03T18:57:33+02:00",
    handle: ""
  },
  {
    id: "5e6616175ee429768df2ba7c",
    title: "A",
    bodyText: "The things I care about lose value when you leave",
    date: "2019-03-04T21:01:53+02:00",
    handle: ""
  },
  {
    id: "5e6616195ee429768df2ba83",
    title: "Ou boom",
    bodyText: "Ek sit in die aller mooiste tuinEk kyk op en sien 'n ou man wat by sy venster uit kykWaarna kyk hy Is dit omdat dit somer is en die blare is groen en die mooiste blomme blom of is dit dat hy kyk hoe daar in boom is in die mooiste tuin wat dood gegaan het en geen blare mee draIs dit nie so ironies is dis hoe die mensdom ook geskaape is. Jys jonk dan word jy voor jy jouself kon kry oud en oor die muur.Een geluk is daar vir elke ou boom wat afgekap word, word daar 'n nuwe boom geplant om weer groen blare te dra",
    date: "2019-10-13T19:23:52+02:00",
    handle: ""
  },
  {
    id: "5e6616215ee429768df2baa0",
    title: "Stille nag",
    bodyText: "Ek sit en wag vir nog n rit\nMy gedagtes bly maal\nWat is goed in die lewe.\nSien jong mense party\nHappy en sonder worries\nKan mens nie van voor begin\n\n'n begin van n nuwe op n ander plek. \nPlek van no worries\nPlek van rustigheid\n'n plek v\xE8r van hier\nWaar niemand jou ken\nKen waardeur jy al is.\n\nOp die ou end niemand verstaan jou hart begeertes\nBegeertes wat jy nie hier gaan kry\nSolank jy hier is vir almal behalwe vir jouself\n\n\n\n",
    date: "2019-07-05T23:58:43+02:00",
    handle: ""
  },
  {
    id: "5e6616255ee429768df2baae",
    title: "Twee getroude hippies en ek op 'n Donderdagaand ",
    bodyText: "Vinnig op\nVinnig af\nViagra in\nVagina... \n\n...sal laaste lag ",
    date: "2019-05-27T04:36:05+02:00",
    handle: ""
  },
  {
    id: "5e6616275ee429768df2bab1",
    title: "Eerste Vierkant",
    bodyText: `Vergeelde huisverkoop-koerantjies -gemorspos- en verrimpelde vensterkoeverte en bruin akkerblare het op die stoep rondgedwarrel toe ek vanmiddag, net na vyf voor die saal se hout-en-glas deure in die eerste vierkant stilhou. Die le\xEB oorstap-gang wat die klasse verbind aan die oorkant van die vierkant was al heeltemal vol koelte. Die swaar gangdeure, dig van stories binnehou. Die gevlekte koper hakies swaai in dieselfde pligsgetroue halfmaan spoor. Ek't roerloos tussen die oop motordeur en die trappies van die saal se geel teelstoep gestaan en later begin koors toe die hitte van die laaste strale plekmaak vir skaduwee. Die snoepietannie se fucked up rooi Mercedes het teen die laning bome net buitekant die vierkant verbygekom en nog swietpapiere en stofdeeltjies is die goue lig in. Die teerblad onder my voete het al begin oudword en ek wonder of die meisies ooit dink aan voorsorg wanneer hulle die stukkende oppervlak sien. \xC1s hulle nie al te vol van sien is nie.  

Jy het langs my kom staan. Ek kon jou asem ruik. Cinnamon Ice of so iets. Jy was weer sag en vroulik. Rimpelloos. En "verlig". \xD3ns was mos. Die ander was sonder ervaring maar vol bangte. Dom en ruggraatloos. Geen dwarsheid te vind. Tot onlangs. Voor jou finale groet. 

...turns out... ons is die groot kinders. `,
    date: "2019-08-29T23:34:06+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616165ee429768df2ba79",
    title: "Ps",
    bodyText: "Ek verloor",
    date: "2018-11-17T21:48:13+02:00",
    handle: ""
  },
  {
    id: "5e6616155ee429768df2ba77",
    title: "Die aakligste aand van my lewe",
    bodyText: "Toe dit gebeur het, het ek dit afegelag en nou is die nagmerries nie meer snaaks nie en die realiteit is dat ek net nog n syfer is op Suid-Afrika se misdaad lys. ",
    date: "2019-03-04T17:03:19+02:00",
    handle: ""
  },
  {
    id: "5e6616225ee429768df2baa2",
    title: "Time Machine",
    bodyText: "Tyd staan stil\nEk wag vir iemand (jy) om my te kom haal",
    date: "2019-05-04T20:09:40+02:00",
    handle: ""
  },
  {
    id: "5e6616185ee429768df2ba7f",
    title: "en nou?",
    bodyText: "Toe dit gevra was wou ek nie, nou dat dit stil is kom dit van self.",
    date: "2018-07-20T19:38:53+02:00",
    handle: ""
  },
  {
    id: "5e66161c5ee429768df2ba8b",
    title: "Wel... ",
    bodyText: "... is meeste dinge nie maar nie? ",
    date: "2019-05-25T18:42:35+02:00",
    handle: ""
  },
  {
    id: "5e66161d5ee429768df2ba90",
    title: "Speel Met My",
    bodyText: "Jy't my gespeel soos 'n marionet. Toe jy klaar was en genoeg gehad het, het jy my toue geknip, want jy wou my nie langer aan 'n lyntjie hou nie. Nou tel ek maar self my stukkies op en hoop iemand hou van gebreekte, tweede handse speelgoed...",
    date: "2018-12-09T00:48:02+02:00",
    handle: ""
  },
  {
    id: "5e6616235ee429768df2baa4",
    title: "Masker",
    bodyText: "Ek het gedink dit gaan baie verkeerd Voel die gelollery met die anderKant van die regte soorteAan die verkeerde kantMaar in alle eerlikheid Is ek banger vir die Legal implikasiesAs vir die opBreek van PrentjieMooiJul",
    date: "2019-09-02T18:35:16+02:00",
    handle: ""
  },
  {
    id: "5e6616185ee429768df2ba80",
    title: "Guinness sit op my siel",
    bodyText: "Dis ons\nDi\xE9 is ons\nVerlep in ons jeug\nAsemrowend allerdaags\nEn so, en so eksperimenteel spiritueel\n\nOns wen ons verloor\n'n wettenskap van Bo\n'n wettenskap van Onder\n'n wettenskap wat ons goed op d\xF4ner\n\nJy s\xEA dis esteties\nEk s\xEA dis vrees\nStilweg is ons elkeen baie frustreerd\n\nDie lyne is te dun om te onderskei\nDis grys vir ons\nEn dis grys vir my\n\nIn Hank's \nMis ons mekaar\nEk wens ek kon wen\nSonder om te verloor\nMaar hierdie keer was ons albei \nGoor \n\ndis al \n",
    date: "2018-11-17T21:57:06+02:00",
    handle: "Bo Kamer "
  },
  {
    id: "5e6616195ee429768df2ba81",
    title: "Kom maar binne",
    bodyText: "Daar\u2019s wolke \nop my drumpel;\nin my deurkosyn.\nSomber simbiose.\nKom in,\nliewe liefste\nDonker. \n",
    date: "2018-08-14T12:02:08+02:00",
    handle: ""
  },
  {
    id: "5e66161c5ee429768df2ba8e",
    title: "Kry jou in Clarens  ",
    bodyText: "Jy was naak en ek was jonk. Sterre in die nag en ook in my o\xEB. \n\nIn \u2018n byekorf het ek jou heuning geproe. \nDaar bly by tot die son die blare deurdrenk. \n\nJy\u2019t parmantig jou bene om my gevou. \nKruisbeen my verstrengel. \n\nDit was net ons\nen die bye. \n\nKry jou daar. \nKry jou in Clarens. ",
    date: "2019-07-28T08:58:26+02:00",
    handle: ""
  },
  {
    id: "5e6616225ee429768df2baa1",
    title: "daar is poes baie polos in die see (of iets in der voege)",
    bodyText: "elke keer as ek \u2018n vuil, silwer polo met \u2018n CL nommerplaat en \u2018n duik aan sy agterkant sien, dink ek nogsteeds aan jou elke keer as ek \u2018n vuil, silwer polo met \u2018n CL nommerplaat en \u2018n duik sien, dink ek nogsteeds aan jou elke keer as ek \u2018n vuil, silwer polo met \u2018n CL nommerplaat sien, dink ek nogsteeds aan jou elke keer as ek \u2018n vuil, silwer polo sien, dink ek nogsteeds aan jou elke keer as ek \u2018n silwer polo sien, dink ek nogsteeds aan jou elke keer as ek \u2018n polo sien, dink ek nogsteeds aan jouelke keer as ek sien, dink ek nogsteeds aan jouelke keer as ek dink, sien ek jougod",
    date: "2019-10-25T00:49:50+02:00",
    handle: ""
  },
  {
    id: "5e6616235ee429768df2baa7",
    title: "Jou Facebook lewe",
    bodyText: "Ek ken jou nie meerWeet nie meerVan jou likes en sharesWant ek volg jou nie meerDie algorithms vir my werk nie meerIewers het ons mekaar verloorIewers het ons paaie geskeiEn dis okayEk mis jou nie meerMy algorithm is volVan musiek en SpaansVan travel en nog meerVan interessante dingeEn by ander mense leerVan raadvra en raadgeeVan like en share Van dinge wat saak maakAl maak dit net sin en saak vir myJou algorithm kruis myne nie meer En dis als okay....",
    date: "2019-08-02T22:48:25+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616255ee429768df2baac",
    title: "Airpods",
    bodyText: "Maklik om ander se flaws uit te wys.\nDie teenstrydighede van 'n \ngeskiedenis te vergeet. \n\n\n\n",
    date: "2019-05-09T22:46:05+02:00",
    handle: '"Cool_cat"  '
  },
  {
    id: "5e6616275ee429768df2bab2",
    title: "24hr.",
    bodyText: "Laaskeer was dit 7 dae. Ek kan blykbaar nie troeteldiere h\xEA nie. ",
    date: "2019-09-30T06:46:13+02:00",
    handle: ""
  },
  {
    id: "5e66161a5ee429768df2ba85",
    title: "identiteit",
    bodyText: "jy lewe synewant dis maklikeras om te erkendat jy wegkruip van joune",
    date: "2020-01-09T09:02:58+02:00",
    handle: ""
  },
  {
    id: "5e66161b5ee429768df2ba89",
    title: "Krismis2020",
    bodyText: "Fok die preutse kak \nVir 20 jaar al is dit 'n somber dag in ons \nGesin se kalender.\nKersfees 2020 maak ek 'n Kersboom staan \nIn my Kaapse flat met liggies\nEn bunting en balletjies en tinsel wat\nJy vanuit die Paarl sal sien skitter. \n\nEks oor dit. Bring die heidene; kom boyfriend, Ons hou 'n familielose krismis wat Michael Bubl\xE9 jaloers sal h\xEA. \n\nGot. \n",
    date: "2019-12-25T09:09:28+02:00",
    handle: ""
  },
  {
    id: "5e66161c5ee429768df2ba8c",
    title: "Skaap/e",
    bodyText: "Gemaak - Klein en effe anders -Wou net n plekkie maak waar julle my kon sien vir n wyle. Mekaar kon sien. Waar jy kan spog met jou karton doos van niks.Gepraat van doos - Dan kom daar ander in wat ook anders is - maar nie soos jou effe nie - effe teveel -Jy staan bak en wag...Hulle spring op jou skouers en pis in jou o\xEB -Skree hulle op jou  \u201C Jyt die vir my gemaak - So fok jou. Ek kraak en breek enige iets wat beweeg\u201D  \nIs agter uit nie ook n beweeg nie?",
    date: "2020-02-04T20:30:31+02:00",
    handle: ""
  },
  {
    id: "5e6616235ee429768df2baa5",
    title: "Ek gaan jou mis",
    bodyText: "Hello KaapstadDankie vir die laaste drie jaarDankie vir jou lesseDankie vir jou menseDankie dat ek met geluk by jou kon instap en met ware geluk by jou kan uitstapDankie Dankie",
    date: "2019-10-11T19:58:03+02:00",
    handle: ""
  },
  {
    id: "5e6616125ee429768df2ba74",
    title: "blou-fokken-merkies",
    bodyText: `"Scary stuff, 
maar hier's dit nou..." 

Ek het vir jou
\u02BCn gedig geskryf;
jy het ge-fokken-vr\xE1.

[blue
ticked]

Wtf. `,
    date: "2019-05-30T20:45:04+02:00",
    handle: ""
  },
  {
    id: "5e6616175ee429768df2ba7a",
    title: "Terloops",
    bodyText: "Het jy my vergeet?\n",
    date: "2018-12-03T22:49:15+02:00",
    handle: ""
  },
  {
    id: "5e6616185ee429768df2ba7e",
    title: "Goed",
    bodyText: "vandag het ek kwaad geraak,\nmy humeur verloor,\nen dreigemente gemaak,\nAlmal is nou kwaad,\nEk wen,\nWooo ",
    date: "2018-08-09T13:19:34+02:00",
    handle: ""
  },
  {
    id: "5e6616195ee429768df2ba82",
    title: "thoughtpoem",
    bodyText: "ek vergelyk jou \nhande \nmet dieselfde \nhande \nwat die bougainvillea\n\nso \xF2rals!\nnet \n\ngesaai het.",
    date: "2019-02-27T15:14:21+02:00",
    handle: "Vroudrie"
  },
  {
    id: "5e66161a5ee429768df2ba87",
    title: "I gave you my all",
    bodyText: "You asked me to give you the curves of my body\nSo I handed it over to you\nThat didn't mean I'll give you the map\n\nYou asked me for the key to my heart\nSo I gave it to you\nThat doesn't mean I'll show you where I keep the chest\n\nYou asked me the song of my soul\nSo I played it for you\nThat doesn't mean I'll teach you the steps\n\nBut I did give you my all\nBody heart and soul *",
    date: "2019-06-02T18:03:40+02:00",
    handle: ""
  },
  {
    id: "5e66161e5ee429768df2ba95",
    title: "Elke dag en nag",
    bodyText: "Jou moeder het op 3 maande jou amper verloorEkt elke dag oggend gebid dat jy moes lewe vir nog 'n dag.Ekt elke nag gebid dat jy moes leweElke oggend gedink en bid Dankie vir nog 'n nagVir 6 maandeHet ek gebidElke oomblikDag en nagJou naam beteken hopeHope dat jy nog 'n dag oorleefoor leef vir my en jou mama.Tot jy gebore wasEk was gebless met jouEkt jou lief geraak die oomblik wat ek jou vas gehou het en jy op gehou huil het. Watter voorreg het ek nie gehad het om jou vas te hou en die son oor  ons twee geskyn het want jy was myne. Vir nou en veraltydLove dat ek nooit sal vergeet.Jys my prag kindWat ek veraltyd sal lief he",
    date: "2019-12-26T13:41:03+02:00",
    handle: ""
  },
  {
    id: "5e6616265ee429768df2baaf",
    title: "Suspect 2",
    bodyText: "Krul opEk sal l\xEA oor jouSoos oor \u2018n handgranaat",
    date: "2019-08-04T21:34:00+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66161f5ee429768df2ba9a",
    title: "Dreineer My",
    bodyText: "Ek l\xEA kaal in die re\xEBn en wag dat my gevoelens wegspoel",
    date: "2019-05-20T20:54:55+02:00",
    handle: ""
  },
  {
    id: "5e6616205ee429768df2ba9d",
    title: "Nog nie,",
    bodyText: "Die apatie bl\xFD oorweldigend. ",
    date: "2020-01-10T16:37:21+02:00",
    handle: ""
  },
  {
    id: "5e6616175ee429768df2ba7d",
    title: "Seemymering",
    bodyText: "Twee vuurvliegies op die duineEn dit was net myneWant daar was niemand om die oomblik te deelDie golwe wat breekEk wat huiwerig vassteekVoordat ek die donker see in wandelEk wonder hoe het Jonker gevoelToe die water haar oorspoel\nEn die stilte haar verewig omring\nEk wonder so alleen\nWat het vuurvliegies in gemeenMet ons wat stoksielalleen wandel",
    date: "2019-12-13T21:39:26+02:00",
    handle: "mabethc"
  },
  {
    id: "5e66161d5ee429768df2ba93",
    title: "spreek Hermes, die dienaar (kan nie anders as om te) luister",
    bodyText: "internet uiteindelik sorted. en wat werk? \n\nalles behalwe facebook en whatsapp en instagram. ",
    date: "2019-07-03T22:48:31+02:00",
    handle: ""
  },
  {
    id: "5e6616215ee429768df2ba9e",
    title: "Gepla",
    bodyText: "Ek drink \u2018n vroegkoud koffie terwyl die maan spierwit sit en loer - skielik weer bewus dat sy nog die heeltyd sit en luister. \nSy sien hoe ek die bewe in my keel kalmeer, sy luister terwyl ek die lelik in my fluister.\nEn sy sluk-sluk my geraamtes swaar, en met elke sluk, \u2018n bietjie meer lig. \nTodat sy koelrond pronk vol van my.\nEn dan wonder ek: Is dit dan waarom ek gepla is met die maan - want alles wat eens gehang het aan my, dit \xE1lles, dit alles hang nou aan haar.",
    date: "2018-08-02T22:39:12+02:00",
    handle: "chrisansaschhh"
  },
  {
    id: "5e6616305ee429768df2bacc",
    title: "16:8",
    bodyText: "I want to get in touch with my circadian rhythm",
    date: "2019-05-09T20:28:16+02:00",
    handle: ""
  },
  {
    id: "5e6616415ee429768df2bafa",
    title: "Roadtrip",
    bodyText: "969 kilometers het gevoel soos 'n vinnige flikkerlig aansitMaar dit was toe jy langs my wasToe jy kon saamsing met Twenty One PilotsEn my uitskel omdat ek die oomblik op 'n skerm wou vasvangToe jou smile al ding was wat my groeiende angs oor my nuwe huis kon vertraagToe oorslaap halfpad soontoe isolasie beteken hetToe daar nie net 'n ek en jy was nieMaar 'n onsNou moet ek probeer onthou watse draaie het ons gery, waar het ons gestop en watter klanke gaan die vlieeniers vervang969 kilometer van dink",
    date: "2019-12-28T21:48:49+02:00",
    handle: ""
  },
  {
    id: "5e6616455ee429768df2bb09",
    title: "June\u2018s Dairy ",
    bodyText: "Ek het\xA0vinm\xF4re\xA0vroeg\xA0opgestaan\xA0en begin\xA0pak,\xA0\xA0Ek\xA0kon nie\xA0meer\xA0slaap\xA0nie, ek\xA0wou\xA0vlug, Ek is\xA0moeg\xA0gewag\xA0vir\xA0iets.\xA0\xA0Ek\xA0wil\xA0sien\xA0wat\xA0daar\xA0buite is,\xA0bo\xA0oor\xA0die\xA0berge\xA0en sink\xA0plaat\xA0paaie,\xA0\xA0Iets\xA0gaan\xA0sien\xA0wat\xA0nie\xA0tussen\xA0die huis en\xA0werk\xA0l\xEA\xA0nie.\xA0\xA0Ek\u2019t\xA0my\xA0motorfiets\xA0gepak, in die\xA0saal\xA0gesak, en my\xA0lewens\xA0plan\xA0verslap.\xA0\u201CDie\xA0tonnel\xA0sal as filter\xA0dien\u201D dink ek, \u201Cek\xA0sal\xA0al die\xA0dronk,\xA0die\xA0skree, die vroumense,\xA0die\xA0siek hierdie\xA0kant\xA0los, en\xA0ons\xA0land in\xA0suifer.\u201D\xA0\nNou\xA0is\xA0daar\xA0net kilometers\xA0tussen\xA0my en my\xA0toekomstige-vergete-verlede.\xA0\n\n\n_dae later_\xA0\nEk't\xA0gery,\xA0elke\xA0afdraai\xA0getoets:\xA0\xA0my gat\xA0gesien\xA0in die Tankwa,\xA0in die\xA0Hantam\xA0nog \u2018n\xA0gedig\xA0geskryf, water\xA0gedrink\xA0in\xA0Sutherland, in Beaufort-Wes\xA0na\xA0Gert Vlok Nel\xA0geluister\xA0en\xA0naby\xA0aan\xA0iets\xA0gevoel, in De Rust\xA0mal in \u2018n bar\xA0gedans, op die\xA0Swart\xA0Berg pas\xA0ge-pipi, in\xA0Oudshoorn\xA0skoene\xA0gekoop, op pad\xA0Barrydale\xA0toe,\xA0iewers het\xA0hin\xA0krans\xA0hin\xA0antwoord gegee,\xA0 en\xA0ek't\xA0heeltemal\xA0vergeet\xA0om\xA0te\xA0luister.\xA0_dae later_\xA0Ek raak\xA0verlief\xA0op\xA0grond\xA0paaie \u2013\xA0Teer\xA0is\xA0te\xA0permanent\xA0\xA0\nTeer per\xA0trok\xA0aan gery.\xA0\nDie grond\xA0is dan van\xA0hier...\xA0\n\n_dae later_\xA0Ek\xA0begin\xA0moeg\xA0raak\xA0vir\xA0met\xA0my self\xA0praat\xA0,\xA0vir\xA0aan\xA0myself\xA0raak, en\xA0vir wind op my ore.\xA0\xA0Ek\xA0wil\xA0nou\xA0huis toe nou\xA0Ek\xA0wil\xA0terug\xA0na\xA0my\xA0braak\xA0saal\xA0keer\xA0En dit begin was...\xA0\xA0Skoon-Skoon\xA0was, tot\xA0alles\xA0wat Ek\xA0weer aan pak, My weer aan pak.\xA0",
    date: "2019-08-13T20:47:58+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616485ee429768df2bb13",
    title: "Help my, hierdie gedig wil nie",
    bodyText: "Jy dink dat jy te veel vir my beteken.Miskien is jy reg, dat jy te veel vir my beteken. Miskien dink jy dis die waarheid, al s\xEA ek dat ek nie eintlik aan jou dink nie, terwyl ek ure lank jou nie kan vergeet nie.Jy weet dat jy te veel vir my beteken.",
    date: "2019-10-16T22:16:21+02:00",
    handle: ""
  },
  {
    id: "5e66164c5ee429768df2bb1e",
    title: "First impressions count, right?",
    bodyText: "Ek weet nie hoekom nie,\nmaar ek probeer nogsteeds...",
    date: "2019-04-05T06:12:34+02:00",
    handle: ""
  },
  {
    id: "5e6616585ee429768df2bb42",
    title: "Vir Frikkie- van Mariet ",
    bodyText: "poes jou sigarette in die see \nskeer al jou hare af \ngroei jou baard uit \nen word die man wie jy nog altyd was \n\nmaak jou Naam jou eie \nen dra hom met trots \nkerf jou wese op hom uit \nsoos tyd oor rots \n\nstaan alleen \nstaan saam \nen staan jou skoene vol \nstap met hulle jou w\xEAreld deur \nen lei die wat jou gaan volg \n\njou hart is n leeu \njou hart is n duif \njou hart is n skulp \nwaarin vasgevang die see se geruis \n\ndie w\xEAreld is jou woning \nd\xEDe, sal jy verstaan \nwanneer jy ophou trek na binne \nen dit tyd is om \nte gaan ",
    date: "2019-05-27T18:52:29+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e6616595ee429768df2bb47",
    title: "Oor leef",
    bodyText: "OOR\nSKIET\nKOS.\nOOR\nLEEF!",
    date: "2018-08-12T07:57:29+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e66165d5ee429768df2bb54",
    title: "Transkei vibes, bruh? ",
    bodyText: "Die rollende grasheuwels, ongerepte spiere van die see en wilde blaarpatrone is baie, b\xE1ie trippy. Selfs die growwe klipmure in die rondawel en die beauty van die klein teal-en-swart huisies teen 'n backdrop uit Vietnam.Maar ek is nou moeg vir leererige hippies, koue showers en loer vir spinnekoppe elke keer voor jy kooi toe. My koninkryk vir 'n wit duvet en CTM badkamer. ",
    date: "2019-12-19T22:39:58+02:00",
    handle: ""
  },
  {
    id: "5e66166d5ee429768df2bb89",
    title: "Wyk",
    bodyText: "Elke keer, druk besig met 'n imminent deadline, dan strike sy\nOp die N1, tussen ratte, met een hand op die stuur, oorval sy\nOppad na 'n uitkak vergadering \nlaat sy my styg\nNet toe die water begin borrel en die pot te klein raak, spoel sy deur my \nElke keer wat die kort hand te vinnig osseleer, \nis sy daar. \n\nEn net so, in derde, klaar gecrunch, gekook, vergader en met die wekker af,\nis sy weg. \n\nSy heet inspirasie\nen ongele\xEB plekke\nis haar kryptonite.",
    date: "2020-02-05T20:30:06+02:00",
    handle: "Verbatim "
  },
  {
    id: "5e6616755ee429768df2bb98",
    title: "Rym",
    bodyText: "Jy moet ongelukkig voel wat jy voel \nIn n aabb rymskema \n\nAnders jy ook maar fokk\xF4l. ",
    date: "2019-05-09T20:10:16+02:00",
    handle: ""
  },
  {
    id: "5e6616765ee429768df2bb9a",
    title: "Mr Instagram",
    bodyText: "Jou kleurvolle woorde raak aan my gemoedDit helder die dag op in reenboogkleureJy is nuut op InstagramHeel verdwaaldJou pad deurkruis myne en word eenVan kleure en lag gesiggiesn Dag vol lees en voelVan seerkry harte en te deelVan n nuwe dag aanpakMet vleiende woorde is jyn Aansporing vir die dag wat voorleEk glimlag en skryfn hart wat ligter word by die minuutDie pad deur jou Instagram hartMr Instagram jy is goed vir my",
    date: "2019-07-12T11:00:18+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66167e5ee429768df2bbb2",
    title: "Besmeer",
    bodyText: "Sagte hart. \nSag, hard. Sag, hart. \nEk wil jou sagte hart penetreer. \n'n Vuur aansteek. \nDiep in jou. \nDiep in jou donker swart. ",
    date: "2019-09-16T18:52:50+02:00",
    handle: ""
  },
  {
    id: "5e6616805ee429768df2bbb8",
    title: "1989",
    bodyText: `Hierdie is 'n sagte, googly eyed skrywe,(Void of) po\xEBties(e) ("bepalings" klink na die regte woord) vir 'n sagte, harde man wat kom nesskrop het. Sout en peper was lanklaas so sexy. 'n Opdrag of 'n uitroep was min kere nog so verleidelik. 'n Stelling oor iets altemit, weinig so mooi. Ek sit in 'n natmassaho\xEBrskoolmeisiegevoelsgemors, maar wil dit vir niemand anders voel nie. Ek wil vir jou koffie maak of Coke Zero aandra en jou slippers + japon by die deur vir jou gee. (Gods. K\xE1n mens s\xF3 raak??) Die Here weet, die Gedeelde Droom gaan weer gem\xE9lk word as ons mekaar oopvlek. Maar intussen, my Bruh, ek laaik jou diep stukkend. 
`,
    date: "2019-11-23T00:37:49+02:00",
    handle: ""
  },
  {
    id: "5e6616905ee429768df2bbe7",
    title: "namiddag",
    bodyText: "daar is m\xF4re 'n vergaderingoor konflikhantering. woensdag moet ek my sperdatumvang. donderdag het ek 'n werkswinkel. \n\ndaar is m\xF4re 'n vergadering\noor 'n sperdatum. \nwoensdag moet ek my werkswinkel\nvang. \ndonderdag het ek konflikhantering. \n\ndaar is m\xF4re 'n konflikhantering. \n'n werkswinkel vang my vergadering\nwoensdag\ndonderdag het ek 'n sperdatum. ",
    date: "2020-02-10T15:35:01+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616935ee429768df2bbf1",
    title: "Ontsnap Roete",
    bodyText: "Ontsnap Roete\n-\nSy is vol pienk Sterrie Stumpie,\nGummy Bear, Meltertjie,\nonplaasbare rooi drankie,\nTassies en kerswas,\nAnna en trane.\nIn die kar, by die Boer, langs die rivier,\nonder die Akker bome; die voogde\nvan die dorp se geheime.\nSy is vol.\n-\nSy ruik die boerewors rolle buite,\ndie goedkoop slaptjips, \ndie Bluemix en die bakleiery.\nSy ruik vuil strate en Jan se bloed\nop die sypaadjie omdat hy weer\nTshepo se kant gevat het vanand.\nSy ruik.\n-\nSy hoor badkamer praaitjies\nen \u2018n badkamer doop\nsoos wat die onplaasbare rooi drankie\nse towerkuns begin verwaag\nen met vurige spoed sy \nonstnap roete vind.\n-\nSy hoor hartelike drome wat \nrond-float en by die deur vas sit.\nSy hoor herre is vir sterre\nen klasgee in Sjina\nen babas\nen trou \nen boer.\nSy hoor. \nSy luister.\n-\nSy sien haar Pa se boesemvriend\nmet sy trou ring aan\nmaar die vrou aan wie hy klou\ndra nie dieselfde van nie. -\nSy sien vreemde gesigte\nin flitsende ligte -\nwat almal op dieselfde tyd dans en droom.\nSy sien hande wat smelt op\nonbekende lywe, sonder toestemming\nen sonder passie,\nblatant onder die invloed van\ndie aand se lus.\n-\nSy kyk op na die Koo cans \nSuid-Afrikaanse vlag en wonder\nof sy hier op die vuil en vaal\nbank wil bly.\nTeen die einde van die Heuwels\nse nuwe liedjie maak sy \u2018n besluit.\n-\nSy maak haar hare los,\nhaar veters vas,\ndie voordeur wawyd oop\nen begin om saam met\ndie drome weg te draf.",
    date: "2018-08-02T18:03:53+02:00",
    handle: "liesekuhn"
  },
  {
    id: "5e66162e5ee429768df2bac6",
    title: "Keuses",
    bodyText: "Hoe de fok trou jy net iemand wat nie Fleetwood Mac ken nie? \n",
    date: "2019-06-24T12:52:17+02:00",
    handle: ""
  },
  {
    id: "5e6616335ee429768df2bad4",
    title: "brief",
    bodyText: "Ek wou maar net h\xEA jy moet weetek is lief vir jou.Nie I-want-to-fuck-you ofI-miss-your-skinsoort lief nie,maar eerderdie soortwaar ek sou huilas jy doodgaan of(soos jy nou) jou dae verspeel.Juis d\xE1\xE1romdat ek liewernie laatjy jouin egte Salomostylin die helfteruk           (soos jy wou) nie.L\xEA eerder op die skootwat vir jou kan sorg. ",
    date: "2019-08-11T16:13:24+02:00",
    handle: ""
  },
  {
    id: "5e6616475ee429768df2bb0e",
    title: "Ek\u2019t om gegee ",
    bodyText: "Hoop alles gaan oraait daar by jou\nx",
    date: "2018-12-20T07:09:05+02:00",
    handle: ""
  },
  {
    id: "5e66164a5ee429768df2bb18",
    title: "25",
    bodyText: "Olieverf woorde soos lush op printed media en solo uitstalling eintlik group exhibition. Groete van lank gelede en julle interaksie is soveel anders n\xEArens jaloers bietjie. En die foto-kunstenaars. En rook en Vape. Pa en seun. Wyn. Koue ys wat smelt in my sweterige hand. Geen water en reject guns teen pienk mure. Verkoop sulke kak? \n\nPeonies. Binnekring. Kruis die straat en in hier. Donker houttrappe. Worn off en ek's seker storieryk. Renonkels en lush weer bo. Kerslig. Organies arranged en amazing gingerbeer mix. Mix niemand. Gin. Pappa. Maar jy. Ek haat bokmelkkaas. \n\nVrystaat en salig weg. Nader. Oopte bring ontspanning. Intiem gekoek. Re\xEBnweer en druppels piering. Gesels op en gemak maar, r\xFD. \n\nBits. Al wat oorbly.\nNet bits. ",
    date: "2019-07-25T23:42:41+02:00",
    handle: "Evertesterhuizen  "
  },
  {
    id: "5e66164f5ee429768df2bb2a",
    title: "moet uit",
    bodyText: "Drie weke; vier dae. \n\nEerste kontak. Jou woorde steek hulle hande uit. Omarmend. \n \nEk is so s\xF3 jammer. Liewe Grototter. \n\nJy sou my vanaand 'n lang druk gee. \n(Eintlik het jou reaksie soortvan.) \n\nWie ek geword het sonder jou teenwoordigheid het my vanaand skaam. \n\nBinnekort. \n",
    date: "2019-04-30T22:46:07+02:00",
    handle: ""
  },
  {
    id: "5e6616545ee429768df2bb37",
    title: "god - ode",
    bodyText: `L\xEA styf Teenaan 
Styf langsaan my 
In die loopgraf 
Hulle skiet op ons 
Spaar jou krag
Dood is naby. 

Bacchus gaan ons kom haal
Voor die god van dood
hier is
Die wolwe is weer aangetrek soos skape
Ons tyd is verstreke, 
Kyk:
Dood is hier .

(Ode aan: RvdV \u201CThere is Death here..." - The Dra'Azon, also known as the Beast of the Barrier)`,
    date: "2019-10-21T10:05:22+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616575ee429768df2bb3f",
    title: "Dis al. ",
    bodyText: "Verligting. ",
    date: "2020-01-08T17:11:54+02:00",
    handle: ""
  },
  {
    id: "5e6616595ee429768df2bb48",
    title: "Gee op op lewens pad",
    bodyText: "Die lewe het my gedruk van alle kanteEk wil nie meerSit en wag vir iets om te gebeurOf dit goed of sleg isDie lewe is donker vir myDonker sonder 'n lig wat aan gaanNet om jou die pad aan te wys'n plek van oor beginBegin van 'n nuwe leweDis tyd om aksie te vatTyd om keuse te maakKeuses goed of slegTyd het gekomSoos 'n uurglas'n uurglas wat leeg geloop hetLeeg om nog vas te klouVas te klou aan iets of iemandTyd is verby om Te struggle en nogmals te struggleWil nie meer aan gaanVir wie en verwatTyd is klaar verby met die lewenspad wat net gevul is met worries en gesukkel.",
    date: "2019-08-20T12:02:05+02:00",
    handle: ""
  },
  {
    id: "5e66165f5ee429768df2bb5d",
    title: "Volmaan volmaak ",
    bodyText: "Soet sag sak die aand om my\nEn ek weet hiermee sal ek moet vrede maak\nWant om my stap die paartjies terug ark toe\nEn dis ook okay\nWant die hele maan kom uit om my nag te soen\nNet vir my",
    date: "2019-05-18T23:00:30+02:00",
    handle: ""
  },
  {
    id: "5e6616885ee429768df2bbd1",
    title: "xoxo",
    bodyText: "Sondae, Sondae, Sondae, thee has fucked with me, constantly.",
    date: "2019-09-08T19:34:53+02:00",
    handle: ""
  },
  {
    id: "5e6616895ee429768df2bbd4",
    title: "It's coming for you",
    bodyText: "in these blue-veined vessels of flesh\nwe slide scathed through tricky existences\nwhile the serrated edges of life\ntakes good care of joy\nas time erodes simple pleasures\ninto basic humdrum routine \n",
    date: "2018-08-02T10:13:22+02:00",
    handle: ""
  },
  {
    id: "5e66168b5ee429768df2bbdc",
    title: "ukudibanisa",
    bodyText: "Ek haat hoe jou nuus 'n rots op my rug kom neersit. Ek haat dit. Jy is platgedruk jouself. Jou stem is stukkend. Ek hoor jou huil. Ek weet jy wil die rots eintlik net bietjie deel. \n\nGebed. \n\nKom die dag verligting, is dit lekker om te hoor. Jou stem breek weer- die keer van opgewondenheid. Maar jy sien, die rots gaan nie weg nie. Pain temporarily suspended. Tot volgende keer wat jou stem weer breek. \n\nDis nie lekker om jou te hoor huil nie, Pa. \n\n",
    date: "2019-04-30T17:56:31+02:00",
    handle: ""
  },
  {
    id: "5e66168d5ee429768df2bbe1",
    title: "manet menswees",
    bodyText: "Hier gaan ons\nnog n aand; n nuwe jaar,\nnuwe selfbeloftes,\nmaar steeds, dieselfde jy.",
    date: "2019-01-01T21:47:44+02:00",
    handle: ""
  },
  {
    id: "5e6616915ee429768df2bbe9",
    title: "A fucking stretch",
    bodyText: "Jy het gisteraand 4am 'n video gelike\nWat een van ons songs was.\nBeteken dit\nJy is nog lief vir my?\nOf was jy net (alweer) dronk\nSoos toe jy met haar opgehook het.\n\nEither way\nEk is nog lief vir jou.\nEn ek sukkel.\n",
    date: "2019-05-19T20:10:08+02:00",
    handle: ""
  },
  {
    id: "5e66162a5ee429768df2bab9",
    title: "by 'n rugbygame",
    bodyText: "toe jy gistraand van haar praathet alles in jou aan gegaansoos 'n lampie in 'n stowwerige vertrekwas daar iets in jou groter as die Ek: jou o\xEB was glaserigdie maan was kaaserigsoos 'n cheesy love gedigkon ek haar mond sien op jou gesigen toe jy oor haar lagwas dit soos 'n oopgebreektewaatlemoen met pitte wat agterblyen in die aandlug hul eie kleinsaadjies plantvanoggend toe ek wakker wordwas my hart so vol vir jouen so leeg vir my: jy word verteer deur geluken ek deur 'n kak gedig. ",
    date: "2019-08-04T07:19:20+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66162c5ee429768df2bac0",
    title: "As die gordyne toegaan . . . ",
    bodyText: "Maar sy\u2019t \u2018n personeelfunksie aan,En gaan nie kom kyk nie.Ek kort nie ondersteuning nie.Ek wil jou wys wie ek regtig is.Op die enigste manier wat ek kan:Kaal,En voor \u2018n gehoor. Jy\u2019t my dan dit geleer. ",
    date: "2019-11-01T06:58:27+02:00",
    handle: ""
  },
  {
    id: "5e66162f5ee429768df2bac9",
    title: "WAR FLOWERS",
    bodyText: "I'd swear to God, but I'm pretty sure he's not around anymore\nI swear that I found peace in our chaos\nI swear I found us \nin the bottom of a bottle\nor in the first drag of the first cigarette the next morning\nI swear that's where I found us\nI promised I'd never drink again\nI promised I'd never kiss someone like you again\nBut I did\nAnd I'd kiss you again\nand again\nand again\nfor the rest of my life if I could\nAnytime\nAnywhere\nAnyway\nI like your hands\nand the way they always seem to hold the night together\nEven when they're bleeding from broken glass\nEven if they're filthy\nEven if they're around my neck\nI'm always bruised thanks to nights like these\nbut my bruises look like flowers \nThe flowers you never got me\nThese are wounds of combat\nWarflowers, if you will\nBecause  everytime we drink ourselves to death\nWe go to battle\nAgainst the odds \nOf us never ending up together\n",
    date: "2019-04-30T17:29:59+02:00",
    handle: "miababy_95"
  },
  {
    id: "5e6616325ee429768df2bad1",
    title: "Expense of Spirit ",
    bodyText: "Savage, extreme, rude, cruel, not to trust;\nEnjoyed no sooner but despised straight;\nPast reason hunted; and no sooner had,\nPast reason hated, as a swallowed bait,\nOn purpose laid to make the taker mad.\nMad in pursuit and in possession so;\nHad, having, and in quest to have extreme;\nA bliss in proof, and proved, a very woe.",
    date: "2020-01-12T08:00:43+02:00",
    handle: ""
  },
  {
    id: "5e6616395ee429768df2bae2",
    title: "Om lief te h\xEA",
    bodyText: "Lief genoeg om te weet jy moet ophou met jou kak. Lief genoeg om te vergewe. Lief genoeg om nie te verskoon nie. Lief genoeg om te weet n\xF3\xFA is nie ons s'n nie.\n\nBitter lief - nie v\xE9rlief nie. ",
    date: "2019-04-19T22:53:03+02:00",
    handle: ""
  },
  {
    id: "5e66163a5ee429768df2bae4",
    title: "Gewaarwording ",
    bodyText: `"So wat was die moeilikste deel daarvan? " vra sy nonchalant, "die teleurstelling?"
"nee" s\xEA ek ewe nonchalant, "dis die vol gewig van die wete dat na al my trane en slapelose nagte, was ek niks. Net nog 'n simpel meisie."
En nou is dit hardop ges\xEA en nou moet seker oor dit kom. `,
    date: "2019-05-22T19:42:48+02:00",
    handle: ""
  },
  {
    id: "5e6616405ee429768df2baf9",
    title: "Beaufort-Wes, Aberdeen",
    bodyText: "Ek het probeer soek vir ietsIets waaraan hierdie eindelose Vlaktes herinner. Iets om dit te verstaan en in kleiner deeltjies opgebreek te kry. Maar daar was niks. Dit is onbekend. Nuut. Ek het mense probeer plaas wat by hierdie toneel sou pas. Een, twee, dalk drie wat werklik pas. Nie net hoop nie. Daar staan grys tolbosse, moe\xEB heiningpale en geroesde karwrakke langs die reguitste pad waarop 'n mens kan ry. Snaaks hoe jy aan die slaap kan raak while chasing a dream at 180km/h. Die maan, nee, nie die maan nie. Die lig rondom die maan, die bloupers laatmiddag lig net voor saktyd het my aan 'n vroe\xEBr tyd laat dink. Teveel om te s\xEA, maar dit was mooi. Ook 'n plek met hitte, sand en te min mense. Net buite Aberdeen is die informal settlement vol papiere. Die bossies groei papierblomme, s\xEA my passasier. Dis plat, seweuur die aand en 34\xB0C. Alles is toe. Behalwe die drankwinkel en 'n k\xEAffie. Dis 'n ander w\xEAreld hierdie. Swanger van insig oor die lewe. Maar te arm om dit groot te kry. Leef drome hier dan net as spoke? ",
    date: "2019-09-21T22:22:18+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6616455ee429768df2bb07",
    title: "A boring dystopia",
    bodyText: "kom ons speel huisen kyk wie eerste kan troulaaste een oor die wenstreepis 'n vroteier(25 is te oud om te kraam)waarom wil jy nie jouvingers versuur nie? weet jy dan nie van die kompetisie nie?al wat ek hoor is 'n desperategedruisek is eerder 'n verloorderas 'n generiese mondbuis. ",
    date: "2020-02-16T21:21:38+02:00",
    handle: ""
  },
  {
    id: "5e6616485ee429768df2bb12",
    title: "Vroue Pretensie",
    bodyText: "Hoekom kan ek nie net niks h\xEA nie.\nHoekom kan ek nie net niks van niemand wees nie. \nHoekom kan ek nie net n\xEArens hoort nie.\nEn wil vry val.\nEk is onafhanklik en volledig onbetroubaar.\nEk is moeg om bevraagteken te word.\nGetoets en Gewurg te word.\nEk is niks van jou nie. Hoekom nie?",
    date: "2019-05-04T03:56:12+02:00",
    handle: ""
  },
  {
    id: "5e66164b5ee429768df2bb1c",
    title: "Crash",
    bodyText: "Your beautiful face\nExploded in my head\nAs I picked up the phone\nTo hear that you\u2019re dead",
    date: "2018-08-04T21:06:22+02:00",
    handle: ""
  },
  {
    id: "5e6616585ee429768df2bb44",
    title: "Metal Against the Window",
    bodyText: "And when times are tough I like to think about what my favourite authors or philosophers would have done in the same situation. Except I can't find an excerpt on \u201Cbeing robbed at gunpoint in downtown Joburg traffic on a winter\u2019s Saturday afternoon.\u201D",
    date: "2019-07-13T20:34:54+02:00",
    handle: ""
  },
  {
    id: "5e66165e5ee429768df2bb58",
    title: "Wind uit",
    bodyText: "Ek wens ek kon jou wys wat ek gister gekoop het. \nMiskien kon ons daarna gaan roomys eet het by die plek in Lindin. \nEk wens ek kon jou s\xEA hoekom ek anders voel, gevoel het. \nMiskien sou jy nou, vir my kom kuier het. \nEk wens ek kon jou vertel van my werk en jou vat na die sushi buffet in Greenside. \nMiskien sou jy my van jou avontuur vertel het. \nEk wens ek kon jou bel, met jou praat.\nMiskien sou jy weet hoe seer my hart is, ek weet hoe seer jou hart was. \nEk wens ek kon besluit. \nMiskien slaan ek my eie wind uit. \n",
    date: "2019-09-23T10:35:46+02:00",
    handle: ""
  },
  {
    id: "5e66165e5ee429768df2bb5a",
    title: "Carol alt.",
    bodyText: "...... ... En die aand myself verlore vind in un-PC grappe en agterstallige praatwerk met rooi en fantastiese dik papier met swak gekiesde letters. ",
    date: "2019-09-07T12:44:04+02:00",
    handle: ""
  },
  {
    id: "5e66166a5ee429768df2bb7e",
    title: "koue staal realiteit",
    bodyText: "die werklikheid het nog altyd te veel koppe gehad / sommige dinge hou langer as wat mens dink / sommige goed kan nooit doodmaak geword nie",
    date: "2019-12-01T16:00:30+02:00",
    handle: ""
  },
  {
    id: "5e66166d5ee429768df2bb87",
    title: "SY",
    bodyText: "BE\nONS\nSY",
    date: "2018-08-09T09:13:52+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e66167d5ee429768df2bbb0",
    title: "Pound the alarm",
    bodyText: "My besluite van die dag hou my vanaand wakker.\nWaarom ruk dit my nie m\xF4re oggend 06h50 wakker sodat ek vir 10 minute daaroor kan l\xEA en dink en 07h00 as ek dan regtig moet opstaan die krag het om dit te probeer verander nie?\nWaarom moet ek nou spyt wees?\nWaarom maak dit my n\xF3u wakker?",
    date: "2019-06-18T22:41:38+02:00",
    handle: ""
  },
  {
    id: "5e66167d5ee429768df2bbb1",
    title: "Vreemde",
    bodyText: "Van waar die mirage van woede\nHierdie geskaaf by my roede\n\nPiel en kerk, \nAlbei gemerk: \nFier en regop. \nBlinkgepoets \nIs \xE9k geroep?\n\nDom en avers rig jy jouself\nInsiggewend dring jy jouself\nStadigaan stuur jy oor die kruin\nTot al wat oorbly... jou heilige\nNamib duin\n \n\n\n\n",
    date: "2018-09-14T02:40:27+02:00",
    handle: ""
  },
  {
    id: "5e6616835ee429768df2bbc2",
    title: "\u2022\u2022\u2022---\u2022\u2022\u2022",
    bodyText: "Alweer 'n gekringsittery vanm\xF4re...\n\n\n...maar totius weet, ek wens dit was jou noodkreet vanand. ",
    date: "2019-06-09T02:26:13+02:00",
    handle: ""
  },
  {
    id: "5e6616885ee429768df2bbd2",
    title: "Daarisiets",
    bodyText: "Dis son en see, ma dis seer",
    date: "2018-12-02T15:46:38+02:00",
    handle: ""
  },
  {
    id: "5e6616895ee429768df2bbd6",
    title: "-",
    bodyText: "Ton Vosloo lyk soos 'n marshmallow",
    date: "2018-10-04T12:09:20+02:00",
    handle: ""
  },
  {
    id: "5e66163a5ee429768df2bae5",
    title: "Gedagtes van 'n pendelaar",
    bodyText: "Die enigste secret sound wat ek wil hoor is die druk van die afknoppie",
    date: "2020-02-28T08:40:30+02:00",
    handle: ""
  },
  {
    id: "5e66163e5ee429768df2baf0",
    title: "@",
    bodyText: "Daars altyd plek vir jou",
    date: "2019-03-10T10:12:15+02:00",
    handle: ""
  },
  {
    id: "5e6616465ee429768df2bb0d",
    title: "Tot die einde kom",
    bodyText: "Ek luister na die nag geluideDis vreedsaame en rustigheidEk hoor die geritsel van die bommeEk kyk oor die mooiste tuinEk verlang na iemandnaby aan myEk wil jou liggaam voel teen myneEk wil hoor jou diep asemhaling diep en uitEk wil jou vashouVashou dat niks jou van my af wag neemWeg neem dat ek jou nie meer kan sien of voel.Ek wil jou kop op my borskas voelJou hare teen my houSodat ons soos een mens kan weesEk wil jou hartklop voel teen mynemet die weete jys veiliig by myEk sal jou bewaak teen seer kry en verdriet. Ek sal jou beskerm teen die woeste wereld daar buiteEk sal jou lief he tot my einde kom.",
    date: "2019-10-09T23:36:48+02:00",
    handle: ""
  },
  {
    id: "5e66164a5ee429768df2bb19",
    title: "Stiltesmag",
    bodyText: "Hoe wens ek dat ekhierdie dwarrelende warboelvir die absolute stilte,\nin oorvloed, kon verruil.\nWaar is die hemel,\nwat kwansuis \nhier op aarde skuil?\n\nWaar is jou stille nag,\njou ware wese, \nalgehele prag?\n\nAl wat oor is,\nis stiltesmag.",
    date: "2019-10-05T17:47:00+02:00",
    handle: "marinda_dejongh"
  },
  {
    id: "5e6616545ee429768df2bb36",
    title: "Angles send to me",
    bodyText: "The Lord is my Shephard i have everything i needI was sitting in a parking area at a mallPeople coming and going from shop to shop. When I saw a women and her sonWalking from one car to another selling bookmarkers. At the time i was thinking why must i pray, pray for something good to happen. Praying what to do. At that stage i did not want to pray anymore. I had a feeling af sadness in my heart and soul.a heart and soul thats brokenBroken in such a way no one could repairI bought one from this women I told her this card talks to me. While i was thinking how to end my life. This Angle women came into my life. I called her back and my tears was running non stop. I spoke to this angle. a lady with a beautyfull smile. A smile of an angel i met her son to.I could feel God send her to my car just at the right time because i just want to end the hurt and pain in my soul.a Time i needed an angel for me to still believe there is a Living Goda God that listens at all times even though i thought God was not listeningThank you angel of the nightYou gave me hope for another dayTo get up again an fightGiving me again hope to live another dayMy God bless you and your son. ",
    date: "2019-08-14T22:04:08+02:00",
    handle: ""
  },
  {
    id: "5e6616565ee429768df2bb3d",
    title: "Kaap dinge",
    bodyText: "En toe ons uitasem en laggend van die dansvloer afstapEn die ou oom in die voorste ry s\xEA ons herinner hom aan toe sy vrou nog geleef hetToe weet ekEk sal jou beslis kan leer kaap sokkie en  draai en draai en draaiMet my gedagtes en kop wat dieselfde doen",
    date: "2019-09-02T22:32:40+02:00",
    handle: ""
  },
  {
    id: "5e6616585ee429768df2bb43",
    title: "Gat",
    bodyText: "Kry jou gat in rat",
    date: "2019-12-06T06:58:17+02:00",
    handle: ""
  },
  {
    id: "5e66165e5ee429768df2bb59",
    title: "Naby",
    bodyText: "Ek het nog tyd vir jou",
    date: "2018-11-14T19:31:44+02:00",
    handle: "Envirjou"
  },
  {
    id: "5e66165f5ee429768df2bb5c",
    title: "Kalahari ",
    bodyText: "Ons gaan blikkieskos eet;\nbound to be\nan adventure. ",
    date: "2019-06-15T09:35:45+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6616645ee429768df2bb6a",
    title: "Kon seker 'n fb status wees",
    bodyText: "Hoeveel sou dit van jou vra\nOm my net 'n prioriteit te maak\nBo dronk wees\nEn fun wees\n\nWant my ego kry seer\nEn ek gaan nie hierdie \nVir veel langer kan doen nie\n\nAl is ek die liefste vir jou\nWat ek nog ooit was\nSo hoeveel sou dit vra",
    date: "2019-03-29T20:20:04+02:00",
    handle: ""
  },
  {
    id: "5e6616645ee429768df2bb6b",
    title: "PE '14 ",
    bodyText: "Neus verstop\nWater spoel oor mond\nAsemhaal is onmoontlik \nEn vir 'n sekonde verdrink jy \nIn die shower.\n\nNes ek. In jou verdrink het. \nTwee jaar lank. ",
    date: "2019-01-17T21:09:00+02:00",
    handle: "Verbatim "
  },
  {
    id: "5e66166b5ee429768df2bb83",
    title: "\u{1F642}\u{1F636}\u{1F643}",
    bodyText: "Ek luister gewoonlik na ander se raad,Maar wil die keer self my kop stampIs dit waar?Dat dit beter is om spyt te wees omdat jy iets gedoen het, Eerder as om te wonder hoe dit sou wees as jy dit maar gedoen het? ",
    date: "2019-11-22T21:27:47+02:00",
    handle: ""
  },
  {
    id: "5e66166c5ee429768df2bb85",
    title: "Ek(speriment)",
    bodyText: "j's geneesvan die gay jy's genees van myontkenontrou trou oumy klit gevoel my lyf gevryf maar niks bedoel die resultaat:liefde en haat~ @nnieniem ~",
    date: "2019-07-30T18:41:30+02:00",
    handle: ""
  },
  {
    id: "5e66166e5ee429768df2bb8c",
    title: "Die kroeg van Hanover",
    bodyText: "Iemand wat jou ontmoet met n sug is n goeie mens. Dit klink dalk lelik. \nMaar dit is nie. ",
    date: "2019-06-01T21:11:43+02:00",
    handle: ""
  },
  {
    id: "5e6616755ee429768df2bb97",
    title: "Armoede",
    bodyText: "Ek het drie en twintig rand en vyf en veertig sent in die bank. \nVoor belasting.\nMy jogurt is suur.\nEk het my laaste pro-vita ge\xEBet. \nEk het verlede week voor 'n tolhek gebedel,\nhulle vat toe nie debietkaarte nie. \nMy hare raak te lank\nen my klere hang bietjie los. \nEk ry verby jou,\nmet my vol tenk 95,\nunleaded. \nJy het drie en twintig sent en vyf en veertig blase in jou hand. \nBelastingvry. \nJogurt is te duur. \nJy het eergister laas ge\xEBet. \nJy het laasweek langs die robot gebedel,\nvandag is dit langs Spar. \nJou nerfaf hande,\ns\xEA die lewe raak te lank,\nen jou asem begin jou\neffens\neffe\nlos.",
    date: "2018-08-03T10:05:22+02:00",
    handle: "colettecombrink"
  },
  {
    id: "5e66167a5ee429768df2bba8",
    title: "Sy pt II",
    bodyText: "Sy sit aan die anderkantReinheid in haar o\xEB, wyn in haar hand\nSy s\xEA God het homself aan haar bewys \nEers deur die kerk, toe deur my \nSy drink vinnig en eet tussendeur \nSy praat asof die woorde uit haar hart uit skeur\nSy skree met 'n vraagteken, vra met 'n punt\nTerwyl sy my kaak aan die tafel vasbind\nSy maak my wakker, sy praat my aan die slaap\nWaar die lewe en die dood my gelyktydig verlaat\nDaar's son teen haar slape en slaap in haar dag\nEn ek wonder of ek al jare vir haar wag\n",
    date: "2019-10-23T17:17:57+02:00",
    handle: "@milli.burd"
  },
  {
    id: "5e66167c5ee429768df2bbac",
    title: "Stil",
    bodyText: "Kom sit langs my. \nSit net. Moenie; niks anders nie. \nSit net bietjie.\nEk kort om asem te haal. \nEn ek haal altyd beter asem wanneer jy langs my sit.\nSit net so\nSo bietjie\nHier langs my stil. ",
    date: "2019-01-30T01:50:33+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616825ee429768df2bbc0",
    title: "Ek gee.",
    bodyText: "Ek gee my le\xEB gelding vol woorde op \u0144 skinkbord vir jou.\nEk gee jou alkohol wat heel moontelik net een aand sal hou. Ek gee jou brood en van my laaste botter. \nEk gee jou my hart met al sy pleisters en steke en infeksies. Ek gee jou alles in my. \n\nAlles.\n\n Van kop tot tone! \nMy gedagtes, my aanraking en bo alles. \n\nBo alles.\n\n Gee ek my liefde. \n Sien jy dit raak?\n\n Vat dit soos wat dit kom op \u0144 skinkbord, in \u0144 bottel en selfs op \u0144 stuk dro\xEB brood. ",
    date: "2019-03-02T18:51:48+02:00",
    handle: ""
  },
  {
    id: "5e6616875ee429768df2bbcf",
    title: "Julle",
    bodyText: "Alles bly die selfde - mens raak net te besig om dit te sien.",
    date: "2020-02-16T19:58:44+02:00",
    handle: ""
  },
  {
    id: "5e6616905ee429768df2bbe8",
    title: '"snoopy"',
    bodyText: 'Maandagoggend is dit wit kant. Later die week babablou chiffon. Plek-plek aan koel vel geraak. Metterk\xFDk al nader begin voel, gemaklik, wel. T-hemp lap en slimfit. Bloedrooisweetpakmateriaal en warm hou. Lekker snoes... later sweet. Bietjie klemmend. Sondag: verstrengel en witwarm ysterkettings teen sagte vel ontvlam in totale manie. Vuurtonge maak brandvlekke en dun repies vlees deur pantser-gaas. Seemeeue se kras en vuurknetter doof desperate gille uit. Jou sagte pers vlees peul deur lensgrootte ysterblokkies. En lipklank vir mekaar: "want hy was snoopy" ',
    date: "2019-09-10T00:07:15+02:00",
    handle: ""
  },
  {
    id: "5e66162f5ee429768df2bacb",
    title: "Urgh! ",
    bodyText: "Tiete. ",
    date: "2019-03-07T20:05:43+02:00",
    handle: ""
  },
  {
    id: "5e6616285ee429768df2bab4",
    title: "Seun",
    bodyText: "Jy sit langs die hoofpad\nOp n gebreekte winkel trollie\nEk wil nie kyk nie\u2026 Daars so baie soos jy\nEk wil nie die dro\xEB loopneus-strepies\nop jou wang sien nie\nEk wil nie jou maer uitgehongerde lyfie sien nie\nEk wil nie die lewenshardheid\nin jou jong gesiggie sien nie\nOf die harde ogies wat vertel\nvan \u2018n kind wat van vroeg af homself moes beskerm\nJou oorgroot hoed \nveronderstel om jou te beskerm teen \u2018n genadelose son\nWie beskerm jou teen \u2018n genadelose lewe?\nEk wou jou nie sien nie\u2026\nDie armoede\u2026\nDie honger\u2026\nNet \u2018n kind, maar reeds te veel geleef\nDie robot slaan groen\nIn die wegry na my veiligheid\nVee ek trane af oor jou\n",
    date: "2019-01-23T20:29:56+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e66162b5ee429768df2babc",
    title: "Takotsubo Cardiomyopathy\n",
    bodyText: "'n doosseer hart die bra van TED s\xEA my hart is nou 'n Sjinese vaas\xA0blykbaar fok hartseer met die struktuurtog, bly my kamers intakt;\xA0ek wil oopmaak met jou elke klop\xA0verder, s\xEA die knaapis die hartvaas\xA0boonop gekantelso my hart is fokken skeef ook nouen alles loop uit\xA0soos wat jy wegloop, my wegsmyt\xA0maar hy s\xEA daar's hoop\xE1ltyd fokken hoop\xA0en dit vat maar net 2 weke\xA0\ndit klink nie lank genoeg nie\nen ek dink hy praat kak\xA0\n\nek en my Sjinese vaas\xA0\nsal langer rou\xA0\noor die ontoeganklike liefde\xA0\ntussen my en jou\xA0",
    date: "2019-11-14T07:36:04+02:00",
    handle: ""
  },
  {
    id: "5e6616355ee429768df2bad7",
    title: "Slaap",
    bodyText: "Ek't gedroom ek word wakker en ek sit weer langs my pa, hys nie meer verwar of moeg nie, hy is lag, hy is mooi. Ek\u2019s weer jonk, mooi en gesonder. Ek ry my ou kar met die roes en ons rook weer langs die see in Jeffreys  of Gonubie, Dit was mooi.  \n\nDaar was mooi goed om my, ek kon dit sien en voel. Ek\u2019t gedroom die plek het nog water, en ek\u2019t droom nog oor Kaapstad.  \n\nEk't gedroom ons hande wou nog werk en vas hou aan jou. \nEk wou weer dans en skryf, musiek maak, ek wou pretentious en vol wyn slaap. \n... \nen net voor ek wakker skrik, het jy na my gekyk, nee, gestaar, en alles was heel, ouma en pa lewe weer, ek kon die kinders en die huise in voorstede sien, dit was Kersfees, ek kon my skool dae sien, ek kon sien hoe jy jou hand in my graf steek, ek kon weer daai bier proe in daai bar met die cash-slots en pool, ek kon weer hoop in die plek in lieg, \n\nEk kon weer swem, en nie net dobber nie. \nEk kon sien hoe jy my sien \nEk kon sien hoe ek swik onder self, \nEk kon sien hoe jy besig is om asem te verloor, hoe jy jouself probeer beskerm. \nen toe ek wakker word het ek sleg gevoel vir dae daarna.  \nEk wou weer slaap \nek wou net weer slaap,  \nek wil slaap, \nek wil slaap ",
    date: "2019-01-30T22:46:36+02:00",
    handle: ""
  },
  {
    id: "5e6616355ee429768df2bad5",
    title: "Bitter bloed ",
    bodyText: "Hy't bitter bloedEk weet sy mond is soetMaar vra my donker aandeDie nasmaak bly vir maande ",
    date: "2019-10-23T17:09:12+02:00",
    handle: "@milli.burd"
  },
  {
    id: "5e6616365ee429768df2bad9",
    title: "Twintig Sewentien",
    bodyText: "2017Van Februarie tot HelMaar ek is die baas van daardie plaas\nEk met my snitte en ek met my sin\nEk met my hartseer onder jou hemp\nEn my pyn in jou broek\nEn my seer tussen jou bene\n\n2017\nKan ek terugdraai?\nEn alles agteruit herleef?\nLaat die storie begin \nMet ons in nat sonde\nEn verloop soos ons al meer onskuldig raak\nEn ek myself dan gaan doodmaak\nNog heel aan die begin\nVoor ek my donkerte tot by jou kan bring",
    date: "2019-07-27T00:02:31+02:00",
    handle: ""
  },
  {
    id: "5e6616405ee429768df2baf7",
    title: "Warm ProNutro",
    bodyText: "Snaaks hoe vinnig ek weer soontoe gaan. \nEk hoor jou lag weer helder in my oor -\nVoel die ek-is-lief-vir-jou weer - te maklik - uit jou mond wat vou om my hart. \n\nDan retireer ek ietwat - \nSmag ek na die mens wat ek sekondes terug was. \nDie een wat vir langer as n dag kon gaan sonder om aan jou te dink. \n\nSnaaks hoe maklik jy kon wegloop. \nEk hoor die stilte waar jou persoonlike BBM notification my altyd gepla het. \nEk voel die pyn in my bors toe my ouers se dat ek die gevoellose een is sonder om te vra hoekom ek nie meer lag of sing nie. \n\nDan huiwer ek ietwat -\nDie trane wat ek nie kan huil nie want seuns huil nie net omdat hulle n vriend verloor het nie - dreig weer. \nEk is weer Daardie Ek. Die een wat gepraat het oor meisies soos wat my pa my maak belowe het om nooit te praat nie. \nDie een wat homself maak glo het dat jy voel soos wat hy doen. \n\nSnaaks hoe ek nogsteeds jaloers is. \nMy plek in jou lewe is nou haar-ne. \nJy het saam met haar besef dat die woorde wat jy te-maklik vir my ges\xEA het; gewig dra. \n\nDan is ek weer Hierdie Ek. \nDie een wat nagte in vreemde arms spandeer het omdat ek jou gemis het. \nDie een wat voor sy ma kan huil want vreemde dronk lippe het haar vertel dat ek hou van mans. \n\nEn selfs is sy arms om my -\nSy lief-vir-jou's vol beloftes wat hy nakom. \nSelfs al is ek iemand anders s'n -\nIs daardie Ander Ek nogsteeds joune. \n\nSy eerste soen was joune. \nSy alewige hartseer ook. \nEn hy haat homself daarvoor. ",
    date: "2019-03-03T17:25:26+02:00",
    handle: "rymmetgrietjie"
  },
  {
    id: "5e66163d5ee429768df2baef",
    title: "kONSternasie",
    bodyText: "Eintlik wil ek net h\xEA JY moet dit makliker maak. But that's a hard pill to swallow, want ek weet jy gaan nie...",
    date: "2019-09-01T11:43:35+02:00",
    handle: ""
  },
  {
    id: "5e6616445ee429768df2bb06",
    title: "\u263A",
    bodyText: "Hollyhocks\nStocks\nRenonkels\nGesiggies\nMalvas\nPoppies\nPeonies \nPhlox\nSparaxis\nGerberas \nEn d\xEDt. ",
    date: "2019-08-10T22:53:48+02:00",
    handle: ""
  },
  {
    id: "5e6616405ee429768df2baf6",
    title: "Marionette",
    bodyText: "Daars iets hier binne my\nDit roer en grom en kruip na die oppervlak\nDit bewys nou en dan vir my\nDat ek nie in beheer is nie",
    date: "2019-04-18T22:43:41+02:00",
    handle: ""
  },
  {
    id: "5e6616495ee429768df2bb14",
    title: "Liefdesbrief",
    bodyText: `Skryf vir my 'n briefStuur dit deur die pos
Hierdie hart verlang na woorde
Wat nie aan my behoort
"Ek het jou lief"`,
    date: "2019-09-01T01:34:55+02:00",
    handle: ""
  },
  {
    id: "5e6616415ee429768df2bafc",
    title: "Nooit net niks",
    bodyText: "Gewond, Nagelaat, Veragting,  \nVerlate. \nAanrandings, \n\nKneusplekke, al die seer  Wat jy het-\n       Verduur,   \nOorleef,\n\n En het jy nie?  \n\nNes die vlamme na die oson lek \n\nEn die wind warrel, plesier en Troos.\n Hulp kom! \n\nEn laglus- oh! wat \xF1 verrukking.",
    date: "2020-02-01T21:15:23+02:00",
    handle: "Sheridanwalter "
  },
  {
    id: "5e66164f5ee429768df2bb29",
    title: "as ek in die oggend nog so voel",
    bodyText: "slim maar nie slim genoeg nie",
    date: "2019-05-26T16:09:10+02:00",
    handle: ""
  },
  {
    id: "5e6616455ee429768df2bb08",
    title: "-",
    bodyText: "ek",
    date: "2019-08-11T14:30:33+02:00",
    handle: ""
  },
  {
    id: "5e6616505ee429768df2bb2d",
    title: "karplaks! ",
    bodyText: "met jou hand \nin die holte van my rug en jou gesig\nna my gedraai, \nhet jy my\n  trappie\n     vir\n        trappie\nboontoe gelei - \nagteruit, so gewoond al - \nen vasgenael op jou o\xEB \nso. bloody. blou.\nhet ek nie besef nie:\nmy flat is al op die tweede vloer\n\neers toe my regteroogbal\nop die oorkantste sypaadjie omrol\nen jou gewaar\nby vloer sewe se ruit uit \nkots, tref dit my:\nmy flat w\xE1s al tweede vloer \n\nkyk, \njy k\xF3n die hysbak gebruik het, \ndan was dit baie vinniger \nverby, jy\nis vasberade,\nI'll give you that\n\nmaar vir sulke games\nkort jy \u02BCn sterker maag.",
    date: "2019-04-08T16:04:05+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6616465ee429768df2bb0b",
    title: "Ek kies jou ",
    bodyText: "Ek glo jy sal my toelaat om te wees wie ek is,\nEn my aan te moedig om beter te wees\nSo ek kies jou",
    date: "2019-06-03T18:43:26+02:00",
    handle: ""
  },
  {
    id: "5e6616555ee429768df2bb38",
    title: "Wat bly dan oor?",
    bodyText: "Kon ek vir jou verbeter het? Ver-jy het? Of ont-ek het?",
    date: "2019-01-11T21:15:53+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6616475ee429768df2bb10",
    title: "Selfstandige Misverstand ",
    bodyText: "Daar is weer dag in my nag \nEn lewe in my begrafnis\n\nBody has currency \nBody is property\n\nEn ek moes soek vir 'n trui waarin ek voort kan bestaan \nWaar ek tuis voel tussen al die hawelose \nMet le\xEB liggame gehuurde straatlig \n\nDit klink dalk eenvoudig \nMaar my geraamte (lig-gaam)\nHet vergeet hoe om te behoort \n\nEk het opgestaan kaal \nEn ek het gaan slaap met 'n vreemdeling se nagklere \nDaar was kleure eens in die nag \nEn nou is daar net nag in die kleure \n\nSpeel vir my klavier \nEn stel my gerus \nLeen my 'n bietjie Kaap \nDat ek eendag weer sal slaap\n",
    date: "2018-11-11T17:25:48+02:00",
    handle: ""
  },
  {
    id: "5e6616565ee429768df2bb3c",
    title: "Niks",
    bodyText: "wat help \nek mis jou\nas dit niks \nkan verander nie\n\ndit bly\n'n le\xEB\nwens",
    date: "2019-09-03T03:04:27+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616495ee429768df2bb15",
    title: "W",
    bodyText: "I think you should give me up. ",
    date: "2019-05-26T21:57:20+02:00",
    handle: ""
  },
  {
    id: "5e6616595ee429768df2bb46",
    title: "Jammer",
    bodyText: "J - jammer ek gaan weg van hier\nA-almal vergewe my\nM-moet my nie terug hou laat my gaan\nM-moet nie skuldig voel\nE-Ekt op gegee niemand anders\nR-Rus laat my gaan in rustigheid",
    date: "2019-07-06T22:31:32+02:00",
    handle: ""
  },
  {
    id: "5e66164b5ee429768df2bb1d",
    title: "Ek & Jy",
    bodyText: "Tussen verklapte geheime\nEn getrekte gordyne\nDaar sal ek jou weer ontmoet\nWanneer die wereld daar buite\nUit gesluit deur ons ruite\nDie daglig weer kom groet\n\nAs komberse kon skinder\nVan kers vlam verhale en as mure kon praat\nWanneer jy vir my fluister\nIn die diep koue duister oor die wereld en sy kwaad\n\nWanneer die aand so naak is \nSoos ek en jy\nEn die storm wind\nWaai die reen verby\n\nDaar in my slaapkamer \nDaar in my bed \nWaar die twee van ons\nDie wereld daar buite belet\n\nDaar le ons in vrede\nEn vergeet die verlede\nDaar le ons rustig en kalm\nMet my hartklop teen jou oor\nWas ons in die oomblik verloor\nOorgegee aan alkohol en dagga walms",
    date: "2018-08-04T21:15:20+02:00",
    handle: ""
  },
  {
    id: "5e66165a5ee429768df2bb4c",
    title: "Wees net hier",
    bodyText: "Hoe is dit so moeilik",
    date: "2019-04-17T20:40:31+02:00",
    handle: ""
  },
  {
    id: "5e66164c5ee429768df2bb21",
    title: "Hierdie is \u2018n kak gedig, maar ek voel nou beter. Dankie.",
    bodyText: "Heerder, man, mens klink so fokken petty om oor iets soos liefde te skryf. Daar is kak wat daar buite gebeur wat meer gewig dra. Goed wat helderder skyn as my selfoonliggie terwyl ek wag vir \u2018n status update van jou. Ek soek wenke in daai updates, weet jy. Ek is so na\xEFef dat ek glo van dit gaan oor my. Fokken liries if you ask me.\n\nNou is ek uit om \u2018n ander lig te soek. \n\u2018n Lig wat nie uitkyk vir iets meer as \u2018n ou\nMinder iets soos Swiegers se \u201CAlles is blou\u201D.\nEk was uit om te soek, maar kon dit nie kry.\nWant in elke hoek sit en flikker jy.\n",
    date: "2019-01-18T23:46:49+02:00",
    handle: ""
  },
  {
    id: "5e66165b5ee429768df2bb4d",
    title: "Misgis",
    bodyText: "Het jy al ooit n lewensles misgis vir n lewensmaat?",
    date: "2019-08-04T17:39:26+02:00",
    handle: ""
  },
  {
    id: "5e66164d5ee429768df2bb23",
    title: "eine frau",
    bodyText: "Naamlose strofes: Ongemaklik onbekend. Geprojekteerde lugkastele: Rasend na aan verleentheid. \n\nEen, twee, drie: blok myself!\n\n(na-ah) \u{1F937}\u200D\u2640\uFE0F ",
    date: "2019-06-10T22:39:24+02:00",
    handle: ""
  },
  {
    id: "5e66165c5ee429768df2bb51",
    title: "#tydomtefokof",
    bodyText: "Liewe Fokofpolisiekar\n\nHulle s\xEA as jy met vuur speel, sal jy brand (en dit bly \u2019n warm waarheid). Die lugsteuring wat julle veroorsaak het was \u2019n buitew\xEAreldse brandbom en die stem van julle kollektiewe monoloog in stereo het baie nuwe waarhede verklap. Ek wonder soms (soms wonder ek) of brand Suid-Afrika elke dag net meer en meer, maar ek weet wel ons sing nog nie ons swanesang nie. \n\nDalk is ek net nostalgies (en antibiotika en selfmedikasie help nie vir dit nie), maar wat ek eintlik wil s\xEA is, droom hoog, maar moet asseblief net nie meer albums maak nie. \n\nGroetnis, liefde en vrede\nT. Ezekiel",
    date: "2019-07-30T17:05:46+02:00",
    handle: ""
  },
  {
    id: "5e6616555ee429768df2bb3a",
    title: "\u{1F377}",
    bodyText: "vanaand...\nhier nou... \nna al die tyd...\xA0\nbesoedel my ekse se suiwer wit trou rokke my skerm op, \nhulle het hulle tyd op my gemors.\xA0\n",
    date: "2019-06-09T19:06:23+02:00",
    handle: "Ahwelgemoed "
  },
  {
    id: "5e6616625ee429768df2bb64",
    title: "2019 (onvoltooide idee - jammer) ",
    bodyText: "Ek moet my instink volg \nEk moet luister \nEk moet meer nee s\xEA \n(say no to the known) \nEk moet meer buite sit en Koffie drink,  \niewers v\xEAr,  \niewers vroeg. \nEk moet meer bewus gaan slaap, \nbewus van daai dag, bewus van wat gebreek het, \nEk moet aanvaar en tot vrede kom dat my vormings jare nog 'n inpak dra. \n\nDat ek mag stil wees, en net dink \n\nEk moet aanvaar dat geld my gelukkig maak, maar nie gelukkiger nie. \n\nEk moet aanvaar dat ek alleen is want my besluite tot nou het my hier kom aflaai, en as ek die sitkamer wil vul, dat ek sal moet verander,  \nen verander is okay. \n\n_ \u201Che's got rid of everybody else, he's going to get rid of himself\u201D   - Spike Milligan on Tony Hancock's death _ \n\nEk moet aanvaar dat mense in \u2018n god wil h\xEA, en dis okay, of dit nou \u2018n 2000 jaar oue \u201Cwit man\u201D is  \nof geld  \nof Filters,  \ndis okay. \nNa\xEFef wees nie so erg is nie, \noningelig wees is net tydelik,  \nEk moet luister, net luister \n... \n(Nog goed/Maak dit beter)",
    date: "2018-12-30T15:29:38+02:00",
    handle: ""
  },
  {
    id: "5e6616615ee429768df2bb63",
    title: "20:54",
    bodyText: "kopseer en ek verloor jou.\n",
    date: "2019-04-11T20:53:40+02:00",
    handle: ""
  },
  {
    id: "5e6616635ee429768df2bb69",
    title: "ek en jy",
    bodyText: "Ons is\nte jonk om te weet\nen te oud om te raai\n",
    date: "2018-08-14T12:03:17+02:00",
    handle: ""
  },
  {
    id: "5e6616695ee429768df2bb7c",
    title: "Were",
    bodyText: "There were flowers and there were rocks\nThere was love but the world forgot\nWe were happy you and me\nYou walked away to follow destiny.\nThere was war and then there was peace\nLovers held and lovers lost\nWe were happy but you forgot.\nSummers were strained but summer remained \nReminded us of winters stains",
    date: "2018-07-19T17:56:35+02:00",
    handle: ""
  },
  {
    id: "5e6616685ee429768df2bb76",
    title: "die klonkie ",
    bodyText: 'vir jare is jy my held\nek gee vir jou soms geld\nof koop vir jou lekkers of net skoon water\nof gee vir n trui in die koue vir later\n\nekt jou weer gesien in die week\njou oge se vriendelike strale het deur ys in my hart gesteek\nmense dink jy staan en smeek\neintlik staan jou siel en preek\n\nvir mense soos ek\nwat amper nooit is op n lekker steady plek\njyt geloer na die joggies\ngese die nuwe mense s\xEA hulle het nie tyd vir "drek"\n\nekt jou gesien en jyt my gesien\nons het gesmile en geweet dat ons altwee soms beter verdien\nmaar dat ons is soos die vo\xEBltjies\n\njy is eintlik nou groot ou klong\nin namakwaland beteken dit nie jy is n jong\njys my kind voel dit al for long\nek skryf vanaand n nuwe song:\n\nkaalvoet kinders van die wind\nJesus is Sy kroon se p\xEArels goedgesind\nsien jou weer saam met die waai van die lewe se vind\nmag jy altyd goedheid en guns vind.',
    date: "2019-10-19T13:43:30+02:00",
    handle: "ella.haal.asem.asseblief"
  },
  {
    id: "5e66166a5ee429768df2bb7f",
    title: "Uiteindelik ",
    bodyText: "Bloed\nPis en\nHart \nsiekte. \n\nAg Here, my ritalin.\nDaar gaan my ritalin. \n\n(en garage samoosas op vrydae) ",
    date: "2018-08-23T09:20:34+02:00",
    handle: ""
  },
  {
    id: "5e6616685ee429768df2bb79",
    title: "Hulp",
    bodyText: "Ek is n UI Designer ",
    date: "2019-09-10T15:36:03+02:00",
    handle: "eckleynhans_"
  },
  {
    id: "5e66166b5ee429768df2bb81",
    title: "Oseaan ",
    bodyText: "Dit kan net jy wees wat dit doenMy vasmaak met seesandMy mond gesnoerWant as die branders oor my kaalvoete glyWil ek gilMaar ek byt my hemp vasEn laat die water oor my spoelMet die heerlike weteHier is net die beginVan in die branders rolMonde gesnoerVasgemaak in seesandAan n oseaan wat woel",
    date: "2019-09-05T16:25:20+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66166a5ee429768df2bb7d",
    title: "Fleur au soleil",
    bodyText: "Die son breek deur'n Klein gaping in die wolkeEn bak neerOp geel-geel blomblareIn die sonneblomveldeVan die Vrystaat ",
    date: "2020-01-23T19:30:35+02:00",
    handle: "mabethc"
  },
  {
    id: "5e66166d5ee429768df2bb88",
    title: "Avo",
    bodyText: "Ek en jy weet altwee Mr Peer\ndat as ek jou gaan skil gaan dit net wees\nseer\n\nwant jou skil is net te hard \nen jou pit sit net te\nvas\n\nen al begeer ek jou vlees\nis dit ook maar net water \nniks gees\n\nons altwee wou net nader \nmaar dis nie nader aan die Vader\n\njy is nie reg nie\nen as ons nou eerlik gaan wees\nook nie ek nie\n\nso nou hier sit ons alweer\nnet ek en jy\nMr Peer",
    date: "2019-05-17T02:05:04+02:00",
    handle: ""
  },
  {
    id: "5e6616795ee429768df2bba4",
    title: "Seilboot ",
    bodyText: "Wees gegroet aardlinge! Dalk, dalk nie. ",
    date: "2019-05-30T14:50:12+02:00",
    handle: ""
  },
  {
    id: "5e6616865ee429768df2bbcd",
    title: "miskien",
    bodyText: "moet ek jou lossodat ek myself kan verwyteerder as vir jouen jou dan altyd s\xF3n\xE9t bly liefh\xEAsoos nou ",
    date: "2019-09-24T17:35:19+02:00",
    handle: ""
  },
  {
    id: "5e6616845ee429768df2bbc5",
    title: " ",
    bodyText: "Oggendstrond het goud in die mond. ",
    date: "2019-11-26T06:56:29+02:00",
    handle: ""
  },
  {
    id: "5e66168c5ee429768df2bbdf",
    title: "Desember se dansie . ",
    bodyText: "Voor \u2018n bar wat al meer name gehad het as locals,\n\nsit ek aleen, stil.\n\nOp twee hout planke en vier skroewe ondersteun.\n\n\u2018n Jongerige meisie dans  anderkant die drempel,\nhaar oog vang myne deur slierte hare wat ritmies waai,\nsoos vlae wat halfmas hang oor die geknakte rug van haar tempel.\n\n\u201CHierdie keer sal ek die regte sade saai!\u201D\n\nVanaand drink ons een op jou.\n\nT\xF3g maar net mo\xEBe ambisie,\n\nherkou,\n\nherkou,\n\nberou.",
    date: "2018-08-07T10:36:04+02:00",
    handle: "jaysonbeatson"
  },
  {
    id: "5e6616875ee429768df2bbd0",
    title: "Wat de fok is lewe",
    bodyText: "Dis als net vertrekke\n'n Reeks gesprekke\nMaar wat van Ekke?",
    date: "2018-08-15T23:02:49+02:00",
    handle: ""
  },
  {
    id: "5e6616945ee429768df2bbf3",
    title: "AB",
    bodyText: "Sy's famous. Sy's famous soos Koos Kombuis famous en sy skryf vir m\xFD. Sy skryf vir my 'n brief oor haar paaie en draaie aan die oos-kus en deur Engeland. Sy's famous en sy skryf vir 'n onderwyskind uit die frontier, 'n brief oor haar swaarste tyd en politics en die media (en ek's nie eers 'n kankerkind of besonders nie). \n\nSy's famous en sy's my favourite outeur. ",
    date: "2019-07-29T18:29:43+02:00",
    handle: ""
  },
  {
    id: "5e66168d5ee429768df2bbe3",
    title: "\u201CDie Student\u201D",
    bodyText: "Die platform waar almal met \u2018n opinie ewe skielik \u2018n #skrywer word.\n\n\n",
    date: "2019-06-05T21:27:53+02:00",
    handle: ""
  },
  {
    id: "5e66162b5ee429768df2babd",
    title: "Bluebird",
    bodyText: "Fokken skryf jou brief, mens,\nSkryf jou woorde teen my vas, \nBrand dit in ink op my bors uit en kry die blou vo\xEBl uit jou hart se diepste kamers. \n\nEk was ook eens daar. \nBlouste se ontsnap was alleen.\nUnglamorous. Ongemaklik. \nMaar het \xE1l die verskil gemaak. ",
    date: "2019-02-06T21:23:00+02:00",
    handle: "Bukowski_Spoof"
  },
  {
    id: "5e66162d5ee429768df2bac2",
    title: "aandete",
    bodyText: "by die plaaslike mcdonaldskyk jy na jou foonna die tydna iets wat jou aandagoombliklik kan vasvangmiskien die le\xEB coke tussenonsek glo nie in god nieverklaar jy tussen happebig macblaarslaai wat psalms deurjou tande sing\nen sous wat nagmaal\nop op jou lippe vier\nen ek wonder \nskielik hoe ek ooit\njesus christus in jou\nkon gesoek het.",
    date: "2020-02-12T12:59:09+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66163f5ee429768df2baf3",
    title: "Poetry vir Potch",
    bodyText: "My droom is dat ek eendag by jou sal aankom en nie weer hoef weg te ry nie. Dat ons elke aand poetry kan lees tot ons moeg raak vir die naggeluide met die bedlampie aan.  Dat ons by die vlei kan bly om al die wegloop-katte huistoe te neem.  Dat jy op my skoot aan die slaap kan raak en wakker word in my arms. \u201CEk wil poetry lees vir ons kids\u201D s\xEA jy met die po\xEBsie om my kop gevou terwyl ek op jou skoot vertoef. ",
    date: "2019-10-07T19:34:53+02:00",
    handle: "wynandmb13"
  },
  {
    id: "5e66162d5ee429768df2bac4",
    title: "vertoon",
    bodyText: "ek preserveer jou reuk in my geheue\nsoos \u2018n spesimen\nwat dryf in \u2019n consol jar vol etanol\n\n\u2019n drywende ding wat die verlede \nomvou \nen dra op sy mou\n\nek stal jou reuk uit op \u2019n ho\xEB rak \ntussen die oumabeskuitblikke en rooibosteeblikke en danishkoekiekoekieblikke en licoriceallsortsswietsblikke waarvan almal wil onstlae raak by pandjieswinkels\nen ek kan nie bykom om af te stof nie\n\ndie jar vertoon \n\u2019n grotesque embrio\nwat die begin \nen die einde \nvan \u2019n storie vertel \n\nek kyk partykeer terloops na jou reuk \nwanneer ek tee maak\n\nen \nek sien hoe die stof \nwat elke jaar \n\ndigter \n\ndie jar toe vou \nen jou reuk toe vlek \n\nen\ndie nalatenskap van \u2019n probeerslag\nteen die bruin verf van die muur verdwyn",
    date: "2019-07-15T18:41:18+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e66165b5ee429768df2bb4f",
    title: "Altivole, Veneto",
    bodyText: "Deurnat gesweet, \nfiets getrap en vr\xE9k van die honger. \nSonder breakfast begin gery;\nonbewus Sondag hi\xE9r beteken rus.\nSelfs die noodwinkel dut. \nLater brunch op (semi-Americanized) Pizzeria Max se klein trappie-stoep: margherita (teen 'n steak se prys). Plat op my gat. Acqua frizzante in my keel\nQuattro birra in my bloed. \n\nGiovanni het 'n skerp neus en groet oppad uit (ek was sy laaste customer vir die dag). Hy gly in by 'n dof-rooi Alfa 156. Di\xE9 is die platteland. Dis\nanders hier: di\xE9 mense het nasie trots\nen 'n homogene herkoms. \n\nEk ruk Elena Pellizzari (van AirBnB) se skrompelfiets van sy stand af.\nDie horison bewe. Dis sengend. Selfs\ndie ho\xEB groen bome verlep. \nTjierrrr-tjierrrrr-tjierrrr kla die\nmasjien. Ons kruip koelte na koelte. \n\n'n Sportspan se laatmiddag partito is op sy laaste bene by 'n straatkafee. 'n UK Takhaarman hang oor die kroeg; hy maak praatjies met 'n vrou. Is hy die toerleier of oudste van die lot? \n\nUiteindelik het\nek by Carlos Scarpa se graf gaan kniel:\nTomba Brion was sy magnum opus.\nTussen kroe\xEB, Maria-beelde en landbou masjiene staan hierdie off-shutter concrete kunswerk en bevestig stil: skoonheid m\xF3\xE9t tussen die alledaagse bly om waarde te h\xEA. \n\n\n",
    date: "2018-11-28T01:05:41+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e66162f5ee429768df2baca",
    title: "story of my life",
    bodyText: "identifiseer lank genoeg om hulle invested te kry in iets wat lyk soos die ideaal... \n\n...en verloor jouself heeltemal in die proses",
    date: "2019-07-21T21:21:57+02:00",
    handle: "V"
  },
  {
    id: "5e66165d5ee429768df2bb53",
    title: "Om lief te h\xEA is moeiliker as seks ",
    bodyText: "Want wat is lekkerder, maar wat is makliker as om te vergeet daar is \u02BCn skeiding tussen my lyf en joune?\n\nJust remember, diamonds are so precious 'cause it's so fucking hard to find them. ",
    date: "2019-04-19T23:01:14+02:00",
    handle: ""
  },
  {
    id: "5e6616305ee429768df2bacd",
    title: "I'm not a feminist but... ",
    bodyText: "tagging along\nbehind your stiff dick\nthinking it makes you fucking\nmacho. \nIn reality, \n\nyou are \na little dog, \nnot aware of the \nconsequences of\nsniffing out a corpse;\na toddler \nthrowing a tantrum \nbecause he could not eat the sand. \n",
    date: "2019-06-09T09:40:07+02:00",
    handle: ""
  },
  {
    id: "5e66165d5ee429768df2bb56",
    title: "Verlep",
    bodyText: "Die kerkklok luideur die mis.Jy het werk om te doen.Doodmoeg, ja,s\xEA jy twee-uur (oggend),dis oor die harde werk.Dan's dit seker maardala what you must,I guess, jyweet mos wat jy moet.Ek dink slaap,maar anyway. ",
    date: "2019-08-04T08:39:55+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e66163c5ee429768df2baec",
    title: "S\xEA Jy My",
    bodyText: "Soos 'n oranje verkeerslig, \nhunker jy op die grens van besluitneming.\nGaan jy ry, of gaan jy bly?\n\nSo...\n",
    date: "2019-06-17T20:59:55+02:00",
    handle: ""
  },
  {
    id: "5e6616605ee429768df2bb5f",
    title: "An Photo-Poetry Idea",
    bodyText: "We all go to bars, nightclubs 12 hours late and feel that immense emptiness of happy places.",
    date: "2019-08-28T08:39:21+02:00",
    handle: ""
  },
  {
    id: "5e66163d5ee429768df2baed",
    title: "god.",
    bodyText: "jy skryf naby aan jou lyf, jy leef naby aan jou lyf en jy voel aan jou lyf\nEk het aanneem katte. Wat naby aan my lyf slaap. Snags. \nMy kas loop oor van wintertruie wat ek oor my bors kan toetrek \nMy joernaal ontbreek die presence van \u2018n god, maar voel die verdriet en pyn aan van elke straatbrakkie, shelterkat, hawelose kindjie en ou tannie wat bedel by daai KFC stopstraat. ",
    date: "2019-09-22T08:53:46+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616635ee429768df2bb68",
    title: "Lekker ",
    bodyText: "Dis lekker om n mens te wees...... \njy moet net n lekker mens wees!\n",
    date: "2019-12-04T22:39:20+02:00",
    handle: "nina_devilliers"
  },
  {
    id: "5e6616665ee429768df2bb70",
    title: "By Jou",
    bodyText: "Laatnag in die donker\nStap ons hand in hand in die straat\nMy o\xEB is helder en jy \nLag vir iets wat jy alweer op Instagram gesien het\nVir 'n oomblik laat ek gaan\nTot jy my weer nader trek en ek Myself van voor af verloor en vind\nBy jou",
    date: "2018-10-08T19:33:56+02:00",
    handle: ""
  },
  {
    id: "5e6616425ee429768df2bafe",
    title: "Vraag?",
    bodyText: "Is the word Afrikaans, Afrikaans or English in an English sentence?",
    date: "2019-06-26T09:43:39+02:00",
    handle: ""
  },
  {
    id: "5e6616665ee429768df2bb72",
    title: "Skaams",
    bodyText: "Alles en niks. Probeer weer. Ons swel.\n\nNog een dvp?\nNet \xE9\xE9n...\nOulaas.",
    date: "2019-08-18T23:53:27+02:00",
    handle: ""
  },
  {
    id: "5e6616445ee429768df2bb04",
    title: "OL<CPT",
    bodyText: "Iets ongemaklik bevrydend gebeur wanneer jy deur die skanse van nostalgie sien. ",
    date: "2019-06-10T20:19:17+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e66166e5ee429768df2bb8b",
    title: "blou komeet",
    bodyText: "\u2018n blou komeet tref ons planeet\n(mense tril en die aardkors gil)\nen al wat ek dink is om dit in my\nmond te sit om te proe of dit na\nbuitenruimtelike bessie smaak",
    date: "2018-09-18T16:48:15+02:00",
    handle: ""
  },
  {
    id: "5e6616465ee429768df2bb0c",
    title: "Uncle N in Rietfontein",
    bodyText: "Rietfontein is in the Agulhas national park - which was bristling with the variety of protea buds, white blombos flowers reeking like sweet honey, swathes of mauve Erica flowers and the yellow green leucadendron leaves. \nWe drive about 17kms through, and past the Uintjieskuil, Kleinuintjieskuil and the Vlooikraal farms, down into the park with its two wide open fynbos plains stretching parallel to the sea, between the low hills and just managing to hold and delay the receding vleis from leaching slowly into the ocean. The ancient milkwood trees show irrepressable succulent life from the outstretched dried wood limbs burnt in successive veld fires and that have swept these lands most recently 10 years ago \nOn the eastern side is the Soetanysberg a bank of low mountain folds lifting up less than a kilometre from the sea, with wild steep banks rich with grasses and fynbos, rocky outcrops and exposed rock strata running their lines like boundaries across the blue mountain flanks that give body to Renosterkop. \nThe fynbos, the grasses and succulents grow to encroach and embrace the advancing sea life right to the rocky sea edge of Rietfontein se Baai. \nThe rock pools, gullies and small sandy beaches are shaped and washed out by a surging sea that asserts in frothy pounding determination,  and then recedes revealing the rocks, pools, and busy seaside life - the cormorants sentinel perches, kelp banks, the remains of sea creatures - fish, birds, crabs, crustacia, sea snails,  and also all the other debris that the ocean has managed to toss back at the land.\nIt is a place to arrive at in anticipation of the quietness accompanied by a symphony of sea sounds. A moment to feel the release of an unexpectedly deep sigh. It is still and active, with a warm winter's lazy sun and a sea breeze suggesting a colder night's awaiting air. It is a place inviting exploration and offering resting nooks to nestle in. It is the place in which to dip and encounter with the vibrant and startingly refreshing, salty and wet offerings of the ever moving tides.",
    date: "2019-07-05T09:23:38+02:00",
    handle: ""
  },
  {
    id: "5e66166f5ee429768df2bb8d",
    title: "Family",
    bodyText: "Wat is family vir jou en myIs dit die hele stamboomvan oupa en oumaIs dit jou ma en paIs dit jou broers en susterof is dit jou lewensmaat en jou kindersTyd sal leer dis mense wat omgee vir mekaar.Dit is wanneer jy hulp en bystand nodig hetDat hul daar sal wees in goeie en slegte tye.Wat daar is as jy lag of huil en saam jou lag en huilVir jou lief is soos jy isNie jou probeer verander na n mens wat hul self wou wees. Friends could become your familyWant jy kan nie kies wie in jou stamboom is nie maar jy kan kies wie jou opregte family wees is.",
    date: "2019-10-13T19:10:10+02:00",
    handle: ""
  },
  {
    id: "5e6616525ee429768df2bb32",
    title: "Argief-gedig (en nou's jy verloof, bless her soul) ",
    bodyText: "As the sun sets on my face, My thoughts run to the clouds aboveAnd for a moment utmost disgraceFor I had forgotten how to loveThe realization was suddenQuick, like deathAs I lit a cigaretteAnd my soul took a breathSquinting eyes over blue horizon skiesMade me wonder of all the liesYou\u2019ve ever told me.Each one I swallowed like a sip of vodkaBurning a hole where my heart should beThe heart you took with you, the day I told you to leaveThe month after crying so hard I could barely breathe. Stockholm syndromeI was inlove with a monsterMonster who made me believe I was nothing more and nothing lessCatch 22 , I believed I was blessed And here I am today with scars on my legsAnd scars on my wristsFrom the day I wish I could cease to exist\n\nWhile you\u2019re doing great and I\u2019m... fine\nI\u2019ll remember your voice and how you called me mine.\nAnd I hope someday your memory will fade\nAs I hope my happiness will be homemade.",
    date: "2020-03-04T18:48:33+02:00",
    handle: ""
  },
  {
    id: "5e6616735ee429768df2bb91",
    title: "Fokkop",
    bodyText: "Ek het jou nie nodig nie,\nek fok myself genoeg op",
    date: "2019-03-24T20:14:13+02:00",
    handle: ""
  },
  {
    id: "5e66165e5ee429768df2bb57",
    title: "Die woord fok",
    bodyText: 'My fok waar kom jy vandaanWie het fok uit gevindSeker die ou wat gehoor het hys fuck up meen hys nie reg in sy koppie. Die woord rol so lekker van af jou tong.My fok of goeie fok is uitroep van verbaasingEk gee fokol om meen jy voel niksEk het fokol beteken ekt niks sommige mense verstaan die woorde wat jy uiter beter met fokol in.Fok off meen vat die pad. Dis al taal wat baie mense verstaan.As jy die woord fok gebruik in enige sin dra dit net soveel krag. Die mensdom verstaan regtig. waar hul met jou staan met die "add on" fok,fok dit,fok off,my fok,ekt fokol, my fok,fokker',
    date: "2019-07-20T20:34:18+02:00",
    handle: ""
  },
  {
    id: "5e6616755ee429768df2bb96",
    title: "1)",
    bodyText: "Beauty van op my eie bly is: \n\nek kan weer broodrolletjies en kouevleis vir aandete eet en hoef niemand se dietry requirements in ag te neem nie! \n\n(Woollies mayo is s\xF3veel meer tangy as enige ander) ",
    date: "2019-05-02T20:51:32+02:00",
    handle: ""
  },
  {
    id: "5e6616625ee429768df2bb66",
    title: "huwelikskontraksindroom ",
    bodyText: "bewys die teendeeltog wil sommiges beset wordonder die illusie van liefdete bang vir die vryheid wat liefde bied jy weet my adres is nog dieselfde reg langs jou, sou jy my wou vind... ",
    date: "2019-12-11T10:35:25+02:00",
    handle: ""
  },
  {
    id: "5e66167f5ee429768df2bbb5",
    title: "veg of vlug ",
    bodyText: "Jy't nou kinders. \nJy moet hulle nou grootmaak. \nHier. \nGeen meer ander opsie as \nblinde patriotisme nie. \n\nJy was nooit s\xF3 nie. ",
    date: "2019-05-08T10:01:23+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616645ee429768df2bb6c",
    title: "Draw",
    bodyText: "You\u2019re my Tampon Tower Hero!",
    date: "2019-10-01T21:49:30+02:00",
    handle: ""
  },
  {
    id: "5e6616815ee429768df2bbbc",
    title: "*Messias (Verlosser)",
    bodyText: "Nou staan jy stil met jou insecurities en foute voor Hom en vra: \u201DGod, waar is jy nou die \xE9\xE9n keer wat ek jou nodig het? Quite frankly was ek nog altyd fine sonder U. Ek het alles sover alleen deurgemaak. Alles alleen. Ek was elke derde Sondag in die kerk, behalwe laas maand wat ek \u2018n hangover gehad het. Onthou U nie daai een aand wat ek gebid het vir \u2018n werk nie? Daar l\xEA ook \u2018n Bybel langs my bed, en my Instagram bio s\xEA \u201CDaughter of a King\u201D. Ek het selfs laas jaar oorweeg om \u201CFaith\u201D op my pols te tattoe\xEBr.Ek is moeg, Here. In die Bybel iewers* staan dat U vol goedheid is, veral wanneer mens op U staatmaak. Ek wil nie meer myself vir my foute blameer nie, en ook nie hoe ek op ander se foute reageer nie, so nou blame ek U, Here.\u201D*Romeine 11:16-22",
    date: "2019-08-04T17:23:07+02:00",
    handle: ""
  },
  {
    id: "5e6616725ee429768df2bb90",
    title: "Verstaan",
    bodyText: "As selfs die digter niesy woorde verstaan nieis dit minder van'n gedig?Of donner ons alles opin analisesen gevolgtrekkings- verstaan -terwylek jouin die gevoel daarvanprobeer vind?",
    date: "2019-09-20T12:31:00+02:00",
    handle: ""
  },
  {
    id: "5e6616845ee429768df2bbc6",
    title: "Verhouding ",
    bodyText: "(op die ritme van \xE9nige afrikaans pop treffer)S\xEA jy sal my GOEMA en jou hart uit kom S\xEA jy sal my... Oh, okay. Lekker slaap Skat. ",
    date: "2020-02-07T22:06:46+02:00",
    handle: ""
  },
  {
    id: "5e6616785ee429768df2bba0",
    title: "Maklik",
    bodyText: "Fok.Dis so donders maklik vir jou?",
    date: "2019-08-29T08:35:50+02:00",
    handle: ""
  },
  {
    id: "5e66168b5ee429768df2bbdb",
    title: "/ Jan, Deel 1",
    bodyText: "Ouers,\n\nEk rook. \nEk glo nie in Jesus nie.\n(die hoofletter is bloot uit respek vir julle)\nEk is gay.\n\nEk hoop julle sal my kan vergewe en liefh\xEA. Ek weet julle koning sou. \n\n/ Jan\n",
    date: "2018-11-12T21:15:13+02:00",
    handle: ""
  },
  {
    id: "5e66167f5ee429768df2bbb7",
    title: "Doel van my lewe ???",
    bodyText: "Ek ry in my kar wat se briek klaar isKlaar soos ek is moeg en nogmals moegMoet velore verbyEks by 'n T-aansluiting gekom in my lewe ek moet nou aksie neem.Aksie van of regs of links met hul eie uitdaagingsKlaar is klaar het die ouvrou gese met haar hoed op die kop in die bad. Dis hoe klaar ek is moeg en nogmals klaar.Klaar met al die uitdagings en struggle day by day night by night.Terwyl ek doelbewis 'n pad ry waar daar baie trokke op is en in my gedagtes oog neem ek waar en dink ry net in 'n trok in vas en my strugggle is verby net toe sien ek 'n ou langs die pad loop. Iets het my gese stop en tel hom op. Ek laai hom op en hy vertel my van sy struggle in life. Ons gesels en ek besef sy struggle is grooter as myne. Sy kar is gesteel en 2 dae voor Kersdag het hy sy werk verloor en hyt 'n vrou en twee kids.Ek glo hy was God se engel kind wat hom op my pad gestuur het om terug te fight alhoewel ek nie meer die krag het nieDan kom die vraag by my op wat is die doel van my lewe en die struggle om nie 'n einde te maak aan alles.",
    date: "2020-01-07T16:34:29+02:00",
    handle: ""
  },
  {
    id: "5e6616815ee429768df2bbbe",
    title: "Ons Klyntji ",
    bodyText: "Ek's so opgewonde ek deel sommer die nuus met my familie! ",
    date: "2018-07-20T22:13:25+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616865ee429768df2bbcc",
    title: "Corny Alert: maar wat moet uit moet uit",
    bodyText: "In stilte sal ons sit Elkeen in ons oumens stoelOp die strandhuisstoepHeeldag lank tussen kyk, luister en leesPoseidon en Athena vir jouA Little Life en Cottmans vir myDie branders en daeraad sal kom m\xF4res\xEA Latermiddag sal die vuur alles baai in sy gloedEk sal jou asbak leegmaak en pantoffels aandraEn jy sal my leer dat mens eerste die hoender opsit voor die tjoppies en laaste die wors. Jy sal my vashou en ons sal in stilte saam wees. (Hierna, moet ek bieg, is my hart nou heeltemal verlore.)*sal kan uiteindelik verander na... ...het ",
    date: "2020-02-17T20:32:07+02:00",
    handle: ""
  },
  {
    id: "5e6616885ee429768df2bbd3",
    title: "YOU",
    bodyText: "Your Instagram model wana be photos are styled, filtered and liquefied like the big International Stars, but you have a prefab wall in the back ground. More Voortrekker Straat than Kloof, hey babes",
    date: "2019-11-07T20:46:23+02:00",
    handle: ""
  },
  {
    id: "5e66168a5ee429768df2bbd8",
    title: "A.S. ",
    bodyText: "Enigiets, \nmaar nie d\xEDt nie. ",
    date: "2019-08-13T23:03:04+02:00",
    handle: ""
  },
  {
    id: "5e66168a5ee429768df2bbda",
    title: "Oorleef",
    bodyText: "Nope. Tyd wat verbygaan maak lewe. Ons is ouer. Fokken baie ouer as vier jaar gelede. Baie. ",
    date: "2019-12-18T16:15:10+02:00",
    handle: ""
  },
  {
    id: "5e66162f5ee429768df2bac8",
    title: "Halfies",
    bodyText: "Op soek na die halfpad tussen spartel en skater",
    date: "2018-08-01T13:28:27+02:00",
    handle: ""
  },
  {
    id: "5e66162d5ee429768df2bac3",
    title: "Lief",
    bodyText: '"Hallo,"\nhet sy ges\xEA toe sy\nlangs my\nop die donsduvet kom l\xEA\nen met haar vingers warm \ndeur my hare vee. \nEk het haar aangestaar en\nhaar hande \nnie gestop nie. \nSoos ek nie moes nie \n(ek weet) \nhet ek haar stukkie vir stukkie ontleed\nen hi\xE9rop afgekom:\n\nhaar hare\n   wat laatmiddag \n   en vroegoggend\n   en ander tye met lig\n   goud skyn, \nhaar duine, \n   golwend, wat\n   warm vir my o\xEB en\n   koel vir my hande \n   rooibruin l\xEA en bak en\nhaar dale\n   so ruig met \n   swart bebos. \n\nAnyway. \nEk weet nie regtig wat \nek wou s\xEA nie. \n\nMy hande jeuk nog. \n',
    date: "2019-06-30T17:14:53+02:00",
    handle: ""
  },
  {
    id: "5e66163a5ee429768df2bae3",
    title: "Houding",
    bodyText: "Dis vrydag in die Baai, kom ons braai. ",
    date: "2019-09-13T09:29:04+02:00",
    handle: "Kitchendutch "
  },
  {
    id: "5e66163d5ee429768df2baee",
    title: "Weet ",
    bodyText: "Pers. Perspek.Perspektief. Myne. Joune. Gedeelde. Aparte. ",
    date: "2020-01-04T10:00:07+02:00",
    handle: ""
  },
  {
    id: "5e66163e5ee429768df2baf2",
    title: "50",
    bodyText: "Jy vertel van jou Saterdagaand se drank, bar fight, karduike en hoeveel poesse dit ingesluit het. \n\nMyne was guitarmusiek, gemaklike gesigte, 'n offbeat comedy en insig oor sooibrand. \n\nSekere mense is maar browsers gebore: die checkout button is vir ander bedoel. ",
    date: "2019-11-03T21:04:15+02:00",
    handle: "verbatim"
  },
  {
    id: "5e6616445ee429768df2bb03",
    title: "Vashou",
    bodyText: "Ek verstaan nou hoekom jy met 'n kussing tussen jou arms slaapWant daai gevoel van iets vashou, daai tyd wat ek my verbeelding kan gebruik en maak asof dit jou arms is wat versigtig maar propvol betekenis om my lyf vou en my hande wegsteekDaai gevoel wil ek aan vasklouEk wil weer jou kussing in die oggend weghaal as ek jou stilletjies kom opsoek, jou glimlag wakker soen en wens ek kan dit en jou deurmekaar hare vasvang in 'n foto Want vir een of ander rede wil ek jou kussing blyVir een of ander rede is hierdie herinneringe steeds trane trekkers en maak dit dat ek my kussing net stywer teen my vasdrukMaar dis nie meer jy nie. En dit maak my bang dat dit nie weer jy gaan wees nie. ",
    date: "2019-12-16T17:01:11+02:00",
    handle: ""
  },
  {
    id: "5e6616465ee429768df2bb0a",
    title: "My lewe gisteraand: ",
    bodyText: `"Jitte, maar jy't 'n lyfie soos 'n vasgetrapte lychee."`,
    date: "2020-02-23T16:56:11+02:00",
    handle: ""
  },
  {
    id: "5e6616675ee429768df2bb74",
    title: "Weet iemand dalk?",
    bodyText: "Hoe goed is goed genoeg en wanneer is genoeg genoeg? ",
    date: "2019-07-23T21:13:37+02:00",
    handle: ""
  },
  {
    id: "5e6616695ee429768df2bb7a",
    title: "Drunk oke outside Aandklas quote",
    bodyText: '"second degree murder is when your second degree murders you" - drunk oke outside Aandklas',
    date: "2019-04-18T21:11:28+02:00",
    handle: ""
  },
  {
    id: "5e6616715ee429768df2bb8f",
    title: "FOKKEN TROTS ",
    bodyText: "selfs doostrots",
    date: "2019-10-18T08:01:46+02:00",
    handle: ""
  },
  {
    id: "5e6616855ee429768df2bbc8",
    title: "Halfpad mal",
    bodyText: "Dit is herfs hier in my hart\nDie wortels van hartstog uitgedor\nWaters van liefde byna opgedroog\nHierdie is maar net die epiloog\n\nJyt die romanssaadjie nat gegooi\nJou woorde het dit vinnig ontkiem\nen die boompie jonk gebuig\nmaar te ver,geknak,die trane getuig\n\nHoekom het jy in n ander wingerd\nJou hart se wortels neer gaan l\xEA\nAs jy weet by my\nKon jy die vrugbaarste grond h\xEA",
    date: "2019-07-18T23:23:31+02:00",
    handle: ""
  },
  {
    id: "5e6616855ee429768df2bbca",
    title: "4.53 a.m ",
    bodyText: "almal dink dis moerse\npoetic\nmaar hoe gee jy van jouself\nwanneer jy nie eers baie \nvir jouself\nhet nie?",
    date: "2019-07-06T04:53:46+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66168d5ee429768df2bbe2",
    title: "Stilte",
    bodyText: "Ek luister na die stilte. Dit praat met my. n Duif wat koer. Mossie wat tjirp. Buurman wat raas. Motorfiets wat jaag. Selfoon wat bliep. Kardeur wat toeklap. Bande op teer wat sing. Hond wat blaf. Verbyganger wat praat. \nWaar o waar my stilte.",
    date: "2019-05-26T13:59:37+02:00",
    handle: ""
  },
  {
    id: "5e6616905ee429768df2bbe6",
    title: "joao/johan/johan/",
    bodyText: "Braziliaaners lag in k\u2019s oor die foon en\ndit het my vir n oomblik laat double-take, want ek\u2019t eers gedink dit is n tikfout of een of ander selfoon glitch of lost in translation iets, \nmaar toe blaas hy sy see en sonskyn asem oor my nek en dit voel soos n stilwind wat tolbosse deur die Karoo warrel en waai en toe kyk hy na my met sy o\xEB soos die goud van n sonopkoms oor die magaliesberge en toe bring sy seevaarderbloed my terug na my Afrika huis toe ",
    date: "2019-05-26T17:03:54+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e6616925ee429768df2bbec",
    title: "Testament ",
    bodyText: "Mamma,\nek beplan nie om\ngou dood te gaan nie\nmaar \xE1s ek dan\ndan\ngooi my kaal lyf toe\nmet 'n wit laken - \n\nskaam kry ek skaam, maar \nskaam \nwil ek nie by die tempeldeure \nuit nie.\n(En s\xEA tog vir die orrelis\nhy moet vir Sentinel speel.) ",
    date: "2019-05-26T16:26:24+02:00",
    handle: ""
  },
  {
    id: "5e6616935ee429768df2bbf0",
    title: "Vrydag",
    bodyText: "Hoe kry 'n clown fish en 'n tentakel-annemoon dit reg? Hierdie plutoniese-ding. Hierdie een-beskerm-die-ander-ding?\n\nHet iemand al ooit vir die by uitgewys hy is in 'n simbiotiese verhouding? En dat sy teenwoordigheid onontbeerlik is.\n\nHet jy agtergekom hoe kak dit voel om nie genooi te word nie. Is dit simbiose of parasitisme? ",
    date: "2019-10-25T05:50:12+02:00",
    handle: ""
  },
  {
    id: "5e6616335ee429768df2bad2",
    title: "Ek het jou gemis ",
    bodyText: "Ek het jou gemis DNJ\nMy klankbord in die diepe nag\nVan slaaploopheid en wag\nVir dagbreek geluide voor nog n dag\nDie nag is verby en sy is weg\nMy rooikop meisiekind wat was\nEn saam met haar het ek iets verloor\nMy eie donker nag",
    date: "2019-06-20T08:15:06+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616355ee429768df2bad6",
    title: "Julle Almal",
    bodyText: "3 Jaar Terug: Ek wens ek kon my helde ontmoetNou: Ek wens ek kon net met hulle praat",
    date: "2019-09-14T21:02:49+02:00",
    handle: ""
  },
  {
    id: "5e6616395ee429768df2bae0",
    title: " ",
    bodyText: "Hy's great\nmaar hy follow 'n shit ton\nmeisies met nommers\nin hul Insta-name",
    date: "2019-06-30T23:08:35+02:00",
    handle: ""
  },
  {
    id: "5e66163b5ee429768df2bae6",
    title: "Hoekom",
    bodyText: "En eendag sal ons terugkyk en verstaan ,hoekom die duisternis onbeantwoorde vrae in die lug laat rond sweef en deurmekaar harte wat lek oor die vloer smeer",
    date: "2019-06-19T22:09:55+02:00",
    handle: "mada_oosthuizen"
  },
  {
    id: "5e66163c5ee429768df2baea",
    title: "En...",
    bodyText: "Dan is dit nie n regte opsie nie",
    date: "2019-05-25T19:18:02+02:00",
    handle: ""
  },
  {
    id: "5e6616435ee429768df2bb00",
    title: "Ops",
    bodyText: "Ek gaan hier op staan,\nmy kar se neus na die berg toe forseer\nen\nMy hart by jou huis in ops kom oop sny\nEn verloor",
    date: "2018-12-05T17:22:14+02:00",
    handle: ""
  },
  {
    id: "5e6616475ee429768df2bb0f",
    title: "Goed(koop)",
    bodyText: "Grindr en Tindr moet r\xE9rig hulle UX sync. \n\nWeet jy hoe embarrassing is dit om iemand perongeluk te super like net omdat jy hulle profile wil sien.  ",
    date: "2019-08-14T08:34:28+02:00",
    handle: ""
  },
  {
    id: "5e66164c5ee429768df2bb1f",
    title: "SKG ",
    bodyText: "Dit is bedrog wat honest mense se r\xFBe breek. \n\nBedre\xEBrs se r\xFBe was ook eens heel.\n \nWaar sign ek op?",
    date: "2019-06-04T16:35:03+02:00",
    handle: ""
  },
  {
    id: "5e66164e5ee429768df2bb25",
    title: "actualized.org",
    bodyText: "Ek het nou genoeg gehad van my tussen-1am-en-3am self (en daai fokken maargat, kaalkop-swart-t-shirt self-help guru op YouTube). ",
    date: "2019-04-03T00:22:44+02:00",
    handle: ""
  },
  {
    id: "5e6616505ee429768df2bb2c",
    title: " ",
    bodyText: "Hou almal anders dit r\xE9gtig so goed bymekaar? Of speel ons 'n game? ",
    date: "2019-06-24T23:07:13+02:00",
    handle: ""
  },
  {
    id: "5e6616515ee429768df2bb2e",
    title: "Med Lemon",
    bodyText: "Vanaand is dit ek en jy.Hou my warm.Laat my slaap. ",
    date: "2019-08-17T22:43:38+02:00",
    handle: ""
  },
  {
    id: "5e6616575ee429768df2bb41",
    title: "Wil jy? ",
    bodyText: "Nee.\n\nWees orals,\nversprei jou gewig;\ndie mespunt\ngaan deur jou breinstam\nboor, \nfrom the navel\nto th' chops.\n\naan die ander kant-\ndie kanse is seker groter\nmet jou oppervlak\noor die sypaadjie gesmeer. ",
    date: "2019-04-18T16:42:25+02:00",
    handle: ""
  },
  {
    id: "5e6616595ee429768df2bb45",
    title: "White trash",
    bodyText: "Kaalvoet in 'n dranwinkel\nOp 'n Sondag.\nWat is jou rock bottom?",
    date: "2019-12-08T18:51:53+02:00",
    handle: ""
  },
  {
    id: "5e6616595ee429768df2bb49",
    title: "\u2018n Meditasie",
    bodyText: "Wat as mens Peaceful Sleep op \u2018n muskiet sou spuit\nAir freshener op \u2018n lastige vlieg\nKom in jou boud",
    date: "2019-05-29T19:45:29+02:00",
    handle: ""
  },
  {
    id: "5e66165a5ee429768df2bb4b",
    title: "Skilfers op Skouers en Onsamehangende Idees #2  ",
    bodyText: "Dit voel soos stil staan teen \u2018n helse spoed, \nJy, nou, met jou kinders en \u2018n beroep, \nAlles het weg gehardloop van ons, \nOns het ges\xEA ons gaan nog tyd vat, gaan motorfietse deur \u2018n woestyn jaag, of net in die karoo gaan sit, daar naby waar jou ouma hulle geboer het. \nEk sou leer skryf en houtwerk doen, jy wou my leer braai. \nEk sou jou leer werk met geld en kar bestuur. \nOns sou op hou rook di\xE9 keer en suip verruil vir drink, ma \nOns kon net nie by hou nie, teveel kop verloor. \nTe veel goed wat moes gedoen word,  \nek kan nie een onthou nie, \nWas seker geld. ",
    date: "2019-05-29T20:25:29+02:00",
    handle: ""
  },
  {
    id: "5e66165b5ee429768df2bb50",
    title: "Kerkstraat Chronicle ",
    bodyText: "ek wou nie \nvanaand saam met \nhulle kuier nie want ek weet\ndit sou eindig met ek wat alleen \nna my flat toe stap sonder geselskap by \ndie huis aankom en dan ry hulle na hulle gemaklike\nhuisie verder van hier en praat met die honde en maak \nliefde. ",
    date: "2019-05-17T20:25:11+02:00",
    handle: "maar,wat "
  },
  {
    id: "5e6616605ee429768df2bb60",
    title: "abyss ",
    bodyText: "op die ou einde van die dagis die enigste ding wateintlik saak maakdie persoon aan wie jy dinkas jy sit en na die see kyk.",
    date: "2019-10-19T22:43:57+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616745ee429768df2bb92",
    title: '"Dis Net Jy" ',
    bodyText: "En almal anders\nook ewe skielik\n\u02BCn\ndigter. ",
    date: "2019-06-05T22:13:41+02:00",
    handle: ""
  },
  {
    id: "5e6616745ee429768df2bb93",
    title: "Februarie",
    bodyText: "Jy verjaar moreEk het paniekerig geraak toe ek besefValentynsdag is verby en laas jaar was daar nog 'n belangrike forget-me-not.En ek was so spyt toe ek sien dis nog nie verby nieSpyt dat ek nie net kan s\xEA ek het vergeet nieWant nou verjaar jy moreEn eks bang om te vra hoe dit gaanBang om jou te laat dink ek dink nog te veelEk doen miskienMaar ek dink dis net omdat jy verjaarEk hoop dis net omdat jy verjaarEk weet dit gaan oor meer as net jy wat verjaar... ",
    date: "2020-02-18T22:02:45+02:00",
    handle: ""
  },
  {
    id: "5e6616765ee429768df2bb9b",
    title: "Wolkbreukwoorde",
    bodyText: "Na jare lig my vingers braafDie potlood wat asvaal en aan\u2019t sterwe\nIn die stof geb\xEAre l\xEA\n\n\u2018n Maalkolk van gedagtes;\nSkerp skerwe versprei\nOor die landskap van my vergete grond\n\nMet moed vee ek die as vanaf my lippe\nDie wolkbreuk breek voort uit my kake\nEn vloei uit die lood\n\nEindelik kon ek die woord weer kry\nEn my s\xF3 uit hierdie roet bevry",
    date: "2019-08-27T13:58:17+02:00",
    handle: "marinda_dejongh"
  },
  {
    id: "5e6616785ee429768df2bba1",
    title: "Kripties",
    bodyText: "Het jy ooit gevra vir my adres?",
    date: "2019-12-11T14:15:58+02:00",
    handle: ""
  },
  {
    id: "5e66167b5ee429768df2bba9",
    title: "En draai om",
    bodyText: "Ek soek jou in traantrekker filmsIn die windlosekoel aandeTussen die sterre wat die donkerte blink bespikkel",
    date: "2020-01-11T21:51:14+02:00",
    handle: ""
  },
  {
    id: "5e66167e5ee429768df2bbb3",
    title: "Wense",
    bodyText: `Ek't gehoop ek was meer 
as net 'n drie maand plesier
'n vinnige vry en 'n "wens jy was hier"
Maar dis soos hul s\xEA:
"alle goeie goed kom tot 'n einde"
Ek is nie joune, en jy is nie myne`,
    date: "2018-12-17T21:48:40+02:00",
    handle: ""
  },
  {
    id: "5e6616895ee429768df2bbd5",
    title: "stap een ",
    bodyText: "ek gaan vandag 'n pakkie pos ",
    date: "2019-02-17T10:48:19+02:00",
    handle: ""
  },
  {
    id: "5e6616915ee429768df2bbea",
    title: "14 Feb em 'n lang brief",
    bodyText: "Wat moet ek doen op die poeslike ou-Valentynsaand\nSy's seker net so cool soos ek\nEven beter\nMaar wie wens jy was eintlik by jou?",
    date: "2020-02-13T20:10:39+02:00",
    handle: ""
  },
  {
    id: "5e66162a5ee429768df2bab7",
    title: "Kleindorpiesindroom ",
    bodyText: "Dis omtrent 'n week en 'n half vandat ek jou by Springboks gekry het, daar doer ver in PTA. Ek dink ek mis jou, maar dis vroeg in die verhouding en soort van nog 'no feelings attached'. Anders kom mens psycho voor, so asof jy t\xE9 geheg isEn ek moet bieg, my ouers weet nog nie. Maar my tuisdorp weet nou, so my ouers sal binnekort ook hoor. Kleindorpiesindroom noem hulle dit.Fok, hopelik is ek reeds weg voordat dit gebeur. ",
    date: "2019-12-19T22:37:20+02:00",
    handle: ""
  },
  {
    id: "5e66162e5ee429768df2bac7",
    title: "Argitektuur",
    bodyText: "Mag, op jou, sonneblomme val\nVanuit \u2018n goue hemel \nGetroon met geboue van Gaudi\nDaai plek waar ek nooit sal kan wees\n\nMag ek \u2018n sonneblom wees\nWat vanuit daai goue hemel val\nOm jou ligtelik te kan raak met die afkom slag\n\n\u2018n Wens\nDis jy\nIn jou, om jou, naby jou\n\u2018n Wens\nDis jy\nMiskien \u2018n illusie\n\nTe goed om waar te wees\n\nEk lieg\n\nDie sonneblom het reeds hand uit gesteek \nHaar omgedraai na die son\nEn ek, die maan, die nag kom saai\nToe ek, te laat, hand uit steek vir die laaste \nLig, van die goue uur.\n",
    date: "2019-01-20T09:24:26+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6616325ee429768df2bad0",
    title: "slak",
    bodyText: "hy sing en snik\nin my blomtuin\ndat ek onder sy dop\nsal inkruip\nek lag my vet\nduim druk\nsy huis plat",
    date: "2018-12-30T22:50:32+02:00",
    handle: ""
  },
  {
    id: "5e6616365ee429768df2bada",
    title: "Omgekrapte hemelwesens",
    bodyText: "Omgekrapte hemelwesens\nkom haal my in die nag. \nGooi my in \u2018n boks en verklein my, ontruim my-reform\xE9\xE9r my. \n\nHul wondende geloof ideaal maak my fokken naar. \nForseer my om hul denkwyse te aanvaar. \nGeindoktrineer in my hart van verstand, \nis hul kapitalistiese lewensverband. \n\nOp hulle planeet bly almal in karton bokse. \nMense sonder gesigte sit en staar na skerms sonder klanke; met hul dowwe uitdrukkings wat net heeldag sit en skuld af betaal. \n\nHierdie planeet is \u2018n nagmerrie land en in my kop is daar net background sounds.\n",
    date: "2019-01-31T18:05:55+02:00",
    handle: "tanapistorius "
  },
  {
    id: "5e66163c5ee429768df2baeb",
    title: "Nou n Dan",
    bodyText: "Ons almal lei aan of is verlos deur\nEiewaarheidsindroom\nSoms duidelik vir ander\nSoms vir onsself\nSoms nie een nie.  \n\nEn soms soek ons net 'n stukkie appel n banana",
    date: "2019-06-24T23:22:28+02:00",
    handle: ""
  },
  {
    id: "5e66163f5ee429768df2baf5",
    title: "Bitter bloed pt I",
    bodyText: "Hy't bitter bloed ",
    date: "2019-10-21T20:57:40+02:00",
    handle: ""
  },
  {
    id: "5e6616435ee429768df2bb02",
    title: "Ek is nie aanspreeklik aan enige man nie",
    bodyText: "Die duiwel kla my aan elke dag. \nIs jy die duiwel? \nDink jy, jy en jou leefstyl is beter as myne. \nDink jy dat jou rooi bokbaard maak jou 'n man. \n'n Volwaardige man?\n*",
    date: "2019-06-08T22:41:29+02:00",
    handle: ""
  },
  {
    id: "5e66164c5ee429768df2bb20",
    title: " ",
    bodyText: "Blertsie. ",
    date: "2019-11-14T01:15:39+02:00",
    handle: ""
  },
  {
    id: "5e66164d5ee429768df2bb24",
    title: "Sprokieverhaal",
    bodyText: 'Al ooit agter gekom hoe "Disney" dieselfde lees as "Disnetjy"?',
    date: "2019-06-22T11:25:14+02:00",
    handle: ""
  },
  {
    id: "5e66164e5ee429768df2bb27",
    title: "H\xE9don",
    bodyText: "ek wil willens en wetens verbind aan 'n sekte, 'n groep of gedeelde ideaal\n\n'n plek waar irrasionele gedrag regverdig word en Langtermyn haar o\xEB rol vir Kort Plesier\n\n'n satisfying sense of purpose en verantwoordelikheid wat ontspring as jy geglo kan kry in 'n lewe hierna. \n\nSwitch my weer aan, asseblief? \n\n\n\n(en fokof, tog?) \n\n",
    date: "2019-10-14T21:13:40+02:00",
    handle: ""
  },
  {
    id: "5e6616515ee429768df2bb2f",
    title: "geplant/blom",
    bodyText: "in corde meoek wil jou natleilaat groei en grondbelig en bewonderen net daagliks liefh\xEAwant soos Buddha s\xEA:dit sal sonde weesjy sal verstik sou ek waag omjou te pluk",
    date: "2019-10-09T18:47:32+02:00",
    handle: ""
  },
  {
    id: "5e6616555ee429768df2bb39",
    title: " Orange couch",
    bodyText: "Its me and I am in our old living room, sitting on the distinctive orange couch, in front of me a big glass window overlooking the garden, I slowly start sinking into the orange mass, intertwining with stings of white,orange and black, I become enveloped by the sensation of what I assume the feelings of a living room couch would be, i'm not the entire body of it, just a small part. ",
    date: "2019-03-11T08:44:52+02:00",
    handle: "tanapistorius"
  },
  {
    id: "5e6616605ee429768df2bb5e",
    title: "Macbeth",
    bodyText: "sterre, vat vlamen skyn lig waar my donkerbegeertestussen komete en planeteluidrugtig vir aandagskreevat dit saam op dansendesporeen verskiet dit in stof totdit weer afkom aarde toe.",
    date: "2020-02-09T21:47:52+02:00",
    handle: ""
  },
  {
    id: "5e66166c5ee429768df2bb86",
    title: "Berg",
    bodyText: "Ons het begin op n berg\nJy het op een knie afgegaan\nNatuurlik was dit n \u201Cja\u201D\nOp die plat berg, onthou jy?\nMaar dis toe ons jonk was, \nOns planne vol drome en sterre\n\nOns het ge\xEFndig sommer net so\nEk wou nog s\xEA, \nek is lief vir jou\u2026\nek is jammer\u2026\nVergewe my\u2026\nEn toe is ons verby\n\nVandag, het ek jou agtergelaat op n berg\nMy laaste trane oor jou gestort\nn laaste keer my liefde gefluister\nSoveel jare nou verby\nDaars nou \u2018n jy en julle\nEn ek met my eie drome en sterre.\n",
    date: "2019-01-21T22:33:54+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616755ee429768df2bb95",
    title: "Laat gaan",
    bodyText: "Jy het my laat valNou is ek maar tweede handsPorselein gebreek staan ek daarAlleen op die rak",
    date: "2019-11-03T20:09:47+02:00",
    handle: ""
  },
  {
    id: "5e6616785ee429768df2bba2",
    title: "Saterdag ",
    bodyText: "\u2018n Poster van \u2018n markie...\n\n\u2018n Whatapp op \u2018n groepie...\n\n\u2018n kar vol mense...\n\n\u2018n brannewyn speci...\n\nO Fok! Sondag",
    date: "2018-09-09T11:07:26+02:00",
    handle: ""
  },
  {
    id: "5e66167b5ee429768df2bbaa",
    title: "Kan. Nie. Nog. Nie. ",
    bodyText: "#edsheeran\n\nKan iemand my wys hoe om dit af te skakel. ",
    date: "2019-03-25T06:53:12+02:00",
    handle: ""
  },
  {
    id: "5e66167c5ee429768df2bbae",
    title: "Regtig ",
    bodyText: "(ek bedoel:\nprobably nie meer \nof nog \nnie) ",
    date: "2019-06-13T23:00:14+02:00",
    handle: ""
  },
  {
    id: "5e66168b5ee429768df2bbdd",
    title: "Vrede en Lust(ig)",
    bodyText: "Jonk\nDronk\nReg om te pronk",
    date: "2019-05-11T14:23:56+02:00",
    handle: ""
  },
  {
    id: "5e66168c5ee429768df2bbde",
    title: "Shuffle",
    bodyText: "Ek mis jou Spotify playlists",
    date: "2020-01-13T09:29:57+02:00",
    handle: ""
  },
  {
    id: "5e66162a5ee429768df2bab8",
    title: "Soos jy altyd s\xEA - sterkte",
    bodyText: "Noem my jou sielsgenoot\nMaar los my vir die dood\n\nSonder woorde is ek niks\nSo ek het ophou glo toe ek nie meer weet wat om vir jou te s\xEA nie\n\nSonder noise is jy niks\nEn jy kry altyd jou wil\nSo jy wen\nGeluk\n\nDis onregverdig\nDat jy my vir 'n poes gevat het\n\nS",
    date: "2019-06-22T15:58:51+02:00",
    handle: ""
  },
  {
    id: "5e66162c5ee429768df2babe",
    title: "Nooit nie",
    bodyText: "Ek wil altyd met jou praat.  ",
    date: "2019-09-19T15:09:23+02:00",
    handle: ""
  },
  {
    id: "5e66162e5ee429768df2bac5",
    title: "sterk(te) ",
    bodyText: "papiervliegtuie vlieg ook (amper)soos stralers. is hierdie 'n straler ofpapiervliegtuig? ",
    date: "2019-11-16T23:07:17+02:00",
    handle: ""
  },
  {
    id: "5e6616395ee429768df2bae1",
    title: "SSS",
    bodyText: "Zonnebloem pinotage:\nOns was d\xED\xE9re.\n\nHalf vier op 'n Donderdagm\xF4re.\nThor get weer gehamer van binne\nEk en jy\nBloubergstrand. Stadsliggies. \nsand semen see\n(hoekom word oopknoop jeans nog gemaak?) \n\nDit was mooi en\nLelik\nSoos die kerk wil \n\xE9n soos \xE9k wil. \nHard en sag.\nSkeur en vashou\n\nVeilig ry. ",
    date: "2018-12-15T06:40:42+02:00",
    handle: ""
  },
  {
    id: "5e66163b5ee429768df2bae7",
    title: "Oh ja",
    bodyText: "Hang die opTyd vir iets andersDalk iets nuut",
    date: "2019-11-17T21:18:15+02:00",
    handle: ""
  },
  {
    id: "5e66163e5ee429768df2baf1",
    title: "Die Laaste Avondmaal ",
    bodyText: "dit was wel oggenden ons was wel net driemaar dit was ook daar:die brood en die bak en die sous\xA0jy sou ook jou hand uitsteeken ek't dit ook lank reeds geweet\xA0jou verraad verpak in 'n soenek jou Jesus\xA0jy my Judas\xA0en h\xFD die 30 silwermuntstukkedit was wel my laasteen ook ek sterf snags van binne",
    date: "2019-10-05T18:44:04+02:00",
    handle: ""
  },
  {
    id: "5e6616435ee429768df2bb01",
    title: "(Ek)sistensialis",
    bodyText: "Luister mooi hoe beweeg die Aarde. Die assestelsel op kosmologiese standaarde. Verstrooi en ontbind l\xEA my sterrestelsel se punt. In jou pyn in wil ek teleskoop, jou vryheid met eksistensialisme en sielkunde vry koop. ",
    date: "2019-07-28T00:11:20+02:00",
    handle: "wynandmb13"
  },
  {
    id: "5e66164f5ee429768df2bb28",
    title: "eine kleine nachtmusik",
    bodyText: 'Gehry\nCorbusier\nPiano\nKahn\nRogers\nMurcutt\nHadid\n\n"Jy kan soveel meer bereik as wat \nJy glo\nJy kan"\n\n(die gedagte waarvoor ek die \nbangste is)\n\nbeteken jy moet ontsnap uit hierdie \ndwaal van plesier soekery en weer\nconnect met dit wat jou j\xFD gemaak het \nvoor plesier ontdek is. \n\ngefokus\ndetermineerd\nhardwerkend\nprestasie\n\ngoedheid\n\nEn dit verg baie... \nb\xE1ie guts. ',
    date: "2018-12-04T22:10:08+02:00",
    handle: "kanjyglo"
  },
  {
    id: "5e6616535ee429768df2bb35",
    title: "When you've lost your PEness",
    bodyText: "Dieselfde geel en hit-one-miss one liggies groet ons teen 80km/h op 'n gelapte highway. Die dolosse met die sad storie doen steeds hulle ding. Die branders steeds daar. 'n Nuwe voetganger aar oor die Baakens. En dieselfde holrug vaartboggels in Marine Drive. Hierdie is so anders. Tog so bekend. Maar die Here weet... Dis nie meer waar ek wil wees nie. (Ek sien besonders baie uit vir die Beach Hotel se breakfast en view m\xF4re...) ",
    date: "2019-09-20T21:41:27+02:00",
    handle: ""
  },
  {
    id: "5e6616575ee429768df2bb3e",
    title: "Nare liefde",
    bodyText: "Ek hou van jou\nwant jy hou van my.\nDis hoe ek my ego voer\ndit is hoe ek honger bly.",
    date: "2019-07-07T23:10:50+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616635ee429768df2bb67",
    title: '"genoegsaam"',
    bodyText: "net 'n verbloeming, 'n f\xEAnsie byvoeglike naamwoordfor settlingselfgemaakte stagnasiekweek selfbejammeringmik eerder vir di\xE9:eksotiese, eksentrieke, buitegewone rariteitjy verdien dit... ",
    date: "2019-12-30T21:45:05+02:00",
    handle: ""
  },
  {
    id: "5e6616685ee429768df2bb78",
    title: "somerkersfees",
    bodyText: "ek is die swetende gepekelde hamas ek aan tafel siten kr\xEAkkers saam my broer moet trekwat maande lank nie met my ouerspraat niewant my pa dink Danie Visagie is net 'n fasedan kyk ek na die oopgevlekte hoenner en dinkfok dis warmte warm om hier te sit om die vleis vol vlie\xEBasof daar iets vrot onder die vel sitdit wag om te ontplofen dis 'n teleurstellende grappie: what do you call a man with no body and no nose? nobody nose. hahahaha, s\xEA ma. kom ons bid, brom pa. ",
    date: "2019-12-22T19:22:41+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66166f5ee429768df2bb8e",
    title: "Kaapstad ek mis jou",
    bodyText: "Vandag verstrengel Pretoria myDie verkeersligte wat nie werk nieDie sekuriteitsooms wat my nie wil inlaat nieDie tannies wat die heeltyd 'n fokken opinie hetDie bedompigheid van hulle verkrompigheidMaak 'n donderstorm in my losEn vloek-vloek ry ek huis toeMet weerligstrale in o\xEBEn 'n re\xEBnstorm oor my wange.",
    date: "2020-01-31T21:28:25+02:00",
    handle: ""
  },
  {
    id: "5e6616765ee429768df2bb99",
    title: "Etter",
    bodyText: "Ek het n stripper se nommer gekry...Ek wen. Nou foks vir jou",
    date: "2019-08-17T00:26:08+02:00",
    handle: ""
  },
  {
    id: "5e66167f5ee429768df2bbb6",
    title: "Anonieme verlate goed",
    bodyText: "Tot die drank en die doodOns uitgedryf het. ",
    date: "2019-11-11T23:00:42+02:00",
    handle: ""
  },
  {
    id: "5e6616825ee429768df2bbbf",
    title: "Forgot ",
    bodyText: "Don't forget to love me, \nand love me not, \nand love me,\nand love me not...",
    date: "2019-04-12T17:00:13+02:00",
    handle: ""
  },
  {
    id: "5e66168e5ee429768df2bbe4",
    title: "kers-fees",
    bodyText: `Hoe s\xEA jy, Johnny?"Dis 'n donker,dobker land." `,
    date: "2019-12-10T15:50:05+02:00",
    handle: ""
  },
  {
    id: "5e6616305ee429768df2bace",
    title: "4+6+12+13 ",
    bodyText: "Wil steeds een kan leer van vrae vra, eksperimente doen en mooi maniere. ",
    date: "2019-05-21T23:50:35+02:00",
    handle: ""
  },
  {
    id: "5e6616365ee429768df2bad8",
    title: "Streel",
    bodyText: "spiere span\ninleun, loer, vorentoe:\nfluweel kelk\ntrek; sper blaar\n\nneem, \neet, \ndink daaraan...\nspoegstreep\n\nlek; strooikroes\nspikkelbeen en melkwit\nnektrilling; duining\ndybeen en bekken\n\nblinkstreep\nnatkol\nvreugdepoel\nbodemloos\n\ngelaaide granaat,\namper daar! \nklop...pen...de kop\nstuip...trek...kings\n\nbars uit!\nblom oop,\nnektaar! \nskietgee\n\nopslurp\nhyg in \ndit is\nVolbring.",
    date: "2018-08-22T02:45:18+02:00",
    handle: "verbatim\u25A0"
  },
  {
    id: "5e6616375ee429768df2badc",
    title: "Wegneem koffies",
    bodyText: 'Kosbare oomblikkies tussen "onverskillige vreemdelinge"\nen tog \ndankie vir die kitaar. \n\n',
    date: "2019-03-15T18:20:16+02:00",
    handle: ""
  },
  {
    id: "5e66163f5ee429768df2baf4",
    title: "Speaks",
    bodyText: "Dis heilig, net so \nVir jou. \n*Heilig*\n\nVrede",
    date: "2019-08-15T01:21:41+02:00",
    handle: ""
  },
  {
    id: "5e6616425ee429768df2baff",
    title: ".",
    bodyText: "Soms",
    date: "2018-09-18T06:51:52+02:00",
    handle: ""
  },
  {
    id: "5e6616445ee429768df2bb05",
    title: "1 hour and 50 minutes ",
    bodyText: "My stoel in die tande uitgetrek\nEn ek is timely dosed met n variasie; antibiotics, n fokkop, kan nie kots\nmet gate in jou mond nie.\nErgste, my spesialis was goed, gin swelling.\nEk lyk normaal, maar eks nie heeltemal hier nie. ",
    date: "2019-05-30T06:20:21+02:00",
    handle: ""
  },
  {
    id: "5e6616495ee429768df2bb16",
    title: "Jan R. ",
    bodyText: "Aanhou-beweeg-en-geraasmaak\n\nDis wat die liefde is. ",
    date: "2019-07-23T21:12:33+02:00",
    handle: ""
  },
  {
    id: "5e66164a5ee429768df2bb17",
    title: "Gesels",
    bodyText: "ek is nie  vanaand lus\nom te skryf oor hoe\nmy hart pyn of\nhoe jy jouself verwrang het nie\n\nek is nie fokken lus \nom deur papier en ink te huil \noor wat ons verloor het nie\nek wil net weet hoe dit gaan\n\nof jy doodmoeg is na die eksamen\nof jou broer jou nog net so befok maak\nof jou oupa nog sy selfde stories vertel en\nof jou ma nog die hond tee en beskuitjies voer\n\nek is nie vanaand lus \nom te maak asof jy 'n vreemdeling is nie\nWant jy is nie\nek ken jou\n\njou goed en jou sleg\njou sterk en swak\ndit waarvoor jy lief is en\ndit wat jy haat\n\nek weet jy hou van mense, maar verkies stilte\njy hou van flieks, maar jy's verlief op lees\njy kan jou eie pyn hanteer, maar jou hart bloei vir ander\njy het jou naaste lief, maar soek nog na liefde in jouself\n\nen\n\nsoos ek hier l\xEA weet ek\nek is 'n gedagte agter in jou kop\ndaar iewers tussen \nliefde en haat\n\nek is nie vanaand lus om derms uit te ryg of\nom jou te probeer oortuig dat sy gejok het nie\nek is nie Fokken lus om alles uit te sort nie\nvanaand is ek net lus vir bietjie kak praat",
    date: "2018-11-30T18:50:34+02:00",
    handle: "prof_anker"
  },
  {
    id: "5e66164b5ee429768df2bb1a",
    title: "24",
    bodyText: "Ek het nog nooit gebraai op braai-dag nieDit maak my bly.",
    date: "2019-09-25T22:59:40+02:00",
    handle: ""
  },
  {
    id: "5e6616505ee429768df2bb2b",
    title: "Wens",
    bodyText: "Deesdae is jy \nIn elke wens\nProbeer jou uit my\nKop kry\nMaar jy klou vas\nBreek deur my grens\n\nBy jou voel ek\nDie w\xEAreld het by my\n voete kom l\xEA\nElke molekule van jou asem\nTeen my nek\nOp my mond\nCupido se pyl \nHet my hart gewond\n\nNet vir n kort rukkie \nIs jy my high\nWant jy is verdeel\nHoe lank voor ek jou dalk\nVerveel\u2026\n\nEk was nie opsoek\nNa jou\nJy het my gevind\n",
    date: "2019-01-26T13:27:28+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616515ee429768df2bb30",
    title: "cowards",
    bodyText: "sometimes I wonder if the only benefit of being drunk is being able to say you were drunk. ",
    date: "2019-04-22T21:30:39+02:00",
    handle: ""
  },
  {
    id: "5e6616535ee429768df2bb34",
    title: "Dis half 3 in die oggend",
    bodyText: "Dis half drie in die oggend ek het wakker geword as gevolg van m angs aanval in my slaap . In die droom was ons weer beroof en die keer was dit om ons seer te maak. . En wragies al wat ek wil doen is om hom te bel , maar hy gee nie om nie . Hy gee nie  om nie en het nooit . Wat is fout met my dat ek steeds lief is vir hom",
    date: "2019-10-23T02:30:16+02:00",
    handle: "miaradov"
  },
  {
    id: "5e6616565ee429768df2bb3b",
    title: "Dag in - Dag uit",
    bodyText: "2 weke, en ekt nog niks gedink nie",
    date: "2019-04-03T21:38:32+02:00",
    handle: ""
  },
  {
    id: "5e6616575ee429768df2bb40",
    title: "Breakup 2",
    bodyText: "Ek wil nie weer van voor af begin nie\nWant ek ken jou\nEn jy ken my\nEn jou kat hou van my\n\nVolgens jou is ek nie 'n reeks fokkops nie\nMaar een groot fokkop\n\nHoe het ek jou dan minder alleen laat voel? \nHoekom het jy meer begin lees?\nWas dit nie goed om 'n break van Durbanville braais naweekroetine te h\xEA nie?\n\nMaar ek was net 'n fokkop\nEn jy is nie sentimenteel nie\nSo elke gedagte van/vir/oor my\nIs reeds weg",
    date: "2019-01-20T05:08:22+02:00",
    handle: ""
  },
  {
    id: "5e66165c5ee429768df2bb52",
    title: "Wyshede van my ex #1",
    bodyText: "Enigiets kan 'n asbakkie wees as jy water daarin gooi",
    date: "2019-07-04T21:26:37+02:00",
    handle: ""
  },
  {
    id: "5e6616655ee429768df2bb6f",
    title: "Jy is die een wat mooi kan teken",
    bodyText: `Break your own heart.

You played yourself. 

"As ek jou net kon vertel
As ek jou net kon laat sien
Sou ek 'n skilder opdrag gee
Om 'n prent vir jou te verf
En as hy eindelik klaarmaak
As hy sy meesterstuk voltooi
Sou jy weet, jy sou weet
As jy teen die tyd nog vergeet
Hoe ek voel, hoe ek voel
Oor jou"`,
    date: "2019-09-20T14:19:31+02:00",
    handle: ""
  },
  {
    id: "5e66166c5ee429768df2bb84",
    title: "Hemelsbreed",
    bodyText: "Wat ons is, is hemelsbreed\nJy die Hoofletter en ek die punt.\nAmper so breed \nDie uitgestrekte teer tussen\nDie Kaap en Stellenbosch \nMiljoene klippe elk vasgevang in die swart \n\nDie wit lyne lei my na jou\nEn hier op die wit van gedrukte denne\nprobeer ek die miljoene klippe tussen ons in ink naboots \nEk probeer, maar dit ontbreek my\nWoorde\n\nDis hier in die lugblou poele van jou o\xEB, met die swart belynde miljoene klippe daarom \nWaar ek weer tuis kom\nWant dit ontbreek my\nDie woorde, die lyne om jou na jou te lei.",
    date: "2019-01-24T06:15:22+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e66167a5ee429768df2bba6",
    title: "Loneliness",
    bodyText: "Dit is so sad dat die tegnologie so gevorder het dat ons anoniem met mekaar kan praat...baie sad",
    date: "2019-08-03T17:55:53+02:00",
    handle: ""
  },
  {
    id: "5e6616815ee429768df2bbbb",
    title: "Weggesteek",
    bodyText: "Sy het ges\xEA miskienAs jy uit jou comfort zone gegooi wordEn soos 'n vreemdeling in jou eie land voel Sal jy gedwing word om op jou knie\xEB te gaan;Gedwing word om Hom op te spoor;Gedwing word om jou geloof weer te soek en weer te leer hoe om nie net te bid vir bid se onthalwe nieMaar om te bid vir anderOm te bid vir jou familie Maar nog belangriker in jou geval - om te bid vir jouself Maar lyk my die vlaktes van die Noorde is steeds kampioene in wegkruipertjie speelWant - nes myne was 1 jaar terug - is jou geloof nog steedsWeg",
    date: "2020-02-20T20:53:03+02:00",
    handle: ""
  },
  {
    id: "5e6616815ee429768df2bbbd",
    title: "Kannie s\xEA",
    bodyText: "Soms sukkel ek om te glo. Jou papiere is soveel jonger;Jou paadjie baie krommerEn hier sit jy: kort geskeer; 'n Penkop. Glo vir \xF3ns, reguit van Bo. ",
    date: "2019-09-22T00:20:10+02:00",
    handle: ""
  },
  {
    id: "5e6616845ee429768df2bbc7",
    title: "unrequited love",
    bodyText: "Hoe stop mens 'n skreeuende uncontrollable kettingsaag wat alles aan vlarde sny hier diep in die sagtevleis? \n\n\n",
    date: "2018-09-24T21:33:12+02:00",
    handle: ""
  },
  {
    id: "5e6616925ee429768df2bbed",
    title: "gay 2 pedo ",
    bodyText: "Chris, dis mense soos jy wat my uit die kou van jou verkrampte miskoek mentaliteit laat vlieg het na die aanvaardende arms van losbandige, hoererende gays wie aanvaarding en barmhartigheid bied. \n\nBaie soos die Christus waarvan jy eens op 'n tyd gepraat het. \n\n",
    date: "2018-10-04T22:51:04+02:00",
    handle: "\u{1F9D8}\u200D\u2642\uFE0F"
  },
  {
    id: "5e6616935ee429768df2bbf2",
    title: "Mind Control",
    bodyText: "Onbewustelik bewus van jou...",
    date: "2019-03-12T06:07:20+02:00",
    handle: ""
  },
  {
    id: "5e6616295ee429768df2bab5",
    title: "=",
    bodyText: "Soos mense ook maar partykeer... ",
    date: "2019-08-13T17:32:29+02:00",
    handle: ""
  },
  {
    id: "5e66162a5ee429768df2baba",
    title: "Oorkant my",
    bodyText: "Ek het een kant gaan staanAl was die jare al verbyDie konsepJy was te verDaar ander kant die tafelWaar jy uitstaar na die seeEk wou net na jou toe loopAl was daar n stormDit het baie gekosMaar ekt geweetJy was deel van die planOm alles te vergeetNet lief te weesVir mekaar",
    date: "2019-10-10T19:23:39+02:00",
    handle: "verbeeldings.wereld.hartjie"
  },
  {
    id: "5e66162c5ee429768df2babf",
    title: "\u{1F573}",
    bodyText: "glo jou fiksie tot jy gatvol raak",
    date: "2019-10-24T21:51:17+02:00",
    handle: ""
  },
  {
    id: "5e6616325ee429768df2bacf",
    title: "Sondag-saligheid in Southern Suburbia",
    bodyText: "'n kort kortstorie\nOp 'n hoek in Pretoria is Meet On Milner en die Waterkloof minimarket waar my ouma dikwels blomme koop. Dis mid-Oktober en die Jakarandas blom. In 'n ligte sommersbries dwarrel 'n afwaarts om ewige rus op die dro\xEB sypaadjie in te neem.\n",
    date: "2019-10-20T21:50:21+02:00",
    handle: ""
  },
  {
    id: "5e6616395ee429768df2badf",
    title: "Wat meer ",
    bodyText: "Teorie is my witkop, blou-oog perfeksionis ...vrou met die streng streng tong en die sagte hart wat op 'n Vrydag haar neus optrek vir 'n kroeg maar tuis vir ons Tequila skink + Sondagm\xF4re kerk skiep, bid, 'n blowjob gee en in begrafplase gaan rondhang vir gefokusde stilte. ",
    date: "2019-11-23T23:45:22+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6616405ee429768df2baf8",
    title: "Sonde + Belydenis",
    bodyText: "Elke keer die besef, angs, belofte van verandering. \n\n...en dan begin jy weer. \n\nTerminaal gefok (maar vrolik?) ",
    date: "2019-07-03T16:50:08+02:00",
    handle: ""
  },
  {
    id: "5e6616425ee429768df2bafd",
    title: "Brief aan Dawie ",
    bodyText: "Onthou jy nog Dawie?\nhoe ons papier laterne se geheime probeer ontdek het, met highlighters en prit gom?\nhoe ons kamstig swaard gevegte gehad het met skerpste potlode? (ek het nou nog 'n lood merkie waar jy my gesteek het)\nhoe ons saam die wonder van ink en blou lyntjies ontdek het? \nhoe ons skelm briefies aangestuur het en ching chong cha one hout bankies gespeel het? \nEk vermoed sterk dis die laaste keer wat ek sonder inhibisies versot was. Het jy geweet jy het my hartjie gesteel?\nAs dit nie te veel moeite is nie, mag ek die stukkie terug kry nou? Want ek hoop om die nodig te kry.\nSomeday *",
    date: "2019-07-10T21:54:11+02:00",
    handle: ""
  },
  {
    id: "5e6616525ee429768df2bb31",
    title: "dog days ",
    bodyText: "son skyn anders in pretoria in die winter nies ek meer as in die lente stof gloei lekker warm blink in die lig terwyl die lug vol is van jou hare sweef rond met elke stertswaai down nog \u2018n allergex af met gefiltreerde yskaswater kort bietjie klammigheid vir balans elke oggend styf langs my om liefde uit te strek vlieg nog hare rond nies meer en meer maar kyk net hoe straal die son uit jou uit as jy gaap slaap die hele pretoria in jou mond",
    date: "2019-06-04T19:25:48+02:00",
    handle: "andreasvanderhoven"
  },
  {
    id: "5e66165f5ee429768df2bb5b",
    title: "1",
    bodyText: "ek is al 'n hele paar jaar alleen.\ndis seker okay.\npartykeer roer iets in my, maar\ndit gebeur al hoe minder.\nek skryf iets elke dag.\nlankal nie meer po\xEBsie nie.\n",
    date: "2019-01-19T22:19:01+02:00",
    handle: ""
  },
  {
    id: "5e6616615ee429768df2bb62",
    title: "ecdysis>>>exuviae",
    bodyText: "skil jou van my lyf afvervel, klim uitsmyt die herinnering eenkantverlate, vernuwe vryheid soortgelyke seer. ",
    date: "2019-12-30T20:40:33+02:00",
    handle: ""
  },
  {
    id: "5e6616655ee429768df2bb6e",
    title: "Love that comes 1 time",
    bodyText: "My heart is sadSad for my daughterCoz she broke up with a guyA guy that was like a father to my grandson.I pray for loveLove that she needNeed for everMay God bless her and my grandsonWith lots of loveLove that comes just 1's",
    date: "2019-11-20T21:33:52+02:00",
    handle: ""
  },
  {
    id: "5e6616665ee429768df2bb71",
    title: "PS",
    bodyText: 'Dalk is twee weke\noffline\nwat jy nodig het\nom vir my \u02BCn brief te los\nen die PS\nte onthou\n\n(hint: dit begin met\n"ek het jou...")',
    date: "2019-06-15T21:12:21+02:00",
    handle: ""
  },
  {
    id: "5e6616675ee429768df2bb75",
    title: "Druppel gedagtes",
    bodyText: "Ek hou van die Noord-Kaap se re\xEBn omdat dit onvoorspelbaar isNes die terugflitse van hande vashou, van avo toast maak, van onskuldige voorkopsoene en lippe wat nie genoeg kan kry nieEk hou van die re\xEBn omdat jy die druppels onderskatNes ek die kettings van die 'ons' van die verlede heeltemal onderskat hetMaar nes die re\xEBn en die donderweer en die donker wolke verdwynVerdwyn jy ook meestalDis wanneer jy bly, wanneer die re\xEBn begin poele maak in die potholes van die teerpad en die bliksemstrale die stilte en die donker hemel oop skeurDan bewe my hart, nes my kamer se vensterrame, en ek wonder of jy ook nog so nou en dan sulke oomblikke stilletjies smeek om te bly",
    date: "2019-12-02T13:29:23+02:00",
    handle: ""
  },
  {
    id: "5e66166a5ee429768df2bb80",
    title: "Liegstories",
    bodyText: '"Wees net jouself"',
    date: "2019-03-25T20:36:05+02:00",
    handle: ""
  },
  {
    id: "5e6616745ee429768df2bb94",
    title: ".",
    bodyText: "Sy\u2019t per straler haar drome gaan onder soek, los sy vir my  met woorde soos : \n\u201CEks nog kind, ek wil jou meer bied, ek wil die w\xEAreld meer bied\u201D.\n  \nEk\u2019s ouer as sy, maar dom teen wat die w\xEAreld kan gee,  \nEk\u2019s nie well traveled nie, en ek draf nie langs see punt nie, \nEk sweef in die voorstede, \nEn eks gelukkig hier.  ",
    date: "2019-06-04T19:10:00+02:00",
    handle: ""
  },
  {
    id: "5e6616775ee429768df2bb9d",
    title: "Uiteindelik ",
    bodyText: "Ek is klaarklaar gespeel, klaar gebruikklaar gemanipuleer, klaar gehoopklaar gewens, klaar gedroomklaar gedink, klaar gevoelEk is moegvan jou dieselfde wees, van jou aan-af gevoelensvan jou glimlag wat by my spookEk is steeds liefvir die man vir wie ek geval hetvir jou blou o\xEBvir jou stemMaar my hart kan nie meer breekelke keer as jy nie 'n boodskap stuur nieMy hoop kan nie meer gesteel word deur jou 'miskien' nieEk is klaar en moeg van liefwees, van seer wees, van teleurgesteld wees.Net klaarNet moeg",
    date: "2019-07-13T18:51:23+02:00",
    handle: ""
  },
  {
    id: "5e6616775ee429768df2bb9e",
    title: "Yah, n\xE8? ",
    bodyText: "En nou? En nou? En nou?En nou?wat nou? ",
    date: "2019-07-13T21:12:03+02:00",
    handle: ""
  },
  {
    id: "5e6616795ee429768df2bba3",
    title: "Moedersdag",
    bodyText: "Hi Ma -\n\nHiers 'n orgidee van Woolworths, want ek ken jou nie.\n\nArno",
    date: "2019-05-12T11:49:20+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616795ee429768df2bba5",
    title: "dis reg, ja. ",
    bodyText: "fok,ek wil jou weer sien, Ma, ek sweer. ",
    date: "2019-09-15T22:22:28+02:00",
    handle: ""
  },
  {
    id: "5e66167b5ee429768df2bbab",
    title: "Kak",
    bodyText: "\u2018n Opmerking oor jou opinie dat jy baie kak na die verhouding toe bring, in die lig van vandag se omstandighede:\nJy kak vir \u2018n vale\nEn ek sit met die besef dat ek selfs d\xE1\xE1rdie tipe kak sal opeet vir jou",
    date: "2019-08-29T20:59:53+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66167c5ee429768df2bbad",
    title: "Dit net jy",
    bodyText: "Dis dalk die probleem,\ndis altyd net ek.\nEk is altyd by die woonstel, of by die studio. Jy weet waar ek is, maar ek wag.\nWag vir vriende, wag vir die ketel, wag vir my punte, wag vir geld\nwag wag wag\nmaar die ergste is \nom so lank \nte\nwag\nvir liefde.\n\n",
    date: "2018-10-15T00:17:37+02:00",
    handle: ""
  },
  {
    id: "5e66167d5ee429768df2bbaf",
    title: "Mens",
    bodyText: "Op laaiAf laaiKoopVerkoopOp laaiAf laaiKookEetAf laai",
    date: "2020-02-05T14:19:46+02:00",
    handle: ""
  },
  {
    id: "5e66167e5ee429768df2bbb4",
    title: "eks trale",
    bodyText: "in verband\nmet gebreekte arm",
    date: "2019-12-12T15:40:02+02:00",
    handle: ""
  },
  {
    id: "5e6616855ee429768df2bbc9",
    title: "Die lewens boom",
    bodyText: `Ek sit en kyk na 'n boomSy takke is droog met geen blare in sig, nes 'n mens wat uit gedroog is deur hartseer en pynEens was hy ' n boom met blare aan nes soos 'n mens wat kans gesien het vir alles in die wereld.Eens was die boom daar vir beskutting nes so was jy 'n beskutting vir soveel mense.Ek sien die wortels van die boom wat diep in die grond gegroei het eens op "n tyd nes 'n mens hom gevestig het met sy voete sterk gestaan het teen alles wat sad was maar nou is dit ook tot niet. Die lewe of die mensdom het jou oorwin. Al wat oor bly is om die boom af te kap en 'n nuwe boom te plant net so mense kind van voor moet begin en gou. `,
    date: "2019-10-08T15:48:40+02:00",
    handle: ""
  },
  {
    id: "5e6616875ee429768df2bbce",
    title: "As Ek Geweet Het",
    bodyText: "Ons laaste ontmoeting, saai herhalings uit \nop die skerms in my brein\nEn die blou van jou o\xEB ruk my siel uitmekaar\nAs ek geweet het, wat ek nou weet...\nAg wat maak dit saak? ",
    date: "2019-06-11T14:48:33+02:00",
    handle: "miababy_95"
  },
  {
    id: "5e66168a5ee429768df2bbd9",
    title: "Lief? ",
    bodyText: "Lus?Ja.Lief?Nee.D\xEDs noudonners jammer. ",
    date: "2019-07-23T21:31:19+02:00",
    handle: ""
  },
  {
    id: "5e66168c5ee429768df2bbe0",
    title: "Geel skynsels ",
    bodyText: "Dit was mens weesMet al die skakerings\nElke fout het n doel\nVir elke traan is daar n rede\nAl sit jy alleen \nOp die koue trappe\nArms oor jou bene met jou kop tussen jou arms\nDit was maar net nog n geval\nNog n manier\nOm jou te leer \nVan al die skakerings\nGeluk\nAlles bly ingemeen\nAl is dit hoe seer en al sit jy met n glimlag\nJy was op die rigting\nVan geel skakerings\nToegepas aan n lewens les",
    date: "2019-10-10T15:37:14+02:00",
    handle: "bejahartjie_17 "
  },
  {
    id: "5e66168f5ee429768df2bbe5",
    title: "Hanr\xE9 ",
    bodyText: "Hoe is ek die een wat seer kry?Ek wou hierdie pyn vermy Ek wens jy kon bly by my Is jy okay? Of het ek jou verniel Net soos my siel ? Jy stry met my Ek stry met jou Ek het my eie graf gegrou As gevolg van n ander ou En nou ? Nou l\xEA ek en rou ",
    date: "2019-10-16T12:35:20+02:00",
    handle: ""
  },
  {
    id: "5e6616295ee429768df2bab6",
    title: "Take A Chance On Me...",
    bodyText: "I am a pitch-black sea, \ndark, deep and full of secrets.\nSometimes a storm\nrages within my soul.\nIt might not be easy to navigate\nthe various depths of my being\nThe question is:\nAre you going to sink or swim?\n",
    date: "2018-11-08T20:18:36+02:00",
    handle: ""
  },
  {
    id: "5e66162b5ee429768df2babb",
    title: "Foto's op 40. ",
    bodyText: "Wat as ek eendag met 'n vrou trou, Jou onder jou gat skop en 'n berader word. Sal daar dan nog genade wees? ",
    date: "2019-12-21T22:24:08+02:00",
    handle: ""
  },
  {
    id: "5e6616375ee429768df2badb",
    title: " agterdeur praatjies",
    bodyText: "without saying a word, a cigarette is a good conversation. telepathically speaking with smoke signals. the sun laughed at the moon because he is white. die gelaatskleur van jou gesig agter \xF1 agterdeur sigarette neurie saam die konvooi karre in die pad oppad na werke toe waar hulle probably nie mag rook nie. ek dink Francois praat kak as hy s\xEA dit raak beter as jy ouer raak. burning out bro, fokken stadig maar seker. ons is leefjags as dit kom by wyn en sekspraatjies.",
    date: "2018-09-04T15:48:22+02:00",
    handle: "paula_stxphxnie_kruger"
  },
  {
    id: "5e6616375ee429768df2badd",
    title: "Wonder",
    bodyText: "AllesKom so donders maklikVir jou.Ek is verslaan obsessief",
    date: "2020-01-04T07:47:34+02:00",
    handle: ""
  },
  {
    id: "5e6616385ee429768df2bade",
    title: "klein.",
    bodyText: "Dis die klein dingetjiesDie uur lange whatsapp call, waarin jy my probeer help formules uitredeneer.Al het nie een van ons n clue nie. Dis die random oproepe oor klein goedjies wat jy vergeetOf iets wat jy wil weetOf oor iets wat jy wil eet.Ons is dalk ietwat vreemd. Dis die klein dingetjies, wat maak, my lam dat, JY, myElke dag steeds so verlei. Ek elke dag jou liewer het as wat ek myself het, maar dit vat ook nie baie nie.Ek weet jys nie een vir gevoelens nie. So ek sal maar voel namens ONSEn eks fokken lief vir jou.  ",
    date: "2019-08-01T22:39:57+02:00",
    handle: ""
  },
  {
    id: "5e66163b5ee429768df2bae8",
    title: "A man called Alaji that made my day",
    bodyText: "I was sitting in my car under a tree waiting for my next trip at mall busy with my own thoughts. I met a man.The most friendly person that made my day. a person with so much passion and a great smile. For that moment me and him connect. We spoke about respect and life  What a awesome person. Never judge a book by its cover.He was looking after peoples cars. Most people just ignored them Ask yourself next time if it was you how would you feel to stand in the sun waiting for a tip or two.Why are people so cruelCoz you think you better than them just remember it could have been you.While i was watch him running towards a women to assist her. I watched her from a distance. Although she had a brand new car she did not even give him a cent or two.  Which could have made a difference for him to buy the next meal .I realised a brand new car cant buy Class nor respect. Respect others from where they come from and who they are. He maybe just looking after cars but he has a soul tooHow ungreatfull are people because at the end of the day the sun shine on everyone not only on you.",
    date: "2019-10-13T21:17:58+02:00",
    handle: ""
  },
  {
    id: "5e66163b5ee429768df2bae9",
    title: "Charismatiese godsbeeld",
    bodyText: "\u201CKan ek jou iets vra?\u201D(As iemand my foto neem\ndit is genoegsaam.)\n\n\u201CWanneer het jy gevoel jy\u2019s nie mooi nie?\u201D\n(In retro(in)speksie soek ek my gietvorm in die foto)\n\n\u201CVoel jy ooit jy\u2019s mooi?\u201D\n(\u2018n Begaafde wys my uit)\n\nDit is genoegsaam. \nAs iemand my foto neem;\nOf \u2018n foto saam my neem.\n\nDie sterrestelsel van my hemelruim\nAstronomie van fyn gesigbeendere \n\ndie bewo\xEB een. ",
    date: "2019-12-30T21:10:33+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e66164e5ee429768df2bb26",
    title: "Please",
    bodyText: "Please don\u2019t break me.I\u2019m strong,But I\u2019m tired of putting myselfback together again.",
    date: "2019-08-14T18:41:13+02:00",
    handle: ""
  },
  {
    id: "5e6616535ee429768df2bb33",
    title: "god.",
    bodyText: "Ek het al lewe ervaar. Ek was al eensaam, alleen enangstig tot in my die bene wat my skelet opmaak. Die donkerte van depressie het al sy tol ge\xEBis en bewyse gelos op my lyf. Weg gekwyn tot net die angs oorbly. Tekens gelos van dit wat was en sal wees - \u2018n droewige bestaan. Ek het al lewe ervaar en god was ni\xE9 sinoniem met liefde nie.",
    date: "2019-07-23T07:28:17+02:00",
    handle: ""
  },
  {
    id: "5e6616655ee429768df2bb6d",
    title: "Jy",
    bodyText: "Jy met jou skateboard onder jou armJy moet jou Brek graad so arm Jy met jou Calvin Klein\u2019s, warmJy met jou stilstuipeJy wat skree, \u201CJy\u2019s myne\u201DHoekom voel ek of jy my meer lief het as ons uit mekaar val. Jy",
    date: "2019-09-21T13:54:00+02:00",
    handle: ""
  },
  {
    id: "5e6616685ee429768df2bb77",
    title: ".",
    bodyText: "Alles, dan niks, dan alles",
    date: "2019-05-28T20:55:16+02:00",
    handle: ""
  },
  {
    id: "5e66166b5ee429768df2bb82",
    title: "\u{1F3B8}",
    bodyText: "And maybe one dayWhen god takes me away I\u2019ll be alright,The truth will shine bright",
    date: "2019-09-02T20:33:19+02:00",
    handle: ""
  },
  {
    id: "5e66166e5ee429768df2bb8a",
    title: "Vrees jou selfie",
    bodyText: "VREES\nJOU\nSELF\nIE!",
    date: "2018-08-13T15:07:06+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6616775ee429768df2bb9f",
    title: "My kruis",
    bodyText: "Sommige skryf liefde in \u2018n ring\nMaar wat is die waarde van \u2018n ring sonder liefde\nSommige skryf liefde in \u2018n seremonie\nMaar al die seremonie in die w\xEAreld kan nie beloftes hou nie\nSommige skryf musiek om liefde te verklaar\nMaar die mooiste akkoorde raak net nog \u2018n stukkende snaar\nDie liefde word net in \u2018n hart gesing\nEn net in \u2018n hart gehoor\nEk skryf liefde maar teen my kruis\nDalk sal jou hart my vind daar",
    date: "2019-03-02T18:37:07+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e66167a5ee429768df2bba7",
    title: "Fop vs Dink",
    bodyText: "Pas die link jou persona, of het jy dit gelees? ",
    date: "2019-04-25T10:54:19+02:00",
    handle: ""
  },
  {
    id: "5e6616915ee429768df2bbeb",
    title: "lekkerte",
    bodyText: "Daar het 'n klein boom opgekom. Toe word dit afgebliksem deur 'n snoeisker mentaliteit. ",
    date: "2019-10-03T22:42:36+02:00",
    handle: ""
  },
  {
    id: "5e6616925ee429768df2bbee",
    title: "Alleen",
    bodyText: "Ek is alleen...\nJy is alleen...\nHoekom kan ons nie maar saam alleen wees nie?",
    date: "2019-04-06T20:37:27+02:00",
    handle: ""
  },
  {
    id: "5e66162d5ee429768df2bac1",
    title: "Pa",
    bodyText: "In vro\xEB oggend ure\nBid ek vir jou Pa\nEk huil want magteloosheid\nmaak my smekend voor God\n\u201Cwat is die mens dat U aan hom dink\u201D...\nPa jy bloei en bloei\nBloei die lewe se seer en teleurstelling\nBloei hoop en wanhoop\nBloei swaarkry en vloek\nEn ek\nEk bid vir jou Pa\n\u201CHere, as dit so moet wees, verlig sy leiding\u201D\nEk is jammer Pa\nJammer ek was jou \u201Cdonkie-kind\u201D\nJammer ek was die rebel\nJammer oor baklei en seermaak\nEk bid vir jou Pa!\nEk wou h\xEA jy moes meer wees\nJy moes my held wees\nJy moes my beskermer wees\nJy moes d\xE1\xE1r wees\nEk is jammer Pa, vergewe my\nEk bid vir j\xF3\xFA Pa!",
    date: "2019-07-06T10:07:51+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616335ee429768df2bad3",
    title: "Said everyone, always ",
    bodyText: "Goeiem\xF4re liewe bure!Vriende en;Kykers met groen glure!\xA0Vandag is die dag! Die dag vir ons nasie!Die dag vir ons kleine nasiese hopeloos te veel fokken administrasie!\xA0Gaan bou jou mure! Versoek vriendelik(maar sonder verset, almal om te verkas) In hierdie gekke laaste ure. En Bou... bou daardie administrasie-mure. ",
    date: "2020-03-04T09:17:57+02:00",
    handle: ""
  },
  {
    id: "5e6616415ee429768df2bafb",
    title: "Bovril broodjies + tee. ",
    bodyText: "My gevolgtrekking is dat die antwoord altyd binne-in l\xEA. Binne in 'n bottel Merlot. Binne-in 'n vars gebakte broodjie; binne in die self. Hierdie besigheid van lief raak vir een iemand is 'n lekker ding: daar's nuwigheid en veiligheid. Maar daar is aspekte van 'n vriendin wat ek tog sou wou eksploreer, maar omdat sy getroud is, is dit 'n taboe. My k\xEArel staan gemaklik op vir die goed wat my plat op my gat laat. En ek's dollief vir hom daarvoor. En 'n ander vriend se manier van kyk na die w\xEAreld is s\xF3 vars; wens ek kan meer van sy teenwoordigheid h\xEA. Maar om lief te wees; dit te s\xEA, is blykbaar 'n onding. Dit voel na kompleksiteit omdat die klassieke basiskodes verlore geraak het en nou's dit eers weer tyd vir 'n herontdekking van die wiel. Terug na antieke Griekeland, asseblief! (Plus Life Hospitale, Android, Carl Rogers en Zaha Hadid.)  Sela. ",
    date: "2020-03-07T00:15:15+02:00",
    handle: ""
  },
  {
    id: "5e6616485ee429768df2bb11",
    title: "Kop Na Bo",
    bodyText: "Ek was meer as n jaar laas by die see, ek bly 30km weg. Swem ons nog?Dryf ons? of survive ons net-net, Kop bo water op feestyd",
    date: "2019-12-31T16:53:21+02:00",
    handle: ""
  },
  {
    id: "5e66164b5ee429768df2bb1b",
    title: "Julle beweeg te donners vinnig",
    bodyText: "Ek bel jou om te s\xEA dit is amper NovemberDie somer was tot nou toe nog net sluipvoets in die gangeMaar vanoggend het hy homself voorgestel\nVan voor af\n\nVanaand was soos die aande wat ek so graag onthou\nElke amper-November word \u2018n kind in my wakker\nEn ek ruik koerantpapier en moerkoffie\nDie wereld word rooi en groen en moerbei\nGroter en harder en besiger en laf\n(Daar is \u2018n kersboom geraamte op die straathoek in Durbanville, soos \u2018n mammoet wat gaan sterf het en net so bly staan)\n\nDie maan le met sy stert in die see\n\u2018n Onbekende spar laat my altyd aan vakansies dink\nPerskes gekoop by die man wat dit in bokse by ons voordeur kom wys\nFisante in die erf langsaan ons\nHulle is banger vir my as vir jou\n\nEn ek mis alles wat was\nEk verlang na elke sekond agter my\nAs alles net dieselfde wou bly\nAs alles net vir n rukkie langer dieselfde wou bly",
    date: "2019-10-26T22:55:32+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66164d5ee429768df2bb22",
    title: "My liewe bure. ",
    bodyText: "Wanneer hulle nie snork nie,Naai hulle luidkeels. ",
    date: "2019-09-14T23:36:41+02:00",
    handle: ""
  },
  {
    id: "5e66165a5ee429768df2bb4a",
    title: "Eerste soen",
    bodyText: "Is dit net ek, of is die eerste soen altyd ongemaklik?Die huiwerige nader beweegDie uitgehongerde betasDie fiksie wat voet vindEn die werklikheid wat jou op hol sitEn dan die wegbreuk vir asem skepEn die emosies en lus wat dan in die lug bly hang",
    date: "2019-11-27T20:42:02+02:00",
    handle: ""
  },
  {
    id: "5e66165b5ee429768df2bb4e",
    title: " ",
    bodyText: "Download my",
    date: "2019-08-31T12:07:10+02:00",
    handle: ""
  },
  {
    id: "5e66165d5ee429768df2bb55",
    title: "Re: Wees net hier",
    bodyText: "'hier'\nl\xEA op \u02BCn mespunt\nnes die see se groen;\nnes vir ewig.\n\nVersigtig,\nversigtig. ",
    date: "2019-04-17T22:00:10+02:00",
    handle: ""
  },
  {
    id: "5e6616615ee429768df2bb61",
    title: "Hoekom is dit so complicated?",
    bodyText: "Jy is in die liedjies wat ek luister, en die stories wat ek lees\nNou probeer ek die leemtes vul met\ndie dinge wat nie meer j\xFD is nie\nDit help my om te vergeet,\nwant gewoontes is moeilik om af te skud...v\xE9ral die feit dat ek jou mis\n",
    date: "2018-12-12T17:38:13+02:00",
    handle: ""
  },
  {
    id: "5e6616625ee429768df2bb65",
    title: "\u201CMooi ges\xEA\u201D",
    bodyText: "Hou aan skryf.Skryf my nader aan jou.",
    date: "2019-09-16T21:59:54+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6616675ee429768df2bb73",
    title: "You Are",
    bodyText: "just another thought\nan idea\n.\nloss leading \nAnd alone ",
    date: "2018-11-19T20:19:34+02:00",
    handle: ""
  },
  {
    id: "5e6616695ee429768df2bb7b",
    title: "Sin/seer",
    bodyText: "Net omdat dit sin maak\nBeteken nie dat dit nie seermaak nie",
    date: "2018-10-02T15:25:06+02:00",
    handle: ""
  },
  {
    id: "5e6616765ee429768df2bb9c",
    title: "\u2606fish + vennote ",
    bodyText: "Baby, ek dink ons moet die dildo b\xEAre voor my vriende oorkom. Jy weet, ongemaklike vrae en so. ",
    date: "2019-06-12T01:12:20+02:00",
    handle: ""
  },
  {
    id: "5e6616805ee429768df2bbb9",
    title: "Sosiale Media Versetting\xA0",
    bodyText: "op Instagram:is hy gemutemaar jy's nog loudop\xA0 Facebook:is hy unfollowmaar I see you first\xA0op WhatsApp:\xA0chat net julle\xA0liefling net julle\xA0\nen ek?\xA0\n\nek word online ignore",
    date: "2019-08-03T21:02:00+02:00",
    handle: ""
  },
  {
    id: "5e6616805ee429768df2bbba",
    title: "Donker \u{1F64F}\u{1F3FF}",
    bodyText: "\xF1 droom begin in \xF1 donker hoek eers van binne dan na buite",
    date: "2018-08-05T17:50:02+02:00",
    handle: ""
  },
  {
    id: "5e6616825ee429768df2bbc1",
    title: "Toe vind ek jou",
    bodyText: "Ek soek jou tussen goudborrels En bierTussen slopperige burgers en Siedaar! Jy's hier.",
    date: "2020-01-11T22:26:33+02:00",
    handle: ""
  },
  {
    id: "5e6616835ee429768df2bbc3",
    title: "Teerpad ",
    bodyText: "Strelend\nSag sak \nJy op \nMy rou\nRug uit\nEn se\xEBn \nDie ou \nOu oppervlak \nMet jou \nVet nat \nDruppels o, \nKaapse \nWinterre\xEBn \n",
    date: "2019-06-04T01:34:47+02:00",
    handle: ""
  },
  {
    id: "5e6616835ee429768df2bbc4",
    title: "uh",
    bodyText: "Here, gee my krag",
    date: "2019-03-17T19:44:27+02:00",
    handle: ""
  },
  {
    id: "5e6616865ee429768df2bbcb",
    title: "11.05.19",
    bodyText: "Die somtotaal van wat\nek vandag verteer het:\n'n salami stick,\n'n nartjie,\n'n peer (nie myne nie), \n'n halwe appel (wel myne), \n'n halwe slab dark chocolate, \nnege ure van George se son, \nen die geskiedenis van die sonate. Dit \n\nklink soos \u02BCn\nonvaardige, onvoltooide\npostmoderne gedig. ",
    date: "2019-05-15T12:24:50+02:00",
    handle: "ek.is.anouk"
  },
  {
    id: "5e66168a5ee429768df2bbd7",
    title: "Almal eet vleis in Potchefstroom",
    bodyText: "Lees: intersectionality\nKonteks: minority, you don't matter that much\nGevoel: frustrasie\nHoop: maak julle o\xEB oop!",
    date: "2018-11-09T18:52:54+02:00",
    handle: ""
  },
  {
    id: "5e6616925ee429768df2bbef",
    title: "Christiaan '94-'14",
    bodyText: "I want to text you.\nI want to shout at you.\nI want us to grow apart like friends do.\nI want us to be passionate like lovers.\nI want to be angry at you when we fight.\nI want to miss you knowing I'll see you again.\n\nBut you're gone. ",
    date: "2019-01-19T11:23:37+02:00",
    handle: ""
  },
  {
    id: "5e6616955ee429768df2bbf7",
    title: "Ai tog. ",
    bodyText: "En daar vernietig jy, met agt onsamehangende woorde, my hele w\xEAreld en al my drome en asof dit nie genoeg was nie smyt jy toe sommer my laaste greintjie hoop ook by die deur uit...",
    date: "2019-10-09T19:59:55+02:00",
    handle: ""
  },
  {
    id: "5e6616945ee429768df2bbf4",
    title: "mONSters",
    bodyText: "Wat help hoop tog in anyway, ons soek quick fixes in plaas van long term commitment......en vir 'n tydjie hou dit die monsters in ons koppe stil...",
    date: "2019-09-01T16:17:10+02:00",
    handle: ""
  },
  {
    id: "5e66169f5ee429768df2bc14",
    title: "onnoselle ek",
    bodyText: "wat gedink het jy gee om                'n fok",
    date: "2019-10-05T09:06:09+02:00",
    handle: ""
  },
  {
    id: "5e6616a05ee429768df2bc17",
    title: "Ps. 45",
    bodyText: "En die here vluister aan haar : \u201CLaat hy net met jou tiete speel, los die res vir later\u201D#bangbros",
    date: "2019-08-01T21:35:55+02:00",
    handle: ""
  },
  {
    id: "5e6616a15ee429768df2bc19",
    title: "It\u2019s bad again",
    bodyText: "Dinge gaan alweer nie goedEk mis jou meer as ooitEk het teveel onvoltooide werkEk se nie wat ek voelEk weet nie heeltemal wie ek isEk probeer myself vindEk mis jouEk wonder waar jy isEk slaap minEk eet teveelEk mis jou Ek eet te minOns het alweer ophou praatEk weet alweer nie wie ek isEk het nog nooit geweetEk wonder of jy my ook mis. ",
    date: "2019-09-23T09:53:50+02:00",
    handle: ""
  },
  {
    id: "5e6616a95ee429768df2bc35",
    title: "Unspoken rule",
    bodyText: "As ons net vriende is, mag ek dan nie s\xEA: \u201CEk mis jou\u201D?",
    date: "2018-12-11T21:51:43+02:00",
    handle: ""
  },
  {
    id: "5e6616af5ee429768df2bc47",
    title: "Liefde, dood en die illusie",
    bodyText: "Die tyd breek aanNuwe jaar wat voor leWees goedHou my hart een kantMy gedagtes in die wolkeWeerstand van die verledeEk gaan netWant ek moetDis iets nuuts.Dis iets soets.Tyd het my die illusie gegeeVan menseDie dood was voor mySoos ek terug gekeer hetMaar die liefdeEk pleitVersot.Verslaaf.aan die liefdedie dooden die illusievan die lewe",
    date: "2019-12-08T23:25:22+02:00",
    handle: ""
  },
  {
    id: "5e6616c55ee429768df2bc76",
    title: "Oktober ",
    bodyText: "Ek het al sewe paragrawe doodgekrap\noorgeskryf\nWeer doodgekrap\nKoffie Gaan maak\nEn my laaste sigaret gerook\nEk sukkel\nDeesdae sukkel ek",
    date: "2019-10-02T09:35:50+02:00",
    handle: "miababy_95"
  },
  {
    id: "5e6616c65ee429768df2bc7c",
    title: "om pooltafels",
    bodyText: "om pooltafels en lang biere tussen vloekwoorde en sigaretrokerssonder autocorrect en sonder regretsloop ons regop, praat ons reguit lees gedigte en rambling bonesstreel oor die voue van ons verledetot ons moet gaan chips koop by die engenen kleintwak praat met ubermansmet name soos haroun en elvis graeme en kudakwashe",
    date: "2019-07-12T00:23:32+02:00",
    handle: "toastcards"
  },
  {
    id: "5e6616d45ee429768df2bca3",
    title: "Interessant",
    bodyText: "Een rok, twee skoene.",
    date: "2018-09-12T10:20:26+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6616db5ee429768df2bcb7",
    title: "Oops",
    bodyText: "anderkant jammer\nis \u02BCn baie ver plek",
    date: "2019-04-09T08:45:34+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6616e75ee429768df2bcdc",
    title: "Gister van gisters",
    bodyText: "Dit was weer een van daai daeDie gister van gistersVan onthou jy nog en meerHierdie keer was dit beterKon ek glimlag en die trane keerWant dit wat was is nie meerNou bly net die hoop van more oorn Nuwe dag n nuwe beginEk vrees nie meer moreWant vandag is more se gister",
    date: "2019-11-23T14:12:50+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616e85ee429768df2bcde",
    title: "3 jaar later",
    bodyText: "1068 dae agtertoe365 dae en nog 365 dae en nog 365 dae\nEn nou, \u2018n leeftyd vorentoe\n\nAs ek alles kon oordoen, sou ek vroe\xEBr begin beter wees\nSou ek vroe\xEBr veiliger wees\nSou ek vroe\xEBr s\xEA dat ek lief is vir jou soos vir asem - op \u2018n behoeftige manier wat my oorlewing bepaalAs ek alles kon oordoen, sou ek dit net vroe\xEBr beginEn jou in die laerskool ontmoet\nEn jou vra om te trou met \u2018n lucky packet ring\nOf dalk \u2018n rooi lint en \u2018n cupcake vir oortuiging\n\nJy is 1068 uitroeptekens agter die woord \u201Ctuis\u201D\nEn jy is 1068 eerste slukkies coke\nJy is 1068 tipes mooi\nJy is 1068 happies suurlemoenjellie op \u2018n somersdag langs die see\n",
    date: "2019-10-05T11:57:43+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6616f15ee429768df2bcf2",
    title: "X",
    bodyText: "Hoe edit mens nou weer 'n post? ",
    date: "2019-10-21T21:49:59+02:00",
    handle: ""
  },
  {
    id: "5e6616f35ee429768df2bcf7",
    title: "Vol vere",
    bodyText: "Vandag, wou ek vlieg\nToe pluk hulle my vere \nEn vleg dit deur my tande\nSou ek dan praat \ndat een-een my tande vlug sou slaan\nEn my tong skaamteloos begin wegkruip\n\nNou sit ek met \u2018n bek vol vere\nEn voel vere\nWant my tong lippe-die-dip en my vlerkies klippe-die-klap\nDie ou nostalgiese herinnering van onthou - \n\ndie hoe-hoe?\ndie so-s\xF3\n\nKyk \n\nSit jou oor teen my oor\nEn luister na die tjirr van\n  vo\xEBls wat vlerkklap \nOm die essensie van jou \nnakende skoonheid te \nVerwoord.\n",
    date: "2019-02-05T08:19:11+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6616f85ee429768df2bd07",
    title: "9",
    bodyText: "Toe ek klaar deur al die beskikbare hoeveelheid stywe borskas-tot-borskas en kop-teen-nek drukke gewerk het, Klaar al die tyd in die w\xEAreld gebruik het om eenvoudige take te verrig, Al die oggendson opgedrink het met koffie in die kooi tydens kantoorure, Elke sent spandeer het op die mooiste artefakte om geluk te bring,Die gemaklikste sielkundige se bank deurgesit het, En genoeg selfhelp boeke gelees het om 'n graad te voltooi, Het dit een oggend in die noute van die nag skielik helder geword: lig is om oorlog te maak teen gravitasie. ",
    date: "2020-02-19T23:30:58+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6616fe5ee429768df2bd1a",
    title: "Verbeel",
    bodyText: "En terwyl jy\nMy hand vashou\nHet ek\nTussendeur jou sinnelose praatjies\nMyself verbeel\nJys lief vir my\n\nEn terwyl jy \nMy liggaam  liefkoos\nHet ek\nTussendeur jou jagende asemteue\nMyself verbeel\nJys lief vir my\n\nMet al jou: hallos, goodbyes, I miss yous\u2026\nHet stupid ek\nMyself verbeel\nDaars meer as dit\nJys lief vir my\n",
    date: "2018-12-11T10:05:23+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616ff5ee429768df2bd1e",
    title: "Pa",
    bodyText: "\u201CThey fuck you up, your mum and dad.\u201D",
    date: "2018-07-20T21:50:59+02:00",
    handle: "PhilipLarkin"
  },
  {
    id: "5e6617035ee429768df2bd2a",
    title: "Dis net jy . . .",
    bodyText: ". . . Is meer van \u2018n opsie as ek dronk is. \n",
    date: "2019-05-25T18:33:15+02:00",
    handle: ""
  },
  {
    id: "5e6617075ee429768df2bd34",
    title: "manet menswees ",
    bodyText: "die outfit\ndie accessories\ndie ongemaklike laggie\nn verdowing vir die pyn\n\ndie kinky text\ndie koffie by jou flat\ndie square packet\nn verdowing vir die pyn\n\n",
    date: "2018-11-14T14:34:01+02:00",
    handle: ""
  },
  {
    id: "5e6617095ee429768df2bd38",
    title: "Orait",
    bodyText: "laasnag het ek die aux kabel\nTeen my hart gedruk \nDie geklop is weg\nspoegwurms neem oor\n\nDie wegraping van rooi en wit bloedselle\n\nNou, vir die larwes, mot en gog \u2014 kom leef in my kuwe\nEn klap die vlerk\nOm asem te haal \nDie lied wat ek nie ken\n\nOrait, ek hoop \u2018n hemel wag op my\n\n",
    date: "2019-09-04T22:17:08+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6617265ee429768df2bd8a",
    title: "Fok",
    bodyText: "Is daar enigiets meer annoying as 'n kollega wat hul troue kliphard in die kantoor beplan?\n\nFok",
    date: "2019-03-13T10:39:34+02:00",
    handle: ""
  },
  {
    id: "5e6617295ee429768df2bd94",
    title: "Guntown (\u2018n uittreksel)",
    bodyText: "... \u2018n jeug is soos \u2018n asshole\nelkeen kry net een daarvan...",
    date: "2019-06-22T13:38:38+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e66172a5ee429768df2bd98",
    title: "Monoloog",
    bodyText: "Argumente is maklik om te wen\ntensy dit met\njouself\nis. ",
    date: "2019-06-06T21:07:06+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66172d5ee429768df2bda0",
    title: "Dis blou en eks groen",
    bodyText: "Ek skep arms vol asem \nin jou blou-blou\noomblikke\n\nVoor die wolke weer\ntoe trek en ek seer verdwaal in die rookmisdryfgedagtes\n\nIn valse voorwendselmis\nverwarrende strome voorwaardes,\nen voorgee voor jy vir my gee.",
    date: "2019-05-25T22:33:22+02:00",
    handle: ""
  },
  {
    id: "5e6617365ee429768df2bdbe",
    title: "-",
    bodyText: "Toe leer ek Nietzsche by 'n Suid-Koreaanse boyband\nBTS het sewe lede\nInfiltreer die Weste met K-Pop\nEn wen dalk eendag 'n Grammy\n\nRM, die groep se rapper, s\xEA oor fate en destiny, en di\xE9 filosoof\n\u201CAmor fati, love your fate\u201D\n\nEk het nie die mandaat ontvang om die w\xEAreld te toer nie\nEk is nie 'n blas meditereense seun op 'n yacht nie\nEk bly ook nie in Ugunda nie \u{1F308}\n\nMaar, aanvaar, s\xEA RM\nAanvaar jou ingebore pad\nDan kan jy daarop begin draaie maak\n\nDie K-Popper s\xEA hy glo in sy lot\nAs syne om te verander\nEn ek glimlag, toegepaste\nNietzsche, van 'n K-Pop band",
    date: "2018-08-04T07:20:56+02:00",
    handle: "francoislct"
  },
  {
    id: "5e6617385ee429768df2bdc4",
    title: "Verby",
    bodyText: "Die stilte tussen my en jou\nIs afstand wat ek moes kry\nHoe kon ek wratig my hart met jou vertrou\nWas soo verlief verlore\nEn nou, dank die Vader, verby.\n",
    date: "2018-09-12T20:55:19+02:00",
    handle: "Purple_pixie13"
  },
  {
    id: "5e6617385ee429768df2bdc5",
    title: "god.",
    bodyText: "Ek het \u2018n habit gemaak daarvan om na myself te kyk in die spie\xEBlas ek klaar gestort het as ek tanne borselas ek my hare natmaak voordat ek by die deur uitgaan(seker as \u2018n attempt tot selfaanvaarding, I don\u2019t know, fuck.)Partykeer dwaal my gedagtes na wat \u2018n jonger Stefany van huidige 23 jarige Stefany sal dink. van die merke op my lyfvan die merke op my siel?Sou sy trots wees?Sy sou trots wees. S\xF3 fokken trots. ",
    date: "2019-10-17T21:33:35+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617385ee429768df2bdc7",
    title: "Verval",
    bodyText: "Dalk het dit ook maar 'n tipe vervaldatum.  Soos enige iets wat sleg raak as jy dit te lank laat l\xEA. \n\nDie vlinders. Die opgewondenheid. Die opbou. Die oogspel. Die vingerpunt kontak. Die arm-skuur en onsekerheid. Die eerste inkom en soen. \n\nVerstreke tyd. Dalk het dit alles 'n vervaldatum. En word dit net meer en meer waardeloos namate die best before datum al kleiner raak.  ",
    date: "2019-08-06T23:51:57+02:00",
    handle: ""
  },
  {
    id: "5e66173a5ee429768df2bdce",
    title: "Vrede -",
    bodyText: "- gemaak\n- genaak\n- genaai",
    date: "2018-08-19T10:19:37+02:00",
    handle: ""
  },
  {
    id: "5e66173b5ee429768df2bdd1",
    title: "nike-kick socks.",
    bodyText: "i think we would look nice together. like a fucking neat pair of white air max nikes and funky socks with lemons and licorice on them.\n",
    date: "2018-11-13T13:13:12+02:00",
    handle: "paulakruger.pk"
  },
  {
    id: "5e66173d5ee429768df2bdd7",
    title: "Waardering\u25AA\uFE0FPlesier ",
    bodyText: "'n vrounog nie juis vry niemaar wel 'n fokken vrou ",
    date: "2019-12-16T19:54:26+02:00",
    handle: ""
  },
  {
    id: "5e66173f5ee429768df2bdde",
    title: "ditto",
    bodyText: "kom ons kies om heel te bly ",
    date: "2020-01-05T08:00:52+02:00",
    handle: ""
  },
  {
    id: "5e6616a25ee429768df2bc1d",
    title: "heavy",
    bodyText: "I heard a dead bird\ncalling out your name.\n\nWhat makes you so\nafraid\n(of me? I don't bite\nhard)\nI hauled away\nthe stone in my eye\nyesterday - \n\nnow I hear a dead bird\ncalling out your name. ",
    date: "2019-04-28T22:32:19+02:00",
    handle: ""
  },
  {
    id: "5e6616a45ee429768df2bc25",
    title: "Mense word nie besit nie",
    bodyText: "Jy het nooit jou adres gestuur nie.",
    date: "2019-12-10T23:24:01+02:00",
    handle: ""
  },
  {
    id: "5e6616a55ee429768df2bc27",
    title: "Jy",
    bodyText: "Vir 'n oomblik het ek onthou hoe dit voel...nou is als weer leeg, en stil.",
    date: "2019-08-28T18:23:27+02:00",
    handle: ""
  },
  {
    id: "5e6616a95ee429768df2bc33",
    title: "Dink aan jou",
    bodyText: "Jou sms was nie per toevalOns ontmoeting was nie per toevalToeval is nie deel van my woordeskat Toeval bestaan nie.Ek sien jou en ervaar jyt in jou lewe ook baie diep seer gekry oor jou lewens jareSeer gekry deur mense waarvoor jy net goed voor was. Dan kom die twyfel kan jy weer iemand trust.Trust om weer deel van jou lewe te wordAl wat dit gaan vat is tydTyd om te genees Tyd om alles te verwerkTyd om jouself weer te vindTyd om weer op te staanTyd om alles agter te los wat toxi isTyd sal wysheid bringGeluk sal kom na die seer wat diep in jou hart en siel is verdwyn soos die son onder gaan en 'n nuwe dag sal begin.",
    date: "2019-08-15T11:37:59+02:00",
    handle: ""
  },
  {
    id: "5e6616af5ee429768df2bc46",
    title: "Cheap poetry",
    bodyText: "Op die oewer van die Zambezi\nKwart-oor 9 die nag\nHet ek gekyk na die hemel\nEn gehoop en verwag\nOm 'n ster sy eindstryd te sien maak\nMaar na so 'n halfuur\nHet ek my hoop gestaak\nEn begin kyk na die riete\nEn die ligte oorkant die rivier\nEn sonder 'n verskietende ster\nGewens jy was hier",
    date: "2019-06-28T21:26:31+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6616b75ee429768df2bc57",
    title: "God dank",
    bodyText: "Die dag verblind teveel \nEn jy voel jyt die reg om trots te mag wees.\nGod dank vir jou \nGod dank ekt jou verloor",
    date: "2019-05-25T12:34:04+02:00",
    handle: ""
  },
  {
    id: "5e6616c55ee429768df2bc78",
    title: "BJ",
    bodyText: "Sluk vegans?",
    date: "2019-06-14T20:33:19+02:00",
    handle: ""
  },
  {
    id: "5e6616c65ee429768df2bc7a",
    title: "genoegsaam",
    bodyText: "n die liefdemy menspo\xEBsie en die liefdealbei wederkerig'n deurmekaarspul",
    date: "2019-10-06T11:02:31+02:00",
    handle: ""
  },
  {
    id: "5e6616cc5ee429768df2bc89",
    title: "Tip",
    bodyText: "Bly weg van byvoeglike naamwoorde. ",
    date: "2019-06-26T21:28:47+02:00",
    handle: ""
  },
  {
    id: "5e6616cc5ee429768df2bc8a",
    title: "Bonte Duisternis",
    bodyText: "Katryn is 'n besige bonte kat\nsy woon in die donker van die stad\ngekaats deur die skadu van die berg\nwaarin duister dinge kinders terg.\n",
    date: "2018-08-08T18:03:30+02:00",
    handle: ""
  },
  {
    id: "5e6616d15ee429768df2bc97",
    title: "Hou",
    bodyText: "of laat gaan?",
    date: "2019-06-08T00:37:34+02:00",
    handle: ""
  },
  {
    id: "5e6616d75ee429768df2bcab",
    title: " ",
    bodyText: "Die son het so lekker geskyn vandag... weer",
    date: "2019-08-17T22:37:32+02:00",
    handle: ""
  },
  {
    id: "5e6616e45ee429768df2bcd2",
    title: "Konflik",
    bodyText: 'Ek wil vandag net in my onderbroek op my couch bly sit en bak in die sonnetjie met koffie wat langs my staan en stoom. En kuns en poetry nearby. Fuck om te Grootmens vandag. \n\n"Fuck jou financial needs dan, Lazybones," said Reality. ',
    date: "2019-10-09T08:25:41+02:00",
    handle: ""
  },
  {
    id: "5e6616f25ee429768df2bcf5",
    title: "Gee my net 'n kans ",
    bodyText: 'Eks net so moegVan almal wat my onderbreek"Kan ek assefokkenblief net my fokken sin klaarmaak voordat jy weer fokken inchip" dink ekTerwyl ek weereens my frustrasie na binne keerFokEk gaan van nou af maar net eenvoudig nie my sinne klaar...Soos wat ek ges\xEA het....Ek was besig om te....',
    date: "2020-02-22T19:53:55+02:00",
    handle: ""
  },
  {
    id: "5e6616f75ee429768df2bd03",
    title: "Soos Herrie se klip. ",
    bodyText: "Johnny Clegg het gisteraand van die Watermeide in Meiringspoort se watervaldam gepraat. Die geloof lei dat daar 'n watermeid onder die oppervlak bly en jou sal intrek waar jy 'n gemaklik kan asemhaal en lewe. Ek kan nie onthou wat daarna gebeur nie, maar kleintjies kan nie dit naby die water waag nie. ",
    date: "2019-09-24T02:24:42+02:00",
    handle: ""
  },
  {
    id: "5e6616fb5ee429768df2bd11",
    title: "En nou",
    bodyText: "Ekt geweet dit kom, nog nooit in my lewe iets gehad wat my so onbekwaamd, onbevoeg, onmens kon laat voel nie. 5 jaar later, en ek is steeds hier, probeer om myself te laat geld deur laat aande en shitty uitslae. Probeer om my ouers te oortuig dat ek iemand anders is as die fokop wat hulle grootgemaak het. Almal maak foute, of so se my sielkundige. \nEk mag net nie\nEn nou, nou sit ek weer hier. Met n seer hart en n gekneusde ego, want almal kom dit deur, hoekom kan jy nie?",
    date: "2019-06-26T08:07:40+02:00",
    handle: ""
  },
  {
    id: "5e6616fc5ee429768df2bd14",
    title: "Haarkleur tannie boksie sindroom ",
    bodyText: `Net my stupid manier om by 'n punt te kom sodat selfs ek my punt verstaan.. maar het jy al ooit haarkleur gaan koop? En jy sien hierdie pragtige tannie op die boksie met haar ivory vel en reguit tande. Kuifie wat n\xE9t so val en glinster van die seisoen se ryk auburn of strawberry blonde. En jy (die sucker wat jy is) koop daardie boksie met al die innocent opgewondenheid van 'n kind met 'n ice cream cone. En dan dink jy by jouself "self, jy gaan jou hare kleur en dan gaan jou vel egalig wees en tande glinster soos 'n girl op die cover van seventeen". Want ten spyte van al die boksies voor hierdie ene.. en ten spyte van die feit dat jy regtig teen die tyd beter behoort te weet..kan jou stukkies menswees nog steeds met tye die maanlig weerkaats. En dan vang jy jouself wragtig weer met 'n skeel hangover en 'n sigaret wat homself rook, want hoekom het jy gedink hierdie doos gaan anders wees? *
`,
    date: "2019-10-26T10:31:08+02:00",
    handle: ""
  },
  {
    id: "5e6617025ee429768df2bd28",
    title: "Na middernag",
    bodyText: "Weer jy wat vir my wakker hou\nNie eers die maan wil vanaand skyn\nEk luister na die stilte\nDit raas en suis in my ore\nEk praat met jou\nJy luister nie\nJy antwoord nie\n",
    date: "2019-06-27T01:36:18+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617035ee429768df2bd2b",
    title: "Eet Kreef",
    bodyText: "LiefdeBMW OssewaTronkSit dit afDonker donker land EnergieOu ou lied van Afrika Hilbrow Ry (Kan die re\xEBn van sy goeie werk aanhou neerval op ons lywe wat die re\xEBn wil hoor?) ",
    date: "2019-11-11T01:16:16+02:00",
    handle: ""
  },
  {
    id: "5e6617125ee429768df2bd57",
    title: "Sunset ",
    bodyText: "die lug het vlam gevat en ek het my verwonder aan die gloed van die wolke en hoe dit rooier en kwaaier en woester en warmer word en ek het vervaard gesoek na iets om die bang te blus en al waaraan ek kon dink was jou o\xEB jou somersdag-swembadhelder o\xEB maar toe onthou ek\n\njy is nou bang vir \xF3ns en\nons praat ook nou nie meer nie",
    date: "2019-06-02T21:36:59+02:00",
    handle: ""
  },
  {
    id: "5e6617125ee429768df2bd58",
    title: "Ek mis jou nie",
    bodyText: "Ek mis jou niks\n   nie jou ronde snawel\n   of angstige slaap geprewel\nmaar tog gaan iemand jou soetsag snoesel\nvanaand\n\nEk mis jou niks\n   nie jou whisky dieet\n   of geneigdheid tot 'n skeet\nmaar tog roep iemand jou liefdes kreet\nvanaand \n\nEk mis jou niks\n   nie jou onredelike korrelkop\n   of allergie vir 'n mop\nmaar tog sal iemand oor jou top\nvanaand\n\nEk mis jou nie\n   nie gister, vandag of m\xF4re\nMaar veral nie\nvanaand ",
    date: "2019-05-05T09:42:28+02:00",
    handle: ""
  },
  {
    id: "5e6617155ee429768df2bd5f",
    title: "+ | - ",
    bodyText: "Die die extremes, baby\nDis die extremes wat ons vrekmaak\nDis die extremes op aande soos vanaand wat my wil dood h\xEA. \n\nVanilla? ",
    date: "2019-07-05T00:47:45+02:00",
    handle: ""
  },
  {
    id: "5e66171a5ee429768df2bd6d",
    title: "Life is short",
    bodyText: "Waar begin mensJy kyk na jou lewe en die om jouJy besef die lewe is hardHard soos 'n klipDeur my lewens jareHet ek besef dis elkeen vir homselfWaarom, hoekom is die mensdom dan so.Is dit maar net onse gejaagde lewe.of is die mensdom net so gelaat staan.Al wat oor bly vir my is.Maak staat op niemand behalwe jouself.Die lewe is soos 'n nikkerballDis hard soos die lewe hard is.Daars nie plek vir mense soos ek.Life is short soms te kort.",
    date: "2019-08-07T11:35:26+02:00",
    handle: ""
  },
  {
    id: "5e66171b5ee429768df2bd71",
    title: "dear dad",
    bodyText: "i started cutting because i needed to find something that hurt more than your words",
    date: "2019-01-07T20:34:44+02:00",
    handle: "tamiabrown.x"
  },
  {
    id: "5e66171b5ee429768df2bd73",
    title: "Alternatief.",
    bodyText: "Terwyl die eensame en vernietigende stilte my stadig omvou begin ek dink aan die alternatief, die wat as en die hoe sou dit wees, want : \nHoe dit sou wees en as ek nog steeds vasgegrendel op die passasiersitplek van jou ou Jeep kon sit met Journey en Roxette wat twee nuwe lead vocals by kry en jou hand wat so nou en dan op my skouer en been kom rus.\n\nTerwyl die takeaway koffiekoppies onderdeur my voete dans soos wat ek soek na jou donkerraambril tussen gister se klere en cranberry energy bars. \n\nEn ek vir die soveelste keer by die deur uitspring met 'n glimlag en die reuk van die klein palmboompie om die spie\xEBltjie en jou gunsteling naskeermiddel wat aan my klere klou. Tot m\xF4re. ?\n\nHoe sou dit wees as jy my weer kon kom oplaai om vinnig saam met jou langs die see te gaan fietsry, as ons weer 'n skemerhorison kan gaan na jaag, 'n impulsiewe of kom ons noem dit spontane uitstappie kon aanpak.\n\nTerwyl ons gesels oor die lewe se seisoene, die mensdom en ons planne vir m\xF4re soos wat jy die stuurwiel met 'n gesteelde kyk in my rigting, 'n skewe glimlag en een hand in die rondte draai met die musiek wat weer kliphard speel.\n\nEn jy my dan skel omdat ek nie terug glimlag of die oomblik in neem nie soos wat jy ongeduldig deur al die rooi verkeersligte vlieg, want vir jou is die destination net so belangrik soos die journey.\n\nHoe sou dit wees as ek weer gedigte kan skryf in die stof op jou agteruit, as ons weer kan gesels met die son en foto's kan neem met meer filters as enigiets anders? \n\nHoe sou dit wees as ek j\xF3\xFA eerder as die Jeep op die scrapyard, 'n palmboompie airfreshner vol teer en die skrapnel van jou sonbril gehad het? \n",
    date: "2019-07-19T20:54:46+02:00",
    handle: ""
  },
  {
    id: "5e66171d5ee429768df2bd78",
    title: "Wolftrap",
    bodyText: "Meer ",
    date: "2019-06-13T22:33:56+02:00",
    handle: ""
  },
  {
    id: "5e66171f5ee429768df2bd7c",
    title: "Eentonig",
    bodyText: "\nmonochroom                                                                                                                  monotoon                                                                                                                                            eenoogkoning troon oor blindes uit \n                                                                                                                                                                                                                                                                                                                    rympatroon gevangenes                                                                                                                                                                                                                                                tree gulsig aan \n                                                                                                                                                                                                                                                                                                             seker om hom                                                                                                                               een of ander alomteenwoordige                                                                                                                te aanbid \n                                                                                                                                                            tyd kosbare kommoditeit                                                                                                                                 slegs aanneemlike offers asseblief \n                                                                                                                                                                               lippe saam een mond                                                                                                                         rou keel blaker uit \n                                                                                                                                                                   sic semper tyrannis                                                                                                                          die ou kreet \n                                                                                                                                    wat nou weer                                                                                                                                          ek dink hy skree eerste \n                                                                                                                                                                           wie weet                                                                                                                                                                waarheid is mos verdraai in die leuen  \n  \n\n\xA0 \n",
    date: "2019-06-20T11:32:38+02:00",
    handle: ""
  },
  {
    id: "5e6617235ee429768df2bd85",
    title: "Eerste keer",
    bodyText: "Ek het gedink dat ek nou die maturity sal h\xEA om daaroor te skryf, maar my erotic vocab is so non-existing soos my virginity.\nGelukkig kan ek dit nou s\xEA:\n\u201CSeks\u201D.\n\nEn dit was fokken lekker.",
    date: "2019-10-13T11:40:10+02:00",
    handle: ""
  },
  {
    id: "5e6617275ee429768df2bd8c",
    title: "Trou",
    bodyText: "Jy\u2019s gefok en ekt n kompleks.",
    date: "2019-05-20T22:25:21+02:00",
    handle: ""
  },
  {
    id: "5e6617395ee429768df2bdca",
    title: "Alternatiewe realiteit",
    bodyText: "Ek leef my in, in 'n narratiefVer vanaf die hedeIn 'n denkbeeldige lewe begewe ek my\nEk neem vir myself die woorde\nEn trap saggies op die akkoorde\nVan n delikate lewenslied\nVir n ander ek bedoel\n\nDie note val na onder\nEn ek staan stil en naak daarsonder\nEk verloor my greep\nEn word terug gevoer na nou\n\nDie simfonie speel af\nAgter n helder ruit\nKan ek dit slegs uitmaak, aanraak?\nMy alternatiewe realiteit",
    date: "2019-08-30T14:07:11+02:00",
    handle: "marinda_dejongh"
  },
  {
    id: "5e66173a5ee429768df2bdcb",
    title: "\xB0",
    bodyText: "You're music to my eyes. ",
    date: "2019-01-10T20:40:50+02:00",
    handle: ""
  },
  {
    id: "5e6617425ee429768df2bde6",
    title: "Gewoon ongewoon ",
    bodyText: `Sy sal teruggaan werk toe na haar kraamverlof uitgeloop het.
Sy sal weer (self) inkopies begin doen en kosmaak vir haar mense. Haar hoof (en man) se strooi opvreet.

Sy sal weer futlose teepartye bywoon en haarself verdom om by die "dames" in te pas. Sy sal een vriendin h\xEA wat die stemmende dissonans raaksien; waardeer, maar stilbly. 

Sy sal weer haar motor neem vir 'n diens en n\xF3g skuld maak om op te gradeer oor twee jaar. En oppad huistoe stilhou vir t\xE9 olierige vis-en-chips.

Sy sal Kleenex-gesprekke met tieners h\xEA en skoolhou soos sy moet. Sy sal dieselfde werk jaar in en jaar uit opdis.

Maar sy het 'n enkele gedig in die Groot Verseboek. En dis meer as wat enigiemand hier rond kan s\xEA. `,
    date: "2019-03-17T04:03:14+02:00",
    handle: "Evert Esterhuizen "
  },
  {
    id: "5e6616965ee429768df2bbf9",
    title: "NL",
    bodyText: "Dit klink mooi, jy lyk mooi, dit voel mooi. Eks bly dis alles mooi daar.",
    date: "2019-03-01T21:22:58+02:00",
    handle: ""
  },
  {
    id: "5e6616995ee429768df2bc00",
    title: "Veritas",
    bodyText: "Ek het gister gejok oor iets wat nie saakmaak nie. ",
    date: "2019-02-20T07:13:10+02:00",
    handle: "evertesterhuizen "
  },
  {
    id: "5e6616995ee429768df2bbfd",
    title: "Lemoene vir Lien",
    bodyText: "breek my oop en\nskeur my vliese een vir \neen tot die sap teen jou \nken afloop\n\nvat my vel en kneus\ndie sagtheid hard of\nlaat ek jou brand op jou\nstukkende plekkies\n\ndie suur is te veel vir \njou alkaliese brein so\nlek my skoon of drup \njouself uit want\n\nhierdie is die vryste fokken vrug: cisman citrus and all. ",
    date: "2018-10-08T00:58:15+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616a15ee429768df2bc1b",
    title: "bure, b\xFAre! ",
    bodyText: "Die vrou kry t\xE9 lekker. Dis papierdun mure.Ek kyk jou m\xF4re weer in die o\xEB wanneer jy suiker kom leen. ",
    date: "2019-07-14T23:32:20+02:00",
    handle: ""
  },
  {
    id: "5e6616a35ee429768df2bc20",
    title: "bainskloof",
    bodyText: "Vreemdelinge kan blykbaar binne vyf minute se gesels jou fatale flaws raaksien. \n\n...dit was nie eers drie minute nie. ",
    date: "2019-04-13T21:48:41+02:00",
    handle: ""
  },
  {
    id: "5e6616a25ee429768df2bc1c",
    title: "Binneband-Grap",
    bodyText: "Ek haal my binneband uit my rou,Vou dit oop en gee dit vir jou,Jy skrefie jou o\xEB en tilt jou kop\ns\xEA \u201CDis faain ek ry tubeless-nou\u201D\nEk s\xEA dis \u201Cokay\u201D\nTel dit op, vou dit terug\nEk blaas my self op soos \u2018n terroris.",
    date: "2019-10-01T09:13:54+02:00",
    handle: ""
  },
  {
    id: "5e6616a55ee429768df2bc28",
    title: "1963",
    bodyText: `"Epik\xF4nders" Hoofpyne, ongemaklik met tuinspit en kort asem wanneer sy stap; ag man sommer net oumenskoors. Vanaand het die dokter gebel: hy wil haar m\xF4re oggend 07h00 sien. Sy moet 'n oornagtas pak en my pa moet haar wegbring want sy gaan nie dadelik huistoe nie. Ma; ek kan nie opdrag gee nie. Maar dit sal nogal kak wees as j\xFD iets moet oorkom. Nie voor daar weer in die gedeelde taal gesels word nie. `,
    date: "2020-02-25T02:04:52+02:00",
    handle: ""
  },
  {
    id: "5e6616a75ee429768df2bc2e",
    title: "Dis net jy",
    bodyText: "Ja DNJ dit is alweer ek en jy\nMy laatnag wakker le en wonder klankbord\nWat se raad het jy\nMoeg is ek en gedaan\nMaar net jy sal verstaan\nOns rooikop pop se tyd is min\nHaar liggaampie gedaan\nGebroke harte omring haar bed\nEn my keel raak dik\nWat spreek jy uit in hierdie sombere tyd\nOns rooikop pop se moederhart is aan die\n breek\nHaar trane vloei al meer\nHoe vertroos ons haar in hierdie bitter koue nag\nGee tog raad\nHoe hou ons dan vas aan haar\nTerwyl die engele wag om haar rooikop pragkind te kom haal\nOns rooikop pop se tyd is min\nBleek en weerloos le sy daar\nLeeg word my hart\nDiep en seer\nEk het geen woorde meer\nOns rooikop pop se tyd is min..... \n\n\n",
    date: "2019-06-11T23:05:39+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616ad5ee429768df2bc3f",
    title: "ONStabiel ",
    bodyText: "As jy nie geweet het van my Ritties nie, wat sou jou pla? ",
    date: "2019-09-01T18:39:23+02:00",
    handle: ""
  },
  {
    id: "5e6616a85ee429768df2bc30",
    title: "Sekskat 3000",
    bodyText: "Ek wil nie  iemand se lusblusser wees nie.",
    date: "2019-02-11T18:25:15+02:00",
    handle: ""
  },
  {
    id: "5e6616ae5ee429768df2bc41",
    title: "Laurika Lirieke",
    bodyText: "\nSy was reg, liefde is net 'n fantasie \n\n- want lyk my dis nie vir ons almal beskore nie...of dalk moet ek net weer Tinder probeer?",
    date: "2019-05-02T20:11:47+02:00",
    handle: ""
  },
  {
    id: "5e6616a85ee429768df2bc31",
    title: "Dis niks",
    bodyText: 'Mag ek vra\n"hoe voel jy oor my?"\nEn wat moet ek maak as ek nie van jou antwoord hou nie?\nKan ek my vraag onttrek,\nWant dit verraai hoe ek voel.\nMaar, soos, ek is ook nie committed aan die gevoel nie\nSo no biggie\nDis in elk geval niks\nSoos whatever\nDis rerig niks',
    date: "2019-06-05T14:12:05+02:00",
    handle: ""
  },
  {
    id: "5e6616ae5ee429768df2bc42",
    title: "lekkerste vergeet",
    bodyText: "Met moeite \nstaan ek op uit die kooi, \nbuk ek af om skoenveters vas te maak, \nrek ek vir die ho\xEB glase, \nwas ek my tone in die stort... \n\n\nJy moet eintlik baie soepel en fiks wees vir lekker seks. ",
    date: "2019-04-23T21:23:01+02:00",
    handle: ""
  },
  {
    id: "5e6616b05ee429768df2bc4c",
    title: "Best friends ",
    bodyText: "riends help you to get the courage to talk to the boy you like \nThey help you by holding your hair when you drink too much because he broke your heart \nThey stay up with you when you have to study for a test and motivate you when you can\u2019t \nInstead of letting you go through hell alone they pack their bags and ride shotgun so you won\u2019t be alone \nI wish I could give this to you I thought I did  \nYet going to jail for you wasn\u2019t enough \nLosing people I love for you wasn\u2019t enough \nStaying up with you to make sure you don\u2019t self harm again wasn\u2019t enough \nStaying up and watching movies with you even when my eyes can barely open because you didn\u2019t like being alone wasn\u2019t enough\nStaying out till 5 in the morning when I wanted to go home and you were so happy wasn\u2019t enough \nI\u2019m sorry for giving you half of my heart \nI\u2019m sorry for being so toxic ",
    date: "2019-10-16T17:57:51+02:00",
    handle: ""
  },
  {
    id: "5e6616b05ee429768df2bc4a",
    title: "M.A.N",
    bodyText: "Ek is net \u2018n seun",
    date: "2018-12-28T17:55:48+02:00",
    handle: ""
  },
  {
    id: "5e6616c65ee429768df2bc7b",
    title: "S\xEA ",
    bodyText: '"Net vriende."\nEk hoop dat jy hierdie maal by jou belofte hou.\n',
    date: "2019-05-13T13:24:54+02:00",
    handle: ""
  },
  {
    id: "5e6616c75ee429768df2bc7e",
    title: "Identiteitspolitiek",
    bodyText: "Dis 'n mooi huis, maar dis wit mense wat daarin woon.",
    date: "2019-05-26T15:51:09+02:00",
    handle: ""
  },
  {
    id: "5e6616cd5ee429768df2bc8d",
    title: "Ruiter",
    bodyText: "Dis agtuurMy oorfone ingeplug\nBuite\nNa die donker blou see\nEn net die liggies wat weerkaats\nSpoegwolf speel en al wat ek aan dink\nIs die akoestiese kitaar weg gebere\nEk wou weer begin\nVoordat ons weer s\xEA als is uitgedink\nMy kop in die wolke\nMy hart by jou\nDis al waaroor ek wou speel\nLewe wat op repeat was\nDit was n foto\nDaar ver in die noorde\nn dromer \nOpsoek na iets\nIets soos jy\nMaar ek wag nog\nHier op jou\n",
    date: "2019-10-14T20:22:33+02:00",
    handle: "verbeeldings.wereld.hartjie"
  },
  {
    id: "5e6616b65ee429768df2bc55",
    title: "die pad",
    bodyText: "ek loop die pad al lank my lam \nkaalvoet \ndeur die kou \nen soms wonder ek\nwaarheen nou \nwaggend en werkend vul ek myself aan \nalleen en stelselmatig \ndoelgerig aangel\xEA met gefokuste asemhaling om die kolskoot deur te boor \nvervreem van vergete hier my verre verlange \nen waggend op woorde \nwat waarheid om my skryf \nen my toevou \nmet mooi ",
    date: "2019-06-03T14:35:46+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e6616d95ee429768df2bcad",
    title: "TD",
    bodyText: "K\xE1n jy net fokken lag?\n\nEk w\xE9\xE9t jou moer is dalk suur depressed (ek ken jou nie so goed dat ek kan s\xEA nie) \nOf jou styl is introverted en 'n glimlag aan die buitekant beteken daar's lagontploffings in jou binneste. \nDalk is jy te cool; expressions of emotion is beneath contempt. \n\nMaar jirre man. Jy bly in 'n land met mense sonder voortande. 'n plek waar 'staat' die amptelike woord vir 'gang' is en waar natani\xEBl en leon schuster beide 'n bestaan kan maak. \n\nFok. Wys tog tande. ",
    date: "2019-06-12T12:47:07+02:00",
    handle: ""
  },
  {
    id: "5e6616b75ee429768df2bc56",
    title: "Voorneme",
    bodyText: "Selfs al woon ek al lank hier in die vreemde,\nis die slagare in my voorarms\nnog so onlosmaaklik verstrengel\nmet die snare van Afrikaans,\nwant daar by die \u201Chuis\u201D en hier binne my\nloop nog soveel heilige koeie rond\nwat ek eendag gaan laat afkak\nin \u2018n waas van punk rock en po\xEBsie.",
    date: "2019-06-24T20:21:49+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6616d95ee429768df2bcb0",
    title: "Bly",
    bodyText: "Alles is net aan",
    date: "2019-05-03T20:57:59+02:00",
    handle: ""
  },
  {
    id: "5e6616b75ee429768df2bc58",
    title: "as",
    bodyText: "Ek sal my ongestuurde brieweaan jou aan die brand steek endie gedigte oor en aan jou en'n kers ook. Ek hoop dat jy in die flikkerlig kan sien waar jy stap. ",
    date: "2019-10-25T19:56:46+02:00",
    handle: ""
  },
  {
    id: "5e6616de5ee429768df2bcc0",
    title: "Jy's geliefd",
    bodyText: "En ek hoop jy's oukei. \u{1F917} ",
    date: "2019-12-27T21:57:00+02:00",
    handle: ""
  },
  {
    id: "5e6616c25ee429768df2bc6d",
    title: ".",
    bodyText: "Kyk die nuwe logo",
    date: "2019-05-03T23:19:12+02:00",
    handle: ""
  },
  {
    id: "5e6616e35ee429768df2bccf",
    title: "AP",
    bodyText: "\nSilwer borreltjies asem hardloop heen en weer tussen lae platgestrykte hemelruim wanneer jy die deurklokkie lui en jou omhelsing word wit linne wat in 'n meditireense bries bol staan en vars suurlemoene en blou blou see en wit klippaadjies en skakeurings van dappled light onder reuse ou vyebome. Jy fluister haastig erotiese geheime in olfactory ranges van Under the Leaves en petrichor en die molmreuk van bruin akkerblare in Dorpstraat enjou bors duin al vinniger op en af, die gletserhoeke al skerper; deurskynend en elke middag, net voor behoefte kan oorneem, ruk die toeklap-traliehek knal my uit: terra firma. \n\n\n\n",
    date: "2019-12-09T00:55:01+02:00",
    handle: ""
  },
  {
    id: "5e6616c25ee429768df2bc6f",
    title: "Soms",
    bodyText: "oms grawe die vingers \nVan vrees in my vrede\nMy asem ontduik my\nEn my tong staan stom\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\nSoms dwaal die leemtes\nOor my huiwerende lede\nEn die stilte is die ondertoon\nVan my kil gebede\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\nMaar soms verrys ek soos 'n vlamdier\nUit die roet en puin\nSoms bloei my siel van rook en vuur\nSoms is my hande rein",
    date: "2019-09-18T07:58:17+02:00",
    handle: "marinda_dejongh"
  },
  {
    id: "5e6616e65ee429768df2bcda",
    title: "Halfmof. ",
    bodyText: "Ek is\nKwartpad\nHalfpad\nDriekwart\n(maar nie al die pad) \nGay ",
    date: "2019-04-19T02:14:55+02:00",
    handle: "VavushkaLove"
  },
  {
    id: "5e6616cb5ee429768df2bc87",
    title: "Skelmbos",
    bodyText: "Hoekom hang mense portrette van ander distorted mense op hul mure? ",
    date: "2019-06-16T16:39:23+02:00",
    handle: ""
  },
  {
    id: "5e6616ea5ee429768df2bce2",
    title: "Ons",
    bodyText: "Ons is almal",
    date: "2019-10-16T20:23:44+02:00",
    handle: ""
  },
  {
    id: "5e6616f15ee429768df2bcf3",
    title: "Tinder Date \u{1F346}",
    bodyText: `En nou, nou is ek hier.  
Op my bank, dit wil-wil re\xEBn,  
ek't dro\xEB rooi wyn en brood, vir aand ete.  \u{1F377}
Bibliese opofferings is vanaand in \u2018n Checkers ry gemaak.  
Daar's \u2018n boodskap wat gestuur moet word, maar ek stel uit.  
\u2018n Boodskap vir my dronk Tinder Date.  

Ek't maar op gegaan, ag net om te kyk, \u{1F609} 
My onderste limiet is 25, maar wat deur kom is nie te great,  
so ek sal die wen paal moet skuif.  
24,  
23,  
22 en siedaar,  
'n message 'n meisie, 2 emojis later en ek het  
my eerste Tinder Date.  \u{1F91E}\u{1F3FC}

Ek't haar ontmoet in 'n bar en relatief vinnig besef, daar's niks daar, 
maar ek's mos Afrikaans en pride myself daar in dat ek nie \u2019n \u201CFuck-Boi" is nie.  
Daar's wyn en ek kan nie nee s\xEA vir dit nie.  
Ons het gedans en gedrink en ek't weer besef,  
Sy\u2019s t\xE9 jonk en ek's net t\xE9 dronk 
en so,  
soos so aand maar verloop  
eindig ons op by my flat,  
in mekaar se arms en subsequently net 
...uhm... 
in mekaar... 
En toe, toe sien ek haar en Ek staar  
Ek staar in haar o\xEB, 
dood, 
is di\xE9 seks sonder liefde?  
maar voor ek oordeel besef ek, ek voel niks,  
apatie en spyt vir my eie Tinder Date.  

Ek't opgehou en myself in my kombers toe gevou.  
Die aand om gewens.  
Sy\u2019t gery en dank god dis nou verby. 

Ek weet Sy weet, waar ons staan met mekaar,  
maar.. nou message Sy,  
Sy's dors... en sy't wyn. \u{1F633}
Oh Fok wat nou? 

Ek dog Sy verstaan, fuck, Ek dog sy weet,  
dat liefde nie groei as jy te vinnig steek,  
maar ek's mos Afrikaans en pride myself daar in dat ek nie \u2019n \u201CFuck-Boi" is nie.  
Message ek iets of Message ek niks  
\u201DFucked if I do, Fucked if I don\u2019t\u201D  
Ek weet nie, Ek gaan die app delete,  
Ek fokken haat lus en die Leeukop selfies het my in elk geval teveel afgepis. 

 `,
    date: "2018-08-06T20:24:12+02:00",
    handle: ""
  },
  {
    id: "5e6616ce5ee429768df2bc8e",
    title: "god.",
    bodyText: "Nee, o, god!my kinners gaan nie eendag poetry skryf nie. Hulle gaan die sielkundige hulp kry wat hulle nodig het voordat dinge s\xF3 ver uitmekaar uit donner. ",
    date: "2019-10-03T13:12:53+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616f45ee429768df2bcfc",
    title: "die geel prosa",
    bodyText: 'Laat middag, daardie dag het God met lion safety matches gespeel in die hemel, die lug was aan die brand. \xF1 Smeulende gloed van pyplyn bloedlemoen en tangerien wolke versper die tonnelvisie van die dorp se mense. Kort daarna was die gesegde "speel met vuur en pis in jou bed" tot die aangesig in my gedagtes gebring en presies so gebeur het-met die matchies en God- dit het begin re\xEBn. Koue, blou, kleurlose druppels het op my neus geval. Melancholies neurie saam speel "Beautiful in Beaufort-wes" se deuntjie op die ritme van \xF1 trek-en-teug sigaret.\n.\ngaan lees verder(https://lkpkart.wordpress.com/2018/11/14/n-geel-prosa/)',
    date: "2019-04-06T10:39:48+02:00",
    handle: "paula_stxphxnie_kruger"
  },
  {
    id: "5e6616d85ee429768df2bcac",
    title: "Drown",
    bodyText: "Now I lay here\nNaked on my bed\nWondering if I should even bother to get dressed \nOr just climb back in the bathtub and drown myself to death",
    date: "2018-11-04T17:28:44+02:00",
    handle: ""
  },
  {
    id: "5e6616fb5ee429768df2bd10",
    title: "Ek",
    bodyText: "Ek wil nie oor liefde skryf soos almal nie. \nEk dink dis boring. \nEk wil skryf oor my roeping.\n\nHoe di\xE9 my na drank dryf.\nHoe di\xE9 my laat vloek. \nHoe di\xE9 my strategies maak wakker l\xEA in die middle van die nag. \nHoe ek droom ek wurg die ronde kollega, \ntot haar ronde o\xEB uit pop.\n\nEk wil besluite maak, en groottes. \nEk wil in beheer wees.\nEk wil hardloop sonder inhibisies.\nEk soek nie ronde o\xEB op my nie. \n\nGee my die kans om verlore te raak in die drome van Europa.\nOf dalk, as ek gelukkig is,\nin die vlaktes van Afrika.",
    date: "2019-05-17T02:50:39+02:00",
    handle: ""
  },
  {
    id: "5e6616dc5ee429768df2bcba",
    title: "aerodynamics ",
    bodyText: "it really isn\u2019t fair to me.\n\nbecause when love happened,\n\nyou flew in with a parachute,\n\nwhile i dived in head first,\nwith only expectations of you to keep me buoyant.\n-t.k.b",
    date: "2019-01-07T20:38:28+02:00",
    handle: ""
  },
  {
    id: "5e6616fb5ee429768df2bd12",
    title: "N-O-S-W",
    bodyText: "Af getroud -  \nKind in die hand, jou drome vergeet en verbrand, \nSo sit jy vas in die selfde ou land, as jou Pa. \n- \nJy was so anders toe,  \nanders as die ander, \nJy\u2019t fokof gesing en god geskree, \n- \nen Nee, ek sal nie my pad tot hier aanraai nie, maar jy\u2019t \nNou-pyp-jeans vir \u2018n Khaki broek verruil, noorde toe getrek en verander, \n- \nEk bedoel dit nie lelik nie, maar \nek ervaar jou as pateties soos ek verby jou scroll en eks jammer daaroor. ",
    date: "2019-05-29T11:20:37+02:00",
    handle: ""
  },
  {
    id: "5e6616e45ee429768df2bcd5",
    title: "Toekoms",
    bodyText: "dit was vir n week wonderlik en toe onthou jy van jou planne waarvan ek nie deel was nie \n",
    date: "2019-06-17T07:13:00+02:00",
    handle: ""
  },
  {
    id: "5e6617005ee429768df2bd22",
    title: "01:03 AM",
    bodyText: '"oh my god, oh my god, Liefie is jy okay?"',
    date: "2018-08-22T17:17:45+02:00",
    handle: ""
  },
  {
    id: "5e6616e55ee429768df2bcd7",
    title: "Durbanville",
    bodyText: "Bier\nWyn\nSosatie\nBoerewors\nRoomys\nTjops\nBun\n\n\n",
    date: "2019-05-12T00:00:51+02:00",
    handle: ""
  },
  {
    id: "5e6617045ee429768df2bd2d",
    title: "Fruit loops is lekker. Ek dink.",
    bodyText: "Saterdagaand. die kleurvolle sirkels van skuldgevoel dobber en dryf soos verlore stukke verdwaaldheid in spierwit vetvrye melk van my onskuld en verwarring een vir een word die stukke minder en my gedagtes al meer so asof die Fruit Loops al my herinneringe, drome en begeertes en vergeetes ronddra ek sukkel om die laastes met die lepel vas te vang amper soos die lewealtyd op soek na iets \nmaar maak nie saak hoe lank jy uitstel, \naf stel of laat sag word nie \ndie krake sal jy altyd kry\no ja en suiker?\ndit lewe bly daarmee steeds bitter ",
    date: "2019-12-07T20:17:56+02:00",
    handle: ""
  },
  {
    id: "5e6616e65ee429768df2bcdb",
    title: "verbatim",
    bodyText: '"jou liefde is genoegal wat ek nodig hetek kies jouelke dag altyd" waarom bel jy my dan...?in flagrante delicto',
    date: "2019-12-20T23:05:12+02:00",
    handle: ""
  },
  {
    id: "5e6617055ee429768df2bd2f",
    title: "gemak en moeite ",
    bodyText: "Ek worry nie r\xE9rig wat ons doen nie. Maar nogal saam met wie. Knopies of is my fat-shirt okay? ",
    date: "2019-12-11T21:23:30+02:00",
    handle: ""
  },
  {
    id: "5e6616ef5ee429768df2bcec",
    title: "Levitikus 18:22, ensovoorts...",
    bodyText: "Bybelversies drip daagliks uit jou bek veral Sondae lek die leuens uit jou lippe en jou kindwat elke dag liefde gil enaanvaarding smag di\xE9 l\xEA nou in stukke eensaam uitgebloei jy en jou Godjulle moes julself eerder met die liefde bemoei",
    date: "2019-09-14T16:03:16+02:00",
    handle: ""
  },
  {
    id: "5e66170f5ee429768df2bd4b",
    title: "Sien jy dit?",
    bodyText: "Jy word jou ma",
    date: "2019-05-16T17:50:37+02:00",
    handle: ""
  },
  {
    id: "5e6616f85ee429768df2bd06",
    title: "Vir headspace",
    bodyText: "Oak is 'n baie goeie meditasie app. ",
    date: "2019-02-22T08:49:43+02:00",
    handle: ""
  },
  {
    id: "5e6617175ee429768df2bd67",
    title: "2021",
    bodyText: "30. 30.50",
    date: "2020-01-07T00:39:58+02:00",
    handle: ""
  },
  {
    id: "5e6617025ee429768df2bd29",
    title: "Rabiestraat 69, Durbanville",
    bodyText: "Wil jy Saterdagm\xF4re brunch maak of met die Spaniel speel in die voorjaart? Die tortoise shell Armani is nuut maar ek hou meer van jou ou staal enetjie.\n\nOns moet voor 21h00 by Zer021 Lounge wees vir free entry en nice girls (okay, jy kan nou die camo-blonde probeer). En ek voel goed in lumberjack pants. \n\nEk wil Sondag in jou oggendson NG Kerk sit; saam treur oor die dominee wie se gay vlerke met 'n snoeisk\xEAr gekou is. Tee drink en praatjies maak na die tyd.\n\nOns kan heeldag oor Proust, die Noorderligte en skynrykdom praat. \nDie maalvleis \xEDs uitgehaal, maar die medies lol alweer met jou depressiepille.\n\nKom sit langs my: jou huis is my tuiskoms. Jou lyf, my kerk. Jou moesie-ken my trots. Maar die Here hoor my: jy is 'n vry fokken vrou. \n\n",
    date: "2018-08-24T07:37:45+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e66171a5ee429768df2bd6e",
    title: "sprong",
    bodyText: "sy dink ek kyk na die see\nsy dink ek is besig om te mediteer\nop seepunt se ruggraat\nsy dink ek is so bly om hier te wees\nin die high life van high level road\nen sy dink all is good\nen namaste\nmaar ek is besig om die geboue met my o\xEB te meet\nen \u2018n kopsom te doen\nterwyl ek so staar-\nhoe hoog is hoog genoeg\nsodat my kop my lyf kan groet\nin \u2018n swan dive? \n\nek skat so 13 verdiepings is genoeg.",
    date: "2019-08-28T21:00:24+02:00",
    handle: ""
  },
  {
    id: "5e6617115ee429768df2bd52",
    title: "\u201CSigns\u201D",
    bodyText: "Op die ou einde is hoop al wat ons het. \nI\u2019m a stubborn learner, I break hearts \nMostly my own. \n\n",
    date: "2019-09-20T12:45:25+02:00",
    handle: ""
  },
  {
    id: "5e66171f5ee429768df2bd7b",
    title: "Donderbui",
    bodyText: "Ek het vergeet van die weerligMister Isakov sing jou hand tot op my been\nEk hou albei op die stuurwiel want dit re\xEBn\n\nEk het vergeet van die weerlig\nDalk is dit hoekom ek so min skryf\nDalk is dit wat jou bang maak vir my lyf\n\nEk het vergeet van die weerlig\nParys se strate raak spie\xEBls \nNat olieverf op doek\n\nEk het vergeet van die weerlig\n\u201CDit is lekker om vir die re\xEBn te luister\u201D\nEn dan begin jy huil\n\nEk het vergeet van die weerlig\nDit re\xEBn nou meer binne die kamer\nAs buite\n\nEk het vergeet van die weerlig\nJou hand maak my mond toe\nAan die einde kon ek net trane proe\n\nEk het vergeet van die weerlig\nAs ek erens rustig raak, flits dit nog\n",
    date: "2019-11-02T15:27:05+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617165ee429768df2bd62",
    title: "Michelangelo ",
    bodyText: "Ek bytel aan my\nskrywersblok\nlaat die alfabet\nperfek... soos jou lippe... \nag fok. \nNee, \nhulle rooi is van my bloed en\ndie heuning \nwat by jou ken afdrup\nis hopeloos\nte soet. ",
    date: "2019-05-19T07:44:32+02:00",
    handle: ""
  },
  {
    id: "5e6617235ee429768df2bd83",
    title: "Magspeletjies",
    bodyText: `Oor 4 dae is dit 'n jaar'n hele jaar nadat jy die mat onder my voete uitgepluk het'n jaar sedert ek en my trane 'n vreemde vriendskap ontwikkel het'n jaar vandat ek uit frustrasie my woorde begin neerpen het, met die punt wat ek uit woede deur die bladsy wil druk om dit te laat pas by my geskeurde hartDis net 'n jaarSo mag ek dan nog aan jou dink?Mag ek nog 'n paar "what ifs" vir oulaas opdroom?Mag ek verby jou manupilasie, jou selfbevredigende natuur en jou tekort aan morele waardes kyk en jou blou o\xEB so bietjie mis?Dis immers so te s\xEA net 'n jaar terug wat jy besluit het dat jy nie weet wat liefde is nie - dis amper al 'n jaar.En ek wonderNa 365 dae van roekelose gedagtes en te veel aande van trane en my amper onherkenbare stem se 'ek-mis-jou' Weet jy nou al? `,
    date: "2020-03-01T21:38:31+02:00",
    handle: ""
  },
  {
    id: "5e6617175ee429768df2bd64",
    title: "Piet",
    bodyText: "Fok Broer\nDaar is nou droogte\nWaar jy eens se\xEBn gebring het",
    date: "2019-06-04T09:40:54+02:00",
    handle: ""
  },
  {
    id: "5e6617285ee429768df2bd92",
    title: "Verlange",
    bodyText: "NostalgiesNet misNet die ritme van jou naamNet die Tassies-eerste-soenNet die wat-alankal-verby-isDis net jyMens kan nooit weer terug nieSo nou smile ek vir als en niks en die onthouDie donnerse onthou",
    date: "2019-09-04T19:35:21+02:00",
    handle: ""
  },
  {
    id: "5e66171c5ee429768df2bd74",
    title: "kONSentrasie",
    bodyText: "My gedagtes is nie waar dit moet wees nieDink ek kort ook 'n pil vir konsentrasie",
    date: "2019-08-30T08:35:05+02:00",
    handle: ""
  },
  {
    id: "5e6617315ee429768df2bdae",
    title: "Instagram...",
    bodyText: "...het alleman skielik fotograaf gemaak. \n\nDon't fight the feeling, wo/mxn. \nDis hoe ons dit wil h\xEA. \n\nDigter\nSkrywer\nFotograaf\n\nIdioot \n",
    date: "2019-06-05T22:51:10+02:00",
    handle: ""
  },
  {
    id: "5e66171c5ee429768df2bd75",
    title: "sit en wag ",
    bodyText: "ek sit en wag\nwag vir mense wat my tyd misbruik \nwag my lewe verby.\nwag vir die uber, wag vir my hangover, wag vir my dop.\nek verloor stadig my kop",
    date: "2018-08-23T16:04:21+02:00",
    handle: ""
  },
  {
    id: "5e6617375ee429768df2bdc2",
    title: "Bergpad",
    bodyText: "Daar's n vreemde soort gedeelde oomblik wanneer dit net jy, in jou fleet-issue corolla sonder hubcaps en 'n nuwe BMW 650i langs mekaar op De Waal Drive teen 80km/h in stad toe ry. ",
    date: "2019-06-14T10:17:35+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617375ee429768df2bdc1",
    title: "... ",
    bodyText: "Ek haat hulle ook soms, tbh. ",
    date: "2019-08-12T14:53:41+02:00",
    handle: ""
  },
  {
    id: "5e66173b5ee429768df2bdcf",
    title: "Langebaan, en laat",
    bodyText: "Langebaan verdwyn in misDit is \u2018n Goddelike sug\nWat die dorp toe wasem\nJesus is vanaand dood\nEn Sy lyk is deursoek vir oorblyfsels van goud en mirre\nMaar niks is gevind nie\nDie laastes van dit wat waarde het\nHet Hy vir huurgeld en koeverte gebruik\n- Hy wou huistoe skryf, na Ma en Paps\nDie moord was vinnig, sonder te veel geraas\nEn die balaclava met die kaalvoete\nIs vinnig weer weg \nDit moes gebeur\nEn is geprofeteer\nSteeds maak alles daarvan seer\n- hierdie koning doodverslaan op teer\nGod wurg in Sy slaap\nWant iewers by die Weskus l\xEA Sy kind se lyk op straat\n\n",
    date: "2019-07-22T17:29:46+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66173e5ee429768df2bdd9",
    title: "daddy issues volume I",
    bodyText: "pantser-arms om my druk te hard en breek my dwars; los gate wat lek. ",
    date: "2019-11-24T16:44:10+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66173b5ee429768df2bdd0",
    title: "We agree on something! ",
    bodyText: '"Nothing lasts." ',
    date: "2019-07-07T11:20:16+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e66173f5ee429768df2bddd",
    title: "-",
    bodyText: "She had the audacity to be happy ",
    date: "2019-05-23T19:42:55+02:00",
    handle: ""
  },
  {
    id: "5e6617415ee429768df2bde4",
    title: "2020 hello",
    bodyText: "Nuwejaarsvoornemens?",
    date: "2019-12-29T21:29:39+02:00",
    handle: ""
  },
  {
    id: "5e6617415ee429768df2bde1",
    title: "mense-mense",
    bodyText: "Ideologies verknog aan die idee om nie 'n offspring die lig te laat sien nie. \n\nMaar dan loop daar kinders en ouers\nIn familie-vriendelike malls op aande soos vanaand met Boney M in die agtergrond\n\nEn skielik oorval\nBerea Spar na-skool lunch\nWindmill Cheeseburger Specials Saterdagoggend Servistar uitstappies\nVincent Park movies Saterdagaand\nen na-kerk Floradale tea garden besoeke my\n\nDie microwave lasagne in die trollie en Netflix is net-net goed genoeg\nvir vanaand. \n\n",
    date: "2018-11-08T21:30:16+02:00",
    handle: ""
  },
  {
    id: "5e6617455ee429768df2bdec",
    title: "pienkvissie",
    bodyText: "Het jy al ooit salm ge\xEBet? Het jy al gesien hoe val daardie sagte, botterige pienk mote voor jou oop en vr\xE1 om vertroetel te word tot in jou eie sagte vleise? Vanaand was my eerste keer. Dis soos om l\xE9kker seks te h\xEA. (maar dit kom teen die ekwalente prys van swangerskap, goeie fok!) ",
    date: "2019-11-07T21:28:07+02:00",
    handle: ""
  },
  {
    id: "5e66169d5ee429768df2bc0c",
    title: "\u25CB\u25CF",
    bodyText: "Van alles\xC1llesKan jy asseblief 'n sagte bui re\xEBn wees? Ek wil my kop net bietjie neerl\xEA. ",
    date: "2020-02-10T20:38:44+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e66169b5ee429768df2bc07",
    title: "clingingly distracted ",
    bodyText: "clinging to others as mere distractionsto keep me from facing my own life ",
    date: "2020-01-09T09:44:35+02:00",
    handle: ""
  },
  {
    id: "5e6616a45ee429768df2bc24",
    title: "Trouens ",
    bodyText: "Vir alles wat ek van jou weet, dink ek meer aan jou as wat ek moet.",
    date: "2019-06-10T20:52:25+02:00",
    handle: ""
  },
  {
    id: "5e6616b85ee429768df2bc5a",
    title: "Ag fok weet",
    bodyText: "Ek sou \xE0 la Kerkorrel 'n faxmasjien gaan huur het \nMet my opperste awkwardness het ek probeer\nOm jou te laat voel\nLoved\nSoos jy gese het - 'n balon wat gaan pop\nLiefde is seker maar 'n time bomb\nSlagoffer\n\n",
    date: "2020-02-04T22:38:36+02:00",
    handle: ""
  },
  {
    id: "5e6616b95ee429768df2bc5b",
    title: "Moeg. Naar.  Dronk? Oorit*",
    bodyText: "bare bones. Ma ma ma ma ma \nMy bare bones \nMoeg \nNaar\n dalk dronk \nNa my kots inni shower is ek drasties nigter,lus vir huis, maar ek is v\xEAr \n",
    date: "2019-05-27T03:24:21+02:00",
    handle: ""
  },
  {
    id: "5e6616c15ee429768df2bc6a",
    title: "Compliments ",
    bodyText: `"Jou rug is nogal
harig,
maar \u02BCn mens
sien dit nie op die foto nie."

Well, fuck you too.

"I think it's
my French roots."

Peasants. `,
    date: "2019-05-25T17:25:24+02:00",
    handle: ""
  },
  {
    id: "5e6616c15ee429768df2bc6b",
    title: "Badkamer",
    bodyText: "WitTe\xEBlsEn as jy te lank daarna kykWord dit hospitaal en dettolEn weggevee is die bloedEn weggevee is die roesEn weggevee is die spoegEn weggevee is die een wat jou moes heel hou",
    date: "2019-08-15T23:42:18+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6616cd5ee429768df2bc8c",
    title: "Sometimes it be like that ",
    bodyText: "It gets betterPost ekS\xEA ekMaar eintlik twyfel ekRaak dit rerig beterIs die pyn en leiding minderOf kan ek 'n wesenlike verskil maak.So, nou hoop ekThat it gets better",
    date: "2019-10-30T20:56:35+02:00",
    handle: ""
  },
  {
    id: "5e6616d05ee429768df2bc93",
    title: "Meeeee",
    bodyText: "I love thee but I hate thy",
    date: "2020-03-01T00:05:48+02:00",
    handle: ""
  },
  {
    id: "5e6616db5ee429768df2bcb5",
    title: "Lyntjies en kolletjies ",
    bodyText: "Dit is volbring.\nVanaf vand\xE1g...\nDoen ek my eie ding. ",
    date: "2019-02-27T17:41:40+02:00",
    handle: ""
  },
  {
    id: "5e6616e15ee429768df2bcca",
    title: "Proton",
    bodyText: "Ek wens jy wou my bel;\nSelfs as jy net dronk was.\n\nEk mis jou.",
    date: "2019-12-16T23:15:19+02:00",
    handle: ""
  },
  {
    id: "5e6616eb5ee429768df2bce4",
    title: "Fok als",
    bodyText: "Miskien is hierdie\nNet nog een van my kak gedigte\nVan my aan jou\nJy met jou verskillende gesigte\n\nEn dan breek ek my hart oop\nEn l\xEA my binnegoed bloot\nEn sweer dis liefde\nMaar dit bly le\xEB, onvervulde fokken hoop\n\nEk dig my diepstes\nEn die ongepraatde woorde byt my kieste\nEn ek bly soek die son\nMaar jou woorde bly stom\n\nFok jou fok mense fok mans\nSkree ek omdat ek moeg en moedeloos raak\nFok alles fok die lewe\nMaar fok is net n woord wat in my gedagtes bly dans.\n",
    date: "2018-10-09T22:32:39+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616f05ee429768df2bcef",
    title: "Nagmerrie",
    bodyText: "Ek skrik wakker in die nag met 'n nagmerrieVas genaal in my breinDit voel om my lewe weg verdwaanMy hart klop diep in my keelEks angs bevangeMy trane roll terwyl ek wakker skrikWat 'n naare gevoelDis 'n droom van oorstroomingRegoor ons mooiste landEks angs bevange met die weteMy oudste kind en maatjie het gaan slaap op die strand in hul tentjie sodat hul elke brander kon hoorEk en my jongste kind was saam geweesWas besig om ons volgende vakansie te beplan toe die nuus versprei daars ' n orkaan wat margate so tref ekt My jongste by die woonstel gelos saam my moeder want ekt geweet sy sal veilig weesEkt begin te hardloop op die see sand waar my voete weg sak en ekt die grootte angs in my het dat ek my kind nie weer gaan sien.Met die hardloop bid ek ook om my kind te bewaak. Dan sien ek haar op die duine. My hart klop diep in my keel. Ek gryp haar met meening omhels haar hou haar styf vas en die trane rol rol van blydskap.Dan kom die woorde eks okay papa. Is jy regtig okay? ",
    date: "2019-10-09T02:02:51+02:00",
    handle: ""
  },
  {
    id: "5e6616f65ee429768df2bcfe",
    title: "Finale totsiens",
    bodyText: "Ek hoop Lady in Red het gespeel toe ouma by die hekke komEk hoop die Groot Ou het geglimagEn jou verwelkom met troosEk hoop ouma se uitrusting is nie boring wit nieEn dat daar 'n serpie of twee isEk hoop ouma het gevradat Hy baie genade na ons kant toe moet stuurWant die trane stop nie en die verlange is klaar te grootDankie dat ouma 'n ouma-ouma was &lt;3",
    date: "2019-07-27T19:43:30+02:00",
    handle: ""
  },
  {
    id: "5e6616f95ee429768df2bd08",
    title: "SONA",
    bodyText: "Dis nou 'n full-on roast\nCyril het gepraat van sy drome \nEn toe s\xEA Julius  Cyril moet wakker word",
    date: "2019-06-20T20:43:02+02:00",
    handle: ""
  },
  {
    id: "5e6617015ee429768df2bd24",
    title: "Siel. Versondig. ",
    bodyText: "'n Drol kan net so lank dryf voor hy ook sink in die duisternis in, en deel word van die kakkombers op die bodem wat die samelewing aanmekaar geweef hou.",
    date: "2019-01-17T03:32:37+02:00",
    handle: "blignaultwienand"
  },
  {
    id: "5e66170c5ee429768df2bd43",
    title: "Slak",
    bodyText: "Hier by my huis is daar slakke wat saans uitkom as die weer swaar is. Die probleem is dat ek hulle nie altyd mooi kan sien in die aand nie en so nou en dan word een geoffer onder my swaar voete...Afgelope paar weke voel ek soos een van daai slakke. ",
    date: "2019-09-18T15:09:58+02:00",
    handle: ""
  },
  {
    id: "5e66170e5ee429768df2bd49",
    title: "Verblind met die donker",
    bodyText: "\nin die lig\nis ek vanaand verblind\ngedagtes flits\nen my o\xEB flikker\nvanaand word ek bewus\nvan aande alleen in die\ndonker\nsaam met jou\n\ndalk is ek nagblind\nmaar vanaand \nis ek\nin die lig\n             ",
    date: "2019-03-10T22:00:22+02:00",
    handle: "#azilleconradie"
  },
  {
    id: "5e6617145ee429768df2bd5b",
    title: "wie sou kond(r)oom",
    bodyText: "wie sou kon droom\ndit \xF1 kondoom\nklein Sarel se ballon\nblaas doe grootste onder die son\ntoe sy ma hom gewaar\nword sy sommer naar\nwaar kry jy daai ding ?\nsussie se kop begin sing\nby sus se k\xEArel\nhy is regtig \xF1 p\xEArel.",
    date: "2018-10-04T10:12:08+02:00",
    handle: "oom koos muller."
  },
  {
    id: "5e6617145ee429768df2bd5c",
    title: "Titel",
    bodyText: "En toe sing die digter, alleen\nRond om half elf.\nSolide goud, dalk.\n\nDronk | nou.",
    date: "2018-09-24T22:36:20+02:00",
    handle: ""
  },
  {
    id: "5e66171f5ee429768df2bd7a",
    title: "Jy",
    bodyText: "Vandag het jy in jou suit langs my gestaan  en my teen jou vasgedruk toe ek gesnik het.  Ekt besef in daardie oomblik dat ek nooit nie langs jou wil wees nie. \nEk wens jyt geweet hoe dankbaar ek vir jou is. \nAl glo ek nie altyd nie. ",
    date: "2019-07-05T20:28:36+02:00",
    handle: ""
  },
  {
    id: "5e6617285ee429768df2bd8f",
    title: "Moderne Liefdesverhaal",
    bodyText: `"Ons is gemaak vir mekaar"Wel, dis wat Adam van Eva ook ges\xEA het,en toe...toe verraai sy hom vir 'n ander man se slang.`,
    date: "2019-08-16T19:47:39+02:00",
    handle: ""
  },
  {
    id: "5e6617295ee429768df2bd93",
    title: "Fok Jou",
    bodyText: "waarheid en vrede het jy lankal uit my woordeskat gekrap",
    date: "2019-02-03T21:17:19+02:00",
    handle: ""
  },
  {
    id: "5e66172e5ee429768df2bda4",
    title: "Telegram",
    bodyText: "My potloodhart skryf jy stomp\nen druk te hard om uit te vee\nStop\nStop\nStop. ",
    date: "2019-06-30T20:07:18+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617305ee429768df2bdab",
    title: "Ons is ons ouers maar met dwelms.",
    bodyText: "Al ons herinneringe, foto's wat ons nooit geneem het nie. Rooigesoende sigaretstompies, omvou in die p\xEArelblink perlemoenasbak: oorblyfsels van gisteraand. Geloof is nou net 'n nostalgiese fenomeen uit my kinderdae, iets wat ek in 'n prentjieboek raakgelees het. Ons is ons ouers maar met dwelms. Elke dag sterf iemand se ikoon. 'n Vliegtuig waai stadig oor die witgelekte blou uitspansel en ek kan nie help om aan jou te dink nie.",
    date: "2019-09-23T07:43:18+02:00",
    handle: "jacquesdeviljee"
  },
  {
    id: "5e6617325ee429768df2bdb0",
    title: "Is ons eintlik almal hartseer/ok?",
    bodyText: 'Jy is okWel dalk nie ok nie\nMaar lewendig\n\nDis hoe baie mense voel\nWel, ek dink dis hoe baie mense voel\nMaar hulle wil dit nie erken nie\n\nMense se altyd dat "ek wens net hulle het iets gese"\n"As hulle maar net my vertel het"\n"ek het geweet dit gaan sleg, maar nie so sleg nie"\n\nEn ek vra myself af\nMoes ek meer vra hoe dit rerig gaan?\nMoes ek aandring dat jy my vertel van die traumas wat jy verwerk?\nTerwyl ek self nie myne wil deel nie\nJy het dalk ander redes\nMy rede is egter dat ek nie wil he jy moet ook hartseer wees nie\nMaar ons is eintlik almal reeds hartseer en besig om goed deur te werk.',
    date: "2019-09-27T15:16:46+02:00",
    handle: ""
  },
  {
    id: "5e6617335ee429768df2bdb4",
    title: "gaia",
    bodyText: "Sekere vorme van bid is netpsigiese masturbasie. ",
    date: "2019-09-16T14:01:27+02:00",
    handle: ""
  },
  {
    id: "5e6617345ee429768df2bdb6",
    title: "Dis oulik, maar",
    bodyText: "A\nA\nA\nA\nA\nA\nA\nA\n\nAsseblief,\nWhatsapp mekaar net tog. ",
    date: "2018-12-12T22:18:49+02:00",
    handle: ""
  },
  {
    id: "5e6617375ee429768df2bdc3",
    title: "En So",
    bodyText: " \nDis 3 uur. Eks moeg, eks _insane_ met gevoelens,  \nen so skuif ek die nag in, huis toe seker, ek bly mos naby. Lang Straat is \u2018n gemors en so is ek, so hier is my plek. Tussen mense wat ek nie verstaan nie, in \u2018n land wat my nie soek nie, in \u2018n w\xEAreld wat my nie nodig het nie. Kripeer ek. ",
    date: "2018-08-06T19:50:25+02:00",
    handle: ""
  },
  {
    id: "5e6617385ee429768df2bdc6",
    title: "die coolste zine ooit",
    bodyText: "ons klyntji subsissions open.",
    date: "2019-04-06T00:02:09+02:00",
    handle: ""
  },
  {
    id: "5e66173a5ee429768df2bdcc",
    title: "alTErnatief",
    bodyText: "ek is                 post-apartheidng kerktoastiesnetmatriek cardek is                pre-die val van die patriargie koningkryk komovernight oats maturedfekpared                            ",
    date: "2019-10-11T01:04:41+02:00",
    handle: ""
  },
  {
    id: "5e6617445ee429768df2bde9",
    title: "Krismis2019",
    bodyText: "My Pa is doodMy Ma siniel\nHoe moet ek voor Jesus\nkniel?",
    date: "2019-12-24T13:07:19+02:00",
    handle: ""
  },
  {
    id: "5e66169d5ee429768df2bc0d",
    title: "Wat dan? ",
    bodyText: "wat as party digters net slim mense is wat nie weet wat om te s\xEA nie en hogere woorde uitspoeg met die hoop dat niemand sal verstaan nie sodat almal sal maak asof hulle wel insig het in die simmenss\xEAdinge om nie te lyk asof hulle (\xF3\xF3k nie) begryp nie?En dan  wen hulle pryse ook nog. ",
    date: "2019-09-22T12:10:07+02:00",
    handle: ""
  },
  {
    id: "5e6616a15ee429768df2bc1a",
    title: "...Miss...",
    bodyText: "Your voice seems louder somehow, \nYou take up more space in me now \n\u2026 \nBe Here \n... \nBe Near \n...\nand one day, I'll maybe say it without fear \nYou seem broken, in a delicate way, \nYour movements conspire against me, \nI want you \nI want you near, \nYou\u2019re familiar, yet unfathomable,  \nJust be here, \nIt seems so easy sometimes, \nand unmanageable other. \n\nI know it won't last,  \nI just want something to remember you by,",
    date: "2018-12-17T21:01:47+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616a75ee429768df2bc2c",
    title: "Wat Nou?",
    bodyText: "Ek skeur myself in twee,en nou is ek verveeld...",
    date: "2019-11-07T18:40:02+02:00",
    handle: ""
  },
  {
    id: "5e6616ab5ee429768df2bc3a",
    title: "Lus",
    bodyText: "Daars n reuk in die ho\xEB veld as dit re\xEBn, wat soos my ouers ruik - Hie iewers tussen diensplig en lus het hulle mekaar gekry.Getrek see toe en begin verloor. Eers net effe en toe teveel.Eers geloof en toe mekaar.Tot 20 jaar later en dood is al wat oorblyEn nou, Sit ek hier, in die ho\xEB veld en sien, hoe bruin-geel lus kan wees.",
    date: "2020-02-06T18:31:59+02:00",
    handle: ""
  },
  {
    id: "5e6616b15ee429768df2bc4f",
    title: "laments ",
    bodyText: '"blou" en "onthourym net t\xE9 veel metjou. ',
    date: "2019-11-08T20:55:11+02:00",
    handle: ""
  },
  {
    id: "5e6616b65ee429768df2bc53",
    title: "Kraak",
    bodyText: "Ek kraak oop om plek\nte maak vir die maan,\nvir vars lug\nen vir \u2018n somer lied.\n\u2022\nEk loer in om te sien\nof my siel nog daar l\xEA,\nnogsteeds pienk\nen rou\nen gereed?\n\u2022\nEk ruik die soetheid en kaneel\nen heuning.\nEk gly my vingers tussen\ndie stukkies wat nou hard is.\n\u2022\nEk huil oor hulle,\nin hulle \nen kyk hoe die gekristalliseerde\nsuiker in iets nuuts ontbind.\n\u2022\nEk kraak oop tussen die golwe\nen kyk in die oog van die grot.\nEk fluit \u2018n kalmerende deuntjie\nvir die donker en was tussen\ndie pienk en die rou\nmet soutwater.\n\u2022\nEk kraak oop om plek\nte maak vir die maan,\nvir vars lug\nen vir \u2018n somer lied.\n\u2022\nEk kraak oop om plek\nte maak vir die son,\nvir die see\nen vir jou.",
    date: "2019-02-11T15:42:53+02:00",
    handle: "liesekuhn"
  },
  {
    id: "5e6616bc5ee429768df2bc61",
    title: "Kerk",
    bodyText: "Kom oor\nHier is: kaas, wyn, onion marmalade en bank-naps. \n\nVal net in. ",
    date: "2019-10-27T17:01:04+02:00",
    handle: ""
  },
  {
    id: "5e6616bf5ee429768df2bc66",
    title: "Jy. ",
    bodyText: "Jys \u0144 doos, maar...Jou sigaret as wat nog aan my kussing vas klou herinner my aan hoe jou armhare teen my vel geskuur het en hoe jou lippe teen my nek kon smeltJys steeds \u0144 doos. ",
    date: "2019-10-17T12:15:30+02:00",
    handle: "@eks.talita.x "
  },
  {
    id: "5e6616c05ee429768df2bc67",
    title: "Glansgeleenthede",
    bodyText: "Ligte, kameras, Durbanville mamma's en aksie!Blinker-kant uit China Town.Rooi fluweel met polka. Handelsmerke en jean-tears. Los hare en klein ...kuite. Sweet en grimmering. Wanneer laas het jy 'n meisiekind gesien en geweet: j\xFD, meisiekind, gaan voor 14 dagga rook. Oor 'n ander een raak dit duidelik: op 16 ken sy \xE9lke kondoom-brand op die rak. Wanneer laas het jy 'n kind gesien en geweet: ander gaan j\xF3\xFA leef. Jy sal eendag wel 'n Mercedesbus ry, maar jy is n\xE9t 'n trophy wife. Of 'n seun, en dink: ons almal weet jy's hier, praat net sagter. Of 'n seuntjie wat n\xF3\xF3it in sy lewe gaan swaarkry nie. Maar wat ook 'n kind gaan sterf.\nVergrootglase is cruel. So ook die kollig. \n\n\n\n",
    date: "2019-09-18T23:28:34+02:00",
    handle: ""
  },
  {
    id: "5e6616c25ee429768df2bc6e",
    title: "bloumerkies",
    bodyText: "hey\n\nHeyoo\n\n[blue\nticked]\n\nWtf. ",
    date: "2019-04-16T21:51:05+02:00",
    handle: ""
  },
  {
    id: "5e6616c45ee429768df2bc75",
    title: "Seer",
    bodyText: "liefde, vandag, vir my.\nverniet verniel\nhuiwerige geraamtes.\nverniet vernietig\nVirfokkengeenrede.\n\n00:20 | 24th of September 2018, Monday morning.\n",
    date: "2018-10-03T22:52:44+02:00",
    handle: "the.stroy"
  },
  {
    id: "5e6616c55ee429768df2bc79",
    title: "Kaapstad",
    bodyText: "Kaapstad - \nDie droom wat ons vir mekaar in lieg, by familie braais terwyl ons kuier in vaal, plat dorpe. \n\nHier volg \u2018n lys waaroor niemand praat nie: \nNiemand praat oor: \n\nHoe as die son skyn alles na pis ruik nie,  \nOor wat \u2018n fokop Langstaat heel dag is nie en Kloof straat heel nag is nie, \nOor hoe die mense in die selfde blok as die gym en yoga klas bly maar in hulle Polos en Jimnys daar heen ry, \nOor hoe hulle 11uur in die more draf op die promenade terwyl die res van die land werk en/of sterf  \nOor hoe elke hoek besmet is met \u2018n Coffee-shop wat bankrotspeel net om plek te maak vir die volgende een. \nOor die busse wat hulle nie ry nie , Die busse met hulle teoretiese skedules is eksklusief vir di\xE9 wat die kinders kom groot maak. \nOor hoe almal \u2019n duur fiets besit maar te dronk is om dit te ry. \nOor hoe baie geld Orms maak uit film kameras uit nie, \nAlmal voel iets, maar niks doen, \nAlmal hier het \u2018n \u201Cproject\u201D \u201CBut we are just like... waiting for stuff, you know\u201D \nOor hoe hulle honde meer kry as die average persoon elders. \nOor hoe hulle elke lang naweek fokof uit die plek, maar jou wil oortuig om te kom, \n\nPaar Tips for Visitors  - \n\nHoe leliker en slegter iets is of proe, hoe beter is dit. \n\nWil jy klere koop onthou: \nSuperbalist is die Jet en Takealot nou PEP, Salvation army sal jou red.\n\nMaar heel laas,\ndie berg is mooi en die bier by Van Hunks is lekker. \nDaar\u2019s so baie langs so min. \nGeniet dit",
    date: "2018-08-10T21:40:05+02:00",
    handle: ""
  },
  {
    id: "5e6616c85ee429768df2bc80",
    title: "Dis Net Ek",
    bodyText: "Dis net JyEn dis net EkDie twee van onsAlleen, privaatPubliek Ek vertrou jou met wat ek skryfJy vertrou my met wat jy lees Ek en jyEk sien jou nieMaar sien jy my?Ons sien dieselfde woorde Van verskillende kante afVan dieselfde kant af dalk?Is ek jy?Is jy ek?Ken ek jou?Ken jy my?Ken ek my?",
    date: "2019-08-03T18:15:25+02:00",
    handle: ""
  },
  {
    id: "5e6616d15ee429768df2bc99",
    title: "John Deere ",
    bodyText: "Aan die\n\nGoddelose\nAwkward \nYogic\n\nHarmonieuse\nIntersex\nPlantetende\nSelf referencing\nTranscendental\nEiewys\nRevisionist,\n\nek is lief vir jou \nin die geheim. \n",
    date: "2018-11-17T00:20:44+02:00",
    handle: "Boerewors"
  },
  {
    id: "5e6616d25ee429768df2bc9b",
    title: "God is n poes",
    bodyText: "Ek wens dit kon net werk",
    date: "2018-12-07T21:02:57+02:00",
    handle: ""
  },
  {
    id: "5e6616d35ee429768df2bca0",
    title: "Van Wyk Louw se Grense ",
    bodyText: "Vanmiddag lees ek Van Wyk Louw se 'Grense'\nen ek vind aanklank by sy wense\nen sy ritme, rym en kense\nlewensuitsig, en ek wil\nmyself so uitdruk en graag\nook na die hemel reik\nen met my woorde s\xEA\nwat ek bedoel,\npresies hoe ek voel\nsonder skrome. ",
    date: "2019-06-12T21:44:28+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6616de5ee429768df2bcbe",
    title: "Sleutel Tot My Hart",
    bodyText: "In die donker kamer van my hart sluit ek myself toe en wag vir iemand om te klop\nJy het verbygestap en ek het my asem opgehou en gehoop, dalk di\xE9 keer\nMaar jy het gehunker by die deur en toe moes ek geweet het, jy gaan net vir 'n rukkie bly\n\nTog het ek my hart vir jou oopgemaak,\ngeheime en myself met jou gedeel\nOp die ou einde het ons net nie gepas nie, altans dis wat jy s\xEA, en gee jy die sleutel maar vir my terug\nNou sit ek weer hier toegesluit in die donker kamer van my hart, en ek wag\nDalk di\xE9 keer...",
    date: "2018-12-04T21:19:21+02:00",
    handle: ""
  },
  {
    id: "5e6616e05ee429768df2bcc5",
    title: "Lus",
    bodyText: "Lief?\nJa. \nLus? \nNee.\nDis nou jammer.\n",
    date: "2019-07-23T18:15:08+02:00",
    handle: ""
  },
  {
    id: "5e6616e05ee429768df2bcc7",
    title: "Sy",
    bodyText: "Sy sien sy sy deur die sy\n\n",
    date: "2018-08-05T18:16:08+02:00",
    handle: "Newageadam "
  },
  {
    id: "5e6616e55ee429768df2bcd6",
    title: "~",
    bodyText: "Dis 'n Ons ding, babe",
    date: "2019-05-05T19:19:57+02:00",
    handle: ""
  },
  {
    id: "5e6616eb5ee429768df2bce5",
    title: ".",
    bodyText: "Ekt gedink die goed sal makliker wees,\nJy voel anders, en eks nes die ander",
    date: "2019-05-16T17:44:30+02:00",
    handle: ""
  },
  {
    id: "5e6616f35ee429768df2bcf8",
    title: "Studente",
    bodyText: "Kaapstad en Frida Kahlo is nie 'n persoonlikheid nie",
    date: "2019-03-08T18:16:54+02:00",
    handle: ""
  },
  {
    id: "5e6616fe5ee429768df2bd1c",
    title: "Jammer  ",
    bodyText: "Ek s\xEA jammer. Dan doen ek dit weer. ",
    date: "2019-10-12T23:20:21+02:00",
    handle: ""
  },
  {
    id: "5e6616ff5ee429768df2bd1f",
    title: "Excerpt van \u2018n gesprek op \u2018n stoep in Nederland",
    bodyText: "1) Ek het my pa gebel, terwyl hy \u2018n lift gevang het met \u2018n bussie van een van die gemeentelede van Reitz, om vir hom te s\xEA ek gaan nie met hierdie man kan trou nie, hy het maar heeltyd net mmh ges\xEA, maar op \u2018n stadium hoor ek: \u201CDanie, ek dink ons moet stop vir \u2018n koffie\u201D. 2. Ek wou graag in standerd 9 gaan werk het saam met my broer in Engeland om geld te maak om te gaan swot. My pa het ges\xEA dis reg, op twee voorwaardes. Die eerste een was ek moes self vir die skoolhoof vra of ek my eksamen mag mis, en die tweede een was, ek moet geld leen by my oom Johan met die leeuplaas.3. My ma s\xEA sy hou nie daarvan om wyn te drink nie, dit maak haar arms bewerig.4. Andr\xE9 s\xEA altyd: \u201CJy weet, jy het gisteraand een van ons beste wyne oopgemaak\u201D. \u201CO\u201D, s\xEA ek \u201Cmaar dit proe vir my lekker\u201D. ",
    date: "2019-08-05T03:41:41+02:00",
    handle: ""
  },
  {
    id: "5e6617015ee429768df2bd25",
    title: "Delete",
    bodyText: "Ah. \nHoe lekker om Tinder te kan uninstall. ",
    date: "2020-02-07T16:19:46+02:00",
    handle: ""
  },
  {
    id: "5e66170a5ee429768df2bd3c",
    title: "Chaos. ",
    bodyText: "Galileo en Rorsharch l\xEA op hulle rug en bespreek die wolke:Rorsharch vra: wat sien jy, Galileo?\nEk sien... dat een wolk stilstaan en ander wolke beweeg rondom di\xE9 wolk.\nWat sien jy, Galileo?\nDie chaos van verandering en staties bly. \nWat sien jy, Galileo?\nVerandering is onkeerbaar. Geeneen gaan dit ontspring nie. Die aarde draai\nen draai\nen draai\nen die wolke verander rusplek om my, ver van my en skawend aan my broosheid\nWat sien jy, Galileo?\nNatuur is\ngenadeloos\nonveranderbaar\nonverskillig \nteenoor my verstaan van haar\ngeheime \nvir my. ",
    date: "2019-11-14T08:21:49+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617105ee429768df2bd4f",
    title: "Lyrics",
    bodyText: "The light at the end of the tunnel is a run away train.",
    date: "2018-12-06T13:24:09+02:00",
    handle: ""
  },
  {
    id: "5e6617115ee429768df2bd51",
    title: "god. god ? g#d",
    bodyText: "Dit kon seker erger wees. Ek het baie om voor dankbaar te wees. \u2018n Huis\n\u2018n Werk\n\u2018n 3-gang maaltyd \n3-keurig \nOggend oats \nMiddag crackers \nEn aand \u2018n glas water vir \n3-gang\nVir\n\nZolpimed\nEpitec\nZytomil \n\nDe moer met jou goedbedoelde narratiewe \n(onbewysde navorsing)\noptimisme\nDe moer met Job\nEk is nie nog \u2018n verhaal nie...\n\nEk is Job. \nEk is Job. \nEk is Job. \n\nDeurdrenk my met u \n(liefde)\nbewyse as mens se veerkragtigheid\nIn die volheid van u volmaaktheid\nIs ek nie dankbaar nie. \nEk\u2019s befok. \nHoor u?\nEk aanvaar nie wat my toege\xEBin is nie. \n\n\n",
    date: "2019-12-12T21:24:52+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617115ee429768df2bd54",
    title: "(uitge)brand",
    bodyText: "jou vuurhoutjie is dood, so eenvoudig soos dit. in tye soos hierdie is dit maklik om eufemisties te raak en oordrewe metafore in te span.\n\nmaar man dit was so ampertjies, ons het nounet nog so gestaan met ons hande bak en kreun geluide maak soos ons die vlammetjie probeer beskerm en afkeer van die wind\n\njy het nog gese ons moet mooi werk want dit is die enigste een in jou pakkie. ons het ons bes probeer maar helaas hier staan ons nou\n\nin die afwesigheid van vlamme staan ek en kontempleer,\nis dit nie scary dat ons nie kan onderskei tussen genoeg en te veel nie?\nek bedoel,\ngeen suurstof en die vuurhoutjie het geen hoop vir brand nie, wel suurstof maar geen windjie om dit rond te beweeg nie en jou uiteindelike kanse om 'n vuur te begin is skraal. 'n oordosis wind en jy kan weer nie hoop dat enige vuurhoutjie sal oorleef nie\n\nasof uit nerens hoor ek iets kraak en knetter in die verte, dit ruk my uit my dagdroom\n\ndie  vuurhoutjie in jou hand is steeds uitgebrand, maar soos ons langs die konka staan verbeel ek my ek ruik rook en voel die hitte van vlamme wat wild en woes brand. sonder keer, sonder blus, ongetem, vry\n\n-in memoriam",
    date: "2019-01-26T18:28:50+02:00",
    handle: "arnojvvuuren"
  },
  {
    id: "5e6617175ee429768df2bd65",
    title: "Onsamehangende idees vir 'n Onsamehangende gees ",
    bodyText: "_ medley_\n\nHet jy my nie afgelaai die laste keer nie? \nNie? Nee \nEk\u2019t gaan sit \nEn verander, \nEk wou leer, ek wou leef,  \nEn verval toe, \n\u2018n lafhart vir sy foute en hom self. \nEn as ek werklik in myself kon glo sou sal ek my inpak op my naastes sien. \nEk loop darem nog \nJou woorde vibreer my bors binne  \n\u201Cmoet my asb nie weer kontak nie\u201D \nJy weet ,  \nJy weet dat hierdie plek luister nog vir jou, \nDie bakstene verkrummel tot confetti onder jou voete wat weg loop. \nIs dit vrede?  \nIs die dan geluk? \nIs di\xE9 myself my plafon \nGes\xEA wat ek kon... Konnie",
    date: "2019-01-21T20:07:31+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6617175ee429768df2bd66",
    title: "Een, twee...",
    bodyText: "derde wiel alweer,\nek wens ek was meer.",
    date: "2018-11-04T01:17:26+02:00",
    handle: ""
  },
  {
    id: "5e6617205ee429768df2bd7e",
    title: "Sypaadjie haiku",
    bodyText: "'n Geel fiets staan stilOp 'n sypaadjie langs 'nRoosmalvapotplant",
    date: "2019-08-15T14:33:00+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617255ee429768df2bd86",
    title: "groet",
    bodyText: "jy en 2019 albei laat ek agter",
    date: "2019-12-31T20:54:43+02:00",
    handle: ""
  },
  {
    id: "5e6617315ee429768df2bdaf",
    title: "Anything",
    bodyText: "I've been writing down my feelings,to cope with how the world movesand changes around me. \nI wouldn't call it poetry. \nI wouldn't call it anything. Our lips crash together, like water and magma.Steam rises. It was in the heat of the momentYou did not tell me you belong to someone else; \nyour arms felt like my home. \nYou wouldn't call it poetry. \nYou wouldn't call it anything.",
    date: "2019-10-13T06:47:10+02:00",
    handle: ""
  },
  {
    id: "5e6617335ee429768df2bdb3",
    title: "preekmense",
    bodyText: "Mag hierdie jaar 'n ommeswaai na opregtheid wees met 'n ballsy helping eiewaarde en praktiese begrip. Mag perspektief voorvat om die nimmereindige aftrek van gravitasie te oorkom. Daagliks.  Vir ons almal. Vir die wat dit nodig het. Vir die wat dit nie wil h\xEA nie. Eiewaarde, yster balls, sterk ovaries en bronsborste vir elk! ",
    date: "2020-01-10T22:47:14+02:00",
    handle: ""
  },
  {
    id: "5e6617405ee429768df2bddf",
    title: "Mathilde ",
    bodyText: '"The strange thing is, Mathilde,\nit comes from the inside,\nyou know" irritably ashing her cheap cigarette into the Goodyear tyre ashtray. ',
    date: "2018-10-15T17:15:53+02:00",
    handle: "konfytvrou"
  },
  {
    id: "5e6617455ee429768df2bdee",
    title: "Othello ",
    bodyText: "in jou ma se voorkamerhet ons Shakespear ontleed\ntotdat ons na maande se ywer\nOthello se karakterswakheid\nin ons self sou moes kon herken\n\nvir jou skoolhoof-pa het ons altyd \nMeneer ges\xEA, selfs toe ons\nal op universiteit was en triomferend\nas jong argitekte-in-wording\neenkeer teruggekeer het Boland toe\nom \u2018n ou Kaapse riempiestoel\nna te bou\nin Gert Plank se houtwerkklas\n\nons twee se potloodsketse\nvan ou stoele\nwas so lewensgetrou\njy kon amper die meubelolie ruik\nvan \u2018n akademiese studie\nhet ons aktyd\n\u2018n fokken kunsprojek gemaak\nsodat almal voorspel het\nhoe ons die w\xEAreld nog gaan verower\n\ndog Othello het nie geweet\nhoe goed hy dit het nie\nen het sy kanse\nsoos \u2018n pro\ngaan verspeel",
    date: "2019-07-13T11:21:37+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6616985ee429768df2bbfc",
    title: "Laat Aand Vrystaat",
    bodyText: "ek sit hier in my stukkende perdjie \nen ek word kwaad,\nkwaad vir die lewe en \nkwaad vir die man op straat\nek trek hoog en ek volg \nhy klim uit en ek soen hom \nek bly kwaad,\n\nmy vrou en kind sit in die kar\npap baba en ongelukkige vrou\nek is kwaad want die lewe skuld my\n\nek sit hier in my stukkende perdjie \nen ek is dronk, kyk in die truspie\xEBl\nen ek word kwaad, \nek wil baklei\niemand donnner en wys wie is man\n\nmy vrou en kind sit in die kar\npap babatjie en verle\xEB vrou\nek is kwaad want die lewe skuld my \n\nek sit hier in my Hyundai \nen ek probeer baklei,\nword gelaat met die impotensie,\nvan vrou en kind\nhulle sal nooit genoeg wees. \n\nmy vrou en kind sit in die kar\npap baber'tjie en ongelukkige mens\nwant hulle was nooit genoeg",
    date: "2019-09-07T15:19:05+02:00",
    handle: ""
  },
  {
    id: "5e66169b5ee429768df2bc05",
    title: "Writing sucks",
    bodyText: "I shall write.\nI shall write. \nAnd I shall write well. \n\nI shall also begin great writing\nonly tomorrow....which makes today a\ngood day for bad writing. ",
    date: "2018-11-20T00:33:56+02:00",
    handle: ""
  },
  {
    id: "5e6616a75ee429768df2bc2d",
    title: "Vanaand",
    bodyText: "N\xE1 meer as 'n jaar\nSit ons vanaand by 'n bar\nEk skrap die moed bymekaar\nEn wonder\nEn vra:\n\nKan ons weer praat?",
    date: "2019-09-03T20:57:25+02:00",
    handle: ""
  },
  {
    id: "5e6616a85ee429768df2bc32",
    title: "die anisoptera",
    bodyText: "ek bring vir jou my mooiste klere\nmy hele lyf en klein klein koninkryk \nwaar ek apaties en socially akward \nkoning kan kraai en oorweeg selfs\ntoe jy nie my flat verniel nie\n'n spasie in my hart. \nkort na ons eerste keer\nop my drumpel die aand \nkon jy deur die skreef sien:\ndie oop tasdeksel\nen gaar naweek sak\nen stukkende kartondoos \nen lapsak goed\nen so vinnig soos jy met jou naaldekoker wese hier kom land het swiep jy weer op\nen weg\n\nJy was te klein vir soveel bagasie. \n",
    date: "2019-01-02T01:48:46+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6616b15ee429768df2bc4d",
    title: "Suffocating",
    bodyText: "This space is too small\nAnd I\u2019m climbing the walls",
    date: "2018-11-18T16:45:26+02:00",
    handle: ""
  },
  {
    id: "5e6616b95ee429768df2bc5c",
    title: "bukowski",
    bodyText: "in jou o\xEB swem whisky en uit jou hand bloei inkek wens ek was die Janevir wie jy 'n drankie wou skinkmaar ek is soos daai sleg hoerwat jou gistraand weer slegges\xEA heten al wat ek eintlik wou weetis of jy my lief geh\xEA het.",
    date: "2019-08-28T16:00:44+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616c05ee429768df2bc68",
    title: "Betekenis? Bekentenis? ",
    bodyText: "Vanaand is tog maar net 'n oogwink in die ewigheid of hoe? ",
    date: "2019-10-21T21:48:27+02:00",
    handle: ""
  },
  {
    id: "5e6616cb5ee429768df2bc88",
    title: "10111",
    bodyText: "my ma het altyd ges\xEAsy gaan die duiwel bel om my te kom haalas ek myself nie kan gedra nieen mens gaan heltoe as jy stout issy het nooit ges\xEA hel kom laterna jou toe en daar is niemandoor om te bel nie. ",
    date: "2019-12-29T20:29:33+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616cf5ee429768df2bc92",
    title: "Selfmoord",
    bodyText: "Philip Kortstraat het moord gepleegEk is doodDaar is net ons",
    date: "2019-07-27T13:00:03+02:00",
    handle: ""
  },
  {
    id: "5e6616d25ee429768df2bc9a",
    title: "Kerk 2",
    bodyText: `Ek kyk "Kunsvlyt" op Kyknet soos 'n ou tannie op 'n Sondagaand. (Dis 'n program oor Afrikaans tannies wat arts + crafts doen.) 

Hy's doenig in die kombuis met ons Marmite + kaas toasties en Earl Grey. 

Is hierdie realiteit uiteindelik beter as die gedeelde droom? `,
    date: "2019-10-27T20:00:54+02:00",
    handle: "Hartbons"
  },
  {
    id: "5e6616d95ee429768df2bcaf",
    title: "Vryevers ",
    bodyText: "Dis elke keer dieselfde seerWeer en weerJy sal dink na die dertiende keerRaak dit makliker Maar eintlik raak dit net aakliger ",
    date: "2019-08-06T23:27:49+02:00",
    handle: ""
  },
  {
    id: "5e6616dc5ee429768df2bcb8",
    title: "september",
    bodyText: "Ek skuif my HB potlood agter my oor in agter my hart in agter jou in.\nEk slaap met altwee o\xEB oop want ek wil sien as jy terug kom ek wil sien as jy lag ek wil sien.\nEk water net elke tweede dag my roosboom\nhy het maande terug al gevrek.\nEk verlang na die reuk van jou en die smaak van jou en na jou.\nEk skuif my HB potlood agter my ooglede in agter my golwe in agter my sinne in en wag geduldig\nen geduldig wag ek\nmet my o\xEB oop\nmet my HB potlood in my hand\ndat jy kom\ndat jy terug kom\ndat jy in die lente na my toe kom. ",
    date: "2019-09-02T15:18:59+02:00",
    handle: "mariska.bolleurss"
  },
  {
    id: "5e6616de5ee429768df2bcbf",
    title: "Afrikanernasionalisme",
    bodyText: "Loftus 4 Jesus\nLoftus Marais\nHabana wat oor 'n wit lyn l\xEA\n\n",
    date: "2018-09-11T15:37:02+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6616e15ee429768df2bcc9",
    title: "\u{1F46D} \u{1F574}",
    bodyText: "*tjomsone",
    date: "2019-07-28T23:34:24+02:00",
    handle: ""
  },
  {
    id: "5e6616ee5ee429768df2bcea",
    title: "shaking hands with Death",
    bodyText: "Twee begrafnisse \nin \u2019n week is\ngenoeg om my te herinner",
    date: "2019-06-02T10:29:12+02:00",
    handle: ""
  },
  {
    id: "5e6616f85ee429768df2bd05",
    title: "Goed in die sleg",
    bodyText: "Nee, maar dit het my baie geleer ",
    date: "2019-09-29T21:53:06+02:00",
    handle: ""
  },
  {
    id: "5e6616fd5ee429768df2bd16",
    title: "INTERseksIE",
    bodyText: "Oranjezicht \nOranje Blanje\nOranjestad \n\nOros, vat die gap man. ",
    date: "2019-06-18T00:01:02+02:00",
    handle: ""
  },
  {
    id: "5e6616fd5ee429768df2bd18",
    title: "dakke ",
    bodyText: "nu   we   fa   se   ga \nan   ho   pe   li   kn \nou   an   de   rv \noo   ru   it   si\ngt   te   br\nin   g. ",
    date: "2018-12-19T12:05:50+02:00",
    handle: ""
  },
  {
    id: "5e6617025ee429768df2bd27",
    title: "Somtyds is dit soos tandetrek",
    bodyText: "toe ek weer wakkersnak\nmet qwerty in spie\xEBlskrif\nop my voorkop ge\xEBts\nen \u2019n grafsmaak in my mond\nonthou ek die lang nag\nvan stomp vingers\nen gekonstipeerde muse\nen toe skryf ek maar di\xE9\nnet om darem\niets geskryf te h\xEA\n",
    date: "2018-08-06T11:08:04+02:00",
    handle: ""
  },
  {
    id: "5e6617085ee429768df2bd37",
    title: "Ek wil jou fok (mar lelik) ",
    bodyText: "Byt en skeer\nDie piel van die lewe deur",
    date: "2018-12-08T20:14:46+02:00",
    handle: ""
  },
  {
    id: "5e66170b5ee429768df2bd41",
    title: "Verlanger",
    bodyText: "Ek voel jou synOns almal is nog lief vir jouAl beteken ons niks meer",
    date: "2019-10-14T20:36:40+02:00",
    handle: ""
  },
  {
    id: "5e66170d5ee429768df2bd45",
    title: "\u{1F644}",
    bodyText: "Qwertyuiopasdfghjklzxcvbnm,.\n#R&_-123?@()=+456!':%/789\" *, 0.\n$\u20AC\xA5\xA2\xA9\xAE\u2122~\xBF[]{}<>^\xA1`;\xF7\\|\xA6\xAC \xD7\xA7\xB6\xB0\n",
    date: "2019-02-24T01:22:53+02:00",
    handle: "\xAE0\xA9k\u20ACR "
  },
  {
    id: "5e66170d5ee429768df2bd46",
    title: "Post thyself",
    bodyText: "s\xEA hy\nmaar ek is\ninternetskind sonder identiteit\ngedigte gebroke, gebore uit spyt. \n",
    date: "2019-06-09T18:37:35+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66170e5ee429768df2bd4a",
    title: "Vrydagaand. \u{1F623}",
    bodyText: "Dokters en hulle verdomde oorywerige sk\xEArtjies 20 jaar terug. Vandag sit ons met 'n volk onbedekte, dro\xEBrige mans. ",
    date: "2019-10-05T13:28:00+02:00",
    handle: ""
  },
  {
    id: "5e66171a5ee429768df2bd70",
    title: "Naeltjie",
    bodyText: "Dis daa\xED lekker tyd van die jaar: Krismis,en al waarna ek uitsien, is soos Septimus sal s\xEA: 'n koninklike feesmaal!Voorgereg was 'n mond-waterende lusmaker vir wat kom...Die gammon en beestong is verslind, en half versadig, peusel ek aan hoender en n\xF3g beesvleis...Opgewonde vir die trifle wat voorl\xEA - byt ek 'n versteekde naeltjie stukkend,en besef ek jy is maar eintlik dieselfde: 'n bitter naeltjie",
    date: "2019-08-19T23:30:01+02:00",
    handle: ""
  },
  {
    id: "5e66171c5ee429768df2bd76",
    title: "Monstermasjien",
    bodyText: "Alles is baie vreemd vir my",
    date: "2019-03-04T18:06:03+02:00",
    handle: ""
  },
  {
    id: "5e6617225ee429768df2bd80",
    title: "My kanker  poppie - vir jou",
    bodyText: "Die groot bruin oge diep weggesink.\nDie seerkry frons en opgetrekte kniee.\nDie eina uitroep van onverstaanbare pyne.\nMy hart krimp op en ek vat aan die dun armpie hier by my. Kon ek tog maar jou pyn myne maak.\nDie moederhart aan die anderkant blink van ongestorte trane. My kind my kind my kosbare kind hoekom jy.\nEk staar af na my voete. Oorvol van agressie en woede. Ek voel die sand van tyd deur my tone drup. My arms word lam van magteloosheid. My brein verstar, deurweek met n warboel van onbeantwoorde vrae.\nEk sien jou uurglas uitloop en wonder hoeveel sand is nog oor in myne. Jy is nog so jonk en ek wens ek kon van my uurglas sandjies oorgooi in joune....\n",
    date: "2019-05-27T22:07:10+02:00",
    handle: ""
  },
  {
    id: "5e6617275ee429768df2bd8d",
    title: "\u{1F92E}",
    bodyText: "Dink vinaand and jou",
    date: "2019-03-28T20:07:02+02:00",
    handle: ""
  },
  {
    id: "5e66172c5ee429768df2bd9e",
    title: "JHB\u300B\u300BCPT",
    bodyText: "(Insert poetic projections here) \n\n...maar langpadry maak my kak...\n\n\n\n\n\n\n\n\n\n\n\n...jags.  ",
    date: "2019-12-29T13:32:31+02:00",
    handle: ""
  },
  {
    id: "5e66172f5ee429768df2bda6",
    title: "Sakekamermaats",
    bodyText: "Alles is okay.\nIs alles okay? \n\nSondagmiddagsiekte ensovoorts. ",
    date: "2019-10-21T00:47:12+02:00",
    handle: ""
  },
  {
    id: "5e66172f5ee429768df2bda7",
    title: "Kyk vir my",
    bodyText: "Jy kon totpouse gebly hetdan soujy my ten minstein volle glorie konsien. ",
    date: "2019-08-15T06:42:41+02:00",
    handle: ""
  },
  {
    id: "5e6617325ee429768df2bdb1",
    title: "Titles is als",
    bodyText: "Officially getroud of happily getroud? ",
    date: "2019-12-05T22:17:56+02:00",
    handle: ""
  },
  {
    id: "5e6617325ee429768df2bdb2",
    title: "'n groot natte",
    bodyText: "pppppp\npppppp\nppperongeluk \nalweer 'n pppoes gewees\n",
    date: "2019-01-18T21:50:26+02:00",
    handle: ""
  },
  {
    id: "5e6617355ee429768df2bdba",
    title: "Ja? ",
    bodyText: "Nou s\xEA my dan,wat \xEDs liefde? ",
    date: "2019-07-23T15:24:17+02:00",
    handle: ""
  },
  {
    id: "5e66173d5ee429768df2bdd5",
    title: "AA",
    bodyText: "Ek haat jou\nEn dat ek van jou hou",
    date: "2018-09-23T21:46:38+02:00",
    handle: ""
  },
  {
    id: "5e6617415ee429768df2bde2",
    title: "Toe ek Agtien was",
    bodyText: `Ek onthou dit soos gister,al was dit vandagAgtien in Aandklas;Sestien as ek lagJy was nie daar nieEk het besluit dis okaySoos Renier ges\xEA het:"Wie van ons is wie ons dink ons is?"Maar: "Jy is die een wat ek wil h\xEA jy moet wees."Soms moet jy eers die vo\xEBltjie vangvoor jy hom kan laat gaan.Dan moet jy hoop hy vlieg,want vo\xEBltjies is bangEk het hom 'n geheim beloweToe het ek hom vertelEk het laas jaar per ongeluk in sy slaap gevalDit was mooi vir myDit was mooi verbyDit was nie myne nieSlaap sag, Renier.Vergeet van my as jy kan `,
    date: "2019-10-31T11:18:15+02:00",
    handle: "@milli.burd "
  },
  {
    id: "5e6617435ee429768df2bde8",
    title: "01h46 | ",
    bodyText: "hierdie hitte\nhet vir my.\n\n",
    date: "2018-10-23T01:49:01+02:00",
    handle: "Eksdood"
  },
  {
    id: "5e6616945ee429768df2bbf5",
    title: "op die swabiese jura",
    bodyText: "op die swabiese jura leef ek voort\nop die waterskeiding, op die rug\ntussen die rein en donau se bolope\nis nog alpe, nog oseaan in sig\nnie onder in die dal nie en ook nie hoog\nteen \u2018n grasbedekte rou kalkkliphang\ngesoom deur jeneverbossies en denne\nleef ek anoniem, uitheems\nen uiters veilig\n\nop die swabiese jura val herfs plotslik\noor die dorpie as die son wegraak\nen ek uitkyk oor dakke, misre\xEBn oor\nrooi te\xEBldakke en skuins kubisties opgestapelte murasies oortek van mos,\nskimmel op die wit middeleeuse pleistermure wat langsaam verbrokkel,\nmaar nogtans eeue lank bly staan\n\nop die swabiese jura is alles vol vog,\nrou en koud as ys die klip laat bars,\nbars my lip, die gras vrek en alles sterf,\nmaar tog bly l\xEA tot volgende seisoen\nen ek bly ook voortbestaan\nin \u2018n onbeslote tussenw\xEAreld, vaevuur,\nwant niks mag ooit vergaan\nop die swabiese jura nie",
    date: "2018-09-06T06:15:27+02:00",
    handle: "antonbarnard"
  },
  {
    id: "5e6616955ee429768df2bbf8",
    title: "Nie eintlik nie  . ",
    bodyText: "Soms voel ek okaymaar nie eintlik nie,Net in ma se arms, of pa se bakkie, maar soms is dit juis die plekke waar ek die minste in die wereld wil wees, dan dink ek weer daaroor, wantEks okay, wel nee nie eintlik nie ",
    date: "2019-10-30T22:20:12+02:00",
    handle: "eks.talita.x"
  },
  {
    id: "5e6616995ee429768df2bbff",
    title: "2019 koebaai",
    bodyText: "Nuwejaarsvoorneme?Dat ek goed genoeg kan wees vir myself...en vir jou",
    date: "2019-12-30T20:17:21+02:00",
    handle: ""
  },
  {
    id: "5e66169c5ee429768df2bc09",
    title: "Skeinatklas",
    bodyText: "Die padda in die pot kookwater storie- -suburbia en debietorders is dieselfde. Sterkte. Vandag. ",
    date: "2019-07-14T00:30:16+02:00",
    handle: ""
  },
  {
    id: "5e66169c5ee429768df2bc0a",
    title: "Die skrywer is 'n doos",
    bodyText: "Ek het jou amper laat weet dat ek Saterdag in Joburg isDaar waar jy deesdae woonMaar dis ek wat dit tot 'n einde gebring hetGes\xEA het ek het nie tyd nieSonder aarsel ges\xEA het dis verbySonder om enigsins vooraf enige tekens te geeSommer net 'n Insta DM. So nou dat ek minder gestres is en eintlik verveeld isSoek ek weer jou aanvaarding, aandag en 'n tipe van aanbidding Donner, eks selfsugtigMaar ek werk daaraanSo ek het nie die boodskap gestuur nieWel nie vanaand nieMaar dalk m\xF4reNou vra ek myself af of hierdie maar net nog 'n manier van aandag soek is",
    date: "2020-02-26T21:59:42+02:00",
    handle: ""
  },
  {
    id: "5e66169e5ee429768df2bc0f",
    title: "Pieter + Peter ",
    bodyText: `Ek het vanmiddag saam met die "wit probleem" aan tafel sit en middagete eet. Alles was normaal. Soos enige middagete wat ek al in menige wit huishouding gehad het. Behalwe vir die oproep van PSG wat tydens lunch geneem m\xF3\xE9s word. Deur die hoof van die huis in sy rolstoel: plaasaanval 2004. Ek hang nie in sulke kringe nie. Ons het gesels oor hulle 700 man boerdery. Oor die lekker klimaat en goed waaroor nuwe kennisse gesels. Aangenaam. Die steunpilaar het kerrie met gestoofde perskes gemaak op basmatierys. Ons het koeldrank gedrink (seker terwille van die kleintjies). Die gebare, belangstelling en gesigsuitdrukkings, asof geoefen, was naatloos. Tot my suster iets oor 'n kookwatermartel-plaasmoord op Bonnievale s\xEA kort voor die slottoneel. Dit was die vrou se enigste broer. Die gordyn ruk middeldeur. En, unlike ever seen before, transformeer die "wit gevaar" in 'n stukkende dier: 'n vrou wie se binneste stuk vir stuk losskeur voor my o\xEB. 'n Rol, 'n ego disintegreer tot niks. Steunpilaar tot stof. 'n Hoop bene op 'n Oggie vloer. Die snot en trane het teen haar wange afgestroom en in haar hare gesmudge. 

Baie dieselfde soos onse Maria uitmekaar geval het op my pa se skoot destyds. Geen make up; beleggings. Haar enigste seun is in 'n xenofobie-aanval met 'n panga doodgekap. `,
    date: "2019-07-09T00:39:17+02:00",
    handle: "verbatim "
  },
  {
    id: "5e6616a05ee429768df2bc18",
    title: "So soon",
    bodyText: "Torn between worlds,\nI hear it in your voice,\nI hurt you already.",
    date: "2019-01-03T12:50:08+02:00",
    handle: ""
  },
  {
    id: "5e6616a65ee429768df2bc2a",
    title: "1.2.3. Blok myself. ",
    bodyText: "Jy s\xEA jy 'wil' vir my gese\xEBnde Kersfees s\xEAEn al wat ek wonder is hoekom ek dit nog nie kon regkry om jou te blok nieSeker omdat jou naam op my foon nog steeds my hart laat vergeet hoe om normaal te klop. Seker maar dit ",
    date: "2019-12-25T16:44:48+02:00",
    handle: ""
  },
  {
    id: "5e6616c05ee429768df2bc69",
    title: "Vroue van Atlantis ",
    bodyText: `"Soms moet jy jou hart met 'n bloudraad vasmaak" _ Chrissie Cloete`,
    date: "2019-05-12T08:57:05+02:00",
    handle: ""
  },
  {
    id: "5e6616da5ee429768df2bcb2",
    title: "\u{1F377}",
    bodyText: "By Spier is daar n brug oor \xF1 vuil rivierReg voor dit \xF1 \u201Csign\u201D wat lees\u201CSoon it will be quiet\u201Dn Dronk man staan teen dit en s\xEA \u201Cwat \xF1 tos s\xEA ding\u201D Weet hy dan nie dit gaan oor sy dood nie? Weet hy nie dit probeer hom laat sien hoe niks die niks is war hy het nie? DalkSeker nie Wyn?",
    date: "2020-02-09T19:14:18+02:00",
    handle: ""
  },
  {
    id: "5e6616da5ee429768df2bcb3",
    title: "Nee goed dan",
    bodyText: "Hulle is nie verkeerd nie, net baie anders",
    date: "2019-06-01T14:28:19+02:00",
    handle: ""
  },
  {
    id: "5e6616e25ee429768df2bcce",
    title: "Glans",
    bodyText: "As die son weer moet skynSkyn hy net vir jou\nVir al die grys oomblikke \nEn vir al die blou maandae\nEkt gehoop vir oop lug\nSodat jy dinge kon sien\nSkoon en sonder perke\nJy verdien meer\nMeer as seer\nMaar leer van die seer\nOm die ware dinge te sien",
    date: "2019-10-14T20:35:33+02:00",
    handle: "verbeeldings.wereld.hartjie"
  },
  {
    id: "5e6616ea5ee429768df2bce3",
    title: "Beter",
    bodyText: "Dink nie ekt beter geword nie,Daar\u2019s net niemand wat dit meer uit wys nie",
    date: "2019-11-28T12:42:06+02:00",
    handle: ""
  },
  {
    id: "5e6616ef5ee429768df2bceb",
    title: "Bel vir...? ",
    bodyText: "ons kan halfies gaanby Tafelberg afspringterwyl die son sak",
    date: "2019-10-07T19:04:56+02:00",
    handle: ""
  },
  {
    id: "5e6616f05ee429768df2bcee",
    title: "Alles < Niks",
    bodyText: "Its a divorce ",
    date: "2020-03-04T21:43:44+02:00",
    handle: ""
  },
  {
    id: "5e6616f25ee429768df2bcf6",
    title: "Onwelkom",
    bodyText: "\u2018n Vreemdeling in jou eie lewe\n\u2018n Toeris in jou eie liggaam\n\nEk eet \u2018n appel (dit help soms)\n\nDwaal doelloos rond\n\nTap \u2018n warm bad (ek onthou ek moet goed wees vir myself)\nL\xEA in die bad\nVoel so bitterlik aleen\n\nGlimlag en gesels saam al weet ek nie wat ek daar/hier maak nie (onthou dat voorgee belangrik is)\n\nHol kol neem oor.\nBegin in my maag en versprei soos \u2018n veldbrand.\n\nIewers is iets verskriklik verkeerd.\nDit kom vir my.\nDit gaan gebeur.\n\nNiks gebeur nie.\nDie son sak.\nDaar kak nog \u2018n dag.",
    date: "2019-02-25T08:22:35+02:00",
    handle: ""
  },
  {
    id: "5e6616fd5ee429768df2bd17",
    title: "Machismo",
    bodyText: "Ek het dubbelkaartjies vir Woordfees shows gekoop\nAl is ek single",
    date: "2020-01-14T20:59:24+02:00",
    handle: ""
  },
  {
    id: "5e6616fd5ee429768df2bd19",
    title: "iPhone",
    bodyText: "My foon se battery hou al 2 dae, ek kort mense",
    date: "2019-04-04T20:42:04+02:00",
    handle: ""
  },
  {
    id: "5e6616fe5ee429768df2bd1b",
    title: "Is dit sooibrand? ",
    bodyText: "Ek het nog nooit sooibrand gehad nie. Altans, ek dink nie so nie. So ek hou geen medisyne vir dit aan nie. Maar ek't vanmiddag die l\xE9kkerste Maleier-chicken-curry pie ge\xEBet en ek weet nie presies wat dit is nie, maar iets tussen my mond en hol is  _aan die brand_ ",
    date: "2019-10-27T21:46:07+02:00",
    handle: ""
  },
  {
    id: "5e6617075ee429768df2bd33",
    title: "Sterf",
    bodyText: "Ek sterf en jy gaan aanEk sterf en jy gaan net fokken aan",
    date: "2020-02-29T23:51:20+02:00",
    handle: ""
  },
  {
    id: "5e6617085ee429768df2bd36",
    title: ".",
    bodyText: "Probeer ",
    date: "2019-06-09T18:51:55+02:00",
    handle: ""
  },
  {
    id: "5e6617095ee429768df2bd3a",
    title: "Vrydagaand; Durbanville",
    bodyText: "Eksistensie\xEBl \nGesuip\nEn jags",
    date: "2019-05-03T22:40:21+02:00",
    handle: ""
  },
  {
    id: "5e66170a5ee429768df2bd3e",
    title: "BirthdayBitch ",
    bodyText: "Hierdie Lanzerac teeparty-meisies\nken nie van\nTwo minute noodles \nRicoffy\nSupermark brood\nMr Price\nPlanmaak\nHome remedies\nBrieke wat raas\nToiletborsels\nLaatnag rondrol\nRescue remedy \nof unglamorous religion nie. \n\nAnd yet... hier sit ons en bestel uit dieselfde spyskaart. \n",
    date: "2019-06-02T11:26:45+02:00",
    handle: ""
  },
  {
    id: "5e6617155ee429768df2bd5e",
    title: "Vriendskap",
    bodyText: "Wat is vriendskap vir my, vir jou\nOm altyd daar te wees in goeie en slegte tye\nDan soos n oogwink verdwaan jou\nvriende uit jou lewe\n\nJy vra jouself af hoe dan nou\nDit maak jou binneste seer \nMaak jy dan nie meer saak\n\nDan kom jy tot die besef\nJyt hul ontgroei\nJy maak ander vriende op social media\nVriende oor die hele wereld\nVan uit jou huis ontmoet jy nuwe mense\nHow lucky is ons.\n\n\n\n\n\n",
    date: "2019-06-17T22:29:04+02:00",
    handle: ""
  },
  {
    id: "5e66171d5ee429768df2bd79",
    title: "Sy naam is Fok",
    bodyText: "Jy se Fok is n vloekwoord\nMaar waar kom hy vandaan\nWie in die geskiedenis het besluit op sy lot\nWant menige mense gebruik sy naam\nEn tog ken niemand hom al roep hul sy naam\nSy naam is n sonde in ieder se oge\nMaar wie het hom so gedoop\nSy naam word elke dag gebuig\nNa elke een se tale\nSelf is hy nie meer seker wie hy is...\nFok - fokker - fokkit - fokkol\nEn dan kry hy by elke een n ander van\nFok #$%^**\nGeen wonder hy soek die een wat besluit het oor sy lot\nWant nou leer die oues hul kinders\nRoep nie sy naam dis sy lot\nIemand het besluit sy naam is n vloekwoord \nEn iemand is nou dood\nWie gaan dan nou die vraag beantwoord\nIs sy fokken naam Fok dan nogsteeds n vloekwoord ??",
    date: "2019-06-07T02:53:52+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66172b5ee429768df2bd9b",
    title: "Die Bybel",
    bodyText: "Ek wag vir jouOm huistoe te kom\nBring daai brak wat soos jou kind is\nDaar is plek op my matras\n\nEn picture dan hierdie:\n\nHalfpad aan die slaap \nJy lees Genesis in my skoot\nMaar my God is nie opgeskryf nie \nEn d\xEDe begin is nie bekend\n\n-Sit jou vuis in my mond\nHierdie is nie die laaste asem in my nie\n-Kruip weg in my wond\nDaar is nog woede in my oor\n\nMaar as jy nou gaan stilbly\nGaan ek die plot verloor",
    date: "2019-07-30T23:27:29+02:00",
    handle: ""
  },
  {
    id: "5e6617315ee429768df2bdad",
    title: "#houtkruis",
    bodyText: "My ouers is gode, engele\nmy vriende.\nDit wat ek aan jou gedoen het\ndra ek soos 'n kruis.",
    date: "2019-02-09T10:02:20+02:00",
    handle: "jacquesdeviljee"
  },
  {
    id: "5e6616965ee429768df2bbfa",
    title: "VIS IN KOERANTPAPIER ",
    bodyText: "Moet nie laat hy wen nie \nLaat hom val \nHuil \nVloek en skree \n\nLaat hom hadidas jaag in die tuin \nTussen jack Russell's en dorings \n\nStuur hom na die berge toe \nOu ryperd op sy oupa se skoot \nEn dan weer langs sy oupa se graf \n\nSe vir hom dat hy lief is vir sy ma \nLewe is soos cheap vakansies langs Margate se strand \nLewe is so complex \nSoos vis in koerantpapier \n\nLaat hom wen. \n",
    date: "2019-07-31T20:12:45+02:00",
    handle: "tanapistorius "
  },
  {
    id: "5e66169e5ee429768df2bc0e",
    title: "Dis maklik",
    bodyText: "Dis maklik wanneer jy op gee ",
    date: "2018-12-16T16:44:57+02:00",
    handle: "ons"
  },
  {
    id: "5e6616a45ee429768df2bc23",
    title: "3am Pastei Partytjies",
    bodyText: `'n Saterdag oggend 3am pastei partytjie 
by die Engen voor Sondag 
se koeksusters en tee.
Ek  "Dankie Tannie" en "Ja Oom" 
en eet nog 'n ystervarkie sodat ek besig kan lyk.
Ek sluk stadig aan my soet rooibos tee
wat deur gisteraand se tequila en Sterrie Stumpie en twyfelagtige besluite
sleep.

Ons jeug is gekleur deur 'n pragtige reeks teenstrydighede.`,
    date: "2018-09-03T21:49:07+02:00",
    handle: ""
  },
  {
    id: "5e66169e5ee429768df2bc10",
    title: "Dokter Dokter",
    bodyText: "Jy kom uit die nuutMaak reg wat so lank al stukkend wasOndeunde bruin oeSagte hartLaat mens glo in nuwe toekomsteVan feeverhale wat wagJy wat lewens red sonder om te vraGee jy van jouself soveel sonder klaMaak gebreekte bene weer heelVerlig smart in n donker veraf landMag dit wat jy daar ervaarNooit die sonskynglimlag uit jou haal",
    date: "2019-07-11T23:32:01+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616a65ee429768df2bc2b",
    title: "om den brode",
    bodyText: "ek sukkel om mooi broodjies te bak\ndie kors is te grof en ek dink die selfraising het so 3 maande terug verval\nagainst all odds rys en rys dit in my\ntot jy nonchalant die broodpan laat val\njy bant nou",
    date: "2018-08-25T20:07:40+02:00",
    handle: ""
  },
  {
    id: "5e66169f5ee429768df2bc15",
    title: "Son(dig)",
    bodyText: "Jy is ouer, onrein. Heilig, heilig die jong tempel van my. Ek wil my deure vir jou oopgooi sodat jy my binne kan storm. God sien alles, God sien my. Ek ken Hom, maar ek ken jou nie",
    date: "2019-07-27T22:33:18+02:00",
    handle: ""
  },
  {
    id: "5e6616c45ee429768df2bc74",
    title: "Vivisection ",
    bodyText: "I hope \nYou decide to stay, \nYou with: \nYour uncanny ability to keep the bad thoughts at bay, \nWith Your: \nability to quiet my heart, \nWith: \nability to tear me apart, \nVivisection your art. ",
    date: "2018-07-30T12:48:04+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616a25ee429768df2bc1e",
    title: "Sondedag",
    bodyText: `Is dit so moeilik omdat Sondaglunch 'n saam-ding isSaamkoek by teedrink tyd gatherKerkspeel 'n groepsaktiwiteit isMiddagslapies in spanne gebeurSkottelgoed in pare gewas word"Luilekker middag" altyd twee insluitRoad trip net bestaan vir meer as 1En hier sit 'n mens:Gelukkig, onafhanklik, modern,maaralleen.`,
    date: "2019-09-08T21:16:36+02:00",
    handle: ""
  },
  {
    id: "5e6616c85ee429768df2bc82",
    title: "attachment",
    bodyText: "find attached\nmy profile photo",
    date: "2019-01-30T22:17:26+02:00",
    handle: ""
  },
  {
    id: "5e6616a25ee429768df2bc1f",
    title: "Oervrees",
    bodyText: "Dis die Witvrees wat gil in die nag\nOm tienuur gil Sy die alveoli uit haar longe\nOm te verval in die nagwaak\nOop o\xEB op haar rug in bekommernis vir die dag van m\xF4re\n\nIn die oggend pluk die Witvrees haar borste uit hul nate \nOm die laaste witmelk vir haar kinders voor te sit \noombliklik word sy weer aap, oermens -vrou\nDie wete dat die wiskunde van die lewe gelyk is aan die somtotaal van die uiterstes \n\nMaar teen laatmiddag wanneer die wit en rooi ophou drup het\nWanneer haar o\xEB slegs wit albasters in hulle garingsakkies is\nDan word sy die moderne vrou \nDie gee \u2018n fok, maak skuld en lig jou vuiste vir die m\xF4re op.",
    date: "2019-02-19T10:25:30+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6616c85ee429768df2bc83",
    title: "Dankie, Doos",
    bodyText: "En so... en toe niks.",
    date: "2019-03-23T20:15:12+02:00",
    handle: ""
  },
  {
    id: "5e6616a65ee429768df2bc29",
    title: "Here",
    bodyText: "Die dorp is ge-ontwerp om jou te verniel. \nEn ek gaan soontoe om vir julle plek te maak. ",
    date: "2018-08-04T11:54:10+02:00",
    handle: ""
  },
  {
    id: "5e6616ce5ee429768df2bc8f",
    title: "Sentimentele dekor",
    bodyText: "Ek wens dit was jy op wie ek reageer, \nMaar ek dink nie so nie. Want jy is nie sentimenteel nie. \n\nMaar dalk kan die skrywer betekenis vind in dat ek nog 'n prentjie teen my muur het. \nEn dat daar mense is wat nie prentjies sommer net verwyder nie. ",
    date: "2019-01-28T17:40:26+02:00",
    handle: ""
  },
  {
    id: "5e6616d55ee429768df2bca5",
    title: "Boendoe",
    bodyText: "nuuskierige\naapstert wat na my loer\nte klein om te verstaan\nwat die mens aan hom kan doen\nkom al hoe nader aan my vinger\nwat teen die glas rus\nsien hy dalk in my o\xEB\ndie antwoorde wat daar op die lewe is? \n\nmaar in sy ogies sien ek meer,\nsy oergeheime sluit hy op\nen hy los my met veel meer vrae\noor die heelal se ritmiese gallop. \n",
    date: "2019-06-11T20:13:51+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616da5ee429768df2bcb1",
    title: "-",
    bodyText: "Ek het in myself begin glo\nSpiritualiteit gevind\nOpgewonde geraak\nen verval in depressie\n\nVoor ontbyt",
    date: "2018-07-31T15:37:49+02:00",
    handle: ""
  },
  {
    id: "5e6616a95ee429768df2bc36",
    title: "Dink sommer",
    bodyText: "Ek wil hardloop saam met die wind\nMeermale vry in die re\xEBn\nWeer slippie slide op \u2018n warm dag\nJou hand voel op my been\n\nEk wil weer cowboy mannetjies speel in Vrystaat stof\nEn dwergie hoedjies opgaar onder die groot boom\nWeer kaalgat swem in die rivier\nEn jou bekendheid ruik sonder om te droom\n\nEk dink soms aan liefde eens in jou o\xEB\nVerbeel my jou lag in my nek\nDit was \u2018n ander lewe\nToe jy, jy was, en ek\nJoune\n",
    date: "2019-01-30T22:57:12+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616dc5ee429768df2bcb9",
    title: "Ek wil jou fok (maar mooi)",
    bodyText: "Byt en skeer\nDie poes van die lewe deur",
    date: "2018-12-08T20:13:23+02:00",
    handle: ""
  },
  {
    id: "5e6616aa5ee429768df2bc37",
    title: "AP",
    bodyText: "Om langs jou te staan en te weet: Team. \n\nDis goud. ",
    date: "2019-11-02T01:21:06+02:00",
    handle: "Verbatim "
  },
  {
    id: "5e6616dd5ee429768df2bcbb",
    title: "Milnerton",
    bodyText: "'n Gebruikte kondoom op 'n hokkieveld\nJy't gese dit was jou eerste indruk van Milnerton\n'n Kleurvolle beskrywing \nJy was nog altyd skerp en to the point\n\nNou sit ek steeds met daardie beskrywing\nEn voel asof ek dit eerstehands ervaar het\nGebruik en weggegooi is waar jy my gelaat het\n\nEn elke keer wat ek 'n aanwysing na Milnerton sien\nVoel dit asof my hart wil gaan staan\nSoveel maande later maak dit steeds seer\nDit was seker net 'n grap",
    date: "2020-02-25T22:02:52+02:00",
    handle: ""
  },
  {
    id: "5e6616de5ee429768df2bcc1",
    title: "In Denial",
    bodyText: "With reference to In Detention She went to pick up a parcel\nShe hiked to the memorial\nShe needed the bathroom\nShe went jogging with her family\nShe needed the bathroom\nShe went jogging up a parcel\nShe hiked to the bathroom\nShe needed to pick up a parcel\nShe went to her family\nShe went jogging to the memorial\nShe needed to go jogging\nShe hiked to pick up a parcel\nShe went to the bathroom\nShe needed the memorial",
    date: "2019-09-03T23:25:27+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6616e45ee429768df2bcd4",
    title: "winter",
    bodyText: "Midmiddag \nen die son is \nwaar jy nie is nie",
    date: "2019-06-01T13:25:54+02:00",
    handle: ""
  },
  {
    id: "5e6616aa5ee429768df2bc38",
    title: "bloed - vir wbg",
    bodyText: "haha\ntong-in-die-kies,\nhet ek ges\xEA \nhopelik jou tong in myne\nvolgens jou.\nnou\ndie smaak van bloed\nin my mond\njou bloed in myne\nen ek wens ek kon s\xEA \ndit is bitter\nmaar \nal wat ek proe is die\nwonde",
    date: "2018-09-14T22:24:37+02:00",
    handle: ""
  },
  {
    id: "5e6616e55ee429768df2bcd8",
    title: "Oor begin",
    bodyText: "Die lewe het my hard geslaanDis soos die Augustes windeDie lewe klap jou van alle kante afOor begin is vooren dagStop die wiel wat elke dag net vinniger en vinniger draai.Ek probeer dit keer maar die wiel wil nie stop.My gedagtis is deur mekaar gewaai.Ek probeer kop hou. ek probeer met alle mag my lewe tot stilstand bring, maar ekt my krag verloor.Verloor teen die mag wat my oorweldigVerloor teen mense wat net hartseer bring. Ek het myself verloor. Ek bid en dan bid ek nie meer. Ek lees my Bybel en dan los ek dit weer. Eks vasgenaal in 'n lewe waaroor ek nie meer beheer oor het nie. Die gemaal in my hart en my siel wil nie meer tot stil stand kom nie. Die lewe het net te veel geword vir een mens om dit te hanteer. Kan ek maar nie net oor begin.",
    date: "2019-08-07T11:52:17+02:00",
    handle: ""
  },
  {
    id: "5e6616ac5ee429768df2bc3d",
    title: "Hey, Casanova ",
    bodyText: "jou o\xEB gaan uitpop en\njou regterhand afval, \njou hare gaan in klossies\ntussen ander se vingers agterbly. \njou dye sal rou en lam raak\nen jy sal nie na haar om\nhulp kan skree nie, want\njou tong l\xEA \nnog hi\xE9r - \nop m\xFD lakens\n\nkyk! \njy het jou eie voete aan flarde geskiet",
    date: "2019-04-16T19:39:03+02:00",
    handle: ""
  },
  {
    id: "5e6616e65ee429768df2bcd9",
    title: "Vra maar",
    bodyText: "Dis nie niks nie.\nDis die probleem.\nDis iets.\nAl weet ons nie wat om dit te noem nie.",
    date: "2019-06-05T19:23:30+02:00",
    handle: ""
  },
  {
    id: "5e6616b85ee429768df2bc59",
    title: "Ek luister 9",
    bodyText: "Die laatmiddag sonnetjie maak my lui\nEk sit en le en luister\nDie blare ritsel en die skaduwees beweeg\nDit raak stil maar ook nie\nJulle hou aan praat en ek luister\nVan lank vergane gebeure\nEn van dit wat nou gebeur\nVan kinders en geld en wonder\nWat voorle vir my en jou\nEn onse kinders wat nog wou\nVan ontbeantwoorde vrae en gebede tot hier en nou\nEn ek staar by die venster uit na die dowwe laatmiddag winterson\nMy hart pyn en ek sien die lyding\nVan ons van hulle en haar\nOns rooikop sonskyn kind wat ons verlaat\nMy keel trek toe en my gedagtes verjaar\nVan dit wat was en meer\nHoe maak dit nie seer\nDie rooikop liefling kind wat ons verlaat",
    date: "2019-06-08T14:36:03+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616e95ee429768df2bce0",
    title: "Swart",
    bodyText: `Stukke realiteit skeur in bloederige massas uitmekaar wanneer toestande teenstrydig met (jou) realiteit uit die niet begin verhelder.  'n Gestolde laag woede het in my beheerkamer kom l\xEA terwyl die sisteem nog funksioneer op 'n vorige stel data wat jou as first responder identifiseer. 
"Ek het besef... ek ken jou nie." `,
    date: "2020-03-08T03:35:05+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6616cc5ee429768df2bc8b",
    title: "Hart (die storie wat nie eindig nie)",
    bodyText: "Voed my harsings in die Harvard\n\nStort my Hartstog in die water\n\nHardloop ek weg, dan hark jy my weer nader\n\nHartlik van onsekerheid maar hartstogtelik\n\nvergader\n\nons tog altyd\n\nElke keer\n\nWeer\n\nEn weer\n\nMy hart verteer\n\nIn die sappe van jou braak woorde\n\nDis my hartsgeheim wat hardop soek\n\nna die harnas van jou oorde\n\nDis my hard probeer om weer te keer\n\nen te skree teen die gesmoorde\n\nwoorde wat ek huil, woorde wat ek skryf,\n\nwoorde wat ek bid en smeek en prewel\n\nMy hardop roep en hardkoppig vloek\n\nteen hardheid gaan ook sneuwel\n\nWant\n\nDie hartdefek is in my DNA\n\nin my selle ingebrand\n\nDis deel van my en sal kastei\n\nsoos die eelte\n\nop jou hand aan hand\n\nsal ek met jou harmonieer\n\nin die houplek van my gedagtes\n\nWant\n\nJy\u2019s blind my hart\n\nJy\u2019s blink my smart\n\nMy Hartseer bly nou in die water\n\nwaar jou hasardspel heen ly\n\nOntkenning is nou my hawe\n\nen ek bid dit stel my vry.",
    date: "2018-08-05T05:43:15+02:00",
    handle: "theladygray"
  },
  {
    id: "5e6616fc5ee429768df2bd15",
    title: "Dis net... 'n JK",
    bodyText: '"Onder in my whiskey glas\nSit jy steeds aan my vas" ',
    date: "2019-08-30T18:36:26+02:00",
    handle: ""
  },
  {
    id: "5e6616d45ee429768df2bca1",
    title: "Winter",
    bodyText: "Ek is liefde \nen hoesgoed\nsaamgerol in 'n kokon \nvan donsveer en corenza ",
    date: "2019-06-01T23:27:33+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617095ee429768df2bd39",
    title: "Is dit nag",
    bodyText: "Ek le in die voornagEk hunker na jouEk skryf in die nanagVan verskietende sterre'n donker maanEk soek jou in die woordeVan my skermMaar dis nagSo word my voornag Net n donker hunkering na jouEn my nanag bly leegSonder jou",
    date: "2019-09-12T20:25:02+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616d95ee429768df2bcae",
    title: "18 Mei 2019 ",
    bodyText: "Jy was my pa se eerste vriend in die stad. Hoeveel jare nie al nie. Jy het my my eerste kar help koop. Jou rooi BMW modelkar wat altyd op jou fancy eikehoud lessenaar was, staan nou al jarre in my versameling tuis. Jy het soveel drama veroosaak vir my ouers eens op n tyd dat ek nie gedink het dit sou ooit herstel nie. Jy was daar vir elke event of ongenaklike gebeurtenis. Jy het ons halfdooie kat veearts toe gejaag die oggend wat hy in die kar se enjin geklim het en oorgeneem wanneer ons nie meer kon nie. Ek ken julle huis soos my eie. Die trappe, die aanbouings, die vreemde kleure en exciting karre. Julle ken ons huis soos jul eie. Ons eetkamertafel was al soveel maal jou redding. \n\nJy't vanaand klaar ge\xEBet, voor gestap en omgeval. \nTot so ver. \n",
    date: "2019-05-18T05:36:12+02:00",
    handle: ""
  },
  {
    id: "5e66170a5ee429768df2bd3b",
    title: "Vibreer",
    bodyText: "Ek bewe as ek voelIets voel\nHartseer is\nGelukkig is\nKwaad is\nJags is\n\nEk bewe as ek iets voel\nDis my lyf wat \u2018n god tot bestaan wil vibreer",
    date: "2020-01-06T23:47:30+02:00",
    handle: ""
  },
  {
    id: "5e66170b5ee429768df2bd3f",
    title: "Soms...",
    bodyText: "Somsas dit aand isna myderde glasie wynAs die vrinneklaar gekuier heten die skottels bly(oor)alleendan wonder ekoor die einde van my lynEn of daar ooit\u2018n wese, net vir my sal wagin my eie deurkosyn ",
    date: "2019-09-10T23:46:47+02:00",
    handle: ""
  },
  {
    id: "5e6616df5ee429768df2bcc2",
    title: "Mes(sias)",
    bodyText: "So waar is jou God nou?Daar waar jy in Donker leefSterwend in beddegoedNeem God deel aan jou stoet?Waar is jou Redder nou?Daar waar jy nou verdrink in swartStikkend en stukkend Is Hy dalk doof en blind?Dalk kom Hy op die watersAs jy jou bloedOp jou Bybel laat drip",
    date: "2019-08-04T15:09:10+02:00",
    handle: ""
  },
  {
    id: "5e66170b5ee429768df2bd40",
    title: "Sonder Slaap",
    bodyText: "Ek bestaan nie eintlik nie\nHulle bestaan nie eintlik nie\nEn as ons net 'n bietjie langer wag\nSal ons nog minder bestaan\n(As wat ons alreeds nie bestaan het nie)\nDan kan ek mos maak net wat ek wil?\nDan kan ek mos s\xEA net wat ek wil?\nNee.\nGlad nie.\n",
    date: "2019-05-26T13:30:40+02:00",
    handle: "cryingcavecat"
  },
  {
    id: "5e6616e35ee429768df2bcd1",
    title: "Jesus en Sy (maybe straight?) white male privilege",
    bodyText: "moes 'n Jezebel of Delila wees want as God regtig mens wou word, sou Hy in die vorm van 'n vrou neergedaal het as jy 'n vagina het, hou elke dag 'n tipe kruisdood in",
    date: "2019-12-13T05:04:03+02:00",
    handle: ""
  },
  {
    id: "5e66170d5ee429768df2bd47",
    title: "Intimacy",
    bodyText: "'But I/\nI love it when you read to me'\n\nEk kan nie die baksteen-swaarte op my bors beskryf nie.\nSoms is dit egter 'n steekpyn.\nEn ek kan nie asem haal nie.\nWat moet ek doen met die pyn\nAs ek jou stoep en Castle Lites op 'n Vrydagaand na werk mis?\n\nEn jou stem",
    date: "2020-01-31T18:02:35+02:00",
    handle: ""
  },
  {
    id: "5e6616e95ee429768df2bcdf",
    title: "Maklik",
    bodyText: "Dit was so maklikOm by jou te weesOm jou hand vas te houOm die lewe saam met jou te ontrafelOm langs jou te l\xEA en droomOm jou toe te laat om my lief te h\xEAOm jou lief te h\xEAEn nou is alles deurmekaar, want dit voel nie maklik nieDit voel nie reg nieDis nie jy nieDis nie ons nieMiskienKort ek net nog bietjie Tyd",
    date: "2019-09-07T19:46:12+02:00",
    handle: ""
  },
  {
    id: "5e66170e5ee429768df2bd48",
    title: "Wat as",
    bodyText: "Wat as,\nEk oorbegin en die selfde doen\nWat as jy weer so is\nEn ek ook.\nLeer ons by ons self?\nMaar wat as ek beter is\nEn jy vergewe\nasb\n",
    date: "2018-10-06T20:44:27+02:00",
    handle: ""
  },
  {
    id: "5e6616f15ee429768df2bcf1",
    title: "Offer",
    bodyText: "so ek donner al my gedigtein los papiertjies en notaboeke\nen daardie halwe manuskripte\nwat niemand inelkgeval sou lees nie\nmyself\nop jou altaar neer\n\nek hoop h\xED\xE9rdie offer\nis aanneemlik vir Jou",
    date: "2019-08-29T22:17:49+02:00",
    handle: "glasasem"
  },
  {
    id: "5e6617155ee429768df2bd60",
    title: "Jy mag...",
    bodyText: "...ma jy mag die nooit s\xEA nie",
    date: "2018-12-12T11:57:28+02:00",
    handle: ""
  },
  {
    id: "5e6616f25ee429768df2bcf4",
    title: "smag na Mortaliteit",
    bodyText: "want Sy is die Messias my god, my god!verlos my tog van 'n w\xEAreldwaar ek depressief en angstignet fokken oorleefbevry my van 'n skeppingvan verantwoordelikheid, verpligting en verwagtinglaat my om donnerswil toeom in jou ewigheid, rustig te leefontslaan my van di\xE9 dooslike skein heiliges, seksiste, homofobe, rassiste,of eintlik net die Christene my kruis, my gefok:oordeel en haat as Sy weer komas Sy weer kom\nkom haal Sy my \n\nmaar moenie te lank talm nie\nanders sny, hang, skiet of sluk ekmyself binnekort haar Koninkryk in",
    date: "2019-11-17T07:50:19+02:00",
    handle: ""
  },
  {
    id: "5e6617185ee429768df2bd69",
    title: "verdwyn",
    bodyText: "kom ons ry\nek weet nie waarheen nie,\nmiskien net nerens. \nons kan erens op 'n koppie padkos eet\nen praat oor die natuur of die weer\nof die toekoms\nek weet nie,\nnet nie oor die verlede nie.\nkom ons neem foto's van al die plekke waar ons stop,\nons kan by elke vulstasie plekke ruil\nen beurte maak om te slaap.\nkom ons pak 'n klein tassie\nmet net die noodsaaklikhede's\nen 'n klein noodhulpsakkie met pleisters\nen panado's.\nkom ons skryf hierdie storie\nsonder pen of papier\nmaar met foto's en herhinneringe en voetspore en liefde en glimlagte, \nwant niemand hoef te weet nie.\nkom verdwyn net so rukkie saam met\nmy. ",
    date: "2019-12-10T23:32:24+02:00",
    handle: "ankespies"
  },
  {
    id: "5e6616f75ee429768df2bd04",
    title: "Leen",
    bodyText: "Kan ek dan nievan geleende tyd tussennou en nou-nou gouvanoggend weer gisteraand maaknie, met meer van gisteraand se ons, minder Sondag se spyt,en tydom nie weer te vermorsnie. ",
    date: "2019-08-19T22:55:28+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617255ee429768df2bd87",
    title: "Simson",
    bodyText: "Terwyl die storms in my wroeg soos 'n Wildekus see met 'n weste wind, toe kom jy..\nBinne my\nOor my\nOm my\nToegevou in toeneeming teen die trant van 'n goed geoefende rankplant. En ek is vasgevang in jou arms vanwaar ek 'n vlou poging maak om te ontsnap. \nMaar die waters roep my en vrese ruk my terug in werklikheid in, stil-stil wanneer jy diepte bewusteloosheid in tre\xEB. Dis wanneer ek gaan kuier in die plek waar my demone steeds ontstuimig maal in hul meesters plot om my te oorrompel met die volgende volmaan. \nJy sal nooit verstaan hoe min en baie ek jou nodig het nie. Jy sal nooit verstaan hoe jou sekerheid my kruppel nie. En jy sal nooit verstaan wat die prys is wat jy van my eis nie.\nEn hoe kan jy. Want ek verstaan self nie. ",
    date: "2019-12-18T17:46:46+02:00",
    handle: ""
  },
  {
    id: "5e6616fc5ee429768df2bd13",
    title: "Wow",
    bodyText: "Wow - Jy hou nie van \u201CPineapple on Pizza\u201D nie, gods jy\u2019s unique ",
    date: "2019-05-11T22:49:50+02:00",
    handle: ""
  },
  {
    id: "5e66172a5ee429768df2bd96",
    title: "wanneer? ",
    bodyText: "Wanneer s(i)en ek jou weer? ",
    date: "2019-05-24T20:06:30+02:00",
    handle: ""
  },
  {
    id: "5e6616ff5ee429768df2bd1d",
    title: "Tye vir Sluis",
    bodyText: "Om my self te verloor,maar wat maak dit saak,Jyt nooit die tyd gevat om my te ken nie,Ironic I guess ",
    date: "2019-10-11T20:31:22+02:00",
    handle: ""
  },
  {
    id: "5e66172d5ee429768df2bd9f",
    title: "Steelfoto's",
    bodyText: "Koekoeke l\xEA hulle eiers in ander vo\xEBls se neste. \n\nJy is 'n koekoek. En die nes was myne. \n\n",
    date: "2019-08-30T01:03:57+02:00",
    handle: ""
  },
  {
    id: "5e6617045ee429768df2bd2c",
    title: "Urgh! 2.0",
    bodyText: "Penis.",
    date: "2019-03-07T20:58:54+02:00",
    handle: ""
  },
  {
    id: "5e66172f5ee429768df2bda5",
    title: "\xF1 week van inbly.",
    bodyText: "jy was iets waaroor koos kombuis sou sing\xA0en skryf toe hy nog andre le toit was.",
    date: "2019-06-18T17:15:32+02:00",
    handle: "paula_stxphxnie_kruger"
  },
  {
    id: "5e66170a5ee429768df2bd3d",
    title: "Uur",
    bodyText: "Gee vir my\r\nNet n uur van jou dag\r\nNet vir my\r\nSonder jou foon\r\nOf ander wat jou aandag verwag\r\n\r\nGee vir my\r\nJou gedagtes\r\nJou drome\r\nJou verwagtinge\r\nJou vrese\r\n\r\nEk wil jou menswees ontsyfer\r\nEk wil jou stem\r\nVoel kielie teen my oor\r\nEk wil jou hand \r\nWarm op my vel voel\r\nEk wil met jou hartklop\r\nSe ritme dans\r\n\r\nVir nou sal ek tevrede wees\r\nMet net \u2018n uur\r\nVan jou tyd.\n",
    date: "2018-12-24T15:56:15+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6617355ee429768df2bdbb",
    title: "My baas het my kak gegee tydens my performance appraisal",
    bodyText: "-",
    date: "2019-11-07T13:49:43+02:00",
    handle: ""
  },
  {
    id: "5e6617125ee429768df2bd55",
    title: "Millennial",
    bodyText: "Barbara Streisand en Neil Diamond se \u201CYou Don\u2019t Bring Me Flowers\u201D remasterd:You don\u2019t like my Instagram posts.",
    date: "2019-08-03T22:14:31+02:00",
    handle: ""
  },
  {
    id: "5e6617145ee429768df2bd5d",
    title: "Helde",
    bodyText: "Hulle s\xEA jy moet nooitJou helde ontmoet nie.Hulle laat jou Te donders klein voel",
    date: "2019-09-19T21:16:20+02:00",
    handle: ""
  },
  {
    id: "5e6617365ee429768df2bdbf",
    title: " ",
    bodyText: "My dae klink vol, maar voel leeg. ",
    date: "2019-08-05T20:02:40+02:00",
    handle: ""
  },
  {
    id: "5e66172c5ee429768df2bd9d",
    title: "Desember 2019",
    bodyText: "Karen Zoid songs op 'n Saterdagaand\nAlleen\nBottel twee rooiwyn\nTrane\nEn nou is ons by 'Groen Trui'\nWat doen ek met die pyn?",
    date: "2019-12-14T20:01:41+02:00",
    handle: ""
  },
  {
    id: "5e6617395ee429768df2bdc8",
    title: "when the chips are down",
    bodyText: `Calculate:
jy - 'n dubbel brannewyn
       'n shot van watookal
       'n natural underage look

ek - drie biere,
        'n shot van die selle watookal
        en ek swot regte

skaal hande op en af, en ek gee jou die sleutels
reuben sit shotgun, l\xEA terug met sy o\xEB toe
ek sit in die middel agter, jy knyp die stuurwiel met jou voorarms vas -
nou nie juis encouraging nie

tot op die straathoek veilig
hatfield veilig
en 'n draai
en 'n swaaiende rooi, swaaiende blou

jy kyk om na my
"en nou?"`,
    date: "2019-11-04T12:57:50+02:00",
    handle: ""
  },
  {
    id: "5e66173c5ee429768df2bdd3",
    title: "Finaliteit",
    bodyText: "Net soos 'n mak kanker sy tyd vat,Het my liefde vir jou stadig maar seker van my hart af verdwynAs ek hartseer is, is jy die 2de laaste ding waaraan ek dinkEn om 'was' in my stories en sinne te gebruik, slaan nie meer my voete onder my uit nieEk kan op ou spore loop en gewoond raak aan net sommer glimlag, sonder om jou aandeel in die herinnering oop te vouMaar nes 'n tipiese pasient is ek steeds in denial oor die realiteitFinaal. Terminaal. Verby. ",
    date: "2020-01-27T21:12:56+02:00",
    handle: ""
  },
  {
    id: "5e6617405ee429768df2bde0",
    title: "god.",
    bodyText: "Hallo vreemdeling. Het jy \u2018n bier? Jy moet sit en luister na my storie. Jy m\xF3\xE9t luister na my storie. My naam is Stefamy, wat is jou naam? Toemaar, dis nie belangrik nie. Luister jy net na my storie. Vreemdeling, ek het 3 katte. Dis baie,neh? Ek weet. \u2018n Swart een, \u2018n gemmer een en \u2018n 3 kleurige een. Ek weet dit klink nou nie belangrik nie, maar jy moet luister. Luister na my storie. Vreemdeling, ek praat baie oor my katte en ek kan nie help nie. \nKyk hier my tattoo. Die \u2018n outline van \u2018n kat-gesiggie en \u2018n kommapunt. Kommapunte is so cliche right? Vreemdeling, hierdie hemp wat ek dra het ek self gemaak. Daar\u2019s katte op. Ek wou my eie lewe neem. Toe kry ek \u2018n kat. \u2018n Eienaardige dier. Hy was 4 jaar oud en niemand wou hom h\xEA nie. Ek wou hom h\xEA. Hy het op my bors kom l\xEA wanneer donkerte my insluk en op my skoot homself tuis gemaak vir paniekaanvalle. Toe kry ek n\xF3g \u2018n katjie. Sy was n\xF3g nooit uit \u2018n hok uit nie. Amper 1 jaar lank. My katjie is angstig en kort baie liefde. Toe sy uitstrek op my bed, het ek besef ek wil vir hierdie katjie veilig maak voel. Hierdie is jou woning. Jy is veilig hier. Hier by my. My derde katjie wat in \u2018n hok. Sy het soos \u2018n bondeltjie in my arms gesit en sy was gelukkig. Toe gaan ons huistoe. Ek weet ek praat baie van katte, vreemdeling, maar hulle het my lewe gered. Soek jy \u2018n bier, vreemdeling?S\xEA my, wat is jou naam?",
    date: "2019-10-12T07:28:01+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e66173e5ee429768df2bdda",
    title: "Sonneblom",
    bodyText: "it gets better when you're older\xA0and the baggage of being young is forgotten somewhere, some day\xA0in a train station or at an airport\xA0while you drink cheap coffee and eat stale sandwiches and think about the someone\u2019s and the somethings that you inevitability leave behindin some way or another\xA0like the keys you forgot in an Uber that one time\xA0and when you\u2019re young\xA0and you walk away or you fly away or you drive away but you always move away\xA0to whatever new thing will become your home that day or that week or that month or that year\xA0\nwhile the past becomes a mountain that you hold between your thumb and forefinger\nstaring into the rear-view mirror\xA0\nand you prolong your goodbyes with heart emojis on WhatsApp and passport pictures on Instagram\nbut on the inside\nyou know that a part of you dies every time and that you become\xA0\na photograph\xA0\nin a memory\xA0\nof another\xA0\nswirling in a sea of self\xA0\nand your lines and shapes are drawn into\xA0\npictures from the past\xA0\nfondly remembered on weekends and public holidays\xA0\n\xA0\nen word geraam gehang op die gang muur\xA0\nwaar almal na die stories wat van jou vertel word kan staar\xA0\nterwyl jy net \u2018n afdruk van haar word\xA0\nen niemand jou hier op straat sal herken nie\xA0\nwant jy beweeg anderkant\xA0\ndie ek\xA0\nwie jy word deur\xA0\ndie mense wat jou lief het\xA0\nen jy word \u2018n\nruimte\xA0\ntussen\xA0\nhier en daar\xA0\n\u2018n oop kanaal\xA0\nwat stuur en ontvang\n\nground control to major Tom\n\nen hulle se lewens gaan ook aan\xA0\n\xA0\nmaar, selfs dan\xA0\nword dit beter as jy ouer is en soos jy ouer word\xA0\nwant jou wese kry gleuwe wat water oor tyd geslyp het\xA0\nsoos die lewe sy spoortjies in sprokies langs jou o\xEB en oor jou wange trap\xA0\nen dit word lekker om net te sit\xA0\nte stoepsit\xA0\nal is dit op die vloer\xA0\nen tee drink\xA0\nwant mens mag hardop s\xEA dat partytjie hou en warm vry,\xA0\nchampagne breakfasts\xA0\nen nog \u2018n woord wat rym met -y\npartykeer overrated is\xA0\n\xA0\nwant die stukkies ek wat sterf\xA0\nword kompos\xA0\nvir die sonneblomme\xA0\nwat partykeer op die eetkamertafel staan\xA0\n",
    date: "2019-07-15T06:59:22+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e6617455ee429768df2bded",
    title: "Carol",
    bodyText: "Ek wil in 'n kar ry, Vroegoggend koffie koop,Komberse vou,Jokes maak,Gesels oor goeie tye,Nie worry nie, Mutual assumptions bevestig,\nBaklei oor simpelhede,\nNa die landskap staar,\nVir die wolke kyk, \nIn die venster glimlag vir jou bos krulhare, \n\nEn die aand myself langs jou verlore voel, oor jou naak borste vryf en in jou sagte omhelsing weer rigting vind. \n\n\n",
    date: "2019-09-07T12:15:26+02:00",
    handle: "verbatim"
  },
  {
    id: "5e6617465ee429768df2bdf0",
    title: "Dis maklik",
    bodyText: "Ek hoor my naam.\n",
    date: "2019-06-20T19:27:33+02:00",
    handle: ""
  },
  {
    id: "5e6617465ee429768df2bdf1",
    title: "frONS",
    bodyText: "Pille maak nie als beter nie",
    date: "2019-08-30T18:35:39+02:00",
    handle: ""
  },
  {
    id: "5e6616a35ee429768df2bc22",
    title: "Roulied. Net 'n fan wat lyrics post. Maar fokken jissis. Luister net. ",
    bodyText: "Sonder lede gebore,\nUit'n ongehude skoot,\nMet ekstase gelewe,\nOp die pad na die dood,\n\nDie sterwens hier vergete,\nIn ons warm gespeel,\nOns liefde en ons lewe,\nSoos naalde gedeel.\n\nGaan luister fokken Kobus! Regtig. Gaan doen dit. ",
    date: "2019-11-02T20:25:46+02:00",
    handle: ""
  },
  {
    id: "5e66169a5ee429768df2bc04",
    title: "Kosbare oomblikke",
    bodyText: "As jy maar net weet\ndat jy my aantrek soos 'n magneet\nEk probeer koel en kalm vertoon\nmaar binne my woed 'n maalstroom\n\nElke oomblik saam met jou is\nKosbaar want jy is so dierbaar\nEk kyk graag diep in jou oe\n\nSielvolle oe en\nKan my geluk skaars glo\nmaar ek weet ook\nGeluk is nie vir almal beskore\nen vir party is dit vir\naltyd verlore\n\n\n\n",
    date: "2019-06-18T18:45:35+02:00",
    handle: ""
  },
  {
    id: "5e6616ab5ee429768df2bc3c",
    title: "Eendag",
    bodyText: "Eendag sal ek onthou\nEk het jou vergeet",
    date: "2019-04-01T22:45:14+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616ad5ee429768df2bc40",
    title: " ",
    bodyText: "Verveel my weer",
    date: "2019-08-17T22:01:58+02:00",
    handle: ""
  },
  {
    id: "5e6616ae5ee429768df2bc44",
    title: "Knoppie",
    bodyText: '\n"Just fucking make it"\n\nEk is besig, actually. Oop wonde en al. Quite spectacularly so. \n',
    date: "2019-08-04T16:50:01+02:00",
    handle: ""
  },
  {
    id: "5e6616af5ee429768df2bc45",
    title: "God god god god god",
    bodyText: "Ek is (Kortste sin wat bestaan,Selfsugtig is)Kluisenaar Na \u2018n diagnose is jou besluite as gevolg van jou diagnose en is jou diagnose. Is jy sekerDat jy seker is?Wie vertrou jou bevraagtekenAs nie eers jy doen nie?",
    date: "2020-03-03T20:46:19+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616bc5ee429768df2bc60",
    title: "96",
    bodyText: "Ek dink aan jou\nKromgetrek oumens kind\nJou uurglas leeggeloop\nJou leemte le\nVyf geslagte in vergaan\nJy is nou weg maar hul gaan aan\nGeseend was jy met mensekind\nJou eie dogter jou eie kind\nJaar na jaar onbaatsugtig versorg\nJou engelkind\nLeeg le haar hart hoe kan jy verstaan\nDie weg wat die lewe baan\nAlmal het verloor vanaand\nMaar wie gaan haar hart verstaan\nWie kan haar vertroos en dankie se\nJare se versorging en nood\nVan liefde en gee van opoffering en nie vra\nMeet nie jou verlies met haar\nHaar smart sal wees onmeetbaar\nHaar opoffering en liefde tot einde en klaar\nOumenskind weggegaan\nSpreek jou seeninge oor haar\n\n\n",
    date: "2019-06-10T21:09:09+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616bf5ee429768df2bc64",
    title: "Ons rooikop pragkind sonskyn kind",
    bodyText: "Vandag is jy weg....\nEn nou kom die vrae\nWaarom dan jy waarom dan nou\nWeggeruk uit ons lewens met jou pyn en lyding\nMaar so wil ons jou onthou\nN pragtige sonskyn rooikop meisiekind\nEn net die liefde in ons harte vir jou....\n\n",
    date: "2019-06-16T09:30:27+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616c75ee429768df2bc7d",
    title: "Dit was net jy ",
    bodyText: "Ek mis die dae wat julle gedigte gepost het asof dit oudmodies gaan raakToe ek verlore kon raak in versre\xEBls en versinselsEn kon wonder, was hierdie een in liefde of in haat geskryfIs dit 'n kunstige shitpost of 'n diep gedagteHet julle reageer of eenvoudig net aan beweeg ",
    date: "2020-02-03T14:51:26+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6616d35ee429768df2bc9d",
    title: "Beerput ",
    bodyText: "Jy kan uitmaak nog kop nog stert\nDie saak staan duidelik afge\xEBts en vaag\nDonker. Obskuur. Verdek. Oopgevlek.\nDie vanselfsprekendheid kontrasryk\nAfskuwelik. Afgryslik. Monstrositeit.\n\nJy gee jou uit vir \u2018n beterweter\nDie bloed gaan op na jou hoof\nJy los op in die besoedelde eter\ndie oorskied van jou ongeloof\n\nJou buitelyne vervaag\nHoe kon jy dit waag?\nEk\u2019s jammer om op jou skoene te kots\nOns paaie gaan kruis en ons gaan bots,\n\nKom ons aanvaar... dat ons mekaar\nIn die afgrond af gaan dryf\nJou kop steek dwars in my krop\nJou hande hang aan bande om my lyf\n\nAls wat jy ooit begeer\nL\xEA soos \u2018n nes van slange voor jou deur\nDie halfleeftyd is lankal verstryk\nDis hoe die waarheid van die ander kant af lyk.",
    date: "2019-06-28T22:32:44+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6616d55ee429768df2bca7",
    title: "Bedonner en bewolk",
    bodyText: "Ek is moeg van sonskyn en blou lugMoeg van die Noorde se terg wolkies en re\xEBndruppels wat 'n anti-klimkas isEk wil re\xEBn ruik wat so bekend is soos jou kussingslope en jou spuitgoedEk wil die re\xEBn voel, asof dit jou vingers is wat weet hoe om my lyf te verkenEk wil donderweer sien, flitse ervaarEk wil sien hoe alles gryser en gryser raak - soos wat jou o\xEB geraak het met die hoeveelste soen vir die aandJy maak my bedonner, bewolk en beduiweldBesope op die herinneringe van jouBereid om jou weer lief te h\xEA as jy my die kans gee",
    date: "2019-11-02T17:00:06+02:00",
    handle: ""
  },
  {
    id: "5e6616dd5ee429768df2bcbc",
    title: "What don\u2019t I do",
    bodyText: "I feel \nOh, I feel so\n\nA depression coming on",
    date: "2018-12-05T17:25:41+02:00",
    handle: ""
  },
  {
    id: "5e6616f55ee429768df2bcfd",
    title: "Stuur dit die water in A",
    bodyText: "Ons miss mekaar elke dag\nJou lewe nou, loop om myne\nEn hulle s\xEA: \u201CDit wat jy die meeste van hou sal jy eendag haat\u201D en dis waar, \nEk haat daai goed van jou, want ek soek dit nogsteeds\nEk soek dit by hulle en by haar.\nNog altyd,\nDis nog by jou\n\n",
    date: "2018-12-12T20:51:55+02:00",
    handle: ""
  },
  {
    id: "5e6616f95ee429768df2bd09",
    title: "My geliefde as \u2018n wolf",
    bodyText: "Jy is gebore in die jaar van die hond\nklein en fragiel\nsonder tand of klou met \u2018n donker pels\nsag   sag soos skaapwol\njou ma maak jou groot op couscous en pap    slyp\njou tande op tarentaalbene    sus \njou met rock musiek en babataal\n\nlater groei jou hare krul en jou lyf lank en jy \nblink uit in tennis en skaak terwyl jy bloei\nna skool loop jy weg van die huis en hardloop \nsaam met die wolwe    heelnag hap jy\nna woorde om te kou met jou tande wat skerp   \nskerp word    jou ore is satelliete \n\nin jou dertigs sit jy ernstig en mooi in die koffiewinkel op die hoek\nek bedien jou met my woke T-shirt    ek is \njou twaalfde slagoffer    ons l\xEA nakend \nin die nag in jou woonstel se slaapkamer \nwat uitkyk oor die park met beelde \nvan lewensgroot neste en Cecil John Rhodes    en stry\noor geweldadige kinders wat haweloos \nlangs die fietsrakke l\xEA op kartonbokse en sement en haal frases\naan van Audre Lorde en die ysprinses in Frozen   \nvroegoggend skeur   skeur  jy my oop om woorde \n    wat ek gesteel het \nte vind en aan die w\xEAreld uit te basuin.\n",
    date: "2018-08-03T11:16:54+02:00",
    handle: "jennybl3u"
  },
  {
    id: "5e6617115ee429768df2bd53",
    title: "hoesgoed + bruistablette",
    bodyText: "Jy't uit jou pad gegaan. Dankie. ",
    date: "2019-06-02T19:45:23+02:00",
    handle: ""
  },
  {
    id: "5e6617165ee429768df2bd63",
    title: "Die Smart Gevaar",
    bodyText: "Verwyte, uit gebyt...\nBesluite ut gesmyt...\nFluit fluit...\nFluit fluit... \n\nKonstant bewe, Lewe op sigarette gebede...\nWant ons sit die nasie in Stagnasie. \nTog will almal 'n huisie by die see h\xEA, in die hede?\nNiemand is eintik meer verbaas nie.\n\nTe miste het ons nog die see.\n\nGrafeer jou betekenis met swart op wit. \nPermanente monolo\xEB van onderdrukte Tourettes. \nDie wyse kan net s\xEA ons moet bid.\nBeton oorlo\xEB, Stagneerde onder konneksie.\n\nEk wou net jou hart bewaar....\nWelkom by die Smart gevaar. \n\nKontak gemaak...\nKonstant wraak...\nKontant gemaak...\nKont, Kak, Braak...\n\nVoorgeskrywe anti-depressie of Korreksie?\nEk wou net jou hart bewaar....\nBewe jouself vir die nuwe resessie.\nMaak of braak vir jou bewaar.\n\nVir Nou.\n\nKonstant blaam...\nKonstant wraak...\nKontant gemaak...\nKont, Kak, Braak...\n\nVir Nou okay....\n\nVerwyte, uit gebyt...\nBesluite ut gesmyt...\nFluit fluit...\nFluit fluit... \n\nJou storie is uit.\n\nEk wou net jou smart bewaar....\nWelkom by die hart gevaar. ",
    date: "2019-06-21T10:26:19+02:00",
    handle: "kitchendutch"
  },
  {
    id: "5e6617225ee429768df2bd82",
    title: "2020.02.13",
    bodyText: "Julle. En bra, jy. Dankie. Ek waardeer. \u{1F9E1}",
    date: "2020-02-14T00:30:09+02:00",
    handle: ""
  },
  {
    id: "5e6617265ee429768df2bd8b",
    title: "Jou naam",
    bodyText: "Ek het jou naam geskryf op Tafelberg\nEk het jou naam geskryf op die see sand van Bloubergstrand\nDie branders wil dit nie weg spoel nie\nEk het jou naam geskryf hier binne my hart\nDit is waar jou naam gaan bly",
    date: "2018-08-26T01:46:15+02:00",
    handle: ""
  },
  {
    id: "5e6617305ee429768df2bda8",
    title: "Leemte wat nie gevul kan word",
    bodyText: `Ek dink aan jou naam'n naam wat "Hope" betekenHope vir my en jou maEk onthou jou eerste huil.Tot ek jou vas gehou hetMy trane het gerolGerol van blydskapEk onthou hoe die winters sonGeskyn het oor my en jouHoe jou hartjie teen my gebons hetHoe trots ek was.Dan slaan die werklikheidJys nie meer kleinJys 'n volwasseneMet jou eie lewenspadWaar daar geen plek is vir my.Want elke een is besigBesig met sy eie doen en lateDaars nie meer tydJyt vervreemed geraakAl wat ek ken van jouIs deele wat jy share op face bookHartseer tree inmaar daars nie meer trane nieSlegs die gevoel van leemteWat nie gevul kan word deur enige een`,
    date: "2019-08-07T16:11:13+02:00",
    handle: ""
  },
  {
    id: "5e6617395ee429768df2bdc9",
    title: "    ",
    bodyText: "Wow ek\u2019s so moeg daarvoor om nie goed genoeg te wees nie",
    date: "2019-07-02T11:28:25+02:00",
    handle: ""
  },
  {
    id: "5e66173c5ee429768df2bdd2",
    title: "god.",
    bodyText: "ek sien uit om my hond te sien na werkek wonder ofmy pa ook daai tipe opgewonde was as hy in die middae terugkeer?troeteldier opwinding. seker maarek sal onthou om hom te vraeenkeer as ek op die vloer sit na \u2018n werksdag met my troeteldier.",
    date: "2020-01-27T21:01:55+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617465ee429768df2bdef",
    title: "Chernobyl",
    bodyText: "So middel van die 2de episode\nOns was vasgenael\nJy trek sommer daar slaapklere aan\nMy gedagtes dwaal\nJy voel warm, gloeiend onder my hande\nMiskien kan ons vanaand verder kyk?",
    date: "2019-08-07T12:27:17+02:00",
    handle: ""
  },
  {
    id: "5e66169f5ee429768df2bc12",
    title: "Photo",
    bodyText: "This photo, A moment of you, wiping a tear away.You seem so honest sometimes, I lend myself to believe in you.I look around, I\u2019ve rearranged my room since then, but still you sitI\u2019ve moved house since then, but still you sit.",
    date: "2020-01-05T21:41:40+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616ad5ee429768df2bc3e",
    title: "In die loop",
    bodyText: "Die teleurstelling van iemand wat haastig met vaste tred langs 'n ry winkels afloop- wyer trap- om te sien of die ligte van hul bestemming nog brand- nek uitgerek. En dan besef dis te laat, maar steeds hoop- onsekerder loop, n\xF3g n entjie wyer, nader loop om s\xE9ker te maak dis nie dalk net n kragonderbreking nie -of is iemand dalk nog in die deur- en dan die tot staan kom- sommiges so in die loop eintlik- omdraai en vinnig, ongemerk, in die donker weerkaatsing bevestiging soek vir hulself, sonbril weer laat sak en terugstap. Nou, stadiger, met minder drif. Jy weet jy't te lank gevat voor die spie\xEBl by die huis. Jy weet die ontbyt was minute terug al klaar voor jy opstaan. Jy weet jy moes vinniger afknyp. Jou teleurstelling is joune. En nou is dit verby. Volgende eindpunt. Dis darm nog 17h57. ",
    date: "2018-07-22T14:01:20+02:00",
    handle: ""
  },
  {
    id: "5e6616af5ee429768df2bc48",
    title: "Jys soos 'n half sent wat niks mee werd is",
    bodyText: "Ek soek iemand wat omgeeIemand wat my aanvaarAanvaar vir wie ek is en sal weesDie lewe of die mensdomHet my verkeerd bewysAlmal wil net heTot jy soos 'n half sent isWat niks meer werd is nieDan gooi hul jou wegof jy niks meer werd is nie",
    date: "2019-12-18T21:30:59+02:00",
    handle: ""
  },
  {
    id: "5e6616b05ee429768df2bc49",
    title: "Breinloos gesearch.",
    bodyText: "Ploeter voort op jou selfoon,soek en soek en gee nie op tot wanneer die son en die vo\xEBls jou wakker hoes in Pretoria se besige eensame buurte waar straatligte plek-plek brand soos in 'n scary movie waar die honde blaf en die katte paar.Soek en soek om jou eensaamheid te sus.",
    date: "2019-04-04T14:04:51+02:00",
    handle: "johannes_ferreira"
  },
  {
    id: "5e6616b35ee429768df2bc50",
    title: "Trou",
    bodyText: "Jy brag by die buurtannie oor jou verloof ringIn my agterkop dink ek\u201Cgod, Ek moet hier uitkom\u201D",
    date: "2019-09-08T20:52:54+02:00",
    handle: ""
  },
  {
    id: "5e6616c95ee429768df2bc85",
    title: "Maak dit sin cos tan?",
    bodyText: "Ek kry nou nog nagmerrries oor matriek standaardgraad-wiskunde.",
    date: "2018-10-15T15:37:35+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6616d05ee429768df2bc94",
    title: "Gedigte",
    bodyText: "Ek hoor jy skryf gedigte. \nMoenie warry nie ek weet dis nie oor my nie. Ek wens dit was though.\n Jou smile het vir my ges\xEA\n ons kan dalk werk maar\n jou woorde het anderste ges\xEA.\n\n Jy was my stukie perfeksie \nvir daai tydjie. \nNou \nsal net daai tydjie my stukkie perfeksie wees. \nAs ons meer as niks kon wees\n sou ons die w\xEAreld om draai maar aan die ander kant\n draai die w\xEAreld homself in die ronde elke dag. \n\nToe jy vir my oog knip\n toe dog ek dat daar actually iets goed kan gebeur \ntoe vind ek uit dit was alles net n speletjie. \n\nJou siek siek speletjie.",
    date: "2018-08-07T11:10:06+02:00",
    handle: "Anoniem"
  },
  {
    id: "5e6616d15ee429768df2bc98",
    title: "20:48",
    bodyText: "Netflix\nen\nchill\nop my eie",
    date: "2019-06-20T20:48:33+02:00",
    handle: ""
  },
  {
    id: "5e6616d65ee429768df2bca9",
    title: "Wynproe",
    bodyText: 'Sy s\xEA \nMens drink nie soetwyn soos \u2018n fokken shooter nie\nEn ek dink\nSoms doen mens\nSoms is soetwyn shooters die beste medisyne\nTeen wat jou vreet hier binne\n\nSy vertel van opgerolde rooibostee blaar-zolle\nEn ek stem, ja, die lewe is kort\u2026\nTe kort vir pretensie\nTe kort vir lang-gesig klagatte\nTe kort vir mense wat moan oor jy in \u2018n ongemerkte one-way opry\nTe kort om te wonder oor jou\n\nSy s\xEA sy sien ek hou van \u2018n \u201Csavvy\u201D wyn\nDit gaan maklik af\nEk wou diep raak en antwoord, ja, anders as die lewe \u2026 Soms\nMaar ek lag saam\nWant hierdie is \u2018n maklik-afgaan oomblik\nEn haar geselskap het maklik afgegaan,\nSoos die "savvy"',
    date: "2019-03-09T12:41:46+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616e05ee429768df2bcc8",
    title: "Jon Bellion",
    bodyText: "I'm coming to terms with a broken heartI guess that sometimes good things fall apart",
    date: "2019-08-26T23:09:12+02:00",
    handle: ""
  },
  {
    id: "5e6616e35ee429768df2bcd0",
    title: "Onthou ll",
    bodyText: "Getroude lippe ry die grootste klippe ",
    date: "2018-11-29T17:39:26+02:00",
    handle: ""
  },
  {
    id: "5e6616e45ee429768df2bcd3",
    title: "Wat maak lewe moontlik ",
    bodyText: "Hier is dan twee o\xEB\nMond\nBrein\nNeus\nGedagtes\nHande en voete\n'n volledige biologie as't ware, \n\n'n enkele, volledige biologie. ",
    date: "2019-02-15T01:35:42+02:00",
    handle: "HierdieKakAlweer"
  },
  {
    id: "5e6616ee5ee429768df2bce9",
    title: "  ",
    bodyText: "Hoe lyk die bedankingsbrief- \n                     vir 'n bedanking uit\n                             iemand se lewe? ",
    date: "2019-06-19T01:23:44+02:00",
    handle: ""
  },
  {
    id: "5e6616f75ee429768df2bd01",
    title: "?",
    bodyText: "Jesus,Het Jy gesterf vir onsOf as gevolg van ons?",
    date: "2019-08-04T21:33:09+02:00",
    handle: ""
  },
  {
    id: "5e6616fa5ee429768df2bd0e",
    title: "duif",
    bodyText: "Dog het gedag\n\u02BCn hoender kom op\nas hy \u02BCn veer plant.\n\nSal daar dan vrede opkom\nas ek jou met die bure se\ndooie wit duif\nop jou bors begrawe?\nEn as ek \u02BCn olyftak\nin jou skedel b\xEAre,\nsal jy vir eens\n- net \xE9\xE9nmaal -\nnie kwaad gaan slaap nie? ",
    date: "2019-04-14T20:21:55+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617055ee429768df2bd31",
    title: "-",
    bodyText: "Ek het nog nooit \u2018n boom besit nie\n\u2018n kar gehuur nie\nof \u2018n bank gekoop nie\n\nEk besit nie \u2018n oond nie\nEk het nie gordyne nie\nAnder mense se grasperke is vaal\n\nEk is sonder hierdie dinge\nKuns is in galerye\nLewensversekering op die radio\n\nHoe betaal mens dit? Hoe gaan mens dit aan?\nEk is sonder hierdie dinge\nWat ek oor skuldig voel\n\nEk is in hierdie w\xEAreld\n\u2018n besoeker\n\n(2017)",
    date: "2019-04-04T11:54:17+02:00",
    handle: "francoislct"
  },
  {
    id: "5e66170c5ee429768df2bd42",
    title: "jy was toe reg",
    bodyText: "ek verdien beterjulle verdien mekaar ",
    date: "2020-01-06T23:09:10+02:00",
    handle: ""
  },
  {
    id: "5e66170c5ee429768df2bd44",
    title: "Op pad",
    bodyText: "Alles kom tot niksAlles kom tot niks",
    date: "2019-08-04T21:33:55+02:00",
    handle: ""
  },
  {
    id: "5e6617105ee429768df2bd4e",
    title: "Augustus, heuning, jy was myne",
    bodyText: "\nAs die Warm Winde begin waaiIn die noorde van die land\nEn orals langs highways\nIs daar kort-kort dele wat brand\nVir my o\xEB is alles of stof\nOf rook\nEn vals-water begin verskyn op warm teer\nWat na maande van koue weer hitte kan voel\nEk verdwaal in alles daarvan\n\nDis jy in \u2018n kortbroek, vir die eerste keer na die winter\nDis ek en my droe\xEB lippe\nDis Aardklop om die draai en jou Pa wat wil wors braai\nVir hotdogs, vir later as ons honger word\nDis Spur en Ultraviolet parfuum in die mik van jou nek\nDis my t-hemde wat oplig as ons lag en ons albei se verjaardag\nDis julle kombuistafel en die twee houtbanke wat ek nog wou gebruik om ons kindjie se kot uit te maak\nDis Dettol en Alzams en Challenger Deep\nDis ek wat nooit baai s\xEA vir jou suster nie en altyd weg fok\n\nDis Alfa en Kruisstraat en jou pa wat my abba\nDis 2017 en al sy herinneringe\nDis Potchefstroom in amper-Lente\nEn dis al hierdie duisende donnerse duiwe\nWat sing asof Somer al hier is",
    date: "2019-08-08T21:09:26+02:00",
    handle: ""
  },
  {
    id: "5e6617125ee429768df2bd56",
    title: "liewe sonneblom",
    bodyText: "jy dwaal rond in my drome \nin elke sluk asem \nin elke traan wat my wange vlek \nelke euforiese oomblik is gekleur met skynsels van verlies \n\nek het vandag jou stem in die sagte wind gehoor \nek voel die laaste ritme van jou pols elke keur as jou ma my vas hou \n\njy \nis \noral \n  behalwe waar ek jou die meeste\n  nodig het \n    - in my arms.\n",
    date: "2019-01-28T11:28:57+02:00",
    handle: "tamiabrown.x"
  },
  {
    id: "5e6617185ee429768df2bd68",
    title: "Links of Regs",
    bodyText: "Hoekom kan ek nie kry waarna ek soek nie?",
    date: "2019-05-08T12:56:36+02:00",
    handle: ""
  },
  {
    id: "5e6617195ee429768df2bd6a",
    title: "Gebed",
    bodyText: "Here, mag ek eendag (of m\xF4re) sterf wyl ons lag. Dalk 'n hartaanval, dalk 'n stroke of 'n ongeluk, maar asseblief mag dit saam met my gunstelingmense wees?Amen.  ",
    date: "2020-02-29T12:17:01+02:00",
    handle: ""
  },
  {
    id: "5e6617265ee429768df2bd89",
    title: "Volume ",
    bodyText: `Sekere mense kuier net lekkerder as ander. Kevin het generous amounts of "spasie". Spasie vir teenstrydigheid. Spasie vir vreemde maniere. Spasie vir uitdagende gedagtes. Spasie vir ander om hulleself te wees. Spasie om homself te wees (op 'n vreemde manier). Spasie vir die onbekende. Te kan sit en wees. Spasie. Soveel spasie. `,
    date: "2019-04-17T08:07:29+02:00",
    handle: ""
  },
  {
    id: "5e66172b5ee429768df2bd99",
    title: "Moeg vir die lewe(r)",
    bodyText: "Moeg\nMo\xEBer\nMoet\n\nHoekom\nWaarom\nGoed\n\nSallie\nSal\nSeker\n\nGooi nog\nIn my\nBeker\n\n",
    date: "2019-05-04T23:46:31+02:00",
    handle: ""
  },
  {
    id: "5e66172e5ee429768df2bda3",
    title: "Die rus is elders /",
    bodyText: "As jy dit vindstuur vir my \u2018n boodskapsommer op whatsappek het my foon ge-moonek is moegvir die geraasgeklagekermge-fokken-biepeks nogals moeg.As jy dit kry,bel tog maarmy foon is steeds op moonJy sal na die derde lui deurkom",
    date: "2019-07-31T13:48:03+02:00",
    handle: ""
  },
  {
    id: "5e6617355ee429768df2bdb9",
    title: "Tyd is min",
    bodyText: "Tyd is minMiskien 'n uur of twee'n dag of twee'n maand of twee'n jaar of tweeHoe sal ek weet Wanneer my gaaring op isMy lewes pad om is.Tyd sal leerLeer hoe kortJou lewens pad is Jou lewe op aarde is verbyJou seer kry is oorJou hartseer is oorJou lewe is oor.Wonder wat wag aan die ander kant vir jou Wie sal ooit weet tot dat dit jou tyd is om te gaan. ",
    date: "2019-07-13T20:03:42+02:00",
    handle: ""
  },
  {
    id: "5e6616995ee429768df2bbfe",
    title: "My wens",
    bodyText: "Gee vir my n sonsak waarheen ek my drome kan stuur\nGee vir my arms wat om my kan wees en die liggaams taal praat wat ek verstaan.\nGee my God in jou hart en geloof in jou o\xEB\nGee my vertroue dat ek nooit sal breek .\nSoen my sodat ek jou liefde kan proe.\nWys my deur jou dade sodat ek kan verstaan dit die moeite werd was om vir jou te wag...",
    date: "2019-12-08T12:20:44+02:00",
    handle: "mada_oosthuizen "
  },
  {
    id: "5e66169a5ee429768df2bc02",
    title: "Ek weet dit!",
    bodyText: "Jy is n\xE9s jou pa",
    date: "2019-05-16T20:21:47+02:00",
    handle: ""
  },
  {
    id: "5e6616b05ee429768df2bc4b",
    title: ".",
    bodyText: "Paspoort my - Geen vlag - Geen Mense - Geen Grense",
    date: "2019-08-24T14:52:15+02:00",
    handle: ""
  },
  {
    id: "5e6616ba5ee429768df2bc5f",
    title: "Bergie",
    bodyText: "Ag, ek soek net troos, m\xEAd\xEAmNiks gjeld of sjillingsG\u2019n piecework of shelter\u2019ieEk soek net \u2018n mammie om my vas te houTeen ha borsEk soek troos wat asem haal\u2018n Huisie wat ruik soos sonnagskoolEn vetkoekAg, ek soek net troos, m\xEAd\xEAm",
    date: "2019-08-04T16:53:02+02:00",
    handle: ""
  },
  {
    id: "5e6616bd5ee429768df2bc63",
    title: "Narcistiese Nagmerries",
    bodyText: "Wens jy kon sien dat daar \u2018n wereld om ons is en almal skree nie net jou naam nie.\n\nWens jy het geweet ek is nie verlief op jou nie en dit is inderdaad net jou selfsugtige en ooraktiewe verbeelding wat natuurlik stories oor jou weef.\n\nMag jy eendag agterkom hoe stil\ndit is in jou storieboek lewe....\nwant as jy net stories oor jouself\nheeltyd skryf -\nhoe vind jy \nof \nverstaan jy iemand anders,\niemand wat nie jy is nie;\niemand wat verlief is op \ndie idee van eendag iemand lief te he\nen nie die idee (droom) dat almal hom lief het nie.\n",
    date: "2018-08-22T01:46:12+02:00",
    handle: ""
  },
  {
    id: "5e6616c55ee429768df2bc77",
    title: "4am ",
    bodyText: "Helder wakker le ek nouVan drome beroofJy spook in my nanagWat is dit met jouJou diep stem uit die noordeVerdryf die slaap en my woordeEk skryf nie meer in die ritme van jou stemEk teken nie meer die lyne van jou lyfEn tog hunker ek steeds na jouWyk nou uit my nanagMaak my vryOf kom haal myEn hou my ewig by jou",
    date: "2019-09-26T04:04:36+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6616cf5ee429768df2bc91",
    title: "god.",
    bodyText: "Ek kan nie skryf waaroor ek wil skryf nie, al is dit anoniem.Goddank vir vergelykings en so. H\xE1\xE1t jy ook bosse blomme?\nEk gaan skryf van blomme en potplante. \n\nHet iemand al vir jou blomme gekoop en dan wil jy dit nie h\xEA nie?\nmaar dit is ongeskik om daarvoor nee te s\xEA?\n\u2018n Paar weke dan vrek die goed (ek praat van die bos blomme, op jou tafel: die water is alweer klaar en dit stink; gelukkig nie op jou instagram post nie)\n\nHeerlikheid, ek soek net potplante, mense. \nDit hou langer. \nDit lewe.\nDie potplante, natuurlik. \n\n...want ek skryf oor blomme en potplante. ",
    date: "2019-09-29T15:09:52+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616d05ee429768df2bc95",
    title: "Oukei. Bye.",
    bodyText: "vlugtig verdwynjou glimlag \ntrane verskyn\njou hart\nklop in jou keel\njou mond\ns\xEA nie veel\njou o\xEB\nverdrink in verdriet\njy sing\n'n treurige afskeidslied",
    date: "2019-08-16T10:13:54+02:00",
    handle: ""
  },
  {
    id: "5e6616d25ee429768df2bc9c",
    title: "Jy is 'n ster duisend",
    bodyText: "Elke aand as ek na jou tuiste gaanDink ek hoe gelukkig ek isom 'n vriendin te heWat omgeeWat luister na al my lewens storiesAl die hartseer wat ek moes deurmaak en nog steeds staande blyDie lewe het vir jou ook 'n harde hou geslaan.Ek sien en beleef dit wat jy moes deur maak. Ek kan my nie eers in dink hoeveel hartseer jy self moes dra. Die hartseer in jou o\xEB maak my in my binneste seer want jys so 'n prag van 'n mens. Jys soos 'n diamant wat skitter al het die lewe jou 'n harde hou geslaan.Ek verbaas my elke dag dat jy nooit gaan l\xE8 het nie. Jy is 'n sterk mens en 'n juweel van 'n mens. Jys 'n ster duisend. ",
    date: "2019-09-12T19:31:58+02:00",
    handle: ""
  },
  {
    id: "5e6616d35ee429768df2bc9f",
    title: "sondagaand i",
    bodyText: "waarom is sondagaande so breekbaarasof jy moet saggies vat",
    date: "2019-11-03T21:12:05+02:00",
    handle: "letter.ling"
  },
  {
    id: "5e6616d55ee429768df2bca6",
    title: "*",
    bodyText: "sHE hATEd cHEmistRy clASS",
    date: "2019-06-08T22:18:13+02:00",
    handle: ""
  },
  {
    id: "5e6616db5ee429768df2bcb4",
    title: "Tomb",
    bodyText: "If you look at your tomb before it's your time to die, you'll die anyway. That's what they say at least. It's meant to be a surprise. No matter how confusing life may have been, in those last few moments when you walk up those stairs to your tomb, it's all supposed to fall into place and make sense. I say stairs because I imagine mine with stairs.  Nobody actually ever sees their tomb and comes back to tell anyone about it. There was that one guy that one time who said he did. He told us his tomb was a cave. Nobody took him seriously. What kind of a tomb is a cave anyway? \n\nThey say your tomb chooses you. When I was younger I knew a boy who said his tomb was a plate of ice cream. Three scoops of Neopolitan: strawberry, vanilla and chocolate. All leaning on one another - and melting - but never too much melting. That's when the ice cream was at its best, he said. It meant you got both the warm and cold sensations touching your lips. According to him, life was about the contrasts. He was quite political when it came to ice cream. And I admired that. So much so that I decided to adopt a plate of Neopolitan as my tomb too. He chose that tomb and I thought if I was passionate enough about it, it would be the same as my tomb choosing me. Nobody said you couldn't be passionate about somebody else's tomb either.\n\nI grew out of it in a year or so, and decided that that was a dumb idea for a tomb. Almost as dumb as a cave. Who eats ice cream off a plate and not out of a bowl? I rejected the plate of Neopolitan and sat without a tomb for a while. \n\nMy true tomb came to me one evening at a dinner. It was a family gathering which aptly foreshadowed the dread of the situation. I watched as they tied the lobster's claws together and dropped it in a pot of boiling water. To me, there was no honour in this situation at all. The lobster was disarmed of its only weapons, thus stripping any chance of a fair fight. If that wasn't enough, the lobster was given false hope and may even have felt a sense of relief returning to the comfort that water gave it. Only to discover that its home had become a twisted and blistering hell where it was forced to suffocate in a soup of its own flesh. As I said, there was no honour in this situation at all. So, in the name of the weak, the voiceless and the exploited, I adopted the lobster as my tomb.\n\nNow I imagine my tomb as a lobster resting on its back. Resting at the top of a few stops where the church altar would normally be. I'm blinded by the flashes of gold that reflect and meet my eye in every corner of this church. The stained glass windows flicker and paint a path leading up the stairs. I walk up to my tomb. Step by step. The church organ snorts awake from its slumber. Only one key plays at a time. One dull note. The lobster's legs expand and contract in unison along with it. The claws are there and they're tied up. The organ begins to hiss. The claws start flailing. The lobster is in pain. I need to free the claws.\n\nNow I say I imagine all this because when you truly know what your tomb will be, even without seeing it, it's all you can think about. The key is to fantasize about your tomb. The tomb will bring clarity and release. And you can think about how soft, warm, sad, hard, disappointed, anxious and jovial it may make you feel. The important part though, is not to actively seek your tomb.\n\nMy grandfather's tomb was a bird cage. Specifically the kind Marie Antoinette kept in her atrium at Versailles. They were like any round bird cage really, except the door was marked with the royal crest. I only knew this because my grandfather would sketch it out at any given moment. He generally only fantasised about his tomb. He never went as far as actually visiting France. The one time he started welding a cage big enough, my grandmother sent him to the doctor. The doctor said the usual and told him he was thinking about his tomb too much. He told him he needed to find something to take his mind off it. So my grandfather took up carpentry. We were all a bit more relaxed since we'd never seen a wooden birdcage and the beams grandfather was using weren't in the right proportions to attempt one. He began building some kind of a stage out in his backyard. Eventually he added a few stairs and finally two longer poles joined at the bottom by a piece of wood with a circle cut out of it. Now a guillotine was never meant to be his tomb. I can see where the connection comes in. But nobody really knows what answers you get when something like this happens.\n",
    date: "2019-06-29T18:51:53+02:00",
    handle: "cryingcavecat"
  },
  {
    id: "5e6616dd5ee429768df2bcbd",
    title: "Two In The Shirt",
    bodyText: "When you bend over and your boobs do the thing \u{1F616}",
    date: "2019-04-21T22:26:41+02:00",
    handle: ""
  },
  {
    id: "5e6616e25ee429768df2bccc",
    title: "Desperaat nie permanent nie",
    bodyText: "Tattoos is die nuwe geloof\nThe masses believe\nAls het 'n persoonlike konnotasie \nEn fok weet jy's 'n poes as jy iets daarvan kritiseer ",
    date: "2018-08-15T16:36:29+02:00",
    handle: ""
  },
  {
    id: "5e6616f45ee429768df2bcfb",
    title: ")",
    bodyText: "Its odd to think that you are gone\nThat you have moved on\nI have nothing to do\nexcept not seeing you.",
    date: "2018-10-14T20:29:34+02:00",
    handle: ""
  },
  {
    id: "5e6616f65ee429768df2bd00",
    title: "Doring.",
    bodyText: "Hier sit ek weer met jou in my hand. Klaar gesondig, hou ek jou vas. Naby aan my liedere. In hierdie oseaan van sonde sal ek versuip. Al die dorings sal langs my dryf. Uitspoel op die strand tussen al die genade. Nog verstik aan vars sonde. \xCArens agtergelaat in \u2018n woud van vreemde tale en klanke. Op \u2018n vo\xEBltjie se rug sweef jy in om my te red. \nSo sal jy murmereer tussen sonde en gewete. \n\n",
    date: "2019-09-29T00:54:22+02:00",
    handle: ""
  },
  {
    id: "5e6617005ee429768df2bd21",
    title: "Purperpersmurmerasies",
    bodyText: "PurperpersmurmerasiesSpook in die murasies\nVan my kognidrome\nEn die vrome\nBlou lug\nLaat my sug\nSoos ek wag\nOp hierdie skynheilige dag\nVir die belofte van 'n m\xF4re \nWaar dit re\xEBn in die dorre\nWoestyn waarin ek myself bevind\n",
    date: "2019-10-06T20:47:07+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617065ee429768df2bd32",
    title: "Klein Pella ",
    bodyText: "Hulle s\xEA\n'n plek is godsverlate\nmaar hi\xE9r\nhier is byna niemand\n(nie n\xF3\xFA nie);\n\nhier is dus\ndie w\xEAreld se plek vir God. ",
    date: "2019-06-17T20:35:47+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617195ee429768df2bd6c",
    title: "Sutri's Philosopher",
    bodyText: '_"This man was a philosopher of the mundane, blessed with deep insight into subjects of no significance."\n-Michael Rips_\n\nSommige mense darm, weet jy. ',
    date: "2018-12-31T09:56:21+02:00",
    handle: ""
  },
  {
    id: "5e66171a5ee429768df2bd6f",
    title: "Sien?",
    bodyText: "Soms oppit. Opgewonde, selfs. Dan kyk ek na beter weergawes van myself op instagram en onthou: jy het nie wat dit vat om te compete nie. Nie op d\xE1\xE1i vlak nie, anyway. Fuckin' Enneatype jealousy. Kak, tog. ",
    date: "2020-01-14T22:56:44+02:00",
    handle: ""
  },
  {
    id: "5e66171d5ee429768df2bd77",
    title: "Please Call Me",
    bodyText: "Ja. selfde en wat maak dit saak.",
    date: "2019-06-28T22:36:00+02:00",
    handle: ""
  },
  {
    id: "5e66172a5ee429768df2bd97",
    title: "Tinder Date: 'n repliek; Europese weergawe",
    bodyText: 'Vanaand, op \u2018n tram, \nin die strate van hierdie Europese stad\nNa \u2018n tinder date\nDink ek aan jou woorde:\n\u201CEk fokken haat lus en die Leeukop selfies het my in elk geval teveel afgepis.\u201D\nSnaaks, selfs hier feature die Leeukop selfies - almal hier wil mos \u2018n goedkoop, eksotiese vakansie in "wille Afrika" h\xEA.\nEk dink dan verder\nOor die toeval en die noodlot\nOor hoe jou Tinder Date ook my tinder dates is\nOor of ek op jou radaar sou val (nadat jy jou wenpaal een afgeskuif het), en jy op myne, as ek toe in my Moederstad was\nMaar meestal dink ek aan die troos wat ek daarin vind \nOm op di\xE9 platform te besef \nDaar is ander Afrikaners \nSoos ek',
    date: "2018-11-11T01:20:32+02:00",
    handle: ""
  },
  {
    id: "5e6617365ee429768df2bdbd",
    title: "Breakup 1",
    bodyText: "Ek het opgefok\nJy't my geblok\n\nEk print net gou iets dan kom ek - jou laaste woorde op whatsapp\n\nEk mis jou\nEk wens jy kon my vergewe\nEn verstaan\n\nHoe gaan dit beter raak?\nJy beweeg gou aan\nEk net 'n fout wat jy gemaak het\n\nWat gaan ek doen sonder jou?",
    date: "2019-01-20T04:39:45+02:00",
    handle: ""
  },
  {
    id: "5e66173a5ee429768df2bdcd",
    title: "Huppelkind",
    bodyText: "Laatnagte Die tyd wat die demone baljaarook binne-in myook niemand wil plamet my onnodighede nie\n\nSo ek bel en vra haar vir stories\nom te kalmeer \nnet gou-gou asem te haal\n\u2018n breek te vat\nvan\nmyself\n\nSy vertel vir my stories wat haar pappa vir haar vertel het\nin die aande in die bed \nas klein dogtertjie \n\nMeteens\nkalmeer my hart\nontspan my lyf\nhaal ek asem\n\nHaar kinderjare stories red my, \n(seker omdat dit)\nmy terug vat na die tyd wat my onskuld gesteel was\n\nen gee haar genoeg kans om te dink aan die volgende verhaal \nvir die volgende laatnag oproep",
    date: "2019-10-25T12:31:25+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616a55ee429768df2bc26",
    title: "Uitdig",
    bodyText: " ek dig jouuit my lewe'n afskryweuit my lewe'n gewillige slagoffer van jou selfsug:net goed geweesom te naaimaar te sleg geweesvir jouom eg te wees",
    date: "2019-10-08T00:29:16+02:00",
    handle: ""
  },
  {
    id: "5e6616aa5ee429768df2bc39",
    title: "hoerlike dag",
    bodyText: "toe jy my reduseertot bloot 'n gewoonte",
    date: "2019-10-03T21:49:13+02:00",
    handle: ""
  },
  {
    id: "5e6616b45ee429768df2bc51",
    title: "Rooimiere",
    bodyText: 'Dit was ook so n\xE9t onder twee maande na die Groot Trek\nToe "teaching English in China" gegoogle word\n\nDis nou w\xE9\xE9r net onder twee maande. \nEn Google het onthou... ',
    date: "2019-05-16T00:18:59+02:00",
    handle: ""
  },
  {
    id: "5e6616b55ee429768df2bc52",
    title: "Breytenbach op 'n goeie dag",
    bodyText: `+\xD7\xD7 _  ^'>{\xD7=  =\xF7\xF7  *\xA5!^\u25AA\xA4\xA4 \xB0=\xD7\xD7@&amp; &amp;%  # )\xA5$\u20A9 \xA5\u25A0 \u25CB\u300B \u25A0\u25A0\xD7%\u2606~\\}[  )=\xD7\xD7@^_ \u2022\xB0\u25AA\xA4 \xA1^,\xD7 \xD7* ":,_ \u25A0\u25A1\u25CF\u25CB\xB0=\xD7\xD7`,
    date: "2019-09-23T00:39:26+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6616b95ee429768df2bc5d",
    title: "Tonight",
    bodyText: "You were angry with me tonight. You said I\u2019d abandoned you this afternoon, that I\u2019d \u201Cchecked out\u201D and left you bored out of your mind for hours.\n\nWhat you didn\u2019t know, is that while I was lost in my world of painting and music, I hoped that would see me in my element, see how happy I was, see how good my work was and that your heart would glow. That you would love me all the more and think how special I am. I wanted you to see me and love me. I wanted you to be proud of me.",
    date: "2018-07-21T22:40:31+02:00",
    handle: ""
  },
  {
    id: "5e6616bd5ee429768df2bc62",
    title: "Practice makes closer to easy",
    bodyText: "Want ek oefen, my dingEk oefenEn jy kan nie stry,Dit was eens ookSo donders moeilikVir my",
    date: "2019-08-30T09:29:43+02:00",
    handle: ""
  },
  {
    id: "5e6616c15ee429768df2bc6c",
    title: "Ink vloei deur my are. ",
    bodyText: "Die soet skerp reuk van ink vloei deur my are, dit bloei my gevoelens uit, soos bloed kanker vergiftig dit my organe. Toe gevou in geheime lees jy my bladsye vol pyn, die gesigte sluk jou in, jy verdrink in die sluise van al my verwyte. Onheilig sink my boot gemaak van geloof in n see vol gebreukte drome. ",
    date: "2018-08-23T23:55:57+02:00",
    handle: ""
  },
  {
    id: "5e6616c45ee429768df2bc73",
    title: "So is dit",
    bodyText: "Instructions where not give thus\nGuidelines where not followed ",
    date: "2019-03-31T19:02:07+02:00",
    handle: ""
  },
  {
    id: "5e6616c85ee429768df2bc81",
    title: "Slaapbos",
    bodyText: "Ek dink so. Ek moet ook maar net slaap. ",
    date: "2019-06-16T18:46:28+02:00",
    handle: ""
  },
  {
    id: "5e6616c95ee429768df2bc84",
    title: "(Verdrink)",
    bodyText: "Party aande as ek in die bad is Steek ek my kop onder die waterHou ek my asem op, en laat my gedagtes gaan. Party aande as ek in die bad is kyk ek hou lank ek dit kan hou. ",
    date: "2019-09-24T09:52:48+02:00",
    handle: ""
  },
  {
    id: "5e6616ca5ee429768df2bc86",
    title: "\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A\u300B\u300B\u300A\u300A.",
    bodyText: "Meeste skrywe hier rond is soos meeste foto's op instagram. Behalwe vir die sponsored posts. Hulle't gewoonlik goeie foto's. ",
    date: "2019-06-16T02:54:27+02:00",
    handle: ""
  },
  {
    id: "5e6616d65ee429768df2bca8",
    title: "\u2606\u2606\u2606 en \u25CF\xB0\u2022\u25CB\u25CF\u2022\u25CB\xB0",
    bodyText: "Lyk of die droom, soos olie op water, weggglip voor. Vet gesmeerde bliksemstraal bo-op water, stroom af. Ek: spartelend, hortend, agterna, maar vinniger en vinniger gly dit verby. \n\nOf wag. \nWag 'n bietjie, \n\nHierdie pas is die ware Jakob wat eintlik alpad die behoefte was. Twee spartels vir elke slag se gly. Die droom is net s\xF3 volop. Daar is meer as genoeg droom vir jou en bietjie droom vir my. ",
    date: "2019-09-25T23:36:58+02:00",
    handle: ""
  },
  {
    id: "5e6616d65ee429768df2bcaa",
    title: "Stop",
    bodyText: "Langpad alleenryGestop tussen stad\nEn Kimberley se groot gat\nNeffens 'n afdraaipad\nSonsop\nSonsonder\nDag lank gewonder\nWolke's dar'm besonder\nEn ons maar eintlik gewoon\nSout pan, Nama-Karoo\nBosse wat verby vlieg\nEn ek moet eintlik bieg\nEk wens ek het meer gestop.",
    date: "2019-10-12T23:02:51+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6616df5ee429768df2bcc3",
    title: " ",
    bodyText: "Good fences make good neighbors - true  on farms, true in estates ",
    date: "2019-07-18T19:42:46+02:00",
    handle: ""
  },
  {
    id: "5e6616df5ee429768df2bcc4",
    title: "Partners? ",
    bodyText: "Op die rand van risiko. \nWeer lewend. \nGemotiveerd. \nSlow return to version 1.0.\n\nDom in die storie. \nSoveel te leer. \nSoveel te verstaan. \nSelfverantwoording. \n\nKlim nou van die bank af op en gaan teken 'n huis. \n\nEn so het dit begin. ",
    date: "2019-03-11T15:00:12+02:00",
    handle: ""
  },
  {
    id: "5e6616e15ee429768df2bccb",
    title: "Blind",
    bodyText: "Dis makliker om by 'n bedelaar verby te stap wat nie kan sien nie. \n\nEk wonder of sy weet dis makliker. ",
    date: "2019-03-20T12:37:04+02:00",
    handle: ""
  },
  {
    id: "5e6616e75ee429768df2bcdd",
    title: "Sondag",
    bodyText: "Dis n maakomseweuurdieoggendmalvapoeding so hoog soos n kite tipe dag\nWho am I kidding\nDis so tipe jaar. ",
    date: "2019-06-23T07:24:56+02:00",
    handle: ""
  },
  {
    id: "5e6616ea5ee429768df2bce1",
    title: "Vars",
    bodyText: "Jy blaas vars asemin my vuil neus.Hoekom voel my maag dan so leeg?",
    date: "2019-08-28T08:46:54+02:00",
    handle: ""
  },
  {
    id: "5e6616ef5ee429768df2bced",
    title: "nie in hi\xE9rdie w\xEAreld nie",
    bodyText: "Not toburst julle almal se bubblemaarwe are all waitingfor signs from people who are all waiting for signs from people who are all waiting for signs ",
    date: "2019-09-20T17:20:22+02:00",
    handle: ""
  },
  {
    id: "5e6616f05ee429768df2bcf0",
    title: "absoluut",
    bodyText: "|geluk| = {seks + jy  as seks  ek",
    date: "2019-05-13T08:03:52+02:00",
    handle: ""
  },
  {
    id: "5e6616f35ee429768df2bcfa",
    title: "La Luna",
    bodyText: "I heard your chant dear moonlight\nMy sweet goddess bright and bare\nWho tears apart my astral plain \nTo heal my heart with prayer\n\nI am blessed by your potential\nUse your words to clean my soul \nSince you help me see the broken\nWhen I know what makes me whole",
    date: "2018-08-03T11:33:58+02:00",
    handle: "terblanche_jordaan"
  },
  {
    id: "5e6616fa5ee429768df2bd0c",
    title: "Buzzfeed - ge\xEFnspireer ",
    bodyText: "Buzzfeed s\xEA, gebaseer op my vakansie-keuse, dat ek as nuwejaarsvoorneme minder op sosiale media moet wees",
    date: "2019-12-31T07:46:45+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617015ee429768df2bd23",
    title: "Badkamersessies ",
    bodyText: "Jy is jou eie grootste probleem. Die goed wat jou so grensloos het in ander is die juisste goed wat jy aan hulle doen. Dis redelik basic wiskunde, eintlik.\n\nVermom. Verlei, mislei en apatie.\n\n(Die spieel is nou te opgewasem om verder te kyk-sal later weer probeer.)\n\n-oja en procrastination. ",
    date: "2019-02-14T00:31:24+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6617045ee429768df2bd2e",
    title: "Koebaai is vir ander. ",
    bodyText: `"Heimlik beangs" oor die gedagte dat jy moet weg, wegger, wegste van hierdie gedeelde tyd. Jy staan een oomblik midde die Ou Karoo waar die lug soet ruik en stil is, 'n sonderlinge stilte: 'n positiewe stilte wat alles omhels, wat substansie het, en lewe. Jy staan in die senter van 'n fyn kristal- met die le\xEB hemel wat oopsprei bo jou kop en die eindelose Karoovlakte onder jou voete. Jy kan nie gaan voor ons nie die rustige roetinelewe onder die wit mure en koel vertrekke aan jou eie vel gevoel het nie. Alles langsaan die ho\xEB ho\xEB wiegende populierbome in die oggendson. Heimlike angs. En dit raak duidelik dat niemand ooit hier sal oorleef sonder om self iewers in sy wese, groot en sterk en vry te wees soos hierdie w\xEAreld nie. apologie aan w.vd.berg`,
    date: "2019-11-15T00:53:28+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e66170f5ee429768df2bd4c",
    title: "Dankie. ",
    bodyText: '"I wrote you too many poems in a language I  did not yet know how to speak." _Andrea Gibson \r\n',
    date: "2019-06-12T23:27:06+02:00",
    handle: ""
  },
  {
    id: "5e6617105ee429768df2bd50",
    title: "Onthou Checkers na kerk",
    bodyText: "kragprop\nOros (lite)\nvo\xEBlsaad\ntamaties\nkakpapier\nOreos\nvisvingers\ntee (Glen)\nkondome (Durex-xtra)\nOliebolle\nvirgin gin\ntrouman\ntampons",
    date: "2018-08-04T23:15:51+02:00",
    handle: ""
  },
  {
    id: "5e6617195ee429768df2bd6b",
    title: "Misinterpretasie",
    bodyText: "fokkit,\nman.\nek soek j\xF3\xFA,\njou hande,\nmarmermond en\ndye, \nnie jou donnerse\ndick pics nie. ",
    date: "2019-04-18T16:51:48+02:00",
    handle: ""
  },
  {
    id: "5e6617235ee429768df2bd84",
    title: "Wat verkies jy? ",
    bodyText: "Ek verkies muisneste bo verkoue. Met beide sukkel ek om te dink, My kop voel vol en gedagtes trek traag. Met die een draai my kop dronk rondEn die ander een laat my maag bollemakiesie slaan.",
    date: "2019-07-15T19:08:15+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617255ee429768df2bd88",
    title: "G and C Repeat (Palm Mute)",
    bodyText: "I'll sing my songs and I'll sing them bad,\nI'll make the mistakes I never thought I had\n\nGod, I love this hopeless night.\n\nI remember when love still held me tight,\nWhen my cowardness didn't put up such a fight.\n\nGod, I love this hopeless night.\n\nI've been alone for such an awfully long  time\nThe last kiss I had made a friendship a crime.\n\nbut Babe don't frown,\nI'm an Insecure clown,\nI've let myself down\nI've broken your crown \n\nGod, I love this hopeless night.\n",
    date: "2019-09-15T19:36:31+02:00",
    handle: "ah-ha"
  },
  {
    id: "5e6617285ee429768df2bd91",
    title: "Last impressions",
    bodyText: "I haven't caught your attention, have I?\nWell, let me tell you about my pain and suffering.\nWould it amuse you then?\nTo see me smile even after all that. \n",
    date: "2019-04-25T08:51:49+02:00",
    handle: ""
  },
  {
    id: "5e6617295ee429768df2bd95",
    title: "Hoorbeeld",
    bodyText: "Ek het gehoop vandag...\nToe hoor ek jou weer vanaand. \n\nBesef nou ek was jags.\nN\xE9t jags. \n",
    date: "2018-08-26T01:26:54+02:00",
    handle: ""
  },
  {
    id: "5e66172c5ee429768df2bd9c",
    title: "Wedding vows (al glo jy nie in trou nie)",
    bodyText: "Ek het meer verlief op jou geraak die oomblik wat jy 'n sigaret met 'n toaster aangesteek het.",
    date: "2019-06-22T16:50:51+02:00",
    handle: ""
  },
  {
    id: "5e6617315ee429768df2bdac",
    title: "wat de fok?",
    bodyText: "yellow bra and tits showing, bloodstains and nicotine craves, a fucking hole in my heart and a movie to keep me company instead of your brain, but if it's me reading the fucking signs, I'm way out of your league. bottels of wine, blooded teeth and tobacco stains. you pulled my cigarette. is it just me or did we fucked it up?",
    date: "2019-05-29T20:14:20+02:00",
    handle: "paula_stxphxnie_kruger"
  },
  {
    id: "5e6617355ee429768df2bdbc",
    title: "Wanneer jy weer die liggies sien",
    bodyText: "Jy het my glimlag in die donker hoek gevindDit afgestof en 'n permanente ding daarvan gemaakDie geluid van my giggel verbaas myWant ek is nie gewoond daaraan om so oor te loop van geluk nieEn jou eerlikheid, verlig deur die stad, deur die sterre en deur jou eie glimlagmaak my nuuskierig oor alles van jou",
    date: "2019-09-02T18:10:08+02:00",
    handle: ""
  },
  {
    id: "5e6617375ee429768df2bdc0",
    title: "Sometimes it gets me ",
    bodyText: "The thought is unbearable: there are either too many friends or absolutely no one special whom I can text with:\n\nI WISH YOU WERE HERE ",
    date: "2018-12-19T23:05:34+02:00",
    handle: ""
  },
  {
    id: "5e66173d5ee429768df2bdd6",
    title: "FOKKEN VERWARD",
    bodyText: "dis al... ",
    date: "2019-10-03T22:36:13+02:00",
    handle: ""
  },
  {
    id: "5e66173f5ee429768df2bddb",
    title: "Dearly Departed ",
    bodyText: "Jy was soveel ure, dae, maandeMy gesprek, sang, glimlagMoes ekt vir jou hardop se?Ek hoop jy kan iemand anders ook so gelukkig maak. En ek hoop jy kan weet hoe ongelooflik wonderlik jy is. ",
    date: "2019-10-06T00:08:20+02:00",
    handle: ""
  },
  {
    id: "5e66173f5ee429768df2bddc",
    title: "I won't mind. ",
    bodyText: "Wanneer laas het jy na iemand gekyk en besef: dis ek d\xE1\xE1i. Dis ek oor 20 of 30 jaar van nou. Die man met die sout en peper skouerlengte hare-baard en flairy leesbril. Die anti-nihilistiese academic by 'n tweederangse universiteit en hoopvolle single guy van 50. Ek sal nie omgee nie, maar wanneer omarm jou strewe, realiteitsmoontlikhede en ambisie mekaar?Dalk het hy klaar vrede gemaak (dit lyk tog so), en sien hy homself as die Creative Jesus met sy newly empowered dissipels uit donker Afrika. Dalk ry hy met 'n Citro\xEBn of 'n Peugeot. Hy's beslis te serperig en kleurvol vir iets soos 'n Volksie of Toyota. Dalk gesels ons eendag. Dalk loop ons mekaar by 'n convention raak. 'n Ding oor high brow topics ens. Of dalk in die Spar. En besef dalk watter ongemaklike mense ons is. ",
    date: "2019-09-28T22:56:51+02:00",
    handle: ""
  },
  {
    id: "5e6617425ee429768df2bde5",
    title: "Rusplek, Majola",
    bodyText: "Koper en kristal gesels\nHout en wit\nConcrete, klip en oogkontak\nPapier en lap\nSag en hard en velkleur\nOop en lig en skielik verskyn \nVerbind, maar privaat\nArriveer en gesels, maar steeds\nWelkom en bly\nGroet en vriendelik, maar behoefte aan\nSaterdag en Donderdag \n\nArms wat uitsteek. groet en\nVriende. Vriendelik. Vriend. Ervaring \neerste. Alleen. fokus en\n\nRaak deel. Sien binnekant en raak\nHeel. \n \n\n ",
    date: "2019-07-02T00:14:22+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617445ee429768df2bdea",
    title: "Wou",
    bodyText: "Ek wou winkel toe, maar toe is ek arm,Ek wou see toe, maar toe re\xEBn dit.Ek wou kerk toe, maar ekt ophou glo.",
    date: "2019-09-21T16:13:53+02:00",
    handle: ""
  },
  {
    id: "5e6616955ee429768df2bbf6",
    title: "wegkyk",
    bodyText: "Dis mooi en waar en alles en meer. Dankie. ",
    date: "2020-01-09T12:57:32+02:00",
    handle: ""
  },
  {
    id: "5e6616985ee429768df2bbfb",
    title: "Skaamste Mensheid anon ",
    bodyText: "Daar l\xEA 'n onoopgemaakte Weg in die sitkamer want ek voel te skuldig. Dit is nie gekoop nie. ",
    date: "2019-08-18T13:09:31+02:00",
    handle: ""
  },
  {
    id: "5e66169a5ee429768df2bc03",
    title: "Cripple 2",
    bodyText: 'Wanneer mense diere raak tydens seks was hulle altyd verkeerd en sleg en ongeskik en agterlik. Tot jy vanaand my tepels tussen jou voor- en wysvinger verwring het en my nek s\xF3 hard byt tot die lekkerte tussen my bene uitloop, is dit aan!En jou sterk swaar lyf my omkeer, opdrag gee en uitvoer. Blaf en beveel. Comply en oorgee. Vat my volgende keer na die plek van gebreekte bene en seks politiek vervang, waar onthouing die vergoeding is.  Strengel tussen klere en bene en wilde beweging. "Moenie pussyfoot" nie. "Vat wat jy wil h\xE9"Jou growwe lyntjies hemp, khaki broek.. My boxer en slaaphemp is... is a dalk genoegJa, God se\xEBn selfs d\xEDe Afrika',
    date: "2019-11-12T00:41:02+02:00",
    handle: ""
  },
  {
    id: "5e66169b5ee429768df2bc06",
    title: "Versigtig insit/ Insert carefully",
    bodyText: `Sy profiel het gelees:
"Insert something witty and profound here"
En dis toe wat ek probeer doen het.

Na 'n paar uur laat ek hom toe om something neither so wit-nie, nor so profound, in my te insert;
Na 'n week gebeur die inserting toe weer, die keer sonder om veel (emosioneel of verbaal) vooraf in te sit;
Nog 'n week later sit ek in sy bank en vertel wat in my kop sit.

En na al hierdie

inserting
insetsels
insae...

sit ek met 'n onvervulde belofte van
ek wat verder vertel wat in my sit
en hy wat hom weer in my insit

`,
    date: "2018-11-09T13:28:20+02:00",
    handle: ""
  },
  {
    id: "5e66169e5ee429768df2bc11",
    title: "Vadersdag",
    bodyText: "Vadersdag kruip nou nader\nEn ek weet jou hart word ook swaarder\nN dag van niks he om te vier\nWant julle is nie meer hier\nEk kyk rondom my en vra\nWat is n vadersdag sonder n pa\nSoos n skilpad se lee dop\nDie bo deel van n uurglas\nDie lee plek aan die middagtafel\nDie gat in my hart\nEk wil jou troos maar die woorde stik in my keel\nMyne is weg joune is weg\nWat maak ons dan nou\nStik in ons hartseer\nMaar dank ook die Heer\nVir n vader soos myne en n vader vir jou\n\n\n",
    date: "2019-06-13T00:35:37+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66169f5ee429768df2bc13",
    title: "I carry your heart with me (E.E. Cummings)",
    bodyText: "i carry your heart with me(i carry it in\n\nmy heart)i am never without it(anywhere\n\ni go you go,my dear;and whatever is done\n\nby only me is your doing,my darling)\n\n                                                      i fear\n\nno fate(for you are my fate,my sweet)i want\n\nno world(for beautiful you are my world,my true)\n\nand it\u2019s you are whatever a moon has always meant\n\nand whatever a sun will always sing is you\n\n \n\nhere is the deepest secret nobody knows\n\n(here is the root of the root and the bud of the bud\n\nand the sky of the sky of a tree called life;which grows\n\nhigher than soul can hope or mind can hide)\n\nand this is the wonder that\u2019s keeping the stars apart\n\n \n\ni carry your heart(i carry it in my heart)",
    date: "2018-07-19T21:23:38+02:00",
    handle: ""
  },
  {
    id: "5e6616a95ee429768df2bc34",
    title: "Post Naai Self",
    bodyText: "My attempt at poetry and dating....\nEk verlang deesdae.\nEk verlang na 2016 vrae.\n\nTrump in een clump.\nEventually word hy ge-hump.\nEk verlang vir jou belang.\nGod dank vir klank.\n\nDankie dat jy is so funky.\nAl is jy nie blank nie, is ons vol fruit and chutney.\n\nDankie vir die inspirasie.\nEk wil bietjie plek los vir spasie.",
    date: "2019-10-17T20:15:26+02:00",
    handle: "Kitchendutch "
  },
  {
    id: "5e6616bf5ee429768df2bc65",
    title: "\u2122",
    bodyText: "Believe it or not,\ndis 'n Almal ding, bro",
    date: "2019-05-05T21:10:51+02:00",
    handle: ""
  },
  {
    id: "5e6616c35ee429768df2bc71",
    title: "Vrydagaand",
    bodyText: "Jy's weg. Jy's nie meer hier nie. En tog is jy m\xE9\xE9r h\xED\xE9r as wat jy ooit was. Jou plek aan tafel is leeg. Jou wynglas onaangeraak en 'n Uber doen dit nou maar. Geen meer kerslig en boer-grappies nie. Geen meer Guess bril of Hilton truie nie. Geen meer Blue Label of Spier nie. Maar jy is hier. Maar alles wat my laat veilig voel het nie. En dit is fokken kak. ",
    date: "2018-07-20T21:43:25+02:00",
    handle: ""
  },
  {
    id: "5e6616cf5ee429768df2bc90",
    title: "H\xEA",
    bodyText: "Die hart gaan l\xEA nie totdat hy kry wat hy wil h\xEA nie",
    date: "2019-08-04T20:17:28+02:00",
    handle: "Bouwerbosch"
  },
  {
    id: "5e6616d15ee429768df2bc96",
    title: "Nommer asb?",
    bodyText: `Toe is ek maar net n\xF3g 'n nommer op jou lang lys van "maybe's"`,
    date: "2019-04-27T06:49:59+02:00",
    handle: ""
  },
  {
    id: "5e6616db5ee429768df2bcb6",
    title: "Jy en Ek",
    bodyText: "En hier sit ons saam, \nStil verstom staar ons saam oor die koue waters van 'n grote oseaan, \nEn jou vleisgordyn glinster soos hy wapper onder die super-bloed-wolfmaan.\n",
    date: "2019-04-04T05:36:49+02:00",
    handle: ""
  },
  {
    id: "5e6616e25ee429768df2bccd",
    title: "Haiku #4 ",
    bodyText: "woelwater spoel uitoor my lyk, 'n kamma skulp wat op jou rak pryk. ",
    date: "2019-07-28T15:40:29+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6616ec5ee429768df2bce6",
    title: "kinders by doesyne",
    bodyText: "onthou jy nog wat jou Ouma ges\xEA het\nlank gelede toe sy die re\xEBls neergel\xEA het\ntoe die w\xEAreld aan die begin was\ntoe ons mense nog min was?\n\nkry kinders by doesyne\nja, kinders by doesyne\nek vat vir my grond,\nnou noem ek dit myne\n\nek wil my kinders nie bederf nie\nmaar daar is geen plek meer op die werf nie\nvir die kinders is daar niks om te erf nie\nwant Ouma wil net nie... sterf nie\n\nek wil nie l\xEA op my ouers se nek nie\nek wil ook nie oorsee toe moet trek nie\nmaar vir ons kinders is daar geen plek nie\nen die oumense wil net nie... vrek nie.\n\nin hul gloria...",
    date: "2018-08-15T18:33:11+02:00",
    handle: "Draadhond"
  },
  {
    id: "5e6616ed5ee429768df2bce7",
    title: ";",
    bodyText: "Ek haat jou \u201Cgedigte\u201D",
    date: "2019-08-12T08:37:31+02:00",
    handle: ""
  },
  {
    id: "5e6616f65ee429768df2bcff",
    title: "slotsom(me)",
    bodyText: "4+6+12+13 = 35 maar 3+5 = 8 en dan is 8 = 2^3 en uiteindelik is 3-2 = 1 ons is almal soms fokken alleen",
    date: "2019-05-22T17:48:05+02:00",
    handle: "arnojvvuuren"
  },
  {
    id: "5e6616f75ee429768df2bd02",
    title: "Tiete om die braaivleisvuur ",
    bodyText: "Ek laaik tiete,\nEn ek laaik vuurmaak, \nMaar ek laaik nie van vuurmaaktiete nie.\nEk weet nie waar of vir watse een om te kyk nie. \nTen minste weet ek waar om vir die hout en die Blitz te gaan soek. ",
    date: "2019-10-08T18:41:51+02:00",
    handle: ""
  },
  {
    id: "5e6616f95ee429768df2bd0a",
    title: "tuin-tuin ",
    bodyText: "Peonies\nSnapdragons\nRanunculus\nPansies\nSweat Peas\nLilacs\nHollyhocks\nPoppies\nHoneysuckle \nDaffodils \nHydrangeas \nWisteria\n\nDie volgende huis moet 'n tuin huis wees. Met tuinmaak mense. Stoepsitters en Teedrinkers. Wit mure en 'n kurwe-sink dak met traliewerk. \n\nAl fresco middagetes uit mis-match eetgerei. Sengende Sondae met koelte in die lanings. 'n eikeboom en lae werfmure. \n\nGestreepte vaddoeke en nuuskierige bure. Tuinmaak praatjies en regte lente vreugde oor bloeisels.\n\nContrarian hipsters praat min oor die diep bevrediging van 'n lekkerruik blom. Of h\xF3\xE9 groen ruik wanneer 'n stingel breek. (\xE1s dit nie deur 'n abstraction of some sort vervang word nie) \n\nTannies met broodknie-bo-arms, mannetjies vrouens en sagte mans is die enigstes wie begryp wat die geboorte van 'n blom knop of nuwe blaar aan jou doen. \n\nDis wat d\xED\xE9 somer gebeur: buite lounge, chardonnay ysies en tuinmaak. Baie, b\xE1ie tuinmaak. \n\n(en dalk 'n vinnige tuinspyker of twee.)\n\n",
    date: "2018-12-02T22:57:51+02:00",
    handle: ""
  },
  {
    id: "5e6616f95ee429768df2bd0b",
    title: "As of ons gaan praat",
    bodyText: "\nKyk gou hierKyk gou hier\nDie nag klop aan die ruit\nDeur besies te stuur om hulself\nTeen die venster te smyt\nEn dan blaas jy op\n\u201CEk word honger hiervan\u201D\nEn dan blaas jy af\nOh, die bibberende liggies\nWord al hoe meer angstig\nDeurmekaar soektog, jy, die digterstof\nVir almal wat so graag iets soek om te lof\n\nMy paslaken is te groot vir my bed\n\u2018N driekwart op \u2018n enkel\nEn as ek rondom 2 uur wakker word\nHet my voet ditself gaan versmoor in die los linkerhoek\n\nSy vra\n\u201CKan ons more hieroor praat?\u201D\nMet haar slaappil arms op my bors bly ek die hele nag lank \nDink aan\nHoe ek voel\nWat ek s\xEA\nWat ek bedoel het daarmee\n",
    date: "2019-10-04T17:33:14+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617005ee429768df2bd20",
    title: "Jys bang",
    bodyText: "Die donker Om weer seer te kryOm te veel te voelOm alles te oordinkOm my mure af te breek sodat jy net net kan oorklimDis my vreseDie re\xEBnDie seeOm te commitOm te s\xEA wat jy voelOm te erken dat jy verkeerd wasEk moes geweet het iemand wat bang is vir die see sal iewers anders golwe maakEks bang ek het my tyd gemors - hel, ek weet ek hetEn ek weet jys bang dat ek nie omgee nieJy kan maar bang bly ",
    date: "2019-10-18T18:50:31+02:00",
    handle: ""
  },
  {
    id: "5e6617055ee429768df2bd30",
    title: "Huis",
    bodyText: "Jis ek mis daai fucked up pan waarin my ma nou pannekoeke bak. ",
    date: "2019-12-10T20:26:40+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6617135ee429768df2bd59",
    title: "Hang the DJ",
    bodyText: `Moet my asseblief nie vergeet nie
Ons in 'n boks in jou kas wegb\xEAre nie
Asseblief
Jou kas is buitendien nie groot genoeg vir my hart nie

"But's the heart not like a box that gets filled up. It expands in size the more you love."


`,
    date: "2019-02-01T19:07:49+02:00",
    handle: ""
  },
  {
    id: "5e6617135ee429768df2bd5a",
    title: '"Ek het net goed bedoel"',
    bodyText: `Wie dink nog hulle sou beter af wees sonder 'n pa wat inmeng, mansplain, afbreek en dit alles net "goed bedoel"?`,
    date: "2019-11-12T14:29:26+02:00",
    handle: ""
  },
  {
    id: "5e66171b5ee429768df2bd72",
    title: "verduideliking",
    bodyText: "Ek skuld vir jou nog woordeMy redes in die lugSo nou skryf ek maar die'n Simpel ou gedigMet basiese rympatroneVier strofes, vier versre\xEBls lankWant my verduidelikingVoel so effens mankDit voel eintlik airySoos 'n baie groot klugWant toe ek dit gedink hetWas jy minder ontstigNou hang dit hier,  so tussen onsEn hopelik maak die meer sinWant my rym en woorde is nou opFin",
    date: "2019-11-17T20:29:22+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617215ee429768df2bd7f",
    title: "My na middernag lewe",
    bodyText: "Weereens die stilte van kloppendesekondes in na middernag ureNet die sagte asemhaling van jou is hoorbaarRustig en diep teken van 'n kommervrye leweJy kry aandag en kosWarm bed om mee te deelEk vra jou niks ek verstaanJy kan nie praat nieNiks vertel van wat jy sienJou stilte sal verewig duurEn dis okayJy bly my beste lojale vriend",
    date: "2019-07-13T01:29:55+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66172b5ee429768df2bd9a",
    title: "Banting",
    bodyText: "In die laste jaar het jy so verander \nJy't 2 goed uit gesny, suiker en my. \nEk't gehardloop, my kop gaan skeer, \nOp gode en bergies gaan skree. \naande dronk, aande alleen, \nDis net heen en weer,  le\xEB bank rekeninge  \nwat genade aan die einde gee. ",
    date: "2018-07-30T12:44:32+02:00",
    handle: ""
  },
  {
    id: "5e66172e5ee429768df2bda2",
    title: "everybody does it",
    bodyText: "almal skryf oor die liefde (of afwesigheid daarvan) en oor verhoudinge en oor ander mense. \n\ntoe ek vanoggend opkyk van die koffie voor my toe is selfs die straathonde besig met mekaar. ",
    date: "2019-01-22T08:12:24+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6617305ee429768df2bdaa",
    title: "Vry_dag",
    bodyText: "Raak 'n bietjie dagdronk (in suburbia)\nJa. \n\nMooi. \n \nEk l\xEA op my rusbank in suburbia\nWag tot jy klaar gewerk het in \nMecca-mania\n\nOns ry nou nou na Belville\nMet 'n mosie van jou manville\n\nDagdrome in suburbia \n\n",
    date: "2020-02-21T17:32:50+02:00",
    handle: ""
  },
  {
    id: "5e6617335ee429768df2bdb5",
    title: "Verduideliking",
    bodyText: "Po\xEBsie, my mensIs dit nie maar \u2018n Genoegsame verduideliking?Po\xEBsie, my mens, po\xEBsie",
    date: "2019-10-06T10:02:52+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617345ee429768df2bdb7",
    title: "Getroud",
    bodyText: "Hierdie... gom\nverband, verbinding...\nhierdie siek ding \ngeneedheid, \n(watter metafoor ook al)\nvan vasplak aan\nen vat \nwil ek nie meer h\xEA nie. ",
    date: "2019-07-19T15:36:13+02:00",
    handle: ""
  },
  {
    id: "5e6617345ee429768df2bdb8",
    title: "FWB",
    bodyText: "Ek hoop hierdie vriendskap het benefits",
    date: "2019-04-25T06:12:14+02:00",
    handle: ""
  },
  {
    id: "5e66173e5ee429768df2bdd8",
    title: ":",
    bodyText: "Daar is meer in hierdie seer as op gee",
    date: "2018-10-14T20:25:18+02:00",
    handle: ""
  },
  {
    id: "5e6617415ee429768df2bde3",
    title: "Vadersdag -1",
    bodyText: "Ek word wakker en verwonder my opnuut aan hierdie dag\nDieselfde vrolike geluide van buite\nNog n vrolike dag\nDan tref n nuwe gedagte my\nDit is Vadersdag vir my en jou\nEk lees die boodskap op my foon\nJy's weg, jou ewige Vader het jou kom haal\nEn ek skuif my pyn opsy en dink aan jou\nEn my hart is bly en seer en deurmekaar \nHierde is n dag van wen en verloor\nEn ek dink aan jou vadershart\nLeeg en koud en vol pyn\nAlleen op hierdie dag met sy eie smarte en berou\nEn ek wonder dan nou wat is die ergste nou\nn Vadersdag sonder n  vader of n Vadersdag sonder sy kind\nEn ek omvou jou in my gebede want ek ek nie jou rou\n",
    date: "2019-06-16T08:41:18+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617435ee429768df2bde7",
    title: "Nog n lag",
    bodyText: "Ek wou nog n einde maak maar tot niet. My wekkertjie wakker my verniet. Dis Sondag net my brein hoef op te daag. \nEk wou nog vra my guardian angel het ons al ontmoet. Toe onthou ek ja n vorige trip. Nou soek ek sin op google. Jou galge humor red my. Ek eindig op met CJ Langenhoven. Jy inspireer my op niet. Jou naam is Cornelis en ek moet bieg. Praat jy van die anderkant of nie. Nou lees jy hier en wonder wat. n Leeftyd van my gedagtes en tog verstaan jy niks. Tog is dit die diepste diep.",
    date: "2019-05-26T08:47:48+02:00",
    handle: ""
  },
  {
    id: "5e6617475ee429768df2bdf3",
    title: " ",
    bodyText: "A \nVERY\nENGLISH\nSCANDAL ",
    date: "2019-07-30T22:26:56+02:00",
    handle: ""
  },
  {
    id: "5e66169a5ee429768df2bc01",
    title: "Hey girl",
    bodyText: "jy is heeltemal blou getik\nmet jou whatsapp\nwatch out it's a trap\nwant niemand reply nie\npasop dat jou selfrespek nie wegwaai nie\nwanneer jy in millisekondes \nwag\nvir 'n boodskap om jou\ndag \nte voltooi: \nhy s\xEA vir jou jy's great\nterwyl hy een van jou vriendinne date\nsit neer daai foun en tel op 'n boek\nwoorde is anyway meer werd as looks. ",
    date: "2019-06-10T15:37:43+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66169c5ee429768df2bc08",
    title: "aanhou beweeg en geraasmaak",
    bodyText: `Luidrugtig gevloek, bareback genaai
en uitgeroep: God! 
tot binne-in geskree: Jesus Christus! 
hier k\xF3m ek!

"Fok Hom en sy patriargale genade:
julle kerklike ordes is 'n bloedderige
teedrinkery en oordeelstokery."

Rebellie en stry. Uitdaag en baklei: Contrary het Kritiek verlei en
\xE1l die vrugte van \xE1l die bome afgeruk;
helfte gevreet, ander besny. 
Sap laat spat en s\xEDf gesweet:
eerlik gewees en in nuwe idees gebly. 

Maar dis niks. Nou is dit n\xEDks:
na alles ges\xEA en gedoen is,
alles gevat en gevoel is,
eksplisiet met embarrassed vervang
is;
en die hoop uiteindelik bang is... 

... is al wie oorbly die gesiggefokte
God wat in die hoek hurk en met sy
growwe vingers iets in die sand
uitkrap.

`,
    date: "2018-11-14T23:22:10+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e66169d5ee429768df2bc0b",
    title: "schism ",
    bodyText: "dis onmoontlik om vriende te wees as jy my wil naai. ek wil iemand net naai as hy my nie wil naai nie. \n\nfok tog. complicated. ",
    date: "2019-02-04T00:09:50+02:00",
    handle: ""
  },
  {
    id: "5e6616a05ee429768df2bc16",
    title: "Genesis 2.0",
    bodyText: "'n alternatief vir Evadit was aand en dit was oggend en die Patriargie is geskape om haar te weerhou van kennis en te vul met saad en vrees en onderdanigheidmaar Medusa was slimmeras al die ander skepsels ontnugtering bied sy aan haar Eva eet Adam se appels\xA0Eva is naak\xA0sy't kennis gesmaak\xA0God is kwaad\xA0Adam is verdwaas:Eva hou nie\xA0van appels nieEva hou van perskes die genesis van die Patriargiedie proe van die adamsappel:die val van die vroufeminisme is gelukkig 'n feniks",
    date: "2019-10-06T11:21:53+02:00",
    handle: ""
  },
  {
    id: "5e6616a35ee429768df2bc21",
    title: "Drol",
    bodyText: "Jys 'n drol. ",
    date: "2019-02-01T19:04:16+02:00",
    handle: ""
  },
  {
    id: "5e6616a75ee429768df2bc2f",
    title: "Russia from my backyard",
    bodyText: "Elkeen van julle weirdos. Die een met die spikey grys hare. Die een met die (choc-) chip op die skouer. Die een met die Springbok tat. Die een wat in elke foto goed lyk. Die een wie altyd karre praat. Die een met een-en-n-halwe maag. Die een wat kan bak. Die een met min hare en die een wie ma staan vir meeste van ons.\n\nJulle is my moederland. ",
    date: "2018-12-25T19:20:44+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616ab5ee429768df2bc3b",
    title: "Stil-baai",
    bodyText: "'n Suiwer taal, skoon en versigtigGeen swaard meer gevaarlikEk skuld jou niks.In hierdie spiere word die vure geblusSlegs kole bly oor, tussen die grys as.Wat as ek sou, wie sou ek wees?Waar sou ek gaan?Sou jy my kon vind?Verdwaal en verlore.'n Seun word 'n man.Mangemaak langs die kus van stilte,alleen op die strand, tog veilig en versigtig.Die geraas van die stad, nou slegs in sy gedagtesNet hier is hy veilig, hier is hy vry.Die nag het gekom, maar die lig verlaat hom nooit.Hy klim daardie heuwel, klouter en kruip.Deur dorings en bosse, lyf aan die brand.Skeure en nerf af, bloeiend bekyk hy bo.Moeg en uitgeput, hou net oop jou o\xEB.Want as jy nou tou opgooi, kom die Here jou haal.So rus 'n bietjie, vat 'n breek.Raak nugter, raak stil, en kyk op na my.Die skadu's beweeg, die katte kom weer.Verloor maar jouself, hier kyk niemand en kan niemand jou keer. Spring in die see, pasop vir die rotse.Jy ruk en jy rol, jy swem en baljaar.Jy doop jouself en soutwater was jou skoon.Totdat die son opkom, dan sit jy soet.Nou is jy kalm, want Hy praat direk met jou.Dis 'n tweesydige gesprek, waarna niemand kan luister.Geskryf 10 Desember 2019",
    date: "2020-01-27T15:36:59+02:00",
    handle: "wpvanschalkwykslp"
  },
  {
    id: "5e6616ae5ee429768df2bc43",
    title: "Wishes",
    bodyText: "Will you remember me with wishes for what could have been?",
    date: "2019-01-31T18:48:19+02:00",
    handle: ""
  },
  {
    id: "5e6616b15ee429768df2bc4e",
    title: "Remember",
    bodyText: "If you are what you remember, then forget",
    date: "2018-08-10T20:48:43+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6616b65ee429768df2bc54",
    title: "Nalatenskap",
    bodyText: `
'n hele 7cm hoog staan hy daar op die swart fluweel sideboard lappie: pqrmantig met die kierie-tandestokkies in sy rug gesteek: 
emeraldgroen en melkwit marmerpatroon.
'n antieke jade tandestokkiehouer. Gr\xF3\xE9n antieke jade. "Reguit uit 'n Royal se huis:" van die b\xE9ste huise vir die b\xE9ste huise. Peperduur is ons vertel. 

Tot iemand se stokkie vassit. En Varkentjie saamtrek mond toe. En hy sy p\xEAns vir ons wys: in embossed letters:
"RESIN BATCH 312" 



`,
    date: "2019-05-25T23:14:02+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6616ba5ee429768df2bc5e",
    title: "Clarity",
    bodyText: "Daar\u2019s \u2018n vorm van clarity in jou deurmekaar gedagtes as jybesluit het -dan maak alles sinClarityFinaliteit",
    date: "2019-11-22T11:24:47+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616c35ee429768df2bc70",
    title: "Ark",
    bodyText: "Ek gee my woorde vlerke\nEn maak oop die deur van my mond se\nKou\nEn dan vlieg die woorde wat my tong dalk reeds\nBerou\nEindelik bevry ek my siel en word van stom onvervulling\nGestroop\nAs die woorde maar is soos Noag se duif met oorlewing\nGenoop\nKeer terug na my en bring \u2018n \nOlyftak\nSodat ek weet daar is iewers rusplek vir my hart se\nArk",
    date: "2018-10-15T23:06:34+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6616c35ee429768df2bc72",
    title: "Kwaad Raak en Slaap",
    bodyText: "Dank god 2de kanse bestaan nie, \nvergenoeg die toekoms in \nraak foute stories wat jy kan aftel  \nop die wonde op my bors \nMy woede \nMy kors \nMy binneste 'n gemors  \nDit beskerm teen die waarheid, \nen daaroor is ek werklik spyt. \nAgter my Self en my haat weg gaan gekruip, \nDood geruk met geen besluit \nHardloop jou gewete uit. ",
    date: "2018-08-20T22:07:59+02:00",
    handle: ""
  },
  {
    id: "5e6616c75ee429768df2bc7f",
    title: "S.O.S.",
    bodyText: "Kan jy gou net\ndonners ophou\nom so baie\nmy soort mens te wees",
    date: "2019-06-08T20:37:18+02:00",
    handle: ""
  },
  {
    id: "5e6616d35ee429768df2bc9e",
    title: "Alles",
    bodyText: "Ekt hoop vir jou\nEn vir my\nMaar nie vir ons",
    date: "2018-10-01T21:55:45+02:00",
    handle: ""
  },
  {
    id: "5e6616d45ee429768df2bca2",
    title: "Wat nou?",
    bodyText: `"Cause what is simple in the moonlight
By the morning never is
It was simple in the moonlight
Now it's so complicated"

Wil jy my nie net vra vir 'n koffie nie
Ons kan dit als uitfigure
Ek belowe`,
    date: "2019-03-04T10:12:06+02:00",
    handle: ""
  },
  {
    id: "5e6616d45ee429768df2bca4",
    title: "god as \u2018n re\xEFnkarnerende wese",
    bodyText: "Ek het gisteraand alweer t\xE9 veel gedrink.Ek het \u2018n lae verwagting van Potchefstroom - is dit nie juis wanneer \u2018n universele god jou verras nie?god het gere\xEFnkarneer in verskeie vorms al - ek dink die bybel praat van \u2018n mot, of dalk is dit \u2018n psigotiese bedonnerde ou tannie wat haar entjie op haar stoep rook. Ek weet nie. Ek weet nie eintlik veel van hierdie re\xEFnkarnerende god nie(Fok, miskien re\xEFnkarneer hy as \u2018n woedende feminis - di\xE9 feminis is ek. Ek is woedend) (Wel, brandend as die AP Kerk my on-onderdanigheid sien)Gisteraand het god re\xEFnkarneer as iemand wat ek geken het in \u2018n vorige lewe. Die liggaam het anders gelyk, maar die binnegoed was presies dieselfde. Hy het voorgestel dat ek nie my eie lewe moet neem nieen ek het voorgestel dat hy katte \u2018n kans moet gee -dalk een adopt en \u2018n filosofiese naam gee",
    date: "2019-11-06T12:37:04+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6616e05ee429768df2bcc6",
    title: "Oor dit",
    bodyText: "Ek het nooit van Lana del Rey gehou nie\nDalk het ek nooit van jou gehou nie",
    date: "2019-11-20T20:35:47+02:00",
    handle: ""
  },
  {
    id: "5e6616ed5ee429768df2bce8",
    title: "Voorbrand",
    bodyText: "As ek die heater net-net reg\nAgter my rug posisioneer\nGee dit amper vir my dieselfde\nHitte as jy wat my vashou\n\nHoekom is dit so moeilik om oor gelukkige tye po\xEBsie te skryf?\nIs mens t\xE9 besig om te soen en te lag dat daar nie ruimte is vir 'n gedagte\naan 'n rymskema nie?\n\nWant die ding is - \nOns is tans gelukkig.\nAls is fine.\nMaar ek dink reeds aan die afwesigheid van jou arms om my lyf.",
    date: "2018-08-26T21:14:46+02:00",
    handle: ""
  },
  {
    id: "5e6616f35ee429768df2bcf9",
    title: "pateties en desperaat",
    bodyText: "vanaand was ek so gebrokedat ek selfs kerk toe gegaan het ",
    date: "2019-10-06T17:42:52+02:00",
    handle: ""
  },
  {
    id: "5e6616fa5ee429768df2bd0d",
    title: "Trendsetter",
    bodyText: "Het Eva ooit haar hare gekam?\nEk oorweeg om dit nie meer te doen nie.",
    date: "2019-06-22T23:36:01+02:00",
    handle: ""
  },
  {
    id: "5e6616fa5ee429768df2bd0f",
    title: "Verdrink ",
    bodyText: "Hy skop totBo waar hy\nSoek na vlot\nEn net-net ly\n\nDie branders moor\nHom onderwater\nSy moet hoor\nMaar later\n\nHy raak verloor\nVra redding\nHy word versmoor\nSy sal bring\n\nLiefde op sand\nWord hy gedoop\nSkree vir hulp\nTog tong geknoop\n",
    date: "2019-11-01T15:12:16+02:00",
    handle: ""
  },
  {
    id: "5e6617015ee429768df2bd26",
    title: "FKN idiot",
    bodyText: "wtf AB",
    date: "2019-06-10T08:52:24+02:00",
    handle: ""
  },
  {
    id: "5e6617085ee429768df2bd35",
    title: "Oor gisteraand ",
    bodyText: "Babbelas is kak. Ek moes seker geweet het dis wat gaan gebeur maar na my hel week het ek dit nodig gehad. Ek was verkeerd. \nEk't sorgvrye geluk nodig. Onvoorwaardelike, onophoudelike, geluk.\nDit was tydelik onder in 'n OBS bottel\nEk verstaan hoekom mense 'harde' drugs doen\nRealiteit is kak, die wereld is mal. \nSamsara,Nirvana, Valhalla, ek is oppad. ",
    date: "2019-07-07T08:20:04+02:00",
    handle: ""
  },
  {
    id: "5e66170f5ee429768df2bd4d",
    title: "Rooikrans 5kg ",
    bodyText: "Elke keer wat ek 'n vuur brand steek \nIs daar 'n klein needy seuntjie in my\nWat lekkerkry oor ander mense se \nJaloesie op die geleentheid. \n\nOns het min ge-impromptu braai.",
    date: "2019-05-12T00:09:57+02:00",
    handle: ""
  },
  {
    id: "5e6617165ee429768df2bd61",
    title: "21:30",
    bodyText: "Moeg, moet my nie verloor nie.",
    date: "2019-04-11T21:32:35+02:00",
    handle: ""
  },
  {
    id: "5e6617205ee429768df2bd7d",
    title: "Lag",
    bodyText: "Die donker man wat van sy fiets af valLangs blouberg se kus",
    date: "2019-08-04T21:33:37+02:00",
    handle: ""
  },
  {
    id: "5e6617225ee429768df2bd81",
    title: "Genoeg saam",
    bodyText: "En albei laat ons met die ideeDat as onsGenoeg saamTyd spandeerSal ons daardie raaiselUit kan span soos seileUit kan skryf in uitdraaikrytOp papirusDie liefde en die po\xEBsieAlbei so verwarrendAlbei so lekker om te probeerUitklaar",
    date: "2019-10-08T19:44:01+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617275ee429768df2bd8e",
    title: "sondagaandsiekte",
    bodyText: "Die is net 'n episode \nDie is net 'n episode\nDie is net 'n episode \nDie is net 'n episode\n\nDie's n\xE9t 'n episode\nDie's n\xE9t 'n episode\nDie's n\xE9t 'n episode\nDie's n\xE9t 'n episode\nDie's n\xE9t 'n episode\n\nM\xF4re oggend is alles weer fine. \n\n",
    date: "2019-11-03T23:52:48+02:00",
    handle: ""
  },
  {
    id: "5e6617285ee429768df2bd90",
    title: "ek het die gedig vergeet",
    bodyText: "e\n      \n    ee\n                       ei\nk\n           fk\no\n",
    date: "2019-07-16T14:00:50+02:00",
    handle: ""
  },
  {
    id: "5e66172e5ee429768df2bda1",
    title: "Space Race",
    bodyText: "ons is nou amper klaar met\nmekaar: di\xE9 kak plek en ek en ek en sy kak mense. \n\nPie-eouuuuu\n\n",
    date: "2018-12-10T22:16:08+02:00",
    handle: ""
  },
  {
    id: "5e6617305ee429768df2bda9",
    title: "Kom jy?",
    bodyText: "Daars altyd plek by Dora\u2019s",
    date: "2019-06-01T11:48:13+02:00",
    handle: ""
  },
  {
    id: "5e66173c5ee429768df2bdd4",
    title: "Waarom wag tot 40?",
    bodyText: "trou met 'n vrouword 'n beraderwant fok genadeen neem foto's ",
    date: "2019-12-22T10:37:39+02:00",
    handle: ""
  },
  {
    id: "5e6617445ee429768df2bdeb",
    title: " ",
    bodyText: "Sy\u2019s great maar sy follow 9gag op facebook",
    date: "2019-06-30T19:15:27+02:00",
    handle: ""
  },
  {
    id: "5e6617475ee429768df2bdf2",
    title: "Speelgoed",
    bodyText: "jy het my knoppies lekker gedruktot jou xbox se joystickinteressanter begin raak het, want speelgoed behoort nieso emosioneel te raak niedie console maak anyway meer geraas as ek.",
    date: "2019-10-03T18:44:34+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617475ee429768df2bdf4",
    title: "oorlogblyfsels",
    bodyText: "die kind brandin haar moeder se armsbraak onskuldbloei genadedie soldaat\nslinger sy siel\nvir volk en vaderland\nverwoes en verniel\n\ndie president en generaal\nbalhare wat baljaar\nbeskut van beskuiting\nbesoedel en besmet\n\n die w\xEAreld met ongemerkte, premature grafte\n\n\n\n\n",
    date: "2020-01-09T17:55:41+02:00",
    handle: "asensuur"
  },
  {
    id: "5e6617495ee429768df2bdf8",
    title: "Daai mense",
    bodyText: "Je\xB7sus n. Jesus \nfor Jesus' sake om Jesus wil \n\u2666 Je\xB7sus tw. (taboesl.) jissis, jirre\n~ Christ Jesus Christus\n~ freak (infml., neerh.) Jesusbehepte\n~ people \nthe ~ ~ (infml.: Chr. fundamentaliste) die Jesusmense\n~ sandals n. (mv.) (infml.) riempiesandale",
    date: "2018-12-14T14:12:28+02:00",
    handle: ""
  },
  {
    id: "5e6617495ee429768df2bdfa",
    title: "bloumerkies ii, ft. commitment issues ",
    bodyText: "I am in love with you. \n\n                     I am, too. \n\nLove you\n\n              Love you too\n\n#geengevoelens \n\n                             Wat? \n\nGeen gevoelens tussen \nons - \nek maak net seker. \n\n   Jy worry te veel. \u2764\uFE0F\n\n[blue\nticked] ",
    date: "2019-05-07T08:33:16+02:00",
    handle: ""
  },
  {
    id: "5e6617525ee429768df2be17",
    title: "u|ct",
    bodyText: "Ek droom deesdae meer oor die reguit hare en dun bo-arms.\n\nEn nou en dan oor die foto's wat ek\nnie mag gesien het nie. \n\nDie drome eindig altyd met iemand se kop baie na aan my borskas. \n\nMaar dis vir anderdagm\xF4re; manjana.",
    date: "2019-07-07T03:32:00+02:00",
    handle: ""
  },
  {
    id: "5e6617535ee429768df2be19",
    title: "*",
    bodyText: "\u{1F595}\u{1F3FB}\u{1F595}\u{1F3FC}\u{1F595}\u{1F3FD}\u{1F595}\u{1F3FE}\u{1F595}\u{1F3FF}",
    date: "2018-08-04T19:12:13+02:00",
    handle: ""
  },
  {
    id: "5e6617515ee429768df2be13",
    title: " Louis XIV",
    bodyText: "As jy ooit by De Stomme Jonge vir 'n date was, \nIs jy 'n koning/in",
    date: "2020-01-31T19:09:24+02:00",
    handle: ""
  },
  {
    id: "5e6617565ee429768df2be20",
    title: "It get\u2019s more complicated ",
    bodyText: "Anoniem verklaar ek dit\nEk mis jou.\nEn deel die lugleegte\nmet \u2018n vreemdeling \nwat my sentiment verstaan,\n",
    date: "2018-12-12T15:43:31+02:00",
    handle: ""
  },
  {
    id: "5e6617625ee429768df2be3c",
    title: "ek mis myself",
    bodyText: "ek verlangna wie ek wasvoor haar",
    date: "2020-01-09T21:34:20+02:00",
    handle: ""
  },
  {
    id: "5e6617655ee429768df2be44",
    title: "Is this your sign?",
    bodyText: 'Almal wag vir die sogenaamde teken, en hoop dat die "hy/sy, ek/jy" vir ons bedoel is...',
    date: "2019-09-20T08:46:09+02:00",
    handle: ""
  },
  {
    id: "5e6617645ee429768df2be3f",
    title: "Job het Stockholm-sindroom",
    bodyText: "soos afgelei uit Job in Die Boekwat is die mens?nee, wat is God?'n dobbelaar'n narsissisantisosiaalGod sit dronk, 'n beker mag in Sy handSatan join Hom en daag Hom uittipies toksiese maskuliniteitMagsgesuipde gee in en dobbelmet Sy getroue dienaar se leweom 'n punt te bewysGod neem van JobGod gee aan Satanen Job?'n gyselaar van sy Herebly aanbid sy onderdrukkerhei, maar dank God! want darem het Job nou n\xF3g mooier dogters as die vorige vergete slagoffers en vermoordes moet asseblief nooit 'n Job wees niewant jy word nie gehaat of vervolg nie",
    date: "2019-12-13T12:36:00+02:00",
    handle: ""
  },
  {
    id: "5e6617645ee429768df2be41",
    title: "Alles",
    bodyText: "Miskien sal dit makliker wees vir my\nAs ek dit net erken\nHoe ek jou mis\nIn alles\n",
    date: "2018-09-10T21:54:48+02:00",
    handle: "Purple_pixie13"
  },
  {
    id: "5e66174a5ee429768df2bdfe",
    title: "\u{1F525}",
    bodyText: "ek wil 'n brief skryf",
    date: "2019-02-06T07:36:51+02:00",
    handle: ""
  },
  {
    id: "5e66174b5ee429768df2bdff",
    title: "Suburbia",
    bodyText: "diversiteitis die tamagotchi van 2019.dit beland in die verkeerdehande en vrek nog voor ditvolgroeid is. dit word na 'n week nie meergetrou skool toe geneem nieen die bediende pak dit wegna sy uit haar aparte pep-store rose collection moet eet. ",
    date: "2019-07-14T19:15:50+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617545ee429768df2be1b",
    title: "Totalit\xEAr",
    bodyText: "Kom ons hardloop kaal vanaand, \nOns liefde deel vir hoogverraad. \nLaat ons geestelik vir god oorrompel, \nOns vry maak van die dom verdomde. \n\nWaar regverdiging van onreg daad, \nVan eie boesem, spruit ontaard. \nVan jou ontkenning, skadelose rol, \nHuigelaar! Verstuk jou drol!\n\nBring despotisme, brand daai kerk,\nVat weg die regte, maak dit werk. \nDat niemand ooit weer iets kan glo,\nSonder dat hul dit kan sien of hoor. \n\nWant jou skadelose selgroep bid, \nTerwyl klein meisies aan 'n piel verstuk. \nSoos sjampanje bottles klap holle in die nag,\nWaar priesters god se seuns verkrag. \nWant ons almal glo mos soos ons wil, \nKom ons vat jou weg, sny af jou tril. \n",
    date: "2019-01-06T11:45:54+02:00",
    handle: "blignaultwienand"
  },
  {
    id: "5e6617685ee429768df2be4f",
    title: "E.S.P. ",
    bodyText: "Dis skemerdonker en die gevoelte van om iets van waarde te maak kom gewoonlik net wanneer daar sterk dinge gebeur en Thabo wat buite Checkers vir my vra of ek vir hom sal bid, vir hom mielemeel, baked beans en hoender sal koop en ek wat myself halfpad vererg maar toe onthou van die ommekeer en skuldig voel maar wil real wees met die bra want sy sussie is in graad agt en daar's nie kos nie en sy ouers is beide dood en ek voel kwaad wat onmiddelik glo ek hy jok want niemand wat rerig honger het dra quilted stitch Daniel Hechter en Nikes nie en Here hoe weet 'n mens en toe prop ek hom my hoender en koue butternut in die hand want Checkers se bay marines is af danksy Eskom en daar's ook nie krag by m\xFD huis nie. Thabo jok jy met sulke oortuigende trane? Binnekant is daar reuse banders van white guilt en koue glimlag maar ongelukkig kan niemand anders die skuld daarvoor kry nie. Skakel my weer aan, asseblief? ",
    date: "2020-02-04T20:41:23+02:00",
    handle: ""
  },
  {
    id: "5e66176a5ee429768df2be54",
    title: "Guntown",
    bodyText: "ek dink Guntown\nis ook \u2018n plek\nwaar ander mense\nna toe terug wil trek\nons het vir onsself\n\u2018n jeug ontwerp\nuit die bloue lug\nen verveeltheid",
    date: "2019-06-20T13:44:15+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6617585ee429768df2be29",
    title: ".",
    bodyText: "Het jy jou tyd geniet?",
    date: "2019-09-29T20:49:15+02:00",
    handle: ""
  },
  {
    id: "5e66176a5ee429768df2be55",
    title: "moor, roof + steel",
    bodyText: "Jy is nog heeltyd deel van \ndie statestiek. \nDit het net nog nie\ngebeur nie. ",
    date: "2018-08-02T18:35:15+02:00",
    handle: ""
  },
  {
    id: "5e6617605ee429768df2be36",
    title: "Vleeslik",
    bodyText: "Hoeveel dominiees (of heiliges in Tibet) is eintlik onderdrukte closet gays? ",
    date: "2020-03-06T08:31:05+02:00",
    handle: ""
  },
  {
    id: "5e66174d5ee429768df2be08",
    title: "*(koop) krag vir jou*",
    bodyText: "zzapp!\n\n(gepunte vinger \xE0 la The creation of Adam) ",
    date: "2019-03-18T22:46:52+02:00",
    handle: ""
  },
  {
    id: "5e6617515ee429768df2be12",
    title: "kat | man ",
    bodyText: "Fuck man. Fuck, fuck, fuck!\n\nHoekom is hierdie nie wat die prentjie belowe het nie. \n\n",
    date: "2019-10-31T21:21:48+02:00",
    handle: ""
  },
  {
    id: "5e6617535ee429768df2be18",
    title: "Verfoeilike fok man. ",
    bodyText: "Ek wil nie.Meer nie. Nie hier wees nie. Nie h\xED\xE9r nie. Nie saam met j\xF3\xFA nie. Nie saam met enigiemand nie. Ek wil soos 'n stoute frons-brat-kindHuil en my vuiste teen die plank vloer vasMoer tot daar bloed loop en skree en snot en huil en snork. En dan van alles vergeet; op 'n dwelm bootreis gaan en soos 'n fliek-einde net verdwyn anderkant die horison en sagte musiek en babablou-pienk-pers scenography en Hans Zimmer musiek met 'n klein rokie wat by die stoomboot se skoorstene reguit opstyg. Die einde en wit credits: Familie: OnbekendMentor: Kak; want hy't nooit leer deal nie. Producer: DNJ ",
    date: "2020-01-22T22:24:58+02:00",
    handle: ""
  },
  {
    id: "5e6617585ee429768df2be28",
    title: "smaak van die selfsugvrug",
    bodyText: "\nOranje sirene van kleur,\nWord in golwe geverf teen die kaal skedel\nVan n le\xEB lughawe aan die einde van junie\nEn die vroes roes vrot\nTussen die binne\nEn\nBuite venster van die vliegtuig.\nHoe die fok maak jy dit skoon dink ek?\nJy doen nie,\nTodat dit stadig op wasem\nSoos n lugbalon op blaas, dit vat tyd\nEn tyd is die mees fokken belangrikste ding,\nWat aan houdend soos mis\nOp n verlate higway, met jou hazards aan,\nVerdwyn.",
    date: "2019-06-24T00:26:36+02:00",
    handle: ""
  },
  {
    id: "5e6617675ee429768df2be4b",
    title: "Consumables: 2018",
    bodyText: "Koop (of gee) my asseblief 'n \nNuwe perspektief;\nmyne is amper klaar. ",
    date: "2019-06-08T01:43:20+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e66176c5ee429768df2be5b",
    title: "Seks-sabotasie ",
    bodyText: "Hul s\xEA die lyn is fyn \nTussen\nSeks-positief\nEn\nSelf-sabotasie \n\nKom ons noem die tussenin dan\nSeks-sabotasie\n\nWant wat goed en reg en mooi is \nAan seks\nWord gesaboteer deur\nKits plesier\n\n(soos laas week \u2014 ek wat kaal-alleen-vinnig-aantrek-asof-iets-vuil-wegsteel terwyl vreemdeling stort-weg-asof-iets-vuil-afwas en hy dan terug-oorweldig-oop-diep-deel-drome-vrese terwyl ek goed-versamel-groet-dankie-totnooitsiens)\n",
    date: "2019-03-07T22:43:27+02:00",
    handle: ""
  },
  {
    id: "5e66174a5ee429768df2bdfd",
    title: "Die Woord ",
    bodyText: '"is jy ook so alleen as jy s\xEA... \nek?" ',
    date: "2018-10-14T23:09:58+02:00",
    handle: "'n beter digter as ek"
  },
  {
    id: "5e6617495ee429768df2bdfb",
    title: "'n Mohammed Psalm",
    bodyText: "Treur nie, traak jou nie my kind. \nLaat ek jou teen my boesem vas druk. \nJou wat ek onder in buik, onder my hart gedra het. \nLaat ek jou styf vashou terwyl ek jou klitoris met 'n stomp mes in die agterplaas uitslag.\nEn onthou, treur nie, traak jou nie, die pyn is tydelik, my kind. \nDit waarvan ek jou ontneem is vir altyd. \nDie skaamte, die skuldgevoel, selfs die genot sal jou nooit kom hinder nie. \nTraak jou nie, treur nie.\nEk ontneem jou van vrou wees maar my gewete rus sag.\nGeen genot sal ooit kom terwyl jou man jou skrams na jou negende verjaarsdag op julle huweliksaand verkrag. \nTraak jou nie, treur nie my kind. \nDis hoe die profeet dit wou h\xEA. \nNiks is jy nou en niks sal van jou word. \nTraak jou nie, treur nie dis alles vir god.",
    date: "2019-10-08T18:58:54+02:00",
    handle: "blignaultwienand "
  },
  {
    id: "5e66174b5ee429768df2be00",
    title: "Ek wag ",
    bodyText: "Ek wag vir my uber by die sekuriteitsafdak\nPrivilege hier teen die rante van Waterkloofrif\nMy Uber het sopas by ons straat verby gery\nDie grootste ongerief van my dag\nDat ek nou in die koue moet staan en wag\nBuiten die feit dat my tee weer koud geraak het",
    date: "2019-07-06T20:47:35+02:00",
    handle: ""
  },
  {
    id: "5e6617515ee429768df2be14",
    title: "Onner",
    bodyText: "Het jy gegaan, wegoor alles heen, van wolke tot ek,Ekt gehoop, Ekt begin gelo in jou,Iets soos jy,Iets soos jy om my verlede te vermy,Gee, gee geeDaars nog woordeDaars nog singDaars nog liefde wat ek wou bring.",
    date: "2019-10-17T20:06:30+02:00",
    handle: ""
  },
  {
    id: "5e6617565ee429768df2be21",
    title: "kristalle, krale en kak",
    bodyText: "consumerism channeldie holte in my homosapiennesspsychics en psychedelicsincense en alkoholkristalle met magiese miteskrale met Boeddhistiese bedoelingsalles kak en afleidingsscapegoats vir die abnormaliteitvan my onvermydelike seksualiteit\n",
    date: "2019-12-07T12:57:23+02:00",
    handle: ""
  },
  {
    id: "5e66175d5ee429768df2be2f",
    title: "S\xEA my",
    bodyText: "Jy trek my siel uit\nNou staan ek kaal voor jou\nS\xEA my,\nHou jy nog van wat jy sien?",
    date: "2018-08-22T07:45:32+02:00",
    handle: ""
  },
  {
    id: "5e66176a5ee429768df2be53",
    title: "wtf.",
    bodyText: "ek onthou hoe die sigarette opgehoop het onder houttafels en hoe jy saggies ges\xEA het dat jy dit wil probeer. die rook van ons twee se stompies het gedans op die klankgolwe van note en draai soos \xF1 romp in kringe op die krans van die oggend son se rand. die wind se asem steel die rook uit jou mond en waai dit weg saam die as en lus, maar so sit ons gedeurig die pot mis.",
    date: "2018-12-13T08:51:12+02:00",
    handle: "paulakruger.pk"
  },
  {
    id: "5e66176a5ee429768df2be56",
    title: "those days are gone",
    bodyText: "I used to think\nI have some talent\n(I've been told so, too), \nbut it's much easier \nbeing a poet with a muse and \nmuch more so\nif that muse is you. \n\n(daai poetry vir jou meisie was surprise surprise eintlik vir jou want who are we kidding mens koppel maar soms feelings deur soma en shit maar whatever die poetry was at least worth it)\n\nEk het myself belowe\nek gaan nie rym nie, \nmaar kyk, Ma! \nek is ook 'n poeet. ",
    date: "2019-07-01T21:49:19+02:00",
    handle: ""
  },
  {
    id: "5e66174e5ee429768df2be09",
    title: "Iets",
    bodyText: "Ek het vindag iets gevoel, en dit nie gedeel nie.\n",
    date: "2019-01-09T11:57:00+02:00",
    handle: ""
  },
  {
    id: "5e66174f5ee429768df2be0c",
    title: ".",
    bodyText: " ek wou net liefde maak en sy wou net naai - Jack Parow",
    date: "2019-05-19T18:38:24+02:00",
    handle: ""
  },
  {
    id: "5e66175f5ee429768df2be35",
    title: "Hoekom",
    bodyText: "Daar is nie meer omdraaikans\nDie woorde is gese\nJy't dit gese sonder om eers te dink\nHoe dit my lewe sou beinvloed of verwoes\nNou is dit te laat jy is weg\nJammer sal jy nooit kan se\nMaak nie saak jammer kom te laat\nNou verstaan ek eers my woedeweg\nIets wat ek moet beveg\nNet ek kan my heelmaak\nEn ek gaan\nAnders gaan ek nooit weer kan dans\nKaalvoete in die reen\n\n\n\n",
    date: "2019-07-06T23:41:38+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617615ee429768df2be38",
    title: "elke keer",
    bodyText: "            Seks                  ek\n                  is                  soek\nuitputtend                  eintlik\n                                       net die\n                                       gerief",
    date: "2019-08-27T09:57:09+02:00",
    handle: ""
  },
  {
    id: "5e6617645ee429768df2be40",
    title: "\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F",
    bodyText: "Jy\u2019s nie hier nie, want jy\u2019s gelukkig ",
    date: "2019-10-24T19:29:57+02:00",
    handle: ""
  },
  {
    id: "5e66174f5ee429768df2be0d",
    title: "Pantomime ",
    bodyText: "nou \nkom ons agter\nons is bang \n\nso ons vlug \nopsoek na geverifieerde \nvrede\n\nhierdie vrystelling...\n\nsonlig voel goed\ndoen dit nie\n\n\xF1 vertrekplan het ek nie-\nvuiste sif deur die groen\n\nwas dit dit nie \xF1 domvertoning\nof \xF1 pynverdower nie\n\nwas \xF1 vriend van my wat jy sou gehad het",
    date: "2020-01-18T19:16:03+02:00",
    handle: "sheridanwalter "
  },
  {
    id: "5e66174b5ee429768df2be01",
    title: "WWW",
    bodyText: "as \u201Cma-net\u201D was was was ons vas en weg van die plek",
    date: "2018-10-05T06:31:28+02:00",
    handle: ""
  },
  {
    id: "5e6617505ee429768df2be11",
    title: "maandagaand",
    bodyText: "jan blohm weer vanaanden ek mis jougroen truiwat gemaklik soos 'n tweede vel gesit het en my vinnig kaal\ngelaat het. ",
    date: "2020-02-24T20:06:05+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617555ee429768df2be1c",
    title: "Nommer EeN",
    bodyText: `Vannaand brand die vuur voor my lippe, rooier as van tevore.Vorm 'n wysmanagtige gedaante en hoor sy woorde. Luister my seun die w\xEAreld vang jou onder sy golf
"Oom hier is geen siel om jou raad te volg" 
Hy plaas sy ken op 'n vuis wat jare sien vlug het.
"jou gedroogte husk kort wat dit vermis het" 

Jy het jou siel gevat, jou hart verkrummel.
Dit neer gegooi en daarop gedans.
Jy het jouself in donkerte gelaat, jou skoonheid verkoop en gelos in die heelal se raas

Di\xE9 wysman woorde slaan my nugter:
Daar is sterre wat jou wil sien skitter`,
    date: "2019-10-14T18:35:43+02:00",
    handle: ""
  },
  {
    id: "5e66175e5ee429768df2be33",
    title: "Aan die kollega wat kliphard haar troue beplan",
    bodyText: '"Kan almal net ophou om so troujags te wees."',
    date: "2018-08-22T09:31:08+02:00",
    handle: ""
  },
  {
    id: "5e6617645ee429768df2be42",
    title: "Val terug",
    bodyText: "Anders as die mal gevoel wat jy ervaar, hoe voel dit nou met haar binne jou? Is dit betyds?Is dit te laat? Of laat               jyhaar                 net verder                 val                ? ",
    date: "2019-08-03T22:05:13+02:00",
    handle: ""
  },
  {
    id: "5e6617665ee429768df2be46",
    title: "nou-nou",
    bodyText: "Op my beste, en ek verloor",
    date: "2018-08-18T21:07:55+02:00",
    handle: ""
  },
  {
    id: "5e6617665ee429768df2be48",
    title: "Vir Mel",
    bodyText: "\nHiers na die aande wat ons in die nag gery het\nSnaakse rap geluister het, n sigaret gedeel het\n\nHiers na die aande wat ons te veel wyn weer eens by tannie judy se huis gedrink het, oor rooi ligte ry en\nSkelm saam heidi rook, en net weer kind kon wees.\n\n",
    date: "2018-08-02T21:36:01+02:00",
    handle: "the.stroy"
  },
  {
    id: "5e6617575ee429768df2be24",
    title: "Ek wil",
    bodyText: "Ek dans rond op die tip van 'n mes,\ntoets die grense wat jy stel\nWees versigtig (hart),\nnee roekeloos (brein)\nEk wil val tot by jou,\nek wil daar wees\nSo stamp my om,\nkom ons kyk...",
    date: "2019-04-18T00:43:11+02:00",
    handle: ""
  },
  {
    id: "5e6617685ee429768df2be4d",
    title: "Hin onvoltooide vroe\xEBm\xF4revers",
    bodyText: "In die diepste blou van vannag is \ndie waaier se werk koel op my vel.\nBuite is dit uiteindelik stil. \nElke bergie toegevou deur koue; kil. \n\nSy is n apatiese toeskouer tot my bloedderige maalvleisgedagtes\n       die angs \n       die onsekerheid \n       die vuurtonge \n       en grynslag oor\nBeleggings\nAftreegeld\nSalarisse\nBelastinggeld\nBankstate\nKredietkaarte \nEn n stukkende verhouding\n\nUiteindelik net voor vier\nNet duskant die demoon se uur \nMaak stilte plek vir vo\xEBlgesang\nDie daeraad kondig sy verlossing aan\n\nVodde, grys en onkapabel ruik ek \nDie bekende reuk: oggendson en skaduwee. \nSweet en teleurstelling. \n\nHierdie halfgebak en klaargebrand \nStiltetert en monkeybrain rand\nVir ewig in flux...\n\n...Moet ent kry",
    date: "2019-04-26T02:31:20+02:00",
    handle: "Evertesterhuizen "
  },
  {
    id: "5e6617695ee429768df2be52",
    title: "'n Metafoor ",
    bodyText: "Is dit makliker om 'n boks sneesdoekies te koop, as jou badkamer 'n kleurskema het- asking for a friend",
    date: "2019-11-20T21:15:32+02:00",
    handle: "mabethc"
  },
  {
    id: "5e66176b5ee429768df2be58",
    title: "Tevrede?",
    bodyText: `Wonder of dit meer 'n "ek maak myself nie meer gelukkig nie" is as wat dit 'n "jy maak my nie meer gelukkig nie" is.`,
    date: "2019-05-26T13:33:21+02:00",
    handle: ""
  },
  {
    id: "5e66174a5ee429768df2bdfc",
    title: "Ane",
    bodyText: "Pla my as jy kans kry",
    date: "2019-04-16T16:02:20+02:00",
    handle: ""
  },
  {
    id: "5e6617485ee429768df2bdf7",
    title: "Geaktiveerde kompleks",
    bodyText: "kan iemand hoor wat die voorvaders s\xEA\ndie afgeleide van my \nby x = nou\nis jy\n\nhet 'n koue shower gevat\nom al die bitch en moan af te was \ndit kleef soos olie\n\ndrie hekse het gese ek moet pasop\nvir die alter ego \nwat op my bank slaap\nhy kan rerig lastig wees\n\nsenotaaf sarkofaag\nsal iemand iets op my skryf\n\nGod en sy monnike bly in die township \nop my \nkop\n\ntussen samaritane wat shebeen toe gaan\niemand wou hulle remove \nmaar hulle klou \n\nyskasmagnete\n\n",
    date: "2019-08-30T22:46:45+02:00",
    handle: ""
  },
  {
    id: "5e66174e5ee429768df2be0b",
    title: "Foei tog",
    bodyText: "Ooh, slaap jy hier?Aandete is als opge\xEBet. ",
    date: "2019-10-10T07:32:37+02:00",
    handle: ""
  },
  {
    id: "5e66175c5ee429768df2be2d",
    title: "Ek verlang ",
    bodyText: "vanaand na die oggendlig in julle huis wat grens aan die goddelike\nna die chunky LeCreuset koppies en ragfyn drinkglase\nna die Greg Schultz uitstalling plakkate en die Nexus skildery bokant die toilet.\ndie Kalahari caramel mat in die kamer waar ek altyd geslaap het en die lendelam leerbank voor. Die klassieke meubels en oranje geverfde staankas in die sitkamer.\nEk mis julle blink Oregon pine vloere. Hoe die lig weerkaats het teen die vanity en 'n helder ligstreep tot in die stort kon gooi. Die eetkamertafel (met te min lig!) waar ek ure kon sit en werk. Die moerse goudvis sticker teen die raamlose glas. Die kuns teen die mure. Selfs my eie werk ook tussenin. \n\nEk mis Henry se kosmaak. Daai donnerse lekker kosmaak en kombuis. En jou reforming acceptance. En liefde vir kuns. Ek wens ons was nader, baie nader. En dat Nala nog geleef het... \n\nLiefde. ",
    date: "2019-02-22T00:01:11+02:00",
    handle: ""
  },
  {
    id: "5e6617625ee429768df2be3e",
    title: "Liefde",
    bodyText: "Ek soek iemand wat saam met my Blue Valentine sal kyk\nMovies uitsoek wat mens hartseer maak\nKerkorrel en rooiwyn\nLeonard Cohen en 'n bubble bath\nIemand wat my in die Somer sal vashou, al is dit warm en ons sweet en altwee ruik na Tabard om die muskiete weg te hou\n\nEk hoop jou Spotify wrapped laat jou darem my so bietjie mis",
    date: "2019-12-06T21:14:07+02:00",
    handle: ""
  },
  {
    id: "5e66176b5ee429768df2be57",
    title: "Ma en Pa",
    bodyText: "Ek wonder of julle my nog sal wil ken wanneer ek terugkom en julle sien als aan my het verander?",
    date: "2019-10-14T14:00:57+02:00",
    handle: ""
  },
  {
    id: "5e6617495ee429768df2bdf9",
    title: "Nie meer wakker",
    bodyText: "Snags le ek nie meer wakkerWant jy klim nie meer deur my vensterdroomEk sluit my oe en weetDaar waar jy isMoet ons nog kom",
    date: "2019-07-24T22:31:03+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66174c5ee429768df2be04",
    title: "Terug na die bekende",
    bodyText: "As ek begin twyfel of hierdie die plek van melk en heuning isDie plek waar die moontlikheid van die see en die berge jou kop deurmekaar maakDan flits my gedagtes terug na alles wat natuurlik gevoel hetNa jou - jou hande, jou stem, die blou van jou o\xEB, die vashou van jou arms, die bekendheid van jou lyf, die manier hoe jy my veilig laat voel hetMaar dan besef ek al die bekende emosies is al lankal vervang deur teleurstelling en hartseer En na daardie bekendes wil ek nie terugdraai nie",
    date: "2020-02-09T15:47:49+02:00",
    handle: ""
  },
  {
    id: "5e66174e5ee429768df2be0a",
    title: "seize the throat",
    bodyText: "carpe jugulum - \nsuig die bloed uit my bene;\nverlam my knie\xEB \ntot die son opkom oor die see\nen jou blik \n(en jy)\nsoos sand \ntussen vingers verdwyn ",
    date: "2019-05-11T12:55:33+02:00",
    handle: ""
  },
  {
    id: "5e6617555ee429768df2be1e",
    title: "Big Little Lies",
    bodyText: "Ek weet nie meer of dit my gewone angs is of angs van hierdie reeks nie, maar ek is baie angstig. ",
    date: "2019-06-20T22:52:32+02:00",
    handle: ""
  },
  {
    id: "5e6617565ee429768df2be23",
    title: "Let go of the past",
    bodyText: "Ek ry in die rigting waar die son in die weste onder gaan. Ek ry in die rigting waar niks meer wil groei.Dis 'n plek waar ek nie wil weesDit bring net bad thoughts in my mindVan dat ek 'n klein seuntjie was.Met soveel haat en verwyte. Haat hoekom het ek dit toe gelaat maar ek was net 'n kindEk voel hoe die woede op bou in myDan dink ek dis tyd om te vergeet en vergeweDan kom die vraag hoekom ek.Ekt nie geweet van beterVir my was dit normaal.Mag ek rus vind in die verledeEn om aan te beweeg en te let go van al die haat en seer.",
    date: "2019-10-14T18:45:57+02:00",
    handle: ""
  },
  {
    id: "5e66175c5ee429768df2be2b",
    title: "Soms",
    bodyText: "For it does, Francois said it doesBut I assure it does,Tyd maak n gat van jou en wat jy wil h\xEADie ouder jy lag al klaar, Jys amper daar,Ons wag vir jou,Jy moet jouself net bewaar.",
    date: "2019-10-30T20:59:51+02:00",
    handle: ""
  },
  {
    id: "5e6617615ee429768df2be37",
    title: "Vark",
    bodyText: "My moeder het 'n vark gebaar, \nOp die suidpunt van Afrika. \nSy\u2019t prim en proper, pretensieus,\nMy groot gemaak saam die heilige gees. \n\nEk het wild en wakker, skaamteloos, \nDie tannies by die kerk laat bloos. \nFok Bles, die poes, sy ma se roos. \nOp skool gejag na elke doos. \n\nGerook, gedrink, gevloek, gevaal. \nNimmermeer sou jesus my kom haal. \nSoos ek gryp en in 'n bottel in verdwaal, \nNou met angsaanvalle die donkerte behaal. \n",
    date: "2019-03-17T12:13:48+02:00",
    handle: ""
  },
  {
    id: "5e6617655ee429768df2be45",
    title: "Haat",
    bodyText: "Ek fokken haat die mense wat bo my bly.\nDie flats is so klein.\nWaar heen loop jy die heel tyd, kont?",
    date: "2019-03-29T21:51:54+02:00",
    handle: ""
  },
  {
    id: "5e66176c5ee429768df2be59",
    title: "Ongetiteld",
    bodyText: "Ma, wat gaan gebeur die dag as jy dood is? Wie gaan ons bel en vir wie gaan ek bel en nuus deel? Ek kan dit met pappa doen, maar jy weet hys nie 'n groot prater nie- kyk hoe hang sy skouers en hoe sakkerig hang sy klere die afgelope ruk aan hom. \n\nAg Jirre ma... Ek weet jou God bring vrede. En jy sal op 'n beter plek wees. \nEk weet mens moenie attach nie. Al die arm wittes, hospitaal gevalle, swart vrouens van Orange Grove creche en bybelstudie tannies gaan in hul hordes opdaag. Ek weet dat alles wat ges\xEA moet word, tydens jou asemhaaldae ges\xEA moet word. Ek probeer. Probeer so ver ek kan.\n\nMaar soms, onverwags, in my kar, in 'n vergadering, in die blou nag pak die nostalgie my. En ek begin onthou... \n\nAg Jirr ma. Ek weet. Ek weet. \nDie einde is nooit die einde nie. En ons is net tydelik hier in ons tentwonings (of so iets). \nMaar die einde gaan fokken suck. ",
    date: "2019-03-20T02:14:50+02:00",
    handle: "Verbatim "
  },
  {
    id: "5e66174d5ee429768df2be07",
    title: "Benson & hedges",
    bodyText: "Nou sit ek en jy weer hier\nen kyk wie gaan eerste die riem laat sak, die handdoek in gooi, die laaste teug vat\n\nOns altwee weet jy het my al lankal\njy het my gehad met daardie eerste bekorende rokie wat trek \ndaardie eerste diep asem vol\n\nHoe gaan ek jou ooit laat staan\nhoe gaan ek ooit 'n diep donker duisternis kan verduur sonder jou gloeiende kool\n\nJy is my heenkome as die gesprek te flou raak of die situasie te warm raak\nas ek 'n oomblik alleen nodig het\nof oortollige minute moet vol stop\n\nWakker word alleen\nKoffie alleen\nRy alleen\nJy bly my enigste lafenis na 'n rowwe dag\n'n rowwe nag... \nEn enige tyd tussen in",
    date: "2019-06-04T21:54:53+02:00",
    handle: ""
  },
  {
    id: "5e66175c5ee429768df2be2c",
    title: "god.",
    bodyText: "Jou god is:jou skewe seunjou ondankbare fokken vrou wat heeltyd shopping doen en te min lekker kos kookdaai slapgat boemelaar waarmee daar niks fout is met sy hande nie, nou hoekom werk hy nie?daai donnerse straatbrak wat alweer die swartsak oopgeskeer het (en jy sit dit juis net voor Dinsdag middag se optel uit)daai straathoer wat alweer kos vra vir haar 10 kinders (jy weet sy gaan dit net gebruik vir drugs anyway)Die heilige gees is alomteenwoordig My god is:Vrye wil.Vergete, verlore, gebroke, vuil en honger. Sy is in alles, deur alles en \xEDs alles. My god is nie jou god nie. ",
    date: "2019-10-15T13:33:24+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e66175e5ee429768df2be32",
    title: "Glip ",
    bodyText: "Soms vertel hy homself in fluisterstem,En ander kere praat hy luidrugtig voortEk probeer hom altyd gebruik tot my voordeel, Maar soos 'n boot-stuur in branders, Is hy nogal onvoorspelbaar en skiet hier uit En draai daar verkeerd in en maak lekker droog waar hy gaan. Ek dra 'n storie; 'n geskiedenis van sekere goed. Die negatief van seerkry; die imprint van oorbly. En die foto van seermaak. Die besigheid is ongoing, maar die eerste lot hoofstukke is kant en klaar. Of jy bly en of jy gly... dis klaar verby. ",
    date: "2019-12-14T08:45:09+02:00",
    handle: ""
  },
  {
    id: "5e6617615ee429768df2be39",
    title: "Seance",
    bodyText: "Jy en jou sussie kom kuierSy, die enigste een wat my \u2018n noemnaam gee\nJy, die enigste een wat my sonder letters of klank kan herroep, oproep, \nsummon soos die hof \u2018n verdagte, \nof \u2018n nuuskierige \u2018n demoon\n\nOns bly, soos altyd, in \u2018n huis wat eers nie ons s\u2019n is nie\nEn dan koop ons dit\nDuur met oomblikke en belewenisse\nMet paaiemente van:\nhalf-8 koffies\nlaataand \u201Cek moet praat\u201D\nmiddagslapies\nvolgendejaar-raad\n\nEn jy was nog altyd skottelgoed op jou tone\n\nJy het my probeer oortuig dat die kamer spook\nEk sien nou niks hier nie\nNet \u2018n spook van \u201Chier was jy\u201D\nEn \u201Chier was jy\u201D\nEn \u201Chier was jy\u201D\n\nAl wat hier rondloop\nIs die enigste tipe spook wat my al oorneem het\nHerinnering\n\n\n",
    date: "2019-12-18T18:21:25+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617625ee429768df2be3d",
    title: "soms is vergeet seer",
    bodyText: "ek't myself al s\xF3 geleerom almal en alles te ignoreerelke haatlikheid en versetlikheidbloot weg te veedis vir my maklikom net ek te wees:skewe vrou, mannetjies meisie, noem my wat jy wil! die eintlike woord: lesbi\xEBrmaar ek vergeet, soms(ek't hierdie keer w\xE9\xE9r) dat nie almal die moed het\xA0om hulself te wees, in te gee tot hul natuur\xA0niemaar j\xFD? f\xF3k, jy't s\xF3 naby gekom! jy't my selfs vyf maal gesoen\xA0vier maal my hand hou vas\xA0skaamteloos in die publiek\xA0my t\xF3\xE9 al soveel hoop gegee voor jy my driedubbeld sou verraai\xE9lke liewe fokken keeras jou haan van 'n man vir jou kraai \n",
    date: "2020-01-08T20:42:00+02:00",
    handle: ""
  },
  {
    id: "5e66176c5ee429768df2be5a",
    title: "Hoes\xEA? ",
    bodyText: "S\xEA my asdie leser nieverstaan nie,wat danis die doel van jou gedig? ",
    date: "2019-09-20T11:30:35+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e66174c5ee429768df2be05",
    title: "D for... ",
    bodyText: "Jirre maar Mister Delivery is 'n lekker ding. \n\n",
    date: "2019-06-12T15:38:10+02:00",
    handle: ""
  },
  {
    id: "5e66174f5ee429768df2be0e",
    title: "Femme",
    bodyText: "You ask my guy whether you can sit on his lap\n\nAnd upon his negating answer you drunkenly reply:\n\n\u201CBut I\u2019m a feminist...\nand I always sit on my dad\u2019s lap\u201D\n\nNow, I\u2019m not one to bash fellow-feminist, but Y I K E S \n",
    date: "2019-03-29T15:18:14+02:00",
    handle: ""
  },
  {
    id: "5e6617565ee429768df2be22",
    title: "Poem Title ",
    bodyText: "*also not a poem\n\nSometimes I wake up in the middle of the night in a sweat and wonder if you are still alive. If so, please do not die tomorrow either. I do not think that it is safe to cremate something so high in alcohol and in any case, it would mean that your attempts at giving life meaning was all futile. Dead people cannot reach orgasm. ",
    date: "2019-07-03T17:51:57+02:00",
    handle: ""
  },
  {
    id: "5e6617575ee429768df2be25",
    title: "Ek mis jou nie maar jinne",
    bodyText: "Kan almal net ophou voor my trou",
    date: "2019-12-12T15:17:20+02:00",
    handle: ""
  },
  {
    id: "5e6617585ee429768df2be26",
    title: "11 Junie 2019, Durbanville.  ",
    bodyText: "Hierdie plek.\nHierdie reuke.\nHierdie klanke. \nHierdie mense. \nHierdie gebuurte.\nHierdie straatname. \n\nHierdie... was eens net 'n droom. \nPresies hierdie... is waar ek wil wees. \n\n",
    date: "2019-06-11T19:33:51+02:00",
    handle: ""
  },
  {
    id: "5e66175d5ee429768df2be30",
    title: "klimaatsverandering",
    bodyText: "die naaiers",
    date: "2018-10-21T18:44:05+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6617615ee429768df2be3a",
    title: "Vrydag",
    bodyText: "Skree, dit help nie",
    date: "2018-08-17T19:26:17+02:00",
    handle: ""
  },
  {
    id: "5e6617625ee429768df2be3b",
    title: "jammer",
    bodyText: "jy't daai rok aangehadeen wat my laat dink het\n\njou hart klop weer\nin my kop\nstreel(deel) jou gewete met my\nek belowe om te dans\n\nbliksem my tot jy beter voel\nons kan later probeer verstaan\n\njohn, paul george en ringo\nwat sou hulle oor jou skryf\n\nhierdie mens weet niks\nmaar twyfel nie\n",
    date: "2019-08-30T22:58:29+02:00",
    handle: ""
  },
  {
    id: "5e6617665ee429768df2be47",
    title: "Net vir jou",
    bodyText: "Net vir jou.Dis Kersfees 2019\n'n jaar wat verby gevlieg het.\nJyt terug gekom in my lewe.\n'n lewe wat ek nie meer wou lewe\n\nWant dis net vol seer en haat.\nJyt my geleer om te let go.\nLet go van my past.\nWatter mens is jy.\n\nWat self deur soveel is.\nMaar altyd tyd het vir ander.\nTyd om te luister\nTyd het om my hart begeertes te vertel.\n Iemand wat my aanvaar nes ek is.\n\nWat se goeie mens is jy nie.\nOm goed te doen vir almal om jou heen.\n\n'n vrou met soveel liefde\nWat soveel gee vir ander\nJyt my soveel geleer\nin 'n kort tyd perk\nJy ken my meer as my family en so called friends\nJy oordeel nie, jy gee soveel raad\nDankie is net 'n klein woord maar vir my is dit betekenisvol\n\nDankir vir wie jy is \nJyt soveel krag en mag\nMag jy gebless word met meer vir 2020\nMag jou droome waarheid word.\nWant jy kan en mag",
    date: "2019-12-25T15:06:27+02:00",
    handle: ""
  },
  {
    id: "5e6617685ee429768df2be4c",
    title: "R2019SNLV",
    bodyText: "Ek wil vir jou n gediggie skryfRated R in 2019 wat de helMy lyf is deurweek van jouJou hardheid verstom myJou glinster verblind myJy hou my wakker tot ek komOm die deur oop te maakNa n nuwe dagMet of sonder jouJou woorde laat my lagEn jou poster hou elke beweging van my dopEn spoor my aan vir nogOm nog te skryfMaar my mond is gesnoerMy keel is droogJou stem word stilEn die oomblik is vir ewig verbyEn nou is jy weg...",
    date: "2019-09-10T16:17:08+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66174c5ee429768df2be03",
    title: "My inspirasie",
    bodyText: "Ek weet nie hoe ek weet nie van waar\nHet jy gekom op my skerm praat\nSoos n ster in die donkernag\n'n rigtingwyser 'n noorde ster\nJy vertel jou stories en dit raak aan my\nJou wyse woorde bly by my\nGee rigting van 'n ander universe tot hier\nEk lees jou skrywe en deel dit wereldwyd\nIewers verlig jy dalk nog iemand se pad\nRaak dit iemand anders se hart\nBepaal dit iemand se pad\nBly wie jy is\nMy noorde ster\nPraat op my skerm jou wyse woorde\nMy inspirasie vir elke dag...\n\n\n\n\n",
    date: "2019-07-08T20:58:48+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617545ee429768df2be1a",
    title: "Some day",
    bodyText: "_ (for K seeing as no one ever did) _ \n\nI\u2019m happy with this. \nIt might be broken and \u201Cwrong\u201D \nbut  \nthis time is different \nand  \nI\u2019ll happily carry on",
    date: "2018-12-17T20:30:19+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e66175e5ee429768df2be31",
    title: "Toe ek vas gesit het in ontkenning",
    bodyText: "Jy, Christopher, is dood.Ek weet jy is;tog hou ek jou aan die lewe.Ontkenning werk beter as resussitasieJy sien, jy sterf nie net nie -Jy verskietEk is vol van jou splinters - sy splinters -want jy is hy en hy is jyen ek is sy en sy is eken ek en sy sit saam op die puinhoop en treur.So hoe kan ek nie vir haar jok nie?Haar laat glo dat jy wel asemhaalIn haar is daar 'n hartklop wat hare bevestig.In my is daar 'n rokie,maar die vuur bly 'n mite ",
    date: "2019-10-31T11:24:12+02:00",
    handle: "@milli.burd "
  },
  {
    id: "5e6617675ee429768df2be49",
    title: "Geld waar(he)de",
    bodyText: "Die w\xEAreld is nie net twee kante van een munstuk nie.",
    date: "2018-12-04T14:04:00+02:00",
    handle: ""
  },
  {
    id: "5e6617675ee429768df2be4a",
    title: "Bed",
    bodyText: "Ekke voel niks",
    date: "2019-02-16T19:16:27+02:00",
    handle: ""
  },
  {
    id: "5e6617685ee429768df2be4e",
    title: "Sleep",
    bodyText: "Where are y'all rushing to??",
    date: "2018-12-30T22:48:05+02:00",
    handle: ""
  },
  {
    id: "5e6617695ee429768df2be51",
    title: "The heart's invisible furies. ",
    bodyText: "We hate what we fear in ourselves. ",
    date: "2020-02-19T03:30:14+02:00",
    handle: ""
  },
  {
    id: "5e6617485ee429768df2bdf6",
    title: "25 September ",
    bodyText: "Dinsdagmiddag 17h30 waai die wind en dis koud met d\xF3nkergrys wolke en almal vleg voor robotte met middelklas karre en 'n donkergroen bedelaarbroek op regs het 'n gat in sy lies en ek voel klein bietjie opgewonde en dink aan jou en dan nie en die donkerblou kar voor my stop onverwags en my bande skreeu effentjies en die volgende oomblik waai 'n Woolworths sak oor die voorruit en daar groei klein pers blommetjies tussen die pavement blokke op die middelman; 'n vrou soos my ma trek aan 'n sigaret en ash deur die venster; haar o\xEB is rooi (gehuil?) en in die verbyry sien ek 'n verblykte CANSA sticker op haar agter bumper en klomp blomme op die sitplek. \n\nGaan ons volgende jaar di\xE9 tyd steeds besig wees met dieselfde games? ",
    date: "2018-09-25T17:54:57+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617505ee429768df2be0f",
    title: "Juanita aan't vlieg",
    bodyText: "'n Muslimvrou sit langsaan Juanita\nJuanita lees Amanda Palmer se outobiografie\nUitdagende voorblad\nSterk boodskap\nEerlik, opreg\nDie onbekende vrou kyk\nStip, soms\n\nJuanita: \u201CDo you know this author?\u201D\nDie vrou s\xEA nee, toeganklik, half verwonder\n\u201CHere, have it\u201D\nSy protesteer, bied geld aan\n\u201CNo, it's yours, just read it, pass it on\u201D\n\nDie boek was net half gelees",
    date: "2018-11-15T08:25:32+02:00",
    handle: "francoislct"
  },
  {
    id: "5e6617525ee429768df2be15",
    title: "2019.1",
    bodyText: "Toe jy die eerste keer daai liedjie van Gert Vlok Nel speel toe dink ek ek is te nugter vir hierdie. Eintlik net te vlak. Nou vind ek my diep in \u2018n Vlok Nel liriek, met jou aan die verkeerde kant van my regte kant.",
    date: "2019-01-22T17:25:52+02:00",
    handle: ""
  },
  {
    id: "5e6617525ee429768df2be16",
    title: "Enigma",
    bodyText: "Dink jy dalk aan my?\nIn die nag\nOf as jy huis toe ry.\nDink jy aan my?\nOf is ek soos jou pa? \nOf dalk jou broer?\nSit ek snaaks of drink te veel?\nHoekom dan hou jy my teen n armlengte weg, nie te naby nie te ver. \nJy is n taal wat ek nie kan praat,\nEn dis n luukse ooblik as ek jou sien.",
    date: "2018-08-05T23:02:19+02:00",
    handle: ""
  },
  {
    id: "5e6617585ee429768df2be27",
    title: "Ek probeer",
    bodyText: "Ek sweer ek probeer\nom te bytel aan my\nskrywersblok, maar\nek sukkel\nom aan my woorde\nuit bin\xEAr\ngeboorte te gee.\n\nSondag se asem\nis \u02BCn lewelose sug en\ndie papier kreun \nonder geil betekenis. ",
    date: "2019-06-09T18:59:44+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e66175b5ee429768df2be2a",
    title: "Lagerfeld, est. 1933",
    bodyText: "Nou kan jy die gerubs \xF3\xF3k oor hulle gewig aanspreek, Karl.\n",
    date: "2019-02-19T23:56:09+02:00",
    handle: ""
  },
  {
    id: "5e6617655ee429768df2be43",
    title: "Die Waarheid",
    bodyText: "Alles, en tog niks",
    date: "2019-08-18T21:22:02+02:00",
    handle: ""
  },
  {
    id: "5e6617695ee429768df2be50",
    title: "Winter",
    bodyText: "Jy kon vanoggend nie meer jouself regop trek teen die kopstuk nie. Nevermind jou ontbytpap self eet. Jou arm was ongemaklik onder jou ingevou en ek moes akwardly oor jou buik rek om jou gemaklik te kry. Ons het albei bietjie gelag en later amper begin huil. Ek moes jou voer. Vir die eerste keer jou mond afvee. Nie soos vriende nie. Nie soos 'n kind-ouer nie. Maar soos 'n volwasse man 'n ander s'n sal afvee. Daar het bietjie pap in jou baard agtergebly teen die tyd wat jy begin terugl\xEA het. Gisteraand se meds is al uitgewerk en vanoggend s'n het nog nie begin werk nie. \n\nDie pap het al hard geword in die bakkie toe ons weer wakker word. Die son se skadu's op sy kortste. \n\nEk kon jou swaar asemhaal voel. 'n Arm oor jou bors sou te veel wees, en eindig toe eerder op jou maag. Jou sag gewasde pajamas se reuk is bekend. My kop het teen jou benerige skouer ge-eindig. \n\nDie oomblik was soos in 'n fliek: die feels t\xE9 veel en tyd te min. Die ergste graad van wanhoop, behoort, verlies en bekendheid toegevou in vanoggend. \n\n",
    date: "2019-06-08T23:20:00+02:00",
    handle: ""
  },
  {
    id: "5e6617485ee429768df2bdf5",
    title: "Dinsdag asb",
    bodyText: "Jy isMy blou gedagtesMy blou gevoelensMy blou Maandag ",
    date: "2019-09-16T14:25:01+02:00",
    handle: ""
  },
  {
    id: "5e66174c5ee429768df2be02",
    title: "words|not so empty.",
    bodyText: "that is the beauty of words, you can do anything with them, words for me, are not words for you. they're meanings differs form my point of view to your point of view. ",
    date: "2018-11-30T19:36:57+02:00",
    handle: "paulakruger.pk"
  },
  {
    id: "5e66174d5ee429768df2be06",
    title: "Komaan?! ",
    bodyText: "Gaan jy dan m\xF4re\ndankbaar wees vir vanaand? ",
    date: "2019-06-13T22:57:51+02:00",
    handle: ""
  },
  {
    id: "5e6617505ee429768df2be10",
    title: "Bid Vir My",
    bodyText: "Slaap met die Bybel langs jou bed\nWag vir God om jou te red\nWeet nie hoekom jy nog aan hierdie gebede klou\nDis tog net n\xF3g 'n man wat jy nie kan vertrou",
    date: "2019-01-18T23:08:00+02:00",
    handle: "joneliavt"
  },
  {
    id: "5e6617555ee429768df2be1d",
    title: "Issey en Isuzu ",
    bodyText: "ek en hy is weer st\xF3rmdronk\n\ngalgtoue en boners. \nbraaivleis en grimering.\n\ndalk nie te sleg nie: blonde\nman m\xE9t praktiese hande. \n\n\xE9n 'n kind en 'n behoefte aan settle en tuinmaak.\n\nkyk, God, dalk is dit nie 'n t\xE9 kak predicament after all nie. ",
    date: "2018-12-04T22:19:18+02:00",
    handle: "kanjyglo"
  },
  {
    id: "5e6617555ee429768df2be1f",
    title: "Meer.",
    bodyText: "Jy is altyd meer\nMeer as wat ek verwag\nMeer as wat ek kan droom\nMeer as ek \nMeer as alles\nNet\nMeer as wat ek kon dink\nOf waarvoor ek kon vra\u2026\nWees myne\nWees my meer!",
    date: "2018-12-16T22:49:30+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e66175d5ee429768df2be2e",
    title: "Koffietjie? ",
    bodyText: "Om op 'n koue aand in jou warm arms verstrengel te raak. En die reuk an DKNY op my bo-lip te proe. \nDie hardheid in jou pastel kleure te voel en saggies oor jou parmantige krullerigheid te streel. Die duining van jou buik na te trek met my wysvinger. Die blonde fynhaartjies op jou bo arm en rug te kam. Die holte van jou elmboog te voel met my lippe. Die swaardgeveg. Die diepe wegsak te ervaar. Jou oker en room vel. Die diepe teveredenheid na die kleindood afweer en jou hoof op my borskas rus. En 'n enkele onvervulde vinger weer my sensitiwiteit begin terg. Dit alles. \n\nAlles. Staan gebuk onder die lekkerte van weet jy slaap reikafstand van waar ek nou sit en werk. ",
    date: "2019-07-23T02:44:50+02:00",
    handle: ""
  },
  {
    id: "5e66175e5ee429768df2be34",
    title: "Exit, persued by...",
    bodyText: "/I bid thee farewell/Dinge was goed en welMaar kyk, ek is nou papEn leegSo ek gaan my pen in my nek indrukEn my tikmasjien aan my bene vasmaakIn die Mooirivier inloopEn jou naam in asemAs ek daarna steeds leefSal ek hierdie donnerse boekKlaar skryf",
    date: "2019-08-28T22:16:51+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66177d5ee429768df2be93",
    title: "Dis koud",
    bodyText: "Ek kry bibber en ek kry koud\nEk trek my rooi leeu supporter mussie oor my oor\nEk le en wag vir die donker om my te vang\nEk het niemand om nader te trek\nOm my warm te hou \nEk trek jou nader DNJ\nEk gee my sorge oor aan jou\nEk deel my nuus van verlies en sorge\nNet met jou\nVan my oumens tante se weggaan\nVan my jongmens niggie se laaste ure\nMore is jul altwee gone\nEn ek wonder en wonder\nVan n purpose en wat wou\nVan jy met 5 geslagte\nEn jy wat nie voort kan bou\nVan jou volle lewe van kinders tot agter agter kleinkinders\nVan jou wat nog wou begin\nEn ek wonder van n purpose\nVan my en jou",
    date: "2019-06-10T21:25:46+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66177e5ee429768df2be94",
    title: "Blouberg Blues",
    bodyText: 'Ek praat met die wind en luister hoe die branders terug antwoord\nDis dan wanneer ek bewus raak van my eensaamheid en besef dat ek "ons" mis\nMaar dis nou net Tafelberg wat na my kyk\nEk wens dit was jy',
    date: "2019-04-16T19:31:55+02:00",
    handle: ""
  },
  {
    id: "5e6617725ee429768df2be70",
    title: "Dagboek Inskrywing",
    bodyText: "Ek het jou vasgepen in die lyne van my dagboek, sodat ek vir oulaas met my vingers oor jou kan streel, en kan onthou hoe dit voel.",
    date: "2019-03-05T21:42:01+02:00",
    handle: ""
  },
  {
    id: "5e6617765ee429768df2be7b",
    title: "Totalit\xEAr",
    bodyText: "Kom ons hardloop kaal vanaand, \nOns liefde deel vir hoogverraad. \nLaat ons geestelik vir god oorrompel, \nOns vry maak van die dom verdomde. \n\nWaar regverdiging van onreg daad, \nVan eie boesem, spruit ontaard. \nVan jou ontkenning, skadelose rol, \nHuigelaar! Verstuk jou drol!\n\nBring despotisme, brand daai kerk,\nVat weg die regte, maak dit werk. \nDat niemand ooit weer iets kan glo,\nSonder dat hul dit kan sien of hoor. \n\nWant jou skadelose selgroep bid, \nTerwyl klein meisies aan 'n piel verstuk. \nSoos sjampanje bottles klap holle in die nag,\nWaar priesters god se seuns verkrag. \nWant ons almal glo mos soos ons wil, \nKom ons vat jou weg, sny af jou tril.\n",
    date: "2019-10-08T18:30:57+02:00",
    handle: "blignaultwienand"
  },
  {
    id: "5e6617795ee429768df2be87",
    title: "LC",
    bodyText: "Eendag gaan ek weer deur besige St. Markusplein stap, dalk met wyerand hoed en kamera of sketsboek. En ek gaan aan jou dink. Dalk vir 'n oomblik in jou verlore raak. En weet: dit was die regte besluit. ",
    date: "2019-09-13T07:07:46+02:00",
    handle: ""
  },
  {
    id: "5e66176f5ee429768df2be65",
    title: "G H L ",
    bodyText: `Terwyl ek staan met hande vol skuim en koppies, cake stands, pierings vol krummels (my ma se verjaarsdagtees is altyd 'n hit) sit en vertel jy my van die oulike boer in jou nuwe dorp en hoe julle nou en dan na die parkie toe gaan. 

[Bunting, bunting, sagte lig en slow motion]

Jy vertel van jou nuwe werk en hoe tevrede jy met jou kollegas se konflikhanteringsvermo\xEB is. Die praktiese uitdagings van Ricoffy en eksklusief vroue personeel; uiteindelik iets van die verlede! 

[Beneukte re\xEBnweer en elektriese lig; 'n helder klaskamer] 

My vingers is al ene rimpels en my bene jellierig, maar ek hoor hoe jy gesels van drome wat waar word en dat jy hoop daar kom 'n tyd van voorspoed in elkeen se lewe. 'n Tyd waar #liefdewen. En jy maak die teken met jou vingers. 

[Nog bietjie sagte lig en iets van vrolike kombuise]

"Ek het ook iemand ontmoet," s\xEA ek saggies, meer eintlik vir die skottelgoedwater as vir haar. Haar gesig helder op. "Awww, #liefdewen altyd, Boetie" 'n knipoog, "wat is haar naam?" 

Dit was die laaste keer wat ons ooit oor my potensi\xEBle k\xEArels gepraat het. Of mans. Of liefdeslewe, for that matter. Of eintlik enigiets dieper as die weer. 

[Fok, wat ook al] 

"Dit gaan eintlik r\xE9gtig goed in Calitzdorp. Die weer is goed. Daar's darm weer bietjie water. Die damme lyk voller vanjaar en my kollegas is amazing. Ek dink ek en Pieter sal seker binnekort afhaak. Ek het nog net so paar vriendinne- almal maar kollegas van werk en so, jy weet. En ons almal is by dieselfde kerk, weet jy. Dit help baie as mens se hartsmense almal dieselfde dink oor die spiritual journey, n\xE9(?). Geloof. Hoop. Liefde. Wat is die kerk se naam nou weer? Jy sal dit ook luvvve. Jy moet kom kuier eendag. Dis s\xF3veel anders as die NG Kerk. S\xF3veel meer verlig en spiritual. Iets van 'n ram of die Gees of... wag, man. Nee, dis iets van 'n shofar."



`,
    date: "2019-06-08T16:51:00+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6617775ee429768df2be7f",
    title: "Kerkorrel",
    bodyText: "Die beste kerkorrel is 'n Johannes Kerkorrel.",
    date: "2018-09-12T10:10:13+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e66176d5ee429768df2be5d",
    title: "Bagasie",
    bodyText: "Ek pak vanaand die laaste stukkies van my verlede in 'n boks. Dis waar ek jou nou ook agterlaat. Herinneringe weggeb\xEAre agter in 'n kas.",
    date: "2019-01-31T19:45:27+02:00",
    handle: ""
  },
  {
    id: "5e6617705ee429768df2be67",
    title: "Fam ",
    bodyText: "Red my van die mense\n\u{1F377}\u{1F377}\u{1F377}",
    date: "2018-12-25T15:27:08+02:00",
    handle: ""
  },
  {
    id: "5e6617785ee429768df2be84",
    title: `"Danie is 'n Christen"`,
    bodyText: "... En die skare gaan mal.",
    date: "2019-08-02T09:37:49+02:00",
    handle: ""
  },
  {
    id: "5e66177a5ee429768df2be88",
    title: "w\xEArk",
    bodyText: "Soms sit ek\nSoms nie",
    date: "2019-02-27T09:18:10+02:00",
    handle: ""
  },
  {
    id: "5e66177a5ee429768df2be8a",
    title: "Welkom",
    bodyText: "Its not home yet\nBut its not a stranger either\nJys son op n somber herfsdag\nJys die reuk van veld na besoelde stadslug\nJys die waterval na n uitmergelende hike\nJys New York re\xEBn na drooggesteisterde tuisland\nJy is nuut, anders, verfrissend, vreemd, \nJy\nIs\nWelkom!\n",
    date: "2019-01-14T18:03:15+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e66177a5ee429768df2be8b",
    title: "Even more.",
    bodyText: "Ek het jou nog nooit ophou mis nie. Sal ook nie. ",
    date: "2018-12-12T17:03:22+02:00",
    handle: ""
  },
  {
    id: "5e66177f5ee429768df2be98",
    title: "Oorrompel deur onthou",
    bodyText: "Vier jaar later. \nOp 'n Woensdagoggend, \n'n Duisend kilometer ver, \nDwarrel oorblyfsels van jou \nSagte hippie-reuk om my\nToe ek die ou reissak bo\nUit die kas tel. \n\nHou dit ooit h\xE9\xE9ltemal op? ",
    date: "2019-05-09T00:15:30+02:00",
    handle: "verbatim"
  },
  {
    id: "5e66176d5ee429768df2be5f",
    title: "WTAF",
    bodyText: "Soos joh.\n\nNogal \u02BCn\nruthless blue ticker,\njy. ",
    date: "2019-06-09T22:39:27+02:00",
    handle: ""
  },
  {
    id: "5e66176c5ee429768df2be5c",
    title: "kutte en kluite ",
    bodyText: "Ek's vandag besonders lui gewees:\ntwee meditasie sessies, \ndrie flieks, baie sit \nte lekker kos\nen bankl\xEA\n\nDIT WAS FANTASTIES ",
    date: "2019-03-02T22:08:53+02:00",
    handle: ""
  },
  {
    id: "5e66176e5ee429768df2be61",
    title: "krul",
    bodyText: "geagte' foto teen my muur.\nek hou van jou.\nvandat ek jou gekoop het,\n in Dullstroom, by daai winkel, daai vakansie, \nwas n kak vakansie. maar jy is n mooi foto.\nhoekom krul jy van my muur af? \nbewonder jou elke keer! as ek jou weer moet vasplak. \nisit vir die aandag?\n\nis jy skaam?\n\nhou jy daarvan?\nas ek jou weer teen die muur vas druk,\n teen dieselfde stukkie prestik, wat net nie kan nie.\njy hou aan krul.\n\n\ndus is ons nou hier.\nek se maar vir jou,\n Rus in vrede, \nin my laai, \ntussen al my \nonbelangrike kak. \n\nmooi foto wat net will krul \n",
    date: "2018-09-13T15:38:10+02:00",
    handle: ""
  },
  {
    id: "5e6617725ee429768df2be6f",
    title: "--",
    bodyText: "You had the audacity not to be happy. ",
    date: "2019-05-24T08:18:55+02:00",
    handle: ""
  },
  {
    id: "5e66176e5ee429768df2be62",
    title: "Iewers tussen hoog en moeg",
    bodyText: "Dis tyd vir die jaarlikse eksistensi\xEBle krisis. Hoe klein is ons nie. 'n Klein spikkeltjie wit, op die kanvas swartOp die 5e grootste klip, wat om n brandende vuur wentel. Wat is die kans?Ek is 'n produk van my keuses. Ek wens ek kon vooraf kon sien hoe dit my lewe sou bepaalSou ek dan anders kies?Ja. Hoe sou my lewe gewees het as ek by jou gebly het? Ek wil nie weet nie. Dis een van die beter keuses wat ek gemaak het. Dit weet ek. ",
    date: "2019-08-08T03:37:58+02:00",
    handle: ""
  },
  {
    id: "5e6617785ee429768df2be85",
    title: "Congregation ",
    bodyText: "So many broken hearted,\nwe congregate in words and poems and pictures.\nIs it at least a little hard, \nto ghost away and leave me here,\nin papers, paints and photographs?\nSurrounded yet alone.",
    date: "2019-02-03T22:17:55+02:00",
    handle: ""
  },
  {
    id: "5e6617705ee429768df2be68",
    title: "\u{1F44B}\u{1F3FB}",
    bodyText: "Maybe it summer and I we\u2019re happy.Maybe apathy took hold.Maybe no marketing finally payed off.Maybe there isn\u2019t enough selfie\u2019s with \u201C deep\u201D text on itMaybe not enough comments like \u201C Here jys diep, vinger my met jou po\xEBsie\u201DMaybe the UI is fucktMaybe the lack of feedback on your deepest feelings is too much like real life.Maybe it served its lack of purpose.I guess we\u2019ll just never really know, ",
    date: "2020-02-03T16:37:57+02:00",
    handle: ""
  },
  {
    id: "5e6617725ee429768df2be6e",
    title: "Idiot (still)",
    bodyText: "How stupid. \nI forgot I\u2019m alone in this.\nAgain.",
    date: "2019-06-25T17:59:19+02:00",
    handle: ""
  },
  {
    id: "5e66177b5ee429768df2be8d",
    title: "Gebreek",
    bodyText: "Die branders en my hart maak 'n gelyktydige breek, tot die gety ons terugtrek en nuut uitspoel. ",
    date: "2019-01-04T23:29:41+02:00",
    handle: "joneliavt"
  },
  {
    id: "5e66177c5ee429768df2be91",
    title: "VW < TROK < JY < BOEDDHA ",
    bodyText: "Jy gryp nou na halms, meisiekind. \n\nAsem in. \nUit. \n\nSit met jou kop vooroor en onthou hoe die metaal deur sy sagtevleise geskeur het na die glas begin bars het. Eers my venster; joune en toe syne. Die geel metaal monstertande het hom net die hardste gekou toe ons ingesluk word daai nag. Sy sagte lyf het dubbeld gevou. Met hidroliese olie en diesel deurdrenk. Sy kop het op jou skoot tot rus gekom, Meisiekind. \n\nHy't gegrynslag. Gegrynslag? Gegrynslag. ",
    date: "2019-06-23T01:41:26+02:00",
    handle: ""
  },
  {
    id: "5e66176d5ee429768df2be5e",
    title: "Geen titel net gedig.",
    bodyText: "Ek wens ek kon een of ander manier my gedagtes vanaand op rekord vind.\nHier sit ek weer spookverslint, hierdie gedig is nie vir jou nie, dis vir my. Ek dink al weer te veel aan tyd, maar wat is te veel? En wat is tyd? Tyd aleen drip stadiger as die waterval van geselskap, al is dit koud en snaaks. \nEk weet nie wie ek is nie, ek weet nie wat ek is nie, en pen op papier onthou niks.\nDonderdag, aleen.\n",
    date: "2019-01-17T23:50:42+02:00",
    handle: ""
  },
  {
    id: "5e6617715ee429768df2be6b",
    title: "Onthou ",
    bodyText: "Die kers\nherinner aan jou\ndie -\ndonners alles,\nalles herinner aan jou\n\nas\xF3f ek jou\nsou wou onthou ",
    date: "2019-06-07T22:27:08+02:00",
    handle: ""
  },
  {
    id: "5e6617735ee429768df2be71",
    title: "Stellenpoes",
    bodyText: "Fokken ry net, \nDie boere is te besig met kak maak in de akker, \nSo fokken ry net ",
    date: "2019-01-28T22:11:54+02:00",
    handle: ""
  },
  {
    id: "5e6617735ee429768df2be72",
    title: "Duchamp",
    bodyText: "Describe your subject with \nArt theory and a tie it up with a political ribbon\nWrapped and pretty\nFor critics to gobble up the bullshit, \nBut at the end of the day\nIts just a painting of a fruit bowl. ",
    date: "2019-05-17T20:36:39+02:00",
    handle: "@brave.as.a.bear"
  },
  {
    id: "5e6617735ee429768df2be73",
    title: "wipplank",
    bodyText: "is daar waarde daarin om jou bestaan meer eenvoudig \nof minder interessant te maak \n\nkom daar moeilikheid saam met die soeke na meer, en 'boredom' saam die eenvoud \nkan ek die skaal ontwerp wat die met mekaar opweeg\n\nek wens ek kan die waarde van eenvoud tenvolle verstaan",
    date: "2018-11-09T13:05:46+02:00",
    handle: ""
  },
  {
    id: "5e6617745ee429768df2be75",
    title: "Dankie my Volstruisie",
    bodyText: "Dankie is net 'n 6 letter woord'n woord met soveel kragKrag wat mense soms net gebruikWant dis net beleefd. Ek gebruik dit want ek bedoel dit opreg net vir jou.D - DANKIE baie baieA - Altyd daar vir elke persoon wat op jou lewens pad gekom hetN-niks is ontmoontlik vir jouK-krag wat jy kry van Onse Here I-innerlike liefde wat jy uit stuur na almal om jouE-eerlikheid en opreg wat jy wys elke dag van jou lewe.Dankie dat jy deel is van my lewe. Eks bevoorreg omdat jy so opreg en soveel liefde uitstraal. ",
    date: "2019-11-09T16:42:47+02:00",
    handle: ""
  },
  {
    id: "5e6617755ee429768df2be79",
    title: "Donkerfase",
    bodyText: "afhanklike beswyimingsbestaan\nstaatskaping indoktrinasie\nwens my dood het iets beteken\nsou ek weer kon voel\n\nraspertong herhaaldelik\noor 'n swart kat gestreel\n\nvoel jy al nai\xEBf\ndis die rym wat jou naar maak\nkan ek iets in jou keel afdruk\ndis plagiaat\n\nsou 'n gat in my skedel boor\nnet om die druk te verlig\njammer as ek kwaai klink\nmoet dit engels s\xEA om te verstaan\n\nI bleed because of Demons I conjure up.\n\n\n",
    date: "2019-06-20T11:20:59+02:00",
    handle: ""
  },
  {
    id: "5e6617785ee429768df2be82",
    title: "2008",
    bodyText: "Water in milk exists. It's a thing. ",
    date: "2020-03-05T02:33:47+02:00",
    handle: ""
  },
  {
    id: "5e66177b5ee429768df2be8e",
    title: "Ek dra \u2018n size 7",
    bodyText: "Herfs hoort nie in Desember nieMaar Kersfees jaag altyd nader\nNet na die chaos\n\nDie donkerte was altyd in geskaats\nEn as ek dink aan die kere wat die nag lank was\nWas daar altyd ek op wiele\nRolskaatse of Skateboard\nEn Florence and The Machine in die ore\nHard\nHarder\nTot ek doof word\nVir die buitekant\n\nVoet voor die ander\nMomentum tot ek weer syn kry\nAs beweging \u2018n mens kon red\nWas ek die wederkoms\nSo ek het besluit\nEk wil rolskaatse h\xEA\nVir Kersfees\n\nEk wil die chaos inskaats\nGeen Florence hierdie keer\nDoof is ek nie meer\nKyk uit, donker nag\nEk kom met momentum en almag\n",
    date: "2019-12-05T18:08:25+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e66177c5ee429768df2be8f",
    title: "I\u2019m glad to know ",
    bodyText: "I\u2019m glad to knowA girl so sweet One with a glowWhenever we meetHer eyes a hue Of a beautiful shade of blueHolding her hipsWhile I kiss her lipsAnd when we pull awayHer eyes stare into mine so deeplyHer way to say You will be mine completely And so once more I leaveTo return to Pretoria one eveBut when I come back In your arms I will roam- CHT",
    date: "2019-10-14T01:28:48+02:00",
    handle: ""
  },
  {
    id: "5e66177f5ee429768df2be96",
    title: "google maps ou.",
    bodyText: "taking bathroom selfies exposing some nakedness and post them on some statuses and stories - with way to much likes - and tomorrow they are on google earth motherfuckers.",
    date: "2018-08-28T12:17:02+02:00",
    handle: "paulakruger.pk"
  },
  {
    id: "5e6617805ee429768df2be99",
    title: "S + P ",
    bodyText: `Romerig wit en sag 
Wattebolle- as jy wil- Disneywolke!
Agter... 'n plastiekgordyn? 
Maar strale en skote 

Eindig plons, in my paradys en
ses weke later is daar 'n 
baarmoederbrul... 
Skoppend, hortend.
Nes jy daai tyd. 

"Mamma?" 
"Moeder?"
"Ma?" 




Nee Meisiekind. 
Slet. 
   +
Poes. `,
    date: "2019-07-02T00:01:39+02:00",
    handle: ""
  },
  {
    id: "5e6617765ee429768df2be7e",
    title: "Adorno",
    bodyText: "Kan daar nog po\xEBsie wees?\nMaak dit enigsins saak in\n'n w\xEAreld wat tjop-tjop as in\nons monde word? Ek wil beelde\nskep, maar ek kan nie. Die\nenigste beeld is swart.\nVerbrande velde, dooie diere\nse verbiltongde vlees, olie wat\nfokken see-goggas vergiftig. Dit\nis nie 'n beeld nie. Dis maar net\nwat is. Ek is 'n hi\xEBna. En nee,\nek weet ook nie of ek lag of\nhuil nie. Ek weet net ek skryf\nnie po\xEBsie nie.",
    date: "2019-09-27T21:33:32+02:00",
    handle: ""
  },
  {
    id: "5e6617755ee429768df2be78",
    title: "Huise vol geheime",
    bodyText: "jy het ja ges\xEA! \n(vir 'n threesome) \nen 'n weird lekker airy verhouding. ",
    date: "2019-11-19T00:56:55+02:00",
    handle: ""
  },
  {
    id: "5e66176f5ee429768df2be63",
    title: "Sisyphus",
    bodyText: "Ek ag myself nie meer as persoon nieEk sien:gefragmenteerde beeldein die spie\xEBlen as ek weg kyk,vergeet ek my identiteit\n\nGesigloosheid. \n\nAl wat ek het is \u2018n ribbekas \nen woorde wat daaruit vloei\n\nDit is. \nDit. ",
    date: "2019-12-17T00:07:08+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617705ee429768df2be69",
    title: "Vissie-vingers ",
    bodyText: '"Oom, wat gaan ons vir aandete eet?" ',
    date: "2019-05-20T08:02:01+02:00",
    handle: ""
  },
  {
    id: "5e66177f5ee429768df2be95",
    title: "Cripple",
    bodyText: "Nie jou grootste geweer Of swaarste kanon Of vuilste vloek Breek bene so vinnig soos nostalgie nie. ",
    date: "2019-11-11T11:08:18+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6617755ee429768df2be7a",
    title: "Hardloop",
    bodyText: "Die oggendgloed ontbied my na\n'n baan van sweet en teer \nWaar voeteval met hartklop smelt\nSweep-streel die vlees in submissie\nOm paaie te vleg na\nBestemmings sonder adres",
    date: "2019-09-17T20:13:44+02:00",
    handle: "brotherlouislouislouis"
  },
  {
    id: "5e6617785ee429768df2be83",
    title: "  ",
    bodyText: "Moet begin mediteer...\nweer",
    date: "2019-08-17T22:28:31+02:00",
    handle: ""
  },
  {
    id: "5e66176e5ee429768df2be60",
    title: "Fucking mermaid.",
    bodyText: "When did you get tangled up into my thoughts?\nWhy am I searching for you across a room?\nFuck. \nIts all sin from here. ",
    date: "2019-02-27T16:31:59+02:00",
    handle: ""
  },
  {
    id: "5e6617775ee429768df2be80",
    title: "Wat dit vat",
    bodyText: "Dit vat 'n MarkusOf 'n JohannesMiskien 'n PsalmMaar die keer 'n LukasDit laat my besef my hart is ligterAl is daar gatjies gevul met verlange, gevul met hoekoms en waaroms, gevul met bietjie van die verledeMaar definitief ligterDit laat my besef om sterk te wees is hoe jy teleurstelling hanteer, hoe jy opstaan as iemand die mat onder jou uitgeruk het en hoe jy diep hartseer verwerkHoe jy die pad stap eerder as om te worry of jy met 'n ongekreukelde hemp aan die anderkant gaan uitkom Dit vat geloof om hoop te h\xEAEn genade om te bly vasklou aan jou hoop, al skree alles gee opDit vat 'n bietjie jy, 'n bietjie blessings en 'n groot hoeveelheid God",
    date: "2019-09-26T19:42:13+02:00",
    handle: ""
  },
  {
    id: "5e6617795ee429768df2be86",
    title: "80ste",
    bodyText: "in 'n oomblik van waansinhet ek gedink ek isverlief op die idee van jou en dat breyten nog die heeltyddignamens jouvir my",
    date: "2019-09-16T16:47:37+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e66176f5ee429768df2be64",
    title: "kamma-macho",
    bodyText: 'jy met jou bedwelmende o\xEB\nmaar average build wat\nt\xE9 veel silicone models\nop Instagram follow \n"die kat se snor" \n\nmaar bruv,\ndie chicks met die\nspray tan en\nnommers in hul name... \nsucker, \n#follow4follow \n',
    date: "2019-04-07T08:06:01+02:00",
    handle: ""
  },
  {
    id: "5e6617745ee429768df2be74",
    title: "Tower of Doom",
    bodyText: "Vanaand bly my gedermtes alweer bo-op die rollercoaster kruin agter\n\nvir die soveelste keer. ",
    date: "2019-05-05T21:10:26+02:00",
    handle: "Verbatim "
  },
  {
    id: "5e6617745ee429768df2be77",
    title: "Re\xEBndae en grou",
    bodyText: "Alweer is die winter verby.\nAlleman of enkeling: so ook jy.\nLank l\xEA voor: hooikoors en vere, \nLok my liewer met jou donker kleure. ",
    date: "2018-09-01T01:35:25+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6617775ee429768df2be81",
    title: "Liefde is goedkoper as pille",
    bodyText: "Rx: Lexamil 15mg daily\nRx: Fluanxol 1mg BD\n x 1/12 + 5 repeats\n\nUrbanol 10mg daily/prn x 20\n\nRitalin 10mg daily x 1/12\n",
    date: "2019-01-28T17:46:34+02:00",
    handle: ""
  },
  {
    id: "5e66177a5ee429768df2be89",
    title: "Ballade van n stapel klippe",
    bodyText: "Langs n stofpad gaan staan hy stil langs n hoop klippe \nHy tel een vir een op en begin dit rangskik: groot en klein, skerp en rond, plat en andersins\n\nLangs n gesorteerde hoop klippe besef hy daar is nou net een ding wat oorbly om te doen, bou\n\nHy begin met n wye basis, want wie weet tot watter hoogtes hierdie hoop klippe in staat is\n\nSoos hy bou drup die sweet van sy vel, die trane uit sy oe, die bloed uit sy hande en die metafore uit sy gedagtes\n\nVir wat na virewig voel hou die woel en werskaf aan tot dit op eens skielik stil raak.\n\nasof daar nooit hier gebou was nie,\nasof alles is soos wat dit nog altyd was\n                                   ***\nNiemand weet regtig wat daai spesifieke dag langs daai spesifieke pad gebeur het nie,\nmaar vandag nog stop mense by die stapel klippe en bid en sing en wees stil;\nwant dit voel soos heilige grond",
    date: "2019-01-08T12:53:07+02:00",
    handle: "arnojvvuuren"
  },
  {
    id: "5e66177b5ee429768df2be8c",
    title: "JHB",
    bodyText: "Geluk en versadig is so naby soos b\xEArrie aan \xF1  vloekwoord",
    date: "2019-06-01T14:25:20+02:00",
    handle: ""
  },
  {
    id: "5e66177c5ee429768df2be90",
    title: "\u{1F52E} ",
    bodyText: `Daar was 'n facebook quote vandag: "Be with people who want to be with you."  `,
    date: "2020-01-14T00:40:31+02:00",
    handle: ""
  },
  {
    id: "5e66177d5ee429768df2be92",
    title: "10 x Sy",
    bodyText: "Afrikaans: sy\nisiNdebele: isiliga\nisiXhosa: isilika\nisiZulu: usilika\nSepedi: silika\nSesotho: silika\nSetswana: selika\nSiSwati: silika\nTshiven\u1E13a: siliga\nXitsonga: silika",
    date: "2018-08-05T18:24:56+02:00",
    handle: "Newageadam"
  },
  {
    id: "5e66177f5ee429768df2be97",
    title: "Oorvloed?",
    bodyText: "Ag fok\nek het vergeet\nVandag is vadersdag\nElke restaurant wemel \nEn kreun onder jaar oud pappas\nVerwarde vaders\nlewensmo\xEB wederhelftes\n\nEn tonne...\nTonne en\nFokken tonne kinders. ",
    date: "2019-06-16T12:00:30+02:00",
    handle: ""
  },
  {
    id: "5e6617715ee429768df2be6a",
    title: "god.",
    bodyText: "Die god-versameling is nie lasterlik nie,inteendeeldis \u2018n uitroep na \u2018n god, wat nie noodwendig die christengod is nie",
    date: "2019-09-26T18:02:53+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617765ee429768df2be7c",
    title: "Sondag",
    bodyText: "Sondag \n\nBitter verlies van gisteraand se sogenoemde herinneringe\nMy mond is droog\nMy kop is seer\nEn my brein bly hoog\nStadige Sondae en my gedagtes van jou\nDie naverdriet het haar kloue in my \nMaar nie so diep soos wat jou mes\nIn my rug l\xEA nie\nJou woorde was min\nmaar genoeg om die pyl \nDeur die appel te dryf\nDit was dalk nie 'n kopskoot nie\nmaar ek is eerder dood\nAs wat ek myself is\nSomber is dit nie?\nMaanskyn en rose\nVerander na pikswart\nEn digkuns, na die woorde van matrose\nStadige Sondae en my pyn en leed oor jou\nDie lewe beweeg aan\nMaar nie op Sondae nie\nwant Sondae was gemaak vir my en jou\nSondag vir altyd\nSondag, net vir nou\n",
    date: "2019-04-15T13:48:40+02:00",
    handle: "miababy_95"
  },
  {
    id: "5e6617765ee429768df2be7d",
    title: "manet menswees",
    bodyText: "Saggies slaap jy met hierdie gewete\ndie monster van binne \nwat jou verneek\njou stuk gemors.",
    date: "2018-12-26T17:34:30+02:00",
    handle: ""
  },
  {
    id: "5e6617715ee429768df2be6d",
    title: "Goeie vergrypers",
    bodyText: "Goeie vergrypers\nhet net 'n halwe \nbrood nodig.",
    date: "2018-08-10T12:20:52+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e66176f5ee429768df2be66",
    title: "sorrymother",
    bodyText: " As you cradle me in your tired arms\nIn the depth of depressive night\nand gently try to rock the tears away,\nI silently fear that perhaps \nthis picture of\nsupposed \nmaternal solace \nis a premonition of what is to come;\n\nA distraught mother \nshaking her daughter\u2019s\nlifeless \nself-inflicted \npained\nbody, trying to rock the answers out\n\nand gazing at the bloodstained walls\nhoping,\nthough falsely, \nand too late,\nthat the blood can still flow \nfrom a dead heart.\n",
    date: "2019-01-07T20:20:37+02:00",
    handle: "tamiabrown.x"
  },
  {
    id: "5e6617745ee429768df2be76",
    title: "soms, ",
    bodyText: "Soms, net partykeer soms,\nis die maansopkoms mooier as die \nsonsopkoms. \nsagte geel wat deur die donker gly.\nomring deur diamant wat drip.\nalleen, maar tog nie.\n\nOp die balkon, 24 december. \nSpookdorp Stellenbosch",
    date: "2018-12-24T23:43:07+02:00",
    handle: ""
  },
  {
    id: "5e6617805ee429768df2be9a",
    title: "closing up",
    bodyText: "Ek's bang hy's reg. \nBang jy's presies dit:\nnet 'n obsessie uit my kinderdae;\ndat hierdie nie regte liefde is nie\n\nn\xE9t 'n fucked up naelstring wat my aan jou verbind, \n\nen soos met jou voorgelopers, hou jy my in 'n algemene wagkamer; \nalleen vir jou misbruik\ngereserveer. \n",
    date: "2018-10-16T23:56:21+02:00",
    handle: ""
  },
  {
    id: "5e6617805ee429768df2be9b",
    title: "hierdie een is vir jou",
    bodyText: 'jybroer saam wie ek bloei\njou hart skeur soos die tempelkleed\n\nsuster\nmy ouers se kind\njy moes al baie leer\n\nmeisie \nwaarvoor ek lief is\nvergewe tog my sondes\n\n"Eli, Eli, lem\xE1 sabagtani?\u201D\n(my God my God waarom het U my verlaat)\n\n',
    date: "2019-08-30T22:52:26+02:00",
    handle: ""
  },
  {
    id: "5e6617715ee429768df2be6c",
    title: "Toccata! ",
    bodyText: "die (wonder-)\nkindjie is gebore!*\n\n*met orrelvoete \n",
    date: "2019-04-06T22:14:14+02:00",
    handle: ""
  },
  {
    id: "5e6617835ee429768df2bea4",
    title: "Master & Slave ",
    bodyText: "Let's play a game... \n\n\n\n\n\n\n\n\n\n\n;)",
    date: "2019-05-28T21:22:31+02:00",
    handle: "\u{1F910}"
  },
  {
    id: "5e66178a5ee429768df2beb5",
    title: "sensuur?",
    bodyText: "Nie?\nJy\nDink\nMove,\nPoes\n'n\nVan\nBietjie\n'n\nWas\nDit\nDeleter.\nMeneer\nOf\nMevrou \nAf\nHol,\nSy\nIn\nVinger\nValuable\nMost \nJou\nMaar\nBreek",
    date: "2019-06-06T18:24:06+02:00",
    handle: ""
  },
  {
    id: "5e66178b5ee429768df2beb7",
    title: "Laat jy gaan in die hemelruim",
    bodyText: "Ek sit met op gekropte emosiesEmosies van jare se shit wat ek moes deur gaan.Deur gaan terwille van ons kinders en om vrede te bewaarDis tyd dat ek jou laat gaan in die hemel ruimSodat ek jou naam nie meer wil hoorJou sms of whatsup nie meer wil kryWant al wat oorbly is 'n gevoel van leemte waarmee dit vrede en geluk sal voortbring in my toekoms.'n Toekoms waarin jy nie meer deel van is nieEk blaas my laaste asem uit van haat en seer kry in hierdie ballon en laat die ballon opstuig tot ek die ballon nie meer kan sien en jy verdwyn uit my lewe uit vir nou en ewigheid. ",
    date: "2019-10-22T15:18:52+02:00",
    handle: ""
  },
  {
    id: "5e66178b5ee429768df2beb9",
    title: "uhm",
    bodyText: 'Hey, Johnny,ek dink jy bedoel"donker." ',
    date: "2019-12-10T15:52:22+02:00",
    handle: ""
  },
  {
    id: "5e6617965ee429768df2bedf",
    title: "Speakeasy",
    bodyText: `Aaaai Kev... Aai aai Kev. 
Dis fokken snaaks. 
Vavushka is de moerin vir jou, 
"Keenan" en dan is daar Gerrie se ma se avontuurlustige vagina. Waddefok en gay John. Aaai Kev.
Jy wys jou nipples vir die verkeerde mense. Maar dit score vir ons baie, b\xE1ie gratis drank. 
"Vavushka" is wit van die woede. 
Maar dis free drinks. Wys daai tepels en laat die closet gays swoon. Ek voel 'n fok. Ons het entertainment vir 'n aand. 

Wanneer laas het jy op Goeie Vrydag s\xF3veel pret gehad? 

`,
    date: "2019-04-19T02:03:24+02:00",
    handle: "ekwasvanaandgetroudmetvavushkaensywasfantasties"
  },
  {
    id: "5e6617a15ee429768df2bf00",
    title: "Begeerte",
    bodyText: "ek is net \u2018n dier \nsonder skaamte of manier\nek leef net vir nou en hier\nek\u2019s \u2018n mens net op papier\n\nek is net \u2018n hond\nmy tong hang op die grond\nek snuffel orals rond\nvan jou snoet tot by jou... mond\n\ndis die begeerte wat my dryf\nop my voorkop staan dit geskryf\nmaak nie saak hoeveel ek smeek\nmy gedagtes het vasgesteek\nby die holtes van jou lyf\n\ngooi my met die boek\nlaat staan my in die hoek\npreek met jou vinger in die lug\ntot jy blou is in jou gesig\n\nleer my om stil te sit\nmet \u2018n vurk en mes te eet\nso gou as jy jou rug kom draai\nhet ek alles weer vergeet\n\nbegeertes, begeerte, begeer\nek het geen beheer\nbegeertes, begeerte, begeer\nek kan myself nie keer...",
    date: "2018-08-04T19:41:19+02:00",
    handle: "Draadhond"
  },
  {
    id: "5e6617a35ee429768df2bf04",
    title: "Mis dit",
    bodyText: "My god, my god.Waarom het ek u verlaat? ",
    date: "2019-09-27T00:01:09+02:00",
    handle: ""
  },
  {
    id: "5e6617a35ee429768df2bf05",
    title: "You",
    bodyText: "Its a loss making artAnd I\u2019m falling apart ",
    date: "2019-08-26T20:31:12+02:00",
    handle: ""
  },
  {
    id: "5e6617b05ee429768df2bf32",
    title: "Hey julle Digters",
    bodyText: "Skryf nog..Skryf meer Skryf my hartseer. Skryf my seer. Skryf my opstaan, alles neer. Skryf wat ek voel - wat ek nie kan s\xEA. Skryf my pure geluk - my uit-my-maag uit lag. Skryf my neer, skryf dat iemand my Sal onthou. Skryf skryf skryf. ",
    date: "2019-12-21T23:35:18+02:00",
    handle: ""
  },
  {
    id: "5e6617b55ee429768df2bf3c",
    title: "Vreemdeling ",
    bodyText: "Jy maak jou deure oop vir myJy sorg vir n bordjie kos vir myJy vra niks jy oordeel niksWant jy weet van swaarkry selfEk word wakker in n snoesige bedjieEk luister na die voeltjies se fluisterEn ek wens die God wat jy dienEn wat vir jou sorgKen ook vir myWant as ek vandag hier weggaanWeet ek nie meerIs daar nog n plekkie in hierdie lewe vir myEk vat nou my bondeltjie en loopMaar nie voor ek hierdie vreemdelingSeen vir daaglikse brood",
    date: "2019-09-17T05:10:06+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617bf5ee429768df2bf4f",
    title: "Vlak vlakker",
    bodyText: "Die trane l\xEA vlakDie hartseer vlakkerMy liefde en omgee vir jou hopeloos te diep om nie te verdrink daarin nieDiep asem inEnHouEnHouAanSwem",
    date: "2019-09-26T19:46:01+02:00",
    handle: ""
  },
  {
    id: "5e6617c75ee429768df2bf68",
    title: "Assumption",
    bodyText: "Of al het ek al die kennis, sonder konteks is jy niks.",
    date: "2019-02-06T23:14:28+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6617c85ee429768df2bf6b",
    title: "Flavour of the month",
    bodyText: "Ek weet nie hoe om dit mooi te s\xEA nie, maar ...\n\nMamma, ek gaan met 'n stripper van Cherries trou. Haar naam is Lady M en sy't my haar Russian moves gewys. \n\nLiefde, \njou eks-gay seun. ",
    date: "2019-08-03T08:47:54+02:00",
    handle: "V"
  },
  {
    id: "5e6617cf5ee429768df2bf83",
    title: "\u26F5\u{1F3DD}",
    bodyText: "noem my sommer enya. ",
    date: "2019-09-01T09:51:13+02:00",
    handle: ""
  },
  {
    id: "5e6617d45ee429768df2bf94",
    title: "Sunday with others",
    bodyText: "Quiet\nJust quiet\nNothing to say\nNothing to lose\nNo one to win\n\nExcept the booze \n",
    date: "2018-11-19T04:21:35+02:00",
    handle: ""
  },
  {
    id: "5e6617895ee429768df2beb0",
    title: "Welkom tuis",
    bodyText: "Jou stem weergalm in die holtes van my menswees\nWaar die brokkies van my gebrokenheid\nhulself een-een ontwortel\nen afdrup van my mou.\n\nDis alles, om plek te maak vir jou.",
    date: "2019-09-08T15:42:16+02:00",
    handle: "marinda_dejongh"
  },
  {
    id: "5e66178e5ee429768df2bec4",
    title: ".",
    bodyText: "Alles vat plek op,nes ekke",
    date: "2019-10-30T20:40:32+02:00",
    handle: ""
  },
  {
    id: "5e66179b5ee429768df2beed",
    title: "God as sintuig",
    bodyText: "Ek hoop God is ook vleesWant ek sien Hom in jou hande wat bewe as jy moet beduide wat jy voel\n\nEk hoop God is ook vlees\nWant ek ruik Hom in die vallei van jou nek as jy my probeer troos\n\nEk hoop God is ook vlees\nWant ek voel Hom in die gewig van jou as ek jou slaappil-arms van my bors aftel\n\nEk hoop God is ook vlees\nWant ek hoor Hom as jy stil bly met jou mond oop \n\nEk hoop God is ook vlees\nEk hoop God het ook gevrees\nEk hoop God is ook vlees\nEk hoop God was ook seer gewees\nEk hoop God is ook vlees\nEk hoop Hy word bang vir Sy eie idees\n",
    date: "2019-09-15T21:26:02+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617a25ee429768df2bf03",
    title: "Aspirantskrywer",
    bodyText: "Hoe maak mens sin uit \u2018n w\xEAreld \nwaar digters verwoord het wat jy voel\nEn dit nog beter as jy doen?",
    date: "2019-01-15T10:01:26+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6617a55ee429768df2bf0b",
    title: "PE '13 ",
    bodyText: "Dit was die lekkerste wanneer jy in die winter styf teen my rug in kruip en ek weet dit sal okay wees as ek nou poep.\n\nMaar dit nie doen nie. ",
    date: "2019-01-31T21:46:37+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6617a85ee429768df2bf14",
    title: "Maandag",
    bodyText: "weeren weeren verrinneweer mynog 'n keer. ",
    date: "2019-09-16T07:08:31+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617ae5ee429768df2bf2a",
    title: "Agterstallige werk",
    bodyText: "Soos ek nou voel skryf ek my terug na my eie land toe. Ek het \u2018n storie daar wat ek graag wil klaarmaak.",
    date: "2019-07-22T23:41:14+02:00",
    handle: ""
  },
  {
    id: "5e6617ae5ee429768df2bf2b",
    title: "Hashtag Vrystaat ",
    bodyText: "Af getrou en fok ongelulkig",
    date: "2019-06-22T13:21:26+02:00",
    handle: ""
  },
  {
    id: "5e6617af5ee429768df2bf2c",
    title: "I\u2019m a motha fuckin gansta",
    bodyText: "As jy daaroor begin dink, iets wat die media en consumer culture sterk ontmoedig, kan jy die ironie in die term pop-culture sien\n\nDie korrekte herkoms van die term handel oor die samevoeging van die woorde populer en kultuur alhoewel dit eintlik maar te doen het met wat tans lit, on fleek en cool AF is\n\nAs daardie terme vir jou vreemd en effens verwarrend klink het jy moontlik die fenomeen wat ek hier bespreek vrygespring, of jy is dalk buite die bedoelde teikenmark van my observasie en effens irrelevant\n\nHierin le die tweestryd, die vrees en die vrede, weet jy is jy in maar gefok, weet jy nie is jy irrelevant en ook gefok\n\nTerug by my taal les, want ek digress\nDie verkorting van die stam woord, populer Eindig op as POP\nMaw \u2018n lewelose plastiek namaaksel van n mens wat deur n meester beheer en manipuleer word\n\nEk gaan nie verder verduidelik nie want ek is skielik te ontstel deur die metafoor\n\nWant dis hoe dit is (met enigiemand anders as daai donnerse steve) \n\nOf soos Biggie sou se: if you don\u2019t know, now you know niggie*",
    date: "2018-11-03T17:01:51+02:00",
    handle: "arnojvvuuren"
  },
  {
    id: "5e6617be5ee429768df2bf4c",
    title: "Die gedagte",
    bodyText: "Dis GodGejuig na die ontsnapping van 'n dillema wat nie meer geld nieLiefde wat ek nie verwag het nieMaar ek is gelukkigEn verlief op alles wat oor my pad kom",
    date: "2019-11-21T23:55:04+02:00",
    handle: ""
  },
  {
    id: "5e6617c55ee429768df2bf62",
    title: "Ek sukkel ",
    bodyText: "Monophobia? ",
    date: "2019-04-18T14:23:26+02:00",
    handle: ""
  },
  {
    id: "5e6617cb5ee429768df2bf74",
    title: "liefdestaal",
    bodyText: "Hou my bietjie vas, asseblief?",
    date: "2019-12-29T20:45:38+02:00",
    handle: ""
  },
  {
    id: "5e6617865ee429768df2bea9",
    title: "Mindful ",
    bodyText: "YouYes you!Blow BlowYou blow meYou blow my You blow my... mind ",
    date: "2019-11-06T21:59:26+02:00",
    handle: ""
  },
  {
    id: "5e6617895ee429768df2beb1",
    title: "Ek is, ek is",
    bodyText: "Versteurings word versteurings genoemwant die re\xEBls word gemaak deur die meerderheid:die normse optrede bepaal watnormaal aanvaarbaarafwykingis, tog is dit om altyd \u2018n vreemde taal te praat en nieverstaanword deur jou moedertaal nie. is, tog hoekom digters voel hulle moet altydverdedig verdien om buite die norm te wees, maar tog d\xE9\xE9l\u201CI am I am I am\u201D - Sylvia Plath\u201CEk is ek isdie here hoor my\u2018nvryfokkenvrou\u201D - Antjie Krog",
    date: "2019-11-16T19:48:09+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617a15ee429768df2befd",
    title: "Spatare + Aambeie ",
    bodyText: 'Ek wil weer 23 en minder obsessief wees. \n\nDie dae toe alles r\xE9rig vol potensiaal was. Toe "vrywees" at the forefront was. Die "alternative" tussen die konserwatiewes.\n\nOnskuldig. Partnered. Gelief. En omring. Suksesvol en anders. \n\nEn op 33 wil hy weer 28 wees. Vry. Oop. (Lewend). \n\nOp 23 wou hy vry wees. Ervare en hoopvol. Beter as hy. \n\nEn op 38 weer 33...\n\nSelftevredenheid: die ewige gesoek. ',
    date: "2019-07-31T08:46:23+02:00",
    handle: ""
  },
  {
    id: "5e6617a35ee429768df2bf06",
    title: "V",
    bodyText: "I sat alone in a restaurant ,tonight, and had a meal, that was a victory, the fact that I also Tinder\u2019d was not",
    date: "2019-03-19T17:20:25+02:00",
    handle: ""
  },
  {
    id: "5e6617a65ee429768df2bf0e",
    title: "Uitdagings + Probleme",
    bodyText: 'Ek wil hol en denyHol en denyHol en deny Herinner my weer hoekom mens nie kan volstruis wanneer jy "groot" is nie.Want ek wil netHol en denyHol en deny',
    date: "2019-09-30T16:27:50+02:00",
    handle: ""
  },
  {
    id: "5e6617ac5ee429768df2bf21",
    title: "First impressions: Step 1",
    bodyText: "Get out of the passenger seat and drive the god damn car. ",
    date: "2019-04-06T01:34:11+02:00",
    handle: ""
  },
  {
    id: "5e6617ad5ee429768df2bf24",
    title: " ",
    bodyText: "Soveel ongelese boeke, maar steeds sal mense skryf. ",
    date: "2019-05-26T15:46:01+02:00",
    handle: "francoislct"
  },
  {
    id: "5e6617ca5ee429768df2bf71",
    title: "Skree",
    bodyText: "Die here was jou Pa wat skree",
    date: "2018-07-19T16:27:49+02:00",
    handle: ""
  },
  {
    id: "5e6617d25ee429768df2bf8d",
    title: "woordtekort",
    bodyText: "jy weet dis seerwanneer jy nie daaroor kan skryf nie",
    date: "2020-01-11T09:47:11+02:00",
    handle: ""
  },
  {
    id: "5e6617d35ee429768df2bf8f",
    title: "Skuur",
    bodyText: "Spreuke 6 vers 6\nMoses 6 vers tien\nNog 'n dag het sy gat gesien",
    date: "2019-03-10T14:08:51+02:00",
    handle: "johngeary6"
  },
  {
    id: "5e6617d45ee429768df2bf93",
    title: "M\xF4re Skyn Die Son Weer",
    bodyText: "Die son het haar hart gebloei oor die wolke,tragies mooiDonker het gekom en belowe,dat hy die sterre daaroor sal gooiMaanlig se helder glimlag kom te voorskyn, 'n silwer rand geskenk vir elkeen se donker\nwolke en pyn \n\n- ajvt",
    date: "2019-07-25T19:08:40+02:00",
    handle: ""
  },
  {
    id: "5e66178f5ee429768df2bec8",
    title: "Someone that will love me for who i am",
    bodyText: "I listen to italian love song musicThen comes the thought when will i meet someone that really care. Someone special just for me.I have so much to giveSo much loveSo much romance So much careSo much of myselfTime is running out very fastI waisted so many yearsOn someone that just did not careGave my young life awayGiving without asking some thing back Except to love me Love me for who i amCare for me without any expectations Show me you careShow me you gratefullWhen i sit next to you to feel loved that i want to share my feelings with youWhen i speak making food looking after the household looking and bringing the kids up not to give comments or pull your face or say negative words or breaking me downI am longing for someone just to love me and that my heart pumps every moment you near or fare from me. Just you voice would be enough for meSomeone that i can share everything with without judgement.Someone that i can feel happy with. Someone who make me whole againSomeone i could really love for ever",
    date: "2019-10-08T19:30:59+02:00",
    handle: ""
  },
  {
    id: "5e6617935ee429768df2bed4",
    title: "Un(en)titled",
    bodyText: "Al my childhood crushesIs officially nou getroud...Ek weet nie of dit my 'n sad caseOf moerse lucky maak nie.",
    date: "2019-12-05T21:21:28+02:00",
    handle: ""
  },
  {
    id: "5e6617975ee429768df2bee2",
    title: "Estate Huis ",
    bodyText: "Dit was alles baie pret toe dit nog net\nPrentjies, woorde en sinne was. \nMaar nou is dit eindelik hier:\nOor twee en 'n half jaar\nMoet sy staan en die\nWind en weer\nBuitekant\nHou\n\nJy\nJulle \nAlmal \nSnoesig \nWit en warm\nToegewikkel in die\nVere van kil kapitalisme ",
    date: "2019-01-09T23:56:29+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e6617985ee429768df2bee4",
    title: "Beige",
    bodyText: "Ek mis jou fake eyelashes\nEn vain makeup roetine\nEk mis die skerpste observasies\nUit die mooiste mond\n\nDis als verby\nDis als verby\nDis als verby\nDis als verby",
    date: "2019-09-04T20:02:49+02:00",
    handle: ""
  },
  {
    id: "5e66179e5ee429768df2bef5",
    title: "Manet menswees",
    bodyText: "Kyk vir jou die skerms deur\nWonder of jy okay is\nTe vreemdeling om te vra\nTe onaangenaam om ernstig opgeneem te word\nEn so vergeet\nEk dat my eie pyn te vollop is om\nNog oor jou te worry. ",
    date: "2019-01-31T10:37:04+02:00",
    handle: ""
  },
  {
    id: "5e6617a15ee429768df2befe",
    title: "\u2022",
    bodyText: "we do, in reality\nnot want what we want.\nwe want what we need\nand we, believe me\ndo not know what we need.\nthose who know\nwhat we need\ndo not give\nus what we want and\n\nyou do, unfortunately,\nnot want that either.\n\nYou do you, boo. Ek s\xEA maar net. Sometimes I cry. ",
    date: "2019-05-06T21:58:55+02:00",
    handle: ""
  },
  {
    id: "5e6617ad5ee429768df2bf25",
    title: "Elegie vir die Moeder",
    bodyText: "Die son\nkom traag\noor 'n grys\naarde op.\n\nAsem die \nrook in\ngroot teue\ntot diep\n\nin haar \nlonge\ngebore \nin roet.\n\nDie aarde\nl\xEA stil\nuitgeklop\nna te veel wyn\n\nwat gedokter is\nen onwetend\nin haar are\ngepomp is.\n\nDie kind in haar maag\nis dood.\nVoor geboorte verkrag\nhaar lewe\n\nmet 'n geroeste hanger\nuitgeskraap\nen vir oorvet katte gegooi\nom op te kots.\n\nDie aarde\nl\xEA naak.\nBeswadder.\nVuilgevat\n\nmet jagse hande\nwat haar borste \noopskeur en dans\nin haar melk.\n\nMoeder.\nBloed.\nSkande.\n\nRooi riviere\nvan bloed\nen melk\nen ru-olie\n\npomp\ndeur die laaste\noorlewendes\nse koolstofharte.\n\nGlo nog\nhulle is veilig.\nDie son kom mos\nnog skaam op\n\nGlo ons.\nAl sien ons haar \nnie meer agter \ndie roetgordyn nie.",
    date: "2019-05-15T21:14:52+02:00",
    handle: "glasasem"
  },
  {
    id: "5e6617bd5ee429768df2bf4a",
    title: "dis nog lewendig",
    bodyText: "\u2018Dit waarvoor ons woorde kan vind is iets wat reeds dood is in ons harte; daar\u2019s altyd \u2018n soort van minagting in die daad van woorde\u2019 -Frederich Nietzsche ",
    date: "2020-01-11T18:42:33+02:00",
    handle: "niemandiniemandsland"
  },
  {
    id: "5e6617c85ee429768df2bf6c",
    title: "Middernag Lirieke",
    bodyText: "Mag jy nog vele middernag aande, deur jou tuin van lirieke stap. Mag die woorde wat jy daar pluk, blom op die papier waar jy dit neerplant.",
    date: "2018-09-12T16:06:17+02:00",
    handle: "sundrieddesign"
  },
  {
    id: "5e6617c95ee429768df2bf6f",
    title: "Ja, kyk",
    bodyText: "Lekker lag jy nou.",
    date: "2019-05-09T22:05:50+02:00",
    handle: ""
  },
  {
    id: "5e6617d15ee429768df2bf89",
    title: "Sadistiese sabbatical meerminne?",
    bodyText: "Vandag was \u2018n goeie dag.Tafelberg was in die agtergrond, het ek jou al vertel ek het dit saam my pa geklim?  Ek was so moeg en die stroom water wat by die berg afloop was so lekker. Kan jy glo ek het actually rou water gedrink met my kaal hande? Dit was nie sleg nie. \nDie Kaap se sand is s\xF3 mooi. Dit is wit en glad en net nie normale tipe seesand nie. Wel, as jy dit vergelyk met Durban. \nEk het \u2018n ma haar kindjie sien swaai in die rondte en \nEk het \u2018n gestremde kind in by rolstoel gesien, sy boetie het hom gestoot. Dit het s\xF3 moeilik gelyk om \u2018n rolstoel op die sand te stoot, veral met sy maer lyfie en\nEk het \u2018n skoonmaker gesien loop met\u2019n baba. Jy weet, ek neem nie net aan dis \u2018n skoonmaker nie, jy weet daai classic skoonmaker klere wat pick n pay verkoop? Sy het so pakkie aangehad en\nEk het vir \u2018n volle 45-minute met sand gespeel en\nGewonder wat in die see gebeur. Wonder jy ook? Of daar actually mermaids is. Of dooie lyke. En hoeveel lyke is daar in die see? Ek dink daar\u2019s baie en \nEk dink baie van die lyke is actually dood. \nHet ek jou ooit vertel van die kraai wat my aangeval het? Shit, elke keer as \u2018n kraai grootte vo\xEBl sien vrees ek daai spesifieke dier. Daar is \u2018n seagull wat hier rondvlieg (het jy al die video\u2019s gesien waar hulle kos steel? Dis snaaks. Hulle is steeds scary, though) en\nDie son brand my nek,\nMaar dis oukei\nwant vandag was \u2018n goeie dag. \nAl was dit net 45-minute lank. \nG.",
    date: "2019-11-28T21:46:00+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617d35ee429768df2bf91",
    title: "Een mooi begin",
    bodyText: `Ek wandel in 'n jasmynwolkLaatmiddagson wat neerbak'n Lenteswaeltjie wat soek-soek rondspringEn ek onthou"een zwaluw maakt nog geen zomer
maar't is een mooi begin"Dis die belofte van vernuwings en nuut beginVergesel deur jakarandas en bougainvilleas Lang dae en kort nagteRoomys strepe op my hempDis die reuk van sonbrandroomOf selftwyfel as jy vergeet het en sodoende gebrand hetDonderstorms, re\xEBn en modderStrate wat die sonsondergang weerkaats in waterplasseDis die wegpak van wintersjasseEn swemklere en handdoek wat gereed l\xEA om gegryp te wordSaam met die dolle gejaag om als wat begin was af te handelDis 'n mooi begin. `,
    date: "2019-09-01T22:12:33+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617d35ee429768df2bf92",
    title: "Kersfees Blues",
    bodyText: "Ek weet nie of dit die tinsel is nieMiskien Checkers se cheesy kersliedjiesOf die fe\xEBtjieliggies se warm gloedDalk die kerskouse wat wag vir bederf om hulle vol te maakOf die weerkatsing wat vir my loer in die kersfees ornament - te lank sonder die glimlag wat net jy kon uitlokEk mis jouEk wil saam met jou die perfekte boom gaan uitsoek, liggies om sy skouers drapeer, baklei oor te veel tinsel en vir hom sterretjies en candy canes gee om vas te houEk wil mistletoe skelm uithaal, asof ek nie klaar 'n verskoning gehad het om jou te soen nie. En dit net weer en weer doen, tot die liggies se batterye begin klaDis amper KersfeesEn ek mis jou ",
    date: "2019-12-14T16:46:19+02:00",
    handle: ""
  },
  {
    id: "5e6617815ee429768df2be9e",
    title: "Dis net",
    bodyText: "Dis net partykeerdat ek ons na werk gesprekke misdat my gedagtes dwaal na small talkwat my laat voel het ek sit langs jou en nie te veel kilometers weg nieDis net partykeerdat ek net weer wil probeer, probeer praat, probeer verstaan, probeer regmaakDis net partykeerdat ek nie alleen wil voel niedat ek jou hand weer wil vashou, en jou toelaat om my weg te steek van die w\xEAreldTyd werk beslisWant dis nou net partykeer",
    date: "2019-08-19T16:40:26+02:00",
    handle: ""
  },
  {
    id: "5e66178d5ee429768df2bebe",
    title: "Appels & Banana ",
    bodyText: "Jy\u2019t my net weer vir n doos gevat, en my laat sleg voel toe ek terug trek.\nJy\u2019t gedrink en nou het jy nuwe idees vir jou lewe.\nEkt op gedaag, is vir gestaar, en uit gelag.\nEet jou piesangs, en sort jou kak uit.",
    date: "2019-06-24T21:56:00+02:00",
    handle: ""
  },
  {
    id: "5e66178c5ee429768df2bebb",
    title: "A look into a Gemini\u2019s playlist ",
    bodyText: "A long ass poem made up out of my favorite lyrics: We\u2019re falling to pieces , one by one \nnot out of love , but we\u2019re out of time. \nRain keeps falling, tears keep falling.\nSometimes I wonder if I\u2019m living my life \nOr just waiting to die.\nGhost in the mirror, \nI knew her face once , but now it\u2019s unclear.\nI had good intentions, but I only made it worse. \nThere\u2019s more to us than what we choose to reveal.\nAnd I\u2019m the worst.\nIf I weren\u2019t in this spider web of mine \nThen darling,  you\u2019d be the love of my life. \nYeah I\u2019m fucked up , but I don\u2019t want to be!\nI tell the mirror what you know she\u2019s heard before, \u201Ci don\u2019t wanna be you anymore \u201C\nI can\u2019t just let go , it\u2019s like \nA flame that went out before it burned. \nBut I need that flame just to know that I\u2019m awake. \nThere wasn\u2019t a day that I thought I deserved you. \nI can\u2019t look away I love the pain \nI wonder if the sun will rise again,\nIf I\u2019ll ever see your face again.\nI can\u2019t pretend like it\u2019s ash in the wind. \nHow can I live with myself? \nTo run the jungle , I must be a lion\nor be a cheetah, but neither is fine \nDon\u2019t want to hurt my dear love of my life. \nFuck feelings , swear having a conscious ruined my life , but sweet dreams are made up of these \npolygraph eyes.\nYou know I\u2019d rather die then say goodbye. \n\u201CLeave it alone mate\u201D , screaming don\u2019t leave me here !",
    date: "2019-10-20T19:46:27+02:00",
    handle: "miaradov"
  },
  {
    id: "5e6617905ee429768df2beca",
    title: "1994",
    bodyText: "As hulle hul\nSkeinat geken het\nhet hulle ook geweet \ndat\n\nwit,\nom \u2019n versperring\ngebuig - gedwing \nas\u2019t ware -\nmaak \u2019n re\xEBnboog.\n\nHeel eenvoudig.\n",
    date: "2019-06-04T18:47:44+02:00",
    handle: ""
  },
  {
    id: "5e6617975ee429768df2bee1",
    title: "Skoon",
    bodyText: "Ek voel soms asof ek dryfWeg van myselfWeg na wie ek wil weesAs ek net nie so swaar was nieEn die water my tot daar kon spoel",
    date: "2019-09-25T21:07:32+02:00",
    handle: ""
  },
  {
    id: "5e6617985ee429768df2bee5",
    title: "BFI",
    bodyText: "Brute Force and Ignorance",
    date: "2018-09-03T14:24:17+02:00",
    handle: ""
  },
  {
    id: "5e6617995ee429768df2bee6",
    title: "Diamond",
    bodyText: "Ek Jy GlibberigJamesonMacuricrome Ek wil jou bad Cherries in my rektaleEreksie in my binneste diep weggesteek Jou klitoris teen my lippe lippe . Jy is die opsie van ontsnap na roekelose voortbestaanEk eff jou na gemene deler na my h\u2019n oplossing vir my probleemEk wil h\xEA jy moet my sanik hoorEk wil verstaan hoe jy gekom het waar jy is My lus in waarwordingWatse tipe ma of pa het jou so afgepis  Verkeersligpoplap, watter ma watter paEk wil jou omhelsNoem my heer noem my godinNoem my vasvanger Noem my godEk is ongelukkig met of sonder jouRaak ontslae van my met jou volgende grote mushroom headEk is nimmernikswerd in jou o\xEB tot \u2018n been \u2018n afgedwonge keuseEk wil elke besluit tot hier hoor en verstaan wat jou hier gebring het Stukkende kneusplek tot koorsblaar tot allerliefde As ek jou net kon verstaan jou besluite kon beraam Ek wil jou definisie gee bo jou begripEk wil jou breek en optel en koester Ek wil jou verstaan in jou Slipcast en tol en skud en spat Jys bo my Ek staan vir niks bo my nie Ek wil dien wat jy dien ek wil glo wat jy glo Neem my na jou kerkEk sal glo wat sy s\xEA God of godinEk wil n paradys vir ons maakEk wil jou prys \u2018n enkele mens Gebroke voor jou Stukkend in die nietMAARWat as ek my wending voor jou voete gooi \u2018n storie voor jou Windmill voete strooiHoe\u2019t jy gekom hier in die kaap Per vliegtuig per bus Het jy jou verpletterde ma Skuwelik afgepis? Diamond my dearFor though arent 60carats no more And i shall prayDo not miss me in any meaningful wayAs you have not found me in any particular bay",
    date: "2019-08-17T01:18:28+02:00",
    handle: ""
  },
  {
    id: "5e66179b5ee429768df2beec",
    title: "vrystaatmeisie",
    bodyText: "Ek het. Jou UX kort refinement. ",
    date: "2019-09-01T10:08:34+02:00",
    handle: ""
  },
  {
    id: "5e66179f5ee429768df2bef8",
    title: "00:16",
    bodyText: "16 minute oor 12Dis verby middernag \nSou ek by jou wees, was dit dalk al more\nMaar hier, alleen, leef ek altyd in gister\nOm dop te hou wat die jonger ek doen\nEn weer te sien waar alles dalk verlore gaan\n\n",
    date: "2019-08-17T00:19:14+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617a45ee429768df2bf08",
    title: "Ysprinses ",
    bodyText: "Selfs in die sosiaalste sitkamer, \nDie hart van ons woord-welige huis, \nToe almal die vertrek verlaat\nEn ek en die kat al is wat asemhaal,\nOorval Sy my weer en skielik is dit duidelik:\n\nAlleenheid is die pre-existing condition tot menslikheid. Ons probeer dit al millenia wegwens deur familielewe en paring.\n\nMaar om fully te wees, moet jy haar eers kan omarm... reg?\n\n(ek wil jou brose gesig teen my bors kan druk en vlegsels met jou rooi hare maak) ",
    date: "2018-12-21T23:55:37+02:00",
    handle: ""
  },
  {
    id: "5e6617a65ee429768df2bf0f",
    title: "Flaked ",
    bodyText: "Vir jou:Ja hierdie een is vir jou. Uiteindelik kan ek s\xEA en wil ek s\xEA fok jou",
    date: "2019-09-24T23:41:49+02:00",
    handle: ""
  },
  {
    id: "5e6617b85ee429768df2bf44",
    title: ".",
    bodyText: "Daar\u2019s asem in Sondae ",
    date: "2019-06-09T10:59:47+02:00",
    handle: ""
  },
  {
    id: "5e6617be5ee429768df2bf4d",
    title: "22:19",
    bodyText: "die see se skoon skildersdoekbreek net met elke brandermaar ek sien jou wit tande lagtussen die skuim (it's not inside it's on tophet jy altyd met cremora humor ges\xEA maar jy was ook nooit regtig binne nienet bo vir versiering) wat oppervlakkig op die water verdwyn. ",
    date: "2020-02-03T22:19:25+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617c45ee429768df2bf5e",
    title: "Suiderkruis",
    bodyText: "Jy's 28\nJy weet wat jy wil he\nMaar jy is op die verkeerde plek\nJy weet wat jy wil he \nMaar jy is nog hier\nMaak die lewe joune\nSkryf jou eie lied\nHou vas aan jou drome\nBly geliefd\nDit word nag en dan dag\nJy's n suiderkruis en n songlinster\nJy is...\n",
    date: "2019-06-05T22:59:29+02:00",
    handle: ""
  },
  {
    id: "5e6617c45ee429768df2bf60",
    title: "Moeilike week",
    bodyText: "Ek wil jou whatsapp\nBel\nSms\nFok, enigiets\nDaar le 'n nota op 'n server in jou posbus\nMaar ek twyfel of jy dit sal kry\n\nBeide ons harte en lewens in kwarantyn\nOf so voel dit\n\nEk mis jou",
    date: "2019-08-02T14:59:00+02:00",
    handle: ""
  },
  {
    id: "5e6617c65ee429768df2bf64",
    title: "Snakeskin en Gabanna ",
    bodyText: "Priority boarding.\nOp SAfair. \n\n\nGod.\nH\xF3\xE9 belangrik is jy nou weer? ",
    date: "2019-06-04T16:28:46+02:00",
    handle: ""
  },
  {
    id: "5e6617cf5ee429768df2bf82",
    title: "Koue Voete",
    bodyText: "Ek onthou die begin teen jou borsNet die reg en die verkeerd en al ons vrae tussen onsEn ek onthou hoe't die engele getergSoos om vra of lag nog lekker is, of is God die moeite werd?\n\nEk kon proe hoe dit sou wees\nAs ons die paaie weg kon wens en die sterre meer kon lees\nEn jy kon voel hoe ek beef\n\nHet jy jou roeping toe gevind, daar in die verte, my lief? \nHet jy pad al vir ons twee oopgekap? \nEk het my hoed en my linte en my rok al uitgekies \nDis net my voete wat al hoe kouer raak\n\nEk onthou die einde teen my bors\nEk hoor jou stem, ek sien jou lyf voor my staan\nJy weet dis nooit regtig groet vir ons\nEn ek klou nog steeds soos dou aan jou naam\n\nEk kan proe hoe proe die w\xEAreld sonder jou \nSoos oggend asem, dronkverdriet aan die einde van my tou\nEn jy kan voel hoe ek vashou \n\nHet jy jouself al gevind, daar in die eike, my lief? \nOf laat die sout my nog steeds soos die somer aan jou kleef? \nEk het my hare en my vel en my suster opgemaak\nDis net my voete wat al hoe kouer raak\n\nEk onthou die hede, stadig nog \nEk onthou die oomblikke waar jy 'n opsie word\nEk onthou di\xE9 voete, selfstandig sonder jou \nEn my eie hart wat alles warm maak\n\nDis net my voete wat al hoe kouer raak\n",
    date: "2019-10-23T17:21:29+02:00",
    handle: "@milli.burd"
  },
  {
    id: "5e6617d45ee429768df2bf95",
    title: "sien soms ",
    bodyText: "neem selfies as jy eensaam of hartseer is sodat jy jouself later, na al die roekelose redes en impulsiewe oomblike kan sien, en verstaan \nsonder kwalik of kwaad of skaam vir wat jy besluit het om daai aand te doen \nof nie \nneem \u2018n fokken foto of \u2018n screen shot of iets en kyk later na hoe die walle van seer in jou wese opdam\nen verstaan in jou hart\ndat jy net n mens is \nwat ook eensaam kan voel \nwanneer niemand daar eers jou taal se naam ken nie \nof ooit lady van die bo-dorp kan mymer of fluister nie ",
    date: "2019-06-30T05:14:02+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e66178d5ee429768df2bebf",
    title: "dis jy",
    bodyText: "ek't 'n weighted blanketwanneer ek verlang verbeel ek myself dis jy",
    date: "2020-01-09T22:46:07+02:00",
    handle: ""
  },
  {
    id: "5e66178e5ee429768df2bec3",
    title: "Dis Complicated",
    bodyText: "Fok die re\xEBls\nEk mis jou ook",
    date: "2018-12-12T13:09:16+02:00",
    handle: ""
  },
  {
    id: "5e6617945ee429768df2bed9",
    title: "_",
    bodyText: "ek wil gaan ry.",
    date: "2019-08-10T19:44:08+02:00",
    handle: ""
  },
  {
    id: "5e6617985ee429768df2bee3",
    title: "Kontras ",
    bodyText: "ek bliksem uitmekaaren jy't 'n goeie tyd",
    date: "2019-10-05T09:12:17+02:00",
    handle: ""
  },
  {
    id: "5e6617995ee429768df2bee7",
    title: "Belaglik",
    bodyText: "voor jou was dit maklik en eensaam  ",
    date: "2018-07-22T12:14:17+02:00",
    handle: ""
  },
  {
    id: "5e66179d5ee429768df2bef2",
    title: "Trane",
    bodyText: "Mense wie huil is darm maar \nnie mooi nie. ",
    date: "2019-05-24T20:14:26+02:00",
    handle: ""
  },
  {
    id: "5e6617a95ee429768df2bf19",
    title: "Anhedonie",
    bodyText: "Ek het vergeet hoe dit voel om te voel. Deur alles het ek myself verloorEn myself gevindIemand anders as wie ek wasEk mis dit om opgewonde te raak as ek jou stem hoor.Altans, ek mis dit om verlief te weesEk weet jy is die beste ding wat nog ooit met my gebeur het....Ek w\xE9\xE9t dit. Maar fok, kan dit dalk net so voel?",
    date: "2019-08-11T05:36:03+02:00",
    handle: ""
  },
  {
    id: "5e6617c35ee429768df2bf5c",
    title: " ",
    bodyText: "As sy Afrikaans was het sy die woord tjom gebruik.",
    date: "2019-07-28T16:20:03+02:00",
    handle: ""
  },
  {
    id: "5e6617ca5ee429768df2bf70",
    title: "T E X T ",
    bodyText: "LEESHOECOOLIS HIERDIENUWETEXT FUNCTIONALITYBOOM",
    date: "2019-07-12T02:36:01+02:00",
    handle: ""
  },
  {
    id: "5e6617d35ee429768df2bf90",
    title: "infidel ",
    bodyText: "ek wil vir mense kyk \n\napaties in die hoek bly sit tot alles verby is \nen gaan slaap ",
    date: "2019-12-06T09:10:53+02:00",
    handle: ""
  },
  {
    id: "5e6617d55ee429768df2bf96",
    title: "Hey,",
    bodyText: "Ek\u2019t vindag aan jou gedink.",
    date: "2019-05-29T16:40:22+02:00",
    handle: ""
  },
  {
    id: "5e6617d55ee429768df2bf98",
    title: "daai dag in die lente",
    bodyText: "...het ek geweet jy gaan 'n doos raak. ",
    date: "2019-10-03T22:21:22+02:00",
    handle: ""
  },
  {
    id: "5e6617815ee429768df2be9f",
    title: "Jou Gedig ",
    bodyText: "In die middel van n\xEArens\nOmring ek myself met jou\nTussen gedigte van ons verlede\nWant die toekoms kom te gou\n\nSoveel woorde bly oor in ink\nOp papier wat bestaan uit vlees\nSoveel boeke om te dra\nMaar jy is al wat ek wil lees\n\nWant in die middel van n\xEArens\nOmring ek myself met jou\nEn al dink ek nie teveel nie\nKlop my hart darem net vir nou",
    date: "2018-08-03T11:36:44+02:00",
    handle: "terblanche_jordaan"
  },
  {
    id: "5e66178d5ee429768df2bec0",
    title: "Hoe? ",
    bodyText: "Hoe s\xEA ek vir jou?\nHoe s\xEA ek vir jou\njou lyf gaan verouder en vrot onder jou vel,\njou akwamaryn o\xEB gaan wasig raak\nen jou vingers gaan nie altyd s\xF3 beweeg nie.\n\nHoe s\xEA ek dan\ndat ek dit weet?\n\nHoe s\xEA ek\ndat jou...\nFok!\n\nJy is nie jou lyf nie!\nJy is jy!\nJy is in die splinter in jou oog!\nJy is in die sand tussen jou tande!\nJy is in 'n oester!\n\nJy \xEDs!\nHoe\nde absolute fok\nverduidelik ek d\xEDt? ",
    date: "2019-07-08T00:49:06+02:00",
    handle: ""
  },
  {
    id: "5e6617875ee429768df2beaa",
    title: "the truth",
    bodyText: "i can fuck without feeling\nbut not feel without fucking\n\nothers can't fuck without feeling\nand do feel without fucking",
    date: "2019-05-04T02:03:06+02:00",
    handle: ""
  },
  {
    id: "5e66178f5ee429768df2bec5",
    title: "Tumblr-esque",
    bodyText: "**Komma hou ons by mekaar**\n\nEk's Jammer, Eks lief vir jou \nEk's Jammer eks lief vir jou ",
    date: "2018-07-24T13:02:54+02:00",
    handle: ""
  },
  {
    id: "5e6617a45ee429768df2bf07",
    title: "Kla",
    bodyText: "Ons as volk ken goed van kla\nKla oor werk\nOor weer\nOor geld\nOor grond\n\nOns kla oor di\xE9 van ons wat kla\nAsof ons vorm van kla beter is\nTog sal ons nooit iets oor dit doen\nWat ons genoeg pla om oor te kla\n\nOns mense kry swaar\nOns taal krimp\nOns krag bly duur\nOns gemoed bly suur\n\nMaar wat is daar om te doen?\n\nNiemand luister vir ons nie\nOns het jare laas 'n s\xEA gehad\nEn hoe minder ons daaroor s\xEA\nHoe beter\n\nOns keuses het verdwyn\nBedaar\nDie land is een groot massa groeipyne\nOns kry swaar\nAl wat ons nog kan doen\nIs kla\n\nKla oor die werk\nOor grond en geld\nSowel as die kerk\nEn weer o weer\nTog weer 'n keer\nOor weer",
    date: "2019-01-14T00:04:53+02:00",
    handle: ""
  },
  {
    id: "5e66178f5ee429768df2bec7",
    title: "+",
    bodyText: "Ek't iets nuuts probeer\nDit gebreek\nEn ons altwee seergemaak",
    date: "2019-06-30T15:51:57+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617a75ee429768df2bf11",
    title: "Plekkie by die see",
    bodyText: "Ek begin te dink aan 'n plekkie by die seeWaar jy luister na hoe die golwe teen die rotse slaan.Hoe jy kaalvoet op die strand loop en diejou voete diep in die see sand weg sak en die yskoue see water oor jou voete spoel. Hoe die grootte see voor jou uitgestrek l\xE8.Hoe die wind jou hare deurmekaar waai. Waar daar mense elke oggend kyk hoe die nuwe dag aan breek oor die see en elke aand kyk hoe nog 'n dag sy gat gesien het.Met die son wat stadig weg sak op die horison en die maan op die see skyn. Wat kan lekkerder wees as om in die Kaap te bly.Waar tafelberg hoog uitstyg tot in die wolke en die kabelkarretjie mense opneem teen die berg.Daar waar dit voel jys in 'n ander land. Natuurskoonheid is oorals te sien waar jy kom. Waar daar geen beggers is op elke hoek en draai. Weg van alles en almal waar jy net rus kan vind. Daar waar jy sundowners en 'n yskoue biertjie drink en in rustigheid verlang na iets of iemand en jy weet nie wie of wat dit is.Dit kan net lekker raak.",
    date: "2019-08-01T22:51:45+02:00",
    handle: ""
  },
  {
    id: "5e6617935ee429768df2bed5",
    title: "Jammer \u2022 Dankie ",
    bodyText: "As jy 'n vrou is, Weet ek hoe jy voel.As jy 'n man is, Weet jy nou hoe gays Soms voel.",
    date: "2019-11-24T21:36:59+02:00",
    handle: ""
  },
  {
    id: "5e6617a85ee429768df2bf13",
    title: "Hierdie goed ",
    bodyText: "Zolnox PrexumMethylphenidate Gordon's en Black LabelMonster en CamelsGolden Teachers 2019. Fuck man.  ",
    date: "2019-12-17T23:22:33+02:00",
    handle: ""
  },
  {
    id: "5e6617945ee429768df2bed8",
    title: "Jy is 'n wit roomys. ",
    bodyText: "Jy ken die gevoel wat elkedag-groente en vleis jou gee: dis gebalanseer, redelik smaaklik, stewig en dit laat jou versadig, maar meer as dit: jy hou daarvan want dis soortvan gesond. Daar is ook dan roomys en tjoklitsous.En mense. Mense soos dit.",
    date: "2020-03-01T22:00:07+02:00",
    handle: ""
  },
  {
    id: "5e6617965ee429768df2bedd",
    title: "WDF!?",
    bodyText: "W.A.T\nDIE\nF.A.K\n!?",
    date: "2018-10-13T07:29:29+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6617b75ee429768df2bf41",
    title: "Stem",
    bodyText: "Jy my engel het n skerp tong.Waarmee jy my in stukkies opsny.Opvreet en uitspoeg.\nTotdat daar niks van my oorbly.\nNa jare van stilte,\nhet ek weer  jou stem gehoor.\nVerstrengel deur my eie emosies.\nVerdrink ek in golf van jou nostalgie.\nDie koue van hartseer, die laaste paniek van laat gaan. \nJy het my versmoor met jou haat.\nMy verniel met jou woorde.\nAl wat ek vir jou gehad het was liefde.\nHoe kan n mens se stem.\nDan so baie emosies in jou laat ontwaak?",
    date: "2020-02-24T13:27:54+02:00",
    handle: ""
  },
  {
    id: "5e6617a95ee429768df2bf18",
    title: "Buiteland",
    bodyText: "Soms wens ek my ma kon sien wat ek hier doen. \nEk wens sy kon sien hoe trots sy regtig op my moet wees.",
    date: "2019-04-30T19:46:25+02:00",
    handle: ""
  },
  {
    id: "5e6617bf5ee429768df2bf50",
    title: "Naglike uure",
    bodyText: "Ek sit in die donker nag\nDis donker hoor net die musiek\nMense wat lag\nLag want hul het 'n goodtime.\nSaam vriende kuier hul\nIn Hogsden en all die kuierplek \nin die weste. \n\nDan begin die gedagte by myself afspeelE\nEkt nooit my jonglewe geniet\nHet teveel gegee vir ander\nOpofferings gemaak\nWat nou nie meer saak maak\n\nJul het my vergeet. \nVergeet van al die seer in my hart\n'n hart wat gebreek is\nen niemand kan dit regmaak\n\nMy gedagtes maal\nsoos n wip plank hoog op\ndan laag teen die grond\nDan kom die besef niemand verstaan my werklik. Is dit omrede ek nie sommer my hart begeertes en my seer met iemand wil deel of is dit net gee op aan mense want mense kan net jou hart breek. \nHul breek jou hart in stukke en jy self kan dit nie weer optel\n\nDie vraag is wil jy aan mense glo of nie. Keuses om te maak en gou ook. ",
    date: "2019-07-06T13:46:07+02:00",
    handle: ""
  },
  {
    id: "5e6617b55ee429768df2bf3b",
    title: "ID",
    bodyText: "Wie is jy anders as die goed wat jy koop? ",
    date: "2020-01-19T21:36:42+02:00",
    handle: ""
  },
  {
    id: "5e6617c15ee429768df2bf54",
    title: "Die Heuwels is Kay",
    bodyText: "K\xF4 ons ry, Karoo toe, gaan sit met n kitaar en \xF1 laptop en maak iets.",
    date: "2019-08-30T10:20:32+02:00",
    handle: "Ahwelgemoed "
  },
  {
    id: "5e6617c15ee429768df2bf55",
    title: "Genade in oog",
    bodyText: "Ek het \u2018n tent opgerigIn die sfere van my sig\nWil jy hier kom bly\nEn rus kom kry?",
    date: "2020-01-09T23:17:45+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617c25ee429768df2bf59",
    title: "Pannekoek gedagtes.",
    bodyText: `Ek staar by die agterdeur uit.
Die weer is genoeg om my depressief te maak.
Ek is eintlik besig om pannekoek te bak.
Ek sien 'n treinbrug in die verte...
Een of ander tik-kop het homself vroe\xEBr die jaar daar gehang. 'n Knoop, en 'n sprong, en hy's weg. Ek onthou, ek kon nog daardie dag die silhoe\xEBt van sy lyk teen die vuil beton sien.
Die pannekoek begin brand.
Ek staar nogsteeds,
En dink aan hoe jy jouself, 6 dae gelede ook vermoor het.
Met 'n enkele "Oukei" en die trek van 'n sneller, is jy weg.
How fucking poetic.`,
    date: "2018-08-09T15:21:14+02:00",
    handle: "Misha Nel"
  },
  {
    id: "5e6617c55ee429768df2bf63",
    title: "Oe van die nag",
    bodyText: "Ek neem jou aan die hand\nOns dans op die maat van musiek\nVir n oomblik kyk ek\nSo diep in jou siel\n\nEk sien die seer\nWat verbloem word\ndeur die mooiste glimlag\n'n lag wat geluk voortbring\n\nDan sien ek die mooi\nin jou raak sonder\ndat jy dit agter kom\nEks weer soos 'n stoute skoolseun\n\nWat gaan met my aan\nEk wou nie dit toe laat\ndat enige een\xA0\nweer na my hart kom\n\nKan ek, Mag ek\nMy kop is deur mekaar\nwant ek nie weet wat\naangaan met my\nIs dit dan net 'n droom.\nTyd sal leer\n\n\n",
    date: "2019-06-18T18:18:45+02:00",
    handle: ""
  },
  {
    id: "5e6617c75ee429768df2bf67",
    title: "Verjaarsdag",
    bodyText: "Hoera hoera nog n jaar\nEk hoop nog jy leef\nDie wereld en sy dinge jou weef\nMag dit skitter\nMag dit flikker\nLaat dit nooit bitter\nAlles wat jy begeer\nDie dag is joune ter eer\n\nVir altyd, '09\nGoeie tye\nH ",
    date: "2019-04-29T13:57:55+02:00",
    handle: "Nee dankie, raai maar"
  },
  {
    id: "5e6617c75ee429768df2bf66",
    title: "intitled",
    bodyText: "Ek is honger\nEksistensie\xEBl\nen Jags",
    date: "2018-07-20T08:24:37+02:00",
    handle: ""
  },
  {
    id: "5e6617d65ee429768df2bf99",
    title: "Soos Ek Wag",
    bodyText: "\u201CThe water sustains me without even tryingThe water can't drown me, I'm doneWith my dying...\u201D - Johnny Flynn",
    date: "2019-09-23T22:43:17+02:00",
    handle: ""
  },
  {
    id: "5e6617c85ee429768df2bf69",
    title: "Wat ons m\xF4re sou doen",
    bodyText: "Ons het m\xF4re oggend van hier afGevliegJohannesburg toe en danPretoria toe gehitchhikeEn daar op \u2018n bank geslaapTussen ou beddegoed en ander menseSe geheimeEn ons het mekaar ontdekEn die verlede ons weer gesienGegroetEn laat gaanOns het oorm\xF4re oggend van daar afTerug gevliegKaap toe en danGladstone Straat toe geuberEn hier op ons vloerKom huil Tussen ons eie beddegoedEn geheime wat ons albei kenEn ons het die huidige ons gesienGehaatEn verwelkom",
    date: "2019-09-16T19:55:37+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617ca5ee429768df2bf72",
    title: "My Gert Poem",
    bodyText: "Hoe het gebeur in twintig nul nege,\xA0Dat ek so gelukkig was?\xA0\nHoe het ek dit reggekry?\xA0\nDalk was dit maklik,\xA0\nmakliker toe.\xA0\nDit was\xA0sparkling\xA0wine\xA0in \u0149\xA0Kadett\xA0se boot langs die see,\xA0\nselfsugtig en aspris.\xA0\nUit ons buike uit bly\xA0\nnet ek en jy.\xA0\nAster, wat het gebeur in daai vyf jaar?\xA0\nDit voel soos iemand anders se storie.\xA0\nDaai jare nou net lyne op my\xA0geheue.\xA0\nWaar is jy nou?\xA0\nWat het gebeur in twintig veertien?\xA0\nHoe het ek dit verdien?\xA0\nToe jy opgee,\xA0\nHoeveel meer moes ek probeer?\xA0\nSien\xA0\nek moes gaan,\xA0\xA0\n\u2018n bed pan ruil en huil.\xA0\nEn jy na \u0149 ander man staar,\xA0\nek moet bedaar\xA0\nBedaar\xA0\nDie aarde eindig,\xA0\nmet jou in sy bakkie na die Paarl\xA0\nen in 30km word ek en jy, jy en hy en ek en sy (ma\u2019 Sy\u2019s weg)\xA0\nHartversaking my voorland\xA0\nIs daar opstanding in die\xA0fuckt-gekneusde vlees?\xA0\nSal jy darem die berig in die koerant by my graf kom lees?\xA0",
    date: "2019-10-01T19:04:12+02:00",
    handle: ""
  },
  {
    id: "5e6617cb5ee429768df2bf76",
    title: "Bewende beeld",
    bodyText: "Vandag was vol dromeVan jou lyf en sagte ledeOmvattend oor my heupeSittend op my bekken(Jy sou nou CPR kon gee)En jou sagte kombers-van-nagOor jou skouers gegooiMet jou rug effens kromVan naderweesbehoeftesBleek borste beide bietjie buitentoe-beeldskoon-En jou maag gevou dwarsDeurJou NaeltjieEn die droom stopElke keer netVoor jy begin beweeg",
    date: "2019-08-02T23:10:33+02:00",
    handle: ""
  },
  {
    id: "5e6617cd5ee429768df2bf7b",
    title: "Oxford | Toets",
    bodyText: "Hulle praat oor Marmite broodjies regs En praat van siektes links Mense Couples Manse en vrouse. En so is dit blykbaar. Almal kry dit? Sukkelend.Het ek? A? ",
    date: "2019-11-09T00:16:19+02:00",
    handle: ""
  },
  {
    id: "5e6617d05ee429768df2bf86",
    title: "lekkerte is op special",
    bodyText: "Ek sal toegee: ek mis die kantoor se Americanos en lekker cappuccino... maar om op re\xEBndae om 10h00 in die kooi te kan l\xEA, beat die beste koffie. \n\nLoshande. ",
    date: "2019-04-04T10:26:24+02:00",
    handle: ""
  },
  {
    id: "5e6617d15ee429768df2bf8a",
    title: "Dis net jy",
    bodyText: "Ek mis jou Franse kat\n",
    date: "2019-08-15T20:37:32+02:00",
    handle: ""
  },
  {
    id: "5e6617815ee429768df2be9c",
    title: "god.",
    bodyText: "die swart onderdrukkinghet \u2018n fisieke vorm in geneembuite my liggaam ek dink nogsteeds teveelin die aande my swart is tasbaar en sy stert krul om my hartseer\ngod, dis troos.",
    date: "2019-09-11T20:03:55+02:00",
    handle: ""
  },
  {
    id: "5e6617825ee429768df2bea0",
    title: "Glo",
    bodyText: "In my gedagtes het die lewe gegaan oor die prag liefde en die samesyn van jonk wees.Vandag is en het ek albei, maar n verlore siel sal mens bly",
    date: "2019-10-17T22:23:24+02:00",
    handle: "verbeeldings.wereld.hartjie"
  },
  {
    id: "5e6617815ee429768df2be9d",
    title: "| |   |\xB0|   | | ",
    bodyText: "Amen. ",
    date: "2019-10-01T23:12:10+02:00",
    handle: ""
  },
  {
    id: "5e6617845ee429768df2bea6",
    title: "breek die re\xEBls",
    bodyText: "as ek by die rooilig staan\nen geen kar kom aan\nwil ek somtyds net ry\nen hoop niemand sien vir my",
    date: "2019-06-21T05:37:01+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6617875ee429768df2beac",
    title: "S\xF3ja. ",
    bodyText: "Jy's mos ook so. \nSo hoe?\nS\xF3, man.\nO, s\xF3? \nJa, pres\xED\xE9s so. \nO, ja.\nEk's ook so. \n\n",
    date: "2018-08-09T13:06:58+02:00",
    handle: "Fokjouanoniem"
  },
  {
    id: "5e6617885ee429768df2beae",
    title: "Wat maak lewe? ",
    bodyText: "Hier is dan twee o\xEB. Twee ore, Een nek, een hart, Twee knie\xEB, Biljoene lae vel, 'n volledige biologie, ast' ware, 'n enkele, volledige biologie. ",
    date: "2019-12-17T22:28:56+02:00",
    handle: ""
  },
  {
    id: "5e66178a5ee429768df2beb6",
    title: "Geboortevlek - John Berke",
    bodyText: 'Jissis ja ek is wit.\nSarkasties: "sien jy dit op my gesig of ryk jy dit aan my klit"\n\nWit pigment geboortevlek,\nNasionale Party oor my lyf gestrek.\n\nEk verstuk aan hierdie born free bullshit\n- hier waar ek op my kakhuis sit \nen masturbeer.\nO Heer!\nRed my.',
    date: "2018-08-06T13:16:55+02:00",
    handle: "johnberkeproduksiesgmail.com"
  },
  {
    id: "5e6617905ee429768df2becc",
    title: "\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F",
    bodyText: "Between 6 and 7 on any giving weekday\xA0\xA0In any chain-takeaway-shop\xA0You\u2019ll find a middle-aged man sitting with\xA0his\xA0head down,\xA0\nwith a corporate logo\xA0embroidered\xA0on\xA0his shirt pocket,\xA0\nfor some plant hire place out in Epping,\xA0\non a\xA02-generation\xA0old smartphone\xA0\naimlessly scrolling,\xA0\xA0\nwaiting\xA0on\xA0un-healthy\xA0food to offer to his un-healthy\xA0family,\xA0\nThat\u2019s my father, and I loved him.\xA0",
    date: "2019-08-13T20:59:59+02:00",
    handle: ""
  },
  {
    id: "5e6617a05ee429768df2befc",
    title: "Familie",
    bodyText: "Aan die einde van ons familie naweek, vang ek \u2018n lift saam met my neef in sy Corsa bakkie. Op pad Potch toe praat ons oor die tattoo\u2019s wat ons wil h\xEA, maar nooit sal kry nie, hy vertel van sy ate\xEFs girlfriend en die eerste keer toe hy cocaine gerook het. Toe ons in Potch aankom het ons \u2018n sigaret gerook en op ons family group gepost:\u201COns is veilig\u2764\uFE0F\u201D.",
    date: "2019-10-24T23:29:43+02:00",
    handle: ""
  },
  {
    id: "5e6617a25ee429768df2bf01",
    title: "Lieflings kind",
    bodyText: "Ek sien jou glimlag'n glimlag van gelukGeluk wat net een keer komKom net vir jouDan sien ek jou woedeWoede wat op bouOp bou tot jy dit nie kan keerJy is my lieflings kind'n Kind met soveel hartseerHartseer wat jy nie vir my kan wegsteekAl probeer jy hoe hard. Jou o\xE9 verklap alleswanneer jou glimlag komSien ek jou o\xE8 blinkWanneer jou woede uitbarsting komSien ek jou o\xE9 verander soos n wilde katSoms verstaan ek jou en soms nie. ",
    date: "2019-07-12T20:57:02+02:00",
    handle: ""
  },
  {
    id: "5e6617a85ee429768df2bf16",
    title: "Met apologie aan Lucas Maree",
    bodyText: "En weer \u02BCn keer\nen weer \u02BCn keer\nen weer\nen nog \u02BCn keer\n\nwaaraan hou ek vas\nen wanneer gaan ek leer? ",
    date: "2019-05-31T22:09:12+02:00",
    handle: ""
  },
  {
    id: "5e6617ab5ee429768df2bf1e",
    title: "Tuin van Eden",
    bodyText: "die viooltjies van my vreeswas fyndie gelaat van jou gesig was reinmet prag &amp; prentjie &amp; prieelskyn jy sag in die Spie\xEBlvan Sy Onbaatsugtige Tuin.",
    date: "2019-10-20T21:33:27+02:00",
    handle: "jancevanrensburg"
  },
  {
    id: "5e6617ac5ee429768df2bf23",
    title: "Ilmefl",
    bodyText: "I love my empty fucking life.",
    date: "2020-02-05T20:42:31+02:00",
    handle: ""
  },
  {
    id: "5e6617b35ee429768df2bf35",
    title: "Oplossing. ",
    bodyText: "Dog is dit van self sprekend dat daar nie 'n oplossing vir mens wees is nie. \nOns los op die dag wat ons fisies in die stof in smelt.\n\nOns boor tot dit afgesaag raak. \nTot die wittebrood verby is. \nTot dat net die kak en kont gemeng op die matras bly l\xEA. \nWaar jy in die agtermiddag jou siel verkrag.\n\nTot \u2018n nuwe stukkie vleis jou bekoor en oortuig dat daar inderdaad \u2018n oplossing is.\n\nDan naai ons weer tot dit afgesaag is,\nEn verkrag jou psige met skuldgevoel daarby.\nTot jy jou piel moet hard dink en jou semen moet uitbid. \n\nEn die enigste oplossing is om jouself in die stof van die aarde in te forseer. \n\nDit alles met die wete dat daar nie \u2018n oplossing is,\n\nNie vir die stuk kak, \nWat mens, mens genoem het nie. \n\nJy was nooit \u2018n mens nie. ",
    date: "2019-01-17T03:48:15+02:00",
    handle: "blignaultwienand"
  },
  {
    id: "5e6617b45ee429768df2bf38",
    title: "2019",
    bodyText: "Jou bluetooth speaker is nog in my paired devices. ",
    date: "2019-01-22T13:27:25+02:00",
    handle: "Ahwelgemoed"
  },
  {
    id: "5e6617b45ee429768df2bf39",
    title: "Reese Witherspoon was 14",
    bodyText: "Loop almal met daai gevoel wat jou laat dink jy gaan nog eendag famous word?\n\nEk is nou amper 21. \n\nEk het eergister \u2018n Magnum by Pick n Pay gewen.",
    date: "2018-12-03T23:01:13+02:00",
    handle: ""
  },
  {
    id: "5e6617c05ee429768df2bf51",
    title: "die moordenaar van miere",
    bodyText: "die plaagdoder is groter as wat ons al ooit van tevore gedink het dit is. ons het opgefok in die gedruis van klomp worsmasjien mense wat stagneer by die ideale kulture van menswees en die obskure observasie van die self in die self. moenie lief wees vir my nie, maar wees daar vir my. moenie aan my dink nie, maar net soms as jy alleen reis dink daaroor. in die koninkryk van die miere het die miere een vir een begin wegloop, in die oorloggedrewe w\xEAreld in, hardloop hul dit in met hul broeke op hul kne\xEB, maar \xF1 paar het oorleef en dit was goed. teen die vlees van liggaam op geklim en begin intrek in die vlees se hart. soms dink ek jy is \xF1 moordenaar van miere",
    date: "2019-05-02T00:13:44+02:00",
    handle: "paula_stxphxnie_kruger"
  },
  {
    id: "5e6617c25ee429768df2bf58",
    title: "First impressions",
    bodyText: "A mind full of conversation starters\nYou knew exactly what you should say\nAnd yet,\nShe left you speechless.",
    date: "2019-03-29T11:27:17+02:00",
    handle: ""
  },
  {
    id: "5e6617c95ee429768df2bf6e",
    title: "Matchmaker, matchmaker ",
    bodyText: "lief \u2260 lus,dusnee",
    date: "2019-07-29T21:30:27+02:00",
    handle: ""
  },
  {
    id: "5e66178a5ee429768df2beb3",
    title: "god in die kultuurnorm",
    bodyText: "Vrou. Daai woord word gespoeg met soveel minagtingDalk dink ek soos \u2018n man en nie soos \u2018n vrou nieDis sekerlik hoekom ek my hare soos \u2018n man s\u2019n draOf t-shirts, flannels en converse aanhetDis oukei dat jy gedink het ek is dieselfde geslag as jy, seun. Die kultuurnorm sal jou leer:dan kan jy besluit of dit jou opvoed en of jy deel gaan vorm van die rewolusie",
    date: "2019-10-29T10:17:35+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617cb5ee429768df2bf75",
    title: "You should've been the one that got away",
    bodyText: "I should've listened to my heart\nI should've gotten out early\nI should've said no\nI should've known better \nBut I didn't \nAnd you chose to stay \nJust to create my hell, forge the prison for my passions and leave the festering scars for me to bed now, every night",
    date: "2019-07-10T22:49:17+02:00",
    handle: ""
  },
  {
    id: "5e6617905ee429768df2becb",
    title: "diagnose: gewillige slagoffer",
    bodyText: "van jou BPD tipe liefde ",
    date: "2019-10-03T21:52:18+02:00",
    handle: ""
  },
  {
    id: "5e6617cc5ee429768df2bf77",
    title: ".",
    bodyText: "_ 11 - 13 Church Street _",
    date: "2019-03-09T08:55:13+02:00",
    handle: ""
  },
  {
    id: "5e6617925ee429768df2bed1",
    title: "\u{1F590}",
    bodyText: "Hallo ander een. ",
    date: "2019-12-14T23:19:18+02:00",
    handle: ""
  },
  {
    id: "5e6617ce5ee429768df2bf7e",
    title: "Ek sal altyd m\xF4re met iets begin. ",
    bodyText: "Jy\u2019t my in graad 8 gesoen op \u2018n ander ou se plaas een middag na skool toe die son sak. \n\nEk was simpel en het die ander ou gekies. Veertienjariges, jy weet . . .\n\nJy is vir baie die guy-next-door en, O, so cool.\n\n Jy\u2019s skielik dood. Fratsongeluk op \u2018n 4-wiel in Amerika op 28 jaar oud. \n\nOns almal leef as of ons vir ewig gaan leef, so ons leef nie regtig nie. \n\nOns almal se timing is, O, so fokken uit.",
    date: "2019-06-18T10:03:51+02:00",
    handle: ""
  },
  {
    id: "5e6617975ee429768df2bee0",
    title: "Vriendelike Vreemdelinge",
    bodyText: "Boesemvriende, maar sou jy my groet as ek vandag langs jou in die straat verby stap? Seker nie...\n\nJou Kaapstad-cool is ver verby ons klein-dorpie grootword houding. Is ek nie meer goed genoeg vir jou nie? Seker nie...\n\nDie mense hier praat te veel, doen te min. My ma ken jou ma, en dit like jy mos nie. Sal ons te veel oor jou skinder? Seker...\n\nTog dink ek terug aan ons grootword jare. Hoe ons kon speel, stories opmaak en mekaar se huise die beste kuierplek was. \n\nNou kyk ek slegs jou Instagram stories, en wonder of jy nog ooit dieselfde sentiment deel. \n\nSeker nie...\n\n",
    date: "2019-03-13T17:50:36+02:00",
    handle: ""
  },
  {
    id: "5e6617ce5ee429768df2bf80",
    title: "Tyd het aan gestap",
    bodyText: "Ek sien jou in die hoek van my oogRooi  hemp en al en staar in die verteMusiek wat speel Juan Coetzee wat sing in n kroegMusiek van happy timesWonder wat in jou gedagtes aan gaanDink aan my jeug tydGeen wonder ekt so baie uit gemisAan my jong daeVan kinsbeen af verantwoordelikheid gevat vir almal om myBehalwe vir myselfTyd het aan gestapGrys en kry nou eers tyd vir myselfGebruik my tyd vir my alleenDie tyd het gekom om te begin leweLewe vir myselfDink net aan wat ek wil he in die leweTyd om happy te wees. Tyd om weer my hart oop te maakVir iemand wat my sal lief henet vir my. Vergeet van wat was en dink aan dit wat is. Lewe is kort geniet the momennt",
    date: "2019-12-21T21:33:55+02:00",
    handle: ""
  },
  {
    id: "5e6617aa5ee429768df2bf1b",
    title: "Alles Nou",
    bodyText: "Alles nou, maar niks maak saak.",
    date: "2018-08-13T17:06:12+02:00",
    handle: ""
  },
  {
    id: "5e6617cf5ee429768df2bf84",
    title: "naby + ver ",
    bodyText: "jy was te ver om oor om te gee. heerlik seer hoe Groot jy nou, naby is.",
    date: "2018-07-23T01:01:26+02:00",
    handle: ""
  },
  {
    id: "5e6617ab5ee429768df2bf1d",
    title: "Dronk gesprek/geveg",
    bodyText: "Ek praat in sirkels\nDog eindig ek op in 'n hoek",
    date: "2018-11-09T12:53:52+02:00",
    handle: ""
  },
  {
    id: "5e6617ad5ee429768df2bf26",
    title: "Tos",
    bodyText: "Hierdie is bloot net 'n platform vir 'n klomp mensies wat tog te fokken diep is en hulle kak gedagtes poetry noem. Hou so aan. ",
    date: "2019-10-08T18:06:26+02:00",
    handle: ""
  },
  {
    id: "5e6617b05ee429768df2bf30",
    title: "\u2018n whatsapp",
    bodyText: "Skuus, ek\u2019t vanoggend jou oproep gemis. Ek hoop jy\u2019t al \u2018n glas wyn gegooi. En nog een, sodat die ander hand ook kan besig bly. ",
    date: "2018-08-23T18:04:37+02:00",
    handle: ""
  },
  {
    id: "5e6617b15ee429768df2bf33",
    title: "Die probleem met expats",
    bodyText: "As jy tussen die ouderdom 23 - 35 is, het jy waarskynlik die volgende al beleef:\n'n Vriend wat oorsee gaan Engels gee\n'n Vriend wat hul Meesters oorsee gaan doen\n'n Vriend wat gaan gap jaar/dinge uitfigure buite die grense van SA\n\nEn jy het ook al die volgende klagtes gehoor:\nKla oor braaivleis en braaibroodjies mis\nKla oor alleen voel\nKla oor 'n effektiewe openbare vervoerstelsel te probeer bemeester\n(Meanwhile is al jou probleme, as 'n nie-expat, te banaal en voorspelbaar)\n\nEn jy moes na die volgende luister:\nHoe bly hul is om nie met die korrupsie en politiek in SA te moet deal nie\nHoe hul naweke sommer oor-pop na 'n ander land\nHoe hul nooit weer wil terugkom nie\n\nLaastens:\nHoe jy 'n Excel/Google doc moet invul as hul kom kuier sodat jy jou tydgleuf kan bespreek om hul te sien\nHoe jy en jou voertuig op standby moet wees vir lifts\nHoe jy hul gewete en identiteitskrisis moet sus met die gerusstelling dat hul steeds 'n Suid-Afrikaner sal bly (al is hul hartsbegeerte om met 'n Europese paspoort te trou)\n\nEk is gatvol vir expats wat jou kak laat voel oor jy in SA bly en terselftertyd jou vriendskap en spaar slaapkamer op baie kort kennisgewing misbruik.\n",
    date: "2020-03-03T16:16:57+02:00",
    handle: ""
  },
  {
    id: "5e6617b75ee429768df2bf40",
    title: "Skuus",
    bodyText: "Elke droom is net n verloor verhaal",
    date: "2018-12-18T14:36:00+02:00",
    handle: ""
  },
  {
    id: "5e6617cb5ee429768df2bf73",
    title: "NGK ",
    bodyText: "Stop.\nAsem in \nAsem uit. \nHoekom? \nWatter rol speel hulle? \nWaar is die OpperJy? \nHaal asem. \nOntspan. \nIs wat ek nou beleef universie\xEBl waar\nOf net vir my? \nWaar kom hierdie gevoel vandaan? \nWat trigger hierdie ongemak? \nHierdie kil haat en \nWarm snoesgevoel. \nEmosie is nie waarheid nie.\nEmosie is nie waarheid nie.\nEmosie is nie waarheid nie. \n\nAsem in \nAsem uit. \nStop.\n\n",
    date: "2019-04-15T00:57:56+02:00",
    handle: ""
  },
  {
    id: "5e6617d25ee429768df2bf8b",
    title: "Fantasie oor die einde",
    bodyText: "Sy het haar kat by nuwe, liefdevolle mense gaan aflewer\nEn toe al haar anti-depressante en pynpille met cheap rooiwyn gedrink",
    date: "2020-01-14T20:40:28+02:00",
    handle: ""
  },
  {
    id: "5e6617855ee429768df2bea7",
    title: "Die liefde in my",
    bodyText: "Dis altyd jy, net altyd jy,\ndie een gedagte bly my by\nsoos skadu's onder bome bly,\nnet altyd jy, net altyd jy.\n\nLangs baie we\xEB gaan my smart,\nblind is my o\xEB en verward,\nis alle dinge in my hart.\n\nMaar dit sal een en enkeld bly,\nen aards en diep sy laafnis kry,\nal staan dit winter, kaal in my,\ndie liefde in my, die liefde in my.",
    date: "2018-07-19T16:14:14+02:00",
    handle: "NPvanwyklouw"
  },
  {
    id: "5e6617895ee429768df2beb2",
    title: "\u{1F644} vir myself",
    bodyText: "Ek hou daarvan om my lesse op die h\xE1rde manier te leerElkeFokkenKeer",
    date: "2019-11-22T18:36:35+02:00",
    handle: ""
  },
  {
    id: "5e66178e5ee429768df2bec2",
    title: "Zen + detachment",
    bodyText: "Verloor VerloorVerloorIs dit dan al waarvoor ons bestem is in Life 1.0? ",
    date: "2020-02-08T01:01:12+02:00",
    handle: ""
  },
  {
    id: "5e66178f5ee429768df2bec6",
    title: "2019",
    bodyText: "Hoe moet ek jou lief he? Jy\u2019t \u2018n Yahoo email",
    date: "2019-08-18T13:54:12+02:00",
    handle: ""
  },
  {
    id: "5e6617925ee429768df2bed2",
    title: "Note to self",
    bodyText: "Waarmee is jy besig?",
    date: "2019-10-11T10:23:36+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6617955ee429768df2bedb",
    title: "Saggies praat",
    bodyText: "Weet jy dat ek steeds oor jou skryf?Dat ek al vele kere hierdie geheim wou deel, maar dat ek 'n tipe irrasionele hoop het vir wat dan sou gebeur?Want dan gee dit weer 'n kans vir jou om te manipuleer, om seer te maak en my van voor af te breekEn ek wil die jaar probeer heel bly",
    date: "2020-01-04T22:52:44+02:00",
    handle: ""
  },
  {
    id: "5e66179c5ee429768df2bef0",
    title: "Drie-nie-so-enige, god",
    bodyText: "dis sy en hyook is daar ekowerspeldrie deelnemerstwee wennersen ek verlooral die pad in derde plek",
    date: "2019-09-14T16:21:59+02:00",
    handle: ""
  },
  {
    id: "5e66179e5ee429768df2bef3",
    title: "'n Grap is 'n grap, maar...",
    bodyText: "Daar is nie 'n vloer bokant my waarop hardhandige bure kan rondsloeg nie. \n\nDaar is ook nie bure wat langs my harde musiek speel of uitermatig hard praat nie. \n\nDaar is nie mense in my blok wat skree of luide meningsverskille het nie. \n\nMaar hier is 'n lewende ding wat die snork van 'n vasgepende fokken varkbeer het. Links, regs of onder. Dit dreun deur vloer en muur. Murg en pyp. \n\n\nJirre. L\xEA hom asseblief tog net dood. ",
    date: "2019-08-22T00:41:34+02:00",
    handle: "Verbatim"
  },
  {
    id: "5e66179e5ee429768df2bef4",
    title: "Op Instagram gesien",
    bodyText: "Twee stukke kleiEk en jyOnderskeidelikTeen mekaar gedruk en gebreiProbeer hul nou skeiEen gaan met meer agterblyEn een met minderOns grense het verdofDaarvoor bring ek lofAan die Pottemaker wat sit Tussen meubels bedek met lakensOnder sentiment en stofGod weet ek is verwardWaarom sal liefde s\xF3 gemaak wees?",
    date: "2019-07-28T00:28:12+02:00",
    handle: ""
  },
  {
    id: "5e66179f5ee429768df2bef9",
    title: ". ",
    bodyText: "Jy was \xF1 veertjie wat ek in my hare gedruk het.\nDie mense het ges\xEA: ag dis te pragtig, en ek't saggies aan jou gevat. \n\nkort-kort gevoel of jy daar is\n\nJy was \xF1 skulpie wat op my bedkassie gel\xEA het. \nEffens pronkend, tog onskuldig, \nen ek't skaamteloos vir jou gekyk. \n\nkort-kort gewonder of jy waar is",
    date: "2018-12-03T13:45:10+02:00",
    handle: "natani_jacobs"
  },
  {
    id: "5e6617a05ee429768df2befb",
    title: "To The Moon & Back",
    bodyText: "You held me in the palm of your hand, but then you threw me to the sky. So I landed among the stars and they told me not to cry. Now I see you staring at the moon, wondering what it whispers in my ear. You're wishing it was you instead, and that I was near. I know you miss me, but there's something you need to know. You should've held me in the palm of your hand, and never let me go.",
    date: "2018-12-25T07:22:53+02:00",
    handle: ""
  },
  {
    id: "5e6617a15ee429768df2beff",
    title: "weer",
    bodyText: "en op 'n ligter noot, die son skyn vandag, al-fokken-weer.",
    date: "2019-07-09T08:26:17+02:00",
    handle: ""
  },
  {
    id: "5e6617aa5ee429768df2bf1a",
    title: "2 x Somnil voor slaaptyd",
    bodyText: "Dit bekruip jou\nSagvoets \nOp pofferkussingtjies \nSluip sy nader wanneer jy nie kyk nie \nVan agter \nPilare\nMense\nAksies en \nBeloftes\n\nEn skielik, \nFlap! Flim! Flop! \nHet sy jou vas\nHaar doffel oondhandskoen bulte\nVerdoof jou \nFlap stadiger \nEn stadiger\n\nJou o\xEB raak dowwer en droe\xEBr\nEn soos die lewe jou verlaat maak\nDie hemelpoorte van \nSoete slaap voor jou oop. \n\nIn jou hande gee ek my verstand oor.\n",
    date: "2019-05-06T00:10:56+02:00",
    handle: "Evertesterhuizen"
  },
  {
    id: "5e6617c05ee429768df2bf52",
    title: "Is dit al?",
    bodyText: "Ek hoop nie so nie...",
    date: "2019-04-11T20:49:36+02:00",
    handle: ""
  },
  {
    id: "5e6617d05ee429768df2bf87",
    title: "Kapoet",
    bodyText: "Wanneer jy moeg is en slaap is nie die antwoord.",
    date: "2019-06-04T18:45:12+02:00",
    handle: ""
  },
  {
    id: "5e6617d65ee429768df2bf9a",
    title: "m a a n d a g ",
    bodyText: "Hoekom is hierdie goed so moeilik om te doen? Simpel goed. Bank app. OM uitbetaling. Huur. Lisensie. Telkom. Uber. \n\nDie groot goed. Maar tog so klein. Onmoontlik. Maar eintlik binne bereik. Katastrofies daarsonder. Te onhaalbaar vir nou. ",
    date: "2019-07-01T07:59:37+02:00",
    handle: ""
  },
  {
    id: "5e6617875ee429768df2beab",
    title: "Wil jy my terug h\xEA",
    bodyText: "Is hierdie net die ekwivalent van 'n Ho\xEBrskool facebook satus?\n'Ek is lief vir jou en wil net vir jou h\xEA'\nWas dinge eenvoudiger dan? Ek dink nie so nie. ",
    date: "2019-06-28T22:29:12+02:00",
    handle: ""
  },
  {
    id: "5e66178b5ee429768df2beb8",
    title: "Teleur (Terreur)",
    bodyText: "Ek sal seker moet vrede maakmet jou.Jou innooi en uitnooiom langs my op die bank te kom sit.Na jou rasperstem luister.Net wanneer ek moed hetom die w\xEAreld in die o\xEB te kykkom klop jy weeraan my fokken deur.So have it your waykom stel my weer teleur",
    date: "2019-08-29T08:34:22+02:00",
    handle: ""
  },
  {
    id: "5e66178c5ee429768df2bebc",
    title: "Bethlehem bar",
    bodyText: "ek het verlief geraak\nin 'n bar\nerens in Bethlehem. ",
    date: "2019-12-16T00:32:11+02:00",
    handle: "ankespies"
  },
  {
    id: "5e6617905ee429768df2bec9",
    title: "alweer",
    bodyText: "Alles begin more weer",
    date: "2020-02-23T21:27:45+02:00",
    handle: ""
  },
  {
    id: "5e6617915ee429768df2bece",
    title: "\u{1F635}",
    bodyText: "Het Grace Kelly ooit aambeie gekry? \n\n\n\n\n\n    ",
    date: "2018-12-19T21:13:11+02:00",
    handle: ""
  },
  {
    id: "5e66179b5ee429768df2beee",
    title: "Tafelmaat",
    bodyText: "Ek hoop hierdie laat jou glimlag.",
    date: "2019-04-23T23:16:15+02:00",
    handle: ""
  },
  {
    id: "5e66179f5ee429768df2bef7",
    title: "Dronkverdriet",
    bodyText: "My liedereGeskryf as gevolg van jouSes jaar en jy is nou eers hierVir n oomblik was dit hemelsEn nou die verkeerde rigting",
    date: "2020-01-14T00:15:29+02:00",
    handle: ""
  },
  {
    id: "5e6617a25ee429768df2bf02",
    title: "2",
    bodyText: "_ Moenie my weer kontak nie. Te ver die keer. Gaan aan met jou lewe. _",
    date: "2019-04-06T20:02:48+02:00",
    handle: ""
  },
  {
    id: "5e6617a45ee429768df2bf09",
    title: "Dalk, eendag m\xF4re",
    bodyText: "Ek wil binnekort my boeke nog een keer uitpak; terugsit met 'n dieptevrede sug en weet: hierdie was nou die l\xE1\xE1ste keer. Maar dan droom ek ook van 'n boheemse leefstyl in Nederland of nog 'n graad (in die letterkunde) en rooi ligte en nat weerkaatsings. \n",
    date: "2018-07-19T21:31:01+02:00",
    handle: ""
  },
  {
    id: "5e6617a65ee429768df2bf0d",
    title: "piep-piep",
    bodyText: "Ek voel klein by jou",
    date: "2018-10-17T23:38:59+02:00",
    handle: ""
  },
  {
    id: "5e6617a85ee429768df2bf15",
    title: "Fucking mermaid.",
    bodyText: "When did you get tangled up into my thoughts?\nWhy am I searching for you across a room?\nFuck. \nIts all sin from here. ",
    date: "2019-02-27T16:31:59+02:00",
    handle: ""
  },
  {
    id: "5e6617ab5ee429768df2bf20",
    title: "postnet",
    bodyText: "pakkies pos en poetry plaasdis al wat oorbly van onsof eerder van mywant jy's synemoes ek jou dan ook wou besit?",
    date: "2019-12-10T21:12:08+02:00",
    handle: ""
  },
  {
    id: "5e6617ae5ee429768df2bf28",
    title: "steeds snot en trane",
    bodyText: "huil ek asof ons 'n kans gestaan het ",
    date: "2019-12-16T19:49:19+02:00",
    handle: ""
  },
  {
    id: "5e6617b35ee429768df2bf36",
    title: "T? ",
    bodyText: "Tee sakkies in n paring gehegSal hom skeur en terug forseerLelik gedruk tussen die resLater se probleem",
    date: "2019-08-07T13:31:51+02:00",
    handle: "brave.as.a.bear"
  },
  {
    id: "5e6617b35ee429768df2bf37",
    title: "Git",
    bodyText: "Ek wonder oor kinders,Hoe die ander kan,En of ek ooit sal kan,Of ooit moet.Ek breek vir die wat moet maar nie kan nie,En dan is daar die wat dalk moes wag, maar wat teel soos CTM.",
    date: "2020-01-20T20:32:20+02:00",
    handle: ""
  },
  {
    id: "5e6617b55ee429768df2bf3a",
    title: "Ek sien jou raak",
    bodyText: `Ek sien jou raak met jou bloed rooi hemp en denim broekieAl dink jy ek sien  jou nie raak ek doenJys alleen en eensaam nes ekEk sien hoe jy wil dans op maat van musiek. Ek kan net begeer om saam jou te dans op die maat van musiek.Jy drink stadig aan jou drankie en steek 'n siggaret op en blaas die rook in die verteMy o\xE8 kyk skelmpies na jou en ek sien hoe jy dieselfde doen. Ons o\xE8 meet tog al besef jy dit nie ek doenWatter prag van 'n siel is jy nieEk begeer om jou vas te houMy hand in joune voelEk begeer om jou sagkuns op jou sagte wang "n soen te gee wat jy nooit sal vergeetOm jou hart klop te voel teen myne'n gevoel van geluk.Jou o\xEB is donker bruinEk sien hoe jy uit staar in die verte en verlang na liefde'n hoop dat iemand jou sal raak sien Ek doen, ek wil jou in my arms vatJou vas hou en met 'n sagte stem s\xEA ek verstaan Ek wil diep in jou donker o\xE9 kykJou die versekering gee jys veiligIn my arms. Jy kan jou trane stort ek sal dit weg vee.Om eensaam te wees is nie vir jou beskore nie. Ek wil jou styf vas hou en jou hartklop hoor teenoor myne. Ek wil wakker word met jou in my arms en jou kop op my borskas.Tyd sal jou genees van eensaamheid ek sal daar wees vir jou en jou alleen. Ek sal jou styf vashou en jou lief h\xEA vir wie jy is Solank jy my lief het.`,
    date: "2019-12-21T23:20:53+02:00",
    handle: ""
  },
  {
    id: "5e6617b65ee429768df2bf3f",
    title: "Stellen-los (2017)",
    bodyText: "Skoon en koue aande, amper tasbaar amper breekbaar\xA0loer en rumoer jou die dorp binne\xA0Die\xA0kaggel\xA0by De Akker\xA0fluister\xA0jou\xA0oop\xA0\nen\xA0tussen\xA0die\xA0rondtes\xA0verloor\xA0jy\xA0al\xA0jou\xA0verantwoordelikhede\xA0en hoop.\xA0\n-\xA0\nDit\xA0voel\xA0weer\xA0soos\xA0die\xA0eerste\xA0keer\xA0\nGeen\xA0geheue\xA0van seer of\xA0skree\xA0\nNiks\xA0om\xA0te\xA0vermy\xA0\nmeer,\xA0meer,\xA0meer\xA0\n-\xA0\nGeniet\xA0jy\xA0ons\xA0tye\xA0saam\xA0soveel\xA0soos\xA0ekke? (Addendum, Nee)\xA0\nEk was so\xA0verdwaald, so\xA0alleen,\xA0hier\xA0waar\xA0ons\xA0nou\xA0sit.\xA0\nBekeer\xA0jy my verlede.\xA0\nEk\xA0wil\xA0jou\xA0die\xA0kortpad\xA0wys\xA0Checkers\xA0toe,\xA0\nagter\xA0die\xA0toy-museum,\xA0daar\xA0by die\xA0\ntrou-chapel\xA0verby\xA0en die\xA0woord\xA0liefde\xA0vermy\xA0\n-\xA0\nJou\xA0asem\xA0wegvat\xA0met die\xA0alledaagse\xA0\nIets\xA0in\xA0jou\xA0voel\xA0bekend,\xA0ek\u2019t\xA0dit\xA0al\xA0ervaar,\xA0somewhere\xA0\nJy dra al die ken- en kneus merke van \u2018n begin,\xA0\nEk\u2019s verslaaf aan hoe seer di\xE9 my gaan maak.\xA0",
    date: "2019-10-02T09:13:48+02:00",
    handle: ""
  },
  {
    id: "5e6617be5ee429768df2bf4b",
    title: "ek dink aan jou",
    bodyText: "Daar is twee weergawes oor hoe ons ontmoet het. Dit maak dit moeilik om vir mense te vertel as hulle vra.\n\nI.\nDit was \u2018n leegerige en nogal kak club, in my eerste week van eerste jaar. \u2018n Trance party en ek het gegaan saam mense wie ek aan vasgeklou het in \u2018n probeerslag om vriende te maak. Dis moeilik gewees want al my vriende is Potch of Maties toe en ek het niemand geken nie. Ons het duur shots gekoop, want ons ken van niks beter nie, en die een girl het ges\xEA sy wonder waar ons dagga sou kon opspoor vir eendag. Ekt eers vir jou RichBoy Joburg vriend gesien, gesels (of altans probeer maar hy was befok en het met bome kommunikeer) en toe na jou toe. Ek het vriendelik en preppy probeer klink, en  ges\xEA ek en my vriendin wonder waar om weed te kry. Ek kan nie onthou hoekom ek aanvanklik gedink het jy sal weet nie, maar ek sit die skuld maar nou net op die feit dat jy die vibe het van iemand wat sal weet waar om te kry. Jy was ook op shrooms, maar kalmer, net besig om by \u2018n baie a shitty bankie \u2018n handgerolde sigaret te rook (jy rook meestal net handgerolde sigarette \u2013 dis common back home in cape town, maar ek ken net van rebelse tieners wat kak pall malls rook om hulle ouers te spite so dis \u2018n nuwe konsep vir my). Ons gesels bietjie, die girl wat zol gesoek het s\xEA skielik sy wou nooit gehad het nie dis net ek. Ek voel asof ek stupid lyk maar jys nice en ons praat lekker. Ek bly ook nie lank nie, want die vibe is dood en gaan terug koshuis toe. \nLater, is dit vir my byna po\xEBties dat ek na jou toe gekom het in \u2018n shrooms trip. Shrooms is vir jou \u2018n spiritual experience al is jy \u2018n ati\xEBis. In my geheimste drome voel ek dit maak my \u2018n engel of \u2018n fe\xEB of \u2018n manic pixie dreamgirl of \u2018n ding. \n\nII. \nDis die Saterdag daarna, ons is by \u2018n universiteits initiatief wat ontwerp is om die eerste jaars besig te hou sodat hulle nie hulle polse afkou van die ellende nie. Dis \u2018n community engagement promo en ons moet in \u2018n groep take voltooi (besig hou kak). Jy is in my groep in gedeel. \u2018n Mislike dag met grys op grys, maar jou hare is lank en goud en jy straal soos my eie soort engel. Ons loop en praat die oggend om en ek dink by myself, my fok hys cool. Daars nie gedagtes oor wat kan gebeur nie, en ek dink partykeer dit help want nou maak ek nie of ek enige iets is behalwe myself nie. \nJys ook in my eetsaal gewees en ons h\xEA ons maaltye saam (nie alleen nie, maar saam met \u2019n spul ander). Die aand nooi jy my vir die beloofde dagga. Die keer daarna stap jy saam met my Pick \u2018n Pay toe oor ek aandring dat ek \u2018n blok kaas wil koop en eet soos \u2018n toebroodjie. Jy luister die hele pad hoe ek praat oor Koos Kombuis se \u201CSuidpunt \u2013 Jazz\u201D en geloof en die huis en simpel kak. Jy luister aandagtig soos ek net aframmel. \nMy lief, die man van eindlose geduld. Altyd still, altyd daar.  \n\n",
    date: "2018-11-21T12:05:23+02:00",
    handle: "cx_lyb"
  },
  {
    id: "5e6617c45ee429768df2bf5f",
    title: "Dit maak my bly ",
    bodyText: "Ek het fairy lights gekry. Ja, daar is kak wat aangaan in die wye grote w\xEAreld: b\xE1ie kak. Maar ek het weer fokken fairy lights. ",
    date: "2019-09-08T21:21:54+02:00",
    handle: ""
  },
  {
    id: "5e6617c55ee429768df2bf61",
    title: "Fees van die ongenooides",
    bodyText: "Saterdagaand\nEn nie genooi nie\n",
    date: "2019-03-23T21:40:00+02:00",
    handle: ""
  },
  {
    id: "5e6617cc5ee429768df2bf78",
    title: "We're dreaming",
    bodyText: `Sing to meEven if I don't have you
Saying that it's forever
Running through my mind in circles
But this time
Everything will work out fine
You had me at tears
Something I longed
That kind love
Maybe I've never met you 
How can I explain... 
That blue kinda shade
    Is it okay to say 
    "I love you."`,
    date: "2020-02-26T21:23:11+02:00",
    handle: ""
  },
  {
    id: "5e6617cd5ee429768df2bf7a",
    title: "Naked",
    bodyText: "Clothes drop to the floor so that your\neyes gaze upon my \nsmooth, freckled, pale, bumpy, soft, scarred\nskin and see how whole and broken I am.",
    date: "2019-01-27T17:05:27+02:00",
    handle: ""
  },
  {
    id: "5e6617cf5ee429768df2bf81",
    title: "\u{1F346}",
    bodyText: "Ek glo in jou",
    date: "2018-11-01T10:53:22+02:00",
    handle: ""
  },
  {
    id: "5e6617825ee429768df2bea2",
    title: "god.",
    bodyText: "Daar word deesdae teveel geskryf oor \u2018n romantiese hartbreek, liefde maak en \u2018n genadigde god (voeg hierin: Bouwer se opinies oor gay huwelike, of politieke gesprekke - of \u2018n ander leeksituasie) Daar word te min geskryf oor slegte seks, die NG-kerk se gesprekke oor \u201Cgay huwelike\u201D, hoe fokken moeilik dit is om liberaal te wees in Potchefstroom en vrouwees (het ek slegte seks genoem reeds?)",
    date: "2019-10-07T09:21:29+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617885ee429768df2beaf",
    title: "The Scourge of War",
    bodyText: "War is an easy thing to talk about. \nWhat fools we are to live in a generation for which war is a computer game for our children and just another interesting news item. \n\nDon't families weep when children die? \nDoesn't bombing strengthen their determination?\n",
    date: "2020-01-12T07:52:25+02:00",
    handle: ""
  },
  {
    id: "5e6617915ee429768df2becf",
    title: ".",
    bodyText: "Die skrif is aan die muur. Wederom. ",
    date: "2019-05-14T19:27:12+02:00",
    handle: ""
  },
  {
    id: "5e6617945ee429768df2bed7",
    title: "Assessering by 'n haarkapper. ",
    bodyText: "Uitslag: Positief\nAfkoelperiode: 7de - 23ste Desember '19\nInsigte bekom: Alternatief konserwatief\nGeloofsinsigte: Min tot geen \nPartye Betrokke: __ + ___ \n\nRede 1: Behoefte aan gedeelde kameraderie.\nRede 2: Behoefte aan wilde geanimeerde omgang.\nVersoek 1: Refleksietyd. Ondersoek van motiewe tot behoefte aan verbintenis. \nVersoek 2: Omgangsintensiteit hersiening en sterk behoefte aan gedeelde belangstellings. \n\nTwee biologi\xEB. Dis nie s\xF3 maklik nie, maar blyk al meer die moeite werd te wees. ",
    date: "2019-12-23T22:28:28+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617965ee429768df2bede",
    title: "city lights ",
    bodyText: "lost in a sea of self\ni forget \nand float away \na lone \npaper lantern \ndrowned \nby the night sky\n",
    date: "2019-06-03T07:05:38+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e66179a5ee429768df2bee9",
    title: "Groenletters",
    bodyText: 'klaar ge-\nblue\ntick en alles\n\ndan tik ek\nsommer\nLigkvogihdhfjdgsds\nen laat prut\nnet om jou gat te krap \nen soms\ndan doen jy \npresies wat ek wil h\xEA:\n\n"hey" \n',
    date: "2019-05-27T23:09:25+02:00",
    handle: ""
  },
  {
    id: "5e66179e5ee429768df2bef6",
    title: "trappe van vergelyke",
    bodyText: "see\nseer\nseerower",
    date: "2018-08-21T18:09:15+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6617a55ee429768df2bf0c",
    title: "What a time to be alive/ You coulda had a bad bitch",
    bodyText: "Blue ticked op WhatsApp Maar jy kyk my Instastorie, So toe stuur ek maar 'n memeSommer so op die gram En jy laat dit op seen. Truth Hurts van LizzoIs nou my scene. ",
    date: "2019-08-31T08:07:54+02:00",
    handle: ""
  },
  {
    id: "5e6617af5ee429768df2bf2d",
    title: "Raai wat? ",
    bodyText: "Iemand het ges\xEAek moeteerder skryf as teken.En?Ek het vandag weergeteken. ",
    date: "2019-11-11T19:48:00+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617af5ee429768df2bf2e",
    title: "Heil'ge Hoender Chicken Stripper ",
    bodyText: "Ek wil 'n gedig oor daardie plek se d\xF4nners perfekte chicken strips skryf. Maar daai nuggets of gold laat my sonder woorde. Al wat ek oor het is olieieduime en nat o\xEB. En my hele hart. Siel. En lippe. Smaakkoppies. En elke smaak reseptor en verwerker hierbinne. \n\nHou jou appels, hou jou pere. Steek weg die hooglied bulte en vou toe die snormossel geure. Chicken strips in Durbanville Checkers: gooi oop jou heilige deure! \n\nSela. ",
    date: "2019-06-25T21:11:15+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617b25ee429768df2bf34",
    title: "Ek glo ",
    bodyText: "ek glo nie huwelike nieof die kerk nieveral nie die NG nieselfs nie in God nieveral nie die Christen een nieen ook nie etikettering niemaar ek glo in Liefdein enige vormek glo",
    date: "2019-10-07T11:10:23+02:00",
    handle: ""
  },
  {
    id: "5e6617b65ee429768df2bf3e",
    title: "Fucking mermaid.",
    bodyText: "When did you get tangled up into my thoughts?\nWhy am I searching for you across a room?\nFuck. \nIts all sin from here. ",
    date: "2019-02-27T16:32:16+02:00",
    handle: ""
  },
  {
    id: "5e6617b85ee429768df2bf42",
    title: "Vee uit en fok voort",
    bodyText: "Verlief\nVerdoem\nVerlore\nFor fuck's sake",
    date: "2019-05-25T21:11:07+02:00",
    handle: ""
  },
  {
    id: "5e6617bf5ee429768df2bf4e",
    title: "Die ding ",
    bodyText: "Ek verval in clich\xE9s\nDie ding van blomme koop wat sal dooi \nDie ding van pienk Steri-Stumpies koop wat sal\nopraak\nWinter groet en bladskud met Lente \nSodat Somer my kan belas met Desember \n\nDie ding van blomme en Steri-Stumpies en seisoene\nIs dat hulle sing van hergeboortes\nHarmonie\xEB skep\nSonder ophou\nEn my clich\xE9s sing\nVir die liefde wat jy is\nOnophoudend",
    date: "2019-01-29T11:19:19+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6617c35ee429768df2bf5a",
    title: "one day",
    bodyText: "maybe one day\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 you'll stop hiding\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 you'll stop pushing\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 you'll see...\n\nI've found you in your mess and loved you even more for it... \n\nyet I'm not the one that will get to love the pieces I've tried to pick up and puzzle together.. \n\nI hope you'll be happy\nwith yourself one day \nhappy enough to see that you we're always enough\nalways okay \nfighting till the end\nnever fighting alone\nalways wanting to\n\nwhen you succeed... remember me\nfor all the good I have done\n\nnot for the WALLS I put up\nnor the walls I built stronger \n\napologies are empty\nhumanity took control\ninnocence never given\nalways taken\n\n\nwhen the pain is gone.. \n\ngive yourself the time to leave my heart\nrip yourself appart there from \n\nyours truly\ngood enough when it's tough",
    date: "2019-04-23T15:13:11+02:00",
    handle: "zantekeizer"
  },
  {
    id: "5e6617c35ee429768df2bf5b",
    title: "bly. Maar... ",
    bodyText: "Soos die Tsitsikamma bo mens toevou, is vakansie-ek is besig om uit sy hibernasiegat te kruip. Dankbare harte; bless, bless, bless. Kan ons meer vakansie-weggaanne in die jaar h\xEA? Want wraggies... nog 'n Desember en die trokke Toyota rol steeds alleen aan Transkei toe. ",
    date: "2019-12-14T18:30:12+02:00",
    handle: ""
  },
  {
    id: "5e6617c65ee429768df2bf65",
    title: "naaldekoker",
    bodyText: "die metamorfoseradikale kataklismeakwatiese nimf word volwasse gevleuelde vlieg terwyl jy nog vlerke het vlug terwyl jy nog tyd het en speel dood as hy wil seks h\xEA @",
    date: "2019-12-30T20:53:49+02:00",
    handle: ""
  },
  {
    id: "5e6617cd5ee429768df2bf7d",
    title: "Die lente is hier ",
    bodyText: "Renonkels op my boekrakDie lente is hierMy o\xEB is rooiVan stuifmeel en slaaptekortMaar die lente is hierDie volmaan loer nuuskierig deur my kamervensterDie lente is hierDis nog stowwerig en droogGeen re\xEBnwolk in sigMaar die lente is hier ",
    date: "2019-09-17T06:37:40+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617ce5ee429768df2bf7f",
    title: "Taal",
    bodyText: 'Ek kan nie jou taal praat nie.Hoe s\xEA mens "jammer?"',
    date: "2019-08-28T08:48:32+02:00",
    handle: ""
  },
  {
    id: "5e6617d65ee429768df2bf9b",
    title: "Verhoogte sensitiwiteit ",
    bodyText: "Dis moeilik om nie allespersoonlikop te vatnieas jou senuwees injou biologiese samestellingontblootgemaak isvir gevoelfisiek enandersins. ",
    date: "2019-12-21T20:52:37+02:00",
    handle: "stefanyseymore"
  },
  {
    id: "5e6617835ee429768df2bea5",
    title: "W",
    bodyText: "I'd hate to have to be cured of my addiction to you. ",
    date: "2019-05-27T22:55:17+02:00",
    handle: ""
  },
  {
    id: "5e6617885ee429768df2bead",
    title: "Wat is jy...",
    bodyText: "Ek skryf vir jou...My museWat is jy?'n Engel of duiwel?Jy inspireer myMaar jy snoer my mondEk worstel in jou gedagtesJy in myneEngel of duiwel?Jy is...Jy was...My muse",
    date: "2019-09-12T20:19:01+02:00",
    handle: "aud6362"
  },
  {
    id: "5e66178c5ee429768df2beba",
    title: "ALL CAPS want jy skree nie reeds te hard nie",
    bodyText: "Twee belangrike boodskappe vandag ontvang\nBEKOMMERDE ouers\nBEFOKTE meisie\nJammer ges\xEA\nIs alle kommunikasie eintlik maar net manipulasie?",
    date: "2018-08-06T19:23:07+02:00",
    handle: ""
  },
  {
    id: "5e66178c5ee429768df2bebd",
    title: "n Laat Laat middernag uur",
    bodyText: "El le wakker en luisterNa die laat laat middernag Se gefluisterEk probeer om te skryfMaar gedagtes aan jouBlokkeer die woorde van nouKom terug na myEn wees net nog eenkeerMy laatnag muse",
    date: "2019-10-08T03:22:51+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617935ee429768df2bed6",
    title: "leeg, lee\xEBr, leegste",
    bodyText: "vanoggend is altydte laatvir gisteraand",
    date: "2019-07-21T11:59:16+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617955ee429768df2beda",
    title: "ek affiks",
    bodyText: "morfologies gesproke:eers 'n prefikstoe 'n suffiksnimmer die\xA0stam'n ewige voegsel...?",
    date: "2019-11-15T12:52:34+02:00",
    handle: ""
  },
  {
    id: "5e6617955ee429768df2bedc",
    title: "1989 | 1991",
    bodyText: "Dis borrels wit gas wat uitwolk, oorkook, rammel en rys; al groter en digter kolomme omgee en belangstelling word.Dan tref dit die gladde glasrand van jou hart, ontbind en vervaag stilletjies tot niks meer as skaam borreltjies stikstof op 'n piering wat later self uitbrand. ",
    date: "2019-12-02T00:07:22+02:00",
    handle: ""
  },
  {
    id: "5e66179a5ee429768df2beea",
    title: "Sonder rigting",
    bodyText: "Die gekwel van my oeEn my nat wange wat meer as woorde betekenTog eensaam en verwoedWat word van liefdeWat word van die samesynDit is n verlate storieDie Leeus van AkasieDie romantikus",
    date: "2020-02-07T18:21:39+02:00",
    handle: ""
  },
  {
    id: "5e66179d5ee429768df2bef1",
    title: "Milleniumdraai",
    bodyText: `Graad Drie
Sun City
Mr Bones 
Po-Mo Afrika patrone
Chris Bangle - my ontwerper crush
Klein-narcissistic- optimisme
Silwer en wit BMW's
Lost City concrete klip
Savanna bome
Middelklas Uprising
RCI vakansies
Neil Diamond 
Eerste rondelig E-klas
Sonskyn en hoop in onsself
Panfluit, TOTO en Era
Eerste suigie
Top Billing 
Kaapstad om 00:00 
Oom Anton en tannie Maryna se sag beligde huis 
Tannie Fiona se J'adore- die aand in haar turquoise T-Shirt en baie goue juwele overlooking Beacon Baai
Kruger Wildtuin en die Potholes
Tension tussen my ma en pa- ons loop op eiers
Marizaan se dalmation moonbag
Dewald, Luan en Hayden
Crush op sterke juffrou Anna-Marie (wie s\xE9lf gate boor)  
Vreemdheid dat party mense nie oor "mooi" worry nie
Juffrou Liezl se onegalige wange en punt bolip 
Vrees vir meneer Van Eck
Stoffel en Kolle (wat later deur 'n omval-tralie sou sterf.) 
DEKAT
Oupa en sy Adcodols
`,
    date: "2019-02-10T13:19:57+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617a65ee429768df2bf10",
    title: "Sinchroni(seer)",
    bodyText: "Sinchroniseer jy jou pyn met my blydskap? Dans jy op die druppels van my bloed? Jy was altyd my lafenis. My redding. Nou is jy my helen ek indit. Jy is my begrafnisondernemer. Ek is begrawe en jy steeds donker. Hier l\xEA ons albei nou. Ek dood en jy donker. \n",
    date: "2019-07-27T23:34:13+02:00",
    handle: ""
  },
  {
    id: "5e6617a75ee429768df2bf12",
    title: "Maanlig Gesprekke",
    bodyText: "Ek en die maan het vir mekaar gestaar;\ngewonder wanneer ek weer gaan slaap en of jou woorde my in die oggend lig sal teister soos wat dit in die aand doen.\n-\nDit is laat in die nag en ek hoor hoe huil my hart saggies onder die ritme van jou luidkeels lag.\nEk hoor jou skerp tong en ek sluk die suur woorde wat by jou mond uit kom.\n-\nEk droom van jou sagte gedeeltes maar skrik wakker en voel/sien jou rug onder die maanlig. \nEk en die maan het vir mekaar gestaar. \nSy het vir my probeer fluister;\n\u201CHardloop! Vinnig! \n Jy verdwaal,\n Jy verdwaal,\n Jy verdwaal\u201D.\n",
    date: "2018-08-06T00:31:29+02:00",
    handle: ""
  },
  {
    id: "5e6617a95ee429768df2bf17",
    title: "Wandel",
    bodyText: "Ek soek jou nog steeds tussen die bergeOp oorgebruikte voetpaadjiesOnder watervalleTussen varingsIn die see se geruis",
    date: "2020-01-11T19:46:49+02:00",
    handle: ""
  },
  {
    id: "5e6617ac5ee429768df2bf22",
    title: "Hierdie weer",
    bodyText: "Ek wag vir jouOm huis toe te komSodat ons kan slaapAs ek tog net my hart vir jou uit kon hou\nIn my palm\nSou jy sien jy is op elke seerplek geplak\n",
    date: "2019-07-27T20:18:51+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617b05ee429768df2bf2f",
    title: "Einde",
    bodyText: "Elke keer dink ek weerHier breek die ellende einde aanMaar nog nooit gesienWat dan tog nouNiet breek die einde aanMoeg gespook, gespartelNog niet die eindeTel ek myself maar weer opWant die einde ellendeIs nog niet nie hier",
    date: "2019-08-27T21:58:52+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617b85ee429768df2bf45",
    title: "Jy",
    bodyText: "Ek wil nooit weer met jou praat nie maar. Ek hoop ek kry jou hier",
    date: "2019-09-18T15:13:41+02:00",
    handle: ""
  },
  {
    id: "5e6617bd5ee429768df2bf49",
    title: "perke",
    bodyText: "Ek wil nie \nraak aan jou nie.\nWant ek mag nie\nJy\u2019s dun ys. \n",
    date: "2018-08-14T12:05:26+02:00",
    handle: ""
  },
  {
    id: "5e6617c05ee429768df2bf53",
    title: "einde of begin begin of einde ",
    bodyText: "Nog 'n advanced idee.\nNog 'n politiese peen\nNog 'n korrekte stelling\nNog 'n toon om mis te trap\nNog 'n irrasionele aanval\nop 'n vanilla observasie\nNog 'n aandagslet\nNog 'n avant-garde smaak gedeponeer op 'n\nChicken strip palette. \n\nDie voorbokke het my groen en\nDie rug van die bell curve is maar kak\nEn die agterryers (of is hulle voor in die volgende klok?) werk ook meer nie.\n\nTussenin iewers is daar 'n sweet spot van heterogene aanvaarding en uitdagende vooruitgang. \nDis d\xE1\xE1r waar die wyn en smileys op hulle l\xE9kkerste saam is. Daar word DeGrendel en umqombothi saam geniet. \n\nWanneer gaan daai plek ook hierdie plek wees? ",
    date: "2019-01-27T22:54:34+02:00",
    handle: "evertesterhuizen "
  },
  {
    id: "5e6617c85ee429768df2bf6a",
    title: "Vat so Ventrikel ",
    bodyText: "Voor my in Villieria sit 'n vet vrou met 'n Fitbit en vreet 'n fokken pizza by haarself op. ",
    date: "2019-09-30T11:27:16+02:00",
    handle: ""
  },
  {
    id: "5e6617c95ee429768df2bf6d",
    title: "B.A ",
    bodyText: "dis beter om iets te doenwaarvoor jy lief isas om geld te maak. - uit boomer-leuens en ander verhale. ",
    date: "2019-10-26T10:54:48+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617cd5ee429768df2bf7c",
    title: "Voete",
    bodyText: "Kaalvoete opi strandKaal spore deur jou hartKaal is my toekomsKaal is my hartKaalvoete tussen lakensOmkrul tone ini nagKaal bly my bedLeeg is my hart",
    date: "2019-09-12T21:08:41+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617d15ee429768df2bf88",
    title: "cONSerta",
    bodyText: "Maar pille maak dit als makliker",
    date: "2019-09-01T10:17:49+02:00",
    handle: ""
  },
  {
    id: "5e6617d25ee429768df2bf8c",
    title: "aanstoot",
    bodyText: "ek druk al jou knoppiestot iets wil gebeurek steek met \u2018n stok\nin die byenes van\nras, sex en god\nek vererg jou, ek krap jou om\nek steek dwars in jou krop\nen ek doen dit aspris\nek\u2019s stroomop, aweregs\nek\u2019s moeilik en boos,\nveel te stil, te slim, te alleen\nom vir die samelewing\nvan voordeel te wees\nsubwersief, ondergrawe ek,\nlaat vou die sisteem\nvan die binnekant af\nom aanstoot gee\nis deel van my job\nek fok met jou kop\nen jy aanbid my daarvoor",
    date: "2019-08-02T19:43:12+02:00",
    handle: "antonbarnard "
  },
  {
    id: "5e6617825ee429768df2bea1",
    title: "De arte poetica liber",
    bodyText: "Ek wag vir jou in die bib\nOp die heel onderste vloer\nIn die heel verste hoek\nTussen die filosofie boeke\nDaar waar jy Aristoteles se \nDe arte poetica liber sal kry\nEn vir my",
    date: "2019-06-19T17:23:23+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617835ee429768df2bea3",
    title: "Kasteel om jou hart",
    bodyText: "Ek staar na die maan en sterreWat skitter in die donker nagDit kondig nog 'n dag is verbyDis  nog 'n dag wat jy verby laat gaan het om weer iemand toe te laat in jou hart.'n hart wat eens heel wasHeel met soveel om te gee en te deelTot jou hart gebreek het in stukkeStukke wat nie mee op getel kon wordJy bou 'n kasteel om jou hartOm jou te beskermTe beskerm teen die seer kryWant liefde en Haat loop hand en handOm weer iemand in jou lewe toe te laat.Is 'n te groot waag stukkeMaar die verlange is tog daar snag as jy alleen op jou bed gaan le en dis net jy",
    date: "2019-10-21T23:39:27+02:00",
    handle: ""
  },
  {
    id: "5e6617855ee429768df2bea8",
    title: "Sy",
    bodyText: 'Hoe weet ek ek is verlief?\nIs dit die gedagte aan jou wat my laat dwaal na die wolke en terug?\nIs dit jou naam wat \u0144 koue sweet oproep\nin my liggaam? \n\nDalk die reuk van jou wat ek elke oggend voor hoop om op te tel?\n\nHoe weet ek? \n\nIs ek simpel, impulsief of verlief?\nNiemand sal eintlik weet nie, sal hulle?\nEk dwaal rond in my gedagtes\nEn n bekende stem van tannie Magda\nWeergalm in my hart.\n\n"Die gevoel. Die gevoel van die persoon saam met jou en die gevoel van die persoon weg van jou. Dis die gevoel wat die geheim van liefde behou."\n\nVerlief sal ek altyd wil bly.',
    date: "2019-12-11T00:07:50+02:00",
    handle: "woordedwaler"
  },
  {
    id: "5e66178a5ee429768df2beb4",
    title: "Ek wonder maar net...",
    bodyText: "Soms wonder ek of my prentjie nog teen jou muur sit, en of jy my soos die laaste ou stukkie wondergom finaal afgekrap het...",
    date: "2019-01-25T20:05:22+02:00",
    handle: ""
  },
  {
    id: "5e66178e5ee429768df2bec1",
    title: "Als",
    bodyText: "Makeup \nmarcels \nmilan \ncrocs \nsigarette \nsoene \nboobs \ntattoos \nubereats \nlag \nals\n\nEk mis dit als",
    date: "2019-02-04T12:58:15+02:00",
    handle: ""
  },
  {
    id: "5e6617915ee429768df2becd",
    title: "Tata",
    bodyText: "Ek wil myself hoor, luister na wat werk vir my en dit agter na sit.Probeer en weet wanneer ek mag uit tree.Dit klink beter as op gee.",
    date: "2019-12-30T20:57:55+02:00",
    handle: ""
  },
  {
    id: "5e6617aa5ee429768df2bf1c",
    title: "Altyd ",
    bodyText: "Het ek jou gevind? Lees ek alweer in goed in?As dit jy is, gee vir my n teken?",
    date: "2019-09-19T21:34:15+02:00",
    handle: ""
  },
  {
    id: "5e6617ab5ee429768df2bf1f",
    title: "2019 se NPvWL",
    bodyText: "\u201CAll These Racks Give Me a Boner\u201D",
    date: "2019-05-30T21:28:20+02:00",
    handle: ""
  },
  {
    id: "5e6617ae5ee429768df2bf29",
    title: "Verhouding",
    bodyText: "Onsin\nOns s'n\nOns sin\nEinde\n\nMyne\nJoune",
    date: "2019-02-20T20:58:14+02:00",
    handle: ""
  },
  {
    id: "5e6617b05ee429768df2bf31",
    title: "Slot",
    bodyText: "Hardloop mense van my weg of hardloop ek van mense weg? Which is worse, to live as a monster\xA0or to die as a good man, Doctor Cawley? ",
    date: "2019-12-01T18:48:32+02:00",
    handle: ""
  },
  {
    id: "5e6617b85ee429768df2bf43",
    title: "...",
    bodyText: "son of the sun\nbasking there in your rays\nwarming up to the fact\nthat you haven't been oppressed for a day\ndazed\ndazed and confused\nyou sit and burn up\nwhen I dare shout abuse\nand I'm not talking about\npunches or fists\nnot even beatings or whips\nit's those strong sirens of silence\na quiet act of violence where\nyou refuse to admit that\nI'm only human\nand so are you\nbut what do you do\nsunbathe in contempt\nas an attempt\nto burn me out\na thing I resent\nson of the son of the son\nbefore you generations \nfought for their own emancipation\nin a quest for evolution\nit led to our devolution\nso don't sit there and ask\nwhy we need this goddamn revolution. \n",
    date: "2019-05-26T16:05:34+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617b95ee429768df2bf46",
    title: "Sterre donkernag",
    bodyText: "Die nagswarte duisternis sluk my in\nDit vul my hele wese\nDie bloedrooi kleure wentel om my\nPols deur my lyf\nEk weg my baan deur die sterre donkernag\nMaar vind geen ster of lig vir my\nDie band van donkerte omring my\nEn al wat ek sien is die bloedrooi kleure\nWat wentel om my\nDie sterre donkernag\nBly by my",
    date: "2019-06-27T01:43:38+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617b95ee429768df2bf47",
    title: "Gevoelens",
    bodyText: "Nie hartseer nie, maar...iets",
    date: "2019-05-01T18:59:26+02:00",
    handle: ""
  },
  {
    id: "5e6617c25ee429768df2bf57",
    title: "Dis net jy",
    bodyText: "Geluk met jou verjaarsdag\nEk mis jou",
    date: "2020-01-26T01:20:34+02:00",
    handle: ""
  },
  {
    id: "5e6617925ee429768df2bed0",
    title: "Lig",
    bodyText: "Ek sien n nuwe lig. Nie vir my maar vir julle. Educate jouself. Bemagtig jouself. Kennis is die antwoord. Verkoop wat jy weet. Hoekom werk vir n baas. Jy is uniek.\nLoyalty doesn't pay the bills. Doen jou eie ding - jy kan",
    date: "2019-05-30T20:18:31+02:00",
    handle: ""
  },
  {
    id: "5e6617935ee429768df2bed3",
    title: "CY Blessings",
    bodyText: "Die gode het Belville gese\xEBn met 'n kragstilte en re\xEBn. Die aardlinge antwoord met verkeersknope, swaaiende vuiste en fender benders.",
    date: "2018-12-06T17:25:15+02:00",
    handle: ""
  },
  {
    id: "5e6617995ee429768df2bee8",
    title: "vonkel",
    bodyText: "Hoe gaan daai song\u2026\nEk wens dat ek\nmy liedjie vir jou kon sing\u2026\nmaak sommer iets in my los\ndalk net \u2018n verlang\nna happiness wat was\nOf kon wees\nMaar daar is net my vierpoot \nSe liefdevolle ogies\nEn geduldige oor\nIn wie ek\nn vonkel in sy o\xEB bring\n",
    date: "2019-02-27T21:25:12+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e66179a5ee429768df2beeb",
    title: "4 x V-Series en jy ",
    bodyText: "Pa, hierdie voel so verkeerd. \nMaar here hier sit ek op 'n Dinsdagm\xF4re 10h00 in 'n coffee shop met my sketsboek en word betaal hiervoor. \n\nDankie vir jou bloedsweet aan onderrig om hierdie ervaring moontlik te maak.\n\nMy hart loop oor. ",
    date: "2019-04-16T14:06:41+02:00",
    handle: ""
  },
  {
    id: "5e66179b5ee429768df2beef",
    title: "Anoniem",
    bodyText: "Daar is vrede daarinom ongeken te wees.",
    date: "2019-08-28T08:54:37+02:00",
    handle: ""
  },
  {
    id: "5e6617a05ee429768df2befa",
    title: "Wat de 2",
    bodyText: `Ek hoop jy sienDie dinge wat jy doen
Die mense wat jy seer maak
Al die beloftes wat jy aan jouself maak
En al die kere wag jy dit verbreek
Jy was n stuk goud werd
Maar jy kon net nie my hanteer asof ek alles was nie
Ekt myself oor gegee, letterlik beloof aan jou
En dis hoe jy dit hanteer
Bietkoe meer van jouself
Want 'n afstand het vir jou "soveel" beteken
Kak man.
Jy rook
Jy was die dronk verdriet
Wat ek nie geken het nie
Waar is jou nuwe self heen?
Die een wat my al hierdie dinge belowe het.
Jy wat jouself met vir my hou
Was ek soveel werd
Was ek so 'n kak van n mens
Jyt belowe jy is net vir my
Wel was jy
Het jy getrou gebly aan my? 
Ek twyvel`,
    date: "2019-11-05T22:33:50+02:00",
    handle: ""
  },
  {
    id: "5e6617a55ee429768df2bf0a",
    title: "So Soon II",
    bodyText: "Reaching for you,\nI see it in your silences,\naffection drowned already.",
    date: "2019-01-13T17:24:11+02:00",
    handle: ""
  },
  {
    id: "5e6617ad5ee429768df2bf27",
    title: "My beurt",
    bodyText: "Moeg vir die lewer\nGooi nog in my beker\n\nDie kinders staar, \nIs ek die gevaar?\n\nKyk die kos\nAlmal gaan bos",
    date: "2019-05-04T23:57:08+02:00",
    handle: ""
  },
  {
    id: "5e6617b65ee429768df2bf3d",
    title: "Vrou (s.nw): ",
    bodyText: "vasgekeer tussen haar pa se vanen haar man s'n. ",
    date: "2019-11-04T12:57:31+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617bd5ee429768df2bf48",
    title: "Vreemd.",
    bodyText: "Met al die vreemden al die kat. \nIs jy steeds al die huis. ",
    date: "2019-10-08T21:55:38+02:00",
    handle: ""
  },
  {
    id: "5e6617c15ee429768df2bf56",
    title: "Ouerword begin al ",
    bodyText: "Ek het vandag my hare gaan sny. By een van die barbiere in die dorp. Een van daai's wat so vinnig met die skertjie maak en nie baie praat nie omdat ons weet daar sal misverstand wees: stilte; soms 'n duideliker opdrag. Hy het aanhou knip.Soos 'n spesialis moet,Terwyl ek na my 28 jarige, vel, neus en mond in die spie\xEBl kyk: hierdie is die mooiste wat ek ooit gaan wees. Sawwe vel, helder o\xEB, minimale lagplooie, vol, ronde lippe, pof, pienk wange en gemmer baard. Jonkheid is vanselfsprekend; oudheid onvermydelik. Nooit weer gaan dit so goed lyk soos n\xF3\xFA nie. Vir die eerste keer bestaan daar nou selfies van die jeugdige wat eendag plooierig en hortend gaan terugverlang na die tye toe hy blind was vir sy eie beauty. Van hier af is dit afdraend. Plooie. Vlekke, doeke en implants. Plomp of te not. Dis nou of nooit. ",
    date: "2020-01-29T01:52:11+02:00",
    handle: ""
  },
  {
    id: "5e6617c35ee429768df2bf5d",
    title: "Nog 'n clich\xE9",
    bodyText: "say, lovey, \nwanneer laas het jy by 'n krans\naf\nge\nspring\ndat jou hele lyf dans van die koue\nwater?\nnog nooit? \nmiskien moet jy ophou om so diep\nte dink.\ndit gaan jou nie help om \nd\ni\ne\np\nte lewe nie.\n\nSay, lovey? \nJa? \nHuiwer. \nNiks, lovey. You win some and lose some. \nC'est la vie. ",
    date: "2019-05-27T20:17:15+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617cc5ee429768df2bf79",
    title: "Suspect 1",
    bodyText: "Ek sit met my good intentions in my mondEn \u2018n wapen wat pas in die vorm van jou wond\nEk is verward meeste van die tyd\nAl wat ek is, is slegte keuses in \u2018n lyk\n",
    date: "2019-08-04T21:34:02+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617d05ee429768df2bf85",
    title: "Fok weet 2",
    bodyText: "En ek mis jou vriendin\nEn haar 'Red gebed\n",
    date: "2020-02-04T22:46:28+02:00",
    handle: ""
  },
  {
    id: "5e6617d25ee429768df2bf8e",
    title: "\xF7",
    bodyText: "Ditto. Hulle is soms maar *kakkerig* ",
    date: "2019-08-13T00:34:32+02:00",
    handle: ""
  },
  {
    id: "5e6617d55ee429768df2bf97",
    title: "Aartappels skil en skottelgoed was. ",
    bodyText: 'Ek wil in metafore oor jou praat en jou gelykstel aan kartelblaarblomme of sware graniet hoekstene. \n\nJy moet neergepen word as singerige woorde wat drup van re\xEBnboogkleure en vlinder-gevoelens. \n\nMaar ek kan nie. (Jy kan blykbaar ook nie) So ek gaan nie. \n\nNou praat ons albei maar van die "onbeskryfbare lekker van skottegoed was en aartappels skil". \n',
    date: "2019-10-22T22:07:40+02:00",
    handle: "V"
  },
  {
    id: "5e6617da5ee429768df2bfa8",
    title: "As jy single is, kan jy nie paarrym gebruik nie",
    bodyText: "Jy neem nog hopeloos te veel ruimte in my kop op\nWanneer gaan dit stop?\nJy wil kan inpop sonder om eintlik in te pop\nDis 'n fokkop",
    date: "2020-03-06T12:13:28+02:00",
    handle: ""
  },
  {
    id: "5e6617e15ee429768df2bfbf",
    title: "God se genade",
    bodyText: "Ek kyk waar ek geluk beleef hetDie wind het deur my hare gewaaiEkt soveel kere gekyk na son onder gangVas genaal aan tafelbergn berg wat lyk soos n tafelMensdom wil net van bo kyknoord oos wes bestDie prag van die see rondomBesef God het als gemaakNie net vir my maar vir jou ookDie son gaan onder maar n nuwe dag kom weer aanVir my en jouBlessings kom na my en jou.Die re\xEBn val vir my en jouLekkerste van als is loop soos 'n kind kaalvoet in die re\xEBn. Want ons magMag van bo wat lewe gee en lewe vatWanneer dit jou tyd isom te gaan en in die hemel ruim te wees.Tot die einde van die lewe komMet God se genade.",
    date: "2019-11-20T21:55:02+02:00",
    handle: ""
  },
  {
    id: "5e6617e85ee429768df2bfd1",
    title: "Issey & Isuzu",
    bodyText: "Jy ken die game:\n\npraat oor mekaar se eksistensi\xEBle (tel dit as krisis as dit die norm is?) en braai wors en drink te veel bier; Vogues en erken woordeloos hoe maklik dit is om oor te gee aan die oomblik. \n|oortuiging|\n\n'n rewolwer ver, 'n ski rope naby aan 'n stukkende nek en terminale verlossing van ons bourgeois probleme. \n|xanax|\n\nen gisteraand was lekker. goeie game gehad. sonder 'n wenner. goeie game. Vrydag weer. \n|skrynwerker| ",
    date: "2018-11-03T17:37:40+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6617f05ee429768df2bfec",
    title: "Wat de ",
    bodyText: "Dis vernielWat wonder jyDie ding wat klopBinne myJyt my verlaat\nNet so gelos\nDie glasse is gebreek\nLe oorals om op te trap\nSoos wat jy getrap het op my hart\nNommer vier\nNet saam jou\nHoekom\nWant ek is so lief vir jou\nEk val in stukke\nDie cherries en wyn is op\nHoekom\nJy weet",
    date: "2019-11-03T20:20:08+02:00",
    handle: ""
  },
  {
    id: "5e6617f95ee429768df2c009",
    title: "Jou Ma",
    bodyText: "Groet\nPraat\nGroet\nSkinder",
    date: "2018-09-11T09:13:26+02:00",
    handle: ""
  },
  {
    id: "5e6617fb5ee429768df2c012",
    title: "Kyk net",
    bodyText: `Ek soek 'n Adel-Wian-Fynskrif tipe liefde.StoomYs"jy't jou ring vergeet"`,
    date: "2019-12-18T20:34:48+02:00",
    handle: ""
  },
  {
    id: "5e6617fe5ee429768df2c01b",
    title: "Tob",
    bodyText: "Mamma, ek wil 'n man h\xEA.\n        Watter man, my liewe kind?\n\nmind ma\n'n drankprobleem, \ncommitment issues en\n'n libertyn? \nek belowe hy\nmooi maniere,\n\nsoos die Boerjonk\xEArels\nhier\n(net meer gekultiveerd). ",
    date: "2019-05-05T18:36:45+02:00",
    handle: ""
  },
  {
    id: "5e6617ff5ee429768df2c01e",
    title: "Ontmensing",
    bodyText: "Met die manier wat die k\xEAffie-eienaar- 'n 50 something wit vrou-vandag met die plaaswerkers in die winkel gepraat het... verstaan ek meteens presies hoekom daar dikwels n\xEDks tydens plaasmoorde gesteel word nie. ",
    date: "2019-08-03T23:43:27+02:00",
    handle: "verbatim "
  },
  {
    id: "5e67a89532344d001776c829",
    title: "self-love",
    bodyText: "vlek my oop\nmy skat\nen jy sal vind:\nek is 'n aborsie\nwat leer loop het\nen jy moet my probeer liefh\xEA\nin glorieryke self-verwerping",
    date: "2020-03-10T14:47:49.727Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f3ba0547085e10017042346",
    title: "Middernaggedagtes",
    bodyText: "en skielik, uit die bloute, op 'n stormagtige nag, in die middernagure, oorval die hartseer jou, die verlies van die wat ons al verloor het, en die leemte wat jy so maklik kon volstop met besig wees, gaap jou aan, en trek jou dieper en verder weg van die lig\nou foto's lei jou op 'n dwaalspoor, laat jou liefde betwyfel, want hoe meer jy liefhet, hoe meer kan jy verloor\ndie antitese van 'n vol lewe, wat jou laatnag in die gesig staar. Is dit beter om te verloor, met die wete dat jy dit gehad het, of om 'n lewe te lei, sonder om iets te h\xEA wat jy kan verloor?\n\nP. S.\nin die vroee oggendure, \nnet voor die son verskyn,\nis daar geen skadus \nteen die mure\nmaar dan kruip die son\nstadig oor die horison\nen word elke ding\nneergepen in skadu",
    date: "2020-08-18T09:33:34.419Z",
    handle: "mabethc"
  },
  {
    id: "5f46ad59a717c5001782ea78",
    title: "\u2764\uFE0F",
    bodyText: "Ek wil nie meer fotos neem nie,\nEk wil nie meer skryf nie,\nEk wil nie meer aan jou dink nie.\n\n",
    date: "2020-08-26T18:43:37.292Z",
    handle: ""
  },
  {
    id: "5f6cd248f7acc70017158ee8",
    title: "24 sept",
    bodyText: "Een jaar later\nEen jaar kwater\nEn die laaste dag van\n'nobody likes you when you are 23'\n6 maande se werk\n6 maande se lewe\nIn 'n oogwink uitgegee\n6 maande se inperking\n6 maande se verwerking\nVan m\xF4re een jaar gelede\nEn dit voel nogsteeds kak",
    date: "2020-09-24T17:07:20.858Z",
    handle: ""
  },
  {
    id: "5e6617d85ee429768df2bf9f",
    title: "Valent(p)ynsdag",
    bodyText: "Wit en rooi n Gekots teen winkelrakke\nClean up - aisle everywhere",
    date: "2020-02-14T03:15:27+02:00",
    handle: ""
  },
  {
    id: "5e6617e15ee429768df2bfc0",
    title: "skoon",
    bodyText: "Jou hand het gisteraand oor die eenvoud van my eerlikheid gevou. \nDankie dat jy nie 'n vuis gemaak het nie. ",
    date: "2019-09-03T20:09:04+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617e55ee429768df2bfc9",
    title: "Slaapstad",
    bodyText: "Dalk wil hulle eerder vreemdelinge se distortions sien as om na hulself in die spie\xEBl te kyk? ",
    date: "2019-06-16T17:39:04+02:00",
    handle: ""
  },
  {
    id: "5e6617eb5ee429768df2bfdd",
    title: "Trumpet-Tree",
    bodyText: "Wie kak in n kuier plek?",
    date: "2019-06-06T19:34:55+02:00",
    handle: ""
  },
  {
    id: "5e6617ec5ee429768df2bfe1",
    title: ".",
    bodyText: "dalk moet ek net my mond oop maak, dalk moet ek  net praat, maar ek weet net nie wat nie. \ndalk wanner ek daai trui dra, dalk wanneer jy weer daar staan, dalk oor waar jy vandaan kom, dalk wat jy studeer, dalk doen ek die net aan myself.",
    date: "2019-05-23T18:41:53+02:00",
    handle: "angs"
  },
  {
    id: "5e6617ed5ee429768df2bfe4",
    title: "Breakup 3",
    bodyText: "3 weke is apparently hoe lank dit vat om 'n gewoonte te breek\nSelfs die gewoonte aan 'n mens\nJ\xF3\xFA mens\n\nHoekom is ek na 3 weke dan nog meer verlore?\nHoop dat daar 'n manier is om om te draai?\nAl het jy eksplisiet ges\xEA ons kan nie. \n\nDis gewoon t\xE9 absurd om te dink hierdie word gereduseer tot niks\nDat twee mense wat so sterk oor mekaar voel nie saam kan wees nie\nEk wens elke dag dat ons weer saam kan wees\n\nHipotetiese scenarios van 'n rescue hond\nEn activities beplan wat jy begrudgingly doen\nEn 'n toekoms van ons speel in my kop rond",
    date: "2019-02-07T21:14:53+02:00",
    handle: ""
  },
  {
    id: "5e6617f15ee429768df2bff1",
    title: "after the rain",
    bodyText: "after the rain\nmy heart breaks beautifully\nas it sparkles crystalline\nbristling with silver eyes\nbejeweled black tar\nand teardrop trees\n",
    date: "2018-08-23T13:54:24+02:00",
    handle: ""
  },
  {
    id: "5e6617f35ee429768df2bff8",
    title: "Kersfees",
    bodyText: "Dis baie mooi",
    date: "2019-12-14T17:17:42+02:00",
    handle: ""
  },
  {
    id: "5e6617f55ee429768df2bffe",
    title: "Posbus 11624",
    bodyText: "Die hel is net \u2018nGebroke konneksie\u2018n Seinlose ewigheidEDGESlow WiFiSkryf vir myDaar\u2019s altyd nog duiweOf die posdiens (stadig maar nie hel nie)So skryf vir mySkryf my nader",
    date: "2019-12-29T21:18:55+02:00",
    handle: ""
  },
  {
    id: "5e6617fa5ee429768df2c00f",
    title: "Poetry Fees",
    bodyText: "McGregor toe met die lyk.",
    date: "2019-08-25T10:07:17+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6617ff5ee429768df2c01d",
    title: "Kwaad vir myself",
    bodyText: "Doen meer.\nRaak kwaad.\nDoen minder.\nRaak nogsteeds kwaad.",
    date: "2019-03-24T16:29:45+02:00",
    handle: ""
  },
  {
    id: "5e92343d363bb60017367e83",
    title: "Soetbloem ",
    bodyText: "sit deur Rocky Horror\nen kom uit die kas\n\xA0n soetorgidee van\ntransseksuele Transsilvani\xEB\n\nkarteer jou magtige rigting \nna die gesteunde\nqueer panda\n,\nloop 'n kilometer in pasgemaakte \ngiuseppe zenoti-leerskoene\nen proe die neonligte, \ndie wurms van die heidene,\n\nmoenie jou woedende galblaas roer nie,\n'n tuimeltrein, \ndie krab-nevel,\n\nOntdek\ndiamantoog-demone,\nChaucer soek eksonorasie vir sy sondes, \njanis joplin hoog \nop die verhoog \nop woodstock\n\nkoop 'n dosyn sylvia plath-metafore \nvan ted hughes\n\n\xA0 kyk voordat jy \nvan die gaybrug af\nspring\nmoffie-slap pols,\n\nlaat inwoning, \ngrys woorde rondom die o\xEB,\ndie konfrontasie van spie\xEBls,\n\nvoer nooit jou\nliefde vir \xF1 tier nie,\nhy sal jou verslind \nen jou aanwys \nen jou verlo\xEBn.",
    date: "2020-04-11T21:18:53.644Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e9dbb5913332100177f4c3a",
    title: "Bome",
    bodyText: "Terwyl geleerdes gesag uitspreek\nEn hul maagsere op hul moue dra,\nMy o\xEB sien\nHierdie bome produseer en spandeer hul blare.\nDaar is 'n waarde onder\nDie goud en die silwer in my tande.\n\nAlhoewel bome kaal word en seuns mans maak,\nOns sal ons duur seisoene bekostig;\nDaar is 'n sagmoedigheid\noorleef\nDit sal uitspreek en die redes daarvoor is.\nDaar bestaan 'n lieflikheid,\n\nBewaar ons, \n\nnie vir spesialiste nie.",
    date: "2020-04-20T15:10:17.387Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ec4f5e8b8316e0017cec185",
    title: "ek,jy en die",
    bodyText: "\u{1F480} \n",
    date: "2020-05-20T09:18:32.666Z",
    handle: ""
  },
  {
    id: "5ecb5e1b973adb00174e6ff9",
    title: "Asem",
    bodyText: "N Paar tiener seuns gryp 'n hasie om sy ore af te skeer\nOp die teer pad\n\xA0 Al langs die spore \nNa waar ek jou laas gesien het\nDaar \xEArens het jy ges\xEA\nJy kan my asem neem\njy\nhoe goed verstaan ek \n\xA0 \u201Cjy\u201D\nNie 'vir n dekade lank gesien nie\njy het een nag 'n deur gebou en \njou seun verlaat\n\nMet my blou hande in die modder\n\nDit was 'n Augustus-aand\nJou gesig in die dood gekerf\n die iris spook\n'N Gedig gebou \nmet verlies verower\nMaar ek kan nie wegkruip nie\ndit is oombliklik\n\njou seun vra oor skaamte\nAl waaroor ons ooit praat, is die lig\nhy die verhaaldier\ns\xEA dat ek die volwassenheid van volwassenes oorskat\nSamevatting vir 'n gelukkige gedig\nDie hele dag in my gedagtes\nDae voel niks",
    date: "2020-05-25T05:56:43.598Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ef48c2ec207be0017651426",
    title: "Counting crows",
    bodyText: "How odd to be famous for your sadness.",
    date: "2020-06-25T11:36:14.469Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f5ba25e81d5580017490aed",
    title: "wyn: nie 'n haiku nie",
    bodyText: "goue vloeistof meng\nmy in verdrietige eks-\ntase: infinitief",
    date: "2020-09-11T16:14:22.172Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f5d2a1552e02400178b6ac4",
    title: "Afskeidsboodskap",
    bodyText: "Ek hoop jy het jou doel gevind, tussen die hospitaalbeddens, dripstaanders en scrubs\nEk hoop jy het vrede gemaak met jou ma se inmeng\nDat jy weet dis nog 'n onverklaarbare tipe liefde - beter en nie gebind aan tyd soos ons s'n was nie\nEk hoop jou lag trippel nog steeds in die gang af en by die trappe op\nEn dat jy nog flou grappies maak\nEk hoop jy het al heeltemal aanbeweeg -\nEen van ons moet seker\nEn ek hoop hierdie stilte tussen ons\nIs viraltyd, want hemel weet my verlange is impulsief en onverantwoordelik\nEk hoop dat jy my nie weer in 'n posisie sal plaas om weer afskeid te moet neem nie\n\nWant ek kan nie nog 'n keer vir jou breek nie",
    date: "2020-09-12T20:07:09.987Z",
    handle: ""
  },
  {
    id: "5e6617da5ee429768df2bfa7",
    title: "Moeg",
    bodyText: "(b.nw) Ek is moeg mamma Moeg, uitgetam, lam, energieloos.Die tipe moeg wat slaap nie kan regmaak nie. \n'n Monster of Switch help nie juis veel nie. Dis nou al 5 jaar se gesukkel. \nVYF jaar se kak. Raak dit werklik beter as jy ouer raak?Of is ek een van daai gefokkies.Ek was seker 'n baie kak mens in my vorige lewe.Anyways. Eks moeg. ",
    date: "2019-07-29T03:28:08+02:00",
    handle: ""
  },
  {
    id: "5e6617dd5ee429768df2bfb1",
    title: "Juniemaande",
    bodyText: "Ek is bang jy draai om, weg van jou besluit van vro\xEBr en kom agter dat die droom nie werklik bestaan nie. En dat jy gaan terugval na die bekendheid van 'n warm holte soos soveel keer in die meantime anyway gebeur het en jy jou goedjies vat en finaal trek en hulle daar los en dan weer kom heel-probeer-maak wat lankal reeds gebreek het en dit moet eintlik net so bly want jy het my so fokken fokken seergemaak en dan gaan ek weer van voor af nerf af val maar steeds my arms onvoorwaardelik oop gooi vir jou en dan weer n keer seerkry want ek is \n\nWeerloos teenoor jou. ",
    date: "2019-06-05T23:23:03+02:00",
    handle: ""
  },
  {
    id: "5e6617df5ee429768df2bfb8",
    title: "Nounou",
    bodyText: "Doen beter",
    date: "2019-04-06T20:05:40+02:00",
    handle: ""
  },
  {
    id: "5e6617e15ee429768df2bfc1",
    title: "So",
    bodyText: "You become what you admire - faults and all",
    date: "2019-07-27T17:31:57+02:00",
    handle: ""
  },
  {
    id: "5e6617ed5ee429768df2bfe3",
    title: "@toastcards",
    bodyText: "Dankie. Ons almal sien nou ons pogings om te skryf is eintlik kak..",
    date: "2019-07-10T16:27:51+02:00",
    handle: ""
  },
  {
    id: "5e6617ed5ee429768df2bfe5",
    title: "Goeie Vrydag",
    bodyText: "Ons het vanaand met 'n tafelgebed, pasta met spek en parmasan en g\xF3\xE9ie rooiwyn begin. \n\nSpeakeasy. \n",
    date: "2019-04-19T02:11:48+02:00",
    handle: "DitIsVolbring"
  },
  {
    id: "5e6617f05ee429768df2bfed",
    title: "Spekvet",
    bodyText: "In \u2019n koue landin \u2019n ander halfrondsien \u2019n bebrilde man met ouderdomsvlekke op sy handedie foto van die eens dikke manop Facebook. Die ou dikke het baie gewig verloor,dink die bebrilde man.Maar hy is spekvet van al die geluk.",
    date: "2019-08-02T17:11:03+02:00",
    handle: "Ogreeff"
  },
  {
    id: "5e6617f25ee429768df2bff2",
    title: "toxic masculinity en kindermoord",
    bodyText: "met Die Bybel as oorsprongGod is seker 'n man want hy moes (wou?) \neersgebore babas \nalmal, selfs diere, \nvermoor \nom te wys \ndat Hy sterk is\nsterker as die farao\n\nook 'n man \n\nEksodoos 11:5",
    date: "2019-10-06T18:44:51+02:00",
    handle: ""
  },
  {
    id: "5e6617f35ee429768df2bff7",
    title: "22:51",
    bodyText: "Jyt gefokof seker",
    date: "2019-04-11T22:52:10+02:00",
    handle: ""
  },
  {
    id: "5e6617f65ee429768df2c001",
    title: "klostrofobie",
    bodyText: "saterdag-oggend vroeg by oranjezicht mark\ndis so besig\ndis te besig\nskuur skouers met vreemdelinge\nop soek na koffie\ntrap op onbekende tone\nop soek na die nuwe avo-stalletjie\nop soek na enige iets wat R50 en minder kos. \n\npeace of mind 'n luuksheid\ntussen al hierdie fokken\nmense.\n",
    date: "2019-06-01T22:13:21+02:00",
    handle: ""
  },
  {
    id: "5e69ca7f10d5f80017a0f2e8",
    title: "Lock",
    bodyText: "Composition of the divine is in steep decline,\nYou take a glance\nIt\u2019s disappointing to see your disappointment.\nI assembled the little I had with the expectation that it would negate your sad.\n\nYour a remarkable winner with the demeanour of a loser.\n\nTake a second glance.\n",
    date: "2020-03-12T05:37:03.140Z",
    handle: ""
  },
  {
    id: "5e6ff82a479c2c0017dc0347",
    title: "dvr",
    bodyText: "\nDie wereld lyk op die oomblik beter as wat dit hier binne in my voel\n\n\n",
    date: "2020-03-16T22:05:30.581Z",
    handle: ""
  },
  {
    id: "5e7902e05670b500173f8227",
    title: "As ek eerlik kan wees ",
    bodyText: "\nEk wil eintlik net n lyntjie trek vanaf my pols tot waar my arm vou ",
    date: "2020-03-23T18:50:32.331Z",
    handle: ""
  },
  {
    id: "5e85a3e942e1000017befb03",
    title: "Symbolic",
    bodyText: `Jy was anders gister 
Jy't belang gestel, of dit het so gelyk

Maar gister was goed mooi, my kop kon met jou om kom, en kon gaan slaap.

Wat het jou so gedruk. so met 'n aand verander - verval in niet en niks, 

*"Symbolic of the end times or something"*  

*"I am too unlucky, to be present when the world ends "*
`,
    date: "2020-04-02T08:37:18.769Z",
    handle: ""
  },
  {
    id: "5e902ed12745c4001782ed5e",
    title: "Sit k\xEArels, daar gaan 'n maand verby. ",
    bodyText: "Is jy ook sielsmoeg vir Afrika, haar derms en haar drek? ",
    date: "2020-04-10T08:31:13.075Z",
    handle: ""
  },
  {
    id: "5e92d674cf6e6200177c5747",
    title: "Motte ",
    bodyText: `
Vyf moderne wit karretjies- elk nie groter as 'n ou kewer nie- agter mekaar in n verbeelde spoor- oppad na hulle nesse- "jaag" elkeen in gelid verby die trek-trok. `,
    date: "2020-04-12T08:51:00.443Z",
    handle: "@evertesterhuizen"
  },
  {
    id: "5e970485c85b410017d45a99",
    title: "lockdown",
    bodyText: "by die slaghuis sien\nek twee mense wat \nmekaar raakloop en\nin hul stemme hang\nomhelsing: \nons bly in 'n w\xEAreld \nwaar steak en\nmenslike kontak nie \ndieselfde essential\nservice is nie. ",
    date: "2020-04-15T12:56:37.505Z",
    handle: "@ilzedup94"
  },
  {
    id: "5eb8631697aafb0017de41ad",
    title: "Verganklik",
    bodyText: "ek sit  buite, arms uitgespan oor\r\ndie ou familie bank- verblykte hout-\r\nhonde se geskarrel pla my \r\ntussen my bene gevleg op my voete\r\nmaar dit gaan ook verby -aandag is verlore-\r\n\r\nnie soos my o\xEB wat lui gefokus is\r\nek staar oop na die boom\r\ns\xF3 diep buite myself -tyd sit in my hart-\r\ndat ek droom\r\ndagdroom, sweef saam met die duiwe\r\n\r\nmy gedagtes\r\ndit was nie lank tot ek terug val\r\nin gees\r\ngedagtes -hulle was te swaar- \r\nte heuwig om my bo te hou \r\n\r\nmaar net soos die son gaan ek ook onder \r\nen tyd word net weer \u2018n metafoor\r\n\r\n\r\n",
    date: "2020-05-10T20:24:54.319Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5ec85829b050e90017fad496",
    title: "Hart",
    bodyText: "Hart\nmet hande vol.\nbysiende hart. Klubvoet hart.\nHardkoppig hart. \nDie hart van goud, steenkool.\nSlegte juju hart, sing die blues.\nKoorseun hart. \nHawelose hart, met sy rug teen die Dumpster.\nKlop-op-die-klop hart met sy knuppel\nklop op klop.\nKlokslag hart.\nHartjie alleen.\nHart seer.\nHart Janis, Hart jimmy, Hart Kurt, Hart Amy \nHart stof.",
    date: "2020-05-22T22:54:33.904Z",
    handle: "sheridanwalter "
  },
  {
    id: "5edb07e12f219a0017a34886",
    title: "Surrealist  spring",
    bodyText: "Today being outside is I\u2019m worried of outsides.\n\n                              To repeat what I said would ask spindle\n                              of me. I should make a very poor form of spider.\n\n      A room is an interiority plenty to have windows and a cliff.\n                                          Blink once for yes. Twice for very much.\n\n                             Probably a cup of water is an image.\n       What are you in study with?\n\nThe tower fan warbles along a gray ribbon of air.\n                                   Glass I decide is a nonbinary feeling.\n\n                    Manifesto: what begins in attention begins again in speaking.\n                                                                                     In spoken to.\n\nI only pray looking up or at lampshades. In a dream\n       she had, a friend bought me a tarot deck\n\n              because we\u2019d heard you were\n                            supposed to first receive them. Consent\n\n       not to be known.\n       Marimba in the windmills. My hand beside you in my overalls.\n\n                                    It is possible the last word Plath wrote was drag\n                                    but she wanted it to be spring.\n\n                     Some architects say materials have desired forms.\n              Brick grows up as archways. Hips, hourglasses.\n\nIn the next world, I want to be something useful.\nLike a staple gun. Or in love.\n\n                     The rocks at my altar know obvious things.\n\n                                               Lower limit mountain.\n                                               Upper limit door.\n\nI miss her. Blink. Blink.\n\n                      When I press the stick of butter into the skillet,\n                                           I have to believe that the body aspires to a soul.\n\nAn envy not unique to art that, nevertheless, is art.\n\n                                                                                       Red paint on the wall.\n                                                                                       Red paint on the wall.\n\n                                           Lord, we owe this world such tenderness.\n",
    date: "2020-06-06T03:05:05.315Z",
    handle: "sheridanwalter "
  },
  {
    id: "5edd2dc16685be0017bd9a6d",
    title: "die vo\xEBl is 'n metafoor",
    bodyText: "in die woud was weer\n'n grondpad waar ek\nafgedwaal het\nen tussen die herfsblare\nonthou ek jy was eens ook\nhier\n'n vo\xEBl sonder vlerke\nen met lang bene sodat jy\njou drome bo almal s'n kon sien\nom die bome het jy my gelei \nmet jou nagtegaallied\nwat jy nie self wou hoor nie\nek het gedink ek was 'n duif\nwat langs jou kon koer\nmaar ek was 'n wurm\nwat gedink het jou mond\nwas 'n veilige gat om in te klim",
    date: "2020-06-07T18:11:13.520Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ede52a48cdd5e0017616496",
    title: "Vo\xEBltji",
    bodyText: " She does not seem to grow weary of her brief existence, not even caged, although when sleeping you can almost notice an Albrecht D\xFCrer-like melancholia pass over her walnut face. At night she sleeps covered up like us. She clutches her perch and pecks at her food, delicately sipping water from a little glass bowl which I find so beautiful I could cry.",
    date: "2020-06-08T15:00:52.127Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ee7e245306e220017ebc207",
    title: '"bad my in blom-print"',
    bodyText: 'ek wil dit oor my wange druip, \ndie melkwit voue teen my bene voel\ndie crisp issey miyake blomme teen my rug voel fladder\nelke dag die HD renonkels sien en glimlag in nuances van "sweet magnolia" en "peony blooms" ',
    date: "2020-06-15T21:04:05.967Z",
    handle: ""
  },
  {
    id: "5eee4fbb79737600175f6e4f",
    title: "Valse woorde",
    bodyText: "\r\n\r\nwoorde wisseling oor depressie\r\nval uit hul monde\r\nsoos dooie blare van bome val,\r\nin herfs\r\n\r\nhulle stoot dit rond soos\r\n\u2018n swart plastic skooter\r\ndie eggoe's versprei v\xEAr en wyd\r\n\r\ntartend spot hulle die wat rerig sukkel,\r\nsoos die druk op my toeneem \r\nsak my voete onder my uit\r\nek is 'n pas gebore lam\r\n\r\nmy kinder gedagtes word gevul \r\nmet flitsende prente van hul monde,\r\nwoorde wat soos \u2019n ko\xEBel deur my trek\r\n\r\ndiep-diep binne my word iets ontwrug\r\ndie gesweerde wond word oopgekrap \r\nek steek my gevoelens weg onder my vel,\r\n maar jy trek my oop \r\ndruk my tot ek breek \r\ntot ek vryval in my toekoms  \r\n\r\nonskuldig in die hof \r\nmaar jou hart is meer onrein\r\nas die swart kringe onder my o\xEB\r\n\r\n\r\n",
    date: "2020-06-20T18:04:43.789Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5f023aa87cd1bb00177a86b3",
    title: "Redemption ",
    bodyText: "Those fuckers\u2028will witness how you\u2028Rise from the \ndeath\u2028And you shall have\u2028Monster heads\u2028mounted\u2028To your   childhood bedroom\u2028Wall",
    date: "2020-07-05T20:40:08.616Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f27e02ab5effc00171a25e8",
    title: "Life in happy hues. ",
    bodyText: "You\u2019ve changed my life from black to-\nLa Vie en rose..",
    date: "2020-08-03T10:00:10.850Z",
    handle: "@sheridanwalter "
  },
  {
    id: "5f5b819e81d5580017490aeb",
    title: "ek het eenkeer hierdie vriend gehad",
    bodyText: "jy staan op tafelberg\nmet vlerke aan beide kante \nvan die sterre\nteensinnig bak jou hande om\nalles wat jy sien\ngryp wat jy wil h\xEA\nvat wat jy verdien\nen vanwaar die see my in \n'n wiegelied troos\nprobeer ek jou vingerpunte\nraak soos dit by my omdraai\nmaar ons loop parallel bymekaar\nverby opsoek na die ander,\ntragies aan't verander",
    date: "2020-09-11T13:54:38.051Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f6d9317deb0210017d0aa82",
    title: "Bestseller",
    bodyText: "Ek: \u201CS\xEA net vir my wat doen mens met die pyn, hierdie groot verlies?\u201D\n\nNadine: \u201CAs ek die antwoord op die vraag gehad het, het ek dit in \u2018n botteltjie gesit en verkoop, maar al wat ek kan s\xEA is: Pyn is \u2019n wave wat jy moet ry en jy moet vir hom ry totdat jy weer op die beach kom.\u201D",
    date: "2020-09-25T06:49:59.003Z",
    handle: "ena_stegmann"
  },
  {
    id: "5fa17688b2d6970017335b30",
    title: "gesange",
    bodyText: "ek sal jou graag tussen my \nvingerpunte wil vashou\nsoos wanneer ek deur my bybel\nblaai en bang is ek word gestraf\nas ek die dun bladsye skeur\nen dan sal ek elke gebod wat \noor jou maag geskryf is, \nelke hooglied wat aan jou heup\ntoegewy is \nen elke psalm wat op \njou polse bely is\nwil lees\nin die gevlekte mosa\xEFek lig op 'n soel\nSondagoggend",
    date: "2020-11-03T15:26:00.467Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e6617db5ee429768df2bfa9",
    title: "Jy",
    bodyText: "Jy: terwyl ek jou\nOm jou \nRibbekas\nVasklou\nAfgeval en seergekry\nOpgeklim en weer gery",
    date: "2018-08-28T11:53:12+02:00",
    handle: ""
  },
  {
    id: "5e6617db5ee429768df2bfaa",
    title: "DNJ",
    bodyText: "                             Ons \n            elkeen                 sit\n             op                           ons\n         eis                                  in \n          'n                                    gesiglose\n  vorm                                         en\n     staar                                        laatnag\n         na                   die                 senter \n           en                                       wens\n     hierdie                                    gedigte\n           gaan                               oor\n                ander                    weergawes \n                         van            ons-\n                                 self",
    date: "2019-05-25T14:32:17+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617df5ee429768df2bfbb",
    title: "Mars/Venus vs Aarde",
    bodyText: "Mans paai oor watse pie om te eet.Vrouens top oor watse top om aantetrek.Almal is eindelik maar onseker.Behalwe oor die dood. Ons ken net nog nie die details daarvan nie.Almal wil alles weet, maar sal nooit.",
    date: "2019-12-10T10:58:08+02:00",
    handle: "happinessattwo"
  },
  {
    id: "5e6617e65ee429768df2bfcb",
    title: "Dis",
    bodyText: "Jy se partykeer\nVir my is dit heeltyd\nEk mis jou heeltyd\n",
    date: "2019-08-27T10:43:03+02:00",
    handle: ""
  },
  {
    id: "5e6617ed5ee429768df2bfe2",
    title: "Ek het altyd geweet...",
    bodyText: "Ek het altyd geweet my rug gaan kak\n\nWat was up must come down\nNes al die ander gene van m\xF4 en p\xF4\n\nWanneer kromrug en badmooi buie\nDie orde van die dag is\nWanneer pynpille skittles word\nEn stoele organmente raak\nWanneer jy still\xEA in die bed\nEn roerloos niks probeer steur\nWanneer jy iemand anders vra\nOm jou sleutels vir jou op te tel\n\nToe ek nou die aand my ma bel\nIn Cubana se badkamer\nNa \u2018n cocktail special\n- \u2018n klein saterdag op stellenbosch -\nEk het myself toe gesluit\nDie lui laat lui\nEn vra ma\nHoekom dit so seer is?\nHoekom kan ek nie 200m loop nie?\nHoekom kan ek nie fokken 100 meter loop nie?\nHoekom ek vooroor moet loop en my rug klem soos \u2018n swanger ouma?\nHoekom ek nie kan opstaan uit my bed?\n\ntoe ek besef\nDat die beste seks wat ek ooit sal h\xEA: \nKlaar verby is\n\nHet ek\nEk het net gehoop dis later as 18",
    date: "2019-03-15T22:03:46+02:00",
    handle: "taniacoetsee"
  },
  {
    id: "5e6617ef5ee429768df2bfeb",
    title: "P(r)oeseltjie",
    bodyText: "bevry jou lyf geen penis niks is styf ek wil jou wys wat jy mis wat gee jy prys wys my wat jy doen wat jy wil h\xEA waar ek jou moet soendie fokus jou plesierleer ken jou liggaam ontbloot jou binnedier in kort:laat my toeom jou te proe...\n~ @nnieniem ~",
    date: "2019-07-30T18:34:46+02:00",
    handle: ""
  },
  {
    id: "5e6617fc5ee429768df2c014",
    title: "Die kat",
    bodyText: "Die kat sit op die mat en ruk sy wol.",
    date: "2018-08-13T15:15:46+02:00",
    handle: "neonvanlierop"
  },
  {
    id: "5e6617ff5ee429768df2c01f",
    title: "Bom",
    bodyText: "Kan jy net bedaar?Is jou oorlog klaar?Is dit nodig om die heeltyd soos \u2018n bom te maak?Ons almal weet jy pynIs dit al wat jy kan s\xEA?Hoe lank nog voor jou verbande opraak?Ek los \u2018n brief in jou BybelDis net om vir jou te laatweetDat ek nie langer kan aanhouOm al jou kak op te eet",
    date: "2019-08-03T23:43:43+02:00",
    handle: ""
  },
  {
    id: "5e848df68254f60017a1dd4e",
    title: "Seep",
    bodyText: "\nJy is meer werd as goud.\nEn in n tyd perk soos nou is jy net so skaars.\nEk kyk na jou in my hande.\nEn wonder.\nJou wit skuim wat alles skoon was.\nMiskien is ek die virus.\nDie selfsugtige doos.\nWat jou opgebruik.\nEn ek wonder as ek jou sou moes opvreet.\nOf jy my ingewande ook sou kon reinig en brand.\nTot ek al my sonde en haat uit kots.\nEn van die verlede sal kan vergeet.\nEn daar sal ek le.\nIn my eie braaksel en gal.\nUiteindelik.\nSkoon.",
    date: "2020-04-01T12:49:58.177Z",
    handle: ""
  },
  {
    id: "5e8780407c861000174ca669",
    title: "Ek skryf tos poetry",
    bodyText: "Maar jy lees dit \u2764\uFE0F",
    date: "2020-04-05T14:36:15.442Z",
    handle: ""
  },
  {
    id: "5e8b7f0bf60834001773a20b",
    title: "Tot volgende keer x",
    bodyText: "Ek s\xEA totsiens vir eers\nMiskien kry ek myself weer hier\nMiskien kry ek iemand anders\nMiskien gaan ek in die tussentyd dood\nMiskien kom ek nader aan dit wat ek moet\n\nWat sal die beste wees\nMaak dit saak?\n\nEk hoop net as ek terugkom weer hierna is ek beter, sterker , meer myself ",
    date: "2020-04-06T19:12:11.538Z",
    handle: ""
  },
  {
    id: "5e8f87066cd1670017d83929",
    title: "nuus | no news",
    bodyText: "Ek skuif die meubels wanneer daar slegte nuus drop. Soms ook sommer net; laat die oorskietlug weer bietjie roer. \n\nVanaand slaap ek teen 'n nuwe muur. ",
    date: "2020-04-09T20:35:18.935Z",
    handle: "@evertesterhuizen"
  },
  {
    id: "5ea02387ad9fac00178cd674",
    title: "Die swart mense het gegaan",
    bodyText: "Die swart mense het gegaan\nHulle korrupte Steinhoff CEO saam gevat\nHulle Westerse manier \nen individualiteit \n\nHulle het saam hulle,\nhulle inklusiewe kerke gevat \nen hulle boereworsgordyn \n\nHulle het saam hulle\nsistematiese witmens rassiste gevat\n\nHulle het wragtig hulle werke ook gevat -\nPetroljoggies, teller en skoonmakers \nhet geloop. \n\nHulle het hulle suspisie saam gevat,\nen hulle gated communities af gebreek\nHulle het terug gekeer na hulle herkoms. \n\nDie witmense het gebly\nOns het \xF3ns gated community op gebou\nOns het teen mekaar rugby gespeel, want die sanksies het ons binne gehou. \n\nUiteindelik is die rooi gevaar nie meer teenwoordig nie. \n\nMaar tog, moet nie slaap nie, my volk! \nWaak teen die Satan. \nVir Volk en Vaderland bring ek die seuns, o NG-kerk\n\nBeskerm \xF3ns, o heer,\n\xF3ns is tog u uitverkoren volk",
    date: "2020-04-22T10:59:19.951Z",
    handle: "@stefanyseymore"
  },
  {
    id: "5ea1d850e7f4c60017abfe77",
    title: "*ping",
    bodyText: "Hoe goed is dit om weer jou naam op my foon te sien\n\nDalk sal ek dit weer eendag hardop s\xEA",
    date: "2020-04-23T18:02:56.506Z",
    handle: ""
  },
  {
    id: "5eb845df97aafb0017de41ac",
    title: "Knip-knip",
    bodyText: "Die probleem van iemand inlaat, iemand toelaat om jou mure af te breek\nIs dat hulle deel raak van herinneringe\nDeel raak van jou gunsteling restaurant, van wynproe en te veel wyn drink, van bergklim, van avo op toast, van bier spritzers\n\nSo as ek skielik weer kan diep asem haal by 'n baken, terwyl die see voor my uitstrek en die huise soos Monopoly speelgoed lyk\nIs dit die gedagte van jou wat daai asem wegslaan \n\nAs ek cheesy romcoms kyk, wil ek my kop neerl\xEA op sy plek, net daar waar ek jou asems en hartklop kan tel - en kan agterkom as beide styg en dit tyd is om saggies trappe op te sluip\n\nAs ek dink aan my 5 jaar plan - belemmer deur hand sanitizer en 3-lae maskers - \nDan is dit so moeilik om jou ordentlik uit te knip\n\nWant ek was nog nooit goed met reguit knip nie\nMaar ek sal nog leer\nEk moet\nWant wat anders ",
    date: "2020-05-10T18:20:15.518Z",
    handle: ""
  },
  {
    id: "5ebd25e8ea23dd00170fa5c7",
    title: "Elegie vir Ionico",
    bodyText: "die \xE9\xE9n kon fuse\nglas aan staal\ndie ander vertel van lig\nwat jou deur donker gange ly\nIonico versmelt nou en gaan dood\nin die Moederstad se skoot\n\nal die organe moet binne bly\nal die bloed hier binne my\nin \u2018n velsak toegebind\ngewelddadig rus gevind\nmaar al my derms en binnegoed\nl\xEA uitgeryg in my eie bloed\nop my fabriek se vloer\nop \u2018n sypaadjie in Tamboer\n\nek bou vir jou \u2018n huis\nmet \u2018n kelder in die weskussand\nwant so was jy dit gewoond\nuit jou eie geboorteland\nmaar voor ek die plan kon maak\nwas jou tyd verby en afgehaak\n\nwaar toeriste loer uit busvensters\nen ons geheime kuierplekke oorvat\nvind jy op jou eie die dood\nek lig my bier op en ek knik\nwant ons is veilig hier en in ons skik\nhier in die Moederstad se skoot",
    date: "2020-05-14T19:22:02.483Z",
    handle: "antonbarnard"
  },
  {
    id: "5ec05d0fac947500173a0fa3",
    title: "vergeet ",
    bodyText: "Silwer borreltjies asem hardloop heen en weer tussen lae platgestrykte hemelruim wanneer jy die deurklokkie lui en \n\njou omhelsing word wit linne wat in 'n meditireense bries bol staan en vars suurlemoene en blou blou see en wit klippaadjies en skakeurings van dappled light onder groot ou olyfbome. \n\nJy fluister haastig erotiese geheime in olfactory ranges van Under the Leaves en petrichor en die molmreuk van bruin akkerblare in Kerkstraat en\n\njou bors duin al vinniger op en af, jou gletserhoeke al skerper; deurskynend en elke middag, net voor my behoefte kan oorneem, ruk die toeklap-traliehek knal my terug. \n\n\n",
    date: "2020-05-16T21:37:19.068Z",
    handle: "@stoepstudio "
  },
  {
    id: "5eef612839e05100177d4abd",
    title: "Poetry voice ",
    bodyText: "\nmy music has gone silent\nI must pick up my pitch\nmy voice\nto redeem my true potential\n\nhands are filled with creativity \nmy unconsciousness is pushing me out, words\nsometimes accompanied by emotions \nwhen they come \nthe stream out\nlike a steamy bath of water \nthrough the tap\nto my pen\nand there it begins\n\n",
    date: "2020-06-21T13:31:20.049Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5ef9d428a3dbc50017007e5b",
    title: "blueberry ",
    bodyText: "Koestering is gereserveer vir diegene wat free scones kry. ",
    date: "2020-06-29T11:44:40.185Z",
    handle: ""
  },
  {
    id: "5f062281a7c8360017030159",
    title: "haikoekoe",
    bodyText: "ek wil jou vasvang in 'n haiku\n'n 17-lettergreep liefdesbrief\n'n heilige 3-re\xEBl gesang \nwat net ek sal kan skryf\nwat net ek sal kan verstaan\nen ek wil die versre\xEBls oor \nen oor tel om seker te maak\ndat jy werklik uit niks uit bestaan\n",
    date: "2020-07-08T19:46:09.455Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f17f2136500900017f0964c",
    title: "Dis ook 'n rede. ",
    bodyText: '"dit mooove my diep" \n(Natani\xEBl oor enige geometriese, wit, of streperige porseleinware) ',
    date: "2020-07-22T08:00:19.638Z",
    handle: ""
  },
  {
    id: "5f56b3585c424d00170c743b",
    title: "KAAP",
    bodyText: "ek bly in die kaap. \nek bly in hierdie creamy zesty kaap \nplek waaroor binnelanders droom \nen selfs ander kusgangers ook \n\nmaar here, ek stap teen berge langs, pieke oor, onder deur woude en raak dronk by trendy caf\xE9s in newlands en draai by Mavericks op 'n Vrydagaand en suiker terug wynlande toe net voor sonoggend en Kerk toe net om weer te begin. \n\nHere hierdie is 'n plek waarvoor ek dankbaar is. Bergiepis, wit fortuners en golden hours en al. ",
    date: "2020-09-07T22:25:28.436Z",
    handle: ""
  },
  {
    id: "5f752636d4c24700178cc56d",
    title: "lucy se diamante",
    bodyText: "Ek het water oor my kop uitgegooi en gehoop dit jaag die angs en hitte weg, maar helaas. Die groot beef het wel begin toe ek die wilgerboom omhels; onvoorwaardelik aanvaar terwyl jy skarlaken patrone met my kwassie op Fabriano maak.\n\nOns het in die akkerblare gerol; grond tussen ons tone en vingers gemaal en iewers het Chico se poef op my maermerrie afgesmeer. Die aardse molmreuk van herfs het nog altyd groei en potensiaal beteken. Strangely nie Vrydagaand nie. \n\nDie donkerte het alles somehow wel okayer gemaak en om aan kole te raak met vingerpunte was nie meer seer nie. Ons het gevlieg: ho\xEBr en ho\xEBr tot die sterk reuk van manlikheid my wakkermaak en jy jou hand uiteindelik van my buik afhaal. Jou o\xEB het geflikker teen drie voormiddag en ons kon die bure hoor liefdemaak terwyl jy jou hart stukkie vir stukkie uit jou borskas pak en ek dit in sagte sneespapier vir jou toevou. ",
    date: "2020-10-01T00:43:34.953Z",
    handle: "@stoepgallery"
  },
  {
    id: "5e6617d95ee429768df2bfa2",
    title: "kraaifontein killers ",
    bodyText: "\nGoue akkerblare\nBlinknat baksteen sypaadjies\nDwarrelende molmreuk \nVet druppels maak kringe in plasse\nSteenkool wolke en ver blitse\nGeel ligte deur blokkiesglas vensters\nSwaar jasse en lesbian check serpe,\n\nstoom dryf bokant wegneem koppies\ningebo\xEB posture en europese uitdrukkings\n\nligkaatsings op teerpaaie \nswiesjende-swoesjende bande\nnat grond-plof met elke tree\ndruppel swanger blare aan struike en\nduidelike kleure\n\nFOKKEN POESPRETENCIOUS, MAAR ARTICULATE. WAT WIL JY H\xCA MOET EK S\xCA WANNEER HY SY DOMMIGHEID OOR MY SKOOT KOM UITKOTS? \n\n...dan wys jy hom maar waar Dawid die wortels gegrawe het.\n\n(en jy hardloop om die boardroom tafel tot die staffie ophou blaf)",
    date: "2018-10-04T22:13:51+02:00",
    handle: "afrikana_uit_brackenfell "
  },
  {
    id: "5e6617d75ee429768df2bf9e",
    title: "Universie\xEBl of plaaslik.",
    bodyText: "Dit voel weer soos agt jaar gelede se anxiety: millenial en free as fuck. Sonder patriarge wat hulle dogma op ons afsmeer en basaartannies wat begin sien hulle moet terugstaan. Daaityd N\xC9\xC9 geskree dat hulle wegstaan! En alweer skree ek: diekeer ja, j\xE1\xE1! J\xC1\xC1! Diekeer vir dat hulle moet naderstaan. Ek het mense nodig wat al gestap het waar ek nog nie het nie. Nodig dat iemand wat al paar keer die Swart Hond vir 'n walk geneem het, vir my kan s\xEA dis okay, gee hom net bietjie water. Ek wil hoor hoe ongelooflik sleg die oorlog was, en dat daar weird, brawe fokkers was wat uit modder en drek opgestaan het en weer probeer het. Hulle commitment stories internaliseer en hulle opdragte interpolate op 2020.Ek wil hoor hoe hanteer mense skuld. Gewone mense vir wie mens in die o\xEB kan kyk. Boeke se arms is effektief, maar tog te kort. En mediese fonds-goed! Beleggings en hulp met jarre se ervaring en wyse insae in my verhoudings. Ek weet nie hoe om hierdie op my eie te maak werk nie. Hoe het mens iemand LIEF? Voordat dit ook net 'n patroon raak.Ek het bene van klei en neuk gedurig deur waterplasse. Ek soek 'n leier, 'n mentor wat okay is met complexities + contradiction, 'n bietjie hardegat oumens, wat kan uitwys waar sit die kak die diepste en wat kan regstaan met 'n graaf vir die helpslag. Ek wil nie doodgaan met net 'n biblioteek van wysheid nie. Asseblief Here, Amen ",
    date: "2020-03-02T23:59:50+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6617d95ee429768df2bfa4",
    title: " ",
    bodyText: "God, as dit is, sal ek solank aansoek doen vir amnestie. ",
    date: "2019-07-14T21:41:53+02:00",
    handle: ""
  },
  {
    id: "5e6617de5ee429768df2bfb6",
    title: "Kom laat ons sing",
    bodyText: "Hiers ons almal nou te saam \nVergader in sy naam\nO, ma-a-mon. \n\nDeur die sand  en see gelei,\nAlmal hier verlei en\nLaat betaal\n\nGroter was sy skaal,\nHeeltemal fataal en \nSkuld in alles heen\n\nO, loof hom, \nPr\xFD\xFDs hom,\nDub\xE1\xE1i. \n",
    date: "2018-09-18T00:31:23+02:00",
    handle: "Evertesterhuizen"
  },
  {
    id: "5e6617e25ee429768df2bfc3",
    title: "nostalgia",
    bodyText: "Ek moet bieg, al wat ek die somer wil doen is erens in die son le en baie drink in die dag en swem .\nEk nodig stadige dae en vinninge nagte, sex in die oop lug van die aand, en verlief word op elke dag, elke plek, elke mens.\nMaar is ek nie net na\xEFve nie, ignorant.\n\n20 October, saterdag aand en die wind waai.\n",
    date: "2018-10-20T22:41:31+02:00",
    handle: ""
  },
  {
    id: "5e6617df5ee429768df2bfb7",
    title: "Nagtelike oggend",
    bodyText: "Deur die diepste donkernag voel dit soos oggendDie donkermaan het n sonskynglansDie lang nagstilte speel musiek in my oreMy koue hart brand warm in myMy vergete gedagtes smelt weg in stromeVan helder modder water poeleMy gedagtes slaap in sy wakker oeVerskuil teen die nag se warm koueDie woorde vertel van die warboel binnekantSny deur bene diep binne myDie nagstilte neem sy wraak en verjaag die musiekDie songlans word verdring deur n donker maanMy vuurwarm hart smelt weg in myTot net die ysflokkies oorblyVan n sprokiesdroom bly niks meer oorDie helder donker nag alleen bly staan",
    date: "2019-07-12T02:11:51+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617ee5ee429768df2bfe6",
    title: "\u25CB",
    bodyText: "Hierdie gevoel van viesgeit, gatvolgeit vir jou gesig, gatvolgeit vir die manier hoe ek altyd minderwaardig voel by jou. Vies vir myself vir hoe maklik ek oorgee en jou die keuses laat maak. En hoe ek mis hoe baie jy vir my opgee en vertrou. Ek haat hoe reg jy soms is. En haat myself vir omdat ek dit so haat. \n\nUrgh. \n\n",
    date: "2019-06-23T20:56:35+02:00",
    handle: ""
  },
  {
    id: "5e6617df5ee429768df2bfb9",
    title: "Inside Joke",
    bodyText: "Ek kort nie \u2018n Jeniffer Arniston \nEk kort dagdronk oomblikke \nDie diepte van jou o\xEB\nWaarin berge versteek die illusie \nVan jou\nDie 30 Seconds om te weet jy\nIs die begin en die einde",
    date: "2019-01-16T08:37:28+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6617f85ee429768df2c006",
    title: "vry(dag) ",
    bodyText: "links,\naf met die trappe,\nweer links,\nin die parking lot\nin die donker\nis jou dye daar\nen jy proe na gin\n(of iets)\nen ek snak effe na asem\nen jou stoppelbaard\nmaak bietjie seer...\n\nweer! ",
    date: "2019-05-04T15:58:47+02:00",
    handle: ""
  },
  {
    id: "5e6617e65ee429768df2bfcd",
    title: "Alis Propriis Volat",
    bodyText: "chronies opsoek na liefde\xA0'n selfvervulde immuniteit daarteen\xA0settle maar vir akute aanvaarding\xA0ewig die verslaafde van pyn en seer\xA0geneesde afvlerkige,ek en my liefde\xA0wag geduldig\xA0vir jou terugkeer\nsalve",
    date: "2019-11-07T09:38:41+02:00",
    handle: ""
  },
  {
    id: "5e66188c4cc5c10017bc8b74",
    title: "Ekt jou gemaak",
    bodyText: "\nJyt my geneem na \xF1 uit-kyk-punt\nEn met jou vinger elke droom uit gewys\n\nMaar toe ek om draai is jy weg -\nPer tuig of per trein -\nHet jy rus gaan soek -\nWaar winter winter is \nEn droog wyn is\nEn nie weer nie\n",
    date: "2020-03-09T10:21:00.033Z",
    handle: ""
  },
  {
    id: "5e6617eb5ee429768df2bfde",
    title: "I does not want to give poem a title cause this is not really a poem",
    bodyText: "Tussen die begrafnisreelings deur wonder ek, wie eendag myne sal bywoon. \nEn dan besef ek. Ek moet dalk n beter mens wees. En dan besef ek. Fok die mense. Niemand gee werklik om nie. \nEkt regtig nie geweet begraafplaas word met n dubbel a gespel nie. ",
    date: "2019-07-03T16:39:14+02:00",
    handle: ""
  },
  {
    id: "5e6e69c0a133e800175f9afb",
    title: "baba",
    bodyText: "baba\nmoet nie spesiaal voel nie\nek noem almal baba deesdae\nnet soos jy\njou tong\nin almal se keel afgedruk het\n\nbaba\nmoet nie vir my \u201Cela ela\u201D nie\njy is net \u2018n kind\nwat nie weet wat liefde is nie\n\nbaba\ndie graf wat jy vir my gegrawe het\nhet jy self in geval ",
    date: "2020-03-15T17:45:36.998Z",
    handle: ""
  },
  {
    id: "5e6617ee5ee429768df2bfe8",
    title: "Bier",
    bodyText: "Nog",
    date: "2019-06-13T19:37:44+02:00",
    handle: ""
  },
  {
    id: "5e6e6abba133e800175f9afc",
    title: "my gedigte rym nooit nie",
    bodyText: "ek baklei nie meer met jou nie\nek baklei met tyd\nen probeer myself vergewe\ndat ek soveel toegelaat het\ndat ek eenkant gestaan het\nterwyl jy jouself\nterwyl jy my\nterwyl jy ons\nverniel het",
    date: "2020-03-15T17:50:09.452Z",
    handle: ""
  },
  {
    id: "5e6617f25ee429768df2bff5",
    title: "Wat wil jy van my h\xEA?",
    bodyText: "Wat moet ek doen?",
    date: "2019-02-02T23:07:59+02:00",
    handle: ""
  },
  {
    id: "5e6617f45ee429768df2bffa",
    title: "N ongmerkwaardig man",
    bodyText: 'In n twee slaap kamer woonstel in Kaapstad.Bly n onmerkwaardige man.Vir jare staar hy na n skerm.Wat sy siel deur sy o\xEA ste\xEBl.In twee ure se verkeer.Sit n onmerkwaardige man.Maak hy sal planne vir die toekoms.N oprenks en n rentekoers wat sy lewe kan bevorder.En toe kom die Dokter.N nog n operasie die keer n bietjie minder tong en n bietjie meer kies."Twee dood, drie gewond in kantoor selfmoord": Lees die koerant opskrif.Wie kon dit verwag van so stil,Onmerkwaardig man?',
    date: "2020-02-10T15:14:38+02:00",
    handle: ""
  },
  {
    id: "5e6617f75ee429768df2c005",
    title: "KONTtoere",
    bodyText: "die reis het begin:jy vat aan my hand \n\ndie grense het geskuif: \nweggevoer na 'n ander land \n\njou vingers wat streel:\ngraveer lyne in my lyf \n\nsag en presies:\ntwee vingers naby my lies \n\njou toer \nmy kont \n\nretoer? ",
    date: "2019-07-30T18:17:19+02:00",
    handle: ""
  },
  {
    id: "5e84ef2442e1000017befb02",
    title: "Isolasie maak mense monsters_Covid19",
    bodyText: "Haal my om Vadersnaam van elke Whatsapp gr... (ek kan nie eers hierdie poem skryf sonder 'n whatsapp wat.....(FOKKIT!) my selfoon skerm deurmekaar krap nie.) ...oep af tot na hierdie tyd verby is. ",
    date: "2020-04-03T08:57:32.419Z",
    handle: ""
  },
  {
    id: "5e77c2519ad39400173645eb",
    title: "klomp woorde",
    bodyText: "Ek dink nie ek gaan kry wat ek wil h\xEA nie, \nEks te klein en die te groot,\nDaai plek kon grooi terwyl ek moes worry\n\nMaar ek dag droom nog - \nOor skiet bo oor die sterre,\nBo oor huile \nBo oor julle,\n\n\u201CMajor Tom to ground control\u201D\nEkke kan dit fokken sien, \nGee dit net vir my. \nNet die laste droom, \ndarna is ek leeg, \nOp gedroom vir n lewe,\n\nDis amper winter - \nDalk is dit amper somer",
    date: "2020-03-22T19:53:53.060Z",
    handle: ""
  },
  {
    id: "5e8b9ce1f60834001773a20d",
    title: "Lucy's diamonds",
    bodyText: "Ek het water oor my kop uitgegooi en gehoop dit jaag die angs en hitte weg, maar helaas. Die groot beef het begin toe ek die wilgerboom omhels; onvoorwaardelik aanvaar terwyl jy skarlaken patrone met 'n kwassie op Fabriano maak. Ons het in die akkerblare gerol; grond tussen ons tone en vingers gemaal en iewers het die maltees se poef op my maermerrie afgesmeer. Die aardse molmreuk van herfs het nog altyd groei en potensiaal beteken. Strangely nie Sondagaand nie. Die donkerte het alles somehow wel okayer gemaak en om aan kole te raak met vingerpunte was nie meer seer nie. Ons het gevlieg: ho\xEBr en ho\xEBr tot die reuk van rou vlees my wakkermaak en jy jou taai hand uiteindelik van my buik afhaal. Jou o\xEB het geflikker teen vyf voormiddag en ons kon die bure hoor liefdemaak terwyl jy jou hart stukkie vir stukkie uit jou borskas pak en ek dit in sagte sneespapier vir jou toevou. ",
    date: "2020-04-06T21:19:29.344Z",
    handle: "@Verbatim "
  },
  {
    id: "5e8dd8c9c6965b00171571c3",
    title: "\u2606fish + Lockdown",
    bodyText: "Geen onverwagse gaste: Dillie dildo drip-dry onbeskaamd in die oopte na badtyd. ",
    date: "2020-04-08T13:59:37.078Z",
    handle: ""
  },
  {
    id: "5e8f2b6f6cd1670017d83927",
    title: "Coveted Covid19 ",
    bodyText: "\n'\xF1 Gebaar van 'n beperkte afstand\nvolstaan, '\n\u0144 knik,\n'\xF1 onbeduidende glimlag of 'n \nhand wat effens gelig word,\nnie op soek na sy eweknie nie,\nnet 'n waarskuwing van binne.\n\nDie erkenning om terug te staan.\n\nElke pragtige vreemdeling '\n\xF1 barbaar\n\nmet 'n muil aan \ndie ander kant van die hek.",
    date: "2020-04-09T14:04:31.172Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e8f7a126cd1670017d83928",
    title: "Generasie vervloekens",
    bodyText: "My ma was n bietjie mal\nDit het my n bietjie mal gemaak",
    date: "2020-04-09T19:40:02.312Z",
    handle: ""
  },
  {
    id: "5ebbde749dc8020017bf64dc",
    title: "Moedersdag ",
    bodyText: "Dalk is dit goed my ma't nie Facebook of Instagram nie... \n\nEk sou haar heeldag tag in worshond videos. ",
    date: "2020-05-13T11:48:04.425Z",
    handle: ""
  },
  {
    id: "5e911395dd922900172d29bc",
    title: "Michael Angelo",
    bodyText: "\n\n\n\u201Cgeen hoereerders of afgodedienaars of egbrekers of wellustelinge of sodomiete of diewe of gierigaards of dronkaards of kwaadsprekers of rowers sal die koninkryk van God be\xEBrwe nie\u201D -bybel \n\n\njy was nie eiesinnig \n\nterwyl jy aan die lewe verstik het en\n\nvriende ingeruil het vir draagbare dae nie\ndie manier waarop jy met hulle gepraat het\n\ngesond-uitgeteer \njy was verneder\n\nmoet asb nooit jouself as normaal beskou \nof\nprobeer wees nie\n\n\nop hierdie oomblik is jy niks\nvanuit die fucked afrikaanse kultuur \n\nsoms is selfmoord \xF1 karkas \nwat die grond uitstel \n\nklim uit daai kas\nverf jou naels bloedrooi \nwant, kom ons wees eerlik \njy mag\n\nen as jy mooi geskilder het \nin die malhuis \n\nsal hulle jou \xF1 genie op jou\nsterfbed noem \n\n\nen \xF1 handjie vol verwelkte \n verbleikte oranje roosblare in \xF1 graf strooi\n\nen die dominee of pastoor of priester of iemand met \xF1 ses maande kursus in bybelstudie sal een van Paules se rympies aanhaal\n\nen op die horison sal \xF1 homoseksuele storm broei \n\nen woed \n\n\n\n",
    date: "2020-04-11T00:47:17.635Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ed206d475d7300017ba3656",
    title: "Danie",
    bodyText: "\nJou consciousness wou my nie meer gehad het nie en hier is myne wat groet.",
    date: "2020-05-30T07:10:12.536Z",
    handle: ""
  },
  {
    id: "5e96c19e99880400172f6529",
    title: "Onderstening Geweier",
    bodyText: "Die een se dood is die ander se brood.\nDink n man uit sy huis kantoor.\nTerwyl n virus die mensdom opfok.\nSit voor die venster.\nEn droom van n rykdom sonder geld.\nN epos kom deur.\nJou salaris word met vyf en twintig persent verminder.\nMaar wat van die UIF fonds vra die man.\nOnderstening geweier.\nWees net bly,\njy het nog n werk.\nVolgende maand is jy dalk nie so gelukkig nie.",
    date: "2020-04-15T08:12:00.735Z",
    handle: ""
  },
  {
    id: "5ee24b8d7cc9ee0017cc57a8",
    title: "moccasins",
    bodyText: "dis so maklik om weg \nte kom met moord wanneer\nalmal 'n geclich\xE9de myl in \njou skoene loop\nmaar hoe lank moet mens loop\nvoor jy jou eie paar weer\nmag aantrek? ",
    date: "2020-06-11T15:19:41.230Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e9e7d3113332100177f4c3b",
    title: "Tye",
    bodyText: "Goeie more\nFok jou, \nDis net die selfde as gister\nFok my,\nNag\n",
    date: "2020-04-21T04:57:21.903Z",
    handle: ""
  },
  {
    id: "5ee7bec3306e220017ebc206",
    title: "Hi",
    bodyText: "Hello DNJ \nEk wil collab \n@katkedesign \u{1F90D}",
    date: "2020-06-15T18:33:19.526Z",
    handle: "@Katkedesign "
  },
  {
    id: "5ea738a8eec58900170b635d",
    title: "VROEGHERFS 2020",
    bodyText: "Vandag is die verhoog weer leeg.\nDie kroegstoel staan, alleen, verlaat\nEn daar\u2019s geen boodskap, liggies,\nGeen gepraat.\nStokstyf staan die mikrofoon se staander daar.\nVanaand is daar geen liedjies, geen kitaar\n\nSlegs die stilte\nVan rye, rye sitplekke\nWat oorstelp daar sit en luister\nNa die leegte\nWat weerklink \u2013\n\nSoos strofes\nWat geskryf is\nSonder ink,\nOnsigbaar\nEn gewigloos\nSoos \u2018n blaar\nWat warrel, warrel, warrel\nDeurmekaar.",
    date: "2020-04-27T19:56:13.607Z",
    handle: "koosakombuis"
  },
  {
    id: "5f1024709591a70017ec863c",
    title: "Dekendag",
    bodyText: `Sommige dae moet 'n mens net in die bed bly. 

Nie jou beheertoring opwek nie. 
Nie die kontrolekamer aktiveer nie.
Nie die luike oopskuif nie. 
Nie die deken aftrek nie. 
Nie enigiets nie. 

Dis net veiliger vir almal. 

En ek het vanoggend, perongeluk wel, die waarskuwingsflitse ignoreer en "start" gedruk. `,
    date: "2020-07-16T09:57:04.943Z",
    handle: ""
  },
  {
    id: "5eb1b9006ee084001781c125",
    title: "2020.05.05. ",
    bodyText: "Fluit fluit... ",
    date: "2020-05-05T19:05:36.016Z",
    handle: ""
  },
  {
    id: "5f11c29ad7af7e0017d1235f",
    title: "Virale Verantwoordelikheid",
    bodyText: "Behou jou afstand\nBly tussen jou 4 mure\nStaan op, maak koffie, werk met die gevaar, versmoor in warm lae van beskerming\nEn raak paniekerig oor die klein kolletjie wat jy miskien vergeet het om te skrop\n\nSkryf jou familie, jou vriende, jou safe havens af - vir nou\nWees verantwoordelik\n\nEk wens om onverantwoordelik te wees kon weer eerder 'n helse hangover beteken\nAs om te wonder of jy met 'n gesprek\nIemand se hospitaal toelatingsvorm teken\nEk wens dit het laat wees vir klas beteken\nEerder as om te vrees of jou (close) contact lys te lank raak\n\nEk wens dat ander mense kan verstaan dat onder ons blou maskers en hospitaal pakkies\nOns ook sukkel met verantwoordelikheid \n",
    date: "2020-07-17T15:24:10.344Z",
    handle: ""
  },
  {
    id: "5ed96e2c2aa6f00017c29596",
    title: "Dandelion ",
    bodyText: "From you \nThe flowers \nGrow,\nAnd do you \nUnderstand \nWith \nEvery\nSeed you sow\nYou make this \nCold world,\nBeautiful.",
    date: "2020-06-04T21:57:00.516Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f1b48414627630017768c09",
    title: "Binne 'n o o g k n i p",
    bodyText: "N susters miskraam vroeg\nEen totsiens begrafnis aan oumie\nN gehuil tot 12\nEen oproep na half\nN gesleede jaag na Virginia\n18 verlore skaapie beeste tuis na 3\nEen ys stil rut terug by die huis\nN moedswillig lang dag later\nDraai van leeg na vol\nBinne my een Vrydag middag na aandete ",
    date: "2020-07-24T20:44:49.145Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5edd8035f4ed4a00179eba41",
    title: "\u25CF\u25CB",
    bodyText: "Soveel kleur. Soveel swart. \nSoveel kleur. Soveel wit.\nDankie. Amen. ",
    date: "2020-06-08T00:03:01.067Z",
    handle: "@stoepgallery"
  },
  {
    id: "5f33ec052d12d6001752cb3c",
    title: "Missed ",
    bodyText: "And what doesn\u2019t kill us \nTurns to grey",
    date: "2020-08-12T13:17:57.710Z",
    handle: "@sheridanwalter "
  },
  {
    id: "5ee8b935306e220017ebc208",
    title: "Wave of mutilation ",
    bodyText: `"I've kissed mermaids, rode the El Nino
Walked the sand with the crustaceans
Could find my way to Mariana
On a wave of mutilation" 

Siek en psigopaties,
Jy is beslis nie soos ons nie
Wil ek h\xEA bloed moet drup. Eers klein spikkellyntjies, en dan bloedrooi blompatrone
En miskien selfs riviere, om die blouboomare te weerspie\xEBl.
Laat dit brand en tap.

Of altans. Niks.
Sit daai simpel gedagtes eenkant. L\xEA eerder hier en voel niks nie
(soos watte toe gedraai)
-jy is nog steeds nie een van ons nie.
"You'll think I'm dead, but I sail away
On a wave of mutilation" `,
    date: "2020-06-16T12:21:09.425Z",
    handle: ""
  },
  {
    id: "5f4a29189cc6c800170f1e2e",
    title: "Maangepla",
    bodyText: "my Ouma het altyd ges\xEA ek is 'n donkerkind\nmy ma dink ek is melodramaties. \nparty dae voel ek niks nie; voel ek soos 'n hol porselein pop op 'n rak in Ouma se huis\nmaar ek het lewenslange neigings na hartseer en vul myself dus met traanigheid en treure. \nek is met die maan gepla - so het Ouma ges\xEA (ek moes seker haar woorde ter harte geneem het, want daar is nou sekelmane onder my o\xEB) ' mal mense is met die maan gepla'  s\xEA ma\nsys reg, natuurlik, maar sy weet dit nie want ons praat nie \nsy sien liewers 'n porselein gesiggie as gekraakte ledemate",
    date: "2020-08-29T10:08:24.022Z",
    handle: "@cx_lyb"
  },
  {
    id: "5eedf9bb79737600175f6e4e",
    title: "Light",
    bodyText: "Saint you are to moths,\nto bees. Such abundance \noperate redundant eyes.\nShiny bibelots studded dull\nfaces. In your absence \ndarkness wouldn\u2019t be seen.",
    date: "2020-06-20T11:57:47.092Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f4cfb3c5e862f00172a972f",
    title: "Maandag",
    bodyText: "in 'n papier-mach\xE9 boot reis\nek deur deur die rivier\nwat vloei in A-mineur\nwit en swart golwe wat \nmy in drie-vier rondswaai \nvermom in die idee\nvan roetine \nmaar waar is die struktuur\nwanneer ek sonder houtgom\nen klavier\nby die einde van die aarde \nmy laaste wals draai? \n",
    date: "2020-08-31T13:29:32.092Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f26ff15f6beaf0017208955",
    title: "ek hou van haiku's okay",
    bodyText: "ek is 'n haiku\nwat wag om te gebeur maar\njy kan nie tel nie",
    date: "2020-08-02T17:59:49.022Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f7a3c77f74b190017dbc2a2",
    title: "Natuurverskynsel",
    bodyText: "Daar was \u2019n aardbewing in die Kaap \u2014 twee weke n\xE1 jy my uitmekaar geruk het.\n",
    date: "2020-10-04T21:19:51.240Z",
    handle: "ena_stegmann"
  },
  {
    id: "5f63b6a55161d0001707fa89",
    title: "Aroma 2",
    bodyText: "Eenvoudig gestel :\nNa wat ruik en hoe smaak dit as jy kom. ",
    date: "2020-09-17T19:19:01.348Z",
    handle: ""
  },
  {
    id: "5f94b7f7fae77f0017e9d764",
    title: "eybers en haar parkiebank",
    bodyText: "elizabeth het dit destyds al voorspel: \n\ntwee swane op 'n meer;\n\nhy het haar ger\xFAk,\n\ngepluk; kniediens in geblou.\n\nvanuit die rooi land newels\n\nin sy warboel w\xEAreld van hals en dubbelhals \n\nsy klein dood iewers:\n\ntwee peuters en hulle voorliefde \n\nvir vat, balanseer, \n\nstyptrek en \n\np\xE9rs probeer. \n\n\n\n\n\n\n\n\n\n",
    date: "2020-10-24T23:25:43.032Z",
    handle: "@stoepgallery"
  },
  {
    id: "5e6617dc5ee429768df2bfad",
    title: "Wellington ",
    bodyText: "kom ons huil\n\na) oor hierdie\n    Breyten gedigte \nb) oor die geld wat \n    ek daarop spandeer het\n    (en dus nie meer het nie) ",
    date: "2019-06-11T20:06:40+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617dc5ee429768df2bfac",
    title: "Ou",
    bodyText: "Wat is rym evenInelkgeval?",
    date: "2019-11-08T22:58:20+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617de5ee429768df2bfb5",
    title: "Sentiment",
    bodyText: "Elke mens ruik anders\nPa het na oorwas\nen pietblou\nen plaashuis \nen aromat \ngeruik\nWaar defok moet ek nou weer daai combo gaan uitkrap\n",
    date: "2018-10-19T14:36:48+02:00",
    handle: "augustazietsman"
  },
  {
    id: "5e6617e85ee429768df2bfd3",
    title: "Dinner",
    bodyText: 'I like the part of South Africa where you can call meat on a fire "Dinner". ',
    date: "2019-07-05T14:11:29+02:00",
    handle: "_darnit_"
  },
  {
    id: "5e6617f65ee429768df2c000",
    title: " ",
    bodyText: "Om 'n hart wat lek oor die vloer te smeer is 'n verskriklike ding. \n\nMag die mal kettingsae nooit in jou sagtevleise kom draai nie. \n\nMag die maalvleisgedagtes jou nie verteer nie. En mag jy nie te veel bloed verloor nie. \n\nEendag sal jy weer die Victorinox bo jou kop kan swaai en soos 'n panga deur 'n ryp vrug slaan. \n\nMaar tot dan... \nVerbind eers. ",
    date: "2019-06-20T04:31:55+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e6617fb5ee429768df2c011",
    title: "Lui stelling (vir 'n gedig van later) ",
    bodyText: "Great _____________ herinner my op 'n comforting manier hoe klein ek is. (En dat daar greatness en kompleksiteit bo my begrip is waaraan mens net kan oorgee). Broos-tevrede-koe\xEBlvas in die teenwoordigheid van briljantheid. DigkunsBergtoneleWiskundeArgitektuurMense StoriesNatuurverskynselsTeorie\xEBTegnologieIdeesKunsKaaskoek",
    date: "2019-07-12T23:34:32+02:00",
    handle: "evertesterhuizen"
  },
  {
    id: "5e9b4899f55ce6001715e8ce",
    title: "Erasure ; T4T BY OLIVER BAEZ BENDORF ",
    bodyText: " he be drunk,  the sweet way he.\nBrother. I think about his XX It\u2019s like a joke,\n dreaming of men .My favorite\none where we. We on river rock\nswam out. out-of-\nour clothes \nBut he. Inclination surges\nthrough window\u2014that wind, you think\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 we found beach town.\nIf I had the right to the root of\u200A him.\nShouldn\u2019t I out of anyone\nthink there\u2019s something right about us mating.\nThat night .Chest flying. Tonight my \nSomewhere swings open we all know we all want.",
    date: "2020-04-18T18:36:09.437Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e9f7423ad9fac00178cd671",
    title: "Fall (down) ",
    bodyText: `Ek't vanaand warm brood en groentebroth gemaak. Die stovetop was in die verkeerde huis. 

Bottomline: is hierdie "liefdesverhouding" iets? Ek soek eintlik net 'n type B getuie van my lewe. `,
    date: "2020-04-21T22:30:59.800Z",
    handle: ""
  },
  {
    id: "5ecd328628639200171d80b8",
    title: "1 Junie 2020",
    bodyText: "let's get drank. ",
    date: "2020-05-26T15:15:18.343Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f1321858efe9d0017ee48d4",
    title: "soettand",
    bodyText: "Die nektaar van 'n sappige, verbode roosknop bly een van die lekkerste soetgoed. ",
    date: "2020-07-18T16:21:25.753Z",
    handle: ""
  },
  {
    id: "5f2c354574d21600178f4429",
    title: "Die ex se dagdroom ",
    bodyText: "Ek sien jou voor my\nJou vry van vroeer se speeksel dryf in my dagdroom\n\nMy fok\nHy het met my gecheat op die girla langs my en steeks dwaal hy binne my soos 'n spook\nEk trek die streep. \nGeen meer dose in my lewe",
    date: "2020-08-06T16:52:21.965Z",
    handle: ""
  },
  {
    id: "5f49863a9cc6c800170f1e2d",
    title: "ws",
    bodyText: "thank you. thank you for being my gordons and my jesus in the times it mattered most. thank you. ",
    date: "2020-08-28T22:33:30.407Z",
    handle: ""
  },
  {
    id: "5f4d39b95e862f00172a9730",
    title: "lockdown level 5 ",
    bodyText: "TAKE ME BACK! ",
    date: "2020-08-31T17:56:09.176Z",
    handle: ""
  },
  {
    id: "5e6617e25ee429768df2bfc2",
    title: "28",
    bodyText: "Menseverhoudinge\n\nOns kyk of ons oor n jaar steeds gesels. ",
    date: "2019-04-29T23:30:35+02:00",
    handle: ""
  },
  {
    id: "5e6617e65ee429768df2bfcc",
    title: "fok tyd",
    bodyText: "kyk hoe stap die tyd.hy hardloop al.maar wat gebeur as die uurglas niks meer het om te verloor nie?",
    date: "2020-01-26T14:46:15+02:00",
    handle: ""
  },
  {
    id: "5e6617e75ee429768df2bfd0",
    title: " ",
    bodyText: "Wat as dit kanker is?",
    date: "2019-07-14T10:46:59+02:00",
    handle: ""
  },
  {
    id: "5e6617e95ee429768df2bfd4",
    title: "Ex-lovers en hoe dit voel... ",
    bodyText: "\nToe ek sien, dat jy my sien,toe hervorm my brande sieltot n onbekende, nuwe, verniel: Ek dog eks oor joumaar dit blyk ek soek tognou nog...soms, mal genoegna jou ",
    date: "2019-09-29T23:59:42+02:00",
    handle: ""
  },
  {
    id: "5e6617e95ee429768df2bfd7",
    title: "Jou laaste dag",
    bodyText: "Wat bring hierdie dag? Vaal sonskyn of helder dag. Ek le en luister na die begin van hierdie dag. Duifies wat koer, voeltjies wat tjirp, hondjies wat blaf. Weereens wonder ek wat bring hierdie dag.\nMy hart raak beangs. Is vandag jou laaste dag? Jy's bleek en moeg en seer. Is hierdie jou laaste dag? Jy praat deurmekaar en my hart pyn. \nJou oomblikke word meer helder, is hierdie jou laaste dag? Ek kyk nie meer na die uurglas. Ek wonder nie meer. Ek hoop nie meer. Ek bid nie meer. Ek huil nie meer, is hierdie jou laaste dag?\nDan word die dag helder en yskoud. Ek wou nog wonder daaroor. Die gordyne ritsel sag. Die son verblind my. Ek knyp my oe toe. Ek sien die engele vir jou wag. Jou laaste glimlag mooi en sag. Sonder seer of pyn. Die angs in my hart verdwyn. Hierdie was toe jou laaste dag. Ek kyk in verwondering na jou uurglas. Die engele het hom omgedraai en die sandjies begin weer loop. Maar hierdie was jou laaste dag by ons. Jou nuwe lewe wag....",
    date: "2019-06-02T09:01:06+02:00",
    handle: ""
  },
  {
    id: "5e6617ea5ee429768df2bfd8",
    title: "RYM",
    bodyText: "",
    date: "2019-11-09T07:03:39+02:00",
    handle: ""
  },
  {
    id: "5e6617eb5ee429768df2bfdc",
    title: "End",
    bodyText: "Jyt my genooi vir ete\nBy 'n beautiful wynplaas\nPlek en tyd met my vasgemaak.\n\nEk het my mooiste rokkie aangetrek\nMy beste parfuum\nNet vir jou\n\nEk het gewag, \nJyt nie opgedaag nie\nNie eers 'n boodskap nie\n3 ure later net asof niks ingestap,\nOns afspraak\u2026vergete\n\nVir jou is/was ek nie belangrik genoeg \nDis alles reg\nGeen probleem\nGelukkig het 'n wag\nvoor my hart gewaak\nThe end.\n",
    date: "2019-01-29T20:07:07+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e6617f25ee429768df2bff4",
    title: "n laaste totsiens vir A ",
    bodyText: "Wat bly oor vir die res van die pad wanneer n liefde soos ons sn nie meer tussen ons is nie? \nWat het ons anders gehad as mekaar vir n rukkie? \nHoe kry ons weer dit wat ek en jy gemaak en gevorm en gebou het met die klei wat aan ons hande deur mekaar se hare en oor mekaar se gesigte en lywe en binne mekaar se wesens gestreel en gevat en gebind het? \nHoe voel ek jou weer teen en binne en om my wanneer jy deur my geheue dans en ons mekaar vashou op die maat van maanlig? \nWie gaan weer vir my die sterre gee as hy my menswees sien en dit hom laat glimlag? \nMens weet nie dat jy hol is tot iemand anders jou vol maak nie. \nMens weet nie dat jy nooit weer so lief gaan wees tot jou liefde weg is nie.\nAlleen stap \nDie lewe deur \nEn swerwend soek\nNa net jou \nAlleen \nWant daar sal niemand weer wees wat jou in my volmaak nie",
    date: "2019-05-26T16:37:52+02:00",
    handle: "marietsteinmann "
  },
  {
    id: "5e6617f35ee429768df2bff6",
    title: "Totsiens",
    bodyText: "Ek laat myself in 2019 agter",
    date: "2019-12-31T23:19:58+02:00",
    handle: ""
  },
  {
    id: "5e6617f45ee429768df2bffb",
    title: "FPK",
    bodyText: "Ek glo in die plafon\nEk glo dat die gordyne nie van self oop kom",
    date: "2018-12-19T20:13:37+02:00",
    handle: ""
  },
  {
    id: "5e6617f75ee429768df2c002",
    title: "Morgue toe",
    bodyText: "Ehhh... yho. I don't know no more. \n\nAll these fucking things, man. Hai. \n\nThey eat up your brain from the inside. Like a rotten piece of meat. Those little white goggos man, they eat, eat, eat. \n\nAnd what is left? Only the bones left. And then you die. \n\nYou must watch out for this thing, (gently tapping the temples) \nOnce the little white goggos get inside... it's over.",
    date: "2019-08-21T02:06:33+02:00",
    handle: "\u2606"
  },
  {
    id: "5e6617fc5ee429768df2c013",
    title: "Irritasie",
    bodyText: "\nNiks wil net werk \nSoos dit k\xE1n nie\nJy irriteer my ook\nEk wil ontsnap \nEn bietjie net wees\nIn die kamer \nIn my kop\n",
    date: "2019-06-07T12:13:09+02:00",
    handle: ""
  },
  {
    id: "5e6617fd5ee429768df2c019",
    title: "Fokken Emosies",
    bodyText: "Jy fok my op\nJy fok my rond\nMaar fok tog,\nek hou daarvan",
    date: "2019-06-24T06:13:14+02:00",
    handle: ""
  },
  {
    id: "5e6617fe5ee429768df2c01c",
    title: "Vir LG",
    bodyText: "Jy stuur vir my foto'sVan sonsondergange op 'n horison \nEn my hart wens ek kon\nDaar langs jou sit\nEn myle ver kan kyk\nWaar alles so rustig lyk\nWaar die wolke saam trek\nAgter 'n windpomp aan\nWaar bekommernisse gaan\nEn net rustigheid bly staan\nDaar in die Noord-Kaap ",
    date: "2019-12-08T10:46:57+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6789da32344d001776c826",
    title: "Uit(erste)",
    bodyText: `"Heimlik beangs" oor die gedagte dat jy moet weg, wegger, wegste van hierdie tyd. Jy staan een oomblik midde die Ou Karoo waar die lug soet ruik en stil is, 'n sonderlinge stilte: 'n positiewe stilte wat alles omhels, wat substansie het, en lewe. Jy staan in die senter van 'n fyn kristal- met die le\xEB hemel wat oopsprei bo jou kop en die eindelose Karoovlakte onder jou voete. 

Jy kan nie gaan voor jy die rustige roetinelewe onder die wit mure en koel vertrekke aan jou eie vel gevoel het nie. Alles langsaan die ho\xEB ho\xEB wiegende populierbome in die oggendson. 

Heimlike angs. En dit raak duidelik dat niemand ooit hier sal oorleef sonder om self iewers in sy wese, groot en sterk en vry te wees soos hierdie w\xEAreld nie.`,
    date: "2020-03-10T12:36:42.443Z",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6b005f3c59a9001787c302",
    title: "anxiety",
    bodyText: "jy weet as jy jou \noorfone gebruik en dit \nnetjies oprol en dit in \njou baadjie se sak sit, \nmaar as jy dit weer wil gebruik\nis dit 'n absolute\ngemors\n'n totale koekerasie\n'n onverklaarbare nes\nvan deurmekaar drade? \n\ndit, terwyl die liedjie wat jy\ndie meeste haat in die agtergrond\nspeel\nsonder end\nal is dit n\xEArens ingeprop nie. ",
    date: "2020-03-13T03:39:11.330Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e8ee6676cd1670017d83926",
    title: "2012",
    bodyText: "Laat my net hierdie gedig skryf\nSoos al die ander met gebroke harte\n\nMag ek my verdriet neerle \nNa al die roekeloosheid en gestamp \nMag ek jou neerle\n\nMag ek ons drome laat gaan\n\n\nSwart, Dis alles dood\nBegrawe onder hope klam grond\nEk en jy\n.\n\nEn dan na n rukkie \nDan kom daar weer lewe\nDit wat ek en jy was\nIs nie meer\n\nMaar ek weet daar sal weer wees\nUit die pyn en die seer \nVan ons\n\nSal daar weer wees\nNie ons \nMaar meer \n\nMeer\n",
    date: "2020-04-09T09:09:59.433Z",
    handle: ""
  },
  {
    id: "5e97404ac85b410017d45a9a",
    title: "\u2022^>\u2022",
    bodyText: "Elton, leemte\nTinder, leemte\nvinnige gemaklike plesier, leemte\nHonger, leemte \nAmy Winehouse , leemte \nNeem 'n slag, leemte\nKleinhandelaar, leemte\nSo sleg, leemte\nRingleier, leemte \ntou gehang, leemte\nAmen kringe, leemte\nBaie gemartel, leemte\nTreurendes van sondaars, leemte \nBedroefdes van heiliges, leemte\nDieselfde skande, leemte\nEnige skaamte, enigsins leemte \nLiefde vir 'n persoon van kleur, leemte \nLiefde met 'n titel, leemte \nweelde, leemte \nStap huis toe, leemte\nHardloop huis toe, leemte \nteken in spel, leemte \nSpel halleluja in die hel, leemte \nWaarom, leemte \nPragtige man, leemte\nOntsnapping, leemte\nSk\xEAr sneeu, leemte\nHoe ons aangaan, leemte \nByt kettings, leemte\nKrap die woorde vir onsself, leemte \nTot hul o\xEB vaar\nTot hulle\nTotdat hulle in die afgrond gesteun en gemartel word\n\nOns het die nuwe geloftes laat l\xEA\n",
    date: "2020-04-15T17:11:38.244Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ea1574f6c6bf00017dda490",
    title: "Ge-",
    bodyText: "_restoureer_ ",
    date: "2020-04-23T08:52:31.902Z",
    handle: ""
  },
  {
    id: "5ea5c6423b8a4e0017e34464",
    title: "Met myself ",
    bodyText: "Ek gryp my sleutels in die verbygang\r\ntel my Ray-bands op\r\nhou Ouma Rita se blokkies kombers \r\nonder my arm \r\nprop alles in mekaar \r\nvergeet toe amper my film\r\nmet al die geskarel \r\nklim toe in Halfie- my tuna blik- ek is uit\r\nek soek toe die grootse groenste grasperk\r\nmeer \u2018n weiveld \r\nparkies klassifiseer as ontspanning \r\nin eensame dorpies; met lang gras\r\nhou ek piekniek \r\nmet myself\r\n\r\n-Na Corona\r\n\r\n\r\n",
    date: "2020-04-26T17:34:58.872Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5ead1226b321450017e5574d",
    title: "Verblind",
    bodyText: "Ek het hom slapeloos in die glasruit gesien\nMet die oog op sononder, dan die blik\nDie glas verblind - slegs 'n rooi vierkant\n'\n\xF1 Huis wat in die woestyn brand",
    date: "2020-05-02T06:24:38.521Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ebc2fa18c5423001722ea2f",
    title: "Slaappil asseblief ",
    bodyText: "Ek het gedink my slapelose nagte is verby\nMet jou wat nie meer langs my wakker l\xEA\nEn jou soene laat wandel - met jou hande wat dieselfde spore volg\n\nMaar nou wandel jy in my kop rond\nIn my oorvol, oorbelaaide brein, wat deurmekaar raak met te veel maskers,\nTe veel vreemde gesigte, te veel o\xEB vol angs\n\nEn nou wandel jy saam, en vat steeds te veel plek op in my gedagtes\nHoekom is jy nog aan die wandel?\nHoekom kan my hart net nie laat gaan nie?",
    date: "2020-05-13T17:34:25.692Z",
    handle: ""
  },
  {
    id: "5ed2941c7e87150017432c36",
    title: "gerief",
    bodyText: "party vriende is soos die naaste restaurant aan my huis: wanneer ek klaar ge\xEBet het, is ek oorkom deur hoe sleg en smaakloos die kos was. maar ek eet. want dis wat mens doen. dis dan naby. en volgende keer gaan dit presies dieselfde wees. asook die keer daarna. ",
    date: "2020-05-30T17:13:00.926Z",
    handle: ""
  },
  {
    id: "5edf44a68cdd5e0017616498",
    title: "Moes nog",
    bodyText: "Ek wou nog s\xEA, ek verlang soms",
    date: "2020-06-09T08:13:26.627Z",
    handle: ""
  },
  {
    id: "5ef14a35f97eb1001797c8d7",
    title: "Eendag, Pa. ",
    bodyText: "Jy't ghries en diesel onder jou vingernaels \nek het ink en verf onder myne\njou sweet begin 05h00 tot 22h00\nmyne begin 09h00 en maak om 04h00 klaar\ndalk is ons after all ewe slim (of dom) want\nBlue Stratos is Vadersdag-worthy vir jou en ek dra Charlotte Rhys, maar jou Schwinn fiets kos soveel soos drie van my karre. \n\nDalk is ons after all baie soos mekaar. \nEk en my straight pa met olie vingers wat sy kop nou en dan stamp maar 'n naaimasjien kan werk. \nMy pa. \n",
    date: "2020-10-06T20:49:16.336Z",
    handle: ""
  },
  {
    id: "5f0d43c99888ed00174c7ca5",
    title: "ONS (a.k.a. One Night Stand) ",
    bodyText: "in my weerlose gedagtes\nherhaal en herleef ek\nons\nwat saam gevoel het \nsoos 'n kortstondige ewigheid\n'n nuwe bekendheid\nwaar die weefsels van jou wese wandel\nsteeds in my begeerte\nvir nog van hierdie ons ",
    date: "2020-07-14T05:35:06.712Z",
    handle: ""
  },
  {
    id: "5f1485a2d08502001745b58e",
    title: "Kniekoppe",
    bodyText: "Dankie Universe. Ek aanvaar; dit is goed. \nAmen. ",
    date: "2020-07-19T17:40:50.008Z",
    handle: ""
  },
  {
    id: "5f26fe29f6beaf0017208954",
    title: "Winter. ",
    bodyText: "koue kraak na binne\nsneeuvlokkies breek van buite\nek's in die middel",
    date: "2020-08-02T17:55:53.862Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f2ac4131d657200176cafb3",
    title: "The thought ",
    bodyText: "\n \nof being\nhere\nfor 6 more\nhours\nthe thought of being here\nfor 6 more hours,\nI don\u2019t\never\nwant\nto be here\nagain\nI don\u2019t ever\nwant to be\nhere again",
    date: "2020-08-05T14:37:07.888Z",
    handle: "@sheridanwalter "
  },
  {
    id: "5f2fdd37bb194f0017c423f3",
    title: "delivered ",
    bodyText: "I heard sirens, twice, today. Its usually a quiet little town. It's coincidence, and my mind playing tricks, I know, but when they passed, I held my breath.\nPlease text me back, if only just to say you weren't in them. ",
    date: "2020-08-09T11:25:43.464Z",
    handle: ""
  },
  {
    id: "5f5b826e81d5580017490aec",
    title: "pining",
    bodyText: "love is\na tinted machine\nI can see only\nmyself\nin the darkened windscreen",
    date: "2020-09-11T13:58:06.046Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f63b6075161d0001707fa88",
    title: "Aroma",
    bodyText: "Ek kan dit ongelukkig nie s\xEA sonder om vulg\xEAr te klink nie\n(en bokka, jy beter verstaan dat ek om jou nog bloos en en skaam kry- ek brand vuur warm bloeisels vir jou )\nMaar ek dra my reuke soos soet, sappige parfuum om my vingers.... (en. (. .)\nIn jou eer.\nEk wil jou naggebede afluister\nEk wil dit deel maak van my eie, en in verruiling kan jy my eie gedagtes in die witmaanlig h\xEA...\n\n\nEk is bewus van my eie maan getye. Stuur my ook asb glad nie. Dis dagga en dis manie. ",
    date: "2020-09-17T19:16:23.781Z",
    handle: ""
  },
  {
    id: "5f90906f2178f90017556af4",
    title: "Ek wens, ek wens",
    bodyText: "Ek wou jou vanoggend met koffie wakker gemaak het, my warm bed opgeoffer het vir die hitte wat ek weer by jou voete kon kry. Ek wou gehad het jy moet my instinktief vashou en \u201CEk is lief vir jou\u201D neurie omdat jy te deur die slaap is om jou mond oop te maak. Ek wou opkrul teen jou, jou jy-wees opvou en in my sak druk sodat ek jou die heeltyd by my kon h\xEA. \nMaar hel, nou is alles wat eens werklik was net \u2018n memory, \u2018n hopelose vorm van droom, want al wat ek nou oor het, is daai jean wat jy vir my gekoop het, \u2018n paar foto\u2019s en hierdie simpel wens: \u201CEk wou jou vanoggend met koffie wakker gemaak het.\u201D\n",
    date: "2020-10-21T19:47:59.758Z",
    handle: ""
  },
  {
    id: "5e6617df5ee429768df2bfba",
    title: "Ek is Was. Ge-Was. ",
    bodyText: "Wat as sy Desember 2020 al weg is? Bevryding of die ultimate verlies? Die onsterflike gemeenskap-Ma. I guess ons moet iewers groet, maar die kille gevoel in my binnevertrek is verbased. Koelerig, met 'n groot kans vir onverwagse stortre\xEBn. ",
    date: "2020-02-28T00:07:37+02:00",
    handle: ""
  },
  {
    id: "5e6617ec5ee429768df2bfdf",
    title: "Finaal ",
    bodyText: "As dit is wat mens kry vir nice wees\nFok jou dan nou maar ook",
    date: "2019-05-25T13:15:47+02:00",
    handle: ""
  },
  {
    id: "5e6617ee5ee429768df2bfe7",
    title: "Mississippi ",
    bodyText: 'Egstaties. \n\nOp jou stories was jy eintlik altyd die "egstatiese" een. \n\n',
    date: "2019-06-18T15:38:20+02:00",
    handle: ""
  },
  {
    id: "5e6617f45ee429768df2bff9",
    title: "1 November 2016",
    bodyText: "nie met apologie nie,maar met opregte soeke na 'n verduidelikingskrikkeljaar:366 dae en 365 dae en nog 365 dae 10961068 dae later miskien nie 3 jaar... \ngroete\ntegniese doos",
    date: "2019-10-05T17:19:44+02:00",
    handle: ""
  },
  {
    id: "5e80f9e1e1c1840017c3e0ef",
    title: "Time",
    bodyText: "I was interesting\n\n for a time,\n",
    date: "2020-03-29T19:41:21.553Z",
    handle: ""
  },
  {
    id: "5e8e3b01c6965b00171571c4",
    title: "Anoniem ",
    bodyText: 'Daar is braaksel teen die muur \nWyn op my witte hemp\nDaar is chocolade-wrappers langs my op die vloer wat ek sietjies ingesmokkel het en "waarvan niemand weet". \n\nHierdie mense is goed vir my , maar hoekom hanteer ek hulle nogsteeds soos almal wat my mishandel het. \n\nDaar is wyn op die muur\nDaar is braaksel op my hemp\nDaar is vloer onder my wang\nIemand het my gevang \n',
    date: "2020-04-09T08:52:24.474Z",
    handle: ""
  },
  {
    id: "5e91eef8363bb60017367e81",
    title: "Kwarantyn Romanse",
    bodyText: "ag\nhou my net vas\nontmoet my\nby Spar\nby Checkers\nby Pick n Pay \n- die koue vleis afdeling\ndat ek kan onthou\nhoe dit voel\nom oor dit \nte wees\n",
    date: "2020-04-11T16:23:20.544Z",
    handle: "@xanya.bianca"
  },
  {
    id: "5e95c0fb99880400172f6526",
    title: "Autumn I guess ",
    bodyText: "Leaves falling out of season \nLimbs outstretched \nCaptured burning your \nTerrified gaze\n\nSet sail to ideals moral belief\nThe mouth a lingering wildfire\nFuck the hunger of an existential crisis \n\n\nUnanswerable?\nWhy appreciate the \nBeauty in\nGoodbye?",
    date: "2020-04-14T13:56:11.295Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e9af37af55ce6001715e8cb",
    title: "infomercial",
    bodyText: "alles in die lewe is verniet\nsoos 'n verimark advertensie\nen nes jy dink jy het die \nmotherload van orgastiese\ngeluk bereik tref dit jou met \n'n jubel en gejuig: \nbut wait, there's more! \ndan volg 'n gerepeteerde \ndemonstrasie van hoeveel \nmeer daar nog oor is en al\nis ons brandarm platsak morone\nmoet ons tevrede wees dat ons\nnog kan bekostig om na die \ntelevisie te kan sit en staar. ",
    date: "2020-04-18T12:32:58.689Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ea089586c6bf00017dda48f",
    title: "Vergeet my ",
    bodyText: "\r\nLang eentonige staar sessies\r\nby vuil venster uit\r\nspasies in my gedagtes \r\nword gevul\r\nnet voor my glas oorloop \r\nvoor ek spring in die arms \r\nvan rooi wyn en mal vriende \r\ntot laat aande met... \r\nMet my pen,\r\nskilder doek op my skoot\r\nop soek na die buite lyne van jou\r\nek ontou jou nog\r\nal het jy my vergeet.",
    date: "2020-04-22T18:13:44.759Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5eb999f6a57f590017b3e41a",
    title: "vreemder vryheid ",
    bodyText: "Stuk vir stuk kom die asem weer terug \nen rus my compulsion vir dae op 'n slag. \n\nEk's nie meer verslaaf aan suurtof nie! ",
    date: "2020-05-11T18:31:18.629Z",
    handle: ""
  },
  {
    id: "5ebdb763ea23dd00170fa5c8",
    title: "Tippy",
    bodyText: "Ek wil skuins \nmy alles\nmet jou\ntuis maak vir jou bomenslikheid\nEk wil die woorde wat jy omring \nkeer op keer lees\n'N Stadige\nmuishond\nStap oor die pad \ngeel,\nwat soort van rus\nen die warm\nwasgoed optel. Ek het 'n wilde hond gesien\ntippy tippy tippy\nEk het jou nie vertel van die gedierte met hare nie\nlang hare,\ndit is deur karre op die snelweg getref\nWeer en weer. \nDit het lang grys hare gehad\nDit moes 'n hond gewees het; dit kon gewees het\nOns s'n. Almal verloor hul vriende.\n\nEk kon niemand van hierdie gesig vertel nie.\nElke nederlaag\nIs soet.",
    date: "2020-05-14T21:25:55.160Z",
    handle: "sheridanwalter "
  },
  {
    id: "5eea82d8e3ca94001749f1e4",
    title: "helde",
    bodyText: "soms...\nnet s\xF3ms sal dit cool wees as\nal die edgy mense\nal die social justice facebookers\nal die (maga)zine mense\nal die pc mense\nen aaaal die influencers\n net bietjie eenkant toe sal staan\nen hulle pouvere en profile pictures neersit\nsodat die Gandhis\nen moeder Teresas\nen Jesusse\nen die Buddahs \ndaaroor kan loop en ons die pad wys\nin vrede, \nin harmonie. \n\nTog   ",
    date: "2020-06-17T20:53:44.551Z",
    handle: ""
  },
  {
    id: "5f3870e99c793d00175ef059",
    title: "It\u2019s about Harry Styles and drugs and orgies...",
    bodyText: "I am as monogamous as the \nNorth Star",
    date: "2020-08-15T23:34:01.831Z",
    handle: "@sheridanwalter "
  },
  {
    id: "5f6514aeac05cb001715219a",
    title: "RuRu",
    bodyText: "Throw your gender in a blender and push Pur\xE9e.   ",
    date: "2020-09-18T20:12:30.062Z",
    handle: ""
  },
  {
    id: "5f6f8a50b09dcc0017b986f8",
    title: "In Memoriam",
    bodyText: "Ek kan nou al meer as een naam vir elke maand van die jaar neerskryf\nWaar pasiente se notas net skielik\nStop\n\nNog 'n op-af op die monitor en dan skielik is die gordyne toe getrek\n\nEn vandag sit ek nog 'n naam by\n'n tannie wat alles te soet gevind het, \nAlhoewel haar glimlag een van sukkel was\nEn my trane volg hul bekende roete by my wange af\nEn ek besef ek moet grootmens\nEn ek moet seker gewoond raak aan die verloop van die siekes, die wat broos is, die terminales\nMaar dis moeilik\n\nHierdie paadjie waarop ons almal onsself bevind, wat onvermeidelik is -\nDit suck net hierdie week 'n bietjie meer. ",
    date: "2020-09-26T18:37:04.960Z",
    handle: ""
  },
  {
    id: "5fa02680568ba600173e45f3",
    title: "noem my wat jy wil",
    bodyText: "ek is 'n gedig\nwat plek soek om te \ngebeur",
    date: "2020-11-02T15:32:16.232Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e6617dc5ee429768df2bfae",
    title: "Verlep",
    bodyText: "My steeltjie is geknakMy blommetjie groei skeefTog sal ek enigiets doenOm deur jou gepluk te wees",
    date: "2019-09-12T19:50:15+02:00",
    handle: ""
  },
  {
    id: "5e6617e45ee429768df2bfc7",
    title: "SONA 2020",
    bodyText: `Vanaand is Julius vroeg wegEn het Cyril minder van sy mega-stad- lugkasteel-vyfjaarplan gepraat.VF+ se oom het egter ges\xEA Cyril is 'n "lame duck", watookal dit beteken?So, nou, na 'n "not so perfect wedding", sien ek uit na die volgende episode van "Honourable Member". `,
    date: "2020-02-13T23:55:52+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617dd5ee429768df2bfb0",
    title: "Uitdaging: jou skaamste mensheid anon",
    bodyText: "Ek het vandag....\n\n...my toonnaels geknip en die dikste groottoon knipsel in my mond gesteek en probeer stukkend byt. \n\nHulle is nogal h\xE1rd. ",
    date: "2019-08-17T23:57:35+02:00",
    handle: ""
  },
  {
    id: "5e6617de5ee429768df2bfb4",
    title: "2x",
    bodyText: "Hou jou o\xEB op my in die donkerEk sal weerlig word\nEk is glow in the dark\n\nOp jou vensterbank is daar lakens\nVan middagslaapchiffon\nAs ek opkyk is die satyn \nVan die hemel jou plafon\n\nOns het die wereld gedraai\nWe made it in the second try",
    date: "2019-10-19T21:32:09+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617eb5ee429768df2bfdb",
    title: "By ges\xEA",
    bodyText: "My woorde gaan opraakWegraakUithardloop;daar is s\xF3veel afstand",
    date: "2019-09-16T22:45:55+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617fd5ee429768df2c017",
    title: "Heel",
    bodyText: "Verwoes en verniel, \nvir ewig en altyd.\n\nSo is my siel, \nvir altyd en ewig\nverniel.",
    date: "2019-04-14T11:47:57+02:00",
    handle: ""
  },
  {
    id: "5e7904c05670b500173f8228",
    title: "!",
    bodyText: "My berg wat ek uitgeklim het se view is flou",
    date: "2020-03-23T18:49:36.514Z",
    handle: ""
  },
  {
    id: "5e8227db02389e001719fb67",
    title: "love in the time of corona",
    bodyText: "o hoe wonderlik om weer jou\nhand te kan vashou.",
    date: "2020-03-30T17:09:47.930Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e8b818ff60834001773a20c",
    title: "Weekend end",
    bodyText: "Jesus said; you just need me\nin your \u{1F499} a little whiskey and \nlove. But\nwhen it\u2019s said and done-\nI don\u2019t want to feel like me\nI slip myself a smile \nPop a pil or \nthree\nAnd wait for time to beat off-time\nAnd hug hot men\nAnd refuse to use protection \nSweater weather \nBlinded dazed confused by the light \nCounting backward and walking forward \n525600 minutes \nStop \n6 minutes \nTake a bucket bath \nDaddy made a soldier out of me\nLike an artist I squat like the frog\nJesus licks my back and tripped on\nThe wrong poison \nI boil water in pots\nNeurotic \nShipping waters \nSafe from the eyes of a tsunami \nYou overindulge in things instant \nSaid the mud dripping head\nTorso\u2019s in chatroom bunkers \nJesus! I\u2019m not a moffie.\nHe didn\u2019t believe me \nI tumble dry the pots\n\nI exist elsewhere \n\n@sheridanwalter\n",
    date: "2020-04-06T19:25:17.155Z",
    handle: "Sheridanwalter "
  },
  {
    id: "5e9cc8b5f8872c00170f964c",
    title: "Bedtyd",
    bodyText: "Ek dink deesdae baie aan die aande wat ek vroeg gaan slaap het en jy nog wakker gebly het\nWens ek kon teruggaan en nog met jou gesels\nOf daardie ure as krediet kry om nou saam met jou deur te bring\nEk mis jou ",
    date: "2020-04-30T22:03:46.041Z",
    handle: ""
  },
  {
    id: "5eb034cd7a4b780017a11bc5",
    title: "Verskoning ",
    bodyText: "na die ander\n\xA0 werk,\ndeur die verskoning val \nwat jy eens voorgestel het\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 van die seun wat jy laas onthou het as 'n vorm\nstaan naak oor jou, die vorm van alle opset\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 soos jy dit 'verstaan het\n\xF1 wil van donker\nheilig soos elke krag waarmee jy worstel en verloor\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 heilig \njou nek kraan op\njy sweer met alle intensie\nom daardie enkele woord \nsy re\xEBn te weier \n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \n\njammer",
    date: "2020-05-04T15:29:17.834Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ebaf96cbe06c30017c77bcb",
    title: "Ha. ",
    bodyText: "Ek is blykbaar oor jou\nDie virus is blykbaar nie so erg nie\nEk gaan blykbaar binnekort verlof kan insit\nEk hou blykbaar baie van maskers\nUitgevang",
    date: "2020-05-12T19:33:05.168Z",
    handle: ""
  },
  {
    id: "5ec5c889b8316e0017cec186",
    title: "Kiets ",
    bodyText: "Ek eet vanoggend 'n toastie en besef: binnekort gaan mens weer moet check of daar nie dalk stroop of peanut butter in jou snorbaarde agtergebly het nie. ",
    date: "2020-05-21T00:17:13.653Z",
    handle: ""
  },
  {
    id: "5ee5f062dfa58d00171a217d",
    title: "On getiteld ",
    bodyText: 'Ek het alles uitgevee, ek het probeer oor begin, ek het erken ek weet en is en kan n\xEDks. Ek verlos my van "pretensieuse" groteras/beteras idees. Ek onttrek.\n\nHoor jy my? Ek onttrek.\n(onttrek/ont-rek/ontdek)\n\nMaak my tog net stil. ',
    date: "2020-06-14T09:39:46.361Z",
    handle: "@cx_lyb"
  },
  {
    id: "5eea078ce3ca94001749f1e3",
    title: "Erasure ",
    bodyText: "we have\nwhat and \nwho we \nis",
    date: "2020-06-17T12:07:40.850Z",
    handle: "sheridanwalter "
  },
  {
    id: "5eebb3ca0103340017f76c6b",
    title: "Nectarine ",
    bodyText: "I forgot amnesia was\u2028a smooth fruit\u2028until I found it sweet\u2028on my tongue.",
    date: "2020-06-18T18:34:50.241Z",
    handle: "sheridanwalter "
  },
  {
    id: "5eecefed5220330017d67201",
    title: "tou",
    bodyText: "en die w\xEAreld het vir jou\ntou gegee om jou drome\nvan die hemel af te hang\ntussen die sterre vas te maak\nen op te klim tot jy\ndie wolke kon raak\n\ndie w\xEAreld het vir jou tou gegee\nmaar die dak was in jou pad\nal wat jy gedoen het was om 'n \nander manier te kry om op \ndie maan te land. ",
    date: "2020-06-19T17:03:41.333Z",
    handle: "@ilzedup94"
  },
  {
    id: "5eee5b1979737600175f6e50",
    title: "km",
    bodyText: "Ek sal hardloop, \nAs jy wil hardloop,",
    date: "2020-06-20T18:53:13.130Z",
    handle: ""
  },
  {
    id: "5ef4bcd22a57dd0017caf4a7",
    title: "hospitaalbed",
    bodyText: "ek was vir 'n lang ruk in\n'n koma\nvasgekoppel aan 'n ventilator\nmet jou mond as masker oor\nmy gesig\nvermom as ekstra suurstof\nmaar tog\nwas ek breindood verklaar\nnog voor ek jou kon inasem. ",
    date: "2020-06-25T15:03:46.966Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f1485c3d08502001745b58f",
    title: "Soutwater",
    bodyText: "My eerste traan wat afloop\nOor my dro\xEB te-lank-ge-N95-masker wange\nIs vir die vreesaanjaende gevoel van alleenheid wat by my spook\nMy tweede traan wat in sy spoor volg\nIs vir die  alledaagse vrae van  hoekoms en waar is Jys\nMaar die derde traan val uit 'n plek van verlange - dis nie vol hoop nie. Dis net verlange na die tipe jy wat jy was\nWat my kon keer as jy sien ek is op die punt van oordink\nWat my kon help uit die dryfsand van my gedagtes\nWat my kon red van myself",
    date: "2020-07-19T17:41:23.807Z",
    handle: ""
  },
  {
    id: "5f1e11335ec81f0017ce001c",
    title: "Meneer Oorweldig",
    bodyText: `as my familienaam oorweldig was, 
was ek die blinkste verteenwoordiger. 
nou sit ons in 'n vriendskapsmoeilikheid en christmas in july etes en eks-e wat gloei in pienk maar die goed verkoop en daars verf op my foon en zolnox in my bloed; gaan hierdie land ooit weer? ek gaan jou mis. tot die punt wat die nostalgie die knie breek. en dan jou jou sin gee. en dalk sien ons eendag weer met die spreeus wanner klein krulkoppie pappa-pappa jil en walging haar nog nie bevlek het nie. Ons het onder die bergwaterval weggedraai en besef: alles is hier: binnein die sak bene en vet. as alles sou stop,aan wie skaar jy jouself? ek wil voel, voel net saggies + streel. En dan besef sy hoe sad-kink lyk. hy soek net vanilla met sy coke en ek dink dit is die sweetste ding. fancy kar. en besnede fors. "ek krimp, voel."`,
    date: "2020-07-26T23:26:43.408Z",
    handle: ""
  },
  {
    id: "5f3eba9a3e1328001722a692",
    title: "Kyk, daar gaan hulle. ",
    bodyText: "My idees word baie gereeld gevorm eers die oomblik wat die laaste woord in die sin die lip-deur agter homself toetrek. \n\nSoms tot ander se groot ontsteltenis. \n",
    date: "2020-08-20T18:02:02.368Z",
    handle: ""
  },
  {
    id: "5f68e246d989470017e811f9",
    title: "maandagmiddag.",
    bodyText: "jy dra jou pa se\nnaam en ook sy \nskreeuende letsels\nwat oor jou eie stem \nraas as jy drink \nek het nog net een keer\nmet jou gesels oor goed\nwat saak maak\njy weet\ngoed wat r\xEArig s\xE1\xE1k maak\nmaar ons gesprek was te gou\nkortgeknip \nen al wat tussen ons hang\nis die laaste hoekom en die\nlaaste dop \nwat jy my nog skuld ",
    date: "2020-09-21T17:26:30.159Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e6617e75ee429768df2bfce",
    title: "Kom tot rus",
    bodyText: "Ek wil my teen jou bors houMet jou ken op my kopMy gedagtes teen jou Laat doodloop En stop.DanWakker wordMy slaap inruilVir iets meer permanentDalk sterf in jou arms met jouTrane wat op my kroontjie drip",
    date: "2019-10-19T09:51:26+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617e75ee429768df2bfcf",
    title: "RBF",
    bodyText: "hoekom smile die girl dan nieyou ask when we both know it's a farceyou don't really want to see my teethand I want you to believethat I might actually be made of ice\nyou don't get to find out that I'm pleasantly nice\nyou won't get the chance\nyou see, I don't need to prance\nwhen you greet me with nonchalance\nbecause you think you're so cool\nI know my ass has grown since school\nbut you don't have to help me squat\nI know my way around my own body, believe it or not\nwhen I tell you no\nit's not an invite to go\ntell your friends that I'm rude\nyet when I smile too much you'll tell them I'm lewd\nI avoid eye contact\nbecause it seems like friendliness is a contract\nyou're bound to\nwhen you smile at a guy you're around too\nmuch\nsuch\nbull\nshit: \nyou call it bitch face\nI call it surviving with grace. ",
    date: "2019-11-12T21:32:23+02:00",
    handle: "ilzedup94"
  },
  {
    id: "5e6617e95ee429768df2bfd5",
    title: "Bosveld ",
    bodyText: "ons gesigte is bloedsmeerselsoor karruite, geheel en aldie sakkende son, perfekbome verkap in bondels ligstrek oor ons koppe metsatelliet en siwetslangkop onder graaf die ko\xF6perasie maak halfag oop, die trokke op die teertrommel die witwolke fyn ",
    date: "2019-10-20T21:49:52+02:00",
    handle: "toastcards"
  },
  {
    id: "5e6617fb5ee429768df2c010",
    title: "\u{1F449}\u{1F3FB}\u{1F44C}\u{1F3FD}",
    bodyText: "grootste probleem in die lewe\n\n",
    date: "2018-10-19T00:58:50+02:00",
    handle: "\u{1F464}"
  },
  {
    id: "5e6617fe5ee429768df2c01a",
    title: "man make fire",
    bodyText: "Bewapen met hout, blitz en lighter marsjeer jy op die maat van kurt darren gereed om materie te manipuleer tot vuur, terwyl jy lekker stront praat\n\nOor die skeinat daaragter is jy bietjie vaag maar jy vermoed dit het iets te doen met jou ballas of jou baard\n",
    date: "2019-02-07T10:44:46+02:00",
    handle: "arnojvvuuren"
  },
  {
    id: "5e7074fe479c2c0017dc0348",
    title: "Jy",
    bodyText: "Ek wou jou bel\nek wou jou vetel \nmaar jy blue tick nie meer nie.",
    date: "2020-03-17T06:58:06.921Z",
    handle: ""
  },
  {
    id: "5e8cb222bf78dc001787b8a9",
    title: "Beats ",
    bodyText: "Beat every battered  \neagerly loved  \nbald cheek boy \nback into bus \nthat drive by \na bunch of babes \nwith belly buttons \nand boobs. beseeched with, \nby proxy for their older brothers, \nbaboon balls boldly banishing berry balls.  Bouncing their birthright- butch. \n\nBut boys be bad to betties \nlike me \nbeing a bitch but no baller \nBeaten bad\n\nThey pull up my pants \n",
    date: "2020-04-07T17:02:26.970Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e90ba61dd922900172d29b9",
    title: "Broertje ",
    bodyText: "Medisyne het sy grense\n\nEk is vasberade\n\nEn alhoewel u my gese\xEBn het, wou ek steeds sterf weens die pyn\n\nEk het nie genoeg vir die pyn nie. \nVra die dooies\n\n\xA0\xA0\xA0\xA0 vir jou is ek onvoldoende, \nmaar om in die plek te staan, \nmoes ek aanleef \n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 vir - ander metafoor,\n\xA0\xA0 '\nn ander se broederskap",
    date: "2020-04-10T18:26:41.859Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e97440bc85b410017d45a9b",
    title: "It's a hairy. ",
    bodyText: "Vanoggend was daar 'n baardhaar (of was dit 'n balhaar?) in my koffie. (Daar is nogal 'n ongemaklike groot ooreenkoms tussen die twee; kollegas dink altyd die ergste as hulle by jou rekenaar kom en jou mousepad het twee of drie... baardhare... wat daarop l\xEA.) ",
    date: "2020-04-15T17:27:39.518Z",
    handle: ""
  },
  {
    id: "5e9955f59191dd001703ba80",
    title: "Apart ",
    bodyText: "Jou afwesigheid het deur my geryg \nSoos garing deur 'n naald.\nAlles wat ek doen, is met sy kleur gestik.",
    date: "2020-04-17T07:08:37.537Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ef23b6fc65874001772b1fb",
    title: "Ships",
    bodyText: "Religious flowers red, die.\nThe dust dripping cold.\nI\u2019m not religious, I don\u2019t get upset.\nWhen I die \nOxen will glimmer.",
    date: "2020-06-23T17:27:11.704Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f0b4c8c6ce7a500170d4616",
    title: "Hoogmoed (2020)",
    bodyText: "Jy\u2019s die verlede.\nEk is die toekoms.\n- Totsiens.",
    date: "2020-07-12T17:46:52.584Z",
    handle: "@xanya.bianca"
  },
  {
    id: "5f0b4e2f6ce7a500170d4617",
    title: "Sooibrand (2020)",
    bodyText: "dit help nie\nhy maak jou gelukkiger \nas broodjies gesny in driehoeke\nmaar \nhy gee jou\nsteeds sooibrand nie\n\n72 pakke Rennies\nkos amper R1000.00",
    date: "2020-07-12T17:54:07.370Z",
    handle: "@xanya.bianca"
  },
  {
    id: "5f0f4f9b35b5550017aa5d77",
    title: "Leemtes",
    bodyText: "Ek wil my skynbare geluk sigbaar maak\nSodat jy kan sien ek is heel sonder jou\nTussen nommers blok, uitvee en weer jou naam te moet tik\nIs my kop so bewolk soos gister se storm\n\nAlles staan stil\nNiks vervang my gedagtes van jou nie\nNiks kom by jou glimlag\nJou hart wat soos my huis gevoel het\nJou arms wat enige pyn of vrees laat verdwyn het\nJou woorde wat gewissel het tussen romanties en realisties\n\nNiks vervang die hartseer van jou verloor nie\nVan die 'belowe-dis-die-laaste-keer' groet\nKan ons nie nog 'n laaste keer vir die laaste keer groet nie? En belowe dat die keer sal beter wees - en dat ons net vir so' n uur of 2 sal terugval op die ons wat was. Die ons wat opwindend en mooi was. Die ons wat verewig kon gewees het. \n\nNiks het nog jou vervang nie\n",
    date: "2020-07-15T18:48:59.576Z",
    handle: ""
  },
  {
    id: "5f103ddc9591a70017ec863d",
    title: "botanie (2020)",
    bodyText: "sy is \u2018n saad\n\nbegrawe haar\nsy sal groei\n\nsy is onkruid\n\nwaar jy haar strooi\nsal sy groei\n\nsy is \u2018n roos\n\nwat nog moet leer\nom dorings te groei\n",
    date: "2020-07-16T11:45:32.747Z",
    handle: "@xanya.bianca"
  },
  {
    id: "5f1245128efe9d0017ee48d3",
    title: "Dhiv",
    bodyText: "here\u2019s my advice:\n             yes eat that\n              no do not text back the fuckboy\n              coconut oil",
    date: "2020-07-18T00:40:50.411Z",
    handle: "@sheridanwalter "
  },
  {
    id: "5f158817d08502001745b591",
    title: "Herkou",
    bodyText: "gewoonlik laat ek my insluk:\n\nfyngekou al langs die esofagus\nherhaaldelik \nsonder verweer\nal glyend tot in haar binneste\n\nwaar sy my dan verteer\nuitmekaarskeur en wegsmyt \n\nontlas \nvan my \n\nhierdie keer moet ek tog \nmyself onthou\nhaar nie toelaat \nom my \xF3\xF3k te herkou",
    date: "2020-07-20T12:04:23.225Z",
    handle: ""
  },
  {
    id: "5f15fdfb7269480017709660",
    title: "'n Ode aan my verlore plakkie",
    bodyText: "Lang paaie, bulte op en heuwels af\nDeur veld en oor strand\nOor die suidste bergrand \nEn af in koshuisgange\nIs jou lewe vasgevange\nMaar die drange is nou verby\nDit was ek en jy\nMaar nou dryf jy verby \nAan die eindelose see\nHet die strand jou wegegee\nSo nou vra ek jou\nWat maak mens met een plakkie?",
    date: "2020-07-20T20:26:35.099Z",
    handle: "mabethc"
  },
  {
    id: "5f3582e054140100178dacdc",
    title: "Terugflits ",
    bodyText: "Ek mis die Plattekloof koppies en die\nStilhou by die dam\nEn die honderd soene oor die ratkas\nEk mis die Tygerberg trippies op 'n Vrydagmiddag\nEn die bekende stopstrate langs die pad\nEk mis die laataand koshuis draaie\nDie by die venster staan en kyk hoe jy wegry\n\nEk mis die tyd voor ons president ons gedwing het om te gaan op 'n terugflits reis... Die tyd waarin ek besig was om te vergeet\n",
    date: "2020-08-13T18:13:52.657Z",
    handle: ""
  },
  {
    id: "5f416c76e36df900173e488d",
    title: "Nee god Nee",
    bodyText: "Daars gedigte wat soms kom\n",
    date: "2020-08-22T19:05:26.797Z",
    handle: ""
  },
  {
    id: "5f5e56f4a1a9c900172de10a",
    title: "Parking Lot Play ",
    bodyText: 'Dink jy car guards weet mens praat kak as jy demonstratively begin soek na geld in jou kar al weet jy jou woorde gaan wees: "Sorry, man. Next time."\n',
    date: "2020-09-13T17:29:24.048Z",
    handle: ""
  },
  {
    id: "5f63bfbc5161d0001707fa8a",
    title: "x",
    bodyText: "Ek het besluit op 10 om 10 voor 10 oor 10 (dae) van nou. ",
    date: "2020-09-17T19:57:48.171Z",
    handle: ""
  },
  {
    id: "5f9f1a3d257fda00172f213d",
    title: "as genesis 'n haiku was",
    bodyText: "god, vorm my uit niks: \n'n ribbekas van modder \nen 'n hart van klei ",
    date: "2020-11-01T20:27:41.159Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e6617d85ee429768df2bfa0",
    title: "Mens wees ~ deur Junior Marx",
    bodyText: "Mens wees\n\nMens wees.\nOm mens te wees.\nMens wees is om jou eie unike self te wees.\nMens wees is boeke lees.\nMens wees is om te droom.\nMens wees is die metafoor, die idioom en die akronoom.\nMens wees is foute maak.\nMens wees is eerlik raak.\nMens wees is soen in die reen.\nMens wees is die son op koms in neem.\nMens wees is ek en mens wees is jy.\nMens wees is in Afrika bly.\nMens wees is genade toon.\nMens wees is die emosie sindroom.\nMens wees is hemel en mens wees is hel.\nMens wees is om slaaptyd stories te vertel.\nMens wees is ons potentiale vermoe.\nMens wees is niks meer as om wertlik te glo.\nMens wees is liefde en musiek.\nMens wees is die in ry teater fliek.      \nMens wees is die dromme en guiar akoorde.\nMens wees is meer as wat ons wertlik kan verstaan of selfs beskryf in menslike woorde.\nMens wees is n wonderwerk.\nOm mens te wees is n wonderwerk.\nOm mens te wees.",
    date: "2018-08-06T01:16:55+02:00",
    handle: ""
  },
  {
    id: "5e6617ec5ee429768df2bfe0",
    title: "Ek",
    bodyText: "Ekke",
    date: "2018-12-23T09:13:26+02:00",
    handle: ""
  },
  {
    id: "5e6617db5ee429768df2bfab",
    title: "Trane",
    bodyText: "Vandag het ek genoeg gehuil\nOor die verlede, oor die toekoms\nOor die dinge en die mense wat ek nie kan beheer nie\nEk gaan nou slaap, my kop is seer",
    date: "2019-05-19T20:03:21+02:00",
    handle: "joneliavt"
  },
  {
    id: "5e6617dd5ee429768df2bfb3",
    title: " ",
    bodyText: "Eksistensie maak nie sense nie\nEn dit help nie om te wens nie\nJy word nooit mens nie",
    date: "2019-06-17T13:50:32+02:00",
    handle: "francoislct"
  },
  {
    id: "5e6617e35ee429768df2bfc6",
    title: "Bly kalm en tel tot tien.",
    bodyText: "Een.Sukkel om te slaap in die warm kamer . Terwyl die huur my spaar rekening leeg trek.Twee.Sit vas in verkeer terwyl iemand voor my insny.Drie.Word uitgetrap deur my bestuurder omdat ek laat is.Vier.Afdankings brief op my lesenaar, my dienste word nie langer benodig nie.Vyf.Pistool in my hand wat die gereg gaan laat skiet.Ses.Bestuurder wat smeek vir sy lewe. Wie het nou die mag.Sewe.Bloed spatsels teen my gesig.Agt.Mense wat skree en kerm terwyl ek glimlag.Nege.Hande koud, nat en rooi. Sal nooit skoon gewas kan word nie.En die wereld tel hard saam tot by,Tien.",
    date: "2020-02-17T10:13:09+02:00",
    handle: ""
  },
  {
    id: "5e6617e95ee429768df2bfd6",
    title: "Day of Deathwill",
    bodyText: "Ek wil net doodgaanEk wil net doodgaanEk wil net doodgaanEk wil net doodgaan",
    date: "2019-12-26T21:49:56+02:00",
    handle: ""
  },
  {
    id: "5e6617ef5ee429768df2bfe9",
    title: "tafel vir een, soos altyd",
    bodyText: "'n veld vol lotusplante met 'n tempel in die agtergrond, die perspektief voltooi deur wolkekrabbers van die hedendaagse eeu. All You Need is Love wat in die agtergrond druis terwyl die bedompige hitte vasklou aan my vel, soos beloftes in 'n nuwe verhouding. die donker hemel is grys van dreigende wolke en nou-en-dan dwarrel so paar druppels verward na benede. ek soek skuiling in die eerste restaurant. tafel vir een asseblief, arigato.",
    date: "2019-08-11T16:37:48+02:00",
    handle: "mabethc"
  },
  {
    id: "5e6617ef5ee429768df2bfea",
    title: "Nie reg nie",
    bodyText: "Ek is oor verkeerde nawekeMet plaaskuiers, te veel oogkontak, te veel skimpeMet ouens met die verkeerde oogkleur, verkeerde stemtoon en 'n baard wat nie naastenby so aantreklik is soos joune was  na te veel stap nieMet ouens wat te veel whiskey drink, wat te veel rook en vergeet om jou die volgende keer selfs net te groetMet sterrekyk, met iemand anders wat in afwagting nader skuifEk wens jyt nooit jouself gesien as een van die verkeerdes nie. Dat ons dit kon laat werk het, dit kon regmaak. Alles kon regkry. ",
    date: "2019-12-08T22:00:50+02:00",
    handle: ""
  },
  {
    id: "5e6617f25ee429768df2bff3",
    title: "Onthou I",
    bodyText: "Los lippe sterf op die klippe",
    date: "2018-11-29T09:27:21+02:00",
    handle: ""
  },
  {
    id: "5e6617f85ee429768df2c007",
    title: "Ideologie",
    bodyText: "Ek is so erg gebrainwash met idees \noor hoe die lewe moet wees.\nSoveel so dat ek dit w\xE9\xE9t, \nmaar steeds nie die idees wil vergeet.",
    date: "2019-01-31T00:26:09+02:00",
    handle: "ena_stegmann"
  },
  {
    id: "5e6617fc5ee429768df2c015",
    title: "dekmantel liefde",
    bodyText: "ek's haar geheimen ek wens sy woumy deelons deel met die w\xEAreld ",
    date: "2019-11-24T20:27:43+02:00",
    handle: ""
  },
  {
    id: "5e75e97387055d00175340a1",
    title: "Ons ",
    bodyText: "L\xEA...\nSit...\nL\xEA...\nSit...\n",
    date: "2020-03-21T10:16:19.501Z",
    handle: ""
  },
  {
    id: "5e7bbe5cfae0fa0017dff4b8",
    title: "Dvr",
    bodyText: "Ek weet jy sal dit nie verstaan \n\nMaar wat ek vanaand vir jou ges\xEA het, het ek nogsteeds gedink jy sal my kies en my lief he deur dit als. ",
    date: "2020-03-25T20:26:15.888Z",
    handle: ""
  },
  {
    id: "5e88c709355d600017058f88",
    title: "Jy",
    bodyText: "Moeiteloos het jy,\nOnwetend my\nSoos 'n stroom in die see van jou hart ingetrek\nSonder verwagting\nSonder waarskuwing\nHet ek verdrink in wat jy is.\nWant jy is my oseaan.\nKalm golwe klots teen my siel\nBreek branders teen my menswees.\nWant jy is ek\nEn ek is jy\n En ek weet dat jy vir altyd sal bly.. ",
    date: "2020-04-04T17:42:33.740Z",
    handle: ""
  },
  {
    id: "5e8ee4c36cd1670017d83925",
    title: "..",
    bodyText: "Jy het op my borskas gestaan\n\nEk kon nie meer asem kry \n",
    date: "2020-04-09T09:02:59.838Z",
    handle: ""
  },
  {
    id: "5e90cf11dd922900172d29bb",
    title: " Nikotien te-kort, pandemic thoughts",
    bodyText: "Identiteits dimensies fokuit op my social feed\n'n kollektiewe geheue\nVanuit ons huis-Grotte\nAs ons buite is:\nDra ons Dinamies-s\xEA maskers \nSit jou hand voor jou mond, \nBly binne saam jou kat en jou hond. \nAll die tannies op my what's app:\nGroot is God, ons het nog hoop. \n\nHoes-stroop en advil\nBoereraad en ibuprofin\nHande was en isolation \nDis alles nie-te-min \nDie pandemic is binne my:\nEk het 'n nikotien te-kort. \n",
    date: "2020-04-10T19:59:10.960Z",
    handle: "@tanapistorius "
  },
  {
    id: "5eb5f0dc8df2cf00172c76fd",
    title: "My lelike ou stoel. ",
    bodyText: "Mense kan s\xEA wat hulle wil, maar 'n gemaklike sit, broei goeie gedagtes. ",
    date: "2020-05-08T23:53:00.430Z",
    handle: "@evertesterhuizen"
  },
  {
    id: "5eb71dd78df2cf00172c76fe",
    title: "Krisis",
    bodyText: "23 jaar is te kort vir die leeftyd wat ek spandeer het\nDie sagmoedigste antwoord was dat ek daaraan \u2018n einde kan bring sodra ek die laaste hulpmiddel aanvaar het\nHet jy geweet in Switserland is genadedood van toepassing op kliniese depressiewes? \n\u2018n keuse. \n\u201CEk weet jy is moeg\u201D\n23 is \u2018n leeftyd. ",
    date: "2020-05-09T21:17:11.909Z",
    handle: ""
  },
  {
    id: "5ed68d79c366ad0017bf5257",
    title: "Work ",
    bodyText: "Mother widowed of love\u2019s first fruit. \nHer tongue anaesthetised with \nLabour. Taught to find work  \nFalse with passionate belief.\nIn her prime, to bear so much. \nTime spent in despair. \nBut her floors ...\n\nHow painfully they shone. ",
    date: "2020-06-02T17:33:45.590Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ede56258cdd5e0017616497",
    title: "op 'n warm wintersdag by die strand, durban",
    bodyText: "skuimsatyn rol oor my \ndeur my\ntone kruip uitgeput\ntot op die sand.\nwarm oosterse gety\nwat geen herberg het by\nhierdie kus nie. \nwaterspie\xEBl speel met my\nen skeepsbrak blaf in my gesig\nhuilend na die maan\nsonder hok of huis\norals en n\xEArens tuis. ",
    date: "2020-06-08T15:15:49.652Z",
    handle: "@ilzedup94"
  },
  {
    id: "5efed902df8c0f0017929a67",
    title: ".",
    bodyText: "losing doest have to be a loss.",
    date: "2020-07-03T07:06:42.272Z",
    handle: ""
  },
  {
    id: "5f2c632174d21600178f442a",
    title: "the tree of longing",
    bodyText: "there's a forest in your\nhair where my fingers stroll\ncaressing roots that kiss\nthe scalp,\nmeandering into your memories\nwhere I would very much like\nto build a nest for my own\nweary head. ",
    date: "2020-08-06T20:08:01.221Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f2dc814c354f30017584c0e",
    title: "Het iemand dalk vir my 'n sleutel?",
    bodyText: "SA is in Lockdown, big whoop. \nEk lewe al 'n paar jaar in lockdown. \nGaan n\xEArens. Doen niks. \nVasgevang in 'n vreemdeling se greep. \nEk wonder of die w\xEAreld vandag anders lyk as die dag toe ek jare gelede by die huis ingestap het? ",
    date: "2020-08-08T11:53:43.666Z",
    handle: ""
  },
  {
    id: "5f304898bb194f0017c423f4",
    title: "\u25CB ",
    bodyText: `Hoe weet 'n mens sonder spie\xEBl hulle is besig om iets "reg" te kry? `,
    date: "2020-08-09T19:03:52.007Z",
    handle: ""
  },
  {
    id: "5f342cd90284ef0017749441",
    title: "kat",
    bodyText: "wispelturige\nweerlose wonderwerke\nwemelend en wild",
    date: "2020-08-12T17:54:33.621Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f84b9b486772c0017086286",
    title: "Die drempel ",
    bodyText: "Wat doen jy\nWanneer jy jou ouers en familie ontgroei het?\nWanneer jy raad vra, en dit wat hulle kan offer nie relevant is nie?\nWanneer jy 'n kind in die huis is en hulle re\xEBls moet volg, maar die jukskei van grootmens-verantwoordelikhede op jou skouers val? \nWanneer hulle verwag jy moet altyd by hulle planne inval maar nooit jou dinge wil doen nie, nes laerskool-roetines?\nSteek jy die drumpel dan oor en kyk nooit weer terug nie?\nSny jy die metaforiese naelstring van ouersorg\nEn bel net huis toe wanneer jy groot nuus het?\nGoogle mens dan maar hoe om rys te kook of watter wyn om saam te neem of hoekom jou kar so snaaks klink?\nWat doen jy as die las van kindwees en wat hulle als moes op offer ter wille van jou te swaar raak?\nAs die som die heeltyd jou lewensvreugde vir hulle s'n is? ",
    date: "2020-10-12T20:16:52.084Z",
    handle: ""
  },
  {
    id: "5e6617f15ee429768df2bff0",
    title: "Jy is in my (gedagtes) ",
    bodyText: "Kan ons n aand saam spandeer?\nKan ek vir jou al my geheime vertel? \nKan ek jou vashou en lief he? \nVir een aand? \nMore kan ons weer aangaan soos die gebroke siele wat ons is.",
    date: "2019-07-05T14:11:53+02:00",
    handle: ""
  },
  {
    id: "5e6617f65ee429768df2bfff",
    title: "Junie bly n koue maand.",
    bodyText: "Die wolke bewaar n geheim.Jou o\xEB swem in trane.Terwyl die re\xEBn saggies teen ruite aflap.Is dit dan nie wat jy wou gehad het nie.Is dit dan nie waarvoor jy gevra het nie.Na maande is ons liefde n verlepde roos op jou vensterbank.Ek het n probeer, ek het baklei.En self al glo jy dit nie.Sal ek vir jou altyd lief bly.Al dink jy dat ek JouHaat.",
    date: "2020-02-07T09:45:47+02:00",
    handle: ""
  },
  {
    id: "5e6617f95ee429768df2c00a",
    title: "VerslONS",
    bodyText: "Dit klink asof jy wil baklei\nEk dink ons is eintlik albei in dieselfde posisie\nAlleen op 'n Vrydagaand. Alleen op 'n Sondagaand\nEk is jammer iemand het jou hart seergemaak\nEk hoop jy kan hul stem uit jou kop kry; memories laat gaan.\nDis kak moeilik en ek tik die na 'n bottel rooiwyn\nLiefde is net seer",
    date: "2019-09-01T20:12:42+02:00",
    handle: ""
  },
  {
    id: "5e6617fd5ee429768df2c018",
    title: "Vas",
    bodyText: "Ek wil vas!\nSkree sy binne my\nVas van alles!!..\nLos!\nMaak my los van mense vas\nMaak my los van liefde vas\nMaak my los van teleurstelling vas\nMaak my los van jou vas\nMaak my los van alles wat was\nEk wil vas\n",
    date: "2018-09-19T20:14:01+02:00",
    handle: "13.lynette"
  },
  {
    id: "5e870af57c861000174ca668",
    title: ";",
    bodyText: "Dit hoef nie seer te wees nie. ",
    date: "2020-04-03T10:07:49.704Z",
    handle: ""
  },
  {
    id: "5e89b9375af966001707e63b",
    title: "This poem has no title",
    bodyText: "ek wens ek het moed gehad\nom te s\xEA ek het lief gehad\nom hardop vloeke uit te roep\nsonder om vir die spie\xEBl te staar\n\nek wens ek was iets meer\nas 'n gebruiksitem gewees\ndat ek my bestemming kon beheer\nwat ek wil swot of dalk \nmiskien haweloos word\n\neendag sal ek dood gaan\nalmal sal my naam vergeet\njy mag dalk 'n traan pik\nof ongesteurd voortgaan\n\ndis goed en wel mens kry jou graad\nom baie mot en roes te kan vergader\nsolank jy net nie jou onsterflikheid \naan die geforseerde vergelykings\nmoet afstaan of vrywillig prysgee nie\n\ndink jy Jesus bestaan \nof is hy net 'n mooi woord wat mens gebruik \nwanneer jy nie meer weet wat om te s\xEA nie\ndink jy ons hemel vader luister\nmiskien sal hy hoor as ek laster\nen dalk net iets sinvol\naan al die le\xEB vrae doen\n\nek sondig daagliks\ndaarom verdien ek die dood\nal het ek my verlosser aanvaar\nweet ek dat hy 'n duisend myl\nvan my af nie sal omkyk nie\n\ndie skepping is baie groot\nen almal staan hulle kringe vol\nek kon net so wel niks wees\nons almal is atome wat\ntoevallig saam gebind is\n\n\n\n\n",
    date: "2020-04-05T10:55:51.198Z",
    handle: ""
  },
  {
    id: "5e8c2dabbf78dc001787b8a8",
    title: "Bewolkte herfsoggende sonder kantoorure",
    bodyText: "Viennas, soetrissiesous en gerasperde cheddar op 'n effe donker toastie. Bitter koffie met 'n raps melk. In die bed. Beste breakfast ooit. ",
    date: "2020-04-07T07:37:15.477Z",
    handle: "@Verbatim "
  },
  {
    id: "5e9b1b9cf55ce6001715e8cc",
    title: "You moved",
    bodyText: "Ek\n, Jy\n\nJy het beweeg\nVerder van my\n\nEk het beweeg \nnader aan my \n\n\n",
    date: "2020-04-18T15:29:05.822Z",
    handle: ""
  },
  {
    id: "5e9ccb07f8872c00170f964d",
    title: "(Val)kenberg",
    bodyText: "Soms alleen\niemand kan my sien\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Wanneer\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Ek raak\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Ek is oortuig daarvan dat ek my geheue onder die loep neem\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Hy is bo van bo na bo van my af\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0hy is besig om sy weer\nuit te gooi\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Ek is 'n windwond en tussenin;\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0raak twee geboue\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Hy is weer terug\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0om\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0my na-die-feit\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0my nou-ongebonde nr\n\nDie alleen binne my en net ek\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Bly n moeilike \n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voorspelling\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'N Swak flits\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0en dan kan ek aan niemand aanraak of praat nie\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0As die warm lug vervaag\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0as die vog kom\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0in slaap in wakker word\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0as ek oud is in my bewegings\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'n briesende lyk wat op kussings rus\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Hoe sal ek gevind word?\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\n\n\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Wie sal my val soen as ek val?",
    date: "2020-04-19T22:04:55.457Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ee92d3c73051f00170697b6",
    title: "Wat glo jy? ",
    bodyText: "Om te dink jare gaan verby \r\nWaar ons gebreinspoel word\r\nTeneur gedruk  word deur die bybel\r\nTog net moet glo\r\nSlegte goed is net beproewings \r\nOf hoe. Dis wat hulle mos dink\r\nGod is God, die een wat nie voute maak nie\r\n\r\nAl hoor almal hoe kinders se stemme\r\n na verkragters\r\nSkree in Gods naam om mans te straf\r\nBeproewings\r\nVroue in beledigende ego\xEFstiese verhoudings\r\nVernederend, maar elke sondag op die familie bank \r\nBeproewings\r\nNarsiste wat ons in leuns laat leef\r\nBeproewings \r\n\r\nKniel elke aand voor my bed \r\nvra, smeek om alles wat slegs is te verander \r\nDie ironie van al die NG gelowiges\r\ndie gemeenskap van tannies en ooms \r\nmet \u2018n dominee wat kollekte  neem vir sy cult\r\n\r\nGlo soos kinders\r\nG\u2019n kind glo in di\xE9 konserwatiewe nonsense \r\nWat ons daagliks hoor as Christene nie \r\nSwart leer band boek vol stories en ervarings van mense v. C\r\nGlo jy rerig net die opinie van \u2018n medemens \r\nIs lewe r\xEArig s\xF3 eenvoudig? \r\nMoet ek hulle woord vat \r\nVertrou hierdie was wyse mans met geen voute nie... \r\n\r\nSit jou hande in die grond\r\nTussen \u0149 dro\xEB sonneblom land\r\nVoel die skepping en die wonder werke van lewe\r\nGlo in verander en aanvaarding\r\nG\u2019n kind glo in rasisme\r\ndiskriminasie teen die gays nie\r\nGlo soos \u2018n kind\r\nAs jy dink om iemand se hande in mekraar te druk\r\nOngelowiges se knie\xEB te breek om voor God te buig\r\nKort jy liefde en geduld\r\n\r\nAlles wat ek vandag weet van die Christendom \r\nIs afkomstig van die eerste Adam en Eva storie \r\nVan kind wees ingedril\r\nOor en oor gepreek en vertel\r\nVoor bed, vroeg oggend, Sondagskool\r\nAlles om net as 17 jarige te se: \u201CJa, ek glo\u2019\u2019\r\nEen woord en jy is \u2018n lidmaat. Sewentien jaar\r\nEk mag nog nie stem vir \u2018n president nie \r\nMaar die NG kerk se ek ken God\r\nWat \u2018n klig\r\n\r\n\r\n\r\n\r\n\r\n",
    date: "2020-06-16T20:36:12.082Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5eeb64780103340017f76c6a",
    title: "Moes nog: Repliek",
    bodyText: "Ek verlang ook. Seker meer as net soms. ",
    date: "2020-06-18T12:56:24.823Z",
    handle: ""
  },
  {
    id: "5efe5a3cdf8c0f0017929a66",
    title: "mechanics ",
    bodyText: "\nIs jy gay as jou partner se bakwerk anders lyk as joune, maar julle onderdele; dieselfde? \n\nIs jy straight as jou partner se bakwerk dieselfde lyk as joune, maar julle onderdele; verskillend?\n\nIs jy enigiets as dit nie anders is nie?",
    date: "2020-07-02T22:05:48.680Z",
    handle: "@stoepgallery"
  },
  {
    id: "5f077dec22713a001734ad88",
    title: "dankie weird oom met die blomme",
    bodyText: "Presentation may be key, but authenticity is the hinges on which the door hangs.",
    date: "2020-07-09T20:28:28.208Z",
    handle: ""
  },
  {
    id: "5f0b36a36ce7a500170d4615",
    title: "Sakura, 00:00 (2016)",
    bodyText: "soos bome deur die seisoene\u2029moet ons sekerlik ook van kleur en kreet verander\u2029stukkies van wie ons was sal tog elke nou en dan verbywaai\u2029en dalk ook bietjie in ons hare vassit\u2029\nnet so elke keer as jy wil-wil terug in my gedagtes in dwaal\u2029gee ek jou liewers nie kans om iets te s\xEA nie\u2029al wat ek nou kan doen is jou voorkop soen\u2029jou afskud en kyk hoe jy tussen die blare sak en wegwaai\u2029\xA0\u2029ek sien jou in herfsblare\u2029ek sien jou in storms\u2029ek sien jou in kersie bloeisels\u2029en herinner myself dat ek jou eintlik maar net raaksien in als wat tydelik is\u2029\xA0\u2029ek was \u2018n kind\u2029en vandag soos ek hier sit is ek \u2018n vrou\u2029want ek weet dat daar dinge in die lewe is wat beter is om agter te los\u2029",
    date: "2020-07-12T16:13:23.038Z",
    handle: "@xanya.bianca"
  },
  {
    id: "5f10cf59d7af7e0017d1235e",
    title: "Break",
    bodyText: "Fever\nprotects the way\n\nmadness does",
    date: "2020-07-16T22:06:17.711Z",
    handle: "sheridanwalter "
  },
  {
    id: "5f1c64876c6d8100172d17ff",
    title: "seisoene as tema in die Identiteit van die Afrikaner soos uitgel\xEA in die tradisionele Plaas Roman. ",
    bodyText: "ek is ouer \nin murg voel ek dit.\nseisoene is deel van ons en ons aardsheid - blougroen takkies word bruin.\n\nlente en herfs het gekom,\nDi\xE9 het verstandigheid (te)en ellende toegerus.\n\nwinter was te vroeg, te hard, te koud\nDit het asem weggesteel. \n\nblougroen takkies word bruin \nvuurmaakhout \n\n bly warm totdat somer kom\n",
    date: "2020-07-25T16:57:43.755Z",
    handle: ""
  },
  {
    id: "5f52bdb415effd00178c39a0",
    title: "1am",
    bodyText: "Kan jy my weer videocall, asb.",
    date: "2020-09-04T22:20:36.331Z",
    handle: ""
  },
  {
    id: "5f631ad74de6da001771bfff",
    title: "Vrye fokken vrou!!, ",
    bodyText: "Ek gil ek skree ek raas ek g\xE1\xE1n\nTekere!!\n. Soos en vir al die ander (afrikaan/se) girls.\nEk wil gehoor wees! ",
    date: "2020-09-17T08:14:15.621Z",
    handle: "@cx_lyb"
  },
  {
    id: "5f75adb068a37e00177a7890",
    title: "as nat",
    bodyText: "Dis so grys, so nat, nes ek gehoop het dit sal wees.",
    date: "2020-10-01T10:21:36.996Z",
    handle: ""
  },
  {
    id: "5fa27a9eade0c300172e0b69",
    title: "2020",
    bodyText: "Fokkit\nKan 2020 net die vir ons gee\nNet een goeie ding\nNet een keer wat die rasisme\nKlassisme\nVrees nie wen nie?",
    date: "2020-11-04T09:55:42.807Z",
    handle: ""
  },
  {
    id: "5e6617dc5ee429768df2bfaf",
    title: "In stilte ",
    bodyText: "Die vrou se gekla is 'n kombers wat net-net te kort is. ",
    date: "2018-08-22T16:56:31+02:00",
    handle: "EvertEsterhuizen"
  },
  {
    id: "5e6617d75ee429768df2bf9d",
    title: "TEKSMARK",
    bodyText: "Arme aartvark ekSit by TeksmarkSoek vir boorgat Om te lekYstervarkpen gedoop in galSit ek woeps-waps saam met die akkedisse-demie-kusteEn dink en vra:\u201CKan \u2018n rapse knaap,wit van gelaat,Stories vertel oor sy swart maat?\u201DOns rits op r\xFBe van spring-konyne Deur dale en vlaktes en deurkosyne Van die vo\xEBls sing so effe vals(Die dieretuin is mos maar klein)Alhoewel dan elke nou \u2018n seepglad swaan verskyn Na die tyd is die watergat oorstroom met \u2018n gekwetter en \u2018n geklets oor saad-belaai komkommer happies en geborge wyn.Dit is hier waar die kruis beskuiwing plaasvind;Arme Aartvark ek met my neus in die samoosas en my oor op die grond.",
    date: "2019-11-08T00:55:56+02:00",
    handle: ""
  },
  {
    id: "5e6617e25ee429768df2bfc4",
    title: "bid",
    bodyText: "Ek  sou kerk toe gaan, maar sonde vat al my tyd op.",
    date: "2020-02-11T13:31:30+02:00",
    handle: ""
  },
  {
    id: "5e6617e65ee429768df2bfca",
    title: "Op pad terug huis toe",
    bodyText: "Hoe is dit dat die sondealtyd S\xF3ndaeop my rug kom l\xEA? ",
    date: "2019-08-18T19:13:19+02:00",
    handle: "ek.is.anouk "
  },
  {
    id: "5e6617ea5ee429768df2bfda",
    title: "\u{1F425}",
    bodyText: "We are animals with ill fitting underwear ",
    date: "2019-02-20T22:20:45+02:00",
    handle: ""
  },
  {
    id: "5e6617f05ee429768df2bfef",
    title: "Dank kom jul toe",
    bodyText: "Ons sit en lag en huil saamDis asof die lewe ons saam gebring het met 'n doel.Weet nog nie hoekomEk kyk in jou aller mooiste o\xE9Ek sien jou seerSeer van verlangeVerlange na jou ouersOuers wat aan beweeg het na 'n nuwe lewe.'n lewe van geen pyn geen leiding meerDie gemis sal altyd daar wees.Want jul was van kindsbeen af daar gewees. My lief gehad soos julle eie.Ek was gese\xE8nd gewees tot die dood ons geskei het. Ons sal weer ontmoet in onse Hemel se Vader se huis waar daar net rus en vrede oorheers.Dank kom jul toe om my lief te gehad het soos julle eie. My oorweldig het met jul liefdeEk was en is die bevoordigste om jul in my lewe gehad het. Tot ek jul weer ontmoet.Hou my plekkie oop wanneer dit my tyd is om by jul aan te sluit en verewig bymekaar te wees.I was blessed with the two of you. Dank kom jul toe mag God jul bewaar en my plekkie hou tot my einde op aarde op is",
    date: "2019-10-16T22:12:04+02:00",
    handle: ""
  },
  {
    id: "5e69487d10d5f80017a0f2e5",
    title: "Handy Andy ",
    bodyText: "Ek soek cool goed. Cool goed soos foto's teen die muur, foto's van kuns, foto's van klassieke werke met 'n Andy Warhol twist. ",
    date: "2020-03-11T20:22:21.359Z",
    handle: ""
  },
  {
    id: "5e766e0b87055d00175340a2",
    title: "-",
    bodyText: "Ek het n bietjie teveel chocolade geeet\n\nNet soos gister\n\nEn soos die dag voor dit\nEn die dag voor dit \nEn die dag voor dit\n\nEk het dit hierdie keer darem nie opgegooi ",
    date: "2020-03-21T19:42:32.332Z",
    handle: ""
  },
  {
    id: "5e8dba0bc6965b00171571c2",
    title: "Greep ",
    bodyText: "Die gryp\nhet my lewe geword. 'N Swaannek\nkrul om te vra\nwat nou \nen\n\nontkrul\nom in die riete te reik,\n\nen\nsplyt\ndie konkresie\nvan      wat      ek    gedoen       \n          het.\n\n",
    date: "2020-04-08T11:48:27.156Z",
    handle: "sheridanwalter "
  },
  {
    id: "5e956b828110350017bd8478",
    title: "()",
    bodyText: "Gee my tyd",
    date: "2020-04-14T07:51:30.260Z",
    handle: ""
  },
  {
    id: "5e961c8599880400172f6528",
    title: ")( ",
    bodyText: "Jy't al die tyd in die w\xEAreld (gehad).\nToe wil jy dit nie h\xEA nie. ",
    date: "2020-04-14T20:26:45.434Z",
    handle: ""
  },
  {
    id: "5ea01193ad9fac00178cd673",
    title: "Is dit jy? ",
    bodyText: "Ek hoop my woorde spreek waarheid \r\nek hoop my musiek maak jou broos\r\ntot waar jou gees tot beskiking kom \r\nek soek jou\r\njou harde hande teen my wit klawers \r\nmaar jou teenwoordigheid \r\nlos my eensaam.\n\r\nEk val sag weg tussen die hande \r\nvan \u2018n man",
    date: "2020-04-22T09:42:43.511Z",
    handle: "kayla_de_jager"
  },
  {
    id: "5ea1d8cce7f4c60017abfe78",
    title: "\u2014\u2014->",
    bodyText: "your direction is more important than your position.\n",
    date: "2020-04-26T07:32:16.323Z",
    handle: ""
  },
  {
    id: "5ea66f5007be76001793cfe4",
    title: "bulletproof",
    bodyText: "Ek het begin val. \nEn jou arms was meer as gereed om my te vang. ",
    date: "2020-04-27T05:36:16.691Z",
    handle: ""
  },
  {
    id: "5ea8913370dd490017fe039b",
    title: "anna",
    bodyText: "my ma se ma se naam\nwas anna\nen sy het my geken deur\nmy ma se naeltjie\nek het haar leer ken deur \nhaar graf\nwaar my ma haar grootste wense\nvir my kon neerl\xEA\nveilig soos in die arms van 'n ouma\nen ek wens ek kan anna vir my ma\nlewendig skryf\nsodat sy net nog een keer\nweer deur haar bladsye kan\nblaai. ",
    date: "2020-04-28T20:25:23.457Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ebc2b448c5423001722ea2e",
    title: "Hoe raak ek ontslae van jou? ",
    bodyText: "Hoe raak ek ontslae van jou?\n\nKnip jou uit;\nMaar wat as ek net 'n stomp sker het;\nAs die memories so skerp is dat dit papercuts los\nDeath by a 1000 papercuts\n\nBoor skagte in my brein;\nMaar daar waar ek diep delf om jou uit te grawe\nvoel dit koud en asof ek nie genoeg suurstof het nie\n\nVerf alles swart;\nMaar daardie spesiale swart verf wat een of ander asshole artist as die blackest black gepatenteer het, skep dalk 'n tonnel wat my teruglei na jou\n\n\nOntweef jou; \nMaar ek ken nie die patroon wat jou in die eerste plek so in my wese vasgevleg het nie\nSo ek sit met ontrafelde, nuttelose stuk lap \n\n\nAlles laat leemtes\nOnopvullende leemtes",
    date: "2020-05-13T17:15:48.367Z",
    handle: ""
  },
  {
    id: "5ed63991c366ad0017bf5256",
    title: "SWART LEWENS MAAK SAAK",
    bodyText: ".",
    date: "2020-06-02T11:35:45.186Z",
    handle: "klyntji"
  },
  {
    id: "5ef3d349c207be0017651425",
    title: "deesdae ",
    bodyText: "die oggend brand wakker \nen die stad slaap nog stil in opwagting van die nuwe w\xEAreld wat wag \nso amper asof ons (weer) met skepe hierheen gekom het, \nvir maande gereis het, \nna net mooi n\xEArens\nin ons huisies\nen tuintjies \nen 5km-radius-om-jou-huis-blokkies, \nso gou die mensdom se lewens verminder tot verkleinings \nen onroetines \nin voorheen onbesette ruimtes \nwaarin die vorms van verlede, verspeelde vryheid weergalm \nen raas en kla en die klanke van vo\xEBlsang buite wegdryf \n\nen iewers strek strale oor \u0144 skilpad wat rustig en ongedaant oor \u0144 plaaspad stap ",
    date: "2020-06-24T22:27:21.494Z",
    handle: "@marietsteinmann"
  },
  {
    id: "5f062443a7c836001703015a",
    title: "Notes on a birth month",
    bodyText: "midyear winds blow\nwhispers over the sun\nwatching over me from a \ndistance but always blessing\nmy crown\nchristened by rain every year\non this night\na promise\nthat i belong to july as much as she\nbelongs to me",
    date: "2020-07-08T19:53:39.953Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f0b52e66ce7a500170d4618",
    title: "sssss",
    bodyText: "i scattered sunflowers\nin the sand and\ni thought the seeds would\nstart sprouting when i\nsang david bowie to it\nbut starman staggered on\nmy lips\nscratching the scathing surface\nwithout so much as shattering\nso i shook sense into my psyche\nslithering slowly past the self\nsnaking along the silence.\n\ni realized sudden sprouting\nis shit when forced\njust like this awful alliteration. ",
    date: "2020-07-12T18:13:58.762Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f0f65ec9591a70017ec863b",
    title: "Kreatief vs destruktief",
    bodyText: `Jy het my geleer hoe gevaarlik dit is om literatuur en liefde te meng
Ek het nog nie daarvan recover nie -
Om ander se stories in jou stem te hoor en so 'n narratief ons s'n te maak

Ek het na jou gekyk asof jy 'n ballon is wat enige tyd kan bars
Maar jy was ook omring met naalde, spelde en allerhande kaktusse

Is 'Leemtes' net 'n geval van jy wat wil ""inpop, sonder om regtig in te pop""?`,
    date: "2020-07-15T20:24:12.930Z",
    handle: ""
  },
  {
    id: "5f13334c8efe9d0017ee48d5",
    title: "energieskuif",
    bodyText: "ek's effens skrikkerig\nvir die verandering\nwat jy veroorsaak\nin my bestaanwyse",
    date: "2020-07-18T17:37:16.936Z",
    handle: ""
  },
  {
    id: "5f2dc546c354f30017584c0d",
    title: "Tonight",
    bodyText: "Don't fall in love with me, \nAs my heart belongs to another.\nBut tonight, just tonight,\nMy body is yours.",
    date: "2020-08-07T21:19:02.672Z",
    handle: ""
  },
  {
    id: "5f3753103a8d77001771d959",
    title: "Mamma,",
    bodyText: "Ek is soms bang vir die nostalgie wat my sal vasvat wanneer jy weg is en ek perongeluk 'n episode Koekkedoor kyk. \n\nDie drie dag siekte.\nJirre hoor: die drie dag siekte kan bene breek. ",
    date: "2020-08-15T03:14:24.045Z",
    handle: ""
  },
  {
    id: "5f5b44fb81d5580017490aea",
    title: "Kooityd om lunch tyd",
    bodyText: "Ek weet nie of dit ek is wat dit vir my sisteem s\xEA of of dit my sisteem is wat dit vir my s\xEA nie, maar soms is een van ons net 'n bietjie stukkend. \n\nEn die ander een sukkel soms om te verstaan. ",
    date: "2020-09-11T09:35:55.653Z",
    handle: ""
  },
  {
    id: "5f8a92ad020bc300175a8729",
    title: "toets my ",
    bodyText: "Ag Here tog. Opgetof en uitgestep. Hard betaal en pret gehet. Au jus, compote, deglaze, flamb\xE9, roux.\n\nEk soek jou genadige filters soos 'n honger hond. \n\nOntmoet my in my fancy fodde. Amen. ",
    date: "2020-10-17T06:43:57.581Z",
    handle: ""
  },
  {
    id: "5e6617d95ee429768df2bfa1",
    title: "Txt",
    bodyText: "Hy: \u201CIs ons besig om op te breek?\u201D\nEk: \u201CEk wens ons was nie\u201D\n\n.,.",
    date: "2019-08-07T19:31:02+02:00",
    handle: ""
  },
  {
    id: "5e6617d95ee429768df2bfa3",
    title: "ONSeker",
    bodyText: "Jy praat asof jy weet... nee hoop. Wat het dit tog aan u, Pilprofeet.",
    date: "2019-09-01T12:39:53+02:00",
    handle: ""
  },
  {
    id: "5e6617da5ee429768df2bfa5",
    title: "Leeg, lee\xEBr, leegste",
    bodyText: '"Altyd, ja. Myne."   "Op \u02BCn manier, ja.""Ja. Op \u02BCn manier." ',
    date: "2019-07-20T22:35:36+02:00",
    handle: ""
  },
  {
    id: "5e6617da5ee429768df2bfa6",
    title: "grootmensgoed + hooikoors ",
    bodyText: "Dis half vier op 'n Donderdagoggend.Oor twee ure moet ek opstaan, br\xEAkfis en die kat kosgee. Werkgoed begin 'n uur later. Maar ek l\xEA nog en kyk reviews van stofsuiers. Dis tyd.  ",
    date: "2019-11-21T03:35:47+02:00",
    handle: ""
  },
  {
    id: "5e6617dd5ee429768df2bfb2",
    title: "Die Tietel",
    bodyText: "Vergewe my.\nDis ons dis lig,\nDit wurg my tot besluit,\nEk wil soms uit,\nIets anders\nIets mooier as die wit van wag,\nIets groter as ons,\nEks belaglik oor jou.",
    date: "2018-07-20T19:37:48+02:00",
    handle: ""
  },
  {
    id: "5e6617e25ee429768df2bfc5",
    title: "CY",
    bodyText: "So wit. So wit hier. Gee net aan my sonbril + entitlement. ",
    date: "2020-01-13T20:26:11+02:00",
    handle: ""
  },
  {
    id: "5e6617e55ee429768df2bfc8",
    title: "Oh heer",
    bodyText: "Net vir ons\nDie kerk klap\nEn ek skinder\nTiete en lieg\nSkool, ek en ons\nEk wens soms\nGod is n poes soos ek...\n",
    date: "2018-09-22T20:33:22+02:00",
    handle: ""
  },
  {
    id: "5e6617e85ee429768df2bfd2",
    title: "Asseblief",
    bodyText: "Vergeet-my-Terwyl ek dit nie regkry om jou te vergeet-Nie ",
    date: "2020-02-13T21:34:05+02:00",
    handle: ""
  },
  {
    id: "5e6617ea5ee429768df2bfd9",
    title: "stap twee",
    bodyText: "ek moet vanaand 'n moeilike epos skryf ",
    date: "2019-02-19T19:19:54+02:00",
    handle: ""
  },
  {
    id: "5e6617f75ee429768df2c004",
    title: "Die veelvuldige sorg",
    bodyText: "Onder die man wat koerant lees langs sy hond op die parkie bankSit jy met jou dis-nie-so-erg-nie\nBed 32\nMiddag-om langs al laerskool kinners en hul maats, oorkant, geskei van die malles met tralies soos honde by die DBV\nEn die songevlekte geel linoleum vloere by jou kamerdeur, herinner my aan kots en braak en die pis van iemand wat detox",
    date: "2019-08-15T23:43:54+02:00",
    handle: "almero_welgemoed"
  },
  {
    id: "5e6617f95ee429768df2c00b",
    title: "Naguile",
    bodyText: "Ons is gemaak vir die nag\nDie ek en die jy\nNaguile wat nek omdraai na\nOntelbare gloeilampe wat val\nDeur die swart laken wat ritmies dans op die maat van die wind\nEn ons beskut",
    date: "2019-01-18T18:09:16+02:00",
    handle: "handyandy.art"
  },
  {
    id: "5e6617f95ee429768df2c00c",
    title: "Leuens en Ledemate",
    bodyText: "_'n Nuwe Heuwels Song _\n\nVliegtuie terug na hulle huise, \nleuens voor lewensmaats, \nSy\u2019t nog merke op haar ledemate  \n...\n\u201CJou sonde is hel vir my, lief... so gun my, my vrae, gun my, my kwaad word, ek probeer jou net verstaan.\u201D \n\nDit sal tyd vat, dink hy \n\u201CDit sal tyd vat\u201D, s\xEA sy \n\n\u201CEk verdien nie jou kwaad nie, maar moet my nie hier los nie \u2013 moet my nie hier vergeet nie, bring my saam op jou gesond-word-reis, ek wil saam\u201D  \n\n\u201CEk't niks om vir jou te s\xEA nie, alhoewel ek die w\xEAreld oor my voel was, sit net vas, ons kan werk ons moet seker net aan pas\u201C \n... \n\u2018n geneesheer-pasi\xEBnt kompleks van nou af  \nEn nooit weer gesond nie . ",
    date: "2019-05-07T22:07:49+02:00",
    handle: "ahwelgemoed"
  },
  {
    id: "5e6617fc5ee429768df2c016",
    title: "Depressie",
    bodyText: "Tom cruise se daar is nie n ding soos n chemical imbalance ",
    date: "2019-12-18T11:50:39+02:00",
    handle: ""
  },
  {
    id: "5e7efd11d263ca00175cb5d0",
    title: "Tax nommer",
    bodyText: "Lasagna en ertjieslaai op 'n Donderdagaand.\nEn een glas CabSauv.\nEk moet seker kyk wat oom Cyril nounou s\xEA.\n\nHiers ek, 'n grootmens.",
    date: "2021-02-11T17:20:55.997Z",
    handle: ""
  },
  {
    id: "5e8915195af966001707e638",
    title: "Lyne",
    bodyText: "Net 'n bietjie vashou. Dis al. ",
    date: "2020-04-04T23:15:37.247Z",
    handle: ""
  },
  {
    id: "5e9eef7e13332100177f4c3c",
    title: "Jy",
    bodyText: "Jy\u2019s die laaste droom en die eerste asem en jy word nou gesigloos, stem loos en af gestom hier op aarde. \n\nJy kan net so wel onder water wees.\n\nJy kan net so wel in die reen en wind swaai saam die takke en blare in daai mens geskepe woud. \n\nJou laaste asem was seker nat en koud. \n\nJy le nou diep onder my borskas agter die dug been wat my hart en longe tas.\n\nVas gespan teen daai stuk waar niemand kan bykom nie.\n\nJy is nou amptelik deel van my bloed, dis tog al wat oor bly van jou.\n\nSo warrel warrel hier en daar deur my gedagtes, kom sit n rukkie op my skouer en vertel my waar jy heen was toe jy die laaste keer menswees wou probeer.\n\nJy\u2019s die einde van n era, die laaste knoop geknip en verlaate.\n\nJy is die son en die see van daai mooi dag toe jy langs my sit en niks wou se oor alles nie.\n\nGod is on repeat is al wat ek onthou. My fok ek mis jou.\n\nJy bly nou tussen my longe diep in my bloed en my selle.\n\nMaar kom tog terug en se vir my die nag is nie te lank nie,\n\nWys vir my hierdie nag is nie te lank nie.\n\nJy kan nie want jy't geen asem nie, daars net stof in n boks en gedagtis oor jou. \n\nDis die punt jy\u2019s vasgespan onder my borskas tussen my longe saam ons eerste hond en my laaste liefde. As of jy hulle self daar aan geknoop het met daai tou.\n\n",
    date: "2020-04-21T13:05:02.194Z",
    handle: ""
  },
  {
    id: "5ebc3b388c5423001722ea30",
    title: "Ernstige",
    bodyText: "Die dooie man hoor nooit.\nDie dooie man draai en draai\nMet sy stomme dolfyn grinnik\nDeur al die plekke waar hy is\nAs mense weer van hom praat:\nIn klaskamers of in vliegtuie,\nIn verveling of in pyn;\nVoor die skerms\nOf in die lig van die kollig;\nIn dae wat te sag is om te dra\nEn in die lang nagte waar\nDie donker steil word,\nDie wilde wind\nEn 'n ma staan op uit haar slaap\nOm haar ernstige kind te kalmeer.",
    date: "2020-05-13T18:23:52.450Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ec025bbac947500173a0fa2",
    title: "Skryf",
    bodyText: "My trane vlek my wange  steeds met die letters van jou naam\nNog bekende kurwes en lyne\nNog draaie en swaaie\nNog 'n woord wat nog hopeloos te veel seermaak\n",
    date: "2020-05-16T17:41:15.353Z",
    handle: ""
  },
  {
    id: "5ed7ee4d34942d00173d4964",
    title: "Weer en weer",
    bodyText: "Jou stem spook by my\nDie koue temperature laat my terugdink aan die hoendervleis wat jou vingers gelos het op die kurwe van my rug\nEn as ek my kop neerl\xEA verlang ek na jou tevrede sug net soos jy toelaat dat moegheid oorwin en jy wegraak in jou drome waaroor ek nou nog wonder \nek verlang na die klop-klop van jou hart, ek verlang na jou arms wat my omvou het en 'n romantiese donkerte geskep het \n\nEk mis die skelm kykies steel terwyl jy koshuis toe ry. Ek mis die pool lesse en die tye wat jy my nie eers net laat wen het nie\n\nEk mis die kaalvoet sokkie in Kimberley se sitkamer\nEk mis dit om te kan s\xEA ek mis jou nie",
    date: "2020-06-03T18:39:09.866Z",
    handle: ""
  },
  {
    id: "5ef39c18c207be0017651423",
    title: "In Alles",
    bodyText: "Jy is in die rol en tuimel van die golwe, jys oor en oor en oor hier, tot net voor ek breek\n\nJy is glimlaggend trots en effens uitasem  in die skadu van die baken op die berg,\nWaar ek die dorp uitgestrek kan sien,\nMaar steeds soos 'n GPS punte plot waar jy al was - waar ons was\n\nJy is in my woonstel, op my bank met\n'n glas rooiwyn wat gevaarlik vol is, met daai stem waarvoor ek selde kon nee s\xEA, met daai o\xEB wat my laat bloos vir geen rede\n\nJou naam bly op my lippe, jou vingerafdrukke permanent op my lyf\nJys nog hier\nOp te veel plekke\nTe veel kere\nTe veel maande later\n\nSo dit beteken\nEk is wat? ",
    date: "2020-06-24T18:31:52.609Z",
    handle: ""
  },
  {
    id: "5f699205d989470017e811fa",
    title: "Commitment ",
    bodyText: "Dan vee jy maar die hartjie-emoji wat jy langs sy naam getik het, uit. \n\nVir altyd het mos die geneigdheid om \u2019n bietjie te lank te word.",
    date: "2020-09-22T10:56:44.398Z",
    handle: "ena_stegmann"
  },
  {
    id: "5f85f86d84ef39001709be49",
    title: "*Paar-rym",
    bodyText: "Al my gevoelens l\xEA opgeskryf \nin die swart Moleskine-boek langs my lyf.\n\nVreemd wat alles langs mens kom l\xEA\nas jy liefde in mense en goeters b\xEAle.\n\nNou l\xEA ek alleen en staar na die dak\nen weet wat ek skryf is niks minder as kak.\n\nIronies hoe mens vir jouself kan jok \nas jy niks is maar glo jy is Antjie Krog.\n\n*Ek weet paarrym is een woord.\n",
    date: "2020-10-13T18:56:45.382Z",
    handle: "ena_stegmann"
  },
  {
    id: "5f91c2d3ee943f00172d5f37",
    title: "Seepalindroom",
    bodyText: "Die hemelruim en oseaan smelt saam in 'n mistige ontmoeting\nDie golwe rol uit die appelkooskleur sonsondergang\nEn spoel uit op die hemelruim refleksie op die strand \n' n Laaste seemeeu maak sy tog huis toe.\nEen vlok vo\xEBls bespikkel die horison,\nNes die ellips op WhatsApp\nWatsenaam is typing...\n...\n...\n'n Groot golf rol in\nEn die weerkaatsings palindroom is momenteel verwoes\nIn die oomblik, klink dit asof iemand die klank af gesit het\nTerwyl die groot brander homself saamtrek en stadig  terug sleur na die res\nIn die dynserigheid lyk die klippe soos gebo\xEB vissermanne\nWat vroegoggend aas uit haal om 'n lewe mee te maak.\nNog 'n ellelange ellips emigreer tuiswaarts\n...\n...\n... ",
    date: "2020-10-22T17:35:31.162Z",
    handle: "mabethc"
  },
  {
    id: "5e6617d65ee429768df2bf9c",
    title: ":-\xD7",
    bodyText: "speak the truth\neven if your voice shakes",
    date: "2018-12-27T00:24:27+02:00",
    handle: "anon"
  },
  {
    id: "5e6617e05ee429768df2bfbc",
    title: "windkrag",
    bodyText: "elders waai die wind almagtig\noor die stowwerige wolboggels\nvan skaap, die glim van bek van kraai\nen om die verweerde hoeke van\nhuise op plase waar windpompe \ndie aarde droogtrek soos muskiete\n'n lyk\n\nhier binne: die fan oor die nat wasgoed ",
    date: "2019-07-09T09:04:10+02:00",
    handle: "toastcards"
  },
  {
    id: "5e6617e05ee429768df2bfbd",
    title: "Nogsteeds Nag",
    bodyText: "Ek le en wag vir dagbreek\nMaar weet dit is nogsteeds nag\nMy gedagtes n warboel van wat is\nEn van wat was\nEk le en luister na musiek in Spaans se tale\nDie onverstaanbare woorde van vreemde tale\nDie heimwee en alleenheid le koud om my\nDie hitte van n nuwe toekoms roep my\nDie maan kruip weg in die donker van die nag\nMaar die suiderkruis roep my\nDie eeue oue rigtingwyser\nAs jy maar kon praat en my lei het\nSou hierdie nag nie uitstrek voor my\nAl kom die dag nou nader sy sonwyser\nHelp my met geen genade\nSelfs in die ligdag bly my gedagtes net n warboel van onbeantwoorde vrae\n",
    date: "2019-06-07T02:28:27+02:00",
    handle: ""
  },
  {
    id: "5e6617e05ee429768df2bfbe",
    title: "#sonsondergang",
    bodyText: "Ek gee vir jou my sonsondergang, sodat as die donker ons kom haal, jy nog 'n bietjie lig in jou hart oor het. \n\n",
    date: "2018-12-25T21:17:18+02:00",
    handle: ""
  },
  {
    id: "5e6617f05ee429768df2bfee",
    title: "Ek was blind. ",
    bodyText: "Iets het begin losgetrek. Stringe daarvan. Vinnig en luidrugtig oop. Soos ek dit probeer red, raak die afstand al groter tussen die twee. Die skeur groei n\xF3g vinniger!Ek het die twee goed weer probeer vasplak. Spoeg, water? Chemiese byvoegings? Naaldwerk?!Tot gisteraand. Tot ek besef het: ek droom al lankal van 'n rok. Die mooiste fluweel blomprint rok. Sonder restrictive parameters van nou mag jy piepie, nou mag jy nie. Sonder om ges\xEA te word hoe laat die pret m\xF3\xE9t begin en klaarmaak. Die broek-lewe was t\xE9 ongerieflik. Van vandag af dra ek 'n rok. Dalk nog nie fluweel nie. Maar fuck it, dis blomprint en mens kan asemhaal op jou eie terme! ",
    date: "2019-09-05T06:49:06+02:00",
    handle: ""
  },
  {
    id: "5e6617f55ee429768df2bffc",
    title: "Bedankingsbrief ",
    bodyText: "Ek lees jou skrywe op DNJ\nEn ek wens ek het jou geken\nWat skryf van bedankingsbriewe\nAan mense uit jou lewe laat gaan\nEn dit fassineer my oneindig\nMy bedankingsbrief aan jou\nTe diep om te verstaan\nBedank ek jou nou werklik\nOf laat ek jou nou maar net gaan...\nEn ek soek eindeloos na woorde\nOm my bedankingsbrief mee te vul\nIs dit net dankie\nOf laat ek jou nou gaan?\nEn ek worstel in my gedagtes\nEn kan nie verstaan\nWanneer het wilvreemde mense\nDan jou plek uitgestoot in jou eie nuwe baan\nEn die  die horison van alleenheid\nKom my troos en vul my wese\nUit vreemde hande...my enigste troos\n\n\n\n",
    date: "2019-06-23T00:29:31+02:00",
    handle: "aud6362"
  },
  {
    id: "5e6617f55ee429768df2bffd",
    title: "Kassiere",
    bodyText: "Wanneer laas het jy iemand- 'n kind- ontmoet en instinktief geweet: jy, meisiekind, j\xFD gaan eendag by die munisipaliteit werk. ",
    date: "2019-07-27T20:46:39+02:00",
    handle: ""
  },
  {
    id: "5e6617f75ee429768df2c003",
    title: "Checkout",
    bodyText: "Haat/love jy dit nie wanneer iemand jou neurotiese constructions met hulle logika/vriendelike eerlikheid shatter nie? \n\nBly. ",
    date: "2019-11-05T01:37:36+02:00",
    handle: ""
  },
  {
    id: "5e6617f85ee429768df2c008",
    title: "Jy is Bob en ek is Joan ",
    bodyText: "tyd is \u2018n mensgemaakte ding maar dit beheer en meet steeds hoe ons leefparty sal daaraan vasklouen ander is weer nie gepla nie. waar bevind jy jouself op daardie skaal?ek wissel tussen gesprekke wat ons gehad het en nog moet h\xEA... of nooit. maak dit my \u2018n \u201Ctime-traveller\u201D?ek gaan terug na \u2018n sekere aand in septemberek het bevind dat mens \u2018n hele gesprek met net jou o\xEB kan h\xEA en daardie gevoel bly by jou so dat dit presies \u2018n jaar later soos \u2018n splinter aan jou vlees klou\nek krap dieper en sukkel meer en meer om ontslae te raak daarvan\n\n(blatante eerlikheid sal my neerval wees maar ek wou gehad het dat jy moet weet dat elke gesprek met ons o\xEB, elke grap en liefde wat ons gemaak het - nooit weggegooi was nie. jy weet dit klaar maar nou is dit op skrif. )die tyd het nader gekom vir jou om te gaanen my hart was in stukke. een stuk was by m\xF4re waar ek seker was jy sou van my vergeet. die ander nog by gister, besig om na jou te staar  met die beseffing dat hierdie dorp net \u2018n dansvloer vol mense is wat nie weet wie hulle is nie (elkeen ewe van ritme af) en in die teenwoordige tyd het ek besef ek moes jou groetmet die hoop dat ons paaie weer sou kruis. \ndis als \u2018n kwessie van wanneer.\n\ntyd is mensgemaak. paaie ook. en splinters is die produk van roekeloos speel.  \n\nsal ons meer versigtig wees en hierdie in ons eie hande kan sit? \n\n",
    date: "2020-03-01T15:02:16+02:00",
    handle: ""
  },
  {
    id: "5e6617fa5ee429768df2c00d",
    title: "Magteloos",
    bodyText: `Eskom fok weer rond vanaand die donderse generatordreun soos 'n ou manwat hoop op 'n jong ereksie'n pastoor het homself gehanglaat twee kinders en sy vrou agter"dit was die Here se wil" s\xF3 sal die dorp en die gemeente s\xEA maar hy was diep in die skuld diep in ontkenningoor sy aangetrokkenheid tot dieselfde geslag n\xF3g 'n kraglose gekasde is die donker in`,
    date: "2020-01-07T20:15:51+02:00",
    handle: ""
  },
  {
    id: "5e6617fa5ee429768df2c00e",
    title: "Tjomzone? ",
    bodyText: "Is tjomzone die Afrikaans vir friend zone? ",
    date: "2019-07-28T23:11:43+02:00",
    handle: ""
  },
  {
    id: "5e78e0a15670b500173f8226",
    title: "lunchbox",
    bodyText: "twee mense sit langs mekaar\nin 'n lunchbox met 'n lid\nwat nie wil oop nie. \ndie vrugteskyfies wat netjies\naan die een kant\nafgesonder\nis, is reeds deur die hitte vergis\nen die reuk styg desperaat na die \nplafon soos brooddeeg\nwat pas geknie is. \ntwee mense sit langs mekaar\nin 'n lunchbox met 'n lid\nwat nie wil oop nie\nnetjies\nkompak\nnes die toebies wat Ma\naltyd snoesig vir jou ingepak het\nmaar\nhier is geen botter meer te smeer nie\nnet oorblywende korsies wat\nvanmiddag skelm in die asblik\ngaan beland.",
    date: "2020-03-23T16:15:29.684Z",
    handle: "@ilzedup94"
  },
  {
    id: "5e921e07363bb60017367e82",
    title: "Insomnia is n p##s",
    bodyText: "Jy snork saggies langs my\nNa een glas teveel\nOns is nie gewoond aan drink nie.\nMaar alkohol maak anders met my.\nDit laat my dink\nDit laat my voel\nDit hou my wakker\nSo ek rook eerder.\nDis inelkgeval 420 heel maand lank.\n\nDalk sal ek eendag gesond word.\nDalk vrek ons almal van COVID19.\nJy snork saggies langs my.\nEn ek weet als is okay. ",
    date: "2020-04-11T19:44:07.144Z",
    handle: ""
  },
  {
    id: "5e9cbab0f8872c00170f964a",
    title: "For Survival",
    bodyText: `
Daar is oomblikke waarby woorde nie kan bykom nie. Wanneer die hart n\xE9t kan bars in brabbeltaal van lekkerte. Die Drakensberg se koue pieke op 'n mistige Kersdag. Skadu-oomblikke op die k\xF4bbels in 'n antieke steeg, die bottergeel middag op St Petersplein. Daai salmpienk sonsak op die kaai van Venisi\xEB en die warm-warm middag op 'n fucked up trapfiets in absolute alleenheid aan die verkeerde kant van die pad. De Rust in Desember. Glentana se "tea room" sonsak kort voor 'n troue en die backseat wat teen 120km/h 'n change room word toe ons besef jy't die seremonietyd misgelees terwyl die laaste joint nog afwear. Die skildery by Platform 62 in Ashton van 'n man in solitude; onder die koeltebome plesierig leunend in sy stoel met toe o\xEB. De Akker se donkerhout panelling, warm lig en slegte whiskey specials terwyl ek luister na wat nie ges\xEA word nie. Hobie Beach se pier op 'n bedonnerdegrys middag met haar flymskerp winterwind op jou rooi wange. Die oggend toe ons wakkerword bokant die wolke en die weird oom Sam into die geel vir die Langkloof bulder om op te staan en die aand toe die gym-rat my v\xE1t na 'n bottel wyn in daardie klein rooi kroegie. 

Al die woorde skiet te kort. Tot hier toe. 

My hart loop oor. My hart loop oor. My hart loop _Uiteindelik_ weer fokken oor.
`,
    date: "2020-04-19T20:55:12.546Z",
    handle: ""
  },
  {
    id: "5ea9efc8bf68a00017f3d784",
    title: "kunswerk",
    bodyText: "Die w\xEAreld is lankal reeds opgeskryf in prentjies en patrone, opgebreek in grense en grafieke.\nRoer tog my bloed met 'n subliminale suggestie en jou wit streep donker lig. ",
    date: "2020-04-29T21:21:12.236Z",
    handle: "@evertesterhuizen"
  },
  {
    id: "5eb9bf56a57f590017b3e41b",
    title: "Prys ",
    bodyText: "Prys die geknoopte lip wat die sagte bene verdedig. \nOmdat jou ma 'n seeperd was. \nEn om aan haar te dink as maer \nis om al die ys leeg te maak\nuit die tee glase;\nom die sop te giet\ndeur jou hande.\nPrys tafeldoeke; swaai-rugstoele; die plastiekvoue wat kaas beskerm\nvan sny \nsny\nsny",
    date: "2020-05-11T21:10:46.996Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ec0f37d156a9200176c4078",
    title: "Moment ",
    bodyText: "\n\nTrying to forget the awful sadness \ndreaming of men in Bloemfontein \nwhere it gets cold\ncolder\nyet I drink antifreeze \nfor a few seconds of warmth\n\nThen I die.",
    date: "2020-05-17T08:19:09.449Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ef8fc2b3c9b3600171147a9",
    title: "An unattended death",
    bodyText: "Ek weet nie, \nkleure? \nIs dit helder? \nDaai oomblik. \n\nDink mens aan hoe dit voel om te vlieg? Dink mens aan die kere waarvoor mens nog nie dankie ges\xEA het nie? Dink jy aan die eerste keer wat jy pomelo geproe het? \n\nNa daardie asem uit is, leef mens in monochroom of rainbow? ",
    date: "2020-06-28T20:23:07.665Z",
    handle: ""
  },
  {
    id: "5efe3b59df8c0f0017929a65",
    title: "accomplice",
    bodyText: "the dog growls\nand i bark. ",
    date: "2020-07-02T19:54:01.494Z",
    handle: "@ilzedup94"
  },
  {
    id: "5f08f0a771908f0017ca90f5",
    title: "H.K. ",
    bodyText: "ek het jou afgemaak, terwyl ek weet jy haat en lees rejection op dieselfde manier as ek, as minderwaardig. en ek is so... so ongelooflik spyt... en jammer vir jou trane. \n\n\nJammer. ",
    date: "2020-07-10T22:50:15.150Z",
    handle: ""
  },
  {
    id: "5f0c9f2fea052300179fe231",
    title: "\u2764\uFE0F ",
    bodyText: '"Hy vorder goed en ons is trots op hom"\n',
    date: "2020-07-13T17:51:43.905Z",
    handle: ""
  },
  {
    id: "5f1f2fe5d6ab4600173d9cc4",
    title: "WhatsApp - 2 messages from 2 chats ",
    bodyText: "thanks for listening and getting back to to me. sorry, been struggling to open up, lately (like 20 years). I think I like, know that at this point there are things I can control and things I can't, and I need to be able to let go. But I really just need some to acknowledge also that it hurts. I'm hurting. ",
    date: "2020-07-27T19:50:17.264Z",
    handle: ""
  },
  {
    id: "5f2a93aff1127e0017b28e2d",
    title: "Die begin van 'n storiesom. ",
    bodyText: "Daar is 'n Dawn Wing pakkie-man op my voorstoep. Ek sit 10 myl weg. Hoe stadig is Durbanville verkeer? \n\n",
    date: "2020-08-05T11:10:39.303Z",
    handle: ""
  },
  {
    id: "5f2cf68a74d21600178f442b",
    title: "\u25CB\u2606\u25CF",
    bodyText: "Dis dieselfde... oor en oor. ",
    date: "2020-08-07T06:36:58.234Z",
    handle: ""
  },
  {
    id: "5f9cfbfd5484d400171eed09",
    title: "Wegbreek",
    bodyText: "Al die drome; buitelyne van groot en sterk en vry en slim wees. En trou en man wees en pa wees.\xA0 \n\nMaar ek dink aan ander wyl jy langs my op sagte linne l\xEA. Met jou gekartelde lippe effens gedruk; bietjie oop, droog. \n\nWyd oopgesper bo my glip blou wesens in skakeurings wellus en spiere. Herinneringe aan skelmswem-en-loer. \n\nEn dan rol jy teen my vas- liggies- 'n deken teen my gedagtes: jou fyn profiel ge-ets teen die stad se gloed agter jou. \n\nKan 'n bom afgaan sonder ontploffing? ",
    date: "2020-10-31T05:54:05.254Z",
    handle: ""
  },
  {
    id: "5fa5baf00c28d300179c7e88",
    title: "Election poetry",
    bodyText: "Biden 264 Trump 214 DNJ 1678 poems since 2018",
    date: "2020-11-06T21:06:56.969Z",
    handle: "mabethc"
  },
  {
    id: "5fae5aa3491a2d0017f445bb",
    title: ".",
    bodyText: "Jenny Im in trouble.\n\n",
    date: "2020-11-13T10:06:27.489Z",
    handle: ""
  },
  {
    id: "5faed015491a2d0017f445bc",
    title: "Skerf",
    bodyText: "'n vaas van my ouma se fyn, mooi, porcelain,\n  sit in die glaskaserfstuk ding in die voorportaal\nis van kop tot toon gekraak\nKlein, fyn, stukkies,,\nMooi en net net aanmekaar gehou, in stand gehou deur ander se omgee, ander se instandhouding,\nWat vas plak, vas plak,\nEn aanmekaar w\xEDl\nDit wat jare gelede besluit het om neer te smyt in skerwe ",
    date: "2020-11-13T18:27:33.440Z",
    handle: "@cx_lyb"
  },
  {
    id: "5fb14f336f3fd50017adc8dc",
    title: "..",
    bodyText: "Jenny, me too.  ",
    date: "2020-11-15T15:54:27.982Z",
    handle: ""
  },
  {
    id: "5fb17f416f3fd50017adc8dd",
    title: "the modern poet's guide to writing",
    bodyText: "blykbaar is jy diep\nas jy Bukowski quote \nen goedkoop whisky\ndrink",
    date: "2020-11-15T19:19:29.919Z",
    handle: "@ilzedup94"
  },
  {
    id: "5fb3c4adefa839001797fa8e",
    title: "Asem In ",
    bodyText: "In die [.    . ]  was daar die waters, en die gees het oor die waters geswerf, maar dit was nie goed nie.\nDit was nie goed nie, want die duisternis was bo die waters en onder die waters. En die gees was so verdwaal en verwaai en verlore dat die gees soos wasem gevoel het.\nEn die waters was woelig en die gees was onrustig.\nDit is die groot verrukende asem IN, voor die keelskoonmaak, voor die vibrasie van die stem bande en die krag van die diafragma. Dit is die stilte voor die Woord.\n\n[-- die begin --- ____ --- Woord. ] \nDie onrustige waters woel hulself om die oseane te vorm. Die gees bly swerf.\n",
    date: "2020-11-17T12:40:13.604Z",
    handle: ""
  },
  {
    id: "5fb7f30b13acd500172e8257",
    title: "Hy kan nooit meer saam ons groot woord nie. ",
    bodyText: `In 'n cum books gewerk, en wou 'n pastoor wees, en jy was altyd so bl\xFD om mens te sien.
Nie die eerste nie, maar seker die twee of derde gedagte wat ek gehad het, was "maar hoekom het die Here jou nie gehelp nie?"
En toe dink ek bietjie, en toe onthou ek hoe ek altyd die grootste fokken draaie om daai cum books geloop het, want ek was nie lus om met jou te gesels nie.
En so bietjie daarna het die onregverdig gevoel om net vir die Here kwaad te wees", want die gedagte wat my so bietjie rukkie daarna vervolg het, was "maar hoekom het ek altyd sulke draaie om geloop?" `,
    date: "2020-11-20T16:47:07.247Z",
    handle: ""
  },
  {
    id: "5fc0582cd338e8001704be38",
    title: "eerste ding in die vlees",
    bodyText: "03h30\n\nVandag is dit public shaming of iets wat werk. ",
    date: "2020-11-27T01:36:44.083Z",
    handle: ""
  },
  {
    id: "5fc29393cdb8df00179ebb5f",
    title: "Swem",
    bodyText: "Dis wanneer ek telling verloor van hoeveel keer jy my al laat lag het\n\nWanneer die bekende, onverwagse gemak gevoel rondom jou makliker raak en reg voel\n\nDis wanneer ek besef my voete raak nie meer aan die bodem nie, wanneer ek besef my hart is te diep in. ",
    date: "2020-11-28T18:14:43.890Z",
    handle: ""
  },
  {
    id: "5fc3c6ef04c6f2001715340d",
    title: "Lord bless me",
    bodyText: "\nIemand wat saam met my fan girl oor Taylor Swift, \niemand wat oral, maar ook n\xEArens is. \nEk soek iemand met grace en inner peace, \nwat weet dat ek roomys bo drank verkies. \nIemand wat weet wat \u2018n boek vir jou kan bied,\n\u2018n rusplek, \u2018n hawe, my kriptoniet. \nIemand wat lag oor hierdie stukkie skrywe, \nmaar dit \xEArens b\xEAre, want hy weet dit is syne. \n\nAl klink dit soos iets deur \u2018n wannabe Insta-poet,\nen al moes ek dit eintlik vir myself gehou het,\ngooi ek nou hierdie gedig in die void,\nen as iemand dit like, is ek overjoyed.\n\nGoed soos di\xE9 is bowerklik, God-gestuur,\nmiskien moet ek Hom vanaand vra vir \u2018n bier, \nmaar flip ek sukkel om vir so iets te bid,\nwant wie s\xEA dis wat God vir my in gedagte het?",
    date: "2020-11-29T16:07:50.514Z",
    handle: "ena_stegmann"
  },
  {
    id: "5fc55cf04eacd00017e5dc86",
    title: "Lord, know me. ",
    bodyText: "Jirre, jy ken my fucked up sense of pride. My diepste ego gratification. Vadergot jy ken my innerderms en haat vir elke keer wat ek tekort skiet. \n\nJy ken my behoefte vir om ook iets te wees. Daardie knaende herinnering dat ek niks anders as 'n Kraaifontein-kind of Amalinda washout is met pretend skills nie (wat besig is om al dunner te raak). \n\nJirregod. Jy ken my ongeloof in jou as sky daddy met 'n grys baard. Jy weet ek dink nie aan jou as iets waarvoor mens poetry skryf nie, maar ek weet ook nie wat anders nie. \n\nAanvaarding dalk? Gee my hierdie keer aanvaarding wat langer sal hou, ja. Sodat ek vir ander ook dit kan aangee. Jy weet ek's maar kakkerig met om net gewoon te wees. \n\nVerskoon my asseblief, \nwant jy ken my. \nAmen. \n\n\n",
    date: "2020-11-30T20:58:24.283Z",
    handle: ""
  },
  {
    id: "5fcbbdd572fe21001729b728",
    title: "Glaskas",
    bodyText: "Oh god, ek het myself verloor, ek het myself getoor.",
    date: "2020-12-05T17:05:25.898Z",
    handle: ""
  },
  {
    id: "5fcd3e278d855100172217c7",
    title: "Wonderlik",
    bodyText: "Ek wonder of jy nog te besig is met jou studies - 'n Meesters of nog slimmer.\n\nOf jy pas uit 'n verhouding is, of nou al lank sonder die date nights en dinner for two konsepte bestaan.\n\nOf jy te vasgevang is in jou werk en ook maar glo (en miskien hoop) dat soulmates mekaar net sal vind.\n\nEk wonder of jou hardkoppigheid al die rede was dat ons mekaar gemis het - of miskien was dit myne.\n\nOf miskien kruip jy weg vir Covid, soos 'n pliggie. Of miskien omdat jy nog blessed is met 2 oumas en 2 oupas. Omdat jy daai tipe hart het.\n\nEk wonder wanneer ons paaie gaan kruis. En of ons gaan weet dat ons soektog suskesvol was. Dat ons nou maar uiteindelik kan tuis voel en net wees.\n\nEk wonder maar net",
    date: "2020-12-06T20:25:11.994Z",
    handle: ""
  },
  {
    id: "5fd2d9d0f8facc00175f58f6",
    title: "misalignment",
    bodyText: "power + influence: stages of development. is dit erikson se model wat stukkend is? ",
    date: "2020-12-11T02:30:40.738Z",
    handle: ""
  },
  {
    id: "5fdbf5922b0c1a00170a6a70",
    title: "Skuld",
    bodyText: "Die A-pillar van my motor is die presiese wydte van 'n bedelaar wat stilstaan by 'n robot. Met 'n A4 size plakkaat. \n\nEnigiets groter en dis tickets. ",
    date: "2020-12-18T00:19:30.827Z",
    handle: ""
  },
  {
    id: "5fe8ccd0ea56960017bed83d",
    title: "somer, durban 2020",
    bodyText: "ruik jy ook \ndie warmte op die punt\nvan jou perfekte neus? \ndie son het daarop nesgemaak\nen speel tussen jou wimpers:\ngoue vo\xEBltjies lomerig in die \nlaatmiddag hitte. \n\nvoel jy ook die wind op \ndie rondings van jou reeds rooi\nwange? \ndie briesie het daar kom huis bou\nen streel oor jou sproete: \nbruin soentjies geanker in die\nsomerlug. \n\nek wens ek kon die strale van \njou vang en in die winter weer\nvrylaat. ",
    date: "2020-12-27T18:05:04.861Z",
    handle: "@ilzedup94"
  },
  {
    id: "5feb86aaf35c8700174db28a",
    title: "Eks",
    bodyText: "Vandag is jy weer oral.",
    date: "2020-12-29T19:42:34.642Z",
    handle: ""
  },
  {
    id: "5fec9d7df35c8700174db28b",
    title: "lesse van die baar moeder (ek weet dis een woord)",
    bodyText: 'my ma het vir my ges\xEA\nmy eerste woord was "nee"\nen hoe ek dit ges\xEA het nog\nvoor die vraag gevra was: \nnee\nnet nee\nsonder rede, sommer so sommerso\nen tog\nal is dit die laaste woord\nis dit steeds nie genoeg nie',
    date: "2020-12-30T15:32:13.309Z",
    handle: "@ilzedup94"
  },
  {
    id: "5fecf4a48e589d0017ad1383",
    title: "Ge-heal",
    bodyText: "Vandat ek my maandelijkse pille (voorskrifies, by die Checkers Sentrum het julle dit van my) relegies inneem om verbeterrrrring. \nTe brrrrj nnngnggg\nHet ek... my kreatiwiteit verloop. \nMens sukkel om poets te wees as lewe gesond is. O nee. \nEk verkies maybe dan ok nie om meer te teken, skryf voel diep nie. \nAkademiese,ja. \n\nAnnieniem. ",
    date: "2020-12-30T21:44:04.115Z",
    handle: "@stefanyseymore"
  },
  {
    id: "5ff091563030460017ca459a",
    title: "Modern romance",
    bodyText: '"Ek mis die Kaap." \n"Dink jy die Kaap voel dieselfde?"',
    date: "2021-01-02T15:29:26.174Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ff369f764171a00175b887a",
    title: "swemles vir een",
    bodyText: "ek is gewigloos\nen onder.\ndie son sak.\ndis later.\nek is die meerminlike\ngodin van die onderwater,\nmyself gekruisig en gesink\nsodat ek kan ronddryf buite proporsie\nwant hier kan ek s\xEA dat ek meer\nbehoort as waar mense op \ntwee voete loop\nen ek tussen hulle verdrink.\nmaar my suurstof raak min, \nmy kiewe verkrimp.\nhou my hieronder, bepleit ek julle.\nlaat my ore net suis\nen my o\xEB sonder pretensie kan nat bly. \n",
    date: "2021-01-04T19:18:15.745Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ff4b79d1738f30017b1d88b",
    title: "Borsbeen ",
    bodyText: "\n\nSmart is \xF1 vuis met\n\xF1 promise om seer \nte maak. Gee dit net\n\n'n duim tussen\nkneukel en borsbeen.\nEn poes als ineen. ",
    date: "2021-01-05T19:01:49.568Z",
    handle: "sheridanwalter "
  },
  {
    id: "5ff4f40ef186ea0017bb9876",
    title: "Landscape ",
    bodyText: "Hy't my hannewerk genoeg gelaaik... om geld daarvoor te betaal; nou's hy dood. Twee weke later. \n\nFok kit. ",
    date: "2021-01-05T23:19:42.927Z",
    handle: ""
  },
  {
    id: "5ff7a4e5a3b77d00175f7e59",
    title: "Existential Wishlist",
    bodyText: "I want to be wiser than my age allows,\nto shake the vision of an insecure child.\nWe answer our questions with juvenile ease,\nnaively treating symptoms, never the disease.\n\nI want to be free from this haunting mind,\nthat decorates my past with shameful lies.\nLiving with fear of what future I hold,\nstuck in analysis whilst growing old.\n\nI want to find purpose that I can really own,\nabandon these dreams that were so\ncheaply sold.\nOriginal thought seem to now be extinct,\nonly plagiarized existence, promoted as unique.\n\nI want to control my twitching perception,\nstop the experience of \u201Cnow\u201D  delusion.\nAlways a spectator of this flowing stream,\nconstantly awake in this fucking dream.\n\nI want to escape life as a responsibility,\nexpectations created, never first consulting me.\nWhy would you subscribe to this twisted game,\nknowing that it ends in regretting you played?\n\nI want to be free from material constraints,\nexplore the limits of a dimensionless plane.\nWander beyond the parameters of logical thought,\nand find myself delivered, to the answers I sought.",
    date: "2021-03-07T07:44:43.383Z",
    handle: "die.harlekyn"
  },
  {
    id: "5ff8473e9c7c320017d2e794",
    title: "Sterreval",
    bodyText: "My lief, sien my in die ruim,\nbinne die nag en sy diep terrein.\nEk wag om jou te onthaal,\nmet my sterrelig karnaval.\n\nEk het die melkweg omskep as baan,\nwaar ons kan langsamerhand kan dans.\nDie koepel is skitterglans versier,\nsou jy die firmament wou in tuur.\n\nEk het gegiet, vir jou, \u2018n sterreval.\nkomete geflans en as kandelare uitgestal\nHemellede vir die nova toneel berei -\nligbundels ge\xEBts met kleure van hul kwyn.\n\nEk het konstellasies herrangskik -\nGelap, ingeweef, en vasgestik,\nvir jou o\xEBnskou, vir jou om in te baljaar.\nOrion is gestuur, maar waar kom hy jou haal?",
    date: "2021-01-08T11:52:40.606Z",
    handle: "die.harlekyn"
  },
  {
    id: "5ff8cb429c7c320017d2e795",
    title: "woof woof",
    bodyText: "lojaal soos 'n hond\nword geskop soos 'n hond. ",
    date: "2021-01-08T21:14:42.402Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ffd7a74223a6f00172331d4",
    title: "haiku vir ons",
    bodyText: "kussingsag fluweel\nvou ek mank in jou arms in\nrykdom van die vlees",
    date: "2021-01-12T10:31:16.473Z",
    handle: "@ilzedup94"
  },
  {
    id: "5ffe1263223a6f00172331d5",
    title: "in my naaktheid",
    bodyText: "Ons is net heruitsendings van ons ouers. ",
    date: "2021-01-12T21:19:31.617Z",
    handle: ""
  },
  {
    id: "60008f9d0b0bbf0017915941",
    title: "son",
    bodyText: "ek wil saam met jou\ndie son jaag en strale sluk, \nmy vuurbeminde",
    date: "2021-01-14T18:38:21.438Z",
    handle: "@ilzedup94"
  },
  {
    id: "600799134e5b3900178e0079",
    title: "oorgang",
    bodyText: "die drumpel tussen 'maak 'n einde aan jou maltrap lewe' en 'optimisme van een dag se sterk roetine game' is al deurgetrap. \n\nwelkom 2021. s\xEA wat jy wil s\xEA. ",
    date: "2021-01-20T02:44:35.028Z",
    handle: "@stoepgallery"
  },
  {
    id: "600843731deba20017665c43",
    title: "\u91D1\u7E55\u3044 (kintsukuroi)",
    bodyText: "to repair with gold\nis to romanticize the\nbroken pieces, too.",
    date: "2021-01-20T14:51:31.644Z",
    handle: "@ilzedup94"
  },
  {
    id: "6011db766e38e500175f56ba",
    title: "  ",
    bodyText: "  ",
    date: "2021-01-27T21:30:30.118Z",
    handle: ""
  },
  {
    id: "60181d0cbc6dd600170ffede",
    title: "porselein ",
    bodyText: "ligbruin tierlantyn\nsit jy op my rak en skyn\npopmooi en ragfyn. ",
    date: "2021-02-01T15:23:56.938Z",
    handle: "@ilzedup94"
  },
  {
    id: "601c0aa6d792570017016a26",
    title: "Mamma, ek wil nie soos die res wees nie",
    bodyText: "(met apologie aan Marlise Joubert)\n\nkinders soos mossies\nhande altyd afgekapte vlerke\nelke lyfie 'n huilende gesang\npik-pik rond op die \nwaterspie\xEBl van 'n doellose gang \n\ntraag\nstort die druppels klank oor haar neer\nwaar sy die reuk van klam benoudheid\nuit haar grootmenslewe ruik; \nwaar sy daagliks mor en protesteer\nwaarom moet als nou gebeur\nwaarom voel ek buite beheer\nwaarom moet ek ewig alleen stoei\nteen die gevoel om te presteer. \n\nsy wens die dae weer oor - \nmet elke tree wroeg sy \nteen dit wat sy reeds weet: \n\nniks kan ons beskerm\nteen die onheil van ons \nambisie nie. ",
    date: "2021-02-04T14:54:30.244Z",
    handle: "@ilzedup94"
  },
  {
    id: "601e5c607fbe450017050690",
    title: "Tina Erasure",
    bodyText: "\n\n drive\n arrival\nthe void \npurpose\nthe nose\nsting\nthe euphoria\nhours\n desire\n anticipation\nthe bill\nburn\nthe laughter\nshower\n\nexchange\nthe darkness\nthe limbs\n bed\n\nthe guilt",
    date: "2021-02-06T09:07:44.281Z",
    handle: ""
  },
  {
    id: "601e5e997fbe450017050692",
    title: "Uitsteek",
    bodyText: "wat uitsteek, die skil van 'n geel\nwaatlemoen \u2014 op \u2019n sonnige dag, heilig.\n\n\nSheridan Walter",
    date: "2021-02-06T09:17:13.010Z",
    handle: ""
  },
  {
    id: "601e8a717fbe450017050693",
    title: "van vlieg en fee",
    bodyText: "hou vas aan my vlegsel\nbind jou been met 'n lelie stingel om my enkel\nop jou merke, gereed\ngister is by gister vergeet\nons klim op die dwergie se rug\nen swem stroomop tot onder die halfmaan brug\nwaar feetjies ons vlerke losbind\nom te vlieg my kind,\nvoor die 6horing draak ons verslind.",
    date: "2021-02-06T12:24:17.062Z",
    handle: "13.lynette"
  },
  {
    id: "601f2204329eb50017cfea50",
    title: "Sneeu",
    bodyText: "Dis koud en ysig still soos die stad sy bruids rok aan pas.\n",
    date: "2021-02-06T23:11:00.887Z",
    handle: "ahwelgemoed"
  },
  {
    id: "6021bf2f58bb2600171a39f5",
    title: "Western Cape Health ",
    bodyText: "Mark\nBhavna \nJoey\nDouglas \n\n\nStrategic coalitions...\nThe greatest of its inconsistencies\nThis difficult, tedious, painful enterprise.\n",
    date: "2021-02-08T22:46:07.245Z",
    handle: ""
  },
  {
    id: "60236736af175c0017af86eb",
    title: "adulting 2021",
    bodyText: "klim middernag in jou\nkar sonder om die ligte \naan te skakel en gaan ry \n'n ent op 'n verlate stuk pad. \nal raak jou o\xEB aan die donker\ngewoond, sal die padtekens \nslegs despotiese versierings\nwees wat jou blindelings koggel. \ndie dou sal te vroeg val en die \noggend te laat kom en miskien\naan die anderkant van m\xF4re \nsien jy nog 'n kar sonder kopligte\nvir wie jy kan waai. ",
    date: "2021-02-10T04:55:18.835Z",
    handle: "@ilzedup94"
  },
  {
    id: "602addb99a26c400179de8c7",
    title: "njammies",
    bodyText: "wanneerlaas het jou o\xEB agtertoe gekyk van die lekkerkry? ",
    date: "2021-02-15T20:46:49.281Z",
    handle: ""
  },
  {
    id: "602c0714cc0b4b001716419d",
    title: "gister se tropiese klimaat",
    bodyText: "re\xEBn. verdrink. gesink. \nverdwaal. vergiet. vergete. \nek. die. verlede. ",
    date: "2021-02-16T17:55:32.139Z",
    handle: "@ilzedup94"
  },
  {
    id: "602c5bdfcc0b4b001716419e",
    title: "tamaties met stroop ",
    bodyText: "ek weet uiteindelik waaroor dit gaan: \ndie juxtaposition van die jirre se meesleurende landskap-dioramas set against the techological prowess van die spelers in die scene. Westworld revival? \n\nons sit in 'n stryd. maar dit kan ook mooi wees. ",
    date: "2021-02-16T23:57:19.740Z",
    handle: "@stoepgallery"
  },
  {
    id: "603aac814086ac0017ece4d0",
    title: "kunste(naar)",
    bodyText: "As ek na ander mense se ontwerpe kyk betwyfel ek myself \nen als wat ek gemaak het.\n\nDit beteken niks vir enige iemand so hoekom nog omgee en probeer. \nDis nie die energie werd. Dit maak net seer. \n\nKan netsowel die website afhaal, die social media accounts delete, \ndit weg stuur. Gee die koevert. \n\n'n Moerse mors van tyd en al wat wag is 'n le\xEB, dro\xEB put. Vlugtige veroudering. \n'n Tonnel sonder 'n lig. Dis 'n one sided verhouding. \n\nWat is die alternatief? Verdwyn van die radar af. Soek 'n ander kraal. \nLos net fokken design. Dis doelloos en banaal. \n\nDaar kan net vir soveel kunstenaars 'n plek in die son wees. \nEk voel soos die fokkop en dink nou net aan als wat kon wees. \n\nAls wat ek gemaak het van prag tot praal, is nou net gemors \nen ek is toe nog altyd die hanswors. \n\nDis jare later en hier sit ek alleen. Vir wat. Vir wie. \nGlo niemand wil om my wees, Nie eens ek nie",
    date: "2021-02-28T17:16:10.491Z",
    handle: ""
  },
  {
    id: "603bea45f36cc50017760cbf",
    title: "Vonnegut. ",
    bodyText: "\nek wens ek kon nog praat oor die mooi tussen die opgefok, soos Kurt.\n Soos ek altyd kon toe ek jonger was.  iets hierbinne het uitgedoof, en sal skynbaar n\xF3\xF3it weer wees soos dit was nie. Iets kan nie meer versre\xEBls maak nie; die re\xEBls is dood. \nDowwer en dowwer, verder en verder is die dae toe alles beauriful was, en nothing hurt. \n\n\n\n",
    date: "2021-02-28T19:08:53.493Z",
    handle: "@cx_lyb"
  },
  {
    id: "603d589718f9a200179c2e62",
    title: "Liminal (o, here!) ",
    bodyText: "Die mooi was na\xEFef. \n\nDis die phoenix, my mens. Dis die ashes, die fire bird met die af-vlerk wat beauriful is, marigolds wat blom deur die skedelrige versre\xEBls. \n\nGee nog 'n jaar van g\xF3\xE9d muf; en eendag besef jy dis 'n rebirth. 'n Kleurspel: soos Lucy en haar diamonds. ",
    date: "2021-03-01T21:11:51.667Z",
    handle: "@stoepgallery"
  },
  {
    id: "6047ca5639c25a0017427bc6",
    title: "drie duiwe sit en kyk na my",
    bodyText: "drie duiwe sit en kyk na my\nsoos wat ek by die seunsskool\nse swembad induik \nso sonder seremonie\nen kyk na my arms, fladderende vlerke\nen kyk na my voete, vinniger, vinniger\nen kruip weg vir my, want ek is 'n mens. \n\ndrie aasvo\xEBls sit en kyk na my \nsoos wat ek by die seunsskool \nse swembad induik\nso sonder seremonie\nen kyk hoe ek na elke derde slag\nopkom vir asem\nen kyk hoe my moe\xEB lyf \nom ruste smeek\nen koggel my, want ek is 'n mens.\n",
    date: "2021-03-09T19:19:50.466Z",
    handle: "@ilzedup94"
  },
  {
    id: "604ac6f146f53e00171e8f6f",
    title: "3:28",
    bodyText: "om 3:28 het ek wakker geword\nomdat dit te donker was\ndie nag het my versmoor:\n'n volwasse kotmoord deur \n'n selfsugtige ma\nwant, sien, die donker dink net aan\nhaarself\nsy fluister in jou oor tot jy slaap\nsodra jy daar is, lag sy jou weer \nwakker in 'n siek speletjie\nwaar jy alles gaan onthou \nwat jy nog ooit verkeerd gedoen het\nalmal wie jy nog ooit gedink het\njy lief gehad het\nalles wat jy nog moet doen sodra\ndie son die horison ontsluit\nen jy kan slegs wen\nas jy 'n halfuur voor jou alarm\nsy eerste skree gee genadiglik weer\nkan insluimer. ",
    date: "2021-03-12T01:42:09.986Z",
    handle: "@ilzedup94"
  },
  {
    id: "604df2f63042dd001706d0e4",
    title: "Kom, oorfone, kom hier. ",
    bodyText: "Dis loadshedding en my woonstel-buurvrou met haar over sensitive clit en loudmouth oorgewig man is besig met 'n Sondagmiddag kakafonie van liefdemaak. \n\n\n",
    date: "2021-03-14T11:26:46.796Z",
    handle: ""
  },
  {
    id: "604e8be93042dd001706d0e5",
    title: "Akkerland",
    bodyText: "(Verskoon die nostalgie: dis Sondagaand.)\n\nEk wil nou, n\xF3\xFA in Verbatim Books in Dorpstraat staan met die w\xEAreld se moontlikhede, oop, voor my, soos vriende wat my innooi in hulle wydste ervarings. Ek wil die son op die bankie in die venster sien skyn, die pof kussing agter my rug regtrek en hoor hoe die riempies kraak as ek gaan sit. Ek wil die vriendelike vrou met die interessante stories vra of sy d\xE1\xE1i boek oor Kaapse argitektuur het, net om 'n boek oor kleure te koop en onder die akkerboom uit te stap. Ek wil d\xE1\xE1rdie reuk kry. Daardie goddelike reuk van boeke, blomme op 'n tafel en houtvloer-politoer. Die gevoel van groen, helder blou, wit en re\xEBn. Die Here weet, daardie plek was waar ek hom kon ontmoet. \n\nMaar dis ook nou verby. Soos my 20's. ",
    date: "2021-03-14T22:19:21.754Z",
    handle: "@stoepgallery"
  },
  {
    id: "605351b445d66300175210e2",
    title: "lang dag op kantoor",
    bodyText: "ek wonder of h.a fagan\nooit gedink het dat ek het \n'n huisie by die see eendag\nvir tweedetaal matriekleerlinge\nvoorgeskryf sou word\nen dat die departement van \nonderwys sou hamer op die betekenis \nvan die verkleinwoord in die titel\nasof dit die belangrikste element\nter sprake is.\n\ndis nag.",
    date: "2021-03-18T13:12:20.732Z",
    handle: "@ilzedup94"
  },
  {
    id: "6067721b47b2550017f9173a",
    title: "onblusbaar",
    bodyText: "we didn't start the fire\nweerklink op die radio\ndis saterdagaand laat \xA0\n'n kamer vol kwesbare tienerstudente\nwat in die daglig baklei vir dit wat reg is\nmaar wat nadonker weer\xA0settle\xA0vir alles wat verkeerd is\n\nthey merely exist\xA0in die w\xEAreld se kontras\nbesluitloos en onderdruk\nuitgesproke en progressief\nvertrap tog heel\nkonstant geroetineer\niewers 'n tikkie spontaniteit\nmaar niks verander nie\n\nten spyte van vooruitsig\nstry en baklei\ndie mens\nhardkoppig konserwatief\nvrywillig ongeleerd\nalles bly onveranderd\nsoos dit heeltyd was",
    date: "2021-04-02T19:35:55.331Z",
    handle: "@jane.de.wet"
  },
  {
    id: "606b991bc0dc4700177dc504",
    title: "after all",
    bodyText: "Dit voel soos om na 'n olierige aand by die motorhek in te ry: te wag vir die wip-deur om stadig op te lig, my been al hoppend op die pedaal. Stil te hou, uit te spring en die kar oor my skouer te sluit. Fyn treetjies te gee tot by die voordeur- hek met 'n kodeslot gesluit-faaahk- beneuweld te onthou die kode eindig met jou verjaarsdagjaar. Dan die skuiwer dringend- ka-pl\xE1nggg! oop te ruk; my belt in die voorportaal al los- broek nou om knie\xEB, strompelend- hanneviervoet die trap uit- in fast forward- dan om die badkamerdeur oop te pluk, op die matjie te gly, val, gryp, regop, neer en uiteindelik my boude op die ysige wit ring neer te plak: net om voor my te fokus en te sien: dis heeltemal onnodig om nog te probeer gewoond raak aan die koue op my vel. \n\nDis hoe dit voel. Ja, dis presies hoe dit oor jou voel binne-in my pienkte.  ",
    date: "2021-04-05T23:11:23.027Z",
    handle: ""
  },
  {
    id: "606c9ea0c298fc001716668e",
    title: "to make an exit",
    bodyText: "die vrees sluk my net in middagslapie-drome in. om heeltemal, totaal en al van vergeet te word in n irrelevante dorp met n totaal betekenislose bestaan sonder kennisse, geliefdes of identiteit. god. dan is dood beter. ",
    date: "2021-04-06T17:47:12.646Z",
    handle: ""
  },
  {
    id: "606f3ec19406c20017c2189c",
    title: "misconceptions tydens yoga in die kerksaal",
    bodyText: "die een wat die verste strek\nkom eerste in downward dog in; \n\ndie een wat die hardste sing\nkom eerste in die hemel in. ",
    date: "2021-04-08T17:34:57.759Z",
    handle: "@ilzedup94"
  },
  {
    id: "6074c2fc8826fc0017282851",
    title: "'straight' up criminal ",
    bodyText: "En soos die laaste lyn het die laaste fok gekom en gegaan sonder om te weet waarmee ons besig was. \n\nAmper soos die Laaste Maal en daai Judas kont. ",
    date: "2021-04-12T22:00:28.597Z",
    handle: ""
  },
  {
    id: "6085bf8169baba0017e36e80",
    title: "kosmogenese",
    bodyText: "weef maanlig in my\nhare en fluister oerstof\nteen my mond",
    date: "2021-04-25T19:14:09.037Z",
    handle: "@ilzedup94"
  },
  {
    id: "608ad6fa63baf900171d6272",
    title: "Balkon, 5:55. ",
    bodyText: "ek lees poems op 'n app en vergeet hoe my stem klink binne is daar bundels (bundels of hope like the blanket my mum made me) op hope gestapel oor mekaar en onder mekaar\nHulle hou vol en s\xEA en h\xEA die wortels van my wording, van wat ek gaan wees. Ek kyk weg en vermy anners hakkelhakkelhakkel ek van die stage fright want ek weet nie of ek dit ooit kan wees nie\nMy stem raak weg in die skemer ek kan nie onthou hou ek wil praat en oor wat en hoekom.\nWie se goed is di\xE9? ",
    date: "2021-04-29T15:55:38.089Z",
    handle: ""
  },
  {
    id: "608af20963baf900171d6273",
    title: "grappie",
    bodyText: "Bietjie getrek, sit ek 'n kamerwydte van my spie\xEBl af en ek kyk my gesig totdat ek nie meer seker is vir wie ek kyk nie. Ek hou nie meer van my bril nie, dit vermom my gesig. Ek haal my bril af om myself beter te kan sien.\n\nEk sien fokkol. ",
    date: "2021-04-29T17:51:05.110Z",
    handle: ""
  },
  {
    id: "608c6de73330320017a5fb3d",
    title: "soek",
    bodyText: "Fokkit\nEk haat dit\nom sonder jou\ndie slaap te soek",
    date: "2021-04-30T20:51:51.334Z",
    handle: "13.lynette"
  },
  {
    id: "608f1bc2a121ce0017b95af8",
    title: "2021.05.01",
    bodyText: "ek wil n poem of iets skryf. n skit. n toneel. n ding wat daardie god-aweful sondagoggend emergency room besoek vasvang- die stilte tussen almal, blou ligte, die dokter met sy siek-mens glimlag en toonhoogte en die nurse wat haar hand onwillekeurig op my kop kom sit toe sy besef die koolstofmonoksied en waterstofsulfied was nie 'n ongeluk nie.\n\ndie ongemaklike trip met my suster-skielik is stilte al wat ons vir mekaar te s\xEA het- net dit. Sy is nou my oppasser: skerp goed, lang goed, harde goed, sagte goed: pille moet reg gegee word. \n\ntenspyte van die generiese inspirasie-boodskappe... Die einde is op die horison. Ek sien hoe 'exit' al helderder voor volgende Donderdag se deur begin flik. \n\nDie phoenix rise nie die keer nie; hy klop net en laat weet: die aarde kan jou maar sluk, vanaand. Daar is liefde en genade waar jy gaan. Vryheid. ",
    date: "2021-05-02T21:38:10.486Z",
    handle: ""
  },
  {
    id: "60997f615f1c1c0017ab6b68",
    title: "ons kan eintlik nie kla nie",
    bodyText: "in my huis is ek die sirkusleeu\nmak gemaak en mond gesnoer\nsodat mense van buite af na my \ndeur my getemde ouers kan koer: \njulle het haar so mooi geleer! \nwys ons, toe, nog net een keer! \nen na die tyd, terug in die tent, \nverf hulle vir my 'n ander prent:\nnee\ndoen dit\nvinniger\nouliker\nbeter\nsteek dit aan die brand \nen vlieg daar deur tot die ander kant! \nen durf ek grom of my maanhare\nskud dan is ek netjies met 'n \nvlymskerp tong terug op my \npodium gesit\nstralend, smalend \ntot die laaste sweepslag\nwanneer ek kans kry om te spring\ndan vlieg ek buite die abbisale \nsirkels die wye w\xEAreld in. ",
    date: "2021-05-10T18:45:53.481Z",
    handle: "@ilzedup94"
  },
  {
    id: "609c0c0f631b1c0017a7f529",
    title: "2021.05.11",
    bodyText: "ek wil iets skryf. 'n toneel, 'n gedig, 'n song, enigiets om sin te maak van daai god-aweful selfoon oproep in November.\nToe ons net op die lyn gesnik het na asem en al my woorde skielik opgehou het.\n\nEk wens ek kon jou moet in praat, maar die harde, nugter waarheid is dat die lewe aan beweeg.\nAlmal behalwe jou ma en jou pa en jou broers en susters het aanhou beweeg en geraas maak. En selfs hulle het readjust maar 'n deadline is 'n deadline.\n\nEk wil met jou gesels soos ou vriende en soos vreemdelinge. Ek het nie meer generiese inspirasie boodskappe oor nie, ek s\xEA mos, my woorde het in November dood geloop. Klaar gemaak. Ek het niks meer om te s\xEA nie.\n\nBehalwe dat die einde nie op die horison l\xEA nie. Alles beweeg vorentoe ad infinitum. Niks en alles is waar. Alles word vergeet en alles onthou.\n\nDit is nooit weer nie, maar vir altyd en ewig 'n Donderdag in November. ",
    date: "2021-05-12T17:10:39.864Z",
    handle: ""
  },
  {
    id: "609d7114c376250017fdc315",
    title: "ek kan self. ",
    bodyText: "ek het nog nooit\ntoegelaat dat 'n man\nmy hart breek nie. \n\nhy sal dit nooit so \ngoed soos ek kan \ndoen nie. ",
    date: "2021-05-13T18:33:56.165Z",
    handle: "@ilzedup94"
  },
  {
    id: "60ac8845d456d900172a41f7",
    title: "herfs",
    bodyText: "op jou verjaarsdag \nwas dit nog warm\nal was dit herfs\nek weet\nwant jy het met 'n vest \nrondgeloop\ndaai een wat jou ma vir jou \ngegee het wat so pienkerig was\n(salmon, het jy my altyd herinner)\nek weet\nwant iemand het een van daai \ninstax kameras om jou nek \ngehang en die band was reeds besig \nom klam te word\nen alles was in stadige aksie\ndie koel wind deur die vertrek\nwat nie een van ons herken \n(erken) \nhet nie\n'n flits van die kamera\ndie foto wat druk\nek en jy\nvasgevang in 'n kortstondige \nmondigwording\nen 'n toegemaakte venster wat volg",
    date: "2021-05-25T05:16:53.422Z",
    handle: "@ilzedup94"
  },
  {
    id: "60afa492d8552c00178dd3bb",
    title: "Donderdag, 15:52",
    bodyText: "ek het een keer hierdie ou ontmoet\nvir koffie, jy weet, by een van hierdie\nhipster jols waar almal maak asof \nhulle siele oud is en al daai kak\nterwyl hulle TikToks op hul iPhones kyk\nhy het 'n sigaret in sy mond gehad\nlomp tussen sy lippe\nsoos 'n girl wat vir die eerste keer op hakke probeer loop\nonseker oor waar om te trap en hoe om natural te act\nsukkel maar aan die begin, jy weet\nhy bestel iets wat hy nie kon uitspreek\nnie (claim hy drink dit daagliks)\ntussendeur die gesprek (meestal hy, meestal oor homself)\nhoor ek eintlik niks\n'n orgasmiese, oorverdowende, \noorgroot fokkol;\nnet die eggo om die ego. ",
    date: "2021-05-27T13:54:26.321Z",
    handle: "@ilzedup94"
  },
  {
    id: "60b3c59ce3af150017f57871",
    title: "aan die mense wat langs die engen refinery bly:",
    bodyText: "hoes mens van die rook\nof\ndie oorskot van drome\nwat in jou keel vassit?",
    date: "2021-05-30T17:04:28.401Z",
    handle: "@ilzedup94"
  },
  {
    id: "60c6645aa2d8ff00172ae4ca",
    title: "maanlig, 'n haiku",
    bodyText: "melkwater melkweg\ndruppels op jou vel en ek\nkoggelend vermaan",
    date: "2021-06-13T20:02:34.390Z",
    handle: "@ilzedup94"
  },
  {
    id: "60ccaa18da94ad0017ab1200",
    title: "Existensie ",
    bodyText: "As jy nog nooit jou balsak perongeluk met 'n vuurhoutjie gebrand het nie, wil ek nie weet wat jy met jou lewe doen nie. ",
    date: "2021-06-18T14:13:44.675Z",
    handle: ""
  },
  {
    id: "60d728d8f463b4001731085a",
    title: "Simson en die virus",
    bodyText: "My woonstel het \u2018n swaartekrag anders as dit van daar buite.\nHoe vinnig verklein die w\xEAreld nie,\nna net \u2018n paar dae se huisbly en\ntien-blikkies-tuna-saniteer-en-my-hande-rou-skrop-en-\u2018n-hazmat-suit-winkel-toe-dra-en-nuus-lees-en-facebook-soek-en-my-tannie-het-'n-video-gewatsapp-van-iemand-wat-s\xEA-dit-is-alles-'n-klug-en-youtube-kyk-en-\u2018n-Chinese-takeout-foelie-hoet-dra-en-\ntot Simson sal bang word, hare en al.\n",
    date: "2021-06-26T13:17:12.052Z",
    handle: "marietsteinmann"
  },
  {
    id: "60d72904f463b4001731085b",
    title: "anderkant, ek",
    bodyText: "kan jy nog jou drome onthou? \nwas dit die moeite werd? \nom weg te gaan \nen weer\nte word,\nmaar in \u2018n ander plek?\n",
    date: "2021-06-26T13:17:56.761Z",
    handle: "marietsteinmann"
  },
  {
    id: "60df19787d54e30017258525",
    title: "winter. durban. 2021",
    bodyText: "geleende somer\nson fluister oor jou vel en \nlag in jou gesig",
    date: "2021-07-02T13:49:44.955Z",
    handle: "@ilzedup94"
  },
  {
    id: "60e366dfa0a424001717a165",
    title: "anderkant besit",
    bodyText: "as jy naby aan\ndie see sit kan jy hoor hoe\nek hier asem haal",
    date: "2021-07-05T20:09:03.239Z",
    handle: "@ilzedup94"
  },
  {
    id: "60e9840b179b19001780fb5f",
    title: "ultraviolence",
    bodyText: "op sy boekrak sien ek \nburgess orwell golding\nsagte lyne speel \noor die r\xFBe en\nverklap ure se lees \n\nen ure se inbreek van dit wat ongeskend en nuut was. ",
    date: "2021-07-10T11:27:07.354Z",
    handle: "@ilzedup94"
  },
  {
    id: "60e9ec2e179b19001780fb60",
    title: "F.P",
    bodyText: "\nJou broer is mooier as jy anyway.",
    date: "2021-07-10T18:51:26.311Z",
    handle: ""
  },
  {
    id: "60ec88cd76a8040017e6ecca",
    title: "Julie 2021",
    bodyText: "hier in die winter\nvoel ek skaars die koue want \njy val saam die sneeu",
    date: "2021-07-12T18:24:13.446Z",
    handle: "@ilzedup94"
  },
  {
    id: "60ef2cdf1b78d800172e9bb9",
    title: "farewell summer",
    bodyText: "soutwater sproete\nsoene sandkorrel voete\nen ons jaag die son",
    date: "2021-07-14T18:28:47.563Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f046dc1ca50a0017514ac5",
    title: "Probleem van my lewe: ",
    bodyText: '"Hoekom dan gew\xF3ne magenta gebruik as daar fluorescent magenta is?"',
    date: "2021-07-15T14:31:56.089Z",
    handle: "@stoepgallery"
  },
  {
    id: "60f063401ca50a0017514ac6",
    title: "vermillion",
    bodyText: "vlek die lug rooi en\npluk gou vir my die son; vleg\ndit deur my hare. ",
    date: "2021-07-15T16:33:04.771Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f148ac1ca50a0017514ac7",
    title: "'n haiku vir vrydag",
    bodyText: "my stad brand. brood is\nmin. my verhandeling wag. \nen ek skuld sars geld.",
    date: "2021-07-16T08:51:56.152Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f19984685dcf0017571ad9",
    title: "a modern day love story",
    bodyText: "twee mense wat\nmekaar se ego's voer tot\nin versadigheid",
    date: "2021-07-16T14:36:52.439Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f457766fc6c70017005321",
    title: "patroon",
    bodyText: "jy praat so hard met \njou mooi kaleidoskoopmond \nsoen my tog sagter",
    date: "2021-07-18T16:31:50.606Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f466966fc6c70017005322",
    title: "metamorphosis",
    bodyText: "laat haar vry en kyk\nhoe gou word sy die wilde \nblomme langs haar stoep",
    date: "2021-07-18T17:36:22.422Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f475116fc6c70017005323",
    title: "we're all of the stars. we're fading away",
    bodyText: "met jou lig in my\no\xEB sal ons inplof en \nas maanstof ontmoet",
    date: "2021-07-18T18:38:09.132Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f6b01de16c5800172c5b58",
    title: "under construction",
    bodyText: "jy bou 'n groot muur \nom jou hart en verf dit met\nonskuld in vuil-wit ",
    date: "2021-07-20T11:14:37.680Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f7c8bdbc14be00171f6c16",
    title: "idiome is moeilik, julle",
    bodyText: "maak hy r\xEArig 'n \nfout as hy s\xEA sy het hom \nom die bos verlei? ",
    date: "2021-07-21T07:11:57.971Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f866abbc14be00171f6c17",
    title: "gebedsomleiding",
    bodyText: "vou my versigtig\nin jou hande toe, aanskou\nmy openbaring",
    date: "2021-07-21T18:25:47.152Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f93fa329032000179b647f",
    title: "spookasem",
    bodyText: "ek wil h\xEA my naam \nmoet sag op jou tong smelt en \nwegraak in jou mond",
    date: "2021-07-22T09:51:31.212Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f93fb529032000179b6480",
    title: "spookasem",
    bodyText: "ek wil h\xEA my naam \nmoet sag op jou tong smelt en \nwegraak in jou mond",
    date: "2021-07-22T09:51:49.327Z",
    handle: "@ilzedup94"
  },
  {
    id: "60f93fcb29032000179b6481",
    title: "spookasem",
    bodyText: "ek wil h\xEA my naam \nmoet sag op jou tong smelt en \nwegraak in jou mond",
    date: "2021-07-22T09:52:11.080Z",
    handle: "@ilzedup94"
  },
  {
    id: "60fda45833cee50017b6af86",
    title: "19:50",
    bodyText: "jy vra of ek mal \nof verlief is; is dit nie \ndieselfde ding nie? ",
    date: "2021-07-25T17:50:16.071Z",
    handle: "@ilzedup94"
  },
  {
    id: "60feb73287e80d00179eb348",
    title: "buitemuurse aktiwiteite",
    bodyText: "ek wil my arms\ngraag sprei en saam die wind waai \ntot ek self leer vlieg",
    date: "2021-07-26T13:22:58.457Z",
    handle: "@ilzedup94"
  },
  {
    id: "61001e4b86f6fa00176c178a",
    title: "onthou my",
    bodyText: "skryf my naam in jou\ndigbundels; soek my in jou\ngunsteling verse",
    date: "2021-07-27T14:55:07.227Z",
    handle: "@ilzedup94"
  },
  {
    id: "6103fcb35233100017394f8d",
    title: "portret van 'n tienermeisie by 'n roudiens op 'n vrydagoggend",
    bodyText: "onskuldig in die\ngoue lig van verlies deur\ndie son gebalsem",
    date: "2021-07-30T13:20:51.829Z",
    handle: "@ilzedup94"
  },
  {
    id: "61050dac5233100017394f8e",
    title: "Modern youth ",
    bodyText: "Skree tot jy omval, niemand hoor nie.\nJy is alleen en die void maak nie 'n geluid terug nie.\nEggo is geen antwoord, Eggo is al dood.\nDaar is net wasem in die niks in\nDit maak darem nie saak nie. Net aan jou. En jy?\n\nS\xEA maar niks. ",
    date: "2021-07-31T08:45:32.533Z",
    handle: ""
  },
  {
    id: "610941cbbf34600017c25823",
    title: "meermin",
    bodyText: "daar het jy vir die\neerste keer gelag en in \ndie branders verdwyn",
    date: "2021-08-03T13:16:59.849Z",
    handle: "@ilzedup94"
  },
  {
    id: "610c44ca86d64000175c1cae",
    title: "ikarus",
    bodyText: "my vlerke was reeds\nverkool en ek was verblind\nwant jy was die son",
    date: "2021-08-05T20:06:34.877Z",
    handle: "@ilzedup94"
  },
  {
    id: "6129e421cec0f10017e5a45a",
    title: "jy is",
    bodyText: "net 'n illusie\n'n warm dag in Julie; 'n\nonderwaterwens ",
    date: "2021-08-28T07:22:09.082Z",
    handle: "@ilzedup94"
  },
  {
    id: "6138cc8e6a1c2d001739caa8",
    title: "16.45",
    bodyText: "tussen lang skadu's \nen soel middae word ek deel\nvan jou blommekrans",
    date: "2021-09-08T14:45:34.628Z",
    handle: "@ilzedup94"
  },
  {
    id: "613b2120d65b6800178589e6",
    title: "flings (nie die chips nie)",
    bodyText: "daar is 'n bietjie\nvan jou in die son wat my \nelke somer brand",
    date: "2021-09-10T09:10:56.186Z",
    handle: "@ilzedup94"
  },
  {
    id: "614b814526f4390017b4df1b",
    title: "testing",
    bodyText: "roses are red\nviolets are blue\nthis is a test\nwho are you",
    date: "2021-09-22T19:17:25.993Z",
    handle: ""
  },
  {
    id: "6156d32f34ae700017f42f81",
    title: "die ou se hemp by die carwash",
    bodyText: '"think outside the box"\nen ek wonder of hy weet\ndat die boks bestaan',
    date: "2021-10-01T09:21:51.326Z",
    handle: "@ilzedup94"
  },
  {
    id: "61729c7e9fb8ae0017ed1627",
    title: "sun god",
    bodyText: "my sweet surrender\ni dream of you and our last\nfew sunlit nothings",
    date: "2021-10-22T11:11:58.824Z",
    handle: "@ilzedup94"
  },
  {
    id: "617587f2634f97001735c6ff",
    title: "oktober.",
    bodyText: "jy val weer aarde \ntoe in eensame druppels \nen ek tel jou op. ",
    date: "2021-10-24T16:21:06.154Z",
    handle: "@ilzedup94"
  },
  {
    id: "6176f9f578bbf3001778c2b4",
    title: "20:39",
    bodyText: "die donker in jou\nherken die donker in my\n'n flou namast\xE9. ",
    date: "2021-10-25T18:39:49.238Z",
    handle: "@ilzedup94"
  },
  {
    id: "617da0f1b8347e0017742b0d",
    title: "lente blom",
    bodyText: "ek steek 'n  vergeet-my-nie \nagter jou oor in\nen ons glimlag simpel vir mekaar,\nonbewus van die realiteit\nvan ons werklikheid.\n\nin hierdie een\nenkele\noomblik\nhoop ek \ndat die naam\nvan hierdie lente blom\ngraag in my guns sal werk.\n",
    date: "2021-10-30T19:45:53.486Z",
    handle: ""
  },
  {
    id: "61812000435f2e00179ac1f2",
    title: "ek is vir jou",
    bodyText: "net 'n mank loopraam\n'n tweedehandse muse, 'n \nwordende gerief.",
    date: "2021-11-02T11:24:48.137Z",
    handle: "@ilzedup94"
  },
  {
    id: "618c18ce50d671001702b844",
    title: "Totsiens, dankie",
    bodyText: "*(ek het al my liefdesbriewe vir jou in elegie\xEB verander. ek lees dit toe oor en oor totdat ek dit begin haat het. ek het dit saam met salie gebrand en Doom ook gespuit net vir ingeval)*\n\nons praat altyd van golwe\npretensi\xEBse paragrawe \nvan hoe alles\nkom en gaan\ndie gesnikkery\ndie armsalige gekerm\ndie verlange\ndie fals hoop \nspyt\n\nmaar niemand praat\nvan die stilte\nvan die vrede\nwat later kom\nin iemand se afwesigheid nie\n\nek dink dis die hele punt\n- om nie te praat nie\n\n",
    date: "2021-11-10T19:09:02.538Z",
    handle: "@xanya.bianca"
  },
  {
    id: "619153a0bf04f20017abaab9",
    title: "eyes",
    bodyText: "breaths of golden sheen\nsecrets carried in between\nshades of forest green",
    date: "2021-11-14T18:21:20.573Z",
    handle: "@ilzedup94"
  },
  {
    id: "619c94e10735f5001767a739",
    title: "sondagoggend surf",
    bodyText: "heilige seeslaaf\njy dryf eerbiedig deur jou\nsoutwater nagmaal",
    date: "2021-11-23T07:14:41.084Z",
    handle: "@ilzedup94"
  },
  {
    id: "61ab07a9ba2b3b0017896f74",
    title: "jy was",
    bodyText: "middernag geraas\nchaos met 'n glimlag en\nonbeskaamd jouself",
    date: "2021-12-04T06:16:09.242Z",
    handle: "@ilzedup94"
  },
  {
    id: "61b4d41afabdd000174fb33c",
    title: "respons aan anoniem",
    bodyText: "ek stem saam\n\nmense wat te hard probeer\nom diep te wees\nirriteer my\nek\nirriteer myself\n\u2026\nis dit ooit digkuns \nas jou woorde jou nie \u2018n bietjie laat \u201Ccringe\u201D nie?\n\nelke kunstenaar kyk lank genoeg\nna sy werk\ntot hy dit haat\n\nek dink dis normaal\ndis deel van die proses\n\nmy woorde rym steeds nie",
    date: "2021-12-11T16:38:50.568Z",
    handle: "@xanya.bianca"
  },
  {
    id: "61b4d8ebfabdd000174fb33d",
    title: "my gedagtes",
    bodyText: "ek \nis \u2018n prentjie mens\nwat nie kan teken nie\nso nou skryf ek\nmaar\nmy woorde voel altyd te min\n\nminimalism or mediocrity?",
    date: "2021-12-11T16:59:23.149Z",
    handle: "@xanya.bianca"
  },
  {
    id: "61b76e60c0a3ad001703b5ab",
    title: "hier",
    bodyText: "sal ek nostalgie\nprysgee om nog een keer in \njou branders te baai",
    date: "2021-12-13T16:01:36.003Z",
    handle: "@ilzedup94"
  },
  {
    id: "61e07907ee1ff300173e5c6e",
    title: "tiener, 'n haiku",
    bodyText: "\n\nsoms is alles en\nniks die moeite werd in jou\nkortstondige jeug",
    date: "2022-01-13T19:09:59.424Z",
    handle: "@ilzedup94"
  },
  {
    id: "61fd90f86dac53001760649c",
    title: "Ik",
    bodyText: "Ekt onthou on n gedig te skryf\n\n",
    date: "2022-02-04T20:47:52.544Z",
    handle: ""
  },
  {
    id: "620d0518c8413d0017335b18",
    title: "ek het ges\xEA jy is die son",
    bodyText: "die son l\xEA vlak in\njou wimpers; wanneer jy na\nmy kyk, skyn ek ook. ",
    date: "2022-02-16T14:07:20.213Z",
    handle: "@ilzedup94"
  }
];

// app/models/publishedPoets.json
var publishedPoets_default = [
  "handyandy.art",
  "evertesterhuizen",
  "ek.is.anouk ",
  "stefanyseymore",
  "mabethc",
  "hlaphogiven",
  "eks.talita.x",
  "ek.is.anouk",
  "Bo Kamer ",
  "aud6362",
  '"Cool_cat"',
  "Vroudrie",
  "almero_welgemoed",
  "chrisansaschhh",
  "ahwelgemoed",
  "marietsteinmann ",
  "neonvanlierop",
  "Verbatim ",
  "ilzedup94",
  "liesekuhn",
  "Evertesterhuizen  ",
  "miababy_95",
  "EvertEsterhuizen",
  "marinda_dejongh",
  "Envirjou",
  "colettecombrink",
  "@milli.burd",
  "13.lynette",
  "rymmetgrietjie",
  "Sheridanwalter ",
  "ena_stegmann",
  "Ahwelgemoed ",
  "ella.haal.asem.asseblief",
  "eckleynhans_",
  "jaysonbeatson",
  "Bukowski_Spoof",
  "wynandmb13",
  "V",
  "nina_devilliers",
  "Kitchendutch ",
  "verbatim",
  "mada_oosthuizen",
  "maar,wat ",
  "tanapistorius ",
  "tanapistorius",
  "kanjyglo",
  "verbatim\u25A0",
  "prof_anker",
  "miaradov",
  "\u{1F9D8}\u200D\u2642\uFE0F",
  "verbeeldings.wereld.hartjie",
  "Verbatim",
  "andreasvanderhoven",
  "bejahartjie_17 ",
  "paula_stxphxnie_kruger",
  "toastcards",
  "PhilipLarkin",
  "antonbarnard ",
  "francoislct",
  "Purple_pixie13",
  "paulakruger.pk",
  "tamiabrown.x",
  "Evert Esterhuizen ",
  "evertesterhuizen ",
  "VavushkaLove",
  "blignaultwienand",
  "#azilleconradie",
  "oom koos muller.",
  "jacquesdeviljee",
  "@eks.talita.x ",
  "the.stroy",
  "Boerewors",
  "Newageadam ",
  "arnojvvuuren",
  "konfytvrou",
  "Hartbons",
  "mariska.bolleurss",
  "\xAE0\xA9k\u20ACR ",
  "@milli.burd ",
  "Eksdood",
  "antonbarnard",
  "verbatim ",
  "ons",
  "theladygray",
  "cryingcavecat",
  "glasasem",
  "ankespies",
  "jennybl3u",
  "kitchendutch",
  "johannes_ferreira",
  "Anoniem",
  "HierdieKakAlweer",
  "mada_oosthuizen ",
  "letter.ling",
  "terblanche_jordaan",
  "ah-ha",
  "Bouwerbosch",
  "Draadhond",
  "wpvanschalkwykslp",
  "asensuur",
  "'n beter digter as ek",
  "blignaultwienand ",
  "sheridanwalter ",
  "Evertesterhuizen ",
  "joneliavt",
  "@brave.as.a.bear",
  "brotherlouislouislouis",
  "Newageadam",
  "\u{1F910}",
  "ekwasvanaandgetroudmetvavushkaensywasfantasties",
  "johngeary6",
  "niemandiniemandsland",
  "sundrieddesign",
  "Misha Nel",
  "Nee dankie, raai maar",
  "Fokjouanoniem",
  "johnberkeproduksiesgmail.com",
  "jancevanrensburg",
  "Ahwelgemoed",
  "NPvanwyklouw",
  "natani_jacobs",
  "Evertesterhuizen",
  "brave.as.a.bear",
  "cx_lyb",
  "zantekeizer",
  "woordedwaler",
  "@ilzedup94",
  "angs",
  "DitIsVolbring",
  "Ogreeff",
  "@evertesterhuizen",
  "kayla_de_jager",
  "@sheridanwalter ",
  "happinessattwo",
  "taniacoetsee",
  "@stefanyseymore",
  "@stoepstudio ",
  "@stoepgallery",
  "afrikana_uit_brackenfell ",
  "@Verbatim ",
  "@Katkedesign ",
  "koosakombuis",
  "@cx_lyb",
  "augustazietsman",
  "_darnit_",
  "\u2606",
  "@xanya.bianca",
  "\u{1F464}",
  "@tanapistorius ",
  "klyntji",
  "@marietsteinmann",
  "anon",
  "die.harlekyn",
  "@jane.de.wet",
  "marietsteinmann"
];

// app/models/poems.server.ts
async function getRandomPoem() {
  const poem = publishedPoems_default[Math.floor(Math.random() * publishedPoems_default.length)];
  const parsedMD = marked(poem.bodyText);
  const newPoem = __spreadValues({}, poem);
  return newPoem;
}
async function getAllPoets() {
  return publishedPoets_default;
}

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/diedigters.tsx
var loader = async () => {
  return (0, import_node.json)({
    poets: await getAllPoets()
  });
};
var LasteGedig2 = () => {
  const { poets } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("h3", null, "Die Digters"), /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement(Poets_default, {
    poets
  })));
};
var diedigters_default = LasteGedig2;

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/components/Poems.tsx
init_react();
var import_react5 = require("@remix-run/react");
var import_date_fns = require("date-fns");
var Poems = ({ poem }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "button-container"
  }, /* @__PURE__ */ React.createElement("h5", null, "'n gedig uit ons argief"), /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "nog 'n gedig?")))), /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "poem-container"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "poem-title"
  }, poem.title ? poem.title : "ongetieteld"), /* @__PURE__ */ React.createElement("h5", {
    className: "poem-handle"
  }, "deur: ", poem.handle ? poem.handle : "anoniem"), /* @__PURE__ */ React.createElement("div", {
    className: "poem-body"
  }, poem.bodyText), /* @__PURE__ */ React.createElement("p", {
    className: "poem-date"
  }, (0, import_date_fns.format)(new Date(poem.date), "dd-MM-yyyy")))));
};
var Poems_default = Poems;

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/index.tsx
var loader2 = async () => {
  return (0, import_node2.json)({
    poem: await getRandomPoem()
  });
};
function Index() {
  const { poem } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(Poems_default, {
    poem
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c504f49d", "entry": { "module": "/build/entry.client-OEGHZHQ7.js", "imports": ["/build/_shared/chunk-HW7HDJSK.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QKBM2BJK.js", "imports": ["/build/_shared/chunk-KQZX635M.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/diedigters": { "id": "routes/diedigters", "parentId": "root", "path": "diedigters", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/diedigters-EYWLTW37.js", "imports": ["/build/_shared/chunk-FDP3V47U.js", "/build/_shared/chunk-WZ2VBLYM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-C2ECFF3C.js", "imports": ["/build/_shared/chunk-FDP3V47U.js", "/build/_shared/chunk-WZ2VBLYM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/laaste-gedig": { "id": "routes/laaste-gedig", "parentId": "root", "path": "laaste-gedig", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/laaste-gedig-5A7TPAP4.js", "imports": ["/build/_shared/chunk-WZ2VBLYM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C504F49D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/laaste-gedig": {
    id: "routes/laaste-gedig",
    parentId: "root",
    path: "laaste-gedig",
    index: void 0,
    caseSensitive: void 0,
    module: laaste_gedig_exports
  },
  "routes/diedigters": {
    id: "routes/diedigters",
    parentId: "root",
    path: "diedigters",
    index: void 0,
    caseSensitive: void 0,
    module: diedigters_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
