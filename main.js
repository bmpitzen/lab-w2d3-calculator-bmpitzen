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

function checkDisplay(number){
    if (display.classList.contains ("entered")){
        display.innerText = "";
        display.innerText += number;
        display.classList.remove ("entered");
    } else {
    display.innerText += number
    }
}


seven.addEventListener('click', function(e){
    checkDisplay("7")
});

eight.addEventListener('click', function(e){
    checkDisplay("8")});

nine.addEventListener('click', function(e){
    checkDisplay("9")});

divide.addEventListener('click', function(e){
    display.innerText += "/"
  });

four.addEventListener('click', function(e){
    checkDisplay("4")});

five.addEventListener('click', function(e){
    checkDisplay("5")});

six.addEventListener('click', function(e){
    checkDisplay("6")});

times.addEventListener('click', function(e){
    display.innerText += "*"
  });

one.addEventListener('click', function(e){
    checkDisplay("1")});

two.addEventListener('click', function(e){
    checkDisplay("2")});

three.addEventListener('click', function(e){
    checkDisplay("3")});

minus.addEventListener('click', function(e){
    display.innerText += "-"
  });

zero.addEventListener('click', function(e){
    checkDisplay("0")});

decimal.addEventListener('click', function(e){
    checkDisplay(".")});

plus.addEventListener('click', function(e){
    display.innerText += "+"
  });

clear.addEventListener('click', function(e){
    display.innerText = "";
    display.classList.remove ("entered");
  });

equals.addEventListener('click', function(e){
    try {
        display.innerText = eval(display.innerText)
        display.classList.add ("entered")
    } catch {
        display.innerText = "ERROR"
    }
  });