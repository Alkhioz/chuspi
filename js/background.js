chrome.runtime.onInstalled.addListener(() => {
    chrome.browserAction.setBadgeText({ text: 'ON' });
    chrome.browserAction.setBadgeBackgroundColor({ color: '#46f193' });
});