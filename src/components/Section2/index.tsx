import { Container } from "./styles";
import section2img1 from "../../assets/section2img1.png";
import section2img2 from "../../assets/section2img2.png";
import section2img3 from "../../assets/section2img3.png";
export function Section2() {
  return (
    <Container>
      <div>
        <img src={section2img1} alt="section2img1" />
        <h1>Save Money</h1>
        <p>
          You can reduce costs, because corruption costs you money in the first
          place.
        </p>
      </div>

      <div>
        <img src={section2img2} alt="section2img2" />
        <h1>Report Anonymously</h1>
        <p>
          The satisfaction of your employees increases, because you can
          anonymously contribute to the detection of malpractices.
        </p>
      </div>

      <div>
        <img src={section2img3} alt="section2img3" />
        <h1>Take Action Quickly</h1>
        <p>
          You gain legal certainty, because your employees help you uncover
          legal violations of which you have no idea.
        </p>
      </div>
    </Container>
  );
}
