import { insights, siteUrl } from "../insights/content";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  }[character] ?? character));
}

export function GET() {
  const latestPublishedAt = insights.reduce(
    (latest, item) => item.publishedAt > latest ? item.publishedAt : latest,
    "1970-01-01",
  );
  const items = insights.map((item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${siteUrl}/insights/${item.slug}</link>
      <guid isPermaLink="true">${siteUrl}/insights/${item.slug}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(`${item.publishedAt}T00:00:00+09:00`).toUTCString()}</pubDate>
      <category>${escapeXml(item.category)}</category>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>권오진 경영 인사이트</title>
    <link>${siteUrl}/insights</link>
    <description>소상공인·중소기업을 위한 정책자금과 현장 경영 인사이트</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date(`${latestPublishedAt}T00:00:00+09:00`).toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
