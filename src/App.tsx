import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { GlobalStyle } from "./styles/Global";
import styled from "styled-components";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";
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

  div{
    margin-top: 1rem;
    font-family: 'Fredoka';
font-style: normal;
font-weight: 300;
font-size: 22.5px;
line-height: 27px;
text-align: center;
color:#171812;
  }
`;



export default function App() {
  return (
    <>
      <Header />
      <Section1 />

      <TitleBetweenSections>Transparent Corporate Culture
      <div>
          You want to offer your employees and other stakeholders a
          <strong> safe and anonymous </strong> way to report observed
          grievances. Your company will benefit directly from this:
        </div>
      </TitleBetweenSections>
     
      
     
      <Section2 />

      <Section3 />

      <Section4/>

      <Section5/>

      <Footer/>

      <GlobalStyle />
    </>
  );
}
