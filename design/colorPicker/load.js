let colors = {"aquamarine":"#7FFFD4","lime":"#00FF00","deepskyblue":"#00BFFF","darksalmon":"#E9967A","antiquewhite":"#FAEBD7","mediumturquoise":"#48D1CC","slategrey":"#708090","slategray":"#708090","sienna":"#A0522D","orange":"#FFA500","navajowhite":"#FFDEAD","lavenderblush":"#FFF0F5","firebrick":"#B22222","orangered":"#FF4500","palevioletred":"#DB7093","lawngreen":"#7CFC00","seashell":"#FFF5EE","lightpink":"#FFB6C1","darkolivegreen":"#556B2F","aliceblue":"#F0F8FF","gray":"#808080","lightsteelblue":"#B0C4DE","whitesmoke":"#F5F5F5","darkgoldenrod":"#B8860B","tan":"#D2B48C","bisque":"#FFE4C4","white":"#FFFFFF","lightgreen":"#90EE90","darkseagreen":"#8FBC8F","crimson":"#DC143C","darkslategray":"#2F4F4F","mistyrose":"#FFE4E1","chocolate":"#D2691E","yellow":"#FFFF00","cadetblue":"#5F9EA0","navy":"#000080","ghostwhite":"#F8F8FF","dimgrey":"#696969","rebeccapurple":"#663399","seagreen":"#2E8B57","green":"#008000","mediumseagreen":"#3CB371","indigo":"#4B0082","olivedrab":"#6B8E23","cyan":"#00FFFF","peachpuff":"#FFDAB9","limegreen":"#32CD32","mediumslateblue":"#7B68EE","violet":"#EE82EE","sandybrown":"#F4A460","yellowgreen":"#9ACD32","mediumspringgreen":"#00FA9A","steelblue":"#4682B4","rosybrown":"#BC8F8F","cornflowerblue":"#6495ED","ivory":"#FFFFF0","lightgoldenrodyellow":"#FAFAD2","salmon":"#FA8072","darkcyan":"#008B8B","peru":"#CD853F","cornsilk":"#FFF8DC","lightslategray":"#778899","blueviolet":"#8A2BE2","forestgreen":"#228B22","lightseagreen":"#20B2AA","gold":"#FFD700","gainsboro":"#DCDCDC","darkorchid":"#9932CC","burlywood":"#DEB887","lightskyblue":"#87CEFA","chartreuse":"#7FFF00","snow":"#FFFAFA","moccasin":"#FFE4B5","honeydew":"#F0FFF0","aqua":"#00FFFF","darkred":"#8B0000","mediumorchid":"#BA55D3","lightsalmon":"#FFA07A","saddlebrown":"#8B4513","wheat":"#F5DEB3","springgreen":"#00FF7F","lightslategrey":"#778899","darkblue":"#00008B","powderblue":"#B0E0E6","turquoise":"#40E0D0","blanchedalmond":"#FFEBCD","papayawhip":"#FFEFD5","slateblue":"#6A5ACD","lightblue":"#ADD8E6","skyblue":"#87CEEB","red":"#FF0000","lightyellow":"#FFFFE0","blue":"#0000FF","palegreen":"#98FB98","greenyellow":"#ADFF2F","khaki":"#F0E68C","maroon":"#800000","darkgrey":"#A9A9A9","midnightblue":"#191970","floralwhite":"#FFFAF0","deeppink":"#FF1493","paleturquoise":"#AFEEEE","darkkhaki":"#BDB76B","azure":"#F0FFFF","indianred":"#CD5C5C","darkviolet":"#9400D3","mediumpurple":"#9370DB","fuchsia":"#FF00FF","coral":"#FF7F50","mediumvioletred":"#C71585","lemonchiffon":"#FFFACD","mediumblue":"#0000CD","darkmagenta":"#8B008B","goldenrod":"#DAA520","darkorange":"#FF8C00","orchid":"#DA70D6","plum":"#DDA0DD","pink":"#FFC0CB","teal":"#008080","magenta":"#FF00FF","lightgrey":"#D3D3D3","purple":"#800080","dodgerblue":"#1E90FF","darkturquoise":"#00CED1","mintcream":"#F5FFFA","hotpink":"#FF69B4","thistle":"#D8BFD8","royalblue":"#4169E1","darkgreen":"#006400","darkslateblue":"#483D8B","silver":"#C0C0C0","darkgray":"#A9A9A9","grey":"#808080","oldlace":"#FDF5E6","mediumaquamarine":"#66CDAA","brown":"#A52A2A","lightgray":"#D3D3D3","olive":"#808000","lightcoral":"#F08080","tomato":"#FF6347","lightcyan":"#E0FFFF","linen":"#FAF0E6","darkslategrey":"#2F4F4F","lavender":"#E6E6FA","dimgray":"#696969","palegoldenrod":"#EEE8AA","beige":"#F5F5DC","black":"#000000"}

