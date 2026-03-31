import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Site Title', type: 'string', initialValue: 'Hans Cao Photograph' }),
    defineField({ name: 'heroText', title: 'Hero Text', type: 'string' }),
    defineField({ name: 'aboutText', title: 'About Text', type: 'text', rows: 4 }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required() })
          ]
        }
      ]
    })
  ]
});
