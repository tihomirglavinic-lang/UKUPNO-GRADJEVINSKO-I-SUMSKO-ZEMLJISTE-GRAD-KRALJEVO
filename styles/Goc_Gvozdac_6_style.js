var size = 0;
var placement = 'point';

var style_Goc_Gvozdac_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#000406";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("naziv") !== null) {
        labelText = String(feature.get("naziv"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(132,170,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 15.2}),fill: new ol.style.Fill({color: 'rgba(209,255,199,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
