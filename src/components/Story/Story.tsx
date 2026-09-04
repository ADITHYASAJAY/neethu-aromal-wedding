import "./Story.css";

function Story() {
  return (
    <section className="love-story">

      {/* INTRO */}
      <div className="story-intro">

        <p className="story-kicker">
          THEIR STORY
        </p>

        <h2>
          It started with
          <br />
          <em>friendship.</em>
        </h2>

        <div className="story-divider">
          <span></span>
          <i>♡</i>
          <span></span>
        </div>

        <p className="story-intro-text">
          Some love stories begin with a first glance.
          <br />
          Theirs began with knowing each other.
        </p>

      </div>


      {/* MAIN STORY */}
      <div className="story-main">

        <div className="story-copy">

          <p className="story-kicker">
            A LITTLE BIT OF MAGIC
          </p>

          <h3>
            From knowing
            <br />
            each other
            <br />
            <em>to knowing forever.</em>
          </h3>

          <p>
            Neethu and Aromal have known each other since
            childhood. What began as friendship became a
            collection of countless little memories —
            laughter, conversations, shared moments and
            simply being there for one another.
          </p>

          <p>
            Without either of them realizing it, that
            friendship slowly became something deeper.
            Something comfortable. Something honest.
            Something that felt like home.
          </p>

        </div>

      </div>


      {/* TRANSFORMATION */}
      <div className="story-transform">

        <p className="transform-small">
          SOMEWHERE ALONG THE WAY
        </p>

        <div className="transform-words">

          <span className="word-friends">
            FRIENDSHIP
          </span>

          <span className="transform-symbol">
            ✦
          </span>

          <span className="word-love">
            LOVE
          </span>

        </div>

        <p className="transform-caption">
          became one beautiful story.
        </p>

      </div>


      {/* CLOSING */}
      <div className="story-closing">

        <p className="story-kicker">
          AND HERE THEY ARE
        </p>

        <h3>
          Two hearts.
          <br />
          One journey.
          <br />
          <em>Forever ahead.</em>
        </h3>

        <div className="story-divider">
          <span></span>
          <i>♡</i>
          <span></span>
        </div>

        <p className="story-closing-text">
          And now, they're ready to begin
          <br />
          their most beautiful chapter yet.
        </p>

      </div>

    </section>
  );
}

export default Story;