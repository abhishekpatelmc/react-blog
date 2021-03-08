import Navbar from './Navbar' ;
import Home from './Home' ;

function App() {
  // const person = { name: 'abhi', age: 22 } ;
  // Objects can't be used as the child of react , react will not render objects and boolean

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
