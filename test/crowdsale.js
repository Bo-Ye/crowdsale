const Crowdsale = artifacts.require('Crowdsale')

contract('Crowdsale', async accounts => {
  it('should set beneficiary as first account', async () => {
    let instance = await Crowdsale.deployed()
    let beneficiary = await instance.beneficiary.call()
    assert.equal(beneficiary, accounts[0])
  })
})
