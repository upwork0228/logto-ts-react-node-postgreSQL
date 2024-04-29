const auth = {
  authorization_header_missing: 'Отсутствует заголовок авторизации.',
  authorization_token_type_not_supported: 'Тип авторизации не поддерживается.',
  unauthorized: 'Не авторизованы. Пожалуйста, проверьте учетные данные и его область действия.',
  forbidden: 'Запрещено. Пожалуйста, проверьте свои роли и разрешения пользователей.',
  expected_role_not_found:
    'Ожидаемая роль не найдена. Пожалуйста, проверьте свои роли и разрешения пользователей.',
  jwt_sub_missing: 'Отсутствует `sub` в JWT.',
  require_re_authentication:
    'Для выполнения защищенного действия требуется повторная аутентификация.',
};

export default Object.freeze(auth);
