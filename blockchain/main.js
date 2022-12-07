const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');    

const myKey = ec.keyFromPrivate('d85d623a0e7efe42e0a16cdb07280cd5372d4b1d211913f006ef86d951090669');
const myWalletAddress = myKey.getPublic('hex');


let highwayCryptCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
highwayCryptCoin.addTransaction(tx1);





console.log('\n Starting the miner...');
highwayCryptCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is', highwayCryptCoin.getBalanceOfAddress(myWalletAddress));

//highwayCryptCoin.chain[1].transactions[0].amount = 10;




console.log('Is chain valid?', highwayCryptCoin.isChainValid());
