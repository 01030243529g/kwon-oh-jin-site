import ConsultationForm from "./ConsultationForm";
import Link from "next/link";
import { insights } from "./insights/content";

// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

const strengths = [
  ["01", "통제 가능한 것에 집중", "환경을 탓하기보다 지금 바꿀 수 있는 일을 분석하고 신속하게 실행합니다."],
  ["02", "매출보다 현금 흐름", "많이 파는 것보다 남기는 구조를 만들고, 숫자와 자금의 흐름으로 결정합니다."],
  ["03", "고객과 신뢰를 남기는 경영", "고객의 문제를 이해하고, 직원과 함께 성장하며, 신뢰를 기업의 가장 강한 자본으로 만듭니다."],
  ["04", "변화를 읽고 실행", "과거의 성공 공식에 머물지 않고 AI·디지털과 새로운 시장을 경영에 연결합니다."],
];

const coreExpertise = [
  ["01", "정책자금 상담", "기업의 업력·매출·재무상태와 자금 목적을 살펴보고, 현재 상황에 맞는 정책자금 검토 방향을 안내합니다."],
  ["02", "소상공인 지원", "사업 운영 안정과 성장, 재도약을 준비하는 소상공인이 확인해야 할 지원제도와 준비사항을 함께 살펴봅니다."],
  ["03", "정부지원자금 안내", "중소기업과 소상공인이 활용할 수 있는 정부·공공기관의 자금지원 제도를 기업의 여건에 맞춰 검토합니다."],
];

const supportingExpertise = [
  ["기업인증", "기업의 성장 단계와 사업 목적에 필요한 인증 제도를 검토합니다."],
  ["특허·지식재산 지원", "기술과 아이디어의 권리화 및 관련 지원사업의 활용 방향을 살펴봅니다."],
  ["정부지원사업", "융자 외 보조금·사업화·판로·디지털 전환 등 지원사업을 함께 확인합니다."],
];

const faqs = [
  [
    "정책자금은 누구나 받을 수 있나요?",
    "정책자금은 업력·매출·재무상태·자금 용도 등 지원기관의 기준과 심사를 거쳐 결정됩니다. 상담은 기업의 현재 상황을 살펴보고 적합한 준비 방향을 함께 검토하는 과정이며, 승인이나 대출 실행을 보장하지 않습니다.",
  ],
  [
    "창업 초기 기업이나 소상공인도 상담할 수 있나요?",
    "네, 가능합니다. 창업 초기 기업과 소상공인을 위한 제도가 별도로 있으며, 실적이 많지 않더라도 업종·사업계획·대표자의 준비 상황 등을 기준으로 확인할 수 있습니다.",
  ],
  [
    "기업인증·특허·정부지원사업도 함께 상담하나요?",
    "네. 기업의 성장 단계와 목적에 따라 기업인증, 특허·지식재산 지원, 보조금·사업화·판로·디지털 전환 관련 정부지원사업의 활용 방향도 함께 검토합니다.",
  ],
  [
    "상담을 신청하면 어떻게 진행되나요?",
    "신청 내용을 확인한 뒤 전화 또는 카카오톡으로 연락드립니다. 기업의 현재 상황과 자금 목적을 먼저 확인하고, 필요한 자료와 다음 준비 순서를 안내합니다.",
  ],
  [
    "상담받는 데 비용이 드나요?",
    "사이트를 통한 1차 상담 신청은 무료입니다. 구체적인 자문 범위와 비용이 필요한 경우 상담 내용을 확인한 뒤 진행 전에 안내드립니다.",
  ],
];

const timeline = [
  ["1985", "수습사원에서 시작한 경영 여정", "상지영서대학교 경영학과 졸업 후 기업 현장에 들어가 관리·영업·조직 운영의 기본을 익혔습니다."],
  ["1993", "경영 전문성 확장", "경희대학교 최고경영자대학원 과정을 수료하며 현장 경험 위에 경영의 체계를 더했습니다."],
  ["2007", "대한여행사 대표 경영", "대한민국 최초 여행사의 전통을 바탕으로 인·아웃바운드 강화와 해외 패키지 사업 다각화를 추진했습니다."],
  ["2007–2008", "여행·골프·문화관광 전문 활동", "맞춤여행, 해외 골프, 예술기행, 특수목적 여행상품을 기획하고 매일경제·여행 전문매체 인터뷰와 기고에 참여했습니다."],
  ["현재", "43년의 경험을 기록하다", "소상공인·중소기업을 위한 경영 원고 57편을 집필하며 현장의 지혜를 다음 세대와 나누고 있습니다."],
];

