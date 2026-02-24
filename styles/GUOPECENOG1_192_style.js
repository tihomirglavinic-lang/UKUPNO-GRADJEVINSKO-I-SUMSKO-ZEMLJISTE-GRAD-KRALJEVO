var size = 0;
var placement = 'point';

var style_GUOPECENOG1_192 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Verdana\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("layer") !== null) {
        labelText = String(feature.get("layer"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,60,255,1.0)', lineDash: [56.99999999999999,11.399999999999999], lineCap: 'butt', lineJoin: 'miter', width: 11.399999999999999}),fill: new ol.style.Fill({color: 'rgba(55,126,184,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
