import React, { useContext } from "react";
import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deletePosts } from "../actions/postActions";
import { PostFeed } from "./PostFeed";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxshadow: 24,
  p: 4,
};

const Feed = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);

  const handleDeleteModal = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = async () => {
    await dispatch(deletePosts(id));
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action cannot be rolled back
          </Typography>
          <ButtonGroup>
            <Button onClick={handleDelete}>Yes</Button>
            <Button color="error" onClick={() => setOpen(false)}>
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
      {posts.map((post) => (
        <PostFeed post={post} handleDeleteModal={handleDeleteModal} />
      ))}
    </div>
  );
};

export default Feed;
