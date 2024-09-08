<script lang="ts">
  import Button from "../../../ui/Button.svelte";
  import Time from "../../../components/Time.svelte";

  type Props = {
    handleExit: () => void;
    seconds: number;
  };

  const { handleExit, seconds }: Props = $props();
  let interval: number | null = setInterval(() => totalSeconds--, 1000);
  let totalSeconds = $state(seconds);

  $effect(() => {
    if (totalSeconds === 0) {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  });


  const stop = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    handleExit();
  };
</script>

<div>
  <Time {totalSeconds} />
  <div class="buttonContainer">
    <Button view="secondary" onclick={stop}>End Rest</Button>
  </div>
</div>

<style>
  .buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
</style>
