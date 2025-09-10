import { access } from 'fs';
import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  access  : {
    read: () => true, // Public can read media
  },
  upload: true, // Enables file uploads
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;
