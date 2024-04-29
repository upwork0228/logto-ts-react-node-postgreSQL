const role_details = {
  back_to_roles: 'Назад к Ролям',
  identifier: 'Идентификатор',
  delete_description:
    'Это действие удалит все соответствующие разрешения данной роли у затронутых пользователей и удалит отображение между ролями, пользователями и разрешениями.',
  role_deleted: '{{name}} был успешно удален.',
  general_tab: 'Общие',
  users_tab: 'Пользователи',
  m2m_apps_tab: 'Машинные приложения',
  permissions_tab: 'Разрешения',
  settings: 'Настройки',
  settings_description:
    'Роли - это группировка разрешений, которые могут быть назначены пользователям. Они также обеспечивают способ объединения разрешений, определенных для разных API, что делает более эффективным добавление, удаление или корректировку разрешений по сравнению с назначением их отдельно пользователям.',
  field_name: 'Имя',
  field_description: 'Описание',
  type_m2m_role_tag: 'Роль машинного приложения',
  type_user_role_tag: 'Роль пользователя',
  permission: {
    assign_button: 'Назначить Разрешения',
    assign_title: 'Назначить разрешения',
    assign_subtitle:
      'Назначить разрешения этой роли. Роли будут получать добавленные разрешения, а пользователи с этой ролью будут наследовать эти разрешения.',
    assign_form_field: 'Назначить разрешения',
    added_text_one: '{{count, number}} разрешение добавлено',
    added_text_other: '{{count, number}} разрешений добавлено',
    api_permission_count_one: '{{count, number}} разрешение',
    api_permission_count_other: '{{count, number}} разрешений',
    confirm_assign: 'Назначить Разрешения',
    permission_assigned: 'Выбранные разрешения были успешно назначены этой роли',
    deletion_description:
      'Если это право будет удалено, затронутый пользователь с этой ролью потеряет доступ, предоставленный этим разрешением.',
    permission_deleted: 'Разрешение "{{name}}" было успешно удалено из этой роли',
    empty: 'Нет доступных разрешений',
  },
  users: {
    assign_button: 'Назначить Пользователей',
    name_column: 'Пользователь',
    app_column: 'Приложение',
    latest_sign_in_column: 'Последняя авторизация',
    delete_description:
      'Это действие приведет к потере авторизации на эту роль, но пользователь останется в вашем пуле пользователей.',
    deleted: '{{name}} был успешно удален из этой роли',
    assign_title: 'Назначить пользователей',
    assign_subtitle:
      'Назначить пользователей на эту роль. Найдите подходящих пользователей, используя поиск по имени, электронной почте, номеру телефона или идентификатору пользователя.',
    assign_field: 'Назначить пользователей',
    confirm_assign: 'Назначить пользователей',
    assigned_toast_text: 'The selected users were successfully assigned to this role',
    empty: 'Нет доступных пользователей',
  },
  applications: {
    assign_button: 'Назначить приложения',
    name_column: 'Приложение',
    app_column: 'Приложения',
    description_column: 'Описание',
    delete_description:
      'Оно останется в вашем пуле приложений, но потеряет авторизацию для этой роли.',
    deleted: '{{name}} был успешно удален из этой роли',
    assign_title: 'Назначить приложения',
    assign_subtitle:
      'Назначить приложения на эту роль. Найдите подходящие приложения, используя поиск по имени, описанию или идентификатору приложения.',
    assign_field: 'Назначить приложения',
    confirm_assign: 'Назначить приложения',
    assigned_toast_text: 'The selected applications were successfully assigned to this role',
    empty: 'Нет доступных приложений',
  },
};

export default Object.freeze(role_details);
