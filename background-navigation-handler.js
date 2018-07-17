chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes('https://www.netflix.com')) {
      chrome.tabs.sendMessage( tabId, {
        message: 'tab-changed'
      })
    }
  }
);
