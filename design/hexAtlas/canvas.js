function rectTpl(x,y) {
    return `<rect x="${x}" y="${y}" width="10" height="10" fill="#fffffe" stroke="black" stroke-width="1"></rect>`;
}

function loadCanvas(id) {
    let grid = [];
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 14; y++) {
            grid.push(rectTpl(x*10,y*10));
        }
    }
    document.getElementById(id).innerHTML = '\n' + grid.join('\n') + '\n';
}