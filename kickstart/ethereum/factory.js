import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb54F815ca76333A4b852d06CD16B6f8346C6aB70'
);

export default instance;
