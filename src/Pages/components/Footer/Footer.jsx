const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src="/assets/images/augurlogo.png" alt="Augur Tips Logo"/>
            </div>
            <div className="footer-body">
                <div className="gamble-aware">
                    <img className="over-18" src="/assets/images/18.png" alt="18+"/>
                    <img className="bga" src="/assets/images/bga.png" alt="Be Gamble Aware"/>
                </div>
                <div className="footer-text border-bottom">
                    <p>BeGambleAware.org aims to promote responsibility in gambling. They provide information to help you make informed decisions about your gambling.</p>
                    <p>Call the National Gambling Helpline</p>
                    <p>0808 8020 133 8am to midnight, 7 days a week.</p>
                    <p>We are committed to <b>responsible gambling</b> and have a number of ways to help you stay in control and keep gambling fun.</p>
                    <p>You must be 18 years old or over to use this site.</p>
                    <p>Please bet responsibly.</p>
                </div>
                <div className="footer-text">
                    Copyright ©  2021
                </div>
                <div className="footer-text">
                    Built with <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}}></i> by Ghost <i className="fas fa-ghost" style={{color: "white"}}></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer