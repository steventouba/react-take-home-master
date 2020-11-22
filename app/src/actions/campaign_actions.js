import * as Utils from '../utils/utils';

export const RECEIVE_CAMPAIGNS = 'receiveCampaigns';

const receiveCampaigns = (data) => ({
    type: RECEIVE_CAMPAIGNS, 
    data
}); 

export const fetchCampaigns = () => dispatch => Utils.fetchCampaigns()
    .then(
        (campaigns) => dispatch(receiveCampaigns(campaigns))
    )