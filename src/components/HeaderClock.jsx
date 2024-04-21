import { useState, useEffect } from "react";
import { styled } from "styled-components";

const ClockH1 = styled.h1`
  /* width: 396px; */
  /* width: 343px; */
  /* width: 100%; */
  /* height: 24px; */
  font-size: 30px;
`;

function HeaderClock() {
  const [timer, setTimer] = useState(currentTimer());

  const currentTimer = () => {
    const date = new Date();
    return `${date.toLocaleString()}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(currentTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <ClockH1>{timer}</ClockH1>;
}

export default HeaderClock;
