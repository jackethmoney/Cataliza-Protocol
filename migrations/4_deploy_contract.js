// Truffle migration script for deployment to Ganache
/*
const LUSDToken = artifacts.require("./LUSDToken.sol")
const deploymentHelpers = require("../utils/truffleDeploymentHelpers.js")
const getAddresses = deploymentHelpers.getAddresses
//const connectContracts = deploymentHelpers.connectContracts

module.exports = async function(deployer) {

  await deployer.deploy(LUSDToken, 
    "0xE7C9fBdC6E795025E649e8A2ded0fac0Da60Bb99", // TroveManager
    "0x013051f6D54B91d64F2B8fc5d5080e369b053e17", // StabilityPool
    "0x845A9996FfB00FE2260649Ac6b069eb5Cbe2874D" // BorrowerOperations
  )

  await deployer.then(async () => {
      const lusdToken = await LUSDToken.deployed()

      // Grab contract addresses
      const lusdTokenAddress = await getAddresses(lusdToken, "1")
      console.log('lusdTokenAddress: \n')
      console.log(lusdTokenAddress)
      console.log('\n')

    // Connect contracts to each other
    //await connectContracts(liquityContracts_2, liquityAddresses_2)
     console.log("Done!")
    })
  }  
*/