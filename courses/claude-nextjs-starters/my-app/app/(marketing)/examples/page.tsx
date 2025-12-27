import { Container } from "@/components/shared";
import { SITE_CONFIG } from "@/lib/constants";
import { EXAMPLES, EXAMPLE_CATEGORIES } from "@/lib/examples";
import { ExampleCard } from "@/components/examples/example-card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "예제 - " + SITE_CONFIG.name,
  description: "다양한 컴포넌트와 기능 구현 예제를 살펴보세요.",
};

export default function ExamplesPage() {
  // 추천 예제 필터링
  const featuredExamples = EXAMPLES.filter((ex) => ex.featured);

  // 카테고리별 그룹화
  const examplesByCategory = EXAMPLES.reduce(
    (acc, example) => {
      if (!acc[example.category]) {
        acc[example.category] = [];
      }
      acc[example.category].push(example);
      return acc;
    },
    {} as Record<string, typeof EXAMPLES>
  );

  return (
    <Container className="py-20">
      {/* 페이지 헤더 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          코드 예제
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          실무에서 바로 사용할 수 있는 컴포넌트와 패턴 예제를 살펴보세요.
        </p>
      </div>

      {/* 추천 예제 섹션 */}
      {featuredExamples.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold">추천 예제</h2>
            <Badge variant="secondary">Featured</Badge>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExamples.map((example) => (
              <ExampleCard key={example.slug} example={example} />
            ))}
          </div>
        </section>
      )}

      {/* 카테고리별 예제 섹션 */}
      {Object.entries(examplesByCategory).map(([category, examples]) => (
        <section key={category} className="mb-16 last:mb-0">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {
                EXAMPLE_CATEGORIES[
                  category as keyof typeof EXAMPLE_CATEGORIES
                ].label
              }
            </h2>
            <p className="text-muted-foreground mt-1">
              {
                EXAMPLE_CATEGORIES[
                  category as keyof typeof EXAMPLE_CATEGORIES
                ].description
              }
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <ExampleCard key={example.slug} example={example} />
            ))}
          </div>
        </section>
      ))}

      {/* 빈 상태 (예제가 없을 때) */}
      {EXAMPLES.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            아직 등록된 예제가 없습니다.
          </p>
        </div>
      )}
    </Container>
  );
}
