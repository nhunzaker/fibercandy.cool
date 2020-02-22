<script context="module">
  import { ADS } from "../_ads.js";

  export async function preload({ params, query }) {
    const ad = ADS.find(ad => ad.slug == params.slug) || ADS[0];

    return { ad };
  }
</script>

<script>
  import { onMount } from "svelte";
  import HomeAd from "../../components/home-ad.svelte";

  export let ad;

  const prod = process.env.NODE_ENV !== "development";

  onMount(() => {
    if (prod) {
      fetch("https://fibercandy.cool/.netlify/functions/ad-tracker");
    }
  });
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
    font-size: 3rem;
    margin-bottom: 0;
  }
</style>

<svelte:head>
  <title>{ad.title}</title>

  <style>
    :root {
      --body-bg: white;
      --hero-background: var(--bg-pinstripe);
      --hero-shadow: inset 0 -1px 5px rgba(0, 0, 0, 0.1);
      --brand-background: var(--body-bg);
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  </style>
</svelte:head>

<section>
  <div class="Content">
    <HomeAd {ad} />

    <h1>Just kidding!</h1>

    <p>
      This ad is fake.
      <b>{ad.title}</b>
      isn't real (as far as we know), but we've still added $0.04 to the Sage
      Cheese Fund.
    </p>

    <p>
      4 whole cents! That's like... insane ad revenue. It's a shame we're paying
      for it ourselves. We're going to go broke while our dog guzzles down
      gruyere.
    </p>

    <p>Sage thanks you for your generous gift.</p>
  </div>
</section>
