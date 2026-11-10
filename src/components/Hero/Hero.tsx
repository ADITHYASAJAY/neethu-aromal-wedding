
import "./Hero.css";
import couplePhoto from "../../assets/images/couplehero.jpeg";
import CountDown from "../Coundown/Countdown";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${couplePhoto})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          TOGETHER WITH THEIR FAMILIES
        </p>

        <div className="hero-line" />

        <h1 className="hero-title">
          <span>Aromal</span>
          <span className="hero-ampersand">&amp;</span>
          <span>Neethu</span>
        </h1>

        <p className="hero-date">
          December 28, 2026
        </p>

        <p className="hero-description">
          With hearts full of love, we invite you
          <br />
          to join us as we begin our forever.
        </p>

        <p className="hero-countdown-label">
          COUNTING DOWN TO FOREVER
        </p>

        <CountDown />
      </div>

      <div className="hero-scroll">
        <span />
        <p>Scroll to discover our story</p>
      </div>
    </section>
  );
}

export default Hero;
