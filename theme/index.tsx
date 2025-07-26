import {
  Layout as BasicLayout,
} from '@rspress/core/theme';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';


import './index.css'


const Layout = () => <BasicLayout
  /* 左上角导航栏标题之前 */
  beforeNavTitle={<NavIcon />}

  bottom={
  <div className='doracc-footer'>
    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href="/"><img src="/logo.svg" style={{ width: '30px', display: 'inline', marginRight: '20px' }} /></a>
      <a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"><img alt="知识共享许可协议" style={{ borderWidth: 0, margin: "0 auto" }} src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a>
    </p>
    <p>Dora中文社区 © 2025 <a href="/">doracc.com</a></p>
    <p><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style={{ width: '12px', display: 'inline' }} /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a></p>
    <p>本作品采用<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>进行许可</p>
  </div>
  }

  beforeDocFooter={
  <div style={{ marginTop: "40px", paddingTop: "20px" }}>
    {/* <p><a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"><img alt="知识共享许可协议" style={{ borderWidth: 0, margin: "0 auto" }} src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a></p>
    <p>本作品采用<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>进行许可</p> */}
    <p className="rp-my-4 rp-leading-7">作者: <a href="https://echoli.cn" target="_blank" className="author">李扬</a></p>
  </div>
  }

  />;

export { Layout };

export * from '@rspress/core/theme';