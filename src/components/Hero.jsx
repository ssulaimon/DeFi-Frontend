import "../css/Hero.css";
import CustomButton from "./CustomButton";
import heroImage from "../assets/hero-image.svg";

export default  function Hero    (){
    const customButtonProperties = {
        title: "Get Started",
        backgroundColor: "var(--primary-color)",
        textColor: "white",
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
        <CustomButton styles={customButtonProperties} />
    </div>
    <img src={heroImage} alt="hero-image"  className="hero-image"/>
        
    </div>
};