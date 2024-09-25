import "../../css/SupportedNetworks.css";
import { CryptoAssetCard } from "../ui/CryptoAssetCard.jsx";
import { SupportedNetworkModel } from "../../utils/models/supportedNetworksModel.js";
import exact from "prop-types-exact";
import PropTypes from "prop-types";
export  function SupportedNetworks(props){
    
    return <div className="supported-tokens-main-container">
    <h3 className="section-title">
        Supported Tokens
    </h3>
    <div className="allowed-tokens-main-container">
    {props.assets.map((asset)=> <CryptoAssetCard asset={asset} key={asset.tokenName}/>)}
    </div>
    </div>
}

SupportedNetworkModel.propTypes = exact({
    assets: PropTypes.arrayOf(SupportedNetworkModel).isRequired
})