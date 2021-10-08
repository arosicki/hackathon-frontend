import styled from "styled-components";

const BareHowToContribute = ({ className }: HowToContributeProps) => {
  return (
    <section className={className}>
      <div id="how-2-contrib" className="content">
        <div className="dl-blurbs">
          <dl>
            <dt>Design</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>
            <dt>Develop</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>
            <dt>Test</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>
          </dl>
          <dl>
            <dt>Deliver</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>
            <dt>Rinse</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>

            <dt>Repeat</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </dd>
          </dl>
        </div>
        <a href="#how-does-it-work">
          <span className="material-icons-outlined">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};

const HowToContribute = styled(BareHowToContribute)`
  .content {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    .dl-blurbs {
      display: grid;
      height: 100%;
      padding-top: 50px;
    }

    dl {
      counter-reset: count;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.04) 20%, rgba(255, 255, 255, 0) 0%);
      padding-left: 4vw;
      padding-right: 4vw;
      margin: 0;
    }
    @media (min-width: 768px) {
      dl {
        padding-left: 2vw;
      }
    }
    @media (min-width: 1024px) {
      dl {
        padding-top: 3vw;
        padding-bottom: 3vw;
      }
    }

    dl + dl {
      counter-reset: counter 4;
    }

    dt {
      counter-increment: count;
      color: #4f6d7aff;
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      font-size: 4vw;
      text-transform: uppercase;
      height: 5vh;
    }

    dt::before {
      content: counter(count, decimal-leading-zero) ".";
      font-family: "Abril Fatface", cursive;
      color: #bbb;
      font-weight: normal;
      margin-left: -1vw;
      padding-right: 12px;
    }

    dd {
      margin-left: 5vw;
      margin-bottom: 2vh;
      line-height: 2vh;
    }
    @media (min-width: 740px) {
      .dl-blurbs {
        grid-template-columns: repeat(2, 1fr);
        gap: 2vw;
      }
      dt {
        height: 7.5vh;
      }
      dd {
        line-height: 3vh;
      }
    }
  }
  .material-icons-outlined {
    z-index: 1;
    top: 80px;
    transform: translate(-50%, -50%) rotate(180deg); // for some weird reason keyboard_arrow_up has different shape and size
    left: 50%;
    color: #333;
    position: absolute;
    cursor: pointer;
    font-size: 40px;
  }
  @media screen and (max-width: 960px) {
    .material-icons-outlined {
      top: 120px;
    }
  }
`;

interface HowToContributeProps {
  className?: string;
}

export default HowToContribute;
