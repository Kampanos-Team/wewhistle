import styled from 'styled-components';

export const Container = styled.div`

background: #FAFAFA;



div{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  
}

h1{
  margin-top: 2rem;
  font-family: 'Fredoka';
font-style: normal;
font-weight: 600;
font-size: 43.95px;
line-height: 53px;

/* Primary/400 */

color: #2948A2;
}

.divContent{

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 gap: 8rem;
}


.form{

  display: flex;

flex-direction: column;



}

.inputSize{
  width: 522px;
height: 25px;

/* Neutral/50 */

background: #FAFAFA;
/* Primary/200 */

border: 1px solid #8FAEEF;
border-radius: 12px;

}

.inputMessageSize{

  width: 522px;
height: 136px;

/* Neutral/50 */

background: #FAFAFA;
/* Primary/200 */

border: 1px solid #8FAEEF;
border-radius: 12px;
}

.labelSize{

  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22.5px;
line-height: 26px;
display: flex;
align-items: center;

/* Primary/400 */

color: #2948A2;
}


.btnSend{

  width: 124px;
height: 47px;

/* Secondary/500 */
border: 0;
background: #67EE9F;
border-radius: 15px;
}

@media (max-width: 768px){
  
  img{

    display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  }
 
  
 }


`;







