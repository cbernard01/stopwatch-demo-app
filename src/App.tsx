import { type FC } from "react";
import { Button } from "./components/ui/button";
import { useTimer } from "./hooks/use-timer";
import { formatTime } from "./lib/utils";

export const App: FC = () => {
  const { stopTimer, startTimer, pauseTimer, handleLap, laps, time, isRunning } = useTimer();

  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Stopwatch App</h1>
        <p>{formatTime(time)}</p>
        <div className="flex gap-8">
          <Button variant={"default"} size={"sm"} onClick={startTimer}>
            Start
          </Button>
          <Button variant={"outline"} size={"sm"} onClick={pauseTimer} disabled={!isRunning}>
            Pause
          </Button>
          <Button
            variant={isRunning ? "destructive" : "ghost"}
            size={"sm"}
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </Button>
          <Button variant={"ghost"} size={"sm"} onClick={handleLap} disabled={!isRunning}>
            Lap
          </Button>
        </div>
        <div>
          <ul>
            {laps.map((lap, index) => (
              <li key={`${lap}-${index}`}>{formatTime(lap)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
