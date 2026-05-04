basic.forever(function () {
	
})

let stavHry = "pasivní"
let stisklA = false
let stisklB = false

input.onButtonPressed(Button.A, function () {
    if (stavHry == "začala") stisklA = true
})
input.onButtonPressed(Button.B, function () {
    if (stavHry == "začala") stisklB = true
})

function zobrazitHodiny(){
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(2, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
}


input.onButtonPressed(Button.AB, function () {
    const waitTime = randint(3, 6)
    stisklA = false
    stisklB = false

    stavHry = "začala"
    zobrazitHodiny()
    control.runInBackground(() => music.playTone(440, 200))
    basic.pause(waitTime * 1000) 
    
    let pressedA = stisklA
    let pressedB = stisklB


    if(pressedA && pressedB){
        control.runInBackground(() => music.playTone(200, 500))
        basic.showIcon(IconNames.Sad)
        console.log("Oba přepálily")
    }   else if (pressedA && !pressedB){
        control.runInBackground(() => music.playTone(200, 500))
        basic.showString("B")
        console.log("A přepálil, B vyhrál")
    }   else if (pressedB && !pressedA){
        control.runInBackground(() => music.playTone(200, 500))
        basic.showString("A")
        console.log("B přepálil, A vyhrál")
    }   else{
        stavHry = "běží"
        control.runInBackground(() => music.playTone(600, 200))
        basic.showIcon(IconNames.Pitchfork)
        while (!pressedA && !pressedB) {
            pressedA = input.buttonIsPressed(Button.A)
            pressedB = input.buttonIsPressed(Button.B)
            basic.pause(50)
        }
        if (pressedA && pressedB) {
            control.runInBackground(() => music.playTone(440, 500))
            basic.showIcon(IconNames.Square)
            console.log("remíza")
            basic.pause(1000)
        } else if (pressedB && !pressedA){
            control.runInBackground(() => music.playTone(880, 500))
            basic.showString("B")
            console.log("vyhral B")
        } else if (pressedA && !pressedB) {
            control.runInBackground(() => music.playTone(880, 500))
            basic.showString("A")
            console.log("vyhral A") 
    
    }
        
        
    }
    
    
    stavHry = "pasivní"
    }
    
    )

