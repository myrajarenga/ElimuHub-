/*
    This module contains the FeaturesTextContainer component.
    This component contains text related to paticular features.
*/

//Inclusion of the Link component that helps with navigation.
import { Link } from "react-router-dom";

const FeaturesTextContainer = ({header, text, imageUrl}) => {
    return(
        //Making sure that the container is equsl to the parent in height and text is aligned to the center
        //woking on the responsiveness of the featurestext container using the padding bottom
        <div className="px-[32px] pb-[40px] md:pb-[40px] flex items-center justify-center h-[100%]">
            <div className="w-[100%]">
                <h3 className="ui header">{header}</h3>
                {/* Inclusion of the image that hides in small screens and shows in large ones */}
                <img
                    className="rounded-[8px] md:hidden"
                    alt="e-learning"
                    src={imageUrl}
                />

                {/* Adding of space between the text and the image using padding on the top of the text */}
                <div className="pt-[20px] md:pt-[0px]"><p>{text}</p></div>
                <div className="mt-[20px]">
                    {/* use of the Link component to navigate to /signUp URL */}
                    <Link to="/signUp">
                        <button className="ui right labeled icon button red" id="signUpButton">
                            <i className="right arrow icon"></i>
                            Register Today
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturesTextContainer;