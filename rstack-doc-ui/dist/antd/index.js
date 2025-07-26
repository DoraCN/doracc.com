/*! For license information please see index.js.LICENSE.txt */
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_dom_7136dc57__ from "react-dom";
var __webpack_modules__ = {
    "./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/hooks/useHMR.js": function(module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
            Z: ()=>__WEBPACK_DEFAULT_EXPORT__
        });
        module = __webpack_require__.hmd(module);
        function useProdHMR() {
            return false;
        }
        var webpackHMR = false;
        function useDevHMR() {
            return webpackHMR;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = 'production' === process.env.NODE_ENV ? useProdHMR : useDevHMR;
        if ('production' !== process.env.NODE_ENV && true && module && module.hot && 'undefined' != typeof window) {
            var win = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : null;
            if (win && 'function' == typeof win.webpackHotUpdate) {
                var originWebpackHotUpdate = win.webpackHotUpdate;
                win.webpackHotUpdate = function() {
                    webpackHMR = true;
                    setTimeout(function() {
                        webpackHMR = false;
                    }, 0);
                    return originWebpackHotUpdate.apply(void 0, arguments);
                };
            }
        }
    },
    "./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js": function(__unused_webpack_module, exports) {
        /**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("production" !== process.env.NODE_ENV) (function() {
            'use strict';
            var REACT_ELEMENT_TYPE = Symbol.for('react.element');
            var REACT_PORTAL_TYPE = Symbol.for('react.portal');
            var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
            var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
            var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
            var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
            var REACT_CONTEXT_TYPE = Symbol.for('react.context');
            var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
            var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
            var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
            var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
            var REACT_MEMO_TYPE = Symbol.for('react.memo');
            var REACT_LAZY_TYPE = Symbol.for('react.lazy');
            Symbol.for('react.offscreen');
            Symbol.for('react.module.reference');
            function typeOf(object) {
                if ('object' == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch($$typeof){
                        case REACT_ELEMENT_TYPE:
                            var type = object.type;
                            switch(type){
                                case REACT_FRAGMENT_TYPE:
                                case REACT_PROFILER_TYPE:
                                case REACT_STRICT_MODE_TYPE:
                                case REACT_SUSPENSE_TYPE:
                                case REACT_SUSPENSE_LIST_TYPE:
                                    return type;
                                default:
                                    var $$typeofType = type && type.$$typeof;
                                    switch($$typeofType){
                                        case REACT_SERVER_CONTEXT_TYPE:
                                        case REACT_CONTEXT_TYPE:
                                        case REACT_FORWARD_REF_TYPE:
                                        case REACT_LAZY_TYPE:
                                        case REACT_MEMO_TYPE:
                                        case REACT_PROVIDER_TYPE:
                                            return $$typeofType;
                                        default:
                                            return $$typeof;
                                    }
                            }
                        case REACT_PORTAL_TYPE:
                            return $$typeof;
                    }
                }
            }
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            exports.ForwardRef = ForwardRef;
            exports.isMemo = isMemo;
        })();
    },
    "./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.production.min.js": function(__unused_webpack_module, exports) {
        /**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy");
        Symbol.for("react.offscreen");
        Symbol.for("react.module.reference");
        function v(a) {
            if ("object" == typeof a && null !== a) {
                var r = a.$$typeof;
                switch(r){
                    case b:
                        switch(a = a.type){
                            case d:
                            case f:
                            case e:
                            case m:
                            case n:
                                return a;
                            default:
                                switch(a = a && a.$$typeof){
                                    case k:
                                    case h:
                                    case l:
                                    case q:
                                    case p:
                                    case g:
                                        return a;
                                    default:
                                        return r;
                                }
                        }
                    case c:
                        return r;
                }
            }
        }
        exports.ForwardRef = l;
        exports.isMemo = function(a) {
            return v(a) === p;
        };
    },
    "./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js": function(module, __unused_webpack_exports, __webpack_require__) {
        if ('production' === process.env.NODE_ENV) module.exports = __webpack_require__("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.production.min.js");
        else module.exports = __webpack_require__("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js");
    },
    "./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js": function(module) {
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function() {
            'use strict';
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
                var classes = '';
                for(var i = 0; i < arguments.length; i++){
                    var arg = arguments[i];
                    if (arg) classes = appendClass(classes, parseValue(arg));
                }
                return classes;
            }
            function parseValue(arg) {
                if ('string' == typeof arg || 'number' == typeof arg) return arg;
                if ('object' != typeof arg) return '';
                if (Array.isArray(arg)) return classNames.apply(null, arg);
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
                var classes = '';
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
                return classes;
            }
            function appendClass(value, newClass) {
                if (!newClass) return value;
                if (value) return value + ' ' + newClass;
                return value + newClass;
            }
            if (module.exports) {
                classNames.default = classNames;
                module.exports = classNames;
            } else if ('function' == typeof define && 'object' == typeof define.amd && define.amd) define('classnames', [], function() {
                return classNames;
            });
            else window.classNames = classNames;
        })();
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        id: moduleId,
        loaded: false,
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    module.loaded = true;
    return module.exports;
}
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.hmd = (module)=>{
        module = Object.create(module);
        if (!module.children) module.children = [];
        Object.defineProperty(module, 'exports', {
            enumerable: true,
            set: ()=>{
                throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
            }
        });
        return module;
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
var RightOutlined_RightOutlined = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [
            {
                tag: "path",
                attrs: {
                    d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                }
            }
        ]
    },
    name: "right",
    theme: "outlined"
};
const asn_RightOutlined = RightOutlined_RightOutlined;
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function slicedToArray_slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function typeof_typeof(o) {
    return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, typeof_typeof(o);
}
function toPrimitive(t, r) {
    if ("object" != typeof_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof_typeof(i) ? i : i + "";
}
function defineProperty_defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function objectWithoutProperties_objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
var classnames = __webpack_require__("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/ __webpack_require__.n(classnames);
const round = Math.round;
function splitColorStr(str, parseNum) {
    const match = str.replace(/^[^(]*\((.*)/, '$1').replace(/\).*/, '').match(/\d*\.?\d+%?/g) || [];
    const numList = match.map((item)=>parseFloat(item));
    for(let i = 0; i < 3; i += 1)numList[i] = parseNum(numList[i] || 0, match[i] || '', i);
    if (match[3]) numList[3] = match[3].includes('%') ? numList[3] / 100 : numList[3];
    else numList[3] = 1;
    return numList;
}
const parseHSVorHSL = (num, _, index)=>0 === index ? num : num / 100;
function limitRange(value, max) {
    const mergedMax = max || 255;
    if (value > mergedMax) return mergedMax;
    if (value < 0) return 0;
    return value;
}
class FastColor {
    constructor(input){
        defineProperty_defineProperty(this, "isValid", true);
        defineProperty_defineProperty(this, "r", 0);
        defineProperty_defineProperty(this, "g", 0);
        defineProperty_defineProperty(this, "b", 0);
        defineProperty_defineProperty(this, "a", 1);
        defineProperty_defineProperty(this, "_h", void 0);
        defineProperty_defineProperty(this, "_s", void 0);
        defineProperty_defineProperty(this, "_l", void 0);
        defineProperty_defineProperty(this, "_v", void 0);
        defineProperty_defineProperty(this, "_max", void 0);
        defineProperty_defineProperty(this, "_min", void 0);
        defineProperty_defineProperty(this, "_brightness", void 0);
        function matchFormat(str) {
            return str[0] in input && str[1] in input && str[2] in input;
        }
        if (input) if ('string' == typeof input) {
            const trimStr = input.trim();
            function matchPrefix(prefix) {
                return trimStr.startsWith(prefix);
            }
            if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) this.fromHexString(trimStr);
            else if (matchPrefix('rgb')) this.fromRgbString(trimStr);
            else if (matchPrefix('hsl')) this.fromHslString(trimStr);
            else if (matchPrefix('hsv') || matchPrefix('hsb')) this.fromHsvString(trimStr);
        } else if (input instanceof FastColor) {
            this.r = input.r;
            this.g = input.g;
            this.b = input.b;
            this.a = input.a;
            this._h = input._h;
            this._s = input._s;
            this._l = input._l;
            this._v = input._v;
        } else if (matchFormat('rgb')) {
            this.r = limitRange(input.r);
            this.g = limitRange(input.g);
            this.b = limitRange(input.b);
            this.a = 'number' == typeof input.a ? limitRange(input.a, 1) : 1;
        } else if (matchFormat('hsl')) this.fromHsl(input);
        else if (matchFormat('hsv')) this.fromHsv(input);
        else throw new Error('@ant-design/fast-color: unsupported input ' + JSON.stringify(input));
    }
    setR(value) {
        return this._sc('r', value);
    }
    setG(value) {
        return this._sc('g', value);
    }
    setB(value) {
        return this._sc('b', value);
    }
    setA(value) {
        return this._sc('a', value, 1);
    }
    setHue(value) {
        const hsv = this.toHsv();
        hsv.h = value;
        return this._c(hsv);
    }
    getLuminance() {
        function adjustGamma(raw) {
            const val = raw / 255;
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        }
        const R = adjustGamma(this.r);
        const G = adjustGamma(this.g);
        const B = adjustGamma(this.b);
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    getHue() {
        if (void 0 === this._h) {
            const delta = this.getMax() - this.getMin();
            if (0 === delta) this._h = 0;
            else this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
        }
        return this._h;
    }
    getSaturation() {
        if (void 0 === this._s) {
            const delta = this.getMax() - this.getMin();
            if (0 === delta) this._s = 0;
            else this._s = delta / this.getMax();
        }
        return this._s;
    }
    getLightness() {
        if (void 0 === this._l) this._l = (this.getMax() + this.getMin()) / 510;
        return this._l;
    }
    getValue() {
        if (void 0 === this._v) this._v = this.getMax() / 255;
        return this._v;
    }
    getBrightness() {
        if (void 0 === this._brightness) this._brightness = (299 * this.r + 587 * this.g + 114 * this.b) / 1000;
        return this._brightness;
    }
    darken(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() - amount / 100;
        if (l < 0) l = 0;
        return this._c({
            h,
            s,
            l,
            a: this.a
        });
    }
    lighten(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() + amount / 100;
        if (l > 1) l = 1;
        return this._c({
            h,
            s,
            l,
            a: this.a
        });
    }
    mix(input, amount = 50) {
        const color = this._c(input);
        const p = amount / 100;
        const calc = (key)=>(color[key] - this[key]) * p + this[key];
        const rgba = {
            r: round(calc('r')),
            g: round(calc('g')),
            b: round(calc('b')),
            a: round(100 * calc('a')) / 100
        };
        return this._c(rgba);
    }
    tint(amount = 10) {
        return this.mix({
            r: 255,
            g: 255,
            b: 255,
            a: 1
        }, amount);
    }
    shade(amount = 10) {
        return this.mix({
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }, amount);
    }
    onBackground(background) {
        const bg = this._c(background);
        const alpha = this.a + bg.a * (1 - this.a);
        const calc = (key)=>round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
        return this._c({
            r: calc('r'),
            g: calc('g'),
            b: calc('b'),
            a: alpha
        });
    }
    isDark() {
        return this.getBrightness() < 128;
    }
    isLight() {
        return this.getBrightness() >= 128;
    }
    equals(other) {
        return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
    }
    clone() {
        return this._c(this);
    }
    toHexString() {
        let hex = '#';
        const rHex = (this.r || 0).toString(16);
        hex += 2 === rHex.length ? rHex : '0' + rHex;
        const gHex = (this.g || 0).toString(16);
        hex += 2 === gHex.length ? gHex : '0' + gHex;
        const bHex = (this.b || 0).toString(16);
        hex += 2 === bHex.length ? bHex : '0' + bHex;
        if ('number' == typeof this.a && this.a >= 0 && this.a < 1) {
            const aHex = round(255 * this.a).toString(16);
            hex += 2 === aHex.length ? aHex : '0' + aHex;
        }
        return hex;
    }
    toHsl() {
        return {
            h: this.getHue(),
            s: this.getSaturation(),
            l: this.getLightness(),
            a: this.a
        };
    }
    toHslString() {
        const h = this.getHue();
        const s = round(100 * this.getSaturation());
        const l = round(100 * this.getLightness());
        return 1 !== this.a ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
    }
    toHsv() {
        return {
            h: this.getHue(),
            s: this.getSaturation(),
            v: this.getValue(),
            a: this.a
        };
    }
    toRgb() {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a
        };
    }
    toRgbString() {
        return 1 !== this.a ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
    }
    toString() {
        return this.toRgbString();
    }
    _sc(rgb, value, max) {
        const clone = this.clone();
        clone[rgb] = limitRange(value, max);
        return clone;
    }
    _c(input) {
        return new this.constructor(input);
    }
    getMax() {
        if (void 0 === this._max) this._max = Math.max(this.r, this.g, this.b);
        return this._max;
    }
    getMin() {
        if (void 0 === this._min) this._min = Math.min(this.r, this.g, this.b);
        return this._min;
    }
    fromHexString(trimStr) {
        const withoutPrefix = trimStr.replace('#', '');
        function connectNum(index1, index2) {
            return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
        }
        if (withoutPrefix.length < 6) {
            this.r = connectNum(0);
            this.g = connectNum(1);
            this.b = connectNum(2);
            this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
        } else {
            this.r = connectNum(0, 1);
            this.g = connectNum(2, 3);
            this.b = connectNum(4, 5);
            this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
        }
    }
    fromHsl({ h, s, l, a }) {
        this._h = h % 360;
        this._s = s;
        this._l = l;
        this.a = 'number' == typeof a ? a : 1;
        if (s <= 0) {
            const rgb = round(255 * l);
            this.r = rgb;
            this.g = rgb;
            this.b = rgb;
        }
        let r = 0, g = 0, b = 0;
        const huePrime = h / 60;
        const chroma = (1 - Math.abs(2 * l - 1)) * s;
        const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
        if (huePrime >= 0 && huePrime < 1) {
            r = chroma;
            g = secondComponent;
        } else if (huePrime >= 1 && huePrime < 2) {
            r = secondComponent;
            g = chroma;
        } else if (huePrime >= 2 && huePrime < 3) {
            g = chroma;
            b = secondComponent;
        } else if (huePrime >= 3 && huePrime < 4) {
            g = secondComponent;
            b = chroma;
        } else if (huePrime >= 4 && huePrime < 5) {
            r = secondComponent;
            b = chroma;
        } else if (huePrime >= 5 && huePrime < 6) {
            r = chroma;
            b = secondComponent;
        }
        const lightnessModification = l - chroma / 2;
        this.r = round((r + lightnessModification) * 255);
        this.g = round((g + lightnessModification) * 255);
        this.b = round((b + lightnessModification) * 255);
    }
    fromHsv({ h, s, v, a }) {
        this._h = h % 360;
        this._s = s;
        this._v = v;
        this.a = 'number' == typeof a ? a : 1;
        const vv = round(255 * v);
        this.r = vv;
        this.g = vv;
        this.b = vv;
        if (s <= 0) return;
        const hh = h / 60;
        const i = Math.floor(hh);
        const ff = hh - i;
        const p = round(v * (1.0 - s) * 255);
        const q = round(v * (1.0 - s * ff) * 255);
        const t = round(v * (1.0 - s * (1.0 - ff)) * 255);
        switch(i){
            case 0:
                this.g = t;
                this.b = p;
                break;
            case 1:
                this.r = q;
                this.b = p;
                break;
            case 2:
                this.r = p;
                this.b = t;
                break;
            case 3:
                this.r = p;
                this.g = q;
                break;
            case 4:
                this.r = t;
                this.g = p;
                break;
            case 5:
            default:
                this.g = p;
                this.b = q;
                break;
        }
    }
    fromHsvString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsv({
            h: cells[0],
            s: cells[1],
            v: cells[2],
            a: cells[3]
        });
    }
    fromHslString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsl({
            h: cells[0],
            s: cells[1],
            l: cells[2],
            a: cells[3]
        });
    }
    fromRgbString(trimStr) {
        const cells = splitColorStr(trimStr, (num, txt)=>txt.includes('%') ? round(num / 100 * 255) : num);
        this.r = cells[0];
        this.g = cells[1];
        this.b = cells[2];
        this.a = cells[3];
    }
}
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [
    {
        index: 7,
        amount: 15
    },
    {
        index: 6,
        amount: 25
    },
    {
        index: 5,
        amount: 30
    },
    {
        index: 5,
        amount: 45
    },
    {
        index: 5,
        amount: 65
    },
    {
        index: 5,
        amount: 85
    },
    {
        index: 4,
        amount: 90
    },
    {
        index: 3,
        amount: 95
    },
    {
        index: 2,
        amount: 97
    },
    {
        index: 1,
        amount: 98
    }
];
function getHue(hsv, i, light) {
    var hue;
    hue = Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240 ? light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i : light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    if (hue < 0) hue += 360;
    else if (hue >= 360) hue -= 360;
    return hue;
}
function getSaturation(hsv, i, light) {
    if (0 === hsv.h && 0 === hsv.s) return hsv.s;
    var saturation;
    saturation = light ? hsv.s - saturationStep * i : i === darkColorCount ? hsv.s + saturationStep : hsv.s + saturationStep2 * i;
    if (saturation > 1) saturation = 1;
    if (light && i === lightColorCount && saturation > 0.1) saturation = 0.1;
    if (saturation < 0.06) saturation = 0.06;
    return Math.round(100 * saturation) / 100;
}
function generate_getValue(hsv, i, light) {
    var value;
    value = light ? hsv.v + brightnessStep1 * i : hsv.v - brightnessStep2 * i;
    value = Math.max(0, Math.min(1, value));
    return Math.round(100 * value) / 100;
}
function generate(color) {
    var opts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var patterns = [];
    var pColor = new FastColor(color);
    var hsv = pColor.toHsv();
    for(var i = lightColorCount; i > 0; i -= 1){
        var c = new FastColor({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: generate_getValue(hsv, i, true)
        });
        patterns.push(c);
    }
    patterns.push(pColor);
    for(var _i = 1; _i <= darkColorCount; _i += 1){
        var _c = new FastColor({
            h: getHue(hsv, _i),
            s: getSaturation(hsv, _i),
            v: generate_getValue(hsv, _i)
        });
        patterns.push(_c);
    }
    if ('dark' === opts.theme) return darkColorMap.map(function(_ref) {
        var index = _ref.index, amount = _ref.amount;
        return new FastColor(opts.backgroundColor || '#141414').mix(patterns[index], amount).toHexString();
    });
    return patterns.map(function(c) {
        return c.toHexString();
    });
}
var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
};
var red = [
    "#fff1f0",
    "#ffccc7",
    "#ffa39e",
    "#ff7875",
    "#ff4d4f",
    "#f5222d",
    "#cf1322",
    "#a8071a",
    "#820014",
    "#5c0011"
];
red.primary = red[5];
var volcano = [
    "#fff2e8",
    "#ffd8bf",
    "#ffbb96",
    "#ff9c6e",
    "#ff7a45",
    "#fa541c",
    "#d4380d",
    "#ad2102",
    "#871400",
    "#610b00"
];
volcano.primary = volcano[5];
var orange = [
    "#fff7e6",
    "#ffe7ba",
    "#ffd591",
    "#ffc069",
    "#ffa940",
    "#fa8c16",
    "#d46b08",
    "#ad4e00",
    "#873800",
    "#612500"
];
orange.primary = orange[5];
var gold = [
    "#fffbe6",
    "#fff1b8",
    "#ffe58f",
    "#ffd666",
    "#ffc53d",
    "#faad14",
    "#d48806",
    "#ad6800",
    "#874d00",
    "#613400"
];
gold.primary = gold[5];
var yellow = [
    "#feffe6",
    "#ffffb8",
    "#fffb8f",
    "#fff566",
    "#ffec3d",
    "#fadb14",
    "#d4b106",
    "#ad8b00",
    "#876800",
    "#614700"
];
yellow.primary = yellow[5];
var lime = [
    "#fcffe6",
    "#f4ffb8",
    "#eaff8f",
    "#d3f261",
    "#bae637",
    "#a0d911",
    "#7cb305",
    "#5b8c00",
    "#3f6600",
    "#254000"
];
lime.primary = lime[5];
var green = [
    "#f6ffed",
    "#d9f7be",
    "#b7eb8f",
    "#95de64",
    "#73d13d",
    "#52c41a",
    "#389e0d",
    "#237804",
    "#135200",
    "#092b00"
];
green.primary = green[5];
var cyan = [
    "#e6fffb",
    "#b5f5ec",
    "#87e8de",
    "#5cdbd3",
    "#36cfc9",
    "#13c2c2",
    "#08979c",
    "#006d75",
    "#00474f",
    "#002329"
];
cyan.primary = cyan[5];
var blue = [
    "#e6f4ff",
    "#bae0ff",
    "#91caff",
    "#69b1ff",
    "#4096ff",
    "#1677ff",
    "#0958d9",
    "#003eb3",
    "#002c8c",
    "#001d66"
];
blue.primary = blue[5];
var geekblue = [
    "#f0f5ff",
    "#d6e4ff",
    "#adc6ff",
    "#85a5ff",
    "#597ef7",
    "#2f54eb",
    "#1d39c4",
    "#10239e",
    "#061178",
    "#030852"
];
geekblue.primary = geekblue[5];
var purple = [
    "#f9f0ff",
    "#efdbff",
    "#d3adf7",
    "#b37feb",
    "#9254de",
    "#722ed1",
    "#531dab",
    "#391085",
    "#22075e",
    "#120338"
];
purple.primary = purple[5];
var magenta = [
    "#fff0f6",
    "#ffd6e7",
    "#ffadd2",
    "#ff85c0",
    "#f759ab",
    "#eb2f96",
    "#c41d7f",
    "#9e1068",
    "#780650",
    "#520339"
];
magenta.primary = magenta[5];
var grey = [
    "#a6a6a6",
    "#999999",
    "#8c8c8c",
    "#808080",
    "#737373",
    "#666666",
    "#404040",
    "#1a1a1a",
    "#000000",
    "#000000"
];
grey.primary = grey[5];
var presetPalettes = {
    red: red,
    volcano: volcano,
    orange: orange,
    gold: gold,
    yellow: yellow,
    lime: lime,
    green: green,
    cyan: cyan,
    blue: blue,
    geekblue: geekblue,
    purple: purple,
    magenta: magenta,
    grey: grey
};
var redDark = [
    "#2a1215",
    "#431418",
    "#58181c",
    "#791a1f",
    "#a61d24",
    "#d32029",
    "#e84749",
    "#f37370",
    "#f89f9a",
    "#fac8c3"
];
redDark.primary = redDark[5];
var volcanoDark = [
    "#2b1611",
    "#441d12",
    "#592716",
    "#7c3118",
    "#aa3e19",
    "#d84a1b",
    "#e87040",
    "#f3956a",
    "#f8b692",
    "#fad4bc"
];
volcanoDark.primary = volcanoDark[5];
var orangeDark = [
    "#2b1d11",
    "#442a11",
    "#593815",
    "#7c4a15",
    "#aa6215",
    "#d87a16",
    "#e89a3c",
    "#f3b765",
    "#f8cf8d",
    "#fae3b7"
];
orangeDark.primary = orangeDark[5];
var goldDark = [
    "#2b2111",
    "#443111",
    "#594214",
    "#7c5914",
    "#aa7714",
    "#d89614",
    "#e8b339",
    "#f3cc62",
    "#f8df8b",
    "#faedb5"
];
goldDark.primary = goldDark[5];
var yellowDark = [
    "#2b2611",
    "#443b11",
    "#595014",
    "#7c6e14",
    "#aa9514",
    "#d8bd14",
    "#e8d639",
    "#f3ea62",
    "#f8f48b",
    "#fafab5"
];
yellowDark.primary = yellowDark[5];
var limeDark = [
    "#1f2611",
    "#2e3c10",
    "#3e4f13",
    "#536d13",
    "#6f9412",
    "#8bbb11",
    "#a9d134",
    "#c9e75d",
    "#e4f88b",
    "#f0fab5"
];
limeDark.primary = limeDark[5];
var greenDark = [
    "#162312",
    "#1d3712",
    "#274916",
    "#306317",
    "#3c8618",
    "#49aa19",
    "#6abe39",
    "#8fd460",
    "#b2e58b",
    "#d5f2bb"
];
greenDark.primary = greenDark[5];
var cyanDark = [
    "#112123",
    "#113536",
    "#144848",
    "#146262",
    "#138585",
    "#13a8a8",
    "#33bcb7",
    "#58d1c9",
    "#84e2d8",
    "#b2f1e8"
];
cyanDark.primary = cyanDark[5];
var blueDark = [
    "#111a2c",
    "#112545",
    "#15325b",
    "#15417e",
    "#1554ad",
    "#1668dc",
    "#3c89e8",
    "#65a9f3",
    "#8dc5f8",
    "#b7dcfa"
];
blueDark.primary = blueDark[5];
var geekblueDark = [
    "#131629",
    "#161d40",
    "#1c2755",
    "#203175",
    "#263ea0",
    "#2b4acb",
    "#5273e0",
    "#7f9ef3",
    "#a8c1f8",
    "#d2e0fa"
];
geekblueDark.primary = geekblueDark[5];
var purpleDark = [
    "#1a1325",
    "#24163a",
    "#301c4d",
    "#3e2069",
    "#51258f",
    "#642ab5",
    "#854eca",
    "#ab7ae0",
    "#cda8f0",
    "#ebd7fa"
];
purpleDark.primary = purpleDark[5];
var magentaDark = [
    "#291321",
    "#40162f",
    "#551c3b",
    "#75204f",
    "#a02669",
    "#cb2b83",
    "#e0529c",
    "#f37fb7",
    "#f8a8cc",
    "#fad2e3"
];
magentaDark.primary = magentaDark[5];
var greyDark = [
    "#151515",
    "#1f1f1f",
    "#2d2d2d",
    "#393939",
    "#494949",
    "#5a5a5a",
    "#6a6a6a",
    "#7b7b7b",
    "#888888",
    "#969696"
];
greyDark.primary = greyDark[5];
var IconContext = /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.createContext)({});
const components_Context = IconContext;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function objectSpread2_objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            defineProperty_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function canUseDom_canUseDom() {
    return !!('undefined' != typeof window && window.document && window.document.createElement);
}
function contains(root, n) {
    if (!root) return false;
    if (root.contains) return root.contains(n);
    var node = n;
    while(node){
        if (node === root) return true;
        node = node.parentNode;
    }
    return false;
}
var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, mark = _ref.mark;
    if (mark) return mark.startsWith('data-') ? mark : "data-".concat(mark);
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) return option.attachTo;
    var head = document.querySelector('head');
    return head || document.body;
}
function getOrder(prepend) {
    if ('queue' === prepend) return 'prependQueue';
    return prepend ? 'prepend' : 'append';
}
function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node) {
        return 'STYLE' === node.tagName;
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!canUseDom_canUseDom()) return null;
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = void 0 === _option$priority ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = 'prependQueue' === mergedOrder;
    var styleNode = document.createElement('style');
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    if (null != csp && csp.nonce) styleNode.nonce = null == csp ? void 0 : csp.nonce;
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        if (isPrependQueue) {
            var existStyle = (option.styles || findStyles(container)).filter(function(node) {
                if (![
                    'prepend',
                    'prependQueue'
                ].includes(node.getAttribute(APPEND_ORDER))) return false;
                var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
                return priority >= nodePriority;
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }
        container.insertBefore(styleNode, firstChild);
    } else container.appendChild(styleNode);
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node) {
        return node.getAttribute(getMark(option)) === key;
    });
}
function dynamicCSS_removeCSS(key) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
        var container = getContainer(option);
        container.removeChild(existNode);
    }
}
function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS('', option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function dynamicCSS_updateCSS(css, key) {
    var originOption = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, originOption), {}, {
        styles: styles
    });
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if (null != (_option$csp = option.csp) && _option$csp.nonce && existNode.nonce !== (null == (_option$csp2 = option.csp) ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = null == (_option$csp3 = option.csp) ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) existNode.innerHTML = css;
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}
function getRoot(ele) {
    var _ele$getRootNode;
    return null == ele || null == (_ele$getRootNode = ele.getRootNode) ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}
