import './index.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function IconClose(props) {
    return /*#__PURE__*/ jsxs("svg", {
        viewBox: "0 0 1024 1024",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx("title", {
                children: "IconClose"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            })
        ]
    });
}
const announcement_close = IconClose;
const index_module = {
    bar: "bar-qLU0v0",
    link: "link-O5NRCk",
    close: "close-UqNfF6"
};
function Announcement({ href, message, localStorageKey, display = true, barClassName }) {
    if (!display) return null;
    var _window_localStorage_getItem;
    const [disable, setDisable] = useState(null != (_window_localStorage_getItem = window.localStorage.getItem(localStorageKey)) ? _window_localStorage_getItem : false);
    if (disable) return null;
    return /*#__PURE__*/ jsxs("div", {
        className: `${index_module.bar} ${barClassName}`,
        children: [
            /*#__PURE__*/ jsx("a", {
                href: href,
                className: index_module.link,
                children: message
            }),
            /*#__PURE__*/ jsx(announcement_close, {
                onClick: ()=>{
                    setDisable(true);
                    window.localStorage.setItem(localStorageKey, 'true');
                },
                className: index_module.close
            })
        ]
    });
}
export { Announcement };
