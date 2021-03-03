const { networks } = require("../../core/truffle-config");

const Router = artifacts.require('UniswapV2Router02.sol')
const WETH = artifacts.require('WETH.sol')
module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0x9fd9BD17cA54153ae75bFCf57d152FCD66F4dc2c'
   
    if(network==='mainnet') {
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2') 
    } else {
        await deployer.deploy(WETH)
        weth = await WETH.deployed()
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
}
