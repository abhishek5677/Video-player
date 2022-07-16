import './VideoDetail.css';
import React from "react";

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading...</div>;
    };

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div className="">
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment videoDetail-con">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p style={{ color: 'grey' }}>{video.snippet.description}</p>
            </div>
        </div>
    );

};

export default VideoDetail;