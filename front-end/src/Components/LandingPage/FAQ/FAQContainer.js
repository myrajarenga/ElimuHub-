/*
    This module contains the FAQContainer component.
    This component contains all the implementations to QuestionContainer components. 
*/

import QuestionContainer from "./QuestionContainer";

const FAQContainer = () => {
    return(
        <div className="pt-[24px]" id="FAQ">
            {/* Making sure that we have a shadow around our container */}
            <section class="bg-gray-100 py-24 px-3 pt-10 pb-3 mt-8 shadow-xl rounded-[8px]">
            <h2 class="mb-[20px] ui header font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {/* A series to QuestionContainer components
                            These components require
                                The question.
                                The answer to the question.
                        */}
                        <QuestionContainer 
                            question="What is ElimuHub?"
                            answer="ElimuHub is Where Knowledge Meets Opportunity. Empowering students across 
                            Kenya with seamless access to learning resources, assignments, and school 
                            announcements. Unlock your potential, anytime, anywhere, with our 
                            comprehensive CMS tailored for Kenyan students. Join a vibrant community 
                            dedicated to academic excellence and collaboration. Experience the future of 
                            education today with Kenya EduHub."
                        />
                        <QuestionContainer 
                            question="What file extensions are acceptable as content?"
                            answer="For content on ElimuHub, acceptable file extensions typically include common formats like .docx for documents, .pdf for portable documents, .jpg or .png for images, .mp4 for videos, and .mp3 for audio files. These extensions ensure compatibility and accessibility across various devices and platforms."
                        />
                        <QuestionContainer 
                            question="How can I become a member of ElimuHub?"
                            answer="To become a member of ElimuHub, you can usually sign up through the website by providing some basic information such as your name, email address, and possibly your school affiliation. Look for a Sign Up button on the homepage or navigation menu, and follow the prompts to create your account. Once registered, you'll likely have access to features like uploading content, participating in discussions, and engaging with other members within the platform."
                        />
                        <QuestionContainer 
                            question="What age is acceptable on ElimuHub?"
                            answer="On ElimuHub, the acceptable age typically aligns with legal requirements, which often means individuals must be at least 13 years old to create an account and use the platform independently. This age restriction is in accordance with regulations like the Children's Online Privacy Protection Act (COPPA). However, users under 13 may be allowed to use the platform with parental consent or under parental supervision, depending on the platform's policies and regulations. It's essential to review the platform's terms of service and privacy policy for specific age requirements and guidelines regarding underage users."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQContainer;