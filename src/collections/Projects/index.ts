import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'organization',
      type: 'relationship',
      required: false,
      relationTo: 'organizations',
    },
  ],
}
