let humedad = 0
basic.forever(function () {
    humedad = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(humedad)
})
