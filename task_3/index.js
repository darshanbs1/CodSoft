let result = document.getElementById('result');

function insertchar(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deletechar() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let answer = eval(result.value);
    result.value = answer;
}