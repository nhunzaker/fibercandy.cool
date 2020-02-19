<style>
  section {
    background-color: white;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 1px;
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
    box-sizing: border-box;
    margin: 0 auto 64px;
    max-width: 34em;
    overflow: hidden;
    padding-top: 16rem;
    position: relative;
  }

  section:after {
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
    padding: 1rem 1.5rem 1.75rem;
    background: white;
    position: relative;
    z-index: 1;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);
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
    border-top: 1px solid var(--color-fiber);
    padding-top: 16px;
    margin-top: 16px;
    font-style: italic;
    opacity: 0.7;
  }
</style>

<svelte:head>
  <title>fibercandy.cool</title>
</svelte:head>

<section style="background-image: url(/green-juice.jpeg);">
  <div class="Details">
    <h2 class="Title">Green Juice</h2>
    <p class="Description">Our take on a favorite <a href="https://greenkitchenstories.com/drink-your-greens-yellows-reds/">Green Kitchen Stories smoothie</a>.</p>
    <footer class="Facts">
      390 calories, 50g Carbs, 21g Fat, 15.5g Protein, <b>18g Fiber</b>
    </footer>
  </div>
</section>

<section style="background-image: url(/popcorn.jpg);">
  <div class="Details">
    <h2 class="Title">Popcorn</h2>
    <p class="Description">So salty you might die.</p>
    <footer class="Facts">
      240 calories, 58g Carbs, 4g Fat, 4g Protein, <b>12g Fiber</b>
    </footer>
  </div>
</section>
