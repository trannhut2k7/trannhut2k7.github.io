console.log("hello world ")

function clr() {
    document.getElementById("Screen").value = "";
}
function Onclick(a) {
    document.getElementById("Screen").value += a ; 
}
function Calculate() {
    document.getElementById("Screen").value = eval(document.getElementById("Screen").value)
}
