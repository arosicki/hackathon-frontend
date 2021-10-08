import { defaultStyle } from "src/styles";
import styled from "styled-components";
import { HowDoesItWork, HowToContribute, Landing } from "./pages";

const BareHome = ({ className }: HomeProps) => {
  return (
    <div id="#top" className={className}>
      <Landing />
      <HowDoesItWork />
      <HowToContribute />
    </div>
  );
};

const Home = styled(BareHome)`
  margin-top: 40px;
  position: relative;
  section {
    height: calc(100vh - 140px);
    padding-bottom: 100px;
    position: relative;
    .content {
      padding-top: 100px;
    }
    &:nth-child(3n) {
      background-color: ${defaultStyle.HOME_THIRD_COLOR};
      path {
        fill: ${defaultStyle.HOME_THIRD_COLOR};
      }
    }
    &:nth-child(3n - 1) {
      background-color: ${defaultStyle.HOME_SECOND_COLOR};
      path {
        fill: ${defaultStyle.HOME_SECOND_COLOR};
      }
    }
    &:nth-child(3n - 2) {
      background-color: ${defaultStyle.HOME_FIRST_COLOR};
      path {
        fill: ${defaultStyle.HOME_FIRST_COLOR};
      }
    }
  }
  @media screen and (max-width: 960px) {
    margin-top: 80px;

    section {
      height: calc(100vh - 80px);
    }
  }
`;

interface HomeProps {
  className?: string;
}

export default Home;
