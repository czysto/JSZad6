let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Dodaj 10 elementow";
    const btnReset = document.createElement('button');
    btnReset.textContent = "Reset";

    btn.style.fontSize = "28px";
    btnReset.style.fontSize = "28px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);

    const list = document.createElement("ul");
    document.body.appendChild(list);
    list.style.listStyle = "none";

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', resetElements);

}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`
        document.querySelector('ul').appendChild(li);

    }
}

const resetElements = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()