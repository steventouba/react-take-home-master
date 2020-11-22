import { combineReducers } from 'redux';
import campaignsReducer from './campaigns_reducer';

const rootReducer = combineReducers({
    campaigns: campaignsReducer,
    
});

export default rootReducer; 