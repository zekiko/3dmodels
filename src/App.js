import "./App.css"
import MonkeyThree from "./components/three/MonkeyThree"
import EarthThree from "./components/three/EarthThree"
import AirbusA310Three from "./components/three/AirbusA310Three"

function App() {
  return (
    <main className="App">

      <section className="Fours">
        <div className>
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
      </section>

      <section className="Fours">
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
      </section>

    </main>
  );
}

export default App;
