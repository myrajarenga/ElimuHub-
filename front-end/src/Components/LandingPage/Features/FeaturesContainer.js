/*
    This module container the FeaturesContainer component.
    This component holds several Features content containers.
    The content container have two varieties, the right and the left.
    The right ones have their images on the right and the left have the images on the left.
*/

import RightFeaturesContentContainer from "./RightFeaturesContentContainer";
import LeftFeaturesContentContainer from "./LeftFeaturesContentContainer";

const FeaturesContainer = () => {
    return(
        //Making sure that the component's with is equal to the parent element.
        <div className="w-[100%]">
            <h2 className="w-[100%] text-center ui header" id="features">Features</h2>
            {/* 
                Implementation of the feature content container components
                This component requires that we pass to it;
                    the imageURL
                    the header
                    the text
            */}
            <LeftFeaturesContentContainer
                imageUrl="./Images/E-learning.jpg"
                header = "E-learning" 
                text = "Lorem ipsum dolor sit amet consectetur. Nulla sollicitudin sem sem nisl proin. Ut nec enim donec lectus mi dictum. Donec gravida a ut nulla mi consectetur. Mauris suscipit fringilla ipsum vestibulum augue vel ut. Elit diam nunc nulla turpis mi. Varius lobortis nisl purus lorem ultrices nullam dapibus. Neque leo in neque odio adipiscing adipiscing ac vel ac. Aenean cursus tempor justo ipsum vulputate. Et diam mollis cum est."
            />
            <RightFeaturesContentContainer
                imageUrl="./Images/notification.png"
                header = "Remote Announcements" 
                text = "Lorem ipsum dolor sit amet consectetur. Nulla sollicitudin sem sem nisl proin. Ut nec enim donec lectus mi dictum. Donec gravida a ut nulla mi consectetur. Mauris suscipit fringilla ipsum vestibulum augue vel ut. Elit diam nunc nulla turpis mi. Varius lobortis nisl purus lorem ultrices nullam dapibus. Neque leo in neque odio adipiscing adipiscing ac vel ac. Aenean cursus tempor justo ipsum vulputate. Et diam mollis cum est."
            />
             <LeftFeaturesContentContainer
                imageUrl="./Images/Assignments.jpg"
                header = "Remote Assignments" 
                text = "Lorem ipsum dolor sit amet consectetur. Nulla sollicitudin sem sem nisl proin. Ut nec enim donec lectus mi dictum. Donec gravida a ut nulla mi consectetur. Mauris suscipit fringilla ipsum vestibulum augue vel ut. Elit diam nunc nulla turpis mi. Varius lobortis nisl purus lorem ultrices nullam dapibus. Neque leo in neque odio adipiscing adipiscing ac vel ac. Aenean cursus tempor justo ipsum vulputate. Et diam mollis cum est."
            />
            <RightFeaturesContentContainer
                imageUrl="./Images/Verification2.jpg"
                header = "Result Authentication" 
                text = "Lorem ipsum dolor sit amet consectetur. Nulla sollicitudin sem sem nisl proin. Ut nec enim donec lectus mi dictum. Donec gravida a ut nulla mi consectetur. Mauris suscipit fringilla ipsum vestibulum augue vel ut. Elit diam nunc nulla turpis mi. Varius lobortis nisl purus lorem ultrices nullam dapibus. Neque leo in neque odio adipiscing adipiscing ac vel ac. Aenean cursus tempor justo ipsum vulputate. Et diam mollis cum est."
            />
        </div>
    );
};

export default FeaturesContainer;