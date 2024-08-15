import { useRef, useState } from "react";

export const useTimer = (): {
  time: number;
  laps: number[];
  handleLap: () => void;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
  isRunning: boolean;
} => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (): void => {
    setIsRunning(true);

    timer.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = (): void => {
    setIsRunning(false);

    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const stopTimer = (): void => {
    setIsRunning(false);
    setTime(0);

    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleLap = (): void => {
    if (isRunning) {
      setLaps((prevLaps) => [...prevLaps, time + 1]);
    }
  };

  return { handleLap, stopTimer, startTimer, pauseTimer, laps, time, isRunning };
};
