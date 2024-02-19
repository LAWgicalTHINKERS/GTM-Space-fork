import "./Header.css";
import Logo from "../assets/images/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import OpenSeaLogo from "../assets/images/opensea-logo.svg";
import TelegramLogo from "../assets/images/telegram-logo.svg";
import XLogo from "../assets/images/x-logo.png";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { useGetBalance } from "../hooks/useGetBalance";
import { useAccount } from "wagmi";

const Header = () => {
  const { address } = useAccount();
  console.log(address)
  const _balance = useGetBalance(address);
  console.log("Balance:",_balance)

  return (
    <header className="header-container">
      <a target="_blank" rel="noreferrer">
        <Link to="/home">
        <img src={Logo} alt="Morty Logo" className="logo" />
        </Link>
      </a>
      <div className="header-button__container">
        <a target="_blank" rel="noreferrer">
          <img
            src="https://colonizemars.space/static/media/etherscan-icon.4f08739b276ab5d56fbda46f3f58559d.svg"
            alt="x-logo"
          />
        </a>
        <a target="_blank" rel="noreferrer">
          <img
            src="https://colonizemars.space/static/media/dextools.604cf965e98038840b306471abd1b7b9.svg"
            alt="x-logo"
          />
        </a>
        <a target="_blank" rel="noreferrer">
          <img src={XLogo} alt="x-logo" />
        </a>
        <a target="_blank" rel="noreferrer">
          <img src={TelegramLogo} alt="telegram-logo" />
        </a>

        <a target="_blank" rel="noreferrer">
          <img src={OpenSeaLogo} alt="open-sea-logo" />
        </a>
        {
       
        (_balance) ?  
        (<div className="balance-div">
          <p className="balance">{_balance}</p>
          <img className="sidebar-icon" src="mars logo.png" alt="Girl in a jacket"></img>
        </div>) : <p  className="balance"></p>
        }
         
        <ConnectButton chainStatus="icon" />
      </div>
    </header>
  );
};

export default Header;
