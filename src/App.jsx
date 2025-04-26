import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";

import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    
    const {title}=blog
    const newBookmark = [...bookmarks, title];
    setBookmarks(newBookmark);
  };
  const handleReadingTime = (reading_time,title) => {
  
    const newReadTime = readTime + reading_time;
    setReadTime(newReadTime);
    const newBookmark=bookmarks.filter(bookmark=>bookmark !==title )
    setBookmarks(newBookmark)
  };

  return (
    <>
      <Header></Header>
      <div className="flex justify-between max-w-7xl mx-auto gap-24">
        <Blogs
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
