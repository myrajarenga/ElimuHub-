//This module contains the Socials component that holds all the infor on the social media section

const Socials = () => {
    return(
        <div>
            <div>
                <h4 className="ui header">Follow Us On</h4>
            </div>
            <div className="flex mt-[20px] gap-[20px]">
                <div className='text-[24px]'>
                    <a href="/">
                        <i class="facebook f icon"></i>
                    </a>
                </div>
                <div className='text-[24px]'>
                    <a href="/">
                        <i class="twitter icon"></i>
                    </a>
                </div>
                <div className='text-[24px]'>
                    <a href="/">
                        <i class="instagram icon"></i>
                    </a>
                </div>
                <div className='text-[24px]'>
                    <a href="/">
                        <i class="youtube icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Socials;