"use client";

import { useEffect, useState } from "react";

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzjXrGqZ5bAcWAgXa8iHxQpB1oNojsDqTZv04N9thqS48WWhpkQbybn9C7oK1yX_h32Uw/exec";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSubmitted(params.get("consultation") === "success");
  }, []);

  function resetForm() {
    window.history.replaceState({}, "", "/#consultation");
    setSending(false);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="consultation-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <h3>상담 신청이 완료되었습니다.</h3>
        <p>작성하신 내용이 상담 접수 시트에 안전하게 저장되었습니다.<br />권오진 대표의 네이버 메일로도 전달되며, 확인 후 연락드리겠습니다.</p>
        <button type="button" onClick={resetForm}>추가 신청하기</button>
      </div>
    );
  }

  return (
    <form
      className="consultation-form"
      action={GOOGLE_APPS_SCRIPT_URL}
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={() => setSending(true)}
    >
      <div className="form-grid">
        <label><span>지역</span><input name="지역" autoComplete="address-level1" placeholder="예: 서울" required /></label>
        <label><span>업체명</span><input name="업체명" autoComplete="organization" placeholder="업체명을 입력해 주세요" required /></label>
        <label>
          <span>연매출</span>
          <select name="연매출" defaultValue="" required>
            <option value="" disabled>선택해 주세요</option>
            <option>1억원 미만</option><option>1억~5억원</option><option>5억~10억원</option><option>10억~50억원</option><option>50억원 이상</option>
          </select>
        </label>
        <label><span>대표자명</span><input name="대표자명" autoComplete="name" placeholder="성함을 입력해 주세요" required /></label>
        <label><span>연락처</span><input name="연락처" type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" required /></label>
        <label>
          <span>상담 분야</span>
          <select name="상담 분야" defaultValue="" required>
            <option value="" disabled>선택해 주세요</option>
            <option>정책자금 상담</option><option>소상공인 지원</option><option>정부지원자금</option><option>기업인증</option><option>특허·지식재산 지원</option><option>정부지원사업</option><option>경영자문·강연</option><option>기타 문의</option>
          </select>
        </label>
        <label className="form-wide"><span>문의 내용 <em>선택</em></span><textarea name="문의 내용" rows={5} placeholder="현재 상황과 궁금한 내용을 간단히 적어 주세요" /></label>
      </div>
      <label className="privacy-check"><input type="checkbox" required /><span>상담 접수·연락과 이메일 전송을 위한 개인정보 수집·이용에 동의합니다.</span></label>
      <div className="form-email-destination"><span>상담 접수 네이버 메일</span><a href="mailto:ojin0505@naver.com">ojin0505@naver.com</a></div>
      <button className="consultation-submit" type="submit" disabled={sending}>{sending ? "신청 내용을 보내는 중입니다…" : "정책자금 상담 신청하기"} <span aria-hidden="true">→</span></button>
      <p className="form-note">신청 내용은 상담 접수 시트에 보관되고 권오진 대표의 네이버 메일로 전달됩니다.</p>
    </form>
  );
}
