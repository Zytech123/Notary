<script>
  import Input from './Input.svelte';
  import Error from './Error.svelte';
  import Result from './Result.svelte';
  import Explanations from './Explanations.svelte';

  let file, error, results;
  export let actions;

  const resetResults = () => {
    error = null;
    results = null;
  };

  const registerHandler = async () => {
    resetResults();
    try {
      const res = await actions.register(file);
      results = res;
      console.log(res);
    } catch (err) {
      error = { message: err };
      console.error(err);
    }
  };

  const verifyHandler = async () => {
    resetResults();
    const res = await actions.verify(file);
    results = res;
    console.log(res);
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  article {
    flex-basis: 100%;
    flex: 1;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
  }
  .right img {
    transform: translateZ(0);
    flex-shrink: 0;
    min-height: 100%
  }
  @media (max-width: 640px) {
    .right {
      display: none !important;
    }
  }
  @media (min-width: 1440px) {
    .right img {
      min-width: 100%;
    }
  }
</style>

<div class="container">
  <article class="left">
    <h1>Orbs Notary</h1>
  </article>
  <article class="right">
    <img src="images/planet-min.png" alt="planet"/>
  </article>
  <!-- <h1>Orbs Notary</h1>
  <Explanations />
  <Input
    on:change={ev => {
      (file = ev.detail), resetResults();
    }} />
  <div class="actions">
    <button disabled={!file} on:click={registerHandler}>Register</button>
    <button disabled={!file} on:click={verifyHandler}>Verify</button>
  </div>
  {#if error}
    <Error {error} />
  {/if}
  {#if results}
    <Result result={results} />
  {/if} -->
</div>
