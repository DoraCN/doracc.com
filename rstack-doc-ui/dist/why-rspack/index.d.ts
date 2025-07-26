import { type FC } from 'react';
import { type LinkComp } from '../shared';
export type Feature = {
    img: string;
    url: string;
    title: string;
    description: string;
    lottieJsonData?: any;
};
export type FeatureListProps = {
    features: Feature[];
    LinkComp?: LinkComp;
};
export type WhyRspackProps = FeatureListProps;
export declare const WhyRspack: FC<WhyRspackProps>;
