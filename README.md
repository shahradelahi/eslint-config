# @shahrad/eslint-config

My personal eslint config for [ESLint](https://eslint.org/) with [Typescript](https://www.typescriptlang.org/) recommended rules.

## Install

```bash
pnpm i -D @shahrad/eslint-config
```

## Usage

```javascript
// -- eslint.config.js
import { defineConfig } from '@shahrad/eslint-config';

export default defineConfig(
  { ignores: ['dist/**'] },
  // more configs
)
```

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi)
