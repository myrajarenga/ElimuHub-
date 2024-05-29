//This module contains the NewsLetter componet that conains infor on how to subscribe to newsletters

const NewsLetter = () => {
    return(
        <div className="w-[100%]">
            <h4 className="ui header">NewsLetter</h4>
            <div>Subscribe to our newsletter to get updates on our latest offers!</div>
            <div class="ui action input mt-[20px]">
                <input type="text" placeholder="Enter Email"/>
                <button class="ui button red">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;