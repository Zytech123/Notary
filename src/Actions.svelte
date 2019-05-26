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
  <button class="outline">Register</button>
  <button class="fill">Verify</button>
</div>
