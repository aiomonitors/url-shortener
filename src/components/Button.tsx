import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import loadingJSON from "@/utils/loading.json";

const StyledButton = styled.button`
  border: 2px solid #283747;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 5px 10px;
  outline: none;
  background-color: transparent;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #ff0000 50%,
    #00c6ff
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in-out;
  color: #283747;
  margin-bottom: 5px;

  &:hover {
    background-position: 0 0;
    color: white;
  }
`;

export interface ButtonProps {
  children: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

const Button = ({ children, onClick, loading }: ButtonProps): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledButton
      onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
        onClick(e);
      }}
      // role="button"
    >
      {!loading ? (
        children
      ) : (
        <Lottie options={defaultOptions} height={40} width={100} />
      )}
    </StyledButton>
  );
};

export default Button;
