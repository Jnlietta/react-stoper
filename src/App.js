import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";
import Timer from "./components/Timer/Timer.js";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [time, setTime] = useState (2);
  const [intervalValue, setIntervalValue] = useState(null);

  const startTimer = () => {
    setIntervalValue(setInterval(()=> {setTime(prevValue => prevValue + 1)}, 1))
  };

  const stopTimer = useEffect(() => {
    return () => {
      if(startTimer) clearInterval(startTimer);
    };
  }, []);

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <Container>
      <Timer time={time} />
      <Button onClick={() => startTimer}>Start</Button>
      <Button onClick={() => stopTimer}>Stop</Button>
      <Button onClick={() => resetTimer}>Reset</Button>
    </Container>
  );
};

export default App;