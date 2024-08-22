import { useTimer } from "@/hooks/use-timer";
import { type FC } from "react";
import { Button } from "./ui/button";

export const ActionButtonBar: FC = () => {
  const { stopTimer, startTimer, pauseTimer, handleLap, isRunning } = useTimer();

  return (
    <>
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
    </>
  );
};
