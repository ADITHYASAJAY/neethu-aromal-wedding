import "./App.css";
import Hero from "./components/Hero/Hero";
// import Story from "./components/Story/Story"; // optional: uncomment to add "Our story"
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
// import RSVP from "./components/RSVP/RSVP";
//import Contact from "./components/Contact/Contact";
//import MemoriesSlider from "./components/MemoriesSlider/MemoriesSlider";
//import Finale from "./components/Finale/Finale";
import Wishes from "./components/Wishes/Wishes";

function App() {
  return (
    <main>
      <Hero />
      {/* <Story /> */}
      <WeddingDetails />
      <Wishes/>
      {/*<RSVP />*/}
      {/*<Contact />*/}
      {/*<MemoriesSlider />*/}
      {/*<Finale />*/}
    </main>
  );
}

export default App;