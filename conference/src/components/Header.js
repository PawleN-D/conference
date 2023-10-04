const Header = () => {
    return ( 
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Cape Town Code Camp
                        </h4>
                    </div>
                    <div className="text-dark">
                        Hello, Mr Seremu &nbsp;&nbsp;
                        <span>
                            <a href="http://">sign out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;