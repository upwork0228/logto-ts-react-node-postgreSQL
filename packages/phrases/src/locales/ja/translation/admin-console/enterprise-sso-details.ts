const enterprise_sso_details = {
  back_to_sso_connectors: '企业SSO返回',
  page_title: '企业SSO连接器详情',
  readme_drawer_title: '企业SSO',
  readme_drawer_subtitle: '设置企业SSO连接器以启用终端用户SSO',
  tab_experience: 'SSO体验',
  tab_connection: '连接',
  general_settings_title: '常规',
  custom_branding_title: '显示',
  custom_branding_description:
    '自定义终端用户单点登录流程中显示的名称和标识。如果为空，将使用默认值。',
  email_domain_field_name: '企业邮箱域',
  email_domain_field_description:
    '使用此邮箱域的用户可以使用SSO进行身份验证。请验证该域名属于企业。',
  email_domain_field_placeholder: '邮箱域',
  sync_profile_field_name: '从身份提供商同步配置文件信息',
  sync_profile_option: {
    register_only: '仅在首次登录时同步',
    each_sign_in: '每次登录都同步',
  },
  connector_name_field_name: '连接器名称',
  display_name_field_name: '显示名称',
  connector_logo_field_name: '显示标识',
  connector_logo_field_description: '每张图片应不超过500KB，支持SVG、PNG、JPG、JPEG格式。',
  branding_logo_context: '上传标识',
  branding_logo_error: '上传标识错误: {{error}}',
  branding_light_logo_context: '上传浅色模式标识',
  branding_light_logo_error: '上传浅色模式标识错误: {{error}}',
  branding_logo_field_name: '标识',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: '上传深色模式标识',
  branding_dark_logo_error: '上传深色模式标识错误: {{error}}',
  branding_dark_logo_field_name: '标识（深色模式）',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: '连接指南',
  enterprise_sso_deleted: '企业SSO连接器已成功删除',
  delete_confirm_modal_title: '删除企业SSO连接器',
  delete_confirm_modal_content:
    '您确定要删除此企业连接器吗？来自身份提供商的用户将不会使用单点登录。',
  upload_idp_metadata_title_saml: '上传元数据',
  upload_idp_metadata_description_saml: '配置从身份提供商复制的元数据。',
  upload_idp_metadata_title_oidc: '上传凭证',
  upload_idp_metadata_description_oidc: '配置从身份提供商复制的凭证和OIDC令牌信息。',
  upload_idp_metadata_button_text: '上传元数据XML文件',
  upload_signing_certificate_button_text: '上传签名证书文件',
  configure_domain_field_info_text: '添加邮箱域以引导企业用户到其身份提供商进行单点登录。',
  email_domain_field_required: '要启用企业SSO，需要填写邮箱域。',
  upload_saml_idp_metadata_info_text_url: '粘贴来自身份提供商的元数据URL以连接。',
  upload_saml_idp_metadata_info_text_xml: '粘贴从身份提供商复制的元数据以连接。',
  upload_saml_idp_metadata_info_text_manual: '填写从身份提供商复制的元数据以连接。',
  upload_oidc_idp_info_text: '填写从身份提供商复制的信息以连接。',
  service_provider_property_title: '在身份提供商中配置',
  service_provider_property_description:
    '通过您的身份提供商使用 {{protocol}} 配置一个应用程序集成。 输入Logto提供的详细信息。',
  attribute_mapping_title: '属性映射',
  attribute_mapping_description:
    '通过在身份提供商或Logto端配置用户属性映射，从而同步用户配置文件。',
  saml_preview: {
    sign_on_url: '登录URL',
    entity_id: '发行者',
    x509_certificate: '签名证书',
    certificate_content: '到期于{{date}}',
  },
  oidc_preview: {
    authorization_endpoint: '授权端点',
    token_endpoint: '令牌端点',
    userinfo_endpoint: '用户信息端点',
    jwks_uri: 'JSON网页密钥集端点',
    issuer: '发行者',
  },
};

export default Object.freeze(enterprise_sso_details);
