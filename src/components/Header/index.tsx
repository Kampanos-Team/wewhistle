import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="We Whistle" />

        <a href="#Advantages">Advantages</a>
        <a href="#aboutus">Why Us?</a>
        <a href="#contact">Contact</a>

        <button>Get Started</button>
      </Content>
    </Container>
  );
}
