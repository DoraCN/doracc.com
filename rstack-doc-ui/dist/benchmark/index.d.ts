export type BenchmarkData = Record<string, {
    label: string;
    metrics: Array<{
        time: number;
        desc: string;
    }>;
}>;
export interface BenchmarkProps {
    data: BenchmarkData;
}
export declare function Benchmark({ data }: BenchmarkProps): import("react/jsx-runtime").JSX.Element;
