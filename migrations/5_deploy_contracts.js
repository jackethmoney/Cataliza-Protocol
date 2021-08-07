/*
// Truffle migration script for deployment to Ganache

const HintHelpers = artifacts.require("./HintHelpers.sol")
const GasPool = artifacts.require("./GasPool.sol")
const CollSurplusPool = artifacts.require("./CollSurplusPool.sol")
const LockupContractFactory = artifacts.require("./LockupContractFactory.sol")
const CommunityIssuance = artifacts.require("./CommunityIssuance.sol")
const Unipool =  artifacts.require("./Unipool.sol")
const MultiTroveGetter =  artifacts.require("./MultiTroveGetter.sol")

const deploymentHelpers = require("../utils/truffleDeploymentHelpers2.js")
const getAddresses = deploymentHelpers.getAddresses
//const connectContracts = deploymentHelpers.connectContracts

    module.exports = function(deployer) {
        deployer.deploy(HintHelpers)
        deployer.deploy(GasPool)
        deployer.deploy(CollSurplusPool)
        deployer.deploy(LockupContractFactory)
        deployer.deploy(CommunityIssuance)
        deployer.deploy(Unipool)
        deployer.deploy(MultiTroveGetter, 
            "0xE7C9fBdC6E795025E649e8A2ded0fac0Da60Bb99", 
            "0x697a24e5bD50DD6bC637AA7e628Ab50a46C958Ba")
      
        deployer.then(async () => {
          const hintHelpers = await HintHelpers.deployed()
          const gasPool = await GasPool.deployed()
          const collSurplusPool = await CollSurplusPool.deployed()
          const lockupContractFactory = await LockupContractFactory.deployed()
          const communityIssuance = await CommunityIssuance.deployed()
          const unipool = await Unipool.deployed()
          const multiTroveGetter = await MultiTroveGetter.deployed()
      
          const liquityContracts = {
            hintHelpers,
            gasPool,
            collSurplusPool,
            lockupContractFactory,
            communityIssuance,
            unipool,
            multiTroveGetter
          }

      // Grab contract addresses
      const liquityAddresses = await getAddresses(liquityContracts)
      console.log('liquityAddresses: \n')
      console.log(liquityAddresses)
      console.log('\n')

    // Connect contracts to each other
    //await connectContracts(liquityContracts_2, liquityAddresses_2)
     console.log("Done!")
    })
  }  

*/