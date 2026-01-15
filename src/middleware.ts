import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // 지원하는 locale 목록
  locales,
  // 기본 locale (브라우저 언어 감지 실패 시)
  defaultLocale: 'ko',
  // 브라우저 Accept-Language 헤더로 언어 자동 감지
  localeDetection: true,
});

export const config = {
  // 미들웨어를 적용할 경로 (정적 파일 제외)
  matcher: ['/', '/(ko|en)/:path*'],
};
