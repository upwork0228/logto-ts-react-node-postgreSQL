# Change Log

## 3.0.0

### Major Changes

- 57d97a4df: update `SocialUserInfo` and `GetUserInfo` types

  - Added `rawData?: Json` to `SocialUserInfo`
  - `GetUserInfo` now does not accept unknown keys in the return object, since the raw data is now stored in `SocialUserInfo`

- 57d97a4df: guard results of `parseJson` and `parseJsonObject`

  Now `parseJson` and `parseJsonObject` are type safe.

### Minor Changes

- 57d97a4df: add `jsonGuard()` and `jsonObjectGuard()`

### Patch Changes

- 2c10c2423: allow unknown properties in send message payload

## 2.1.0

### Minor Changes

- 31e60811d: use Node 20 LTS for engine requirement.

  Note: We mark it as minor because Logto is shipping with Docker image and it's not a breaking change for users.

- 570a4ea9e: add `replaceSendMessageHandlebars()` for replacing `SendMessagePayload` handlebars in a message template
- 570a4ea9e: support magic link feature

  - Removed `VerificationCodeType`: Since we are adding the magic link feature, `VerificationCodeType` is no longer precise for our use cases.
  - Replaced `VerificationCodeType` with `TemplateType`.
  - Removed `TemplateNotSupported` error code since it is useless for dynamic template checking.
  - Added `link` property to `SendMessagePayload`.

- 6befe6014: add `mockConnectorFilePaths` and deprecate `mockSmsVerificationCodeFileName`

### Patch Changes

- 9089dbf84: upgrade TypeScript to 5.3.3
- Updated dependencies [9089dbf84]
- Updated dependencies [31e60811d]
  - @logto/language-kit@1.1.0

## 2.0.0

### Major Changes

- d24aaedf5: major: Remove the deprecated enum MessageType, should all migrate using the new enum VerificationCodeType.
  patch: Split the types for connectors into separate files.

## 1.1.1

### Patch Changes

- 30033421c: - connector-kit: add `DemoConnector` type and demo connector ids
  - core-kit: remove nanoid utils, add tenant model utils
  - shared: remove models, add database types and universal export

## 1.1.0

### Minor Changes

- 343b1090f: Allow admin tenant admin to create tenants without limitation

## 1.0.0

### Minor Changes

- 8658827ca: Add optional `formItems` to connector's metadata.

  If set, the admin console's connector page (both create and update) will use it to generate a form to input config instead of raw JSON.

- 738675a7d: ## Improvements

  - Exported seed constants and schemas.
  - Add ID generation utilities `buildIdGenerator()` and `generateStandardId()`.

- c0526d931: Pass user agent to connector

### Patch Changes

- 69ac13e3a: Add description and tooltip for connector config's formItems.
- 69af8a381: 1. Add `connectorId`, `connectorFactoryId` and `jti` to `GetAuthorizationUri`. 2. Make `ConnectorSession` compatible for arbitrary keys.
- c2d36b1c8: Add optional `setSession` method and `getSession` method as input parameters of `getAuthorizationUri` and `getUserInfo` respectively.

  This change enabled stateless connectors to utilize Logto session to pass parameters between APIs.

- ad3611f5a: Remove connector database `storage` column and its corresponding access.
- Updated dependencies [738675a7d]
  - @logto/language-kit@1.0.0

## 1.0.0-rc.3

### Patch Changes

- ad3611f5a: Remove connector database `storage` column and its corresponding access.

## 1.0.0-rc.2

### Patch Changes

- 69ac13e3: Add description and tooltip for connector config's formItems.

## 1.0.0-rc.1

### Minor Changes

- 8658827c: Add optional `formItems` to connector's metadata.

  If set, the admin console's connector page (both create and update) will use it to generate a form to input config instead of raw JSON.

## 1.0.0-beta.33

### Patch Changes

- 69af8a38: 1. Add `connectorId`, `connectorFactoryId` and `jti` to `GetAuthorizationUri`. 2. Make `ConnectorSession` compatible for arbitrary keys.

## 1.0.0-beta.32

### Minor Changes

- c0526d93: Pass user agent to connector

