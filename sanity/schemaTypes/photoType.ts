import { defineField, defineType } from 'sanity';

export const photoType = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'titleZh', title: 'Title (ZH)', type: 'string' }),
    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'locationZh', title: 'Location (ZH)', type: 'string' }),
    defineField({ name: 'locationEn', title: 'Location (EN)', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'cityZh', title: 'City (ZH)', type: 'string' }),
    defineField({ name: 'cityEn', title: 'City (EN)', type: 'string' }),
    defineField({ name: 'capturedAt', title: 'Captured At', type: 'date', validation: (rule) => rule.required() }),
    defineField({ name: 'camera', title: 'Camera', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'lens', title: 'Lens', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionZh', title: 'Description (ZH)', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionEn', title: 'Description (EN)', type: 'text', rows: 4 }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      validation: (rule) => rule.required().min(1)
    }),
    defineField({ name: 'isFeatured', title: 'Featured On Home', type: 'boolean', initialValue: false }),
    defineField({ name: 'sortOrder', title: 'Sort Order', type: 'number' })
  ]
});
