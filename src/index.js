import printMe from './js/print.js';
import './css/style.css';
import bg from './imgs/qiao-1.jpg';

function component(){
    
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.textContent = '点击一下';    
    btn.onclick = printMe;
    element.id="app";
    element.style.backgroundImage = `url(${bg})`;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());