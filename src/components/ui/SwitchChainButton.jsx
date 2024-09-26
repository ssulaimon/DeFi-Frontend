import exact from "prop-types-exact";
import PropTypes from "prop-types";
import switchIcon from "../../assets/switch.svg";
import "../../css/SwitchChainButton.css";
import { NetworkModel } from "../../utils/models/networksModel";
import { Networks } from "./Networks";
import etherumIcon from "../../assets/ethereum.svg";
export  function SwitchChainButton(props){
    const style = {
maxHeight: props.showNetworkList ? "150px": "0px",
visibility: props.showNetworkList ? "visible": "hidden",
opacity: props.showNetworkList ? "1": "0"

    }
    return <div className="top-switch-container">
        <div className="switch-main-container" onClick={props.switchNetwork}>
   <p className="medium-font-size">{!props.activeNetwork? "Switch Network": props.activeNetwork.name}</p> <img src={!props.activeNetwork ? switchIcon : props.activeNetwork.icon} alt="switch-icon" className="switch-icon"/>
    
    </div>
    <div className="network-list-main-container" style={style}>
    {props.networksList.map((network)=> <Networks networkDetail={network}  key={network.name} chooseNetwork={()=>{
props.chooseNetwork(network);
    }}/>)}
    </div>
    </div>
     
};
SwitchChainButton.propTypes = exact({
    networksList: PropTypes.arrayOf(PropTypes.instanceOf(NetworkModel)).isRequired,
    activeNetwork: PropTypes.instanceOf(NetworkModel),
    showNetworkList: PropTypes.bool.isRequired,
    switchNetwork: PropTypes.func.isRequired,
    chooseNetwork: PropTypes.func.isRequired
})

