import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MetatagsResponse } from "../types";

const Container = styled(motion.div)`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: min-content;

  transition: max-height 0.2s ease-in-out;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 0 0 10px 0;
`;

const Heading = styled.h1`
  margin: 0 0 5px 0;
  font-size: 1rem;
  color: #283747;
  box-sizing: border-box;
  padding: 0 5px;
  /* text-align: center; */
`;

const Description = styled.h3`
  margin: 0;
  font-size: 0.8rem;
  color: #283747;
  box-sizing: border-box;
  padding: 0 5px;
  /* text-align: center; */
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: min-content;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.3);
  margin-bottom: 5px;
`;

const Skeleton = styled.div`
  border-radius: 4px;

  background: rgba(0, 0, 0, 0.1);
  animation: loading 1s infinite ease;

  @keyframes loading {
    0%,
    100% {
      background: rgba(0, 0, 0, 0.05);
    }

    50% {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const ImageSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  margin-bottom: 2px;
`;

const HeadingSkeleton = styled(Skeleton)`
  width: 80px;
  height: 20px;
`;

const DescriptionSkeleton = styled(Skeleton)`
  width: 150px;
  height: 40px;
  margin-top: 10px;
`;

const MetadataComponent = ({
  data,
}: {
  data: MetatagsResponse;
}): JSX.Element => {
  const description = data?.["og:description"] || data?.["twitter:description"];
  const title = data?.title || data?.["og:title"];
  const image = data?.["og:image"] || data?.["twitter:image"];

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImageSkeleton, setShowImageSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImageSkeleton(false);
    }, 500);
  }, [imageLoaded]);

  return (
    <>
      {data && (
        <Container layout transition={{ layoutY: { duration: "0.1" } }}>
          {image && (
            <ImageContainer
              layout
              transition={{ layoutY: { duration: "0.1" } }}
            >
              <Image
                src={image}
                onLoad={() => setImageLoaded(true)}
                style={{ display: showImageSkeleton ? "none" : "block" }}
              />
              {showImageSkeleton && <ImageSkeleton />}
            </ImageContainer>
          )}
          <Heading>{title}</Heading>
          {description && description !== title ? (
            <Description>
              {data["og:description"] || data["twitter:description"]}
            </Description>
          ) : null}
        </Container>
      )}
      {!data && (
        <Container
          layout
          transition={{ layoutY: { duration: "0.1" } }}
          style={{ alignItems: "center" }}
        >
          <ImageContainer layout transition={{ layoutY: { duration: "0.1" } }}>
            <ImageSkeleton />
          </ImageContainer>
          <HeadingSkeleton />
          <DescriptionSkeleton />
        </Container>
      )}
    </>
  );
};

export default MetadataComponent;
