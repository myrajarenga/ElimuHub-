/*
    This module contains the FeaturesImageContainer component.
    This component holds the image related to a particular feature.
*/
const FeaturesImageContainer = ({imageUrl, borderDirection}) => {
    return(
        // Making sure that the image is aligned to the center
        <div
            className= "flex items-center justify-center h-[100%] px-[32px]"
        >
            <img
                className="rounded-[8px]"
                alt="e-learning"
                src={imageUrl}
            />
        </div>
    );
};

export default FeaturesImageContainer;