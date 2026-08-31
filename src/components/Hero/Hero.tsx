import "./Hero.css";
import couplePhoto from "../../assets/images/couple1.jpeg";
import CountDown from "../Countdown";
function Hero (){
return(
  <section className='hero'
  style={{backgroundImage:`url(${couplePhoto})`}}>
  <div className='hero-overlay'/>
  <div className="hero-content">
    <p className='hero-eyebrow'>A BEAUTIFUL BEGINNING</p>
    <div className="hero-line"/>
    <h1 className="hero-title">
      <span>Neethu</span>
      <span>&</span> 
      <span>Aromal</span>
      </h1>
    <p className='hero-date'>December 28, 2026</p>
    <p className='hero-description'>Two hearts, one beautiful journey, 
    <br />and a lifetime to go.</p>
    <CountDown/>
  </div>
  <div className="hero-scroll">
    <span/>
    <p>Scroll to discover our story</p>
  </div>

</section>
);

}

export default Hero;