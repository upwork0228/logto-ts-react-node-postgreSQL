const tenants = {
  title: 'Impostazioni',
  description:
    "Gestisci efficacemente le impostazioni dell'inquilino e personalizza il tuo dominio.",
  tabs: {
    settings: 'Impostazioni',
    /** UNTRANSLATED */
    members: 'Members',
    domains: 'Domini',
    subscription: 'Piano e fatturazione',
    billing_history: 'Storico fatturazione',
  },
  settings: {
    title: 'IMPOSTAZIONI',
    description:
      "Imposta il nome dell'inquilino e visualizza la regione in cui sono ospitati i tuoi dati e il tipo di inquilino.",
    tenant_id: 'ID Inquilino',
    tenant_name: 'Nome Inquilino',
    tenant_region: 'Regione di hosting',
    tenant_region_tip:
      'Le risorse del tuo inquilino sono ospitate in {{region}}. <a>Scopri di più</a>',
    environment_tag_development: 'Svil',
    environment_tag_production: 'Prod',
    tenant_type: 'Tipo inquilino',
    development_description:
      'Solo per scopi di test e non dovrebbe essere utilizzato in produzione. Non è richiesto alcun abbonamento. Ha tutte le funzionalità professionale ma ha delle limitazioni come un banner di accesso. <a>Per saperne di più</a>',
    production_description:
      'Destinato alle app utilizzate dagli utenti finali e potrebbe richiedere un abbonamento a pagamento. <a>Per saperne di più</a>',
    tenant_info_saved: "Le informazioni dell'inquilino sono state salvate correttamente.",
  },
  full_env_tag: {
    development: 'Sviluppo',
    production: 'Produzione',
  },
  deletion_card: {
    title: 'ELIMINA',
    tenant_deletion: 'Elimina inquilino',
    tenant_deletion_description:
      "L'eliminazione dell'inquilino comporterà la rimozione permanente di tutti i dati utente e le configurazioni associate. Procedere con cautela.",
    tenant_deletion_button: 'Elimina inquilino',
  },
  leave_tenant_card: {
    /** UNTRANSLATED */
    title: 'LEAVE',
    /** UNTRANSLATED */
    leave_tenant: 'Leave tenant',
    /** UNTRANSLATED */
    leave_tenant_description:
      'Any resources in the tenant will remain but you no longer have access to this tenant.',
    /** UNTRANSLATED */
    last_admin_note: 'To leave this tenant, ensure at least one more member has the Admin role.',
  },
  create_modal: {
    title: 'Crea nuovo inquilino',
    subtitle:
      'Crea un nuovo inquilino con risorse e utenti isolati. Le regioni dei dati ospitati e i tipi di inquilino non possono essere modificati dopo la creazione.',
    tenant_usage_purpose: 'Per cosa desideri utilizzare questo inquilino?',
    development_description:
      'Solo per scopi di test e non dovrebbe essere utilizzato in produzione. Non è richiesto alcun abbonamento.',
    development_hint:
      'Ha tutte le funzionalità professionale ma ha delle limitazioni come un banner di accesso.',
    production_description:
      'Utilizzato dagli utenti finali e potrebbe richiedere un abbonamento a pagamento.',
    available_plan: 'Piano disponibile:',
    create_button: 'Crea inquilino',
    tenant_name_placeholder: 'Il mio inquilino',
  },
  dev_tenant_migration: {
    title:
      'Ora puoi provare gratuitamente le nostre funzionalità Pro creando un nuovo "Inquilino di sviluppo"!',
    affect_title: 'Come ti influisce questo?',
    hint_1:
      'Stiamo sostituendo le vecchie <strong>etichette di ambiente</strong> con due nuovi tipi di inquilino: <strong>“Sviluppo”</strong> e <strong>“Produzione”</strong>.',
    hint_2:
      'Per garantire una transizione senza soluzione di continuità e un funzionamento ininterrotto, tutti gli inquilini creati in precedenza saranno elevati al tipo di inquilino <strong>Produzione</strong> insieme al tuo abbonamento precedente.',
    hint_3: 'Niente paura, tutte le altre impostazioni rimarranno invariate.',
    about_tenant_type: 'Informazioni sul tipo di inquilino',
  },
  delete_modal: {
    title: 'Elimina inquilino',
    description_line1:
      "Sei sicuro di voler eliminare il tuo inquilino \"<span>{{name}}</span>\" con l'etichetta di suffisso dell'ambiente \"<span>{{tag}}</span>\"? Quest'azione non può essere annullata e comporterà l'eliminazione permanente di tutti i tuoi dati e le informazioni dell'account.",
    description_line2:
      "Prima di eliminare l'account, forse possiamo aiutarti. <span><a>Contattaci via e-mail</a></span>",
    description_line3:
      'Se vuoi procedere, inserisci il nome dell\'inquilino "<span>{{name}}</span>" per confermare.',
    delete_button: 'Elimina definitivamente',
    cannot_delete_title: 'Impossibile eliminare questo locatario',
    cannot_delete_description:
      'Spiacente, al momento non è possibile eliminare questo inquilino. Verifica di essere nel Piano Gratuito e di aver saldato tutte le fatture pendenti.',
  },
  leave_tenant_modal: {
    /** UNTRANSLATED */
    description: 'Are you sure you want to leave this tenant?',
    /** UNTRANSLATED */
    leave_button: 'Leave',
  },
  tenant_landing_page: {
    title: 'Non hai ancora creato un inquilino',
    description:
      'Per iniziare a configurare il tuo progetto con Logto, crea un nuovo inquilino. Se hai bisogno di uscire o eliminare il tuo account, clicca sul pulsante avatar in alto a destra.',
    create_tenant_button: 'Crea inquilino',
  },
  status: {
    mau_exceeded: 'MAU Superato',
    suspended: 'Sospeso',
    overdue: 'Scaduto',
  },
  tenant_suspended_page: {
    title: "Inquilino sospeso. Contattaci per ripristinare l'accesso.",
    description_1:
      'Ci dispiace molto informarti che il tuo account inquilino è stato temporaneamente sospeso a causa di un utilizzo improprio, inclusi superamenti dei limiti di MAU, pagamenti in ritardo o altre azioni non autorizzate.',
    description_2:
      'Se necessiti ulteriori chiarimenti, hai qualche preoccupazione o desideri ripristinare la funzionalità completa e sbloccare i tuoi inquilini, ti preghiamo di contattarci immediatamente.',
  },
};

export default Object.freeze(tenants);
