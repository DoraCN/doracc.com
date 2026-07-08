import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import rspressPluginMermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'DORA中文社区',
  description: 'DORA中文社区 - 信息收集、文章推送、教程学习、技巧分享、社区交流',
  lang: 'zh',
  icon: '/favicon.ico',
  logo: {
    light: '/logo.svg',
    dark: '/logo-dark.svg',
  },
  logoText: 'DORA中文社区',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'DORA中文社区',
      description: 'DORA中文社区 - 教程学习、技巧分享、社区交流',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'DORA Chinese Community',
      description: 'DORA Chinese Community',
    },
  ],
  head: [
    '<meta name="Author" content="李扬">',
    '<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src="https://hm.baidu.com/hm.js?bad2b636058313c698986f4096bb5742";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>',
  ],
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    enableScrollToTop: true,
    enableContentAnimation: true,
    searchPlaceholderText: '搜索文档',
    editLink: {
      docRepoBaseUrl: 'https://github.com/DoraCN/doracc.com/tree/main/docs',
      text: '📝 在 GitHub 上编辑此页',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/DoraCN',
      },
    ],
    footer: {
      message:
        '<img src="/logo.svg" style="width:30px;display:inline;"><br>DORA 中文社区 · LoopFun 开源社区 © 2025 <a href="/">doracc.com</a> · 基于 MIT 协议开源<br><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style="width:12px;display:inline;"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a>',
    },
  },
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  globalUIComponents: [path.join(__dirname, 'components', 'compTongji.tsx')],
  plugins: [rspressPluginMermaid()],
});
