import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
//import SearchBar from "./components/SearchBar";
//import VideoDetail from "./components/VideoDetail";
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends Component {
  state = {
    selectedVideo: null,
    videos: [""],
  };

  componentDidMount() {
    this.handleSubmit("tiger");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        q: searchTerm,
        key: "AIzaSyCXCdAHorvMNWuNOXww2cZQJ95lmE0DlmI",
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* SEARCH BAR HERE */}
              <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
            </Grid>
            <Grid item xs={8}>
              {/* VIDEO DETAIL HERE*/}
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videosList={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
