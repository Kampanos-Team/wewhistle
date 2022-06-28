
import styled from 'styled-components';

export const Container = styled.section`
background: #F5F5F5;
display: flex;
grid-template-columns: repeat(2, 1fr); //2 colunas flexiveis de tamanhos iguais
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
font-size: 54.93px;
line-height: 66px;
letter-spacing: 0.005em;

width: 60%;
margin-left:: 3rem;
color: #2948A2;
}

p{
  margin-left:: 3rem;
  margin-top:1rem;
  width: 60%;
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







 



