import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, "app/insights/content.ts");
const outputRoot = path.join(projectRoot, "content-packs");

const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

const module = { exports: {} };
vm.runInNewContext(compiled, { module, exports: module.exports }, { filename: sourcePath });
const { insights, siteUrl } = module.exports;

fs.mkdirSync(outputRoot, { recursive: true });

const hashtagsByCategory = {
  "정책자금": ["정책자금", "소상공인", "중소기업"],
  "현금 흐름": ["현금흐름", "매출관리", "경영관리"],
  "소상공인 지원": ["소상공인지원", "정부지원사업", "사업성장"],
  "중소기업 성장": ["중소기업성장", "경영전략", "사업운영"],
  "매출·비용 관리": ["매출관리", "비용관리", "수익관리"],
  "사업 진단": ["사업진단", "경영자문", "소상공인경영"],
};

for (const insight of insights) {
  const articleUrl = `${siteUrl}/insights/${insight.slug}`;
  const body = insight.sections
    .map((section) => `${section.heading}\n\n${section.paragraphs.join("\n\n")}`)
    .join("\n\n");
  const hashtags = (hashtagsByCategory[insight.category] ?? ["경영인사이트", "권오진"])
    .concat(["권오진", "경영인사이트"])
    .map((tag) => `#${tag}`)
    .join(" ");

  const naverBlog = `${insight.title}\n\n${insight.lead}\n\n${body}\n\n핵심 정리\n${insight.takeaway}\n\n※ 정책자금과 지원사업은 기관별 기준과 심사에 따라 달라질 수 있으므로 최신 공고와 기업의 현재 조건을 함께 확인해야 합니다.\n\n자세히 보기: ${articleUrl}\n정책자금·경영자문 문의: ${siteUrl}/#consultation\n\n${hashtags}\n`;
  const social = `${insight.title}\n\n${insight.takeaway}\n\n자세히 보기 ${articleUrl}\n${hashtags}\n`;

  fs.writeFileSync(path.join(outputRoot, `${insight.slug}-naver-blog.md`), naverBlog);
  fs.writeFileSync(path.join(outputRoot, `${insight.slug}-sns.txt`), social);
}

const guide = `# 권오진 경영 인사이트 홍보 묶음\n\n글 원본은 \`app/insights/content.ts\` 한 곳에서 관리합니다.\n새 글을 같은 형식으로 한 개 추가한 뒤 아래 명령을 실행하면 네이버 블로그용 글과 SNS용 짧은 홍보문이 함께 만들어집니다.\n\n\`\`\`bash\n+npm run content:generate\n+\`\`\`\n\n홈페이지 목록, 글별 주소, sitemap.xml과 rss.xml은 같은 원본을 읽기 때문에 새 글이 자동으로 반영됩니다.\n`;
fs.writeFileSync(path.join(outputRoot, "README.md"), guide);

console.log(`Generated ${insights.length * 2} promotion files for ${insights.length} insights.`);
