const { ethers } = require("ethers");
    
class EthersJS {
    constructor(hostname) {
        this.hostname = hostname || 'https://polygon-mainnet.infura.io/v3/';
    }
}
module.exports.callContract = async () => {
        const provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/7b429349618a46cb8eea194dc7f06b4d');
          // You can also use an ENS name for the contract address
          const contractAddress = '0x54366D719dE364249bEd203115cc116ef8d4DD8f';
          // The ERC-20 Contract ABI, which is a common contract interface
          // for tokens (this is the Human-Readable ABI format)
          const contractAbi = [
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "blockMode",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      }
    ],
    "name": "PhaseOverride",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getBlockMode",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
];

          // The Contract object
          const theContract = new ethers.Contract(contractAddress, contractAbi, provider);
          // Get the ERC-20 token name
          // console.log(await theContract.name());
          // 'gem'

          // Get the ERC-20 token symbol (for tickers and UIs)
          // console.log(await theContract.symbol());
          // 'gem'

          // Get the balance of an address 
          // block_type = await theContract.getLastBlockTimeType();
          //document.getElementById("wallet_contract_balance").innerHTML = ethers.utils.formatUnits(balance, 18);

          let theResult = await theContract.getBlockMode();
          console.log(theResult.toString());
};

EthersJS.getToken = EthersJS;
