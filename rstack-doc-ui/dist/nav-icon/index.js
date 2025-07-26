import './index.css';
/*! For license information please see index.js.LICENSE.txt */
import { jsx, jsxs } from "react/jsx-runtime";
import react_dom, { createPortal } from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
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
    __webpack_require__.g = (()=>{
        if ('object' == typeof globalThis) return globalThis;
        try {
            return this || new Function('return this')();
        } catch (e) {
            if ('object' == typeof window) return window;
        }
    })();
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
var classnames = __webpack_require__("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/ __webpack_require__.n(classnames);
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
function canUseDom_canUseDom() {
    return !!('undefined' != typeof window && window.document && window.document.createElement);
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
const getRenderPropValue = (propValue)=>{
    if (!propValue) return null;
    return 'function' == typeof propValue ? propValue() : propValue;
};
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (void 0 !== transitionName) return transitionName;
    return `${rootPrefixCls}-${motion}`;
};
function isFragment(child) {
    return child && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].isValidElement(child) && child.type === __WEBPACK_EXTERNAL_MODULE_react__["default"].Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].isValidElement(element)) return replacement;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].cloneElement(element, 'function' == typeof props ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
const context_defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${context_defaultPrefixCls}-${suffixCls}` : context_defaultPrefixCls;
};
const context_ConfigContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = context_ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __WEBPACK_EXTERNAL_MODULE_react__.useContext(context_ConfigContext);
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
function Popup(props) {
    var children = props.children, prefixCls = props.prefixCls, id = props.id, innerStyle = props.overlayInnerStyle, bodyClassName = props.bodyClassName, className = props.className, style = props.style;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: classnames_default()("".concat(prefixCls, "-content"), className),
        style: style
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: classnames_default()("".concat(prefixCls, "-inner"), bodyClassName),
        id: id,
        role: "tooltip",
        style: innerStyle
    }, 'function' == typeof children ? children() : children));
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
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
var react_is = __webpack_require__("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");
function useMemo_useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({});
    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}
var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
function isFragment_isFragment(object) {
    return object && 'object' === typeof_typeof(object) && (object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && object.type === REACT_FRAGMENT_TYPE;
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
var ref_useComposeRef = function() {
    for(var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)refs[_key2] = arguments[_key2];
    return useMemo_useMemo(function() {
        return ref_composeRef.apply(void 0, refs);
    }, refs, function(prev, next) {
        return prev.length !== next.length || prev.every(function(ref, i) {
            return ref !== next[i];
        });
    });
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
    return /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.isValidElement)(node) && !isFragment_isFragment(node);
}
var ref_getNodeRef = function(node) {
    if (node && isReactElement(node)) {
        var ele = node;
        return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
    }
    return null;
};
var OrderContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(null);
const es_Context = OrderContext;
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
var EMPTY_LIST = [];
function useDom(render, debug) {
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(function() {
        if (!canUseDom_canUseDom()) return null;
        var defaultEle = document.createElement('div');
        if ('production' !== process.env.NODE_ENV && debug) defaultEle.setAttribute('data-debug', debug);
        return defaultEle;
    }), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 1), ele = _React$useState2[0];
    var appendedRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(false);
    var queueCreate = __WEBPACK_EXTERNAL_MODULE_react__.useContext(es_Context);
    var _React$useState3 = __WEBPACK_EXTERNAL_MODULE_react__.useState(EMPTY_LIST), _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
    var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
        setQueue(function(origin) {
            var newQueue = [
                appendFn
            ].concat(_toConsumableArray(origin));
            return newQueue;
        });
    });
    function append() {
        if (!ele.parentElement) document.body.appendChild(ele);
        appendedRef.current = true;
    }
    function cleanup() {
        var _ele$parentElement;
        null == (_ele$parentElement = ele.parentElement) || _ele$parentElement.removeChild(ele);
        appendedRef.current = false;
    }
    hooks_useLayoutEffect(function() {
        if (render) if (queueCreate) queueCreate(append);
        else append();
        else cleanup();
        return cleanup;
    }, [
        render
    ]);
    hooks_useLayoutEffect(function() {
        if (queue.length) {
            queue.forEach(function(appendFn) {
                return appendFn();
            });
            setQueue(EMPTY_LIST);
        }
    }, [
        queue
    ]);
    return [
        ele,
        mergedQueueCreate
    ];
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
function dynamicCSS_getContainer(option) {
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
    var container = dynamicCSS_getContainer(option);
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
    var container = dynamicCSS_getContainer(option);
    return (option.styles || findStyles(container)).find(function(node) {
        return node.getAttribute(getMark(option)) === key;
    });
}
function dynamicCSS_removeCSS(key) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
        var container = dynamicCSS_getContainer(option);
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
    var container = dynamicCSS_getContainer(originOption);
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
function measureScrollbarSize(ele) {
    var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
    var measureEle = document.createElement('div');
    measureEle.id = randomId;
    var measureStyle = measureEle.style;
    measureStyle.position = 'absolute';
    measureStyle.left = '0';
    measureStyle.top = '0';
    measureStyle.width = '100px';
    measureStyle.height = '100px';
    measureStyle.overflow = 'scroll';
    var fallbackWidth;
    var fallbackHeight;
    if (ele) {
        var targetStyle = getComputedStyle(ele);
        measureStyle.scrollbarColor = targetStyle.scrollbarColor;
        measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
        var webkitScrollbarStyle = getComputedStyle(ele, '::-webkit-scrollbar');
        var width = parseInt(webkitScrollbarStyle.width, 10);
        var height = parseInt(webkitScrollbarStyle.height, 10);
        try {
            var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : '';
            var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : '';
            dynamicCSS_updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
        } catch (e) {
            console.error(e);
            fallbackWidth = width;
            fallbackHeight = height;
        }
    }
    document.body.appendChild(measureEle);
    var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
    var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
    document.body.removeChild(measureEle);
    dynamicCSS_removeCSS(randomId);
    return {
        width: scrollWidth,
        height: scrollHeight
    };
}
function getTargetScrollBarSize(target) {
    if ('undefined' == typeof document || !target || !(target instanceof Element)) return {
        width: 0,
        height: 0
    };
    return measureScrollbarSize(target);
}
function isBodyOverflowing() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
    var mergedLock = !!lock;
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(function() {
        uuid += 1;
        return "".concat(UNIQUE_ID, "_").concat(uuid);
    }), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 1), id = _React$useState2[0];
    hooks_useLayoutEffect(function() {
        if (mergedLock) {
            var scrollbarSize = getTargetScrollBarSize(document.body).width;
            var isOverflow = isBodyOverflowing();
            dynamicCSS_updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
        } else dynamicCSS_removeCSS(id);
        return function() {
            dynamicCSS_removeCSS(id);
        };
    }, [
        mergedLock,
        id
    ]);
}
var inline = false;
function inlineMock(nextInline) {
    if ('boolean' == typeof nextInline) inline = nextInline;
    return inline;
}
var Portal_getPortalContainer = function(getContainer) {
    if (false === getContainer) return false;
    if (!canUseDom_canUseDom() || !getContainer) return null;
    if ('string' == typeof getContainer) return document.querySelector(getContainer);
    if ('function' == typeof getContainer) return getContainer();
    return getContainer;
};
var Portal_Portal = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
    var open = props.open, autoLock = props.autoLock, getContainer = props.getContainer, debug = props.debug, _props$autoDestroy = props.autoDestroy, autoDestroy = void 0 === _props$autoDestroy ? true : _props$autoDestroy, children = props.children;
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(open), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
    var mergedRender = shouldRender || open;
    if ('production' !== process.env.NODE_ENV) es_warning(canUseDom_canUseDom() || !open, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.");
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        if (autoDestroy || open) setShouldRender(open);
    }, [
        open,
        autoDestroy
    ]);
    var _React$useState3 = __WEBPACK_EXTERNAL_MODULE_react__.useState(function() {
        return Portal_getPortalContainer(getContainer);
    }), _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        var customizeContainer = Portal_getPortalContainer(getContainer);
        setInnerContainer(null != customizeContainer ? customizeContainer : null);
    });
    var _useDom = useDom(mergedRender && !innerContainer, debug), _useDom2 = slicedToArray_slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
    var mergedContainer = null != innerContainer ? innerContainer : defaultContainer;
    useScrollLocker(autoLock && open && canUseDom_canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
    var childRef = null;
    if (children && ref_supportRef(children) && ref) {
        var _ref = children;
        childRef = _ref.ref;
    }
    var mergedRef = ref_useComposeRef(childRef, ref);
    if (!mergedRender || !canUseDom_canUseDom() || void 0 === innerContainer) return null;
    var renderInline = false === mergedContainer || inlineMock();
    var reffedChildren = children;
    if (ref) reffedChildren = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(children, {
        ref: mergedRef
    });
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_Context.Provider, {
        value: queueCreate
    }, renderInline ? reffedChildren : /*#__PURE__*/ createPortal(reffedChildren, mergedContainer));
});
if ('production' !== process.env.NODE_ENV) Portal_Portal.displayName = 'Portal';
const es_Portal = Portal_Portal;
const es = es_Portal;
function toArray_toArray(children) {
    var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var ret = [];
    __WEBPACK_EXTERNAL_MODULE_react__["default"].Children.forEach(children, function(child) {
        if (null == child && !option.keepEmpty) return;
        if (Array.isArray(child)) ret = ret.concat(toArray_toArray(child));
        else if (isFragment_isFragment(child) && child.props) ret = ret.concat(toArray_toArray(child.props.children, option));
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
        return null == (_ReactDOM$findDOMNode = react_dom.findDOMNode) ? void 0 : _ReactDOM$findDOMNode.call(react_dom, node);
    }
    return null;
}
var CollectionContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(null);
function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(0);
    var resizeInfosRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef([]);
    var onCollectionResize = __WEBPACK_EXTERNAL_MODULE_react__.useContext(CollectionContext);
    var onResize = __WEBPACK_EXTERNAL_MODULE_react__.useCallback(function(size, element, data) {
        resizeIdRef.current += 1;
        var currentId = resizeIdRef.current;
        resizeInfosRef.current.push({
            size: size,
            element: element,
            data: data
        });
        Promise.resolve().then(function() {
            if (currentId === resizeIdRef.current) {
                null == onBatchResize || onBatchResize(resizeInfosRef.current);
                resizeInfosRef.current = [];
            }
        });
        null == onCollectionResize || onCollectionResize(size, element, data);
    }, [
        onBatchResize,
        onCollectionResize
    ]);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(CollectionContext.Provider, {
        value: onResize
    }, children);
}
var MapShim = function() {
    if ('undefined' != typeof Map) return Map;
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) this.__entries__[index][1] = value;
            else this.__entries__.push([
                key,
                value
            ]);
        };
        class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) entries.splice(index, 1);
        };
        class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
            if (void 0 === ctx) ctx = null;
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
var isBrowser = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document;
var global$1 = function() {
    if (void 0 !== __webpack_require__.g && __webpack_require__.g.Math === Math) return __webpack_require__.g;
    if ('undefined' != typeof self && self.Math === Math) return self;
    if ('undefined' != typeof window && window.Math === Math) return window;
    return Function('return this')();
}();
var requestAnimationFrame$1 = function() {
    if ('function' == typeof requestAnimationFrame) return requestAnimationFrame.bind(global$1);
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) proxy();
    }
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            if (timeStamp - lastCallTime < trailingTimeout) return;
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight'
];
var mutationObserverSupported = 'undefined' != typeof MutationObserver;
var ResizeObserver_es_ResizeObserverController = function() {
    function ResizeObserverController() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) this.observers_.push(observer);
        if (!this.connected_) this.connect_();
    };
    ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        if (~index) observers.splice(index, 1);
        if (!observers.length && this.connected_) this.disconnect_();
    };
    ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) this.refresh();
    };
    ResizeObserverController.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    ResizeObserverController.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) return;
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    ResizeObserverController.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) return;
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) this.mutationsObserver_.disconnect();
        if (this.mutationEventsAdded_) document.removeEventListener('DOMSubtreeModified', this.refresh);
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = void 0 === _b ? '' : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) this.refresh();
    };
    ResizeObserverController.getInstance = function() {
        if (!this.instance_) this.instance_ = new ResizeObserverController();
        return this.instance_;
    };
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
    return parseFloat(value) || 0;
}
function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++)positions[_i - 1] = arguments[_i];
    return positions.reduce(function(size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
function getPaddings(styles) {
    var positions = [
        'top',
        'right',
        'bottom',
        'left'
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) return emptyRect;
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if ('border-box' === styles.boxSizing) {
        if (Math.round(width + horizPad) !== clientWidth) width -= getBordersSize(styles, 'left', 'right') + horizPad;
        if (Math.round(height + vertPad) !== clientHeight) height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
    if (!isDocumentElement(target)) {
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        if (1 !== Math.abs(vertScrollbar)) width -= vertScrollbar;
        if (1 !== Math.abs(horizScrollbar)) height -= horizScrollbar;
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
    if ('undefined' != typeof SVGGraphicsElement) return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && 'function' == typeof target.getBBox;
    };
}();
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
    if (!isBrowser) return emptyRect;
    if (isSVGGraphicsElement(target)) return getSVGContentRect(target);
    return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var Constr = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
var ResizeObserver_es_ResizeObservation = function() {
    function ResizeObservation(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserver_es_ResizeObserverEntry = function() {
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserver_es_ResizeObserverSPI = function() {
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if ('function' != typeof callback) throw new TypeError('The callback provided as parameter 1 is not a function.');
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' == typeof Element || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        if (observations.has(target)) return;
        observations.set(target, new ResizeObserver_es_ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
    };
    ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' == typeof Element || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        if (!observations.has(target)) return;
        observations.delete(target);
        if (!observations.size) this.controller_.removeObserver(this);
    };
    ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) _this.activeObservations_.push(observation);
        });
    };
    ResizeObserverSPI.prototype.broadcastActive = function() {
        if (!this.hasActive()) return;
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserver_es_ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
var ResizeObserver_es_observers = 'undefined' != typeof WeakMap ? new WeakMap() : new MapShim();
var ResizeObserver_es_ResizeObserver = function() {
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var controller = ResizeObserver_es_ResizeObserverController.getInstance();
        var observer = new ResizeObserver_es_ResizeObserverSPI(callback, controller, this);
        ResizeObserver_es_observers.set(this, observer);
    }
    return ResizeObserver;
}();
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function(method) {
    ResizeObserver_es_ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = ResizeObserver_es_observers.get(this))[method].apply(_a, arguments);
    };
});
var ResizeObserver_es_index = function() {
    if (void 0 !== global$1.ResizeObserver) return global$1.ResizeObserver;
    return ResizeObserver_es_ResizeObserver;
}();
const ResizeObserver_es = ResizeObserver_es_index;
var elementListeners = new Map();
function observerUtil_onResize(entities) {
    entities.forEach(function(entity) {
        var _elementListeners$get;
        var target = entity.target;
        null == (_elementListeners$get = elementListeners.get(target)) || _elementListeners$get.forEach(function(listener) {
            return listener(target);
        });
    });
}
var resizeObserver = new ResizeObserver_es(observerUtil_onResize);
process.env.NODE_ENV;
process.env.NODE_ENV;
function observe(element, callback) {
    if (!elementListeners.has(element)) {
        elementListeners.set(element, new Set());
        resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
    if (elementListeners.has(element)) {
        elementListeners.get(element).delete(callback);
        if (!elementListeners.get(element).size) {
            resizeObserver.unobserve(element);
            elementListeners.delete(element);
        }
    }
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
function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    var wrapperRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    var onCollectionResize = __WEBPACK_EXTERNAL_MODULE_react__.useContext(CollectionContext);
    var isRenderProps = 'function' == typeof children;
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    var sizeRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({
        width: -1,
        height: -1,
        offsetWidth: -1,
        offsetHeight: -1
    });
    var canRef = !isRenderProps && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(mergedChildren) && ref_supportRef(mergedChildren);
    var originRef = canRef ? ref_getNodeRef(mergedChildren) : null;
    var mergedRef = ref_useComposeRef(originRef, elementRef);
    var getDom = function() {
        var _elementRef$current;
        return findDOMNode(elementRef.current) || (elementRef.current && 'object' === typeof_typeof(elementRef.current) ? findDOMNode(null == (_elementRef$current = elementRef.current) ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
    };
    __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle(ref, function() {
        return getDom();
    });
    var propsRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(props);
    propsRef.current = props;
    var onInternalResize = __WEBPACK_EXTERNAL_MODULE_react__.useCallback(function(target) {
        var _propsRef$current = propsRef.current, onResize = _propsRef$current.onResize, data = _propsRef$current.data;
        var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
        var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
        var fixedWidth = Math.floor(width);
        var fixedHeight = Math.floor(height);
        if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
            var size = {
                width: fixedWidth,
                height: fixedHeight,
                offsetWidth: offsetWidth,
                offsetHeight: offsetHeight
            };
            sizeRef.current = size;
            var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
            var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
            var sizeInfo = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, size), {}, {
                offsetWidth: mergedOffsetWidth,
                offsetHeight: mergedOffsetHeight
            });
            null == onCollectionResize || onCollectionResize(sizeInfo, target, data);
            if (onResize) Promise.resolve().then(function() {
                onResize(sizeInfo, target);
            });
        }
    }, []);
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        var currentElement = getDom();
        if (currentElement && !disabled) observe(currentElement, onInternalResize);
        return function() {
            return unobserve(currentElement, onInternalResize);
        };
    }, [
        elementRef.current,
        disabled
    ]);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(DomWrapper_DomWrapper, {
        ref: wrapperRef
    }, canRef ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(mergedChildren, {
        ref: mergedRef
    }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(SingleObserver);
if ('production' !== process.env.NODE_ENV) RefSingleObserver.displayName = 'SingleObserver';
const es_SingleObserver = RefSingleObserver;
var INTERNAL_PREFIX_KEY = 'rc-observer-key';
function es_ResizeObserver(props, ref) {
    var children = props.children;
    var childNodes = 'function' == typeof children ? [
        children
    ] : toArray_toArray(children);
    if ('production' !== process.env.NODE_ENV) {
        if (childNodes.length > 1) warning_warning(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');
        else if (0 === childNodes.length) warning_warning(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
    }
    return childNodes.map(function(child, index) {
        var key = (null == child ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_SingleObserver, _extends({}, props, {
            key: key,
            ref: 0 === index ? ref : void 0
        }), child);
    });
}
var RefResizeObserver = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(es_ResizeObserver);
if ('production' !== process.env.NODE_ENV) RefResizeObserver.displayName = 'ResizeObserver';
RefResizeObserver.Collection = Collection;
const rc_resize_observer_es = RefResizeObserver;
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
function getUseId() {
    var fullClone = objectSpread2_objectSpread2({}, __WEBPACK_EXTERNAL_MODULE_react__);
    return fullClone.useId;
}
var useId_uuid = 0;
var useOriginId = getUseId();
const hooks_useId = useOriginId ? function(id) {
    var reactId = useOriginId();
    if (id) return id;
    if ('test' === process.env.NODE_ENV) return 'test-id';
    return reactId;
} : function(id) {
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState('ssr-id'), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        var nextId = useId_uuid;
        useId_uuid += 1;
        setInnerId("rc_unique_".concat(nextId));
    }, []);
    if (id) return id;
    if ('test' === process.env.NODE_ENV) return 'test-id';
    return innerId;
};
const isMobile = function() {
    if ('undefined' == typeof navigator || 'undefined' == typeof window) return false;
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null == agent ? void 0 : agent.substr(0, 4));
};
var context_Context = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({});
var es_DomWrapper_DomWrapper = /*#__PURE__*/ function(_React$Component) {
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
const es_DomWrapper = es_DomWrapper_DomWrapper;
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
function motion_getTransitionName(transitionName, transitionType) {
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
var useIsomorphicLayoutEffect = canUseDom_canUseDom() ? __WEBPACK_EXTERNAL_MODULE_react__.useLayoutEffect : __WEBPACK_EXTERNAL_MODULE_react__.useEffect;
const hooks_useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
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
function raf_cleanup(id) {
    rafIds.delete(id);
}
var raf_wrapperRaf = function(callback) {
    var times = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
        if (0 === leftTimes) {
            raf_cleanup(id);
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
    raf_cleanup(id);
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
function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
const useStepQueue = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = slicedToArray_slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame(), _useNextFrame2 = slicedToArray_slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    hooks_useIsomorphicLayoutEffect(function() {
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
    var active = isActive(step);
    activeRef.current = active;
    var visibleRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(null);
    hooks_useIsomorphicLayoutEffect(function() {
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
            else if (isActive(statusStep)) statusSuffix = 'active';
            else if (statusStep === STEP_START) statusSuffix = 'start';
            var motionCls = motion_getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
            motionChildren = children(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedProps), {}, {
                className: classnames_default()(motion_getTransitionName(motionName, status), defineProperty_defineProperty(defineProperty_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, 'string' == typeof motionName)),
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
const rc_motion_es = es_CSSMotion;
function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref = arrow || {}, className = _ref.className, content = _ref.content;
    var _arrowPos$x = arrowPos.x, x = void 0 === _arrowPos$x ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = void 0 === _arrowPos$y ? 0 : _arrowPos$y;
    var arrowRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
    if (!align || !align.points) return null;
    var alignStyle = {
        position: 'absolute'
    };
    if (false !== align.autoArrow) {
        var popupPoints = align.points[0];
        var targetPoints = align.points[1];
        var popupTB = popupPoints[0];
        var popupLR = popupPoints[1];
        var targetTB = targetPoints[0];
        var targetLR = targetPoints[1];
        if (popupTB !== targetTB && [
            't',
            'b'
        ].includes(popupTB)) if ('t' === popupTB) alignStyle.top = 0;
        else alignStyle.bottom = 0;
        else alignStyle.top = y;
        if (popupLR !== targetLR && [
            'l',
            'r'
        ].includes(popupLR)) if ('l' === popupLR) alignStyle.left = 0;
        else alignStyle.right = 0;
        else alignStyle.left = x;
    }
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        ref: arrowRef,
        className: classnames_default()("".concat(prefixCls, "-arrow"), className),
        style: alignStyle
    }, content);
}
function Mask(props) {
    var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) return null;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_motion_es, _extends({}, motion, {
        motionAppear: true,
        visible: open,
        removeOnLeave: true
    }), function(_ref) {
        var className = _ref.className;
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
            style: {
                zIndex: zIndex
            },
            className: classnames_default()("".concat(prefixCls, "-mask"), className)
        });
    });
}
var PopupContent = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.memo(function(_ref) {
    var children = _ref.children;
    return children;
}, function(_, next) {
    return next.cache;
});
if ('production' !== process.env.NODE_ENV) PopupContent.displayName = 'PopupContent';
const Popup_PopupContent = PopupContent;
var Popup_Popup = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, onPointerDownCapture = props.onPointerDownCapture, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = 'function' == typeof popup ? popup() : popup;
    var isNodeVisible = open || keepDom;
    var getPopupContainerNeedParams = (null == getPopupContainer ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    hooks_useLayoutEffect(function() {
        if (!show && getPopupContainerNeedParams && target) setShow(true);
    }, [
        show,
        getPopupContainerNeedParams,
        target
    ]);
    if (!show) return null;
    var AUTO = 'auto';
    var offsetStyle = {
        left: '-1000vw',
        top: '-1000vh',
        right: AUTO,
        bottom: AUTO
    };
    if (ready || !open) {
        var _experimental;
        var points = align.points;
        var dynamicInset = align.dynamicInset || (null == (_experimental = align._experimental) ? void 0 : _experimental.dynamicInset);
        var alignRight = dynamicInset && 'r' === points[0][1];
        var alignBottom = dynamicInset && 'b' === points[0][0];
        if (alignRight) {
            offsetStyle.right = offsetR;
            offsetStyle.left = AUTO;
        } else {
            offsetStyle.left = offsetX;
            offsetStyle.right = AUTO;
        }
        if (alignBottom) {
            offsetStyle.bottom = offsetB;
            offsetStyle.top = AUTO;
        } else {
            offsetStyle.top = offsetY;
            offsetStyle.bottom = AUTO;
        }
    }
    var miscStyle = {};
    if (stretch) {
        if (stretch.includes('height') && targetHeight) miscStyle.height = targetHeight;
        else if (stretch.includes('minHeight') && targetHeight) miscStyle.minHeight = targetHeight;
        if (stretch.includes('width') && targetWidth) miscStyle.width = targetWidth;
        else if (stretch.includes('minWidth') && targetWidth) miscStyle.minWidth = targetWidth;
    }
    if (!open) miscStyle.pointerEvents = 'none';
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Portal, {
        open: forceRender || isNodeVisible,
        getContainer: getPopupContainer && function() {
            return getPopupContainer(target);
        },
        autoDestroy: autoDestroy
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Mask, {
        prefixCls: prefixCls,
        open: open,
        zIndex: zIndex,
        mask: mask,
        motion: maskMotion
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_resize_observer_es, {
        onResize: onAlign,
        disabled: !open
    }, function(resizeObserverRef) {
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_motion_es, _extends({
            motionAppear: true,
            motionEnter: true,
            motionLeave: true,
            removeOnLeave: false,
            forceRender: forceRender,
            leavedClassName: "".concat(prefixCls, "-hidden")
        }, motion, {
            onAppearPrepare: onPrepare,
            onEnterPrepare: onPrepare,
            visible: open,
            onVisibleChanged: function(nextVisible) {
                var _motion$onVisibleChan;
                null == motion || null == (_motion$onVisibleChan = motion.onVisibleChanged) || _motion$onVisibleChan.call(motion, nextVisible);
                _onVisibleChanged(nextVisible);
            }
        }), function(_ref, motionRef) {
            var motionClassName = _ref.className, motionStyle = _ref.style;
            var cls = classnames_default()(prefixCls, motionClassName, className);
            return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
                ref: ref_composeRef(resizeObserverRef, ref, motionRef),
                className: cls,
                style: objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({
                    '--arrow-x': "".concat(arrowPos.x || 0, "px"),
                    '--arrow-y': "".concat(arrowPos.y || 0, "px")
                }, offsetStyle), miscStyle), motionStyle), {}, {
                    boxSizing: 'border-box',
                    zIndex: zIndex
                }, style),
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onPointerEnter: onPointerEnter,
                onClick: onClick,
                onPointerDownCapture: onPointerDownCapture
            }, arrow && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Arrow, {
                prefixCls: prefixCls,
                arrow: arrow,
                arrowPos: arrowPos,
                align: align
            }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Popup_PopupContent, {
                cache: !open && !fresh
            }, childNode));
        });
    }));
});
if ('production' !== process.env.NODE_ENV) Popup_Popup.displayName = 'Popup';
const es_Popup = Popup_Popup;
var TriggerWrapper = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = ref_supportRef(children);
    var setRef = __WEBPACK_EXTERNAL_MODULE_react__.useCallback(function(node) {
        ref_fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
    }, [
        getTriggerDOMNode
    ]);
    var mergedRef = ref_useComposeRef(setRef, ref_getNodeRef(children));
    return canUseRef ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(children, {
        ref: mergedRef
    }) : children;
});
if ('production' !== process.env.NODE_ENV) TriggerWrapper.displayName = 'TriggerWrapper';
const es_TriggerWrapper = TriggerWrapper;
var TriggerContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(null);
const es_context = TriggerContext;
function useAction_toArray(val) {
    return val ? Array.isArray(val) ? val : [
        val
    ] : [];
}
function useAction(mobile, action, showAction, hideAction) {
    return __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        var mergedShowAction = useAction_toArray(null != showAction ? showAction : action);
        var mergedHideAction = useAction_toArray(null != hideAction ? hideAction : action);
        var showActionSet = new Set(mergedShowAction);
        var hideActionSet = new Set(mergedHideAction);
        if (mobile) {
            if (showActionSet.has('hover')) {
                showActionSet.delete('hover');
                showActionSet.add('click');
            }
            if (hideActionSet.has('hover')) {
                hideActionSet.delete('hover');
                hideActionSet.add('click');
            }
        }
        return [
            showActionSet,
            hideActionSet
        ];
    }, [
        mobile,
        action,
        showAction,
        hideAction
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
function isPointsEq() {
    var a1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
    if (isAlignPoint) return a1[0] === a2[0];
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for(var i = 0; i < placements.length; i += 1){
        var _builtinPlacements$pl;
        var placement = placements[i];
        if (isPointsEq(null == (_builtinPlacements$pl = builtinPlacements[placement]) ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) return "".concat(prefixCls, "-placement-").concat(placement);
    }
    return '';
}
function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) return motion;
    if (animation) return {
        motionName: "".concat(prefixCls, "-").concat(animation)
    };
    if (transitionName) return {
        motionName: transitionName
    };
    return null;
}
function getWin(ele) {
    return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
    var scrollerList = [];
    var current = null == ele ? void 0 : ele.parentElement;
    var scrollStyle = [
        'hidden',
        'scroll',
        'clip',
        'auto'
    ];
    while(current){
        var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
        if ([
            overflowX,
            overflowY,
            overflow
        ].some(function(o) {
            return scrollStyle.includes(o);
        })) scrollerList.push(current);
        current = current.parentElement;
    }
    return scrollerList;
}
function toNum(num) {
    var defaultValue = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
    return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
    var visibleArea = objectSpread2_objectSpread2({}, initArea);
    (scrollerList || []).forEach(function(ele) {
        if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) return;
        var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
        var eleRect = ele.getBoundingClientRect();
        var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
        var borderTopNum = getPxValue(borderTopWidth);
        var borderBottomNum = getPxValue(borderBottomWidth);
        var borderLeftNum = getPxValue(borderLeftWidth);
        var borderRightNum = getPxValue(borderRightWidth);
        var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
        var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);
        var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
        var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
        var scaledBorderTopWidth = borderTopNum * scaleY;
        var scaledBorderBottomWidth = borderBottomNum * scaleY;
        var scaledBorderLeftWidth = borderLeftNum * scaleX;
        var scaledBorderRightWidth = borderRightNum * scaleX;
        var clipMarginWidth = 0;
        var clipMarginHeight = 0;
        if ('clip' === overflow) {
            var clipNum = getPxValue(overflowClipMargin);
            clipMarginWidth = clipNum * scaleX;
            clipMarginHeight = clipNum * scaleY;
        }
        var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
        var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
        var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
        var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
        visibleArea.left = Math.max(visibleArea.left, eleLeft);
        visibleArea.top = Math.max(visibleArea.top, eleTop);
        visibleArea.right = Math.min(visibleArea.right, eleRight);
        visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
}
function getUnitOffset(size) {
    var offset = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var offsetStr = "".concat(offset);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) return size * (parseFloat(cells[1]) / 100);
    return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
    var _ref = offset || [], _ref2 = slicedToArray_slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
    return [
        getUnitOffset(rect.width, offsetX),
        getUnitOffset(rect.height, offsetY)
    ];
}
function splitPoints() {
    var points = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return [
        points[0],
        points[1]
    ];
}
function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x;
    var y;
    y = 't' === topBottom ? rect.y : 'b' === topBottom ? rect.y + rect.height : rect.y + rect.height / 2;
    x = 'l' === leftRight ? rect.x : 'r' === leftRight ? rect.x + rect.width : rect.x + rect.width / 2;
    return {
        x: x,
        y: y
    };
}
function reversePoints(points, index) {
    var reverseMap = {
        t: 'b',
        b: 't',
        l: 'r',
        r: 'l'
    };
    return points.map(function(point, i) {
        if (i === index) return reverseMap[point] || 'c';
        return point;
    }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState({
        ready: false,
        offsetX: 0,
        offsetY: 0,
        offsetR: 0,
        offsetB: 0,
        arrowX: 0,
        arrowY: 0,
        scaleX: 1,
        scaleY: 1,
        align: builtinPlacements[placement] || {}
    }), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(0);
    var scrollerList = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        if (!popupEle) return [];
        return collectScroller(popupEle);
    }, [
        popupEle
    ]);
    var prevFlipRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({});
    var resetFlipCache = function() {
        prevFlipRef.current = {};
    };
    if (!open) resetFlipCache();
    var onAlign = useEvent(function() {
        if (popupEle && target && open) {
            var _popupElement$parentE, _popupRect$x, _popupRect$y, _popupElement$parentE2;
            var popupElement = popupEle;
            var doc = popupElement.ownerDocument;
            var win = getWin(popupElement);
            var _win$getComputedStyle = win.getComputedStyle(popupElement), popupPosition = _win$getComputedStyle.position;
            var originLeft = popupElement.style.left;
            var originTop = popupElement.style.top;
            var originRight = popupElement.style.right;
            var originBottom = popupElement.style.bottom;
            var originOverflow = popupElement.style.overflow;
            var placementInfo = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, builtinPlacements[placement]), popupAlign);
            var placeholderElement = doc.createElement('div');
            null == (_popupElement$parentE = popupElement.parentElement) || _popupElement$parentE.appendChild(placeholderElement);
            placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
            placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
            placeholderElement.style.position = popupPosition;
            placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
            placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
            popupElement.style.left = '0';
            popupElement.style.top = '0';
            popupElement.style.right = 'auto';
            popupElement.style.bottom = 'auto';
            popupElement.style.overflow = 'hidden';
            var targetRect;
            if (Array.isArray(target)) targetRect = {
                x: target[0],
                y: target[1],
                width: 0,
                height: 0
            };
            else {
                var _rect$x, _rect$y;
                var rect = target.getBoundingClientRect();
                rect.x = null != (_rect$x = rect.x) ? _rect$x : rect.left;
                rect.y = null != (_rect$y = rect.y) ? _rect$y : rect.top;
                targetRect = {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height
                };
            }
            var popupRect = popupElement.getBoundingClientRect();
            var _win$getComputedStyle2 = win.getComputedStyle(popupElement), height = _win$getComputedStyle2.height, width = _win$getComputedStyle2.width;
            popupRect.x = null != (_popupRect$x = popupRect.x) ? _popupRect$x : popupRect.left;
            popupRect.y = null != (_popupRect$y = popupRect.y) ? _popupRect$y : popupRect.top;
            var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
            var popupHeight = popupRect.height;
            var popupWidth = popupRect.width;
            var targetHeight = targetRect.height;
            var targetWidth = targetRect.width;
            var visibleRegion = {
                left: 0,
                top: 0,
                right: clientWidth,
                bottom: clientHeight
            };
            var scrollRegion = {
                left: -scrollLeft,
                top: -scrollTop,
                right: scrollWidth - scrollLeft,
                bottom: scrollHeight - scrollTop
            };
            var htmlRegion = placementInfo.htmlRegion;
            var VISIBLE = 'visible';
            var VISIBLE_FIRST = 'visibleFirst';
            if ('scroll' !== htmlRegion && htmlRegion !== VISIBLE_FIRST) htmlRegion = VISIBLE;
            var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
            var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
            var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
            var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
            var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
            popupElement.style.left = 'auto';
            popupElement.style.top = 'auto';
            popupElement.style.right = '0';
            popupElement.style.bottom = '0';
            var popupMirrorRect = popupElement.getBoundingClientRect();
            popupElement.style.left = originLeft;
            popupElement.style.top = originTop;
            popupElement.style.right = originRight;
            popupElement.style.bottom = originBottom;
            popupElement.style.overflow = originOverflow;
            null == (_popupElement$parentE2 = popupElement.parentElement) || _popupElement$parentE2.removeChild(placeholderElement);
            var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
            var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);
            if (0 === _scaleX || 0 === _scaleY || isDOM(target) && !isVisible(target)) return;
            var offset = placementInfo.offset, targetOffset = placementInfo.targetOffset;
            var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = slicedToArray_slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
            var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset), _getNumberOffset4 = slicedToArray_slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
            targetRect.x -= targetOffsetX;
            targetRect.y -= targetOffsetY;
            var _ref3 = placementInfo.points || [], _ref4 = slicedToArray_slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
            var targetPoints = splitPoints(targetPoint);
            var popupPoints = splitPoints(popupPoint);
            var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
            var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
            var nextAlignInfo = objectSpread2_objectSpread2({}, placementInfo);
            var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
            var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
            function getIntersectionVisibleArea(offsetX, offsetY) {
                var area = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : visibleArea;
                var l = popupRect.x + offsetX;
                var t = popupRect.y + offsetY;
                var r = l + popupWidth;
                var b = t + popupHeight;
                var visibleL = Math.max(l, area.left);
                var visibleT = Math.max(t, area.top);
                var visibleR = Math.min(r, area.right);
                var visibleB = Math.min(b, area.bottom);
                return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
            }
            var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
            var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
            var targetAlignPointTL = getAlignPoint(targetRect, [
                't',
                'l'
            ]);
            var popupAlignPointTL = getAlignPoint(popupRect, [
                't',
                'l'
            ]);
            var targetAlignPointBR = getAlignPoint(targetRect, [
                'b',
                'r'
            ]);
            var popupAlignPointBR = getAlignPoint(popupRect, [
                'b',
                'r'
            ]);
            var overflow = placementInfo.overflow || {};
            var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
            var supportAdjust = function(val) {
                if ('boolean' == typeof val) return val;
                return val >= 0;
            };
            var nextPopupY;
            var nextPopupBottom;
            var nextPopupX;
            var nextPopupRight;
            function syncNextPopupPosition() {
                nextPopupY = popupRect.y + nextOffsetY;
                nextPopupBottom = nextPopupY + popupHeight;
                nextPopupX = popupRect.x + nextOffsetX;
                nextPopupRight = nextPopupX + popupWidth;
            }
            syncNextPopupPosition();
            var needAdjustY = supportAdjust(adjustY);
            var sameTB = popupPoints[0] === targetPoints[0];
            if (needAdjustY && 't' === popupPoints[0] && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
                var tmpNextOffsetY = nextOffsetY;
                if (sameTB) tmpNextOffsetY -= popupHeight - targetHeight;
                else tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
                var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
                var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
                if (newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.bt = true;
                    nextOffsetY = tmpNextOffsetY;
                    popupOffsetY = -popupOffsetY;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 0),
                        reversePoints(targetPoints, 0)
                    ];
                } else prevFlipRef.current.bt = false;
            }
            if (needAdjustY && 'b' === popupPoints[0] && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
                var _tmpNextOffsetY = nextOffsetY;
                if (sameTB) _tmpNextOffsetY += popupHeight - targetHeight;
                else _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
                var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
                var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
                if (_newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.tb = true;
                    nextOffsetY = _tmpNextOffsetY;
                    popupOffsetY = -popupOffsetY;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 0),
                        reversePoints(targetPoints, 0)
                    ];
                } else prevFlipRef.current.tb = false;
            }
            var needAdjustX = supportAdjust(adjustX);
            var sameLR = popupPoints[1] === targetPoints[1];
            if (needAdjustX && 'l' === popupPoints[1] && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
                var tmpNextOffsetX = nextOffsetX;
                if (sameLR) tmpNextOffsetX -= popupWidth - targetWidth;
                else tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
                var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
                var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                if (_newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.rl = true;
                    nextOffsetX = tmpNextOffsetX;
                    popupOffsetX = -popupOffsetX;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 1),
                        reversePoints(targetPoints, 1)
                    ];
                } else prevFlipRef.current.rl = false;
            }
            if (needAdjustX && 'r' === popupPoints[1] && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
                var _tmpNextOffsetX = nextOffsetX;
                if (sameLR) _tmpNextOffsetX += popupWidth - targetWidth;
                else _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
                var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
                var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                if (_newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.lr = true;
                    nextOffsetX = _tmpNextOffsetX;
                    popupOffsetX = -popupOffsetX;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 1),
                        reversePoints(targetPoints, 1)
                    ];
                } else prevFlipRef.current.lr = false;
            }
            syncNextPopupPosition();
            var numShiftX = true === shiftX ? 0 : shiftX;
            if ('number' == typeof numShiftX) {
                if (nextPopupX < visibleRegionArea.left) {
                    nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
                    if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
                }
                if (nextPopupRight > visibleRegionArea.right) {
                    nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
                    if (targetRect.x > visibleRegionArea.right - numShiftX) nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
                }
            }
            var numShiftY = true === shiftY ? 0 : shiftY;
            if ('number' == typeof numShiftY) {
                if (nextPopupY < visibleRegionArea.top) {
                    nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
                    if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
                }
                if (nextPopupBottom > visibleRegionArea.bottom) {
                    nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
                    if (targetRect.y > visibleRegionArea.bottom - numShiftY) nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
                }
            }
            var popupLeft = popupRect.x + nextOffsetX;
            var popupRight = popupLeft + popupWidth;
            var popupTop = popupRect.y + nextOffsetY;
            var popupBottom = popupTop + popupHeight;
            var targetLeft = targetRect.x;
            var targetRight = targetLeft + targetWidth;
            var targetTop = targetRect.y;
            var targetBottom = targetTop + targetHeight;
            var maxLeft = Math.max(popupLeft, targetLeft);
            var minRight = Math.min(popupRight, targetRight);
            var xCenter = (maxLeft + minRight) / 2;
            var nextArrowX = xCenter - popupLeft;
            var maxTop = Math.max(popupTop, targetTop);
            var minBottom = Math.min(popupBottom, targetBottom);
            var yCenter = (maxTop + minBottom) / 2;
            var nextArrowY = yCenter - popupTop;
            null == onPopupAlign || onPopupAlign(popupEle, nextAlignInfo);
            var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
            var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
            if (1 === _scaleX) {
                nextOffsetX = Math.round(nextOffsetX);
                offsetX4Right = Math.round(offsetX4Right);
            }
            if (1 === _scaleY) {
                nextOffsetY = Math.round(nextOffsetY);
                offsetY4Bottom = Math.round(offsetY4Bottom);
            }
            var nextOffsetInfo = {
                ready: true,
                offsetX: nextOffsetX / _scaleX,
                offsetY: nextOffsetY / _scaleY,
                offsetR: offsetX4Right / _scaleX,
                offsetB: offsetY4Bottom / _scaleY,
                arrowX: nextArrowX / _scaleX,
                arrowY: nextArrowY / _scaleY,
                scaleX: _scaleX,
                scaleY: _scaleY,
                align: nextAlignInfo
            };
            setOffsetInfo(nextOffsetInfo);
        }
    });
    var triggerAlign = function() {
        alignCountRef.current += 1;
        var id = alignCountRef.current;
        Promise.resolve().then(function() {
            if (alignCountRef.current === id) onAlign();
        });
    };
    var resetReady = function() {
        setOffsetInfo(function(ori) {
            return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, ori), {}, {
                ready: false
            });
        });
    };
    hooks_useLayoutEffect(resetReady, [
        placement
    ]);
    hooks_useLayoutEffect(function() {
        if (!open) resetReady();
    }, [
        open
    ]);
    return [
        offsetInfo.ready,
        offsetInfo.offsetX,
        offsetInfo.offsetY,
        offsetInfo.offsetR,
        offsetInfo.offsetB,
        offsetInfo.arrowX,
        offsetInfo.arrowY,
        offsetInfo.scaleX,
        offsetInfo.scaleY,
        offsetInfo.align,
        triggerAlign
    ];
}
function useWatch(open, target, popup, onAlign, onScroll) {
    hooks_useLayoutEffect(function() {
        if (open && target && popup) {
            var targetElement = target;
            var popupElement = popup;
            var targetScrollList = collectScroller(targetElement);
            var popupScrollList = collectScroller(popupElement);
            var win = getWin(popupElement);
            var mergedList = new Set([
                win
            ].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
            function notifyScroll() {
                onAlign();
                onScroll();
            }
            mergedList.forEach(function(scroller) {
                scroller.addEventListener('scroll', notifyScroll, {
                    passive: true
                });
            });
            win.addEventListener('resize', notifyScroll, {
                passive: true
            });
            onAlign();
            return function() {
                mergedList.forEach(function(scroller) {
                    scroller.removeEventListener('scroll', notifyScroll);
                    win.removeEventListener('resize', notifyScroll);
                });
            };
        }
    }, [
        open,
        target,
        popup
    ]);
}
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    var openRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(open);
    openRef.current = open;
    var popupPointerDownRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(false);
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        if (clickToHide && popupEle && (!mask || maskClosable)) {
            var onPointerDown = function() {
                popupPointerDownRef.current = false;
            };
            var onTriggerClose = function(e) {
                var _e$composedPath;
                if (openRef.current && !inPopupOrChild((null == (_e$composedPath = e.composedPath) || null == (_e$composedPath = _e$composedPath.call(e)) ? void 0 : _e$composedPath[0]) || e.target) && !popupPointerDownRef.current) triggerOpen(false);
            };
            var win = getWin(popupEle);
            win.addEventListener('pointerdown', onPointerDown, true);
            win.addEventListener('mousedown', onTriggerClose, true);
            win.addEventListener('contextmenu', onTriggerClose, true);
            var targetShadowRoot = getShadowRoot(targetEle);
            if (targetShadowRoot) {
                targetShadowRoot.addEventListener('mousedown', onTriggerClose, true);
                targetShadowRoot.addEventListener('contextmenu', onTriggerClose, true);
            }
            if ('production' !== process.env.NODE_ENV) {
                var _targetEle$getRootNod, _popupEle$getRootNode;
                var targetRoot = null == targetEle || null == (_targetEle$getRootNod = targetEle.getRootNode) ? void 0 : _targetEle$getRootNod.call(targetEle);
                var popupRoot = null == (_popupEle$getRootNode = popupEle.getRootNode) ? void 0 : _popupEle$getRootNode.call(popupEle);
                warning_warning(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
            }
            return function() {
                win.removeEventListener('pointerdown', onPointerDown, true);
                win.removeEventListener('mousedown', onTriggerClose, true);
                win.removeEventListener('contextmenu', onTriggerClose, true);
                if (targetShadowRoot) {
                    targetShadowRoot.removeEventListener('mousedown', onTriggerClose, true);
                    targetShadowRoot.removeEventListener('contextmenu', onTriggerClose, true);
                }
            };
        }
    }, [
        clickToHide,
        targetEle,
        popupEle,
        mask,
        maskClosable
    ]);
    function onPopupPointerDown() {
        popupPointerDownRef.current = true;
    }
    return onPopupPointerDown;
}
var es_excluded = [
    "prefixCls",
    "children",
    "action",
    "showAction",
    "hideAction",
    "popupVisible",
    "defaultPopupVisible",
    "onPopupVisibleChange",
    "afterPopupVisibleChange",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "focusDelay",
    "blurDelay",
    "mask",
    "maskClosable",
    "getPopupContainer",
    "forceRender",
    "autoDestroy",
    "destroyPopupOnHide",
    "popup",
    "popupClassName",
    "popupStyle",
    "popupPlacement",
    "builtinPlacements",
    "popupAlign",
    "zIndex",
    "stretch",
    "getPopupClassNameFromAlign",
    "fresh",
    "alignPoint",
    "onPopupClick",
    "onPopupAlign",
    "arrow",
    "popupMotion",
    "maskMotion",
    "popupTransitionName",
    "popupAnimation",
    "maskTransitionName",
    "maskAnimation",
    "className",
    "getTriggerDOMNode"
];
function generateTrigger() {
    var PortalComponent = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es;
    var Trigger = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(function(props, ref) {
        var _props$prefixCls = props.prefixCls, prefixCls = void 0 === _props$prefixCls ? 'rc-trigger-popup' : _props$prefixCls, children = props.children, _props$action = props.action, action = void 0 === _props$action ? 'hover' : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = void 0 === _props$mouseLeaveDela ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = void 0 === _props$maskClosable ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = void 0 === _props$builtinPlaceme ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = objectWithoutProperties_objectWithoutProperties(props, es_excluded);
        var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
        var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState(false), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
        hooks_useLayoutEffect(function() {
            setMobile(isMobile());
        }, []);
        var subPopupElements = __WEBPACK_EXTERNAL_MODULE_react__.useRef({});
        var parentContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(es_context);
        var context = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
            return {
                registerSubPopup: function(id, subPopupEle) {
                    subPopupElements.current[id] = subPopupEle;
                    null == parentContext || parentContext.registerSubPopup(id, subPopupEle);
                }
            };
        }, [
            parentContext
        ]);
        var id = hooks_useId();
        var _React$useState3 = __WEBPACK_EXTERNAL_MODULE_react__.useState(null), _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
        var externalPopupRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
        var setPopupRef = useEvent(function(node) {
            externalPopupRef.current = node;
            if (isDOM(node) && popupEle !== node) setPopupEle(node);
            null == parentContext || parentContext.registerSubPopup(id, node);
        });
        var _React$useState5 = __WEBPACK_EXTERNAL_MODULE_react__.useState(null), _React$useState6 = slicedToArray_slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
        var externalForwardRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
        var setTargetRef = useEvent(function(node) {
            if (isDOM(node) && targetEle !== node) {
                setTargetEle(node);
                externalForwardRef.current = node;
            }
        });
        var child = __WEBPACK_EXTERNAL_MODULE_react__.Children.only(children);
        var originChildProps = (null == child ? void 0 : child.props) || {};
        var cloneProps = {};
        var inPopupOrChild = useEvent(function(ele) {
            var _getShadowRoot, _getShadowRoot2;
            var childDOM = targetEle;
            return (null == childDOM ? void 0 : childDOM.contains(ele)) || (null == (_getShadowRoot = getShadowRoot(childDOM)) ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (null == popupEle ? void 0 : popupEle.contains(ele)) || (null == (_getShadowRoot2 = getShadowRoot(popupEle)) ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
                return (null == subPopupEle ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
            });
        });
        var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
        var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
        var _React$useState7 = __WEBPACK_EXTERNAL_MODULE_react__.useState(defaultPopupVisible || false), _React$useState8 = slicedToArray_slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
        var mergedOpen = null != popupVisible ? popupVisible : internalOpen;
        var setMergedOpen = useEvent(function(nextOpen) {
            if (void 0 === popupVisible) setInternalOpen(nextOpen);
        });
        hooks_useLayoutEffect(function() {
            setInternalOpen(popupVisible || false);
        }, [
            popupVisible
        ]);
        var openRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(mergedOpen);
        openRef.current = mergedOpen;
        var lastTriggerRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef([]);
        lastTriggerRef.current = [];
        var internalTriggerOpen = useEvent(function(nextOpen) {
            var _lastTriggerRef$curre;
            setMergedOpen(nextOpen);
            if ((null != (_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
                lastTriggerRef.current.push(nextOpen);
                null == onPopupVisibleChange || onPopupVisibleChange(nextOpen);
            }
        });
        var delayRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
        var clearDelay = function() {
            clearTimeout(delayRef.current);
        };
        var triggerOpen = function(nextOpen) {
            var delay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            clearDelay();
            if (0 === delay) internalTriggerOpen(nextOpen);
            else delayRef.current = setTimeout(function() {
                internalTriggerOpen(nextOpen);
            }, 1000 * delay);
        };
        __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
            return clearDelay;
        }, []);
        var _React$useState9 = __WEBPACK_EXTERNAL_MODULE_react__.useState(false), _React$useState10 = slicedToArray_slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
        hooks_useLayoutEffect(function(firstMount) {
            if (!firstMount || mergedOpen) setInMotion(true);
        }, [
            mergedOpen
        ]);
        var _React$useState11 = __WEBPACK_EXTERNAL_MODULE_react__.useState(null), _React$useState12 = slicedToArray_slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
        var _React$useState13 = __WEBPACK_EXTERNAL_MODULE_react__.useState(null), _React$useState14 = slicedToArray_slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
        var setMousePosByEvent = function(event) {
            setMousePos([
                event.clientX,
                event.clientY
            ]);
        };
        var _useAlign = useAlign(mergedOpen, popupEle, alignPoint && null !== mousePos ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = slicedToArray_slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
        var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = slicedToArray_slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
        var clickToShow = showActions.has('click');
        var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
        var triggerAlign = useEvent(function() {
            if (!inMotion) onAlign();
        });
        var onScroll = function() {
            if (openRef.current && alignPoint && clickToHide) triggerOpen(false);
        };
        useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
        hooks_useLayoutEffect(function() {
            triggerAlign();
        }, [
            mousePos,
            popupPlacement
        ]);
        hooks_useLayoutEffect(function() {
            if (mergedOpen && !(null != builtinPlacements && builtinPlacements[popupPlacement])) triggerAlign();
        }, [
            JSON.stringify(popupAlign)
        ]);
        var alignedClassName = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
            var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
            return classnames_default()(baseClassName, null == getPopupClassNameFromAlign ? void 0 : getPopupClassNameFromAlign(alignInfo));
        }, [
            alignInfo,
            getPopupClassNameFromAlign,
            builtinPlacements,
            prefixCls,
            alignPoint
        ]);
        __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle(ref, function() {
            return {
                nativeElement: externalForwardRef.current,
                popupElement: externalPopupRef.current,
                forceAlign: triggerAlign
            };
        });
        var _React$useState15 = __WEBPACK_EXTERNAL_MODULE_react__.useState(0), _React$useState16 = slicedToArray_slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
        var _React$useState17 = __WEBPACK_EXTERNAL_MODULE_react__.useState(0), _React$useState18 = slicedToArray_slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
        var syncTargetSize = function() {
            if (stretch && targetEle) {
                var rect = targetEle.getBoundingClientRect();
                setTargetWidth(rect.width);
                setTargetHeight(rect.height);
            }
        };
        var onTargetResize = function() {
            syncTargetSize();
            triggerAlign();
        };
        var onVisibleChanged = function(visible) {
            setInMotion(false);
            onAlign();
            null == afterPopupVisibleChange || afterPopupVisibleChange(visible);
        };
        var onPrepare = function() {
            return new Promise(function(resolve) {
                syncTargetSize();
                setMotionPrepareResolve(function() {
                    return resolve;
                });
            });
        };
        hooks_useLayoutEffect(function() {
            if (motionPrepareResolve) {
                onAlign();
                motionPrepareResolve();
                setMotionPrepareResolve(null);
            }
        }, [
            motionPrepareResolve
        ]);
        function wrapperAction(eventName, nextOpen, delay, preEvent) {
            cloneProps[eventName] = function(event) {
                var _originChildProps$eve;
                null == preEvent || preEvent(event);
                triggerOpen(nextOpen, delay);
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                null == (_originChildProps$eve = originChildProps[eventName]) || _originChildProps$eve.call.apply(_originChildProps$eve, [
                    originChildProps,
                    event
                ].concat(args));
            };
        }
        if (clickToShow || clickToHide) cloneProps.onClick = function(event) {
            var _originChildProps$onC;
            if (openRef.current && clickToHide) triggerOpen(false);
            else if (!openRef.current && clickToShow) {
                setMousePosByEvent(event);
                triggerOpen(true);
            }
            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
            null == (_originChildProps$onC = originChildProps.onClick) || _originChildProps$onC.call.apply(_originChildProps$onC, [
                originChildProps,
                event
            ].concat(args));
        };
        var onPopupPointerDown = useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
        var hoverToShow = showActions.has('hover');
        var hoverToHide = hideActions.has('hover');
        var onPopupMouseEnter;
        var onPopupMouseLeave;
        if (hoverToShow) {
            wrapperAction('onMouseEnter', true, mouseEnterDelay, function(event) {
                setMousePosByEvent(event);
            });
            wrapperAction('onPointerEnter', true, mouseEnterDelay, function(event) {
                setMousePosByEvent(event);
            });
            onPopupMouseEnter = function(event) {
                if ((mergedOpen || inMotion) && null != popupEle && popupEle.contains(event.target)) triggerOpen(true, mouseEnterDelay);
            };
            if (alignPoint) cloneProps.onMouseMove = function(event) {
                var _originChildProps$onM;
                null == (_originChildProps$onM = originChildProps.onMouseMove) || _originChildProps$onM.call(originChildProps, event);
            };
        }
        if (hoverToHide) {
            wrapperAction('onMouseLeave', false, mouseLeaveDelay);
            wrapperAction('onPointerLeave', false, mouseLeaveDelay);
            onPopupMouseLeave = function() {
                triggerOpen(false, mouseLeaveDelay);
            };
        }
        if (showActions.has('focus')) wrapperAction('onFocus', true, focusDelay);
        if (hideActions.has('focus')) wrapperAction('onBlur', false, blurDelay);
        if (showActions.has('contextMenu')) cloneProps.onContextMenu = function(event) {
            var _originChildProps$onC2;
            if (openRef.current && hideActions.has('contextMenu')) triggerOpen(false);
            else {
                setMousePosByEvent(event);
                triggerOpen(true);
            }
            event.preventDefault();
            for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
            null == (_originChildProps$onC2 = originChildProps.onContextMenu) || _originChildProps$onC2.call.apply(_originChildProps$onC2, [
                originChildProps,
                event
            ].concat(args));
        };
        if (className) cloneProps.className = classnames_default()(originChildProps.className, className);
        var mergedChildrenProps = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, originChildProps), cloneProps);
        var passedProps = {};
        var passedEventList = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur'
        ];
        passedEventList.forEach(function(eventName) {
            if (restProps[eventName]) passedProps[eventName] = function() {
                var _mergedChildrenProps$;
                for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
                null == (_mergedChildrenProps$ = mergedChildrenProps[eventName]) || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [
                    mergedChildrenProps
                ].concat(args));
                restProps[eventName].apply(restProps, args);
            };
        });
        var triggerNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(child, objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, mergedChildrenProps), passedProps));
        var arrowPos = {
            x: arrowX,
            y: arrowY
        };
        var innerArrow = arrow ? objectSpread2_objectSpread2({}, true !== arrow ? arrow : {}) : null;
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, null, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_resize_observer_es, {
            disabled: !mergedOpen,
            ref: setTargetRef,
            onResize: onTargetResize
        }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_TriggerWrapper, {
            getTriggerDOMNode: getTriggerDOMNode
        }, triggerNode)), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_context.Provider, {
            value: context
        }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_Popup, {
            portal: PortalComponent,
            ref: setPopupRef,
            prefixCls: prefixCls,
            popup: popup,
            className: classnames_default()(popupClassName, alignedClassName),
            style: popupStyle,
            target: targetEle,
            onMouseEnter: onPopupMouseEnter,
            onMouseLeave: onPopupMouseLeave,
            onPointerEnter: onPopupMouseEnter,
            zIndex: zIndex,
            open: mergedOpen,
            keepDom: inMotion,
            fresh: fresh,
            onClick: onPopupClick,
            onPointerDownCapture: onPopupPointerDown,
            mask: mask,
            motion: mergePopupMotion,
            maskMotion: mergeMaskMotion,
            onVisibleChanged: onVisibleChanged,
            onPrepare: onPrepare,
            forceRender: forceRender,
            autoDestroy: mergedAutoDestroy,
            getPopupContainer: getPopupContainer,
            align: alignInfo,
            arrow: innerArrow,
            arrowPos: arrowPos,
            ready: ready,
            offsetX: offsetX,
            offsetY: offsetY,
            offsetR: offsetR,
            offsetB: offsetB,
            onAlign: triggerAlign,
            stretch: stretch,
            targetWidth: targetWidth / scaleX,
            targetHeight: targetHeight / scaleY
        })));
    });
    if ('production' !== process.env.NODE_ENV) Trigger.displayName = 'Trigger';
    return Trigger;
}
const trigger_es = generateTrigger(es);
var autoAdjustOverflowTopBottom = {
    shiftX: 64,
    adjustY: 1
};
var autoAdjustOverflowLeftRight = {
    adjustX: 1,
    shiftY: true
};
var placements_targetOffset = [
    0,
    0
];
var placements_placements = {
    left: {
        points: [
            'cr',
            'cl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: placements_targetOffset
    },
    right: {
        points: [
            'cl',
            'cr'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: placements_targetOffset
    },
    top: {
        points: [
            'bc',
            'tc'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: placements_targetOffset
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: placements_targetOffset
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: placements_targetOffset
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: placements_targetOffset
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: placements_targetOffset
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: placements_targetOffset
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: placements_targetOffset
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: placements_targetOffset
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: placements_targetOffset
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: placements_targetOffset
    }
};
var Tooltip_excluded = [
    "overlayClassName",
    "trigger",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "overlayStyle",
    "prefixCls",
    "children",
    "onVisibleChange",
    "afterVisibleChange",
    "transitionName",
    "animation",
    "motion",
    "placement",
    "align",
    "destroyTooltipOnHide",
    "defaultVisible",
    "getTooltipContainer",
    "overlayInnerStyle",
    "arrowContent",
    "overlay",
    "id",
    "showArrow",
    "classNames",
    "styles"
];
var Tooltip_Tooltip = function(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = void 0 === _props$trigger ? [
        'hover'
    ] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = void 0 === _props$mouseEnterDela ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = void 0 === _props$mouseLeaveDela ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = void 0 === _props$prefixCls ? 'rc-tooltip' : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = void 0 === _props$placement ? 'right' : _props$placement, _props$align = props.align, align = void 0 === _props$align ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = void 0 === _props$destroyTooltip ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle, overlay = (props.arrowContent, props.overlay), id = props.id, _props$showArrow = props.showArrow, showArrow = void 0 === _props$showArrow ? true : _props$showArrow, tooltipClassNames = props.classNames, tooltipStyles = props.styles, restProps = objectWithoutProperties_objectWithoutProperties(props, Tooltip_excluded);
    var mergedId = hooks_useId(id);
    var triggerRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(null);
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle)(ref, function() {
        return triggerRef.current;
    });
    var extraProps = objectSpread2_objectSpread2({}, restProps);
    if ('visible' in props) extraProps.popupVisible = props.visible;
    var getPopupElement = function() {
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Popup, {
            key: "content",
            prefixCls: prefixCls,
            id: mergedId,
            bodyClassName: null == tooltipClassNames ? void 0 : tooltipClassNames.body,
            overlayInnerStyle: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, overlayInnerStyle), null == tooltipStyles ? void 0 : tooltipStyles.body)
        }, overlay);
    };
    var getChildren = function() {
        var child = __WEBPACK_EXTERNAL_MODULE_react__.Children.only(children);
        var originalProps = (null == child ? void 0 : child.props) || {};
        var childProps = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, originalProps), {}, {
            'aria-describedby': overlay ? mergedId : null
        });
        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(children, childProps);
    };
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(trigger_es, _extends({
        popupClassName: classnames_default()(overlayClassName, null == tooltipClassNames ? void 0 : tooltipClassNames.root),
        prefixCls: prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: placements_placements,
        popupPlacement: placement,
        ref: triggerRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        autoDestroy: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, overlayStyle), null == tooltipStyles ? void 0 : tooltipStyles.root),
        mouseEnterDelay: mouseEnterDelay,
        arrow: showArrow
    }, extraProps), getChildren());
};
const es_Tooltip = /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.forwardRef)(Tooltip_Tooltip);
const rc_tooltip_es = es_Tooltip;
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
var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';
var FieldContext_warningFunc = function() {
    es_warning(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var FieldContext_Context = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({
    getFieldValue: FieldContext_warningFunc,
    getFieldsValue: FieldContext_warningFunc,
    getFieldError: FieldContext_warningFunc,
    getFieldWarning: FieldContext_warningFunc,
    getFieldsError: FieldContext_warningFunc,
    isFieldsTouched: FieldContext_warningFunc,
    isFieldTouched: FieldContext_warningFunc,
    isFieldValidating: FieldContext_warningFunc,
    isFieldsValidating: FieldContext_warningFunc,
    resetFields: FieldContext_warningFunc,
    setFields: FieldContext_warningFunc,
    setFieldValue: FieldContext_warningFunc,
    setFieldsValue: FieldContext_warningFunc,
    validateFields: FieldContext_warningFunc,
    submit: FieldContext_warningFunc,
    getInternalHooks: function() {
        FieldContext_warningFunc();
        return {
            dispatch: FieldContext_warningFunc,
            initEntityValue: FieldContext_warningFunc,
            registerField: FieldContext_warningFunc,
            useSubscribe: FieldContext_warningFunc,
            setInitialValues: FieldContext_warningFunc,
            destroyForm: FieldContext_warningFunc,
            setCallbacks: FieldContext_warningFunc,
            registerWatch: FieldContext_warningFunc,
            getFields: FieldContext_warningFunc,
            setValidateMessages: FieldContext_warningFunc,
            setPreserve: FieldContext_warningFunc,
            getInitialValue: FieldContext_warningFunc
        };
    }
});
const FieldContext = FieldContext_Context;
var ListContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(null);
const es_ListContext = ListContext;
function typeUtil_toArray(value) {
    if (null == value) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}
function isFormInstance(form) {
    return form && !!form._init;
}
function newMessages() {
    return {
        default: 'Validation error on field %s',
        required: '%s is required',
        enum: '%s must be one of %s',
        whitespace: '%s cannot be empty',
        date: {
            format: '%s date %s is invalid for format %s',
            parse: '%s date could not be parsed, %s is invalid ',
            invalid: '%s date %s is invalid'
        },
        types: {
            string: '%s is not a %s',
            method: '%s is not a %s (function)',
            array: '%s is not an %s',
            object: '%s is not an %s',
            number: '%s is not a %s',
            date: '%s is not a %s',
            boolean: '%s is not a %s',
            integer: '%s is not an %s',
            float: '%s is not a %s',
            regexp: '%s is not a valid %s',
            email: '%s is not a valid %s',
            url: '%s is not a valid %s',
            hex: '%s is not a valid %s'
        },
        string: {
            len: '%s must be exactly %s characters',
            min: '%s must be at least %s characters',
            max: '%s cannot be longer than %s characters',
            range: '%s must be between %s and %s characters'
        },
        number: {
            len: '%s must equal %s',
            min: '%s cannot be less than %s',
            max: '%s cannot be greater than %s',
            range: '%s must be between %s and %s'
        },
        array: {
            len: '%s must be exactly %s in length',
            min: '%s cannot be less than %s in length',
            max: '%s cannot be greater than %s in length',
            range: '%s must be between %s and %s in length'
        },
        pattern: {
            mismatch: '%s value %s does not match pattern %s'
        },
        clone: function() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
        }
    };
}
var messages_messages = newMessages();
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
function _construct(t, e, r) {
    if (isNativeReflectConstruct_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
}
function wrapNativeSuper_wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return wrapNativeSuper_wrapNativeSuper = function(t) {
        if (null === t || !_isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, Wrapper);
        }
        function Wrapper() {
            return _construct(t, arguments, _getPrototypeOf(this).constructor);
        }
        return Wrapper.prototype = Object.create(t.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _setPrototypeOf(Wrapper, t);
    }, wrapNativeSuper_wrapNativeSuper(t);
}
var formatRegExp = /%[sdj%]/g;
var util_warning = function() {};
if ('undefined' != typeof process && process.env && 'production' !== process.env.NODE_ENV && 'undefined' != typeof window && 'undefined' != typeof document) util_warning = function(type, errors) {
    if ('undefined' != typeof console && console.warn && 'undefined' == typeof ASYNC_VALIDATOR_NO_WARNING) {
        if (errors.every(function(e) {
            return 'string' == typeof e;
        })) console.warn(type, errors);
    }
};
function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    var fields = {};
    errors.forEach(function(error) {
        var field = error.field;
        fields[field] = fields[field] || [];
        fields[field].push(error);
    });
    return fields;
}
function util_format(template) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    var i = 0;
    var len = args.length;
    if ('function' == typeof template) return template.apply(null, args);
    if ('string' == typeof template) {
        var str = template.replace(formatRegExp, function(x) {
            if ('%%' === x) return '%';
            if (i >= len) return x;
            switch(x){
                case '%s':
                    return String(args[i++]);
                case '%d':
                    return Number(args[i++]);
                case '%j':
                    try {
                        return JSON.stringify(args[i++]);
                    } catch (_) {
                        return '[Circular]';
                    }
                default:
                    return x;
            }
        });
        return str;
    }
    return template;
}
function isNativeStringType(type) {
    return 'string' === type || 'url' === type || 'hex' === type || 'email' === type || 'date' === type || 'pattern' === type;
}
function isEmptyValue(value, type) {
    if (null == value) return true;
    if ('array' === type && Array.isArray(value) && !value.length) return true;
    if (isNativeStringType(type) && 'string' == typeof value && !value) return true;
    return false;
}
function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
        results.push.apply(results, _toConsumableArray(errors || []));
        total++;
        if (total === arrLength) callback(results);
    }
    arr.forEach(function(a) {
        func(a, count);
    });
}
function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
        if (errors && errors.length) return void callback(errors);
        var original = index;
        index += 1;
        if (original < arrLength) func(arr[original], next);
        else callback([]);
    }
    next([]);
}
function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k) {
        ret.push.apply(ret, _toConsumableArray(objArr[k] || []));
    });
    return ret;
}
var util_AsyncValidationError = /*#__PURE__*/ function(_Error) {
    inherits_inherits(AsyncValidationError, _Error);
    var _super = createSuper_createSuper(AsyncValidationError);
    function AsyncValidationError(errors, fields) {
        var _this;
        classCallCheck_classCallCheck(this, AsyncValidationError);
        _this = _super.call(this, 'Async Validation Error');
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "errors", void 0);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "fields", void 0);
        _this.errors = errors;
        _this.fields = fields;
        return _this;
    }
    return createClass_createClass(AsyncValidationError);
}(/*#__PURE__*/ wrapNativeSuper_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
        var _pending = new Promise(function(resolve, reject) {
            var next = function(errors) {
                callback(errors);
                return errors.length ? reject(new util_AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
            };
            var flattenArr = flattenObjArr(objArr);
            asyncSerialArray(flattenArr, func, next);
        });
        _pending.catch(function(e) {
            return e;
        });
        return _pending;
    }
    var firstFields = true === option.firstFields ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
        var next = function(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
                callback(results);
                return results.length ? reject(new util_AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
            }
        };
        if (!objArrKeys.length) {
            callback(results);
            resolve(source);
        }
        objArrKeys.forEach(function(key) {
            var arr = objArr[key];
            if (-1 !== firstFields.indexOf(key)) asyncSerialArray(arr, func, next);
            else asyncParallelArray(arr, func, next);
        });
    });
    pending.catch(function(e) {
        return e;
    });
    return pending;
}
function isErrorObj(obj) {
    return !!(obj && void 0 !== obj.message);
}
function util_getValue(value, path) {
    var v = value;
    for(var i = 0; i < path.length; i++){
        if (void 0 == v) break;
        v = v[path[i]];
    }
    return v;
}
function complementError(rule, source) {
    return function(oe) {
        var fieldValue;
        fieldValue = rule.fullFields ? util_getValue(source, rule.fullFields) : source[oe.field || rule.fullField];
        if (isErrorObj(oe)) {
            oe.field = oe.field || rule.fullField;
            oe.fieldValue = fieldValue;
            return oe;
        }
        return {
            message: 'function' == typeof oe ? oe() : oe,
            fieldValue: fieldValue,
            field: oe.field || rule.fullField
        };
    };
}
function deepMerge(target, source) {
    if (source) {
        for(var s in source)if (source.hasOwnProperty(s)) {
            var value = source[s];
            if ('object' === typeof_typeof(value) && 'object' === typeof_typeof(target[s])) target[s] = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, target[s]), value);
            else target[s] = value;
        }
    }
    return target;
}
var ENUM = 'enum';
var enum_enumerable = function(rule, value, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (-1 === rule[ENUM].indexOf(value)) errors.push(util_format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
};
const rule_enum = enum_enumerable;
var pattern_pattern = function(rule, value, source, errors, options) {
    if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) errors.push(util_format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        } else if ('string' == typeof rule.pattern) {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) errors.push(util_format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
    }
};
const rule_pattern = pattern_pattern;
var range_range = function(rule, value, source, errors, options) {
    var len = 'number' == typeof rule.len;
    var min = 'number' == typeof rule.min;
    var max = 'number' == typeof rule.max;
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = 'number' == typeof value;
    var str = 'string' == typeof value;
    var arr = Array.isArray(value);
    if (num) key = 'number';
    else if (str) key = 'string';
    else if (arr) key = 'array';
    if (!key) return false;
    if (arr) val = value.length;
    if (str) val = value.replace(spRegexp, '_').length;
    if (len) {
        if (val !== rule.len) errors.push(util_format(options.messages[key].len, rule.fullField, rule.len));
    } else if (min && !max && val < rule.min) errors.push(util_format(options.messages[key].min, rule.fullField, rule.min));
    else if (max && !min && val > rule.max) errors.push(util_format(options.messages[key].max, rule.fullField, rule.max));
    else if (min && max && (val < rule.min || val > rule.max)) errors.push(util_format(options.messages[key].range, rule.fullField, rule.min, rule.max));
};
const rule_range = range_range;
var required_required = function(rule, value, source, errors, options, type) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) errors.push(util_format(options.messages.required, rule.fullField));
};
const rule_required = required_required;
var urlReg;
const rule_url = function() {
    if (urlReg) return urlReg;
    var word = '[a-fA-F\\d:]';
    var b = function(options) {
        return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : '';
    };
    var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
    var v6seg = '[a-fA-F\\d]{1,4}';
    var v6List = [
        "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
        "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
        "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
        "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
        "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
        "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
        "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
        "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
    ];
    var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
    var v6 = "(?:".concat(v6List.join('|'), ")").concat(v6Eth0);
    var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
    var v4exact = new RegExp("^".concat(v4, "$"));
    var v6exact = new RegExp("^".concat(v6, "$"));
    var ip = function(options) {
        return options && options.exact ? v46Exact : new RegExp("(?:".concat(b(options)).concat(v4).concat(b(options), ")|(?:").concat(b(options)).concat(v6).concat(b(options), ")"), 'g');
    };
    ip.v4 = function(options) {
        return options && options.exact ? v4exact : new RegExp("".concat(b(options)).concat(v4).concat(b(options)), 'g');
    };
    ip.v6 = function(options) {
        return options && options.exact ? v6exact : new RegExp("".concat(b(options)).concat(v6).concat(b(options)), 'g');
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = '(?:\\S+(?::\\S*)?@)?';
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = '(?::\\d{2,5})?';
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
    urlReg = new RegExp("(?:^".concat(regex, "$)"), 'i');
    return urlReg;
};
var type_pattern = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var type_types = {
    integer: function(value) {
        return type_types.number(value) && parseInt(value, 10) === value;
    },
    float: function(value) {
        return type_types.number(value) && !type_types.integer(value);
    },
    array: function(value) {
        return Array.isArray(value);
    },
    regexp: function(value) {
        if (value instanceof RegExp) return true;
        try {
            return new RegExp(value), true;
        } catch (e) {
            return false;
        }
    },
    date: function(value) {
        return 'function' == typeof value.getTime && 'function' == typeof value.getMonth && 'function' == typeof value.getYear && !isNaN(value.getTime());
    },
    number: function(value) {
        if (isNaN(value)) return false;
        return 'number' == typeof value;
    },
    object: function(value) {
        return 'object' === typeof_typeof(value) && !type_types.array(value);
    },
    method: function(value) {
        return 'function' == typeof value;
    },
    email: function(value) {
        return 'string' == typeof value && value.length <= 320 && !!value.match(type_pattern.email);
    },
    url: function(value) {
        return 'string' == typeof value && value.length <= 2048 && !!value.match(rule_url());
    },
    hex: function(value) {
        return 'string' == typeof value && !!value.match(type_pattern.hex);
    }
};
var type_type = function(rule, value, source, errors, options) {
    if (rule.required && void 0 === value) return void rule_required(rule, value, source, errors, options);
    var custom = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex'
    ];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
        if (!type_types[ruleType](value)) errors.push(util_format(options.messages.types[ruleType], rule.fullField, rule.type));
    } else if (ruleType && typeof_typeof(value) !== rule.type) errors.push(util_format(options.messages.types[ruleType], rule.fullField, rule.type));
};
const rule_type = type_type;
var whitespace_whitespace = function(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || '' === value) errors.push(util_format(options.messages.whitespace, rule.fullField));
};
const rule_whitespace = whitespace_whitespace;
const es_rule = {
    required: rule_required,
    whitespace: rule_whitespace,
    type: rule_type,
    range: rule_range,
    enum: rule_enum,
    pattern: rule_pattern
};
var any_any = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_any = any_any;
var array_array = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (null == value && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options, 'array');
        if (null != value) {
            es_rule.type(rule, value, source, errors, options);
            es_rule.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
const validator_array = array_array;
var boolean_boolean = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) es_rule.type(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_boolean = boolean_boolean;
var date_date = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, 'date') && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, 'date')) {
            var dateObject;
            dateObject = value instanceof Date ? value : new Date(value);
            es_rule.type(rule, dateObject, source, errors, options);
            if (dateObject) es_rule.range(rule, dateObject.getTime(), source, errors, options);
        }
    }
    callback(errors);
};
const validator_date = date_date;
var enum_ENUM = 'enum';
var validator_enum_enumerable = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) es_rule[enum_ENUM](rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_enum = validator_enum_enumerable;
var float_floatFn = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) {
            es_rule.type(rule, value, source, errors, options);
            es_rule.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
const validator_float = float_floatFn;
var integer_integer = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) {
            es_rule.type(rule, value, source, errors, options);
            es_rule.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
const validator_integer = integer_integer;
var method_method = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) es_rule.type(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_method = method_method;
var number_number = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if ('' === value) value = void 0;
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) {
            es_rule.type(rule, value, source, errors, options);
            es_rule.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
const validator_number = number_number;
var object_object = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (void 0 !== value) es_rule.type(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_object = object_object;
var validator_pattern_pattern = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, 'string') && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, 'string')) es_rule.pattern(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_pattern = validator_pattern_pattern;
var regexp_regexp = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options);
        if (!isEmptyValue(value)) es_rule.type(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_regexp = regexp_regexp;
var validator_required_required = function(rule, value, callback, source, options) {
    var errors = [];
    var type = Array.isArray(value) ? 'array' : typeof_typeof(value);
    es_rule.required(rule, value, source, errors, options, type);
    callback(errors);
};
const validator_required = validator_required_required;
var string_string = function(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, 'string') && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options, 'string');
        if (!isEmptyValue(value, 'string')) {
            es_rule.type(rule, value, source, errors, options);
            es_rule.range(rule, value, source, errors, options);
            es_rule.pattern(rule, value, source, errors, options);
            if (true === rule.whitespace) es_rule.whitespace(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
const validator_string = string_string;
var validator_type_type = function(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, ruleType) && !rule.required) return callback();
        es_rule.required(rule, value, source, errors, options, ruleType);
        if (!isEmptyValue(value, ruleType)) es_rule.type(rule, value, source, errors, options);
    }
    callback(errors);
};
const validator_type = validator_type_type;
const es_validator = {
    string: validator_string,
    method: validator_method,
    number: validator_number,
    boolean: validator_boolean,
    regexp: validator_regexp,
    integer: validator_integer,
    float: validator_float,
    array: validator_array,
    object: validator_object,
    enum: validator_enum,
    pattern: validator_pattern,
    date: validator_date,
    url: validator_type,
    hex: validator_type,
    email: validator_type,
    required: validator_required,
    any: validator_any
};
var es_Schema = /*#__PURE__*/ function() {
    function Schema(descriptor) {
        classCallCheck_classCallCheck(this, Schema);
        defineProperty_defineProperty(this, "rules", null);
        defineProperty_defineProperty(this, "_messages", messages_messages);
        this.define(descriptor);
    }
    createClass_createClass(Schema, [
        {
            key: "define",
            value: function(rules) {
                var _this = this;
                if (!rules) throw new Error('Cannot configure a schema with no rules');
                if ('object' !== typeof_typeof(rules) || Array.isArray(rules)) throw new Error('Rules must be an object');
                this.rules = {};
                Object.keys(rules).forEach(function(name) {
                    var item = rules[name];
                    _this.rules[name] = Array.isArray(item) ? item : [
                        item
                    ];
                });
            }
        },
        {
            key: "messages",
            value: function(_messages) {
                if (_messages) this._messages = deepMerge(newMessages(), _messages);
                return this._messages;
            }
        },
        {
            key: "validate",
            value: function(source_) {
                var _this2 = this;
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                var oc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                var source = source_;
                var options = o;
                var callback = oc;
                if ('function' == typeof options) {
                    callback = options;
                    options = {};
                }
                if (!this.rules || 0 === Object.keys(this.rules).length) {
                    if (callback) callback(null, source);
                    return Promise.resolve(source);
                }
                function complete(results) {
                    var errors = [];
                    var fields = {};
                    function add(e) {
                        if (Array.isArray(e)) {
                            var _errors;
                            errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e));
                        } else errors.push(e);
                    }
                    for(var i = 0; i < results.length; i++)add(results[i]);
                    if (errors.length) {
                        fields = convertFieldsError(errors);
                        callback(errors, fields);
                    } else callback(null, source);
                }
                if (options.messages) {
                    var messages = this.messages();
                    if (messages === messages_messages) messages = newMessages();
                    deepMerge(messages, options.messages);
                    options.messages = messages;
                } else options.messages = this.messages();
                var series = {};
                var keys = options.keys || Object.keys(this.rules);
                keys.forEach(function(z) {
                    var arr = _this2.rules[z];
                    var value = source[z];
                    arr.forEach(function(r) {
                        var rule = r;
                        if ('function' == typeof rule.transform) {
                            if (source === source_) source = objectSpread2_objectSpread2({}, source);
                            value = source[z] = rule.transform(value);
                            if (null != value) rule.type = rule.type || (Array.isArray(value) ? 'array' : typeof_typeof(value));
                        }
                        rule = 'function' == typeof rule ? {
                            validator: rule
                        } : objectSpread2_objectSpread2({}, rule);
                        rule.validator = _this2.getValidationMethod(rule);
                        if (!rule.validator) return;
                        rule.field = z;
                        rule.fullField = rule.fullField || z;
                        rule.type = _this2.getType(rule);
                        series[z] = series[z] || [];
                        series[z].push({
                            rule: rule,
                            value: value,
                            source: source,
                            field: z
                        });
                    });
                });
                var errorFields = {};
                return asyncMap(series, options, function(data, doIt) {
                    var rule = data.rule;
                    var deep = ('object' === rule.type || 'array' === rule.type) && ('object' === typeof_typeof(rule.fields) || 'object' === typeof_typeof(rule.defaultField));
                    deep = deep && (rule.required || !rule.required && data.value);
                    rule.field = data.field;
                    function addFullField(key, schema) {
                        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, schema), {}, {
                            fullField: "".concat(rule.fullField, ".").concat(key),
                            fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [
                                key
                            ]) : [
                                key
                            ]
                        });
                    }
                    function cb() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        var errorList = Array.isArray(e) ? e : [
                            e
                        ];
                        if (!options.suppressWarning && errorList.length) Schema.warning('async-validator:', errorList);
                        if (errorList.length && void 0 !== rule.message) errorList = [].concat(rule.message);
                        var filledErrors = errorList.map(complementError(rule, source));
                        if (options.first && filledErrors.length) {
                            errorFields[rule.field] = 1;
                            return doIt(filledErrors);
                        }
                        if (deep) {
                            if (rule.required && !data.value) {
                                if (void 0 !== rule.message) filledErrors = [].concat(rule.message).map(complementError(rule, source));
                                else if (options.error) filledErrors = [
                                    options.error(rule, util_format(options.messages.required, rule.field))
                                ];
                                return doIt(filledErrors);
                            }
                            var fieldsSchema = {};
                            if (rule.defaultField) Object.keys(data.value).map(function(key) {
                                fieldsSchema[key] = rule.defaultField;
                            });
                            fieldsSchema = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, fieldsSchema), data.rule.fields);
                            var paredFieldsSchema = {};
                            Object.keys(fieldsSchema).forEach(function(field) {
                                var fieldSchema = fieldsSchema[field];
                                var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [
                                    fieldSchema
                                ];
                                paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                            });
                            var schema = new Schema(paredFieldsSchema);
                            schema.messages(options.messages);
                            if (data.rule.options) {
                                data.rule.options.messages = options.messages;
                                data.rule.options.error = options.error;
                            }
                            schema.validate(data.value, data.rule.options || options, function(errs) {
                                var finalErrors = [];
                                if (filledErrors && filledErrors.length) finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
                                if (errs && errs.length) finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
                                doIt(finalErrors.length ? finalErrors : null);
                            });
                        } else doIt(filledErrors);
                    }
                    var res;
                    if (rule.asyncValidator) res = rule.asyncValidator(rule, data.value, cb, data.source, options);
                    else if (rule.validator) {
                        try {
                            res = rule.validator(rule, data.value, cb, data.source, options);
                        } catch (error) {
                            var _console$error, _console;
                            null == (_console$error = (_console = console).error) || _console$error.call(_console, error);
                            if (!options.suppressValidatorError) setTimeout(function() {
                                throw error;
                            }, 0);
                            cb(error.message);
                        }
                        if (true === res) cb();
                        else if (false === res) cb('function' == typeof rule.message ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
                        else if (res instanceof Array) cb(res);
                        else if (res instanceof Error) cb(res.message);
                    }
                    if (res && res.then) res.then(function() {
                        return cb();
                    }, function(e) {
                        return cb(e);
                    });
                }, function(results) {
                    complete(results);
                }, source);
            }
        },
        {
            key: "getType",
            value: function(rule) {
                if (void 0 === rule.type && rule.pattern instanceof RegExp) rule.type = 'pattern';
                if ('function' != typeof rule.validator && rule.type && !es_validator.hasOwnProperty(rule.type)) throw new Error(util_format('Unknown rule type %s', rule.type));
                return rule.type || 'string';
            }
        },
        {
            key: "getValidationMethod",
            value: function(rule) {
                if ('function' == typeof rule.validator) return rule.validator;
                var keys = Object.keys(rule);
                var messageIndex = keys.indexOf('message');
                if (-1 !== messageIndex) keys.splice(messageIndex, 1);
                if (1 === keys.length && 'required' === keys[0]) return es_validator.required;
                return es_validator[this.getType(rule)] || void 0;
            }
        }
    ]);
    return Schema;
}();
defineProperty_defineProperty(es_Schema, "register", function(type, validator) {
    if ('function' != typeof validator) throw new Error('Cannot register a validator by type, validator is not a function');
    es_validator[type] = validator;
});
defineProperty_defineProperty(es_Schema, "warning", util_warning);
defineProperty_defineProperty(es_Schema, "messages", messages_messages);
defineProperty_defineProperty(es_Schema, "validators", es_validator);
const async_validator_es = es_Schema;
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
        format: "'${name}' is invalid for format date",
        parse: "'${name}' could not be parsed as date",
        invalid: "'${name}' is invalid date"
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
        len: "'${name}' must be exactly ${len} characters",
        min: "'${name}' must be at least ${min} characters",
        max: "'${name}' cannot be longer than ${max} characters",
        range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
        len: "'${name}' must equal ${len}",
        min: "'${name}' cannot be less than ${min}",
        max: "'${name}' cannot be greater than ${max}",
        range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
        len: "'${name}' must be exactly ${len} in length",
        min: "'${name}' cannot be less than ${min} in length",
        max: "'${name}' cannot be greater than ${max} in length",
        range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
        mismatch: "'${name}' does not match pattern ${pattern}"
    }
};
var AsyncValidator = async_validator_es;
function replaceMessage(template, kv) {
    return template.replace(/\\?\$\{\w+\}/g, function(str) {
        if (str.startsWith('\\')) return str.slice(1);
        var key = str.slice(2, -1);
        return kv[key];
    });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
    return _validateRule.apply(this, arguments);
}
function _validateRule() {
    _validateRule = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
        var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
        return regeneratorRuntime_regeneratorRuntime().wrap(function(_context2) {
            while(1)switch(_context2.prev = _context2.next){
                case 0:
                    cloneRule = objectSpread2_objectSpread2({}, rule);
                    delete cloneRule.ruleIndex;
                    AsyncValidator.warning = function() {};
                    if (cloneRule.validator) {
                        originValidator = cloneRule.validator;
                        cloneRule.validator = function() {
                            try {
                                return originValidator.apply(void 0, arguments);
                            } catch (error) {
                                console.error(error);
                                return Promise.reject(CODE_LOGIC_ERROR);
                            }
                        };
                    }
                    subRuleField = null;
                    if (cloneRule && 'array' === cloneRule.type && cloneRule.defaultField) {
                        subRuleField = cloneRule.defaultField;
                        delete cloneRule.defaultField;
                    }
                    validator = new AsyncValidator(defineProperty_defineProperty({}, name, [
                        cloneRule
                    ]));
                    messages = merge(defaultValidateMessages, options.validateMessages);
                    validator.messages(messages);
                    result = [];
                    _context2.prev = 10;
                    _context2.next = 13;
                    return Promise.resolve(validator.validate(defineProperty_defineProperty({}, name, value), objectSpread2_objectSpread2({}, options)));
                case 13:
                    _context2.next = 18;
                    break;
                case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](10);
                    if (_context2.t0.errors) result = _context2.t0.errors.map(function(_ref4, index) {
                        var message = _ref4.message;
                        var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                        return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(mergedMessage) ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(mergedMessage, {
                            key: "error_".concat(index)
                        }) : mergedMessage;
                    });
                case 18:
                    if (!(!result.length && subRuleField)) {
                        _context2.next = 23;
                        break;
                    }
                    _context2.next = 21;
                    return Promise.all(value.map(function(subValue, i) {
                        return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
                    }));
                case 21:
                    subResults = _context2.sent;
                    return _context2.abrupt("return", subResults.reduce(function(prev, errors) {
                        return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
                    }, []));
                case 23:
                    kv = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, rule), {}, {
                        name: name,
                        enum: (rule.enum || []).join(', ')
                    }, messageVariables);
                    fillVariableResult = result.map(function(error) {
                        if ('string' == typeof error) return replaceMessage(error, kv);
                        return error;
                    });
                    return _context2.abrupt("return", fillVariableResult);
                case 26:
                case "end":
                    return _context2.stop();
            }
        }, _callee2, null, [
            [
                10,
                15
            ]
        ]);
    }));
    return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
    var name = namePath.join('.');
    var filledRules = rules.map(function(currentRule, ruleIndex) {
        var originValidatorFunc = currentRule.validator;
        var cloneRule = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, currentRule), {}, {
            ruleIndex: ruleIndex
        });
        if (originValidatorFunc) cloneRule.validator = function(rule, val, callback) {
            var hasPromise = false;
            var wrappedCallback = function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                Promise.resolve().then(function() {
                    es_warning(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
                    if (!hasPromise) callback.apply(void 0, args);
                });
            };
            var promise = originValidatorFunc(rule, val, wrappedCallback);
            hasPromise = promise && 'function' == typeof promise.then && 'function' == typeof promise.catch;
            es_warning(hasPromise, '`callback` is deprecated. Please return a promise instead.');
            if (hasPromise) promise.then(function() {
                callback();
            }).catch(function(err) {
                callback(err || ' ');
            });
        };
        return cloneRule;
    }).sort(function(_ref, _ref2) {
        var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
        var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
        if (!!w1 === !!w2) return i1 - i2;
        if (w1) return 1;
        return -1;
    });
    var summaryPromise;
    if (true === validateFirst) summaryPromise = new Promise(/*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee(resolve, reject) {
            var i, rule, errors;
            return regeneratorRuntime_regeneratorRuntime().wrap(function(_context) {
                while(1)switch(_context.prev = _context.next){
                    case 0:
                        i = 0;
                    case 1:
                        if (!(i < filledRules.length)) {
                            _context.next = 12;
                            break;
                        }
                        rule = filledRules[i];
                        _context.next = 5;
                        return validateRule(name, value, rule, options, messageVariables);
                    case 5:
                        errors = _context.sent;
                        if (!errors.length) {
                            _context.next = 9;
                            break;
                        }
                        reject([
                            {
                                errors: errors,
                                rule: rule
                            }
                        ]);
                        return _context.abrupt("return");
                    case 9:
                        i += 1;
                        _context.next = 1;
                        break;
                    case 12:
                        resolve([]);
                    case 13:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x6, _x7) {
            return _ref3.apply(this, arguments);
        };
    }());
    else {
        var rulePromises = filledRules.map(function(rule) {
            return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
                return {
                    errors: errors,
                    rule: rule
                };
            });
        });
        summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
            return Promise.reject(errors);
        });
    }
    summaryPromise.catch(function(e) {
        return e;
    });
    return summaryPromise;
}
function finishOnAllFailed(_x8) {
    return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
    _finishOnAllFailed = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee3(rulePromises) {
        return regeneratorRuntime_regeneratorRuntime().wrap(function(_context3) {
            while(1)switch(_context3.prev = _context3.next){
                case 0:
                    return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
                        var _ref5;
                        var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
                        return errors;
                    }));
                case 1:
                case "end":
                    return _context3.stop();
            }
        }, _callee3);
    }));
    return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
    return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
    _finishOnFirstFailed = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee4(rulePromises) {
        var count;
        return regeneratorRuntime_regeneratorRuntime().wrap(function(_context4) {
            while(1)switch(_context4.prev = _context4.next){
                case 0:
                    count = 0;
                    return _context4.abrupt("return", new Promise(function(resolve) {
                        rulePromises.forEach(function(promise) {
                            promise.then(function(ruleError) {
                                if (ruleError.errors.length) resolve([
                                    ruleError
                                ]);
                                count += 1;
                                if (count === rulePromises.length) resolve([]);
                            });
                        });
                    }));
                case 2:
                case "end":
                    return _context4.stop();
            }
        }, _callee4);
    }));
    return _finishOnFirstFailed.apply(this, arguments);
}
function getNamePath(path) {
    return typeUtil_toArray(path);
}
function cloneByNamePathList(store, namePathList) {
    var newStore = {};
    namePathList.forEach(function(namePath) {
        var value = get_get(store, namePath);
        newStore = set_set(newStore, namePath, value);
    });
    return newStore;
}
function containsNamePath(namePathList, namePath) {
    var partialMatch = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : false;
    return namePathList && namePathList.some(function(path) {
        return matchNamePath(namePath, path, partialMatch);
    });
}
function matchNamePath(namePath, subNamePath) {
    var partialMatch = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : false;
    if (!namePath || !subNamePath) return false;
    if (!partialMatch && namePath.length !== subNamePath.length) return false;
    return subNamePath.every(function(nameUnit, i) {
        return namePath[i] === nameUnit;
    });
}
function isSimilar(source, target) {
    if (source === target) return true;
    if (!source && target || source && !target) return false;
    if (!source || !target || 'object' !== typeof_typeof(source) || 'object' !== typeof_typeof(target)) return false;
    var sourceKeys = Object.keys(source);
    var targetKeys = Object.keys(target);
    var keys = new Set([].concat(sourceKeys, targetKeys));
    return _toConsumableArray(keys).every(function(key) {
        var sourceValue = source[key];
        var targetValue = target[key];
        if ('function' == typeof sourceValue && 'function' == typeof targetValue) return true;
        return sourceValue === targetValue;
    });
}
function defaultGetValueFromEvent(valuePropName) {
    var event = arguments.length <= 1 ? void 0 : arguments[1];
    if (event && event.target && 'object' === typeof_typeof(event.target) && valuePropName in event.target) return event.target[valuePropName];
    return event;
}
function valueUtil_move(array, moveIndex, toIndex) {
    var length = array.length;
    if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) return array;
    var item = array[moveIndex];
    var diff = moveIndex - toIndex;
    if (diff > 0) return [].concat(_toConsumableArray(array.slice(0, toIndex)), [
        item
    ], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
    if (diff < 0) return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [
        item
    ], _toConsumableArray(array.slice(toIndex + 1, length)));
    return array;
}
var Field_excluded = [
    "name"
];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
    if ('function' == typeof shouldUpdate) return shouldUpdate(prev, next, 'source' in info ? {
        source: info.source
    } : {});
    return prevValue !== nextValue;
}
var Field_Field = /*#__PURE__*/ function(_React$Component) {
    inherits_inherits(Field, _React$Component);
    var _super = createSuper_createSuper(Field);
    function Field(props) {
        var _this;
        classCallCheck_classCallCheck(this, Field);
        _this = _super.call(this, props);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
            resetCount: 0
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "cancelRegisterFunc", null);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "mounted", false);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "touched", false);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "dirty", false);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "validatePromise", void 0);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "prevValidating", void 0);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "cancelRegister", function() {
            var _this$props = _this.props, preserve = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
            if (_this.cancelRegisterFunc) _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
            _this.cancelRegisterFunc = null;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getNamePath", function() {
            var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
            var _fieldContext$prefixN = fieldContext.prefixName, prefixName = void 0 === _fieldContext$prefixN ? [] : _fieldContext$prefixN;
            return void 0 !== name ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getRules", function() {
            var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules = void 0 === _this$props3$rules ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
            return rules.map(function(rule) {
                if ('function' == typeof rule) return rule(fieldContext);
                return rule;
            });
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "refresh", function() {
            if (!_this.mounted) return;
            _this.setState(function(_ref) {
                var resetCount = _ref.resetCount;
                return {
                    resetCount: resetCount + 1
                };
            });
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "metaCache", null);
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "triggerMetaEvent", function(destroy) {
            var onMetaChange = _this.props.onMetaChange;
            if (onMetaChange) {
                var _meta = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, _this.getMeta()), {}, {
                    destroy: destroy
                });
                if (!es_isEqual(_this.metaCache, _meta)) onMetaChange(_meta);
                _this.metaCache = _meta;
            } else _this.metaCache = null;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "onStoreChange", function(prevStore, namePathList, info) {
            var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = void 0 === _this$props4$dependen ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
            var store = info.store;
            var namePath = _this.getNamePath();
            var prevValue = _this.getValue(prevStore);
            var curValue = _this.getValue(store);
            var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
            if ('valueUpdate' === info.type && 'external' === info.source && !es_isEqual(prevValue, curValue)) {
                _this.touched = true;
                _this.dirty = true;
                _this.validatePromise = null;
                _this.errors = EMPTY_ERRORS;
                _this.warnings = EMPTY_ERRORS;
                _this.triggerMetaEvent();
            }
            switch(info.type){
                case 'reset':
                    if (!namePathList || namePathMatch) {
                        _this.touched = false;
                        _this.dirty = false;
                        _this.validatePromise = void 0;
                        _this.errors = EMPTY_ERRORS;
                        _this.warnings = EMPTY_ERRORS;
                        _this.triggerMetaEvent();
                        null == onReset || onReset();
                        _this.refresh();
                        return;
                    }
                    break;
                case 'remove':
                    if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) return void _this.reRender();
                    break;
                case 'setField':
                    var data = info.data;
                    if (namePathMatch) {
                        if ('touched' in data) _this.touched = data.touched;
                        if ('validating' in data && !('originRCField' in data)) _this.validatePromise = data.validating ? Promise.resolve([]) : null;
                        if ('errors' in data) _this.errors = data.errors || EMPTY_ERRORS;
                        if ('warnings' in data) _this.warnings = data.warnings || EMPTY_ERRORS;
                        _this.dirty = true;
                        _this.triggerMetaEvent();
                        _this.reRender();
                        return;
                    }
                    if ('value' in data && containsNamePath(namePathList, namePath, true)) return void _this.reRender();
                    if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) return void _this.reRender();
                    break;
                case 'dependenciesUpdate':
                    var dependencyList = dependencies.map(getNamePath);
                    if (dependencyList.some(function(dependency) {
                        return containsNamePath(info.relatedFields, dependency);
                    })) return void _this.reRender();
                    break;
                default:
                    if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) return void _this.reRender();
                    break;
            }
            if (true === shouldUpdate) _this.reRender();
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "validateRules", function(options) {
            var namePath = _this.getNamePath();
            var currentValue = _this.getValue();
            var _ref2 = options || {}, triggerName = _ref2.triggerName, _ref2$validateOnly = _ref2.validateOnly, validateOnly = void 0 === _ref2$validateOnly ? false : _ref2$validateOnly;
            var rootPromise = Promise.resolve().then(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime_regeneratorRuntime().mark(function _callee() {
                var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
                return regeneratorRuntime_regeneratorRuntime().wrap(function(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            if (_this.mounted) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return", []);
                        case 2:
                            _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = void 0 === _this$props5$validate ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce;
                            filteredRules = _this.getRules();
                            if (triggerName) filteredRules = filteredRules.filter(function(rule) {
                                return rule;
                            }).filter(function(rule) {
                                var validateTrigger = rule.validateTrigger;
                                if (!validateTrigger) return true;
                                var triggerList = typeUtil_toArray(validateTrigger);
                                return triggerList.includes(triggerName);
                            });
                            if (!(validateDebounce && triggerName)) {
                                _context.next = 10;
                                break;
                            }
                            _context.next = 8;
                            return new Promise(function(resolve) {
                                setTimeout(resolve, validateDebounce);
                            });
                        case 8:
                            if (!(_this.validatePromise !== rootPromise)) {
                                _context.next = 10;
                                break;
                            }
                            return _context.abrupt("return", []);
                        case 10:
                            promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
                            promise.catch(function(e) {
                                return e;
                            }).then(function() {
                                var ruleErrors = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EMPTY_ERRORS;
                                if (_this.validatePromise === rootPromise) {
                                    var _ruleErrors$forEach;
                                    _this.validatePromise = null;
                                    var nextErrors = [];
                                    var nextWarnings = [];
                                    null == (_ruleErrors$forEach = ruleErrors.forEach) || _ruleErrors$forEach.call(ruleErrors, function(_ref4) {
                                        var warningOnly = _ref4.rule.warningOnly, _ref4$errors = _ref4.errors, errors = void 0 === _ref4$errors ? EMPTY_ERRORS : _ref4$errors;
                                        if (warningOnly) nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                                        else nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                                    });
                                    _this.errors = nextErrors;
                                    _this.warnings = nextWarnings;
                                    _this.triggerMetaEvent();
                                    _this.reRender();
                                }
                            });
                            return _context.abrupt("return", promise);
                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            })));
            if (validateOnly) return rootPromise;
            _this.validatePromise = rootPromise;
            _this.dirty = true;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            _this.reRender();
            return rootPromise;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isFieldValidating", function() {
            return !!_this.validatePromise;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isFieldTouched", function() {
            return _this.touched;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isFieldDirty", function() {
            if (_this.dirty || void 0 !== _this.props.initialValue) return true;
            var fieldContext = _this.props.fieldContext;
            var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
            if (void 0 !== getInitialValue(_this.getNamePath())) return true;
            return false;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getErrors", function() {
            return _this.errors;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getWarnings", function() {
            return _this.warnings;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isListField", function() {
            return _this.props.isListField;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isList", function() {
            return _this.props.isList;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isPreserve", function() {
            return _this.props.preserve;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getMeta", function() {
            _this.prevValidating = _this.isFieldValidating();
            var meta = {
                touched: _this.isFieldTouched(),
                validating: _this.prevValidating,
                errors: _this.errors,
                warnings: _this.warnings,
                name: _this.getNamePath(),
                validated: null === _this.validatePromise
            };
            return meta;
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getOnlyChild", function(children) {
            if ('function' == typeof children) {
                var _meta2 = _this.getMeta();
                return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
                    isFunction: true
                });
            }
            var childList = toArray_toArray(children);
            if (1 !== childList.length || !/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(childList[0])) return {
                child: childList,
                isFunction: false
            };
            return {
                child: childList[0],
                isFunction: false
            };
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getValue", function(store) {
            var getFieldsValue = _this.props.fieldContext.getFieldsValue;
            var namePath = _this.getNamePath();
            return get_get(store || getFieldsValue(true), namePath);
        });
        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "getControlled", function() {
            var childProps = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var _this$props6 = _this.props, name = _this$props6.name, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
            var mergedValidateTrigger = void 0 !== validateTrigger ? validateTrigger : fieldContext.validateTrigger;
            var namePath = _this.getNamePath();
            var getInternalHooks = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
            var _getInternalHooks = getInternalHooks(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
            var value = _this.getValue();
            var mergedGetValueProps = getValueProps || function(val) {
                return defineProperty_defineProperty({}, valuePropName, val);
            };
            var originTriggerFunc = childProps[trigger];
            var valueProps = void 0 !== name ? mergedGetValueProps(value) : {};
            if ('production' !== process.env.NODE_ENV && valueProps) Object.keys(valueProps).forEach(function(key) {
                es_warning('function' != typeof valueProps[key], "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(key, ")"));
            });
            var control = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, childProps), valueProps);
            control[trigger] = function() {
                _this.touched = true;
                _this.dirty = true;
                _this.triggerMetaEvent();
                var newValue;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                newValue = getValueFromEvent ? getValueFromEvent.apply(void 0, args) : defaultGetValueFromEvent.apply(void 0, [
                    valuePropName
                ].concat(args));
                if (normalize) newValue = normalize(newValue, value, getFieldsValue(true));
                if (newValue !== value) dispatch({
                    type: 'updateValue',
                    namePath: namePath,
                    value: newValue
                });
                if (originTriggerFunc) originTriggerFunc.apply(void 0, args);
            };
            var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
            validateTriggerList.forEach(function(triggerName) {
                var originTrigger = control[triggerName];
                control[triggerName] = function() {
                    if (originTrigger) originTrigger.apply(void 0, arguments);
                    var rules = _this.props.rules;
                    if (rules && rules.length) dispatch({
                        type: 'validateField',
                        namePath: namePath,
                        triggerName: triggerName
                    });
                };
            });
            return control;
        });
        if (props.fieldContext) {
            var getInternalHooks = props.fieldContext.getInternalHooks;
            var _getInternalHooks2 = getInternalHooks(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
            initEntityValue(assertThisInitialized_assertThisInitialized(_this));
        }
        return _this;
    }
    createClass_createClass(Field, [
        {
            key: "componentDidMount",
            value: function() {
                var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
                this.mounted = true;
                if (fieldContext) {
                    var getInternalHooks = fieldContext.getInternalHooks;
                    var _getInternalHooks3 = getInternalHooks(HOOK_MARK), registerField = _getInternalHooks3.registerField;
                    this.cancelRegisterFunc = registerField(this);
                }
                if (true === shouldUpdate) this.reRender();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.cancelRegister();
                this.triggerMetaEvent(true);
                this.mounted = false;
            }
        },
        {
            key: "reRender",
            value: function() {
                if (!this.mounted) return;
                this.forceUpdate();
            }
        },
        {
            key: "render",
            value: function() {
                var resetCount = this.state.resetCount;
                var children = this.props.children;
                var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction = _this$getOnlyChild.isFunction;
                var returnChildNode;
                if (isFunction) returnChildNode = child;
                else if (/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(child)) returnChildNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.cloneElement(child, this.getControlled(child.props));
                else {
                    es_warning(!child, '`children` of Field is not validate ReactElement.');
                    returnChildNode = child;
                }
                return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, {
                    key: resetCount
                }, returnChildNode);
            }
        }
    ]);
    return Field;
}(__WEBPACK_EXTERNAL_MODULE_react__.Component);
defineProperty_defineProperty(Field_Field, "contextType", FieldContext);
defineProperty_defineProperty(Field_Field, "defaultProps", {
    trigger: 'onChange',
    valuePropName: 'value'
});
function WrapperField(_ref6) {
    var _restProps$isListFiel;
    var name = _ref6.name, restProps = objectWithoutProperties_objectWithoutProperties(_ref6, Field_excluded);
    var fieldContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(FieldContext);
    var listContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(es_ListContext);
    var namePath = void 0 !== name ? getNamePath(name) : void 0;
    var isMergedListField = null != (_restProps$isListFiel = restProps.isListField) ? _restProps$isListFiel : !!listContext;
    var key = 'keep';
    if (!isMergedListField) key = "_".concat((namePath || []).join('_'));
    if ('production' !== process.env.NODE_ENV && false === restProps.preserve && isMergedListField && namePath.length <= 1) es_warning(false, '`preserve` should not apply on Form.List fields.');
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Field_Field, _extends({
        key: key,
        name: namePath,
        isListField: isMergedListField
    }, restProps, {
        fieldContext: fieldContext
    }));
}
const es_Field = WrapperField;
function List_List(_ref) {
    var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules = _ref.rules, validateTrigger = _ref.validateTrigger, isListField = _ref.isListField;
    var context = __WEBPACK_EXTERNAL_MODULE_react__.useContext(FieldContext);
    var wrapperListContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(es_ListContext);
    var keyRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({
        keys: [],
        id: 0
    });
    var keyManager = keyRef.current;
    var prefixName = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        var parentPrefixName = getNamePath(context.prefixName) || [];
        return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
    }, [
        context.prefixName,
        name
    ]);
    var fieldContext = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, context), {}, {
            prefixName: prefixName
        });
    }, [
        context,
        prefixName
    ]);
    var listContext = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        return {
            getKey: function(namePath) {
                var len = prefixName.length;
                var pathName = namePath[len];
                return [
                    keyManager.keys[pathName],
                    namePath.slice(len + 1)
                ];
            }
        };
    }, [
        prefixName
    ]);
    if ('function' != typeof children) {
        es_warning(false, 'Form.List only accepts function as children.');
        return null;
    }
    var shouldUpdate = function(prevValue, nextValue, _ref2) {
        var source = _ref2.source;
        if ('internal' === source) return false;
        return prevValue !== nextValue;
    };
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_ListContext.Provider, {
        value: listContext
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(FieldContext.Provider, {
        value: fieldContext
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_Field, {
        name: [],
        shouldUpdate: shouldUpdate,
        rules: rules,
        validateTrigger: validateTrigger,
        initialValue: initialValue,
        isList: true,
        isListField: null != isListField ? isListField : !!wrapperListContext
    }, function(_ref3, meta) {
        var _ref3$value = _ref3.value, value = void 0 === _ref3$value ? [] : _ref3$value, onChange = _ref3.onChange;
        var getFieldValue = context.getFieldValue;
        var getNewValue = function() {
            var values = getFieldValue(prefixName || []);
            return values || [];
        };
        var operations = {
            add: function(defaultValue, index) {
                var newValue = getNewValue();
                if (index >= 0 && index <= newValue.length) {
                    keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [
                        keyManager.id
                    ], _toConsumableArray(keyManager.keys.slice(index)));
                    onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [
                        defaultValue
                    ], _toConsumableArray(newValue.slice(index))));
                } else {
                    if ('production' !== process.env.NODE_ENV && (index < 0 || index > newValue.length)) es_warning(false, 'The second parameter of the add function should be a valid positive number.');
                    keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [
                        keyManager.id
                    ]);
                    onChange([].concat(_toConsumableArray(newValue), [
                        defaultValue
                    ]));
                }
                keyManager.id += 1;
            },
            remove: function(index) {
                var newValue = getNewValue();
                var indexSet = new Set(Array.isArray(index) ? index : [
                    index
                ]);
                if (indexSet.size <= 0) return;
                keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
                    return !indexSet.has(keysIndex);
                });
                onChange(newValue.filter(function(_, valueIndex) {
                    return !indexSet.has(valueIndex);
                }));
            },
            move: function(from, to) {
                if (from === to) return;
                var newValue = getNewValue();
                if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) return;
                keyManager.keys = valueUtil_move(keyManager.keys, from, to);
                onChange(valueUtil_move(newValue, from, to));
            }
        };
        var listValue = value || [];
        if (!Array.isArray(listValue)) {
            listValue = [];
            if ('production' !== process.env.NODE_ENV) es_warning(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
        }
        return children(listValue.map(function(__, index) {
            var key = keyManager.keys[index];
            if (void 0 === key) {
                keyManager.keys[index] = keyManager.id;
                key = keyManager.keys[index];
                keyManager.id += 1;
            }
            return {
                name: index,
                key: key,
                isListField: true
            };
        }), operations, meta);
    })));
}
const List = List_List;
function allPromiseFinish(promiseList) {
    var hasError = false;
    var count = promiseList.length;
    var results = [];
    if (!promiseList.length) return Promise.resolve([]);
    return new Promise(function(resolve, reject) {
        promiseList.forEach(function(promise, index) {
            promise.catch(function(e) {
                hasError = true;
                return e;
            }).then(function(result) {
                count -= 1;
                results[index] = result;
                if (count > 0) return;
                if (hasError) reject(results);
                resolve(results);
            });
        });
    });
}
var SPLIT = '__@field_split__';
function NameMap_normalize(namePath) {
    return namePath.map(function(cell) {
        return "".concat(typeof_typeof(cell), ":").concat(cell);
    }).join(SPLIT);
}
var NameMap_NameMap = /*#__PURE__*/ function() {
    function NameMap() {
        classCallCheck_classCallCheck(this, NameMap);
        defineProperty_defineProperty(this, "kvs", new Map());
    }
    createClass_createClass(NameMap, [
        {
            key: "set",
            value: function(key, value) {
                this.kvs.set(NameMap_normalize(key), value);
            }
        },
        {
            key: "get",
            value: function(key) {
                return this.kvs.get(NameMap_normalize(key));
            }
        },
        {
            key: "update",
            value: function(key, updater) {
                var origin = this.get(key);
                var next = updater(origin);
                if (next) this.set(key, next);
                else this.delete(key);
            }
        },
        {
            key: "delete",
            value: function(key) {
                this.kvs.delete(NameMap_normalize(key));
            }
        },
        {
            key: "map",
            value: function(callback) {
                return _toConsumableArray(this.kvs.entries()).map(function(_ref) {
                    var _ref2 = slicedToArray_slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                    var cells = key.split(SPLIT);
                    return callback({
                        key: cells.map(function(cell) {
                            var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = slicedToArray_slicedToArray(_cell$match, 3), type = _cell$match2[1], unit = _cell$match2[2];
                            return 'number' === type ? Number(unit) : unit;
                        }),
                        value: value
                    });
                });
            }
        },
        {
            key: "toJSON",
            value: function() {
                var json = {};
                this.map(function(_ref3) {
                    var key = _ref3.key, value = _ref3.value;
                    json[key.join('.')] = value;
                    return null;
                });
                return json;
            }
        }
    ]);
    return NameMap;
}();
const utils_NameMap = NameMap_NameMap;
var useForm_excluded = [
    "name"
];
var useForm_FormStore = /*#__PURE__*/ createClass_createClass(function FormStore(forceRootUpdate) {
    var _this = this;
    classCallCheck_classCallCheck(this, FormStore);
    defineProperty_defineProperty(this, "formHooked", false);
    defineProperty_defineProperty(this, "forceRootUpdate", void 0);
    defineProperty_defineProperty(this, "subscribable", true);
    defineProperty_defineProperty(this, "store", {});
    defineProperty_defineProperty(this, "fieldEntities", []);
    defineProperty_defineProperty(this, "initialValues", {});
    defineProperty_defineProperty(this, "callbacks", {});
    defineProperty_defineProperty(this, "validateMessages", null);
    defineProperty_defineProperty(this, "preserve", null);
    defineProperty_defineProperty(this, "lastValidatePromise", null);
    defineProperty_defineProperty(this, "getForm", function() {
        return {
            getFieldValue: _this.getFieldValue,
            getFieldsValue: _this.getFieldsValue,
            getFieldError: _this.getFieldError,
            getFieldWarning: _this.getFieldWarning,
            getFieldsError: _this.getFieldsError,
            isFieldsTouched: _this.isFieldsTouched,
            isFieldTouched: _this.isFieldTouched,
            isFieldValidating: _this.isFieldValidating,
            isFieldsValidating: _this.isFieldsValidating,
            resetFields: _this.resetFields,
            setFields: _this.setFields,
            setFieldValue: _this.setFieldValue,
            setFieldsValue: _this.setFieldsValue,
            validateFields: _this.validateFields,
            submit: _this.submit,
            _init: true,
            getInternalHooks: _this.getInternalHooks
        };
    });
    defineProperty_defineProperty(this, "getInternalHooks", function(key) {
        if (key === HOOK_MARK) {
            _this.formHooked = true;
            return {
                dispatch: _this.dispatch,
                initEntityValue: _this.initEntityValue,
                registerField: _this.registerField,
                useSubscribe: _this.useSubscribe,
                setInitialValues: _this.setInitialValues,
                destroyForm: _this.destroyForm,
                setCallbacks: _this.setCallbacks,
                setValidateMessages: _this.setValidateMessages,
                getFields: _this.getFields,
                setPreserve: _this.setPreserve,
                getInitialValue: _this.getInitialValue,
                registerWatch: _this.registerWatch
            };
        }
        es_warning(false, '`getInternalHooks` is internal usage. Should not call directly.');
        return null;
    });
    defineProperty_defineProperty(this, "useSubscribe", function(subscribable) {
        _this.subscribable = subscribable;
    });
    defineProperty_defineProperty(this, "prevWithoutPreserves", null);
    defineProperty_defineProperty(this, "setInitialValues", function(initialValues, init) {
        _this.initialValues = initialValues || {};
        if (init) {
            var _this$prevWithoutPres;
            var nextStore = merge(initialValues, _this.store);
            null == (_this$prevWithoutPres = _this.prevWithoutPreserves) || _this$prevWithoutPres.map(function(_ref) {
                var namePath = _ref.key;
                nextStore = set_set(nextStore, namePath, get_get(initialValues, namePath));
            });
            _this.prevWithoutPreserves = null;
            _this.updateStore(nextStore);
        }
    });
    defineProperty_defineProperty(this, "destroyForm", function(clearOnDestroy) {
        if (clearOnDestroy) _this.updateStore({});
        else {
            var prevWithoutPreserves = new utils_NameMap();
            _this.getFieldEntities(true).forEach(function(entity) {
                if (!_this.isMergedPreserve(entity.isPreserve())) prevWithoutPreserves.set(entity.getNamePath(), true);
            });
            _this.prevWithoutPreserves = prevWithoutPreserves;
        }
    });
    defineProperty_defineProperty(this, "getInitialValue", function(namePath) {
        var initValue = get_get(_this.initialValues, namePath);
        return namePath.length ? merge(initValue) : initValue;
    });
    defineProperty_defineProperty(this, "setCallbacks", function(callbacks) {
        _this.callbacks = callbacks;
    });
    defineProperty_defineProperty(this, "setValidateMessages", function(validateMessages) {
        _this.validateMessages = validateMessages;
    });
    defineProperty_defineProperty(this, "setPreserve", function(preserve) {
        _this.preserve = preserve;
    });
    defineProperty_defineProperty(this, "watchList", []);
    defineProperty_defineProperty(this, "registerWatch", function(callback) {
        _this.watchList.push(callback);
        return function() {
            _this.watchList = _this.watchList.filter(function(fn) {
                return fn !== callback;
            });
        };
    });
    defineProperty_defineProperty(this, "notifyWatch", function() {
        var namePath = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (_this.watchList.length) {
            var values = _this.getFieldsValue();
            var allValues = _this.getFieldsValue(true);
            _this.watchList.forEach(function(callback) {
                callback(values, allValues, namePath);
            });
        }
    });
    defineProperty_defineProperty(this, "timeoutId", null);
    defineProperty_defineProperty(this, "warningUnhooked", function() {
        if ('production' !== process.env.NODE_ENV && !_this.timeoutId && 'undefined' != typeof window) _this.timeoutId = setTimeout(function() {
            _this.timeoutId = null;
            if (!_this.formHooked) es_warning(false, 'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?');
        });
    });
    defineProperty_defineProperty(this, "updateStore", function(nextStore) {
        _this.store = nextStore;
    });
    defineProperty_defineProperty(this, "getFieldEntities", function() {
        var pure = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
        if (!pure) return _this.fieldEntities;
        return _this.fieldEntities.filter(function(field) {
            return field.getNamePath().length;
        });
    });
    defineProperty_defineProperty(this, "getFieldsMap", function() {
        var pure = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
        var cache = new utils_NameMap();
        _this.getFieldEntities(pure).forEach(function(field) {
            var namePath = field.getNamePath();
            cache.set(namePath, field);
        });
        return cache;
    });
    defineProperty_defineProperty(this, "getFieldEntitiesForNamePathList", function(nameList) {
        if (!nameList) return _this.getFieldEntities(true);
        var cache = _this.getFieldsMap(true);
        return nameList.map(function(name) {
            var namePath = getNamePath(name);
            return cache.get(namePath) || {
                INVALIDATE_NAME_PATH: getNamePath(name)
            };
        });
    });
    defineProperty_defineProperty(this, "getFieldsValue", function(nameList, filterFunc) {
        _this.warningUnhooked();
        var mergedNameList;
        var mergedFilterFunc;
        var mergedStrict;
        if (true === nameList || Array.isArray(nameList)) {
            mergedNameList = nameList;
            mergedFilterFunc = filterFunc;
        } else if (nameList && 'object' === typeof_typeof(nameList)) {
            mergedStrict = nameList.strict;
            mergedFilterFunc = nameList.filter;
        }
        if (true === mergedNameList && !mergedFilterFunc) return _this.store;
        var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
        var filteredNameList = [];
        fieldEntities.forEach(function(entity) {
            var _isListField, _ref3;
            var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
            if (mergedStrict) {
                var _isList, _ref2;
                if (null != (_isList = (_ref2 = entity).isList) && _isList.call(_ref2)) return;
            } else if (!mergedNameList && null != (_isListField = (_ref3 = entity).isListField) && _isListField.call(_ref3)) return;
            if (mergedFilterFunc) {
                var meta = 'getMeta' in entity ? entity.getMeta() : null;
                if (mergedFilterFunc(meta)) filteredNameList.push(namePath);
            } else filteredNameList.push(namePath);
        });
        return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
    });
    defineProperty_defineProperty(this, "getFieldValue", function(name) {
        _this.warningUnhooked();
        var namePath = getNamePath(name);
        return get_get(_this.store, namePath);
    });
    defineProperty_defineProperty(this, "getFieldsError", function(nameList) {
        _this.warningUnhooked();
        var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
        return fieldEntities.map(function(entity, index) {
            if (entity && !('INVALIDATE_NAME_PATH' in entity)) return {
                name: entity.getNamePath(),
                errors: entity.getErrors(),
                warnings: entity.getWarnings()
            };
            return {
                name: getNamePath(nameList[index]),
                errors: [],
                warnings: []
            };
        });
    });
    defineProperty_defineProperty(this, "getFieldError", function(name) {
        _this.warningUnhooked();
        var namePath = getNamePath(name);
        var fieldError = _this.getFieldsError([
            namePath
        ])[0];
        return fieldError.errors;
    });
    defineProperty_defineProperty(this, "getFieldWarning", function(name) {
        _this.warningUnhooked();
        var namePath = getNamePath(name);
        var fieldError = _this.getFieldsError([
            namePath
        ])[0];
        return fieldError.warnings;
    });
    defineProperty_defineProperty(this, "isFieldsTouched", function() {
        _this.warningUnhooked();
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var arg0 = args[0], arg1 = args[1];
        var namePathList;
        var isAllFieldsTouched = false;
        if (0 === args.length) namePathList = null;
        else if (1 === args.length) if (Array.isArray(arg0)) {
            namePathList = arg0.map(getNamePath);
            isAllFieldsTouched = false;
        } else {
            namePathList = null;
            isAllFieldsTouched = arg0;
        }
        else {
            namePathList = arg0.map(getNamePath);
            isAllFieldsTouched = arg1;
        }
        var fieldEntities = _this.getFieldEntities(true);
        var isFieldTouched = function(field) {
            return field.isFieldTouched();
        };
        if (!namePathList) return isAllFieldsTouched ? fieldEntities.every(function(entity) {
            return isFieldTouched(entity) || entity.isList();
        }) : fieldEntities.some(isFieldTouched);
        var map = new utils_NameMap();
        namePathList.forEach(function(shortNamePath) {
            map.set(shortNamePath, []);
        });
        fieldEntities.forEach(function(field) {
            var fieldNamePath = field.getNamePath();
            namePathList.forEach(function(shortNamePath) {
                if (shortNamePath.every(function(nameUnit, i) {
                    return fieldNamePath[i] === nameUnit;
                })) map.update(shortNamePath, function(list) {
                    return [].concat(_toConsumableArray(list), [
                        field
                    ]);
                });
            });
        });
        var isNamePathListTouched = function(entities) {
            return entities.some(isFieldTouched);
        };
        var namePathListEntities = map.map(function(_ref4) {
            var value = _ref4.value;
            return value;
        });
        return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    });
    defineProperty_defineProperty(this, "isFieldTouched", function(name) {
        _this.warningUnhooked();
        return _this.isFieldsTouched([
            name
        ]);
    });
    defineProperty_defineProperty(this, "isFieldsValidating", function(nameList) {
        _this.warningUnhooked();
        var fieldEntities = _this.getFieldEntities();
        if (!nameList) return fieldEntities.some(function(testField) {
            return testField.isFieldValidating();
        });
        var namePathList = nameList.map(getNamePath);
        return fieldEntities.some(function(testField) {
            var fieldNamePath = testField.getNamePath();
            return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
        });
    });
    defineProperty_defineProperty(this, "isFieldValidating", function(name) {
        _this.warningUnhooked();
        return _this.isFieldsValidating([
            name
        ]);
    });
    defineProperty_defineProperty(this, "resetWithFieldInitialValue", function() {
        var info = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var cache = new utils_NameMap();
        var fieldEntities = _this.getFieldEntities(true);
        fieldEntities.forEach(function(field) {
            var initialValue = field.props.initialValue;
            var namePath = field.getNamePath();
            if (void 0 !== initialValue) {
                var records = cache.get(namePath) || new Set();
                records.add({
                    entity: field,
                    value: initialValue
                });
                cache.set(namePath, records);
            }
        });
        var resetWithFields = function(entities) {
            entities.forEach(function(field) {
                var initialValue = field.props.initialValue;
                if (void 0 !== initialValue) {
                    var namePath = field.getNamePath();
                    var formInitialValue = _this.getInitialValue(namePath);
                    if (void 0 !== formInitialValue) es_warning(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
                    else {
                        var records = cache.get(namePath);
                        if (records && records.size > 1) es_warning(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
                        else if (records) {
                            var originValue = _this.getFieldValue(namePath);
                            var isListField = field.isListField();
                            if (!isListField && (!info.skipExist || void 0 === originValue)) _this.updateStore(set_set(_this.store, namePath, _toConsumableArray(records)[0].value));
                        }
                    }
                }
            });
        };
        var requiredFieldEntities;
        if (info.entities) requiredFieldEntities = info.entities;
        else if (info.namePathList) {
            requiredFieldEntities = [];
            info.namePathList.forEach(function(namePath) {
                var records = cache.get(namePath);
                if (records) {
                    var _requiredFieldEntitie;
                    (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r) {
                        return r.entity;
                    })));
                }
            });
        } else requiredFieldEntities = fieldEntities;
        resetWithFields(requiredFieldEntities);
    });
    defineProperty_defineProperty(this, "resetFields", function(nameList) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        if (!nameList) {
            _this.updateStore(merge(_this.initialValues));
            _this.resetWithFieldInitialValue();
            _this.notifyObservers(prevStore, null, {
                type: 'reset'
            });
            _this.notifyWatch();
            return;
        }
        var namePathList = nameList.map(getNamePath);
        namePathList.forEach(function(namePath) {
            var initialValue = _this.getInitialValue(namePath);
            _this.updateStore(set_set(_this.store, namePath, initialValue));
        });
        _this.resetWithFieldInitialValue({
            namePathList: namePathList
        });
        _this.notifyObservers(prevStore, namePathList, {
            type: 'reset'
        });
        _this.notifyWatch(namePathList);
    });
    defineProperty_defineProperty(this, "setFields", function(fields) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        var namePathList = [];
        fields.forEach(function(fieldData) {
            var name = fieldData.name, data = objectWithoutProperties_objectWithoutProperties(fieldData, useForm_excluded);
            var namePath = getNamePath(name);
            namePathList.push(namePath);
            if ('value' in data) _this.updateStore(set_set(_this.store, namePath, data.value));
            _this.notifyObservers(prevStore, [
                namePath
            ], {
                type: 'setField',
                data: fieldData
            });
        });
        _this.notifyWatch(namePathList);
    });
    defineProperty_defineProperty(this, "getFields", function() {
        var entities = _this.getFieldEntities(true);
        var fields = entities.map(function(field) {
            var namePath = field.getNamePath();
            var meta = field.getMeta();
            var fieldData = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, meta), {}, {
                name: namePath,
                value: _this.getFieldValue(namePath)
            });
            Object.defineProperty(fieldData, 'originRCField', {
                value: true
            });
            return fieldData;
        });
        return fields;
    });
    defineProperty_defineProperty(this, "initEntityValue", function(entity) {
        var initialValue = entity.props.initialValue;
        if (void 0 !== initialValue) {
            var namePath = entity.getNamePath();
            var prevValue = get_get(_this.store, namePath);
            if (void 0 === prevValue) _this.updateStore(set_set(_this.store, namePath, initialValue));
        }
    });
    defineProperty_defineProperty(this, "isMergedPreserve", function(fieldPreserve) {
        var mergedPreserve = void 0 !== fieldPreserve ? fieldPreserve : _this.preserve;
        return null != mergedPreserve ? mergedPreserve : true;
    });
    defineProperty_defineProperty(this, "registerField", function(entity) {
        _this.fieldEntities.push(entity);
        var namePath = entity.getNamePath();
        _this.notifyWatch([
            namePath
        ]);
        if (void 0 !== entity.props.initialValue) {
            var prevStore = _this.store;
            _this.resetWithFieldInitialValue({
                entities: [
                    entity
                ],
                skipExist: true
            });
            _this.notifyObservers(prevStore, [
                entity.getNamePath()
            ], {
                type: 'valueUpdate',
                source: 'internal'
            });
        }
        return function(isListField, preserve) {
            var subNamePath = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            _this.fieldEntities = _this.fieldEntities.filter(function(item) {
                return item !== entity;
            });
            if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
                var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
                if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
                    return !matchNamePath(field.getNamePath(), namePath);
                })) {
                    var _prevStore = _this.store;
                    _this.updateStore(set_set(_prevStore, namePath, defaultValue, true));
                    _this.notifyObservers(_prevStore, [
                        namePath
                    ], {
                        type: 'remove'
                    });
                    _this.triggerDependenciesUpdate(_prevStore, namePath);
                }
            }
            _this.notifyWatch([
                namePath
            ]);
        };
    });
    defineProperty_defineProperty(this, "dispatch", function(action) {
        switch(action.type){
            case 'updateValue':
                var namePath = action.namePath, value = action.value;
                _this.updateValue(namePath, value);
                break;
            case 'validateField':
                var _namePath = action.namePath, triggerName = action.triggerName;
                _this.validateFields([
                    _namePath
                ], {
                    triggerName: triggerName
                });
                break;
            default:
        }
    });
    defineProperty_defineProperty(this, "notifyObservers", function(prevStore, namePathList, info) {
        if (_this.subscribable) {
            var mergedInfo = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, info), {}, {
                store: _this.getFieldsValue(true)
            });
            _this.getFieldEntities().forEach(function(_ref5) {
                var onStoreChange = _ref5.onStoreChange;
                onStoreChange(prevStore, namePathList, mergedInfo);
            });
        } else _this.forceRootUpdate();
    });
    defineProperty_defineProperty(this, "triggerDependenciesUpdate", function(prevStore, namePath) {
        var childrenFields = _this.getDependencyChildrenFields(namePath);
        if (childrenFields.length) _this.validateFields(childrenFields);
        _this.notifyObservers(prevStore, childrenFields, {
            type: 'dependenciesUpdate',
            relatedFields: [
                namePath
            ].concat(_toConsumableArray(childrenFields))
        });
        return childrenFields;
    });
    defineProperty_defineProperty(this, "updateValue", function(name, value) {
        var namePath = getNamePath(name);
        var prevStore = _this.store;
        _this.updateStore(set_set(_this.store, namePath, value));
        _this.notifyObservers(prevStore, [
            namePath
        ], {
            type: 'valueUpdate',
            source: 'internal'
        });
        _this.notifyWatch([
            namePath
        ]);
        var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
        var onValuesChange = _this.callbacks.onValuesChange;
        if (onValuesChange) {
            var changedValues = cloneByNamePathList(_this.store, [
                namePath
            ]);
            onValuesChange(changedValues, _this.getFieldsValue());
        }
        _this.triggerOnFieldsChange([
            namePath
        ].concat(_toConsumableArray(childrenFields)));
    });
    defineProperty_defineProperty(this, "setFieldsValue", function(store) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        if (store) {
            var nextStore = merge(_this.store, store);
            _this.updateStore(nextStore);
        }
        _this.notifyObservers(prevStore, null, {
            type: 'valueUpdate',
            source: 'external'
        });
        _this.notifyWatch();
    });
    defineProperty_defineProperty(this, "setFieldValue", function(name, value) {
        _this.setFields([
            {
                name: name,
                value: value,
                errors: [],
                warnings: []
            }
        ]);
    });
    defineProperty_defineProperty(this, "getDependencyChildrenFields", function(rootNamePath) {
        var children = new Set();
        var childrenFields = [];
        var dependencies2fields = new utils_NameMap();
        _this.getFieldEntities().forEach(function(field) {
            var dependencies = field.props.dependencies;
            (dependencies || []).forEach(function(dependency) {
                var dependencyNamePath = getNamePath(dependency);
                dependencies2fields.update(dependencyNamePath, function() {
                    var fields = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set();
                    fields.add(field);
                    return fields;
                });
            });
        });
        var fillChildren = function fillChildren(namePath) {
            var fields = dependencies2fields.get(namePath) || new Set();
            fields.forEach(function(field) {
                if (!children.has(field)) {
                    children.add(field);
                    var fieldNamePath = field.getNamePath();
                    if (field.isFieldDirty() && fieldNamePath.length) {
                        childrenFields.push(fieldNamePath);
                        fillChildren(fieldNamePath);
                    }
                }
            });
        };
        fillChildren(rootNamePath);
        return childrenFields;
    });
    defineProperty_defineProperty(this, "triggerOnFieldsChange", function(namePathList, filedErrors) {
        var onFieldsChange = _this.callbacks.onFieldsChange;
        if (onFieldsChange) {
            var fields = _this.getFields();
            if (filedErrors) {
                var cache = new utils_NameMap();
                filedErrors.forEach(function(_ref6) {
                    var name = _ref6.name, errors = _ref6.errors;
                    cache.set(name, errors);
                });
                fields.forEach(function(field) {
                    field.errors = cache.get(field.name) || field.errors;
                });
            }
            var changedFields = fields.filter(function(_ref7) {
                var fieldName = _ref7.name;
                return containsNamePath(namePathList, fieldName);
            });
            if (changedFields.length) onFieldsChange(changedFields, fields);
        }
    });
    defineProperty_defineProperty(this, "validateFields", function(arg1, arg2) {
        _this.warningUnhooked();
        var nameList;
        var options;
        if (Array.isArray(arg1) || 'string' == typeof arg1 || 'string' == typeof arg2) {
            nameList = arg1;
            options = arg2;
        } else options = arg1;
        var provideNameList = !!nameList;
        var namePathList = provideNameList ? nameList.map(getNamePath) : [];
        var promiseList = [];
        var TMP_SPLIT = String(Date.now());
        var validateNamePathList = new Set();
        var _ref8 = options || {}, recursive = _ref8.recursive, dirty = _ref8.dirty;
        _this.getFieldEntities(true).forEach(function(field) {
            if (!provideNameList) namePathList.push(field.getNamePath());
            if (!field.props.rules || !field.props.rules.length) return;
            if (dirty && !field.isFieldDirty()) return;
            var fieldNamePath = field.getNamePath();
            validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
            if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
                var promise = field.validateRules(objectSpread2_objectSpread2({
                    validateMessages: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
                }, options));
                promiseList.push(promise.then(function() {
                    return {
                        name: fieldNamePath,
                        errors: [],
                        warnings: []
                    };
                }).catch(function(ruleErrors) {
                    var _ruleErrors$forEach;
                    var mergedErrors = [];
                    var mergedWarnings = [];
                    null == (_ruleErrors$forEach = ruleErrors.forEach) || _ruleErrors$forEach.call(ruleErrors, function(_ref9) {
                        var warningOnly = _ref9.rule.warningOnly, errors = _ref9.errors;
                        if (warningOnly) mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
                        else mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
                    });
                    if (mergedErrors.length) return Promise.reject({
                        name: fieldNamePath,
                        errors: mergedErrors,
                        warnings: mergedWarnings
                    });
                    return {
                        name: fieldNamePath,
                        errors: mergedErrors,
                        warnings: mergedWarnings
                    };
                }));
            }
        });
        var summaryPromise = allPromiseFinish(promiseList);
        _this.lastValidatePromise = summaryPromise;
        summaryPromise.catch(function(results) {
            return results;
        }).then(function(results) {
            var resultNamePathList = results.map(function(_ref10) {
                var name = _ref10.name;
                return name;
            });
            _this.notifyObservers(_this.store, resultNamePathList, {
                type: 'validateFinish'
            });
            _this.triggerOnFieldsChange(resultNamePathList, results);
        });
        var returnPromise = summaryPromise.then(function() {
            if (_this.lastValidatePromise === summaryPromise) return Promise.resolve(_this.getFieldsValue(namePathList));
            return Promise.reject([]);
        }).catch(function(results) {
            var errorList = results.filter(function(result) {
                return result && result.errors.length;
            });
            return Promise.reject({
                values: _this.getFieldsValue(namePathList),
                errorFields: errorList,
                outOfDate: _this.lastValidatePromise !== summaryPromise
            });
        });
        returnPromise.catch(function(e) {
            return e;
        });
        var triggerNamePathList = namePathList.filter(function(namePath) {
            return validateNamePathList.has(namePath.join(TMP_SPLIT));
        });
        _this.triggerOnFieldsChange(triggerNamePathList);
        return returnPromise;
    });
    defineProperty_defineProperty(this, "submit", function() {
        _this.warningUnhooked();
        _this.validateFields().then(function(values) {
            var onFinish = _this.callbacks.onFinish;
            if (onFinish) try {
                onFinish(values);
            } catch (err) {
                console.error(err);
            }
        }).catch(function(e) {
            var onFinishFailed = _this.callbacks.onFinishFailed;
            if (onFinishFailed) onFinishFailed(e);
        });
    });
    this.forceRootUpdate = forceRootUpdate;
});
function useForm_useForm(form) {
    var formRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
    var _React$useState = __WEBPACK_EXTERNAL_MODULE_react__.useState({}), _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
    if (!formRef.current) if (form) formRef.current = form;
    else {
        var forceReRender = function() {
            forceUpdate({});
        };
        var formStore = new useForm_FormStore(forceReRender);
        formRef.current = formStore.getForm();
    }
    return [
        formRef.current
    ];
}
const useForm = useForm_useForm;
var FormContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({
    triggerFormChange: function() {},
    triggerFormFinish: function() {},
    registerForm: function() {},
    unregisterForm: function() {}
});
var FormContext_FormProvider = function(_ref) {
    var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
    var formContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(FormContext);
    var formsRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef({});
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(FormContext.Provider, {
        value: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formContext), {}, {
            validateMessages: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formContext.validateMessages), validateMessages),
            triggerFormChange: function(name, changedFields) {
                if (onFormChange) onFormChange(name, {
                    changedFields: changedFields,
                    forms: formsRef.current
                });
                formContext.triggerFormChange(name, changedFields);
            },
            triggerFormFinish: function(name, values) {
                if (onFormFinish) onFormFinish(name, {
                    values: values,
                    forms: formsRef.current
                });
                formContext.triggerFormFinish(name, values);
            },
            registerForm: function(name, form) {
                if (name) formsRef.current = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formsRef.current), {}, defineProperty_defineProperty({}, name, form));
                formContext.registerForm(name, form);
            },
            unregisterForm: function(name) {
                var newForms = objectSpread2_objectSpread2({}, formsRef.current);
                delete newForms[name];
                formsRef.current = newForms;
                formContext.unregisterForm(name);
            }
        })
    }, children);
};
const es_FormContext = FormContext;
var Form_excluded = [
    "name",
    "initialValues",
    "fields",
    "form",
    "preserve",
    "children",
    "component",
    "validateMessages",
    "validateTrigger",
    "onValuesChange",
    "onFieldsChange",
    "onFinish",
    "onFinishFailed",
    "clearOnDestroy"
];
var Form_Form = function(_ref, ref) {
    var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component = void 0 === _ref$component ? 'form' : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = void 0 === _ref$validateTrigger ? 'onChange' : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, clearOnDestroy = _ref.clearOnDestroy, restProps = objectWithoutProperties_objectWithoutProperties(_ref, Form_excluded);
    var nativeElementRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    var formContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(es_FormContext);
    var _useForm = useForm(form), _useForm2 = slicedToArray_slicedToArray(_useForm, 1), formInstance = _useForm2[0];
    var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _getInternalHooks.useSubscribe, setInitialValues = _getInternalHooks.setInitialValues, setCallbacks = _getInternalHooks.setCallbacks, setValidateMessages = _getInternalHooks.setValidateMessages, setPreserve = _getInternalHooks.setPreserve, destroyForm = _getInternalHooks.destroyForm;
    __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle(ref, function() {
        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formInstance), {}, {
            nativeElement: nativeElementRef.current
        });
    });
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        formContext.registerForm(name, formInstance);
        return function() {
            formContext.unregisterForm(name);
        };
    }, [
        formContext,
        formInstance,
        name
    ]);
    setValidateMessages(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formContext.validateMessages), validateMessages));
    setCallbacks({
        onValuesChange: onValuesChange,
        onFieldsChange: function(changedFields) {
            formContext.triggerFormChange(name, changedFields);
            if (_onFieldsChange) {
                for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
                _onFieldsChange.apply(void 0, [
                    changedFields
                ].concat(rest));
            }
        },
        onFinish: function(values) {
            formContext.triggerFormFinish(name, values);
            if (_onFinish) _onFinish(values);
        },
        onFinishFailed: onFinishFailed
    });
    setPreserve(preserve);
    var mountRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) mountRef.current = true;
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        return function() {
            return destroyForm(clearOnDestroy);
        };
    }, []);
    var childrenNode;
    var childrenRenderProps = 'function' == typeof children;
    if (childrenRenderProps) {
        var _values = formInstance.getFieldsValue(true);
        childrenNode = children(_values, formInstance);
    } else childrenNode = children;
    useSubscribe(!childrenRenderProps);
    var prevFieldsRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef();
    __WEBPACK_EXTERNAL_MODULE_react__.useEffect(function() {
        if (!isSimilar(prevFieldsRef.current || [], fields || [])) formInstance.setFields(fields || []);
        prevFieldsRef.current = fields;
    }, [
        fields,
        formInstance
    ]);
    var formContextValue = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(function() {
        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, formInstance), {}, {
            validateTrigger: validateTrigger
        });
    }, [
        formInstance,
        validateTrigger
    ]);
    var wrapperNode = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(es_ListContext.Provider, {
        value: null
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(FieldContext.Provider, {
        value: formContextValue
    }, childrenNode));
    if (false === Component) return wrapperNode;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Component, _extends({}, restProps, {
        ref: nativeElementRef,
        onSubmit: function(event) {
            event.preventDefault();
            event.stopPropagation();
            formInstance.submit();
        },
        onReset: function(event) {
            var _restProps$onReset;
            event.preventDefault();
            formInstance.resetFields();
            null == (_restProps$onReset = restProps.onReset) || _restProps$onReset.call(restProps, event);
        }
    }), wrapperNode);
};
const es_Form = Form_Form;
function stringify(value) {
    try {
        return JSON.stringify(value);
    } catch (err) {
        return Math.random();
    }
}
var useWatchWarning = 'production' !== process.env.NODE_ENV ? function(namePath) {
    var fullyStr = namePath.join('__RC_FIELD_FORM_SPLIT__');
    var nameStrRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(fullyStr);
    es_warning(nameStrRef.current === fullyStr, '`useWatch` is not support dynamic `namePath`. Please provide static instead.');
} : function() {};
function useWatch_useWatch() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    var dependencies = args[0], _args$ = args[1], _form = void 0 === _args$ ? {} : _args$;
    var options = isFormInstance(_form) ? {
        form: _form
    } : _form;
    var form = options.form;
    var _useState = (0, __WEBPACK_EXTERNAL_MODULE_react__.useState)(), _useState2 = slicedToArray_slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
    var valueStr = (0, __WEBPACK_EXTERNAL_MODULE_react__.useMemo)(function() {
        return stringify(value);
    }, [
        value
    ]);
    var valueStrRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(valueStr);
    valueStrRef.current = valueStr;
    var fieldContext = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(FieldContext);
    var formInstance = form || fieldContext;
    var isValidForm = formInstance && formInstance._init;
    if ('production' !== process.env.NODE_ENV) es_warning(2 === args.length ? form ? isValidForm : true : isValidForm, 'useWatch requires a form instance since it can not auto detect from context.');
    var namePath = getNamePath(dependencies);
    var namePathRef = (0, __WEBPACK_EXTERNAL_MODULE_react__.useRef)(namePath);
    namePathRef.current = namePath;
    useWatchWarning(namePath);
    (0, __WEBPACK_EXTERNAL_MODULE_react__.useEffect)(function() {
        if (!isValidForm) return;
        var getFieldsValue = formInstance.getFieldsValue, getInternalHooks = formInstance.getInternalHooks;
        var _getInternalHooks = getInternalHooks(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
        var getWatchValue = function(values, allValues) {
            var watchValue = options.preserve ? allValues : values;
            return 'function' == typeof dependencies ? dependencies(watchValue) : get_get(watchValue, namePathRef.current);
        };
        var cancelRegister = registerWatch(function(values, allValues) {
            var newValue = getWatchValue(values, allValues);
            var nextValueStr = stringify(newValue);
            if (valueStrRef.current !== nextValueStr) {
                valueStrRef.current = nextValueStr;
                setValue(newValue);
            }
        });
        var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));
        if (value !== initialValue) setValue(initialValue);
        return cancelRegister;
    }, [
        isValidForm
    ]);
    return value;
}
const es_useWatch = useWatch_useWatch;
var InternalForm = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormContext_FormProvider;
RefForm.Field = es_Field;
RefForm.List = List;
RefForm.useForm = useForm;
RefForm.useWatch = es_useWatch;
"use client";
const FormItemInputContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext({});
if ('production' !== process.env.NODE_ENV) FormItemInputContext.displayName = 'FormItemInputContext';
const NoFormStyle = ({ children, status, override })=>{
    const formItemInputContext = __WEBPACK_EXTERNAL_MODULE_react__.useContext(FormItemInputContext);
    const newFormItemInputContext = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        const newContext = Object.assign({}, formItemInputContext);
        if (override) delete newContext.isFormItemInput;
        if (status) {
            delete newContext.status;
            delete newContext.hasFeedback;
            delete newContext.feedbackIcon;
        }
        return newContext;
    }, [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};
"use client";
const SpaceCompactItemContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createContext(null);
const NoCompactStyle = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(SpaceCompactItemContext.Provider, {
        value: null
    }, children);
};
"use client";
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (null == children) return null;
    let result = children;
    if (form) result = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(NoFormStyle, {
        override: true,
        status: true
    }, result);
    if (space) result = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(NoCompactStyle, null, result);
    return result;
};
const _util_ContextIsolator = ContextIsolator;
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
var Cache_SPLIT = '%';
function pathKey(keys) {
    return keys.join(Cache_SPLIT);
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
var Theme_uuid = 0;
var Theme_Theme = /*#__PURE__*/ function() {
    function Theme(derivatives) {
        classCallCheck_classCallCheck(this, Theme);
        defineProperty_defineProperty(this, "derivatives", void 0);
        defineProperty_defineProperty(this, "id", void 0);
        this.derivatives = Array.isArray(derivatives) ? derivatives : [
            derivatives
        ];
        this.id = Theme_uuid;
        if (0 === derivatives.length) warning_warning(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
        Theme_uuid += 1;
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
var useCompatibleInsertionEffect_fullClone = objectSpread2_objectSpread2({}, __WEBPACK_EXTERNAL_MODULE_react__);
var useInsertionEffect = useCompatibleInsertionEffect_fullClone.useInsertionEffect;
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
function Serializer_stringify(element, index, children, callback) {
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
function Tokenizer_whitespace(type) {
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
            characters += Tokenizer_whitespace(previous);
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
    var serialized = serialize(compile(styleStr), Serializer_stringify);
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
var Keyframes_Keyframe = /*#__PURE__*/ function() {
    function Keyframe(name, style) {
        classCallCheck_classCallCheck(this, Keyframe);
        defineProperty_defineProperty(this, "name", void 0);
        defineProperty_defineProperty(this, "style", void 0);
        defineProperty_defineProperty(this, "_keyframe", true);
        this.name = name;
        this.style = style;
    }
    createClass_createClass(Keyframe, [
        {
            key: "getName",
            value: function() {
                var hashId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
            }
        }
    ]);
    return Keyframe;
}();
const Keyframes = Keyframes_Keyframe;
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
var alias_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function alias_formatToken(derivativeToken) {
    const { override } = derivativeToken, restToken = alias_rest(derivativeToken, [
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
const useToken_preserve = {
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
            preserve: useToken_preserve
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
const zIndexContext = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createContext(void 0);
if ('production' !== process.env.NODE_ENV) zIndexContext.displayName = 'zIndexContext';
const zindexContext = zIndexContext;
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
function isContainerType(type) {
    return type in containerBaseZIndexOffset;
}
const useZIndex = (componentType, customZIndex)=>{
    const [, token] = useToken_useToken();
    const parentZIndex = __WEBPACK_EXTERNAL_MODULE_react__["default"].useContext(zindexContext);
    const isContainer = isContainerType(componentType);
    let result;
    if (void 0 !== customZIndex) result = [
        customZIndex,
        customZIndex
    ];
    else {
        let zIndex = null != parentZIndex ? parentZIndex : 0;
        if (isContainer) zIndex += (parentZIndex ? 0 : token.zIndexPopupBase) + containerBaseZIndexOffset[componentType];
        else zIndex += consumerBaseZIndexOffset[componentType];
        result = [
            void 0 === parentZIndex ? customZIndex : zIndex,
            zIndex
        ];
    }
    if ('production' !== process.env.NODE_ENV) {
        const warning = devUseWarning(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        "production" !== process.env.NODE_ENV && warning(void 0 !== customZIndex || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.');
    }
    return result;
};
function getArrowToken(token) {
    const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - 1 / Math.sqrt(2) * borderRadiusXS;
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + 1 / Math.sqrt(2) * borderRadiusXS;
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
        arrowShadowWidth: shadowWidth,
        arrowPath,
        arrowPolygon
    };
}
const genRoundedArrow = (token, bgColor, boxShadow)=>{
    const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token;
    return {
        pointerEvents: 'none',
        width: sizePopupArrow,
        height: sizePopupArrow,
        overflow: 'hidden',
        '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: sizePopupArrow,
            height: calc(sizePopupArrow).div(2).equal(),
            background: bgColor,
            clipPath: {
                _multi_value_: true,
                value: [
                    arrowPolygon,
                    arrowPath
                ]
            },
            content: '""'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: arrowShadowWidth,
            height: arrowShadowWidth,
            bottom: 0,
            insetInline: 0,
            margin: 'auto',
            borderRadius: {
                _skip_check_: true,
                value: `0 0 ${util_unit(borderRadiusXS)} 0`
            },
            transform: 'translateY(50%) rotate(-135deg)',
            boxShadow,
            zIndex: 0,
            background: 'transparent'
        }
    };
};
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
        arrowOffsetHorizontal: arrowOffset,
        arrowOffsetVertical
    };
}
function isInject(valid, code) {
    if (!valid) return {};
    return code;
}
function getArrowStyle(token, colorBg, options) {
    const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal } = token;
    const { arrowDistance = 0, arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
    } } = options || {};
    return {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${componentCls}-arrow`]: [
                Object.assign(Object.assign({
                    position: 'absolute',
                    zIndex: 1,
                    display: 'block'
                }, genRoundedArrow(token, colorBg, boxShadowPopoverArrow)), {
                    '&:before': {
                        background: colorBg
                    }
                })
            ]
        }, isInject(!!arrowPlacement.top, {
            [[
                `&-placement-top > ${componentCls}-arrow`,
                `&-placement-topLeft > ${componentCls}-arrow`,
                `&-placement-topRight > ${componentCls}-arrow`
            ].join(',')]: {
                bottom: arrowDistance,
                transform: 'translateY(100%) rotate(180deg)'
            },
            [`&-placement-top > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
            },
            '&-placement-topLeft': {
                '--arrow-offset-horizontal': arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-topRight': {
                '--arrow-offset-horizontal': `calc(100% - ${util_unit(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            }
        })), isInject(!!arrowPlacement.bottom, {
            [[
                `&-placement-bottom > ${componentCls}-arrow`,
                `&-placement-bottomLeft > ${componentCls}-arrow`,
                `&-placement-bottomRight > ${componentCls}-arrow`
            ].join(',')]: {
                top: arrowDistance,
                transform: "translateY(-100%)"
            },
            [`&-placement-bottom > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: "translateX(-50%) translateY(-100%)"
            },
            '&-placement-bottomLeft': {
                '--arrow-offset-horizontal': arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-bottomRight': {
                '--arrow-offset-horizontal': `calc(100% - ${util_unit(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            }
        })), isInject(!!arrowPlacement.left, {
            [[
                `&-placement-left > ${componentCls}-arrow`,
                `&-placement-leftTop > ${componentCls}-arrow`,
                `&-placement-leftBottom > ${componentCls}-arrow`
            ].join(',')]: {
                right: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(100%) rotate(90deg)'
            },
            [`&-placement-left > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
            },
            [`&-placement-leftTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-leftBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            }
        })), isInject(!!arrowPlacement.right, {
            [[
                `&-placement-right > ${componentCls}-arrow`,
                `&-placement-rightTop > ${componentCls}-arrow`,
                `&-placement-rightBottom > ${componentCls}-arrow`
            ].join(',')]: {
                left: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-right > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-rightTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-rightBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            }
        }))
    };
}
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (false === autoAdjustOverflow) return {
        adjustX: false,
        adjustY: false
    };
    const overflow = autoAdjustOverflow && 'object' == typeof autoAdjustOverflow ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch(placement){
        case 'top':
        case 'bottom':
            baseOverflow.shiftX = 2 * arrowOffset.arrowOffsetHorizontal + arrowWidth;
            baseOverflow.shiftY = true;
            baseOverflow.adjustY = true;
            break;
        case 'left':
        case 'right':
            baseOverflow.shiftY = 2 * arrowOffset.arrowOffsetVertical + arrowWidth;
            baseOverflow.shiftX = true;
            baseOverflow.adjustX = true;
            break;
    }
    const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    if (!mergedOverflow.shiftX) mergedOverflow.adjustX = true;
    if (!mergedOverflow.shiftY) mergedOverflow.adjustY = true;
    return mergedOverflow;
}
const PlacementAlignMap = {
    left: {
        points: [
            'cr',
            'cl'
        ]
    },
    right: {
        points: [
            'cl',
            'cr'
        ]
    },
    top: {
        points: [
            'bc',
            'tc'
        ]
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ]
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tr'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ]
    }
};
const ArrowCenterPlacementAlignMap = {
    topLeft: {
        points: [
            'bl',
            'tc'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'cl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tc'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'cr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'bc'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'cr'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bc'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'cl'
        ]
    }
};
const DisableAutoArrowList = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
]);
function getPlacements(config) {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    Object.keys(PlacementAlignMap).forEach((key)=>{
        const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
        const placementInfo = Object.assign(Object.assign({}, template), {
            offset: [
                0,
                0
            ],
            dynamicInset: true
        });
        placementMap[key] = placementInfo;
        if (DisableAutoArrowList.has(key)) placementInfo.autoArrow = false;
        switch(key){
            case 'top':
            case 'topLeft':
            case 'topRight':
                placementInfo.offset[1] = -halfArrowWidth - offset;
                break;
            case 'bottom':
            case 'bottomLeft':
            case 'bottomRight':
                placementInfo.offset[1] = halfArrowWidth + offset;
                break;
            case 'left':
            case 'leftTop':
            case 'leftBottom':
                placementInfo.offset[0] = -halfArrowWidth - offset;
                break;
            case 'right':
            case 'rightTop':
            case 'rightBottom':
                placementInfo.offset[0] = halfArrowWidth + offset;
                break;
        }
        const arrowOffset = getArrowOffsetToken({
            contentRadius: borderRadius,
            limitVerticalRadius: true
        });
        if (arrowPointAtCenter) switch(key){
            case 'topLeft':
            case 'bottomLeft':
                placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                break;
            case 'topRight':
            case 'bottomRight':
                placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                break;
            case 'leftTop':
            case 'rightTop':
                placementInfo.offset[1] = 2 * -arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                break;
            case 'leftBottom':
            case 'rightBottom':
                placementInfo.offset[1] = 2 * arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                break;
        }
        placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
        if (visibleFirst) placementInfo.htmlRegion = 'visibleFirst';
    });
    return placementMap;
}
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
const genIconStyle = (iconPrefixCls)=>({
        [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
            [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
                display: 'block'
            }
        })
    });
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotionCommonLeave = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false)=>{
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
            animationPlayState: 'paused'
        }),
        [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
            animationPlayState: 'paused'
        }),
        [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
const zoomIn = new Keyframes('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new Keyframes('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new Keyframes('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new Keyframes('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new Keyframes('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new Keyframes('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new Keyframes('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new Keyframes('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new Keyframes('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new Keyframes('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new Keyframes('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new Keyframes('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        initMotion(motionCls, inKeyframes, outKeyframes, 'zoom-big-fast' === motionName ? token.motionDurationFast : token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
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
var calc_calculator_AbstractCalculator = /*#__PURE__*/ createClass_createClass(function AbstractCalculator() {
    classCallCheck_classCallCheck(this, AbstractCalculator);
});
const calc_calculator = calc_calculator_AbstractCalculator;
var CSSCalculator_CALC_UNIT = 'CALC_UNIT';
var calc_CSSCalculator_regexp = new RegExp(CSSCalculator_CALC_UNIT, 'g');
function calc_CSSCalculator_unit(value) {
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
        else if ('number' === numType) _this.result = calc_CSSCalculator_unit(num);
        else if ('string' === numType) _this.result = num;
        return _this;
    }
    createClass_createClass(CSSCalculator, [
        {
            key: "add",
            value: function(num) {
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " + ").concat(num.getResult());
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " + ").concat(calc_CSSCalculator_unit(num));
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "sub",
            value: function(num) {
                if (num instanceof CSSCalculator) this.result = "".concat(this.result, " - ").concat(num.getResult());
                else if ('number' == typeof num || 'string' == typeof num) this.result = "".concat(this.result, " - ").concat(calc_CSSCalculator_unit(num));
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
                this.result = this.result.replace(calc_CSSCalculator_regexp, mergedUnit ? 'px' : '');
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
var statistic = {};
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
            statistic[componentName] = {
                global: Array.from(tokenKeys),
                component: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, null == (_statistic$componentN = statistic[componentName]) ? void 0 : _statistic$componentN.component), componentToken)
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
const { genStyleHooks: genStyleUtils_genStyleHooks, genComponentStyleHook: genStyleUtils_genComponentStyleHook, genSubStyleComponent: genStyleUtils_genSubStyleComponent } = genStyleUtils({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(context_ConfigContext);
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
        const { csp } = (0, __WEBPACK_EXTERNAL_MODULE_react__.useContext)(context_ConfigContext);
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
            genIconStyle(null != (_a = null == config ? void 0 : config.prefix.iconPrefixCls) ? _a : defaultIconPrefixCls)
        ];
    },
    getCommonStyle: genCommonStyle,
    getCompUnitless: ()=>useToken_unitless
});
const genTooltipStyle = (token)=>{
    const { calc, componentCls, tooltipMaxWidth, tooltipColor, tooltipBg, tooltipBorderRadius, zIndexPopup, controlHeight, boxShadowSecondary, paddingSM, paddingXS, arrowOffsetHorizontal, sizePopupArrow } = token;
    const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
    const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
    return [
        {
            [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
                position: 'absolute',
                zIndex: zIndexPopup,
                display: 'block',
                width: 'max-content',
                maxWidth: tooltipMaxWidth,
                visibility: 'visible',
                '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
                transformOrigin: "var(--valid-offset-x, 50%) var(--arrow-y, 50%)",
                '&-hidden': {
                    display: 'none'
                },
                '--antd-arrow-background-color': tooltipBg,
                [`${componentCls}-inner`]: {
                    minWidth: centerAlignMinWidth,
                    minHeight: controlHeight,
                    padding: `${util_unit(token.calc(paddingSM).div(2).equal())} ${util_unit(paddingXS)}`,
                    color: tooltipColor,
                    textAlign: 'start',
                    textDecoration: 'none',
                    wordWrap: 'break-word',
                    backgroundColor: tooltipBg,
                    borderRadius: tooltipBorderRadius,
                    boxShadow: boxShadowSecondary,
                    boxSizing: 'border-box'
                },
                ["&-placement-topLeft,&-placement-topRight,&-placement-bottomLeft,&-placement-bottomRight"]: {
                    minWidth: edgeAlignMinWidth
                },
                ["&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom"]: {
                    [`${componentCls}-inner`]: {
                        borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
                    }
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                }
            }), genPresetColor(token, (colorKey, { darkColor })=>({
                    [`&${componentCls}-${colorKey}`]: {
                        [`${componentCls}-inner`]: {
                            backgroundColor: darkColor
                        },
                        [`${componentCls}-arrow`]: {
                            '--antd-arrow-background-color': darkColor
                        }
                    }
                }))), {
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        },
        getArrowStyle(token, 'var(--antd-arrow-background-color)'),
        {
            [`${componentCls}-pure`]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow
            }
        }
    ];
};
const prepareComponentToken = (token)=>Object.assign(Object.assign({
        zIndexPopup: token.zIndexPopupBase + 70
    }, getArrowOffsetToken({
        contentRadius: token.borderRadius,
        limitVerticalRadius: true
    })), getArrowToken(statistic_merge(token, {
        borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
    })));
const tooltip_style = (prefixCls, injectStyle = true)=>{
    const useStyle = genStyleUtils_genStyleHooks('Tooltip', (token)=>{
        const { borderRadius, colorTextLightSolid, colorBgSpotlight } = token;
        const TooltipToken = statistic_merge(token, {
            tooltipMaxWidth: 250,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgSpotlight
        });
        return [
            genTooltipStyle(TooltipToken),
            initZoomMotion(token, 'zoom-big-fast')
        ];
    }, prepareComponentToken, {
        resetStyle: false,
        injectStyle
    });
    return useStyle(prefixCls);
};
const inverseColors = PresetColors.map((color)=>`${color}-inverse`);
function isPresetColor(color, includeInverse = true) {
    if (includeInverse) return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
    return PresetColors.includes(color);
}
function parseColor(prefixCls, color) {
    const isInternalColor = isPresetColor(color);
    const className = classnames_default()({
        [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    if (color && !isInternalColor) {
        overlayStyle.background = color;
        arrowStyle['--antd-arrow-background-color'] = color;
    }
    return {
        className,
        overlayStyle,
        arrowStyle
    };
}
"use client";
const PurePanel_PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, placement = 'top', title, color, overlayInnerStyle } = props;
    const { getPrefixCls } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(context_ConfigContext);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = tooltip_style(prefixCls);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const cls = classnames_default()(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: cls,
        style: arrowContentStyle
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Popup, Object.assign({}, props, {
        className: hashId,
        prefixCls: prefixCls,
        overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
};
const PurePanel = PurePanel_PurePanel;
"use client";
var tooltip_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const InternalTooltip = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((props, ref)=>{
    var _a, _b;
    const { prefixCls: customizePrefixCls, openClassName, getTooltipContainer, color, overlayInnerStyle, children, afterOpenChange, afterVisibleChange, destroyTooltipOnHide, destroyOnHidden, arrow = true, title, overlay, builtinPlacements, arrowPointAtCenter = false, autoAdjustOverflow = true, motion, getPopupContainer, placement = 'top', mouseEnterDelay = 0.1, mouseLeaveDelay = 0.1, overlayStyle, rootClassName, overlayClassName, styles, classNames: tooltipClassNames } = props, restProps = tooltip_rest(props, [
        "prefixCls",
        "openClassName",
        "getTooltipContainer",
        "color",
        "overlayInnerStyle",
        "children",
        "afterOpenChange",
        "afterVisibleChange",
        "destroyTooltipOnHide",
        "destroyOnHidden",
        "arrow",
        "title",
        "overlay",
        "builtinPlacements",
        "arrowPointAtCenter",
        "autoAdjustOverflow",
        "motion",
        "getPopupContainer",
        "placement",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "overlayStyle",
        "rootClassName",
        "overlayClassName",
        "styles",
        "classNames"
    ]);
    const mergedShowArrow = !!arrow;
    const [, token] = useToken_useToken();
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = useComponentConfig('tooltip');
    const warning = devUseWarning('Tooltip');
    const tooltipRef = __WEBPACK_EXTERNAL_MODULE_react__.useRef(null);
    const forceAlign = ()=>{
        var _a;
        null == (_a = tooltipRef.current) || _a.forceAlign();
    };
    __WEBPACK_EXTERNAL_MODULE_react__.useImperativeHandle(ref, ()=>{
        var _a, _b;
        return {
            forceAlign,
            forcePopupAlign: ()=>{
                warning.deprecated(false, 'forcePopupAlign', 'forceAlign');
                forceAlign();
            },
            nativeElement: null == (_a = tooltipRef.current) ? void 0 : _a.nativeElement,
            popupElement: null == (_b = tooltipRef.current) ? void 0 : _b.popupElement
        };
    });
    if ('production' !== process.env.NODE_ENV) {
        [
            [
                'visible',
                'open'
            ],
            [
                'defaultVisible',
                'defaultOpen'
            ],
            [
                'onVisibleChange',
                'onOpenChange'
            ],
            [
                'afterVisibleChange',
                'afterOpenChange'
            ],
            [
                'destroyTooltipOnHide',
                'destroyOnHidden'
            ],
            [
                'arrowPointAtCenter',
                'arrow={{ pointAtCenter: true }}'
            ],
            [
                'overlayStyle',
                'styles={{ root: {} }}'
            ],
            [
                'overlayInnerStyle',
                'styles={{ body: {} }}'
            ],
            [
                'overlayClassName',
                'classNames={{ root: "" }}'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        "production" !== process.env.NODE_ENV && warning(!destroyTooltipOnHide || 'boolean' == typeof destroyTooltipOnHide, 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.');
        "production" !== process.env.NODE_ENV && warning(!arrow || 'boolean' == typeof arrow || !('arrowPointAtCenter' in arrow), 'deprecated', '`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.');
    }
    const [open, setOpen] = useMergedState(false, {
        value: null != (_a = props.open) ? _a : props.visible,
        defaultValue: null != (_b = props.defaultOpen) ? _b : props.defaultVisible
    });
    const noTitle = !title && !overlay && 0 !== title;
    const onOpenChange = (vis)=>{
        var _a, _b;
        setOpen(noTitle ? false : vis);
        if (!noTitle) {
            null == (_a = props.onOpenChange) || _a.call(props, vis);
            null == (_b = props.onVisibleChange) || _b.call(props, vis);
        }
    };
    const tooltipPlacements = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        var _a, _b;
        let mergedArrowPointAtCenter = arrowPointAtCenter;
        if ('object' == typeof arrow) mergedArrowPointAtCenter = null != (_b = null != (_a = arrow.pointAtCenter) ? _a : arrow.arrowPointAtCenter) ? _b : arrowPointAtCenter;
        return builtinPlacements || getPlacements({
            arrowPointAtCenter: mergedArrowPointAtCenter,
            autoAdjustOverflow,
            arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
            borderRadius: token.borderRadius,
            offset: token.marginXXS,
            visibleFirst: true
        });
    }, [
        arrowPointAtCenter,
        arrow,
        builtinPlacements,
        token
    ]);
    const memoOverlay = __WEBPACK_EXTERNAL_MODULE_react__.useMemo(()=>{
        if (0 === title) return title;
        return overlay || title || '';
    }, [
        overlay,
        title
    ]);
    const memoOverlayWrapper = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(_util_ContextIsolator, {
        space: true
    }, 'function' == typeof memoOverlay ? memoOverlay() : memoOverlay);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props['data-popover-inject'];
    let tempOpen = open;
    if (!('open' in props) && !('visible' in props) && noTitle) tempOpen = false;
    const child = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.isValidElement(children) && !isFragment(children) ? children : /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", null, children);
    const childProps = child.props;
    const childCls = childProps.className && 'string' != typeof childProps.className ? childProps.className : classnames_default()(childProps.className, openClassName || `${prefixCls}-open`);
    const [wrapCSSVar, hashId, cssVarCls] = tooltip_style(prefixCls, !injectFromPopover);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const rootClassNames = classnames_default()(overlayClassName, {
        [`${prefixCls}-rtl`]: 'rtl' === direction
    }, colorInfo.className, rootClassName, hashId, cssVarCls, contextClassName, contextClassNames.root, null == tooltipClassNames ? void 0 : tooltipClassNames.root);
    const bodyClassNames = classnames_default()(contextClassNames.body, null == tooltipClassNames ? void 0 : tooltipClassNames.body);
    const [zIndex, contextZIndex] = useZIndex('Tooltip', restProps.zIndex);
    const content = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(rc_tooltip_es, Object.assign({}, restProps, {
        zIndex: zIndex,
        showArrow: mergedShowArrow,
        placement: placement,
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            body: bodyClassNames
        },
        styles: {
            root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, arrowContentStyle), contextStyles.root), contextStyle), overlayStyle), null == styles ? void 0 : styles.root),
            body: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.body), overlayInnerStyle), null == styles ? void 0 : styles.body), colorInfo.overlayStyle)
        },
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: tooltipRef,
        builtinPlacements: tooltipPlacements,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onOpenChange,
        afterVisibleChange: null != afterOpenChange ? afterOpenChange : afterVisibleChange,
        arrowContent: /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("span", {
            className: `${prefixCls}-arrow-content`
        }),
        motion: {
            motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
            motionDeadline: 1000
        },
        destroyTooltipOnHide: null != destroyOnHidden ? destroyOnHidden : !!destroyTooltipOnHide
    }), tempOpen ? cloneElement(child, {
        className: childCls
    }) : child);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(zindexContext.Provider, {
        value: contextZIndex
    }, content));
});
const tooltip_Tooltip = InternalTooltip;
if ('production' !== process.env.NODE_ENV) tooltip_Tooltip.displayName = 'Tooltip';
tooltip_Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const tooltip = tooltip_Tooltip;
const genBaseStyle = (token)=>{
    const { componentCls, popoverColor, titleMinWidth, fontWeightStrong, innerPadding, boxShadowSecondary, colorTextHeading, borderRadiusLG, zIndexPopup, titleMarginBottom, colorBgElevated, popoverBg, titleBorderBottom, innerContentPadding, titlePadding } = token;
    return [
        {
            [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
                position: 'absolute',
                top: 0,
                left: {
                    _skip_check_: true,
                    value: 0
                },
                zIndex: zIndexPopup,
                fontWeight: 'normal',
                whiteSpace: 'normal',
                textAlign: 'start',
                cursor: 'auto',
                userSelect: 'text',
                '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
                transformOrigin: "var(--valid-offset-x, 50%) var(--arrow-y, 50%)",
                '--antd-arrow-background-color': colorBgElevated,
                width: 'max-content',
                maxWidth: '100vw',
                '&-rtl': {
                    direction: 'rtl'
                },
                '&-hidden': {
                    display: 'none'
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                },
                [`${componentCls}-inner`]: {
                    backgroundColor: popoverBg,
                    backgroundClip: 'padding-box',
                    borderRadius: borderRadiusLG,
                    boxShadow: boxShadowSecondary,
                    padding: innerPadding
                },
                [`${componentCls}-title`]: {
                    minWidth: titleMinWidth,
                    marginBottom: titleMarginBottom,
                    color: colorTextHeading,
                    fontWeight: fontWeightStrong,
                    borderBottom: titleBorderBottom,
                    padding: titlePadding
                },
                [`${componentCls}-inner-content`]: {
                    color: popoverColor,
                    padding: innerContentPadding
                }
            })
        },
        getArrowStyle(token, 'var(--antd-arrow-background-color)'),
        {
            [`${componentCls}-pure`]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow,
                display: 'inline-block',
                [`${componentCls}-content`]: {
                    display: 'inline-block'
                }
            }
        }
    ];
};
const genColorStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: PresetColors.map((colorKey)=>{
            const lightColor = token[`${colorKey}6`];
            return {
                [`&${componentCls}-${colorKey}`]: {
                    '--antd-arrow-background-color': lightColor,
                    [`${componentCls}-inner`]: {
                        backgroundColor: lightColor
                    },
                    [`${componentCls}-arrow`]: {
                        background: 'transparent'
                    }
                }
            };
        })
    };
};
const style_prepareComponentToken = (token)=>{
    const { lineWidth, controlHeight, fontHeight, padding, wireframe, zIndexPopupBase, borderRadiusLG, marginXS, lineType, colorSplit, paddingSM } = token;
    const titlePaddingBlockDist = controlHeight - fontHeight;
    const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
    const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
    const popoverPaddingHorizontal = padding;
    return Object.assign(Object.assign(Object.assign({
        titleMinWidth: 177,
        zIndexPopup: zIndexPopupBase + 30
    }, getArrowToken(token)), getArrowOffsetToken({
        contentRadius: borderRadiusLG,
        limitVerticalRadius: true
    })), {
        innerPadding: wireframe ? 0 : 12,
        titleMarginBottom: wireframe ? 0 : marginXS,
        titlePadding: wireframe ? `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px` : 0,
        titleBorderBottom: wireframe ? `${lineWidth}px ${lineType} ${colorSplit}` : 'none',
        innerContentPadding: wireframe ? `${paddingSM}px ${popoverPaddingHorizontal}px` : 0
    });
};
const popover_style = genStyleUtils_genStyleHooks('Popover', (token)=>{
    const { colorBgElevated, colorText } = token;
    const popoverToken = statistic_merge(token, {
        popoverBg: colorBgElevated,
        popoverColor: colorText
    });
    return [
        genBaseStyle(popoverToken),
        genColorStyle(popoverToken),
        initZoomMotion(popoverToken, 'zoom-big')
    ];
}, style_prepareComponentToken, {
    resetStyle: false,
    deprecatedTokens: [
        [
            'width',
            'titleMinWidth'
        ],
        [
            'minWidth',
            'titleMinWidth'
        ]
    ]
});
"use client";
var PurePanel_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const Overlay = ({ title, content, prefixCls })=>{
    if (!title && !content) return null;
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(__WEBPACK_EXTERNAL_MODULE_react__.Fragment, null, title && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: `${prefixCls}-title`
    }, title), content && /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: `${prefixCls}-inner-content`
    }, content));
};
const RawPurePanel = (props)=>{
    const { hashId, prefixCls, className, style, placement = 'top', title, content, children } = props;
    const titleNode = getRenderPropValue(title);
    const contentNode = getRenderPropValue(content);
    const cls = classnames_default()(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className);
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: cls,
        style: style
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Popup, Object.assign({}, props, {
        className: hashId,
        prefixCls: prefixCls
    }), children || /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Overlay, {
        prefixCls: prefixCls,
        title: titleNode,
        content: contentNode
    })));
};
const popover_PurePanel_PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className } = props, restProps = PurePanel_rest(props, [
        "prefixCls",
        "className"
    ]);
    const { getPrefixCls } = __WEBPACK_EXTERNAL_MODULE_react__.useContext(context_ConfigContext);
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = popover_style(prefixCls);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(RawPurePanel, Object.assign({}, restProps, {
        prefixCls: prefixCls,
        hashId: hashId,
        className: classnames_default()(className, cssVarCls)
    })));
};
const popover_PurePanel = popover_PurePanel_PurePanel;
"use client";
var popover_rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const InternalPopover = /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.forwardRef((props, ref)=>{
    var _a, _b;
    const { prefixCls: customizePrefixCls, title, content, overlayClassName, placement = 'top', trigger = 'hover', children, mouseEnterDelay = 0.1, mouseLeaveDelay = 0.1, onOpenChange, overlayStyle = {}, styles, classNames: popoverClassNames } = props, otherProps = popover_rest(props, [
        "prefixCls",
        "title",
        "content",
        "overlayClassName",
        "placement",
        "trigger",
        "children",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "onOpenChange",
        "overlayStyle",
        "styles",
        "classNames"
    ]);
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = useComponentConfig('popover');
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = popover_style(prefixCls);
    const rootPrefixCls = getPrefixCls();
    const rootClassNames = classnames_default()(overlayClassName, hashId, cssVarCls, contextClassName, contextClassNames.root, null == popoverClassNames ? void 0 : popoverClassNames.root);
    const bodyClassNames = classnames_default()(contextClassNames.body, null == popoverClassNames ? void 0 : popoverClassNames.body);
    const [open, setOpen] = useMergedState(false, {
        value: null != (_a = props.open) ? _a : props.visible,
        defaultValue: null != (_b = props.defaultOpen) ? _b : props.defaultVisible
    });
    const settingOpen = (value, e)=>{
        setOpen(value, true);
        null == onOpenChange || onOpenChange(value, e);
    };
    const onKeyDown = (e)=>{
        if (e.keyCode === es_KeyCode.ESC) settingOpen(false, e);
    };
    const onInternalOpenChange = (value)=>{
        settingOpen(value);
    };
    const titleNode = getRenderPropValue(title);
    const contentNode = getRenderPropValue(content);
    return wrapCSSVar(/*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(tooltip, Object.assign({
        placement: placement,
        trigger: trigger,
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay
    }, otherProps, {
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            body: bodyClassNames
        },
        styles: {
            root: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.root), contextStyle), overlayStyle), null == styles ? void 0 : styles.root),
            body: Object.assign(Object.assign({}, contextStyles.body), null == styles ? void 0 : styles.body)
        },
        ref: ref,
        open: open,
        onOpenChange: onInternalOpenChange,
        overlay: titleNode || contentNode ? /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__.createElement(Overlay, {
            prefixCls: prefixCls,
            title: titleNode,
            content: contentNode
        }) : null,
        transitionName: getTransitionName(rootPrefixCls, 'zoom-big', otherProps.transitionName),
        "data-popover-inject": true
    }), cloneElement(children, {
        onKeyDown: (e)=>{
            var _a, _b;
            if (/*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.isValidElement)(children)) null == (_b = null == children ? void 0 : (_a = children.props).onKeyDown) || _b.call(_a, e);
            onKeyDown(e);
        }
    })));
});
const Popover = InternalPopover;
Popover._InternalPanelDoNotUseOrYouWillBeFired = popover_PurePanel;
if ('production' !== process.env.NODE_ENV) Popover.displayName = 'Popover';
const popover = Popover;
const Link_module = {
    root: "root-M0JNBp",
    name: "name-EwJVMq",
    desc: "desc-xLJBeI",
    logo: "logo-rzjMA6"
};
const IMAGE_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';
const Link = (props)=>{
    const desc = 'en' === props.lang && props.descEn ? props.descEn : props.desc;
    const url = 'en' === props.lang && props.urlEn ? props.urlEn : props.url;
    return /*#__PURE__*/ jsxs("a", {
        className: Link_module.root,
        href: url,
        target: "_blank",
        rel: "noreferrer",
        children: [
            /*#__PURE__*/ jsx("img", {
                className: Link_module.logo,
                src: props.logo || IMAGE_PLACEHOLDER,
                alt: props.name,
                style: {
                    transform: props.logoScale ? `scale(${props.logoScale})` : ''
                }
            }),
            /*#__PURE__*/ jsxs("div", {
                className: Link_module.content,
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: Link_module.name,
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: Link_module.desc,
                        children: desc
                    })
                ]
            })
        ]
    });
};
const LinkGroup_module = {
    root: "root-PRenbw",
    title: "title-z0QBpw"
};
const LinkGroup = (props)=>{
    const Links = props.links.map((link)=>/*#__PURE__*/ jsx(Link, {
            ...link,
            lang: props.lang
        }, link.name));
    return /*#__PURE__*/ jsx("div", {
        className: LinkGroup_module.root,
        children: /*#__PURE__*/ jsx("div", {
            className: LinkGroup_module.links,
            children: Links
        })
    });
};
const PopoverContent = ({ lang, config })=>/*#__PURE__*/ jsx("div", {
        children: config.map((item)=>/*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react__.createElement)(LinkGroup, {
                ...item,
                lang: lang,
                key: item.title
            }))
    });
const index_module = {
    root: "root-nhoLZk",
    popover: "popover-fmVcBt",
    wrapper: "wrapper-u2FzAf"
};
var nav_config_namespaceObject = JSON.parse('[{"title":"","titleEn":"","links":[{"name":"dora-rs","desc":"AI时代机器人框架","descEn":"AI时代机器人框架","logo":"https://g.hgcdn.cn/doracc/dora.svg","url":"https://dora-rs.ai"},{"name":"Github","desc":"dora-rs Github仓库","descEn":"dora-rs Github仓库","logo":"https://g.hgcdn.cn/static/github-480.png","url":"https://github.com/dora-rs/dora"},{"name":"doracc.com","desc":"中文社区仓库","descEn":"中文社区仓库","logo":"https://g.hgcdn.cn/static/github-480.png","url":"https://github.com/DoraCN/doracc.com"},{"name":"李扬","desc":"我的技术笔记","descEn":"我的技术笔记","logo":"https://g.hgcdn.cn/echoli/avatar256.png","url":"https://echoli.cn"}]}]');
const removeTrailingSlash = (path)=>path.endsWith('/') ? path.slice(0, -1) : path;
function getLang() {
    if ('undefined' == typeof window) return 'en';
    const { location } = window;
    const langPrefix = '/' === location.pathname ? '' : removeTrailingSlash(location.pathname);
    return langPrefix.includes('zh') ? 'zh' : 'en';
}
const NavIcon = (props = {})=>{
    const lang = props.lang || getLang();
    return /*#__PURE__*/ jsx("div", {
        className: index_module.root,
        children: /*#__PURE__*/ jsx(popover, {
            arrow: false,
            trigger: props.trigger,
            placement: "bottomLeft",
            content: /*#__PURE__*/ jsx(PopoverContent, {
                lang: lang,
                config: nav_config_namespaceObject
            }),
            overlayClassName: index_module.popover,
            children: /*#__PURE__*/ jsx("div", {
                className: index_module.wrapper,
                children: /*#__PURE__*/ jsxs("svg", {
                    width: "20",
                    height: "20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ jsx("title", {
                            children: "close"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M2.5 5H5V2.5H2.5V5zM5 11.25H2.5v-2.5H5v2.5zm12.5 0H15v-2.5h2.5v2.5zm-8.75 0h2.5v-2.5h-2.5v2.5zM5 17.5H2.5V15H5v2.5zm10 0h2.5V15H15v2.5zm-3.75 0h-2.5V15h2.5v2.5zM17.5 5H15V2.5h2.5V5zM8.75 5h2.5V2.5h-2.5V5z",
                            fill: "currentColor"
                        })
                    ]
                })
            })
        })
    });
};
export { NavIcon };
