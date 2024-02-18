import "@rainbow-me/rainbowkit/styles.css";
import { Suspense, lazy } from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Loader from "./components/Loader.jsx";
const Home = lazy(()=>import("./pages/home.jsx"))
const Landing = lazy(()=>import("./pages/landing.jsx"))
const Game = lazy(()=>import("./pages/game.jsx"))
const NotFound = lazy(() => import("./pages/not-found.jsx"));

const App = () => {
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
