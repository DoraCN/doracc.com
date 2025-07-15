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
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/DoraCN/doracc.com',
      },
    ],
    
    enableScrollToTop: true,
    enableContentAnimation: true,
    searchPlaceholderText: '搜索文档',
    footer: {
      message: '<img src="/logo.svg" style="width:30px;display:inline;"><br>Dora中文社区 © 2025 <a href="/">doracc.com</a><br><a href="https://beian.miit.gov.cn/" rel="noreferrer"> 苏ICP备14007268号-19 </a> | <img src="/beian.png" style="width:12px;display:inline;"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32050602013520" rel="noreferrer"> 苏公网安备32050602013520号 </a>',
    },
  },
  markdown: {
    showLineNumbers: true,
    highlightLanguages: [
      ['py', 'python'],
      ['rust', 'rust'],
    ],
  }
});
