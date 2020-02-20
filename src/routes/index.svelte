<script>
  import HomeAd from '../components/home-ad.svelte'
</script>

<style>
  article {
    background-color: var(--color-fiber);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 2px;
    border: 1rem solid var(--color-fiber);
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
    margin: 0 auto 2rem;
    padding: 16rem 0 0;
    max-width: 34em;
    position: relative;
  }

  article:after {
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
    opacity: 0.7;
  }
</style>

<svelte:head>
  <title>fibercandy.cool</title>
</svelte:head>

<article style="background-image: url(/green-juice.jpeg);">
  <a href="/recipes/green-juice" class="Details">
    <h2 class="Title">Green Juice</h2>
    <p class="Description">
      Our take on a favorite
      <a href="https://greenkitchenstories.com/drink-your-greens-yellows-reds/">
        Green Kitchen Stories smoothie
      </a>
      .
    </p>
    <footer class="Facts">
      390 cal, 50g Carbs, 21g Fat, 15.5g Protein,
      <b>18g Fiber</b>
    </footer>
  </a>
</article>

<article style="background-image: url(/popcorn.jpg);">
  <a href="/recipes/popcorn" class="Details">
    <h2 class="Title">Popcorn</h2>
    <p class="Description">So salty you might die.</p>
    <footer class="Facts">
      240 calories, 58g Carbs, 4g Fat, 4g Protein,
      <b>12g Fiber</b>
    </footer>
  </a>
</article>
