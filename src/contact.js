function createContact() {
    const div = document.getElementById('content');

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }

    const newPage = document.createElement('div');

    const header = document.createElement('H1');
    const text = document.createTextNode('Contact');
    header.appendChild(text);

    var paragraph = document.createElement('p');
    const description = document.createTextNode('38917 Betty Crocker Lane; Custard, WI 81238');
    paragraph.appendChild(description);

    newPage.appendChild(header);
    newPage.appendChild(paragraph);

    div.appendChild(newPage);
}

export { createContact as createContact, };