const articles = [
  {
    date: "2007.04.01",
    title: "대한여행, 95년 노하우로 해외패키지 진출",
    type: "매일경제 인터뷰",
    desc: "대한여행사 사장으로서 해외 패키지 사업, 맞춤형 테마여행, 관광산업의 전문경영 방향을 밝힌 인터뷰입니다.",
    href: "https://www.mk.co.kr/news/all/4275164",
  },
  {
    date: "2007.09.09",
    title: "빛의 조각가 이사무 노구치의 정원",
    type: "매일경제 전문기고",
    desc: "‘권오진 대한여행사 사장’ 명의로 다카마쓰·나오시마와 이사무 노구치 정원미술관을 소개한 예술기행입니다.",
    href: "https://www.mk.co.kr/news/culture/4317595",
  },
  {
    date: "2007.11.04",
    title: "에콰도르, 적도에 피어난 꽃을 보라",
    type: "대한여행사 기획상품 소개",
    desc: "대한여행사가 기획한 중남미·아프리카 6개국 상품이 구체적으로 소개된 문화관광 기사입니다.",
    href: "https://www.mk.co.kr/news/culture/4334004",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/#website",
        url: "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/",
        name: "권오진 정책자금·경영자문",
        description: "소상공인과 중소기업을 위한 정책자금, 정부지원자금 및 경영자문 안내",
        inLanguage: "ko-KR",
      },
      {
        "@type": "Person",
        "@id": "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/#person",
        name: "권오진",
        alternateName: "KWON OH JIN",
        jobTitle: "경영자문 전문가",
        description: "43년 현장 경험을 바탕으로 소상공인과 중소기업의 정책자금 및 경영 방향을 상담하는 현장 경영인",
        url: "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/",
        image: "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/kwon-oh-jin-white-shirt-frame.webp",
        email: "mailto:ojin0505@naver.com",
        telephone: "+82-10-6239-0158",
        knowsAbout: ["정책자금", "소상공인 지원", "정부지원자금", "기업인증", "특허", "지식재산", "정부지원사업", "경영자문"],
        sameAs: ["https://blog.naver.com/ojin0505", "https://litt.ly/ojin0158"],
      },
      {
        "@type": "Service",
        "@id": "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/#service",
        name: "정책자금·소상공인 경영자문",
        provider: { "@id": "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/#person" },
        areaServed: { "@type": "Country", name: "대한민국" },
        serviceType: ["정책자금 상담", "소상공인 지원", "정부지원자금 안내", "기업인증", "특허·지식재산 지원", "정부지원사업"],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="권오진 프로필 첫 화면">
          <strong>권오진</strong><span>KWON OH JIN</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a><a href="#expertise">전문영역</a><a href="#career">경력</a><a href="#philosophy">경영철학</a><Link href="/insights">경영 인사이트</Link><a href="#media">언론활동</a><a href="#book">저서</a><a className="nav-contact" href="#contact">연락</a>
        </nav>
      </header>

      <aside className="quick-menu" aria-label="빠른 상담 바로가기">
        <a href="tel:01062390158"><span className="quick-icon" aria-hidden="true">☎</span><b>전화상담</b></a>
        <a href="https://open.kakao.com/o/gBcsajJi" target="_blank" rel="noreferrer"><span className="quick-icon talk" aria-hidden="true">TALK</span><b>카톡상담</b></a>
        <a href="#consultation"><span className="quick-icon" aria-hidden="true">✎</span><b>무료상담</b></a>
        <a href="#expertise"><span className="quick-icon" aria-hidden="true">₩</span><b>정책자금</b></a>
      </aside>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">43 YEARS OF FIELD EXPERIENCE</p>
          <h1>43년 현장의 지혜로,<br />정책자금과 기업의 성장을 잇다</h1>
          <p className="lead">소상공인과 중소기업의 현재 상황을 살펴보고, 정책자금과 정부지원자금부터 기업의 성장 방향까지 함께 찾습니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="#expertise">정책자금 상담 안내 <span>→</span></a>
            <a className="button secondary" href="https://open.kakao.com/o/gBcsajJi" target="_blank" rel="noreferrer" aria-label="카카오톡으로 강연과 경영자문 문의하기">강연·경영자문 문의 <span>→</span></a>
          </div>
          <div className="hero-years" aria-label="경영 여정">
            <div><strong>1983</strong><span>경영을 향한 첫걸음</span></div>
            <div><strong>2026</strong><span>다음 세대를 위한 기록</span></div>
          </div>
        </div>
        <figure className="hero-photo">
          <img src="/kwon-oh-jin-white-shirt-frame.webp" alt="흰 셔츠와 붉은 넥타이를 착용한 경영인 권오진 대표" />
        </figure>
      </section>

      <section className="intro section" id="about">
        <div className="section-heading">
          <p className="kicker">ABOUT</p><h2>과거의 경험은<br />미래를 준비하는 자산입니다.</h2>
        </div>
        <div className="intro-copy">
          <p className="intro-quote">“고객을 이해하는 기업이 성장하고, 변화를 읽는 기업이 살아남으며, 실행하는 기업이 결국 성공합니다.”</p>
          <p>권오진은 수습사원으로 사회생활을 시작해 수많은 실패와 도전, 위기를 지나 대표의 자리까지 오른 현장 경영인입니다. 대한여행사 대표 재임 중에는 일본 인바운드의 전통 위에 해외 패키지 사업을 강화하고, 골프·예술기행·성지순례·인센티브 등 차별화된 테마여행의 가능성을 넓혔습니다.</p>
          <p>현재는 관광·서비스산업에서 쌓은 경영 경험을 바탕으로 소상공인과 중소기업의 정책자금, 정부지원자금, 기업인증과 정부지원사업을 함께 살펴보며 기업의 현실에 맞는 성장 방향을 전하고 있습니다.</p>
          <blockquote className="moved-field-note"><span>FIELD NOTE</span><strong>“변화를 읽는 기업이 살아남고, 실행하는 기업이 성공합니다.”</strong><small>권오진 · 43년 현장 경영인</small></blockquote>
        </div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="section-heading expertise-heading">
          <p className="kicker">POLICY FUNDING &amp; BUSINESS SUPPORT</p>
          <h2>정책자금부터 기업의 성장까지,<br />현실에 맞는 방향을 함께 찾습니다.</h2>
          <p className="section-summary">자금이 필요한 이유와 기업의 현재 조건을 먼저 확인하고, 소상공인·중소기업이 검토할 수 있는 지원 방향을 차근차근 안내합니다.</p>
        </div>
        <div className="expertise-grid">
          {coreExpertise.map(([num, title, desc]) => (
            <article key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>
          ))}
        </div>
        <div className="supporting-expertise" aria-label="보조 전문영역">
          <p className="supporting-label">SUPPORTING EXPERTISE</p>
          <div>
            {supportingExpertise.map(([title, desc]) => (
              <article key={title}><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
        </div>
        <p className="expertise-note">정책자금과 정부지원사업은 지원기관의 기준과 심사에 따라 결정되며, 상담은 기업 상황에 맞는 준비 방향을 함께 검토하는 과정입니다.</p>
        <a className="button expertise-cta" href="#consultation">정책자금 상담 신청 <span>→</span></a>
      </section>

      <section className="strengths section" id="philosophy">
        <div className="section-heading light"><p className="kicker">MANAGEMENT PHILOSOPHY</p><h2>43년 현장에서 정리한<br />네 가지 경영 원칙</h2></div>
        <div className="strength-grid">
          {strengths.map(([num, title, desc]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="career section" id="career">
        <div className="section-heading"><p className="kicker">CAREER</p><h2>현장에서 쌓아 올린<br />경영의 시간</h2></div>
        <div className="timeline">
          {timeline.map(([year, title, desc]) => <article key={year}><time>{year}</time><div><h3>{title}</h3><p>{desc}</p></div></article>)}
        </div>
        <div className="education">
          <p>학력</p><span>상지영서대학교 경영학과 졸업</span><span>경희대학교 최고경영자대학원 수료</span>
        </div>
      </section>

      <section className="media section" id="media">
        <div className="section-heading">
          <p className="kicker">MEDIA &amp; TRAVEL EXPERTISE</p>
          <h2>여행을 상품이 아니라<br />경험과 문화로 설계하다</h2>
          <p className="section-summary">온라인 원문에서 권오진 대한여행사 사장 또는 대한여행사 기획상품으로 명확히 확인되는 자료입니다.</p>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <a className="article-card" href={article.href} target="_blank" rel="noreferrer" key={article.href}>
              <div><time>{article.date}</time><span>{article.type}</span></div>
              <h3>{article.title}</h3><p>{article.desc}</p><b>매일경제 원문 보기 →</b>
            </a>
          ))}
        </div>
        <p className="media-note">경력자료에는 2007~2008년 여행신문·여행미디어·골프저널 및 매일경제의 여행·골프·문화관광 관련 인터뷰와 상품기사 기록이 다수 남아 있으며, 온라인 원문이 확인되는 자료부터 우선 공개했습니다.</p>
      </section>

      <section className="home-insights section" id="insights">
        <div className="section-heading">
          <p className="kicker">BUSINESS INSIGHTS</p>
          <h2>대표가 알아야 할 내용을<br />현장의 언어로 설명합니다.</h2>
          <p className="section-summary">정책자금과 현금 흐름, 소상공인 지원사업을 쉽게 이해하고 준비할 수 있도록 핵심만 정리했습니다.</p>
        </div>
        <div className="home-insight-grid">
          {insights.map((item) => (
            <article key={item.slug}>
              <div><span>{item.category}</span><time dateTime={item.publishedAt}>{item.readTime}</time></div>
              <h3><Link href={`/insights/${item.slug}`}>{item.title}</Link></h3>
              <p>{item.description}</p>
              <Link href={`/insights/${item.slug}`}>자세히 읽기 →</Link>
            </article>
          ))}
        </div>
        <Link className="button insights-all" href="/insights">경영 인사이트 전체 보기 <span>→</span></Link>
      </section>

      <section className="book section" id="book">
        <div className="book-cover" aria-label="책 표지 미리보기"><p>43년 현장 경영자가 전하는<br />소상공인·중소기업 경영의 기본 철학</p><h3>사장은<br />멈추면 안 된다</h3><span>권오진</span></div>
        <div className="book-copy"><p className="kicker">BOOK · 57 FIELD ESSAYS</p><h2>현장의 언어로 전하는<br />흔들리지 않는 경영의 기본</h2><p>『사장은 멈추면 안 된다』는 43년의 경영 경험을 57편의 실전 원고로 정리한 책입니다. 시대가 달라져도 변하지 않는 경영의 본질과 지금 반드시 바꿔야 할 실행 전략을 일곱 개의 축으로 담았습니다.</p><ul><li>사장의 생각과 경영의 중심</li><li>위기와 지속가능성</li><li>현금 흐름·정책자금·사업구조</li><li>시장·마케팅·판매의 원리</li><li>서비스와 고객 신뢰</li><li>직원·리더십·조직관리</li><li>AI·디지털·차세대 경영</li></ul></div>
      </section>

      <section className="consultation section" id="consultation">
        <div className="consultation-heading">
          <p className="kicker">POLICY FUNDING CONSULTATION</p>
          <h2>정책자금 상담 신청</h2>
          <p>기업의 현재 상황과 필요한 지원 내용을 남겨주시면 정책자금·정부지원자금 상담에 필요한 내용을 미리 살펴보고 연락드리겠습니다.</p>
        </div>
        <div className="faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
            <h3 id="faq-title">자주 묻는 질문</h3>
            <p>궁금한 질문을 누르면 답변을 확인할 수 있습니다.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><i aria-hidden="true">+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <ConsultationForm />
      </section>

      <section className="contact section" id="contact">
        <p className="kicker">CONTACT</p><h2>기업의 상황에 맞는<br />지원과 성장의 길을 함께 찾겠습니다.</h2><p>정책자금 · 소상공인 지원 · 정부지원자금 · 경영 강연과 자문</p>
        <div className="contact-links">
          <a href="tel:01062390158"><span>PHONE</span><strong>010-6239-0158</strong><b>통화하기 →</b></a>
          <a href="mailto:ojin0505@naver.com"><span>E-MAIL</span><strong>ojin0505@naver.com</strong><b>메일 보내기 →</b></a>
          <a href="https://blog.naver.com/ojin0505" target="_blank" rel="noreferrer"><span>NAVER BLOG</span><strong>권오진의 현장 기록</strong><b>블로그 방문 →</b></a>
          <a href="https://litt.ly/ojin0158" target="_blank" rel="noreferrer"><span>LITT.LY</span><strong>정부정책자금 문의하기</strong><b>바로가기 →</b></a>
        </div>
      </section>
      <footer><div className="brand"><strong>권오진</strong><span>KWON OH JIN</span></div><p>43년 현장의 지혜로, 정책자금과 기업의 성장을 잇다.</p><small>© 2026 KWON OH JIN. All rights reserved.</small></footer>
    </main>
  );
}
