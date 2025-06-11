export const NaviData = {
  translations: {
    ko: {
      service:  "서비스 안내",
      solution: "솔루션",
      product:  "제품 소개",
      features:  "요금 안내",
      apply:    "서비스 신청",
    },
    en: {
      service:  "Service Info",
      solution: "Solution",
      product:  "Product",
      features:  "Features Info",
      apply:    "Apply",
    },
    ja: {
      service:  "サービス案内",
      solution: "ソリューション",
      product:  "製品紹介",
      features:  "料金案内",
      apply:    "お申込み",
    },
    ch: {
      service:  "服务指南",
      solution: "解决方案",
      product:  "产品介绍",
      features:  "资费说明",
      apply:    "申请服务",
    },
  },
  languageOptions: [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
    { code: "ch", label: "中文" },
  ],
} as const;

export type Lang = keyof typeof NaviData.translations; 
