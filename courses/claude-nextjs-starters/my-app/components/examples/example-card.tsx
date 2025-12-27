import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Example } from "@/lib/examples";
import { ArrowRight } from "lucide-react";

interface ExampleCardProps {
  example: Example;
}

/**
 * 예제 카드 컴포넌트
 * - 예제 목록에서 사용
 * - 호버 효과 포함
 * - 카테고리 및 태그 표시
 */
export function ExampleCard({ example }: ExampleCardProps) {
  return (
    <Link href={`/examples/${example.slug}`} className="group block">
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          {/* 카테고리 뱃지 */}
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {example.category}
            </Badge>
            {example.featured && (
              <Badge variant="default" className="text-xs">
                추천
              </Badge>
            )}
          </div>

          {/* 제목 및 설명 */}
          <CardTitle className="flex items-center justify-between">
            {example.title}
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
          <CardDescription>{example.description}</CardDescription>

          {/* 태그 */}
          {example.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {example.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {example.tags.length > 3 && (
                <span className="text-xs px-2 py-0.5 text-muted-foreground">
                  +{example.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
