<script context="module">
  import { ADS } from "../_ads.js";

  export async function preload({ params, query }) {
    const ad = ADS.find(ad => ad.slug == params.slug) || ADS[0]

    return { ad }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import HomeAd from '../../components/home-ad.svelte';

  export let ad;

  const prod = process.env.NODE_ENV !== 'development'

  onMount(() => {
    if (prod) {
      fetch("https://fibercandy.cool/.netlify/functions/ad-tracker")
    }
  })
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
    text-align: center;
  }
</style>

<svelte:head>
  <style>
    :root {
      --body-bg: white;
      --hero-background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)),
        var(--color-fiber);
      --hero-shadow: inset 0 -1px 10px rgba(0, 0, 0, 0.54);
      --brand-background: var(--body-bg);
      --brand-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  </style>
</svelte:head>

<section>
  <div class="Content">
    <h1>Just Kidding</h1>

    <HomeAd ad={ad} />

    <p>
      This ad is fake. {ad.title} isn't real (hopefully), but we've added $0.04 to the Sage Cheese
      Fund.
    </p>

    <p>Sage thanks you for your generous gift.</p>
  </div>
</section>
