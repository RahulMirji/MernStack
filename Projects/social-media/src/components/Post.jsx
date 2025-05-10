import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    // Removed the fixed width of 30rem to allow Bootstrap grid to handle sizing
    <div className="card post-card card-post h-100">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {post.title}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </button>
        </h5>

        {/* Post body */}
        <p className="card-text">{post.body}</p>

        {/* Tags */}
        <div className="mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>

        {/* Reactions */}
        {post.reactions && typeof post.reactions === "object" ? (
          <div className="alert alert-success reactions" role="alert">
            <span className="me-2">👍 {post.reactions.likes}</span>
            <span>👎 {post.reactions.dislikes}</span>
          </div>
        ) : (
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions} people.
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
