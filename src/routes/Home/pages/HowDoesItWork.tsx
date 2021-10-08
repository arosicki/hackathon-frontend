import styled from "styled-components";
import Divider from "./Divider";

const BareHowDoesItWork = ({ className }: HowDoesItWorkProps) => {
  return (
    <section className={className} id="how-does-it-work">
      <div className="content">
        <h1>How does it work?</h1>
        <div>
          <div>
            <h1>Your side</h1>
            <p>
              You run our script on your computer, which allows us to access your computing power (cpu and gpu). You
              will be rewarded one treecoin for every tree you have helped to plant.
            </p>
          </div>
          <div>
            <h1>Our side</h1>
            <p>
              We use your computing power to mine cryptocurrencies, sell them and plant trees using the profits, while
              rewarding you with treecoin for every tree we planted thanks to you. In future we plan to sell computing
              power to universities instead of mining in order to promote technology advancement
            </p>
          </div>
        </div>
      </div>
      <a href="#top">
        <span className="material-icons-outlined to-landing">keyboard_arrow_down</span>
      </a>
      <a href="#how-2-contrib">
        <span className="material-icons-outlined to-h2c ">keyboard_arrow_down</span>
      </a>
      <Divider />
    </section>
  );
};

const HowDoesItWork = styled(BareHowDoesItWork)`
  .content {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    h1 {
      text-align: center;
    }
    & > div {
      display: flex;
      flex-direction: row;

      & > div {
        text-align: center;
        width: 50%;
        height: 68vh;
        padding: 0 2rem;
        position: relative;
        p {
          font-size: 1.5rem;
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }
        &:nth-child(1) {
          border-right: #a8a4a4 10px dotted;
        }
      }
    }
  }
  .material-icons-outlined {
    &.to-landing {
      z-index: 1;
      top: 80px;
      transform: translate(-50%, -50%) rotate(180deg); // for some weird reason keyboard_arrow_up has different shape and size
      left: 50%;
    }
    &.to-h2c {
      bottom: 0;
    }
    color: #333;
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 40px;
  }
  @media screen and (max-width: 960px) {
    .material-icons-outlined.to-landing {
      top: 105px;
    }
  }
  @media screen and (max-width: 640px) {
    .content {
      h1 {
        font-size: 1.8rem;
      }
      div > div {
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and (max-width: 560px) {
    .content {
      h1 {
        font-size: 1.5rem;
      }
      div > div {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

interface HowDoesItWorkProps {
  className?: string;
}

export default HowDoesItWork;
