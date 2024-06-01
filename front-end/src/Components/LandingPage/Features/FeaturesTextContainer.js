/*
    This module contains the FeaturesTextContainer component.
    This component contains text related to paticular features.
*/

//Inclusion of the Link component that helps with navigation.
import { Link } from "react-router-dom";

const FeaturesTextContainer = ({header, text}) => {
    return(
        //Making sure that the container is equsl to the parent in height and text is aligned to the center
        <div className="px-[32px] flex items-center justify-center h-[100%]">
            <div className="w-[100%]">
                <h3 className="ui header">{header}</h3>
                <div><p>{text}</p></div>
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