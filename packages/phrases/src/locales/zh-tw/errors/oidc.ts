const oidc = {
  aborted: '使用者終止了互動。',
  invalid_scope: '無效的範圍: {{error_description}}。',
  invalid_token: 'Token 無效',
  invalid_client_metadata: '無效的用戶端元數據',
  insufficient_scope: 'Token 缺少範圍 `{{scope}}`。',
  invalid_request: '請求無效',
  invalid_grant: '授權請求無效',
  invalid_redirect_uri: '無效返回連結, 该 redirect_uri 未被此應用註冊。',
  access_denied: '拒絕訪問',
  invalid_target: '請求資源無效',
  unsupported_grant_type: '不支援的 grant_type',
  unsupported_response_mode: '不支援的 response_mode',
  unsupported_response_type: '不支援的 response_type',
  provider_error: 'OIDC 內部錯誤: {{message}}',
  server_error: '發生未知的 OIDC 錯誤。請稍後再試。',
  provider_error_fallback: '發生了一個 OIDC 錯誤: {{code}}。',
  key_required: '至少需要一個金鑰。',
  key_not_found: '未找到 ID 為 {{id}} 的金鑰。',
};

export default Object.freeze(oidc);
