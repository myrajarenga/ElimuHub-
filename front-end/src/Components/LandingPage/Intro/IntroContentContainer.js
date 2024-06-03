/*
    This module container the IntroContentContainer component.
    This component is the one that holds the IntroTextContainer component and the IntroImageContainer components.
*/
import IntroImageContainer from "./IntroImageContainer";
import IntroTextContainer from "./IntroTextContainer";

const IntroContentContainer = () => {
    return(
        /*
            Making sure that the component is a grids and the grid is flexible.
            1 column in small screen and 2 column from mid screen
        */
        <div className="h-[100%] w-[100%] grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {/* Inclusion of the text container component */}
            <IntroTextContainer />
            {/* Inclusion of the image container component */}
            <IntroImageContainer />
        </div>
    )
}

export default IntroContentContainer;