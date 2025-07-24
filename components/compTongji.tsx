import { useEffect } from "react";
import { useLocation } from "@rspress/core/runtime";


export default function PluginTongji() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (typeof _hmt !== 'undefined') {
            _hmt.push(['_trackPageview', pathname]);
        }
    }, [pathname]);

    return null;
}