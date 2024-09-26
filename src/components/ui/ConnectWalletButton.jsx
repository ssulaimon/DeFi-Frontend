import exact  from "prop-types-exact";
import PropTypes from "prop-types"
export function ConnectWalletButton(props){
    const style = {
        backgroundColor: props.isConnected ? "var(--primary-color)": "transparent",
        color: props.isConnected ? "white": "black",
        border: props.isConnected ? "none" : "1px solid black",
        borderRadius: '6px',
        padding: '8px 7px'
    }
    return <button style={style} className="medium-font-size">
    {props.isConnected ? "Connected": "Connect Wallet"}
    
        </button>
}

ConnectWalletButton.propTypes = exact({
    isConnected: PropTypes.bool.isRequired
})