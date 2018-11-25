import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa507bc41e2EE13b0D3B73D415f573a961b51da68'
);

export default instance;
