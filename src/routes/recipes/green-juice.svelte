<script>
  import Recipe from "../../components/recipe.svelte";

  const recipe = [
    {
      name: "Almond Milk - 1.5 Cups",
      grams: 360,
      calories: 45,
      carbs: 1.5,
      fat: 3.75,
      protein: 1.5,
      fiber: 0.75
    },
    {
      name: "Chia Seeds - 2 TBS",
      grams: 24,
      calories: 120,
      carbs: 8,
      fat: 8,
      protein: 6,
      fiber: 8
    },
    {
      name: "Celery - 6 Stalks",
      grams: 300,
      calories: 46.7,
      carbs: 9,
      fat: 0.56,
      protein: 2.1,
      fiber: 4.8
    },
    {
      name: "Kale",
      grams: 75,
      calories: 36.75,
      carbs: 6.6,
      fat: 0.67,
      protein: 3.22,
      fiber: 2.7
    },
    {
      name: "Avocado - Half",
      grams: 75,
      calories: 118,
      carbs: 6.7,
      fat: 11.7,
      protein: 1.36,
      fiber: 5.22
    },
    {
      name: "2 Limes with Pulp",
      grams: 120,
      calories: 36,
      carbs: 13,
      fat: 1.4,
      protein: 0.9,
      fiber: 3.5
    },
    {
      name: "Banana",
      grams: 103,
      calories: 91.64,
      carbs: 23.7,
      fat: 0.283,
      protein: 1.12,
      fiber: 2.68
    },
    {
      name: "PB2 - 3 TBS",
      grams: 18.5,
      calories: 67.5,
      carbs: 7.5,
      fat: 2.25,
      protein: 7.5,
      fiber: 3
    },
    {
      name: "Ginger",
      grams: 10,
      calories: 8,
      carbs: 1.8,
      fat: 0.1,
      protein: 0.2,
      fiber: 0.2
    },
    {
      name: "Pistachios",
      grams: 28.4,
      calories: 159,
      carbs: 8,
      fat: 13,
      protein: 6,
      fiber: 2.9
    }
  ];
</script>

<style>
  .Content {
    max-width: 32rem;
    margin: 0 auto;
    padding: 0 24px 16px;
  }

  .Content.break {
    max-width: 40rem;
  }
</style>

<svelte:head>
  <style>
    :root {
      --body-bg: white;
      --hero-background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)),
        var(--color-fiber) url(/green-juice.jpg);
      --hero-shadow: inset 0 -1px 10px rgba(0, 0, 0, 0.54);
      --hero-padding: 128px 0;
      --brand-background: var(--body-bg);
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  </style>
</svelte:head>
<section>
  <div class="Content">
    <h1>Green Juice</h1>
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
