const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const keytar = require('keytar');

//const provider = new HDWalletProvider(
//  '12 word mnemonic',
//  'https://rinkeby.infura.io/v3/409835af68c542ddb273ba88f25e92cd'
//);
//const web3 = new Web3(provider);

const deploy = async () => {

  const provider = new HDWalletProvider(
      await keytar.getPassword('HDWallet', 'Jx'),
      'https://rinkeby.infura.io/v3/409835af68c542ddb273ba88f25e92cd'
    );

  const web3 = new Web3(await provider);

  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
