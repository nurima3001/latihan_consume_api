import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPosts } from "../actions/postActions";

export const PostForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const credential = useSelector((state) => state.auth.credential);
  const { decodedToken, isExpired } = useJwt(credential);
  const [post, setPost] = useState("");

  const handleCreatePosts = async () => {
    dispatch(createPosts(post, decodedToken));
    setPost("");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Post New Feed</Typography>
        <TextField
          multiline
          placeholder="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleCreatePosts}>
          {loading ? <CircularProgress /> : "Post"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostForm;
