import React from "react";
import styled from "styled-components";
import DemoVideoThumbnail from "../../assets/critical-styles-demo-thumbnail.png";
import DemoVideo from "../../assets/Critical_Styles_Demo.mp4";
import { PublicLayout } from "../../Components/Layouts/Layouts";
import { PageSection } from "../../Elements";

const HeroSection = styled(PageSection)`
  background-color: ${({ theme }) => theme.purple};
  padding: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.white};
  z-index: 1;
  p {
    margin-bottom: 2em;
  }
`;

const Headline = styled.h1`
  @media only screen and (min-width: 25em) {
    margin-bottom: 0.25em;
  }
`;

const VideoWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  display: inline-block;
  max-width: 860px;
  overflow: hidden;

  @media only screen and (min-width: 25em) {
    margin-bottom: -15vh;
  }
`;

const VideoPlayer = styled.video`
  display: block;
  max-height: 100%;
  width: 100%;
`;

const ProductSection = styled(PageSection)`
  padding: 1.5em;
  text-align: center;

  > h2 {
    font-weight: 600;
    span {
      font-size: 0.25em;
    }
  }

  > p {
    margin: 0 auto;
    max-width: 960px;
  }

  @media only screen and (min-width: 25em) {
    padding-top: 15vh;
  }

  @media only screen and (min-width: 64em) {
    padding-top: 18vh;
  }
`;

function Home(props = {}) {
  return (
    <PublicLayout>
      <HeroSection>
        <Headline>Critical CSS in 1 Click</Headline>
        <p>Faster page loads, increased conversions, and improved SEO.</p>
        <VideoWrapper>
          <VideoPlayer
            controlsList="nodownload noremoteplayback nofullscreen"
            preload="none"
            poster={DemoVideoThumbnail}
            disablePictureInPicture
            disableRemotePlayback
            controls
            muted
          >
            <source src={DemoVideo} type="video/mp4" />
          </VideoPlayer>
        </VideoWrapper>
      </HeroSection>
      <ProductSection>
        <h2>Better Performance, Better Experience</h2>
        <p>
          Don't let poor page performance impact your SEO scores, or user
          experience. Critical Styles can improve initial page render, allowing
          your users to consume content quicker.
        </p>
        <p>
          <strong>More details to come...</strong>
        </p>
      </ProductSection>
    </PublicLayout>
  );
}

export default Home;
