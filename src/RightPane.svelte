<style>
  .right {
    flex-basis: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .right img {
    transform: translateZ(0);
    flex-shrink: 0;
    min-height: 100%;
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

<article class="right">
  <img src="images/planet-min.png" alt="planet" />
</article>
