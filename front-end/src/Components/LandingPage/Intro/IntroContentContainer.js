/*
    This module container the IntroContentContainer component.
    This component is the one that holds the IntroTextContainer component and the IntroImageContainer components.
*/
import IntroImageContainer from "./IntroImageContainer";
import IntroTextContainer from "./IntroTextContainer";

const IntroContentContainer = () => {
    return(
        // Making sure that the component is a grid that has two columns with equal sizes
        <div className="h-[100%] ui grid">
            <div className="eight wide column">
                {/* Inclusion of the text container component */}
                <IntroTextContainer />
            </div>
            <div className="eight wide column">
                {/* Inclusion of the image container component */}
                <IntroImageContainer />
            </div>
        </div>
    )
}

export default IntroContentContainer;