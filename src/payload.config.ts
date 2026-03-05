import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { env } from '@/lib/env'
import { Collections } from './collections'
import { Users } from './collections/Users'
import { isDevelopment } from './lib/dev'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin: isDevelopment
      ? {
          email: env.CMS_SEED_ADMIN_EMAIL,
          password: env.CMS_SEED_ADMIN_PASSWORD,
        }
      : false,
  },
  collections: Collections,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
  }),
  secret: env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
