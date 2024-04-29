const organizations = {
  organization: 'Organizacja',
  page_title: 'Organizacje',
  title: 'Organizacje',
  /** UNTRANSLATED */
  subtitle:
    'Organizations are usually used in SaaS or similar multi-tenant apps and represent your clients which are teams, organizations, or entire companies. Organizations work as a foundational element for B2B authentication and authorization.',
  organization_template: 'Szablon organizacji',
  organization_id: 'ID organizacji',
  members: 'Członkowie',
  create_organization: 'Utwórz organizację',
  setup_organization: 'Skonfiguruj swoją organizację',
  organization_list_placeholder_title: 'Organizacja',
  /** UNTRANSLATED */
  organization_list_placeholder_text:
    'Organizations are often used in SaaS or similar multi-tenant apps as a best practice. They enable you to develop apps that allow clients to create and manage organizations, invite members, and assign roles.',
  organization_name_placeholder: 'Moja organizacja',
  organization_description_placeholder: 'Krótki opis organizacji',
  organization_permission: 'Uprawnienie organizacji',
  organization_permission_other: 'Uprawnienia organizacji',
  organization_permission_description:
    'Uprawnienie organizacji odnosi się do autoryzacji dostępu do zasobu w kontekście organizacji. Uprawnienie organizacji powinno być reprezentowane jako znaczący ciąg znaków, stanowiący także nazwę i unikalny identyfikator.',
  organization_permission_delete_confirm:
    'Jeśli to uprawnienie zostanie usunięte, wszystkie role organizacji, w tym to uprawnienie, stracą to uprawnienie, a użytkownicy, którzy mieli to uprawnienie, stracą dostęp do niego.',
  create_permission_placeholder: 'Odczyt historii spotkań',
  permission: 'Uprawnienie',
  permission_other: 'Uprawnienia',
  organization_role: 'Rola organizacji',
  organization_role_other: 'Role organizacji',
  organization_role_description:
    'Rola organizacji to grupowanie uprawnień, które można przypisać użytkownikom. Uprawnienia muszą pochodzić z wcześniej zdefiniowanych uprawnień organizacji.',
  organization_role_delete_confirm:
    'Spowoduje to usunięcie uprawnień związanych z tą rolą od dotkniętych użytkowników oraz usunięcie relacji między rolami organizacji, członkami organizacji i uprawnieniami organizacji.',
  role: 'Rola',
  create_role_placeholder: 'Użytkownicy z uprawnieniami tylko do odczytu',
  search_placeholder: 'Wyszukaj według nazwy lub ID organizacji',
  search_permission_placeholder: 'Wpisz, aby wyszukać i wybrać uprawnienia',
  search_role_placeholder: 'Wpisz, aby wyszukać i wybrać role',
  empty_placeholder: '🤔 Nie masz jeszcze ustawionego żadnego {{entity}}.',
  organization_and_member: 'Organizacja i członek',
  organization_and_member_description:
    'Organizacja to grupa użytkowników i może reprezentować zespoły, klientów biznesowych i partnerów firm, z których każdy użytkownik jest "Członkiem". Mogą to być podstawowe jednostki do obsługi wymagań wielomandantowych.',
  guide: {
    title: 'Zacznij od przewodników',
    subtitle: 'Włóż kłódę pod stopy swoich ustawień organizacji za pomocą naszych przewodników',
    introduction: {
      title: 'Zrozum, jak działa organizacja w Logto',
      section_1: {
        title: 'Organizacja to grupa użytkowników (tożsamości)',
      },
      section_2: {
        title:
          'Szablon organizacji jest przeznaczony do kontroli dostępu do aplikacji wielomandantowych',
        description:
          'W wielomandantowych aplikacjach typu SaaS, wiele organizacji często dzieli ten sam szablon kontroli dostępu, który obejmuje uprawnienia i role. W Logto nazywamy to "szablonem organizacji".',
        permission_description:
          'Uprawnienie organizacji odnosi się do autoryzacji dostępu do zasobu w kontekście organizacji.',
        role_description_deprecated:
          'Rola organizacji to grupowanie uprawnień organizacji, które można przypisać członkom.',
        role_description:
          'Rola organizacyjna to grupowanie uprawnień organizacyjnych lub uprawnień API, które mogą być przypisane do członków.',
      },
      section_3: {
        title: 'Czy mogę przypisać uprawnienia API do ról organizacyjnych?',
        description:
          'Tak, możesz przypisać uprawnienia API do ról organizacyjnych. Logto oferuje elastyczność w skutecznym zarządzaniu rolami w organizacji, pozwalając na włączenie zarówno uprawnień organizacyjnych, jak i uprawnień API do tych ról.',
      },
      section_4: {
        title: 'Zaangażuj się w ilustrację, aby zobaczyć jak to wszystko się łączy',
        description:
          'Przyjmijmy przykład. John, Sarah należą do różnych organizacji z różnymi rolami w kontekście różnych organizacji. Najedź kursorem na różne moduły i zobacz co się stanie.',
      },
    },
    step_1: 'Krok 1: Zdefiniuj uprawnienia organizacji',
    step_2: 'Krok 2: Zdefiniuj role organizacji',
    step_3: 'Krok 3: Utwórz swoją pierwszą organizację',
    step_3_description:
      'Utwórz swoją pierwszą organizację. Posiada ona unikalny identyfikator i służy jako kontener do obsługi różnych identyfikacji skierowanych na biznes.',
    more_next_steps: 'Więcej następnych kroków',
    add_members: 'Dodaj członków do swojej organizacji',
    /** UNTRANSLATED */
    config_organization: 'Configure organization',
    organization_permissions: 'Uprawnienia organizacji',
    permission_name: 'Nazwa uprawnienia',
    permissions: 'Uprawnienia',
    organization_roles: 'Role organizacji',
    role_name: 'Nazwa roli',
    organization_name: 'Nazwa organizacji',
    admin: 'Administrator',
    member: 'Członek',
    guest: 'Gość',
    role_description:
      'Rola "{{role}}" dzieli ten sam szablon organizacji między różnymi organizacjami.',
    john: 'John',
    john_tip:
      'John należy do dwóch organizacji, a jedynym identyfikatorem jest adres e-mail "john@email.com". Jest administratorem organizacji A oraz gościem organizacji B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah należy do jednej organizacji, a jedynym identyfikatorem jest adres e-mail "sarah@email.com". Jest administratorem organizacji B.',
  },
};

export default Object.freeze(organizations);
