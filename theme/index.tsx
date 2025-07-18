import Theme from '@rspress/core/theme';

import { useEffect } from 'react';
import './index.css';

const Layout = () => {
    useEffect(() => {
        // Baidu Analytics script injection
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bad2b636058313c698986f4096bb5742";
        hm.type = "text/javascript";
        document.getElementById('root').appendChild(hm);
    }, []);

    return (
        <Theme.Layout bottom={
            <div className='doracc-footer'>
                <p><img src="/logo.svg" style={{ width: '30px', display: 'inline' }} /></p>
                <p>Dora中文社区 © 2025 <a href="/">doracc.com</a></p>
                <p><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style={{ width: '12px', display: 'inline' }} /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a></p>
            </div>
        } />
    );
};

export default {
    ...Theme,
    Layout,
};

export * from '@rspress/core/theme';