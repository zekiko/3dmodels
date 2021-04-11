import "./App.css"
import MonkeyThree from "./components/three/MonkeyThree"
import EarthThree from "./components/three/EarthThree"
import AirbusA310Three from "./components/three/AirbusA310Three"
import GEO2Three from "./components/three/GEO2Three"
import SpaceShuttelThree from "./components/three/SpaceShuttelThree"
import Turksat6AThree from "./components/three/Turksat6AThree"
import MoonThree from "./components/three/MoonThree"
import SunThree from "./components/three/SunThree"

function App() {
  return (
    <main className="App">

      <section className="Fours">
        <div>
          <MonkeyThree />
        </div>
        <div>
          <EarthThree />
        </div>
        <div>
          <AirbusA310Three />
        </div>
        <div>
          <GEO2Three />
        </div>
      </section>

      <section className="Fours">
        <div>
          <SpaceShuttelThree />
        </div>
        <div>
          <Turksat6AThree />
        </div>
        <div>
          <MoonThree />
        </div>
        <div>
          <SunThree />
        </div>
      </section>

    </main>
  );
}

export default App;
