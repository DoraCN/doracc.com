import type { CSSProperties, ReactNode } from 'react';
type LinkProps = {
    className: string;
    href: string;
    children: ReactNode;
    style?: CSSProperties;
};
export type LinkComp = (props: LinkProps) => JSX.Element;
/**
 * A backup link component, import { Link } from 'rspress/theme' to replace it
 */
export declare const ALink: LinkComp;
export {};
