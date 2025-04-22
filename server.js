let onebtn = document.getElementById("one-btn");
let twobtn = document.getElementById("two-btn");
let threebtn = document.getElementById("three-btn");
let fourbtn = document.getElementById("four-btn");
let fivebtn = document.getElementById("five-btn");
let sixbtn = document.getElementById("six-btn");
let sevenbtn = document.getElementById("seven-btn");
let eightbtn = document.getElementById("eight-btn");
let ninebtn = document.getElementById("nine-btn");
let zerobtn = document.getElementById("zero-btn");
let addbtn = document.getElementById("add-btn");
let subbtn = document.getElementById("sub-btn");
let mulbtn = document.getElementById("mul-btn");
let divbtn = document.getElementById("div-btn");
let equalbtn = document.getElementById("equal-btn");
let clearbtn = document.getElementById("clear-btn");
let input = document.getElementById("input")

onebtn.addEventListener("click", function () {
    input.value += "1";
    console.log("1 clicked");
})

twobtn.addEventListener("click", function () {
    input.value += "2";
    console.log("2 clicked");
})

threebtn.addEventListener("click", function () {
    input.value += "3";
    console.log("3 clicked");
})

fourbtn.addEventListener("click", function () {
    input.value += "4";
    console.log("4 clicked");
})

fivebtn.addEventListener("click", function () {
    input.value += "5";
    console.log("5 clicked");
})

sixbtn.addEventListener("click", function () {
    input.value += "6";
    console.log("6 clicked");
})

sevenbtn.addEventListener("click", function () {
    input.value += "7";
    console.log("7 clicked");
})

eightbtn.addEventListener("click", function () {
    input.value += "8";
    console.log("8 clicked");
})

ninebtn.addEventListener("click", function () {
    input.value += "9";
    console.log("9 clicked");
})

zerobtn.addEventListener("click", function () {
    input.value += "0";
    console.log("0 clicked");
})

addbtn.addEventListener("click", function () {
    input.value += "+";
    console.log("Add clicked");
})

subbtn.addEventListener("click", function () {
    input.value += "-";
    console.log("Subtract clicked");
})

mulbtn.addEventListener("click", function () {
    input.value += "*";
    console.log("Multiply clicked");
})

divbtn.addEventListener("click", function () {
    input.value += "/";
    console.log("Divide clicked");
})

equalbtn.addEventListener("click", function () {
    try {
        input.value = eval(input.value);
        console.log("Equal clicked, result: " + input.value);
    } catch (error) {
        console.error("Error in calculation");
        input.value = "Error";
    }
})

clearbtn.addEventListener("click", function () {
    input.value = "";
    console.log("Clear clicked");
})