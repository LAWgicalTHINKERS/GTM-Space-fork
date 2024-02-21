import "./Header.css";
import Logo from "../assets/images/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { useGetBalance } from "../hooks/useGetBalance";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const Header = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const _balance = useGetBalance(address);
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
    <header className="header-container">
      <a target="_blank" rel="noreferrer">
        <Link to="/home">
          <img src={Logo} alt="Morty Logo" className="logo" />
        </Link>
      </a>
      <p className="middle">THE SPACE STATION</p>
      <div className="header-button__container">
        {_balance && isConnected ? (
          <div className="balance-div">
            <p className="balance">{_balance}</p>
            <img
              className="sidebar-icon"
              src="mars logo.png"
              alt="Girl in a jacket"
            ></img>
          </div>
        ) : (
          <p className="balance"></p>
        )}

        <ConnectButton showBalance={false} chainStatus="icon" />
      </div>
    </header>
  );
};

export default Header;
