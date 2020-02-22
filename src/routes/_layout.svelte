<style>
  header {
    background: var(--hero-background, transparent);
    box-shadow: var(--hero-shadow, none);
    padding: var(--hero-padding, 64px 0 48px);
    display: flex;
    justify-content: center;
    text-align: center;
    transition: 0.25s padding;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%, 0% 0%);
  }

  .Brand {
    background: var(--brand-background, transparent);
    border-radius: 1px;
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
    font-size: 16px;
    font-style: italic;
    text-align: center;
  }

  .Tagline span {
    border-bottom: 1px dashed;
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
      <span>Consistent</span>
      recipes for
      <span>consistent</span>
      results
    </span>
  </div>
</header>

<main>
  <slot />
</main>
