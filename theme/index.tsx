import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { BaiduAnalytics } from './BaiduAnalytics';

const Layout = () => <BasicLayout bottom={<BaiduAnalytics />} />;

export { Layout };
export * from '@rspress/core/theme-original';
