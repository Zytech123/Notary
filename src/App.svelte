<script>
  import LeftPane from './LeftPane.svelte';
  import RightPane from './RightPane.svelte';

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
</style>

<div class="container">
  <LeftPane actions={actions}/>
  <RightPane />
  
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
