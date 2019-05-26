<script>
  import DropZone from './DropZone.svelte';
  import Actions from './Actions.svelte';
  import Footer from './Footer.svelte';
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
    <DropZone />
    <Actions />
  </div>
  <Footer />
</article>
