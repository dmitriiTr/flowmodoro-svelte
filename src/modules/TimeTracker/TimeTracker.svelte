<script lang="ts">
  import type { Activity, TaskWithDay } from "../../types";
  import Button from "../../ui/Button.svelte";
  import { secondsToRoundedMinutes } from "./utils";
  import Stopwatch from "./components/Stopwatch.svelte";
  import Timer from "./components/Timer.svelte";

  type Props = {
    addTimeToTask: (seconds: number, newBaseDuration: number) => void;
    handleExitTimeTracker: () => void;
    currentTask?: TaskWithDay;
  };

  const { addTimeToTask, handleExitTimeTracker, currentTask }: Props =
    $props();

  let selectedActivity = $state<Activity>("work");
  let lastFocusTime = $state<number | null>(null);

  const handleExitStopwatch = (seconds: number, newBaseDuration: number) => {
    lastFocusTime = seconds;
    addTimeToTask(seconds, newBaseDuration)
  };

  const handleExitTimer = () => {
    lastFocusTime = null;
  };
</script>

<main>
  <div>
    {#if lastFocusTime === null}
      Task: {selectedActivity}
      <Stopwatch handleExit={handleExitStopwatch} />
    {:else}
      Task: rest focused for: {secondsToRoundedMinutes(currentTask?.time || 0)}
      <Timer seconds={lastFocusTime} handleExit={handleExitTimer} />
    {/if}
    <Button onclick={handleExitTimeTracker}>Exit</Button>
  </div>
</main>

<style>
</style>
