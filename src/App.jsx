import "@rainbow-me/rainbowkit/styles.css";
import { Suspense, lazy } from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Loader from "./components/Loader.jsx";
import { useEffect } from "react";
import { useAccount } from "wagmi";

// import { useAccountEffect } from 'wagmi'

const Home = lazy(()=>import("./pages/home.jsx"))
const Landing = lazy(()=>import("./pages/landing.jsx"))
const Game = lazy(()=>import("./pages/game.jsx"))
const NotFound = lazy(() => import("./pages/not-found.jsx"));


const App = () => {



  
  useEffect(() => {
    window.ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log("Ethereum accounts changed:", accounts);
      // Call a function or perform actions based on the new accounts
       // Reload the website when Ethereum accounts change
       window.location.reload();


       
    });

    // Add event listener for changes in Ethereum network
    window.ethereum.on('networkChanged', function (networkId) {
      // Time to reload your interface with the new networkId
      console.log("Ethereum network changed:", networkId);
      // Call a function or perform actions based on the new networkId
       // Reload the website when Ethereum accounts change
       window.location.reload();
    });

    // Clean up function to remove event listeners when component unmounts
    return () => {
      
      window.ethereum.removeAllListeners('accountsChanged');
      window.ethereum.removeAllListeners('networkChanged');
    };
  }, []);


    // Use the useAccount hook inside the component body
    const accountInfo = useAccount({
      onConnect: ({ address, connector, isReconnected }) => {
        console.error('Connected', { address, connector, isReconnected });
      },
      onDisconnect: () => {
        console.error('Disconnected');
      },
    });

  return (
    <>
      <Router>
      <Header/>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
