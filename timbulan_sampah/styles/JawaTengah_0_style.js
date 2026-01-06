var size = 0;
var placement = 'point';

var style_JawaTengah_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("tnimb_ton");
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
    if (value > 0.000000 && value <= 86.848600) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 86.848600 && value <= 173.697200) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 173.697200 && value <= 260.545800) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 260.545800 && value <= 347.394400) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 347.394400 && value <= 434.243000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
