function playFizzBuzz() {
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultDiv.innerHTML += 'FizzBuzz<br>';
        } else if (i % 3 === 0) {
            resultDiv.innerHTML += 'Fizz<br>';
        } else if (i % 5 === 0) {
            resultDiv.innerHTML += 'Buzz<br>';
        } else {
            resultDiv.innerHTML += i + '<br>';
        }
    }
}