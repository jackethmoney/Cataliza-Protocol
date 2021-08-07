/*
// Truffle migration script for deployment to Ganache

const LQTYStaking = artifacts.require("./LQTYStaking.sol")
const LQTYToken = artifacts.require("./LQTYToken.sol")

//const deploymentHelpers = require("../utils/truffleDeploymentHelpers3.js")
//const getAddresses = deploymentHelpers.getAddresses
//const connectContracts = deploymentHelpers.connectContracts

/*
module.exports = async function(deployer) {
        await deployer.deploy(LQTYStaking)

        await deployer.then(async () => {
          const lqtystaking = await LQTYStaking.deployed()

      // Grab contract addresses
      const lqtystakingAddresses = await getAddresses(lqtystaking, "0")
      console.log('liquityAddresses: \n')
      console.log(lqtystakingAddresses)
      console.log('\n')

    // Connect contracts to each other
    //await connectContracts(liquityContracts_2, liquityAddresses_2)
     console.log("lqtystaking deployed!")

     await lqtyDeployment(deployer, lqtystakingAddresses)
     console.log("lqtytoken deployed!")
      })
  }  


  module.exports = async function(deployer) {

    deployer.deploy(LQTYToken, 
        "0xD9c6d6e16e72aF021E9c4D9e2F501353ea66927F", //_communityIssuanceAddress, 
        "0xE076EaEcD3dDbc6b9960f0B442aF9d96F8868111", // _lqtyStakingAddress,
        "0xD5C1a635dEBC5205936a52Fcdc7744F739655Fd5", // _lockupFactoryAddress,
        "0x8A7016D98d241f9A14beC49EB505BA60005E82AB", // _bountyAddress, Dev2
        "0xD5C9D53b7f245B02D8fDE47ae2e3e02Eec2ca499", // _lpRewardsAddress,
        "0xC52e1488e6d13f398C530E0A52A24AC0f5f3D47b", // _multisigAddress) Defiant
     )

   deployer.then(async () => {
     const lqtytoken = await LQTYToken.deployed()

          // Grab contract addresses
          const lqtytokenAddresses = await getAddresses(lqtytoken, "1")
          console.log('lqtytokenAddresses: \n')
          console.log(lqtytokenAddresses)
          console.log('\n')
        })
    }


const getAddresses = (contracts, check) => {
    if (check == "0") {
        const LQTYStaking = contracts.lqtystaking.address
        return LQTYStaking;
    } else {
        const LQTYToken =lqtytoken.address
        return LQTYToken;
    }


}

/*
// Truffle migration script for deployment to Ganache

const SortedTroves = artifacts.require("./SortedTroves.sol")
const ActivePool = artifacts.require("./ActivePool.sol")
const DefaultPool = artifacts.require("./DefaultPool.sol")
const PriceFeedTestnet = artifacts.require("./PriceFeedTestnet.sol")
const FunctionCaller = artifacts.require("./FunctionCaller.sol")
const TroveManager = artifacts.require("./TroveManager.sol")
const StabilityPool = artifacts.require("./StabilityPool.sol")
const BorrowerOperations = artifacts.require("./BorrowerOperations.sol")
const LUSDToken = artifacts.require("./LUSDToken.sol")

const deploymentHelpers = require("../utils/truffleDeploymentHelpers.js")

const getAddresses = deploymentHelpers.getAddresses
const connectContracts = deploymentHelpers.connectContracts

module.exports = async function(deployer) {
  deployer.deploy(BorrowerOperations)
  deployer.deploy(TroveManager)
  deployer.deploy(StabilityPool)
  deployer.deploy(PriceFeedTestnet)
  deployer.deploy(SortedTroves)
  deployer.deploy(ActivePool)
  deployer.deploy(DefaultPool)
  deployer.deploy(FunctionCaller)

  let borrowerOperations
  let troveManager
  let stabilityPool
  let priceFeedTestnet
  let sortedTroves
  let activePool
  let defaultPool
  let lusdToken
  let functionCaller

  let liquityAddresses_1
  let liquityContracts_1

  await deployer.then(async () => {
     borrowerOperations = await BorrowerOperations.deployed()
     troveManager = await TroveManager.deployed()
     stabilityPool = await StabilityPool.deployed()
     priceFeedTestnet = await PriceFeedTestnet.deployed()
     sortedTroves = await SortedTroves.deployed()
     activePool = await ActivePool.deployed()
     defaultPool = await DefaultPool.deployed()
     functionCaller = await FunctionCaller.deployed()

　　liquityContracts_1 = {
    　borrowerOperations,
    　troveManager,
    　stabilityPool,
      priceFeedTestnet,
      sortedTroves,
      activePool,
      defaultPool,
      functionCaller
  }

    // Grab contract addresses1
  liquityAddresses_1 = await getAddresses(liquityContracts_1, "0")
  console.log('deploy_contracts.js - Deployed contract addresses: \n')
  console.log(liquityAddresses_1)
  console.log('\n')

})

  await deployer.deploy(LUSDToken, 
    liquityAddresses_1.TroveManager,
    liquityAddresses_1.StabilityPool,
    liquityAddresses_1.BorrowerOperations
  )

  await deployer.then(async () => {
  lusdToken = await LUSDToken.deployed()

  let liquityContracts_2 = {
    borrowerOperations,
    troveManager,
    stabilityPool,
    lusdToken,
    sortedTroves,
    priceFeedTestnet,
    activePool,
    defaultPool,
    functionCaller
  }

      // Grab contract addresses
      liquityAddresses_2 = await getAddresses(liquityContracts_2, "1")
      console.log('deploy_contracts.js - Deployed contract addresses: \n')
      console.log(liquityAddresses_2)
      console.log('\n')

    // Connect contracts to each other
    await connectContracts(liquityContracts_2, liquityAddresses_2)
    console.log("DOne!")
    })
  }  

*/
*/