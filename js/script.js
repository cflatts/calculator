//getting document nodes
var output = document.querySelector('.functionOutput')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')
var equals = document.querySelector('#equals')
var minus = document.querySelector('#subtract')
var plus = document.querySelector('#add')
var times = document.querySelector('#multiply')
var divide = document.querySelector('#divide')

var displayInput = function(evt) {
    var inputNode = evt.target
    var inputData = inputNode.innerHTML
    output.innerHTML = inputData
}

//adding event listeners
one.addEventListener('click', displayInput)
two.addEventListener('click', displayInput)
three.addEventListener('click', displayInput)
four.addEventListener('click', displayInput)
five.addEventListener('click', displayInput)
six.addEventListener('click', displayInput)
seven.addEventListener('click', displayInput)
eight.addEventListener('click', displayInput)
nine.addEventListener('click', displayInput)

