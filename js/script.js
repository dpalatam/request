//form
  const scriptURL = 'https://script.google.com/macros/u/1/s/AKfycbzPpCv0MRBY1C_A1pWIfLflK_UmuT0de2cjNKrwhLEqeYb2lbLT/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

// tab
  function openWin() {
    window.open('https://www.google.com')
  }
