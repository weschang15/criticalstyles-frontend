import { darken } from "polished";
import React from "react";
import styled from "styled-components";
import DemoVideoThumbnail from "../../assets/critical-styles-demo-v2-thumbnail.png";
import DemoVideo from "../../assets/critical-styles-demo-v2.mp4";
import { Icons, PageSection } from "../../Elements";
import { PublicLayout } from "../../Layouts/Layouts";

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

  @media only screen and (min-width: 25em) {
    padding-top: 15vh;
  }

  @media only screen and (min-width: 64em) {
    padding-top: 18vh;
  }
`;

const Header = styled.header`
  text-align: center;
  > h2 {
    font-weight: 600;
    span {
      font-size: 0.25em;
    }
  }

  > p {
    color: ${({ theme }) => darken(0.5, theme.gray)};
    margin: 0 auto;
    max-width: 960px;
  }
`;

const Grid = styled.div`
  margin: 5em auto;
  max-width: 720px;
`;

const GridItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.gray};
  margin: 1em 0;
  border-radius: 6px;
  svg {
    display: inline-block;
    margin-right: 1em;
  }

  > div {
    flex: 1;
    p {
      color: ${({ theme }) => darken(0.5, theme.gray)};
      font-size: 14px;
      margin: 0;
    }
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
        <Header>
          <h2>Better Performance, Better Experience</h2>
          <p>
            Don't let poor page performance impact your SEO scores, or user
            experience.
          </p>
        </Header>
        <Grid>
          <GridItem>
            <Icons icon="pagespeed" />
            <div>
              <h5>Page Performance</h5>
              <p>
                CSS Stylesheets are almost always render blocking leaving your
                website blank until all critical resources are loaded, parsed,
                and executed. Inlining <strong>critical CSS</strong> allows the
                browser to render only whats needed to display the
                above-the-fold content.
              </p>
            </div>
          </GridItem>
          <GridItem>
            <Icons icon="seo" />
            <div>
              <h5>SEO Ranking</h5>
              <p>
                Critical Styles can help deliver a <u>fast</u>, smooth user
                experience–an important part of building any web application.
                Google has even made{" "}
                <strong>
                  <a
                    href="https://developers.google.com/web/updates/2018/07/search-ads-speed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    speed
                  </a>
                </strong>{" "}
                a major ranking factor for mobile search results.
              </p>
            </div>
          </GridItem>
          <GridItem>
            <Icons icon="bounce-rate" />
            <div>
              <h5>Bounce Rate</h5>
              <p>
                Users with slow networks, especially on mobile, are much less
                likely to wait for your website to load. Critical Styles enables
                you to inline <i>critical CSS,</i> significantly improving
                initial page load resulting in greater content consumption and a
                <strong> lower bounce rate.</strong>
              </p>
            </div>
          </GridItem>
          <GridItem>
            <Icons icon="conversions" />
            <div>
              <h5>Lead Conversions</h5>
              <p>
                Using Critical Styles results in a faster website, lower bounce
                rate, and a better SEO ranking. What that really equates to,
                however, is <strong>less missed opportunities.</strong> More
                form fills, more sales transactions, and more user
                registrations.
              </p>
            </div>
          </GridItem>
        </Grid>
      </ProductSection>
    </PublicLayout>
  );
}

export default Home;
