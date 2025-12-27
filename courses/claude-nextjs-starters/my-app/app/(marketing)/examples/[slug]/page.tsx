import { notFound } from "next/navigation";
import { Container } from "@/components/shared";
import { EXAMPLES, EXAMPLE_CATEGORIES } from "@/lib/examples";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/examples/code-preview";
import { ExampleDemo } from "@/components/examples/example-demo";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface ExamplePageProps {
  params: Promise<{ slug: string }>;
}

// 정적 경로 생성 (빌드 시 모든 예제 페이지 미리 생성)
export async function generateStaticParams() {
  return EXAMPLES.map((example) => ({
    slug: example.slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: ExamplePageProps): Promise<Metadata> {
  const { slug } = await params;
  const example = EXAMPLES.find((ex) => ex.slug === slug);

  if (!example) {
    return {
      title: "예제를 찾을 수 없습니다",
    };
  }

  return {
    title: `${example.title} - 예제`,
    description: example.description,
  };
}

export default async function ExamplePage({ params }: ExamplePageProps) {
  const { slug } = await params;
  const example = EXAMPLES.find((ex) => ex.slug === slug);

  // 예제를 찾지 못하면 404 페이지 표시
  if (!example) {
    notFound();
  }

  const categoryInfo = EXAMPLE_CATEGORIES[example.category];

  return (
    <Container className="py-20">
      {/* 뒤로가기 버튼 */}
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/examples">
          <ArrowLeft className="mr-2 h-4 w-4" />
          모든 예제 보기
        </Link>
      </Button>

      {/* 예제 헤더 */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary">{categoryInfo.label}</Badge>
          {example.featured && <Badge variant="default">추천</Badge>}
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {example.title}
        </h1>

        <p className="text-lg text-muted-foreground">
          {example.description}
        </p>

        {/* 태그 */}
        {example.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {example.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* 코드 섹션 */}
      {example.code && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5" />
            <h2 className="text-2xl font-bold">코드</h2>
          </div>
          <CodePreview code={example.code} language="typescript" />
        </section>
      )}

      {/* 관련 예제 (선택사항) */}
      <section className="mt-16 pt-16 border-t">
        <h2 className="text-2xl font-bold mb-6">더 많은 예제</h2>
        <Button asChild>
          <Link href="/examples">모든 예제 보기</Link>
        </Button>
      </section>
    </Container>
  );
}
