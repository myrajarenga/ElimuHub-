/*
    This module contains the OrDivider component.
    This component is used to show alternative options in the authentication forms.
*/

const OrDivider = () => {
    return(
        <div className="w-full">
            {/* Making sure that the or button is withing the parent that has its content centered both horizontaly and verticaly */}
            <div className="w-full h-[2px] bg-[#CCCCCC] flex items-center justify-center">
                <div className="px-[16px] bg-white">Or</div>
            </div>
        </div>
    );
};

export default OrDivider;