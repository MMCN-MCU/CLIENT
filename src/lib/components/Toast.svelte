<script lang="ts">
  import { toastMessage } from "$lib/stores";
  import { fly } from "svelte/transition";

  $: {
    if ($toastMessage.length > 0) {
      setTimeout(() => {
        $toastMessage = "";
      }, 2000);
    }
  }
</script>

{#if $toastMessage.length > 0}
  <button
    on:click|preventDefault="{() => {
      $toastMessage = '';
    }}"
    transition:fly|local="{{ x: '-30' }}"
    style="z-index: 1000"
    class="fixed left-0 top-20 w-fit flex items-center justify-center rounded-r-3xl bg-blue-400 py-2 px-3 text-center text-white mx-auto text-sm font-bold"
  >
    {$toastMessage}
  </button>
{/if}
