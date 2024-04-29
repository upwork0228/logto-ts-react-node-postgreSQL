const organization_role_details = {
  page_title: '組織の役割の詳細',
  back_to_org_roles: '組織の役割に戻る',
  org_role: '組織の役割',
  delete_confirm:
    'これにより、関連するユーザーからこのロールに関連付けられた権限が削除され、組織の役割、組織のメンバー、および組織の権限間の関係が削除されます。',
  deleted: '組織の役割{{name}}が正常に削除されました。',
  permissions: {
    tab: '許可',
    name_column: '許可',
    description_column: '説明',
    type_column: '許可の種類',
    type: {
      api: 'API許可',
      org: '組織許可',
    },
    assign_permissions: '許可を割り当てる',
    remove_permission: '権限を削除',
    remove_confirmation:
      'この権限を削除すると、この組織の役割を持つユーザーはこの権限によって付与されたアクセスを失います。',
    removed: 'この組織の役割から権限 {{name}} が正常に削除されました',
    assign_description:
      'この組織内のロールに権限を割り当てます。これには組織の権限とAPIの権限の両方が含まれる場合があります。',
    organization_permissions: '組織の権限',
    api_permissions: 'APIの権限',
    assign_organization_permissions: '組織の権限を割り当てる',
    assign_api_permissions: 'APIの権限を割り当てる',
  },
  general: {
    tab: '一般',
    settings: '設定',
    description:
      '組織ロールは、ユーザーに割り当てることができる権限のグループです。権限は、事前に定義された組織の権限とAPIの権限から来ることがあります。',
    name_field: '名前',
    description_field: '説明',
    description_field_placeholder: '閲覧専用権限を持つユーザー',
  },
};

export default Object.freeze(organization_role_details);
