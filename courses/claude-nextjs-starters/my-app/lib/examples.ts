/**
 * 예제 카테고리 타입
 */
export type ExampleCategory =
  | "components"    // 컴포넌트 예제
  | "features"      // 기능 데모
  | "patterns"      // 디자인 패턴
  | "integrations"; // 통합 예제

/**
 * 예제 타입 정의
 */
export interface Example {
  slug: string;                    // URL 경로용 (예: "button-variants")
  title: string;                   // 예제 제목
  description: string;             // 짧은 설명
  category: ExampleCategory;       // 카테고리
  tags: string[];                  // 태그 (예: ["ui", "button", "shadcn"])
  featured?: boolean;              // 추천 예제 표시
  code?: string;                   // 코드 스니펫 (선택)
}

/**
 * 카테고리 메타데이터
 */
export const EXAMPLE_CATEGORIES: Record<
  ExampleCategory,
  { label: string; description: string }
> = {
  components: {
    label: "컴포넌트",
    description: "재사용 가능한 UI 컴포넌트 예제",
  },
  features: {
    label: "기능",
    description: "실용적인 기능 구현 예제",
  },
  patterns: {
    label: "패턴",
    description: "일반적인 디자인 패턴 구현",
  },
  integrations: {
    label: "통합",
    description: "외부 서비스 및 API 통합 예제",
  },
} as const;

/**
 * 샘플 예제 데이터
 */
export const EXAMPLES: Example[] = [
  {
    slug: "button-variants",
    title: "버튼 변형 예제",
    description: "다양한 스타일과 크기의 버튼 컴포넌트 사용법",
    category: "components",
    tags: ["ui", "button", "shadcn"],
    featured: true,
    code: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">기본 버튼</Button>
      <Button variant="secondary">보조 버튼</Button>
      <Button variant="outline">아웃라인 버튼</Button>
      <Button variant="ghost">고스트 버튼</Button>
      <Button variant="destructive">삭제 버튼</Button>
    </div>
  );
}`,
  },
  {
    slug: "card-layouts",
    title: "카드 레이아웃 예제",
    description: "Card 컴포넌트를 활용한 다양한 레이아웃 패턴",
    category: "components",
    tags: ["ui", "card", "layout"],
    featured: true,
    code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명 텍스트</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 콘텐츠 영역입니다.</p>
      </CardContent>
    </Card>
  );
}`,
  },
  {
    slug: "form-validation",
    title: "폼 유효성 검사",
    description: "React Hook Form과 함께 사용하는 폼 검증 패턴",
    category: "features",
    tags: ["form", "validation", "react-hook-form"],
    featured: false,
    code: `// 폼 유효성 검사 예제
// React Hook Form을 사용한 실용적인 패턴

export function FormExample() {
  // 구현 예정
  return <div>폼 예제</div>;
}`,
  },
  {
    slug: "responsive-grid",
    title: "반응형 그리드 레이아웃",
    description: "TailwindCSS를 활용한 반응형 그리드 시스템 구현",
    category: "patterns",
    tags: ["layout", "grid", "responsive"],
    featured: true,
    code: `export function GridDemo() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="aspect-square bg-muted rounded-lg flex items-center justify-center"
        >
          아이템 {item}
        </div>
      ))}
    </div>
  );
}`,
  },
  {
    slug: "theme-toggle",
    title: "다크모드 전환",
    description: "next-themes를 사용한 테마 전환 구현",
    category: "features",
    tags: ["theme", "dark-mode", "next-themes"],
    featured: false,
    code: `import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}`,
  },
];
