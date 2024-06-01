/*
    This module contains the IntroTextContainer component.
    This component holds the intro text to the sign in page.
*/

import { Link } from "react-router-dom"

const IntroTextContainer = ({backgroundColor, textColor}) => {
    //creation of the class strings
    const containerClassString = `h-[100%] ${backgroundColor} flex items-center justify-center rounded-[4px]`
    const headerClassString = `text-[47px] ${textColor} font-bold`
    const sloganClassString = `text-[20px] ${textColor}`
    return(
        <div className={containerClassString}>
            <Link to="/">
                <div className="text-center">
                    <div className={headerClassString}>ElimuHub</div>
                    <div className={sloganClassString}>We empower and connect learners.</div>
                </div>
            </Link>
        </div>
    );
}

export default IntroTextContainer;