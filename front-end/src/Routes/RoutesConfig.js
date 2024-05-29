//This module contains the conguration of the routes

import { createBrowserRouter } from 'react-router-dom';
import {HomeRoute, SignInRoute, SignUpRoute} from './LandingPageRoutes';

const router = createBrowserRouter([
    HomeRoute,
    SignInRoute,
    SignUpRoute
]);

export default router;