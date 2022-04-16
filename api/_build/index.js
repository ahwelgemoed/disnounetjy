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
var global_default = "/build/_assets/global-GGGQULCO.css";

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/root.tsx
{
}
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null)), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/diedigters.tsx
var diedigters_exports = {};
__export(diedigters_exports, {
  default: () => diedigters_default,
  loader: () => loader
});
init_react();
var import_node = require("@remix-run/node");
var import_react4 = require("@remix-run/react");

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
    to: "/lastegedig"
  }, "ons laste gedig")), /* @__PURE__ */ React.createElement("button", {
    className: "button"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/diedigters"
  }, "die digters"))), /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
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
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));

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

// app/models/poems.server.ts
var ALL_PUBLISHED_POEMS = import_path.default.join(process.cwd(), "app/models/publishedPoems.json");
var ALL_PUBLISHED_POETS = import_path.default.join(process.cwd(), "app/models/publishedPoets.json");
async function getRandomPoem() {
  const rawData = import_fs.default.readFileSync(ALL_PUBLISHED_POEMS);
  const data = JSON.parse(rawData);
  const poem = data[Math.floor(Math.random() * data.length)];
  const parsedMD = marked(poem.bodyText);
  const newPoem = __spreadValues({}, poem);
  return newPoem;
}
async function getAllPoets() {
  const rawData = import_fs.default.readFileSync(ALL_PUBLISHED_POETS);
  const data = JSON.parse(rawData);
  return data;
}

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/diedigters.tsx
var loader = async () => {
  return (0, import_node.json)({
    poets: await getAllPoets()
  });
};
var LasteGedig = () => {
  const { poets } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("h2", null, "Die Digters"), /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement(Poets_default, {
    poets
  })));
};
var diedigters_default = LasteGedig;

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/lastegedig.tsx
var lastegedig_exports = {};
__export(lastegedig_exports, {
  default: () => lastegedig_default
});
init_react();

// app/components/LastPoem.tsx
init_react();

// app/helpers/lastPoem.ts
init_react();
var lastPoem = `
Dag, hoe gaan dit?

lank laas gepraat... 

wel...

*DIS NET JY* of *DNJ* is nou *DIS NOU NET JY* 

Tussen 2016 en 2021  is daar 1795 gedigte geskryf deur ek, jy en hulle. 

DNJ het vir 3 seisoene geleef.

3 websites, 3 foon apps, 3 databases.

Ons was in Ons Klyntji Zine, Ons was beste-este vriende met [klyntji.com](https://klyntji.com/).

Maar.

Iewers in 2021  het ek designs vir seisoen 4 begin, maar...

ek weet nie...

Soms met die tipe goed verloor jy jou passie, en soms kom dit terug, maar die keer het dit weg gebly.

\u2018n maand of so terug het ek die servers vir [WATSE](https://watse.klyntji.com/) ge-update, en deur dit te doen het ek DNJ per ongeluk offline gevat. In daai maand het niemand my laat weet nie, ek het nie analytics op DNJ nie, maar dit het my nie kwaad gemaak nie, dit het my net laat dink, en ek het besef.

DNJ het sy werk gedoen. 

Ek en Jy en hulle, het ons werk gedoen.

Dit het my soveel geleer, oor myself, oor code en oor jou. Dit het my geleer hoe om native apps en servers te bou, dit het my geleer eks sleg met Design. 

Dit het my \u0149 geleedheid gegee in daai 5 jaar van DNJ om uit my situasie te kom, en het gelei dat ek vandag \u0149 beter situasie het.

Dit het my vriende help skryf, en vir oomblikke uit hulle eie situasies kom. DNJ het my laat tafels dek saam met nuwe mense.

Met tyd het ons situasies verander, ek praat Engels ek leer Nederlands en onthou Afrikaans, my vriende skilder in die Oos Kaap en die tafels is afgedek, ons almal praat soms, maar ons is 30+ en vir een of ander rede beteken dit iets.

En so dek ek DNJ ook af.

Ek los al die data hier.

Lees die gedigte, geniet dit.

Ons was hier... Dit was goed, jy was fokken lekker.

[kom s\xEA hallo](https://www.instagram.com/ahwelgemoed/)
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

// route:/Users/ahwelgemoed/Documents/repos/disNouNetJy/app/routes/lastegedig.tsx
var LasteGedig2 = () => {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("h3", null, "Die Laste Gedig"), /* @__PURE__ */ React.createElement(LayoutItem_default, null, /* @__PURE__ */ React.createElement(LastPoem_default, null)));
};
var lastegedig_default = LasteGedig2;

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
    poem: await getRandomPoem(),
    poets: await getAllPoets()
  });
};
function Index() {
  const { poem, poets } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(Poems_default, {
    poem
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "68694b32", "entry": { "module": "/build/entry.client-OEGHZHQ7.js", "imports": ["/build/_shared/chunk-HW7HDJSK.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-P7YC7FHM.js", "imports": ["/build/_shared/chunk-KQZX635M.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/diedigters": { "id": "routes/diedigters", "parentId": "root", "path": "diedigters", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/diedigters-V4PQUSRK.js", "imports": ["/build/_shared/chunk-FDP3V47U.js", "/build/_shared/chunk-6VCSSW2I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4O257EU5.js", "imports": ["/build/_shared/chunk-FDP3V47U.js", "/build/_shared/chunk-6VCSSW2I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/lastegedig": { "id": "routes/lastegedig", "parentId": "root", "path": "lastegedig", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/lastegedig-WDG5G4GS.js", "imports": ["/build/_shared/chunk-6VCSSW2I.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-68694B32.js" };

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
  "routes/diedigters": {
    id: "routes/diedigters",
    parentId: "root",
    path: "diedigters",
    index: void 0,
    caseSensitive: void 0,
    module: diedigters_exports
  },
  "routes/lastegedig": {
    id: "routes/lastegedig",
    parentId: "root",
    path: "lastegedig",
    index: void 0,
    caseSensitive: void 0,
    module: lastegedig_exports
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
