import DrawerApp from "./components/DrawerApp";
import { challenges } from "./data/challenge.json";

function App() {

  return (
    <div className="App">
      <DrawerApp challenges={challenges}/>
    </div>
  )
}

export default App
