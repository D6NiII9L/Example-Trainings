
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

// Introduce user function

function introduceUser(user) {

    return `${user.fName} ${user.lName} is ${user.age} years old.`

}

// Last character finder function

function lastCharString(str = '') {

    const chars = str.replaceAll(' ' , '').split('')

    if (chars.length !== 0){

        return chars[chars.length - 1]

    } else {

        return 'String has zero length'

    }

}

// show characters of string by number function

function charOfString(str = '' , numOfChars = -1) {

    const chars = str.replaceAll(' ' , '').split('')

    let result = ''

    if (chars.length !== 0){

        if (numOfChars === -1) {

            chars.forEach(function (char) {

                result += char

            })

        } else {

            for (let i = 0 ; i < numOfChars ; i++) {

                if (i >= chars.length) {

                    result += '-'

                } else {

                    result += chars[i]

                }

            }

        }

        return result

    } else {

        return 'String has zero length'

    }

}

// Merge array function

function mergeArray(arr1 = [] , arr2 = []) {


    return arr1.concat(arr2)

}

// Vowels characters counter function

function vowelsCount(str = '') {

    const vowels = 'aeiouAEIOU'

    let chars = str.replaceAll(' ' , '').split('')

    if (chars.length !== 0){

        chars = chars.filter(function (char) {

            return vowels.includes(char)

        })

        return chars.length

    } else {

        return 'String has zero length'

    }

}

// Sort array function

function sortArray(arr = []) {

    let result = []

    if (arr.length > 0) {

        for (let i = 0 ; i < arr.length ; i++) {


            if (result.length > 0) {

                for (let j = 0 ; j < result.length ; j++) {

                    if (arr[i] < result[j]) {

                        result.splice(j, 0 , arr[i])

                        break

                    } else if (j === result.length - 1){

                        result.push(arr[i])

                        break

                    }

                }

            } else {

                result.push(arr[i])

            }


        }

        return result

    } else {

        return 'Array has zero length'

    }

}

// Make star function

function makeStar(num) {

    
    for (let i = 1 ; i <= num ; i++) {
        
        let line = ''

        for (let j = 0 ; j < i ; j++) {

            line += '*'

        }

        appentToConsole(line , true)

    }  

    for (let i = num - 1 ; i >= 1 ; i--) {
        
        let line = ''

        for (let j = 0 ; j < i ; j++) {

            line += '*'

        }

        appentToConsole(line , true)

    }

}
