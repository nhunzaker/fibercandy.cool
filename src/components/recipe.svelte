<script>
  import { tally, toGrams, toFixed } from "../maths.js";

  export let recipe;
  export let servings = 2;

  const keys = ["grams", "calories", "carbs", "fat", "protein", "fiber"];

  $: servingGrams = tally(recipe.ingredients, "grams") / servings;
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
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 14px;
    width: 100%;
  }

  thead td {
    text-transform: capitalize;
  }

  td {
    padding: 6px 8px;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }

  td:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.18);
  }

  .Name {
    width: 100%;
  }

  .Number {
    text-align: center;
  }

  td:first-child {
    padding-left: 12px;
  }

  td:last-child {
    padding-right: 12px;
  }

  tfoot,
  thead {
    background: var(--color-fiber);
    color: #fff;
    font-weight: 600;
  }

  tfoot tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  }

  .nowrap {
    white-space: nowrap;
  }

  input {
    background: rgba(0, 0, 0, 0.43);
    border-radius: 3px;
    border: 0;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
    color: white;
    max-width: 100%;
    padding: 4px 7px;
    width: 100%;
  }
</style>

<table>
  <thead>
    <tr>
      <td class="Name">Ingredient</td>
      <td>Amount</td>
      {#each keys as key}
        <td class="Number">{key}</td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each ingredients as ingredient}
      <tr>
        <td class="Name">{ingredient.name}</td>
        <td>{ingredient.amount}</td>
        {#each keys as key}
          <td class="Number">{ingredient[key]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>-</td>
      <td class="Number">{toGrams(tally(ingredients, 'grams'))}</td>
      <td class="Number">{toFixed(tally(ingredients, 'calories'))}</td>
      <td class="Number">{toGrams(tally(ingredients, 'carbs'))}</td>
      <td class="Number">{toGrams(tally(ingredients, 'fat'))}</td>
      <td class="Number">{toGrams(tally(ingredients, 'protein'))}</td>
      <td class="Number">{toGrams(tally(ingredients, 'fiber'))}</td>
    </tr>
    <tr>
      <td>Servings (split)</td>
      <td class="nowrap">
        <label>
          <input type="number" step="0.5" min="0.5" bind:value={servings} />
          <span class="visuallyhidden">Change serving size</span>
        </label>
      </td>
      <td class="Number">{toGrams(servingGrams)}</td>
      <td class="Number">{toFixed(servingsCalories)}</td>
      <td class="Number">{toGrams(servingsCarbs)}</td>
      <td class="Number">{toGrams(servingsFat)}</td>
      <td class="Number">{toGrams(servingsProtein)}</td>
      <td class="Number">{toGrams(servingsFiber)}</td>
    </tr>
  </tfoot>
</table>
