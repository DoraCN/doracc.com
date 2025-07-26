import type { FC } from 'react';
import { type LinkComp } from '../shared';
export type Feature = {
    icon: string;
    title: string;
    description: string;
    link: string;
};
export type FullyFeaturedProps = {
    LinkComp?: LinkComp;
    /**
     * 8 or 12 or 16
     */
    featureRows: Feature[][];
};
export declare const FullyFeatured: FC<FullyFeaturedProps>;
