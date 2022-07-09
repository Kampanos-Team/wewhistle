import styled from 'styled-components';




export const Container = styled.div`


display: grid;
grid-template-columns: repeat(3, 1fr); //3 colunas flexiveis de tamanhos iguais

gap: 2rem; //espacamento entre os itens do grid
background:  #F5F5F5;
margin-top: 10rem;

img{

 
  
}

@media (max-width: 768px) {
  display: flex;
  align-items: center;
  flex-direction: column;

}


div{
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #F5F5F5;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
 color: var(--text-title);



h1{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 35.16px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  
  /* Secondary/700 */
  
  color: #33AB7D;
}

p{
margin-top: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  
  
  text-align: center;
  
  color: #2E2F2A;
 
}

}

`;




