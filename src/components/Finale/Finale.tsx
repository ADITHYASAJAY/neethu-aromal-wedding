import Reveal from "../Reveal/Reveal";
import "./Finale.css";

function Finale() {
  return (
    <section className="finale">
      <div className="finale-glow" />

      <Reveal className="finale-content">
        <p className="finale-kicker">THE BEGINNING OF FOREVER</p>

        <div className="finale-ornament">
          <span />
          <i>✦</i>
          <span />
        </div>

        <h2>
          And so,
          <br />
          <em>our forever begins.</em>
        </h2>

        <div className="finale-names">
          <span>AROMAL</span>
          <i>&</i>
          <span>NEETHU</span>
        </div>

        <div className="finale-date">
          28 <span>·</span> 12 <span>·</span> 2026
        </div>

        <p className="finale-thankyou">
          Thank you for being a part of our story.
        </p>

        <div className="finale-heart">♡</div>
      </Reveal>
    </section>
  );
}

export default Finale;