require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember erosion include arena flock skill'; 
let testAccounts = [
"0x9a44395fe0d90c079d68309ce0d981941dc0e4d636472fa516b18eb0ba2a4920",
"0xb4424ec6b1fd2a15e3fad816d2a2c8d99153a7348f98a374a847e75fc6f1fc7f",
"0x3de37dfac645d7343a87f4aaec9a8b4aacf5e902881432da4ec13a9d5c07b7a1",
"0x9df1d13bc4351ccc79d50aabdb8a097f82e78554c4730792c557e10fe27c7d8e",
"0xd198376d60cc2bf28a9e136dee9e8c785236852d56f106f1270dce6882b780ce",
"0xce42a9b2be2ae4f8f7442e522ab7aee9518d9804735fc0ffafdfcedc189ba862",
"0x3a0017baf0a1862981a8c76f1c835ffa019e1090d6fd652ec52f109ee3a6da47",
"0x9b2c7bd12f16ff44052df52d1bb4f2cb8f9d2f06f24728439f2d603234411f0d",
"0x86a1f3aff1d5c4ed7023e09b07636e90bce45ddbc134a99a35ad0f254faea7f7",
"0x5c9332b17de6372a8297763eb294fdf054521bc2e636cd8f857aab9ded3a9588"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

