import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="clock">
      <p>
        This is the exact time: {time.toLocaleTimeString()} - Time:{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default CurrentTime;
