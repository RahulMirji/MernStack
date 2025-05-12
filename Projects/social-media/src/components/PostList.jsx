import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}

      <div className="container mt-4">
        <div className="row">
          {postList.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts", { signal })
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
