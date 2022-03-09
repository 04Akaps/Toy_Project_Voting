require("dotenv").config();

const URL = "https://api.baobab.klaytn.net:8651";
const KEY = `지정해 주세요..!`;

const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

module.exports = {
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(KEY, URL);
      },
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: 8500000,
      gasPrice: 25000000000,
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.8.0",
      setting: {
        evmVersion: "london",
      },
    },
  },
};
