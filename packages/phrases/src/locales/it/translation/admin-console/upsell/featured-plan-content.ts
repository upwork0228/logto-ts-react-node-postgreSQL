const featured_plan_content = {
  mau: {
    free_plan: 'Fino a {{count, number}} MAU',
    pro_plan: 'MAU illimitati',
  },
  m2m: {
    free_plan: '{{count, number}} da macchina a macchina',
    pro_plan: 'Macchina a macchina aggiuntiva',
  },
  third_party_apps: 'IdP per applicazioni di terze parti',
  mfa: 'Autenticazione a più fattori',
  sso: 'SSO aziendale',
  role_and_permissions: {
    free_plan: '{{roleCount, number}} ruolo e {{permissionCount, number}} permesso per ruolo',
    pro_plan: 'Ruoli e permessi illimitati per ruolo',
  },
  organizations: 'Organizzazioni',
  audit_logs: 'Conservazione dei log degli audit: {{count, number}} giorni',
};

export default Object.freeze(featured_plan_content);
