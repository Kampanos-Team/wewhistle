
import styled from 'styled-components';



export const Container = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 32px 0px;
gap: 111px;
width: 100%;
height: 46rem;
margin-top: 8rem;;
background: #C6D6F7;

@media (max-width: 1200px){




width: 100%;
height: 100%;
img{
  display: none;
}
}



`;



export const Content = styled.div`

.sizeImg{

width: 564px;
height: 564px;

}

@media (min-width: 320px){
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto
}


display: flex;

gap: 10rem; //espacamento entre os itens do grid


div{

  padding: 2rem;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
/* or 28px */

width: 50%;

color: #5F605E;
}

`;




export const Title = styled.h1`
font-family: 'Fredoka';
font-style: normal;
font-weight: 600;
font-size: 43.95px;
line-height: 53px;

margin-bottom: 2rem;;
/* Primary/400 */

color: #2948A2;
`;


