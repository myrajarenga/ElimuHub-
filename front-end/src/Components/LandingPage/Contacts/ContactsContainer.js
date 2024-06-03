//This module contains the ContactsContainer component that holds infor within the Contacts section.

import About from "./About";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";

const ContactsContainer = () =>{
    return(
        <div className="w-[100%] mt-[35px] pb-[16px]">
            <h2 className="w-[100%] text-center ui header" id="contacts">Contacts</h2>
            <div className="mb-[35px]"></div>
            {/* Working on the responsiveness of the contact section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-[20%] bg-white px-6 pt-10 pb-3 mt-8 shadow-xl">
                <NewsLetter />
                <Socials />
                <About />
            </div>
        </div>
    );
};

export default ContactsContainer;