module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended'
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react-refresh',
    'jsx-a11y'
  ],
  rules: {
    'camelcase': 'error',
    'class-methods-use-this': 'warn',
    'no-mixed-operators': 'off',
    'no-restricted-exports': 'warn',
    'jsx-a11y/alt-text': [2, {
      'elements': ['img', 'object', 'area', 'input[type=\"image\"]'],
      'img': ['Media', 'animated.img'],
    }],
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.tsx', '**/setupTests.ts'] }],
    'import/order': 'warn',
    '@typescript-eslint/naming-convention': ['warn',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: ['variableLike', 'objectLiteralProperty'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: ['objectLiteralProperty', 'objectLiteralMethod'],
        format: null,
        filter: {
          regex: '[a-z0-9]+(?:-[a-z0-9]+)*',
          match: true
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        'checksVoidReturn': {
          'arguments': false,
          'attributes': false,
        },
      },
    ],
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
