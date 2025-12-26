import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Next.js v15 스타터 키트
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            TypeScript, TailwindCSS v4, shadcn/ui로 구축된 프로덕션 레디 템플릿
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/about">시작하기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Next.js v15</CardTitle>
              <CardDescription>최신 App Router 사용</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                서버 컴포넌트, 스트리밍, React 19 지원
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TailwindCSS v4</CardTitle>
              <CardDescription>CSS-first 설정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                설정 파일 없이 CSS로 직접 관리
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>아름다운 컴포넌트</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                접근성과 커스터마이징이 뛰어난 UI
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
