//form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxcQCMMIbXo7Y_Zeecoi5ofXDmUwr4g78yM2aaGNpPLWTWZuRTw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

//open tab
function openWin() {
  window.open('../solicitud/thanks.html')
}
/*
window.setInterval(ut, 1000);
function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}
*/

function test() {
  x = Date()
  document.getElementById("datepicker").value = x;
};
test();
