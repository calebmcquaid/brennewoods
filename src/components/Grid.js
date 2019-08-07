import React from "react";
import styled from "styled-components";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3-copy.png";
import Img4 from "../images/image4-copy.png";
import Img5 from "../images/image5-copy.png";

const Background = styled.div`
  margin-top: 6em;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 3em;
`;

const PhotoGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 70%;

  .div1 {
    grid-area: 1 / 1 / 3 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 3 / 7;
  }
  .div3 {
    grid-area: 1 / 7 / 7 / 9;
  }
  .div4 {
    grid-area: 3 / 1 / 4 / 7;
  }
  .div5 {
    grid-area: 4 / 1 / 9 / 7;
  }
`;

const Image1 = styled.img`
  width: 100%;
  height: 27.59em;
  object-fit: cover;
  box-shadow: 0px 1px 5px -1px;
`;

const Image2 = styled.img`
  width: 100%;
  height: 27.59em;
  object-fit: cover;
  box-shadow: 0px 1px 5px -1px;
`;

const Image3 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 1px 5px -1px;
`;

const Image4 = styled.img`
  width: 100%;
  box-shadow: 0px 1px 5px -1px;
`;

const Image5 = styled.img`
  width: 100%;
  height: 42.2em;
  object-fit: cover;
  box-shadow: 0px 1px 5px -1px;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  h1 {
    color: white;
  }
`;

const Grid = () => {
  return (
    <Background>
      <CenteredDiv>
        <h1>Work Samples</h1>
      </CenteredDiv>
      <PhotoGrid>
        <div className="div1">
          <Image1 src={Img1} />
        </div>
        <div className="div2">
          <Image2 src={Img2} />
        </div>
        <div className="div3">
          <Image3 src={Img3} />
        </div>
        <div className="div4">
          <Image4 src={Img4} />
        </div>
        <div className="div5">
          <Image5 src={Img5} />
        </div>
      </PhotoGrid>
    </Background>
  );
};

export default Grid;
