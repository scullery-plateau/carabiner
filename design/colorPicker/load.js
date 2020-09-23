let colors = [ "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen" ];

function loadSelector(selectId) {
    let options = document.getElementById(selectId).options;
    colors.forEach((c) => {
        let option = document.createElement("option");
        option.text = c;
        option.value = c;
        options.add(option);
    });
}

function svgFrame(width,height,content) {
    return `<svg width="100%" height="100%" viewBox="0 0 ${width} ${height}">\n${content}\n</svg>`;
}

function rect(x,y,width,height,fill) {
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" stroke="black" stroke-width="1"/>`;
}

function colorBtn(r,g,b,scale,displayId) {
    let boxX = r % 2;
    let boxY = Math.floor(r/2);
    let x = (g + (boxX * 6)) * scale;
    let y = (b + (boxY * 6)) * scale;
    let rgb = '#' + [r,g,b].map((s) => (s * 3).toString(16)).join("");
    return `<a href="#" onclick="setColor('${displayId}','${rgb}')">${rect(x,y,scale,scale,rgb)}</a>`;
}

function loadSVG(svgId,displayId) {
    let scale = 10;
    let content = [];
    for (let r = 0; r < 6; r++) {
        for (let g = 0; g < 6; g++) {
            for (let b = 0; b < 6; b++) {
                content.push(colorBtn(r,g,b,scale,displayId));
            }
        }
    }
    document.getElementById(svgId).innerHTML = svgFrame(2*6*scale,3*6*scale,content.join('\n'));
}

function loadAll(selectId,svgId,displayId) {
    loadSelector(selectId);
    loadSVG(svgId,displayId);
}

function setColor(displayId,color) {
    document.getElementById(displayId).innerHTML = svgFrame(100,10,rect(0,0,100,10,color));
}

function setRGB(displayId,redId,greenId,blueId) {
    let red = document.getElementById(redId).value;
    let green = document.getElementById(greenId).value;
    let blue = document.getElementById(blueId).value;
    setColor(displayId,`rgb(${red},${green},${blue})`);
}