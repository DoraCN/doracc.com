import './index.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
const shared_module = {
    container: "container-cRbIB3",
    titleAndDesc: "titleAndDesc-ubxR_3",
    innerContainer: "innerContainer-d_raLU",
    title: "title-DiGDhG",
    desc: "desc-jYXnyt"
};
shared_module.container;
const innerContainerStyle = shared_module.innerContainer;
const titleAndDescStyle = shared_module.titleAndDesc;
const titleStyle = shared_module.title;
const descStyle = shared_module.desc;
const index_module = {
    tools: "tools-DsyWdq",
    tool: "tool-_seSD7",
    logo: "logo-axzrU9",
    toolContent: "toolContent-c31Vj4",
    toolTitle: "toolTitle-Q9zuUy",
    toolDescription: "toolDescription-taMfup",
    toolUrl: "toolUrl-GuRrnE",
    rotate: "rotate-Z9EF9r"
};
const ToolStack = /*#__PURE__*/ memo(({ lang })=>{
    const isEn = 'en' === lang;
    const tools = [
        {
            name: 'Rspack',
            desc: isEn ? 'A high performance JavaScript bundler written in Rust, with webpack-compatible API' : "\u57FA\u4E8E Rust \u7F16\u5199\u7684\u9AD8\u6027\u80FD JavaScript \u6253\u5305\u5DE5\u5177\uFF0C\u5177\u5907\u4E0E webpack \u517C\u5BB9\u7684 API",
            logo: 'https://assets.rspack.rs/rspack/rspack-logo.svg',
            url: 'https://rspack.rs',
            urlText: 'rspack.rs'
        },
        {
            name: 'Rsbuild',
            desc: isEn ? 'An Rspack-based build tool that provides out-of-the-box setup' : "\u57FA\u4E8E Rspack \u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u5305\u542B\u5F00\u7BB1\u5373\u7528\u7684\u9884\u8BBE\u914D\u7F6E\uFF0C\u5E26\u6765\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C",
            logo: 'https://assets.rspack.rs/rsbuild/rsbuild-logo.svg',
            url: 'https://rsbuild.rs',
            urlText: 'rsbuild.rs'
        },
        {
            name: 'Rslib',
            desc: isEn ? 'A Rsbuild-based library development tool for creating libraries and UI components' : "\u57FA\u4E8E Rsbuild \u7684\u5E93\u5F00\u53D1\u5DE5\u5177\uFF0C\u4EE5\u7B80\u5355\u7684\u65B9\u5F0F\u521B\u5EFA JavaScript \u5E93\u548C UI \u7EC4\u4EF6\u5E93",
            logo: 'https://assets.rspack.rs/rslib/rslib-logo.svg',
            url: 'https://rslib.rs',
            urlText: 'rslib.rs'
        },
        {
            name: 'Rspress',
            desc: isEn ? 'An Rsbuild-based static site generator for creating documentation sites' : "\u57FA\u4E8E Rsbuild \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\uFF0C\u7528\u4E8E\u521B\u5EFA\u4F18\u96C5\u7684\u6587\u6863\u7AD9\u70B9",
            logo: 'https://assets.rspack.rs/rspress/rspress-logo-480x480.png',
            url: 'https://rspress.rs',
            urlText: 'rspress.rs'
        },
        {
            name: 'Rsdoctor',
            desc: isEn ? 'A one-stop build analyzer that makes the build process transparent' : "\u4E00\u7AD9\u5F0F\u7684\u6784\u5EFA\u5206\u6790\u5DE5\u5177\uFF0C\u4F7F\u6784\u5EFA\u6D41\u7A0B\u53D8\u5F97\u900F\u660E\u3001\u53EF\u9884\u6D4B\u548C\u53EF\u4F18\u5316",
            logo: 'https://assets.rspack.rs/rsdoctor/rsdoctor-logo-480x480.png',
            url: 'https://rsdoctor.rs',
            urlText: 'rsdoctor.rs'
        },
        {
            name: 'Rstest',
            desc: isEn ? 'An testing framework that provides first-class support for Rspack ecosystem' : "\u57FA\u4E8E Rspack \u7684\u6D4B\u8BD5\u6846\u67B6\uFF0C\u4E3A Rspack \u751F\u6001\u63D0\u4F9B\u5168\u9762\u3001\u4E00\u6D41\u7684\u652F\u6301",
            logo: 'https://assets.rspack.rs/rstest/rstest-logo.svg',
            url: 'https://rstest.rs/',
            urlText: 'rstest.rs'
        }
    ];
    return /*#__PURE__*/ jsxs("div", {
        className: innerContainerStyle,
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: titleAndDescStyle,
                children: [
                    /*#__PURE__*/ jsx("h1", {
                        className: titleStyle,
                        children: "Rstack"
                    }),
                    /*#__PURE__*/ jsx("p", {
                        className: descStyle,
                        children: isEn ? 'A unified JavaScript toolchain built around Rspack, with high performance and consistent architecture' : "\u56F4\u7ED5 Rspack \u6253\u9020\u7684 JavaScript \u7EDF\u4E00\u5DE5\u5177\u94FE\uFF0C\u5177\u6709\u4F18\u79C0\u7684\u6027\u80FD\u548C\u4E00\u81F4\u7684\u67B6\u6784"
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: index_module.tools,
                children: tools.map(({ name, desc, logo, url, urlText })=>/*#__PURE__*/ jsxs("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: [
                            index_module.tool,
                            index_module.rainbow
                        ].join(' '),
                        href: url,
                        children: [
                            /*#__PURE__*/ jsx("img", {
                                src: logo,
                                alt: name,
                                className: index_module.logo,
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ jsx("div", {
                                className: index_module.toolTitle,
                                children: name
                            }),
                            /*#__PURE__*/ jsx("p", {
                                className: index_module.toolDescription,
                                children: desc
                            }),
                            /*#__PURE__*/ jsx("div", {
                                className: index_module.toolUrl,
                                children: urlText
                            })
                        ]
                    }, name))
            })
        ]
    });
});
export { ToolStack };
