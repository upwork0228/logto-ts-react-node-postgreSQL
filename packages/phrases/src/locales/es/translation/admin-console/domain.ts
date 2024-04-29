const domain = {
  status: {
    connecting: 'Conectando...',
    in_use: 'En uso',
    failed_to_connect: 'Error de conexión',
  },
  update_endpoint_notice:
    'No olvide actualizar el dominio para el URI de devolución de llamada del conector social y el punto final de Logto en su aplicación si desea utilizar un dominio personalizado para las funciones. <a>{{link}}</a>',
  error_hint:
    'Asegúrese de actualizar sus registros DNS. Continuaremos verificando cada {{value}} segundos.',
  custom: {
    custom_domain: 'Dominio personalizado',
    custom_domain_description:
      'Mejore su marca utilizando un dominio personalizado. Este dominio se utilizará en su experiencia de inicio de sesión.',
    custom_domain_field: 'Dominio personalizado',
    custom_domain_placeholder: 'tu.dominio.com',
    add_domain: 'Agregar dominio',
    /** UNTRANSLATED */
    invalid_domain_format:
      'Please provide a valid domain URL with a minimum of three parts, e.g. "your.domain.com."',
    verify_domain: 'Verificar dominio',
    enable_ssl: 'Habilitar SSL',
    checking_dns_tip:
      'Después de configurar los registros DNS, el proceso se ejecutará automáticamente y puede tardar hasta 24 horas. Puede dejar esta interfaz mientras se está ejecutando.',
    enable_ssl_tip:
      'Habilitar SSL se ejecutará automáticamente y puede tardar hasta 24 horas. Puede dejar esta interfaz mientras se está ejecutando.',
    generating_dns_records: 'Generando los registros DNS...',
    add_dns_records: 'Agregue estos registros DNS a su proveedor de DNS.',
    dns_table: {
      type_field: 'Tipo',
      name_field: 'Nombre',
      value_field: 'Valor',
    },
    deletion: {
      delete_domain: 'Eliminar dominio',
      reminder: 'Eliminar dominio personalizado',
      description: '¿Está seguro de que desea eliminar este dominio personalizado?',
      in_used_description:
        '¿Está seguro de que desea eliminar este dominio personalizado "<span>{{domain}}</span>"?',
      in_used_tip:
        'Si había configurado este dominio personalizado en su proveedor de conector social o punto final de aplicación antes, deberá modificar la URI al dominio predeterminado de Logto "<span>{{dominio}}</span>" primero. Esto es necesario para que el botón de inicio de sesión social funcione correctamente.',
      deleted: '¡Dominio personalizado eliminado con éxito!',
    },
  },
  default: {
    default_domain: 'Dominio predeterminado',
    default_domain_description:
      'Logto ofrece un dominio predeterminado preconfigurado, listo para usar sin ninguna configuración adicional. Este dominio predeterminado sirve como opción de respaldo incluso si habilitó un dominio personalizado.',
    default_domain_field: 'Dominio predeterminado de Logto',
  },
  custom_endpoint_note:
    'Puede personalizar el nombre de dominio de estos puntos finales según sea necesario. Elija "{{custom}}" o "{{default}}".',
  custom_social_callback_url_note:
    'Puede personalizar el nombre de dominio de esta URI para que coincida con el punto final de su aplicación. Elija "{{custom}}" o "{{default}}".',
  /** UNTRANSLATED */
  custom_acs_url_note:
    'You can customize the domain name of this URI to match your identity provider assertion consumer service URL. Choose either "{{custom}}" or "{{default}}".',
};

export default Object.freeze(domain);
