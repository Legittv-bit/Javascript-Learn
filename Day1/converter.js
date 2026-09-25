const exchange_rate = 1325
const pounds_conversion = 2.20462

function nairaToUsd(naira) {
    let UsdAmount = naira / exchange_rate
    return UsdAmount
}

function usdToNaira(usd) {
    let NairaAmount = usd * exchange_rate
    return NairaAmount
}

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit

}

function kgToPounds(kg) {
    let pounds = kg * pounds_conversion
    return pounds
}

console.log(` ${nairaToUsd(2000).toFixed(2)} USD`)
console.log(`${usdToNaira(2000).toFixed(2)} Naira`)
console.log(usdToNaira(nairaToUsd(2000)) === 2000)
console.log(`${celsiusToFahrenheit(100)}°F`)
console.log(`${kgToPounds(51).toFixed(2)} Pounds`)
console.log(0.1 + 0.2)