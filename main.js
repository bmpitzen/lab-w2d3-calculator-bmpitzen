var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var divide = document.getElementById("divide")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var times = document.getElementById("times")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var minus = document.getElementById("minus")
var zero = document.getElementById("zero")
var decimal = document.getElementById("decimal")
var plus = document.getElementById("plus")
var clear = document.getElementById("clear")
var equals = document.getElementById("equals")
var display = document.getElementById("display")


seven.addEventListener('click', function(e){
    display.innerText += "7"
  });
eight.addEventListener('click', function(e){
    display.innerText += "8"
  });
nine.addEventListener('click', function(e){
    display.innerText += "9"
  });
divide.addEventListener('click', function(e){
    display.innerText += "/"
  });
four.addEventListener('click', function(e){
    display.innerText += "4"
  });
five.addEventListener('click', function(e){
    display.innerText += "5"
  });
six.addEventListener('click', function(e){
    display.innerText += "6"
  });
times.addEventListener('click', function(e){
    display.innerText += "*"
  });
one.addEventListener('click', function(e){
    display.innerText += "1"
  });
two.addEventListener('click', function(e){
    display.innerText += "2"
  });
three.addEventListener('click', function(e){
    display.innerText += "3"
  });
minus.addEventListener('click', function(e){
    display.innerText += "-"
  });
zero.addEventListener('click', function(e){
    display.innerText += "0"
  });
decimal.addEventListener('click', function(e){
    display.innerText += "."
  });
plus.addEventListener('click', function(e){
    display.innerText += "+"
  });
clear.addEventListener('click', function(e){
    display.innerText = ""
  });
equals.addEventListener('click', function(e){
    display.innerText = eval(display.innerText)
  });