
# Introduction

The most secure and decentralized way to create the decentralized stablecoin is to build it using BTC as a collateral asset, the most widely accepted, liquid, and trust-minimalized asset. But, due to the technological limitations of Bitcoin blockchain, we haven't seen any outstanding BTC-backed stablecoin out there yet.

On Ethereum, there are a couple of successful decentralized stablecoins such as RAI, FLOAT and LUSD only backed by the trustless crypto-asset such as ETH. Needless to say that none of them adopts BTC as collateral because, at this point, it is almost impossible to migrate BTC on Ethereum trustlessly.

However, the EVM-compatible RSK chain merge-mined by Bitcoin blockchain with the PowPeg bridge enables us to create the decentralized stablecoin collateralized by BTC in a decentralized manner. This is because the Powpeg and the merge-mining ensure the trustlessness and security of RBTC.

Given the above, we decided to build Cataliza.

# Cataliza

Cataliza is the decentralized borrowing protocol that manages USDB, the stablecoin only collateralized by Bitcoin(RBTC). On Cataliza, you can borrow USDB by depositing RBTC at the 110% minimum collateral ratio. 

You can utilize Cataliza and USDB not only for borrowing capital or hedging your portfolio. But also, you can take leverage on your RBTC by looping the borrowing and earning the liquidation rewards by depositing your USDB into the StabilityPool. 

## Cataliza Protocol

Cataliza is the fork of Liquity Protocol, the immutable smartcontract platform that allows users to borrow LUSD Stablecoin backed by ETH on Ethereum. Liquity enables users to borrow stablecoin with a 110% collateralization ratio at a minimum, and it only does accept ETH as a collateral asset.

Thus, compared with the leading borrowing protocol such as Maker, where the minimum collateral ratio is 150%, and you can use several centralized stablecoins as collateral assets, Liquity is much more capital-efficient, scalable, and decentralized.

On Cataliza Protocol, BTC is the collateral asset and USDB ( Bitcoin USD ) is the stablecoin. Another token called CAL (Cataliza) is used to incentivize the participants to contribute to the network. 

The core smartcontract source codes of Cataliza are 99% fork of Liquity Protocol. Only the reward distribution and oracle components are slightly different to ensure sustainability and fairness ( *see below ). 

### Learn about Liquity:
- https://www.liquity.org/
- https://docs.liquity.org/
- https://github.com/liquity

### Explanations of Core Architecture

The explanations about the core mechanism below are the overview. If you want to learn more in detail, please read Liquity's original doc. 

#### - [Borrowing](https://docs.liquity.org/faq/borrowing)

<img width="450" alt="Screen Shot 2021-07-14 at 17 51 53" src="https://user-images.githubusercontent.com/85610830/125633902-81e808cc-d521-4001-a7c3-2ad80d4ecc53.png">

The contract that manages your collateral and debt is called Trove, like Vault in Maker. As mentioned above, you can borrow USDB up to a collateral ratio of 110% against RBTC value in your Trove.

Cataliza allows interest-free borrowing that charges one-time borrowing fees instead of the variable interest rate. Therefore, you don't have to care about the fluctuation in the interest rate while owing the debt position. 

*Note: the borrowing fee is varied and decided algorithmically based on a state variable 'Baserate' and the time passed since the last borrowing event.

#### - [Stability Pool and Liquidation](https://docs.liquity.org/faq/stability-pool-and-liquidations)

<img width="450" alt="Screen Shot 2021-07-14 at 17 59 56" src="https://user-images.githubusercontent.com/85610830/125635098-ed7f17a0-90da-4daf-935a-febc6e3dc2a6.png">

Stability Pool is key to ensuring the security of the entire protocol. It is the source of liquidity to repay debt from liquidatable Troves, recovering the total collateral ratio in the system. 

Anyone can deposit USDB onto Stability Pool to earn the liquidation gains proportional to the size of your USDB deposit in the Stability Pool.

At the same time, Stability Providers can also accrue reward in CAL proportionally, but it also depends on the Kickback Rate set by the frontend app they're using to deposit. 

