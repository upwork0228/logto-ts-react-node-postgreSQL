const oidc = {
  aborted: 'End 사용자가 상호 작용을 중단했어요.',
  invalid_scope: '허용되지 않은 범위: {{error_description}}.',
  invalid_token: '유효하지 않은 토큰이 제공되었어요.',
  invalid_client_metadata: '유효하지 않은 클라이언트 메타데이터가 제공되었어요.',
  insufficient_scope: '토큰에 `{{scope}}` 범위가 누락되었어요.',
  invalid_request: '요청이 유효하지 않아요.',
  invalid_grant: '승인 요청이 유효하지 않아요.',
  invalid_redirect_uri: '`redirect_uri`가 등록된 클라이언트의 `redirect_uris`와 일치하지 않아요.',
  access_denied: '접근이 금지되었어요.',
  invalid_target: '유효하지 않은 리소스 표시예요.',
  unsupported_grant_type: '지원하지 않는 `grant_type` 요청이에요.',
  unsupported_response_mode: '지원하지 않는 `response_mode` 요청이에요.',
  unsupported_response_type: '지원하지 않은 `response_type` 요청이에요.',
  provider_error: 'OIDC 내부 오류: {{message}}.',
  server_error: '알 수 없는 OIDC 오류가 발생했어요. 나중에 다시 시도해주세요.',
  provider_error_fallback: 'OIDC 오류가 발생했어요: {{code}}.',
  key_required: '최소한 하나의 키가 필요해요.',
  key_not_found: 'ID가 {{id}}인 키를 찾을 수 없어요.',
};

export default Object.freeze(oidc);
