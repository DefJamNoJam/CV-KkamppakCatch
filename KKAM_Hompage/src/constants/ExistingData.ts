export const ExistingData = {
    translations: {
      ko: {
        existingCustomer: "기존 이용 고객",
        emailPlaceholder: "이메일",
        passwordPlaceholder: "비밀번호",
        loginButton: "로그인",
        loading: "로딩 중...",
        invalidCredentials: "이메일 또는 비밀번호가 올바르지 않습니다.",
        unapprovedAccount: "승인되지 않은 계정입니다.",
        genericError: "알 수 없는 오류가 발생했습니다.",
      },
      en: {
        existingCustomer: "Existing Customer",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        loginButton: "Log In",
        loading: "Loading...",
        invalidCredentials: "Email or password is incorrect.",
        unapprovedAccount: "Your account is not approved.",
        genericError: "An unexpected error occurred.",
      },
      ja: {
        existingCustomer: "既存のお客様",
        emailPlaceholder: "メールアドレス",
        passwordPlaceholder: "パスワード",
        loginButton: "ログイン",
        loading: "読み込み中…",
        invalidCredentials: "メールアドレスかパスワードが正しくありません。",
        unapprovedAccount: "承認されていないアカウントです。",
        genericError: "不明なエラーが発生しました。",
      },
      ch: {
        existingCustomer: "现有客户",
        emailPlaceholder: "电子邮件",
        passwordPlaceholder: "密码",
        loginButton: "登录",
        loading: "加载中…",
        invalidCredentials: "电子邮件或密码不正确。",
        unapprovedAccount: "您的帐户尚未获得批准。",
        genericError: "发生了未知错误。",
      },
    } as const,
  };
  export type Lang = keyof typeof ExistingData.translations;
  