import { getPayload } from 'payload'
import { env } from '@/lib/env'
import config from '@/payload.config'
import { isDuplicateError } from '@/scripts/seed/lib/is-duplicate-error'

export async function seedAdmin() {
  const payload = await getPayload({ config })

  try {
    const response = await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_SEED_ADMIN_EMAIL,
        password: env.CMS_SEED_ADMIN_PASSWORD,
      },
    })

    console.log('Admin seeded:', response)
  } catch (error) {
    if (isDuplicateError(error, 'email')) {
      console.log('Admin user already exists')
    }

    console.error('Error seeding admin:', JSON.stringify(error, null, 2))
  }
}
