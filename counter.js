function count() {
    let counted =  parseInt(document.querySelector('#coin').innerText) + 1;
     document.querySelector('#coin').innerText  = `${counted}`;
}
function reset(){
    document.querySelector('#coin').innerText  = '00'
}