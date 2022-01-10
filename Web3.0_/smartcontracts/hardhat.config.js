//https://eth-ropsten.alchemyapi.io/v2/6vrbSiu06gRg3E1Qo5kJ7qGFOiEYSitb

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/6vrbSiu06gRg3E1Qo5kJ7qGFOiEYSitb',
      accounts:[ 'f2d15c2b811fb3a1b77f6085213bb5ea26289270802b3f0a5ffd65f84bb285c0' ]

    }
  }
  
} 