<script>
  export let recipe = [];
  export let servings = 2;

  const keys = ["grams", "calories", "carbs", "fat", "protein", "fiber"];

  let servingGrams = total("grams") / servings;

  $: totalGrams = total("grams");
  $: servingRatio = totalGrams / servingGrams;
  $: servingsCalories = total("calories", servingRatio);
  $: servingsCarbs = total("carbs", servingRatio);
  $: servingsFat = total("fat", servingRatio);
  $: servingsProtein = total("protein", servingRatio);
  $: servingsFiber = total("fiber", servingRatio);

  function total(key, servings = 1) {
    return parseFloat(
      recipe.reduce((a, b) => a + b[key] / servings, 0).toFixed(2)
    );
  }

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
    vertical-align: top;
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

  .ServingPicker {
    white-space: nowrap;
  }

  .ServingPicker input {
    width: 75px;
  }

  button {
    border: 0;
    background: 0;
    text-transform: uppercase;
    padding: 0 4px;
    color: inherit;
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
    {#each recipe as ingredient}
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
      <td>Totals</td>
      <td>{total('grams')}g</td>
      <td>{total('calories')}</td>
      <td>{total('carbs')}g</td>
      <td>{total('fat')}g</td>
      <td>{total('protein')}g</td>
      <td>{total('fiber')}g</td>
    </tr>
    <tr>
      <td>
        Serving (
        <button type="button" on:click={resetServing}>reset</button>
        )
      </td>
      <td class="ServingPicker">
        <input
          type="number"
          min="0"
          step="any"
          max={total('grams')}
          bind:value={servingGrams} />
        g
      </td>
      <td>{servingsCalories}</td>
      <td>{servingsCarbs}g</td>
      <td>{servingsFat}g</td>
      <td>{servingsProtein}g</td>
      <td>{servingsFiber}g</td>
    </tr>
  </tfoot>
</table>
