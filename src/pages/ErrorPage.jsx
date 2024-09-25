import "../css/ErrorPage.css";
import errorImage from "../assets/error-image.svg";
export function ErrorPage(){
    return <div className="error-page-main-container" >
    <img src={errorImage} alt="error-image" className="error-image"/>
    <h1 className="error-title">
        Oh No! Error 404
    </h1>
    <p className="section-title medium-font-size">
    Oops! That page seems to have taken <br /> a detour. Let us guide you back to your <br /> destination.
    </p>
    <a href="/" className="error-link-home">Back to Homepage</a>
    </div>
}