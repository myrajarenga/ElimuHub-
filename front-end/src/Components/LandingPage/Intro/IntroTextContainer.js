/*
    This module contains the IntroTextContainer component.
    This component holds the text within the intro section.
*/

// Inclusion of the Link component that helps us with route navigation.
import { Link } from "react-router-dom";

const IntroTextContainer = () => {
    return(
        // A contianer that has same hight and width as the parent, and centered content.
        <div className="w-[100%] flex justify-center items-center h-[100%]">
            <div className="p-[16px]">
                {/* The heading text */}
                <h1 className="font-bold text-[40px]">
                    Kenya EduHub <br/>
                    Empowering Students, <br/>
                    Connecting Learning <br/>
                </h1>

                {/* Brief text explaining what ElimuHub is */}
                <p className="mt-[20px] mb-[20px]">
                    ElimuHub is Where Knowledge Meets Opportunity. Empowering students across 
                    Kenya with seamless access to learning resources, assignments, and school 
                    announcements. Unlock your potential, anytime, anywhere, with our 
                    comprehensive CMS tailored for Kenyan students. Join a vibrant community 
                    dedicated to academic excellence and collaboration. Experience the future of 
                    education today with Kenya EduHub.
                </p>

                {/* Link component linked to the button, which makes the button redirect us to /signUp URL when clicked */}
                <Link to="/signUp">
                    <button className="ui right labeled icon button primary" id="signUpButton">
                        <i className="right arrow icon"></i>
                        Register Today
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IntroTextContainer;