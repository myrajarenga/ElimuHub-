import IntroTextContainer from "../Shared/IntroTextContainer";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
    return(

        <div className="h-[100vh] w-[100vw] grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:inline">
                <IntroTextContainer
                    backgroundColor = "bg-[#13678A]"
                    textColor = "text-[#FFFFFF]"
                />
            </div>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;