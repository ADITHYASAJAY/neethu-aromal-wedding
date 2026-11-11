import { useEffect, useState } from "react";
import "./Countdown.css";

// ISO string with the IST offset: parses the same in every browser
// (including Safari) and counts to the real moment for guests abroad.
const WEDDING_DATE = new Date("2026-12-28T11:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = WEDDING_DATE - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown" role="timer" aria-label="Time until the wedding">
      {items.map(({ label, value }) => (
        <div className="countdown-item" key={label}>
          <strong key={value}>{pad(value)}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default CountDown;