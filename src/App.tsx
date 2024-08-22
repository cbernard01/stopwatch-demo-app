import { type FC } from "react";
import { Timer } from "./components/timer";
import { TimerProvider } from "./providers/timer-provider";

export const App: FC = () => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <TimerProvider>
          <Timer />
        </TimerProvider>
      </div>
    </>
  );
};
