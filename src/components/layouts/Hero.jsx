import "../../css/Hero.css";
import heroImage from "../../assets/hero-image.svg";

export   function Hero    (){
    const customButtonProperties = {
        backgroundColor: "var(--primary-color)",
        color: "white",
        
    };
    return <div className="hero-main-container">
    <div className="hero-text-container">
    <h1 className="primary-color">
        STAKE. EARN. Grow.
        </h1>
        <p className="medium-font-size">
        Maximize Your Crypto Potential with Secure Staking
        </p>
        <p className="grey-color small-font-size">
        Earn high rewards by staking your favorite tokens. No lock-ins, just consistent growth. Start staking now and watch your crypto portfolio flourish.
        </p>
        <a href="/stake" style={customButtonProperties} className="big-button">Launch App</a>
    </div>
    <img src={heroImage} alt="hero-image"  className="hero-image"/>
        
    </div>
};