<script lang="ts">
  import {
    formatTimeWithSeconds,
    secondsToMinutesAndSeconds,
  } from "../modules/TimeTracker/utils";

  type Props = {
    totalSeconds: number;
    overtime?: boolean;
  };

  let { totalSeconds, overtime }: Props = $props();

  let showSeconds = $state(true);

  const { minutes, seconds } = $derived(
    secondsToMinutesAndSeconds(totalSeconds)
  );
</script>

<div>
  <span role="button" onkeydown={() => {}} tabindex="0" onclick={() => (showSeconds = !showSeconds)} class:overtime>
    {#if showSeconds}
      {formatTimeWithSeconds(minutes, seconds)}
    {:else}
      {minutes} min
    {/if}
  </span>
</div>

<style>
  span {
    font-size: 6rem;
  }

  span.overtime {
    color: blue;
  }
</style>
