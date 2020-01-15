(function () {
    let populateUI = function(ui,ids) {
        ids.forEach((id) => {
            ui[id] = document.getElementById(id);
        })
    };
    let listItem = function(img) {
        return `<li><span>${img.filename}</span><input type="number" min="1" value="1" onchange="mm.updateCount(this,'${img.filename}')"/><button class="nes-btn is-error" onclick="mm.removeImage('${img.filename}')">X</button></li>`;
    };
    let drawFrame = function() {};
    let drawImg = function(url,index) {

    };
    let drawPage = function(page) {
        return `<div class="page"><svg width="7.5in" height="10in" viewBox="0 0 700 1000">
${drawFrame()}
${page.urls.map(drawImg).join("\n")}
</svg></div>`
    };
    window.MasterMold = function(fileId,listId,canvasId) {
        let ui = {};
        let indexes = {};
        let images = [];
        let loadImages = function(files,onCompleteFn) {
            let countDown = files.reduce((out,file) => {
                out[file.name] = true;
                return out;
            },{});
            files.forEach((file) => {
                if (images.hasOwnProperty(file.name)) {
                    countDown[file.name] = false;
                } else {
                    let reader = new FileReader();
                    reader.addEventListener("load",function() {
                        images.push({
                            filename:file.name,
                            url:reader.result,
                            count:1
                        });
                        countDown[file.name] = false;
                        let remaining = Object.values(countDown).filter((cd) => cd).length;
                        if (remaining == 0) {
                            onCompleteFn();
                        }
                    },false);
                    reader.readAsDataURL(file);
                }
            });
        };
        let updateList = function() {
            indexes = images.reduce((out,img,index) => {
                out[img.filename] = index;
                return out;
            },{});
            ui[listId].innerHTML = images.map(listItem).join("\n");
        };
        let draw = function() {
            let urls = [];
            images.forEach((img) => {
                urls = urls.concat("?".repeat(img.count).split("").map(() => img.url));
            });
            let pages = [];
            while(urls.length > 0) {
                pages.push({
                    urls:urls.splice(0,20)
                })
            }
            ui[canvasId].innerHTML = pages.map(drawPage);
        };
        this.init = function() {
            populateUI(ui,[fileId,listId,canvasId]);
        };
        this.addImage = function() {
            let files = ui[fileId].files
            console.log(files);
            if (files.length > 0) {
                loadImages(files,() => {
                    updateList();
                    draw();
                });
            }
        };
        this.updateCount = function(input,filename) {
            images[indexes[filename]].count = input.value;
            draw();
        };
        this.removeImage = function(filename) {
            images.splice(indexes[filename]);
            updateList();
            draw();
        };
    };
})();