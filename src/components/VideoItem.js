import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ currentVideo, onVideoSelect }) => {
  if (!currentVideo) return <div></div>;
  //console.log("Current Video", currentVideo);
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(currentVideo)}
      >
        <img
          style={{
            marginRight: "20px",
          }}
          alt="thumbnail"
          src={currentVideo.snippet.thumbnails.medium.url}
        ></img>
        <Typography variant="subtitle1">
          <b>{currentVideo.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
