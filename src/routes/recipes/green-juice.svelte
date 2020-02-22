<script>
  import { RECIPES } from "../_recipes.js";
  import Recipe from "../../components/recipe.svelte";
  import HomeAd from '../../components/home-ad.svelte'

  const recipe = RECIPES.find(recipe => recipe.slug === "green-juice");
  const ingredients = recipe ? recipe.ingredients : [];
</script>

<style>
  .Content {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 34rem;
    margin: 0 auto;
    padding: 0 24px 16px;
  }

  h1 {
    font-size: 4rem;
  }

  .Content.break {
    max-width: 42rem;
  }
</style>

<svelte:head>
  <title>{recipe.title}</title>

  <style>
    :root {
      --body-bg: white;
      --hero-background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)),
        var(--color-fiber) url(/green-juice.jpg) 50% 20% / cover;
      --hero-shadow: inset 0 -1px 10px rgba(0, 0, 0, 0.54);
      --hero-padding: 128px 0;
      --brand-background: var(--body-bg);
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  </style>
</svelte:head>

<section>
  <div class="Content">
    <h1>{recipe.title}</h1>
    <p>
      This recipe is our weekly ritual. Come every Sunday, we bring out the food
      processor and indiscriminately consume massive amounts of fiber.
    </p>
    <p>Prepare to chop, peel, dice, and blend.</p>
  </div>

  <div class="Content break">
    <Recipe {recipe} />
  </div>

  <div class="Content">
    <p>We originally found this recipe over at <a href="https://greenkitchenstories.com/drink-your-greens-yellows-reds/">Green Kitchen Stories</a>. Over the years we've made a few modifications, and lean hard into the chunkiness of this recipe.</p>
    <p>Be ready to drink pulp. Lots of it.</p>

    <HomeAd />

    <p>
      Basically chop everything, but here are some useful tips:
    </p>

    <ul>
      <li>First thing, pour in the almond milk and chia seeds so that they can soak while you chop other ingredients.</li>
      <li>We like to keep frozen bananas on hand. We just have a bunch in the freezer. It only needs to thaw about 5 minutes.</li>
      <li>Refridgerate for about 10 minutes after making.</li>
      <li>If we can't find a kiwi, we also make this juice with Mangos. Just substitute 2 kiwis for 1 mango.</li>
    </ul>
  </div>
</section>
