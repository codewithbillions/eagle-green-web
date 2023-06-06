
import './App.css';
import About from "./component/About"
import Aboutc from "./component/Aboutc"
import Navmenu from "./component/Navmenu"
import Caro from "./component/Caro"
import Card1 from "./component/Card1"
import Green from "./Green"
function App() {
  return (
    <div className="App">
      
      <Navmenu />
      <About />
      <Aboutc />
     <Card1 myName="marvellous" school="gomycode"/>
   <Caro />

      

    </div>
  );
}

export default App;
