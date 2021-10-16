document.getElementById('authorize_button').addEventListener('click', authorize, false)

function authorize () {
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    console.log
  })
}