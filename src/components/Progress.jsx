import { useEffect, useState } from "react"

export default function Progress({timeOut, onTimeout}) {
    const [timerValue, setTimerValue] = useState(timeOut)
    useEffect(()=>{
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout,timeOut)
        return () => {
            clearTimeout(timer)

        }
    },[onTimeout, timeOut])
    
    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setTimerValue((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
        return ()=> {
            clearInterval(interval)
        }
      }, []);
    return <progress id="question-time" value={timerValue} max={timeOut}/>
}