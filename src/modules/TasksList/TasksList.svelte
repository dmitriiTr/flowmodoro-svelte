<script lang="ts">
  import type { TaskWithDay } from "../../types";
  import Button from "../../ui/Button.svelte";

  type Props = {
    handleExitList: () => void;
    tasks: TaskWithDay[];
  };

  const { handleExitList, tasks }: Props = $props();
</script>

<main>
  <div>
    <table>
      <tbody>
        {#each tasks as task}
          <tr>
            <th>{task.day}</th>
            <th>{task.activity}</th>
            <th>{task.time}</th>
          </tr>
        {/each}
      </tbody>
    </table>
    <Button onclick={handleExitList}>Start</Button>
  </div>
</main>

<style>
</style>
