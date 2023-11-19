import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";

const App = () => {
  return (
    <Container>
      <h1>Hello world</h1>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};

export default App;