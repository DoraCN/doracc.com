import { type LinkComp } from '../shared';
export type Company = {
    name: string;
    logo: string;
    url: string;
    text?: string;
    width?: string | number;
};
export type BuiltWithRspackProps = {
    title: string;
    LinkComp?: LinkComp;
    companyList: Company[];
};
export declare const BuiltWithRspack: React.FC<BuiltWithRspackProps>;
