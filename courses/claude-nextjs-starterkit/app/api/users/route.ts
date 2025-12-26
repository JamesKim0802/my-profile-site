import { NextRequest, NextResponse } from 'next/server'

// GET 요청 처리
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')

  // 예제 데이터
  const users = [
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '김철수', email: 'kim@example.com' },
    { id: 3, name: '이영희', email: 'lee@example.com' },
  ]

  if (id) {
    const user = users.find(u => u.id === parseInt(id))
    if (user) {
      return NextResponse.json(user)
    }
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(users)
}

// POST 요청 처리
export async function POST(request: NextRequest) {
  const body = await request.json()

  // 예제: 새 사용자 생성
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  }

  return NextResponse.json(newUser, { status: 201 })
}
