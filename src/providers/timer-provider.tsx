import type { FC, ReactNode } from "react";
import { createContext, useRef, useState } from "react";

export const TimerContext = createContext<ITimerContext>({
  time: 0,
  laps: [],
  isRunning: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLap: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  startTimer: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  pauseTimer: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  stopTimer: () => {},
});

interface props {
  children: ReactNode;
}

export const TimerProvider: FC<props> = ({ children }) => {
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

  return (
    <>
      <TimerContext.Provider
        value={{ stopTimer, startTimer, pauseTimer, handleLap, isRunning, time, laps }}
      >
        {children}
      </TimerContext.Provider>
    </>
  );
};
