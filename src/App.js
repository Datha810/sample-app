import 'bootstrap/dist/css/bootstrap.min.css'
import Hello from "./components/Hello";
import Message from "./components/Message";
import PropHello from './components/PropHello';
import Kohli from "./Pictures/Kohli.png"
import Abd from "./Pictures/Abd.png"
import Maxi from "./Pictures/Maxi.png"

function App() {
  return(
  <>
    <Hello/>
     <Message />

     <PropHello 
      name="Kohli"
      description="Hes the no.1 ODI Player" 
      image ={Kohli}
      He is greatest player
    />
     <PropHello 
      name="Abd"
      description="Hes a 360* player" 
      image ={Abd}
    />
     <PropHello 
     name="Maxi"
     description="Hes a Hard Hitter" 
     image = {Maxi}
    />

  </>
  );
}

export default App

//In React whenever we are having multiple tags or elements
//that should be inside a single primary tag this concept called
// as "Fragments".