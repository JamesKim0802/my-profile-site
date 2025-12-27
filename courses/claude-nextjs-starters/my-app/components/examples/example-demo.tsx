import { Card } from "@/components/ui/card";

interface ExampleDemoProps {
  children: React.ReactNode;
}

/**
 * 예제 데모 컨테이너 컴포넌트
 * - 데모를 시각적으로 구분
 * - 패딩 및 스타일링
 */
export function ExampleDemo({ children }: ExampleDemoProps) {
  return (
    <Card className="p-8 border-2 border-dashed">
      <div className="flex items-center justify-center min-h-[200px]">
        {children}
      </div>
    </Card>
  );
}
