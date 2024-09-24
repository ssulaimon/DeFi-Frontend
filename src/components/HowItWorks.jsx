import "../css/HowItWorks.css";
import cursor from "../assets/cursor.svg";
export default function HowItWorks(){
    return  <div>
    <h3 className="section-title">
        How it Works
    </h3>
    <div className="steps-main-container">

    <div className="step-container">
<p className="medium-font-size section-title">
    Step One
</p>
<p className="small-font-size">
    Connect Decentralized Wallet
</p>
<div className="connect-wallet-animation">
Connect

</div>
    </div>
    <div className="step-container">
    <p className="medium-font-size section-title">
        Setp Two
    </p>
<p className="small-font-size section-title">
    Choose a Pool
</p>
<div className="pool-1 pools" >
USDT Pool
</div>
<div className="pool-2 pools">
ETH Pool
</div>
<div className="pool-3 pools">
BTC
</div>

    </div>
    <div className="step-container deposit-asset-main-container">
    <p className="medium-font-size section-title">
        Step Three
    </p>
    <p className="small-font-size section-title">
        Deposit Crypto Asset
    </p>
    <div className="deposit-asset-container">
        Deposit 
    </div>
    <img src={cursor} alt="cursor-image" height={"20px"} width={"20px"} id="cursor-icon" />



    </div>

    </div>

    </div>
}