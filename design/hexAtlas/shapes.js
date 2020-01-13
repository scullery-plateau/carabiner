(function(){
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
    window.Shapes = {
        charIndex:"abcdefg",
        tileFrame:[
            [0,7],
            [4,0],
            [12,0],
            [16,7],
            [12,14],
            [4,14]
        ],
        templates:templates,
        buildStyle:buildStyle,
        buildShape:function(shape) {
            let args = [].concat(shape);
            let type = args.shift();
            return templates[type].apply(null,args);
        }
    };
})();

