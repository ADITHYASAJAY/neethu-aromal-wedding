import { useEffect, useState } from "react";
import './Countdown.css';

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

  const format = (value: number) =>
  String(value).padStart(2, "0");

  return(
    <div className="countdown">

      <div className="countdown-item">
        <strong key={timeleft.days}>
          {format(timeleft.days)}
        </strong>

        <span>Days</span>
      </div>

      <div className="countdown-item">
        <strong key={timeleft.hours}>
          {format(timeleft.hours)}
        </strong>

        <span>Hours</span>
      </div>

      <div className="countdown-item">
        <strong key={timeleft.minutes}>
          {format(timeleft.minutes)}
        </strong>

        <span>Minutes</span>
      </div>

      <div className="countdown-item">
        <strong key={timeleft.seconds}>
          {format(timeleft.seconds)}
        </strong>

        <span>Seconds</span>
      </div>

    </div>
  );

}
export default CountDown;