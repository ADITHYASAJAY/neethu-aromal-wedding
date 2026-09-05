import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <p className="contact-kicker">NEED A LITTLE HELP?</p>

        <h2>
          We're here
          <br />
          <em>for you.</em>
        </h2>

        <div className="contact-ornament">
          <span />
          <i>✦</i>
          <span />
        </div>

        <p className="contact-intro">
          For directions, travel assistance, or anything you need
          <br />
          on our special day, please feel free to reach out.
        </p>

        <div className="contact-cards">
          <a href="tel:+919000000000" className="contact-card">
            <span className="contact-icon">♡</span>
            <span className="contact-label">CALL</span>
            <strong>Wedding Assistance</strong>
            <small>Tap to call</small>
          </a>

          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">✦</span>
            <span className="contact-label">WHATSAPP</span>
            <strong>Message Us</strong>
            <small>We're happy to help</small>
          </a>
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