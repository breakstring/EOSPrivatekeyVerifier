const nconf = require("nconf");
const ecc = require("eosjs-ecc");

nconf.argv()
    .required(["privatekey"]);

const privatekey = nconf.get("privatekey").replace(/ /g, '');

try {
    const publickey = ecc.privateToPublic(privatekey);
    console.log("Public key is:" + publickey);
} catch (error) {
    console.log("Something wrong with your private key:" + privatekey);
}