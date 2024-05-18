import {useEffect, useState, useRef} from "react";
import Timer from "../Helpers/Timer";

const CommingSoon = ({TimeLine}) => {
    // transform the TimeLine string into Time
    const countDownDate = new Date(TimeLine).getTime();

    //use the Timer method to get the date, time, hours, minutes and seconds remaining in an object
    const timeLine = useRef(Timer(countDownDate));

    const daysRef = useRef(timeLine.current["days"]);
    const hoursRef = useRef(timeLine.current["hours"]);
    const minutesRef = useRef(timeLine.current["minutes"]);
    const secondsRef = useRef(timeLine.current["seconds"]);

    const [daysRemaining, setDays] = useState(daysRef.current);
    const [hoursRemaining, setHours] = useState(hoursRef.current);
    const [minutesRemaining, setMinutes] = useState(minutesRef.current);
    const [secondsRemaining, setSeconds] = useState(secondsRef.current);
    useEffect(()=>{
        const intervalId = setInterval(function() {
            const newTimeLine = Timer(countDownDate);
            const newDays = newTimeLine["days"];
            const newHours = newTimeLine["hours"];
            const newMinutes = newTimeLine["minutes"];
            const newSeconds = newTimeLine["seconds"];

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            daysRef.current = newDays;
            hoursRef.current = newHours;
            minutesRef.current = newMinutes;
            secondsRef.current = newSeconds;
        },1000);

        return () => {
            //clear interval
            clearInterval(intervalId);
        }
    });
    
    return(
        
        <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
            <img alt="launcher" src="./Images/launcher.png" className="w-[80px] lg:w-[120px]"></img>
            <div className="text-[24px] lg:text-[48px] text-[#2C4035] font-light mt-[.5em]">
                <span className="font-bold">ElimuHub</span> Comming Soon...
            </div>
            <div className="text[32px] font-bold lg:text-[56px] text-[#2C4035]">
                {daysRemaining} {hoursRemaining} : {minutesRemaining} : {secondsRemaining} 
            </div>
        </div>
        
    );
};

export default CommingSoon;