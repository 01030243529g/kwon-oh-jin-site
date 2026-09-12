# 권오진 경영 인사이트 홍보 묶음

글 원본은 `app/insights/content.ts` 한 곳에서 관리합니다.
새 글을 같은 형식으로 한 개 추가한 뒤 아래 명령을 실행하면 네이버 블로그용 글과 SNS용 짧은 홍보문이 함께 만들어집니다.

```bash
+npm run content:generate
+```

홈페이지 목록, 글별 주소, sitemap.xml과 rss.xml은 같은 원본을 읽기 때문에 새 글이 자동으로 반영됩니다.
