function operator(oper) {
    document.getElementById('display').value +=oper
}
function number(num) {
    document.getElementById('display').value +=num
}

function cler() {
    document.getElementById('display').value = "";
}

function start() {
    document.getElementById('display').value = "0";
}
function sin() {
  display.value=Math.sin(display.value);
}
function cos() {
    display.value=Math.cos(display.value);
}

function tan() {
    display.value=Math.tan(display.value);
}
function DEL() {
 
    display.value=display.value.slice(0, -1);
}

let equal = ()=>{
    try {
        display.value=eval(display.value);
    } catch (error) {
    display.value = 'error';
    }
}

