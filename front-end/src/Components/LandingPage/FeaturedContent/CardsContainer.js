/*
    This module contains the CardsContainer module.
    This component is used to hold several content cards
*/

import SingleCard from "./SingleCard";

const CardsContainer = () => {
    return(
        /* Making sure that the grid has 4 columns and a gap between them. */
        <div className="grid grid-cols-4 gap-8">
            {/*
                Implementation of the single card components.
                These components require;
                    the subject
                    the topic
                    the description
                    the userName
                    the number of likes
                    the avatar image URL
                    the URL to the image related to the card
            */}
            <div>
                <SingleCard
                    subject="Chemistry"
                    topic="Periodic Table"
                    description="Lorem ipsum dolor sit amet consectetur. Vitae vel a massa vel nulla accumsan 
                    velit integer luctus."
                    userName="Bravin Atonya"
                    likes="1,048"
                    avatarUrl="/images/user1.jpg"
                    imageUrl="/images/periodicTable.jpg"
                />
            </div>
            <div>
                <SingleCard 
                    subject="Physics"
                    topic="Static Electricity"
                    description="Lorem ipsum dolor sit amet consectetur. Vitae vel a massa vel nulla accumsan 
                    velit integer luctus."
                    userName="Myra Jarenga"
                    likes="1,000"
                    avatarUrl="/images/user2.jpg"
                    imageUrl="/images/electricity.jpg"
                />
            </div>
            <div>
                <SingleCard 
                    subject="Biology"
                    topic="Human Heart"
                    description="Lorem ipsum dolor sit amet consectetur. Vitae vel a massa vel nulla accumsan 
                    velit integer luctus."
                    userName="Laban kibet"
                    likes="1,500"
                    avatarUrl="/images/user1.jpg"
                    imageUrl="/images/heart.jpg"
                />
            </div>
            <div>
                <SingleCard 
                    subject="English"
                    topic="Literary Devices and Techniques"
                    description="Lorem ipsum dolor sit amet consectetur. Vitae vel a massa vel nulla accumsan 
                    velit integer luctus."
                    userName="Ace Atonya"
                    likes="1,250"
                    avatarUrl="/images/user2.jpg"
                    imageUrl="/images/english.jpg"
                />
            </div>
        </div>
    );
};

export default CardsContainer;