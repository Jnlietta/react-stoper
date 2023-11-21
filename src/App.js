import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";
import Timer from "./components/Timer/Timer.js";
import { useState, useEffect } from "react";

const App = () => {

  const [time, setTime] = useState (0);
  const [intervalValue, setIntervalValue] = useState(null);

  const startTimer = () => {
    if (intervalValue) clearInterval(intervalValue);
    setIntervalValue(setInterval(()=> {setTime(prevValue => prevValue + 1)}, 1));
  };

  const stopTimer = () => { //przy kliknieciu buttona
    clearInterval(intervalValue); //Przyjmuje tylko jeden argument – referencje do intervalu, który chcemy usunąć. Oczywiście, żeby było to możliwe, nasz interval musi być przypisany do jakiejś zmiennej czy stałej czyli stanu??
  };

  useEffect(() => { //przy usuwaniu komponentu
    return () => {
      if(intervalValue) clearInterval(intervalValue); //sprawdzam czy ktos juz wczesniej nie usunal intervalu np klikajac button "stop"
    };
  }, []);

  const resetTimer = () => {
    if(intervalValue) clearInterval(intervalValue);
    setTime(0);
  };

  return (
    <Container>
      <Timer time={time} />
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
};

export default App;