import { access, read } from 'fs';
import { CollectionConfig } from 'payload';

const Events: CollectionConfig = {
  slug: 'events',
  access :{
    read: () => true, // Public can read events   
  },
  fields: [
    {
      name: 'event_name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',        // <-- Correct type for files
      relationTo: 'media',   // <-- Must match Media collection slug
    },
  ],
};

export default Events;
