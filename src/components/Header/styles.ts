
import styled from 'styled-components';

export const Container = styled.header`
background: #F5F5F5;
position: fixed;
  top: 0;
  width: 100%
`;

export const Content = styled.div`

a{
  text-decoration:none;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.2rem;;
margin: 0;
line-height: 140%;
/* or 25px */


/* Primary/800 */

color: #01093A;
}

width: 100%;
max-width: 1440px;
margin: 0 auto; //centraliza, nao importa o tamanho da tela

padding: 1rem 1rem 1rem;

display: flex;
align-items: center;
justify-content: space-between;

button{

font-size:1.2rem;
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
width: 12rem;

transition: filter 0.2s;
&:hover{
  filter: brightness(0.9);
}


} 


@media (max-width: 768px){
  
 display: column;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 
}


`;



