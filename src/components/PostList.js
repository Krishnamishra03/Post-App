import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

const PostList = () => {
  const { posts, loading, removePost } = useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 6;
  const start = (currentPage - 1) * perPage;
  const currentPosts = posts.slice(start, start + perPage);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <div style={grid}>
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} removePost={removePost} />
        ))}
      </div>

      <Pagination
        total={posts.length}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px"
};

export default PostList;