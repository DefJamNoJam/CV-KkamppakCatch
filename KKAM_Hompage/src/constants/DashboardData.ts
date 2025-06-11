export const DashboardData = {
    translations: {
      ko: {
        title: "가게 목록",
        subtitle: "주소를 수정하시면 승인여부는 미승인상태가 됩니다.",
        buttons: {
          logout: "로그아웃",
          save: "저장",
          add: "추가",
          delete: "삭제",
        },
        columns: [
          "선택",
          "상태",
          "가게명",
          "주소",
          "승인 여부",
          "순번",
          "생성일",
          "수정일",
        ],
        states: {
          add: "추가",
          delete: "삭제",
          edit: "수정",
        },
        approval: {
          approved: "승인",
          notApproved: "미승인",
        },
        loading: "로딩 중...",
        noStores: "가게가 없습니다.",
        errors: {
          fetchFailed: "가게 정보를 불러오는데 실패했습니다.",
          saveFailed: "변경사항을 저장하는데 실패했습니다.",
        },
      },
      en: {
        title: "Store List",
        subtitle: "If you modify the address, approval status will change to unapproved.",
        buttons: {
          logout: "Logout",
          save: "Save",
          add: "Add",
          delete: "Delete",
        },
        columns: [
          "Select",
          "Status",
          "Store Name",
          "Address",
          "Approval",
          "Number",
          "Created",
          "Updated",
        ],
        states: {
          add: "Add",
          delete: "Delete",
          edit: "Edit",
        },
        approval: {
          approved: "Approved",
          notApproved: "Not Approved",
        },
        loading: "Loading...",
        noStores: "No stores available.",
        errors: {
          fetchFailed: "Failed to fetch stores",
          saveFailed: "Failed to save changes",
        },
      },
      ja: {
        title: "店舗リスト",
        subtitle: "住所を変更すると、承認状態は未承認になります。",
        buttons: {
          logout: "ログアウト",
          save: "保存",
          add: "追加",
          delete: "削除",
        },
        columns: [
          "選択",
          "状態",
          "店舗名",
          "住所",
          "承認状態",
          "番号",
          "作成日",
          "更新日",
        ],
        states: {
          add: "追加",
          delete: "削除",
          edit: "編集",
        },
        approval: {
          approved: "承認済み",
          notApproved: "未承認",
        },
        loading: "読み込み中...",
        noStores: "店舗がありません。",
        errors: {
          fetchFailed: "店舗情報の取得に失敗しました",
          saveFailed: "変更の保存に失敗しました",
        },
      },
      ch: {
        title: "商店列表",
        subtitle: "修改地址后，审批状态将变为未审批。",
        buttons: {
          logout: "登出",
          save: "保存",
          add: "新增",
          delete: "删除",
        },
        columns: [
          "选择",
          "状态",
          "商店名称",
          "地址",
          "审批状态",
          "编号",
          "创建时间",
          "更新时间",
        ],
        states: {
          add: "新增",
          delete: "删除",
          edit: "编辑",
        },
        approval: {
          approved: "已审批",
          notApproved: "未审批",
        },
        loading: "加载中...",
        noStores: "暂无商店。",
        errors: {
          fetchFailed: "获取商店信息失败",
          saveFailed: "保存更改失败",
        },
      },
    },
  } as const;
  
  export type Lang = keyof typeof DashboardData.translations;
  