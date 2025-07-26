import type { LinkInfo } from './components/Link';
export type Lang = 'zh' | 'en';
export declare function getLang(): Lang;
export type NavConfig = Array<{
    title: string;
    titleEn: string;
    links: LinkInfo[];
}>;
