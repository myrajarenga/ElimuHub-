/*
    This module contains the FeaturedContentContainer component
    This component holds the heading of the fetured content section and the CardsContainer component
*/

import CardsContainer from "./CardsContainer";

const FeaturedContentContainer = () => {
    return(
        <div className="w-[100%] mt-[35px] pb-[16px]">
            <h2 className="w-[100%] text-center ui header" id="featuredContent">Featured Content</h2>
            <div className="mb-[55px]"></div>
            {/* Making sure that the cards container is centrally aligned */}
            <div className="w-[100%] flex justify-center align-center">
                 {/* Inclusion of the CardsContainer component */}
                <CardsContainer />
            </div>
        </div>
    );
};

export default FeaturedContentContainer;