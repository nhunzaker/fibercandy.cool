<script>
  import { ADS } from '../routes/_ads.js'

  export let ad = ADS[Math.floor(Math.random() * ADS.length)]
</script>

<style>
  form {
    max-width: 22em;
    margin: 2rem auto;
    border: 1px solid var(--color-fiber);
    box-shadow: 0 0 2px rgba(137, 149, 141, 0.51);
  }
  button {
    padding: 0;
    border: 0;
    background: 0;
    display: block;
  }
</style>

<form action="/ads/{ad.slug}">
  <input type="hidden" value={ad.slug} />

  <button>
    <img src={ad.src} alt={ad.alt} />
    <span class="visuallyhidden">View this ad</span>
  </button>
</form>
