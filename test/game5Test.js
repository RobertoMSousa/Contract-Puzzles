const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();

    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    // good luck
    // const [owner, address1, address2, address3] = await ethers.getSigners();
    // console.log("🚀  roberto --  ~ owner:", owner.address)
    // console.log("🚀  roberto --  ~ address1:", address1.address)
    // console.log("🚀  roberto --  ~ address2:", address2.address)
    // console.log("🚀  roberto --  ~ address3:", address3.address)

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf"],
    });
  

    await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
