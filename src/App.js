import "./App.css"
import MonkeyThree from "./components/three/MonkeyThree"
import EarthThree from "./components/three/EarthThree"
import AirbusA310Three from "./components/three/AirbusA310Three"

function App() {
  return (
    <main className="App">

      <div>
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
          <AirbusA310Three />
        </div>
      </div>

      <div>
        <div>
          <AirbusA310Three />
        </div>
        <div>
          <AirbusA310Three />
        </div>
        <div>
          <AirbusA310Three />
        </div>
        <div>
          <AirbusA310Three />
        </div>
      </div>
      
    </main>
  );
}

export default App;
