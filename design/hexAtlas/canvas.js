window.Canvas = function(selectorId,canvasId,myData) {
    let selectedTile;

    let optTpl = function(tile,i) {
        return `<option value="${i}">${tile.tileTitle}</option>`;
    };

    let buildGrid = function(out) {
        out = out || [];
        for (let x = 0; x < 16; x++) {
            for (let y = 0; y < 14; y++) {
                out.push(Shapes.templates.rect(x,y,1,1,{fill:"none",stroke:"black","stroke-width":"0.1"}));
            }
        }
        return out;
    };

    let drawGrid = function() {
        let grid = buildGrid();
        if(selectedTile) {
            grid.unshift(Shapes.templates.rect(0,0,16,14,{fill:selectedTile.background}));
            selectedTile.shapes.forEach((shape) => {
                grid.push(Shapes.buildShape(shape));
            });
        }
        document.getElementById(canvasId).innerHTML = '\n' + grid.join('\n') + '\n';
    };

    this.load = function() {
        drawGrid();
        document.getElementById(selectorId).innerHTML = '\n' + ['<option>(Choose)</option>'].concat(myData.tiles.map(optTpl)).join('\n') + '\n';
    };

    this.update = function() {
        let selectValue = document.getElementById(selectorId).value;
        console.log(selectValue);
        if (!isNaN(selectValue)) {
            selectedTile = myData.tiles[selectValue];
        } else {
            selectedTile = undefined;
        }
        drawGrid();
    };
};