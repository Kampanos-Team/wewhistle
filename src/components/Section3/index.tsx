import { Container, Title, Content, Content2, H3styled } from "./styles";
import searching from "../../assets/searching.png";
import styled from "styled-components";

export function Section3() {
  return (
    <Container>
      <Content>
        <img src={searching} alt="Searching" />
      </Content>

      <Content2>
        <div>
          <Title>And If You Renounce to WeWhistle?</Title>
          <p>
            If you offer WeWhistle, your employees are able to
            <strong> report grievances</strong> such as corruption, abuse of
            authority, discrimination or harassment internally to WeWhistle. If
            you do not do this, your employees are entitled to immediately
            contact the relevant authorities. You also risk sanctions against
            your company.
          </p>
          <div>
            <H3styled>What is important?</H3styled>
            Your reporting channel must ensure the absolute confidentiality of
            the whistleblower. He must not have to fear any reprisals.
            <p>
              <br>
                {" "}
                Neither WeWhistle nor third parties have access to the sensitive
                data of the reports. A report must be possible at any time and
                around the clock. Reports are documented in an auditproof
                manner.
              </br>
            </p>
          </div>
        </div>
      </Content2>
    </Container>
  );
}
