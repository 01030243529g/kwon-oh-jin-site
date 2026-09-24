import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KWON OH-YOUN | Private Preview",
  description: "권오윤 교수 개인 홈페이지 생일 선물용 비공개 미리보기",
  robots: { index: false, follow: false, noarchive: true },
};

const books = [
  ["저서","2023","운동손상 분석과 관리를 위한 KEMA 접근법 총론","https://www.yes24.com/product/goods/116918577"],
  ["공저","2022","운동손상 분석과 관리를 위한 KEMA 접근법 I","https://www.yes24.com/product/goods/108890375"],
  ["공저","2022","운동손상 분석과 관리를 위한 KEMA 접근법 II","https://www.yes24.com/product/goods/110220414"],
  ["역서","2026","만성 근골격계 통증 관리를 위한 신체 재학습","https://www.yes24.com/product/goods/176073064"],
  ["역서","2022","운동손상 증후군의 진단과 치료","https://product.kyobobook.co.kr/detail/S000061584788"],
  ["역서","2011","팔다리, 목뼈와 등뼈의 운동계 손상 증후군","https://www.yes24.com/product/goods/5641818"],
  ["역서","2013","운동역학조절","https://www.yes24.com/product/goods/11367903"],
  ["역서","2012","기능해부학","https://www.yes24.com/product/goods/7413184"],
];

const research = [
  ["Movement Impairment Syndrome","운동손상증후군의 진단과 관리"],
  ["Posture & Motion Analysis","자세와 동작의 정밀 분석"],
  ["Kinesiopathology","움직임과 병리의 상호작용 연구"],
  ["Work-related MSD","작업 관련 근골격계 질환 예방·관리"],
  ["Movement Therapy","개인별 움직임 기반 치료와 운동"],
];

