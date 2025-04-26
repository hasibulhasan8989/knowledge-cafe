import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="w-1/3">
      <h3 className="text-center text-2xl text-[#6047EC] font-bold border rounded-2xl bg-[#6047EC1A] p-5 mb-4 ">
        Spent time on read :{readTime}
      </h3>

      <div className="bg-[#1111110D] min-h-[448px] rounded-2xl pb-4  ">
        <h2 className="py-6 text-center text-xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
