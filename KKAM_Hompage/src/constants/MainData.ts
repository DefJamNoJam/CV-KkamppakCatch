export const MainData = {
  translations: {
    ko: {
      top:    "안전성과 신뢰성을 갖춘",
      title:  "깜빡Catch",
      bottom: "무인 매장 관리에 최고의 솔루션",
      button: "문의하기",
    },
    en: {
      top:    "Secure and reliable",
      title:  "깜빡Catch",
      bottom: "The best solution for unmanned store management",
      button: "Contact us",
    },
    ja: {
      top:    "安全性と信頼性を兼ね備えた",
      title:  "깜빡Catch",
      bottom: "無人店舗管理に最適なソリューション",
      button: "お問い合わせ",
    },
    ch: {
      top:    "安全可靠",
      title:  "깜빡Catch",
      bottom: "无人商店管理的最佳解决方案",
      button: "联系我们",
    },
  }
} as const;

export type Lang = keyof typeof MainData.translations;
