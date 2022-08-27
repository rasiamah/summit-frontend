import React, { useRef } from "react";
import video from "../../assets/summit.mp4";
import useVideoPlayer from "./useVideoPlayer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import "./video.css";
import { Divider, Stack } from "@mui/material";
import VideoCover from "./VideoCover";

const VideoPlay = () => {
  const theme = useTheme();
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    // handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div>
      <div className="video-wrapper">
        <VideoCover display={playerState.isPlaying && "none"}/>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <Slider
            aria-label="time-indicator"
            size="small"
            value={playerState.progress}
            min={0}
            step={1}
            max={100}
            onChange={(value) => handleVideoProgress(value)}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <PlayCircleIcon />
                ) : (
                  <PauseCircleIcon />
                )}
              </button>
            </div>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
