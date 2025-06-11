export const ContactData = {
  translations: {
    ko: {
      header: {
        title: "Contact Us",
        description: "문의나 요청이 있으시면 아래 양식을 작성해주세요. 빠른 답변 드리겠습니다.",
      },
      labels: {
        lastName: "성",
        firstName: "이름",
        email: "업무용 이메일",
        message: "문의 내용",
      },
      placeholders: {
        lastName: "성을 입력해 주세요",
        firstName: "이름을 입력해 주세요",
        email: "업무용 이메일을 입력해 주세요",
        message: "문의하실 내용을 남겨주세요",
      },
      button: "제출하기",
      toastMessage: "메일이 전송되었습니다",
    },
    en: {
      header: {
        title: "Contact Us",
        description: "Please fill out the form below for inquiries or requests. We’ll get back to you soon.",
      },
      labels: {
        lastName: "Last Name",
        firstName: "First Name",
        email: "Work Email",
        message: "Message",
      },
      placeholders: {
        lastName: "Enter your last name",
        firstName: "Enter your first name",
        email: "Enter your work email",
        message: "Leave your message here",
      },
      button: "Submit",
      toastMessage: "Email has been sent",
    },
    ja: {
      header: {
        title: "お問い合わせ",
        description: "お問い合わせやご要望がございましたら、以下のフォームにご記入ください。迅速に対応いたします。",
      },
      labels: {
        lastName: "姓",
        firstName: "名",
        email: "業務用メール",
        message: "お問い合わせ内容",
      },
      placeholders: {
        lastName: "姓を入力してください",
        firstName: "名を入力してください",
        email: "業務用メールを入力してください",
        message: "お問い合わせ内容を入力してください",
      },
      button: "送信",
      toastMessage: "メールが送信されました",
    },
    ch: {
      header: {
        title: "联系我们",
        description: "如有咨询或需求，请填写以下表单。我们会尽快回复您。",
      },
      labels: {
        lastName: "姓氏",
        firstName: "名字",
        email: "工作邮箱",
        message: "留言内容",
      },
      placeholders: {
        lastName: "请输入您的姓氏",
        firstName: "请输入您的名字",
        email: "请输入您的工作邮箱",
        message: "请在此留下您的留言",
      },
      button: "提交",
      toastMessage: "邮件已发送",
    },
  } as const,
};
export type Lang = keyof typeof ContactData.translations;
