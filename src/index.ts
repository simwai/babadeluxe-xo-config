/* eslint-disable  @typescript-eslint/naming-convention */
import { type FlatXoConfig } from 'xo'

const config: FlatXoConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      '**/build/**',
      '**/coverage/**',
      '**/.vscode-test/**',
    ],
  },
  {
    prettier: true,
    space: 2,
    semicolon: false,
    rules: {
      'no-await-in-for-loop': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'max-len': 'off',
      'no-mixed-operators': 'off',
      quotes: 'off',
      semi: ['error', 'never'],
      'space-before-function-paren': 'off',
      indent: 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'block-spacing': 'off',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      'computed-property-spacing': 'off',
      'func-call-spacing': 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'no-multi-spaces': 'off',
      'no-trailing-spaces': 'off',
      'no-whitespace-before-property': 'off',
      'padded-blocks': 'off',
      'rest-spread-spacing': 'off',
      'space-before-blocks': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',
      'template-curly-spacing': 'off',
      'yield-star-spacing': 'off',

      strict: 'off',
      camelcase: 'off',
      'no-new': 'off',
      'no-return-assign': 'warn',
      'no-useless-constructor': 'off',
      'no-async-promise-executor': 'error',
      'no-new-func': 'error',
      'no-undef': 'off',
      'no-inline-comments': 'off',

      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-array-some': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-event-target': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-empty-file': 'off',

      curly: ['error', 'multi-line'],
      eqeqeq: 'warn',
      'no-throw-literal': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-empty-function': 'warn',
      'no-lonely-if': 'error',
      'spaced-comment': ['error', 'always'],
      'capitalized-comments': ['warn', 'always'],
      yoda: 'error',
      'max-nested-callbacks': ['warn', { max: 7 }],
      'max-statements-per-line': ['error', { max: 3 }],

      'no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/naming-convention': [
        'error',

        // Default rule - camelCase for most identifiers
        {
          selector: 'default',
          format: ['camelCase'],
        },

        // Variables - allow camelCase, UPPER_CASE (constants), leading underscore for unused
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },

        // Parameters - allow leading underscore for unused parameters
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },

        // Functions - allow PascalCase for React components, camelCase for regular functions
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },

        // Type-like things (classes, interfaces, types, enums) - PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },

        // Type parameters (generics) - PascalCase
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
        },

        // Enum members - UPPER_CASE
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },

        // Object literal properties - camelCase (but overridden by more specific rules below)
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase'],
        },

        // Class properties - camelCase by default
        {
          selector: 'classProperty',
          format: ['camelCase'],
        },

        // Static properties - allow UPPER_CASE for constants
        {
          selector: 'classProperty',
          modifiers: ['static'],
          format: ['camelCase', 'UPPER_CASE'],
        },

        // Private properties - require leading underscore
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },

        // Private readonly properties - require leading underscore
        {
          selector: 'classProperty',
          modifiers: ['private', 'readonly'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },

        // Private static properties - require leading underscore, allow UPPER_CASE
        {
          selector: 'classProperty',
          modifiers: ['private', 'static'],
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'require',
        },

        // Private static readonly - require leading underscore, allow UPPER_CASE
        {
          selector: 'classProperty',
          modifiers: ['private', 'static', 'readonly'],
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'require',
        },

        // Class methods - camelCase
        {
          selector: 'classMethod',
          format: ['camelCase'],
        },

        // Private methods - require leading underscore
        {
          selector: 'classMethod',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },

        // Accessors (getters/setters) - camelCase
        {
          selector: 'accessor',
          format: ['camelCase'],
        },

        // Private accessors - require leading underscore
        {
          selector: 'accessor',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },

        // Object literal methods - camelCase
        {
          selector: 'objectLiteralMethod',
          format: ['camelCase'],
        },

        // Type properties (in interfaces/types) - camelCase
        {
          selector: 'typeProperty',
          format: ['camelCase'],
        },

        // Type methods (in interfaces/types) - camelCase
        {
          selector: 'typeMethod',
          format: ['camelCase'],
        },

        // Import names - allow any format (for third-party imports)
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },

        // Properties that require quotes (API responses, HTTP headers, etc.) - ignore formatting
        {
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },

        // Destructured variables - allow original names to be preserved
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },

        // Destructured properties - allow original names
        {
          selector: 'objectLiteralProperty',
          modifiers: ['destructured'],
          format: null,
        },
      ]
    },
  },
]

export default config
