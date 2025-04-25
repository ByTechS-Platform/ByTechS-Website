import React, { useState } from "react";
import styled from "styled-components";

const CopyShare = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = "https://bytechs.net";
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  return (
    <StyledWrapper>
      <button className="Btn" onClick={handleCopy} aria-label="Copy link">
        <span className="svgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            height="1.6em"
            className="svgIcon"
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a2.97 2.97 0 0 0 0-1.39l7.02-4.11A2.97 2.97 0 1 0 14.1 5l-7.02 4.11a3 3 0 1 0 0 5.78l7.02 4.11a2.97 2.97 0 1 0 4.9-2.92z" />
          </svg>
        </span>
        <span className="BG" />
      </button>
      {copied && <span className="copied-message">Link copied!</span>}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    border-radius: 10px;
    transition: all 0.3s;
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #4f46e5;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    border: 1px solid rgba(216, 216, 216, 0.466);
    background-color: rgba(190, 190, 190, 0.466);
    backdrop-filter: blur(4px);
  }

  .copied-message {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4f46e5;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    animation: fadeInOut 2s ease-in-out;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    20% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }
`;

export default CopyShare;
