import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";
import Timer from "./components/Timer/Timer.js";
import { useState } from "react";

const App = () => {

  const [time, setTime] = useState (0);

  return (
    <Container>
      <h1>Hello world</h1>
      <Timer time={time} />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};

export default App;