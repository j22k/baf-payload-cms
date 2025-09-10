import { CollectionConfig } from 'payload';

const Brand: CollectionConfig = {
  slug: 'brands',
  access: {
    read: () => true, // Public read
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // links to Media collection
    },
  ],
};

export default Brand;
