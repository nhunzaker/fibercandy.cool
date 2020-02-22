<script>
  import { RECIPES } from "./_recipes.js";
  import RecipeSummary from "../components/recipe-summary.svelte";
  import HomeAd from "../components/home-ad.svelte";
</script>

<svelte:head>
  <title>fibercandy.cool</title>
</svelte:head>

{#each RECIPES as recipe}
  <RecipeSummary {recipe} />
{/each}
