//This module contains the conguration of the routes

import { createBrowserRouter } from 'react-router-dom';
import {CommingSoonRoute, HomeRoute, SignInRoute, SignUpRoute} from './LandingPageRoutes';

const router = createBrowserRouter([
    HomeRoute,
    SignInRoute,
    SignUpRoute,
    CommingSoonRoute
]);

export default router;