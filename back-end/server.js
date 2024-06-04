/*
    This is the folder that contains the code that runs the server, and also contains all the configs of the server
*/

import express from 'express';
import router from './Routes/AuthRoutes.js'
//dotenv dependerncy that is used to read environment variables
import dotenv from 'dotenv';

//Configuration of the dotenv dependerncy
dotenv.config();

//Extraction of the port number from the env file
const PORT = process.env.PORT || 3000;

//Creation of the application server
const App = express();

App.use('/api', router);

App.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})