const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ae4310b9fb6fb07f5218682dc3764d00/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const probRain = body.currently.precipProbability
            const temp = body.currently.temperature
            const summary = body.daily.data[0].summary
            callback(undefined, summary + ' It is currently ' + temp + ' degrees. There is a ' + probRain + '% chance of rain.')
        }
    })
}

module.exports = forecast