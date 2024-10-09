ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([99.964857, 12.509275, 99.987575, 12.521499]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 0.383000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_9_1 = new ol.format.GeoJSON();
var features_9_1 = format_9_1.readFeatures(json_9_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_9_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_1.addFeatures(features_9_1);
var lyr_9_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9_1, 
                style: style_9_1,
                popuplayertitle: "ทริปไหว้พระ 9 วัด",
                interactive: true,
                title: '<img src="styles/legend/9_1.png" /> ทริปไหว้พระ 9 วัด'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "วันเดียวเที่ยวสุดคุ้มกับเรา",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> วันเดียวเที่ยวสุดคุ้มกับเรา'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "คาเฟ่ โซนเขาเต่า",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> คาเฟ่ โซนเขาเต่า'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "ทริปธรรมชาติ",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ทริปธรรมชาติ'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_9_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_9_1,lyr__2,lyr__3,lyr__4];
lyr_9_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__4.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_9_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_9_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__2.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__3.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__4.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});