import {defineType} from 'sanity'

export default defineType({
  name: 'cases',
  title: 'Cases',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for better image cropping
      },
      validation: (Rule) => Rule.required(),
    },
  ],
})
