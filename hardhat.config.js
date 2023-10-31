require("@nomiclabs/hardhat-truffle4");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
//const INFURA_API_KEY = "KEY";
const INFURA_API_KEY = process.env.INFURA_API_KEY;

//const PRIVATE_KEY = "YOUR SEPOLIA PRIVATE KEY";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    alfajores: {
      url: `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }  
  }
};