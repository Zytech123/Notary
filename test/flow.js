const { Notary, sha256, encryptWithPassword, descryptWithPassword } = require("../src/notary");
const Orbs = require("orbs-client-sdk");
const expect = require("expect.js");

async function deploy(client, owner, code) {
    const contractName = `T${new Date().getTime()}`;
    const [ tx, txid ] = client.createTransaction(owner.publicKey, owner.privateKey, "_Deployments", "deployService", [Orbs.argString(contractName), Orbs.argUint32(1), Orbs.argBytes(code)])
    const result = await client.sendTransaction(tx);

    console.log(result);

    return contractName;
}

function getClient() {
    return new Orbs.Client("http://localhost:8080", 42, Orbs.NetworkType.NETWORK_TYPE_TEST_NET);
}

function getContractCodeAsBuffer() {
    return require("fs").readFileSync("./contract/notary.go");
}

describe("the library", () => {
    function registerAndVerify(optionalPassword) {
        return async () => {
            const owner = Orbs.createAccount();
            const contractName = await deploy(getClient(), owner, getContractCodeAsBuffer());

            const notary = new Notary(getClient(), contractName, owner.publicKey, owner.privateKey, optionalPassword);
            const registerResponse = await notary.register("somehash", "Insurance documents");
            console.log(registerResponse)
            expect(registerResponse.txHash).not.to.be.empty;

            if (optionalPassword) {
                expect(registerResponse.metadata).not.to.be.eql("Insurance documents");
            } else {
                expect(registerResponse.metadata).to.be.eql("Insurance documents");
            }

            const verifyResponse = await notary.verify("somehash");
            console.log(verifyResponse);
            expect(verifyResponse.verified).to.be.true;
            expect(verifyResponse.metadata).to.be.eql("Insurance documents");

            const verifyResponseForUnknownHash = await notary.verify("unknown-hash");
            console.log(verifyResponseForUnknownHash);
            expect(verifyResponseForUnknownHash.verified).to.be.false;
            expect(verifyResponse.metadata).to.be.empty;
        };
    }

    it("can encrypt and decrypt metadata", () => {
        const p = "password";
        expect(descryptWithPassword(p, encryptWithPassword(p, "hello"))).to.be.eql("hello");
    })

    it("registers and verifies with no encryption", registerAndVerify());
    it("registers and verifies with encryption", registerAndVerify("password"));

    it("can calculate hash", () => {
        const hash = sha256(Buffer.from("hello", "ascii"));
        expect(hash).to.be.eql("448dd2d08744ccbdb3aee98ebae3978c57c7d0e58a9f8bbc9cbc918ace49a05b");
    });
});
