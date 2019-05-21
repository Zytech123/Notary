import sjcl from 'sjcl';
import NotaryJSON from '../build/contracts/Notary.json';

const binaryToHash = binary => {
  const hash = sjcl.hash.sha256.hash(binary);
  return sjcl.codec.hex.fromBits(hash);
};

class Actions {
  constructor(web3, address) {
    this.web3 = web3;
    this.notaryContract = new web3.eth.Contract(
      NotaryJSON.abi,
      NotaryJSON.networks['5777'].address
    );
    this.userAddress = address;
  }
  _readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = ev => {
        const hex = binaryToHash(ev.target.result);
        resolve(hex);
      };
      reader.readAsBinaryString(file);
    });
  }

  async register(file) {
    const [from] = await window.ethereum.enable();
    const hash = await this._readFile(file);
    const res = await this.notaryContract.methods.register(hash).send({ from });
    console.log(res);
    return {
      txHash,
      hash,
      timestamp: Number(timestamp),
      signer
    };
  }

  async verify(file) {
    const hash = await this._readFile(file);
    const res = await this.notaryContract.methods.verify(hash).call();
    const timestampHex = res[0]._hex;
    const signer = res[1];
    return {
      hash,
      timestamp: this.web3.utils.hexToNumber(timestampHex),
      signer
    };
  }
}

export default Actions;
