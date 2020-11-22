import React from 'react';

const CardBody = ({ medias }) => {

    return (
        <div className="horizontal-scroll">
            {
                medias.map((media, idx) => <MediaCard key={idx} media={media} />)
            }
        </div>
    )
}

const MediaCard = ({ media }) => {
    const {
        cover_photo_url,
        download_url,
        tracking_link,
        media_type,
    } = media;

    function handleCopy(e) {
        const copyText = document.getElementById(tracking_link);
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        document.execCommand("copy");
        alert("link copied")
    }

    return (
        <div className="media-card">
            <div className="media-preview">
                <img src={cover_photo_url} alt="" />
                {media_type === 'video' && <div className="play-button"><i className="fas fa-play"></i></div>}
            </div>
            <div>
                <button onClick={handleCopy} name="media-button">
                    <i className="fas fa-link"></i>
                    <textarea tabIndex="-1" id={tracking_link} style={{ position: "absolute", left: "-999em" }} value={tracking_link}/>
                </button>
                <a href={download_url} target="_blank" rel="noopener noreferrer" download>
                    <button name="media-button">
                        <i className="fas fa-download"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default CardBody;

