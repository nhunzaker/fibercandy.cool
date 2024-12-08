<script>
  import { RECIPES } from "./_recipes.js";
  import RecipeSummary from "../components/recipe-summary.svelte";
</script>

<svelte:head>
  <title>fibercandy.cool</title>
</svelte:head>

{#each RECIPES as recipe}
  <RecipeSummary {recipe} />
{/each}
