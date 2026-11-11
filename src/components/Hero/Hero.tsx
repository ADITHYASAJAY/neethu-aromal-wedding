import "./Hero.css";
import couplePhoto from "../../assets/images/couplehero.jpeg";
import CountDown from "../Coundown/Countdown";

function Hero() {
  return (
    <section className="hero">
      {/* Photo: shown whole (never cropped through the couple) */}
      <div className="hero-photo">
        <img
          src={couplePhoto}
          width={1024}
          height={1536}
          alt="Aromal and Neethu standing together, framed by watercolour flowers"
          fetchPriority="high"
        />
      </div>

      {/* Text: sits on a clean blush panel, never over faces */}
      <div className="hero-content">
        

        <h1 className="hero-title">
          <span className="hero-name">Aromal</span>
          <span className="hero-ampersand">&amp;</span>
          <span className="hero-name">Neethu</span>
        </h1>

        <p className="hero-date">December 28, 2026</p>

        <p className="hero-description">
          With hearts full of love, we invite you
          <br />
          to join us as we begin our forever.
        </p>

        <p className="hero-countdown-label">Counting down to forever</p>

        <CountDown />

        <a href="#details" className="hero-scroll">
          <span />
          <small>Scroll to discover</small>
        </a>
      </div>
    </section>
  );
}

export default Hero;