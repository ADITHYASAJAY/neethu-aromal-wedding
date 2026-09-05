import "./SaveCalendar.css";

function escapeICS(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function SaveCalendar() {
  const handleSaveCalendar = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Neethu & Aromal Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",

      "BEGIN:VEVENT",
      "UID:neethu-aromal-muhurtham-20261228@example.com",
      "DTSTAMP:20260905T000000Z",
      "DTSTART:20261228T053000Z",
      "DTEND:20261228T060000Z",
      `SUMMARY:${escapeICS("Neethu & Aromal — Muhurtham")}`,
      `LOCATION:${escapeICS(
        "Aanandh Auditorium, Varkala, Vettoor-Cherunniyoor, Kerala 695141"
      )}`,
      `DESCRIPTION:${escapeICS(
        "Muhurtham of Neethu & Aromal. Time: 11:00 AM – 11:30 AM IST."
      )}`,
      "END:VEVENT",

      "BEGIN:VEVENT",
      "UID:neethu-aromal-reception-20261228@example.com",
      "DTSTAMP:20260905T000000Z",
      "DTSTART:20261228T103000Z",
      "DTEND:20261228T153000Z",
      `SUMMARY:${escapeICS("Neethu & Aromal — Reception")}`,
      `LOCATION:${escapeICS(
        "Sayoojyam Convention Center, QP9F+5X7, Ayiroor-Paripally Rd, Hariharapuram, Kerala 695310"
      )}`,
      `DESCRIPTION:${escapeICS(
        "Reception celebrating Neethu & Aromal. Time: 4:00 PM – 9:00 PM IST."
      )}`,
      "END:VEVENT",

      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Neethu-and-Aromal-Wedding.ics";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="save-calendar">
      <p className="save-calendar-label">KEEP THE DATE CLOSE</p>

      <button
        type="button"
        className="save-calendar-button"
        onClick={handleSaveCalendar}
      >
        <span className="calendar-icon">♡</span>
        <span>Save to Calendar</span>
        <span className="calendar-arrow">↗</span>
      </button>
    </div>
  );
}

export default SaveCalendar;