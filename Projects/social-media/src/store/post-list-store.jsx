import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, aciton) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const  DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Going to Mumbai',
  body: 'Hi Im going to Mumbainfor my vacations.',
  reactions: 2,
  userId:'user-9',
  tags:["vacation", "mumbai", "Enjoying"]
},{
  id: '2',
  title: 'Paas hogaye bhai',
  body: 'Hi Im going to Mumbainfor my Hard to belive.',
  reactions: 15,
  userId:'user-12',
  tags:["graduating", "unbelieve", "Enjoying"]
}]

export default PostListProvider;
