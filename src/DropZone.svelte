<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let onFileSelect;

  let selectedFile;
  let fileDialog;
  let isFileValid = true;
  const MB_10 = 10485760;

  const isValid = file => {
    return file.size < MB_10;
  };

  const fileHandler = file => {
    isFileValid = true;
    if (!isValid(file)) {
      isFileValid = false;
      return;
    }
    dispatch('file', file);
  };
</script>

<style>
  main {
    background-color: var(--color-light-grey);
    border: 1px dashed var(--color-grey);
    height: 16rem;
    width: 100%;
    border-radius: 3px;
    text-align: center;
    color: var(--color-blue);
    padding: 2rem 2rem 1rem;
    box-sizing: border-box;
  }
  h4 {
    text-transform: uppercase;
  }
  button {
    text-transform: uppercase;
    border-radius: 50px;
    border: 2px solid var(--color-turquoise);
    font-size: 13px;
    padding: 7px 24px;
    font-weight: 600;
    color: var(--color-blue);
  }
  .secondary {
    font-size: 13px;
  }
  #file-chooser {
    display: none;
  }
</style>

<main>
  <div class="icons">
    <img src="images/pdf-icon.svg" alt="pdf icon" />
    <img src="images/doc-icon.svg" alt="doc icon" />
    <img src="images/jpg-icon.svg" alt="jpg icon" />
  </div>
  <h4>Drag & Drop</h4>
  <p class="secondary">to upload a file</p>
  <button on:click={() => fileDialog.click()}>Or, Select File</button>
  <input
    bind:this={fileDialog}
    id="file-chooser"
    type="file"
    on:change={ev => fileHandler(this.files[0])} />
  <p class="secondary">Upload a document, up to 10MB.</p>
</main>
