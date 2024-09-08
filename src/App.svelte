<script lang="ts">
  import { type Activity, type TaskWithDay } from "./types";
  import { nowString, secondsToRoundedMinutes } from "./modules/TimeTracker/utils";
  import TimeTracker from "./modules/TimeTracker/TimeTracker.svelte";
  import TasksList from "./modules/TasksList/TasksList.svelte";

  let showTimer = $state(true);
  let selectedActivity = $state<Activity>("work");
  let tasks = $state<TaskWithDay[]>([]); // может можно и без стейта
  const now = nowString();

  let currentTask = $derived(
    tasks.find(
      (dayTask) => dayTask.day === now && dayTask.activity === selectedActivity
    )
  );

  const addTimeToTask = (seconds: number, newBaseDuration: number) => {
    const now = nowString();

    if (currentTask) {
      currentTask.time += seconds;
    } else {
      tasks.push({
        day: now,
        activity: selectedActivity,
        time: seconds,
      });
    }

    console.log($state.snapshot(tasks));
  };

  const handleExitTimeTracker = () => {
    showTimer = false;
  };

  const handleExitList = () => {
    showTimer = true;
  };

  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
  });
</script>

<main>
  {#if showTimer}
    <TimeTracker {handleExitTimeTracker} {addTimeToTask} {currentTask} />
  {:else}
    <TasksList {tasks} {handleExitList} />
  {/if}
</main>

<style>
</style>
