// Truffle migration script for deployment to Ganache

//connection with node
const Web3 = require('web3');
//const web3 = new Web3("https://public-node.testnet.rsk.co/");
const web3 = new Web3(
    new Web3.providers.HttpProvider('https://public-node.testnet.rsk.co/')
);

const Tx = require('ethereumjs-tx').Transaction
const Common = require('ethereumjs-common').default;
var EthUtil = require('ethereumjs-util');

const dev_address = "0x136a40f97e0D9d6B9437e3B9A986e9B61175849B"
const config = require("../config.json")
const admin = config.PRIVATE_KEY;

//const address = require('./addresses')
const abi = require('./abi');

const execute = async (contract_addresses) => {

const SortedTroves = new web3.eth.Contract(abi.sortedtroves.SortedTroves, contract_addresses.SortedTroves_Address);
const ActivePool = new web3.eth.Contract(abi.activepool.ActivePool, contract_addresses.ActivePool_Address);
const DefaultPool = new web3.eth.Contract(abi.defaultpool.DefaultPool, contract_addresses.DefaultPool_Address);
const FunctionCaller = new web3.eth.Contract(abi.functioncaller.FunctionCaller, contract_addresses.FunctionCaller_Address);
const TroveManager = new web3.eth.Contract(abi.trovemanager.TroveManager, contract_addresses.TroveManager_Address);
const StabilityPool = new web3.eth.Contract(abi.stabilitypool.StabilityPool, contract_addresses.StabilityPool_Address);
const BorrowerOperations = new web3.eth.Contract(abi.borroweroperations.BorrowerOperations, contract_addresses.BorrowerOperations_Address);
const CALStaking = new web3.eth.Contract(abi.lqtystaking.LQTYStaking, contract_addresses.CALStaking_Address);
const CollSurplusPool = new web3.eth.Contract(abi.collsurpluspool.CollSurplusPool, contract_addresses.CollSurplusPool_Address);
const Hinthelpers = new web3.eth.Contract(abi.hinthelpers.Hinthelpers, contract_addresses.HintHelpers_Address);
const CommunityIssuance = new web3.eth.Contract(abi.communityissuance.CommunityIssuance, contract_addresses.CommunityIssuance_Address);
const Unipool = new web3.eth.Contract(abi.unipool.Unipool, contract_addresses.Unipool_Address);

    console.log("Cataliza Connecting Addresses")
/*
    // SortedTroves
    const tx1 = await SortedTroves.methods.setParams(
        web3.utils.toBN("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
        contract_addresses.TroveManager_Address,
        contract_addresses.BorrowerOperations_Address,
        ).encodeABI();

    await sendTx(tx1, contract_addresses.SortedTroves_Address);
    console.log("SortedTroves")

    // TroveManager
    const tx2 = await TroveManager.methods.setAddresses(
        contract_addresses.BorrowerOperations_Address,
        contract_addresses.ActivePool_Address,
        contract_addresses.DefaultPool_Address,
        contract_addresses.StabilityPool_Address,
        contract_addresses.GasPool_Address,
        contract_addresses.CollSurplusPool_Address,
        contract_addresses.PriceFeedTestnet_Address,
        contract_addresses.USDBToken_Address,
        contract_addresses.SortedTroves_Address,
        contract_addresses.CALToken_Address,
        contract_addresses.CALStaking_Address
        ).encodeABI();

    await sendTx(tx2, contract_addresses.TroveManager_Address);
    console.log("Trove Manager")

    // BorrowerOperations 
    const tx3 = await BorrowerOperations.methods.setAddresses(
        contract_addresses.TroveManager_Address,
        contract_addresses.ActivePool_Address,
        contract_addresses.DefaultPool_Address,
        contract_addresses.StabilityPool_Address,
        contract_addresses.GasPool_Address,
        contract_addresses.CollSurplusPool_Address,
        contract_addresses.PriceFeedTestnet_Address,
        contract_addresses.SortedTroves_Address,
        contract_addresses.USDBToken_Address, 
        contract_addresses.CALStaking_Address
        ).encodeABI();

    await sendTx(tx3, contract_addresses.BorrowerOperations_Address);
    console.log("BorrowerOperations")

    // StabilityPool
    const tx4 = await StabilityPool.methods.setAddresses(
        contract_addresses.BorrowerOperations_Address,
        contract_addresses.TroveManager_Address,
        contract_addresses.ActivePool_Address,
        contract_addresses.USDBToken_Address,
        contract_addresses.SortedTroves_Address,
        contract_addresses.PriceFeedTestnet_Address,
        contract_addresses.CommunityIssuance_Address
        ).encodeABI()

    await sendTx(tx4, contract_addresses.StabilityPool_Address);
    console.log("StabilityPool")

    //ActivePool
    const tx5 = await ActivePool.methods.setAddresses(
        contract_addresses.BorrowerOperations_Address,
        contract_addresses.TroveManager_Address,
        contract_addresses.StabilityPool_Address,
        contract_addresses.DefaultPool_Address
        ).encodeABI()
    
    await sendTx(tx5, contract_addresses.ActivePool_Address);
    console.log("ActivePool")


    //DefaultPool
    const tx6 = await DefaultPool.methods.setAddresses(
        contract_addresses.TroveManager_Address,
        contract_addresses.ActivePool_Address,
    ).encodeABI()

    await sendTx(tx6, contract_addresses.DefaultPool_Address);
    console.log("DefaultPool")
*/
    // CALStaking
    const tx7 = await CALStaking.methods.setAddresses(
        contract_addresses.CALToken_Address,
        contract_addresses.USDBToken_Address,
        contract_addresses.TroveManager_Address,
        contract_addresses.BorrowerOperations_Address,
        contract_addresses.ActivePool_Address
    ).encodeABI()

    await sendTx(tx7, contract_addresses.CALStaking_Address);
    console.log("CALStaking")
 /*
    // CollSurplusPool
    const tx8 = await CollSurplusPool.methods.setAddresses(
        contract_addresses.BorrowerOperations_Address,
        contract_addresses.TroveManager_Address,
        contract_addresses.ActivePool_Address
    ).encodeABI()

    await sendTx(tx8, contract_addresses.CollSurplusPool_Address);
    console.log("CollSurplusPool")


    // Hinthelpers
    const tx9 = await Hinthelpers.methods.setAddresses(
        contract_addresses.SortedTroves_Address,
        contract_addresses.TroveManager_Address
    ).encodeABI()

    await sendTx(tx9, contract_addresses.HintHelpers_Address);
    console.log("Hinthelpers")
*/
    // CommunityIssuance
    const tx10 = await CommunityIssuance.methods.setAddresses(
        contract_addresses.CALToken_Address,
        contract_addresses.StabilityPool_Address
    ).encodeABI()

    await sendTx(tx10, contract_addresses.CommunityIssuance_Address);
    console.log("CommunityIssuance")

    // Unipool ( Only after acquring USDB from Trove and LPing on RSK Swap. )
    const tx11 = await Unipool.methods.setParams(
        contract_addresses.CALToken_Address, //address.CALToken,
        "0xB86A3ca1a12c491340EAbB02CEC13B5c33102A90", // RSKSwap LP Token
        31536000 // 31536000 ( 1 year )
    ).encodeABI()

    await sendTx(tx11, contract_addresses.Unipool_Address);
    console.log("Unipool")


  console.log("Done!")
    
  }

  const sendTx = async function(tx, contractAddress) {
    const gasPrice = await web3.eth.getGasPrice();
    const _gasPrice = web3.utils.toBN(gasPrice);
    const nonce = await web3.eth.getTransactionCount(dev_address);

    const txData = {
        nonce: web3.utils.toHex(nonce),
        gasLimit: 0xF4240, // 1000000
        gasPrice: web3.utils.toHex(_gasPrice),  // ?
        to: contractAddress,
        from: dev_address, 
        data: tx,
      }

      const customCommon = Common.forCustomChain(`mainnet`, {
        name: 'rsk testnet', 
        networkId:31, // mainnet: 775, 779
        chainId:31, // mainnet:30
        url: 'https://public-node.testnet.rsk.co/'
      }, 'constantinople', );

      const transaction = new Tx(txData, { common: customCommon})
      console.log("transaction: "+transaction)
      const privateKeyBuffer = EthUtil.toBuffer(admin);
      console.log("privateKeyBuffer: "+privateKeyBuffer)
      transaction.sign(privateKeyBuffer)
      const serializedTx = '0x' + transaction.serialize().toString('hex')
      console.log("serializedTx: "+serializedTx)
      const txHash = await web3.utils.sha3(serializedTx);
      console.log("txHash: "+txHash)
   
      const chianId = await web3.eth.getChainId();

      await web3.eth.sendSignedTransaction(serializedTx, (_err, _res) => {
        if(_err){
            console.error("ERROR: ", _err);
        } else {
            console.log("Success: ", _res);
        }
    }).on('confirmation', (confirmationNumber, receipt) => {
        console.log('=> confirmation: ' + confirmationNumber);
    })
    .on('transactionHash', hash => {
        console.log('=> hash');
        console.log(hash);
    })
    .on('receipt', receipt => {
        console.log('=> reciept');
        console.log(receipt);
    })
    .on('error', console.error);

  }

module.exports = {
  execute: execute
}

