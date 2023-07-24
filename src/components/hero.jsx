import "../styles/header-style.css"
function Hero()
{
    return (
        <div className="hero-div">
            <div className="hero-text">
                <h1>
                    Make <br className="h1-break"/> Remote Work
                </h1>
                <p>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
            <button type="submit" className="learn-btn">
                Learn More
            </button>
            <div className="partner-brands">
                <img src="../images/client-databiz.svg" alt="" className="brand"/>
                <img src="../images/client-audiophile.svg" alt="" className="brand"/>
                <img src="../images/client-meet.svg" alt="" className="brand"/>
                <img src="../images/client-maker.svg" alt="" className="brand"/>
            </div>
            </div>
            <div className="hero-img">
                <img src="../images/image-hero-desktop.png" alt="" className="hero-image"/>
            </div> 
        </div>
    )
}
export default Hero