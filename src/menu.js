function createMenu() {
    const div = document.getElementById('content');

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
    
    const newPage = document.createElement('div');

    const header = document.createElement('H1');
    const text = document.createTextNode('Menu');
    header.appendChild(text);

    var paragraph = document.createElement('p');
    const description = document.createTextNode('tarts, muffins, cakes, cookies, pies, brownies');
    paragraph.appendChild(description);

    newPage.appendChild(header);
    newPage.appendChild(paragraph);

    div.appendChild(newPage);
}

export { createMenu as createMenu, };