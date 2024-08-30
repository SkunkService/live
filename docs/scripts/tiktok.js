const tiktok = new TikTokSDK({
  apiKey: 'awmfvaljwenozzuz'
});

tiktok.live.list()
  .then(streams => {
    console.log('Live streams:', streams);
  })
  .catch(error => {
    console.error('Error fetching live streams:', error);
  });
