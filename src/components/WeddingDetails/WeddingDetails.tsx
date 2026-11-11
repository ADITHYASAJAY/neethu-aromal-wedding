import "./WeddingDetails.css";
import SaveCalendar from "../SaveCalendar/SaveCalendar";
import Reveal from "../Reveal/Reveal";
import { FloralCorner, FloralDivider } from "../Floral/Floral";

const ceremonyLocation =
  "https://www.google.com/maps/search/?api=1&query=Aanandh+Auditorium,+Varkala,+Vettoor-Cherunniyoor,+Kerala+695141";

const receptionLocation =
  "https://www.google.com/maps/search/?api=1&query=Mookambika+Convention+Centre,+Vattaplamoodu,+Chemmaruthy,+Varkala+Keralam+695145";

const events = [
  {
    number: "01",
    type: "The Ceremony",
    title: "Muhurtham",
    start: "11:00",
    end: "11:30 AM",
    venue: "Aanandh Auditorium",
    area: "Vettoor-Cherunniyoor, Varkala",
    href: ceremonyLocation,
  },
  {
    number: "02",
    type: "The Celebration",
    title: "Reception",
    start: "04:00",
    end: "09:00 PM",
    venue: "Mookambika Convention Centre",
    area: "Vattaplamoodu, Varkala",
    href: receptionLocation,
  },
];

function WeddingDetails() {
  return (
    <section className="wedding-details" id="details">
      <FloralCorner position="tl" />
      <FloralCorner position="br" />

      {/* HEADER */}
      <Reveal className="details-header">
        <p className="details-kicker">Save the date</p>

        <h2>
          Join us as we
          <br />
          <em>begin forever.</em>
        </h2>

        <FloralDivider className="details-divider" />

        <div className="details-date">
          <span className="details-weekday">Monday</span>
          <strong>28</strong>
          <span className="details-month">December · 2026</span>
        </div>
      </Reveal>

      {/* INVITATION MESSAGE */}
      <Reveal delay={1} className="invitation-message">
        <p className="invitation-kicker">With the blessings of our families</p>

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
          <span className="invitation-name">Aromal</span>
          <span className="invitation-amp">&amp;</span>
          <span className="invitation-name">Neethu</span>
        </h3>

        <p className="invitation-end">
          Your presence and blessings
          <br />
          mean the world to us.
        </p>
      </Reveal>

      {/* EVENTS */}
      <div className="events">
        {events.map((event, index) => (
          <Reveal key={event.number} delay={index === 0 ? 0 : 1}>
            <article className="event-card">
              <div className="event-number">{event.number}</div>

              <div className="event-content">
                <p className="event-type">{event.type}</p>
                <h3>{event.title}</h3>

                <div className="event-time">
                  <span>{event.start}</span>
                  <small>—</small>
                  <span>{event.end}</span>
                </div>

                <div className="event-divider" />

                <p className="venue-label">Venue</p>
                <p className="venue-name">
                  {event.venue}
                  <small>{event.area}</small>
                </p>

                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-button"
                >
                  <span>Open Google Maps</span>
                  <b aria-hidden="true">↗</b>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={2}>
        <SaveCalendar />
      </Reveal>

      {/* CLOSING */}
      <Reveal delay={3} className="details-closing">
        <p>
          Your presence will make
          <br />
          our day even more special.
        </p>
        <span aria-hidden="true">♡</span>
      </Reveal>
    </section>
  );
}

export default WeddingDetails;