var warned = {};
var preWarningFns = [];
var warning_preMessage = function(fn) {
    preWarningFns.push(fn);
};
function warning_warning(valid, message) {
    if ('production' !== process.env.NODE_ENV && !valid && void 0 !== console) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(null != msg ? msg : '', 'warning');
        }, message);
        if (finalMessage) console.error("Warning: ".concat(finalMessage));
    }
}
function note(valid, message) {
    if ('production' !== process.env.NODE_ENV && !valid && void 0 !== console) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(null != msg ? msg : '', 'note');
        }, message);
        if (finalMessage) console.warn("Note: ".concat(finalMessage));
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}
function warningOnce(valid, message) {
    call(warning_warning, valid, message);
}
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = warning_preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
const es_warning = warningOnce;
function camelCase(input) {
    return input.replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
}
function utils_warning(valid, message) {
    es_warning(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return 'object' === typeof_typeof(target) && 'string' == typeof target.name && 'string' == typeof target.theme && ('object' === typeof_typeof(target.icon) || 'function' == typeof target.icon);
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function utils_generate(node, key, rootProps) {
    if (!rootProps) return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(node.tag, objectSpread2_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
        return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(node.tag, objectSpread2_objectSpread2(objectSpread2_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
        return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) return [];
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var utils_useInsertStyles = function(eleRef) {
    var _useContext = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(components_Context), csp = _useContext.csp, prefixCls = _useContext.prefixCls, layer = _useContext.layer;
    var mergedStyleStr = iconStyles;
    if (prefixCls) mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    if (layer) mergedStyleStr = "@layer ".concat(layer, " {\n").concat(mergedStyleStr, "\n}");
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useEffect)(function() {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        dynamicCSS_updateCSS(mergedStyleStr, '@ant-design-icons', {
            prepend: !layer,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};
var _excluded = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor"
];
var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return objectSpread2_objectSpread2({}, twoToneColorPalette);
}
var IconBase_IconBase = function(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = objectWithoutProperties_objectWithoutProperties(props, _excluded);
    var svgRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) colors = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
    utils_useInsertStyles(svgRef);
    utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) return null;
    var target = icon;
    if (target && 'function' == typeof target.icon) target = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
    return utils_generate(target.icon, "svg-".concat(target.name), objectSpread2_objectSpread2(objectSpread2_objectSpread2({
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase_IconBase.displayName = 'IconReact';
IconBase_IconBase.getTwoToneColors = getTwoToneColors;
IconBase_IconBase.setTwoToneColors = setTwoToneColors;
const components_IconBase = IconBase_IconBase;
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = slicedToArray_slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return components_IconBase.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = components_IconBase.getTwoToneColors();
    if (!colors.calculated) return colors.primaryColor;
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}
'use client';
var AntdIcon_excluded = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor"
];
setTwoToneColor(blue.primary);
var Icon = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = objectWithoutProperties_objectWithoutProperties(props, AntdIcon_excluded);
    var _React$useContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(components_Context), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = void 0 === _React$useContext$pre ? 'anticon' : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = classnames_default()(rootClassName, prefixCls, defineProperty_defineProperty(defineProperty_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || 'loading' === icon.name), className);
    var iconTabIndex = tabIndex;
    if (void 0 === iconTabIndex && onClick) iconTabIndex = -1;
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = slicedToArray_slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(components_IconBase, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const AntdIcon = Icon;
var icons_RightOutlined_RightOutlined = function(props, ref) {
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(AntdIcon, _extends({}, props, {
        ref: ref,
        icon: asn_RightOutlined
    }));
};
var RefIcon = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(icons_RightOutlined_RightOutlined);
if ('production' !== process.env.NODE_ENV) RefIcon.displayName = 'RightOutlined';
const icons_RightOutlined = RefIcon;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function useEvent(callback) {
    var fnRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
    fnRef.current = callback;
    var memoFn = __WEBPACK_EXTERNAL_MODULE_react__.useCallback(function() {
        var _fnRef$current;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return null == (_fnRef$current = fnRef.current) ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
            fnRef
        ].concat(args));
    }, []);
    return memoFn;
}
var useInternalLayoutEffect = 'test' !== process.env.NODE_ENV && canUseDom_canUseDom() ? __WEBPACK_EXTERNAL_MODULE_react__.useLayoutEffect : __WEBPACK_EXTERNAL_MODULE_react__.useEffect;
var useLayoutEffect_useLayoutEffect = function(callback, deps) {
    var firstMountRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(true);
    useInternalLayoutEffect(function() {
        return callback(firstMountRef.current);
    }, deps);
    useInternalLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
            firstMountRef.current = true;
        };
    }, []);
};
var useLayoutEffect_useLayoutUpdateEffect = function(callback, deps) {
    useLayoutEffect_useLayoutEffect(function(firstMount) {
        if (!firstMount) return callback();
    }, deps);
};
const hooks_useLayoutEffect = useLayoutEffect_useLayoutEffect;
function useSafeState(defaultValue) {
    var destroyRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(false);
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(defaultValue), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) return;
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}
function hasValue(value) {
    return void 0 !== value;
}
function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    var _useState = useSafeState(function() {
        if (hasValue(value)) return value;
        if (hasValue(defaultValue)) return 'function' == typeof defaultValue ? defaultValue() : defaultValue;
        return 'function' == typeof defaultStateValue ? defaultStateValue() : defaultStateValue;
    }), _useState2 = slicedToArray_slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = void 0 !== value ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([
        mergedValue
    ]), _useState4 = slicedToArray_slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutEffect_useLayoutUpdateEffect(function() {
        var prev = prevValue[0];
        if (innerValue !== prev) onChangeFn(innerValue, prev);
    }, [
        prevValue
    ]);
    useLayoutEffect_useLayoutUpdateEffect(function() {
        if (!hasValue(value)) setInnerValue(value);
    }, [
        value
    ]);
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([
            mergedValue
        ], ignoreDestroy);
    });
    return [
        postMergedValue,
        triggerChange
    ];
}
var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
function isFragment(object) {
    return object && 'object' === typeof_typeof(object) && (object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && object.type === REACT_FRAGMENT_TYPE;
}
function toArray(children) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var ret = [];
    __WEBPACK_EXTERNAL_MODULE_react__["default"].Children.forEach(children, function(child) {
        if (null == child && !option.keepEmpty) return;
        if (Array.isArray(child)) ret = ret.concat(toArray(child));
        else if (isFragment(child) && child.props) ret = ret.concat(toArray(child.props.children, option));
        else ret.push(child);
    });
    return ret;
}
function isDOM(node) {
    return node instanceof HTMLElement || node instanceof SVGElement;
}
function getDOM(node) {
    if (node && 'object' === typeof_typeof(node) && isDOM(node.nativeElement)) return node.nativeElement;
    if (isDOM(node)) return node;
    return null;
}
function findDOMNode(node) {
    var domNode = getDOM(node);
    if (domNode) return domNode;
    if (node instanceof __WEBPACK_EXTERNAL_MODULE_react__["default"].Component) {
        var _ReactDOM$findDOMNode;
        return null == (_ReactDOM$findDOMNode = __WEBPACK_EXTERNAL_MODULE_react_dom_7136dc57__["default"].findDOMNode) ? void 0 : _ReactDOM$findDOMNode.call(__WEBPACK_EXTERNAL_MODULE_react_dom_7136dc57__["default"], node);
    }
    return null;
}
var react_is = __webpack_require__("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");
function useMemo_useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({});
    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}
var ReactMajorVersion = Number(__WEBPACK_EXTERNAL_MODULE_react__.version.split('.')[0]);
var ref_fillRef = function(ref, node) {
    if ('function' == typeof ref) ref(node);
    else if ('object' === typeof_typeof(ref) && ref && 'current' in ref) ref.current = node;
};
var ref_composeRef = function() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++)refs[_key] = arguments[_key];
    var refList = refs.filter(Boolean);
    if (refList.length <= 1) return refList[0];
    return function(node) {
        refs.forEach(function(ref) {
            ref_fillRef(ref, node);
        });
    };
};
var ref_supportRef = function(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    if (!nodeOrComponent) return false;
    if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) return true;
    var type = (0, react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    if ('function' == typeof type && !(null != (_type$prototype = type.prototype) && _type$prototype.render) && type.$$typeof !== react_is.ForwardRef) return false;
    if ('function' == typeof nodeOrComponent && !(null != (_nodeOrComponent$prot = nodeOrComponent.prototype) && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== react_is.ForwardRef) return false;
    return true;
};
function isReactElement(node) {
    return /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.isValidElement)(node) && !isFragment(node);
}
var ref_getNodeRef = function(node) {
    if (node && isReactElement(node)) {
        var ele = node;
        return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
    }
    return null;
};
var context_excluded = [
    "children"
];
var context_Context = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({});
function MotionProvider(_ref) {
    var children = _ref.children, props = objectWithoutProperties_objectWithoutProperties(_ref, context_excluded);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(context_Context.Provider, {
        value: props
    }, children);
}
function classCallCheck_classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function createClass_createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function inherits_inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function isNativeReflectConstruct_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (isNativeReflectConstruct_isNativeReflectConstruct = function() {
        return !!t;
    })();
}
function assertThisInitialized_assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof_typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized_assertThisInitialized(t);
}
function createSuper_createSuper(t) {
    var r = isNativeReflectConstruct_isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
var DomWrapper_DomWrapper = /*#__PURE__*/ function(_React$Component) {
    inherits_inherits(DomWrapper, _React$Component);
    var _super = createSuper_createSuper(DomWrapper);
    function DomWrapper() {
        classCallCheck_classCallCheck(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    createClass_createClass(DomWrapper, [
        {
            key: "render",
            value: function() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(__WEBPACK_EXTERNAL_MODULE_react__.Component);
const es_DomWrapper = DomWrapper_DomWrapper;
function get_get(entity, path) {
    var current = entity;
    for(var i = 0; i < path.length; i += 1){
        if (null == current) return;
        current = current[path[i]];
    }
    return current;
}
function _toArray(r) {
    return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) return value;
    var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    clone = entity || 'number' != typeof path ? Array.isArray(entity) ? _toConsumableArray(entity) : objectSpread2_objectSpread2({}, entity) : [];
    if (removeIfUndefined && void 0 === value && 1 === restPath.length) delete clone[path][restPath[0]];
    else clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    return clone;
}
function set_set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : false;
    if (paths.length && removeIfUndefined && void 0 === value && !get_get(entity, paths.slice(0, -1))) return entity;
    return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
    return 'object' === typeof_typeof(obj) && null !== obj && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
}
var set_keys = 'undefined' == typeof Reflect ? Object.keys : Reflect.ownKeys;
function merge() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
        function internalMerge(path, parentLoopSet) {
            var loopSet = new Set(parentLoopSet);
            var value = get_get(src, path);
            var isArr = Array.isArray(value);
            if (isArr || isObject(value)) {
                if (!loopSet.has(value)) {
                    loopSet.add(value);
                    var originValue = get_get(clone, path);
                    if (isArr) clone = set_set(clone, path, []);
                    else if (!originValue || 'object' !== typeof_typeof(originValue)) clone = set_set(clone, path, createEmpty(value));
                    set_keys(value).forEach(function(key) {
                        internalMerge([].concat(_toConsumableArray(path), [
                            key
                        ]), loopSet);
                    });
                }
            } else clone = set_set(clone, path, value);
        }
        internalMerge([]);
    });
    return clone;
}
function useSyncState(defaultValue) {
    var _React$useReducer = __WEBPACK_EXTERNAL_MODULE_react__.useReducer(function(x) {
        return x + 1;
    }, 0), _React$useReducer2 = slicedToArray_slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
    var currentValueRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(defaultValue);
    var getValue = useEvent(function() {
        return currentValueRef.current;
    });
    var setValue = useEvent(function(updater) {
        currentValueRef.current = 'function' == typeof updater ? updater(currentValueRef.current) : updater;
        forceUpdate();
    });
    return [
        getValue,
        setValue
    ];
}
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
var STEP_PREPARED = 'prepared';
function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
}
function getVendorPrefixes(domSupport, win) {
    var prefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd')
    };
    if (domSupport) {
        if (!('AnimationEvent' in win)) delete prefixes.animationend.animation;
        if (!('TransitionEvent' in win)) delete prefixes.transitionend.transition;
    }
    return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom_canUseDom(), 'undefined' != typeof window ? window : {});
