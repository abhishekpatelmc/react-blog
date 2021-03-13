import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setblogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState('mario');

  const handelDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setblogs(newBlogs);
  }

  useEffect(() => {
    console.log('Use Effect ran');
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handelDelete={handelDelete} />
      <button onClick={() => {
        setName('Abhi')
      }}>Chane name </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
