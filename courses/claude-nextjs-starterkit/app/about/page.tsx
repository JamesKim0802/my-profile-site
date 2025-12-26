import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About - Next.js v15 스타터 키트",
  description: "프로젝트 소개",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">About</h1>
          <p className="text-xl text-muted-foreground">
            Next.js v15 스타터 키트에 대해 알아보세요
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>프로젝트 소개</CardTitle>
            <CardDescription>현대적인 웹 개발을 위한 완벽한 시작점</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              이 스타터 키트는 Next.js v15의 최신 기능들을 활용하여
              빠르고 효율적인 웹 애플리케이션을 구축할 수 있도록 설계되었습니다.
            </p>
            <h3 className="font-semibold text-lg mt-4">주요 기능</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js v15 App Router</li>
              <li>TypeScript 완전 지원</li>
              <li>TailwindCSS v4 (CSS-first 설정)</li>
              <li>shadcn/ui 컴포넌트</li>
              <li>다크 모드 지원</li>
              <li>반응형 디자인</li>
              <li>ESLint + Prettier</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
