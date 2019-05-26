<script>
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
  }
  main {
    background-color: #f9f9f9;
    border: 1px dashed #d2d2d2;
    height: 16rem;
    width: 100%;
  }
  .actions {
    margin-top: 3rem;
    text-align: center;
  }
  @media (max-width: 640px) {
    .wrapper {
      padding: 0;
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
    <main />
    <div class="actions">
      <button>Register</button>
      <button>Verify</button>
    </div>
  </div>
  <Footer />
</article>
