window.onload = function () {
  document.querySelector('button').addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      const today = new Date()

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
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${today.toISOString()}`,
        init
      )
      .then((response) => response.json())
      .then(function(data) {
        let calendarDiv = document.querySelector('#calendarDiv')

        data.items.forEach((item) => {
          if (item.status !== 'cancelled') {
            let calendar = document.createElement('p')
            let startDate = new Date(item.start.dateTime).toLocaleString({ timeZone: 'Asia/Tokyo' })
            let endDate = new Date(item.end.dateTime).toLocaleString({ timeZone: 'Asia/Tokyo' })
            calendar.innerHTML = `${item.summary}: ${startDate} ~ ${endDate}`
            calendarDiv.appendChild(calendar)

            
          }
        })
      })
    })
  })
}
