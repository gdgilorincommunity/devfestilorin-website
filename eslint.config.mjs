import { dirname } from 'path'
import { fileURLToPath } from 'url'

import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier'
import nextConfig from 'eslint-config-next'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// Extract plugins from nextConfig to ensure reference equality
const nextPlugins = Object.assign({}, ...nextConfig.map((c) => c.plugins))

export default tseslint.config(
  {
    // Global ignores, similar to .eslintignore
    ignores: [
      '.next/',
      'dist/',
      'build/',
      'node_modules/',
      'out/',
      'public/',
      'coverage/',
    ],
  },
  ...compat.extends('plugin:prettier/recommended'),
  ...nextConfig,
  {
    // Files to apply this configuration to
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        // Add any other specific global variables here if needed
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      ...nextPlugins,
      prettier: pluginPrettier,
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      // Custom rules
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      // Bypassing strict React Hooks rules for now
      'react-hooks/purity': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_.*?$',
        },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'react/self-closing-comp': 'warn',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
)