## 1.0.0-beta.31

### Minor Changes

- 738675a7: ## Improvements

  - Exported seed constants and schemas.
  - Add ID generation utilities `buildIdGenerator()` and `generateStandardId()`.

### Patch Changes

- Updated dependencies [738675a7]
  - @logto/core-kit@1.0.0-beta.30
  - @logto/language-kit@1.0.0-beta.30

## 1.0.0-beta.30

### Patch Changes

- c2d36b1c: Add optional `setSession` method and `getSession` method as input parameters of `getAuthorizationUri` and `getUserInfo` respectively.

  This change enabled stateless connectors to utilize Logto session to pass parameters between APIs.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0-beta.29](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.28...v1.0.0-beta.29) (2022-12-07)

### Bug Fixes

- exports info and lock dep version ([#45](https://github.com/logto-io/toolkit/issues/45)) ([2ac83b4](https://github.com/logto-io/toolkit/commit/2ac83b4f0ff17579456569fb67ba018ac493c1af))

## [1.0.0-beta.28](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.27...v1.0.0-beta.28) (2022-12-06)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.27](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.26...v1.0.0-beta.27) (2022-11-29)

### Features

- **connector:** add continue message type ([#41](https://github.com/logto-io/toolkit/issues/41)) ([78f1eb0](https://github.com/logto-io/toolkit/commit/78f1eb06f84de2bc7601016a6bcc3c85eb4695f0))

## [1.0.0-beta.26](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.25...v1.0.0-beta.26) (2022-11-23)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.25](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.24...v1.0.0-beta.25) (2022-11-22)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.24](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.23...v1.0.0-beta.24) (2022-11-22)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.23](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.22...v1.0.0-beta.23) (2022-11-18)

### Bug Fixes

- hot fix the check on whether an element exists in array ([#37](https://github.com/logto-io/toolkit/issues/37)) ([889a577](https://github.com/logto-io/toolkit/commit/889a5773b5e95c35c4ef17db24622e7b87b723c5))

## [1.0.0-beta.22](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2022-11-16)

### Bug Fixes

- make standard connectors display name configurable ([#36](https://github.com/logto-io/toolkit/issues/36)) ([da431bf](https://github.com/logto-io/toolkit/commit/da431bf318a83e0086070d49a16a8cc3d970f388))

## [1.0.0-beta.21](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2022-11-11)

### Features

- update connector metadata types and add corresponding type guards ([#35](https://github.com/logto-io/toolkit/issues/35)) ([4e7cd12](https://github.com/logto-io/toolkit/commit/4e7cd12b4b4fb32f2ed5a7d66e1616e20fa395f1))

## [1.0.0-beta.20](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2022-10-21)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.19](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2022-10-19)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.18](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2022-10-12)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.17](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2022-10-12)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.16](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2022-09-28)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.15](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2022-09-27)

### Features

- **language,core,connector:** init language-kit package ([#14](https://github.com/logto-io/toolkit/issues/14)) ([9a74fc4](https://github.com/logto-io/toolkit/commit/9a74fc4d34c9ce277b8734ab78735549dc3a3cda))

## [1.0.0-beta.14](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2022-09-23)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.13](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2022-09-19)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.12](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2022-09-17)

**Note:** Version bump only for package @logto/connector-kit

## [1.0.0-beta.11](https://github.com/logto-io/toolkit/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2022-09-16)

**Note:** Version bump only for package @logto/connector-kit

## 1.0.0-beta.10 (2022-09-16)

### Features

- initial commit ([56a4968](https://github.com/logto-io/toolkit/commit/56a496848168a4a9ae9ac7af83d51f1b8a6afe2c))

## [1.0.0-beta.9](https://github.com/logto-io/logto/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2022-09-07)

**Note:** Version bump only for package @logto/connector-core

## [1.0.0-beta.8](https://github.com/logto-io/logto/compare/v1.0.0-beta.6...v1.0.0-beta.8) (2022-09-01)

**Note:** Version bump only for package @logto/connector-core

## [1.0.0-beta.6](https://github.com/logto-io/logto/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2022-08-30)

**Note:** Version bump only for package @logto/connector-core
