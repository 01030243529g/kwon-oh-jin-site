import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "./content";

export const metadata: Metadata = {
  title: "소상공인·중소기업 경영 인사이트 | 권오진",
  description:
    "정책자금, 현금 흐름, 정부지원사업과 소상공인 경영을 43년 현장 경험의 언어로 쉽게 설명합니다.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main className="insights-page">
      <header className="article-header">
        <Link className="article-brand" href="/">권오진 <span>KWON OH JIN</span></Link>
        <Link className="article-home" href="/">홈으로</Link>
      </header>
      <section className="insights-hero">
        <p className="kicker">BUSINESS INSIGHTS</p>
        <h1>현장에서 바로 쓰는<br />경영 인사이트</h1>
        <p>정책자금과 현금 흐름, 지원사업을 대표의 눈높이에서 쉽게 풀어드립니다.</p>
      </section>
      <section className="insights-list" aria-label="경영 인사이트 목록">
        {insights.map((item) => (
          <article key={item.slug}>
            <div><span>{item.category}</span><time dateTime={item.publishedAt}>{item.publishedAt.replaceAll("-", ".")}</time></div>
            <h2><Link href={`/insights/${item.slug}`}>{item.title}</Link></h2>
            <p>{item.description}</p>
            <Link className="insight-read" href={`/insights/${item.slug}`}>칼럼 읽기 →</Link>
          </article>
        ))}
      </section>
      <section className="article-cta">
        <p>우리 기업에 맞는 정책자금과 지원 방향이 궁금하신가요?</p>
        <Link href="/#consultation">상담 신청하기 →</Link>
      </section>
    </main>
  );
}
