import Divider from "./Divider";
import treesImg from "../../../images/trees.svg";
import backgroundImg from "../../../images/background.png";
import styled from "styled-components";
import { defaultStyle } from "src/styles";

/* MAKE IT RESPONSIVE ! 
    Buttons href
    arrow href

*/

const BareLanding = ({ className }: LandingProps) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="inner-container">
          <div className="left">
            <div>
              <h1>
                Do you have some spare computing power?
                <br />
                Do you want to help our planet?
              </h1>
              <p>
                If your answer was yes in both cases you've come to the right place!
                <br /> Sign up today and help us shape better future!
              </p>
            </div>
            <img src={treesImg} alt="trees" />
          </div>
          <div className="right">
            <a href="#how-2-contrib" className="how-2-contrib">
              <p>I'm in</p>
            </a>
            <a href="#how-does-it-work" className="how-it-works">
              <p>Wait, but how does it work?</p>
            </a>
          </div>
        </div>
      </div>
      <div className="seamless-transition"></div>
      <Divider />
      <a href="#how-does-it-work">
        <span className="material-icons-outlined">keyboard_arrow_down</span>
      </a>
    </section>
  );
};

const Landing = styled(BareLanding)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${backgroundImg});
  .material-icons-outlined {
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 0;
    font-size: 40px;
  }
  .seamless-transition {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, ${defaultStyle.HOME_FIRST_COLOR} 0%, rgba(0, 0, 0, 0) 100%);
  }
  .container {
    padding: 20px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    color: #666;
    width: 80vw;
    height: 60vh;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px 100px;
  }
  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 4rem 2rem;
    .right {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      position: relative;
      margin-bottom: 2rem;
      a {
        p {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
        }
        position: relative;
        text-align: center;
        font-size: 1.1rem;
        display: inline-block;
        padding: 0.46em 1em;
        height: 4rem;
        width: 40%;
        border: 0.1em solid #000000;
        margin: 0 0.2em 0.2em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        color: #000000;
        text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
        background-color: #ffffff;
        text-align: center;
        transition: all 0.1s ease-in-out;
        &:hover {
          color: #ffffff;
          border-color: #ffffff;
        }
        &.how-2-contrib {
          background-color: #ff5c58;
          width: 60%;
        }
        &.how-it-works:hover {
          color: #ffffff;
          border-color: #ffffff;
          background-color: #333;
        }
      }
    }
    .left {
      margin: auto 2rem auto 0;
      display: flex;
      flex-direction: row;
      height: 90%;

      div {
        flex-direction: column;
        display: flex;
        max-width: 50%;
      }
      img {
        width: 50%;
        height: auto;
        border-radius: 60px 20px;
        margin: 2rem 0;
        position: relative;
        &::after {
          content: "Sproutify";
          background-color: yellow;
          color: red;
          font-weight: bold;
          width: 100px;
          height: 40px;
          z-index: 1;
          display: inline-block;
          position: absolute;
        }
      }
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .material-icons-outlined {
      bottom: 78px;
    }
    .container {
      height: 80vh;
    }
    .inner-container {
      justify-content: center;
      .left {
        position: relative;
        flex-direction: column-reverse !important;
        margin: auto 0 !important;
        width: 100%;
        height: auto;
        h1,
        p {
          width: 200%;
          display: inline-block;
          font-size: 1.5rem;
        }
        &.how-2-contrib {
          p {
            font-size: 1.5rem;
          }
        }
        div {
          width: 100% !important;
        }
        img {
          margin: 0 auto;
          width: 70%;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    h1,
    p {
      font-size: 1rem;
    }
    a {
      &.how-2-contrib {
        p {
          font-size: 1rem;
        }
      }
      p {
        font-size: 0.7rem;
      }
    }
    img {
      width: 90% !important;
    }
  }
`;

interface LandingProps {
  className?: string;
}

export default Landing;
