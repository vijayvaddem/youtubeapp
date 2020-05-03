import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videosList, onVideoSelect }) => {
  const listOfVideos = videosList.map((video, id) => (
    <VideoItem key={id} currentVideo={video} onVideoSelect={onVideoSelect} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
