import AboutPage from './pages/about';
import HomePage from './pages/home';
import MenuPage from './pages/menu';
import './style.css';

let content = document.querySelector("#content");
let buttons = document.querySelectorAll("nav > button");
let current = 0;

let pages = [HomePage(), MenuPage(), AboutPage()];

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => loadTab(i));
}

content.appendChild(HomePage());

function loadTab(index) {
    if(index === current) return;

    buttons[current].classList.remove("selected");
    current = index;
    buttons[current].classList.add("selected");
    content.innerHTML = "";
    content.appendChild(pages[index]);
}
