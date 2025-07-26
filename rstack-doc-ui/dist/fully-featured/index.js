import './index.css';
import { jsx, jsxs } from "react/jsx-runtime";
const ALink = ({ className, href, children, style })=>/*#__PURE__*/ jsx("a", {
        href: href,
        className: className,
        style: style,
        children: children
    });
const index_module = {
    features: "features-oTi3lz",
    featureCard: "featureCard-bEvKlm",
    main: "main-tfEqLf",
    featureTitle: "featureTitle-uGAlGf",
    featureDescription: "featureDescription-gXsRi0",
    icon: "icon-BFb1eH",
    featureContent: "featureContent-Uhsfzs"
};
const FullyFeatured = ({ LinkComp, featureRows })=>{
    const Link = null != LinkComp ? LinkComp : ALink;
    return /*#__PURE__*/ jsx("div", {
        className: index_module.main,
        children: featureRows.map((row, index)=>/*#__PURE__*/ jsx("div", {
                className: index_module.features,
                children: row.map(({ icon, description, link, title }, index)=>/*#__PURE__*/ jsxs(Link, {
                        className: index_module.featureCard,
                        href: link,
                        children: [
                            /*#__PURE__*/ jsx("img", {
                                src: icon,
                                alt: index.toString(),
                                className: index_module.icon,
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ jsxs("div", {
                                className: index_module.featureContent,
                                children: [
                                    /*#__PURE__*/ jsx("h2", {
                                        className: index_module.featureTitle,
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx("p", {
                                        className: index_module.featureDescription,
                                        children: description
                                    })
                                ]
                            })
                        ]
                    }, index))
            }, index))
    });
};
export { FullyFeatured };
