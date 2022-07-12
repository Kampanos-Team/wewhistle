import { Container, Content } from "./styles";
import styled from "styled-components";
import FooterLogo from "../../assets/FooterLogo.png";

const Title = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 22.5px;
  line-height: 27px;

  color: #67ee9f;
`;

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={FooterLogo} />
         
          <a>Subscribe to our Newsletter</a>
          <input type="email" />
        </div>

        <div>
          <Title>Whistleblowing</Title>
          <a>Compliance network</a>
          <a>Whistleblowing System Guide 2021</a>
        
        </div>

        <div>
          <Title>Complience</Title>
          <a>Security</a>
          <a>Privacy and cookie policy</a>
          <a>Personal data policy</a>
          <a>Partner terms and conditions</a>
          <a>Company terms and conditions</a>
        
        </div>

        <div>
          <Title>Company</Title>
          <a>Contact us</a>
          <a>About us</a>
         
        </div>
      </Content>
    </Container>
  );
}
