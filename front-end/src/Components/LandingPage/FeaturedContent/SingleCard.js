/*
    This module contains the implementation of the cards as SingleCard component
*/

const SingleCard = ({subject, topic, description, userName, likes, avatarUrl, imageUrl}) => {
    return(
        <div className="ui card h-[100%] shadow-xl ring-1 ring-gray-900/5">
            <div className="content">
                <img alt="avatar" className="ui avatar image" src={avatarUrl} />
                    {userName}
            </div>
            <div className="image">
                <img alt="physics" src={imageUrl}/>
            </div>
            <div className="content">
                <a href="/" className="header">{subject}</a>
                <div className="meta">
                <span className="date">{topic}</span>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
            <div className="extra content">
                <div class="ui labeled button" tabindex="0">
                    <div class="ui red button">
                        <i class="heart icon"></i> Likes
                    </div>
                    <a href="/" class="ui basic red left pointing label">
                        {likes}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;