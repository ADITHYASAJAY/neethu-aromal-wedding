
import './App.css';
import Hero from './components/Hero/Hero';
import MemoriesSlider from './components/MemoriesSlider/MemoriesSlider';
import WeddingDetails from './components/WeddingDetails/WeddingDetails';
import RSVP from './components/RSVP/RSVP';
import Contact from './components/Contact/Contact';
import Finale from './components/Finale/Finale';
function App() {


  return (
   <main>
   <Hero/>
   <WeddingDetails/>
   <RSVP/>
   <Contact/>
    <MemoriesSlider/>
   <Finale/>
   </main>
  )
}

export default App;
