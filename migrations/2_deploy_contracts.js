var MyToken = artifacts.require('./MyToken.sol')
var Crowdsale = artifacts.require('./Crowdsale.sol')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(MyToken, 100)
  deployer.deploy(Crowdsale, accounts[0], 100, 100, 1, MyToken.address)
}
