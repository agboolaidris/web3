//https://eth-ropsten.alchemyapi.io/v2/KAyNoiy6qR02Aw-wEpCjMQu7yvgMqJXk
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/KAyNoiy6qR02Aw-wEpCjMQu7yvgMqJXk",
      accounts: [
        "aa7bd80dc96b79797e4e59bfc70e33be43516f9a560323c57ee1ed3107879de2",
      ],
    },
  },
};
