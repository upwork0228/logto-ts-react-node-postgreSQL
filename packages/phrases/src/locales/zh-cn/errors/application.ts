const application = {
  invalid_type: '只有机器对机器应用程序可以有关联角色。',
  role_exists: '角色 ID {{roleId}} 已添加到此应用程序。',
  invalid_role_type: '无法将用户类型角色分配给机器对机器应用程序。',
  invalid_third_party_application_type: '只有传统网络应用程序可以标记为第三方应用。',
  third_party_application_only: '该功能仅适用于第三方应用程序。',
  user_consent_scopes_not_found: '无效的用户同意范围。',
  /** UNTRANSLATED */
  consent_management_api_scopes_not_allowed: 'Management API scopes are not allowed.',
  protected_app_metadata_is_required: '需要保护的应用程序元数据。',
  /** UNTRANSLATED */
  protected_app_not_configured:
    'Protected app provider is not configured. This feature is not available for open source version.',
  /** UNTRANSLATED */
  cloudflare_unknown_error: 'Got unknown error when requesting Cloudflare API',
  /** UNTRANSLATED */
  protected_application_only: 'The feature is only available for protected applications.',
  /** UNTRANSLATED */
  protected_application_misconfigured: 'Protected application is misconfigured.',
  /** UNTRANSLATED */
  protected_application_subdomain_exists:
    'The subdomain of Protected application is already in use.',
  /** UNTRANSLATED */
  invalid_subdomain: 'Invalid subdomain.',
  /** UNTRANSLATED */
  custom_domain_not_found: 'Custom domain not found.',
  /** UNTRANSLATED */
  should_delete_custom_domains_first: 'Should delete custom domains first.',
};

export default Object.freeze(application);
