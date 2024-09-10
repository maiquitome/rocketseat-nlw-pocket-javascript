import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // * assim dá erro
    // url: process.env.DATABASE_URL,

    // * com o zod não dá erro
    url: env.DATABASE_URL,
  },
})
