require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain minor gloom enrich orange gesture'; 
let testAccounts = [
"0x047d44cb89b906cae42c4387490b97b14a9124f15a5556bb41dc4b6e4cd2ca2b",
"0x65da7522c33d4ddecb3b10b5d6b6595c10fc1ff43c59afa6d7a4c36a25283c02",
"0xd8838eaa9e5dc2aa574c2134dee50fbb065f6cdf599b6427bdb026ad0a1f9991",
"0x0e7c0f9272f4275aa7a6a29ebfb6ac8fb9a63c28e1241b5dd2191006c5ffc6e3",
"0xcc71533b27b1c6246966a1c818c51d6599cb342574e3df1e660235f532210973",
"0x12a2fd94b2c467ac6d35331456391bd3ef3676346f6aa104a68cffb8c50503be",
"0x416c41620550a3b9c604667e4103fb975fa5dc089f4b7aff35a8edc0f21cf4d1",
"0x5aea7ffa945890ddadc97ee58c658311e59871aa2589932330f1d90ae7e0de1e",
"0xd78c885236cef4931ef6d80298ed64fb96ee463ed591c8e2b124f6d247fc6fb7",
"0x54003db09878df314a3a076aff2278dd65138d6d4695da4ce65391839bd73117"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

