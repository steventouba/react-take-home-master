import React, { useEffect } from 'react';
import Card from './campaign_card/card';

const Main = ({ campaigns, fetchCampaigns}) => {

    useEffect(() => fetchCampaigns(), [])

   const values = Object.values(campaigns);

    return(

        <ul>
            {
                values.map(camp => <Card key={camp.id} campaign={camp} />)
            }
        </ul>
    )
};

export default Main;
