<script>
  import { tally, toGrams, toFixed } from "../maths.js";

  export let recipe;
  export let servings = 2;

  const keys = ["grams", "calories", "carbs", "fat", "protein", "fiber"];

  let servingGrams = tally(recipe.ingredients, "grams") / servings;

  $: ingredients = recipe.ingredients || [];
  $: totalGrams = tally(ingredients, "grams");
  $: servingRatio = totalGrams / servingGrams;
  $: servingsCalories = tally(ingredients, "calories") / servingRatio;
  $: servingsCarbs = tally(ingredients, "carbs") / servingRatio;
  $: servingsFat = tally(ingredients, "fat") / servingRatio;
  $: servingsProtein = tally(ingredients, "protein") / servingRatio;
  $: servingsFiber = tally(ingredients, "fiber") / servingRatio;

  function resetServing() {
    servingGrams = totalGrams / servings;
  }
</script>

<style>
  table {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    border-collapse: collapse;
    border: 1px solid rgba(0, 0, 0, 0.18);
    width: 100%;
  }

  thead td {
    text-transform: capitalize;
  }

  td {
    padding: 8px 12px;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }

  .Name {
    white-space: nowrap;
  }

  tfoot,
  thead {
    background: var(--color-fiber);
    color: white;
    font-weight: bold;
  }

  tfoot tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  }

  .nowrap {
    white-space: nowrap;
  }

  .nowrap input {
    width: 75px;
  }
</style>

<table>
  <thead>
    <tr>
      <td class="Name">Ingredient</td>
      {#each keys as key}
        <td>{key}</td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each ingredients as ingredient}
      <tr>
        <td class="Name">{ingredient.name}</td>
        {#each keys as key}
          <td>{ingredient[key]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td class="nowrap">
        Servings: {toFixed(totalGrams / servingGrams)}
      </td>
      <td class="nowrap">
        <input
          type="number"
          min="0"
          step="any"
          max={totalGrams}
          bind:value={servingGrams} />
        g
      </td>
      <td>{toGrams(servingsCalories)}</td>
      <td>{toGrams(servingsCarbs)}</td>
      <td>{toGrams(servingsFat)}</td>
      <td>{toGrams(servingsProtein)}</td>
      <td>{toGrams(servingsFiber)}</td>
    </tr>
  </tfoot>
</table>
