var size = 0;
var placement = 'point';

var style_JawaTengah_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("pgr_ton");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Kabupaten") !== null) {
        labelText = String(feature.get("Kabupaten"));
    }
    if (value > 0.000000 && value <= 31.208000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(246,239,247,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 31.208000 && value <= 62.416000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(189,201,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 62.416000 && value <= 93.624000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(103,169,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 93.624000 && value <= 124.832000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(28,144,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 124.832000 && value <= 156.040000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(1,108,89,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
