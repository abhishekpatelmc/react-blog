import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setblogs] = useState(null);

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
    </div>
  );
};

export default Home;
