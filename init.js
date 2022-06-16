
var EthersCallContract = require('./ethers.js');
 
function ethCall(){
  return EthersCallContract.callContract();
}

setInterval(ethCall, 3000);