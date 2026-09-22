import { useEffect, useState } from "react";

function ClockTime({ color }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#001542",
        color: color,
        borderRadius: "4px",
        width: "300px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default ClockTime;
