import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "rspress/runtime";


export default function PluginTongji() {
    const { pathname } = useLocation();

    // useEffect(() => {
    //     setTimeout(() => {
    //     console.log(pathname);
    //     }, 0);
    // }, [pathname]);

    useLayoutEffect(() => {
        // const script = document.createElement("script");
        // script.src = "https://hm.baidu.com/hm.js?bad2b636058313c698986f4096bb5742";
        // script.async = true;
        // document.body.appendChild(script);
        // return () => {
        //     document.body.removeChild(script);
        // };
        // console.log(pathname);
        if (typeof _hmt !== 'undefined') {
            _hmt.push(['_trackPageview', pathname]);
        }
    }, [pathname]);

    return null;
}