domready(function() {
  console.warn('Stop NetFlix Previews extension enabled.');

  function setTimer() {
    return window.setInterval(function() {
      addPlayerEventListener();
    }, 500)
  }

  var timer = setTimer();

  function addPlayerEventListener() {
    var videoPlayer = document.querySelector(".billboard-row .VideoContainer video");
    if(videoPlayer) {
      videoPlayer.addEventListener("play", pausePreviewPlayer, true);
      window.clearInterval(timer);
      timer = null;
    }
  }

  function pausePreviewPlayer() {
      this.pause();
      console.warn('NetFlix Previews paused.');
  }
});