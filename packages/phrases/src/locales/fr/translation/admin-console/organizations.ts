const organizations = {
  organization: 'Organisation',
  page_title: 'Organisations',
  title: 'Organisations',
  /** UNTRANSLATED */
  subtitle:
    'Organizations are usually used in SaaS or similar multi-tenant apps and represent your clients which are teams, organizations, or entire companies. Organizations work as a foundational element for B2B authentication and authorization.',
  organization_template: "Modèle d'organisation",
  organization_id: "ID de l'organisation",
  members: 'Membres',
  create_organization: 'Créer une organisation',
  setup_organization: 'Configurer votre organisation',
  organization_list_placeholder_title: 'Organisation',
  /** UNTRANSLATED */
  organization_list_placeholder_text:
    'Organizations are often used in SaaS or similar multi-tenant apps as a best practice. They enable you to develop apps that allow clients to create and manage organizations, invite members, and assign roles.',
  organization_name_placeholder: 'Mon organisation',
  organization_description_placeholder: "Une brève description de l'organisation",
  organization_permission: "Autorisation de l'organisation",
  organization_permission_other: "Autorisations de l'organisation",
  organization_permission_description:
    "L'autorisation d'organisation se réfère à l'autorisation d'accéder à une ressource dans le contexte de l'organisation. Une autorisation d'organisation doit être représentée par une chaîne significative, servant également de nom et d'identifiant unique.",
  organization_permission_delete_confirm:
    "Si cette autorisation est supprimée, tous les rôles d'organisation incluant cette autorisation perdront cette autorisation, et les utilisateurs ayant cette autorisation perdront l'accès qui en découle.",
  create_permission_placeholder: "Lire l'historique des rendez-vous",
  permission: 'Autorisation',
  permission_other: 'Autorisations',
  organization_role: "Rôle de l'organisation",
  organization_role_other: "Rôles de l'organisation",
  organization_role_description:
    "Le rôle d'organisation est un regroupement d'autorisations pouvant être attribuées aux utilisateurs. Les autorisations doivent provenir des autorisations d'organisation prédéfinies.",
  organization_role_delete_confirm:
    "Si cette autorisation est supprimée, tous les rôles d'organisation incluant cette autorisation perdront cette autorisation, et les utilisateurs ayant cette autorisation perdront l'accès qui en découle.",
  role: 'Rôle',
  create_role_placeholder: 'Utilisateurs avec des autorisations en lecture seule',
  search_placeholder: "Rechercher par nom ou ID de l'organisation",
  search_permission_placeholder: 'Tapez pour rechercher et sélectionner des autorisations',
  search_role_placeholder: 'Tapez pour rechercher et sélectionner des rôles',
  empty_placeholder: "🤔 Vous n'avez pas encore configuré {{entity}}.",
  organization_and_member: 'Organisation et membre',
  organization_and_member_description:
    "L'organisation est un regroupement d'utilisateurs et peut représenter les équipes, les clients professionnels et les entreprises partenaires, chaque utilisateur étant un \"Membre\". Il s'agit d'entités fondamentales pour répondre à vos besoins multi-locataires.",
  guide: {
    title: 'Commencez avec les guides',
    subtitle: 'Démarrez vos paramètres organisationnels avec nos guides',
    introduction: {
      title: "Comprendre le fonctionnement de l'organisation dans Logto",
      section_1: {
        title: "Une organisation est un groupe d'utilisateurs (identités)",
      },
      section_2: {
        title:
          "Le modèle d'organisation est conçu pour le contrôle d'accès des applications multi-locataires",
        description:
          "Dans les applications multi-locataires SaaS, plusieurs organisations partagent souvent le même modèle de contrôle d'accès, comprenant des autorisations et des rôles. Chez Logto, nous l'appelons \"modèle d'organisation\".",
        permission_description:
          "L'autorisation d'organisation se réfère à l'autorisation d'accéder à une ressource dans le contexte de l'organisation.",
        role_description_deprecated:
          "Le rôle d'organisation est un regroupement de permissions d'organisation pouvant être attribuées aux membres.",
        role_description:
          "Le rôle de l'organisation est un regroupement de permissions d'organisation ou de permissions API qui peuvent être attribuées aux membres.",
      },
      section_3: {
        title: "Puis-je attribuer des permissions API aux rôles de l'organisation?",
        description:
          "Oui, vous pouvez attribuer des permissions API aux rôles de l'organisation. Logto offre la flexibilité de gérer efficacement les rôles de votre organisation, vous permettant d'inclure à la fois les permissions d'organisation et les permissions API au sein de ces rôles.",
      },
      section_4: {
        title: "Interagissez avec l'illustration pour voir comment tout est connecté",
        description:
          'Prenons un exemple : John, Sarah appartiennent à différentes organisations avec des rôles différents dans le contexte de différentes organisations. Passez la souris sur les différents modules et voyez ce qui se passe.',
      },
    },
    step_1: "Étape 1 : Définir les autorisations d'organisation",
    step_2: "Étape 2 : Définir les rôles d'organisation",
    step_3: 'Étape 3 : Créer votre première organisation',
    step_3_description:
      'Créez votre première organisation. Elle possède un identifiant unique et sert de conteneur pour gérer diverses identités orientées vers les entreprises.',
    more_next_steps: 'Autres étapes suivantes',
    add_members: 'Ajouter des membres à votre organisation',
    /** UNTRANSLATED */
    config_organization: 'Configure organization',
    organization_permissions: "Autorisations de l'organisation",
    permission_name: "Nom de l'autorisation",
    permissions: 'Autorisations',
    organization_roles: "Rôles de l'organisation",
    role_name: 'Nom du rôle',
    organization_name: "Nom de l'organisation",
    admin: 'Admin',
    member: 'Membre',
    guest: 'Invité',
    role_description:
      'Le rôle "{{role}}" partage le même modèle d\'organisation dans différentes organisations.',
    john: 'John',
    john_tip:
      "John appartient à deux organisations avec l'e-mail \"john@email.com\" en tant qu'identifiant unique. Il est l'administrateur de l'organisation A ainsi que l'invité de l'organisation B.",
    sarah: 'Sarah',
    sarah_tip:
      "Sarah appartient à une organisation avec l'e-mail \"sarah@email.com\" en tant qu'identifiant unique. Elle est l'administratrice de l'organisation B.",
  },
};

export default Object.freeze(organizations);
