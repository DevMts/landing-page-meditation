import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Compatibiliza os presets antigos com o Flat Config
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Regras recomendadas do Next.js + TypeScript
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      'prefer-arrow-callback': 'warn',

    }
  })
]

export default eslintConfig