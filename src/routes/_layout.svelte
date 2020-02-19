<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  header {
    margin: 64px 0 48px;
  }

  .Logo {
    color: #333;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-display);
    font-size: 48px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
    /** This is stupid, but whatever **/
    display: flex;
    justify-content: center;
  }

  .Logo span:nth-child(2n) {
    color: var(--color-candy);
  }

  .Logo span:nth-child(2n + 3) {
    color: var(--color-candy-stripe);
  }

  .Tagline {
    display: block;
    color: var(--color-fiber);
    font-size: 18px;
    font-style: italic;
    text-align: center;
  }

  main {
    padding: 0 24px 24px;
  }
</style>

<header>
  <a href="/" class="Logo color-fiber">
    <span>fiber</span>
    <span>c</span>
    <span>a</span>
    <span>n</span>
    <span>d</span>
    <span>y</span>
  </a>
  <span class="Tagline">A study in gastronomic consistency</span>
</header>

<main>
  <slot />
</main>
