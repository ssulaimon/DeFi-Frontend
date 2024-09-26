import { WebsiteName } from "../components/ui/WebsiteName";
import "../css/Stake.css";
import { ConnectWalletButton } from "../components/ui/ConnectWalletButton";
import { useState } from "react";
import { SwitchChainButton } from "../components/ui/SwitchChainButton";
import { NetworkModel } from "../utils/models/networksModel";
import ethereumIcon from "../assets/ethereum.svg";
import polygonIcon from "../assets/polygon.svg";
export function Stake(){
    const [connected, updateConnection] = useState(false);
    const [selectedNetwork, updateSelectedNetwork] = useState();
    const [showNetworks, updateShowNetworks] = useState(false);
    const netWorks = [new NetworkModel("Sepolia", ethereumIcon), new NetworkModel("Ethereum", ethereumIcon), new NetworkModel("Ploygon",polygonIcon ),]
    function chooseNetwork(network){
        updateSelectedNetwork(network);
        updateShowNetworks((currentState)=> !currentState);
        
    }
    
    return <div>
        <div id="top-bar">
        <WebsiteName/>
        <div className="connection-main-container">
        <SwitchChainButton networksList={netWorks} activeNetwork={selectedNetwork} showNetworkList={showNetworks} switchNetwork={()=>{
            updateShowNetworks((currentState)=> !currentState);
        }} chooseNetwork={chooseNetwork}/>
        <ConnectWalletButton isConnected={connected}/>
        </div>
        </div>
    </div>
}