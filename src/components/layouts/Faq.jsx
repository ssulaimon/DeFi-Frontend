import "../../css/Faq.css";
import { FaqCard } from "../ui/FaqCards";
import exact from "prop-types-exact"
import PropTypes from "prop-types";
export function Faq(props){

    return <div className="faq-section-main-container">
    <h3 className="section-title">
        FAQs
    </h3>
    {props.faqs.map((faq)=> <FaqCard faq={faq} key={faq.question} function={()=>{
props.function(faq)
    }}/>)}
    </div>
}
Faq.propTypes = exact(
    {
        faqs: PropTypes.arrayOf(PropTypes.shape(exact({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
            showAnswer:PropTypes.bool.isRequired,
           
        })).isRequired).isRequired,
        function: PropTypes.func.isRequired
    }
)

