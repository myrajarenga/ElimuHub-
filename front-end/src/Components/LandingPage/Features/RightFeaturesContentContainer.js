/*
    This module contains the RightFeaturesContentContainer component
    This component is used to hold feature components that have their images on the right.
*/

import FeaturesImageContainer from "./FeaturesImageContainer";
import FeaturesTextContainer from "./FeaturesTextContainer";

const RightFeaturedContentContainer = ({imageUrl, header, text, borderDirection}) => {
    return(
        //Creation of the grid and inclusion of a 5px divider
        //Improvement of the responsivenes using grid difference
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x-[5px] md:divide-[#005C53] w-[100%]">
                {/* Making sure that the text container is on the left of the gird */}
                <FeaturesTextContainer
                    header = {header}
                    text = {text}
                    //inclusion of the image url to be used by the images that are shown in small screens
                    imageUrl={imageUrl}
                />
                {/* Making sure that the image is on the right of the gird */}
                <FeaturesImageContainer 
                    imageUrl={imageUrl}
                    borderDirection={borderDirection}
                />
            
        </div>
    );
};

export default RightFeaturedContentContainer;