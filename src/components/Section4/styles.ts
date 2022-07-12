import styled from 'styled-components';


export const Container = styled.div`

background: #FAFAFA;

div{

  display: flex;
  align-items: center;
  justify-content: center;
}

`;

export const Content = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr); //3 colunas flexiveis de tamanhos iguais

gap: 2rem; //espacamento entre os itens do grid

p{

margin-top: 1rem;
}

@media (max-width: 320px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  div{
    width: 301px;
height: 265px;

  }
}

`;

export const Content2 = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr); //3 colunas flexiveis de tamanhos iguais

gap: 2rem; //espacamento entre os itens do grid


p{

  margin-top: 1rem;
}

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  div{
    width: 401px;
height: 165px;

  }
}

`;

export const Rectangle = styled.div`


.subTitle{ 

font-family: 'Fredoka';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 140%;
/* identical to box height, or 34px */

text-align: center;

/* Primary/400 */

color: #2948A2;
}

p{

margin-top: 1rem;
}
width: 401px;
height: 165px;
margin: 3rem;

background: #FAFAFA;
/* Secondary/700 */



border: 1px solid #33AB7D;
box-shadow: 9px 15px 19px rgba(181, 196, 238, 0.1);
border-radius: 31px;

&:hover{
    
 
    
    color: #FAFAFA;
     background: #2948A2;
    
  p{
    color: #FAFAFA;
  }
  .subTitle{
    color: #fafafa;
    font-weight: bold;
  }
     
  }


p{
  font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 140%;
/* or 25px */
display: flex;
align-items: center;
flex-direction: column;

/* Neutral/500 */

color: #171812;

}

div{

  margin: 1rem;
  display: flex;
align-items: center;
flex-direction: row;

}

.box1{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
 
 

}






`;