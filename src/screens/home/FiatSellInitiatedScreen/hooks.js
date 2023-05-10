import { useEffect } from "react";

export const useTimer = (setTimeLeft) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return prevTime;
        } else {
          return prevTime - 1000;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft]);
};
