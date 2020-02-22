<script>
  import { RECIPES } from "../_recipes.js";
  import Recipe from "../../components/recipe.svelte";

  const recipe = RECIPES.find(recipe => recipe.slug === "popcorn");
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
  <style>
    :root {
      --body-bg: white;
      --hero-background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)),
        var(--color-fiber) url(/popcorn.jpg) 50% 50% / cover;
      --hero-shadow: inset 0 -1px 10px rgba(0, 0, 0, 0.24);
      --hero-padding: 128px 0 128px;
      --brand-background: white;
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  </style>
</svelte:head>

<section>
  <div class="Content">
    <h1>{recipe.title}</h1>
    <p>This popcorn recipe is probably killing us, but we just can't stop. So much butter. So much salt. So much cumin.</p>
    <p>Don't stop us now.</p>
  </div>

  <div class="Content break">
    <Recipe {recipe} />
  </div>

  <div class="Content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus mi
      magna. Etiam urna ligula, tincidunt ac ornare quis, aliquam sit amet urna.
      Ut facilisis auctor dignissim. Sed quis nisl ut velit sagittis sodales sit
      amet vel nibh. Vivamus sit amet diam velit. Nam laoreet nisi at maximus
      placerat. Nullam elit tortor, tempor congue tempor a, porttitor vitae
      quam. Nam vitae est a ante posuere pulvinar vel eget nunc. Quisque at
      semper lectus. Nullam semper nec quam ut pellentesque. Nam tincidunt
      lectus vel justo elementum efficitur. Vivamus accumsan vehicula felis et
      fringilla. Cras aliquam porta facilisis.
    </p>
    <p>
      Integer sit amet fermentum diam. Proin ultricies fermentum volutpat. Donec
      tincidunt viverra pellentesque. Nunc ac facilisis mauris, sed vehicula
      nisi. Integer eget orci arcu. Ut commodo tempor pellentesque. Maecenas
      eget erat id elit semper finibus ut eget purus. Cras tellus mi, accumsan
      sit amet enim vel, ornare hendrerit elit. Sed non pellentesque diam. Cras
      sed consectetur libero, vel congue nisi. Vivamus euismod tellus id egestas
      sollicitudin. Vivamus ornare quam quis odio dapibus maximus.
    </p>
  </div>
</section>
