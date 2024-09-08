<script lang="ts">
  type Props = {
    secondsBase: number;
    started: boolean;
  };

  let { secondsBase, started }: Props = $props();
</script>

<input disabled={started} bind:value={secondsBase} />

<style>
</style>
