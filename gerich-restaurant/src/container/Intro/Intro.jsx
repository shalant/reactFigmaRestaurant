import React from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)

    setplayVideo(true)
    setplayVideo(false)
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app_video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >

        </div>
        </div>  

    </div>
  );
};

export default Intro;
