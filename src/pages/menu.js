import menuImage from "../menu.jpg";

export default function MenuPage() {
    let page = document.createElement("div");

    let menu = document.createElement("img");
    menu.src = menuImage;
    menu.alt = "Menu";
    menu.classList.add("menu-img");
    page.appendChild(menu);

    return page;
}


