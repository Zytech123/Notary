<script>
  import DropZone from './DropZone.svelte';
  import Actions from './Actions.svelte';
  import Footer from './Footer.svelte';

  export let actions;

  let selectedFile;
  let error;
  let results;

  const fileSelectHandler = (file) => {
    console.log(file);
    selectedFile = file;
  };

  const clearError = () => {
    error = undefined;
  };

  const registerHandler = async () => {
    clearError();
    try {
      const res = await actions.register(selectedFile);
      results = res;
      console.log(res);
    } catch (err) {
      error = { message: err };
      console.error(err);
    }
  };

  const verifyHandler = async () => {
    clearError();
    const res = await actions.verify(selectedFile);
    results = res;
    console.log(res);
  };
</script>

<style>
  .wrapper {
    padding: 0 4rem;
  }
  .left {
    flex-basis: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 45px 45px 17px;
  }
  .explanations {
    margin-bottom: 2rem;
    font-size: 15px;
    line-height: 1.73;
    letter-spacing: 0.2px;
  }
  
  @media (max-width: 640px) {
    .wrapper {
      padding: 0 !important;
    }
  }
  @media (max-width: 1440px) {
    .wrapper {
      padding: 0 2rem;
    }
  }
</style>

<article class="left">
  <header>
    <img width="94" src="images/logo.png" alt="orbs logo" />
  </header>
  <div class="wrapper">
    <h1>ORBS NOTARY</h1>
    <p class="explanations">
      Orbs Notary serves two simple purposes:<br />
      register and verify documents.
    </p>
    <DropZone on:file={(ev) => fileSelectHandler(ev.detail)} />
    <Actions 
      disabled={!selectedFile} 
      on:register={registerHandler} 
      on:verify={verifyHandler}/>
  </div>
  <Footer />
</article>
