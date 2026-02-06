import { PostProvider } from "./context/PostContext";
import PostList from "./components/PostList";

function App() {
  return (
    <PostProvider>
      <div style={{ padding: "20px" }}>
        <h1>Posts</h1>
        <PostList />
      </div>
    </PostProvider>
  );
}

export default App;