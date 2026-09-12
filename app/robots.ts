import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site/sitemap.xml",
    host: "https://kwon-oh-jin-profile.cool-hinny-5610.chatgpt.site",
  };
}