var motion_style = {};
if (canUseDom_canUseDom()) {
    var _document$createEleme = document.createElement('div');
    motion_style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for(var i = 0; i < len; i += 1){
            var styleProp = stylePropList[i];
            if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in motion_style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
            }
        }
    }
    return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
    if (!transitionName) return null;
    if ('object' === typeof_typeof(transitionName)) {
        var type = transitionType.replace(/-\w/g, function(match) {
            return match[1].toUpperCase();
        });
        return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
}
const useDomMotionEvents = function(onInternalMotionEnd) {
    var cacheElementRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)();
    function removeMotionEvents(element) {
        if (element) {
            element.removeEventListener(transitionEndName, onInternalMotionEnd);
            element.removeEventListener(animationEndName, onInternalMotionEnd);
        }
    }
    function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) removeMotionEvents(cacheElementRef.current);
        if (element && element !== cacheElementRef.current) {
            element.addEventListener(transitionEndName, onInternalMotionEnd);
            element.addEventListener(animationEndName, onInternalMotionEnd);
            cacheElementRef.current = element;
        }
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        return function() {
            removeMotionEvents(cacheElementRef.current);
        };
    }, []);
    return [
        patchMotionEvents,
        removeMotionEvents
    ];
};
var useIsomorphicLayoutEffect_useIsomorphicLayoutEffect = canUseDom_canUseDom() ? __WEBPACK_EXTERNAL_MODULE_react__.useLayoutEffect : __WEBPACK_EXTERNAL_MODULE_react__.useEffect;
const useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_useIsomorphicLayoutEffect;
var raf_raf = function(callback) {
    return +setTimeout(callback, 16);
};
var raf_caf = function(num) {
    return clearTimeout(num);
};
if ('undefined' != typeof window && 'requestAnimationFrame' in window) {
    raf_raf = function(callback) {
        return window.requestAnimationFrame(callback);
    };
    raf_caf = function(handle) {
        return window.cancelAnimationFrame(handle);
    };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
    rafIds.delete(id);
}
var raf_wrapperRaf = function(callback) {
    var times = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
        if (0 === leftTimes) {
            cleanup(id);
            callback();
        } else {
            var realId = raf_raf(function() {
                callRef(leftTimes - 1);
            });
            rafIds.set(id, realId);
        }
    }
    callRef(times);
    return id;
};
raf_wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return raf_caf(realId);
};
if ('production' !== process.env.NODE_ENV) raf_wrapperRaf.ids = function() {
    return rafIds;
};
const es_raf = raf_wrapperRaf;
const useNextFrame = function() {
    var nextFrameRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    function cancelNextFrame() {
        es_raf.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
        var delay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = es_raf(function() {
            if (delay <= 1) callback({
                isCanceled: function() {
                    return nextFrameId !== nextFrameRef.current;
                }
            });
            else nextFrame(callback, delay - 1);
        });
        nextFrameRef.current = nextFrameId;
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        nextFrame,
        cancelNextFrame
    ];
};
var FULL_STEP_QUEUE = [
    STEP_PREPARE,
    STEP_START,
    STEP_ACTIVE,
    STEP_ACTIVATED
];
var SIMPLE_STEP_QUEUE = [
    STEP_PREPARE,
    STEP_PREPARED
];
var SkipStep = false;
var DoStep = true;
function useStepQueue_isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
const useStepQueue = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = slicedToArray_slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame(), _useNextFrame2 = slicedToArray_slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    useIsomorphicLayoutEffect(function() {
        if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
            var index = STEP_QUEUE.indexOf(step);
            var nextStep = STEP_QUEUE[index + 1];
            var result = callback(step);
            if (result === SkipStep) setStep(nextStep, true);
            else if (nextStep) nextFrame(function(info) {
                function doNext() {
                    if (info.isCanceled()) return;
                    setStep(nextStep, true);
                }
                if (true === result) doNext();
                else Promise.resolve(result).then(doNext);
            });
        }
    }, [
        status,
        step
    ]);
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        startQueue,
        step
    ];
};
function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = void 0 === _ref$motionEnter ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = void 0 === _ref$motionAppear ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = void 0 === _ref$motionLeave ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    var _useState = useSafeState(), _useState2 = slicedToArray_slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = slicedToArray_slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
    var _useState3 = useSafeState(null), _useState4 = slicedToArray_slicedToArray(_useState3, 2), style = _useState4[0], setStyle = _useState4[1];
    var currentStatus = getStatus();
    var mountedRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(false);
    var deadlineRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(null);
    function getDomElement() {
        return getElement();
    }
    var activeRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(false);
    function updateMotionEndStatus() {
        setStatus(STATUS_NONE);
        setStyle(null, true);
    }
    var onInternalMotionEnd = useEvent(function(event) {
        var status = getStatus();
        if (status === STATUS_NONE) return;
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) return;
        var currentActive = activeRef.current;
        var canEnd;
        if (status === STATUS_APPEAR && currentActive) canEnd = null == onAppearEnd ? void 0 : onAppearEnd(element, event);
        else if (status === STATUS_ENTER && currentActive) canEnd = null == onEnterEnd ? void 0 : onEnterEnd(element, event);
        else if (status === STATUS_LEAVE && currentActive) canEnd = null == onLeaveEnd ? void 0 : onLeaveEnd(element, event);
        if (currentActive && false !== canEnd) updateMotionEndStatus();
    });
    var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = slicedToArray_slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    var getEventHandlers = function(targetStatus) {
        switch(targetStatus){
            case STATUS_APPEAR:
                return defineProperty_defineProperty(defineProperty_defineProperty(defineProperty_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
            case STATUS_ENTER:
                return defineProperty_defineProperty(defineProperty_defineProperty(defineProperty_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
            case STATUS_LEAVE:
                return defineProperty_defineProperty(defineProperty_defineProperty(defineProperty_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
            default:
                return {};
        }
    };
    var eventHandlers = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        return getEventHandlers(currentStatus);
    }, [
        currentStatus
    ]);
    var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function(newStep) {
        if (newStep === STEP_PREPARE) {
            var onPrepare = eventHandlers[STEP_PREPARE];
            if (!onPrepare) return SkipStep;
            return onPrepare(getDomElement());
        }
        if (step in eventHandlers) {
            var _eventHandlers$step;
            setStyle((null == (_eventHandlers$step = eventHandlers[step]) ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
            patchMotionEvents(getDomElement());
            if (motionDeadline > 0) {
                clearTimeout(deadlineRef.current);
                deadlineRef.current = setTimeout(function() {
                    onInternalMotionEnd({
                        deadline: true
                    });
                }, motionDeadline);
            }
        }
        if (step === STEP_PREPARED) updateMotionEndStatus();
        return DoStep;
    }), _useStepQueue2 = slicedToArray_slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = useStepQueue_isActive(step);
    activeRef.current = active;
    var visibleRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(null);
    useIsomorphicLayoutEffect(function() {
        if (mountedRef.current && visibleRef.current === visible) return;
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        var nextStatus;
        if (!isMounted && visible && motionAppear) nextStatus = STATUS_APPEAR;
        if (isMounted && visible && motionEnter) nextStatus = STATUS_ENTER;
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) nextStatus = STATUS_LEAVE;
        var nextEventHandlers = getEventHandlers(nextStatus);
        if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
            setStatus(nextStatus);
            startStep();
        } else setStatus(STATUS_NONE);
        visibleRef.current = visible;
    }, [
        visible
    ]);
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useEffect)(function() {
        if (currentStatus === STATUS_APPEAR && !motionAppear || currentStatus === STATUS_ENTER && !motionEnter || currentStatus === STATUS_LEAVE && !motionLeave) setStatus(STATUS_NONE);
    }, [
        motionAppear,
        motionEnter,
        motionLeave
    ]);
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useEffect)(function() {
        return function() {
            mountedRef.current = false;
            clearTimeout(deadlineRef.current);
        };
    }, []);
    var firstMountChangeRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(false);
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useEffect)(function() {
        if (asyncVisible) firstMountChangeRef.current = true;
        if (void 0 !== asyncVisible && currentStatus === STATUS_NONE) {
            if (firstMountChangeRef.current || asyncVisible) null == onVisibleChanged || onVisibleChanged(asyncVisible);
            firstMountChangeRef.current = true;
        }
    }, [
        asyncVisible,
        currentStatus
    ]);
    var mergedStyle = style;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) mergedStyle = objectSpread2_objectSpread2({
        transition: 'none'
    }, mergedStyle);
    return [
        currentStatus,
        step,
        mergedStyle,
        null != asyncVisible ? asyncVisible : visible
    ];
}
function genCSSMotion(config) {
    var transitionSupport = config;
    if ('object' === typeof_typeof(config)) transitionSupport = config.transitionSupport;
    function isSupportTransition(props, contextMotion) {
        return !!(props.motionName && transitionSupport && false !== contextMotion);
    }
    var CSSMotion = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
        var _props$visible = props.visible, visible = void 0 === _props$visible ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = void 0 === _props$removeOnLeave ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var _React$useContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(context_Context), contextMotion = _React$useContext.motion;
        var supportMotion = isSupportTransition(props, contextMotion);
        var nodeRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)();
        var wrapperNodeRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)();
        function getDomElement() {
            try {
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
            } catch (e) {
                return null;
            }
        }
        var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = slicedToArray_slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
        var renderedRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(mergedVisible);
        if (mergedVisible) renderedRef.current = true;
        var setNodeRef = __WEBPACK_EXTERNAL_MODULE_react__.useCallback(function(node) {
            nodeRef.current = node;
            ref_fillRef(ref, node);
        }, [
            ref
        ]);
        var motionChildren;
        var mergedProps = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, eventProps), {}, {
            visible: visible
        });
        if (children) if (status === STATUS_NONE) motionChildren = mergedVisible ? children(objectSpread2_objectSpread2({}, mergedProps), setNodeRef) : !removeOnLeave && renderedRef.current && leavedClassName ? children(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedProps), {}, {
            className: leavedClassName
        }), setNodeRef) : !forceRender && (removeOnLeave || leavedClassName) ? null : children(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedProps), {}, {
            style: {
                display: 'none'
            }
        }), setNodeRef);
        else {
            var statusSuffix;
            if (statusStep === STEP_PREPARE) statusSuffix = 'prepare';
            else if (useStepQueue_isActive(statusStep)) statusSuffix = 'active';
            else if (statusStep === STEP_START) statusSuffix = 'start';
            var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
            motionChildren = children(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedProps), {}, {
                className: classnames_default()(getTransitionName(motionName, status), defineProperty_defineProperty(defineProperty_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, 'string' == typeof motionName)),
                style: statusStyle
            }), setNodeRef);
        }
        else motionChildren = null;
        if (/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(motionChildren) && ref_supportRef(motionChildren)) {
            var originNodeRef = ref_getNodeRef(motionChildren);
            if (!originNodeRef) motionChildren = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(motionChildren, {
                ref: setNodeRef
            });
        }
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_DomWrapper, {
            ref: wrapperNodeRef
        }, motionChildren);
    });
    CSSMotion.displayName = 'CSSMotion';
    return CSSMotion;
}
const es_CSSMotion = genCSSMotion(supportTransition);
var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
    var keyObj;
    keyObj = key && 'object' === typeof_typeof(key) && 'key' in key ? key : {
        key: key
    };
    return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, keyObj), {}, {
        key: String(keyObj.key)
    });
}
function parseKeys() {
    var keys = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return keys.map(wrapKeyToObject);
}
function diffKeys() {
    var prevKeys = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for(var i = currentIndex; i < currentLen; i += 1){
            var currentKeyObj = currentKeyObjects[i];
            if (currentKeyObj.key === keyObj.key) {
                if (currentIndex < i) {
                    list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, obj), {}, {
                            status: STATUS_ADD
                        });
                    }));
                    currentIndex = i;
                }
                list.push(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, currentKeyObj), {}, {
                    status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
            }
        }
        if (!hit) list.push(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, keyObj), {}, {
            status: STATUS_REMOVE
        }));
    });
    if (currentIndex < currentLen) list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, obj), {}, {
            status: STATUS_ADD
        });
    }));
    var keys = {};
    list.forEach(function(_ref) {
        var key = _ref.key;
        keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
        return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
        list = list.filter(function(_ref2) {
            var key = _ref2.key, status = _ref2.status;
            return key !== matchKey || status !== STATUS_REMOVE;
        });
        list.forEach(function(node) {
            if (node.key === matchKey) node.status = STATUS_KEEP;
        });
    });
    return list;
}
var CSSMotionList_excluded = [
    "component",
    "children",
    "onVisibleChanged",
    "onAllRemoved"
], _excluded2 = [
    "status"
];
var MOTION_PROP_NAMES = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd'
];
function genCSSMotionList(transitionSupport) {
    var CSSMotion = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es_CSSMotion;
    var CSSMotionList = /*#__PURE__*/ function(_React$Component) {
        inherits_inherits(CSSMotionList, _React$Component);
        var _super = createSuper_createSuper(CSSMotionList);
        function CSSMotionList() {
            var _this;
            classCallCheck_classCallCheck(this, CSSMotionList);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
                keyEntities: []
            });
            defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "removeKey", function(removeKey) {
                _this.setState(function(prevState) {
                    var nextKeyEntities = prevState.keyEntities.map(function(entity) {
                        if (entity.key !== removeKey) return entity;
                        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, entity), {}, {
                            status: STATUS_REMOVED
                        });
                    });
                    return {
                        keyEntities: nextKeyEntities
                    };
                }, function() {
                    var keyEntities = _this.state.keyEntities;
                    var restKeysCount = keyEntities.filter(function(_ref) {
                        var status = _ref.status;
                        return status !== STATUS_REMOVED;
                    }).length;
                    if (0 === restKeysCount && _this.props.onAllRemoved) _this.props.onAllRemoved();
                });
            });
            return _this;
        }
        createClass_createClass(CSSMotionList, [
            {
                key: "render",
                value: function() {
                    var _this2 = this;
                    var keyEntities = this.state.keyEntities;
                    var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, restProps = (_this$props.onAllRemoved, objectWithoutProperties_objectWithoutProperties(_this$props, CSSMotionList_excluded));
                    var Component = component || __WEBPACK_EXTERNAL_MODULE_react__.Fragment;
                    var motionProps = {};
                    MOTION_PROP_NAMES.forEach(function(prop) {
                        motionProps[prop] = restProps[prop];
                        delete restProps[prop];
                    });
                    delete restProps.keys;
                    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Component, restProps, keyEntities.map(function(_ref2, index) {
                        var status = _ref2.status, eventProps = objectWithoutProperties_objectWithoutProperties(_ref2, _excluded2);
                        var visible = status === STATUS_ADD || status === STATUS_KEEP;
                        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(CSSMotion, _extends({}, motionProps, {
                            key: eventProps.key,
                            visible: visible,
                            eventProps: eventProps,
                            onVisibleChanged: function(changedVisible) {
                                null == _onVisibleChanged || _onVisibleChanged(changedVisible, {
                                    key: eventProps.key
                                });
                                if (!changedVisible) _this2.removeKey(eventProps.key);
                            }
                        }), function(props, ref) {
                            return children(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
                                index: index
                            }), ref);
                        });
                    }));
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function(_ref3, _ref4) {
                    var keys = _ref3.keys;
                    var keyEntities = _ref4.keyEntities;
                    var parsedKeyObjects = parseKeys(keys);
                    var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
                    return {
                        keyEntities: mixedKeyEntities.filter(function(entity) {
                            var prevEntity = keyEntities.find(function(_ref5) {
                                var key = _ref5.key;
                                return entity.key === key;
                            });
                            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) return false;
                            return true;
                        })
                    };
                }
            }
        ]);
        return CSSMotionList;
    }(__WEBPACK_EXTERNAL_MODULE_react__.Component);
    defineProperty_defineProperty(CSSMotionList, "defaultProps", {
        component: 'div'
    });
    return CSSMotionList;
}
genCSSMotionList(supportTransition);
const es = es_CSSMotion;
var KeyCode = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function(e) {
        var keyCode = e.keyCode;
        if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) return false;
        switch(keyCode){
            case KeyCode.ALT:
            case KeyCode.CAPS_LOCK:
            case KeyCode.CONTEXT_MENU:
            case KeyCode.CTRL:
            case KeyCode.DOWN:
            case KeyCode.END:
            case KeyCode.ESC:
            case KeyCode.HOME:
            case KeyCode.INSERT:
            case KeyCode.LEFT:
            case KeyCode.MAC_FF_META:
            case KeyCode.META:
            case KeyCode.NUMLOCK:
            case KeyCode.NUM_CENTER:
            case KeyCode.PAGE_DOWN:
            case KeyCode.PAGE_UP:
            case KeyCode.PAUSE:
            case KeyCode.PRINT_SCREEN:
            case KeyCode.RIGHT:
            case KeyCode.SHIFT:
            case KeyCode.UP:
            case KeyCode.WIN_KEY:
            case KeyCode.WIN_KEY_RIGHT:
                return false;
            default:
                return true;
        }
    },
    isCharacterKey: function(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) return true;
        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) return true;
        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) return true;
        if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === keyCode) return true;
        switch(keyCode){
            case KeyCode.SPACE:
            case KeyCode.QUESTION_MARK:
            case KeyCode.NUM_PLUS:
            case KeyCode.NUM_MINUS:
            case KeyCode.NUM_PERIOD:
            case KeyCode.NUM_DIVISION:
            case KeyCode.SEMICOLON:
            case KeyCode.DASH:
            case KeyCode.EQUALS:
            case KeyCode.COMMA:
            case KeyCode.PERIOD:
            case KeyCode.SLASH:
            case KeyCode.APOSTROPHE:
            case KeyCode.SINGLE_QUOTE:
            case KeyCode.OPEN_SQUARE_BRACKET:
            case KeyCode.BACKSLASH:
            case KeyCode.CLOSE_SQUARE_BRACKET:
                return true;
            default:
                return false;
        }
    }
};
const es_KeyCode = KeyCode;
var PanelContent = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, forceRender = props.forceRender, className = props.className, style = props.style, children = props.children, isActive = props.isActive, role = props.role, customizeClassNames = props.classNames, styles = props.styles;
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__["default"].useState(isActive || forceRender), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), rendered = _React$useState2[0], setRendered = _React$useState2[1];
    __WEBPACK_EXTERNAL_MODULE_react__["default"].useEffect(function() {
        if (forceRender || isActive) setRendered(true);
    }, [
        forceRender,
        isActive
    ]);
    if (!rendered) return null;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", {
        ref: ref,
        className: classnames_default()("".concat(prefixCls, "-content"), defineProperty_defineProperty(defineProperty_defineProperty({}, "".concat(prefixCls, "-content-active"), isActive), "".concat(prefixCls, "-content-inactive"), !isActive), className),
        style: style,
        role: role
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", {
        className: classnames_default()("".concat(prefixCls, "-content-box"), null == customizeClassNames ? void 0 : customizeClassNames.body),
        style: null == styles ? void 0 : styles.body
    }, children));
});
PanelContent.displayName = 'PanelContent';
const es_PanelContent = PanelContent;
var Panel_excluded = [
    "showArrow",
    "headerClass",
    "isActive",
    "onItemClick",
    "forceRender",
    "className",
    "classNames",
    "styles",
    "prefixCls",
    "collapsible",
    "accordion",
    "panelKey",
    "extra",
    "header",
    "expandIcon",
    "openMotion",
    "destroyInactivePanel",
    "children"
];
var CollapsePanel = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].forwardRef(function(props, ref) {
    var _props$showArrow = props.showArrow, showArrow = void 0 === _props$showArrow ? true : _props$showArrow, headerClass = props.headerClass, isActive = props.isActive, onItemClick = props.onItemClick, forceRender = props.forceRender, className = props.className, _props$classNames = props.classNames, customizeClassNames = void 0 === _props$classNames ? {} : _props$classNames, _props$styles = props.styles, styles = void 0 === _props$styles ? {} : _props$styles, prefixCls = props.prefixCls, collapsible = props.collapsible, accordion = props.accordion, panelKey = props.panelKey, extra = props.extra, header = props.header, expandIcon = props.expandIcon, openMotion = props.openMotion, destroyInactivePanel = props.destroyInactivePanel, children = props.children, resetProps = objectWithoutProperties_objectWithoutProperties(props, Panel_excluded);
    var disabled = 'disabled' === collapsible;
    var ifExtraExist = null != extra && 'boolean' != typeof extra;
    var collapsibleProps = defineProperty_defineProperty(defineProperty_defineProperty(defineProperty_defineProperty({
        onClick: function() {
            null == onItemClick || onItemClick(panelKey);
        },
        onKeyDown: function(e) {
            if ('Enter' === e.key || e.keyCode === es_KeyCode.ENTER || e.which === es_KeyCode.ENTER) null == onItemClick || onItemClick(panelKey);
        },
        role: accordion ? 'tab' : 'button'
    }, 'aria-expanded', isActive), 'aria-disabled', disabled), "tabIndex", disabled ? -1 : 0);
    var iconNodeInner = 'function' == typeof expandIcon ? expandIcon(props) : /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("i", {
        className: "arrow"
    });
    var iconNode = iconNodeInner && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", _extends({
        className: "".concat(prefixCls, "-expand-icon")
    }, [
        'header',
        'icon'
    ].includes(collapsible) ? collapsibleProps : {}), iconNodeInner);
    var collapsePanelClassNames = classnames_default()("".concat(prefixCls, "-item"), defineProperty_defineProperty(defineProperty_defineProperty({}, "".concat(prefixCls, "-item-active"), isActive), "".concat(prefixCls, "-item-disabled"), disabled), className);
    var headerClassName = classnames_default()(headerClass, "".concat(prefixCls, "-header"), defineProperty_defineProperty({}, "".concat(prefixCls, "-collapsible-").concat(collapsible), !!collapsible), customizeClassNames.header);
    var headerProps = objectSpread2_objectSpread2({
        className: headerClassName,
        style: styles.header
    }, [
        'header',
        'icon'
    ].includes(collapsible) ? {} : collapsibleProps);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", _extends({}, resetProps, {
        ref: ref,
        className: collapsePanelClassNames
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", headerProps, showArrow && iconNode, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("span", _extends({
        className: "".concat(prefixCls, "-header-text")
    }, 'header' === collapsible ? collapsibleProps : {}), header), ifExtraExist && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", {
        className: "".concat(prefixCls, "-extra")
    }, extra)), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(es, _extends({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
    }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
    }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(es_PanelContent, {
            ref: motionRef,
            prefixCls: prefixCls,
            className: motionClassName,
            classNames: customizeClassNames,
            style: motionStyle,
            styles: styles,
            isActive: isActive,
            forceRender: forceRender,
            role: accordion ? 'tabpanel' : void 0
        }, children);
    }));
});
const Panel = CollapsePanel;
var useItems_excluded = [
    "children",
    "label",
    "key",
    "collapsible",
    "onItemClick",
    "destroyInactivePanel"
];
var useItems_convertItemsToNodes = function(items, props) {
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    return items.map(function(item, index) {
        var children = item.children, label = item.label, rawKey = item.key, rawCollapsible = item.collapsible, rawOnItemClick = item.onItemClick, rawDestroyInactivePanel = item.destroyInactivePanel, restProps = objectWithoutProperties_objectWithoutProperties(item, useItems_excluded);
        var key = String(null != rawKey ? rawKey : index);
        var mergeCollapsible = null != rawCollapsible ? rawCollapsible : collapsible;
        var mergeDestroyInactivePanel = null != rawDestroyInactivePanel ? rawDestroyInactivePanel : destroyInactivePanel;
        var handleItemClick = function(value) {
            if ('disabled' === mergeCollapsible) return;
            onItemClick(value);
            null == rawOnItemClick || rawOnItemClick(value);
        };
        var isActive = false;
        isActive = accordion ? activeKey[0] === key : activeKey.indexOf(key) > -1;
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(Panel, _extends({}, restProps, {
            prefixCls: prefixCls,
            key: key,
            panelKey: key,
            isActive: isActive,
            accordion: accordion,
            openMotion: openMotion,
            expandIcon: expandIcon,
            header: label,
            collapsible: mergeCollapsible,
            onItemClick: handleItemClick,
            destroyInactivePanel: mergeDestroyInactivePanel
        }), children);
    });
};
var useItems_getNewChild = function(child, index, props) {
    if (!child) return null;
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    var key = child.key || String(index);
    var _child$props = child.props, header = _child$props.header, headerClass = _child$props.headerClass, childDestroyInactivePanel = _child$props.destroyInactivePanel, childCollapsible = _child$props.collapsible, childOnItemClick = _child$props.onItemClick;
    var isActive = false;
    isActive = accordion ? activeKey[0] === key : activeKey.indexOf(key) > -1;
    var mergeCollapsible = null != childCollapsible ? childCollapsible : collapsible;
    var handleItemClick = function(value) {
        if ('disabled' === mergeCollapsible) return;
        onItemClick(value);
        null == childOnItemClick || childOnItemClick(value);
    };
    var childProps = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: null != childDestroyInactivePanel ? childDestroyInactivePanel : destroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: handleItemClick,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible
    };
    if ('string' == typeof child.type) return child;
    Object.keys(childProps).forEach(function(propName) {
        if (void 0 === childProps[propName]) delete childProps[propName];
    });
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].cloneElement(child, childProps);
};
function useItems_useItems(items, rawChildren, props) {
    if (Array.isArray(items)) return useItems_convertItemsToNodes(items, props);
    return toArray(rawChildren).map(function(child, index) {
        return useItems_getNewChild(child, index, props);
    });
}
const useItems = useItems_useItems;
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function pickAttrs_match(key, prefix) {
    return 0 === key.indexOf(prefix);
}
function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
    var mergedConfig;
    mergedConfig = false === ariaOnly ? {
        aria: true,
        data: true,
        attr: true
    } : true === ariaOnly ? {
        aria: true
    } : objectSpread2_objectSpread2({}, ariaOnly);
    var attrs = {};
    Object.keys(props).forEach(function(key) {
        if (mergedConfig.aria && ('role' === key || pickAttrs_match(key, ariaPrefix)) || mergedConfig.data && pickAttrs_match(key, dataPrefix) || mergedConfig.attr && propList.includes(key)) attrs[key] = props[key];
    });
    return attrs;
}
function getActiveKeysArray(activeKey) {
    var currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
        var activeKeyType = typeof_typeof(currentActiveKey);
        currentActiveKey = 'number' === activeKeyType || 'string' === activeKeyType ? [
            currentActiveKey
        ] : [];
    }
    return currentActiveKey.map(function(key) {
        return String(key);
    });
}
var Collapse_Collapse = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = void 0 === _props$prefixCls ? 'rc-collapse' : _props$prefixCls, _props$destroyInactiv = props.destroyInactivePanel, destroyInactivePanel = void 0 === _props$destroyInactiv ? false : _props$destroyInactiv, style = props.style, accordion = props.accordion, className = props.className, children = props.children, collapsible = props.collapsible, openMotion = props.openMotion, expandIcon = props.expandIcon, rawActiveKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, _onChange = props.onChange, items = props.items;
    var collapseClassName = classnames_default()(prefixCls, className);
    var _useMergedState = useMergedState([], {
        value: rawActiveKey,
        onChange: function(v) {
            return null == _onChange ? void 0 : _onChange(v);
        },
        defaultValue: defaultActiveKey,
        postState: getActiveKeysArray
    }), _useMergedState2 = slicedToArray_slicedToArray(_useMergedState, 2), activeKey = _useMergedState2[0], setActiveKey = _useMergedState2[1];
    var onItemClick = function(key) {
        return setActiveKey(function() {
            if (accordion) return activeKey[0] === key ? [] : [
                key
            ];
            var index = activeKey.indexOf(key);
            var isActive = index > -1;
            if (isActive) return activeKey.filter(function(item) {
                return item !== key;
            });
            return [].concat(_toConsumableArray(activeKey), [
                key
            ]);
        });
    };
    es_warning(!children, '[rc-collapse] `children` will be removed in next major version. Please use `items` instead.');
    var mergedChildren = useItems(items, children, {
        prefixCls: prefixCls,
        accordion: accordion,
        openMotion: openMotion,
        expandIcon: expandIcon,
        collapsible: collapsible,
        destroyInactivePanel: destroyInactivePanel,
        onItemClick: onItemClick,
        activeKey: activeKey
    });
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", _extends({
        ref: ref,
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : void 0
    }, pickAttrs(props, {
        aria: true,
        data: true
    })), mergedChildren);
});
const Collapse = Object.assign(Collapse_Collapse, {
    Panel: Panel
});
const rc_collapse_es = Collapse;
Collapse.Panel;
function omit(obj, fields) {
    var clone = Object.assign({}, obj);
    if (Array.isArray(fields)) fields.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
const defaultPrefixCls = 'ant';
const context_defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: context_defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const { getPrefixCls, direction, getPopupContainer } = context;
    const propValue = context[propName];
    return Object.assign(Object.assign({
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT
    }, propValue), {
        getPrefixCls,
        direction,
        getPopupContainer
    });
}
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>{
    const { scrollHeight } = node;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
const getCurrentHeight = (node)=>({
        height: node ? node.offsetHeight : 0
    });
const skipOpacityTransition = (_, event)=>(null == event ? void 0 : event.deadline) === true || 'height' === event.propertyName;
const initCollapseMotion = (rootCls = defaultPrefixCls)=>({
        motionName: `${rootCls}-motion-collapse`,
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    });
const _util_motion = initCollapseMotion;
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].isValidElement(element)) return replacement;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].cloneElement(element, 'function' == typeof props ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
function noop() {}
let deprecatedWarnList = null;
function warning_resetWarned() {
    deprecatedWarnList = null;
    resetWarned();
}
let _warning = noop;
if ('production' !== process.env.NODE_ENV) _warning = (valid, component, message)=>{
    es_warning(valid, `[antd: ${component}] ${message}`);
    if ('test' === process.env.NODE_ENV) warning_resetWarned();
};
const _util_warning_warning = _warning;
const WarningContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({});
const devUseWarning = 'production' !== process.env.NODE_ENV ? (component)=>{
    const { strict } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) if (false === strict && 'deprecated' === type) {
            const existWarning = deprecatedWarnList;
            if (!deprecatedWarnList) deprecatedWarnList = {};
            deprecatedWarnList[component] = deprecatedWarnList[component] || [];
            if (!deprecatedWarnList[component].includes(message || '')) deprecatedWarnList[component].push(message || '');
            if (!existWarning) console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
        } else "production" !== process.env.NODE_ENV && _util_warning_warning(valid, component, message);
    };
    typeWarning.deprecated = (valid, oldProp, newProp, message)=>{
        typeWarning(valid, 'deprecated', `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ''}`);
    };
    return typeWarning;
} : ()=>{
    const noopWarning = ()=>{};
    noopWarning.deprecated = noop;
    return noopWarning;
};
const _util_warning = _util_warning_warning;
"use client";
const SizeContext_SizeContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(void 0);
const SizeContextProvider = ({ children, size })=>{
    const originSize = __WEBPACK_EXTERNAL_MODULE_react__.useContext(SizeContext_SizeContext);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(SizeContext_SizeContext.Provider, {
        value: size || originSize
    }, children);
};
const SizeContext = SizeContext_SizeContext;
const useSize = (customSize)=>{
    const size = __WEBPACK_EXTERNAL_MODULE_react__["default"].useContext(SizeContext);
    const mergedSize = __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(()=>{
        if (!customSize) return size;
        if ('string' == typeof customSize) return null != customSize ? customSize : size;
        if ('function' == typeof customSize) return customSize(size);
        return size;
    }, [
        customSize,
        size
    ]);
    return mergedSize;
};
const hooks_useSize = useSize;
"use client";
const CollapsePanel_CollapsePanel = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((props, ref)=>{
    if ('production' !== process.env.NODE_ENV) {
        const warning = devUseWarning('Collapse.Panel');
        warning.deprecated(!('disabled' in props), 'disabled', 'collapsible="disabled"');
    }
    const { getPrefixCls } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const { prefixCls: customizePrefixCls, className, showArrow = true } = props;
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const collapsePanelClassName = classnames_default()({
        [`${prefixCls}-no-arrow`]: !showArrow
    }, className);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_collapse_es.Panel, Object.assign({
        ref: ref
    }, props, {
        prefixCls: prefixCls,
        className: collapsePanelClassName
    }));
});
const collapse_CollapsePanel = CollapsePanel_CollapsePanel;
function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = 0xff & str.charCodeAt(i) | (0xff & str.charCodeAt(++i)) << 8 | (0xff & str.charCodeAt(++i)) << 16 | (0xff & str.charCodeAt(++i)) << 24;
        k = (0xffff & k) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= k >>> 24;
        h = (0xffff & k) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ (0xffff & h) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    }
    switch(len){
        case 3:
            h ^= (0xff & str.charCodeAt(i + 2)) << 16;
        case 2:
            h ^= (0xff & str.charCodeAt(i + 1)) << 8;
        case 1:
            h ^= 0xff & str.charCodeAt(i);
            h = (0xffff & h) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    }
    h ^= h >>> 13;
    h = (0xffff & h) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
