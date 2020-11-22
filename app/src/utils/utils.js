export const fetchCampaigns = () => (
    fetch("https://www.plugco.in/public/take_home_sample_feed")
        .then(response => response.json())
); 