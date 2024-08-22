import { useTimer } from "@/hooks/use-timer";
import { formatTime } from "@/lib/utils";
import type { FC } from "react";
import { ActionButtonBar } from "./action-button-bar";

export const Timer: FC = () => {
  const { time, laps } = useTimer();

  return (
    <>
      <h1 className="text-2xl font-bold">Stopwatch App</h1>
      <p>{formatTime(time)}</p>

      <ActionButtonBar />

      <div>
        <ul>
          {laps.map((lap, index) => (
            <li key={`${lap}-${index}`}>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
