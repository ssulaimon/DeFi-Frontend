import "../css/CommingSoon.css";
import megaPhone from "../assets/megaphone.svg";
export function CommingSoon(){
    return <div className="comming-soon-main-container">
        <h3 className="section-title">
            Milestones Comming Soon
        </h3>
        <div className="expected-milestones-main-container">
        <div className="miles-stone">
        <p className="medium-font-size section-title">
        Partners and Investors
        </p>
        <img src={megaPhone} alt="mega-phone" className="mega-phone"/>
        </div>
        <div className="miles-stone">
        <p className="medium-font-size section-title">
        Bug Bounty Programme
        </p>
        <img src={megaPhone} alt="mega-phone" className="mega-phone"/>
        </div> 
        <div className="miles-stone">
        <p className="medium-font-size section-title">
        Smart Contract Audit
        </p>
        <img src={megaPhone} alt="mega-phone" className="mega-phone"/>
        </div>
         <div className="miles-stone">
        <p className="medium-font-size section-title">
        Listed Crypto Exchanges
        </p>
        <img src={megaPhone} alt="mega-phone" className="mega-phone"/>
        </div>
        </div>
    </div>
}