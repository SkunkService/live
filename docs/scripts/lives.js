tiktok.live.list().then(streams => {
  const liveStreamElement = document.getElementById('live-stream');
  liveStreamElement.src = streams[0].playUrl;
});
