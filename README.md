# eslint-config

This package provides Illumini's base [`ESLint`](https://eslint.org/) configuration.

Pairs well with our [`Prettier configuration`](https://www.npmjs.com/package/@illumini/prettier-config).

## Table of Contents

- [eslint-config](#eslint-config)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configurations](#configurations)
    - [Default Config](#default-config)
    - [TypeScript Config](#typescript-config)
    - [React Config](#react-config)
    - [React Native Config](#react-native-config)
  - [Specifying Environments](#specifying-environments)
  - [Editor Integration & Autoformatting](#editor-integration--autoformatting)
    - [VS Code](#vs-code)
  - [Pre-commit Hook](#pre-commit-hook)
  - [Publishing to npm](#publishing-to-npm)
  - [Overriding Rules](#overriding-rules)

## Installation

This package has several [peer dependencies](https://docs.npmjs.com/files/package.json#peerdependencies).

Run `npm info "@illumini/eslint-config@latest" peerDependencies` to list the peer dependencies and versions.

1. Install all dependencies

   - **Option 1:** With `npx`

     ```sh
     npx install-peerdeps --dev @illumini/eslint-config
     ```

     **Note:** `npx` is a package runner that comes with npm 5.2 and higher that makes installing peer dependencies easier

   - **Option 2:** Without `npx`

     ```sh
     npm install --save-dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import

     # or

     yarn add --dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import
     ```

1. Create an `.eslintrc` file at the root of your project with the following:

   ```json
   {
     "extends": "@illumini"
   }
   ```

## Configurations

We export four ESLint configurations for your usage:

1. [Default](#default-config)
2. [TypeScript](#typescript-config)
3. [React](#react-config)
4. [React Native](#react-native-config)

### Default Config

```sh
npm install --save-dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import
```

- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)

**In your `.eslintrc`:**

```json
{
  "extends": "@illumini"
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### TypeScript Config

Includes everything in the default config, plus environment specification and typescript-specific rules with

```sh
npm install --save-dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**In your `.eslintrc`:**

```json
{
  "extends": "@illumini/eslint-config/typescript"
}
```

### React Config

Includes everything in the default and TypeScript config, plus environment specification and react-specific rules with

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

```sh
npm install --save-dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-react-hooks typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jsx-a11y
```

**In your `.eslintrc`:**

```json
{
  "extends": "@illumini/eslint-config/react"
}
```

### React Native Config

Includes everything in the default, TypeScript and React config, plus environment specification and react-native specific rules with

- [`@react-native-community/eslint-config`](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme)

```sh
npm install --save-dev @illumini/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-react-hooks typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jsx-a11y @react-native-community/eslint-config
```

**In your `.eslintrc`:**

```json
{
  "extends": "@illumini/eslint-config/react-native"
}
```

## Specifying Environments

Our **default** config purposefully does not specify a certain environment as to not make any assumptions about your project. The only environment we do specify be default is `es6`. You can see all the [default settings here](https://github.com/IlluminiTech/eslint-config/blob/master/index.js).

Therefore, you should specify your project's environment yourself in your ESLint config. For example:

```json
{
  "extends": "@illumini",
  "env": {
    "browser": true,
    "node": true
  }
}
```

View all available environments in the [ESLint Docs](https://eslint.org/docs/user-guide/configuring#specifying-environments)

## Editor Integration & Autoformatting

Once you've installed the config, you probably want your editor to lint and fix your code for you.

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): `View → Extensions` then find and install ESLint
2. Reload the editor
3. In your VS Code user settings `Code/File → Preferences → Settings` or `CMD/CTRL + ,` click the `{}` icon in the top right corner to modify your `settings.json` file

   ```json
   "eslint.alwaysShowStatus": true,
   // An array of language identifiers specify the files to be validated
   "eslint.validate": [
     { "language": "html", "autoFix": true },
     { "language": "javascript", "autoFix": true },
     { "language": "javascriptreact", "autoFix": true },
     { "language": "typescript", "autoFix": true },
     { "language": "typescriptreact", "autoFix": true }
   ],
   // Turn off prettier extension for js, jsx, ts, tsx files since we're handling that with ESLint
   "prettier.disableLanguages": [
     "javascript",
     "javascriptreact",
     "typescript",
     "typescriptreact"
    ],
   ```

## Pre-commit Hook

As another line of defence, if you want ESLint to automatically fix your errors on commit, you can use [`lint-staged`](https://github.com/okonet/lint-staged) with [`husky`](https://github.com/typicode/husky), which manages git hooks.

1. `npm install --save-dev lint-staged husky`
2. In your `package.json`:

   ```json
   {
     "lint-staged": {
       "*.js": ["eslint --fix"]
     },
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged"
       }
     }
   }
   ```

## Publishing to npm

Read npm's docs on [How to Update a Package](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-a-package).

1. `npm login`
   - Make sure you're logged into illumini's npm account with the credentials from 1pass. `npm whoami` will tell you if you're already logged in.
2. `npm version <update_type>`
   - `update_type` can be `patch`, `minor`, or `major`. If you don't know which one to use, read up about [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning).
3. `npm publish`

## Overriding Rules

If you'd like to override any rules, you can add the rules to your `.eslintrc` file.

```json
{
  "extends": "@illumini",
  "rules": {
    "no-console": "off"
  }
}
```
