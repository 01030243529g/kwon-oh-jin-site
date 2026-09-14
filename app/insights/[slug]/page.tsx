import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights, siteUrl } from "../content";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | 권오진 경영자문`,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      title: insight.title,
      description: insight.description,
      url: `/insights/${insight.slug}`,
      publishedTime: `${insight.publishedAt}T09:00:00+09:00`,
      authors: ["권오진"],
      images: [{ url: "/og.webp", width: 1200, height: 630, alt: "권오진 정책자금·경영자문" }],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.publishedAt,
    dateModified: insight.publishedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: `${siteUrl}/insights/${insight.slug}`,
    author: { "@type": "Person", name: "권오진", url: siteUrl },
    publisher: { "@type": "Person", name: "권오진", url: siteUrl },
    image: `${siteUrl}/og.webp`,
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="article-header">
        <Link className="article-brand" href="/">권오진 <span>KWON OH JIN</span></Link>
        <Link className="article-home" href="/insights">인사이트 목록</Link>
      </header>
      <article className="article-body">
        <div className="article-meta"><span>{insight.category}</span><time dateTime={insight.publishedAt}>{insight.publishedAt.replaceAll("-", ".")}</time><span>{insight.readTime}</span></div>
        <h1>{insight.title}</h1>
        <p className="article-lead">{insight.lead}</p>
        {insight.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <blockquote>{insight.takeaway}</blockquote>
        {"sources" in insight && insight.sources.length > 0 && (
          <section className="article-sources" aria-labelledby="official-sources">
            <h2 id="official-sources">공식 출처</h2>
            <p>아래 자료는 {insight.sources[0].checkedAt.replaceAll("-", ".")} 기준으로 확인했습니다. 세부 조건은 신청 시점의 최신 공고를 다시 확인해 주세요.</p>
            <ul>
              {insight.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <nav className="article-bottom" aria-label="글 하단 이동">
        <Link href="/insights">← 다른 인사이트 보기</Link>
        <div>
          <Link href="/#book">책 소개</Link>
          <a href="https://open.kakao.com/o/gBcsajJi" target="_blank" rel="noreferrer">강의·경영자문 문의</a>
          <Link href="/#consultation">상담 신청 →</Link>
        </div>
      </nav>
    </main>
  );
}
