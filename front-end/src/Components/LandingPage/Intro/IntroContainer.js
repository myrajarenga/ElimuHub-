/*
    This module contains code related to the IntroContiner Component.
    This component makes it possible to have a container that carries the intro content.
*/
import Nav from "../Nav/Nav";
import IntroContentContainer from "./IntroContentContainer";

const IntroContainer = () => {
    return(
        <div className="h-[100%] lg:h-[90%] ui container" id="home">
            {/* inclusion of the nav component */}
            <Nav />
            
            {/* The component that holds the image and text containers*/}
            <IntroContentContainer />
        </div>
    );
}

export default IntroContainer;