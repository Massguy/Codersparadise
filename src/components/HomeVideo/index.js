import React, { useState } from "react";
import Video from "../../videos/Video.mp4";
import {
  VideoContainer,
  ContainerBg,
  VideoBg,
  HomeBtnWrapper,
  HomeContent,
  HomeH1,
  HomeP,
  ArrowForward,
  ArrowRight,
} from "./HomeVideoElements";
import { Button } from "../ButtonElement";

const HomeVideo = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <VideoContainer>
      <ContainerBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </ContainerBg>
      <HomeContent>
        <HomeH1>All your coding doubts made easy</HomeH1>
        <HomeP>
          Sign up today and get a month of subscription totally free.
        </HomeP>
      </HomeContent>
      <HomeBtnWrapper>
        <Button
          to="signup"
          onMouseEnter={onHover}
          primary="true"
          dark="true"
          onMouseLeave={onHover}
        >
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HomeBtnWrapper>
    </VideoContainer>
  );
};

export default HomeVideo;
