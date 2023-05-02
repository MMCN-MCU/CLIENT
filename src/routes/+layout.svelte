<script lang="ts">
  import Toast from "$lib/components/Toast.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>MCU-CLIENT</title>
</svelte:head>

<slot />
<Toast />
