import path from 'path';
import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import dotenv from 'dotenv'; 

dotenv.config();

import Events from './collections/Events';
import Media from './collections/Media';
import Catalog from './collections/Catalog';
import Brand from './collections/Brand';
import Message from './collections/Message';
import Partner from './collections/Partner';
import Service from './collections/Service';
import Team from './collections/Team';
import Testimonial from './collections/Testimonial';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,   
  }),
  secret: process.env.PAYLOAD_SECRET as string,
  collections: [
    Events,
    Media,
    Brand,
    Catalog,
    Message,
    Partner,
    Service,
    Team,
    Testimonial,
  ],
});