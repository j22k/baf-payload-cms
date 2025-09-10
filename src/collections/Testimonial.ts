import { CollectionConfig } from 'payload';

const Testimonial: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'stars',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Testimonial;
