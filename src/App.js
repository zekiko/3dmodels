import MonkeyThree from "./components/three/MonkeyThree"
import EarthThree from "./components/three/EarthThree"
import "./App.css"

function App() {
  return (
    <main className="App">
      <div>
        <MonkeyThree />
      </div>
      <div>
        <EarthThree />
      </div>
    </main>
  );
}

export default App;
