<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  header {
    background: var(--hero-background);
    box-shadow: var(--hero-shadow);
    padding: var(--hero-padding, 64px 0 48px);
    display: flex;
    justify-content: center;
    text-align: center;
    transition: 0.25s padding;
  }

  .Brand {
    background: var(--brand-background);
    border-radius: 2px;
    box-shadow: var(--brand-shadow);
    padding: 16px 20px 20px;
    transition: 0.25s background;
  }

  .Logo {
    color: var(--color-fiber);
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-display);
    font-size: 48px;
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

  .Tagline u {
    text-decoration-style: dashed;
  }
</style>

<header>
  <div class="Brand">
    <a href="/" class="Logo color-fiber">
      <span>fiber</span>
      <span>c</span>
      <span>a</span>
      <span>n</span>
      <span>d</span>
      <span>y</span>
    </a>
    <span class="Tagline">
      <u>Consistent</u>
      recipes for
      <u>consistent</u>
      results
    </span>
  </div>
</header>

<main>
  <slot />
</main>
