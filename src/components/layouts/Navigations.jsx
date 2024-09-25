import exact from "prop-types-exact";
import PropTypes from "prop-types";
import "../../css/Navigations.css";
export  function Navigations(prop){
    return <ul className={`navigation-main-container ${prop.showNav ? 'show-nav':'hide-nav'}`}>
        <li className="navigation-link">
            <a href="">
            Documentation
            </a>
        </li>
        <li className="navigation-link">
            <a href="">
                DAO
            </a>
        </li>
        <li className="navigation-link">
            <a href="">Earn</a>
        </li>
        <li className="navigation-link">
            <a href="">Bug Report</a>
        </li>
    </ul>
}
Navigations.propTypes = exact({
    showNav: PropTypes.bool.isRequired
})

