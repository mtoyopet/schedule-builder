window.calenderList = []

// chrome.runtime.runMessage.addListener(function(request, sender, sendResponse) {
//   window.calenderList
// })

chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({ url: 'index.html' })
})

