import styled from 'styled-components';

export const Container = styled.footer`

background: #2948A2;
height: 314px;
margin-top: 10rem;
`;

export const Content = styled.div`



display: flex;
align-items: center;
flex-direction: row;
gap: 6rem; //espacamento entre os itens do grid

input{

  width: 394px;
height: 45px;

/* Neutral/50 */

background: #FAFAFA;
border-radius: 12px;
}

div{
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}



a{

  font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 186%;
/* or 26px */

padding: 0.2rem;
/* Neutral/50 */

color: #FAFAFA;
}

`;