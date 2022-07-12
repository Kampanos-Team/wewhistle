import { Container } from "./styles";

import section5logo from "../../assets/section5logo.png";
import section5img from "../../assets/section5img.png";

export function Section5() {
  return (
    <Container>
      <div>
        <img src={section5logo} alt="Section 5 Logo" />

        <h1>Let Us Contact You</h1>
      </div>

      
     
     <div className="divContent">
     <img src={section5img} alt="Img" />

    
      
       

      
      <form className="form">
         <label className="labelSize" htmlFor="fname">Name</label>
         <input className="inputSize" type="text" id="fname" name="fname"  />
         <br></br>
         <label className="labelSize" htmlFor="email">Email</label>
         <input  className="inputSize" type="text" id="email" name="email" />
         <br></br>

         <label className="labelSize" htmlFor="number">Telephone</label>
         <input className="inputSize" type="number" id="number" name="number" />
         <br></br>

         <label className="labelSize" htmlFor="message">Message</label>
         <input className="inputMessageSize" type="text" id="message" name="message" />


         <br></br>
         <input className="btnSend" type="submit" value="Submit" />
       </form>

      </div>
      
        
     
    </Container>
  );
}
