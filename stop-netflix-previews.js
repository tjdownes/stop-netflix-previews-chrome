DomReady.ready(function() {
  console.warn('Stop NetFlix Previews extension enabled.');
  var timer = setInterval(pausePreviewPlayer, 1000);

  function pausePreviewPlayer() {
    var videoPlayer = document.querySelector(".billboard-row .VideoContainer video");
    console.warn('Checking if NetFlix Previews exist.');
    if(videoPlayer && !videoPlayer.paused) {
      videoPlayer.pause();
      console.warn('NetFlix Previews paused.');
    }
  }
});