
import './App.css';
import CountDown from './components/Countdown';

function App() {


  return (
   <main>
    <section className='hero'>
      <div className='hero-image'>
        <img src='/images/couplemain.jpeg' alt='Neethu and Aromal'/>
      </div>
      <p className='subtitle'>A beautiful begining</p>
      <h1>Neethu <span>&</span> Aromal</h1>
      <p className='date'>December 28</p>
      <p className='intro'>Two hearts, one beautiful journey, and a lifetime to go</p>
    </section>
    <CountDown/>
   </main>
  )
}

export default App;
