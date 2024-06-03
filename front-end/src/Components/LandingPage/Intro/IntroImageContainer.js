/*
    This module contains the IntroImageContainer component.
    This component basically contains a centered image to the intro.
*/
const IntroImageContainer = () => {
    return(
        /*
            Making sure that the image is centered and the width and height of the container are equal to that of the parent.
            Responsive image that hides in small screens
        */
        <div className="flex justify-center items-center h-[100%] hidden md:inline-flex">
            {/* giving a padding of 16 pixels to the right to make sure that the image aligns to the sign in button on the nav. */}
            <div className="pr-[16px]">
                <img alt="e-learning" src="./Images/IntroImage.jpg" className="w-[100%] rounded-[4px]" />
            </div>
        </div>
    );
}

export default IntroImageContainer;