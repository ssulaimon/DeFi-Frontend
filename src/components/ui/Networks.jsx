import { NetworkModel } from "../../utils/models/networksModel";
import exact from "prop-types-exact";
import PropTypes from "prop-types";
import "../../css/Network.css";
export function Networks(props){
 
    return <div className="network-main-container" onClick={props.chooseNetwork}>
        <p className="medium-font-size" >
        {props.networkDetail.name}
        </p>
        <img src={props.networkDetail.icon} alt="blockchain-icons" className="blockchain-icons"/>
    </div>
}
NetworkModel.propTypes = exact({
    networkDetail: PropTypes.instanceOf(NetworkModel).isRequired,
    chooseNetwork: PropTypes.func.isRequired
  
});