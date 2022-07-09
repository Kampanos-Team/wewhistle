import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { GlobalStyle } from "./styles/Global";
import styled from "styled-components";
import { Section3 } from "./components/Section3";
import { Footer } from "./components/Footer";

const TitleBetweenSections = styled.h1`
  font-family: "Fredoka";

  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 5rem;

  text-align: center;
  margin-top: 12rem;
  color: #2948a2;
`;

const PBetweenSections = styled.p`
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #171812;
  
`;

export default function App() {
  return (
    <>
      <Header />
      <Section1 />

      <TitleBetweenSections>Transparent Corporate Culture</TitleBetweenSections>
      <PBetweenSections>
        <div>
        You want to offer your employees and other stakeholders a <strong> safe and
        anonymous </strong> way to report observed grievances. Your company will benefit
        directly from this:
        </div>
       
      </PBetweenSections>
      <Section2 />

     
<Section3/>
 {/*
<Footer/> */}
      <GlobalStyle />
    </>
  );
}
