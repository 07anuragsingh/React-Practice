import { useEffect, useState } from "react";

export default function UseEffectEventExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{count}</h2>
    </>
  );
}
