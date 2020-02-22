<script>
  import { RECIPES } from "../_recipes.js";
  import Recipe from "../../components/recipe.svelte";
  import HomeAd from "../../components/home-ad.svelte";

  const recipe = RECIPES.find(recipe => recipe.slug === "popcorn");
  const ingredients = recipe ? recipe.ingredients : [];
</script>

<style>
  .Content {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 38rem;
    margin: 0 auto;
    padding: 0 24px 16px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }

  .Content.break {
    max-width: 42rem;
  }

  section {
    background: white;
    border-radius: 1px;
    max-width: 48rem;
    margin: -120px auto 100px;
    padding-top: 0.5rem;
    position: relative;
  }

  section:before {
    box-shadow: 0 0 20px 30px rgba(0, 0, 0, 0.4);
    border-radius: 0 0 50% 50%;
    content: "";
    height: 540px;
    left: 5%;
    position: absolute;
    top: 0;
    width: 90%;
    z-index: -1;
  }
</style>

<svelte:head>
  <title>{recipe.title}</title>

  <style>
    :root {
      --body-bg: white;
      --hero-background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)),
        var(--color-fiber) url(/popcorn.jpg) 50% 50% / cover;
      --hero-shadow: inset 0 -1px 10px rgba(0, 0, 0, 0.24);
      --hero-padding: 56px 0 180px;
      --brand-background: white;
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  </style>
</svelte:head>

<section>
  <div class="Content">
    <h1>{recipe.title}</h1>
    <p>
      This popcorn recipe is probably killing us, but we just can't stop. So
      much butter. So much salt. So much cumin.
    </p>
    <p>Don't stop us now.</p>
  </div>

  <div class="Content break">
    <Recipe {recipe} />
  </div>

  <div class="Content">
    <p>We don't follow the amounts perfectly. You kind of have to feel it.</p>

    <HomeAd />

    <p>
      This is generally pretty easy to make, but we have some tips for the
      popcorn:
    </p>

    <ol>
      <li>
        Heat the oil in a large pot over medium heat with 3 kernels in the pan
      </li>
      <li>Wait for all three kernels to pop</li>
      <li>
        Take off heat, put remaining kernels in pot. Count a full 30 seconds
      </li>
      <li>
        Return to pot to heat. Occasionally shake the pot to drop the kernels to
        the bottom
      </li>
      <li>Remove from heat when the popcorn stops popping</li>
      <li>Divide popcorn into two large bowls</li>
      <li>
        Divide remaining ingredients in half. Stir each portion of popcorn in
        pot with ingredients
      </li>
    </ol>

    <p>
      Also consider adding cayenne pepper or parmasian cheese for something
      different.
    </p>
  </div>
</section>
