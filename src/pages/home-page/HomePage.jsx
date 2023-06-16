import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "../../component/PostForm";
import Feed from "../../component/Feed";

export const HomePage = () => {
  const credential = useSelector((state) => state.auth.credential);
  const navigate = useNavigate();

  useEffect(() => {
    if (!credential) {
      navigate("/login");
    }
  }, [credential, navigate]);

  return (
    <div>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}></Grid>
          <Grid item md={3} lg={3}>
            <h4>Feeds</h4>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}>
            <PostForm />
          </Grid>
          <Grid item md={3} lg={3} style={{ border: "1px solid red" }}>
            <Feed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
