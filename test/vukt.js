var Vukt = artifacts.require("./Vukt.sol");

contract('Vukt', function(accounts) {

  // // version with promises
  // let VuktInst;
  // it("should have decimals set", function() {
  //   return Vukt.deployed().then(function(instance) {
  //     VuktInst = instance;
  //     return VuktInst.decimals.call();
  //   }).then(function(decimals) {
  //     assert.equal(decimals.toNumber(), 18, "decimals wasn't set to 18");
  //   });

  // version with async / await
  let VuktInst;

  it("should have decimals", async function() {
    VuktInst = await Vukt.deployed();
    let decimals = await VuktInst.decimals();
    assert.equal(decimals.toNumber(), 18, "decimals is wrong");
  });

  it("should have a name", async function() {
    let name = await VuktInst.name();
    assert.equal(name, "Validity\'s Useless Kitten Token", "name is wrong");
  });

  it("should have a symbol", async function() {
    let symbol = await VuktInst.symbol();
    assert.equal(symbol, "VUKT", "symbol is wrong");
  });
});
