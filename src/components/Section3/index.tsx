import { Container, Content, Title } from "./styles";
import searching from "../../assets/searching.png";
import styled from "styled-components";


export const P = styled.p`
color: #2948A2;
font-weight: 600;
font-family: 'Fredoka';
padding: 1rem 0 1rem;
`;

export const P2 = styled.p`


font-family: 'Fredoka';
padding: 1rem 0 1rem;
`;


export function Section3() {
  return (
    <Container>
      <Content>
        <img className="sizeImg" src={searching} alt="Searching" />

        <div>
          <Title>And If You Renounce to WeWhistle?</Title>
          <p>
            If you offer WeWhistle, your employees are able to <strong> report grievances </strong> 
            such as corruption, abuse of authority, discrimination or harassment
            internally to WeWhistle. If you do not do this, your employees are
            entitled to immediately contact the relevant authorities. You also
            risk sanctions against your company. 
            

            <P>What is important? </P>
            Your reporting channel must ensure the <strong> absolute confidentiality of the
            whistleblower. </strong> He must not have to fear any reprisals. 
            
            <P2>  Neither WeWhistle nor third parties have access to the <strong> sensitive data </strong> of the
            reports. A report must be possible at any time and around the clock.
            Reports are documented in an <strong>  auditproof manner. </strong>       </P2>
            
          </p>
        </div>
      </Content>
    </Container>
  );
}
