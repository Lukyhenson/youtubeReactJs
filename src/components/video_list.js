import React from 'react';
import VideoListItem from './video_list_item';
import 'bulma/css/bulma.css';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                video={video} 
                key={video.etag}/>
        );
    })

        return (
            <ul className="menu-list">
                {videoItems}
            </ul>
        );
}

export default VideoList;