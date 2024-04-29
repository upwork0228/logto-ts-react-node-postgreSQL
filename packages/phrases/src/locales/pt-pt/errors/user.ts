const user = {
  username_already_in_use: 'Este nome de utilizador já está em uso.',
  email_already_in_use: 'Este email já está associado a uma conta existente.',
  phone_already_in_use: 'Este número de telefone já está associado a uma conta existente.',
  invalid_email: 'Endereço de email inválido.',
  invalid_phone: 'Número de telefone inválido.',
  email_not_exist: 'O endereço de email ainda não foi registado.',
  phone_not_exist: 'O número de telefone ainda não foi registado.',
  identity_not_exist: 'A conta social ainda não foi registada.',
  identity_already_in_use: 'A conta social foi registada.',
  social_account_exists_in_profile: 'A conta social já foi associada a este perfil.',
  cannot_delete_self: 'Não se pode remover a si mesmo.',
  sign_up_method_not_enabled: 'Este método de registo não está ativo.',
  sign_in_method_not_enabled: 'Este método de início de sessão não está ativo.',
  same_password: 'A nova palavra-passe não pode ser igual à antiga.',
  password_required_in_profile: 'Precisa de definir uma palavra-passe antes de iniciar sessão.',
  new_password_required_in_profile: 'Precisa de definir uma nova palavra-passe.',
  password_exists_in_profile: 'A palavra-passe já existe no seu perfil.',
  username_required_in_profile: 'Precisa de definir um nome de utilizador antes de iniciar sessão.',
  username_exists_in_profile: 'O nome de utilizador já existe no seu perfil.',
  email_required_in_profile: 'Precisa de adicionar um endereço de email antes de iniciar sessão.',
  email_exists_in_profile: 'O seu perfil já está associado a um endereço de email.',
  phone_required_in_profile: 'Precisa de adicionar um número de telefone antes de iniciar sessão.',
  phone_exists_in_profile: 'O seu perfil já está associado a um número de telefone.',
  email_or_phone_required_in_profile:
    'Precisa de adicionar um endereço de email ou um número de telefone antes de iniciar sessão.',
  suspended: 'Esta conta está suspensa.',
  user_not_exist: 'O utilizador com {{ identifier }} não existe.',
  missing_profile: 'Precisa de fornecer informações adicionais antes de iniciar sessão.',
  role_exists: 'O id da função {{roleId}} já foi adicionado a este utilizador.',
  invalid_role_type:
    'Tipo de função inválido, não é possível atribuir uma função máquina a máquina ao utilizador.',
  missing_mfa: 'You need to bind additional MFA before signing-in.',
  totp_already_in_use: 'TOTP is already in use.',
  backup_code_already_in_use: 'Backup code is already in use.',
  /** UNTRANSLATED */
  password_algorithm_required: 'Password algorithm is required.',
  /** UNTRANSLATED */
  password_and_digest: 'You cannot set both plain text password and password digest.',
};

export default Object.freeze(user);
