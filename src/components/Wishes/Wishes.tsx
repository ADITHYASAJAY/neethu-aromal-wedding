import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import type { Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Reveal from "../Reveal/Reveal";
import { FloralCorner, FloralDivider } from "../Floral/Floral";
import "./Wishes.css";

type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: Date | null;
};

const MAX_NAME = 40;
const MAX_MESSAGE = 400;
const COOLDOWN_MS = 30_000; // one wish per device every 30 seconds
const COOLDOWN_KEY = "wishes:lastSent";
const INITIAL_VISIBLE = 6;

function formatDate(date: Date | null) {
  if (!date) return "Just now";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  // Live feed: new wishes appear for everyone without refreshing
  useEffect(() => {
    const wishesQuery = query(
      collection(db, "wishes"),
      orderBy("createdAt", "desc"),
      limit(100)
    );

    const unsubscribe = onSnapshot(
      wishesQuery,
      (snapshot) => {
        setWishes(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            const timestamp = data.createdAt as Timestamp | null;
            return {
              id: doc.id,
              name: String(data.name ?? ""),
              message: String(data.message ?? ""),
              createdAt: timestamp ? timestamp.toDate() : null,
            };
          })
        );
        setLoading(false);
      },
      (error) => {
        console.error("Could not load wishes:", error);
        setLoadError(true);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    // Hidden field only bots fill in
    const formData = new FormData(event.currentTarget);
    if (formData.get("website")) return;

    const cleanName = name.trim();
    const cleanMessage = message.trim();
    if (!cleanName || !cleanMessage) return;

    // Simple spam brake
    try {
      const last = Number(localStorage.getItem(COOLDOWN_KEY) ?? 0);
      if (Date.now() - last < COOLDOWN_MS) {
        setStatus({
          type: "error",
          text: "Please wait a few seconds before sending another wish.",
        });
        return;
      }
    } catch {
      /* storage unavailable: skip the cooldown */
    }

    setSending(true);
    setStatus(null);

    try {
      await addDoc(collection(db, "wishes"), {
        name: cleanName,
        message: cleanMessage,
        createdAt: serverTimestamp(),
      });

      try {
        localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }

      setName("");
      setMessage("");
      setVisible(INITIAL_VISIBLE);
      setStatus({
        type: "success",
        text: "Thank you! Your wish is now on our wall ♡",
      });
    } catch (error) {
      console.error("Could not send wish:", error);
      setStatus({
        type: "error",
        text: "Sorry, we couldn't send your wish. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const shown = wishes.slice(0, visible);

  return (
    <section className="wishes" id="wishes">
      <FloralCorner position="tl" />
      <FloralCorner position="br" />

      <div className="wishes-inner">
        <Reveal>
          <p className="wishes-kicker">Leave us a note</p>

          <h2>
            Send your
            <br />
            <em>wishes.</em>
          </h2>
        </Reveal>

        <FloralDivider className="wishes-divider" />

        <Reveal delay={1}>
          <p className="wishes-intro">
            Your blessings and kind words mean the world to us.
            <br />
            Write us a little note and it will live here on our wall.
          </p>
        </Reveal>

        {/* FORM */}
        <Reveal delay={1}>
          <form className="wish-form" onSubmit={handleSubmit}>
            {/* honeypot: hidden from people, bots fill it in */}
            <input
              className="wish-honeypot"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="wish-field">
              <label htmlFor="wish-name">Your name</label>
              <input
                id="wish-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={MAX_NAME}
                placeholder="How should we sign your note?"
                autoComplete="name"
                required
              />
            </div>

            <div className="wish-field">
              <label htmlFor="wish-message">Your wishes</label>
              <textarea
                id="wish-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={MAX_MESSAGE}
                rows={5}
                placeholder="Write something warm for Aromal & Neethu..."
                required
              />
              <span className="wish-counter">
                {message.length} / {MAX_MESSAGE}
              </span>
            </div>

            <button type="submit" className="wish-submit" disabled={sending}>
              <span>{sending ? "Sending..." : "Send wishes"}</span>
              <b aria-hidden="true">♡</b>
            </button>

            {status && (
              <p className={`wish-status ${status.type}`} role="status">
                {status.text}
              </p>
            )}
          </form>
        </Reveal>

        {/* WALL */}
        <div className="wishes-wall">
          <p className="wall-title">
            Wishes from our loved ones
            {wishes.length > 0 && <span> · {wishes.length}</span>}
          </p>

          {loading && <p className="wall-note">Loading wishes...</p>}

          {loadError && (
            <p className="wall-note">
              We couldn't load the wishes right now. Please refresh in a
              moment.
            </p>
          )}

          {!loading && !loadError && wishes.length === 0 && (
            <p className="wall-note">
              Be the first to leave a wish for the couple ♡
            </p>
          )}

          {shown.length > 0 && (
            <div className="wishes-list">
              {shown.map((wish, index) => (
                <article
                  className="wish-card"
                  key={wish.id}
                  style={{ animationDelay: `${Math.min(index, 8) * 0.08}s` }}
                >
                  <span className="wish-quote" aria-hidden="true">
                    “
                  </span>
                  <p className="wish-message">{wish.message}</p>
                  <footer>
                    <strong>{wish.name}</strong>
                    <small>{formatDate(wish.createdAt)}</small>
                  </footer>
                </article>
              ))}
            </div>
          )}

          {wishes.length > visible && (
            <button
              type="button"
              className="wishes-more"
              onClick={() => setVisible((count) => count + INITIAL_VISIBLE)}
            >
              Show more wishes
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Wishes;