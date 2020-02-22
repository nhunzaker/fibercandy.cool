<script>
  import { ADS } from '../routes/_ads.js'

  let ad = ADS[Math.floor(Math.random() * ADS.length)]
</script>

<style>
  figure {
    max-width: 22em;
    margin: 2rem auto;
    border: 1px solid var(--color-fiber);
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
   }
</style>

<figure>
  <img src={ad.src} alt={ad.alt} />
</figure>
