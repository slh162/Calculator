function display(val) {
    document.getElementById('inp').value+=val
    return val

}
function result(x) {
    let x = document.getElementById('inp').value
    let y = eval(x);

    document.getElementById('inp').value = y

    return y
    
}
function clearScreen(){

    document.getElementById('inp').value = '0'

}