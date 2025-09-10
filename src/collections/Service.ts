import { CollectionConfig } from 'payload';

const Service: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'servicename',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Service;
