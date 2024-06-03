/*
    This module contains the Nav component
    This component holds all the information within the nav bar
*/

//inclusion of the Link component to help with navigation
import { Link } from "react-router-dom";
import SmallScreenMenu from "./SmallScreenMenu";

const Nav = () => {
    return(
        <div className="navContainer pt-[8px] bg-white w-full pr-[60px]">
            <div class="ui secondary menu">
                <a className="item" href="/">
                    <span className="font-bold text-[24px]">ElimuHub</span>
                </a>
                <div className="right menu" id="hidden-options-display">
                <a class="active item" href="#home">
                    Home
                </a>
                <a className="item" href="#features">
                    Features
                </a>
                <a className="item" href="#featuredContent">
                    Featured Content
                </a>
                <a className="item" href="#FAQ">
                    FAQ
                </a>
                <a className="item" href="#contacts">
                    Contacts
                </a>
                </div>
                <div className="right menu" id="hidden-options-display">
                    <div className="item">
                        {/* Making sure that the button redirects us to /signUp URL when clicked*/}
                        <Link to="/signUp">
                            {/* Making sure that the signUp button is in line with our customization */}
                            <button className="small ui button primary" id="signUpButton">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    <div className="item">
                        {/* Making sure that the button redirects us to /signIn URL when clicked*/}
                        <Link to="/signIn">
                            <button className="small ui button red" id="signInButton">
                                Sign In
                            </button>
                        </Link>
                    </div>                  
                </div>
                <div className="right menu">
                    <div className="item" id="hidden-display">
                            <SmallScreenMenu />
                    </div>
                </div>
                  
            </div>
        </div>
    )
};

export default Nav;