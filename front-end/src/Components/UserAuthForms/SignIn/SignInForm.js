/*
    This module contains the SingInForm component.
    This is the component that we use to provide a way for users to sign into the system.
*/

import { Link } from "react-router-dom";
import OrDivider from "../Shared/OrDivider";

const SignInForm = () => {
    return(
        <div className="h-[100%] flex items-center justify-center">
            <div className="ui form w-[60%] bg-white px-6 pt-10 pb-8 mt-8 shadow-xl rounded-[8px]">
                <h2 className="ui header text-center">Sign In</h2>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <div className="field">
                    <Link to="/comming-soon">
                        <div>Forgot Password?</div>
                    </Link>
                </div>
                <div className="field w-full">
                    <Link to="/comming-soon">
                        {/* inclusion of the id signInButton makes sure that the appearance of the sign in button is in accordance with our customization */}
                        <div className="ui button w-full" id="signInButton">Sign In</div>
                    </Link>
                </div>
                <div className="field w-full text-center">
                    <Link to="/signUp">
                        <div>Don't have an account</div>
                    </Link>
                </div>
                <div className="mt-[20px] w-full">
                    <OrDivider />
                </div>
                <div className="mt-[20px] w-full">
                    <Link to="/comming-soon">
                        <button class="ui basic button w-full">
                            <i class="google icon"></i>
                            Sign In with Google
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;