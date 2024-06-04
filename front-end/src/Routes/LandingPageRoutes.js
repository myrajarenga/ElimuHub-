import App from '../Components/App'
import SignInPage from '../Components/UserAuthForms/SignIn/Page'
import SignUpPage from '../Components/UserAuthForms/SignUp/Page';
import CommingSoon from '../Components/CommingSoonPage';

//Implemetation of the home "/" route
export const HomeRoute = {
        path: '/',
        element: <App />
};

//Implementation of the sign-in "/signIn" route
export const SignInRoute = {
    path: '/signIn',
    element: <SignInPage />
};

//Implementation of the sign-up "/signUp" route
export const SignUpRoute = {
    path: '/signUp',
    element: <SignUpPage />
}

//Implementation of the comming-soon "/comming-soon" route
export const CommingSoonRoute = {
    path: '/comming-soon',
    element: <CommingSoon TimeLine="Jun 10, 2024 00:00:00"/>
}