const hash_browser_esm = murmur2;
function isEqual_isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : false;
    var refSet = new Set();
    function deepEqual(a, b) {
        var level = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        var circular = refSet.has(a);
        es_warning(!circular, 'Warning: There may be circular references');
        if (circular) return false;
        if (a === b) return true;
        if (shallow && level > 1) return false;
        refSet.add(a);
        var newLevel = level + 1;
        if (Array.isArray(a)) {
            if (!Array.isArray(b) || a.length !== b.length) return false;
            for(var i = 0; i < a.length; i++)if (!deepEqual(a[i], b[i], newLevel)) return false;
            return true;
        }
        if (a && b && 'object' === typeof_typeof(a) && 'object' === typeof_typeof(b)) {
            var keys = Object.keys(a);
            if (keys.length !== Object.keys(b).length) return false;
            return keys.every(function(key) {
                return deepEqual(a[key], b[key], newLevel);
            });
        }
        return false;
    }
    return deepEqual(obj1, obj2);
}
const es_isEqual = isEqual_isEqual;
var SPLIT = '%';
function pathKey(keys) {
    return keys.join(SPLIT);
}
var Cache_Entity = /*#__PURE__*/ function() {
    function Entity(instanceId) {
        classCallCheck_classCallCheck(this, Entity);
        defineProperty_defineProperty(this, "instanceId", void 0);
        defineProperty_defineProperty(this, "cache", new Map());
        this.instanceId = instanceId;
    }
    createClass_createClass(Entity, [
        {
            key: "get",
            value: function(keys) {
                return this.opGet(pathKey(keys));
            }
        },
        {
            key: "opGet",
            value: function(keyPathStr) {
                return this.cache.get(keyPathStr) || null;
            }
        },
        {
            key: "update",
            value: function(keys, valueFn) {
                return this.opUpdate(pathKey(keys), valueFn);
            }
        },
        {
            key: "opUpdate",
            value: function(keyPathStr, valueFn) {
                var prevValue = this.cache.get(keyPathStr);
                var nextValue = valueFn(prevValue);
                if (null === nextValue) this.cache.delete(keyPathStr);
                else this.cache.set(keyPathStr, nextValue);
            }
        }
    ]);
    return Entity;
}();
const Cache = Cache_Entity;
var ATTR_TOKEN = 'data-token-hash';
var ATTR_MARK = 'data-css-hash';
var ATTR_CACHE_PATH = 'data-cache-path';
var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    if ('undefined' != typeof document && document.head && document.body) {
        var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
        var firstChild = document.head.firstChild;
        Array.from(styles).forEach(function(style) {
            style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
            if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) document.head.insertBefore(style, firstChild);
        });
        var styleHash = {};
        Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style) {
            var hash = style.getAttribute(ATTR_MARK);
            if (styleHash[hash]) {
                if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
                    var _style$parentNode;
                    null == (_style$parentNode = style.parentNode) || _style$parentNode.removeChild(style);
                }
            } else styleHash[hash] = true;
        });
    }
    return new Cache(cssinjsInstanceId);
}
var StyleContext_StyleContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({
    hashPriority: 'low',
    cache: createCache(),
    defaultCache: true
});
const StyleContext = StyleContext_StyleContext;
var CALC_UNIT = 'CALC_UNIT';
new RegExp(CALC_UNIT, 'g');
function sameDerivativeOption(left, right) {
    if (left.length !== right.length) return false;
    for(var i = 0; i < left.length; i++)if (left[i] !== right[i]) return false;
    return true;
}
var ThemeCache_ThemeCache = /*#__PURE__*/ function() {
    function ThemeCache() {
        classCallCheck_classCallCheck(this, ThemeCache);
        defineProperty_defineProperty(this, "cache", void 0);
        defineProperty_defineProperty(this, "keys", void 0);
        defineProperty_defineProperty(this, "cacheCallTimes", void 0);
        this.cache = new Map();
        this.keys = [];
        this.cacheCallTimes = 0;
    }
    createClass_createClass(ThemeCache, [
        {
            key: "size",
            value: function() {
                return this.keys.length;
            }
        },
        {
            key: "internalGet",
            value: function(derivativeOption) {
                var _cache2, _cache3;
                var updateCallTimes = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                var cache = {
                    map: this.cache
                };
                derivativeOption.forEach(function(derivative) {
                    if (cache) {
                        var _cache;
                        cache = null == (_cache = cache) || null == (_cache = _cache.map) ? void 0 : _cache.get(derivative);
                    } else cache = void 0;
                });
                if (null != (_cache2 = cache) && _cache2.value && updateCallTimes) cache.value[1] = this.cacheCallTimes++;
                return null == (_cache3 = cache) ? void 0 : _cache3.value;
            }
        },
        {
            key: "get",
            value: function(derivativeOption) {
                var _this$internalGet;
                return null == (_this$internalGet = this.internalGet(derivativeOption, true)) ? void 0 : _this$internalGet[0];
            }
        },
        {
            key: "has",
            value: function(derivativeOption) {
                return !!this.internalGet(derivativeOption);
            }
        },
        {
            key: "set",
            value: function(derivativeOption, value) {
                var _this = this;
                if (!this.has(derivativeOption)) {
                    if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
                        var _this$keys$reduce = this.keys.reduce(function(result, key) {
                            var _result = slicedToArray_slicedToArray(result, 2), callTimes = _result[1];
                            if (_this.internalGet(key)[1] < callTimes) return [
                                key,
                                _this.internalGet(key)[1]
                            ];
                            return result;
                        }, [
                            this.keys[0],
                            this.cacheCallTimes
                        ]), _this$keys$reduce2 = slicedToArray_slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
                        this.delete(targetKey);
                    }
                    this.keys.push(derivativeOption);
                }
                var cache = this.cache;
                derivativeOption.forEach(function(derivative, index) {
                    if (index === derivativeOption.length - 1) cache.set(derivative, {
                        value: [
                            value,
                            _this.cacheCallTimes++
                        ]
                    });
                    else {
                        var cacheValue = cache.get(derivative);
                        if (cacheValue) {
                            if (!cacheValue.map) cacheValue.map = new Map();
                        } else cache.set(derivative, {
                            map: new Map()
                        });
                        cache = cache.get(derivative).map;
                    }
                });
            }
        },
        {
            key: "deleteByPath",
            value: function(currentCache, derivatives) {
                var cache = currentCache.get(derivatives[0]);
                if (1 === derivatives.length) {
                    var _cache$value;
                    if (cache.map) currentCache.set(derivatives[0], {
                        map: cache.map
                    });
                    else currentCache.delete(derivatives[0]);
                    return null == (_cache$value = cache.value) ? void 0 : _cache$value[0];
                }
                var result = this.deleteByPath(cache.map, derivatives.slice(1));
                if ((!cache.map || 0 === cache.map.size) && !cache.value) currentCache.delete(derivatives[0]);
                return result;
            }
        },
        {
            key: "delete",
            value: function(derivativeOption) {
                if (this.has(derivativeOption)) {
                    this.keys = this.keys.filter(function(item) {
                        return !sameDerivativeOption(item, derivativeOption);
                    });
                    return this.deleteByPath(this.cache, derivativeOption);
                }
            }
        }
    ]);
    return ThemeCache;
}();
defineProperty_defineProperty(ThemeCache_ThemeCache, "MAX_CACHE_SIZE", 20);
defineProperty_defineProperty(ThemeCache_ThemeCache, "MAX_CACHE_OFFSET", 5);
var uuid = 0;
var Theme_Theme = /*#__PURE__*/ function() {
    function Theme(derivatives) {
        classCallCheck_classCallCheck(this, Theme);
        defineProperty_defineProperty(this, "derivatives", void 0);
        defineProperty_defineProperty(this, "id", void 0);
        this.derivatives = Array.isArray(derivatives) ? derivatives : [
            derivatives
        ];
        this.id = uuid;
        if (0 === derivatives.length) warning_warning(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
        uuid += 1;
    }
    createClass_createClass(Theme, [
        {
            key: "getDerivativeToken",
            value: function(token) {
                return this.derivatives.reduce(function(result, derivative) {
                    return derivative(token, result);
                }, void 0);
            }
        }
    ]);
    return Theme;
}();
var cacheThemes = new ThemeCache_ThemeCache();
function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [
        derivatives
    ];
    if (!cacheThemes.has(derivativeArr)) cacheThemes.set(derivativeArr, new Theme_Theme(derivativeArr));
    return cacheThemes.get(derivativeArr);
}
var resultCache = new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
    var current = resultCache;
    for(var i = 0; i < deps.length; i += 1){
        var dep = deps[i];
        if (!current.has(dep)) current.set(dep, new WeakMap());
        current = current.get(dep);
    }
    if (!current.has(RESULT_VALUE)) current.set(RESULT_VALUE, callback());
    return current.get(RESULT_VALUE);
}
var flattenTokenCache = new WeakMap();
function flattenToken(token) {
    var str = flattenTokenCache.get(token) || '';
    if (!str) {
        Object.keys(token).forEach(function(key) {
            var value = token[key];
            str += key;
            if (value instanceof Theme_Theme) str += value.id;
            else if (value && 'object' === typeof_typeof(value)) str += flattenToken(value);
            else str += value;
        });
        str = hash_browser_esm(str);
        flattenTokenCache.set(token, str);
    }
    return str;
}
function token2key(token, salt) {
    return hash_browser_esm("".concat(salt, "_").concat(flattenToken(token)));
}
"random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');
var isClientSide = canUseDom_canUseDom();
function util_unit(num) {
    if ('number' == typeof num) return "".concat(num, "px");
    return num;
}
function util_toStyleStr(style, tokenKey, styleId) {
    var _objectSpread2;
    var customizeAttrs = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    var plain = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : false;
    if (plain) return style;
    var attrs = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, customizeAttrs), {}, (_objectSpread2 = {}, defineProperty_defineProperty(_objectSpread2, ATTR_TOKEN, tokenKey), defineProperty_defineProperty(_objectSpread2, ATTR_MARK, styleId), _objectSpread2));
    var attrStr = Object.keys(attrs).map(function(attr) {
        var val = attrs[attr];
        return val ? "".concat(attr, "=\"").concat(val, "\"") : null;
    }).filter(function(v) {
        return v;
    }).join(' ');
    return "<style ".concat(attrStr, ">").concat(style, "</style>");
}
var css_variables_token2CSSVar = function(token) {
    var prefix = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return "--".concat(prefix ? "".concat(prefix, "-") : '').concat(token).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2').replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
};
var css_variables_serializeCSSVar = function(cssVars, hashId, options) {
    if (!Object.keys(cssVars).length) return '';
    return ".".concat(hashId).concat(null != options && options.scope ? ".".concat(options.scope) : '', "{").concat(Object.entries(cssVars).map(function(_ref) {
        var _ref2 = slicedToArray_slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        return "".concat(key, ":").concat(value, ";");
    }).join(''), "}");
};
var css_variables_transformToken = function(token, themeKey, config) {
    var cssVars = {};
    var result = {};
    Object.entries(token).forEach(function(_ref3) {
        var _config$preserve, _config$ignore;
        var _ref4 = slicedToArray_slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
        if (null != config && null != (_config$preserve = config.preserve) && _config$preserve[key]) result[key] = value;
        else if (('string' == typeof value || 'number' == typeof value) && !(null != config && null != (_config$ignore = config.ignore) && _config$ignore[key])) {
            var _config$unitless;
            var cssVar = css_variables_token2CSSVar(key, null == config ? void 0 : config.prefix);
            cssVars[cssVar] = 'number' != typeof value || null != config && null != (_config$unitless = config.unitless) && _config$unitless[key] ? String(value) : "".concat(value, "px");
            result[key] = "var(".concat(cssVar, ")");
        }
    });
    return [
        result,
        css_variables_serializeCSSVar(cssVars, themeKey, {
            scope: null == config ? void 0 : config.scope
        })
    ];
};
var fullClone = objectSpread2_objectSpread2({}, __WEBPACK_EXTERNAL_MODULE_react__);
var useInsertionEffect = fullClone.useInsertionEffect;
var useCompatibleInsertionEffect_useInsertionEffectPolyfill = function(renderEffect, effect, deps) {
    __WEBPACK_EXTERNAL_MODULE_react__.useMemo(renderEffect, deps);
    hooks_useLayoutEffect(function() {
        return effect(true);
    }, deps);
};
var useCompatibleInsertionEffect = useInsertionEffect ? function(renderEffect, effect, deps) {
    return useInsertionEffect(function() {
        renderEffect();
        return effect();
    }, deps);
} : useCompatibleInsertionEffect_useInsertionEffectPolyfill;
const hooks_useCompatibleInsertionEffect = useCompatibleInsertionEffect;
var useEffectCleanupRegister_fullClone = objectSpread2_objectSpread2({}, __WEBPACK_EXTERNAL_MODULE_react__);
var useEffectCleanupRegister_useInsertionEffect = useEffectCleanupRegister_fullClone.useInsertionEffect;
var useEffectCleanupRegister_useCleanupRegister = function(deps) {
    var effectCleanups = [];
    var cleanupFlag = false;
    function register(fn) {
        if (cleanupFlag) {
            if ('production' !== process.env.NODE_ENV) warning_warning(false, '[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.');
            return;
        }
        effectCleanups.push(fn);
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        cleanupFlag = false;
        return function() {
            cleanupFlag = true;
            if (effectCleanups.length) effectCleanups.forEach(function(fn) {
                return fn();
            });
        };
    }, deps);
    return register;
};
var useEffectCleanupRegister_useRun = function() {
    return function(fn) {
        fn();
    };
};
var useEffectCleanupRegister_useEffectCleanupRegister = void 0 !== useEffectCleanupRegister_useInsertionEffect ? useEffectCleanupRegister_useCleanupRegister : useEffectCleanupRegister_useRun;
const useEffectCleanupRegister = useEffectCleanupRegister_useEffectCleanupRegister;
var useHMR = __webpack_require__("./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/hooks/useHMR.js");
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
    var _React$useContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(StyleContext), globalCache = _React$useContext.cache;
    var fullPath = [
        prefix
    ].concat(_toConsumableArray(keyPath));
    var fullPathStr = pathKey(fullPath);
    var register = useEffectCleanupRegister([
        fullPathStr
    ]);
    var HMRUpdate = (0, useHMR.Z)();
    var buildCache = function(updater) {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
            var _ref = prevCache || [
                void 0,
                void 0
            ], _ref2 = slicedToArray_slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = void 0 === _ref2$ ? 0 : _ref2$, cache = _ref2[1];
            var tmpCache = cache;
            if ('production' !== process.env.NODE_ENV && cache && HMRUpdate) {
                null == onCacheRemove || onCacheRemove(tmpCache, HMRUpdate);
                tmpCache = null;
            }
            var mergedCache = tmpCache || cacheFn();
            var data = [
                times,
                mergedCache
            ];
            return updater ? updater(data) : data;
        });
    };
    __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        buildCache();
    }, [
        fullPathStr
    ]);
    var cacheEntity = globalCache.opGet(fullPathStr);
    if ('production' !== process.env.NODE_ENV && !cacheEntity) {
        buildCache();
        cacheEntity = globalCache.opGet(fullPathStr);
    }
    var cacheContent = cacheEntity[1];
    hooks_useCompatibleInsertionEffect(function() {
        null == onCacheEffect || onCacheEffect(cacheContent);
    }, function(polyfill) {
        buildCache(function(_ref3) {
            var _ref4 = slicedToArray_slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
            if (polyfill && 0 === times) null == onCacheEffect || onCacheEffect(cacheContent);
            return [
                times + 1,
                cache
            ];
        });
        return function() {
            globalCache.opUpdate(fullPathStr, function(prevCache) {
                var _ref5 = prevCache || [], _ref6 = slicedToArray_slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = void 0 === _ref6$ ? 0 : _ref6$, cache = _ref6[1];
                var nextCount = times - 1;
                if (0 === nextCount) {
                    register(function() {
                        if (polyfill || !globalCache.opGet(fullPathStr)) null == onCacheRemove || onCacheRemove(cache, false);
                    });
                    return null;
                }
                return [
                    times - 1,
                    cache
                ];
            });
        };
    }, [
        fullPathStr
    ]);
    return cacheContent;
}
var EMPTY_OVERRIDE = {};
var hashPrefix = 'production' !== process.env.NODE_ENV ? 'css-dev-only-do-not-override' : 'css';
var useCacheToken_tokenKeys = new Map();
function recordCleanToken(tokenKey) {
    useCacheToken_tokenKeys.set(tokenKey, (useCacheToken_tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
    if ('undefined' != typeof document) {
        var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, "=\"").concat(key, "\"]"));
        styles.forEach(function(style) {
            if (style[CSS_IN_JS_INSTANCE] === instanceId) {
                var _style$parentNode;
                null == (_style$parentNode = style.parentNode) || _style$parentNode.removeChild(style);
            }
        });
    }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
    useCacheToken_tokenKeys.set(tokenKey, (useCacheToken_tokenKeys.get(tokenKey) || 0) - 1);
    var tokenKeyList = Array.from(useCacheToken_tokenKeys.keys());
    var cleanableKeyList = tokenKeyList.filter(function(key) {
        var count = useCacheToken_tokenKeys.get(key) || 0;
        return count <= 0;
    });
    if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) cleanableKeyList.forEach(function(key) {
        removeStyleTags(key, instanceId);
        useCacheToken_tokenKeys.delete(key);
    });
}
var useCacheToken_getComputedToken = function(originToken, overrideToken, theme, format) {
    var derivativeToken = theme.getDerivativeToken(originToken);
    var mergedDerivativeToken = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, derivativeToken), overrideToken);
    if (format) mergedDerivativeToken = format(mergedDerivativeToken);
    return mergedDerivativeToken;
};
var TOKEN_PREFIX = 'token';
function useCacheToken(theme, tokens) {
    var option = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var _useContext = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var _option$salt = option.salt, salt = void 0 === _option$salt ? '' : _option$salt, _option$override = option.override, override = void 0 === _option$override ? EMPTY_OVERRIDE : _option$override, formatToken = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
    var mergedToken = memoResult(function() {
        return Object.assign.apply(Object, [
            {}
        ].concat(_toConsumableArray(tokens)));
    }, tokens);
    var tokenStr = flattenToken(mergedToken);
    var overrideTokenStr = flattenToken(override);
    var cssVarStr = cssVar ? flattenToken(cssVar) : '';
    var cachedToken = useGlobalCache(TOKEN_PREFIX, [
        salt,
        theme.id,
        tokenStr,
        overrideTokenStr,
        cssVarStr
    ], function() {
        var _cssVar$key;
        var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : useCacheToken_getComputedToken(mergedToken, override, theme, formatToken);
        var actualToken = objectSpread2_objectSpread2({}, mergedDerivativeToken);
        var cssVarsStr = '';
        if (!!cssVar) {
            var _transformToken = css_variables_transformToken(mergedDerivativeToken, cssVar.key, {
                prefix: cssVar.prefix,
                ignore: cssVar.ignore,
                unitless: cssVar.unitless,
                preserve: cssVar.preserve
            });
            var _transformToken2 = slicedToArray_slicedToArray(_transformToken, 2);
            mergedDerivativeToken = _transformToken2[0];
            cssVarsStr = _transformToken2[1];
        }
        var tokenKey = token2key(mergedDerivativeToken, salt);
        mergedDerivativeToken._tokenKey = tokenKey;
        actualToken._tokenKey = token2key(actualToken, salt);
        var themeKey = null != (_cssVar$key = null == cssVar ? void 0 : cssVar.key) ? _cssVar$key : tokenKey;
        mergedDerivativeToken._themeKey = themeKey;
        recordCleanToken(themeKey);
        var hashId = "".concat(hashPrefix, "-").concat(hash_browser_esm(tokenKey));
        mergedDerivativeToken._hashId = hashId;
        return [
            mergedDerivativeToken,
            hashId,
            actualToken,
            cssVarsStr,
            (null == cssVar ? void 0 : cssVar.key) || ''
        ];
    }, function(cache) {
        cleanTokenStyle(cache[0]._themeKey, instanceId);
    }, function(_ref) {
        var _ref2 = slicedToArray_slicedToArray(_ref, 4), token = _ref2[0], cssVarsStr = _ref2[3];
        if (cssVar && cssVarsStr) {
            var style = dynamicCSS_updateCSS(cssVarsStr, hash_browser_esm("css-variables-".concat(token._themeKey)), {
                mark: ATTR_MARK,
                prepend: 'queue',
                attachTo: container,
                priority: -999
            });
            style[CSS_IN_JS_INSTANCE] = instanceId;
            style.setAttribute(ATTR_TOKEN, token._themeKey);
        }
    });
    return cachedToken;
}
var useCacheToken_extract = function(cache, effectStyles, options) {
    var _cache = slicedToArray_slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
    var _ref3 = options || {}, plain = _ref3.plain;
    if (!styleStr) return null;
    var styleId = realToken._tokenKey;
    var order = -999;
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    var styleText = util_toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [
        order,
        styleId,
        styleText
    ];
};
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
const unitless_browser_esm = unitlessKeys;
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';
var abs = Math.abs;
var Utility_from = String.fromCharCode;
function trim(value) {
    return value.trim();
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return 0 | value.charCodeAt(index);
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function Utility_append(value, array) {
    return array.push(value), value;
}
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case LAYER:
            if (element.children.length) break;
        case IMPORT:
        case DECLARATION:
            return element.return = element.return || element.value;
        case COMMENT:
            return '';
        case KEYFRAMES:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case RULESET:
            if (!strlen(element.value = element.props.join(','))) return '';
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
var line = 1;
var column = 1;
var Tokenizer_length = 0;
var Tokenizer_position = 0;
var Tokenizer_character = 0;
var Tokenizer_characters = '';
function Tokenizer_node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function Tokenizer_char() {
    return Tokenizer_character;
}
function Tokenizer_prev() {
    Tokenizer_character = Tokenizer_position > 0 ? charat(Tokenizer_characters, --Tokenizer_position) : 0;
    if (column--, 10 === Tokenizer_character) column = 1, line--;
    return Tokenizer_character;
}
function Tokenizer_next() {
    Tokenizer_character = Tokenizer_position < Tokenizer_length ? charat(Tokenizer_characters, Tokenizer_position++) : 0;
    if (column++, 10 === Tokenizer_character) column = 1, line++;
    return Tokenizer_character;
}
function peek() {
    return charat(Tokenizer_characters, Tokenizer_position);
}
function caret() {
    return Tokenizer_position;
}
function slice(begin, end) {
    return substr(Tokenizer_characters, begin, end);
}
function Tokenizer_token(type) {
    switch(type){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, Tokenizer_length = strlen(Tokenizer_characters = value), Tokenizer_position = 0, [];
}
function dealloc(value) {
    return Tokenizer_characters = '', value;
}
function delimit(type) {
    return trim(slice(Tokenizer_position - 1, delimiter(91 === type ? type + 2 : 40 === type ? type + 1 : type)));
}
function whitespace(type) {
    while(Tokenizer_character = peek())if (Tokenizer_character < 33) Tokenizer_next();
    else break;
    return Tokenizer_token(type) > 2 || Tokenizer_token(Tokenizer_character) > 3 ? '' : ' ';
}
function escaping(index, count) {
    while(--count && Tokenizer_next())if (Tokenizer_character < 48 || Tokenizer_character > 102 || Tokenizer_character > 57 && Tokenizer_character < 65 || Tokenizer_character > 70 && Tokenizer_character < 97) break;
    return slice(index, caret() + (count < 6 && 32 == peek() && 32 == Tokenizer_next()));
}
function delimiter(type) {
    while(Tokenizer_next())switch(Tokenizer_character){
        case type:
            return Tokenizer_position;
        case 34:
        case 39:
            if (34 !== type && 39 !== type) delimiter(Tokenizer_character);
            break;
        case 40:
            if (41 === type) delimiter(type);
            break;
        case 92:
            Tokenizer_next();
            break;
    }
    return Tokenizer_position;
}
function commenter(type, index) {
    while(Tokenizer_next())if (type + Tokenizer_character === 57) break;
    else if (type + Tokenizer_character === 84 && 47 === peek()) break;
    return '/*' + slice(index, Tokenizer_position - 1) + '*' + Utility_from(47 === type ? type : Tokenizer_next());
}
function identifier(index) {
    while(!Tokenizer_token(peek()))Tokenizer_next();
    return slice(index, Tokenizer_position);
}
function compile(value) {
    return dealloc(parse('', null, null, null, [
        ''
    ], value = alloc(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = Tokenizer_next()){
        case 40:
            if (108 != previous && 58 == charat(characters, length - 1)) {
                if (-1 != indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0))) ampersand = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            characters += delimit(character);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            characters += whitespace(previous);
            break;
        case 92:
            characters += escaping(caret() - 1, 7);
            continue;
        case 47:
            switch(peek()){
                case 42:
                case 47:
                    Utility_append(comment(commenter(Tokenizer_next(), caret()), root, parent, declarations), declarations);
                    if ((5 == Tokenizer_token(previous || 1) || 5 == Tokenizer_token(peek() || 1)) && strlen(characters) && ' ' !== substr(characters, -1, void 0)) characters += ' ';
                    break;
                default:
                    characters += '/';
            }
            break;
        case 123 * variable:
            points[index++] = strlen(characters) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                case 0:
                case 125:
                    scanning = 0;
                case 59 + offset:
                    if (-1 == ampersand) characters = replace(characters, /\f/g, '');
                    if (property > 0 && (strlen(characters) - length || 0 === variable && 47 === previous)) Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                case 59:
                    characters += ';';
                default:
                    Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (123 === character) if (0 === offset) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(99 === atrule && 110 === charat(characters, 3) ? 100 : atrule){
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        case 58:
            length = 1 + strlen(characters), property = previous;
        default:
            if (variable < 1) {
                if (123 == character) --variable;
                else if (125 == character && 0 == variable++ && 125 == Tokenizer_prev()) continue;
            }
            switch(characters += Utility_from(character), character * variable){
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                case 44:
                    points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                    break;
                case 64:
                    if (45 === peek()) characters += delimit(Tokenizer_next());
                    atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
                    break;
                case 45:
                    if (45 === previous && 2 == strlen(characters)) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = 0 === offset ? rules : [
        ''
    ];
    var size = sizeof(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
    return Tokenizer_node(value, root, parent, 0 === offset ? RULESET : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return Tokenizer_node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return Tokenizer_node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
function utils_lintWarning(message, info) {
    var path = info.path, parentSelectors = info.parentSelectors;
    es_warning(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}
var contentQuotesLinter_linter = function(key, value, info) {
    if ('content' === key) {
        var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
        var contentValues = [
            'normal',
            'none',
            'initial',
            'inherit',
            'unset'
        ];
        if ('string' != typeof value || -1 === contentValues.indexOf(value) && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || '"' !== value.charAt(0) && "'" !== value.charAt(0))) utils_lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
    }
};
const contentQuotesLinter = contentQuotesLinter_linter;
var hashedAnimationLinter_linter = function(key, value, info) {
    if ('animation' === key) {
        if (info.hashId && 'none' !== value) utils_lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
};
const hashedAnimationLinter = hashedAnimationLinter_linter;
var cacheMapUtil_ATTR_CACHE_MAP = 'data-ant-cssinjs-cache-path';
var CSS_FILE_STYLE = '_FILE_STYLE__';
var cacheMapUtil_cachePathMap;
var fromCSSFile = true;
function prepare() {
    if (!cacheMapUtil_cachePathMap) {
        cacheMapUtil_cachePathMap = {};
        if (canUseDom_canUseDom()) {
            var div = document.createElement('div');
            div.className = cacheMapUtil_ATTR_CACHE_MAP;
            div.style.position = 'fixed';
            div.style.visibility = 'hidden';
            div.style.top = '-9999px';
            document.body.appendChild(div);
            var content = getComputedStyle(div).content || '';
            content = content.replace(/^"/, '').replace(/"$/, '');
            content.split(';').forEach(function(item) {
                var _item$split = item.split(':'), _item$split2 = slicedToArray_slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
                cacheMapUtil_cachePathMap[path] = hash;
            });
            var inlineMapStyle = document.querySelector("style[".concat(cacheMapUtil_ATTR_CACHE_MAP, "]"));
            if (inlineMapStyle) {
                var _inlineMapStyle$paren;
                fromCSSFile = false;
                null == (_inlineMapStyle$paren = inlineMapStyle.parentNode) || _inlineMapStyle$paren.removeChild(inlineMapStyle);
            }
            document.body.removeChild(div);
        }
    }
}
function existPath(path) {
    prepare();
    return !!cacheMapUtil_cachePathMap[path];
}
function getStyleAndHash(path) {
    var hash = cacheMapUtil_cachePathMap[path];
    var styleStr = null;
    if (hash && canUseDom_canUseDom()) if (fromCSSFile) styleStr = CSS_FILE_STYLE;
    else {
        var _style = document.querySelector("style[".concat(ATTR_MARK, "=\"").concat(cacheMapUtil_cachePathMap[path], "\"]"));
        if (_style) styleStr = _style.innerHTML;
        else delete cacheMapUtil_cachePathMap[path];
    }
    return [
        styleStr,
        hash
    ];
}
var SKIP_CHECK = '_skip_check_';
var MULTI_VALUE = '_multi_value_';
function normalizeStyle(styleStr) {
    var serialized = serialize(compile(styleStr), stringify);
    return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
    return 'object' === typeof_typeof(value) && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) return key;
    var hashClassName = ".".concat(hashId);
    var hashSelector = 'low' === hashPriority ? ":where(".concat(hashClassName, ")") : hashClassName;
    var keys = key.split(',').map(function(k) {
        var _firstPath$match;
        var fullPath = k.trim().split(/\s+/);
        var firstPath = fullPath[0] || '';
        var htmlElement = (null == (_firstPath$match = firstPath.match(/^\w+/)) ? void 0 : _firstPath$match[0]) || '';
        firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
        return [
            firstPath
        ].concat(_toConsumableArray(fullPath.slice(1))).join(' ');
    });
    return keys.join(',');
}
var useStyleRegister_parseStyle = function parseStyle(interpolation) {
    var config = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var _ref = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        root: true,
        parentSelectors: []
    }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
    var hashId = config.hashId, layer = config.layer, path = config.path, hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = void 0 === _config$transformers ? [] : _config$transformers, _config$linters = config.linters, linters = void 0 === _config$linters ? [] : _config$linters;
    var styleStr = '';
    var effectStyle = {};
    function parseKeyframes(keyframes) {
        var animationName = keyframes.getName(hashId);
        if (!effectStyle[animationName]) {
            var _parseStyle = parseStyle(keyframes.style, config, {
                root: false,
                parentSelectors: parentSelectors
            }), _parseStyle2 = slicedToArray_slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
            effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
        }
    }
    function flattenList(list) {
        var fullList = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        list.forEach(function(item) {
            if (Array.isArray(item)) flattenList(item, fullList);
            else if (item) fullList.push(item);
        });
        return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [
        interpolation
    ]);
    flattenStyleList.forEach(function(originStyle) {
        var style = 'string' != typeof originStyle || root ? originStyle : {};
        if ('string' == typeof style) styleStr += "".concat(style, "\n");
        else if (style._keyframe) parseKeyframes(style);
        else {
            var mergedStyle = transformers.reduce(function(prev, trans) {
                var _trans$visit;
                return (null == trans || null == (_trans$visit = trans.visit) ? void 0 : _trans$visit.call(trans, prev)) || prev;
            }, style);
            Object.keys(mergedStyle).forEach(function(key) {
                var value = mergedStyle[key];
                if ('object' !== typeof_typeof(value) || !value || 'animationName' === key && value._keyframe || isCompoundCSSProperty(value)) {
                    var _value;
                    function appendStyle(cssKey, cssValue) {
                        if ('production' !== process.env.NODE_ENV && ('object' !== typeof_typeof(value) || !(null != value && value[SKIP_CHECK]))) [
                            contentQuotesLinter,
                            hashedAnimationLinter
                        ].concat(_toConsumableArray(linters)).forEach(function(linter) {
                            return linter(cssKey, cssValue, {
                                path: path,
                                hashId: hashId,
                                parentSelectors: parentSelectors
                            });
                        });
                        var styleName = cssKey.replace(/[A-Z]/g, function(match) {
                            return "-".concat(match.toLowerCase());
                        });
                        var formatValue = cssValue;
                        if (!unitless_browser_esm[cssKey] && 'number' == typeof formatValue && 0 !== formatValue) formatValue = "".concat(formatValue, "px");
                        if ('animationName' === cssKey && null != cssValue && cssValue._keyframe) {
                            parseKeyframes(cssValue);
                            formatValue = cssValue.getName(hashId);
                        }
                        styleStr += "".concat(styleName, ":").concat(formatValue, ";");
                    }
                    var actualValue = null != (_value = null == value ? void 0 : value.value) ? _value : value;
                    if ('object' === typeof_typeof(value) && null != value && value[MULTI_VALUE] && Array.isArray(actualValue)) actualValue.forEach(function(item) {
                        appendStyle(key, item);
                    });
                    else appendStyle(key, actualValue);
                } else {
                    var subInjectHash = false;
                    var mergedKey = key.trim();
                    var nextRoot = false;
                    if ((root || injectHash) && hashId) if (mergedKey.startsWith('@')) subInjectHash = true;
                    else mergedKey = '&' === mergedKey ? injectSelectorHash('', hashId, hashPriority) : injectSelectorHash(key, hashId, hashPriority);
                    else if (root && !hashId && ('&' === mergedKey || '' === mergedKey)) {
                        mergedKey = '';
                        nextRoot = true;
                    }
                    var _parseStyle3 = parseStyle(value, config, {
                        root: nextRoot,
                        injectHash: subInjectHash,
                        parentSelectors: [].concat(_toConsumableArray(parentSelectors), [
                            mergedKey
                        ])
                    }), _parseStyle4 = slicedToArray_slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
                    effectStyle = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, effectStyle), childEffectStyle);
                    styleStr += "".concat(mergedKey).concat(_parsedStr2);
                }
            });
        }
    });
    if (root) {
        if (layer) {
            if (styleStr) styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
            if (layer.dependencies) effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
                return "@layer ".concat(deps, ", ").concat(layer.name, ";");
            }).join('\n');
        }
    } else styleStr = "{".concat(styleStr, "}");
    return [
        styleStr,
        effectStyle
    ];
};
function uniqueHash(path, styleStr) {
    return hash_browser_esm("".concat(path.join('%')).concat(styleStr));
}
function Empty() {
    return null;
}
var STYLE_PREFIX = 'style';
function useStyleRegister(info, styleFn) {
    var token = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = void 0 === _info$order ? 0 : _info$order;
    var _React$useContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(StyleContext), autoClear = _React$useContext.autoClear, mock = _React$useContext.mock, defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
    var tokenKey = token._tokenKey;
    var fullPath = [
        tokenKey
    ];
    if (enableLayer) fullPath.push('layer');
    fullPath.push.apply(fullPath, _toConsumableArray(path));
    var isMergedClientSide = isClientSide;
    if ('production' !== process.env.NODE_ENV && void 0 !== mock) isMergedClientSide = 'client' === mock;
    var _useGlobalCache = useGlobalCache(STYLE_PREFIX, fullPath, function() {
        var cachePath = fullPath.join('|');
        if (existPath(cachePath)) {
            var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = slicedToArray_slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
            if (inlineCacheStyleStr) return [
                inlineCacheStyleStr,
                tokenKey,
                styleHash,
                {},
                clientOnly,
                order
            ];
        }
        var styleObj = styleFn();
        var _parseStyle5 = useStyleRegister_parseStyle(styleObj, {
            hashId: hashId,
            hashPriority: hashPriority,
            layer: enableLayer ? layer : void 0,
            path: path.join('-'),
            transformers: transformers,
            linters: linters
        }), _parseStyle6 = slicedToArray_slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [
            styleStr,
            tokenKey,
            styleId,
            effectStyle,
            clientOnly,
            order
        ];
    }, function(_ref2, fromHMR) {
        var _ref3 = slicedToArray_slicedToArray(_ref2, 3), styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) dynamicCSS_removeCSS(styleId, {
            mark: ATTR_MARK
        });
    }, function(_ref4) {
        var _ref5 = slicedToArray_slicedToArray(_ref4, 4), styleStr = _ref5[0], styleId = (_ref5[1], _ref5[2]), effectStyle = _ref5[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
            var mergedCSSConfig = {
                mark: ATTR_MARK,
                prepend: enableLayer ? false : 'queue',
                attachTo: container,
                priority: order
            };
            var nonceStr = 'function' == typeof nonce ? nonce() : nonce;
            if (nonceStr) mergedCSSConfig.csp = {
                nonce: nonceStr
            };
            var effectLayerKeys = [];
            var effectRestKeys = [];
            Object.keys(effectStyle).forEach(function(key) {
                if (key.startsWith('@layer')) effectLayerKeys.push(key);
                else effectRestKeys.push(key);
            });
            effectLayerKeys.forEach(function(effectKey) {
                dynamicCSS_updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedCSSConfig), {}, {
                    prepend: true
                }));
            });
            var style = dynamicCSS_updateCSS(styleStr, styleId, mergedCSSConfig);
            style[CSS_IN_JS_INSTANCE] = cache.instanceId;
            style.setAttribute(ATTR_TOKEN, tokenKey);
            if ('production' !== process.env.NODE_ENV) style.setAttribute(ATTR_CACHE_PATH, fullPath.join('|'));
            effectRestKeys.forEach(function(effectKey) {
                dynamicCSS_updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
            });
        }
    }), _useGlobalCache2 = slicedToArray_slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node) {
        var styleNode;
        if (ssrInline && !isMergedClientSide && defaultCache) {
            var _ref6;
            styleNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("style", _extends({}, (_ref6 = {}, defineProperty_defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey), defineProperty_defineProperty(_ref6, ATTR_MARK, cachedStyleId), _ref6), {
                dangerouslySetInnerHTML: {
                    __html: cachedStyleStr
                }
            }));
        } else styleNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Empty, null);
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, null, styleNode, node);
    };
}
var useStyleRegister_extract = function(cache, effectStyles, options) {
    var _cache = slicedToArray_slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
    var _ref7 = options || {}, plain = _ref7.plain;
    if (clientOnly) return null;
    var keyStyleText = styleStr;
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    keyStyleText = util_toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
    if (effectStyle) Object.keys(effectStyle).forEach(function(effectKey) {
        if (!effectStyles[effectKey]) {
            effectStyles[effectKey] = true;
            var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
            var effectStyleHTML = util_toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
            if (effectKey.startsWith('@layer')) keyStyleText = effectStyleHTML + keyStyleText;
            else keyStyleText += effectStyleHTML;
        }
    });
    return [
        order,
        styleId,
        keyStyleText
    ];
};
var CSS_VAR_PREFIX = 'cssVar';
var useCSSVarRegister_useCSSVarRegister = function(config, fn) {
    var key = config.key, prefix = config.prefix, unitless = config.unitless, ignore = config.ignore, token = config.token, _config$scope = config.scope, scope = void 0 === _config$scope ? '' : _config$scope;
    var _useContext = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var tokenKey = token._tokenKey;
    var stylePath = [].concat(_toConsumableArray(config.path), [
        key,
        scope,
        tokenKey
    ]);
    var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
        var originToken = fn();
        var _transformToken = css_variables_transformToken(originToken, key, {
            prefix: prefix,
            unitless: unitless,
            ignore: ignore,
            scope: scope
        }), _transformToken2 = slicedToArray_slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
        var styleId = uniqueHash(stylePath, cssVarsStr);
        return [
            mergedToken,
            cssVarsStr,
            styleId,
            key
        ];
    }, function(_ref) {
        var _ref2 = slicedToArray_slicedToArray(_ref, 3), styleId = _ref2[2];
        if (isClientSide) dynamicCSS_removeCSS(styleId, {
            mark: ATTR_MARK
        });
    }, function(_ref3) {
        var _ref4 = slicedToArray_slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
        if (!cssVarsStr) return;
        var style = dynamicCSS_updateCSS(cssVarsStr, styleId, {
            mark: ATTR_MARK,
            prepend: 'queue',
            attachTo: container,
            priority: -999
        });
        style[CSS_IN_JS_INSTANCE] = instanceId;
        style.setAttribute(ATTR_TOKEN, key);
    });
    return cache;
};
var useCSSVarRegister_extract = function(cache, effectStyles, options) {
    var _cache = slicedToArray_slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
    var _ref5 = options || {}, plain = _ref5.plain;
    if (!styleStr) return null;
    var order = -999;
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    var styleText = util_toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [
        order,
        styleId,
        styleText
    ];
};
const hooks_useCSSVarRegister = useCSSVarRegister_useCSSVarRegister;
var _ExtractStyleFns;
_ExtractStyleFns = {}, defineProperty_defineProperty(_ExtractStyleFns, STYLE_PREFIX, useStyleRegister_extract), defineProperty_defineProperty(_ExtractStyleFns, TOKEN_PREFIX, useCacheToken_extract), defineProperty_defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, useCSSVarRegister_extract);
function noSplit(list) {
    list.notSplit = true;
    return list;
}
noSplit([
    'borderTop',
    'borderBottom'
]), noSplit([
    'borderTop'
]), noSplit([
    'borderBottom'
]), noSplit([
    'borderLeft',
    'borderRight'
]), noSplit([
    'borderLeft'
]), noSplit([
    'borderRight'
]);
"use client";
const resetComponent = (token, needInheritFontFamily = false)=>({
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        listStyle: 'none',
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    });
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block'
        }
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            outline: 'none',
            cursor: 'pointer',
            transition: `color ${token.motionDurationSlow}`,
            '-webkit-text-decoration-skip': 'objects',
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (false !== resetFont) resetFontStyle = {
        fontFamily: token.fontFamily,
        fontSize: token.fontSize
    };
    return {
        [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
            [prefixSelector]: resetStyle
        })
    };
};
const genFocusOutline = (token, offset)=>({
        outline: `${util_unit(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
        outlineOffset: null != offset ? offset : 1,
        transition: 'outline-offset 0s, outline 0s'
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': Object.assign({}, genFocusOutline(token, offset))
    });
const genIconStyle = (iconPrefixCls)=>({
        [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
            [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
                display: 'block'
            }
        })
    });
const genCollapseMotion = (token)=>({
        [token.componentCls]: {
            [`${token.antCls}-motion-collapse-legacy`]: {
                overflow: 'hidden',
                '&-active': {
                    transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
                }
            },
            [`${token.antCls}-motion-collapse`]: {
                overflow: 'hidden',
                transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
            }
        }
    });
const motion_collapse = genCollapseMotion;
var calc_calculator_AbstractCalculator = /*#__PURE__*/ createClass_createClass(function AbstractCalculator() {
    classCallCheck_classCallCheck(this, AbstractCalculator);
});
const calc_calculator = calc_calculator_AbstractCalculator;
var CSSCalculator_CALC_UNIT = 'CALC_UNIT';
var CSSCalculator_regexp = new RegExp(CSSCalculator_CALC_UNIT, 'g');
function CSSCalculator_unit(value) {
    if ('number' == typeof value) return "".concat(value).concat(CSSCalculator_CALC_UNIT);
    return value;
}
var calc_CSSCalculator_CSSCalculator = /*#__PURE__*/ function(_AbstractCalculator) {
    inherits_inherits(CSSCalculator, _AbstractCalculator);
    var _super = createSuper_createSuper(CSSCalculator);
    function CSSCalculator(num, unitlessCssVar) {
        var _this;
        classCallCheck_classCallCheck(this, CSSCalculator);
        _this = _super.call(this);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "result", '');
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unitlessCssVar", void 0);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "lowPriority", void 0);
        var numType = typeof_typeof(num);
        _this.unitlessCssVar = unitlessCssVar;
        if (num instanceof CSSCalculator) _this.result = "(".concat(num.result, ")");
        else if ('number' === numType) _this.result = CSSCalculator_unit(num);
        else if ('string' === numType) _this.result = num;
        return _this;
    }
    createClass_createClass(CSSCalculator, [
        {
            key: "add",
            value: function(num) {
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " + ").concat(num.getResult());
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " + ").concat(CSSCalculator_unit(num));
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "sub",
            value: function(num) {
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " - ").concat(num.getResult());
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " - ").concat(CSSCalculator_unit(num));
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "mul",
            value: function(num) {
                if (this.lowPriority) this.result = "(".concat(this.result, ")");
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " * ").concat(num.getResult(true));
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " * ").concat(num);
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "div",
            value: function(num) {
                if (this.lowPriority) this.result = "(".concat(this.result, ")");
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " / ").concat(num.getResult(true));
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " / ").concat(num);
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "getResult",
            value: function(force) {
                return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
            }
        },
        {
            key: "equal",
            value: function(options) {
                var _this2 = this;
                var _ref = options || {}, cssUnit = _ref.unit;
                var mergedUnit = true;
                if ('boolean' == typeof cssUnit) mergedUnit = cssUnit;
                else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
                    return _this2.result.includes(cssVar);
                })) mergedUnit = false;
                this.result = this.result.replace(CSSCalculator_regexp, mergedUnit ? 'px' : '');
                if (void 0 !== this.lowPriority) return "calc(".concat(this.result, ")");
                return this.result;
            }
        }
    ]);
    return CSSCalculator;
}(calc_calculator);
var calc_NumCalculator_NumCalculator = /*#__PURE__*/ function(_AbstractCalculator) {
    inherits_inherits(NumCalculator, _AbstractCalculator);
    var _super = createSuper_createSuper(NumCalculator);
    function NumCalculator(num) {
        var _this;
        classCallCheck_classCallCheck(this, NumCalculator);
        _this = _super.call(this);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "result", 0);
        if (num instanceof NumCalculator) _this.result = num.result;
        else if ('number' == typeof num) _this.result = num;
        return _this;
    }
    createClass_createClass(NumCalculator, [
        {
            key: "add",
            value: function(num) {
                if (num instanceof NumCalculator) this.result += num.result;
                else if ('number' == typeof num) this.result += num;
                return this;
            }
        },
        {
            key: "sub",
            value: function(num) {
                if (num instanceof NumCalculator) this.result -= num.result;
                else if ('number' == typeof num) this.result -= num;
                return this;
            }
        },
        {
            key: "mul",
            value: function(num) {
                if (num instanceof NumCalculator) this.result *= num.result;
                else if ('number' == typeof num) this.result *= num;
                return this;
            }
        },
        {
            key: "div",
            value: function(num) {
                if (num instanceof NumCalculator) this.result /= num.result;
                else if ('number' == typeof num) this.result /= num;
                return this;
            }
        },
        {
            key: "equal",
            value: function() {
                return this.result;
            }
        }
    ]);
    return NumCalculator;
}(calc_calculator);
const calc_NumCalculator = calc_NumCalculator_NumCalculator;
var util_calc_genCalc = function(type, unitlessCssVar) {
    var Calculator = 'css' === type ? calc_CSSCalculator_CSSCalculator : calc_NumCalculator;
    return function(num) {
        return new Calculator(num, unitlessCssVar);
    };
};
const util_calc = util_calc_genCalc;
var getCompVarPrefix_getCompVarPrefix = function(component, prefix) {
    return "".concat([
        prefix,
        component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')
    ].filter(Boolean).join('-'));
};
const util_getCompVarPrefix = getCompVarPrefix_getCompVarPrefix;
function getComponentToken_getComponentToken(component, token, defaultToken, options) {
    var customToken = objectSpread2_objectSpread2({}, token[component]);
    if (null != options && options.deprecatedTokens) {
        var deprecatedTokens = options.deprecatedTokens;
        deprecatedTokens.forEach(function(_ref) {
            var _ref2 = slicedToArray_slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
            if ('production' !== process.env.NODE_ENV) es_warning(!(null != customToken && customToken[oldTokenKey]), "Component Token `".concat(String(oldTokenKey), "` of ").concat(String(component), " is deprecated. Please use `").concat(String(newTokenKey), "` instead."));
            if (null != customToken && customToken[oldTokenKey] || null != customToken && customToken[newTokenKey]) null != customToken[newTokenKey] || (customToken[newTokenKey] = null == customToken ? void 0 : customToken[oldTokenKey]);
        });
    }
    var mergedToken = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultToken), customToken);
    Object.keys(mergedToken).forEach(function(key) {
        if (mergedToken[key] === token[key]) delete mergedToken[key];
    });
    return mergedToken;
}
const getComponentToken = getComponentToken_getComponentToken;
var enableStatistic = 'production' !== process.env.NODE_ENV || 'undefined' != typeof CSSINJS_STATISTIC;
var recording = true;
function statistic_merge() {
    for(var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++)objs[_key] = arguments[_key];
    if (!enableStatistic) return Object.assign.apply(Object, [
        {}
    ].concat(objs));
    recording = false;
    var ret = {};
    objs.forEach(function(obj) {
        if ('object' !== typeof_typeof(obj)) return;
        var keys = Object.keys(obj);
        keys.forEach(function(key) {
            Object.defineProperty(ret, key, {
                configurable: true,
                enumerable: true,
                get: function() {
                    return obj[key];
                }
            });
        });
    });
    recording = true;
    return ret;
}
var statistic_statistic = {};
function statistic_noop() {}
var statistic_statisticToken = function(token) {
    var tokenKeys;
    var proxy = token;
    var flush = statistic_noop;
    if (enableStatistic && 'undefined' != typeof Proxy) {
        tokenKeys = new Set();
        proxy = new Proxy(token, {
            get: function(obj, prop) {
                if (recording) {
                    var _tokenKeys;
                    null == (_tokenKeys = tokenKeys) || _tokenKeys.add(prop);
                }
                return obj[prop];
            }
        });
        flush = function(componentName, componentToken) {
            var _statistic$componentN;
            statistic_statistic[componentName] = {
                global: Array.from(tokenKeys),
                component: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, null == (_statistic$componentN = statistic_statistic[componentName]) ? void 0 : _statistic$componentN.component), componentToken)
            };
        };
    }
    return {
        token: proxy,
        keys: tokenKeys,
        flush: flush
    };
};
const util_statistic = statistic_statisticToken;
function getDefaultComponentToken(component, token, getDefaultToken) {
    if ('function' == typeof getDefaultToken) {
        var _token$component;
        return getDefaultToken(statistic_merge(token, null != (_token$component = token[component]) ? _token$component : {}));
    }
    return null != getDefaultToken ? getDefaultToken : {};
}
const util_getDefaultComponentToken = getDefaultComponentToken;
function genMaxMin(type) {
    if ('js' === type) return {
        max: Math.max,
        min: Math.min
    };
    return {
        max: function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return "max(".concat(args.map(function(value) {
                return util_unit(value);
            }).join(','), ")");
        },
        min: function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return "min(".concat(args.map(function(value) {
                return util_unit(value);
            }).join(','), ")");
        }
    };
}
const maxmin = genMaxMin;
var BEAT_LIMIT = 600000;
var useUniqueMemo_ArrayKeyMap = /*#__PURE__*/ function() {
    function ArrayKeyMap() {
        classCallCheck_classCallCheck(this, ArrayKeyMap);
        defineProperty_defineProperty(this, "map", new Map());
        defineProperty_defineProperty(this, "objectIDMap", new WeakMap());
        defineProperty_defineProperty(this, "nextID", 0);
        defineProperty_defineProperty(this, "lastAccessBeat", new Map());
        defineProperty_defineProperty(this, "accessBeat", 0);
    }
    createClass_createClass(ArrayKeyMap, [
        {
            key: "set",
            value: function(keys, value) {
                this.clear();
                var compositeKey = this.getCompositeKey(keys);
                this.map.set(compositeKey, value);
                this.lastAccessBeat.set(compositeKey, Date.now());
            }
        },
        {
            key: "get",
            value: function(keys) {
                var compositeKey = this.getCompositeKey(keys);
                var cache = this.map.get(compositeKey);
                this.lastAccessBeat.set(compositeKey, Date.now());
                this.accessBeat += 1;
                return cache;
            }
        },
        {
            key: "getCompositeKey",
            value: function(keys) {
                var _this = this;
                var ids = keys.map(function(key) {
                    if (key && 'object' === typeof_typeof(key)) return "obj_".concat(_this.getObjectID(key));
                    return "".concat(typeof_typeof(key), "_").concat(key);
                });
                return ids.join('|');
            }
        },
        {
            key: "getObjectID",
            value: function(obj) {
                if (this.objectIDMap.has(obj)) return this.objectIDMap.get(obj);
                var id = this.nextID;
                this.objectIDMap.set(obj, id);
                this.nextID += 1;
                return id;
            }
        },
        {
            key: "clear",
            value: function() {
                var _this2 = this;
                if (this.accessBeat > 10000) {
                    var now = Date.now();
                    this.lastAccessBeat.forEach(function(beat, key) {
                        if (now - beat > BEAT_LIMIT) {
                            _this2.map.delete(key);
                            _this2.lastAccessBeat.delete(key);
                        }
                    });
                    this.accessBeat = 0;
                }
            }
        }
    ]);
    return ArrayKeyMap;
}();
var uniqueMap = new useUniqueMemo_ArrayKeyMap();
function useUniqueMemo(memoFn, deps) {
    return __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(function() {
        var cachedValue = uniqueMap.get(deps);
        if (cachedValue) return cachedValue;
        var newValue = memoFn();
        uniqueMap.set(deps, newValue);
        return newValue;
    }, deps);
}
const hooks_useUniqueMemo = useUniqueMemo;
var useCSP_useDefaultCSP = function() {
    return {};
};
const hooks_useCSP = useCSP_useDefaultCSP;
function genStyleUtils_genStyleUtils(config) {
    var _config$useCSP = config.useCSP, useCSP = void 0 === _config$useCSP ? hooks_useCSP : _config$useCSP, useToken = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
    function genStyleHooks(component, styleFn, getDefaultToken, options) {
        var componentName = Array.isArray(component) ? component[0] : component;
        function prefixToken(key) {
            return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
        }
        var originUnitless = (null == options ? void 0 : options.unitless) || {};
        var originCompUnitless = 'function' == typeof getCompUnitless ? getCompUnitless(component) : {};
        var compUnitless = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, originCompUnitless), {}, defineProperty_defineProperty({}, prefixToken('zIndexPopup'), true));
        Object.keys(originUnitless).forEach(function(key) {
            compUnitless[prefixToken(key)] = originUnitless[key];
        });
        var mergedOptions = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, options), {}, {
            unitless: compUnitless,
            prefixToken: prefixToken
        });
        var useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, mergedOptions);
        var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
        return function(prefixCls) {
            var rootCls = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : prefixCls;
            var _useStyle = useStyle(prefixCls, rootCls), _useStyle2 = slicedToArray_slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
            var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = slicedToArray_slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
            return [
                wrapCSSVar,
                hashId,
                cssVarCls
            ];
        };
    }
    function genCSSVarRegister(component, getDefaultToken, options) {
        var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = void 0 === _options$injectStyle ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore = options.ignore;
        var CSSVarRegister = function(_ref) {
            var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = void 0 === _ref$cssVar ? {} : _ref$cssVar;
            var _useToken = useToken(), realToken = _useToken.realToken;
            hooks_useCSSVarRegister({
                path: [
                    component
                ],
                prefix: cssVar.prefix,
                key: cssVar.key,
                unitless: compUnitless,
                ignore: ignore,
                token: realToken,
                scope: rootCls
            }, function() {
                var defaultToken = util_getDefaultComponentToken(component, realToken, getDefaultToken);
                var componentToken = getComponentToken(component, realToken, defaultToken, {
                    deprecatedTokens: null == options ? void 0 : options.deprecatedTokens
                });
                Object.keys(defaultToken).forEach(function(key) {
                    componentToken[prefixToken(key)] = componentToken[key];
                    delete componentToken[key];
                });
                return componentToken;
            });
            return null;
        };
        var useCSSVar = function(rootCls) {
            var _useToken2 = useToken(), cssVar = _useToken2.cssVar;
            return [
                function(node) {
                    return injectStyle && cssVar ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react__["default"].Fragment, null, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(CSSVarRegister, {
                        rootCls: rootCls,
                        cssVar: cssVar,
                        component: component
                    }), node) : node;
                },
                null == cssVar ? void 0 : cssVar.key
            ];
        };
        return useCSSVar;
    }
    function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        var cells = Array.isArray(componentName) ? componentName : [
            componentName,
            componentName
        ];
        var _cells = slicedToArray_slicedToArray(cells, 1), component = _cells[0];
        var concatComponent = cells.join('-');
        var mergedLayer = config.layer || {
            name: 'antd'
        };
        return function(prefixCls) {
            var rootCls = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : prefixCls;
            var _useToken3 = useToken(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token = _useToken3.token, cssVar = _useToken3.cssVar;
            var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
            var csp = useCSP();
            var type = cssVar ? 'css' : 'js';
            var calc = hooks_useUniqueMemo(function() {
                var unitlessCssVar = new Set();
                if (cssVar) Object.keys(options.unitless || {}).forEach(function(key) {
                    unitlessCssVar.add(css_variables_token2CSSVar(key, cssVar.prefix));
                    unitlessCssVar.add(css_variables_token2CSSVar(key, util_getCompVarPrefix(component, cssVar.prefix)));
                });
                return util_calc(type, unitlessCssVar);
            }, [
                type,
                component,
                null == cssVar ? void 0 : cssVar.prefix
            ]);
            var _genMaxMin = maxmin(type), max = _genMaxMin.max, min = _genMaxMin.min;
            var sharedConfig = {
                theme: theme,
                token: token,
                hashId: hashId,
                nonce: function() {
                    return csp.nonce;
                },
                clientOnly: options.clientOnly,
                layer: mergedLayer,
                order: options.order || -999
            };
            if ('function' == typeof getResetStyles) useStyleRegister(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, sharedConfig), {}, {
                clientOnly: false,
                path: [
                    'Shared',
                    rootPrefixCls
                ]
            }), function() {
                return getResetStyles(token, {
                    prefix: {
                        rootPrefixCls: rootPrefixCls,
                        iconPrefixCls: iconPrefixCls
                    },
                    csp: csp
                });
            });
            var wrapSSR = useStyleRegister(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, sharedConfig), {}, {
                path: [
                    concatComponent,
                    prefixCls,
                    iconPrefixCls
                ]
            }), function() {
                if (false === options.injectStyle) return [];
                var _statisticToken = util_statistic(token), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
                var defaultComponentToken = util_getDefaultComponentToken(component, realToken, getDefaultToken);
                var componentCls = ".".concat(prefixCls);
                var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
                    deprecatedTokens: options.deprecatedTokens
                });
                if (cssVar && defaultComponentToken && 'object' === typeof_typeof(defaultComponentToken)) Object.keys(defaultComponentToken).forEach(function(key) {
                    defaultComponentToken[key] = "var(".concat(css_variables_token2CSSVar(key, util_getCompVarPrefix(component, cssVar.prefix)), ")");
                });
                var mergedToken = statistic_merge(proxyToken, {
                    componentCls: componentCls,
                    prefixCls: prefixCls,
                    iconCls: ".".concat(iconPrefixCls),
                    antCls: ".".concat(rootPrefixCls),
                    calc: calc,
                    max: max,
                    min: min
                }, cssVar ? defaultComponentToken : componentToken);
                var styleInterpolation = styleFn(mergedToken, {
                    hashId: hashId,
                    prefixCls: prefixCls,
                    rootPrefixCls: rootPrefixCls,
                    iconPrefixCls: iconPrefixCls
                });
                flush(component, componentToken);
                var commonStyle = 'function' == typeof getCommonStyle ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
                return [
                    false === options.resetStyle ? null : commonStyle,
                    styleInterpolation
                ];
            });
            return [
                wrapSSR,
                hashId
            ];
        };
    }
    function genSubStyleComponent(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        var useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, objectSpread2_objectSpread2({
            resetStyle: false,
            order: -998
        }, options));
        var StyledComponent = function(_ref2) {
            var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = void 0 === _ref2$rootCls ? prefixCls : _ref2$rootCls;
            useStyle(prefixCls, rootCls);
            return null;
        };
        if ('production' !== process.env.NODE_ENV) StyledComponent.displayName = "SubStyle_".concat(String(Array.isArray(componentName) ? componentName.join('.') : componentName));
        return StyledComponent;
    }
    return {
        genStyleHooks: genStyleHooks,
        genSubStyleComponent: genSubStyleComponent,
        genComponentStyleHook: genComponentStyleHook
    };
}
const genStyleUtils = genStyleUtils_genStyleUtils;
const version = '5.26.3';
"use client";
const es_version = version;
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    opacityImage: 1,
    wireframe: false,
    motion: true
});
const themes_seed = seedToken;
const defaultConfig = {
    token: themes_seed,
    override: {
        override: themes_seed
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createContext(defaultConfig);
function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new FastColor(errorColors[1]).mix(new FastColor(errorColors[3]), 50).toHexString();
    return Object.assign(Object.assign({}, neutralColors), {
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new FastColor('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    });
}
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    if (radiusBase < 6 && radiusBase >= 5) radiusLG = radiusBase + 1;
    else if (radiusBase < 16 && radiusBase >= 6) radiusLG = radiusBase + 2;
    else if (radiusBase >= 16) radiusLG = 16;
    if (radiusBase < 7 && radiusBase >= 5) radiusSM = 4;
    else if (radiusBase < 8 && radiusBase >= 7) radiusSM = 5;
    else if (radiusBase < 14 && radiusBase >= 8) radiusSM = 6;
    else if (radiusBase < 16 && radiusBase >= 14) radiusSM = 7;
    else if (radiusBase >= 16) radiusSM = 8;
    if (radiusBase < 6 && radiusBase >= 2) radiusXS = 1;
    else if (radiusBase >= 6) radiusXS = 2;
    if (radiusBase > 4 && radiusBase < 8) radiusOuter = 4;
    else if (radiusBase >= 8) radiusOuter = 6;
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const shared_genRadius = genRadius;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return Object.assign({
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + 2 * motionUnit).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + 3 * motionUnit).toFixed(1)}s`,
        lineWidthBold: lineWidth + 1
    }, shared_genRadius(borderRadius));
}
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: 0.75 * controlHeight,
        controlHeightXS: 0.5 * controlHeight,
        controlHeightLG: 1.25 * controlHeight
    };
};
const shared_genControlHeight = genControlHeight;
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.pow(Math.E, i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        return 2 * Math.floor(intSize / 2);
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const shared_genFontMapToken = genFontMapToken;
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        sizeXL: sizeUnit * (sizeStep + 4),
        sizeLG: sizeUnit * (sizeStep + 2),
        sizeMD: sizeUnit * (sizeStep + 1),
        sizeMS: sizeUnit * sizeStep,
        size: sizeUnit * sizeStep,
        sizeSM: sizeUnit * (sizeStep - 1),
        sizeXS: sizeUnit * (sizeStep - 2),
        sizeXXS: sizeUnit * (sizeStep - 3)
    };
}
const getAlphaColor = (baseColor, alpha)=>new FastColor(baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new FastColor(baseColor);
    return instance.darken(brightness).toHexString();
};
const colors_generateColorPalettes = (baseColor)=>{
    const colors = generate(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const colors_generateNeutralColorPalettes = (bgBaseColor, textBaseColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorText: getAlphaColor(colorTextBase, 0.88),
        colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
        colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
        colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
        colorFill: getAlphaColor(colorTextBase, 0.15),
        colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
        colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
        colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
        colorBgSolid: getAlphaColor(colorTextBase, 1),
        colorBgSolidHover: getAlphaColor(colorTextBase, 0.75),
        colorBgSolidActive: getAlphaColor(colorTextBase, 0.95),
        colorBgLayout: getSolidColor(colorBgBase, 4),
        colorBgContainer: getSolidColor(colorBgBase, 0),
        colorBgElevated: getSolidColor(colorBgBase, 0),
        colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: getSolidColor(colorBgBase, 15),
        colorBorderSecondary: getSolidColor(colorBgBase, 6)
    };
};
function default_derivative(token) {
    presetPrimaryColors.pink = presetPrimaryColors.magenta;
    presetPalettes.pink = presetPalettes.magenta;
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey)=>{
        const colors = token[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = Object.assign(Object.assign({}, prev), cur);
        return prev;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), genColorMapToken(token, {
        generateColorPalettes: colors_generateColorPalettes,
        generateNeutralColorPalettes: colors_generateNeutralColorPalettes
    })), shared_genFontMapToken(token.fontSize)), genSizeMapToken(token)), shared_genControlHeight(token)), genCommonMapToken(token));
}
const defaultTheme = createTheme(default_derivative);
const default_theme = defaultTheme;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor_getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new FastColor(frontColor).toRgb();
    if (originAlpha < 1) return frontColor;
    const { r: bR, g: bG, b: bB } = new FastColor(backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) return new FastColor({
            r,
            g,
            b,
            a: Math.round(100 * fA) / 100
        }).toRgbString();
    }
    return new FastColor({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const util_getAlphaColor = getAlphaColor_getAlphaColor;
var __rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function alias_formatToken(derivativeToken) {
    const { override } = derivativeToken, restToken = __rest(derivativeToken, [
        "override"
    ]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(themes_seed).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    if (false === mergedToken.motion) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: util_getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: util_getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: util_getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        fontSizeIcon: mergedToken.fontSizeSM,
        lineWidthFocus: 3 * mergedToken.lineWidth,
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: 2 * mergedToken.lineWidth,
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: util_getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: `
      0 1px 2px -2px ${new FastColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new FastColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new FastColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
    }), overrideTokens);
    return aliasToken;
}
var useToken_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const useToken_unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const useToken_ignore = {
    size: true,
    sizeSM: true,
    sizeLG: true,
    sizeMD: true,
    sizeXS: true,
    sizeXXS: true,
    sizeMS: true,
    sizeXL: true,
    sizeXXL: true,
    sizeUnit: true,
    sizeStep: true,
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const useToken_getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override } = overrideToken, components = useToken_rest(overrideToken, [
        "override"
    ]);
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
        override
    });
    mergedDerivativeToken = alias_formatToken(mergedDerivativeToken);
    if (components) Object.entries(components).forEach(([key, value])=>{
        const { theme: componentTheme } = value, componentTokens = useToken_rest(value, [
            "theme"
        ]);
        let mergedComponentToken = componentTokens;
        if (componentTheme) mergedComponentToken = useToken_getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
            override: componentTokens
        }, componentTheme);
        mergedDerivativeToken[key] = mergedComponentToken;
    });
    return mergedDerivativeToken;
};
function useToken_useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar } = __WEBPACK_EXTERNAL_MODULE_react__["default"].useContext(DesignTokenContext);
    const salt = `${es_version}-${hashed || ''}`;
    const mergedTheme = theme || default_theme;
    const [token, hashId, realToken] = useCacheToken(mergedTheme, [
        themes_seed,
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken: useToken_getComputedToken,
        formatToken: alias_formatToken,
        cssVar: cssVar && {
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless: useToken_unitless,
            ignore: useToken_ignore,
            preserve
        }
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar
    ];
}
const { genStyleHooks: genStyleUtils_genStyleHooks, genComponentStyleHook: genStyleUtils_genComponentStyleHook, genSubStyleComponent: genStyleUtils_genSubStyleComponent } = genStyleUtils({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(ConfigContext);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar] = useToken_useToken();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar
        };
    },
    useCSP: ()=>{
        const { csp } = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(ConfigContext);
        return null != csp ? csp : {};
    },
    getResetStyles: (token, config)=>{
        var _a;
        const linkStyle = genLinkStyle(token);
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            genIconStyle(null != (_a = null == config ? void 0 : config.prefix.iconPrefixCls) ? _a : context_defaultIconPrefixCls)
        ];
    },
    getCommonStyle: genCommonStyle,
    getCompUnitless: ()=>useToken_unitless
});
const genBaseStyle = (token)=>{
    const { componentCls, contentBg, padding, headerBg, headerPadding, collapseHeaderPaddingSM, collapseHeaderPaddingLG, collapsePanelBorderRadius, lineWidth, lineType, colorBorder, colorText, colorTextHeading, colorTextDisabled, fontSizeLG, lineHeight, lineHeightLG, marginSM, paddingSM, paddingLG, paddingXS, motionDurationSlow, fontSizeIcon, contentPadding, fontHeight, fontHeightLG } = token;
    const borderBase = `${util_unit(lineWidth)} ${lineType} ${colorBorder}`;
    return {
        [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
            backgroundColor: headerBg,
            border: borderBase,
            borderRadius: collapsePanelBorderRadius,
            '&-rtl': {
                direction: 'rtl'
            },
            [`& > ${componentCls}-item`]: {
                borderBottom: borderBase,
                '&:first-child': {
                    [`
            &,
            & > ${componentCls}-header`]: {
                        borderRadius: `${util_unit(collapsePanelBorderRadius)} ${util_unit(collapsePanelBorderRadius)} 0 0`
                    }
                },
                '&:last-child': {
                    [`
            &,
            & > ${componentCls}-header`]: {
                        borderRadius: `0 0 ${util_unit(collapsePanelBorderRadius)} ${util_unit(collapsePanelBorderRadius)}`
                    }
                },
                [`> ${componentCls}-header`]: Object.assign(Object.assign({
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    padding: headerPadding,
                    color: colorTextHeading,
                    lineHeight,
                    cursor: 'pointer',
                    transition: `all ${motionDurationSlow}, visibility 0s`
                }, genFocusStyle(token)), {
                    [`> ${componentCls}-header-text`]: {
                        flex: 'auto'
                    },
                    [`${componentCls}-expand-icon`]: {
                        height: fontHeight,
                        display: 'flex',
                        alignItems: 'center',
                        paddingInlineEnd: marginSM
                    },
                    [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
                        fontSize: fontSizeIcon,
                        transition: `transform ${motionDurationSlow}`,
                        svg: {
                            transition: `transform ${motionDurationSlow}`
                        }
                    }),
                    [`${componentCls}-header-text`]: {
                        marginInlineEnd: 'auto'
                    }
                }),
                [`${componentCls}-collapsible-header`]: {
                    cursor: 'default',
                    [`${componentCls}-header-text`]: {
                        flex: 'none',
                        cursor: 'pointer'
                    }
                },
                [`${componentCls}-collapsible-icon`]: {
                    cursor: 'unset',
                    [`${componentCls}-expand-icon`]: {
                        cursor: 'pointer'
                    }
                }
            },
            [`${componentCls}-content`]: {
                color: colorText,
                backgroundColor: contentBg,
                borderTop: borderBase,
                [`& > ${componentCls}-content-box`]: {
                    padding: contentPadding
                },
                '&-hidden': {
                    display: 'none'
                }
            },
            '&-small': {
                [`> ${componentCls}-item`]: {
                    [`> ${componentCls}-header`]: {
                        padding: collapseHeaderPaddingSM,
                        paddingInlineStart: paddingXS,
                        [`> ${componentCls}-expand-icon`]: {
                            marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
                        }
                    },
                    [`> ${componentCls}-content > ${componentCls}-content-box`]: {
                        padding: paddingSM
                    }
                }
            },
            '&-large': {
                [`> ${componentCls}-item`]: {
                    fontSize: fontSizeLG,
                    lineHeight: lineHeightLG,
                    [`> ${componentCls}-header`]: {
                        padding: collapseHeaderPaddingLG,
                        paddingInlineStart: padding,
                        [`> ${componentCls}-expand-icon`]: {
                            height: fontHeightLG,
                            marginInlineStart: token.calc(paddingLG).sub(padding).equal()
                        }
                    },
                    [`> ${componentCls}-content > ${componentCls}-content-box`]: {
                        padding: paddingLG
                    }
                }
            },
            [`${componentCls}-item:last-child`]: {
                borderBottom: 0,
                [`> ${componentCls}-content`]: {
                    borderRadius: `0 0 ${util_unit(collapsePanelBorderRadius)} ${util_unit(collapsePanelBorderRadius)}`
                }
            },
            [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
                [`
          &,
          & > .arrow
        `]: {
                    color: colorTextDisabled,
                    cursor: 'not-allowed'
                }
            },
            [`&${componentCls}-icon-position-end`]: {
                [`& > ${componentCls}-item`]: {
                    [`> ${componentCls}-header`]: {
                        [`${componentCls}-expand-icon`]: {
                            order: 1,
                            paddingInlineEnd: 0,
                            paddingInlineStart: marginSM
                        }
                    }
                }
            }
        })
    };
};
const genArrowStyle = (token)=>{
    const { componentCls } = token;
    const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow`;
    return {
        [`${componentCls}-rtl`]: {
            [fixedSelector]: {
                transform: "rotate(180deg)"
            }
        }
    };
};
const genBorderlessStyle = (token)=>{
    const { componentCls, headerBg, borderlessContentPadding, borderlessContentBg, colorBorder } = token;
    return {
        [`${componentCls}-borderless`]: {
            backgroundColor: headerBg,
            border: 0,
            [`> ${componentCls}-item`]: {
                borderBottom: `1px solid ${colorBorder}`
            },
            [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
                borderRadius: 0
            },
            [`> ${componentCls}-item:last-child`]: {
                borderBottom: 0
            },
            [`> ${componentCls}-item > ${componentCls}-content`]: {
                backgroundColor: borderlessContentBg,
                borderTop: 0
            },
            [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
                padding: borderlessContentPadding
            }
        }
    };
};
const genGhostStyle = (token)=>{
    const { componentCls, paddingSM } = token;
    return {
        [`${componentCls}-ghost`]: {
            backgroundColor: 'transparent',
            border: 0,
            [`> ${componentCls}-item`]: {
                borderBottom: 0,
                [`> ${componentCls}-content`]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    [`> ${componentCls}-content-box`]: {
                        paddingBlock: paddingSM
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        headerPadding: `${token.paddingSM}px ${token.padding}px`,
        headerBg: token.colorFillAlter,
        contentPadding: `${token.padding}px 16px`,
        contentBg: token.colorBgContainer,
        borderlessContentPadding: `${token.paddingXXS}px 16px ${token.padding}px`,
        borderlessContentBg: 'transparent'
    });
const collapse_style = genStyleUtils_genStyleHooks('Collapse', (token)=>{
    const collapseToken = statistic_merge(token, {
        collapseHeaderPaddingSM: `${util_unit(token.paddingXS)} ${util_unit(token.paddingSM)}`,
        collapseHeaderPaddingLG: `${util_unit(token.padding)} ${util_unit(token.paddingLG)}`,
        collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [
        genBaseStyle(collapseToken),
        genBorderlessStyle(collapseToken),
        genGhostStyle(collapseToken),
        genArrowStyle(collapseToken),
        motion_collapse(collapseToken)
    ];
}, prepareComponentToken);
"use client";
const collapse_Collapse_Collapse = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((props, ref)=>{
    const { getPrefixCls, direction, expandIcon: contextExpandIcon, className: contextClassName, style: contextStyle } = useComponentConfig('collapse');
    const { prefixCls: customizePrefixCls, className, rootClassName, style, bordered = true, ghost, size: customizeSize, expandIconPosition = 'start', children, destroyInactivePanel, destroyOnHidden, expandIcon } = props;
    const mergedSize = hooks_useSize((ctx)=>{
        var _a;
        return null != (_a = null != customizeSize ? customizeSize : ctx) ? _a : 'middle';
    });
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [wrapCSSVar, hashId, cssVarCls] = collapse_style(prefixCls);
    if ('production' !== process.env.NODE_ENV) {
        const warning = devUseWarning('Collapse');
        "production" !== process.env.NODE_ENV && warning('left' !== expandIconPosition && 'right' !== expandIconPosition, 'deprecated', '`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.');
        warning.deprecated(!('destroyInactivePanel' in props), 'destroyInactivePanel', 'destroyOnHidden');
    }
    const mergedExpandIconPosition = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        if ('left' === expandIconPosition) return 'start';
        return 'right' === expandIconPosition ? 'end' : expandIconPosition;
    }, [
        expandIconPosition
    ]);
    const mergedExpandIcon = null != expandIcon ? expandIcon : contextExpandIcon;
    const renderExpandIcon = __WEBPACK_EXTERNAL_MODULE_react__.useCallback((panelProps = {})=>{
        const icon = 'function' == typeof mergedExpandIcon ? mergedExpandIcon(panelProps) : /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(icons_RightOutlined, {
            rotate: panelProps.isActive ? 'rtl' === direction ? -90 : 90 : void 0,
            "aria-label": panelProps.isActive ? 'expanded' : 'collapsed'
        });
        return cloneElement(icon, ()=>{
            var _a;
            return {
                className: classnames_default()(null == (_a = null == icon ? void 0 : icon.props) ? void 0 : _a.className, `${prefixCls}-arrow`)
            };
        });
    }, [
        mergedExpandIcon,
        prefixCls
    ]);
    const collapseClassName = classnames_default()(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-rtl`]: 'rtl' === direction,
        [`${prefixCls}-ghost`]: !!ghost,
        [`${prefixCls}-${mergedSize}`]: 'middle' !== mergedSize
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    const openMotion = Object.assign(Object.assign({}, _util_motion(rootPrefixCls)), {
        motionAppear: false,
        leavedClassName: `${prefixCls}-content-hidden`
    });
    const items = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        if (children) return toArray(children).map((child, index)=>{
            var _a, _b;
            const childProps = child.props;
            if (null == childProps ? void 0 : childProps.disabled) {
                const key = null != (_a = child.key) ? _a : String(index);
                const mergedChildProps = Object.assign(Object.assign({}, omit(child.props, [
                    'disabled'
                ])), {
                    key,
                    collapsible: null != (_b = childProps.collapsible) ? _b : 'disabled'
                });
                return cloneElement(child, mergedChildProps);
            }
            return child;
        });
        return null;
    }, [
        children
    ]);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_collapse_es, Object.assign({
        ref: ref,
        openMotion: openMotion
    }, omit(props, [
        'rootClassName'
    ]), {
        expandIcon: renderExpandIcon,
        prefixCls: prefixCls,
        className: collapseClassName,
        style: Object.assign(Object.assign({}, contextStyle), style),
        destroyInactivePanel: null != destroyOnHidden ? destroyOnHidden : destroyInactivePanel
    }), items));
});
if ('production' !== process.env.NODE_ENV) collapse_Collapse_Collapse.displayName = 'Collapse';
const collapse_Collapse = Object.assign(collapse_Collapse_Collapse, {
    Panel: collapse_CollapsePanel
});
"use client";
const validateMessagesContext = /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.createContext)(void 0);
var en_US_locale = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size'
};
const en_US = en_US_locale;
var commonLocale = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: true
};
var locale_en_US_locale = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, commonLocale), {}, {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'OK',
    clear: 'Clear',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    dateFormat: 'M/D/YYYY',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
});
const locale_en_US = locale_en_US_locale;
const time_picker_locale_en_US_locale = {
    placeholder: 'Select time',
    rangePlaceholder: [
        'Start time',
        'End time'
    ]
};
const time_picker_locale_en_US = time_picker_locale_en_US_locale;
const date_picker_locale_en_US_locale = {
    lang: Object.assign({
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: [
            'Start date',
            'End date'
        ],
        rangeYearPlaceholder: [
            'Start year',
            'End year'
        ],
        rangeQuarterPlaceholder: [
            'Start quarter',
            'End quarter'
        ],
        rangeMonthPlaceholder: [
            'Start month',
            'End month'
        ],
        rangeWeekPlaceholder: [
            'Start week',
            'End week'
        ]
    }, locale_en_US),
    timePickerLocale: Object.assign({}, time_picker_locale_en_US)
};
const date_picker_locale_en_US = date_picker_locale_en_US_locale;
const calendar_locale_en_US = date_picker_locale_en_US;
const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
    locale: 'en',
    Pagination: en_US,
    DatePicker: date_picker_locale_en_US,
    TimePicker: time_picker_locale_en_US,
    Calendar: calendar_locale_en_US,
    global: {
        placeholder: 'Please select',
        close: 'Close'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting'
    },
    Tour: {
        Next: 'Next',
        Previous: 'Previous',
        Finish: 'Finish'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse'
    },
    Form: {
        optional: '(optional)',
        defaultValidateMessages: {
            default: 'Field validation error for ${label}',
            required: 'Please enter ${label}',
            enum: '${label} must be one of [${enum}]',
            whitespace: '${label} cannot be a blank character',
            date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
            },
            number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
            },
            array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
            },
            pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
            }
        }
    },
    Image: {
        preview: 'Preview'
    },
    QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned'
    },
    ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient'
    }
};
const es_locale_en_US = localeValues;
Object.assign({}, es_locale_en_US.Modal);
let localeList = [];
const generateLocale = ()=>localeList.reduce((merged, locale)=>Object.assign(Object.assign({}, merged), locale), es_locale_en_US.Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        const cloneLocale = Object.assign({}, newLocale);
        localeList.push(cloneLocale);
        generateLocale();
        return ()=>{
            localeList = localeList.filter((locale)=>locale !== cloneLocale);
            generateLocale();
        };
    }
    Object.assign({}, es_locale_en_US.Modal);
}
const LocaleContext = /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.createContext)(void 0);
const locale_context = LocaleContext;
"use client";
const ANT_MARK = 'internalMark';
const LocaleProvider = (props)=>{
    const { locale = {}, children, _ANT_MARK__ } = props;
    if ('production' !== process.env.NODE_ENV) {
        const warning = devUseWarning('LocaleProvider');
        "production" !== process.env.NODE_ENV && warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(()=>{
        const clearLocale = changeConfirmLocale(null == locale ? void 0 : locale.Modal);
        return clearLocale;
    }, [
        locale
    ]);
    const getMemoizedContextValue = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>Object.assign(Object.assign({}, locale), {
            exist: true
        }), [
        locale
    ]);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(locale_context.Provider, {
        value: getMemoizedContextValue
    }, children);
};
if ('production' !== process.env.NODE_ENV) LocaleProvider.displayName = 'LocaleProvider';
const es_locale = LocaleProvider;
const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
    const variables = {};
    const formatColor = (color, updater)=>{
        let clone = color.clone();
        clone = (null == updater ? void 0 : updater(clone)) || clone;
        return clone.toRgbString();
    };
    const fillColor = (colorVal, type)=>{
        const baseColor = new FastColor(colorVal);
        const colorPalettes = generate(baseColor.toRgbString());
        variables[`${type}-color`] = formatColor(baseColor);
        variables[`${type}-color-disabled`] = colorPalettes[1];
        variables[`${type}-color-hover`] = colorPalettes[4];
        variables[`${type}-color-active`] = colorPalettes[6];
        variables[`${type}-color-outline`] = baseColor.clone().setA(0.2).toRgbString();
        variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
        variables[`${type}-color-deprecated-border`] = colorPalettes[2];
    };
    if (theme.primaryColor) {
        fillColor(theme.primaryColor, 'primary');
        const primaryColor = new FastColor(theme.primaryColor);
        const primaryColors = generate(primaryColor.toRgbString());
        primaryColors.forEach((color, index)=>{
            variables[`primary-${index + 1}`] = color;
        });
        variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, (c)=>c.lighten(35));
        variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, (c)=>c.lighten(20));
        variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, (c)=>c.tint(20));
        variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, (c)=>c.tint(50));
        variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, (c)=>c.setA(0.12 * c.a));
        const primaryActiveColor = new FastColor(primaryColors[0]);
        variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, (c)=>c.setA(0.3 * c.a));
        variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, (c)=>c.darken(2));
    }
    if (theme.successColor) fillColor(theme.successColor, 'success');
    if (theme.warningColor) fillColor(theme.warningColor, 'warning');
    if (theme.errorColor) fillColor(theme.errorColor, 'error');
    if (theme.infoColor) fillColor(theme.infoColor, 'info');
    const cssList = Object.keys(variables).map((key)=>`--${globalPrefixCls}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
    const style = getStyle(globalPrefixCls, theme);
    if (canUseDom_canUseDom()) dynamicCSS_updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
    else "production" !== process.env.NODE_ENV && _util_warning(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.');
}
"use client";
const DisabledContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(false);
const DisabledContextProvider = ({ children, disabled })=>{
    const originDisabled = __WEBPACK_EXTERNAL_MODULE_react__.useContext(DisabledContext);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(DisabledContext.Provider, {
        value: null != disabled ? disabled : originDisabled
    }, children);
};
const config_provider_DisabledContext = DisabledContext;
function useConfig() {
    const componentDisabled = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(config_provider_DisabledContext);
    const componentSize = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(SizeContext);
    return {
        componentDisabled,
        componentSize
    };
}
const hooks_useConfig = useConfig;
const useThemeKey_fullClone = Object.assign({}, __WEBPACK_EXTERNAL_MODULE_react__);
const { useId } = useThemeKey_fullClone;
const useEmptyId = ()=>'';
const useThemeKey_useThemeKey = void 0 === useId ? useEmptyId : useId;
const useThemeKey = useThemeKey_useThemeKey;
function useTheme(theme, parentTheme, config) {
    var _a, _b;
    const warning = devUseWarning('ConfigProvider');
    const themeConfig = theme || {};
    const parentThemeConfig = false !== themeConfig.inherit && parentTheme ? parentTheme : Object.assign(Object.assign({}, defaultConfig), {
        hashed: null != (_a = null == parentTheme ? void 0 : parentTheme.hashed) ? _a : defaultConfig.hashed,
        cssVar: null == parentTheme ? void 0 : parentTheme.cssVar
    });
    const themeKey = useThemeKey();
    if ('production' !== process.env.NODE_ENV) {
        const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
        const validKey = !!('object' == typeof themeConfig.cssVar && (null == (_b = themeConfig.cssVar) ? void 0 : _b.key) || themeKey);
        "production" !== process.env.NODE_ENV && warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.');
    }
    return useMemo_useMemo(()=>{
        var _a, _b;
        if (!theme) return parentTheme;
        const mergedComponents = Object.assign({}, parentThemeConfig.components);
        Object.keys(theme.components || {}).forEach((componentName)=>{
            mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
        });
        const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
        const mergedCssVar = (null != (_a = themeConfig.cssVar) ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
            prefix: null == config ? void 0 : config.prefixCls
        }, 'object' == typeof parentThemeConfig.cssVar ? parentThemeConfig.cssVar : {}), 'object' == typeof themeConfig.cssVar ? themeConfig.cssVar : {}), {
            key: 'object' == typeof themeConfig.cssVar && (null == (_b = themeConfig.cssVar) ? void 0 : _b.key) || cssVarKey
        });
        return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
            token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
            components: mergedComponents,
            cssVar: mergedCssVar
        });
    }, [
        themeConfig,
        parentThemeConfig
    ], (prev, next)=>prev.some((prevTheme, index)=>{
            const nextTheme = next[index];
            return !es_isEqual(prevTheme, nextTheme, true);
        }));
}
"use client";
const MotionCacheContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(true);
if ('production' !== process.env.NODE_ENV) MotionCacheContext.displayName = 'MotionCacheContext';
function MotionWrapper(props) {
    const parentMotion = __WEBPACK_EXTERNAL_MODULE_react__.useContext(MotionCacheContext);
    const { children } = props;
    const [, token] = useToken_useToken();
    const { motion } = token;
    const needWrapMotionProviderRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(false);
    needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
    if (needWrapMotionProviderRef.current) return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(MotionCacheContext.Provider, {
        value: motion
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(MotionProvider, {
        motion: motion
    }, children));
    return children;
}
"use client";
const PropWarning_PropWarning = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.memo(({ dropdownMatchSelectWidth })=>{
    const warning = devUseWarning('ConfigProvider');
    warning.deprecated(void 0 === dropdownMatchSelectWidth, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
    return null;
});
if ('production' !== process.env.NODE_ENV) PropWarning_PropWarning.displayName = 'PropWarning';
const PropWarning = 'production' !== process.env.NODE_ENV ? PropWarning_PropWarning : ()=>null;
const useResetIconStyle = (iconPrefixCls, csp)=>{
    const [theme, token] = useToken_useToken();
    return useStyleRegister({
        theme,
        token,
        hashId: '',
        path: [
            'ant-design-icons',
            iconPrefixCls
        ],
        nonce: ()=>null == csp ? void 0 : csp.nonce,
        layer: {
            name: 'antd'
        }
    }, ()=>[
            genIconStyle(iconPrefixCls)
        ]);
};
const util_useResetIconStyle = useResetIconStyle;
"use client";
var config_provider_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
let existThemeConfig = false;
process.env.NODE_ENV;
const PASSED_PROPS = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button'
];
let config_provider_globalPrefixCls;
function getGlobalPrefixCls() {
    return config_provider_globalPrefixCls || defaultPrefixCls;
}
function isLegacyTheme(theme) {
    return Object.keys(theme).some((key)=>key.endsWith('Color'));
}
const setGlobalConfig = (props)=>{
    const { prefixCls, iconPrefixCls, theme, holderRender } = props;
    if (void 0 !== prefixCls) config_provider_globalPrefixCls = prefixCls;
    if (theme) {
        if (isLegacyTheme(theme)) {
            "production" !== process.env.NODE_ENV && _util_warning(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.');
            registerTheme(getGlobalPrefixCls(), theme);
        }
    }
};
const ProviderChildren = (props)=>{
    const { children, csp: customCsp, autoInsertSpaceInButton, alert, anchor, form, locale, componentSize, direction, space, splitter, virtual, dropdownMatchSelectWidth, popupMatchSelectWidth, popupOverflow, legacyLocale, parentContext, iconPrefixCls: customIconPrefixCls, theme, componentDisabled, segmented, statistic, spin, calendar, carousel, cascader, collapse, typography, checkbox, descriptions, divider, drawer, skeleton, steps, image, layout, list, mentions, modal, progress, result, slider, breadcrumb, menu, pagination, input, textArea, empty, badge, radio, rate, switch: SWITCH, transfer, avatar, message, tag, table, card, tabs, timeline, timePicker, upload, notification, tree, colorPicker, datePicker, rangePicker, flex, wave, dropdown, warning: warningConfig, tour, tooltip, popover, popconfirm, floatButtonGroup, variant, inputNumber, treeSelect } = props;
    const getPrefixCls = __WEBPACK_EXTERNAL_MODULE_react__.useCallback((suffixCls, customizePrefixCls)=>{
        const { prefixCls } = props;
        if (customizePrefixCls) return customizePrefixCls;
        const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
        return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [
        parentContext.getPrefixCls,
        props.prefixCls
    ]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || context_defaultIconPrefixCls;
    const csp = customCsp || parentContext.csp;
    util_useResetIconStyle(iconPrefixCls, csp);
    const mergedTheme = useTheme(theme, parentContext.theme, {
        prefixCls: getPrefixCls('')
    });
    if ('production' !== process.env.NODE_ENV) existThemeConfig = existThemeConfig || !!mergedTheme;
    const baseConfig = {
        csp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        locale: locale || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: null != popupMatchSelectWidth ? popupMatchSelectWidth : dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        textArea,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        tooltip,
        popover,
        popconfirm,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
    };
    if ('production' !== process.env.NODE_ENV) {
        const warningFn = devUseWarning('ConfigProvider');
        warningFn(!('autoInsertSpaceInButton' in props), 'deprecated', '`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.');
    }
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key)=>{
        if (void 0 !== baseConfig[key]) config[key] = baseConfig[key];
    });
    PASSED_PROPS.forEach((propName)=>{
        const propValue = props[propName];
        if (propValue) config[propName] = propValue;
    });
    if (void 0 !== autoInsertSpaceInButton) config.button = Object.assign({
        autoInsertSpace: autoInsertSpaceInButton
    }, config.button);
    const memoedConfig = useMemo_useMemo(()=>config, config, (prevConfig, currentConfig)=>{
        const prevKeys = Object.keys(prevConfig);
        const currentKeys = Object.keys(currentConfig);
        return prevKeys.length !== currentKeys.length || prevKeys.some((key)=>prevConfig[key] !== currentConfig[key]);
    });
    const { layer } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(StyleContext);
    const memoIconContextValue = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>({
            prefixCls: iconPrefixCls,
            csp,
            layer: layer ? 'antd' : void 0
        }), [
        iconPrefixCls,
        csp,
        layer
    ]);
    let childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, null, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(PropWarning, {
        dropdownMatchSelectWidth: dropdownMatchSelectWidth
    }), children);
    const validateMessages = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        var _a, _b, _c, _d;
        return merge((null == (_a = es_locale_en_US.Form) ? void 0 : _a.defaultValidateMessages) || {}, (null == (_c = null == (_b = memoedConfig.locale) ? void 0 : _b.Form) ? void 0 : _c.defaultValidateMessages) || {}, (null == (_d = memoedConfig.form) ? void 0 : _d.validateMessages) || {}, (null == form ? void 0 : form.validateMessages) || {});
    }, [
        memoedConfig,
        null == form ? void 0 : form.validateMessages
    ]);
    if (Object.keys(validateMessages).length > 0) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(validateMessagesContext.Provider, {
        value: validateMessages
    }, childNode);
    if (locale) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_locale, {
        locale: locale,
        _ANT_MARK__: ANT_MARK
    }, childNode);
    if (iconPrefixCls || csp) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(components_Context.Provider, {
        value: memoIconContextValue
    }, childNode);
    if (componentSize) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(SizeContextProvider, {
        size: componentSize
    }, childNode);
    childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(MotionWrapper, null, childNode);
    const memoTheme = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        const _a = mergedTheme || {}, { algorithm, token, components, cssVar } = _a, rest = config_provider_rest(_a, [
            "algorithm",
            "token",
            "components",
            "cssVar"
        ]);
        const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : default_theme;
        const parsedComponents = {};
        Object.entries(components || {}).forEach(([componentName, componentToken])=>{
            const parsedToken = Object.assign({}, componentToken);
            if ('algorithm' in parsedToken) {
                if (true === parsedToken.algorithm) parsedToken.theme = themeObj;
                else if (Array.isArray(parsedToken.algorithm) || 'function' == typeof parsedToken.algorithm) parsedToken.theme = createTheme(parsedToken.algorithm);
                delete parsedToken.algorithm;
            }
            parsedComponents[componentName] = parsedToken;
        });
        const mergedToken = Object.assign(Object.assign({}, themes_seed), token);
        return Object.assign(Object.assign({}, rest), {
            theme: themeObj,
            token: mergedToken,
            components: parsedComponents,
            override: Object.assign({
                override: mergedToken
            }, parsedComponents),
            cssVar: cssVar
        });
    }, [
        mergedTheme
    ]);
    if (theme) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(DesignTokenContext.Provider, {
        value: memoTheme
    }, childNode);
    if (memoedConfig.warning) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(WarningContext.Provider, {
        value: memoedConfig.warning
    }, childNode);
    if (void 0 !== componentDisabled) childNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(DisabledContextProvider, {
        disabled: componentDisabled
    }, childNode);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(ConfigContext.Provider, {
        value: memoedConfig
    }, childNode);
};
const ConfigProvider = (props)=>{
    const context = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const antLocale = __WEBPACK_EXTERNAL_MODULE_react__.useContext(locale_context);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(ProviderChildren, Object.assign({
        parentContext: context,
        legacyLocale: antLocale
    }, props));
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = hooks_useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
    get: ()=>{
        "production" !== process.env.NODE_ENV && _util_warning(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.');
        return SizeContext;
    }
});
if ('production' !== process.env.NODE_ENV) ConfigProvider.displayName = 'ConfigProvider';
const config_provider = ConfigProvider;
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
const inverseColors = PresetColors.map((color)=>`${color}-inverse`);
const PresetStatusColorTypes = [
    'success',
    'processing',
    'error',
    'default',
    'warning'
];
function isPresetColor(color, includeInverse = true) {
    if (includeInverse) return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
    return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
    return PresetStatusColorTypes.includes(color);
}
var CloseOutlined_CloseOutlined = {
    icon: {
        tag: "svg",
        attrs: {
            "fill-rule": "evenodd",
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [
            {
                tag: "path",
                attrs: {
                    d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                }
            }
        ]
    },
    name: "close",
    theme: "outlined"
};
const asn_CloseOutlined = CloseOutlined_CloseOutlined;
var icons_CloseOutlined_CloseOutlined = function(props, ref) {
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(AntdIcon, _extends({}, props, {
        ref: ref,
        icon: asn_CloseOutlined
    }));
};
var CloseOutlined_RefIcon = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(icons_CloseOutlined_CloseOutlined);
if ('production' !== process.env.NODE_ENV) CloseOutlined_RefIcon.displayName = 'CloseOutlined';
const icons_CloseOutlined = CloseOutlined_RefIcon;
const useLocale = (componentName, defaultLocale)=>{
    const fullLocale = __WEBPACK_EXTERNAL_MODULE_react__.useContext(locale_context);
    const getLocale = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        var _a;
        const locale = defaultLocale || es_locale_en_US[componentName];
        const localeFromContext = null != (_a = null == fullLocale ? void 0 : fullLocale[componentName]) ? _a : {};
        return Object.assign(Object.assign({}, 'function' == typeof locale ? locale() : locale), localeFromContext || {});
    }, [
        componentName,
        defaultLocale,
        fullLocale
    ]);
    const getLocaleCode = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        const localeCode = null == fullLocale ? void 0 : fullLocale.locale;
        if ((null == fullLocale ? void 0 : fullLocale.exist) && !localeCode) return es_locale_en_US.locale;
        return localeCode;
    }, [
        fullLocale
    ]);
    return [
        getLocale,
        getLocaleCode
    ];
};
const locale_useLocale = useLocale;
function mergeProps(...items) {
    const ret = {};
    items.forEach((item)=>{
        if (item) Object.keys(item).forEach((key)=>{
            if (void 0 !== item[key]) ret[key] = item[key];
        });
    });
    return ret;
}
const extendsObject = mergeProps;
"use client";
function pickClosable(context) {
    if (!context) return;
    return {
        closable: context.closable,
        closeIcon: context.closeIcon
    };
}
function useClosableConfig(closableCollection) {
    const { closable, closeIcon } = closableCollection || {};
    return __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(()=>{
        if (!closable && (false === closable || false === closeIcon || null === closeIcon)) return false;
        if (void 0 === closable && void 0 === closeIcon) return null;
        let closableConfig = {
            closeIcon: 'boolean' != typeof closeIcon && null !== closeIcon ? closeIcon : void 0
        };
        if (closable && 'object' == typeof closable) closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
        return closableConfig;
    }, [
        closable,
        closeIcon
    ]);
}
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) {
    const propCloseConfig = useClosableConfig(propCloseCollection);
    const contextCloseConfig = useClosableConfig(contextCloseCollection);
    const [contextLocale] = locale_useLocale('global', es_locale_en_US.global);
    const closeBtnIsDisabled = 'boolean' != typeof propCloseConfig ? !!(null == propCloseConfig ? void 0 : propCloseConfig.disabled) : false;
    const mergedFallbackCloseCollection = __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(()=>Object.assign({
            closeIcon: /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(icons_CloseOutlined, null)
        }, fallbackCloseCollection), [
        fallbackCloseCollection
    ]);
    const mergedClosableConfig = __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(()=>{
        if (false === propCloseConfig) return false;
        if (propCloseConfig) return extendsObject(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
        if (false === contextCloseConfig) return false;
        if (contextCloseConfig) return extendsObject(mergedFallbackCloseCollection, contextCloseConfig);
        return mergedFallbackCloseCollection.closable ? mergedFallbackCloseCollection : false;
    }, [
        propCloseConfig,
        contextCloseConfig,
        mergedFallbackCloseCollection
    ]);
    return __WEBPACK_EXTERNAL_MODULE_react__["default"].useMemo(()=>{
        if (false === mergedClosableConfig) return [
            false,
            null,
            closeBtnIsDisabled,
            {}
        ];
        const { closeIconRender } = mergedFallbackCloseCollection;
        const { closeIcon } = mergedClosableConfig;
        let mergedCloseIcon = closeIcon;
        const ariaOrDataProps = pickAttrs(mergedClosableConfig, true);
        if (null != mergedCloseIcon) {
            if (closeIconRender) mergedCloseIcon = closeIconRender(closeIcon);
            mergedCloseIcon = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].isValidElement(mergedCloseIcon) ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].cloneElement(mergedCloseIcon, Object.assign({
                'aria-label': contextLocale.close
            }, ariaOrDataProps)) : /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("span", Object.assign({
                "aria-label": contextLocale.close
            }, ariaOrDataProps), mergedCloseIcon);
        }
        return [
            true,
            mergedCloseIcon,
            closeBtnIsDisabled,
            ariaOrDataProps
        ];
    }, [
        mergedClosableConfig,
        mergedFallbackCloseCollection
    ]);
}
const isVisible = function(element) {
    if (!element) return false;
    if (element instanceof Element) {
        if (element.offsetParent) return true;
        if (element.getBBox) {
            var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
            if (width || height) return true;
        }
        if (element.getBoundingClientRect) {
            var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
            if (_width || _height) return true;
        }
    }
    return false;
};
const genWaveStyle = (token)=>{
    const { componentCls, colorPrimary } = token;
    return {
        [componentCls]: {
            position: 'absolute',
            background: 'transparent',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            color: `var(--wave-color, ${colorPrimary})`,
            boxShadow: "0 0 0 0 currentcolor",
            opacity: 0.2,
            '&.wave-motion-appear': {
                transition: [
                    `box-shadow 0.4s ${token.motionEaseOutCirc}`,
                    `opacity 2s ${token.motionEaseOutCirc}`
                ].join(','),
                '&-active': {
                    boxShadow: "0 0 0 6px currentcolor",
                    opacity: 0
                },
                '&.wave-quick': {
                    transition: [
                        `box-shadow ${token.motionDurationSlow} ${token.motionEaseInOut}`,
                        `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
                    ].join(',')
                }
            }
        }
    };
};
const wave_style = genStyleUtils_genComponentStyleHook('Wave', (token)=>[
        genWaveStyle(token)
    ]);
const TARGET_CLS = `${defaultPrefixCls}-wave-target`;
function regeneratorRuntime_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    regeneratorRuntime_regeneratorRuntime = function() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define1(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define1({}, "");
    } catch (t) {
        define1 = function(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define1(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define1(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == typeof_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError(typeof_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define1(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define1(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define1(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define1(g, u, "Generator"), define1(g, a, function() {
        return this;
    }), define1(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        catch: function(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
var render_fullClone = objectSpread2_objectSpread2({}, __WEBPACK_EXTERNAL_MODULE_react_dom_7136dc57__);
var render_version = render_fullClone.version, render_reactRender = render_fullClone.render, unmountComponentAtNode = render_fullClone.unmountComponentAtNode;
var createRoot;
try {
    var mainVersion = Number((render_version || '').split('.')[0]);
    if (mainVersion >= 18) createRoot = render_fullClone.createRoot;
} catch (e) {}
function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = render_fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && 'object' === typeof_typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)) __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
}
var MARK = '__rc_react_root__';
function modernRender(node, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node);
    container[MARK] = root;
}
function legacyRender(node, container) {
    null == render_reactRender || render_reactRender(node, container);
}
function render_render(node, container) {
    if (createRoot) return void modernRender(node, container);
    legacyRender(node, container);
}
function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
    _modernUnmount = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee(container) {
        return regeneratorRuntime_regeneratorRuntime().wrap(function(_context) {
            while(1)switch(_context.prev = _context.next){
                case 0:
                    return _context.abrupt("return", Promise.resolve().then(function() {
                        var _container$MARK;
                        null == (_container$MARK = container[MARK]) || _container$MARK.unmount();
                        delete container[MARK];
                    }));
                case 1:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
    unmountComponentAtNode(container);
}
function unmount(_x2) {
    return _unmount.apply(this, arguments);
}
function _unmount() {
    _unmount = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee2(container) {
        return regeneratorRuntime_regeneratorRuntime().wrap(function(_context2) {
            while(1)switch(_context2.prev = _context2.next){
                case 0:
                    if (!(void 0 !== createRoot)) {
                        _context2.next = 2;
                        break;
                    }
                    return _context2.abrupt("return", modernUnmount(container));
                case 2:
                    legacyUnmount(container);
                case 3:
                case "end":
                    return _context2.stop();
            }
        }, _callee2);
    }));
    return _unmount.apply(this, arguments);
}
"use client";
const defaultReactRender = (node, container)=>{
    if ('production' !== process.env.NODE_ENV) {
        const majorVersion = parseInt(__WEBPACK_EXTERNAL_MODULE_react__.version.split('.')[0], 10);
        const fullKeys = Object.keys(__WEBPACK_EXTERNAL_MODULE_react_dom_7136dc57__);
        "production" !== process.env.NODE_ENV && _util_warning(majorVersion < 19 || fullKeys.includes('createRoot'), 'compatible', 'antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.');
    }
    render_render(node, container);
    return ()=>unmount(container);
};
let unstableRender = defaultReactRender;
function unstableSetRender(render) {
    if (render) unstableRender = render;
    return unstableRender;
}
function isValidWaveColor(color) {
    return color && '#fff' !== color && '#ffffff' !== color && 'rgb(255, 255, 255)' !== color && 'rgba(255, 255, 255, 1)' !== color && !/rgba\((?:\d*, ){3}0\)/.test(color) && 'transparent' !== color;
}
function getTargetWaveColor(node) {
    const { borderTopColor, borderColor, backgroundColor } = getComputedStyle(node);
    if (isValidWaveColor(borderTopColor)) return borderTopColor;
    if (isValidWaveColor(borderColor)) return borderColor;
    if (isValidWaveColor(backgroundColor)) return backgroundColor;
    return null;
}
"use client";
function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props)=>{
    const { className, target, component, registerUnmount } = props;
    const divRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    const unmountRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(()=>{
        unmountRef.current = registerUnmount();
    }, []);
    const [color, setWaveColor] = __WEBPACK_EXTERNAL_MODULE_react__.useState(null);
    const [borderRadius, setBorderRadius] = __WEBPACK_EXTERNAL_MODULE_react__.useState([]);
    const [left, setLeft] = __WEBPACK_EXTERNAL_MODULE_react__.useState(0);
    const [top, setTop] = __WEBPACK_EXTERNAL_MODULE_react__.useState(0);
    const [width, setWidth] = __WEBPACK_EXTERNAL_MODULE_react__.useState(0);
    const [height, setHeight] = __WEBPACK_EXTERNAL_MODULE_react__.useState(0);
    const [enabled, setEnabled] = __WEBPACK_EXTERNAL_MODULE_react__.useState(false);
    const waveStyle = {
        left,
        top,
        width,
        height,
        borderRadius: borderRadius.map((radius)=>`${radius}px`).join(' ')
    };
    if (color) waveStyle['--wave-color'] = color;
    function syncPos() {
        const nodeStyle = getComputedStyle(target);
        setWaveColor(getTargetWaveColor(target));
        const isStatic = 'static' === nodeStyle.position;
        const { borderLeftWidth, borderTopWidth } = nodeStyle;
        setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
        setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
        setWidth(target.offsetWidth);
        setHeight(target.offsetHeight);
        const { borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius } = nodeStyle;
        setBorderRadius([
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius
        ].map((radius)=>validateNum(parseFloat(radius))));
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(()=>{
        if (target) {
            const id = es_raf(()=>{
                syncPos();
                setEnabled(true);
            });
            let resizeObserver;
            if ('undefined' != typeof ResizeObserver) {
                resizeObserver = new ResizeObserver(syncPos);
                resizeObserver.observe(target);
            }
            return ()=>{
                es_raf.cancel(id);
                null == resizeObserver || resizeObserver.disconnect();
            };
        }
    }, []);
    if (!enabled) return null;
    const isSmallComponent = ('Checkbox' === component || 'Radio' === component) && (null == target ? void 0 : target.classList.contains(TARGET_CLS));
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es, {
        visible: true,
        motionAppear: true,
        motionName: "wave-motion",
        motionDeadline: 5000,
        onAppearEnd: (_, event)=>{
            var _a, _b;
            if (event.deadline || 'opacity' === event.propertyName) {
                const holder = null == (_a = divRef.current) ? void 0 : _a.parentElement;
                null == (_b = unmountRef.current) || _b.call(unmountRef).then(()=>{
                    null == holder || holder.remove();
                });
            }
            return false;
        }
    }, ({ className: motionClassName }, ref)=>/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
            ref: ref_composeRef(divRef, ref),
            className: classnames_default()(className, motionClassName, {
                'wave-quick': isSmallComponent
            }),
            style: waveStyle
        }));
};
const showWaveEffect = (target, info)=>{
    var _a;
    const { component } = info;
    if ('Checkbox' === component && !(null == (_a = target.querySelector('input')) ? void 0 : _a.checked)) return;
    const holder = document.createElement('div');
    holder.style.position = 'absolute';
    holder.style.left = '0px';
    holder.style.top = '0px';
    null == target || target.insertBefore(holder, null == target ? void 0 : target.firstChild);
    const reactRender = unstableSetRender();
    let unmountCallback = null;
    function registerUnmount() {
        return unmountCallback;
    }
    unmountCallback = reactRender(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(WaveEffect, Object.assign({}, info, {
        target: target,
        registerUnmount: registerUnmount
    })), holder);
};
const wave_WaveEffect = showWaveEffect;
const useWave = (nodeRef, className, component)=>{
    const { wave } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const [, token, hashId] = useToken_useToken();
    const showWave = useEvent((event)=>{
        const node = nodeRef.current;
        if ((null == wave ? void 0 : wave.disabled) || !node) return;
        const targetNode = node.querySelector(`.${TARGET_CLS}`) || node;
        const { showEffect } = wave || {};
        (showEffect || wave_WaveEffect)(targetNode, {
            className,
            token,
            component,
            event,
            hashId
        });
    });
    const rafId = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    const showDebounceWave = (event)=>{
        es_raf.cancel(rafId.current);
        rafId.current = es_raf(()=>{
            showWave(event);
        });
    };
    return showDebounceWave;
};
const wave_useWave = useWave;
const Wave = (props)=>{
    const { children, disabled, component } = props;
    const { getPrefixCls } = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(ConfigContext);
    const containerRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(null);
    const prefixCls = getPrefixCls('wave');
    const [, hashId] = wave_style(prefixCls);
    const showWave = wave_useWave(containerRef, classnames_default()(prefixCls, hashId), component);
    __WEBPACK_EXTERNAL_MODULE_react__["default"].useEffect(()=>{
        const node = containerRef.current;
        if (!node || 1 !== node.nodeType || disabled) return;
        const onClick = (e)=>{
            if (!isVisible(e.target) || !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) return;
            showWave(e);
        };
        node.addEventListener('click', onClick, true);
        return ()=>{
            node.removeEventListener('click', onClick, true);
        };
    }, [
        disabled
    ]);
    if (!/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].isValidElement(children)) return null != children ? children : null;
    const ref = ref_supportRef(children) ? ref_composeRef(ref_getNodeRef(children), containerRef) : containerRef;
    return cloneElement(children, {
        ref
    });
};
if ('production' !== process.env.NODE_ENV) Wave.displayName = 'Wave';
const _util_wave = Wave;
const style_genBaseStyle = (token)=>{
    const { paddingXXS, lineWidth, tagPaddingHorizontal, componentCls, calc } = token;
    const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
    const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
    return {
        [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
            display: 'inline-block',
            height: 'auto',
            marginInlineEnd: token.marginXS,
            paddingInline,
            fontSize: token.tagFontSize,
            lineHeight: token.tagLineHeight,
            whiteSpace: 'nowrap',
            background: token.defaultBg,
            border: `${util_unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
            borderRadius: token.borderRadiusSM,
            opacity: 1,
            transition: `all ${token.motionDurationMid}`,
            textAlign: 'start',
            position: 'relative',
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            '&, a, a:hover': {
                color: token.defaultColor
            },
            [`${componentCls}-close-icon`]: {
                marginInlineStart: iconMarginInline,
                fontSize: token.tagIconSize,
                color: token.colorIcon,
                cursor: 'pointer',
                transition: `all ${token.motionDurationMid}`,
                '&:hover': {
                    color: token.colorTextHeading
                }
            },
            [`&${componentCls}-has-color`]: {
                borderColor: 'transparent',
                [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
                    color: token.colorTextLightSolid
                }
            },
            '&-checkable': {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                cursor: 'pointer',
                [`&:not(${componentCls}-checkable-checked):hover`]: {
                    color: token.colorPrimary,
                    backgroundColor: token.colorFillSecondary
                },
                '&:active, &-checked': {
                    color: token.colorTextLightSolid
                },
                '&-checked': {
                    backgroundColor: token.colorPrimary,
                    '&:hover': {
                        backgroundColor: token.colorPrimaryHover
                    }
                },
                '&:active': {
                    backgroundColor: token.colorPrimaryActive
                }
            },
            '&-hidden': {
                display: 'none'
            },
            [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
                marginInlineStart: paddingInline
            }
        }),
        [`${componentCls}-borderless`]: {
            borderColor: 'transparent',
            background: token.tagBorderlessBg
        }
    };
};
const prepareToken = (token)=>{
    const { lineWidth, fontSizeIcon, calc } = token;
    const tagFontSize = token.fontSizeSM;
    const tagToken = statistic_merge(token, {
        tagFontSize,
        tagLineHeight: util_unit(calc(token.lineHeightSM).mul(tagFontSize).equal()),
        tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
        tagPaddingHorizontal: 8,
        tagBorderlessBg: token.defaultBg
    });
    return tagToken;
};
const style_prepareComponentToken = (token)=>({
        defaultBg: new FastColor(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
        defaultColor: token.colorText
    });
const tag_style = genStyleUtils_genStyleHooks('Tag', (token)=>{
    const tagToken = prepareToken(token);
    return style_genBaseStyle(tagToken);
}, style_prepareComponentToken);
"use client";
var CheckableTag_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const CheckableTag_CheckableTag = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, style, className, checked, onChange, onClick } = props, restProps = CheckableTag_rest(props, [
        "prefixCls",
        "style",
        "className",
        "checked",
        "onChange",
        "onClick"
    ]);
    const { getPrefixCls, tag } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const handleClick = (e)=>{
        null == onChange || onChange(!checked);
        null == onClick || onClick(e);
    };
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
    const cls = classnames_default()(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: checked
    }, null == tag ? void 0 : tag.className, className, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", Object.assign({}, restProps, {
        ref: ref,
        style: Object.assign(Object.assign({}, style), null == tag ? void 0 : tag.style),
        className: cls,
        onClick: handleClick
    })));
});
const CheckableTag = CheckableTag_CheckableTag;
function genPresetColor(token, genCss) {
    return PresetColors.reduce((prev, colorKey)=>{
        const lightColor = token[`${colorKey}1`];
        const lightBorderColor = token[`${colorKey}3`];
        const darkColor = token[`${colorKey}6`];
        const textColor = token[`${colorKey}7`];
        return Object.assign(Object.assign({}, prev), genCss(colorKey, {
            lightColor,
            lightBorderColor,
            darkColor,
            textColor
        }));
    }, {});
}
const genPresetStyle = (token)=>genPresetColor(token, (colorKey, { textColor, lightBorderColor, lightColor, darkColor })=>({
            [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
                color: textColor,
                background: lightColor,
                borderColor: lightBorderColor,
                '&-inverse': {
                    color: token.colorTextLightSolid,
                    background: darkColor,
                    borderColor: darkColor
                },
                [`&${token.componentCls}-borderless`]: {
                    borderColor: 'transparent'
                }
            }
        }));
