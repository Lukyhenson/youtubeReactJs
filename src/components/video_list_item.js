import React from 'react';
import 'bulma/css/bulma.css';
import './video_list_item.css';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    const videoChannel = video.snippet.channelTitle;

    return (
        <li onClick={() => onVideoSelect(video)} className="card list-group-item">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-50x50">
                            <img src={imageUrl} alt={video.snippet.title}/>
                        </figure>
                    </div>
                    <div className="media-content" style={{overflow: 'hidden'}}>
                        <p className="title is-6">{videoTitle}</p>
                        <p className="subtitle is-6">@{videoChannel}</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;