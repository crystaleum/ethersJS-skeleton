
var EthersHeadsOrTails = require('./ethers.js');
 
function checkOddOrEven(){
  return EthersHeadsOrTails.getToken();
}

setInterval(checkOddOrEven, 16000);