<script>
  import { tally, toGrams, toFixed } from "../maths.js";

  export let recipe;
  export let servings = 2;

  const keys = ["amount", "grams", "calories", "carbs", "fat", "protein", "fiber"];

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
    width: 100%;
  }

  thead td {
    text-transform: capitalize;
  }

  td {
    padding: 8px;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }

  .Name {
    width: 100%;
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
    border: 0;
    padding: 4px;
    width: 40px;
  }

  .Checklist {
    width: 30px;
  }
</style>

<table>
  <thead>
    <tr>
      <td></td>
      <td class="Name">Ingredient</td>
      {#each keys as key}
        <td>{key}</td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each ingredients as ingredient}
      <tr>
        <td class="Checklist">
          <label>
            <input type="checkbox" />
            <span class="visuallyhidden">I've added this ingredient</span>
          </label>
        </td>
        <td class="Name">{ingredient.name}</td>
        {#each keys as key}
          <td class="Number">{ingredient[key]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td>Total</td>
      <td>-</td>
      <td>{toGrams(tally(ingredients, 'grams'))}</td>
      <td>{toGrams(tally(ingredients, 'calories'))}</td>
      <td>{toGrams(tally(ingredients, 'carbs'))}</td>
      <td>{toGrams(tally(ingredients, 'fat'))}</td>
      <td>{toGrams(tally(ingredients, 'protein'))}</td>
      <td>{toGrams(tally(ingredients, 'fiber'))}</td>
    </tr>
    <tr>
      <td></td>
      <td>Servings</td>
      <td class="nowrap">
        <input
          type="number"
          step="any"
          bind:value={servings} />
      </td>
      <td>
        {toGrams(servingGrams)}
      </td>
      <td>{toGrams(servingsCalories)}</td>
      <td>{toGrams(servingsCarbs)}</td>
      <td>{toGrams(servingsFat)}</td>
      <td>{toGrams(servingsProtein)}</td>
      <td>{toGrams(servingsFiber)}</td>
    </tr>
  </tfoot>
</table>
