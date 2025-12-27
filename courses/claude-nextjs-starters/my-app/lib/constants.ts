/**
 * 네비게이션 링크 설정
 */
export const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/examples", label: "예제" },
] as const;

/**
 * 푸터 링크 설정
 */
export const FOOTER_LINKS = {
  product: {
    title: "제품",
    links: [
      { href: "/changelog", label: "업데이트" },
    ],
  },
  company: {
    title: "회사",
    links: [
      { href: "/about", label: "소개" },
      { href: "/blog", label: "블로그" },
      { href: "/careers", label: "채용" },
    ],
  },
  legal: {
    title: "법적 고지",
    links: [
      { href: "/privacy", label: "개인정보처리방침" },
      { href: "/terms", label: "이용약관" },
    ],
  },
} as const;

/**
 * 소셜 미디어 링크
 */
export const SOCIAL_LINKS = [
  { href: "https://github.com", label: "GitHub", icon: "Github" },
  { href: "https://twitter.com", label: "Twitter", icon: "Twitter" },
] as const;

/**
 * 사이트 메타데이터
 */
export const SITE_CONFIG = {
  name: "StarterKit",
  description: "모던 웹 개발을 위한 Next.js 스타터킷",
  url: "https://starterkit.dev",
} as const;
