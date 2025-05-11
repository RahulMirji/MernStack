import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      <div className="container mt-4">
        <div className="row">
          {!fetching &&
            postList.map((post) => (
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
