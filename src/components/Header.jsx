import WebsiteName from "./WebsiteName.jsx";
import "../css/Header.css";
import Navigations from "./Navigations.jsx";
import cancelIcon from "../assets/cancel.svg";
import harmburgerIcon from "../assets/harmburger-icon.svg";
import exact from "prop-types-exact"
import PropTypes from "prop-types";
export default function Header(props){
    return <div className="header-main-container">
   <WebsiteName/>
   <Navigations showNav={props.showHarmburger}/>
   <button className="open-nav-btn" onClick={props.navButtonOnclick} >
    <img src={props.showHarmburger ? cancelIcon : harmburgerIcon} alt="" />
   </button >
    </div>
}
Header.propTypes = exact({
    showHarmburger: PropTypes.bool.isRequired,
    navButtonOnclick: PropTypes.func.isRequired
});
