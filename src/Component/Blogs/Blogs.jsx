import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h2 className="text-2xl font-bold text-[#6047EC]">Blogs : </h2>
      {blogs.map((blog) => (
        <Blog
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
