import "../css/WhyChoose.css";
export function WhyChoose(){
    return <div>
        <h3 className="section-title ">
            Benefits of Staking With Us
        </h3>

        <div className="benefits-main-container">
        <div className="benefit-container security">
            <h4>
            Security
            </h4>
            <p className="medium-font-size">
            Tested and trusted open source smart contract with security as number one priority
            </p>
        </div>
        <div className="benefit-container flexibility" >
            <h4>
            Flexibility
            </h4>
            <p className="medium-font-size">
           Unlock your staked crypto assets when ever you feel like unlocking.
            </p>
        </div>
        <div className="benefit-container liquidity" >
            <h4>
            Liquidity
            </h4>
            <p className="medium-font-size">
         High decentralized automated liquidity pool for everyone in any location.
            </p>
        </div>

        </div>

    </div>
}