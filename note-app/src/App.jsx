import Background from "./components/Background"
import Foreground from "./components/Foreground";
import './index.css'; // or App.css


function App() {

  return (
    <div className="w-full h-screen bg-zinc-800 ">
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
