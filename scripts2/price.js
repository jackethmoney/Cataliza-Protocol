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
const abi = require('../abi');
const contract = new web3.eth.Contract(abi.pricefeedtestnet.PriceFeedTestnet, contractAddress);

const address = "0x8A7016D98d241f9A14beC49EB505BA60005E82AB"

console.log("success connect");

async function execute() {

  const _currentPrice = await contract.methods.getPrice().call();
  const currentPrice = web3.eth.fromWei(web3.utils.toBN(_currentPrice));
  console.log("current balance : "+currentPrice);

  //const tx = await contract.methods.convertBTCintoSATS();
  const tx = await contract.methods.setPrice(web3.utils.toBN(web3.utils.toWei("32000"))).encodeABI();
  const gasPrice = await web3.eth.getGasPrice();
  const _gasPrice = web3.utils.toBN(gasPrice);
  console.log("_gasPrice :"+_gasPrice);

  console.log("tx :"+tx);

  const nonce = await web3.eth.getTransactionCount(address);
  console.log("nonce :"+nonce);

   const txData = {
     nonce: web3.utils.toHex(nonce),
     gasLimit: 0x186A0, // 100000
     gasPrice: web3.utils.toHex(_gasPrice),  // ?
     to: contractAddress,
     from: address, 
     data: tx,
     //value: 0.01
     //value: web3.utils.toHex("10000000000000000"), // 0.01
     //chainId: 31
   }

   const customCommon = Common.forCustomChain(`mainnet`, {
       name: 'rsk testnet', 
       networkId:31, // mainnet: 775, 779
       chainId:31, // mainnet:30
       url: 'https://public-node.testnet.rsk.co/'
    }, 'constantinople', );

   console.log("txData :"+txData);
   
   //const transaction = new Tx(txData, {'chain':'ropsten'})
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
   console.log("chianId: "+chianId)
   //const receipt = await web3.eth.getTransactionReceipt(txHash);

   await web3.eth.sendSignedTransaction(serializedTx, (_err, _res) => {
    if(_err){
        console.error("ERROR: ", _err);
    } else {
        console.log("Success: ", _res);
    }})
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

execute();