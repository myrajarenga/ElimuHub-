/*
    This module contains the FeaturesImageContainer component.
    This component holds the image related to a particular feature.
*/
const FeaturesImageContainer = ({imageUrl, borderDirection}) => {
    return(
        // Making sure that the image is aligned to the center
        //Making sure that the image hiddes in small screens and shows in large screens. This suplements the responsiveness of the features image container
        <div
            className= "md:items-center md:justify-center md:h-[100%] md:px-[32px] hidden md:flex"
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