let selectedColor = undefined;

function getForegroundColor(hex) {
    let [r, g, b] = hexToRGB(hex);
    let luminosity = Math.sqrt(Math.pow(r, 2) * 0.299 + Math.pow(g, 2) * 0.587 + Math.pow(b, 2) * 0.114);
    return luminosity > 186 ? "black" : "white";
}

function loadSelector(selectId) {
    let options = document.getElementById(selectId).options;
    let colorNames = Array.from(Object.keys(colors));
    colorNames.sort();
    colorNames.forEach((c) => {
        let option = document.createElement("option");
        option.text = c;
        option.value = colors[c];
        option.style.backgroundColor = c;
        option.style.color = getForegroundColor(colors[c]);
        options.add(option);
    });
}

function svgFrame(width,height,content) {
    return `<svg width="100%" height="100%" viewBox="0 0 ${width} ${height}">\n${content}\n</svg>`;
}

function rect(x,y,width,height,fill) {
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" stroke="black" stroke-width="1"/>`;
}

function colorBtn(r,g,b,scale,displayId,fieldId,redId,greenId,blueId) {
    let boxX = r % 3;
    let boxY = Math.floor(r/3);
    let x = (g + (boxX * 6)) * scale;
    let y = (b + (boxY * 6)) * scale;
    let rgb = '#' + [r,g,b].map((s) => (s * 3).toString(16).repeat(2)).join("");
    return `<a href="#" onclick="setRGB('${displayId}','${fieldId}','${redId}','${greenId}','${blueId}','${rgb}')">${rect(x,y,scale,scale,rgb)}</a>`;
}

function colorBtn2(displayId,fieldId,redId,greenId,blueId,rgb) {
    return `<td style="padding: 0; margin: 0; font-size: 0.8em"><button style="background-color: ${rgb}; color: ${rgb}" onclick="setRGB('${displayId}','${fieldId}','${redId}','${greenId}','${blueId}','${rgb}')">_</button></td>`;
}

function loadSVG(svgId,displayId,fieldId,redId,greenId,blueId) {
    let rows = [];
    for (let y = 0; y < 12; y++) {
        let cells = [];
        for (let x = 0; x < 18; x++) {
            let r = (3 * Math.floor(y/6)) + Math.floor(x/6);
            let g = x % 6;
            let b = y % 6;
            let rgb = '#' + [r,g,b].map((s) => (s * 3).toString(16).repeat(2)).join("");
            cells.push(colorBtn2(displayId,fieldId,redId,greenId,blueId,rgb));
        }
        rows.push("<tr style=\"padding: 0; margin: 0\">" + cells.join("") + "</tr>");
    }
    document.getElementById(svgId).innerHTML = "<table style=\"padding: 0; margin: 0\">" + rows.join('') + "</table>";
}

function loadAll(selectId,svgId,displayId,fieldId,redId,greenId,blueId) {
    loadSelector(selectId);
    loadSVG(svgId,displayId,fieldId,redId,greenId,blueId);
}

function setColor(displayId,fieldId,color) {
    document.getElementById(displayId).innerHTML = svgFrame(100,10,rect(0,0,100,10,color));
    if (fieldId) {
        document.getElementById(fieldId).value = color;
    }
}

function rgbToHex(r,g,b) {
    return '#' + [r,g,b].map((c) => {
        console.log(c);
        let h = Number(c).toString(16);
        console.log(h);
        if (h.length === 1) {
            h = '0' + h;
        }
        return h;
    }).join('');
}

function setColorFromRGB(displayId,fieldId,redId,greenId,blueId) {
    let red = document.getElementById(redId).value;
    let green = document.getElementById(greenId).value;
    let blue = document.getElementById(blueId).value;
    let hex = rgbToHex(red,green,blue);
    setColor(displayId,fieldId,hex);
}

function hexToRGB(hex) {
    return [1,3,5].map((i) => parseInt(hex.substr(i,2),16));
}

function setRGB(displayId,fieldId,redId,greenId,blueId,hex) {
    let rgb = hexToRGB(hex);
    [redId,greenId,blueId].forEach((c,i) => {
        document.getElementById(c).value = rgb[i];
    })
    setColor(displayId,fieldId,hex);
}

function open(id) {
    document.getElementById(id).show();
}

function cancel(id) {
    document.getElementById(id).close();
}

function confirm(id,colorValueId,outId) {
    selectedColor = document.getElementById(colorValueId).value;
    document.getElementById(id).close();
    if (selectedColor) {
        setColor(outId,undefined, selectedColor);
    }
}