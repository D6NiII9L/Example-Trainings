
const consoleSpace = document.getElementById('console')

const codeInput = document.getElementById('codeinput')

codeInput.focus()

const date = new Date()

appentToConsole(`Time : ${date.getHours()}:${date.getMinutes()}`)

function codeFocus() {

    codeInput.focus()

    document.getElementById('mainSpace').scrollTop = consoleSpace.scrollHeight

}

function appentToConsole(text , isResult = false) {

    const p = document.createElement('p')

    if (isResult) {

        p.innerHTML = `<span><</span>${text}`

        p.style.color = 'hsl(150, 51%, 60%)'

        p.style.padding = '0 15px'

    } else {

        p.innerHTML = `<span>></span>${text}`

    }

    consoleSpace.appendChild(p)

    document.getElementById('mainSpace').scrollTop = consoleSpace.scrollHeight

}

codeInput.addEventListener('keypress' , function (event) {

    if (event.key === 'Enter') {

        const code = codeInput.value
        
        appentToConsole(code)

        codeInput.value = ''

        try {

            const result = eval(code)

            if (result !== undefined) {

                appentToConsole(result , true)

            }

        }catch (e) {

            appentToConsole(e , true)

        }

    }

})



// Function Practis

