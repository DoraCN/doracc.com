import './index.css';
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
const ALink = ({ className, href, children, style })=>/*#__PURE__*/ jsx("a", {
        href: href,
        className: className,
        style: style,
        children: children
    });
const index_module = {
    title: "title-yh_kQ7",
    innerContainer: "innerContainer-z6bHq_",
    logo: "logo-vQfE2V",
    logos: "logos-razs4s",
    logoText: "logoText-ZwEAa5"
};
const CompanyItem = ({ item, LinkComp })=>{
    const { logo, name, url, text, width } = item;
    const Link = LinkComp;
    return /*#__PURE__*/ jsxs(Link, {
        className: index_module.logo,
        href: url,
        children: [
            /*#__PURE__*/ jsx("img", {
                src: logo,
                alt: name,
                style: {
                    width
                },
                loading: "lazy"
            }),
            void 0 !== text ? /*#__PURE__*/ jsx("span", {
                className: index_module.logoText,
                children: text
            }) : /*#__PURE__*/ jsx(Fragment, {})
        ]
    });
};
const BuiltWithRspack = ({ title, LinkComp, companyList })=>{
    const Link = null != LinkComp ? LinkComp : ALink;
    return /*#__PURE__*/ jsxs("div", {
        className: index_module.innerContainer,
        children: [
            /*#__PURE__*/ jsx("h2", {
                className: index_module.title,
                children: title
            }),
            /*#__PURE__*/ jsx("div", {
                className: index_module.logos,
                children: companyList.map((i)=>/*#__PURE__*/ jsx(CompanyItem, {
                        item: i,
                        LinkComp: Link
                    }, i.name))
            })
        ]
    });
};
export { BuiltWithRspack };
