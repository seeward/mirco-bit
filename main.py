def on_forever():
    for index in range(5):
        led.plot(index, 0)

        
basic.forever(on_forever)
