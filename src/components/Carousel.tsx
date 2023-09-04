import { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

const Wrapper = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftArrow = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 100px;
  top: 370px;
  flex-shrink: 0;
  background-image: url("design_image/carousel/carousel_left_button.png");
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const RightArrow = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 1770px;
  top: 370px;
  flex-shrink: 0;
  background-image: url("design_image/carousel/carousel_right_button.png");
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const CircleButton = styled.button<{ name: number; current: number }>`
  width: ${(props) => (props.name === props.current ? "10px" : "8px")};
  height: ${(props) => (props.name === props.current ? "10px" : "8px")};
  position: absolute;
  top: 650px;
  left: ${(props) =>
    props.name === 0 ? "920px" : props.name === 1 ? "950px" : "980px"};
  border-radius: 50%;
  background-color: ${(props) =>
    props.name === props.current
      ? "rgba(255, 255, 255, 1.00)"
      : "rgba(255, 255, 255, 0.30)"};
  border: none;
  cursor: pointer;
`;

function Carousel() {
  const [current, setCurrent] = useState(0);
  const getCurrent = (current: number) => {
    if (current === 3) return 0;
    else return current;
  };

  const autoChange = () => {
    setCurrent((prevCurrent) => getCurrent(prevCurrent + 1));
  };

  useEffect(() => {
    const timer = setInterval(autoChange, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <Wrapper>
      <LeftArrow onClick={() => setCurrent(getCurrent(current - 1))} />
      {current === 0 ? (
        <Carousel1></Carousel1>
      ) : current === 1 ? (
        <Carousel2></Carousel2>
      ) : (
        <Carousel3></Carousel3>
      )}
      <RightArrow onClick={() => setCurrent(getCurrent(current + 1))} />
      <CircleButton onClick={() => setCurrent(0)} name={0} current={current} />
      <CircleButton onClick={() => setCurrent(1)} name={1} current={current} />
      <CircleButton onClick={() => setCurrent(2)} name={2} current={current} />
    </Wrapper>
  );
}

export default Carousel;
