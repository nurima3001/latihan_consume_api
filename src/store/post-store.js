import { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePosts, updatePosts } from "../actions/postActions";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const fetchPosts = () => {
    dispatch(getPosts());
  };

  const _deletePosts = (id) => {
    dispatch(deletePosts(id));
  };

  const _updatePosts = (id, post) => {
    dispatch(updatePosts(id, post));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        fetchPosts,
        deletePosts: _deletePosts,
        updatePosts: _updatePosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
