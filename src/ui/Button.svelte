<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    view?: string;
    onclick: () => void;
    children: Snippet
  };

  let { view = "primary", onclick, children }: Props = $props();
</script>

<button style="--button-primary: rgb(0, 120, 210);--button-secondary: rgb(0, 141, 248);" {onclick} class={view}>
  {@render children()}
</button>

<style>
  button {
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 0px 16px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;

    transition:
      background-color 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      color 0.15s ease,
      fill 0.15s ease;
  }
  .primary {
    background-color: var(--button-primary);
    color: white;
  }
  .primary:hover {
    background-color: var(--button-secondary);
  }

  .secondary {
    background-color: transparent;
    color: var(--button-primary);
    border-color: var(--button-primary);
  }
  .secondary:hover {
    color: var(--button-secondary);
    border-color: var(--button-secondary);
  }
</style>
