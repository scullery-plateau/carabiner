(function(){
    window.Cobblestone = function(loaderId,selectorId,inputId,errorsId,reloadBtnId,canvasId) {
        let ui = {};
        let data = {};
        let selectedId = undefined;
        let render = function() {
            ui[inputId].value = data[selectedId];
            console.log(data);
        };
        this.init = function() {
            [loaderId,selectorId,inputId,canvasId].forEach((id) => {
                ui[id] = document.getElementById(id);
            });
        };
        this.loadFile = function() {
            let file = ui[loaderId].files[0];
            let reader = new FileReader();
            reader.onload = function() {
                console.log("loading file");
                let textdata = reader.result;
                console.log(textdata);
                let blocks = textdata.split('\r').join('').split('\n\n');
                ['fullMap','paging','transforms','palettes'].forEach((key) => {
                    data[key] = blocks.shift();
                    let option = document.createElement('OPTION');
                    option.text = key;
                    option.value = key;
                    ui[selectorId].appendChild(option);
                });
                let group = document.createElement('OPTGROUP');
                group.label = "tiles";
                blocks.forEach((block) => {
                    let rows = block.split("\n");
                    let tileId = rows.shift();
                    let tileKey = "tiles."+tileId
                    data[tileKey] = rows.join('\n');
                    let option = document.createElement('OPTION');
                    option.text = tileId;
                    option.value = tileKey;
                    group.appendChild(option);
                });
                ui[selectorId].appendChild(group);
                selectedId = "fullMap";
                render();
            };
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