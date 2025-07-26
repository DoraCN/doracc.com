import { type Lang } from './utils';
export interface NavIconProps {
    lang?: Lang;
    trigger?: 'hover' | 'focus' | 'click';
}
export declare const NavIcon: (props?: NavIconProps) => import("react/jsx-runtime").JSX.Element;
