(function(){
    let tileFrame = [
        [0,7],
        [4,0],
        [12,0],
        [16,7],
        [12,14],
        [4,14]
    ];
    let sampleData = {
        "title":"Sample Hex Map",
        "style":{
            "stroke":"none",
            "stroke-width":1
        },
        "tiles":[
            {
                "tileTitle":"Bardivik",
                "background":"white",
                "shapes":[
                    ["poly",[[0,0],[8,5],[0,10]],{"fill":"orange"}],
                    ["poly",[[16,0],[8,5],[16,10]],{"fill":"orange"}],
                    ["rect",0,11,16,3,{"fill":"black"}],
                    ["poly",[[8,1],[6,3],[10,3]],{"fill":"black"}],
                    ["rect",6,3,4,8,{"fill":"black"}],
                    ["rect",7,4,2,3,{"fill":"white"}],
                ]
            },
            {
                "tileTitle":"Water",
                "background":"lightblue",
                "shapes":[]
            },
            {
                "tileTitle":"Swamp",
                "background":"aquamarine",
                "shapes":[]
            },
            {
                "tileTitle":"Farmland",
                "background":"lightgreen",
                "shapes":[]
            },
            {
                "tileTitle":"Forest",
                "background":"green",
                "shapes":[
                    ["poly",[[5,3],[4,5],[6,5]],{"fill":"darkgreen"}],
                    ["poly",[[5,4],[4,6],[6,6]],{"fill":"darkgreen"}],
                    ["poly",[[5,5],[4,7],[6,7]],{"fill":"darkgreen"}],
                ]
            },
            {
                "tileTitle":"Hills",
                "background":"tan",
                "shapes":[]
            },
            {
                "tileTitle":"Hlegmoor",
                "background":"white",
                "shapes":[
                    ["rect",0,11,16,3,{"fill":"black"}],
                ]
            },
        ],
        "map":[
            "bbbcfffffff",
            "bbccfefffee",
            "bbcdeeeeeee",
            "badeeeeeeee",
            "bcdeeeeeeee",
            "bcdeeeedeee",
            "bcdeededeee",
            "bbccfddddde",
            "bbccffdbgdd",
            "bbccffddddd"
        ]
    };
    let charIndex = "abcdefg";
    let buildStyle = function(styleMap){
        styleMap = styleMap || {};
        return Object.entries(styleMap).map(function(entry){
            return `${entry[0]}="${entry[1]}"`
        }).join(' ');
    };
    let templates = {
        "rect":function(x,y,w,h,style) {
            return `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${buildStyle(style)}></rect>`;
        },
        "circle":function(cx,cy,r,style) {
            return `<circle cx="${cx}" cy="${cy}" r="${r}" ${buildStyle(style)}></circle>`;
        },
        "poly":function(points,style) {
            return `<polygon points="${points.map((p) => p.join(',')).join(' ')}" ${buildStyle(style)}></polygon>`;
        }
    };
    let buildShape = function(shape) {
        let args = [].concat(shape);
        let type = args.shift();
        return templates[type].apply(null,args);
    };
    let buildTile = function(tile){
        let background = templates.rect(0,0,16,14,{"fill":tile.background});
        return `<pattern id="${tile.tileTitle}" width="16" height="14">${background}${tile.shapes.map(buildShape).join('\n')}</pattern>`;
    };
    let buildLegendListing = function(tile) {
        return `<tr>
    <td>
        <svg width="36" height="32" viewBox="-1 -1 18 16">
            <polygon points="0,7 4,0 12,0 16,7 12,14 4,14" fill="url(#${tile.tileTitle})" stroke="black" stroke-width="1"></polygon>
        </svg>
    </td>
    <td><span>${tile.tileTitle}</span></td>
</tr>`;
    };
    let buildPoints = function(x,y) {
        return tileFrame.map((p) => {
            return [(12 * x + p[0]),(14 * y + ((x % 2) * 7) + p[1])].join(",");
        }).join(" ");
    };
    let buildGrid = function(titles,map,style) {
        let gridStyle = style || {};
        let height = map.length;
        let width = map.reduce((out,row) => Math.max(out,row.length),0);
        let out = [];
        map.forEach((row,y) => {
            row.split("").forEach((char,x) => {
                let index = charIndex.indexOf(char);
                let title = titles[index];
                out.push(`<polygon points="${buildPoints(x,y)}" fill="url(#${title})" ${buildStyle(gridStyle)}></polygon>`);
            });
        });
        return `<svg width="100%" height="100%" viewBox="0 0 ${12 * width + 4} ${14 * height + 7}">
${out.join("\n")}
</svg>`
    };
    window.loadGrid = function(titleId,legendId,gridId,tileSetId) {
        document.getElementById(titleId).innerHTML = sampleData.title;
        document.getElementById(tileSetId).innerHTML = sampleData.tiles.map(buildTile).join('\n');
        document.getElementById(legendId).innerHTML = `<table>${sampleData.tiles.map(buildLegendListing).join('\n')}</table>`;
        document.getElementById(gridId).innerHTML = buildGrid(sampleData.tiles.map((t) => t.tileTitle),sampleData.map,sampleData.style);
    };
})();