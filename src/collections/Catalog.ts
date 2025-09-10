import { CollectionConfig } from 'payload';

const Catalog: CollectionConfig = {
  slug: 'catalogs',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'uploadDate',
      type: 'date',
      admin: {
        readOnly: true,
      },
      defaultValue: () => new Date(),
    },
  ],
};

export default Catalog;
