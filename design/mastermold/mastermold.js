(function () {
    let scale=7;
    let populateUI = function(ui,ids) {
        ids.forEach((id) => {
            ui[id] = document.getElementById(id);
        })
    };
    let listItem = function(img) {
        return `<tr><td>${img.filename}</td><td><input type="number" min="1" value="1" onchange="mm.updateCount(this,'${img.filename}')"/></td><td><button class="nes-btn is-error" onclick="mm.removeImage('${img.filename}')">X</button></td></tr>`;
    };
    let frameRect = {
      small:[5,[0,65]],
      large:[30,[5,35]],
      steps:[70,20]
    }
    let drawRect = function(x,y,w,h) {
      return `<rect x="${scale*x}" y="${scale*y}" width="${scale*w}" height="${scale*h}" fill="white" stroke="black" stroke-width="2"></rect>`;
    };
    let drawFrame = function() {
      return "?".repeat(20).split("").map((c,i) => {
        let x = Math.floor(i / 10) * frameRect.steps[0];
        let y = (i % 10) * frameRect.steps[1];
        let out = [];
        ["small","large"].forEach((spec) => {
          let width = frameRect[spec][0];
          frameRect[spec][1].forEach((xOff) => {
            out.push(drawRect(x + xOff,y,width,20));
          });
        });
        return out.join("");
      });
    };
    let drawImg = function(url,i) {
      let x = (i % 2) * frameRect.steps[0];
      let y = Math.floor(i / 2) * frameRect.steps[1];
      return `<image href="${url}" x="${scale * (x + 11)}" y="${scale * (y - 4)}" width="${scale * 18}" height="${scale * 28}" transform="rotate(90 ${scale * (x + 20)} ${scale * (y + 10)})"></image>
      <image href="${url}" x="${scale * (x + 41)}" y="${scale * (y - 4)}" width="${scale * 18}" height="${scale * 28}"  transform="rotate(-90 ${scale * (x + 50)} ${scale * (y + 10)})"></image>`;
    };
    let drawPage = function(page,i) {
        return `<div class="${i==0?'firstPage':'page'}"><svg width="7in" height="10in" viewBox="0 0 ${scale * 2 * 70} ${scale * 10 * 20}">
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
            ui[canvasId].innerHTML = pages.map(drawPage).join("");
        };
        this.init = function() {
            populateUI(ui,[fileId,listId,canvasId]);
        };
        this.addImage = function() {
            let files = Array.from(ui[fileId].files);
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