export default function OhYounPreview() {
  return (
    <main style={{background:"#fcfbf8",color:"#18242c",minHeight:"100vh",fontFamily:"Pretendard, Noto Sans KR, Apple SD Gothic Neo, sans-serif"}}>
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0}
        .oy-wrap{width:min(1160px,calc(100% - 40px));margin:auto}
        .oy-nav{position:sticky;top:0;z-index:20;background:rgba(252,251,248,.94);backdrop-filter:blur(12px);border-bottom:1px solid #dedbd3}
        .oy-navin{height:72px;display:flex;align-items:center;justify-content:space-between}
        .oy-brand{font-family:Georgia,serif;font-weight:700;letter-spacing:.12em;color:#173246}
        .oy-links{display:flex;gap:24px;font-size:12px;color:#68737a}
        .oy-links a,.oy-btn,.oy-book a,.oy-links2 a{text-decoration:none;color:inherit}
        .oy-private{background:#efe8d7;border-bottom:1px solid #ded3b8;color:#756749;font-size:12px;padding:12px 0}
        .oy-hero{padding:68px 0 72px}
        .oy-herogrid{display:grid;grid-template-columns:1.05fr .95fr;gap:68px;align-items:center}
        .oy-eye{font-size:12px;letter-spacing:.18em;color:#607f90;font-weight:800;text-transform:uppercase}
        .oy-hero h1{font-family:Georgia,serif;font-size:clamp(56px,7vw,88px);line-height:.96;margin:15px 0;color:#173246;letter-spacing:-.04em}
        .oy-role{color:#6f7980;font-size:15px}
        .oy-hero h2{font-size:clamp(30px,4vw,48px);line-height:1.25;margin:42px 0 16px}
        .oy-hero p{max-width:650px;color:#657079;line-height:1.8}
        .oy-btn{display:inline-block;margin-top:22px;background:#173246;color:white!important;padding:12px 18px;border-radius:999px;font-size:12px;font-weight:700}
        .oy-photoBox{position:relative}
        .oy-photoBox:before{content:"";position:absolute;inset:8% -7% -7% 14%;background:linear-gradient(145deg,#dfe9ed,#efe9dd);border-radius:40px}
        .oy-photo{position:relative;width:100%;aspect-ratio:4/5;object-fit:cover;object-position:center top;border-radius:34px;box-shadow:0 26px 70px rgba(23,50,70,.16);background:#e9eef0}
        .oy-section{padding:92px 0}.oy-soft{background:#f7f4ed}
        .oy-head{display:grid;grid-template-columns:.28fr .72fr;gap:40px;margin-bottom:42px}
        .oy-kicker{font-size:11px;letter-spacing:.17em;color:#607f90;font-weight:800;text-transform:uppercase}
        .oy-head h2{font-size:clamp(32px,4vw,48px);line-height:1.18;color:#173246;margin:0}
        .oy-head p{color:#6c767e;line-height:1.75}
        .oy-grid5{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
        .oy-card{background:white;border:1px solid #dedbd3;border-radius:20px;padding:24px;min-height:205px}
        .oy-card small{color:#b59a63;font-weight:800}.oy-card h3{font-size:16px;color:#173246;line-height:1.4}.oy-card p{font-size:12px;color:#7a838a}
        .oy-kema{background:linear-gradient(135deg,#173246,#28576f);border-radius:32px;color:white;padding:48px}
        .oy-kema h2{font-family:Georgia,serif;font-size:50px;line-height:1.05;margin:7px 0 16px}.oy-kema p{color:rgba(255,255,255,.72)}
        .oy-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:28px}.oy-step{border:1px solid rgba(255,255,255,.2);border-radius:18px;padding:20px;background:rgba(255,255,255,.05)}
        .oy-step small{color:#d8c78e}.oy-step b{display:block;margin:5px 0}
        .oy-books{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .oy-book{background:white;border:1px solid #dedbd3;border-radius:18px;padding:21px;min-height:200px;display:flex;flex-direction:column}
        .oy-booktop{display:flex;justify-content:space-between;color:#8c816b;font-size:10px}.oy-book h3{color:#173246;font-size:15px;line-height:1.45;margin:18px 0 8px}.oy-book a{margin-top:auto;color:#607f90;font-size:11px;font-weight:800}
        .oy-career{border-left:1px solid #dedbd3;margin-left:8px}.oy-t{position:relative;padding:0 0 28px 30px}.oy-t:before{content:"";position:absolute;left:-6px;top:8px;width:11px;height:11px;border-radius:50%;background:#b59a63}.oy-t small{color:#607f90;font-weight:800}.oy-t h3{margin:4px 0;color:#173246}.oy-t p{font-size:13px;color:#717b83;margin:0}
        .oy-contact{background:#173246;color:white;border-radius:30px;padding:46px}.oy-contact h2{font-family:Georgia,serif;font-size:42px;line-height:1.1}.oy-contact p{color:rgba(255,255,255,.7)}.oy-links2 a{display:inline-block;border:1px solid rgba(255,255,255,.28);padding:10px 14px;border-radius:999px;margin:8px 8px 0 0;font-size:11px}
        .oy-foot{padding:30px 0 48px;color:#8a9298;font-size:11px}
        @media(max-width:900px){.oy-herogrid,.oy-head{grid-template-columns:1fr}.oy-grid5{grid-template-columns:repeat(2,1fr)}.oy-books{grid-template-columns:repeat(2,1fr)}.oy-steps{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.oy-links{display:none}.oy-hero{padding-top:40px}.oy-grid5,.oy-books,.oy-steps{grid-template-columns:1fr}.oy-kema{padding:30px 22px}}
      `}</style>

      <nav className="oy-nav"><div className="oy-wrap oy-navin"><a className="oy-brand" href="#top">KWON OH-YOUN</a><div className="oy-links"><a href="#about">ABOUT</a><a href="#research">RESEARCH</a><a href="#kema">KEMA</a><a href="#books">BOOKS</a><a href="#career">CAREER</a></div></div></nav>
      <div className="oy-private"><div className="oy-wrap"><b>PRIVATE PREVIEW</b> · 생일 선물용 검토 시안 · 검색엔진 비노출 설정</div></div>

      <section id="top" className="oy-hero"><div className="oy-wrap oy-herogrid">
        <div><div className="oy-eye">Movement Science · Physical Therapy</div><h1>KWON<br/>OH-YOUN</h1><div className="oy-role">Professor · Department of Physical Therapy · Yonsei University</div>
        <h2>움직임을 이해하면<br/>통증의 원인이 보입니다.</h2><p>사람의 자세와 움직임을 과학적으로 분석하고, 근골격계 통증의 원인을 찾아 더 나은 움직임과 건강을 위한 방법을 연구합니다.</p><a className="oy-btn" href="#research">Research & KEMA</a></div>
        <div className="oy-photoBox"><img className="oy-photo" src="https://yspt.yonsei.ac.kr/_res/yspt/img/graduate/img-lab01.gif" alt="권오윤 교수"/></div>
      </div></section>

      <section id="about" className="oy-section"><div className="oy-wrap"><div className="oy-head"><div className="oy-kicker">About</div><div><h2>연구에서 현장까지,<br/>움직임을 중심에 둔 물리치료학자</h2><p>임상 현장에서 시작해 대학 연구와 교육, 산업체 근골격계 관리로 연구의 범위를 넓혀 왔습니다. 이 페이지는 본인 검토 전 선물용 프리뷰입니다.</p></div></div></div></section>

      <section id="research" className="oy-section oy-soft"><div className="oy-wrap"><div className="oy-head"><div className="oy-kicker">Research</div><div><h2>움직임의 문제를 분석하고,<br/>기전과 해법을 연결합니다.</h2></div></div><div className="oy-grid5">{research.map((r,i)=><article className="oy-card" key={r[0]}><small>0{i+1}</small><h3>{r[0]}</h3><p>{r[1]}</p></article>)}</div></div></section>

      <section id="kema" className="oy-section"><div className="oy-wrap"><div className="oy-kema"><div className="oy-kicker" style={{color:"#d8c78e"}}>KEMA</div><h2>From Analysis<br/>to Movement</h2><p>개인의 움직임과 자세를 인간공학적·생체역학적으로 분석해 문제를 찾고, 개인에게 필요한 맞춤형 운동과 관리 전략을 제시하는 접근입니다.</p><div className="oy-steps"><div className="oy-step"><small>STEP 01</small><b>Observe</b>자세와 동작 관찰</div><div className="oy-step"><small>STEP 02</small><b>Analyze</b>생체역학적 분석</div><div className="oy-step"><small>STEP 03</small><b>Classify</b>문제 패턴 분류</div><div className="oy-step"><small>STEP 04</small><b>Intervene</b>맞춤형 운동 적용</div></div></div></div></section>

      <section id="books" className="oy-section oy-soft"><div className="oy-wrap"><div className="oy-head"><div className="oy-kicker">Books</div><div><h2>연구와 교육을<br/>책으로 연결합니다.</h2><p>대표 저서·공저·역서를 한곳에 모으고 각 도서의 구매·도서정보 페이지로 연결했습니다.</p></div></div><div className="oy-books">{books.map(b=><article className="oy-book" key={b[2]}><div className="oy-booktop"><span>{b[0]}</span><b>{b[1]}</b></div><h3>{b[2]}</h3><a href={b[3]} target="_blank" rel="noopener noreferrer">구매·도서정보 ↗</a></article>)}</div></div></section>

      <section id="career" className="oy-section"><div className="oy-wrap"><div className="oy-head"><div className="oy-kicker">Career</div><div><h2>임상에서 연구로,<br/>연구에서 교육과 현장으로.</h2><p>세부 연도와 직함은 교수님 본인 검토 후 최종 공개본에서 확정합니다.</p></div></div><div className="oy-career">
      <div className="oy-t"><small>EDUCATION</small><h3>연세대학교 · 보건·재활 분야 학업</h3><p>물리치료와 보건학 연구의 기반 형성</p></div>
      <div className="oy-t"><small>CLINICAL</small><h3>연세대학교 세브란스병원 재활 분야 근무</h3><p>임상 경험을 연구와 교육으로 연결</p></div>
      <div className="oy-t"><small>INTERNATIONAL</small><h3>Washington University 연구 경력</h3><p>Movement Science 분야의 국제 연구 경험</p></div>
      <div className="oy-t"><small>CURRENT</small><h3>연세대학교 물리치료학과 교수</h3><p>KEMA와 근골격계 움직임 연구·교육 지속</p></div>
      </div></div></section>

      <section className="oy-section"><div className="oy-wrap"><div className="oy-contact"><div className="oy-kicker" style={{color:"#d8c78e"}}>Official Links</div><h2>Movement Science<br/>for Better Living.</h2><p>현재는 공개된 대학·연구 관련 공식 정보만 연결합니다.</p><div className="oy-links2"><a href="https://ee.yonsei.ac.kr/faculty/depMember.do?campus=wonju&mode=view&userId=qx2xjbh9dYqv91W8lb2D7w%3D%3D" target="_blank" rel="noopener noreferrer">Yonsei Faculty Profile ↗</a><a href="https://yspt.yonsei.ac.kr/yspt_n/graduates/lab.do" target="_blank" rel="noopener noreferrer">KEMA Lab ↗</a></div></div></div></section>

      <footer className="oy-foot"><div className="oy-wrap"><b>KWON OH-YOUN · PRIVATE PREVIEW</b><br/>본인 검토 전 검색엔진 전체 공개하지 않음</div></footer>
    </main>
  );
}
