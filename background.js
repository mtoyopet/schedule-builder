var calenderList = []

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  request.items.forEach((item, index) => {
    calenderList[index] = { summary: item.summary, start: item.start, end: item.start }
  })
})

chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({ url: 'index.html' })
})

