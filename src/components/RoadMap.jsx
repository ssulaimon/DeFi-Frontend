import "../css/RoadMap.css";
import loading from "../assets/loading.svg";
import waiting from "../assets/waiting.svg";
export function RoadMap(){
    return <div>
        <h3 className="section-title">
            Our Road Map
        </h3>
        <div className="road-maps-main-container">
        <div className="road-map-title-main-container">
<img src={loading} alt="loading-icon" />
<p className="medium-font-size">
    Create Frontend Website
</p>
        </div>

        <div className="road-map-title-main-container">
<img src={waiting} alt="loading-icon" />
<p className="medium-font-size">
    Write and Deploy Smart Contract on the Blockchain
</p>
        </div>  
   <div className="road-map-title-main-container">
<img src={waiting} alt="loading-icon" />
<p className="medium-font-size">
    Smart Contract Audit and Bug Bounty Programme
</p>
        </div>  
     <div className="road-map-title-main-container">
<img src={waiting} alt="loading-icon" />
<p className="medium-font-size">
    Open Testnet for User and Community Review
</p>
        </div>  
       <div className="road-map-title-main-container">
<img src={waiting} alt="loading-icon" />
<p className="medium-font-size">
    Mainnet launch on Ethereum Mainnet 
</p>
        </div>
        </div>
      
    </div>
}