const tree = document.querySelector('.xtree');
const max = 120;

function getBranch() {
    for (let i = 0; i < max; i++) {
        let span = document.createElement('span'); //создаемо єлемент
        span.style.setProperty("--i", i); //создаємо змінну для css
        tree.append(span); //додаємо створенний елемент до div
    }
}

getBranch();