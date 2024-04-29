const profile = {
  page_title: 'アカウント設定',
  title: 'アカウント設定',
  description:
    'アカウントのセキュリティを確保するため、ここでアカウント設定と個人情報の管理を変更できます。',
  settings: {
    title: 'プロファイル設定',
    profile_information: 'プロファイル情報',
    avatar: 'アバター',
    name: '名前',
    username: 'ユーザー名',
  },
  link_account: {
    title: 'アカウントをリンク',
    email_sign_in: 'Email sign-In',
    email: 'Eメール',
    social_sign_in: 'ソーシャルサインイン',
    link_email: 'Eメールのリンク',
    link_email_subtitle: 'ログインにEメールをリンクするか、アカウントの回復をお手伝いします。',
    email_required: 'Eメールが必要です',
    invalid_email: '無効なEメールアドレス',
    identical_email_address: '入力したEメールアドレスは現在のものと同じです',
    anonymous: '匿名',
  },
  password: {
    title: 'パスワードとセキュリティ',
    password: 'パスワード',
    password_setting: 'パスワード設定',
    new_password: '新しいパスワード',
    confirm_password: 'パスワードの確認',
    enter_password: '現在のパスワードを入力してください',
    enter_password_subtitle:
      'アカウントのセキュリティを保護するためにあなたが本人であることを確認してください。変更する前に現在のパスワードを入力してください。',
    set_password: 'パスワードを設定する',
    verify_via_password: 'パスワードを使って確認する',
    show_password: 'パスワードを表示する',
    required: 'パスワードが必要です',
    do_not_match: 'パスワードが一致しません。もう一度お試しください。',
  },
  code: {
    enter_verification_code: '検証コードを入力してください',
    enter_verification_code_subtitle: '検証コードは <strong>{{target}}</strong> に送信されました。',
    verify_via_code: '検証コードを使用して確認する',
    resend: '検証コードを再送信する',
    resend_countdown: '{{countdown}} 秒後に再送信する',
  },
  delete_account: {
    title: 'アカウントを削除',
    label: 'アカウントを削除',
    description:
      'アカウントの削除は、すべての個人情報、ユーザーデータ、および設定が削除されます。このアクションは元に戻せません。',
    button: 'アカウントを削除',
    dialog_paragraph_1:
      'アカウントを削除したいというお知らせを受け取りましたこと、残念に思います。 アカウントを削除すると、ユーザー情報、ログ、設定を含むすべてのデータが永久に削除されます。そのため、手続きを進める前に、重要なデータをバックアップすることを必ずお願いします。',
    dialog_paragraph_2:
      'アカウント削除プロセスを進めるには、「アカウント削除リクエスト」という件名で<a>{{mail}}</a>にメールを送信して、当社のサポートチームにお問い合わせください。私たちはあなたをサポートし、すべてのデータが正しくシステムから削除されるようにします。',
    dialog_paragraph_3:
      'Logto Cloudをご利用いただきありがとうございます。ご質問やご不明な点がある場合は、お気軽にお問い合わせください。',
  },
  set: '設定する',
  change: '変更する',
  link: 'リンクする',
  unlink: 'リンクを解除する',
  not_set: '設定されていません',
  change_avatar: 'アバターを変更する',
  change_name: '名前を変更する',
  change_username: 'ユーザー名を変更する',
  set_name: '名前を設定する',
  email_changed: 'Eメールが変更されました。',
  password_changed: 'パスワードが変更されました。',
  updated: '{{target}} が更新されました。',
  linked: '{{target}} がリンクされました。',
  unlinked: '{{target}} のリンクが解除されました。',
  email_exists_reminder:
    'このEメール{{email}}は、既存のアカウントに関連付けられています。ここで別のEメールをリンクしてください。',
  unlink_confirm_text: 'はい、リンクを解除します',
  unlink_reminder:
    'リンクを解除すると、ユーザーは<span></span>アカウントでサインインできなくなります。本当に進めますか？',
};

export default Object.freeze(profile);
