import React from 'react';
import CardHeader from './card_header';
import CardBody from './card_body';

const Card = ({ campaign }) => {

    return (
        <div className="card">
            <CardHeader 
                icon={campaign.campaign_icon_url} 
                name={campaign.campaign_name}
                pay={campaign.pay_per_install}
            />
            <CardBody
                medias={campaign.medias}
            />
        </div>
    )
}

export default Card;