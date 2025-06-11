// src/constants/AuthData.ts
export const AuthData = {
    translations: {
      ko: {
        // --- 기존 고객가입 관련 번역 ---
        title: "신규 고객",
        namePlaceholder: "이름",
        emailPlaceholder: "이메일",
        passwordPlaceholder: "비밀번호",
        confirmPasswordPlaceholder: "비밀번호 확인",
        phonePlaceholder: "하이픈(-) 제외, 11자리 숫자 입력",
        submitButton: "신청하기",
        hasAccount: "계정이 있으신가요?",
        login: "로그인",
  
        // --- 새로 추가된 점포 등록/관리 번역 ---
        store: {
          title: "점포 등록",
          addButton: "점포 추가",
          namePlaceholder: "점포 이름",
          addressPlaceholder: "점포 주소",
          orderPlaceholder: "정렬 순서",
        },
  
        // 메시지 번역
        messages: {
          userRequired: "모든 사용자 정보를 입력해주세요.",
          storeRequired: "최소 하나 이상의 점포 정보를 입력해주세요.",
          success: "회원신청이 완료되었습니다.",
          failure: "회원신청 중 오류가 발생하였습니다.",
          loading: "처리 중...",
        },
      },
      en: {
        title: "New Customer",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm Password",
        phonePlaceholder: "Enter 11 digits without hyphens",
        submitButton: "Register",
        hasAccount: "Already have an account?",
        login: "Log In",
  
        store: {
          title: "Store Registration",
          addButton: "Add Store",
          namePlaceholder: "Store Name",
          addressPlaceholder: "Store Address",
          orderPlaceholder: "Order",
        },
  
        messages: {
          userRequired: "Please fill out all user information.",
          storeRequired: "Please enter at least one store.",
          success: "Registration completed successfully.",
          failure: "An error occurred during registration.",
          loading: "Processing...",
        },
      },
      ja: {
        title: "新規顧客",
        namePlaceholder: "名前",
        emailPlaceholder: "メールアドレス",
        passwordPlaceholder: "パスワード",
        confirmPasswordPlaceholder: "パスワード確認",
        phonePlaceholder: "ハイフン(-)なしで11桁の数字を入力",
        submitButton: "登録する",
        hasAccount: "すでにアカウントをお持ちですか？",
        login: "ログイン",
  
        store: {
          title: "店舗登録",
          addButton: "店舗追加",
          namePlaceholder: "店舗名",
          addressPlaceholder: "店舗住所",
          orderPlaceholder: "並び順",
        },
  
        messages: {
          userRequired: "すべてのユーザー情報を入力してください。",
          storeRequired: "少なくとも1つの店舗情報を入力してください。",
          success: "会員申し込みが完了しました。",
          failure: "会員申し込み中にエラーが発生しました。",
          loading: "処理中...",
        },
      },
      ch: {
        title: "新客户",
        namePlaceholder: "姓名",
        emailPlaceholder: "电子邮件",
        passwordPlaceholder: "密码",
        confirmPasswordPlaceholder: "确认密码",
        phonePlaceholder: "请输入11位数字，不含连字符",
        submitButton: "注册",
        hasAccount: "已有账号？",
        login: "登录",
  
        store: {
          title: "门店注册",
          addButton: "添加门店",
          namePlaceholder: "门店名称",
          addressPlaceholder: "门店地址",
          orderPlaceholder: "排序顺序",
        },
  
        messages: {
          userRequired: "请填写所有用户信息。",
          storeRequired: "请至少输入一个门店信息。",
          success: "注册成功完成。",
          failure: "注册过程中发生错误。",
          loading: "处理中...",
        },
      },
    },
    passwordRules: {
      ko: {
        minLength: "최소 8자 이상이며, 문자, 숫자, 특수문자를 포함",
        match: "입력 비밀번호와 확인 비밀번호 일치 여부",
      },
      en: {
        minLength: "At least 8 characters with letters, numbers, and symbols",
        match: "Password and confirmation must match",
      },
      ja: {
        minLength: "8文字以上で、文字、数字、記号を含める必要があります",
        match: "パスワードと確認用パスワードが一致しているか",
      },
      ch: {
        minLength: "至少8个字符，包含字母、数字和符号",
        match: "密码与确认密码必须匹配",
      },
    },
  };
  
  export type Lang = keyof typeof AuthData.translations;