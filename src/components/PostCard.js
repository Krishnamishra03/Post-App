const PostCard = ({ post, removePost }) => {
  return (
    <div style={cardStyle}>
      <button style={btn} onClick={() => removePost(post.id)}>X</button>

      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt="post"
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  position: "relative",
  background: "#fff"
};

const btn = {
  position: "absolute",
  top: "5px",
  right: "5px",
  background: "red",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

export default PostCard;