
// Truffle migration script for deployment to Ganache

// not be able to separate functions to ensure inheritances btw contracts
// an idea is to create global variables and two module.exports functions. 
// don't do that this time, though.

const SortedTroves = artifacts.require("./SortedTroves.sol")
const ActivePool = artifacts.require("./ActivePool.sol")
const DefaultPool = artifacts.require("./DefaultPool.sol")
const PriceFeedTestnet = artifacts.require("./PriceFeedTestnet.sol")
const FunctionCaller = artifacts.require("./FunctionCaller.sol")
const TroveManager = artifacts.require("./TroveManager.sol")
const StabilityPool = artifacts.require("./StabilityPool.sol")
const BorrowerOperations = artifacts.require("./BorrowerOperations.sol")
const USDBToken = artifacts.require("./LUSDToken.sol")

const HintHelpers = artifacts.require("./HintHelpers.sol")
const GasPool = artifacts.require("./GasPool.sol")
const CollSurplusPool = artifacts.require("./CollSurplusPool.sol")
const CommunityIssuance = artifacts.require("./CommunityIssuance.sol")
const Unipool =  artifacts.require("./Unipool.sol")
const MultiTroveGetter =  artifacts.require("./MultiTroveGetter.sol")

const CALStaking = artifacts.require("./LQTYStaking.sol")
const CALToken = artifacts.require("./LQTYToken.sol")

const setAddress = require("../scripts2/setAddresses.js")
const execute = setAddress.execute;
//const getAddresses = deploymentHelpers.getAddresses
//const connectContracts = deploymentHelpers.connectContracts

let SortedTroves_Address;
let ActivePool_Address;
let DefaultPool_Address;
let PriceFeedTestnet_Address;
let FunctionCaller_Address;

let TroveManager_Address;
let StabilityPool_Address;
let BorrowerOperations_Address;
let USDBToken_Address;
let HintHelpers_Address;

let GasPool_Address;
let CollSurplusPool_Address;
let CommunityIssuance_Address;
let Unipool_Address;
let MultiTroveGetter_Address;

let CALStaking_Address;
let CALToken_Address;

