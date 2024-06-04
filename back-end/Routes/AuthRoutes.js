/*
    This is the module that contains the configurations of Authentication routes(signUp and signIn)
*/

import express from 'express';
import { signIn, signUp } from '../Controllers/AuthControllers.js';

//Creation of the router object from express
const router = express.Router();

//Making sure that we can read from the body of the requests
router.use(express.json());

router.get('/signIn', signIn);
router.get('/signUp', signUp);

export default router;