import "./App.css"
import MonkeyThree from "./components/three/MonkeyThree"
import EarthThree from "./components/three/EarthThree"
import AirbusA310Three from "./components/three/AirbusA310Three"
import GEO2Three from "./components/three/GEO2Three"
import SpaceShuttelThree from "./components/three/SpaceShuttelThree"
import Turksat6AThree from "./components/three/Turksat6AThree"
import MoonThree from "./components/three/MoonThree"
import SunThree from "./components/three/SunThree"

import gif from './gifs/monkey6.gif'


function App() {
  return (
    <main className="App">


      <div style={{width: "500px", height:"500px"}}>
        <img src={gif} alt="loading..." />
      </div>
    

    </main>
  );
}

export default App;