const presetCmp = genStyleUtils_genSubStyleComponent([
    'Tag',
    'preset'
], (token)=>{
    const tagToken = prepareToken(token);
    return genPresetStyle(tagToken);
}, style_prepareComponentToken);
function capitalize(str) {
    if ('string' != typeof str) return str;
    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
}
const genTagStatusStyle = (token, status, cssVariableType)=>{
    const capitalizedCssVariableType = capitalize(cssVariableType);
    return {
        [`${token.componentCls}${token.componentCls}-${status}`]: {
            color: token[`color${cssVariableType}`],
            background: token[`color${capitalizedCssVariableType}Bg`],
            borderColor: token[`color${capitalizedCssVariableType}Border`],
            [`&${token.componentCls}-borderless`]: {
                borderColor: 'transparent'
            }
        }
    };
};
const statusCmp = genStyleUtils_genSubStyleComponent([
    'Tag',
    'status'
], (token)=>{
    const tagToken = prepareToken(token);
    return [
        genTagStatusStyle(tagToken, 'success', 'Success'),
        genTagStatusStyle(tagToken, 'processing', 'Info'),
        genTagStatusStyle(tagToken, 'error', 'Error'),
        genTagStatusStyle(tagToken, 'warning', 'Warning')
    ];
}, style_prepareComponentToken);
"use client";
var tag_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const InternalTag = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((tagProps, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, children, icon, color, onClose, bordered = true, visible: deprecatedVisible } = tagProps, props = tag_rest(tagProps, [
        "prefixCls",
        "className",
        "rootClassName",
        "style",
        "children",
        "icon",
        "color",
        "onClose",
        "bordered",
        "visible"
    ]);
    const { getPrefixCls, direction, tag: tagContext } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(ConfigContext);
    const [visible, setVisible] = __WEBPACK_EXTERNAL_MODULE_react__.useState(true);
    const domProps = omit(props, [
        'closeIcon',
        'closable'
    ]);
    if ('production' !== process.env.NODE_ENV) {
        const warning = devUseWarning('Tag');
        warning.deprecated(!('visible' in tagProps), 'visible', 'visible && <Tag />');
    }
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(()=>{
        if (void 0 !== deprecatedVisible) setVisible(deprecatedVisible);
    }, [
        deprecatedVisible
    ]);
    const isPreset = isPresetColor(color);
    const isStatus = isPresetStatusColor(color);
    const isInternalColor = isPreset || isStatus;
    const tagStyle = Object.assign(Object.assign({
        backgroundColor: color && !isInternalColor ? color : void 0
    }, null == tagContext ? void 0 : tagContext.style), style);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
    const tagClassName = classnames_default()(prefixCls, null == tagContext ? void 0 : tagContext.className, {
        [`${prefixCls}-${color}`]: isInternalColor,
        [`${prefixCls}-has-color`]: color && !isInternalColor,
        [`${prefixCls}-hidden`]: !visible,
        [`${prefixCls}-rtl`]: 'rtl' === direction,
        [`${prefixCls}-borderless`]: !bordered
    }, className, rootClassName, hashId, cssVarCls);
    const handleCloseClick = (e)=>{
        e.stopPropagation();
        null == onClose || onClose(e);
        if (e.defaultPrevented) return;
        setVisible(false);
    };
    const [, mergedCloseIcon] = useClosable(pickClosable(tagProps), pickClosable(tagContext), {
        closable: false,
        closeIconRender: (iconNode)=>{
            const replacement = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", {
                className: `${prefixCls}-close-icon`,
                onClick: handleCloseClick
            }, iconNode);
            return replaceElement(iconNode, replacement, (originProps)=>({
                    onClick: (e)=>{
                        var _a;
                        null == (_a = null == originProps ? void 0 : originProps.onClick) || _a.call(originProps, e);
                        handleCloseClick(e);
                    },
                    className: classnames_default()(null == originProps ? void 0 : originProps.className, `${prefixCls}-close-icon`)
                }));
        }
    });
    const isNeedWave = 'function' == typeof props.onClick || children && 'a' === children.type;
    const iconNode = icon || null;
    const kids = iconNode ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, null, iconNode, children && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", null, children)) : children;
    const tagNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", Object.assign({}, domProps, {
        ref: ref,
        className: tagClassName,
        style: tagStyle
    }), kids, mergedCloseIcon, isPreset && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(presetCmp, {
        key: "preset",
        prefixCls: prefixCls
    }), isStatus && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(statusCmp, {
        key: "status",
        prefixCls: prefixCls
    }));
    return wrapCSSVar(isNeedWave ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(_util_wave, {
        component: "Tag"
    }, tagNode) : tagNode);
});
const Tag = InternalTag;
if ('production' !== process.env.NODE_ENV) Tag.displayName = 'Tag';
Tag.CheckableTag = CheckableTag;
const es_tag = Tag;
export { collapse_Collapse as Collapse, config_provider as ConfigProvider, es_tag as Tag };
