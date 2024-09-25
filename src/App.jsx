import { Header } from "./components/layouts/Header.jsx";
import { useState } from "react";
import { Hero } from "./components/layouts/Hero.jsx";
import { HowItWorks } from "./components/layouts/HowItWorks.jsx";
import { SupportedNetworks } from "./components/layouts/SupportedNetworks.jsx";
import { SupportedNetworkModel } from "./utils/models/supportedNetworksModel.js";
import wrappedBtc from "./assets/wrapped_btc.svg";
import wrappedEth from "./assets/eth.svg";
import usdt from "./assets/usdt.svg";
import { WhyChoose } from "./components/layouts/WhyChoose.jsx";
import { RoadMap } from "./components/layouts/RoadMap.jsx";
import { CommingSoon } from "./components/layouts/ComingSoon.jsx";
import { Faq } from "./components/layouts/Faq.jsx";
import { Footer } from "./components/layouts/Footer.jsx";
export default function App() {
  const [showHarmburger, changeHarmubgerState] = useState(false);
  const [faqs, changeFaq] = useState([
    {
        question: "What is staking?",
        answer: "Staking is the process of locking up your cryptocurrency in a smart contract to support the operations of a blockchain network. In return, you earn rewards, usually in the form of additional tokens.",
        showAnswer: false,
       
    },
    {
        question: "What happens if I unstake before the lock-up period ends?",
        answer: "If you try to unstake before the lock-up period ends, there may be penalties or a reduction in your rewards. Always check the staking pool’s terms before locking your tokens.",
        showAnswer: false
    }, 
    {
        question: "What is impermanent loss, and does it affect staking?",
        answer: "Impermanent loss usually applies to liquidity provision in AMMs (Automated Market Makers), not direct staking. When staking, your main risk comes from the potential depreciation of the token you're staking, not impermanent loss.",
        showAnswer: false,
    },{
        question: "What happens if I lose access to my wallet?",
        answer:"If you lose access to your wallet, you will also lose access to your staked tokens and any rewards associated with them. Always ensure you back up your wallet’s private keys or recovery phrase securely.",
        showAnswer: false
    }
  ]);
  function onClickNavButton() {
    changeHarmubgerState((currentSatte) => !currentSatte);
  }
  function viewAnswer(selectedFaq){
    changeFaq((currentFaq)=> currentFaq.map((faq)=>{
        if(faq.answer == selectedFaq.answer){
            return {
                answer: faq.answer,
                question: faq.question,
                showAnswer: !faq.showAnswer
            };
        }else{
            return faq;
        }
    }))
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
      <Faq faqs={faqs} function={viewAnswer}/>
      <Footer/>
    </div>
  );
}
