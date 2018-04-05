import React from 'react';

const VideoDetail = ({video}) => {
    
    if(!video) {
        return (
            <div>Loading ...</div>
        )
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail" style={{height: '100%', paddingTop: '10px'}}>
            <iframe className="embed-responsive-item" style={{width: '95%', height: '75%'}} src={url}></iframe>
            <div className="container" style={{textAlign: 'left', paddingLeft: '22px'}}>
                <h4 className="">
                    <strong>{video.snippet.title}</strong>
                </h4>
                <h5 className="" style={{width: '75%'}}>
                 {video.snippet.description}
                </h5>
            </div>
        </div>
    );
}

export default VideoDetail;