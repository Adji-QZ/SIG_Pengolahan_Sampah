var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_JawaTengah_0 = new ol.format.GeoJSON();
var features_JawaTengah_0 = format_JawaTengah_0.readFeatures(json_JawaTengah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaTengah_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JawaTengah_0.addFeatures(features_JawaTengah_0);var lyr_JawaTengah_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JawaTengah_0, 
                style: style_JawaTengah_0,
    title: 'Jawa Tengah<br />\
    <img src="styles/legend/JawaTengah_0_0.png" />  Paling Sedikit Pengurangan Sampah: 0 - 31 <br />\
    <img src="styles/legend/JawaTengah_0_1.png" />  Sedikit Pengurangan Sampah: 31 - 62 <br />\
    <img src="styles/legend/JawaTengah_0_2.png" />  Lumayan Banyak Pengurangan Sampah: 62 - 94 <br />\
    <img src="styles/legend/JawaTengah_0_3.png" />  Banyak Pengurangan Sampah: 94 - 125 <br />\
    <img src="styles/legend/JawaTengah_0_4.png" />  Sangat Banyak Penguranngan Sampah: 125 - 156 <br />'
        });

lyr_JawaTengah_0.setVisible(true);
var layersList = [baseLayer,lyr_JawaTengah_0];
lyr_JawaTengah_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'tnimb_ton': 'tnimb_ton', 'pgr_ton': 'pgr_ton', 'tpng_ton': 'tpng_ton', 'pgr(%)': 'pgr(%)', 'png(%)': 'png(%)', });
lyr_JawaTengah_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'tnimb_ton': 'TextEdit', 'pgr_ton': 'TextEdit', 'tpng_ton': 'TextEdit', 'pgr(%)': 'TextEdit', 'png(%)': 'TextEdit', });
lyr_JawaTengah_0.set('fieldLabels', {'Kabupaten': 'inline label', 'Provinsi': 'inline label', 'tnimb_ton': 'inline label', 'pgr_ton': 'inline label', 'tpng_ton': 'inline label', 'pgr(%)': 'inline label', 'png(%)': 'inline label', });
lyr_JawaTengah_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});