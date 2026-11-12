import { useEffect, useState } from "react";
import { FloralCorner, FloralDivider } from "../Floral/Floral";
import "./InvitationCover.css";

type InvitationCoverProps = {
  open: boolean;
  onOpen: () => void;
};

function InvitationCover({ open, onOpen }: InvitationCoverProps) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (open) {
      // remove the cover from the page once its fade-out has finished
      const timer = window.setTimeout(() => setGone(true), 1400);
      return () => window.clearTimeout(timer);
    }

    // while the cover is showing: start at the top and block scrolling
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (gone) return null;

  return (
    <div
      className={`cover ${open ? "is-open" : ""}`}
      role="dialog"
      aria-label="Wedding invitation"
    >
      <FloralCorner position="tl" className="cover-floral" />
      <FloralCorner position="tr" className="cover-floral" />
      <FloralCorner position="bl" className="cover-floral" />
      <FloralCorner position="br" className="cover-floral" />

      <div className="cover-content">
        <p className="cover-eyebrow">You are invited</p>

        <FloralDivider className="cover-divider" />

        <div className="cover-names">
          <span>Aromal</span>
          <i>&amp;</i>
          <span>Neethu</span>
        </div>

        <p className="cover-date">28 · 12 · 2026</p>

        <button type="button" className="cover-button" onClick={onOpen}>
          <span aria-hidden="true">♡</span>
          <span>Open invitation</span>
        </button>
      </div>
    </div>
  );
}

export default InvitationCover;