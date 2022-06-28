import { Container } from "./styles";
import section2img1 from "../../assets/section2img1.png";
import section2img2 from "../../assets/section2img2.png";
import section2img3 from "../../assets/section2img3.png";
export function Section2() {
  return (
    <Container>
      <div>
        <img src={ section2img1} alt="section2img1" />
        <h1>
          Maximum Safety
          
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div>
      <img src={ section2img2} alt="section2img2" />
        <h1>
          Anonymous Reporting
         
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div >
      <img src={ section2img3} alt="section2img3" />
        <h1>
          Compliant with EU Directive
         
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Container>
  );
}
