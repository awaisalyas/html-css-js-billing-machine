
let display = document.getElementById("recipt")
let total = document.getElementById("total")
let arr = []

function products(price){
    arr.push(price)
    display.value += (display.value === "" ? "" : " + ") + price
}
function result(){
    console.log(arr)
    let sumResult = arr.reduce((a,b)=> a + b,0)
    total.value = "$ " + sumResult
}

function clearScreen(){
    arr = []
    display.value = ""
    total.value = ""
}