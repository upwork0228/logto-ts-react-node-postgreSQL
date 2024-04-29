const organizations = {
  organization: 'Организация',
  page_title: 'Организации',
  title: 'Организации',
  /** UNTRANSLATED */
  subtitle:
    'Organizations are usually used in SaaS or similar multi-tenant apps and represent your clients which are teams, organizations, or entire companies. Organizations work as a foundational element for B2B authentication and authorization.',
  organization_template: 'Шаблон организации',
  organization_id: 'Идентификатор организации',
  members: 'Участники',
  create_organization: 'Создать организацию',
  setup_organization: 'Настройка вашей организации',
  organization_list_placeholder_title: 'Организация',
  /** UNTRANSLATED */
  organization_list_placeholder_text:
    'Organizations are often used in SaaS or similar multi-tenant apps as a best practice. They enable you to develop apps that allow clients to create and manage organizations, invite members, and assign roles.',
  organization_name_placeholder: 'Моя организация',
  organization_description_placeholder: 'Краткое описание организации',
  organization_permission: 'Разрешение организации',
  organization_permission_other: 'Разрешения организации',
  organization_permission_description:
    'Разрешение организации относится к разрешению доступа к ресурсу в контексте организации. Разрешение организации должно быть представлено в виде осмысленной строки и также служить именем и уникальным идентификатором.',
  organization_permission_delete_confirm:
    'Если это разрешение будет удалено, все роли организации, включая это разрешение, потеряют это разрешение, и пользователи, у которых было это разрешение, потеряют предоставленный им доступ к нему.',
  create_permission_placeholder: 'Чтение истории назначений',
  permission: 'Разрешение',
  permission_other: 'Разрешения',
  organization_role: 'Роль организации',
  organization_role_other: 'Роли организации',
  organization_role_description:
    'Роль организации - это группировка разрешений, которые могут быть назначены пользователям. Разрешения должны быть взяты из предопределенных разрешений организации.',
  organization_role_delete_confirm:
    'При этом будут удалены разрешения, связанные с этой ролью, у затронутых пользователей, и будут удалены отношения между ролями организации, участниками в организации и разрешениями организации.',
  role: 'Роль',
  create_role_placeholder: 'Пользователи с правами только для просмотра',
  search_placeholder: 'Поиск по названию организации или ID',
  search_permission_placeholder: 'Начните вводить для поиска и выбора разрешений',
  search_role_placeholder: 'Начните вводить для поиска и выбора ролей',
  empty_placeholder: '🤔 У вас пока нет никаких {{entity}}.',
  organization_and_member: 'Организация и участник',
  organization_and_member_description:
    'Организация - это группа пользователей, представляющая команды, деловых клиентов и партнерские компании, причем каждый пользователь является "Участником". Эти сущности могут быть фундаментальными для удовлетворения ваших требований мультиаренды.',
  guide: {
    title: 'Начать с руководств',
    subtitle: 'Начните настройку вашей организации с наших руководств',
    introduction: {
      title: 'Давайте разберем, как устроена организация в Logto',
      section_1: {
        title: 'Организация - это группа пользователей (идентификаторов)',
      },
      section_2: {
        title: 'Шаблон организации предназначен для контроля доступа мультиарендных приложений',
        description:
          'В мультиарендных SaaS-приложениях несколько организаций часто разделяют один и тот же шаблон контроля доступа, включая разрешения и роли. В Logto мы называем это "шаблон организации".',
        permission_description:
          'Разрешение организации относится к авторизации доступа к ресурсу в контексте организации.',
        role_description_deprecated:
          'Роль организации - это группировка разрешений организации, которые могут быть назначены участникам.',
        role_description:
          'Роль организации представляет собой группировку организационных разрешений или разрешений API, которые могут быть назначены членам.',
      },
      section_3: {
        title: 'Могу ли я назначить разрешения API организационным ролям?',
        description:
          'Да, вы можете назначить разрешения API организационным ролям. Logto предоставляет гибкость в управлении ролями вашей организации, позволяя включать в эти роли как организационные, так и разрешения API.',
      },
      section_4: {
        title: 'Взаимодействие с иллюстрацией для просмотра связей',
        description:
          'Давайте рассмотрим пример. Джон и Сара находятся в разных организациях с разными ролями в контексте разных организаций. Наведите указатель на различные модули и посмотрите, что происходит.',
      },
    },
    step_1: 'Шаг 1: Определите разрешения организаций',
    step_2: 'Шаг 2: Определите роли организаций',
    step_3: 'Шаг 3: Создайте свою первую организацию',
    step_3_description:
      'Давайте создадим вашу первую организацию. Она имеет уникальный идентификатор и служит контейнером для обработки различных бизнес-ориентированных идентификаторов.',
    more_next_steps: 'Дополнительные следующие шаги',
    add_members: 'Добавьте участников в вашу организацию',
    /** UNTRANSLATED */
    config_organization: 'Configure organization',
    organization_permissions: 'Разрешения организации',
    permission_name: 'Название разрешения',
    permissions: 'Разрешения',
    organization_roles: 'Роли организации',
    role_name: 'Название роли',
    organization_name: 'Название организации',
    admin: 'Администратор',
    member: 'Участник',
    guest: 'Гость',
    role_description:
      'Роль "{{role}}" использует один и тот же шаблон организации для различных организаций.',
    john: 'Джон',
    john_tip:
      'Джон принадлежит двум организациям с адресом электронной почты "john@email.com" в качестве единственного идентификатора. Он является администратором организации A, а также гостем организации B.',
    sarah: 'Сара',
    sarah_tip:
      'Сара принадлежит одной организации с адресом электронной почты "sarah@email.com" в качестве единственного идентификатора. Она является администратором организации B.',
  },
};

export default Object.freeze(organizations);
