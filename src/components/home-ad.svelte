<script>
  import { ADS } from "../routes/_ads.js";

  export let ad = ADS[Math.floor(Math.random() * ADS.length)];
</script>

<style>
  a {
    display: block;
    max-width: 384px;
    width: 100%;
    margin: 2rem auto;
    border: 1px solid var(--color-fiber);
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
  }
</style>

<a href="/ads/{ad.slug}">
  <img src={ad.src} alt={ad.alt} />
</a>
