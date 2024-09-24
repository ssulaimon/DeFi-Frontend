import Header from "./components/Header.jsx";
import { useState } from "react";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
export default function App(){
    const [showHarmburger, changeHarmubgerState] = useState(false);
    function onClickNavButton (){
        changeHarmubgerState((currentSatte)=> !currentSatte);
    }
    return <div>
<Header showHarmburger={showHarmburger} navButtonOnclick={onClickNavButton}>

</Header>
<Hero/>
<HowItWorks/>
    </div>
}