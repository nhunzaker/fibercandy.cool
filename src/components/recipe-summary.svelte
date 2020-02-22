<script>
  import { tally, toFixed, toGrams } from "../maths.js";
  export let recipe;

  $: ingredients = recipe.ingredients || [];
  $: calories = toFixed(tally(ingredients, "calories") / recipe.servings);
  $: carbs = tally(ingredients, "carbs") / recipe.servings;
  $: fat = tally(ingredients, "fat") / recipe.servings;
  $: protein = tally(ingredients, "protein") / recipe.servings;
  $: fiber = tally(ingredients, "protein") / recipe.servings;
</script>

<style>
  .Article {
    background-color: var(--color-fiber);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 2px;
    border: 1rem solid var(--color-fiber);
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
    color: inherit;
    display: block;
    text-decoration: none;
    margin: 0 auto 2rem;
    padding: 16rem 0 0;
    max-width: 34em;
    position: relative;
  }

  .Article:after {
    position: absolute;
    z-index: 0;
    content: "";
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }

  .Details {
    background: white;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    color: inherit;
    display: block;
    padding: 1rem 1.5rem 1.75rem;
    position: relative;
    text-decoration: none;
    z-index: 1;
  }

  .Title {
    font-size: 1.7rem;
    margin: 0;
    line-height: 1.5;
  }

  .Description {
    margin: 0;
  }

  footer {
    border-top: 2px dashed #d9d9d9;
    color: var(--color-salmon);
    padding-top: 16px;
    margin-top: 16px;
    font-style: italic;
  }
</style>

<a
  class="Article"
  href="/recipes/{recipe.slug}"
  style="background-image: url({recipe.background});">
  <div class="Details">
    <h2 class="Title">{recipe.title}</h2>
    <p class="Description">{recipe.description}</p>
    <footer class="Facts">
      {calories} cal / {toGrams(carbs)} carbs / {toGrams(fat)} fat / {toGrams(protein)}
      protein / <b>{toGrams(fiber)} fiber</b>
    </footer>
  </div>
</a>
