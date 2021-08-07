const path = require("path");
var HDWalletProvider = require('@truffle/hdwallet-provider')

const fs = require('fs');
var mnemonic = fs.readFileSync(".secret").toString().trim();
if (!mnemonic || mnemonic.split(' ').length !== 12) {
  throw new Error('unable to retrieve mnemonic from .secret');
}
var publicTestnetNode = 'https://public-node.testnet.rsk.co/'

const gasPriceTestnetRaw = fs.readFileSync(".gas-price-testnet.json").toString().trim();
const gasPriceTestnet = parseInt(JSON.parse(gasPriceTestnetRaw).result, 16);
if (typeof gasPriceTestnet !== 'number' || isNaN(gasPriceTestnet)) {
  throw new Error('unable to retrieve network gas price from .gas-price-testnet.json');
}
console.log("Gas price Testnet: " + gasPriceTestnet);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    /*
    develop: {
      port: 7545,
      gas: 9000000,
      network_id: 5777
    }
    */
    // test: {
    //   port: 7545,
    //   gas: 9000000,
    //   network_id: 4447
    // },

    rskTestnet: {
      provider: () => new HDWalletProvider(mnemonic, publicTestnetNode),
      network_id: 31,
      gasPrice: Math.floor(gasPriceTestnet * 1.1),
      gas: 6800000,
      confirmations: 2, 
      networkCheckTimeout: 10000
    }

    // test: {
    //   gas: 9000000,
    //   network_id: 4447
    // },
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 1000
    },
  },

  compilers: {
    solc: {
      version: "0.6.11",
      evmVersion: "byzantium" //constantinople.. 
    },

  },

  // plugins: [
  //   'truffle-ganache-test'
  // ],
  // mocha: {
  //   reporter: 'eth-gas-reporter'
  // }
}
