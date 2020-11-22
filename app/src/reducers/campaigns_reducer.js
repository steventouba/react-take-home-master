import { RECEIVE_CAMPAIGNS } from '../actions/campaign_actions';

const campaignsReducer = (state = {}, action) => {
    const nextState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_CAMPAIGNS:
            action.data.campaigns.forEach(camp => nextState[camp.id] = camp);
            return nextState;
        default:
            return state;
    }
};

export default campaignsReducer;
