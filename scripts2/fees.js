//connection with node
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co/'));

/*
const Rsk3 = require('@rsksmart/rsk3');
const rsk3 = new Rsk3('https://public-node.testnet.rsk.co/');
*/

const Tx = require('ethereumjs-tx').Transaction
const Common = require('ethereumjs-common').default;
var EthUtil = require('ethereumjs-util');

const contractAddress = ""
const abi = require('./abi');
const contract = new web3.eth.Contract(abi.trovemanager.TroveManager, "0xF6345B9b99E0c42DB33ED6b62C8af9FB9D8eba54");

const address = "0x8A7016D98d241f9A14beC49EB505BA60005E82AB"

console.log("success connect");

async function execute() {

  const one_eth = web3.utils.toWei(web3.utils.toBN(1));

  const _currentBaseRate = await contract.methods.getRedemptionRate().call();
  const currentBaseRate = web3.utils.toBN(_currentBaseRate);
  console.log("currentBaseRate : "+currentBaseRate);

  const _currentRedemptionRateWithDecay = await contract.methods.getRedemptionRateWithDecay().call();
  const currentRedemptionRateWithDecay = web3.utils.fromWei(web3.utils.toBN(_currentRedemptionRateWithDecay));
  console.log("currentRedemptionRateWithDecay : "+currentRedemptionRateWithDecay);

  const _RedemptionFeeWithDecay = await contract.methods.getRedemptionFeeWithDecay(one_eth).call();
  const RedemptionFeeWithDecay = web3.utils.fromWei(web3.utils.toBN(_RedemptionFeeWithDecay));
  console.log("RedemptionFeeWithDecay : "+RedemptionFeeWithDecay);



  const _currentBorrowingRate = await contract.methods.getBorrowingRate().call();
  const currentBorrowingRate = web3.utils.fromWei(web3.utils.toBN(_currentBorrowingRate));
  console.log("currentBorrowingRate : "+currentBorrowingRate);

  const _currentBorrowingRateWithDecay = await contract.methods.getBorrowingRateWithDecay().call();
  const currentBorrowingRateWithDecay = web3.utils.fromWei(web3.utils.toBN(_currentBorrowingRateWithDecay));
  console.log("currentBorrowingRateWithDecay : "+currentBorrowingRateWithDecay);


}

execute();

