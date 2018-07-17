domready(function() {
  console.warn('Stop NetFlix Previews extension enabled.');

  //may as well hide the preview box.
  var playerContainer = document.querySelector('.billboard-row');
  var mainView = document.querySelector('.mainView');

  playerContainer.style.display = 'none';
  mainView.style.marginTop = "50px";

  function setTimer() {
    return window.setInterval(function() {
      addPlayerEventListener();
    }, 500)
  }

  var timer = setTimer();

  function addPlayerEventListener() {
    var videoPlayer = document.querySelector('.billboard-row .VideoContainer video');
    if(videoPlayer) {
      videoPlayer.pause();
      videoPlayer.addEventListener('play', pausePreviewPlayer, true);
      window.clearInterval(timer);
      timer = null;
      // listen for navigation changes
    }
  }

  function pausePreviewPlayer() {
    this.pause();
  }

  chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if (request.message === 'tab-changed') {
      timer = setTimer();
    }
  });
});
