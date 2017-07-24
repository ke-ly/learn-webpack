import printMe from './js/print.js';

function component(){
    
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.textContent = '点击一下'
    
    btn.onclick = printMe;
    
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());