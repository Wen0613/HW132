ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3828").setExtent([270526.758476, 2719446.158269, 358619.770302, 2832819.155919]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_200mm_2 = new ol.format.GeoJSON();
var features_200mm_2 = format_200mm_2.readFeatures(json_200mm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3828'});
var jsonSource_200mm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mm_2.addFeatures(features_200mm_2);
var lyr_200mm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200mm_2, 
                style: style_200mm_2,
                interactive: true,
    title: '一日雨量200mm<br />\
    <img src="styles/legend/200mm_2_0.png" /> 0<淹水深度<0.3公尺<br />\
    <img src="styles/legend/200mm_2_1.png" /> 0.3公尺<淹水深度<0.5公尺<br />\
    <img src="styles/legend/200mm_2_2.png" /> 0.5公尺<淹水深度<1公尺<br />\
    <img src="styles/legend/200mm_2_3.png" /> 1公尺<淹水深度<2公尺<br />\
    <img src="styles/legend/200mm_2_4.png" /> 2公尺<淹水深度<3公尺<br />\
    <img src="styles/legend/200mm_2_5.png" /> 3公尺<淹水深度<br />\
    <img src="styles/legend/200mm_2_6.png" /> <br />'
        });
var format_500mm_3 = new ol.format.GeoJSON();
var features_500mm_3 = format_500mm_3.readFeatures(json_500mm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3828'});
var jsonSource_500mm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500mm_3.addFeatures(features_500mm_3);
var lyr_500mm_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_500mm_3, 
                style: style_500mm_3,
                interactive: true,
    title: '一日雨量500mm<br />\
    <img src="styles/legend/500mm_3_0.png" /> 0<淹水深度<0.3公尺<br />\
    <img src="styles/legend/500mm_3_1.png" /> 0.3公尺<淹水深度<0.5公尺<br />\
    <img src="styles/legend/500mm_3_2.png" /> 0.5公尺<淹水深度<1公尺<br />\
    <img src="styles/legend/500mm_3_3.png" /> 1公尺<淹水深度<2公尺<br />\
    <img src="styles/legend/500mm_3_4.png" /> 2公尺<淹水深度<3公尺<br />\
    <img src="styles/legend/500mm_3_5.png" /> 3公尺<淹水深度<br />\
    <img src="styles/legend/500mm_3_6.png" /> <br />'
        });
var format_650mm_4 = new ol.format.GeoJSON();
var features_650mm_4 = format_650mm_4.readFeatures(json_650mm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3828'});
var jsonSource_650mm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_650mm_4.addFeatures(features_650mm_4);
var lyr_650mm_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_650mm_4, 
                style: style_650mm_4,
                interactive: true,
    title: '一日雨量650mm<br />\
    <img src="styles/legend/650mm_4_0.png" /> 0<淹水深度<0.3公尺<br />\
    <img src="styles/legend/650mm_4_1.png" /> 0.3公尺<淹水深度<0.5公尺<br />\
    <img src="styles/legend/650mm_4_2.png" /> 0.5公尺<淹水深度<1公尺<br />\
    <img src="styles/legend/650mm_4_3.png" /> 1公尺<淹水深度<2公尺<br />\
    <img src="styles/legend/650mm_4_4.png" /> 2公尺<淹水深度<3公尺<br />\
    <img src="styles/legend/650mm_4_5.png" /> 3公尺<淹水深度<br />\
    <img src="styles/legend/650mm_4_6.png" /> <br />'
        });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3828'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 台灣縣市'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_200mm_2.setVisible(true);lyr_500mm_3.setVisible(true);lyr_650mm_4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_200mm_2,lyr_500mm_3,lyr_650mm_4,lyr__5];
lyr_200mm_2.set('fieldAliases', {'fid': 'fid', 'type': 'type', });
lyr_500mm_3.set('fieldAliases', {'fid': 'fid', 'type': 'type', });
lyr_650mm_4.set('fieldAliases', {'fid': 'fid', 'type': 'type', });
lyr__5.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', });
lyr_200mm_2.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', });
lyr_500mm_3.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', });
lyr_650mm_4.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', });
lyr__5.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', });
lyr_200mm_2.set('fieldLabels', {'fid': 'no label', 'type': 'header label', });
lyr_500mm_3.set('fieldLabels', {'fid': 'no label', 'type': 'header label', });
lyr_650mm_4.set('fieldLabels', {'fid': 'no label', 'type': 'header label', });
lyr__5.set('fieldLabels', {'COUNTYID': 'no label', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'no label', 'COUNTYENG': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});