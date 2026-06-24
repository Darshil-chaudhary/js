let output = document.getElementById("output");

function checkEvenOdd() {
    let num = Number(document.getElementById("num").value);

    if (num % 2 === 0) {
        output.innerHTML = `${num} is Even`;
    } else {
        output.innerHTML = `${num} is Odd`;
    }
}

function table() {
    let num = Number(document.getElementById("num").value);

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${num} × ${i} = ${num * i}<br>`;
    }

    output.innerHTML = result;
}

function sumNumbers() {
    let num = Number(document.getElementById("num").value);

    let i = 1;
    let sum = 0;

    while (i <= num) {
        sum += i;
        i++;
    }

    output.innerHTML = `Sum = ${sum}`;
}

function countDown() {
    let num = Number(document.getElementById("num").value);

    let result = "";
    let i = num;

    do {
        result += i + "<br>";
        i--;
    } while (i >= 1);

    output.innerHTML = result;
}