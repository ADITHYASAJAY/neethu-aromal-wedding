import { useState } from "react";
import "./RSVP.css";

function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="rsvp">
      <div className="rsvp-inner">
        <p className="rsvp-kicker">WE WOULD LOVE TO HAVE YOU</p>

        <h2>
          Will you
          <br />
          <em>join us?</em>
        </h2>

        <div className="rsvp-ornament">
          <span />
          <i>✦</i>
          <span />
        </div>

        {!submitted ? (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="rsvp-field">
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="rsvp-field">
              <label htmlFor="guests">NUMBER OF GUESTS</label>
              <select id="guests" name="guests" defaultValue="1">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>

            <div className="rsvp-field">
              <label>WILL YOU BE JOINING US?</label>

              <div className="rsvp-options">
                <label className="rsvp-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    defaultChecked
                  />
                  <span>Joyfully accept</span>
                </label>

                <label className="rsvp-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                  />
                  <span>Regretfully decline</span>
                </label>
              </div>
            </div>

            <div className="rsvp-field">
              <label htmlFor="message">A LITTLE NOTE</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave a message for Neethu & Aromal..."
              />
            </div>

            <button type="submit" className="rsvp-submit">
              <span>Send RSVP</span>
              <b>↗</b>
            </button>
          </form>
        ) : (
          <div className="rsvp-success">
            <span className="success-heart">♡</span>

            <h3>Thank you.</h3>

            <p>
              Your response has been received.
              <br />
              We can't wait to celebrate with you.
            </p>

            <span className="success-names">
              Neethu & Aromal
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default RSVP;