export declare const useCardAnimation: () => {
    ref: import("react").MutableRefObject<HTMLElement | undefined>;
    isHovering: boolean;
    shine: string;
    shineBg: string;
    container: string;
    outerContainer: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onMouseMove: ({ pageX, pageY }: {
        pageX: number;
        pageY: number;
    }) => void;
    onTouchMove: (evt: any) => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
};
