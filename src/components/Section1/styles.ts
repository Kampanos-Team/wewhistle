
import styled from 'styled-components';

/* colocar o menu burguer no mobile  */

export const Container = styled.section`





@media (max-width: 1024px){
  display: flex;
  align-items: center;
  justify-content: center;
  .sectionBoy{
    display: none;
  }
}
@media (min-width: 1440px){
  .sectionBoy{
    display: unset;
  }
}

background: #F5F5F5;
display: flex;
align-items: center;
max-width: 1440px;
margin-left: 6rem;
div{

  margin-top: 12rem;
}
`;



export const Content = styled.div`



//margin: 0 auto; //centraliza, nao importa o tamanho da tela

margin-top: 12rem;

padding: 1rem 1rem 1rem;

display: flex;
align-items: column;
justify-content: flex-start;
flex-direction: column;

h1{

  font-family: 'Fredoka';
font-style: normal;
font-weight: 600;
font-size: 3.6rem;
line-height: 4.4rem;
letter-spacing: 0.005em;

width: 100%;
color: #2948A2;
}

p{
  
  margin-top:1rem;
  width: 60%;
}
.p2{
  margin-top:1rem;
  width: 60%;
  font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 132%;
/* or 18px */

letter-spacing: 0.025em;

/* Neutral/500 */

color: #171812;
}

button{
  margin-top:1rem;
  font-size:1rem;
  color: #010D47;
  font-family: 'Lato';
font-style: normal;

font-size: 1.2rem;
line-height: 1.5rem;
 
border-radius: 15px;
  
  font-weight: 600;
  background: #67EE9F;
  border: 0;
  
  
  height: 2.5rem;
  width: 14rem;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }

 
}


`;







 



