/*
    module containing a function that calculates time difference between now and timeLine then 
    segrigates the time variables and returns them as an object
*/

const Timer = (countDownDate) => {
    // Get today's date and time
    const now = new Date().getTime();
            
    // Find the difference between now and the count down date
    const distance = countDownDate - now;

    //segrigate each variable from the time difference
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // proper formating of the time variables
    var formatedDays = "";
    if(days === 1){
        formatedDays = days + " Day";
    }
    else if(days === 0){
        formatedDays = "";
    }
    else{
        formatedDays = days + " Days";
    }
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Return of the resultant time variables as an object.
    return {days: formatedDays, hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds};
};

export default Timer;