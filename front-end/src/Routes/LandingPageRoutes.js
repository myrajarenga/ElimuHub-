import App from '../Components/App'
import SignInPage from '../Components/SignIn/Page'
import SignUpPage from '../Components/SignUp/Page';

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