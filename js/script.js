//form
  const scriptURL = 'https://script.google.com/macros/u/1/s/AKfycbyVV-6x6agwFJJr8M-bVkBQvTGFh6X_TWoVSRbFvfe4ushvfgO5/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

// tab
  function openWin() {
    window.open('https://www.latam.com')
  }
