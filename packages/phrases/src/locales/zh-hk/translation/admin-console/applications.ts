const applications = {
  page_title: '全部應用',
  title: '全部應用',
  subtitle: '創建一個移動、單頁、machine-to-machine 或傳統 web 應用程序，並通過 Logto 進行身份驗證',
  subtitle_with_app_type: '為你的 {{name}} 應用程序設置 Logto 身份驗證',
  create: '創建應用',
  /** UNTRANSLATED */
  create_subtitle_third_party:
    'Use Logto as your identity provider (IdP) to easily integrate with third-party applications',
  application_name: '應用名稱',
  application_name_placeholder: '我的應用',
  application_description: '應用描述',
  application_description_placeholder: '請輸入應用描述',
  select_application_type: '選擇應用類型',
  no_application_type_selected: '你還沒有選擇應用類型',
  application_created: '應用創建成功。',
  tab: {
    /** UNTRANSLATED */
    my_applications: 'My apps',
    /** UNTRANSLATED */
    third_party_applications: 'Third-party apps',
  },
  app_id: 'App ID',
  type: {
    native: {
      title: '原生應用',
      subtitle: '在原生環境中運行的應用程序',
      description: '例如 iOS app，Android app',
    },
    spa: {
      title: '單頁應用',
      subtitle: '在瀏覽器中運行並動態更新數據的應用程序',
      description: '例如 React DOM app，Vue app',
    },
    traditional: {
      title: '傳統網頁應用',
      subtitle: '僅由 Web 服務器渲染和更新的應用程序',
      description: '例如 Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Machine-to-Machine',
      subtitle: '直接與資源對話的應用程序（通常是服務）',
      description: '例如，後端服務',
    },
    protected: {
      /** UNTRANSLATED */
      title: 'Protected App',
      /** UNTRANSLATED */
      subtitle: 'An app that is protected by Logto',
      /** UNTRANSLATED */
      description: 'N/A',
    },
    third_party: {
      /** UNTRANSLATED */
      title: 'Third-party App',
      /** UNTRANSLATED */
      subtitle: 'An app that is used as a third-party IdP connector',
      /** UNTRANSLATED */
      description: 'E.g., OIDC, SAML',
    },
  },
  placeholder_title: '選擇應用程序類型以繼續',
  placeholder_description:
    'Logto 使用 OIDC 的應用程序實體來幫助識別您的應用程序、管理登錄和創建審計日誌等任務。',
};

export default Object.freeze(applications);
