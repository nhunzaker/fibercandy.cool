<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 4px;
    background-color: var(--color-candy);
    display: block;
    bottom: -1px;
  }

  a {
    color: var(--color-fiber);
    font-family: serif;
    text-decoration: none;
    font-size: 18px;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>

    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li>

    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
  </ul>
</nav>
