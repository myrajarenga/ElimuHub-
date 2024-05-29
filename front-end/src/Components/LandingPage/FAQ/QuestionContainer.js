/*
    This module contains the implementation of the the QuestionContainer component.
    This component takes in the question and aswer.
*/
const QuestionContainer = ({question, answer}) => {
    return(
        <details>
            <summary class="py-2 outline-none cursor-pointer">{question}</summary>
            <div class="px-4 pb-4">
                <p>{answer}</p>
            </div>
        </details>
    );
};

export default QuestionContainer;