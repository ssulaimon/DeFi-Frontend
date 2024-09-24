import exact from "prop-types-exact";
import Proptypes from "prop-types";
import { SupportedNetworkModel } from "../models/supportedNetworksModel.js";
import "../css/CryptoAssetCard.css";
export function CryptoAssetCard(props){
   
    return <div className="crypto-asset-main-card">
    <img src={props.asset.tokenImage} alt={props.asset.tokenName} className="asset-image" />
    <p className="medium-font-size section-title">
        {props.asset.tokenName}
    </p>
    <p className="small-font-size section-title">
        {props.asset.tokenNetwork}
    </p>
    <p className="medium-font-size section-title locked-value">
        {props.asset.usdValueOfTokenLocked}
    </p>
    <p className="small-font-size section-title">
        Pool size
    </p>
    <p className="medium-font-size section-title usd-value">
{props.asset.usdValueOfToken} / $
    </p>
    </div>
}

CryptoAssetCard.propTypes = exact({
    asset: Proptypes.instanceOf(SupportedNetworkModel).isRequired
})