
const textShow = document.getElementById('textShow')


function search() {

    let text = document.getElementById('textInput')

    let search = document.getElementById('searchInput')

    textShow.innerHTML = `${text.value}`

    text.style.visibility = 'hidden'

    textShow.style.visibility = 'visible'

    text = text.value.split('')

    search = search.value.split('')

    let searchSameIndex = 0

    let searchResult = []

    for (i = 0 ; i < text.length ; i++){

        if (text[i] == search[searchSameIndex]) {

            searchSameIndex += 1

            if (searchSameIndex >= (search.length)) {

                searchResult.push([(i - search.length + 1) , i])

                searchSameIndex = 0

            }

        }else {

            searchSameIndex = 0

        }

    }

    let newText = ``

    let indexState = 0

    for (i = 0; i < text.length; i++) {

        if (searchResult.length != 0){

            if (i == searchResult[indexState][0]) {

                newText += `<span class="hilaight">`

            }
        
         }

        newText += text[i]

        if (searchResult.length != 0){
        
            if (i == searchResult[indexState][1]) {

                newText += `</span>`

                searchResult.shift()

            }

        }

    }
    
    textShow.innerHTML = newText

    console.log(newText)


}

function textShowPage() {

    let text = document.getElementById('textInput')

    textShow.innerHTML = `${text.value}`

    text.style.visibility = 'hidden'

    textShow.style.visibility = 'visible'

}

function textPage() {

    let text = document.getElementById('textInput')

    text.style.visibility = 'visible'

    text.focus()

    textShow.style.visibility = 'hidden'

}