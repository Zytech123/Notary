import App from './App.svelte';
import Actions from './actions';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const actions = new Actions(web3);

const app = new App({
  target: document.body,
  props: {
    actions
  }
});

export default app;
