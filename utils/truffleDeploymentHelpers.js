
const SortedTroves = artifacts.require("./SortedTroves.sol")
const TroveManager = artifacts.require("./TroveManager.sol")
const PriceFeedTestnet = artifacts.require("./PriceFeedTestnet.sol")
const LUSDToken = artifacts.require("./LUSDToken.sol")
const ActivePool = artifacts.require("./ActivePool.sol");
const DefaultPool = artifacts.require("./DefaultPool.sol");
const StabilityPool = artifacts.require("./StabilityPool.sol")
const FunctionCaller = artifacts.require("./FunctionCaller.sol")
const BorrowerOperations = artifacts.require("./BorrowerOperations.sol")

const deployLiquity = async () => {
  const priceFeedTestnet = await PriceFeedTestnet.new()
  const sortedTroves = await SortedTroves.new()
  const troveManager = await TroveManager.new()
  const activePool = await ActivePool.new()
  const stabilityPool = await StabilityPool.new()
  const defaultPool = await DefaultPool.new()
  const functionCaller = await FunctionCaller.new()
  const borrowerOperations = await BorrowerOperations.new()
  const lusdToken = await LUSDToken.new(
    troveManager.address,
    stabilityPool.address,
    borrowerOperations.address
  )
  DefaultPool.setAsDeployed(defaultPool)
  PriceFeedTestnet.setAsDeployed(priceFeedTestnet)
  LUSDToken.setAsDeployed(lusdToken)
  SortedTroves.setAsDeployed(sortedTroves)
  TroveManager.setAsDeployed(troveManager)
  ActivePool.setAsDeployed(activePool)
  StabilityPool.setAsDeployed(stabilityPool)
  FunctionCaller.setAsDeployed(functionCaller)
  BorrowerOperations.setAsDeployed(borrowerOperations)

  const contracts = {
    priceFeedTestnet,
    lusdToken,
    sortedTroves,
    troveManager,
    activePool,
    stabilityPool,
    defaultPool,
    functionCaller,
    borrowerOperations
  }
  return contracts
}

const getAddresses = (contracts, check) => {
  if ( check == "0" ) {
    return {
      BorrowerOperations: contracts.borrowerOperations.address,
      TroveManager: contracts.troveManager.address,
      StabilityPool: contracts.stabilityPool.address,
      PriceFeedTestnet: contracts.priceFeedTestnet.address,
      SortedTroves: contracts.sortedTroves.address,
      ActivePool: contracts.activePool.address,
      DefaultPool: contracts.defaultPool.address,
      FunctionCaller: contracts.functionCaller.address
    }
  } else if ( check == "1" ){
    return {
      LUSDToken: contracts.lusdToken.address,
    }
  }

}

// Connect contracts to their dependencies
const connectContracts = async (contracts, addresses) => {
  // set TroveManager addr in SortedTroves
  await contracts.sortedTroves.setTroveManager(addresses.TroveManager)
  console.log("SortedTroves")

  // set contract addresses in the FunctionCaller 
  await contracts.functionCaller.setTroveManagerAddress(addresses.TroveManager)
  await contracts.functionCaller.setSortedTrovesAddress(addresses.SortedTroves)
  console.log("FunctionCaller")

  // set TroveManager addr in PriceFeed
  await contracts.priceFeedTestnet.setTroveManagerAddress(addresses.TroveManager)
  console.log("PriceFeed")

  // set contracts in the Trove Manager
  await contracts.troveManager.setLUSDToken(addresses.LUSDToken)
  await contracts.troveManager.setSortedTroves(addresses.SortedTroves)
  await contracts.troveManager.setPriceFeed(addresses.PriceFeedTestnet)
  await contracts.troveManager.setActivePool(addresses.ActivePool)
  await contracts.troveManager.setDefaultPool(addresses.DefaultPool)
  await contracts.troveManager.setStabilityPool(addresses.StabilityPool)
  await contracts.troveManager.setBorrowerOperations(addresses.BorrowerOperations)
  console.log("Trove Manager")

  // set contracts in BorrowerOperations 
  await contracts.borrowerOperations.setSortedTroves(addresses.SortedTroves)
  await contracts.borrowerOperations.setPriceFeed(addresses.PriceFeedTestnet)
  await contracts.borrowerOperations.setActivePool(addresses.ActivePool)
  await contracts.borrowerOperations.setDefaultPool(addresses.DefaultPool)
  await contracts.borrowerOperations.setTroveManager(addresses.TroveManager)
  console.log("BorrowerOperations")

  // set contracts in the Pools
  await contracts.stabilityPool.setActivePoolAddress(addresses.ActivePool)
  await contracts.stabilityPool.setDefaultPoolAddress(addresses.DefaultPool)

  await contracts.activePool.setStabilityPoolAddress(addresses.StabilityPool)
  await contracts.activePool.setDefaultPoolAddress(addresses.DefaultPool)

  await contracts.defaultPool.setStabilityPoolAddress(addresses.StabilityPool)
  await contracts.defaultPool.setActivePoolAddress(addresses.ActivePool)
  console.log("Pools")
}

const connectEchidnaProxy = async (echidnaProxy, addresses) => {
  echidnaProxy.setTroveManager(addresses.TroveManager)
  echidnaProxy.setBorrowerOperations(addresses.BorrowerOperations)
}

module.exports = {
  connectEchidnaProxy: connectEchidnaProxy,
  getAddresses: getAddresses,
  deployLiquity: deployLiquity,
  connectContracts: connectContracts
}
