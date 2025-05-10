import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  // Extracting the postList and addInitialPosts functions from the context
  const { postList, addInitialPosts } = useContext(PostListData);

  // This function is triggered when you click the button to fetch posts
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts); // Adding the fetched posts to the context
      });
  };

  return (
    <>
      {/* If there are no posts, show the welcome message with a button */}
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}

      {/* Bootstrap Container */}
      <div className="container mt-4">
        <div className="row">
          {/* Loop through the posts and render them in columns */}
          {postList.map((post) => (
            // Each Post is wrapped inside a Bootstrap column of medium size (col-md-4)
            // "mb-4" adds margin-bottom for better spacing
            <div className="col-md-4 mb-4" key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
