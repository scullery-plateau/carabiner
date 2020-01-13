(function(){
    let buildTile = function(tile){
        let background = Shapes.templates.rect(0,0,16,14,{"fill":tile.background});
        return `<pattern id="${tile.tileTitle}" width="16" height="14">${background}${tile.shapes.map(Shapes.buildShape).join('\n')}</pattern>`;
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
    let buildGridPoints = function(x,y) {
        return Shapes.tileFrame.map((p) => {
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
                let index = Shapes.charIndex.indexOf(char);
                let title = titles[index];
                out.push(`<polygon points="${buildGridPoints(x,y)}" fill="url(#${title})" ${Shapes.buildStyle(gridStyle)}></polygon>`);
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