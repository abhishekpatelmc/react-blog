import Navbar from './Navbar' ;
import Home from './Home' ;
import {useEffect} from 'react'

function App() {
  // const person = { name: 'abhi', age: 22 } ;
  // Objects can't be used as the child of react , react will not render objects and boolean
 function a(){
  console.log("hello")
 }
 useEffect(() => {
    console.log("hello");
   
 }, [])


  return (
    <div className="App">
     
      <Navbar function={a} />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
