import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./polyfills";
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import { polygonMumbai} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const { chains, provider, webSocketProvider } = configureChains(
  [Number(process.env.REACT_APP_IS_MAINNET) ? mainnet : polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_API }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "GTMSpace",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({ accentColor: "#377bff" })}
      >
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
