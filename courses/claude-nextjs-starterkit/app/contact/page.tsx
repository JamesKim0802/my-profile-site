import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata = {
  title: "Contact - Next.js v15 스타터 키트",
  description: "문의하기",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">Contact</h1>
          <p className="text-xl text-muted-foreground">
            궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>문의 양식</CardTitle>
            <CardDescription>아래 양식을 작성해주세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea
                  id="message"
                  placeholder="메시지를 입력하세요..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">전송하기</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
