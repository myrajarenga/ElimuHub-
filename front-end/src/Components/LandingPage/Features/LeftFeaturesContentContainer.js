/*
    This module contains the LeftFeaturesContentContainer component
    This component is used to hold feature components that have their images on the left.
*/
import FeaturesImageContainer from "./FeaturesImageContainer";
import FeaturesTextContainer from "./FeaturesTextContainer";

const LeftFeaturesContentContainer = ({imageUrl, header, text, borderDirection}) => {
    return(
        //Creation of the grid and inclusion of a 5px divider
        <div className="grid grid-cols-2 divide-x-[5px] h-[90vh] w-[100%]">
            <div className="">
                {/* Making sure that the image is on the left of the gird */}
                <FeaturesImageContainer 
                    imageUrl={imageUrl}
                    borderDirection={borderDirection}
                />
            </div>
            <div className="">
                {/* Making sure that the text container is on the right of the gird */}
                <FeaturesTextContainer
                    header = {header}
                    text = {text}
                />
            </div>
            
        </div>
    );
};

export default LeftFeaturesContentContainer;