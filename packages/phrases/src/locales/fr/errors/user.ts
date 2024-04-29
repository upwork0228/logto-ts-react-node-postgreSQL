const user = {
  username_already_in_use: "Ce nom d'utilisateur est déjà utilisé.",
  email_already_in_use: 'Cet e-mail est associé à un compte existant.',
  phone_already_in_use: 'Ce numéro de téléphone est associé à un compte existant.',
  invalid_email: 'Addresse email incorrecte.',
  invalid_phone: 'Numéro de téléphone incorrect.',
  email_not_exist: "L'adresse e-mail n'a pas encore été enregistrée.",
  phone_not_exist: "Le numéro de téléphone n'a pas encore été enregistré.",
  identity_not_exist: "Le compte social n'a pas encore été enregistré.",
  identity_already_in_use: 'Le compte social a été enregistré.',
  social_account_exists_in_profile: 'Vous avez déjà associé ce compte social.',
  cannot_delete_self: 'Vous ne pouvez pas vous supprimer vous-même.',
  sign_up_method_not_enabled: "Cette méthode d'inscription n'est pas activée.",
  sign_in_method_not_enabled: "Cette méthode de connexion n'est pas activée.",
  same_password: "Le nouveau mot de passe ne peut pas être identique à l'ancien.",
  password_required_in_profile: 'Vous devez définir un mot de passe avant de vous connecter.',
  new_password_required_in_profile: 'Vous devez définir un nouveau mot de passe.',
  password_exists_in_profile: 'Le mot de passe existe déjà dans votre profil.',
  username_required_in_profile: "Vous devez définir un nom d'utilisateur avant de vous connecter.",
  username_exists_in_profile: "Le nom d'utilisateur existe déjà dans votre profil.",
  email_required_in_profile: 'Vous devez ajouter une adresse e-mail avant de vous connecter.',
  email_exists_in_profile: 'Votre profil est déjà associé à une adresse e-mail.',
  phone_required_in_profile: 'Vous devez ajouter un numéro de téléphone avant de vous connecter.',
  phone_exists_in_profile: 'Votre profil est déjà associé à un numéro de téléphone.',
  email_or_phone_required_in_profile:
    'Vous devez ajouter une adresse e-mail ou un numéro de téléphone avant de vous connecter.',
  suspended: 'Ce compte est suspendu.',
  user_not_exist: "L'utilisateur avec {{ identifier }} n'existe pas.",
  missing_profile: 'Vous devez fournir des informations supplémentaires avant de vous connecter.',
  role_exists: "L'ID de rôle {{roleId}} a déjà été ajouté à cet utilisateur",
  invalid_role_type:
    'Le type de rôle est invalide, il est impossible d\'assigner un rôle "machine-to-machine" à un utilisateur.',
  missing_mfa: 'Vous devez lier un MFA supplémentaire avant de vous connecter.',
  totp_already_in_use: 'TOTP est déjà utilisé.',
  backup_code_already_in_use: 'Le code de sauvegarde est déjà utilisé.',
  /** UNTRANSLATED */
  password_algorithm_required: 'Password algorithm is required.',
  /** UNTRANSLATED */
  password_and_digest: 'You cannot set both plain text password and password digest.',
};

export default Object.freeze(user);
