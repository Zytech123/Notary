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
      error = err;
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
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  .actions {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
  }
  .actions button {
    width: 49%;
  }
</style>

<div class="container">
  <h1>Ethereum Notary</h1>
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
  {/if}
</div>
