import "../../css/FaqCard.css";
import arrowdown  from "../../assets/arrow-down.svg";
import exact from "prop-types-exact"
import PropTypes from "prop-types";
export function FaqCard(props){
    const style = {maxHeight: props.faq.showAnswer ? '300px': '0px',opacity: props.faq.showAnswer ? '1': '0',  }
   
    return <div className="faq-card-main-container">
    <div className="faq-card-title-section"  onClick={props.function}>
<p className="medium-font-size">
{props.faq.question}
</p>
<img src={arrowdown} alt="arrow-down-icon" />

    </div>
    <div className="faq-card-answer" style={style} >
{props.faq.answer}

    </div>
   
    </div>
}
FaqCard.propTypes = exact({
   faq: PropTypes.shape(exact({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    showAnswer:PropTypes.bool.isRequired
   })).isRequired,
   function: PropTypes.func.isRequired
})
