import type { Lang } from '../utils';
export type LinkInfo = {
    name: string;
    desc: string;
    descEn?: string;
    url: string;
    urlEn?: string;
    logo: string;
    logoScale?: number;
};
export type LinkProps = LinkInfo & {
    lang: Lang;
};
export declare const Link: (props: LinkProps) => import("react/jsx-runtime").JSX.Element;
