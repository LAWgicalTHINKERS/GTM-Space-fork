import "./Header.css";
import Logo from "../assets/images/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Link } from "react-router-dom";
import { useGetBalance } from "../hooks/useGetBalance";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const Header = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const _balance = Math.floor(useGetBalance(address));
  console.log("Balance:", _balance);
  useEffect(() => {
    // Check if the account address is available
    if (address) {
      console.log("Account Address:", address);
      console.log("Balance:", _balance);
      setIsConnected(true);
    } else {
      console.log("No account connected.");
      setIsConnected(false);
    }
  }, [address, _balance]); // Run this effect whenever address or balance changes

  return (
    <div className="header-container">
      <div className="">
        <a target="_blank" rel="noreferrer">
          <Link to="/home">
            <img src={Logo} alt="Morty Logo" className="logo" />
          </Link>
        </a>
      </div>
      <div className="">
        <p className={_balance && isConnected ? "middle-2" : "middle-1"}>
          THE SPACE STATION
        </p>
      </div>
      <div className="header-button__container">
        {_balance && isConnected ? (
          <div className="balance-div">
            <p className="balance">{_balance} GTM</p>
            <img
              className="icon"
              src="mars-logo.png"
              alt="Girl in a jacket"
            ></img>
          </div>
        ) : (
          <div className="balance-div">
            <p className="balance">{_balance} GTM</p>
            <img
              className="icon"
              src="mars-logo.png"
              alt="Girl in a jacket"
            ></img>
          </div>
        )}

        <ConnectButton  showBalance={false} chainStatus="icon" />
      </div>
    </div>
  );
};

export default Header;
