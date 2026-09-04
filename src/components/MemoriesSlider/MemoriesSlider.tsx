import { useEffect, useState } from "react";
import "./MemoriesSlider.css";

import photo1 from "../../assets/images/couple1.jpeg";
import photo2 from "../../assets/images/couple2.jpeg";
import photo3 from "../../assets/images/couple3.jpeg";
import photo4 from "../../assets/images/couple4.jpeg";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  caption: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: photo1,
    title: "The little moments",
    caption: "that became our favorite memories.",
  },
  {
    type: "image",
    src: photo2,
    title: "Every smile",
    caption: "made the journey a little more beautiful.",
  },
  {
    type: "image",
    src: photo3,
    title: "Together",
    caption: "is where everything feels right.",
  },
  {
    type: "image",
    src: photo4,
    title: "And now",
    caption: "a lifetime of memories awaits.",
  },
];

function MemoriesSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  return (
    <section
      className="memories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Heading */}

      <div className="memories-heading">

        <p>MEMORIES</p>

        <h2>
          Moments
          <br />
          <em>we treasure.</em>
        </h2>

      </div>


      {/* Slider */}

      <div className="slider">

        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`slide ${
              index === current ? "active" : ""
            }`}
          >

            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`${slide.title} - Neethu & Aromal`}
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            <div className="slide-overlay" />

          </div>
        ))}


        {/* Slide text */}

        <div className="slide-content">

          <p className="slide-number">
            {String(current + 1).padStart(2, "0")}
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </p>

          <h3 key={slides[current].title}>
            {slides[current].title}
          </h3>

          <p key={slides[current].caption}>
            {slides[current].caption}
          </p>

        </div>


        {/* Controls */}

        <button
          className="slider-button previous"
          onClick={previousSlide}
          aria-label="Previous photo"
        >
          ←
        </button>

        <button
          className="slider-button next"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          →
        </button>


        {/* Progress */}

        <div className="slider-progress">

          {slides.map((_, index) => (
            <button
              key={index}
              className={
                index === current ? "active" : ""
              }
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span />
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default MemoriesSlider;