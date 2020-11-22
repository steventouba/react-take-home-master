import React from 'react';

const CardHeader = ({ icon, name, pay }) => {

    return (
        <div className="card-header">
            <div>
                <img src={icon} alt=""/>
            </div>
            <div className="header-info">
                <h3>{name}</h3>
                <h4><strong>{pay}</strong> per install</h4>
            </div>
        </div>
    )
}

export default CardHeader;