# Next.js v15 스타터 키트

프로덕션 레디 Next.js v15 스타터 템플릿입니다. 최신 기술 스택과 모범 사례를 적용했습니다.

## 기술 스택

- **프레임워크**: Next.js v15 (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS v4 (CSS-first configuration)
- **UI 컴포넌트**: shadcn/ui
- **아이콘**: lucide-react
- **다크 모드**: next-themes
- **코드 품질**: ESLint + Prettier

## 주요 기능

- ✅ Next.js v15 App Router
- ✅ TypeScript 완전 지원
- ✅ TailwindCSS v4 (설정 파일 없는 CSS-first 방식)
- ✅ shadcn/ui 컴포넌트 시스템
- ✅ 다크/라이트 모드 전환
- ✅ 반응형 디자인
- ✅ SEO 최적화
- ✅ API Routes 예제
- ✅ ESLint + Prettier 설정

## 시작하기

### 필수 요구사항

- Node.js 20.9 이상
- npm 또는 yarn

### 설치

1. 의존성 설치

```bash
npm install
```

2. 환경 변수 설정

```bash
cp .env.example .env.local
```

3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
claude-nextjs-starterkit/
├── app/                      # Next.js App Router
│   ├── api/                 # API 라우트
│   │   ├── hello/          # Hello API 예제
│   │   └── users/          # Users API 예제
│   ├── about/              # About 페이지
│   ├── contact/            # Contact 페이지
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 전역 CSS (TailwindCSS v4 설정)
├── components/              # React 컴포넌트
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── header.tsx     # 헤더
│   │   └── footer.tsx     # 푸터
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── theme-provider.tsx  # 테마 제공자
│   └── theme-toggle.tsx    # 테마 전환 버튼
├── lib/                     # 유틸리티 함수
│   └── utils.ts            # 공통 유틸리티
├── .env.example            # 환경 변수 예제
├── eslint.config.mjs       # ESLint 설정
├── .prettierrc             # Prettier 설정
├── components.json         # shadcn/ui 설정
├── next.config.ts          # Next.js 설정
├── package.json            # 프로젝트 의존성
└── tsconfig.json           # TypeScript 설정
```

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 시작
- `npm run lint` - ESLint 실행
- `npm run format` - Prettier로 코드 포맷팅

## TailwindCSS v4 사용법

이 프로젝트는 TailwindCSS v4의 CSS-first 설정을 사용합니다. `app/globals.css`에서 직접 테마를 정의할 수 있습니다:

```css
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
}
```

## shadcn/ui 컴포넌트 추가

새로운 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## API 라우트 예제

### Hello API
- **엔드포인트**: `/api/hello`
- **메서드**: GET
- **설명**: 기본 API 응답 예제

### Users API
- **엔드포인트**: `/api/users`
- **메서드**: GET, POST
- **설명**: RESTful API 예제

```bash
# 모든 사용자 조회
curl http://localhost:3000/api/users

# 특정 사용자 조회
curl http://localhost:3000/api/users?id=1

# 새 사용자 생성
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"새 사용자","email":"new@example.com"}'
```

## 환경 변수

`.env.local` 파일에서 환경 변수를 설정할 수 있습니다:

```env
NEXT_PUBLIC_APP_NAME="앱 이름"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 배포

### Vercel (권장)

```bash
npm install -g vercel
vercel
```

### 기타 플랫폼

프로덕션 빌드 생성:
```bash
npm run build
```

빌드된 애플리케이션 실행:
```bash
npm run start
```

## 라이센스

MIT

## 기여

기여를 환영합니다! Pull Request를 보내주세요.
