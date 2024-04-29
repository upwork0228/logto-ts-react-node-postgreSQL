const applications = {
  page_title: '全部应用',
  title: '全部应用',
  subtitle: '创建一个移动、单页、machine-to-machine 或传统 web 应用程序，并通过 Logto 进行身份验证',
  subtitle_with_app_type: '为你的 {{name}} 应用程序设置 Logto 身份验证',
  create: '创建应用',
  /** UNTRANSLATED */
  create_subtitle_third_party:
    'Use Logto as your identity provider (IdP) to easily integrate with third-party applications',
  application_name: '应用名称',
  application_name_placeholder: '我的应用',
  application_description: '应用描述',
  application_description_placeholder: '请输入应用描述',
  select_application_type: '选择应用类型',
  no_application_type_selected: '你还没有选择应用类型',
  application_created: '创建应用成功。',
  tab: {
    /** UNTRANSLATED */
    my_applications: 'My apps',
    /** UNTRANSLATED */
    third_party_applications: 'Third-party apps',
  },
  app_id: 'App ID',
  type: {
    native: {
      title: '原生应用',
      subtitle: '在原生环境中运行的应用程序',
      description: '例如 iOS app，Android app',
    },
    spa: {
      title: '单页应用',
      subtitle: '在浏览器中运行并动态更新数据的应用程序',
      description: '例如 React DOM app，Vue app',
    },
    traditional: {
      title: '传统网页应用',
      subtitle: '仅由 Web 服务器渲染和更新的应用程序',
      description: '例如 Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Machine-to-Machine',
      subtitle: '直接与资源对话的应用程序（通常是服务）',
      description: '例如，后端服务',
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
  placeholder_title: '选择应用程序类型以继续',
  placeholder_description:
    'Logto 使用 OIDC 的应用程序实体来帮助识别你的应用程序、管理登录和创建审计日志等任务。',
};

export default Object.freeze(applications);
