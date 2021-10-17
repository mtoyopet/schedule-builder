window.onload = function () {
  document.querySelector('button').addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {

      let init = {
        method: 'GET',
        async: true,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        'contentType': 'json'
      }
      fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=2021-10-01T10:00:00-07:00&showDeleted=false',
        init
      )
      .then((response) => response.json())
      .then(function(data) {
        let calendarDiv = document.querySelector("#calendarDiv")

        data.items.forEach((item) => {
          if (item.status !== 'cancelled') {
            let calendar = document.createElement("p")
            calendar.innerHTML = `${item.summary}: ${item.start.dateTime} ~ ${item.end.dateTime}`
            calendarDiv.appendChild(calendar)
          }
        })
      })
    })
  })
}
