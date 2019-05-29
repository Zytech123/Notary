<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let disabled;
</script>

<style>
  .actions {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    flex-wrap: wrap;
  }
  button {
    text-transform: uppercase;
    width: 160px;
    border-radius: 50px;
    color: var(--color-blue);
    font-weight: 600;
    background-color: var(--color-white);
    margin: 0.7rem;
  }
  button[disabled] {
    opacity: .7;
    cursor: default;
  }
  .outline {
    border: 2px solid var(--color-blue);
  }
  .fill {
    background-color: var(--color-turquoise);
    border: none;
    box-shadow: 0 10px 20px 0 var(--color-turquoise-opacity);
  }
</style>

<div class="actions">
  <button disabled={disabled} class="outline" on:click={() => dispatch('register')}>Register</button>
  <button disabled={disabled} class="fill"  on:click={() => dispatch('verify')}>Verify</button>
</div>
