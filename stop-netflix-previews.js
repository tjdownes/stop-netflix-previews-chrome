DomReady.ready(function() {
  console.warn('Stop NetFlix Previews extension enabled.');
  var videoPlayer = document.querySelector(".billboard-row .VideoContainer video");
  videoPlayer.addEventListener("play", pausePreviewPlayer, true);

  function pausePreviewPlayer() {
      videoPlayer.pause();
      console.warn('NetFlix Previews paused.');
  }
});