Under the normal mode, the Troves that falls under the 110% collateral ratio will be liquidated and closed automatically. Anyone can trigger the liquidation function by paying gas fees to earn the liquidation compensation, 0.5% of the liquidated Trove's collateral. 

#### - [Redemptions and USDB Price Stability](https://docs.liquity.org/faq/lusd-redemptions)

Redemption is the mechanism to keep the price of USDB pegged to the dollar and ensure the security of the riskest Trove in the system.

Anyone can call the redeem function and exchange USDB for RBTC at face value ( i.e. 1000USDB for $1000 worth of RBTC ). This RBTC comes from the riskest Trove in the array of Troves in the system. *"Riskest" means the lowest collateral ratio. 

In the example below, the Trove with a collateral ratio of 101.4% at the top of the list will be redeemed first.

<img width="450" alt="Screen Shot 2021-07-14 at 17 59 56" src="https://user-images.githubusercontent.com/85610830/125640635-63ee82bb-ea2a-4e76-ba90-f74555c47138.png">

Under the hood, redemption pays back the debt and recovers the collateral ratio on behalf of the owner of the riskest Trove. At the same time, this mechanism gurantees that 1 USDB can be sold for 1$ worth of RBTC at any time, ensuring the price floor.

*Note: Redemption charges the small fee called redemption fee. This fee is calculated based on the Baserate and the time passed since the last redemption. 


#### - [Frontend Operators](https://docs.liquity.org/faq/frontend-operators)

Anyone can build and offer a frontend app on top of the Cataliza Protocol and earn profit in CAL by setting the fee rates called Kickback rate on the users' USDB provision for stability pool through its frontend app. 

Cataliza dev team will also provide a frontend app at the bootstrap phase (for the first 1~2 years) and compete with external providers. Since 0% of the CAL is pre-mined, the only way for us to get profit is to earn CAL through the contribution of providing the frontend app.

#### - CAL Rewards and Distribution

No pre-mine, no VC, no governance. 

CAL token is not the governance token. Instead, it exists to allocate the protocol revenues to contributors and ensure the sustainability of the protocol in the long run. 

And also, Cataliza team doesn't receive any portion of the first CAL distribution nor give it to VCs as other "DeFi" projects do. 100% of the CAL supply is allocated to the protocol contributors, such as Stability Pool Depositors, USDB/RBTC liquidity providers, and frontend operators. 

The fixed total supply: 21 million

Supply break-down:
- Stability Pool Reward (Stability Pool Depositors and Frontend Providers) : 20,790,000 CAL (99%)
- Liquidity Providers Reward : 210,000 CAL (1%)

<img width="422" alt="Screen Shot 2021-07-11 at 17 38 06" src="https://user-images.githubusercontent.com/85610830/125197461-ce476f00-e26e-11eb-86e1-a603b6783f09.png">

Supply Schedule

<img width="497" alt="Screen Shot 2021-07-11 at 17 39 48" src="https://user-images.githubusercontent.com/85610830/125197503-077fdf00-e26f-11eb-8939-8763aad79eb5.png">


Each year, 10% of the remaining supply in the CommunityIssuance contract is distributed to the contributors.

#### - [Recovery Mode](https://docs.liquity.org/faq/recovery-mode)

Suppose the total collateralization ratio goes below 150%, the protocol triggers the Recovery Mode, where borrowers are prohibited from lowering the collateral ratio. Instead, they are encouraged to increase the ratio by topping up the deposit.

#### - AMM LP Farming

Cataliza offers incentive for the Liquidity Provider in CAL for the certain period of time after launch. 
*An AMM for Lping is yet to be decided.

#### - Oracle

Cataliza will integrate Chainlink as the primary price feeds and MoC Oracle ( or API3 ) as the secondary option if Chainlink doesn't work properly. Since Chainlink hasn't been available on RSK yet, this plan may be changed in the future. 

Oracle is the biggest challenge, a single point of failure risk that Cataliza cannot avoid. 

Thus, users should be aware of the possible risks and damages caused by oracle failures.





