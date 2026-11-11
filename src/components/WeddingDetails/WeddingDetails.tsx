import "./WeddingDetails.css";
import Reveal from "../Reveal/Reveal";
import { FloralCorner } from "../Floral/Floral";

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
      

      {/* INVITATION MESSAGE */}
      

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

      

      {/* CLOSING */}
      <Reveal delay={2} className="details-closing">
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