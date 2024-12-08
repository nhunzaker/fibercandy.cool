<script>
  import { RECIPES } from "../_recipes.js";
  import { ADS } from "../_ads.js";
</script>

<svelte:head>
  <title>Site Map</title>
</svelte:head>

<ul>
  {#each RECIPES as recipe}
    <li>
      <a href="/recipes/{recipe.slug}">{recipe.title}</a>
    </li>
  {/each}

  {#each ADS as ad}
    <li>
      <a href="/ads/{ad.slug}">{ad.title}</a>
    </li>
  {/each}
</ul>