module.exports = async function(deployer) {
　/*
  deployer.deploy(BorrowerOperations)

  deployer.deploy(TroveManager)
  deployer.deploy(StabilityPool)
  deployer.deploy(PriceFeedTestnet)
  deployer.deploy(SortedTroves)
  deployer.deploy(ActivePool)  
  deployer.deploy(DefaultPool)
  deployer.deploy(FunctionCaller)

  deployer.deploy(HintHelpers)
  deployer.deploy(GasPool)
  deployer.deploy(CollSurplusPool)
  deployer.deploy(Unipool)
  deployer.deploy(CALStaking)
  deployer.deploy(CommunityIssuance)*/


  await deployer.then(async () => {
　/*
     borrowerOperations = await BorrowerOperations.deployed()

     troveManager = await TroveManager.deployed()
     stabilityPool = await StabilityPool.deployed()
     priceFeedTestnet = await PriceFeedTestnet.deployed()
     sortedTroves = await SortedTroves.deployed()
     activePool = await ActivePool.deployed()

     defaultPool = await DefaultPool.deployed()
     functionCaller = await FunctionCaller.deployed()

     hintHelpers = await HintHelpers.deployed()
     gasPool = await GasPool.deployed()
     collSurplusPool = await CollSurplusPool.deployed()   
     unipool = await Unipool.deployed()
     calStaking = await CALStaking.deployed()
     communityIssuance = await CommunityIssuance.deployed()  */


     BorrowerOperations_Address = "0x1389e63d49b9cA9f55164Cb7E1b3256Ee9E5C6c8"; // borrowerOperations.address;
     TroveManager_Address = "0xF6345B9b99E0c42DB33ED6b62C8af9FB9D8eba54"; // troveManager.address;
     StabilityPool_Address = "0xFfAEAFD6F026448ebDdD7cAE93b262137f2215E1"; // stabilityPool.address;
     PriceFeedTestnet_Address = "0x5DA01ABDE99bf9452962A552979891d06375A898"; // priceFeedTestnet.address;
     SortedTroves_Address = "0x30e06F1eA8BbD250f6f7af2998BAB10d014f4987"; // borrowerOperations.address;
     ActivePool_Address = "0xF39D187B1c90622099d84C80A796e0603137CDAC"; // activePool.address;
     DefaultPool_Address = "0x241F8fF7CfbCadCF3d0360a533Ef99B020B5Ba04"; // defaultPool.address;
     FunctionCaller_Address = "0x88e606237Ef8adf7E8553046217D64fB9691dd98"; // functionCaller.address;

     HintHelpers_Address = "0xBb9F7c212619cE8cA2130Ad7E60bC71dCce8411E"; // hintHelpers.address;
     GasPool_Address = "0xe9404C58183469cC81440D5C272e492Aa0c3D1f8"; // gasPool.address;
     CollSurplusPool_Address = "0xcd39A1dc01944ba7c179831d0dabcac4eAfF70E7"; // collSurplusPool.address;
     CommunityIssuance_Address = "0x9AaE064BbB3e397C5aBdCBd1e9e4055546958cda"; // communityIssuance.address;
     Unipool_Address = "0x802368EFC8bB45fdBB7F180d9F55fe0C0D070Af8"; // unipool.address;
     CALStaking_Address = "0x80Ce2Bd70F3b2a8aD51A3c5d057EE27998D5A516"; // calStaking.address;

})

/*
    await deployer.deploy(MultiTroveGetter, 
      TroveManager_Address, // catalisaAddresses_1.TroveManager, 
      SortedTroves_Address  // catalisaAddresses_1.SortedTroves
      )
    await deployer.deploy(CALToken, 
      CommunityIssuance_Address, // catalisaAddresses_1.CommunityIssuance, //_communityIssuanceAddress, 
      CALStaking_Address, // catalisaAddresses_1.CALStaking, // _calStakingAddress,
      Unipool_Address // catalisaAddresses_1.Unipool, // _lpRewardsAddress,
    )
    await deployer.deploy(USDBToken, 
      TroveManager_Address, // catalisaAddresses_1.TroveManager,
      StabilityPool_Address, // catalisaAddresses_1.StabilityPool,
      BorrowerOperations_Address  // catalisaAddresses_1.BorrowerOperations
    )
*/



   let contract_addresses;

    await deployer.then(async () => {
/*
      multiTroveGetter = await MultiTroveGetter.deployed()
      usdbToken = await USDBToken.deployed()
          calToken = await CALToken.deployed() 
*/


     MultiTroveGetter_Address = "0x48161F95E47C0d60cAdF7A0076E0E36E4D0D3c45"; // multiTroveGetter.address;
     CALToken_Address = "0xB11a132F4415a06A87ECe02cb0887a32AdF740A1"; // calToken.address;
     USDBToken_Address = "0x2e4A9075507b91378875550646f40F0Dc79c2d91"; // usdbToken.address;

     console.log("Trove Manager Address:"+TroveManager_Address);

    contract_addresses = {
     BorrowerOperations_Address,
     TroveManager_Address,
     StabilityPool_Address,
     PriceFeedTestnet_Address,
     SortedTroves_Address,
     ActivePool_Address,
     DefaultPool_Address,
     FunctionCaller_Address,
     HintHelpers_Address,
     GasPool_Address,
     CollSurplusPool_Address,
     CommunityIssuance_Address,
     Unipool_Address,
     CALStaking_Address,
     MultiTroveGetter_Address,
     CALToken_Address,
     USDBToken_Address
    }

        })

    await execute(contract_addresses);
  }  


 //const deploy_2 = async (catalisaAddresses_1, deployer, MultiTroveGetter, CALToken, USDBToken) => {

/*


      catalisaContracts_2 = {
        multiTroveGetter,
        lQTYToken,
        usdbToken
      }
    
          // Grab contract addresses
      catalisaAddresses_2 = await getAddresses(catalisaContracts_2, "1")
          console.log('deploy_contracts.js - Deployed contract addresses: \n')
          console.log(catalisaAddresses_2)
          console.log('\n')


  module.exports = async function(deployer) {


  }


  const getAddresses = (contracts, check) => {
    if (check == "0") {
      return {
        /*
        BorrowerOperations: contracts.borrowerOperations.address,
        TroveManager: contracts.troveManager.address,
        StabilityPool: contracts.stabilityPool.address,
        PriceFeedTestnet: contracts.priceFeedTestnet.address,
        SortedTroves: contracts.sortedTroves.address,
        ActivePool: contracts.activePool.address,
        DefaultPool: contracts.defaultPool.address,
        FunctionCaller: contracts.functionCaller.address,

        HintHelpers: contracts.hintHelpers.address,
        GasPool: contracts.gasPool.address,
        CollSurplusPool: contracts.collSurplusPool.address,
        CommunityIssuance: contracts.communityIssuance.address,
        Unipool: contracts.unipool.address,
        CALStaking: contracts.lQTYStaking.address

      }
    } else {
      return {
        USDBToken: contracts.lUSDToken.address,
        MultiTroveGetter: contracts.multiTroveGetter.address,
        CALToken: contracts.lQTYToken.address
      }
    }
    }
    */