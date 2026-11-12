import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
import InvitationCover from "./components/InvitationCover/InvitationCover";

// Loaded only when the guest scrolls near it (keeps Firebase out of the first load)
const Wishes = lazy(() => import("./components/Wishes/Wishes"));

/** Mounts its children only when the guest scrolls near them. */
function LazyMount({
  children,
  minHeight,
}: {
  children: ReactNode;
  minHeight: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || show) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [show]);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  );
}

// Starts the <audio id="bg-music"> from index.html.
// Must be called straight from a tap/click, or Chrome blocks it.
function playMusic() {
  const music = document.getElementById("bg-music") as HTMLAudioElement | null;
  if (!music) return;

  music.volume = 0.5;
  music.play().catch(() => {
    /* blocked or file missing: the page still works without music */
  });
}

function App() {
  const [opened, setOpened] = useState(false);

  // This runs inside the guest's tap, so the browser allows the music to start
  const handleOpen = () => {
    playMusic();
    setOpened(true);
  };

  return (
    <>
      <InvitationCover open={opened} onOpen={handleOpen} />

      <main className={`site ${opened ? "is-open" : ""}`}>
        <Hero />

        <WeddingDetails />

        <LazyMount minHeight="1200px">
          <Suspense fallback={null}>
            <Wishes />
          </Suspense>
        </LazyMount>
      </main>
    </>
  );
}

export default App;