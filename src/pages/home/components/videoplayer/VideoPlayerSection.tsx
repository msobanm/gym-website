import React from "react"
import ReactPlayer from "react-player"

const VideoPlayerSection = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactPlayer
        url="videos/video.mp4"
        width="100%"
        height="100%"
        controls={false}
        volume={0}
        playing={true}
      />
    </div>
  )
}

export default VideoPlayerSection
