import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 40px 40px;
  padding: 3rem 4rem;
  direction: rtl;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  font-family: "IBM Plex Sans Arabic";
  background-color: ${(props) => props.bg || "#b4b4ef"};
  color: ${(props) => props.text || "#2e2e2e"};
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 0;
  }

  &::before {
    top: -350px;
    left: -215px;
    width: 800.37px;
    height: 841.16px;
    background-color: ${(props) => props.circle || "#bfbff1"};
  }

  &::after {
    bottom: -220px;
    right: -100px;
    width: 650px;
    height: 650px;
    background-color: ${(props) => props.circle || "#bfbff1"};
  }

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    padding: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column-reverse;
    width: 100%;
    border-radius: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-weight: bold;
    color: white;

    .top-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.2rem;
      font-weight: bold;
      margin: 0;
    }

    h3 {
      font-size: 1.3rem;
      margin: 0;
      font-weight: 500;
    }

    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-align: justify;
      margin: 0;
    }

    .share-button {
      align-self: center;
      margin-top: auto;
      background-color: #f6f3fe;
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.2rem;
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: background 0.3s ease;
      margin-top: 5%;

      .share-text {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(to right, #b4b4ef, #b4b4ef);
      }

      .x-icon {
        width: 25px;
        height: 25px;
        fill: #4b3cc2;
      }

      &:hover {
        background-color: #e4ddfb;
      }
    }

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 0;
      align-items: center;

      p {
        text-align: center;
        padding: 0 0.5rem;
      }
    }
  }

  .robot-image {
    position: relative;
    z-index: 1;
    max-width: 35%;

    img {
      width: 100%;
      height: auto;
    }

    @media (max-width: 992px) {
      max-width: 60%;
      margin-bottom: 2rem;
    }

    // @media (max-width: 768px) {
    //   display: none;
    // }
  }
`;


export default StyledCard;
