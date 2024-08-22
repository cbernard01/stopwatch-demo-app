import { TimerContext } from "@/providers/timer-provider";
import { useContext } from "react";

export const useTimer = (): ITimerContext => {
  const context = useContext(TimerContext);

  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }

  return context;
};
