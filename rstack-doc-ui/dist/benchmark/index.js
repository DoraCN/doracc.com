import './index.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
"use client";
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
    if (!root) return "0";
    if (RootIds.has(root)) return RootIds.get(root);
    rootId += 1;
    RootIds.set(root, rootId.toString());
    return RootIds.get(root);
}
function optionsToId(options) {
    return Object.keys(options).sort().filter((key)=>void 0 !== options[key]).map((key)=>`${key}_${"root" === key ? getRootId(options.root) : options[key]}`).toString();
}
function createObserver(options) {
    const id = optionsToId(options);
    let instance = observerMap.get(id);
    if (!instance) {
        const elements = /* @__PURE__ */ new Map();
        let thresholds;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                var _a;
                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);
                if (options.trackVisibility && void 0 === entry.isVisible) entry.isVisible = inView;
                null == (_a = elements.get(entry.target)) || _a.forEach((callback)=>{
                    callback(inView, entry);
                });
            });
        }, options);
        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [
            options.threshold || 0
        ]);
        instance = {
            id,
            observer,
            elements
        };
        observerMap.set(id, instance);
    }
    return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
    if (void 0 === window.IntersectionObserver && void 0 !== fallbackInView) {
        const bounds = element.getBoundingClientRect();
        callback(fallbackInView, {
            isIntersecting: fallbackInView,
            target: element,
            intersectionRatio: "number" == typeof options.threshold ? options.threshold : 0,
            time: 0,
            boundingClientRect: bounds,
            intersectionRect: bounds,
            rootBounds: bounds
        });
        return ()=>{};
    }
    const { id, observer, elements } = createObserver(options);
    const callbacks = elements.get(element) || [];
    if (!elements.has(element)) elements.set(element, callbacks);
    callbacks.push(callback);
    observer.observe(element);
    return function() {
        callbacks.splice(callbacks.indexOf(callback), 1);
        if (0 === callbacks.length) {
            elements.delete(element);
            observer.unobserve(element);
        }
        if (0 === elements.size) {
            observer.disconnect();
            observerMap.delete(id);
        }
    };
}
function useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {
    var _a;
    const [ref, setRef] = useState(null);
    const callback = useRef(onChange);
    const [state, setState] = useState({
        inView: !!initialInView,
        entry: void 0
    });
    callback.current = onChange;
    useEffect(()=>{
        if (skip || !ref) return;
        let unobserve;
        unobserve = observe(ref, (inView, entry)=>{
            setState({
                inView,
                entry
            });
            if (callback.current) callback.current(inView, entry);
            if (entry.isIntersecting && triggerOnce && unobserve) {
                unobserve();
                unobserve = void 0;
            }
        }, {
            root,
            rootMargin,
            threshold,
            trackVisibility,
            delay
        }, fallbackInView);
        return ()=>{
            if (unobserve) unobserve();
        };
    }, [
        Array.isArray(threshold) ? threshold.toString() : threshold,
        ref,
        root,
        rootMargin,
        triggerOnce,
        skip,
        trackVisibility,
        fallbackInView,
        delay
    ]);
    const entryTarget = null == (_a = state.entry) ? void 0 : _a.target;
    const previousEntryTarget = useRef(void 0);
    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
        previousEntryTarget.current = entryTarget;
        setState({
            inView: !!initialInView,
            entry: void 0
        });
    }
    const result = [
        setRef,
        state.inView,
        state.entry
    ];
    result.ref = result[0];
    result.inView = result[1];
    result.entry = result[2];
    return result;
}
const ProgressBar_module = {
    container: "container-FuNiZu",
    innerContainer: "innerContainer-Fc0J9Z",
    bar: "bar-WHFMsk",
    desc: "desc-lTD7cf",
    time: "time-JXJR1M"
};
function formatTime(time, totalTime) {
    if (totalTime < 1000) return `${time.toFixed(0)}ms`;
    return `${(time / 1000).toFixed(2)}s`;
}
function ProgressBar({ value, max, desc, inView }) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const TOTAL_TIME = 1000 * value;
    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width: `${value / max * 100}%`
        }
    };
    const formattedTime = formatTime(elapsedTime, TOTAL_TIME);
    return /*#__PURE__*/ jsxs("div", {
        className: ProgressBar_module.container,
        children: [
            /*#__PURE__*/ jsx("div", {
                className: ProgressBar_module.innerContainer,
                children: inView ? /*#__PURE__*/ jsx(motion.div, {
                    className: ProgressBar_module.bar,
                    initial: "initial",
                    animate: "animate",
                    variants: variants,
                    onUpdate: (latest)=>{
                        const width = Number.parseFloat(latest.width);
                        setElapsedTime(width * max * 10);
                    },
                    transition: {
                        duration: value,
                        ease: 'linear'
                    }
                }) : null
            }),
            /*#__PURE__*/ jsxs("div", {
                className: ProgressBar_module.desc,
                children: [
                    /*#__PURE__*/ jsx("span", {
                        className: ProgressBar_module.time,
                        children: formattedTime
                    }),
                    " ",
                    desc
                ]
            })
        ]
    });
}
const index_module = {
    root: "root-Ollge_",
    title: "title-JepjCS",
    desc: "desc-npKeId",
    bottomLink: "bottomLink-pzbjuT",
    progressName: "progressName-Ke8hc2",
    item: "item-sOpi_3",
    metricItem: "metricItem-YxRN9U"
};
const findMaxTime = (data)=>{
    let max = 0;
    for (const item of Object.values(data))for (const metric of item.metrics)if (metric.time > max) max = metric.time;
    return max;
};
function Benchmark({ data }) {
    const maxTime = findMaxTime(data);
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    return /*#__PURE__*/ jsx("div", {
        className: index_module.root,
        ref: ref,
        children: Object.values(data).map((item)=>/*#__PURE__*/ jsxs("div", {
                className: index_module.item,
                children: [
                    /*#__PURE__*/ jsx("p", {
                        className: index_module.progressName,
                        children: item.label
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: index_module.metricItem,
                        children: item.metrics.map((metric)=>/*#__PURE__*/ jsx(ProgressBar, {
                                value: metric.time,
                                max: maxTime,
                                desc: metric.desc,
                                inView: inView
                            }, metric.desc))
                    })
                ]
            }, item.label))
    });
}
export { Benchmark };
