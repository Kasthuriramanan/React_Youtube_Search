import React from 'React';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map( (video) => {return <videoListItem video={video}/>})
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
};

export default VideoList;