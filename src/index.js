import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');

function handleTabClick(event) {
    // hide all tab panels
    // (don't need to do it)

    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;
    if(id === 'home') {
        createHome();
    }
    else if(id === 'menu') {
        createMenu();
    }
    else {
        createContact();
    }
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

createHome();