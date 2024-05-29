//This module contains the LandingPage Component that holds the information in the landing page.

import ContactsContainer from "./Contacts/ContactsContainer";
import FAQContainer from "./FAQ/FAQContainer";
import FeaturedContentContainer from "./FeaturedContent/FeaturedContentContainer";
import FeaturesContainer from "./Features/FeaturesContainer";
import IntroContainer from "./Intro/IntroContainer";
import Nav from "./Nav";

const LandingPage = () => {
    return(
        <div className="ui container h-[100%]">
            {/* inclusion of the nav component */}
            <Nav />
            {/* inclusion of the intro section */}
            <IntroContainer />
            {/* Inclusion of the features section */}
            <FeaturesContainer />
            {/* Inclusion of the featured content section */}
            <FeaturedContentContainer />
            {/* Inclusion of the FAQ section */}
            <FAQContainer />
            {/* Inclusion of the Contacts section */}
            <ContactsContainer />
        </div>
    );
};

export default LandingPage;