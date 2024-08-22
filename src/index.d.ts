interface ITimerContext {
  time: number;
  laps: number[];
  isRunning: boolean;
  handleLap: () => void;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
}
