import eslint from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import tseslint, { type ConfigWithExtends } from 'typescript-eslint';

const DEFAULT_CONFIG = tseslint.config(
   eslint.configs.recommended,
   ...tseslint.configs.recommended,
   {
     name: '@shahrad/eslint-config/rules',
     rules: {
       '@typescript-eslint/semi': 'off',
       '@typescript-eslint/no-explicit-any': 'off',
       '@typescript-eslint/no-unused-expressions': ['off', { allowShortCircuit: true }],
       '@typescript-eslint/no-unused-vars': [
         'off',
         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
       ],
     },
   }
);

export function defineConfig(...configs: InfiniteDepthConfigWithExtends[]): ConfigArray {
  return tseslint.config(...DEFAULT_CONFIG, ...configs);
}

// -- Types ---------------------------

export type InfiniteDepthConfigWithExtends = ConfigWithExtends | InfiniteDepthConfigWithExtends[];

export type ConfigArray = TSESLint.FlatConfig.ConfigArray;

export type { ConfigWithExtends } from 'typescript-eslint';
