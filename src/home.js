function createHome() {
    const div = document.getElementById('content');

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }

    const newPage = document.createElement('div');

    // create img, text, then paragraph
    const img = new Image(500, 300);
    img.src = 'https://www.biggerbolderbaking.com/wp-content/uploads/2021/08/Summer-Fruit-Tart-Thumbnail-scaled.jpg';
    
    const header = document.createElement('H1');
    const text = document.createTextNode('Welcome to Annabelle\'s Bakery');
    header.appendChild(text);

    var paragraph = document.createElement('p');
    const description = document.createTextNode('We create the best tarts in town!');
    paragraph.appendChild(description);

    newPage.appendChild(img);
    newPage.appendChild(header);
    newPage.appendChild(paragraph);

    div.appendChild(newPage);
}

export { createHome as createHome, };