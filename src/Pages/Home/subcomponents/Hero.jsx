import {NavLink, Link} from 'react-router-dom';
import {decode} from 'html-entities';
import { BackgroundImage } from 'react-image-and-background-image-fade';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="top-nav">
                <div className="links">
                    <ul>
                        <li><NavLink exact to="/weekend-winner" activeClassName="sub-nav-active">16/1 {decode('&')} 20/1 Weekend Winners</NavLink></li>
                        <li><NavLink exact to="/mail-acca" activeClassName="sub-nav-active">Exclusive Email ACCA</NavLink></li>
                        <li><NavLink exact to="/betting-news" activeClassName="sub-nav-active">Betting News</NavLink></li>
                        <li><NavLink exact to="/daily-tips" activeClassName="sub-nav-active">Daily Tips</NavLink></li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="https://twitter.com" className="social-twitter"> <i className="fab fa-twitter" aria-hidden="true"></i> </a></li>
                        <li><a href="https://telegram.com" className="social-telegram"> <i className="fab fa-telegram" aria-hidden="true"></i> </a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-section">
                <Link to="/football-tips/">
                <BackgroundImage
                    src='/assets/images/bg.jpeg'
                    width='2560px'
                    height='400px'
                    isResponsive
                    useChild
                >
                    <div className="bg-content">
                        <div className="title">FA Cup Classic</div>
                    </div>
                </BackgroundImage>
                </Link>
            </div>
        </div>
    )
}

export default Hero