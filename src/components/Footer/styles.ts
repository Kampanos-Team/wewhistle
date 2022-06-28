import styled from 'styled-components';

export const Container = styled.footer`

background: #2948A2;
display: grid;
grid-template-columns: repeat(4, 1fr); //4 colunas flexiveis de tamanhos iguais
gap: 1rem; //espacamento entre os itens do grid
margin-top: 10rem;
`;

export const Content = styled.div`


width: 100%;
max-width: 15rem;
margin: 0 auto; //centraliza, nao importa o tamanho da tela

padding: 3rem 6rem 1rem;

display: flex;
align-items: flex-start;
flex-direction: column;

a{

  margin-top: 0.8rem;
  font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 186%;
/* or 26px */




color: #FAFAFA;
}

input{
  padding: 10px 0px 10px 17px;
  width: 100%;
  border-radius: 1rem;
  margin-top: 1rem;
  background: #FAFAFA;
}


p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 22.5px;
  line-height: 26px;
  display: flex;
  align-items: center;
  
  /* Secondary/500 */
  
  color: #67EE9F;
  margin-top: 2rem;
}

`;