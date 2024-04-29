const role = {
  name_in_use: '此角色名稱 {{name}} 已被使用',
  scope_exists: '作用域 ID {{scopeId}} 已添加到此角色',
  /** UNTRANSLATED */
  management_api_scopes_not_assignable_to_user_role:
    'Cannot assign management API scopes to a user role.',
  user_exists: '用戶 ID {{userId}} 已添加到此角色',
  application_exists: '應用程式 ID {{applicationId}} 已添加到此角色',
  default_role_missing: '某些默認角色名稱在數據庫中不存在，請確保先創建角色',
  internal_role_violation:
    '你可能正在嘗試更新或刪除 Logto 禁止的內部角色。如果你要創建新角色，請嘗試使用不以“#internal:”開頭的名稱。',
};

export default Object.freeze(role);
