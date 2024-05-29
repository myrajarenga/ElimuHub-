/*
    This module contains the RightFeaturesContentContainer component
    This component is used to hold feature components that have their images on the right.
*/

import FeaturesImageContainer from "./FeaturesImageContainer";
import FeaturesTextContainer from "./FeaturesTextContainer";

const RightFeaturedContentContainer = ({imageUrl, header, text, borderDirection}) => {
    return(
        //Creation of the grid and inclusion of a 5px divider
        <div className="grid grid-cols-2 divide-x-[5px] divide-[#005C53] h-[90vh] w-[100%]">
            <div className="">
                {/* Making sure that the text container is on the left of the gird */}
                <FeaturesTextContainer
                    header = {header}
                    text = {text}
                />
            </div>
            <div className="">
                {/* Making sure that the image is on the right of the gird */}
                <FeaturesImageContainer 
                    imageUrl={imageUrl}
                    borderDirection={borderDirection}
                />
            </div>
            
        </div>
    );
};

export default RightFeaturedContentContainer;