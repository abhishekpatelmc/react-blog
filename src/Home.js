import { useState } from "react";

const Home = () => {
    // let name = 'mario'; 
    const [name, setName] = useState('mario');

    const [age, setAge] = useState(25);
    
    const handelClick = () => {
        setName('Abhishek');
        setAge(22); 
    };
  
  return (
    <div className="home">
      <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default Home;

