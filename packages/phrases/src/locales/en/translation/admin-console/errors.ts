const errors = {
  something_went_wrong: 'Oops! Something went wrong.',
  page_not_found: 'Page not found',
  unknown_server_error: 'Unknown server error occurred',
  empty: 'No data',
  missing_total_number: 'Unable to find Total-Number in response headers',
  invalid_uri_format: 'Invalid URI format',
  invalid_origin_format: 'Invalid URI origin format',
  invalid_json_format: 'Invalid JSON format',
  invalid_regex: 'Invalid regular expression',
  invalid_error_message_format: 'The error message format is invalid.',
  required_field_missing: 'Please enter {{field}}',
  required_field_missing_plural: 'You have to enter at least one {{field}}',
  more_details: 'More details',
  username_pattern_error:
    'Username should only contain letters, numbers, or underscore and should not start with a number.',
  email_pattern_error: 'The email address is invalid.',
  phone_pattern_error: 'The phone number is invalid.',
  insecure_contexts: 'Insecure contexts (non-HTTPS) are not supported.',
  unexpected_error: 'An unexpected error occurred.',
  not_found: '404 not found',
  create_internal_role_violation:
    'You are creating a new internal role which is forbidden by Logto. Try another name that does not start with "#internal:".',
  should_be_an_integer: 'Should be an integer.',
  number_should_be_between_inclusive:
    'Then number should be between {{min}} and {{max}} (both inclusive).',
};

export default Object.freeze(errors);
