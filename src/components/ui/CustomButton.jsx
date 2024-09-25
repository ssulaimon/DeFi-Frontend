import exact from "prop-types-exact";
import PropTypes from "prop-types";
export  function CustomButton (props){
    const properties = props.styles;
    const styles = {backgroundColor: properties.backgroundColor, color: properties.textColor, border: 'none',};
    return <button style={styles} className={"big-button"}>
    {properties.title}
    </button>
}
CustomButton.propType = exact({
    styles: PropTypes.shape(exact({
        title: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
    })).isRequired
})

