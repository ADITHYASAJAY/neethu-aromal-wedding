import "./WeddingDetails.css";
import SaveCalendar from "../SaveCalendar/SaveCalendar";

const ceremonyLocation =
  "https://www.google.com/maps/search/?api=1&query=Aanandh+Auditorium,+Varkala,+Vettoor-Cherunniyoor,+Kerala+695141";

const receptionLocation =
  "https://www.google.com/maps/search/?api=1&query=Sayoojyam+Convention+Center,+QP9F%2B5X7,+Ayiroor-Paripally+Rd,+Hariharapuram,+Kerala+695310";

function WeddingDetails() {
  return (
    <section className="wedding-details">

      {/* =========================
          HEADER
      ========================= */}

      <div className="details-header">

        <p className="details-kicker">
          SAVE THE DATE
        </p>

        <h2>
          Join us as we
          <br />
          <em>begin forever.</em>
        </h2>

        <div className="details-ornament">
          <span />
          <i>✦</i>
          <span />
        </div>

        <div className="details-date">

          <span className="details-weekday">
            MONDAY
          </span>

          <strong>
            28
          </strong>

          <span className="details-month">
            DECEMBER · 2026
          </span>

        </div>

      </div>
      
      {/* =========================
          INVITATION MESSAGE
      ========================= */}

      <div className="invitation-message">

        <p className="invitation-kicker">
          WITH THE BLESSINGS OF OUR FAMILIES
        </p>

        <p className="invitation-text">
          With hearts full of joy and gratitude,
          <br />
          we invite you to celebrate
          <br />
          the beginning of a beautiful new chapter
          <br />
          in the lives of
        </p>

        <h3>
          Neethu
          <span>&</span>
          Aromal
        </h3>

        <p className="invitation-end">
          Your presence and blessings
          <br />
          mean the world to us.
        </p>

      </div>


      {/* =========================
          EVENTS
      ========================= */}

      <div className="events">

        {/* =========================
            CEREMONY
        ========================= */}

        <article className="event-card">

          <div className="event-number">
            01
          </div>

          <div className="event-content">

            <p className="event-type">
              THE CEREMONY
            </p>

            <h3>
              Muhurtham
            </h3>

            <div className="event-time">
              <span>11:00</span>
              <small>—</small>
              <span>11:30 AM</span>
            </div>

            <div className="event-divider" />

            <p className="venue-label">
              VENUE
            </p>

            <p className="venue-name">
              Aanandh Auditorium
              <br />
              <small>
                Varkala, Kerala
              </small>
            </p>

            <a
              href={ceremonyLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              <span>
                Open Google Maps
              </span>

              <b>
                ↗
              </b>
            </a>

          </div>

        </article>


        {/* =========================
            RECEPTION
        ========================= */}

        <article className="event-card">

          <div className="event-number">
            02
          </div>

          <div className="event-content">

            <p className="event-type">
              THE CELEBRATION
            </p>

            <h3>
              Reception
            </h3>

            <div className="event-time">
              <span>04:00</span>
              <small>—</small>
              <span>09:00 PM</span>
            </div>

            <div className="event-divider" />

            <p className="venue-label">
              VENUE
            </p>

            <p className="venue-name">
              Sayoojyam Convention Center
              <br />
              <small>
                Hariharapuram, Kerala
              </small>
            </p>

            <a
              href={receptionLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              <span>
                Open Google Maps
              </span>

              <b>
                ↗
              </b>
            </a>

          </div>

        </article>

      </div>
      <SaveCalendar />

      {/* =========================
          CLOSING
      ========================= */}

      <div className="details-closing">

        <p>
          Your presence will make
          <br />
          our day even more special.
        </p>

        <span>
          ♡
        </span>

      </div>

    </section>
  );
}

export default WeddingDetails;