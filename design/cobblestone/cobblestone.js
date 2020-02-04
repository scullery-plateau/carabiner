(function(){
    window.Cobblestone = function(loaderId,selectorId,inputId,canvasId) {
        let ui = {};
        let data = {};
        let selectedId = undefined;
        let render = function() {
            ui[inputId].value = data[selectorId];
        };
        this.init = function() {
            [loaderId,selectorId,inputId,canvasId].forEach((id) => {
                ui[id] = document.getElementById(id);
            });
        };
        this.loadFile = function() {
            let file = ui[loaderId].files[0];
            let reader = new FileReader();
            reader.addEventListener("load",() => {
                let blocks = reader.result.split('\r').join('').split('\n\n');
                ['fullMap','paging','transforms','palettes'].forEach((key) => {
                    data[key] = blocks.shift();
                });
                blocks.forEach((block) => {
                    let rows = block.split("\n");
                    let tileId = rows.shift();
                    data["tiles."+tileId] = rows.join('\n');
                });
                selectedId = "fullMap";
                render();
            },false);
            reader.readAsText(file);
        };
        this.saveFile = function() {
            if (selectedId && data[selectorId]) {
                data[selectorId] = ui[inputId].value;
            }

        };
        this.saveImage = function() {
            if (selectedId && data[selectorId]) {
                data[selectorId] = ui[inputId].value;
            }

        };
        this.publish = function() {
            if (selectedId && data[selectorId]) {
                data[selectorId] = ui[inputId].value;
            }

        };
        this.select = function() {
            if (selectedId && data[selectorId]) {
                data[selectorId] = ui[inputId].value;
            }
            selectedId = ui[selectorId].options[ui[selectorId].selectedIndex].value;
            render();
        };
        this.reload = function() {
            data[selectorId] = ui[inputId].value;
            render();
        };
    }
})();