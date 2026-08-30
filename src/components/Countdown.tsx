import { useEffect, useState } from "react";

function CountDown(){

  const weddingDate = new Date("December 28, 2026,11:00:00").getTime();
  
  const calculateTimeLeft = () =>{
    const now = new Date().getTime();
    const difference = weddingDate - now;
    if(difference <=0){
      return{
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
      };
    }
    return{
      days: Math.floor((difference/(1000*60*60*24))),
      hours:Math.floor((difference/(1000*60*60)%24)),
      minutes:Math.floor((difference/(1000*60)%60)),
      seconds:Math.floor((difference/1000)%60),
    };
  }

  const [timeleft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeLeft(calculateTimeLeft());
    },1000);
    return ()=> clearInterval(timer);
  });

  return(
    <section className="countdown">
      <p className="section-label">THE BIG DAY</p>
      <h2>Counting down to forever</h2>
      <div className="countdown-container">
        <div>
          <strong>{timeleft.days}</strong>
          <span>Days</span>
        </div>
        <div>
          <strong>{timeleft.hours}</strong>
          <span>Hours</span>
        </div>
        <div>
          <strong>{timeleft.minutes}</strong>
          <span>Minutes</span>
        </div>
        <div>
          <strong>{timeleft.seconds}</strong>
          <span>Seconds</span>
        </div>
      </div>
    </section>
  );

}
export default CountDown;