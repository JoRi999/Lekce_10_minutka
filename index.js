let start = (event) => { 

    event.preventDefault()

    let time = Number(document.querySelector(".time-input").value)
    
    
    let secondsElm = document.querySelector(".alarm__seconds")

    secondsElm.textContent = String(time)
    
    let alarmElm = document.querySelector(".alarm")


    let countDown = () => {
        if (time > 0) {
            time = time - 1
            secondsElm.textContent = String(time)
        }
        if (time <= 0) {
            clearInterval(countDown)
            alarmElm.classList.add('alarm--ring')
            document.querySelector('audio').play()
            
        }
    }

    let interval = setInterval(countDown, 1000)

}

const formElm = document.querySelector('.controls')
formElm.addEventListener('submit', start)


// Nevím, jak přimět minutku, aby v čase 0 přestala zvonit (bez přidání dalšího tlačítka Stop např.)

