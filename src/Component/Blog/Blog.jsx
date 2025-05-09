import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;

  return (
    <div className="space-y-4 mb-8">
      <img src={cover} className="rounded-2xl h-[448px] w-5/6" alt="" />
      <div className="flex justify-between items-center">
        <div>
          <img
            className="w-18 h-18 rounded-full mb-2"
            src={author_img}
            alt=""
          />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleBookmark(blog)}
            className="text-2xl text-red-600"
          >
            <CiBookmarkCheck></CiBookmarkCheck>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-semibold">{title}</h1>
      {hashtags.map((hash, idx) => (
        <span key={idx} className="mr-2 text-gray-400">
          {hash}
        </span>
      ))}
      <br />
      <button
        className="mt-6 text-purple-700 underline font-semibold"
        onClick={() => {
          handleReadingTime(reading_time,title);
        }}
      >
        {" "}
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
