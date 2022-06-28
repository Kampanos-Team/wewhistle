import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { GlobalStyle } from "./styles/Global";
import styled from 'styled-components';
import { Section3 } from "./components/Section3";
import { Footer } from "./components/Footer";



const TitleBetweenSections = styled.h1`
font-family: 'Fredoka';
font-style: normal;
font-weight: 600;
font-size: 3.5rem
line-height: 5rem;

text-align: center;
margin-top: 12rem;
color: #2948A2;
`;


export default function App(){

  return (
<>

<Header/>
<Section1/>
<TitleBetweenSections>Why WeWhistle?</TitleBetweenSections>
<Section2/>
<Section3/>

<Footer/>
<GlobalStyle/>


</>
  
  );
}