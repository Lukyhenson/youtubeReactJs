import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import './App.css';
import 'bulma/css/bulma.css';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDyFTOwVhouv5rbd3OmiFx-1TYNuSJPuvo';


class App extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="columns">
          <div className="column is-two-thirds">   
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="column">
            <VideoList
             onVideoSelect={selectedVideo => this.setState({selectedVideo})}
             videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
