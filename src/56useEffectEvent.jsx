import { useEffect, useState, useEffectEvent } from "react";

export default function UseEffectEventExample() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(2);

  const onTick = useEffectEvent(() => {
    setCount(prev => prev + step);
  });

  useEffect(() => {
    const interval = setInterval(onTick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h3>{count}</h3>
    <button onClick={() => setStep(5)}>Change Step by 5</button>

    </>
  )
  
}
