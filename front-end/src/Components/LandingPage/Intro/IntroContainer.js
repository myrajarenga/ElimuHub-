/*
    This module contains code related to the IntroContiner Component.
    This component makes it possible to have a container that carries the intro content.
*/
import IntroContentContainer from "./IntroContentContainer";

const IntroContainer = () => {
    return(
        <div className="h-[100%] w-[100%]">
            {/* The component that holds the image and text containers*/}
            <IntroContentContainer />
        </div>
    );
}

export default IntroContainer;