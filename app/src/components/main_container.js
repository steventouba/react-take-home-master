import { connect } from "react-redux";
import { fetchCampaigns } from '../actions/campaign_actions';
import Main from './main';

const mapStateToProps = (state) => {

    return {
        campaigns: state.campaigns
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchCampaigns: () => dispatch(fetchCampaigns()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main); 