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
    <img src="styles/legend/JawaTengah_0_0.png" /> Banjarnegara<br />\
    <img src="styles/legend/JawaTengah_0_1.png" /> Banyumas<br />\
    <img src="styles/legend/JawaTengah_0_2.png" /> Batang<br />\
    <img src="styles/legend/JawaTengah_0_3.png" /> Blora<br />\
    <img src="styles/legend/JawaTengah_0_4.png" /> Boyolali<br />\
    <img src="styles/legend/JawaTengah_0_5.png" /> Brebes<br />\
    <img src="styles/legend/JawaTengah_0_6.png" /> Cilacap<br />\
    <img src="styles/legend/JawaTengah_0_7.png" /> Demak<br />\
    <img src="styles/legend/JawaTengah_0_8.png" /> Grobogan<br />\
    <img src="styles/legend/JawaTengah_0_9.png" /> Jepara<br />\
    <img src="styles/legend/JawaTengah_0_10.png" /> Karanganyar<br />\
    <img src="styles/legend/JawaTengah_0_11.png" /> Kebumen<br />\
    <img src="styles/legend/JawaTengah_0_12.png" /> Kendal<br />\
    <img src="styles/legend/JawaTengah_0_13.png" /> Klaten<br />\
    <img src="styles/legend/JawaTengah_0_14.png" /> Kota Magelang<br />\
    <img src="styles/legend/JawaTengah_0_15.png" /> Kota Pekalongan<br />\
    <img src="styles/legend/JawaTengah_0_16.png" /> Kota Salatiga<br />\
    <img src="styles/legend/JawaTengah_0_17.png" /> Kota Semarang<br />\
    <img src="styles/legend/JawaTengah_0_18.png" /> Kota Surakarta<br />\
    <img src="styles/legend/JawaTengah_0_19.png" /> Kota Tegal<br />\
    <img src="styles/legend/JawaTengah_0_20.png" /> Kudus<br />\
    <img src="styles/legend/JawaTengah_0_21.png" /> Magelang<br />\
    <img src="styles/legend/JawaTengah_0_22.png" /> Pati<br />\
    <img src="styles/legend/JawaTengah_0_23.png" /> Pekalongan<br />\
    <img src="styles/legend/JawaTengah_0_24.png" /> Pemalang<br />\
    <img src="styles/legend/JawaTengah_0_25.png" /> Purbalingga<br />\
    <img src="styles/legend/JawaTengah_0_26.png" /> Purworejo<br />\
    <img src="styles/legend/JawaTengah_0_27.png" /> Rembang<br />\
    <img src="styles/legend/JawaTengah_0_28.png" /> Semarang<br />\
    <img src="styles/legend/JawaTengah_0_29.png" /> Sragen<br />\
    <img src="styles/legend/JawaTengah_0_30.png" /> Sukoharjo<br />\
    <img src="styles/legend/JawaTengah_0_31.png" /> Tegal<br />\
    <img src="styles/legend/JawaTengah_0_32.png" /> Temanggung<br />\
    <img src="styles/legend/JawaTengah_0_33.png" /> Wonogiri<br />\
    <img src="styles/legend/JawaTengah_0_34.png" /> Wonosobo<br />\
    <img src="styles/legend/JawaTengah_0_35.png" /> <br />'
        });

lyr_JawaTengah_0.setVisible(true);
var layersList = [baseLayer,lyr_JawaTengah_0];
lyr_JawaTengah_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'tnimb_ton': 'tnimb_ton', 'pgr_ton': 'pgr_ton', 'tpng_ton': 'tpng_ton', 'pgr(%)': 'pgr(%)', 'png(%)': 'png(%)', });
lyr_JawaTengah_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'tnimb_ton': 'TextEdit', 'pgr_ton': 'TextEdit', 'tpng_ton': 'TextEdit', 'pgr(%)': 'TextEdit', 'png(%)': 'TextEdit', });
lyr_JawaTengah_0.set('fieldLabels', {'Kabupaten': 'inline label', 'Provinsi': 'inline label', 'tnimb_ton': 'inline label', 'pgr_ton': 'inline label', 'tpng_ton': 'inline label', 'pgr(%)': 'inline label', 'png(%)': 'inline label', });
lyr_JawaTengah_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});