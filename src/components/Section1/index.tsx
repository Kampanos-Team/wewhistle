import { Container, Content } from "./styles";
import SectionBoy from "../../assets/sectionboy.png";

export function Section1() {
  return (
    <Container>
      <Content>
        <h1>Who needs WeWhistle?</h1>

        <p>
          Do you have more than 50 employees? Or does your annual turnover
          exceed 10 million euros? Then you are already legally obliged to have
          an anonymous whistleblowing system in place.
        </p>
        <p className="p2">
          In addition, public institutions and municipalities with more than
          10,000 inhabitants are also obliged to provide secure internal
          reporting channels.
        </p>

        <button type="button">Get Started</button>
      </Content>

      <div className="sectionBoy">
        <img src={SectionBoy} alt="Boy" height={500} width={480} />
      </div>
    </Container>
  );
}
