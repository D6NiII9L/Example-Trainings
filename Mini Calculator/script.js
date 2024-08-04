
const resultSpace = document.getElementById('resultSpace')


function changeNums() {

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    console.log(num2);

    if (num2 == '') {

        num2 = 0

    }else if (num1 == '') {

        num1 = 0

    }

    num1 = Number(num1)

    num2 = Number(num2)

    resultSpace.innerHTML = `<h3 class="result">${num1} + ${num2} = ${num1 + num2}</h3>
                            <h3 class="result">${num1} - ${num2} = ${num1 - num2}</h3>
                            <h3 class="result">${num1} * ${num2} = ${num1 * num2}</h3>
                            <h3 class="result">${num1} / ${num2} = ${num1 / num2}</h3>`


}