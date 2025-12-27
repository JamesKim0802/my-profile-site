"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface CodePreviewProps {
  code: string;
  language?: string;
}

/**
 * 코드 프리뷰 컴포넌트
 * - 코드 하이라이팅 (기본 스타일)
 * - 복사 기능
 * - 스크롤 가능
 */
export function CodePreview({ code, language = "typescript" }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {/* 복사 버튼 */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 mr-1" />
            복사됨
          </>
        ) : (
          <>
            <Copy className="h-3 w-3 mr-1" />
            복사
          </>
        )}
      </Button>

      {/* 코드 블록 */}
      <pre className="bg-muted rounded-lg p-6 overflow-x-auto">
        <code className={`language-${language} text-sm`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
