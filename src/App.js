import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com"
  // const person = { name: 'abhi', age: 22 } ;
  // Objects can't be used as the child of react , react will not render objects and boolean

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times </p>
        <p>{10 * 20}</p>
        <p>{"hello this is my first react app"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 20}</p>

        <a href={link}>Google site</a> 
      </div>
    </div>
  );
}

export default App;
