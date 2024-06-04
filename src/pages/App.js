import { Input } from "../components/input";
import { Container } from "./styles";
import gitLogo from '../assets/github.png'
import { Button } from "../components/button";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input/>
      <Button/>

    </Container>
  );
}

export default App;
