import { Container, Content } from "./styles";
import SectionBoy from "../../assets/sectionboy.png";

export function Section1() {
  return (
    <Container>
      <Content>
        <h1>What can we help you find, Srikant?</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>

        <button>Ask for a Demo</button>
      </Content>

      <div>
        <img src={SectionBoy} alt="Boy" height={500} width={480} />
      </div>
    </Container>
  );
}
