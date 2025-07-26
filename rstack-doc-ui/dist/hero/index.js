import './index.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const index_module = {
    logoImg: "logoImg-jmnjG_",
    buttonGroup: "buttonGroup-n4F2Ri",
    button: "button-J07D5g",
    innerHero: "innerHero-WcJ046",
    title: "title-ba4Gs7",
    subtitle: "subtitle-R5khYQ",
    description: "description-lQO4Vm",
    backgroundStarContainer: "backgroundStarContainer-d5mYjB",
    hero: "hero-xzxNT7",
    logo: "logo-kdns6B",
    ovalBg: "ovalBg-uD285_",
    buttonPrimary: "buttonPrimary-EUkFUR",
    githubIcon: "githubIcon-mAtLrO",
    buttonSecondary: "buttonSecondary-OEOpVR",
    backgroundStar: "backgroundStar-t65ruH"
};
const BackgroundStar_BackgroundStar = ({ top, left, pageX, pageY, size })=>{
    const ref = useRef();
    const [transformX, setTransformX] = useState(0);
    const [transformY, setTransformY] = useState(0);
    useEffect(()=>{
        if (ref.current) {
            const { x, y } = ref.current.getBoundingClientRect();
            if (pageX && pageY) {
                const distanceX = pageX - x;
                const distanceY = pageY - y;
                if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
                    setTransformX(distanceX);
                    setTransformY(distanceY);
                } else {
                    setTransformX(0);
                    setTransformY(0);
                }
            }
        }
    }, [
        pageX,
        pageY
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: index_module.backgroundStarContainer,
        ref: ref,
        style: {
            top,
            left
        },
        children: /*#__PURE__*/ jsxs("svg", {
            className: index_module.backgroundStar,
            style: {
                width: size,
                height: size,
                transform: `translate(${transformX}px, ${transformY}px)`
            },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "9",
            viewBox: "0 0 8 9",
            fill: "none",
            role: "img",
            "aria-label": "star",
            children: [
                /*#__PURE__*/ jsx("title", {}),
                /*#__PURE__*/ jsx("circle", {
                    cx: "4",
                    cy: "4.5",
                    r: "4",
                    fill: "url(#paint0_radial_2202_5618)"
                }),
                /*#__PURE__*/ jsx("defs", {
                    children: /*#__PURE__*/ jsxs("radialGradient", {
                        id: "paint0_radial_2202_5618",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(4 4.49998) scale(3.77871 4.29149)",
                        children: [
                            /*#__PURE__*/ jsx("stop", {
                                stopColor: "#FF8B00"
                            }),
                            /*#__PURE__*/ jsx("stop", {
                                offset: "0.38",
                                stopColor: "#F2A65A"
                            }),
                            /*#__PURE__*/ jsx("stop", {
                                offset: "0.59",
                                stopColor: "#FFB966"
                            }),
                            /*#__PURE__*/ jsx("stop", {
                                offset: "0.92",
                                stopColor: "#FF8B00"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const BackgroundStar = BackgroundStar_BackgroundStar;
const positions = [
    [
        91.4,
        22.9
    ],
    [
        36,
        67.6
    ],
    [
        94.1,
        47.7
    ],
    [
        33.8,
        32.5
    ],
    [
        43.1,
        77.6
    ],
    [
        9.8,
        73.4
    ],
    [
        16.1,
        17.1
    ],
    [
        1,
        10
    ],
    [
        88.3,
        44.9
    ],
    [
        19.3,
        79
    ],
    [
        28.5,
        11.8
    ],
    [
        94.6,
        44.9
    ],
    [
        53.8,
        3.4
    ],
    [
        41.7,
        20
    ],
    [
        56.9,
        80.6
    ],
    [
        16.4,
        83.4
    ],
    [
        39.4,
        66.8
    ],
    [
        19,
        18.4
    ],
    [
        25.1,
        28.1
    ],
    [
        18.9,
        35.6
    ],
    [
        32.9,
        12.3
    ],
    [
        21.2,
        72.8
    ],
    [
        83.3,
        79.8
    ],
    [
        71.4,
        36.8
    ],
    [
        62.2,
        50.4
    ],
    [
        45.4,
        13.7
    ],
    [
        61.1,
        28.5
    ],
    [
        18.2,
        64.1
    ],
    [
        40.7,
        34.7
    ],
    [
        87.6,
        20.7
    ],
    [
        78.3,
        30.8
    ],
    [
        84.4,
        58.2
    ],
    [
        74.2,
        74.5
    ],
    [
        12.4,
        66.4
    ],
    [
        68.2,
        41.6
    ]
];
const useMouseMove = ()=>{
    const ref = useRef();
    const [pageX, setPageX] = useState(null);
    const [pageY, setPageY] = useState(null);
    const handleMove = ({ pageX, pageY })=>{
        setPageX(pageX);
        setPageY(pageY);
    };
    return {
        ref,
        pageX,
        pageY,
        onMouseMove: handleMove
    };
};
const Hero = ({ onClickGetStarted, onClickLearnMore, showStars = false, showOvalBg = true, logoUrl = 'https://assets.rspack.rs/rspack/rspack-logo.svg', title = 'Rspack', subTitle = 'The fast Rust-based web bundler', description = 'Seamlessly replace webpack with compatible API', getStartedButtonText = 'Get Started', learnMoreButtonText = 'Learn More', githubURL })=>{
    const { pageX, pageY, ref, onMouseMove } = useMouseMove();
    return /*#__PURE__*/ jsx("section", {
        className: index_module.hero,
        ref: ref,
        onMouseMove: onMouseMove,
        children: /*#__PURE__*/ jsxs("div", {
            className: index_module.innerHero,
            children: [
                showStars ? positions.map(([top, left], i)=>/*#__PURE__*/ jsx(BackgroundStar, {
                        top: `${top}%`,
                        left: `${left}%`,
                        size: i / 20 + 3,
                        pageX: pageX,
                        pageY: pageY
                    }, i)) : null,
                /*#__PURE__*/ jsxs("div", {
                    className: index_module.logo,
                    children: [
                        /*#__PURE__*/ jsx("img", {
                            src: logoUrl,
                            className: `${index_module.logoImg} rs-logo`,
                            alt: "logo"
                        }),
                        showOvalBg ? /*#__PURE__*/ jsx("div", {
                            className: `${index_module.ovalBg} rs-oval`
                        }) : null
                    ]
                }),
                /*#__PURE__*/ jsx("h1", {
                    className: index_module.title,
                    children: /*#__PURE__*/ jsx("span", {
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx("p", {
                    className: index_module.subtitle,
                    children: subTitle
                }),
                /*#__PURE__*/ jsx("p", {
                    className: index_module.description,
                    children: description
                }),
                /*#__PURE__*/ jsxs("div", {
                    className: index_module.buttonGroup,
                    children: [
                        /*#__PURE__*/ jsx("button", {
                            className: `${index_module.button} ${index_module.buttonPrimary}`,
                            type: "button",
                            onClick: onClickGetStarted,
                            children: getStartedButtonText
                        }),
                        githubURL ? /*#__PURE__*/ jsxs("a", {
                            href: githubURL,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `${index_module.button} ${index_module.buttonSecondary}`,
                            children: [
                                /*#__PURE__*/ jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 24 24",
                                    className: index_module.githubIcon,
                                    children: [
                                        /*#__PURE__*/ jsx("title", {
                                            children: "GitHub"
                                        }),
                                        /*#__PURE__*/ jsx("path", {
                                            fill: "currentColor",
                                            d: "M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                        })
                                    ]
                                }),
                                "GitHub"
                            ]
                        }) : /*#__PURE__*/ jsx("button", {
                            className: `${index_module.button} ${index_module.buttonSecondary}`,
                            type: "button",
                            onClick: onClickLearnMore,
                            children: learnMoreButtonText
                        })
                    ]
                })
            ]
        })
    });
};
export { Hero };
