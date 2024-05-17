let dataEntry = document.querySelector('[data-entry]')


function display(value) {
    dataEntry.value += value
} 

function clearDisplay() {
    dataEntry.value = ""; 
}

function calculate () {
    let query = dataEntry.value
    dataEntry.value = eval(query)
}