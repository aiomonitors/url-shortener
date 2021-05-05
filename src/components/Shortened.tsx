import React, { useEffect } from "react";
import styled from "styled-components";
import tippy from "tippy.js";
import toast from "react-hot-toast";

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const ContentWrapper = styled(Glass)`
  width: 100%;
  height: min-content;
  margin-bottom: 5px;
  color: #3498db;
  font-size: 14px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export interface ShortenedProps {
  children: string;
}

const Shortened = ({ children }: ShortenedProps): JSX.Element => {
  useEffect(() => {
    tippy("#shortened", {
      content: "Click to copy!",
      arrow: false,
      placement: "left",
    });
  }, []);

  return (
    <ContentWrapper
      id="shortened"
      onClick={() => {
        navigator.clipboard?.writeText(children);
        toast.success("Copied to clipboard! ");
      }}
    >
      {children && children.length > 36
        ? `${children.slice(0, 36)}...`
        : children}
    </ContentWrapper>
  );
};

export default Shortened;
