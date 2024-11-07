export default function HomePage() {
    const page = document.createElement("div");
    
    const banner = document.createElement("div");
    page.appendChild(banner);

    const bannerText = document.createElement("h1");
    bannerText.textContent = "My Restaurant";
    banner.appendChild(bannerText);

    const mainSection = document.createElement("div");
    page.appendChild(mainSection);

    const mainText = document.createElement("p");
    mainText.textContent = "A really fancy restaurant! Make sure to check out the menu!";
    mainSection.appendChild(mainText);

    const contact = document.createElement("div");
    page.appendChild(contact);

    const contactText = document.createElement("p");
    contactText.textContent = "Contact:";
    contact.appendChild(contactText);

    const contactList = document.createElement("ul");
    contact.append(contactList);

    contactList.appendChild(createListElement("Address: My Street 11"));
    contactList.appendChild(createListElement("Phone: 11-111-111"));
    contactList.appendChild(createListElement("Email: myrestaurant@example.com"));

    return page;
}

function createListElement(text) {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}