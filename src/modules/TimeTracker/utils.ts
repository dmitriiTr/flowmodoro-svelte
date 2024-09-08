import { REST_RATIO } from "./constants";

export const nowString = () => new Date().toLocaleDateString();

export const getTimeRest = (lastFocus: number) => {
  const timeRest = new Date();
  const restSeconds = lastFocus / REST_RATIO;
  timeRest.setSeconds(timeRest.getSeconds() + restSeconds);
  return timeRest;
};

export const formatTime = (time: number) => (time < 10 ? "0" + time : time);

export const formatTimeWithSeconds = (minutes: number, seconds: number) =>
  `${formatTime(minutes)}:${formatTime(seconds)}`;

export const secondsToRoundedMinutes = (seconds: number) =>
  Math.floor(seconds / 60);

export const secondsToMinutesAndSeconds = (totalSeconds: number) => {
  const minutes = secondsToRoundedMinutes(totalSeconds);
  const seconds = totalSeconds - minutes * 60;
  return { minutes, seconds };
};
