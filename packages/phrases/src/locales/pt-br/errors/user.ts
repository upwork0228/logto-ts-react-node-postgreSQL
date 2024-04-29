const user = {
  username_already_in_use: 'Este nome de usuário já está em uso.',
  email_already_in_use: 'Este e-mail está associado a uma conta existente.',
  phone_already_in_use: 'Este número de telefone está associado a uma conta existente.',
  invalid_email: 'Endereço de e-mail inválido.',
  invalid_phone: 'Número de telefone inválido.',
  email_not_exist: 'O endereço de e-mail ainda não foi registrado.',
  phone_not_exist: 'O número de telefone ainda não foi registrado.',
  identity_not_exist: 'A conta social ainda não foi registrada.',
  identity_already_in_use: 'A conta social foi associada a uma conta existente.',
  social_account_exists_in_profile: 'A conta social já está associada ao seu perfil.',
  cannot_delete_self: 'Você não pode excluir a si mesmo.',
  sign_up_method_not_enabled: 'Este método de inscrição não está ativado',
  sign_in_method_not_enabled: 'Este método de login não está habilitado.',
  same_password: 'A nova senha não pode ser igual à senha antiga.',
  password_required_in_profile: 'Você precisa definir uma senha antes de entrar.',
  new_password_required_in_profile: 'Você precisa definir uma nova senha.',
  password_exists_in_profile: 'A senha já existe em seu perfil.',
  username_required_in_profile: 'Você precisa definir um nome de usuário antes de entrar.',
  username_exists_in_profile: 'O nome de usuário já existe em seu perfil.',
  email_required_in_profile: 'Você precisa adicionar um endereço de e-mail antes de fazer login.',
  email_exists_in_profile: 'Seu perfil já foi associado a um endereço de e-mail.',
  phone_required_in_profile: 'Você precisa adicionar um número de telefone antes de fazer login.',
  phone_exists_in_profile: 'Seu perfil já foi associado a um número de telefone.',
  email_or_phone_required_in_profile:
    'Você precisa adicionar um endereço de e-mail ou número de telefone antes de fazer login.',
  suspended: 'Esta conta está suspensa.',
  user_not_exist: 'O usuário com {{ identifier }} não existe',
  missing_profile: 'Você precisa fornecer informações adicionais antes de fazer login.',
  role_exists: 'O id da função {{roleId}} já foi adicionado a este usuário',
  invalid_role_type:
    'Tipo de função inválido, não é possível atribuir uma função máquina a usuário.',
  missing_mfa: 'Você precisa vincular MFA adicional antes de fazer login.',
  totp_already_in_use: 'TOTP já está em uso.',
  backup_code_already_in_use: 'O código de backup já está em uso.',
  /** UNTRANSLATED */
  password_algorithm_required: 'Password algorithm is required.',
  /** UNTRANSLATED */
  password_and_digest: 'You cannot set both plain text password and password digest.',
};

export default Object.freeze(user);
