import './index.css';
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const index_module = {
    background: "background-k7Kx8T"
};
const useTopArrived = ()=>{
    const [scrollY, setScrollY] = useState(0);
    const topArrived = scrollY < 100;
    useEffect(()=>{
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, {
            capture: false,
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return {
        topArrived
    };
};
const BackgroundImage = ({ navBarTopArrived = true })=>{
    const { topArrived } = useTopArrived();
    useEffect(()=>{
        if (!navBarTopArrived) return;
        if (topArrived) document.body.classList.remove('notTopArrived');
        else document.body.classList.add('notTopArrived');
    }, [
        topArrived,
        navBarTopArrived
    ]);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx("style", {
                children: ':root {--rp-c-bg: #0b0c0e;}:root:not(.dark) {--rp-c-bg: #fff;}.rspress-nav {transition: background 0.4s;}body:not(.notTopArrived) .rspress-nav {background: transparent !important;}'
            }),
            /*#__PURE__*/ jsx("img", {
                className: index_module.background,
                src: "https://assets.rspack.rs/rspack/assets/landingpage-background-compressed.png",
                alt: "background"
            })
        ]
    });
};
export { BackgroundImage };
