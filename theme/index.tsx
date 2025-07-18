import Theme from '@rspress/core/theme';

import { useEffect } from 'react';
import './index.css';

const Layout = () => {
    useEffect(() => {
        // Baidu Analytics script injection
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bad2b636058313c698986f4096bb5742";
        hm.type = "text/javascript";

        // let gitcus = document.createElement("script");
        // gitcus.src = "https://giscus.app/client.js";
        // gitcus.setAttribute("data-repo", "DoraCN/doracc.com");
        // gitcus.setAttribute("data-repo-id", "R_kgDOPMxSoA");
        // gitcus.setAttribute("data-category", "Announcements");
        // gitcus.setAttribute("data-category-id", "DIC_kwDOPMxSoM4CtH7d");
        // gitcus.setAttribute("data-mapping", "pathname");
        // gitcus.setAttribute("data-strict", "0");
        // gitcus.setAttribute("data-reactions-enabled", "1");
        // gitcus.setAttribute("data-emit-metadata", "0");
        // gitcus.setAttribute("data-input-position", "bottom");
        // gitcus.setAttribute("data-theme", "preferred_color_scheme");
        // gitcus.setAttribute("data-lang", "zh-CN");
        // gitcus.setAttribute("data-loading", "lazy");
        // gitcus.crossOrigin = "anonymous";
        // gitcus.async = true;

        setTimeout(() => {
          const root = document.getElementById('root');
          if (root) {
              root.appendChild(hm);
              // root.appendChild(gitcus);
          }
        }, 0);


    }, []);

    return (
      <Theme.Layout bottom=
        {
          <div className='doracc-footer'>
            <p><img src="/logo.svg" style={{ width: '30px', display: 'inline' }} /></p>
            <p>Dora中文社区 © 2025 <a href="/">doracc.com</a></p>
            <p><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style={{ width: '12px', display: 'inline' }} /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a></p>
          </div>
        }
        // afterDocFooter={<div className='giscus giscus-frame'></div>}
      />
    );
};

export default {
    ...Theme,
    Layout,
};

export * from '@rspress/core/theme';