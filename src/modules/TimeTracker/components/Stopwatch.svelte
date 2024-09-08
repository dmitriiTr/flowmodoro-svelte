<script lang="ts">
  import Button from "../../../ui/Button.svelte";
  import Input from "../../../ui/Input.svelte";
  import Time from "../../../components/Time.svelte";

  let totalSeconds = $state(0);
  let secondsBase = $state(5);
  let started = $state(false);
  let interval: number | null = null;

  const {
    handleExit,
  }: { handleExit: (seconds: number, newBaseDuration: number) => void } =
    $props();

  const start = () => {
    if (interval === null) {
      started = true;
      interval = setInterval(() => totalSeconds++, 1000);
    }
  };

  const stop = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    handleExit(totalSeconds, secondsBase);
  };
</script>

<div>
  <Time {totalSeconds} overtime={totalSeconds > secondsBase} />

  <div class="controlsContainer">
    <Input {secondsBase} {started} />
    {#if !started}
      <Button view="primary" onclick={start}>Start</Button>
    {:else}
      <Button view="secondary" onclick={stop}>Rest</Button>
    {/if}
  </div>
</div>

<style>
  .controlsContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
</style>
