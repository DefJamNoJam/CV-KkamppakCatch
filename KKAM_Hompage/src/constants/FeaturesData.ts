export const FeaturesData = {
  translations: {
    ko: {
      sectionTitle: "깜빡Catch만의 합리적인 요금",
      plans: [
        {
          title: "기본 플랜",
          price: "월 5,900원",
          features: [
            "기본 공간 분석 기능",
            "이메일 지원",
            "월간 리포트 제공",
          ],
        },
        {
          title: "프리미엄 플랜",
          price: "월 9,900원",
          features: [
            "실시간 고객 행동 분석",
            "24/7 우선 지원",
            "맞춤형 대시보드",
          ],
        },
        {
          title: "프로 플랜",
          price: "월 19,900원",
          features: [
            "고급 분석 보고서",
            "우선 전화 지원",
            "API 액세스",
          ],
        },
        {
          title: "엔터프라이즈 플랜",
          price: "월 49,000원",
          features: [
            "무제한 사용자",
            "전담 고객 매니저",
            "맞춤형 통합",
          ],
        },
      ],
      button: "신청하기",
    },
    en: {
      sectionTitle: "깜빡Catch Reasonable Pricing",
      plans: [
        {
          title: "Basic Plan",
          price: "$5.90 / mo",
          features: [
            "Basic spatial analysis",
            "Email support",
            "Monthly report",
          ],
        },
        {
          title: "Premium Plan",
          price: "$9.90 / mo",
          features: [
            "Real-time behavior analytics",
            "24/7 priority support",
            "Custom dashboard",
          ],
        },
        {
          title: "Pro Plan",
          price: "$19.90 / mo",
          features: [
            "Advanced analytics reports",
            "Priority phone support",
            "API access",
          ],
        },
        {
          title: "Enterprise Plan",
          price: "$49.00 / mo",
          features: [
            "Unlimited users",
            "Dedicated account manager",
            "Custom integrations",
          ],
        },
      ],
      button: "Subscribe",
    },
    ja: {
      sectionTitle: "깜빡Catchだけのお得な料金",
      plans: [
        {
          title: "基本プラン",
          price: "月額 ¥590",
          features: [
            "基本空間分析機能",
            "メールサポート",
            "月次レポート提供",
          ],
        },
        {
          title: "プレミアムプラン",
          price: "月額 ¥990",
          features: [
            "リアルタイム顧客行動分析",
            "24/7優先サポート",
            "カスタムダッシュボード",
          ],
        },
        {
          title: "プロプラン",
          price: "月額 ¥1,990",
          features: [
            "高度な分析レポート",
            "優先電話サポート",
            "APIアクセス",
          ],
        },
        {
          title: "エンタープライズプラン",
          price: "月額 ¥4,900",
          features: [
            "無制限ユーザー",
            "専任アカウントマネージャー",
            "カスタム統合",
          ],
        },
      ],
      button: "登録する",
    },
    ch: {
      sectionTitle: "깜빡Catch的合理定价",
      plans: [
        {
          title: "基础版",
          price: "30元 / 月",
          features: [
            "基础空间分析功能",
            "电子邮件支持",
            "月度报告",
          ],
        },
        {
          title: "高级版",
          price: "50元 / 月",
          features: [
            "实时行为分析",
            "24/7 优先支持",
            "自定义仪表板",
          ],
        },
        {
          title: "专业版",
          price: "100元 / 月",
          features: [
            "高级分析报告",
            "优先电话支持",
            "API 访问",
          ],
        },
        {
          title: "企业版",
          price: "250元 / 月",
          features: [
            "无限用户",
            "专职客户经理",
            "自定义集成",
          ],
        },
      ],
      button: "订阅",
    },
  },
} as const;

export type Lang = keyof typeof FeaturesData.translations;
