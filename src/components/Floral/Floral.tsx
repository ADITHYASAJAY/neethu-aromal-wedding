import "./Floral.css";

const PETAL_ANGLES = [0, 72, 144, 216, 288];

/** Hand-drawn style flowering branch for section corners.
 *  Parent must be `position: relative; overflow: hidden`. */
export function FloralCorner({
  position = "tl",
  className = "",
}: {
  position?: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  return (
    <svg
      className={`floral-corner ${position} ${className}`}
      viewBox="0 0 220 220"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="fl-stem"
        d="M6 6 C 70 14, 120 56, 138 124 S 172 192, 214 206"
      />
      <g className="fl-leaf">
        <ellipse cx="38" cy="22" rx="16" ry="6" transform="rotate(18 38 22)" />
        <ellipse cx="78" cy="44" rx="17" ry="6" transform="rotate(38 78 44)" />
        <ellipse cx="112" cy="84" rx="17" ry="6" transform="rotate(62 112 84)" />
        <ellipse cx="150" cy="156" rx="16" ry="6" transform="rotate(80 150 156)" />
        <ellipse cx="190" cy="190" rx="15" ry="5.5" transform="rotate(35 190 190)" />
        <ellipse cx="96" cy="62" rx="13" ry="5" transform="rotate(-24 96 62)" />
        <ellipse cx="126" cy="104" rx="13" ry="5" transform="rotate(150 126 104)" />
        <ellipse cx="168" cy="176" rx="12" ry="4.6" transform="rotate(130 168 176)" />
      </g>
      <g className="fl-flower" transform="translate(138 124)">
        {PETAL_ANGLES.map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="8" ry="13" transform={`rotate(${a})`} />
        ))}
        <circle className="fl-center" r="5" />
      </g>
      <g className="fl-flower small" transform="translate(54 38) scale(0.55)">
        {PETAL_ANGLES.map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="8" ry="13" transform={`rotate(${a})`} />
        ))}
        <circle className="fl-center" r="5" />
      </g>
      <g className="fl-berries">
        <circle cx="176" cy="150" r="3" />
        <circle cx="184" cy="162" r="2.4" />
        <circle cx="102" cy="104" r="2.6" />
        <circle cx="20" cy="40" r="2.4" />
      </g>
    </svg>
  );
}

/** Small floral divider: ——— ✿ ——— */
export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`floral-divider ${className}`}
      viewBox="0 0 220 28"
      aria-hidden="true"
      focusable="false"
    >
      <path className="fl-line" d="M4 14h78M138 14h78" />
      <g className="fl-leaf">
        <ellipse cx="92" cy="14" rx="8" ry="3" transform="rotate(-20 92 14)" />
        <ellipse cx="128" cy="14" rx="8" ry="3" transform="rotate(20 128 14)" />
      </g>
      <g className="fl-flower" transform="translate(110 14) scale(0.62)">
        {PETAL_ANGLES.map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="8" ry="13" transform={`rotate(${a})`} />
        ))}
        <circle className="fl-center" r="5" />
      </g>
    </svg>
  );
}