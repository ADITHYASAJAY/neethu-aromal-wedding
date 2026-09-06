import Reveal from "../Reveal/Reveal";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">
      <Reveal>
        <p className="contact-kicker">NEED A LITTLE HELP?</p>

        <h2>
          We're here
          <br />
          <em>for you.</em>
        </h2>
        </Reveal>
        <div className="contact-ornament">
          <span />
          <i>✦</i>
          <span />
        </div>
        <Reveal delay={1}>
        <p className="contact-intro">
          For directions, travel assistance, or anything you need
          <br />
          on our special day, please feel free to reach out.
        </p>
        </Reveal>

        <div className="contact-cards">
        <Reveal>
          <a href="tel:+919567359296" className="contact-card">
            <span className="contact-icon">♡</span>
            <span className="contact-label">CALL</span>
            <strong>Wedding Assistance</strong>
            <small>Tap to call</small>
          </a>
          </Reveal>
          <Reveal delay={1}>
          <a
            href="https://wa.me/919567359296"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">✦</span>
            <span className="contact-label">WHATSAPP</span>
            <strong>Message Us</strong>
            <small>We're happy to help</small>
          </a>
          </Reveal>
        </div>

        <div className="contact-note">
          <span>♡</span>
          <p>
            Your presence is the greatest gift.
            <br />
            We can't wait to celebrate with you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;