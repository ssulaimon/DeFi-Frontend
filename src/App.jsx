import Header from "./components/Header.jsx";
import { useState } from "react";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import SupportedNetworks from "./components/SupportedNetworks.jsx";
import { SupportedNetworkModel } from "./models/supportedNetworksModel.js";
import wrappedBtc from "./assets/wrapped_btc.svg";
import wrappedEth from "./assets/eth.svg";
import usdt from "./assets/usdt.svg";
import { WhyChoose } from "./components/WhyChoose.jsx";
import { RoadMap } from "./components/RoadMap.jsx";
import { CommingSoon } from "./components/ComingSoon.jsx";
export default function App() {
  const [showHarmburger, changeHarmubgerState] = useState(false);
  function onClickNavButton() {
    changeHarmubgerState((currentSatte) => !currentSatte);
  }
  const assetDetails = [
    new SupportedNetworkModel(
      "Wrapped BTC",
      wrappedBtc,
      "Ethereum",
      "200",
      "$2,000",
      "$20M"
    ),
    new SupportedNetworkModel(
      "Wrapped ETH",
      wrappedEth,
      "Ethereum",
      "20",
      "$2,000",
      "$30M"
    ),
    new SupportedNetworkModel("Tether", usdt, "Ethereum", "20", "$1", "$50M"),
  ];
  return (
    <div>
      <Header
        showHarmburger={showHarmburger}
        navButtonOnclick={onClickNavButton}
      />

      <Hero />
      <HowItWorks />
      <SupportedNetworks assets={assetDetails} />
      <WhyChoose />
      <RoadMap />
      <CommingSoon/>
    </div>
  );
}
