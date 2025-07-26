import type { FC } from 'react';
type HeroProps = {
    onClickGetStarted: () => void;
    onClickLearnMore?: () => void;
    showStars?: boolean;
    showOvalBg?: boolean;
    logoUrl?: string;
    title?: string;
    subTitle?: string;
    description?: string;
    getStartedButtonText?: string;
    learnMoreButtonText?: string;
    githubURL?: string;
};
export declare const Hero: FC<HeroProps>;
export {};
