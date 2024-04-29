const mfa = {
  totp: '身份驗證應用 OTP',
  webauthn: '通行證',
  backup_code: '備份代碼',
  link_totp_description: '例如，Google Authenticator 等。',
  link_webauthn_description: '鏈接您的設備或 USB 硬件',
  link_backup_code_description: '生成備份代碼',
  verify_totp_description: '在應用程序中輸入一次性代碼',
  verify_webauthn_description: '驗證您的設備或 USB 硬件',
  verify_backup_code_description: '粘貼您保存的備份代碼',
  add_mfa_factors: '添加兩步驗證',
  add_mfa_description: '已啟用兩步驗證。選擇第二種驗證方法進行安全登錄。',
  verify_mfa_factors: '兩步驗證',
  verify_mfa_description: '此帳戶已啟用兩步驗證。請選擇第二種驗證身份的方式。',
  add_authenticator_app: '添加身份驗證應用',
  step: '步驟 {{step, number}}: {{content}}',
  scan_qr_code: '掃描此 QR 碼',
  scan_qr_code_description:
    '使用身份驗證應用程序（如 Google Authenticator、Duo Mobile、Authy 等）掃描以下 QR 碼。',
  qr_code_not_available: '無法掃描 QR 碼？',
  copy_and_paste_key: '複製並粘貼密鑰',
  copy_and_paste_key_description:
    '將以下密鑰複製並粘貼到身份驗證應用程序中，如 Google Authenticator、Duo Mobile、Authy 等。',
  want_to_scan_qr_code: '想要掃描 QR 碼嗎？',
  enter_one_time_code: '輸入一次性代碼',
  enter_one_time_code_link_description: '輸入身份驗證應用生成的 6 位驗證碼。',
  enter_one_time_code_description:
    '此帳戶啟用了兩步驗證。請輸入在您關聯的認證應用中顯示的一次性代碼。',
  link_another_mfa_factor: '切換到另一種方法',
  save_backup_code: '保存您的備份代碼',
  save_backup_code_description:
    '如果在其他方式的兩步驗證中遇到問題，您可以使用這些備份代碼之一訪問您的帳戶。每個代碼只能使用一次。',
  backup_code_hint: '確保複製它們並保存在安全的地方。',
  enter_a_backup_code: '輸入備份代碼',
  enter_backup_code_description: '輸入初始啟用兩步驗證時保存的備份代碼。',
  create_a_passkey: '創建通行證',
  create_passkey_description:
    '使用設備生物識別、安全密鑰（例如 YubiKey）或其他可用方法註冊您的通行證。',
  try_another_verification_method: '嘗試其他驗證方法',
  verify_via_passkey: '通過通行證驗證',
  verify_via_passkey_description:
    '使用通行證通過設備密碼或生物識別、掃描 QR 碼或使用 USB 安全密鑰（如 YubiKey）進行驗證。',
  secret_key_copied: '密鑰已複製。',
  backup_code_copied: '備份代碼已複製。',
  webauthn_not_ready: 'WebAuthn 尚未準備就緒。請稍後重試。',
  webauthn_not_supported: '此瀏覽器不支援 WebAuthn。',
  webauthn_failed_to_create: '創建失敗。請重試。',
  webauthn_failed_to_verify: '驗證失敗。請重試。',
};

export default Object.freeze(mfa);
