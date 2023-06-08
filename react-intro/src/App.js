
import './App.css';
import About from "./component/About"
import Aboutc from "./component/Aboutc"
import Navmenu from "./component/Navmenu"
import Caro from "./component/Caro"
import Card1 from "./component/Card1"
import Green from "./Green"

function App({name}) {
  return (
    <div className="App">
      <h1>{name}</h1>
      <Navmenu />
      <About />
      <Aboutc />
     <Card1 myName="marvellous" school="gomycode"/>
   <Caro />

      

    </div>
  );
}

export default App;





// REACT ROUTER PRESENTATION
// 1.Explain React Router Basics(react router v6)
// 2.explain the Difference between v5 and v6
// 3.The advantages of react router
// 4.URL parameters
// 5.Redirect
// 6. hooks in react router
// 7.custom link