import { activities } from './constants';

export type Activity = typeof activities[number];

export interface TaskWithDay {
  day: string,
  activity: Activity;
  time: number;
}

export const Mode = {
  Timer: 1,
  Stopwatch: 2,
} as const;

type TMode = typeof Mode[keyof typeof Mode];