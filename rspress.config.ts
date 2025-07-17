import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Dora中文社区',
  description: 'Dora中文社区 - 信息收集、文章推送、教程学习、技巧分享、社区交流',
  icon: '/favicon.ico',
  // lang: 'zh-CN',
  logo: {
    light: '/logo.svg',
    dark: '/logo-dark.svg',
  },
  logoText: 'Dora中文社区',
  // route: {
  //   cleanUrls: true,
  // },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/DoraCN/doracc.com',
      },
    ],
    editLink: {
      docRepoBaseUrl: 'https://github.com/DoraCN/doracc.com/tree/main/docs',
      text: '📝 在 GitHub 上编辑此页',
    },
    enableScrollToTop: true,
    enableContentAnimation: true,
    searchPlaceholderText: '搜索文档',
    lastUpdated: false,
    lastUpdatedText: '上次更新',
    footer: {
      message: '<img src="/logo.svg" style="width:30px;display:inline;"><br>Dora中文社区 © 2025 <a href="/">doracc.com</a><br><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style="width:12px;display:inline;"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a> <script>var _hmt=_hmt || [];(function() {var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?bad2b636058313c698986f4096bb5742";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();</script>',
    },
  },
  markdown: {
    showLineNumbers: true,
    highlightLanguages: [
      ['py', 'python'],
      ['rust', 'rust'],
    ],
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
});
