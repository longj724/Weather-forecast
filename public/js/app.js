console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    messageOne.innerHTML = 'Loading...'
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        return response.json()
    }).then((data) => {
        if (data.error) {
            messageOne.innerHTML = data.error
        } else {
            messageOne.innerHTML = data.location
            messageTwo.innerHTML = data.forecast
        }
    })

})