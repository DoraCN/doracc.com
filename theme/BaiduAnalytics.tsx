import { useEffect } from 'react';
import { useLocation } from '@rspress/core/runtime';

declare global {
  interface Window {
    _hmt?: unknown[];
  }
}

export function BaiduAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window._hmt = window._hmt || [];
    window._hmt.push(['_trackPageview', pathname]);
  }, [pathname]);

  return null;
}
