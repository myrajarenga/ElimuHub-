import IntroTextContainer from "../Shared/IntroTextContainer";
import SignInForm from "./SignInForm";

const SignInPage = () => {
    return(
        <div className="h-[100vh] w-[100vw] grid grid-cols-1 md:grid-cols-2">
            {/* Making sure that the Intro container is hidded in small screens */}
            <div className="hidden md:inline">
                <IntroTextContainer
                    backgroundColor = "bg-[#DAFDBA]"
                    textColor = "text-[#13678A]"
                />
            </div>
            
            <SignInForm />
        </div>
    );
};

export default SignInPage;