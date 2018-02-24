
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    'id':'savepano',
    'contexts': ["all"],
    'title': '下载全景图'
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if(info.menuItemId == 'savepano'){
    chrome.tabs.executeScript(tab.id, { file: 'getUrl.js' }, function (results) {
      console.log(results)
      if (results && results[0] && results[0].length) {
        results[0].forEach(function(url) {
          chrome.downloads.download({
            url: url,
            conflictAction: 'uniquify',
            saveAs: false
          });
        });
      }
    });
  }
});
