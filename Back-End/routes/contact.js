import express, { Router } from 'express'

import { contactUs } from '../controllers/ContactAuth.js';
import { Subscriber } from '../controllers/Subscribe.js';

const route = express.Router();


route.post('/contact', contactUs);
route.post('/subscribe', Subscriber);

export default route;