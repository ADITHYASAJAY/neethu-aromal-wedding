import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
// import Story from "./components/Story/Story"; // optional: uncomment to add "Our story"
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
//import RSVP from "./components/RSVP/RSVP";
//import Contact from "./components/Contact/Contact";
//import MemoriesSlider from "./components/MemoriesSlider/MemoriesSlider";
import Wishes from "./components/Wishes/Wishes";
//import Finale from "./components/Finale/Finale";
import InvitationCover from "./components/InvitationCover/InvitationCover";

function App() {
  const [opened, setOpened] = useState(false);

  // This runs inside the guest's tap, so the browser allows the music to start
  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <>
      <InvitationCover open={opened} onOpen={handleOpen} />

      <main className={`site ${opened ? "is-open" : ""}`}>
        <Hero />
        {/* <Story /> */}
        <WeddingDetails />
         {/*<RSVP />*/}
         {/*<Contact />*/}
         {/*<MemoriesSlider />*/}
        <Wishes />
        {/*<Finale />*/}
      </main>
    </>
  );
}

export default App;