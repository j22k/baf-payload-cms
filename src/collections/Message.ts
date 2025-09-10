import { CollectionConfig } from 'payload';

const Message: CollectionConfig = {
  slug: 'messages',
  access: {
    create: () => true, // Anyone can send a message
  },
  timestamps: true, // adds createdAt & updatedAt
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Unread', value: 'unread' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
      ],
      defaultValue: 'unread',
    },
  ],
};

export default Message;
