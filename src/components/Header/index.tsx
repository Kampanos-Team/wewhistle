
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
export function Header() {
  return (
    <Container>
      <Content>
      
        <img src={logo} alt="We Whistle" />

        
          <a href="#service">Service</a>
          <a href="#aboutus">About Us</a>
          <a href="#contact">Contact</a>
        
        <button>Ask for a Demo</button>
      </Content>
    </Container>
  );
}
