export const ChoiceData = {
  translations: {
    ko: {
      title: "무인 매장 관리 최고의 선택\n깜빡Catch입니다.",
      newCustomer: "처음 이용 고객",
      existingCustomer: "기존 이용 고객",
    },
    en: {
      title: "The Best Choice for Unmanned Store Management\nIt's 깜빡Catch!",
      newCustomer: "New",
      existingCustomer: "Existing",
    },
    ja: {
      title: "無人店舗管理の最適な選択\n깜빡Catchです！",
      newCustomer: "新規のお客様",
      existingCustomer: "既存のお客様",
    },
    ch: {
      title: "无人商店管理的最佳选择\n就是 깜빡Catch！",
      newCustomer: "新客户",
      existingCustomer: "现有客户",
    },
  } as const,
};

export type Lang = keyof typeof ChoiceData.translations;
