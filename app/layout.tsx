import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site"),
  title: "정책자금 상담·소상공인 지원 | 권오진 경영자문",
  description: "43년 현장 경험을 바탕으로 소상공인·중소기업의 정책자금, 정부지원자금, 기업인증과 특허·지식재산 지원 방향을 상담합니다.",
  keywords: ["권오진", "정책자금 상담", "소상공인 지원", "정부지원자금", "중소기업 경영자문", "기업인증", "정부지원사업"],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
  authors: [{ name: "권오진", url: "https://blog.naver.com/ojin0505" }],
  category: "business",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "권오진 정책자금·경영자문",
    title: "정책자금 상담·소상공인 지원 | 권오진 경영자문",
    description: "소상공인과 중소기업의 정책자금·정부지원자금부터 기업인증과 성장 방향까지 함께 살펴봅니다.",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "권오진 정책자금·경영자문" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "정책자금 상담·소상공인 지원 | 권오진 경영자문",
    description: "43년 현장 경험으로 기업의 정책자금과 성장 방향을 함께 찾습니다.",
    images: ["/og.webp"],
  },
  verification: {
    other: {
      "naver-site-verification": "c3bba07c8c20edfb25a4c611376aff10ad98075f",
    },
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
