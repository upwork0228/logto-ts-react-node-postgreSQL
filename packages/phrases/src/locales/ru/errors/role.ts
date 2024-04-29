const role = {
  name_in_use: 'Это имя роли {{name}} уже используется',
  scope_exists: 'Идентификатор области действия {{scopeId}} уже был добавлен в эту роль',
  /** UNTRANSLATED */
  management_api_scopes_not_assignable_to_user_role:
    'Cannot assign management API scopes to a user role.',
  user_exists: 'Идентификатор пользователя {{userId}} уже был добавлен в эту роль',
  application_exists: 'Идентификатор приложения {{applicationId}} уже был добавлен в эту роль',
  default_role_missing:
    'Некоторые имена ролей по умолчанию отсутствуют в базе данных, пожалуйста, убедитесь в том, что сначала создали роли',
  internal_role_violation:
    'Возможно, вы пытаетесь обновить или удалить внутреннюю роль, что запрещено Logto. Если вы создаете новую роль, попробуйте другое имя, которое не начинается с "#internal:".',
};

export default Object.freeze(role);
