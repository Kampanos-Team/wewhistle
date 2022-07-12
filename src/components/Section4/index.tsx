import styled from "styled-components";
import { Container, Content, Content2, Rectangle } from "./styles";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";

export const Title = styled.h1`
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 600;
  font-size: 43.95px;
  line-height: 53px;

  display: flex;
  margin-top: 6rem;
  justify-content: center;

  color: #2948a2;
`;

export const SubTitle = styled.h3`
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  width: 100%;
  color: #2948a2;
`;

export const PsubTitle = styled.h3`
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  width: 100%;
  color: #2948a2;
  margin-bottom: 1rem; ;
`;

export function Section4() {
  return (
    <Container>
      <Title>Why WeWhistle?</Title>

      <Content>
        <Rectangle>
          <div className="box">
            <img src={img1} alt="img1" />

            <div className="box1">
              <p className="subTitle"> Ease of communication</p>

              <p>
                Entries can be made in writing, by telephone or via the
                internet.
              </p>
            </div>
          </div>
        </Rectangle>
        <Rectangle>
          <div >
            <img src={img2} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Follow-ups</p>
              <p>
              WeWhistle coordinates the necessary follow-up measures.


              </p>
            </div>
          </div>
        </Rectangle>
        <Rectangle>
          <div>
            <img src={img3} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Availablity</p>

              <p>
              WeWhistle is available for you and your employees worldwide 7/24.

              </p>
            </div>
          </div>
        </Rectangle>
      </Content>

      <Content2>
        <Rectangle>
          <div>
            <img src={img4} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Data protection</p>

              <p>
              Pseudonymisation takes place in compliance with data protection regulations.
              </p>
            </div>
          </div>
        </Rectangle>
        <Rectangle>
          <div>
            <img src={img5} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Anonymity</p>

              <p>
              WeWhistle supports the whistleblower in maintaining anonymity.
              </p>
            </div>
          </div>
        </Rectangle>
        <Rectangle>
          <div>
            <img src={img6} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Organized</p>

              <p>
              Reports without relevance are deleted immediately.
              </p>
            </div>
          </div>
        </Rectangle>
      </Content2>

      <div>
        <Rectangle>
          <div>
            <img src={img7} alt="img1" />

            <div className="box1">
            <p className="subTitle"> Unlimited archive</p>

              <p>
              Reports can be archived for an unlimited period.
              </p>
            </div>
          </div>
        </Rectangle>
      </div>
    </Container>
  );
}
