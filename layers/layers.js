var wms_layers = [];

var lyr_Geosrbija_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/ortofoto2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "orto:basemap2020",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Geosrbija',
                            popuplayertitle: 'Geosrbija',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Geosrbija_0, 0]);

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zona_3_3 = new ol.format.GeoJSON();
var features_Zona_3_3 = format_Zona_3_3.readFeatures(json_Zona_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_3_3.addFeatures(features_Zona_3_3);
var lyr_Zona_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_3_3, 
                style: style_Zona_3_3,
                popuplayertitle: 'Zona_3',
                interactive: true,
                title: '<img src="styles/legend/Zona_3_3.png" /> Zona_3'
            });
var format_Zona_2_4 = new ol.format.GeoJSON();
var features_Zona_2_4 = format_Zona_2_4.readFeatures(json_Zona_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_2_4.addFeatures(features_Zona_2_4);
var lyr_Zona_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_2_4, 
                style: style_Zona_2_4,
                popuplayertitle: 'Zona_2',
                interactive: true,
                title: '<img src="styles/legend/Zona_2_4.png" /> Zona_2'
            });
var format_Zona_1_5 = new ol.format.GeoJSON();
var features_Zona_1_5 = format_Zona_1_5.readFeatures(json_Zona_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_1_5.addFeatures(features_Zona_1_5);
var lyr_Zona_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_1_5, 
                style: style_Zona_1_5,
                popuplayertitle: 'Zona_1',
                interactive: true,
                title: '<img src="styles/legend/Zona_1_5.png" /> Zona_1'
            });
var format_Goc_Gvozdac_6 = new ol.format.GeoJSON();
var features_Goc_Gvozdac_6 = format_Goc_Gvozdac_6.readFeatures(json_Goc_Gvozdac_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goc_Gvozdac_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goc_Gvozdac_6.addFeatures(features_Goc_Gvozdac_6);
var lyr_Goc_Gvozdac_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Goc_Gvozdac_6, 
                style: style_Goc_Gvozdac_6,
                popuplayertitle: 'Goc_Gvozdac',
                interactive: true,
                title: '<img src="styles/legend/Goc_Gvozdac_6.png" /> Goc_Gvozdac'
            });
var format_Zona_3_7 = new ol.format.GeoJSON();
var features_Zona_3_7 = format_Zona_3_7.readFeatures(json_Zona_3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_3_7.addFeatures(features_Zona_3_7);
var lyr_Zona_3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_3_7, 
                style: style_Zona_3_7,
                popuplayertitle: 'Zona_3',
                interactive: true,
                title: '<img src="styles/legend/Zona_3_7.png" /> Zona_3'
            });
var format_Zona_2_8 = new ol.format.GeoJSON();
var features_Zona_2_8 = format_Zona_2_8.readFeatures(json_Zona_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_2_8.addFeatures(features_Zona_2_8);
var lyr_Zona_2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_2_8, 
                style: style_Zona_2_8,
                popuplayertitle: 'Zona_2',
                interactive: true,
                title: '<img src="styles/legend/Zona_2_8.png" /> Zona_2'
            });
var format_Zona_1_9 = new ol.format.GeoJSON();
var features_Zona_1_9 = format_Zona_1_9.readFeatures(json_Zona_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_1_9.addFeatures(features_Zona_1_9);
var lyr_Zona_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_1_9, 
                style: style_Zona_1_9,
                popuplayertitle: 'Zona_1',
                interactive: true,
                title: '<img src="styles/legend/Zona_1_9.png" /> Zona_1'
            });
var format_Jelica_10 = new ol.format.GeoJSON();
var features_Jelica_10 = format_Jelica_10.readFeatures(json_Jelica_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jelica_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jelica_10.addFeatures(features_Jelica_10);
var lyr_Jelica_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jelica_10, 
                style: style_Jelica_10,
                popuplayertitle: 'Jelica',
                interactive: true,
                title: '<img src="styles/legend/Jelica_10.png" /> Jelica'
            });
var format_Zona_3_11 = new ol.format.GeoJSON();
var features_Zona_3_11 = format_Zona_3_11.readFeatures(json_Zona_3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_3_11.addFeatures(features_Zona_3_11);
var lyr_Zona_3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_3_11, 
                style: style_Zona_3_11,
                popuplayertitle: 'Zona_3',
                interactive: true,
                title: '<img src="styles/legend/Zona_3_11.png" /> Zona_3'
            });
var format_Zona_2_12 = new ol.format.GeoJSON();
var features_Zona_2_12 = format_Zona_2_12.readFeatures(json_Zona_2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_2_12.addFeatures(features_Zona_2_12);
var lyr_Zona_2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_2_12, 
                style: style_Zona_2_12,
                popuplayertitle: 'Zona_2',
                interactive: true,
                title: '<img src="styles/legend/Zona_2_12.png" /> Zona_2'
            });
var format_Zona_1_13 = new ol.format.GeoJSON();
var features_Zona_1_13 = format_Zona_1_13.readFeatures(json_Zona_1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_1_13.addFeatures(features_Zona_1_13);
var lyr_Zona_1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_1_13, 
                style: style_Zona_1_13,
                popuplayertitle: 'Zona_1',
                interactive: true,
                title: '<img src="styles/legend/Zona_1_13.png" /> Zona_1'
            });
var format_Golija_14 = new ol.format.GeoJSON();
var features_Golija_14 = format_Golija_14.readFeatures(json_Golija_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Golija_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Golija_14.addFeatures(features_Golija_14);
var lyr_Golija_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Golija_14, 
                style: style_Golija_14,
                popuplayertitle: 'Golija',
                interactive: true,
                title: '<img src="styles/legend/Golija_14.png" /> Golija'
            });
var format_Zona_3_15 = new ol.format.GeoJSON();
var features_Zona_3_15 = format_Zona_3_15.readFeatures(json_Zona_3_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_3_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_3_15.addFeatures(features_Zona_3_15);
var lyr_Zona_3_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_3_15, 
                style: style_Zona_3_15,
                popuplayertitle: 'Zona_3',
                interactive: true,
                title: '<img src="styles/legend/Zona_3_15.png" /> Zona_3'
            });
var format_Zona_2_16 = new ol.format.GeoJSON();
var features_Zona_2_16 = format_Zona_2_16.readFeatures(json_Zona_2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_2_16.addFeatures(features_Zona_2_16);
var lyr_Zona_2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_2_16, 
                style: style_Zona_2_16,
                popuplayertitle: 'Zona_2',
                interactive: true,
                title: '<img src="styles/legend/Zona_2_16.png" /> Zona_2'
            });
var format_Zona_1_17 = new ol.format.GeoJSON();
var features_Zona_1_17 = format_Zona_1_17.readFeatures(json_Zona_1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_1_17.addFeatures(features_Zona_1_17);
var lyr_Zona_1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_1_17, 
                style: style_Zona_1_17,
                popuplayertitle: 'Zona_1',
                interactive: true,
                title: '<img src="styles/legend/Zona_1_17.png" /> Zona_1'
            });
var format_Stolovi_18 = new ol.format.GeoJSON();
var features_Stolovi_18 = format_Stolovi_18.readFeatures(json_Stolovi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stolovi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stolovi_18.addFeatures(features_Stolovi_18);
var lyr_Stolovi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stolovi_18, 
                style: style_Stolovi_18,
                popuplayertitle: 'Stolovi',
                interactive: true,
                title: '<img src="styles/legend/Stolovi_18.png" /> Stolovi'
            });
var format_Zona_3_19 = new ol.format.GeoJSON();
var features_Zona_3_19 = format_Zona_3_19.readFeatures(json_Zona_3_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_3_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_3_19.addFeatures(features_Zona_3_19);
var lyr_Zona_3_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_3_19, 
                style: style_Zona_3_19,
                popuplayertitle: 'Zona_3',
                interactive: true,
                title: '<img src="styles/legend/Zona_3_19.png" /> Zona_3'
            });
var format_Zona_2_20 = new ol.format.GeoJSON();
var features_Zona_2_20 = format_Zona_2_20.readFeatures(json_Zona_2_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_2_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_2_20.addFeatures(features_Zona_2_20);
var lyr_Zona_2_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_2_20, 
                style: style_Zona_2_20,
                popuplayertitle: 'Zona_2',
                interactive: true,
                title: '<img src="styles/legend/Zona_2_20.png" /> Zona_2'
            });
var format_Zona_1_21 = new ol.format.GeoJSON();
var features_Zona_1_21 = format_Zona_1_21.readFeatures(json_Zona_1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_1_21.addFeatures(features_Zona_1_21);
var lyr_Zona_1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_1_21, 
                style: style_Zona_1_21,
                popuplayertitle: 'Zona_1',
                interactive: true,
                title: '<img src="styles/legend/Zona_1_21.png" /> Zona_1'
            });
var format_Zeljin_22 = new ol.format.GeoJSON();
var features_Zeljin_22 = format_Zeljin_22.readFeatures(json_Zeljin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zeljin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zeljin_22.addFeatures(features_Zeljin_22);
var lyr_Zeljin_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zeljin_22, 
                style: style_Zeljin_22,
                popuplayertitle: 'Zeljin',
                interactive: true,
                title: '<img src="styles/legend/Zeljin_22.png" /> Zeljin'
            });
var format_ppppngranicaplanaIbarskeelektrane_23 = new ol.format.GeoJSON();
var features_ppppngranicaplanaIbarskeelektrane_23 = format_ppppngranicaplanaIbarskeelektrane_23.readFeatures(json_ppppngranicaplanaIbarskeelektrane_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ppppngranicaplanaIbarskeelektrane_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ppppngranicaplanaIbarskeelektrane_23.addFeatures(features_ppppngranicaplanaIbarskeelektrane_23);
var lyr_ppppngranicaplanaIbarskeelektrane_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ppppngranicaplanaIbarskeelektrane_23, 
                style: style_ppppngranicaplanaIbarskeelektrane_23,
                popuplayertitle: 'ppppn granica plana Ibarske elektrane',
                interactive: true,
                title: '<img src="styles/legend/ppppngranicaplanaIbarskeelektrane_23.png" /> ppppn granica plana Ibarske elektrane'
            });
var format_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24 = new ol.format.GeoJSON();
var features_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24 = format_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.readFeatures(json_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.addFeatures(features_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24);
var lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24, 
                style: style_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24,
                popuplayertitle: 'ppppn IBARSKE ELEKTRANE-direktno sprovodjenje',
                interactive: true,
                title: '<img src="styles/legend/ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.png" /> ppppn IBARSKE ELEKTRANE-direktno sprovodjenje'
            });
var format_Ggranicarezervatabiosferemabgolija_25 = new ol.format.GeoJSON();
var features_Ggranicarezervatabiosferemabgolija_25 = format_Ggranicarezervatabiosferemabgolija_25.readFeatures(json_Ggranicarezervatabiosferemabgolija_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ggranicarezervatabiosferemabgolija_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ggranicarezervatabiosferemabgolija_25.addFeatures(features_Ggranicarezervatabiosferemabgolija_25);
var lyr_Ggranicarezervatabiosferemabgolija_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ggranicarezervatabiosferemabgolija_25, 
                style: style_Ggranicarezervatabiosferemabgolija_25,
                popuplayertitle: 'Ggranica rezervata biosfere mab golija',
                interactive: true,
                title: '<img src="styles/legend/Ggranicarezervatabiosferemabgolija_25.png" /> Ggranica rezervata biosfere mab golija'
            });
var format_PPPNParkaprirodeGolija_26 = new ol.format.GeoJSON();
var features_PPPNParkaprirodeGolija_26 = format_PPPNParkaprirodeGolija_26.readFeatures(json_PPPNParkaprirodeGolija_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPPNParkaprirodeGolija_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPPNParkaprirodeGolija_26.addFeatures(features_PPPNParkaprirodeGolija_26);
var lyr_PPPNParkaprirodeGolija_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPPNParkaprirodeGolija_26, 
                style: style_PPPNParkaprirodeGolija_26,
                popuplayertitle: 'PPPN Parka prirode Golija',
                interactive: true,
                title: '<img src="styles/legend/PPPNParkaprirodeGolija_26.png" /> PPPN Parka prirode Golija'
            });
var format_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27 = new ol.format.GeoJSON();
var features_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27 = format_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.readFeatures(json_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.addFeatures(features_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27);
var lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27, 
                style: style_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27,
                popuplayertitle: 'PPPPN MANASTIR STUDENICA-GRANICA II ZONE',
                interactive: true,
                title: '<img src="styles/legend/PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.png" /> PPPPN MANASTIR STUDENICA-GRANICA II ZONE'
            });
var format_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28 = new ol.format.GeoJSON();
var features_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28 = format_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.readFeatures(json_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.addFeatures(features_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28);
var lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28, 
                style: style_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28,
                popuplayertitle: 'PPPPN MANASTIR STUDENICA-GRANICA I ZONE',
                interactive: true,
                title: '<img src="styles/legend/PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.png" /> PPPPN MANASTIR STUDENICA-GRANICA I ZONE'
            });
var format_PPPPNAerodromMoravadetaljnarazrada_29 = new ol.format.GeoJSON();
var features_PPPPNAerodromMoravadetaljnarazrada_29 = format_PPPPNAerodromMoravadetaljnarazrada_29.readFeatures(json_PPPPNAerodromMoravadetaljnarazrada_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPPPNAerodromMoravadetaljnarazrada_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPPPNAerodromMoravadetaljnarazrada_29.addFeatures(features_PPPPNAerodromMoravadetaljnarazrada_29);
var lyr_PPPPNAerodromMoravadetaljnarazrada_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPPPNAerodromMoravadetaljnarazrada_29, 
                style: style_PPPPNAerodromMoravadetaljnarazrada_29,
                popuplayertitle: 'PPPPN Aerodrom Morava-detaljna razrada ',
                interactive: true,
                title: '<img src="styles/legend/PPPPNAerodromMoravadetaljnarazrada_29.png" /> PPPPN Aerodrom Morava-detaljna razrada '
            });
var format_GRANICAPLANOVA_30 = new ol.format.GeoJSON();
var features_GRANICAPLANOVA_30 = format_GRANICAPLANOVA_30.readFeatures(json_GRANICAPLANOVA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRANICAPLANOVA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANICAPLANOVA_30.addFeatures(features_GRANICAPLANOVA_30);
var lyr_GRANICAPLANOVA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANICAPLANOVA_30, 
                style: style_GRANICAPLANOVA_30,
                popuplayertitle: 'GRANICA PLANOVA',
                interactive: true,
                title: '<img src="styles/legend/GRANICAPLANOVA_30.png" /> GRANICA PLANOVA'
            });
var format_ZASTITNAPODRUCJAREZIMIZASTITE_31 = new ol.format.GeoJSON();
var features_ZASTITNAPODRUCJAREZIMIZASTITE_31 = format_ZASTITNAPODRUCJAREZIMIZASTITE_31.readFeatures(json_ZASTITNAPODRUCJAREZIMIZASTITE_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZASTITNAPODRUCJAREZIMIZASTITE_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZASTITNAPODRUCJAREZIMIZASTITE_31.addFeatures(features_ZASTITNAPODRUCJAREZIMIZASTITE_31);
var lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZASTITNAPODRUCJAREZIMIZASTITE_31, 
                style: style_ZASTITNAPODRUCJAREZIMIZASTITE_31,
                popuplayertitle: 'ZASTITNA PODRUCJA - REZIMI ZASTITE',
                interactive: true,
    title: 'ZASTITNA PODRUCJA - REZIMI ZASTITE<br />\
    <img src="styles/legend/ZASTITNAPODRUCJAREZIMIZASTITE_31_0.png" /> I stepen zastite<br />\
    <img src="styles/legend/ZASTITNAPODRUCJAREZIMIZASTITE_31_1.png" /> II stepen zastite<br />\
    <img src="styles/legend/ZASTITNAPODRUCJAREZIMIZASTITE_31_2.png" /> III stepen zastite<br />\
    <img src="styles/legend/ZASTITNAPODRUCJAREZIMIZASTITE_31_3.png" /> Kulturno dobro<br />\
    <img src="styles/legend/ZASTITNAPODRUCJAREZIMIZASTITE_31_4.png" /> Sanitarna zastita<br />' });
var format_SUMSKOZEMLJISTEADRANI_32 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEADRANI_32 = format_SUMSKOZEMLJISTEADRANI_32.readFeatures(json_SUMSKOZEMLJISTEADRANI_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEADRANI_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEADRANI_32.addFeatures(features_SUMSKOZEMLJISTEADRANI_32);
var lyr_SUMSKOZEMLJISTEADRANI_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEADRANI_32, 
                style: style_SUMSKOZEMLJISTEADRANI_32,
                popuplayertitle: 'SUMSKO ZEMLJISTE ADRANI ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEADRANI_32.png" /> SUMSKO ZEMLJISTE ADRANI '
            });
var format_SUMSKOZEMLJISTEBAPSKOPOLJE_33 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBAPSKOPOLJE_33 = format_SUMSKOZEMLJISTEBAPSKOPOLJE_33.readFeatures(json_SUMSKOZEMLJISTEBAPSKOPOLJE_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBAPSKOPOLJE_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBAPSKOPOLJE_33.addFeatures(features_SUMSKOZEMLJISTEBAPSKOPOLJE_33);
var lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBAPSKOPOLJE_33, 
                style: style_SUMSKOZEMLJISTEBAPSKOPOLJE_33,
                popuplayertitle: 'SUMSKO ZEMLJISTE BAPSKO POLJE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBAPSKOPOLJE_33.png" /> SUMSKO ZEMLJISTE BAPSKO POLJE '
            });
var format_SUMSKOZEMLJISTECERJE_34 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTECERJE_34 = format_SUMSKOZEMLJISTECERJE_34.readFeatures(json_SUMSKOZEMLJISTECERJE_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTECERJE_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTECERJE_34.addFeatures(features_SUMSKOZEMLJISTECERJE_34);
var lyr_SUMSKOZEMLJISTECERJE_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTECERJE_34, 
                style: style_SUMSKOZEMLJISTECERJE_34,
                popuplayertitle: 'SUMSKO ZEMLJISTE CERJE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTECERJE_34.png" /> SUMSKO ZEMLJISTE CERJE '
            });
var format_SUMSKOZEMLJISTEDOLAC_35 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDOLAC_35 = format_SUMSKOZEMLJISTEDOLAC_35.readFeatures(json_SUMSKOZEMLJISTEDOLAC_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDOLAC_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDOLAC_35.addFeatures(features_SUMSKOZEMLJISTEDOLAC_35);
var lyr_SUMSKOZEMLJISTEDOLAC_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDOLAC_35, 
                style: style_SUMSKOZEMLJISTEDOLAC_35,
                popuplayertitle: 'SUMSKO ZEMLJISTE DOLAC ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDOLAC_35.png" /> SUMSKO ZEMLJISTE DOLAC '
            });
var format_SUMSKOZEMLJISTEBZOVIK_36 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBZOVIK_36 = format_SUMSKOZEMLJISTEBZOVIK_36.readFeatures(json_SUMSKOZEMLJISTEBZOVIK_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBZOVIK_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBZOVIK_36.addFeatures(features_SUMSKOZEMLJISTEBZOVIK_36);
var lyr_SUMSKOZEMLJISTEBZOVIK_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBZOVIK_36, 
                style: style_SUMSKOZEMLJISTEBZOVIK_36,
                popuplayertitle: 'SUMSKO ZEMLJISTE BZOVIK ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBZOVIK_36.png" /> SUMSKO ZEMLJISTE BZOVIK '
            });
var format_SUMSKOZEMLJISTEBUKOVICA_37 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBUKOVICA_37 = format_SUMSKOZEMLJISTEBUKOVICA_37.readFeatures(json_SUMSKOZEMLJISTEBUKOVICA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBUKOVICA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBUKOVICA_37.addFeatures(features_SUMSKOZEMLJISTEBUKOVICA_37);
var lyr_SUMSKOZEMLJISTEBUKOVICA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBUKOVICA_37, 
                style: style_SUMSKOZEMLJISTEBUKOVICA_37,
                popuplayertitle: 'SUMSKO ZEMLJISTE BUKOVICA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBUKOVICA_37.png" /> SUMSKO ZEMLJISTE BUKOVICA '
            });
var format_SUMSKOZEMLJISTEDEDEVCI_38 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDEDEVCI_38 = format_SUMSKOZEMLJISTEDEDEVCI_38.readFeatures(json_SUMSKOZEMLJISTEDEDEVCI_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDEDEVCI_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDEDEVCI_38.addFeatures(features_SUMSKOZEMLJISTEDEDEVCI_38);
var lyr_SUMSKOZEMLJISTEDEDEVCI_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDEDEVCI_38, 
                style: style_SUMSKOZEMLJISTEDEDEVCI_38,
                popuplayertitle: 'SUMSKO ZEMLJISTE DEDEVCI ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDEDEVCI_38.png" /> SUMSKO ZEMLJISTE DEDEVCI '
            });
var format_SUMSKOZEMLJISTEDRAKCICI_39 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDRAKCICI_39 = format_SUMSKOZEMLJISTEDRAKCICI_39.readFeatures(json_SUMSKOZEMLJISTEDRAKCICI_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDRAKCICI_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDRAKCICI_39.addFeatures(features_SUMSKOZEMLJISTEDRAKCICI_39);
var lyr_SUMSKOZEMLJISTEDRAKCICI_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDRAKCICI_39, 
                style: style_SUMSKOZEMLJISTEDRAKCICI_39,
                popuplayertitle: 'SUMSKO ZEMLJISTE DRAKCICI ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDRAKCICI_39.png" /> SUMSKO ZEMLJISTE DRAKCICI '
            });
var format_SUMSKOZEMLJISTEDRAGOSINJCE_40 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDRAGOSINJCE_40 = format_SUMSKOZEMLJISTEDRAGOSINJCE_40.readFeatures(json_SUMSKOZEMLJISTEDRAGOSINJCE_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDRAGOSINJCE_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDRAGOSINJCE_40.addFeatures(features_SUMSKOZEMLJISTEDRAGOSINJCE_40);
var lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDRAGOSINJCE_40, 
                style: style_SUMSKOZEMLJISTEDRAGOSINJCE_40,
                popuplayertitle: 'SUMSKO ZEMLJISTE DRAGOSINJCE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDRAGOSINJCE_40.png" /> SUMSKO ZEMLJISTE DRAGOSINJCE '
            });
var format_SUMSKOZEMLJISTEDJAKOVO_41 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDJAKOVO_41 = format_SUMSKOZEMLJISTEDJAKOVO_41.readFeatures(json_SUMSKOZEMLJISTEDJAKOVO_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDJAKOVO_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDJAKOVO_41.addFeatures(features_SUMSKOZEMLJISTEDJAKOVO_41);
var lyr_SUMSKOZEMLJISTEDJAKOVO_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDJAKOVO_41, 
                style: style_SUMSKOZEMLJISTEDJAKOVO_41,
                popuplayertitle: 'SUMSKO ZEMLJISTE DJAKOVO ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDJAKOVO_41.png" /> SUMSKO ZEMLJISTE DJAKOVO '
            });
var format_SUMSKOZEMLJISTEGOKCANICA_42 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEGOKCANICA_42 = format_SUMSKOZEMLJISTEGOKCANICA_42.readFeatures(json_SUMSKOZEMLJISTEGOKCANICA_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEGOKCANICA_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEGOKCANICA_42.addFeatures(features_SUMSKOZEMLJISTEGOKCANICA_42);
var lyr_SUMSKOZEMLJISTEGOKCANICA_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEGOKCANICA_42, 
                style: style_SUMSKOZEMLJISTEGOKCANICA_42,
                popuplayertitle: 'SUMSKO ZEMLJISTE GOKCANICA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEGOKCANICA_42.png" /> SUMSKO ZEMLJISTE GOKCANICA '
            });
var format_SUMSKOZEMLJISTEDRAZINICI_43 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDRAZINICI_43 = format_SUMSKOZEMLJISTEDRAZINICI_43.readFeatures(json_SUMSKOZEMLJISTEDRAZINICI_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDRAZINICI_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDRAZINICI_43.addFeatures(features_SUMSKOZEMLJISTEDRAZINICI_43);
var lyr_SUMSKOZEMLJISTEDRAZINICI_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDRAZINICI_43, 
                style: style_SUMSKOZEMLJISTEDRAZINICI_43,
                popuplayertitle: 'SUMSKO ZEMLJISTE DRAZINICI ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDRAZINICI_43.png" /> SUMSKO ZEMLJISTE DRAZINICI '
            });
var format_SUMSKOZEMLJISTECVETKE_44 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTECVETKE_44 = format_SUMSKOZEMLJISTECVETKE_44.readFeatures(json_SUMSKOZEMLJISTECVETKE_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTECVETKE_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTECVETKE_44.addFeatures(features_SUMSKOZEMLJISTECVETKE_44);
var lyr_SUMSKOZEMLJISTECVETKE_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTECVETKE_44, 
                style: style_SUMSKOZEMLJISTECVETKE_44,
                popuplayertitle: 'SUMSKO ZEMLJISTE CVETKE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTECVETKE_44.png" /> SUMSKO ZEMLJISTE CVETKE '
            });
var format_SUMSKOZEMLJISTEGOTOVAC1_45 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEGOTOVAC1_45 = format_SUMSKOZEMLJISTEGOTOVAC1_45.readFeatures(json_SUMSKOZEMLJISTEGOTOVAC1_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEGOTOVAC1_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEGOTOVAC1_45.addFeatures(features_SUMSKOZEMLJISTEGOTOVAC1_45);
var lyr_SUMSKOZEMLJISTEGOTOVAC1_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEGOTOVAC1_45, 
                style: style_SUMSKOZEMLJISTEGOTOVAC1_45,
                popuplayertitle: 'SUMSKO ZEMLJISTE GOTOVAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEGOTOVAC1_45.png" /> SUMSKO ZEMLJISTE GOTOVAC1'
            });
var format_SUMSKOZEMLJISTEBREZNA_46 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBREZNA_46 = format_SUMSKOZEMLJISTEBREZNA_46.readFeatures(json_SUMSKOZEMLJISTEBREZNA_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBREZNA_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBREZNA_46.addFeatures(features_SUMSKOZEMLJISTEBREZNA_46);
var lyr_SUMSKOZEMLJISTEBREZNA_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBREZNA_46, 
                style: style_SUMSKOZEMLJISTEBREZNA_46,
                popuplayertitle: 'SUMSKO ZEMLJISTE BREZNA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBREZNA_46.png" /> SUMSKO ZEMLJISTE BREZNA '
            });
var format_SUMSKOZEMLJISTEGLEDIC_47 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEGLEDIC_47 = format_SUMSKOZEMLJISTEGLEDIC_47.readFeatures(json_SUMSKOZEMLJISTEGLEDIC_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEGLEDIC_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEGLEDIC_47.addFeatures(features_SUMSKOZEMLJISTEGLEDIC_47);
var lyr_SUMSKOZEMLJISTEGLEDIC_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEGLEDIC_47, 
                style: style_SUMSKOZEMLJISTEGLEDIC_47,
                popuplayertitle: 'SUMSKO ZEMLJISTE GLEDIC ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEGLEDIC_47.png" /> SUMSKO ZEMLJISTE GLEDIC '
            });
var format_SUMSKOZEMLJISTEDRLUPA_48 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEDRLUPA_48 = format_SUMSKOZEMLJISTEDRLUPA_48.readFeatures(json_SUMSKOZEMLJISTEDRLUPA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEDRLUPA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEDRLUPA_48.addFeatures(features_SUMSKOZEMLJISTEDRLUPA_48);
var lyr_SUMSKOZEMLJISTEDRLUPA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEDRLUPA_48, 
                style: style_SUMSKOZEMLJISTEDRLUPA_48,
                popuplayertitle: 'SUMSKO ZEMLJISTE DRLUPA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEDRLUPA_48.png" /> SUMSKO ZEMLJISTE DRLUPA '
            });
var format_SUMSKOZEMLJISTEKAMENICA1_49 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEKAMENICA1_49 = format_SUMSKOZEMLJISTEKAMENICA1_49.readFeatures(json_SUMSKOZEMLJISTEKAMENICA1_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEKAMENICA1_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEKAMENICA1_49.addFeatures(features_SUMSKOZEMLJISTEKAMENICA1_49);
var lyr_SUMSKOZEMLJISTEKAMENICA1_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEKAMENICA1_49, 
                style: style_SUMSKOZEMLJISTEKAMENICA1_49,
                popuplayertitle: 'SUMSKO ZEMLJISTE KAMENICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEKAMENICA1_49.png" /> SUMSKO ZEMLJISTE KAMENICA1'
            });
var format_SUMSKOZEMLJISTEGODACICA_50 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEGODACICA_50 = format_SUMSKOZEMLJISTEGODACICA_50.readFeatures(json_SUMSKOZEMLJISTEGODACICA_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEGODACICA_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEGODACICA_50.addFeatures(features_SUMSKOZEMLJISTEGODACICA_50);
var lyr_SUMSKOZEMLJISTEGODACICA_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEGODACICA_50, 
                style: style_SUMSKOZEMLJISTEGODACICA_50,
                popuplayertitle: 'SUMSKO  ZEMLJISTE GODACICA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEGODACICA_50.png" /> SUMSKO  ZEMLJISTE GODACICA '
            });
var format_SUMSKOZEMLJISTEBRESNIK_51 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBRESNIK_51 = format_SUMSKOZEMLJISTEBRESNIK_51.readFeatures(json_SUMSKOZEMLJISTEBRESNIK_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBRESNIK_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBRESNIK_51.addFeatures(features_SUMSKOZEMLJISTEBRESNIK_51);
var lyr_SUMSKOZEMLJISTEBRESNIK_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBRESNIK_51, 
                style: style_SUMSKOZEMLJISTEBRESNIK_51,
                popuplayertitle: 'SUMSKO ZEMLJISTE BRESNIK ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBRESNIK_51.png" /> SUMSKO ZEMLJISTE BRESNIK '
            });
var format_SUMSKOZEMLJISTEKONAREVO1_52 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEKONAREVO1_52 = format_SUMSKOZEMLJISTEKONAREVO1_52.readFeatures(json_SUMSKOZEMLJISTEKONAREVO1_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEKONAREVO1_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEKONAREVO1_52.addFeatures(features_SUMSKOZEMLJISTEKONAREVO1_52);
var lyr_SUMSKOZEMLJISTEKONAREVO1_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEKONAREVO1_52, 
                style: style_SUMSKOZEMLJISTEKONAREVO1_52,
                popuplayertitle: 'SUMSKO ZEMLJISTE KONAREVO1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEKONAREVO1_52.png" /> SUMSKO ZEMLJISTE KONAREVO1'
            });
var format_SUMSKOZEMLJISTECUKOJEVAC_53 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTECUKOJEVAC_53 = format_SUMSKOZEMLJISTECUKOJEVAC_53.readFeatures(json_SUMSKOZEMLJISTECUKOJEVAC_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTECUKOJEVAC_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTECUKOJEVAC_53.addFeatures(features_SUMSKOZEMLJISTECUKOJEVAC_53);
var lyr_SUMSKOZEMLJISTECUKOJEVAC_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTECUKOJEVAC_53, 
                style: style_SUMSKOZEMLJISTECUKOJEVAC_53,
                popuplayertitle: 'SUMSKO ZEMLJISTE CUKOJEVAC ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTECUKOJEVAC_53.png" /> SUMSKO ZEMLJISTE CUKOJEVAC '
            });
var format_SUMSKOZEMLJISTEKRUSEVICA_54 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEKRUSEVICA_54 = format_SUMSKOZEMLJISTEKRUSEVICA_54.readFeatures(json_SUMSKOZEMLJISTEKRUSEVICA_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEKRUSEVICA_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEKRUSEVICA_54.addFeatures(features_SUMSKOZEMLJISTEKRUSEVICA_54);
var lyr_SUMSKOZEMLJISTEKRUSEVICA_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEKRUSEVICA_54, 
                style: style_SUMSKOZEMLJISTEKRUSEVICA_54,
                popuplayertitle: 'SUMSKO ZEMLJISTE KRUSEVICA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEKRUSEVICA_54.png" /> SUMSKO ZEMLJISTE KRUSEVICA '
            });
var format_SUMSKOZEMLJISTEBOGUTOVAC1_55 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBOGUTOVAC1_55 = format_SUMSKOZEMLJISTEBOGUTOVAC1_55.readFeatures(json_SUMSKOZEMLJISTEBOGUTOVAC1_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBOGUTOVAC1_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBOGUTOVAC1_55.addFeatures(features_SUMSKOZEMLJISTEBOGUTOVAC1_55);
var lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBOGUTOVAC1_55, 
                style: style_SUMSKOZEMLJISTEBOGUTOVAC1_55,
                popuplayertitle: 'SUMSKO ZEMLJISTE BOGUTOVAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBOGUTOVAC1_55.png" /> SUMSKO ZEMLJISTE BOGUTOVAC1'
            });
var format_SUMSKOZEMLJISTELESEVO1_56 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTELESEVO1_56 = format_SUMSKOZEMLJISTELESEVO1_56.readFeatures(json_SUMSKOZEMLJISTELESEVO1_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTELESEVO1_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTELESEVO1_56.addFeatures(features_SUMSKOZEMLJISTELESEVO1_56);
var lyr_SUMSKOZEMLJISTELESEVO1_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTELESEVO1_56, 
                style: style_SUMSKOZEMLJISTELESEVO1_56,
                popuplayertitle: 'SUMSKO  ZEMLJISTE LESEVO1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTELESEVO1_56.png" /> SUMSKO  ZEMLJISTE LESEVO1'
            });
var format_SUMSKOZEMLJISTELADJEVCI_57 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTELADJEVCI_57 = format_SUMSKOZEMLJISTELADJEVCI_57.readFeatures(json_SUMSKOZEMLJISTELADJEVCI_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTELADJEVCI_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTELADJEVCI_57.addFeatures(features_SUMSKOZEMLJISTELADJEVCI_57);
var lyr_SUMSKOZEMLJISTELADJEVCI_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTELADJEVCI_57, 
                style: style_SUMSKOZEMLJISTELADJEVCI_57,
                popuplayertitle: 'SUMSKO ZEMLJISTE LADJEVCI ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTELADJEVCI_57.png" /> SUMSKO ZEMLJISTE LADJEVCI '
            });
var format_SUMSKOZEMLJISTEBARE_58 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBARE_58 = format_SUMSKOZEMLJISTEBARE_58.readFeatures(json_SUMSKOZEMLJISTEBARE_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBARE_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBARE_58.addFeatures(features_SUMSKOZEMLJISTEBARE_58);
var lyr_SUMSKOZEMLJISTEBARE_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBARE_58, 
                style: style_SUMSKOZEMLJISTEBARE_58,
                popuplayertitle: 'SUMSKO ZEMLJISTE BARE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBARE_58.png" /> SUMSKO ZEMLJISTE BARE '
            });
var format_SUMSKOZEMLJISTELAZAC1_59 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTELAZAC1_59 = format_SUMSKOZEMLJISTELAZAC1_59.readFeatures(json_SUMSKOZEMLJISTELAZAC1_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTELAZAC1_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTELAZAC1_59.addFeatures(features_SUMSKOZEMLJISTELAZAC1_59);
var lyr_SUMSKOZEMLJISTELAZAC1_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTELAZAC1_59, 
                style: style_SUMSKOZEMLJISTELAZAC1_59,
                popuplayertitle: 'SUMSKO ZEMLJISTE LAZAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTELAZAC1_59.png" /> SUMSKO ZEMLJISTE LAZAC1'
            });
var format_SUMSKOZEMLJISTEMAGLIC1_60 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMAGLIC1_60 = format_SUMSKOZEMLJISTEMAGLIC1_60.readFeatures(json_SUMSKOZEMLJISTEMAGLIC1_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMAGLIC1_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMAGLIC1_60.addFeatures(features_SUMSKOZEMLJISTEMAGLIC1_60);
var lyr_SUMSKOZEMLJISTEMAGLIC1_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMAGLIC1_60, 
                style: style_SUMSKOZEMLJISTEMAGLIC1_60,
                popuplayertitle: 'SUMSKO  ZEMLJISTE MAGLIC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMAGLIC1_60.png" /> SUMSKO  ZEMLJISTE MAGLIC1'
            });
var format_SUMSKOZEMLJISTEMILOCAJ1_61 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMILOCAJ1_61 = format_SUMSKOZEMLJISTEMILOCAJ1_61.readFeatures(json_SUMSKOZEMLJISTEMILOCAJ1_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMILOCAJ1_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMILOCAJ1_61.addFeatures(features_SUMSKOZEMLJISTEMILOCAJ1_61);
var lyr_SUMSKOZEMLJISTEMILOCAJ1_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMILOCAJ1_61, 
                style: style_SUMSKOZEMLJISTEMILOCAJ1_61,
                popuplayertitle: 'SUMSKO ZEMLJISTE MILOCAJ1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMILOCAJ1_61.png" /> SUMSKO ZEMLJISTE MILOCAJ1'
            });
var format_SUMSKOZEMLJISTEMILICI1_62 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMILICI1_62 = format_SUMSKOZEMLJISTEMILICI1_62.readFeatures(json_SUMSKOZEMLJISTEMILICI1_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMILICI1_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMILICI1_62.addFeatures(features_SUMSKOZEMLJISTEMILICI1_62);
var lyr_SUMSKOZEMLJISTEMILICI1_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMILICI1_62, 
                style: style_SUMSKOZEMLJISTEMILICI1_62,
                popuplayertitle: 'SUMSKO ZEMLJISTE MILICI1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMILICI1_62.png" /> SUMSKO ZEMLJISTE MILICI1 '
            });
var format_SUMSKOZEMLJISTEMETIKOS1_63 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMETIKOS1_63 = format_SUMSKOZEMLJISTEMETIKOS1_63.readFeatures(json_SUMSKOZEMLJISTEMETIKOS1_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMETIKOS1_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMETIKOS1_63.addFeatures(features_SUMSKOZEMLJISTEMETIKOS1_63);
var lyr_SUMSKOZEMLJISTEMETIKOS1_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMETIKOS1_63, 
                style: style_SUMSKOZEMLJISTEMETIKOS1_63,
                popuplayertitle: 'SUMSKO ZEMLJISTE METIKOS1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMETIKOS1_63.png" /> SUMSKO ZEMLJISTE METIKOS1'
            });
var format_SUMSKOZEMLJISTELOPATNICA1_64 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTELOPATNICA1_64 = format_SUMSKOZEMLJISTELOPATNICA1_64.readFeatures(json_SUMSKOZEMLJISTELOPATNICA1_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTELOPATNICA1_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTELOPATNICA1_64.addFeatures(features_SUMSKOZEMLJISTELOPATNICA1_64);
var lyr_SUMSKOZEMLJISTELOPATNICA1_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTELOPATNICA1_64, 
                style: style_SUMSKOZEMLJISTELOPATNICA1_64,
                popuplayertitle: 'SUMSKO ZEMLJISTE LOPATNICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTELOPATNICA1_64.png" /> SUMSKO ZEMLJISTE LOPATNICA1'
            });
var format_SUMSKOZEMLJISTEPEKCANICA1_65 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPEKCANICA1_65 = format_SUMSKOZEMLJISTEPEKCANICA1_65.readFeatures(json_SUMSKOZEMLJISTEPEKCANICA1_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPEKCANICA1_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPEKCANICA1_65.addFeatures(features_SUMSKOZEMLJISTEPEKCANICA1_65);
var lyr_SUMSKOZEMLJISTEPEKCANICA1_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPEKCANICA1_65, 
                style: style_SUMSKOZEMLJISTEPEKCANICA1_65,
                popuplayertitle: 'SUMSKO  ZEMLJISTE PEKCANICA1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPEKCANICA1_65.png" /> SUMSKO  ZEMLJISTE PEKCANICA1 '
            });
var format_SUMSKOZEMLJISTEMILAVCICI1_66 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMILAVCICI1_66 = format_SUMSKOZEMLJISTEMILAVCICI1_66.readFeatures(json_SUMSKOZEMLJISTEMILAVCICI1_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMILAVCICI1_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMILAVCICI1_66.addFeatures(features_SUMSKOZEMLJISTEMILAVCICI1_66);
var lyr_SUMSKOZEMLJISTEMILAVCICI1_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMILAVCICI1_66, 
                style: style_SUMSKOZEMLJISTEMILAVCICI1_66,
                popuplayertitle: 'SUMSKO ZEMLJISTE MILAVCICI1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMILAVCICI1_66.png" /> SUMSKO ZEMLJISTE MILAVCICI1'
            });
var format_SUMSKOZEMLJISTEMATARUGE1_67 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMATARUGE1_67 = format_SUMSKOZEMLJISTEMATARUGE1_67.readFeatures(json_SUMSKOZEMLJISTEMATARUGE1_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMATARUGE1_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMATARUGE1_67.addFeatures(features_SUMSKOZEMLJISTEMATARUGE1_67);
var lyr_SUMSKOZEMLJISTEMATARUGE1_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMATARUGE1_67, 
                style: style_SUMSKOZEMLJISTEMATARUGE1_67,
                popuplayertitle: 'SUMSKO ZEMLJISTE MATARUGE1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMATARUGE1_67.png" /> SUMSKO ZEMLJISTE MATARUGE1'
            });
var format_SUMSKOZEMLJISTEMELJANICA_68 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMELJANICA_68 = format_SUMSKOZEMLJISTEMELJANICA_68.readFeatures(json_SUMSKOZEMLJISTEMELJANICA_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMELJANICA_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMELJANICA_68.addFeatures(features_SUMSKOZEMLJISTEMELJANICA_68);
var lyr_SUMSKOZEMLJISTEMELJANICA_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMELJANICA_68, 
                style: style_SUMSKOZEMLJISTEMELJANICA_68,
                popuplayertitle: 'SUMSKO ZEMLJISTE MELJANICA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMELJANICA_68.png" /> SUMSKO ZEMLJISTE MELJANICA '
            });
var format_SUMSKOZEMLJISTEMLANCA1_69 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMLANCA1_69 = format_SUMSKOZEMLJISTEMLANCA1_69.readFeatures(json_SUMSKOZEMLJISTEMLANCA1_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMLANCA1_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMLANCA1_69.addFeatures(features_SUMSKOZEMLJISTEMLANCA1_69);
var lyr_SUMSKOZEMLJISTEMLANCA1_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMLANCA1_69, 
                style: style_SUMSKOZEMLJISTEMLANCA1_69,
                popuplayertitle: 'SUMSKO ZEMLJISTE MLANCA1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMLANCA1_69.png" /> SUMSKO ZEMLJISTE MLANCA1 '
            });
var format_SUMSKOZEMLJISTEORLJAGLAVA1_70 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEORLJAGLAVA1_70 = format_SUMSKOZEMLJISTEORLJAGLAVA1_70.readFeatures(json_SUMSKOZEMLJISTEORLJAGLAVA1_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEORLJAGLAVA1_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEORLJAGLAVA1_70.addFeatures(features_SUMSKOZEMLJISTEORLJAGLAVA1_70);
var lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEORLJAGLAVA1_70, 
                style: style_SUMSKOZEMLJISTEORLJAGLAVA1_70,
                popuplayertitle: 'SUMSKO  ZEMLJISTE ORLJA GLAVA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEORLJAGLAVA1_70.png" /> SUMSKO  ZEMLJISTE ORLJA GLAVA1'
            });
var format_SUMSKOZEMLJISTEPETROPOLJE1_71 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPETROPOLJE1_71 = format_SUMSKOZEMLJISTEPETROPOLJE1_71.readFeatures(json_SUMSKOZEMLJISTEPETROPOLJE1_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPETROPOLJE1_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPETROPOLJE1_71.addFeatures(features_SUMSKOZEMLJISTEPETROPOLJE1_71);
var lyr_SUMSKOZEMLJISTEPETROPOLJE1_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPETROPOLJE1_71, 
                style: style_SUMSKOZEMLJISTEPETROPOLJE1_71,
                popuplayertitle: 'SUMSKO  ZEMLJISTE PETROPOLJE1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPETROPOLJE1_71.png" /> SUMSKO  ZEMLJISTE PETROPOLJE1'
            });
var format_SUMSKOZEMLJISTEMUSINAREKA1_72 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMUSINAREKA1_72 = format_SUMSKOZEMLJISTEMUSINAREKA1_72.readFeatures(json_SUMSKOZEMLJISTEMUSINAREKA1_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMUSINAREKA1_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMUSINAREKA1_72.addFeatures(features_SUMSKOZEMLJISTEMUSINAREKA1_72);
var lyr_SUMSKOZEMLJISTEMUSINAREKA1_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMUSINAREKA1_72, 
                style: style_SUMSKOZEMLJISTEMUSINAREKA1_72,
                popuplayertitle: 'SUMSKO ZEMLJISTE MUSINA REKA1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMUSINAREKA1_72.png" /> SUMSKO ZEMLJISTE MUSINA REKA1 '
            });
var format_SUMSKOZEMLJISTEPECENOG1_73 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPECENOG1_73 = format_SUMSKOZEMLJISTEPECENOG1_73.readFeatures(json_SUMSKOZEMLJISTEPECENOG1_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPECENOG1_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPECENOG1_73.addFeatures(features_SUMSKOZEMLJISTEPECENOG1_73);
var lyr_SUMSKOZEMLJISTEPECENOG1_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPECENOG1_73, 
                style: style_SUMSKOZEMLJISTEPECENOG1_73,
                popuplayertitle: 'SUMSKO ZEMLJISTE PECENOG1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPECENOG1_73.png" /> SUMSKO ZEMLJISTE PECENOG1 '
            });
var format_SUMSKOZEMLJISTEPOPOVICI1_74 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPOPOVICI1_74 = format_SUMSKOZEMLJISTEPOPOVICI1_74.readFeatures(json_SUMSKOZEMLJISTEPOPOVICI1_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPOPOVICI1_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPOPOVICI1_74.addFeatures(features_SUMSKOZEMLJISTEPOPOVICI1_74);
var lyr_SUMSKOZEMLJISTEPOPOVICI1_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPOPOVICI1_74, 
                style: style_SUMSKOZEMLJISTEPOPOVICI1_74,
                popuplayertitle: 'SUMSKO ZEMLJISTE POPOVICI1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPOPOVICI1_74.png" /> SUMSKO ZEMLJISTE POPOVICI1 '
            });
var format_SUMSKOZEMLJISTEPREDOLE1_75 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPREDOLE1_75 = format_SUMSKOZEMLJISTEPREDOLE1_75.readFeatures(json_SUMSKOZEMLJISTEPREDOLE1_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPREDOLE1_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPREDOLE1_75.addFeatures(features_SUMSKOZEMLJISTEPREDOLE1_75);
var lyr_SUMSKOZEMLJISTEPREDOLE1_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPREDOLE1_75, 
                style: style_SUMSKOZEMLJISTEPREDOLE1_75,
                popuplayertitle: 'SUMSKO  ZEMLJISTE PREDOLE1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPREDOLE1_75.png" /> SUMSKO  ZEMLJISTE PREDOLE1 '
            });
var format_SUMSKOZEMLJISTEPROGORELICA1_76 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPROGORELICA1_76 = format_SUMSKOZEMLJISTEPROGORELICA1_76.readFeatures(json_SUMSKOZEMLJISTEPROGORELICA1_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPROGORELICA1_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPROGORELICA1_76.addFeatures(features_SUMSKOZEMLJISTEPROGORELICA1_76);
var lyr_SUMSKOZEMLJISTEPROGORELICA1_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPROGORELICA1_76, 
                style: style_SUMSKOZEMLJISTEPROGORELICA1_76,
                popuplayertitle: 'SUMSKO ZEMLJISTE PROGORELICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPROGORELICA1_76.png" /> SUMSKO ZEMLJISTE PROGORELICA1'
            });
var format_SUMSKOZEMLJISTEPOLUMIR1_77 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPOLUMIR1_77 = format_SUMSKOZEMLJISTEPOLUMIR1_77.readFeatures(json_SUMSKOZEMLJISTEPOLUMIR1_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPOLUMIR1_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPOLUMIR1_77.addFeatures(features_SUMSKOZEMLJISTEPOLUMIR1_77);
var lyr_SUMSKOZEMLJISTEPOLUMIR1_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPOLUMIR1_77, 
                style: style_SUMSKOZEMLJISTEPOLUMIR1_77,
                popuplayertitle: 'SUMSKO ZEMLJISTE POLUMIR1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPOLUMIR1_77.png" /> SUMSKO ZEMLJISTE POLUMIR1 '
            });
var format_SUMSKOZEMLJISTERATINA1_78 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTERATINA1_78 = format_SUMSKOZEMLJISTERATINA1_78.readFeatures(json_SUMSKOZEMLJISTERATINA1_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTERATINA1_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTERATINA1_78.addFeatures(features_SUMSKOZEMLJISTERATINA1_78);
var lyr_SUMSKOZEMLJISTERATINA1_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTERATINA1_78, 
                style: style_SUMSKOZEMLJISTERATINA1_78,
                popuplayertitle: 'SUMSKO ZEMLJISTE RATINA1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTERATINA1_78.png" /> SUMSKO ZEMLJISTE RATINA1 '
            });
var format_SUMSKOZEMLJISTERIBNICA1_79 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTERIBNICA1_79 = format_SUMSKOZEMLJISTERIBNICA1_79.readFeatures(json_SUMSKOZEMLJISTERIBNICA1_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTERIBNICA1_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTERIBNICA1_79.addFeatures(features_SUMSKOZEMLJISTERIBNICA1_79);
var lyr_SUMSKOZEMLJISTERIBNICA1_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTERIBNICA1_79, 
                style: style_SUMSKOZEMLJISTERIBNICA1_79,
                popuplayertitle: 'SUMSKO ZEMLJISTE RIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTERIBNICA1_79.png" /> SUMSKO ZEMLJISTE RIBNICA1'
            });
var format_SUMSKOZEMLJISTEOPLANICI1_80 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEOPLANICI1_80 = format_SUMSKOZEMLJISTEOPLANICI1_80.readFeatures(json_SUMSKOZEMLJISTEOPLANICI1_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEOPLANICI1_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEOPLANICI1_80.addFeatures(features_SUMSKOZEMLJISTEOPLANICI1_80);
var lyr_SUMSKOZEMLJISTEOPLANICI1_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEOPLANICI1_80, 
                style: style_SUMSKOZEMLJISTEOPLANICI1_80,
                popuplayertitle: 'SUMSKO ZEMLJISTE OPLANICI1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEOPLANICI1_80.png" /> SUMSKO ZEMLJISTE OPLANICI1'
            });
var format_SUMSKOZEMLJISTEMRSAC1_81 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMRSAC1_81 = format_SUMSKOZEMLJISTEMRSAC1_81.readFeatures(json_SUMSKOZEMLJISTEMRSAC1_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMRSAC1_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMRSAC1_81.addFeatures(features_SUMSKOZEMLJISTEMRSAC1_81);
var lyr_SUMSKOZEMLJISTEMRSAC1_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMRSAC1_81, 
                style: style_SUMSKOZEMLJISTEMRSAC1_81,
                popuplayertitle: 'SUMSKO ZEMLJISTE MRSAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMRSAC1_81.png" /> SUMSKO ZEMLJISTE MRSAC1'
            });
var format_SUMSKOZEMLJISTEROCEVICI1_82 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEROCEVICI1_82 = format_SUMSKOZEMLJISTEROCEVICI1_82.readFeatures(json_SUMSKOZEMLJISTEROCEVICI1_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEROCEVICI1_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEROCEVICI1_82.addFeatures(features_SUMSKOZEMLJISTEROCEVICI1_82);
var lyr_SUMSKOZEMLJISTEROCEVICI1_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEROCEVICI1_82, 
                style: style_SUMSKOZEMLJISTEROCEVICI1_82,
                popuplayertitle: 'SUMSKO ZEMLJISTE ROCEVICI1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEROCEVICI1_82.png" /> SUMSKO ZEMLJISTE ROCEVICI1'
            });
var format_SUMSKOZEMLJISTEREKA_83 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEREKA_83 = format_SUMSKOZEMLJISTEREKA_83.readFeatures(json_SUMSKOZEMLJISTEREKA_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEREKA_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEREKA_83.addFeatures(features_SUMSKOZEMLJISTEREKA_83);
var lyr_SUMSKOZEMLJISTEREKA_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEREKA_83, 
                style: style_SUMSKOZEMLJISTEREKA_83,
                popuplayertitle: 'SUMSKO ZEMLJISTE REKA',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEREKA_83.png" /> SUMSKO ZEMLJISTE REKA'
            });
var format_SUMSKOZEMLJISTERUDNJAK1_84 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTERUDNJAK1_84 = format_SUMSKOZEMLJISTERUDNJAK1_84.readFeatures(json_SUMSKOZEMLJISTERUDNJAK1_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTERUDNJAK1_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTERUDNJAK1_84.addFeatures(features_SUMSKOZEMLJISTERUDNJAK1_84);
var lyr_SUMSKOZEMLJISTERUDNJAK1_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTERUDNJAK1_84, 
                style: style_SUMSKOZEMLJISTERUDNJAK1_84,
                popuplayertitle: 'SUMSKO ZEMLJISTE RUDNJAK1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTERUDNJAK1_84.png" /> SUMSKO ZEMLJISTE RUDNJAK1'
            });
var format_SUMSKOZEMLJISTESAMAILA1_85 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTESAMAILA1_85 = format_SUMSKOZEMLJISTESAMAILA1_85.readFeatures(json_SUMSKOZEMLJISTESAMAILA1_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTESAMAILA1_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTESAMAILA1_85.addFeatures(features_SUMSKOZEMLJISTESAMAILA1_85);
var lyr_SUMSKOZEMLJISTESAMAILA1_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTESAMAILA1_85, 
                style: style_SUMSKOZEMLJISTESAMAILA1_85,
                popuplayertitle: 'SUMSKO ZEMLJISTE SAMAILA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTESAMAILA1_85.png" /> SUMSKO ZEMLJISTE SAMAILA1'
            });
var format_SUMSKOZEMLJISTEPLANA1_86 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEPLANA1_86 = format_SUMSKOZEMLJISTEPLANA1_86.readFeatures(json_SUMSKOZEMLJISTEPLANA1_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEPLANA1_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEPLANA1_86.addFeatures(features_SUMSKOZEMLJISTEPLANA1_86);
var lyr_SUMSKOZEMLJISTEPLANA1_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEPLANA1_86, 
                style: style_SUMSKOZEMLJISTEPLANA1_86,
                popuplayertitle: 'SUMSKO ZEMLJISTE PLANA1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEPLANA1_86.png" /> SUMSKO ZEMLJISTE PLANA1 '
            });
var format_SUMSKOZEMLJISTERUDNO1_87 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTERUDNO1_87 = format_SUMSKOZEMLJISTERUDNO1_87.readFeatures(json_SUMSKOZEMLJISTERUDNO1_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTERUDNO1_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTERUDNO1_87.addFeatures(features_SUMSKOZEMLJISTERUDNO1_87);
var lyr_SUMSKOZEMLJISTERUDNO1_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTERUDNO1_87, 
                style: style_SUMSKOZEMLJISTERUDNO1_87,
                popuplayertitle: 'SUMSKO ZEMLJISTE RUDNO1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTERUDNO1_87.png" /> SUMSKO ZEMLJISTE RUDNO1'
            });
var format_SUMSKOZEMLJISTESIRCA1_88 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTESIRCA1_88 = format_SUMSKOZEMLJISTESIRCA1_88.readFeatures(json_SUMSKOZEMLJISTESIRCA1_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTESIRCA1_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTESIRCA1_88.addFeatures(features_SUMSKOZEMLJISTESIRCA1_88);
var lyr_SUMSKOZEMLJISTESIRCA1_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTESIRCA1_88, 
                style: style_SUMSKOZEMLJISTESIRCA1_88,
                popuplayertitle: 'SUMSKO ZEMLJISTE SIRCA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTESIRCA1_88.png" /> SUMSKO ZEMLJISTE SIRCA1'
            });
var format_SUMSKOZEMLJISTESTUBL1_89 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTESTUBL1_89 = format_SUMSKOZEMLJISTESTUBL1_89.readFeatures(json_SUMSKOZEMLJISTESTUBL1_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTESTUBL1_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTESTUBL1_89.addFeatures(features_SUMSKOZEMLJISTESTUBL1_89);
var lyr_SUMSKOZEMLJISTESTUBL1_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTESTUBL1_89, 
                style: style_SUMSKOZEMLJISTESTUBL1_89,
                popuplayertitle: 'SUMSKO ZEMLJISTE STUBL1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTESTUBL1_89.png" /> SUMSKO ZEMLJISTE STUBL1'
            });
var format_SUMSKOZEMLJISTESAVOVO1_90 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTESAVOVO1_90 = format_SUMSKOZEMLJISTESAVOVO1_90.readFeatures(json_SUMSKOZEMLJISTESAVOVO1_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTESAVOVO1_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTESAVOVO1_90.addFeatures(features_SUMSKOZEMLJISTESAVOVO1_90);
var lyr_SUMSKOZEMLJISTESAVOVO1_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTESAVOVO1_90, 
                style: style_SUMSKOZEMLJISTESAVOVO1_90,
                popuplayertitle: 'SUMSKO ZEMLJISTE SAVOVO1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTESAVOVO1_90.png" /> SUMSKO ZEMLJISTE SAVOVO1'
            });
var format_SUMSKOZEMLJISTETRGOVISTE1_91 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTETRGOVISTE1_91 = format_SUMSKOZEMLJISTETRGOVISTE1_91.readFeatures(json_SUMSKOZEMLJISTETRGOVISTE1_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTETRGOVISTE1_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTETRGOVISTE1_91.addFeatures(features_SUMSKOZEMLJISTETRGOVISTE1_91);
var lyr_SUMSKOZEMLJISTETRGOVISTE1_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTETRGOVISTE1_91, 
                style: style_SUMSKOZEMLJISTETRGOVISTE1_91,
                popuplayertitle: 'SUMSKO ZEMLJISTE TRGOVISTE1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTETRGOVISTE1_91.png" /> SUMSKO ZEMLJISTE TRGOVISTE1'
            });
var format_SUMSKOZEMLJISTEUSCE1_92 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEUSCE1_92 = format_SUMSKOZEMLJISTEUSCE1_92.readFeatures(json_SUMSKOZEMLJISTEUSCE1_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEUSCE1_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEUSCE1_92.addFeatures(features_SUMSKOZEMLJISTEUSCE1_92);
var lyr_SUMSKOZEMLJISTEUSCE1_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEUSCE1_92, 
                style: style_SUMSKOZEMLJISTEUSCE1_92,
                popuplayertitle: 'SUMSKO ZEMLJISTE USCE1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEUSCE1_92.png" /> SUMSKO ZEMLJISTE USCE1'
            });
var format_SUMSKOZEMLJISTETADENJE1_93 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTETADENJE1_93 = format_SUMSKOZEMLJISTETADENJE1_93.readFeatures(json_SUMSKOZEMLJISTETADENJE1_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTETADENJE1_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTETADENJE1_93.addFeatures(features_SUMSKOZEMLJISTETADENJE1_93);
var lyr_SUMSKOZEMLJISTETADENJE1_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTETADENJE1_93, 
                style: style_SUMSKOZEMLJISTETADENJE1_93,
                popuplayertitle: 'SUMSKO ZEMLJISTE TADENJE1 ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTETADENJE1_93.png" /> SUMSKO ZEMLJISTE TADENJE1 '
            });
var format_SUMSKOZEMLJISTEVRBA1_94 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEVRBA1_94 = format_SUMSKOZEMLJISTEVRBA1_94.readFeatures(json_SUMSKOZEMLJISTEVRBA1_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEVRBA1_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEVRBA1_94.addFeatures(features_SUMSKOZEMLJISTEVRBA1_94);
var lyr_SUMSKOZEMLJISTEVRBA1_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEVRBA1_94, 
                style: style_SUMSKOZEMLJISTEVRBA1_94,
                popuplayertitle: 'SUMSKO ZEMLJISTE VRBA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEVRBA1_94.png" /> SUMSKO ZEMLJISTE VRBA1'
            });
var format_SUMSKOZEMLJISTEVITANOVAC1_95 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEVITANOVAC1_95 = format_SUMSKOZEMLJISTEVITANOVAC1_95.readFeatures(json_SUMSKOZEMLJISTEVITANOVAC1_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEVITANOVAC1_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEVITANOVAC1_95.addFeatures(features_SUMSKOZEMLJISTEVITANOVAC1_95);
var lyr_SUMSKOZEMLJISTEVITANOVAC1_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEVITANOVAC1_95, 
                style: style_SUMSKOZEMLJISTEVITANOVAC1_95,
                popuplayertitle: 'SUMSKO ZEMLJISTE VITANOVAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEVITANOVAC1_95.png" /> SUMSKO ZEMLJISTE VITANOVAC1'
            });
var format_SUMSKOZEMLJISTEVRH1_96 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEVRH1_96 = format_SUMSKOZEMLJISTEVRH1_96.readFeatures(json_SUMSKOZEMLJISTEVRH1_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEVRH1_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEVRH1_96.addFeatures(features_SUMSKOZEMLJISTEVRH1_96);
var lyr_SUMSKOZEMLJISTEVRH1_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEVRH1_96, 
                style: style_SUMSKOZEMLJISTEVRH1_96,
                popuplayertitle: 'SUMSKO ZEMLJISTE VRH1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEVRH1_96.png" /> SUMSKO ZEMLJISTE VRH1'
            });
var format_SUMSKOZEMLJISTEVRDILA1_97 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEVRDILA1_97 = format_SUMSKOZEMLJISTEVRDILA1_97.readFeatures(json_SUMSKOZEMLJISTEVRDILA1_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEVRDILA1_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEVRDILA1_97.addFeatures(features_SUMSKOZEMLJISTEVRDILA1_97);
var lyr_SUMSKOZEMLJISTEVRDILA1_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEVRDILA1_97, 
                style: style_SUMSKOZEMLJISTEVRDILA1_97,
                popuplayertitle: 'SUMSKO ZEMLJISTE VRDILA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEVRDILA1_97.png" /> SUMSKO ZEMLJISTE VRDILA1'
            });
var format_SUMSKOZEMLJISTETAVNIK1_98 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTETAVNIK1_98 = format_SUMSKOZEMLJISTETAVNIK1_98.readFeatures(json_SUMSKOZEMLJISTETAVNIK1_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTETAVNIK1_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTETAVNIK1_98.addFeatures(features_SUMSKOZEMLJISTETAVNIK1_98);
var lyr_SUMSKOZEMLJISTETAVNIK1_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTETAVNIK1_98, 
                style: style_SUMSKOZEMLJISTETAVNIK1_98,
                popuplayertitle: 'SUMSKO ZEMLJISTE TAVNIK1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTETAVNIK1_98.png" /> SUMSKO ZEMLJISTE TAVNIK1'
            });
var format_SUMSKOZEMLJISTEZAKLOPACA1_99 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEZAKLOPACA1_99 = format_SUMSKOZEMLJISTEZAKLOPACA1_99.readFeatures(json_SUMSKOZEMLJISTEZAKLOPACA1_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEZAKLOPACA1_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEZAKLOPACA1_99.addFeatures(features_SUMSKOZEMLJISTEZAKLOPACA1_99);
var lyr_SUMSKOZEMLJISTEZAKLOPACA1_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEZAKLOPACA1_99, 
                style: style_SUMSKOZEMLJISTEZAKLOPACA1_99,
                popuplayertitle: 'SUMSKO ZEMLJISTE ZAKLOPACA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEZAKLOPACA1_99.png" /> SUMSKO ZEMLJISTE ZAKLOPACA1'
            });
var format_SUMSKOZMELJISTESIBNICA1_100 = new ol.format.GeoJSON();
var features_SUMSKOZMELJISTESIBNICA1_100 = format_SUMSKOZMELJISTESIBNICA1_100.readFeatures(json_SUMSKOZMELJISTESIBNICA1_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZMELJISTESIBNICA1_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZMELJISTESIBNICA1_100.addFeatures(features_SUMSKOZMELJISTESIBNICA1_100);
var lyr_SUMSKOZMELJISTESIBNICA1_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZMELJISTESIBNICA1_100, 
                style: style_SUMSKOZMELJISTESIBNICA1_100,
                popuplayertitle: 'SUMSKO ZMELJISTE SIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZMELJISTESIBNICA1_100.png" /> SUMSKO ZMELJISTE SIBNICA1'
            });
var format_SUMSKOZEMLJISTEZAKUTA1_101 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEZAKUTA1_101 = format_SUMSKOZEMLJISTEZAKUTA1_101.readFeatures(json_SUMSKOZEMLJISTEZAKUTA1_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEZAKUTA1_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEZAKUTA1_101.addFeatures(features_SUMSKOZEMLJISTEZAKUTA1_101);
var lyr_SUMSKOZEMLJISTEZAKUTA1_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEZAKUTA1_101, 
                style: style_SUMSKOZEMLJISTEZAKUTA1_101,
                popuplayertitle: 'SUMSKO ZEMLJISTE ZAKUTA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEZAKUTA1_101.png" /> SUMSKO ZEMLJISTE ZAKUTA1'
            });
var format_SUMSKOZEMLJISTETOLISNICA1_102 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTETOLISNICA1_102 = format_SUMSKOZEMLJISTETOLISNICA1_102.readFeatures(json_SUMSKOZEMLJISTETOLISNICA1_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTETOLISNICA1_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTETOLISNICA1_102.addFeatures(features_SUMSKOZEMLJISTETOLISNICA1_102);
var lyr_SUMSKOZEMLJISTETOLISNICA1_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTETOLISNICA1_102, 
                style: style_SUMSKOZEMLJISTETOLISNICA1_102,
                popuplayertitle: 'SUMSKO ZEMLJISTE TOLISNICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTETOLISNICA1_102.png" /> SUMSKO ZEMLJISTE TOLISNICA1'
            });
var format_SUMSKOZEMLJISTEZAMCANJE_103 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEZAMCANJE_103 = format_SUMSKOZEMLJISTEZAMCANJE_103.readFeatures(json_SUMSKOZEMLJISTEZAMCANJE_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEZAMCANJE_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEZAMCANJE_103.addFeatures(features_SUMSKOZEMLJISTEZAMCANJE_103);
var lyr_SUMSKOZEMLJISTEZAMCANJE_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEZAMCANJE_103, 
                style: style_SUMSKOZEMLJISTEZAMCANJE_103,
                popuplayertitle: 'SUMSKO ZEMLJISTE ZAMCANJE ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEZAMCANJE_103.png" /> SUMSKO ZEMLJISTE ZAMCANJE '
            });
var format_SUMSKOZEMLJISTEVITKOVAC1_104 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEVITKOVAC1_104 = format_SUMSKOZEMLJISTEVITKOVAC1_104.readFeatures(json_SUMSKOZEMLJISTEVITKOVAC1_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEVITKOVAC1_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEVITKOVAC1_104.addFeatures(features_SUMSKOZEMLJISTEVITKOVAC1_104);
var lyr_SUMSKOZEMLJISTEVITKOVAC1_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEVITKOVAC1_104, 
                style: style_SUMSKOZEMLJISTEVITKOVAC1_104,
                popuplayertitle: 'SUMSKO ZEMLJISTE VITKOVAC1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEVITKOVAC1_104.png" /> SUMSKO ZEMLJISTE VITKOVAC1'
            });
var format_SUMSKOZEMLJISTEZASAD1_105 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEZASAD1_105 = format_SUMSKOZEMLJISTEZASAD1_105.readFeatures(json_SUMSKOZEMLJISTEZASAD1_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEZASAD1_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEZASAD1_105.addFeatures(features_SUMSKOZEMLJISTEZASAD1_105);
var lyr_SUMSKOZEMLJISTEZASAD1_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEZASAD1_105, 
                style: style_SUMSKOZEMLJISTEZASAD1_105,
                popuplayertitle: 'SUMSKO ZEMLJISTE  ZASAD1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEZASAD1_105.png" /> SUMSKO ZEMLJISTE  ZASAD1'
            });
var format_SUMSKOZEMLJISTEBREZOVA_106 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEBREZOVA_106 = format_SUMSKOZEMLJISTEBREZOVA_106.readFeatures(json_SUMSKOZEMLJISTEBREZOVA_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEBREZOVA_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEBREZOVA_106.addFeatures(features_SUMSKOZEMLJISTEBREZOVA_106);
var lyr_SUMSKOZEMLJISTEBREZOVA_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEBREZOVA_106, 
                style: style_SUMSKOZEMLJISTEBREZOVA_106,
                popuplayertitle: 'SUMSKO ZEMLJISTE BREZOVA ',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEBREZOVA_106.png" /> SUMSKO ZEMLJISTE BREZOVA '
            });
var format_SUMSKOZEMLJISTERAVNICA1_107 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTERAVNICA1_107 = format_SUMSKOZEMLJISTERAVNICA1_107.readFeatures(json_SUMSKOZEMLJISTERAVNICA1_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTERAVNICA1_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTERAVNICA1_107.addFeatures(features_SUMSKOZEMLJISTERAVNICA1_107);
var lyr_SUMSKOZEMLJISTERAVNICA1_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTERAVNICA1_107, 
                style: style_SUMSKOZEMLJISTERAVNICA1_107,
                popuplayertitle: 'SUMSKO ZEMLJISTE RAVNICA1',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTERAVNICA1_107.png" /> SUMSKO ZEMLJISTE RAVNICA1'
            });
var format_SUMSKOZEMLJISTEMILAKOVAC_108 = new ol.format.GeoJSON();
var features_SUMSKOZEMLJISTEMILAKOVAC_108 = format_SUMSKOZEMLJISTEMILAKOVAC_108.readFeatures(json_SUMSKOZEMLJISTEMILAKOVAC_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMSKOZEMLJISTEMILAKOVAC_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMSKOZEMLJISTEMILAKOVAC_108.addFeatures(features_SUMSKOZEMLJISTEMILAKOVAC_108);
var lyr_SUMSKOZEMLJISTEMILAKOVAC_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMSKOZEMLJISTEMILAKOVAC_108, 
                style: style_SUMSKOZEMLJISTEMILAKOVAC_108,
                popuplayertitle: 'SUMSKO  ZEMLJISTE MILAKOVAC',
                interactive: true,
                title: '<img src="styles/legend/SUMSKOZEMLJISTEMILAKOVAC_108.png" /> SUMSKO  ZEMLJISTE MILAKOVAC'
            });
var format_GRADJEVINSKOZEMLJISTEADRANI_109 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEADRANI_109 = format_GRADJEVINSKOZEMLJISTEADRANI_109.readFeatures(json_GRADJEVINSKOZEMLJISTEADRANI_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEADRANI_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEADRANI_109.addFeatures(features_GRADJEVINSKOZEMLJISTEADRANI_109);
var lyr_GRADJEVINSKOZEMLJISTEADRANI_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEADRANI_109, 
                style: style_GRADJEVINSKOZEMLJISTEADRANI_109,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ADRANI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEADRANI_109.png" /> GRADJEVINSKO ZEMLJISTE ADRANI '
            });
var format_GRADJEVINSKOZEMLJISTEVITANOVAC1_110 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVITANOVAC1_110 = format_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.readFeatures(json_GRADJEVINSKOZEMLJISTEVITANOVAC1_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.addFeatures(features_GRADJEVINSKOZEMLJISTEVITANOVAC1_110);
var lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_110, 
                style: style_GRADJEVINSKOZEMLJISTEVITANOVAC1_110,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VITANOVAC1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVITANOVAC1_110.png" /> GRADJEVINSKO ZEMLJISTE VITANOVAC1 '
            });
var format_GRADJEVINSKOZEMLJISTEZASAD1_111 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEZASAD1_111 = format_GRADJEVINSKOZEMLJISTEZASAD1_111.readFeatures(json_GRADJEVINSKOZEMLJISTEZASAD1_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEZASAD1_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEZASAD1_111.addFeatures(features_GRADJEVINSKOZEMLJISTEZASAD1_111);
var lyr_GRADJEVINSKOZEMLJISTEZASAD1_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEZASAD1_111, 
                style: style_GRADJEVINSKOZEMLJISTEZASAD1_111,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ZASAD1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEZASAD1_111.png" /> GRADJEVINSKO ZEMLJISTE ZASAD1'
            });
var format_GRADJEVINSKOZEMLJISTEZAMCANJE_112 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEZAMCANJE_112 = format_GRADJEVINSKOZEMLJISTEZAMCANJE_112.readFeatures(json_GRADJEVINSKOZEMLJISTEZAMCANJE_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEZAMCANJE_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEZAMCANJE_112.addFeatures(features_GRADJEVINSKOZEMLJISTEZAMCANJE_112);
var lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEZAMCANJE_112, 
                style: style_GRADJEVINSKOZEMLJISTEZAMCANJE_112,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ZAMCANJE',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEZAMCANJE_112.png" /> GRADJEVINSKO ZEMLJISTE ZAMCANJE'
            });
var format_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113 = format_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.readFeatures(json_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.addFeatures(features_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113);
var lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113, 
                style: style_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE ZAKLOPACA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.png" /> GRADJEVISNKO ZEMLJISTE ZAKLOPACA1'
            });
var format_GRADJEVINSKOZEMLJISTEZAKUTA1_114 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEZAKUTA1_114 = format_GRADJEVINSKOZEMLJISTEZAKUTA1_114.readFeatures(json_GRADJEVINSKOZEMLJISTEZAKUTA1_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEZAKUTA1_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEZAKUTA1_114.addFeatures(features_GRADJEVINSKOZEMLJISTEZAKUTA1_114);
var lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEZAKUTA1_114, 
                style: style_GRADJEVINSKOZEMLJISTEZAKUTA1_114,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ZAKUTA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEZAKUTA1_114.png" /> GRADJEVINSKO ZEMLJISTE ZAKUTA1'
            });
var format_GRADJEVINSKOZEMLJISTEVRDILA1_115 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVRDILA1_115 = format_GRADJEVINSKOZEMLJISTEVRDILA1_115.readFeatures(json_GRADJEVINSKOZEMLJISTEVRDILA1_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVRDILA1_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVRDILA1_115.addFeatures(features_GRADJEVINSKOZEMLJISTEVRDILA1_115);
var lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVRDILA1_115, 
                style: style_GRADJEVINSKOZEMLJISTEVRDILA1_115,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VRDILA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVRDILA1_115.png" /> GRADJEVINSKO ZEMLJISTE VRDILA1'
            });
var format_GRADJEVINSKOZEMLJISTEVITANOVAC1_116 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVITANOVAC1_116 = format_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.readFeatures(json_GRADJEVINSKOZEMLJISTEVITANOVAC1_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.addFeatures(features_GRADJEVINSKOZEMLJISTEVITANOVAC1_116);
var lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVITANOVAC1_116, 
                style: style_GRADJEVINSKOZEMLJISTEVITANOVAC1_116,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VITANOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVITANOVAC1_116.png" /> GRADJEVINSKO ZEMLJISTE VITANOVAC1'
            });
var format_GRADJEVINSKOZEMLJISTEVRH1_117 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVRH1_117 = format_GRADJEVINSKOZEMLJISTEVRH1_117.readFeatures(json_GRADJEVINSKOZEMLJISTEVRH1_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVRH1_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVRH1_117.addFeatures(features_GRADJEVINSKOZEMLJISTEVRH1_117);
var lyr_GRADJEVINSKOZEMLJISTEVRH1_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVRH1_117, 
                style: style_GRADJEVINSKOZEMLJISTEVRH1_117,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VRH1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVRH1_117.png" /> GRADJEVINSKO ZEMLJISTE VRH1'
            });
var format_GRADJEVINSKOZEMLJISTEVRBA1_118 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVRBA1_118 = format_GRADJEVINSKOZEMLJISTEVRBA1_118.readFeatures(json_GRADJEVINSKOZEMLJISTEVRBA1_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVRBA1_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVRBA1_118.addFeatures(features_GRADJEVINSKOZEMLJISTEVRBA1_118);
var lyr_GRADJEVINSKOZEMLJISTEVRBA1_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVRBA1_118, 
                style: style_GRADJEVINSKOZEMLJISTEVRBA1_118,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VRBA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVRBA1_118.png" /> GRADJEVINSKO ZEMLJISTE VRBA1'
            });
var format_GRADJEVINSKOZEMLJISTERUDNJAK1_119 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTERUDNJAK1_119 = format_GRADJEVINSKOZEMLJISTERUDNJAK1_119.readFeatures(json_GRADJEVINSKOZEMLJISTERUDNJAK1_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTERUDNJAK1_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTERUDNJAK1_119.addFeatures(features_GRADJEVINSKOZEMLJISTERUDNJAK1_119);
var lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTERUDNJAK1_119, 
                style: style_GRADJEVINSKOZEMLJISTERUDNJAK1_119,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE RUDNJAK1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTERUDNJAK1_119.png" /> GRADJEVINSKO ZEMLJISTE RUDNJAK1'
            });
var format_GRADJEVINSKOZEMLJISTEVITKOVAC1_120 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVITKOVAC1_120 = format_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.readFeatures(json_GRADJEVINSKOZEMLJISTEVITKOVAC1_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.addFeatures(features_GRADJEVINSKOZEMLJISTEVITKOVAC1_120);
var lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_120, 
                style: style_GRADJEVINSKOZEMLJISTEVITKOVAC1_120,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VITKOVAC1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVITKOVAC1_120.png" /> GRADJEVINSKO ZEMLJISTE VITKOVAC1 '
            });
var format_GRADJEVINSKOZEMLJISTEVITKOVAC1_121 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEVITKOVAC1_121 = format_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.readFeatures(json_GRADJEVINSKOZEMLJISTEVITKOVAC1_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.addFeatures(features_GRADJEVINSKOZEMLJISTEVITKOVAC1_121);
var lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEVITKOVAC1_121, 
                style: style_GRADJEVINSKOZEMLJISTEVITKOVAC1_121,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE VITKOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEVITKOVAC1_121.png" /> GRADJEVINSKO ZEMLJISTE VITKOVAC1'
            });
var format_GRADJEVISNKOZEMLJISTEUSCE1_122 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTEUSCE1_122 = format_GRADJEVISNKOZEMLJISTEUSCE1_122.readFeatures(json_GRADJEVISNKOZEMLJISTEUSCE1_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTEUSCE1_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTEUSCE1_122.addFeatures(features_GRADJEVISNKOZEMLJISTEUSCE1_122);
var lyr_GRADJEVISNKOZEMLJISTEUSCE1_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTEUSCE1_122, 
                style: style_GRADJEVISNKOZEMLJISTEUSCE1_122,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE USCE1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTEUSCE1_122.png" /> GRADJEVISNKO ZEMLJISTE USCE1'
            });
var format_GRADJEVISNKOZEMLJISTESTUBAL1_123 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTESTUBAL1_123 = format_GRADJEVISNKOZEMLJISTESTUBAL1_123.readFeatures(json_GRADJEVISNKOZEMLJISTESTUBAL1_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTESTUBAL1_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTESTUBAL1_123.addFeatures(features_GRADJEVISNKOZEMLJISTESTUBAL1_123);
var lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTESTUBAL1_123, 
                style: style_GRADJEVISNKOZEMLJISTESTUBAL1_123,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE STUBAL1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTESTUBAL1_123.png" /> GRADJEVISNKO ZEMLJISTE STUBAL1'
            });
var format_GRADJEVISNKOZEMLJISTETADENJE1_124 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTETADENJE1_124 = format_GRADJEVISNKOZEMLJISTETADENJE1_124.readFeatures(json_GRADJEVISNKOZEMLJISTETADENJE1_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_124.addFeatures(features_GRADJEVISNKOZEMLJISTETADENJE1_124);
var lyr_GRADJEVISNKOZEMLJISTETADENJE1_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_124, 
                style: style_GRADJEVISNKOZEMLJISTETADENJE1_124,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE TADENJE1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTETADENJE1_124.png" /> GRADJEVISNKO ZEMLJISTE TADENJE1'
            });
var format_GRADJEVINSKOZEMLJISTETAVNIK1_125 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTETAVNIK1_125 = format_GRADJEVINSKOZEMLJISTETAVNIK1_125.readFeatures(json_GRADJEVINSKOZEMLJISTETAVNIK1_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTETAVNIK1_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTETAVNIK1_125.addFeatures(features_GRADJEVINSKOZEMLJISTETAVNIK1_125);
var lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTETAVNIK1_125, 
                style: style_GRADJEVINSKOZEMLJISTETAVNIK1_125,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE TAVNIK1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTETAVNIK1_125.png" /> GRADJEVINSKO ZEMLJISTE TAVNIK1'
            });
var format_GRADJEVINSKOZEMLJISTETOLISNICA1_126 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTETOLISNICA1_126 = format_GRADJEVINSKOZEMLJISTETOLISNICA1_126.readFeatures(json_GRADJEVINSKOZEMLJISTETOLISNICA1_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTETOLISNICA1_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTETOLISNICA1_126.addFeatures(features_GRADJEVINSKOZEMLJISTETOLISNICA1_126);
var lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTETOLISNICA1_126, 
                style: style_GRADJEVINSKOZEMLJISTETOLISNICA1_126,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE TOLISNICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTETOLISNICA1_126.png" /> GRADJEVINSKO ZEMLJISTE TOLISNICA1'
            });
var format_GRADJEVISNKOZEMLJISTETADENJE1_127 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTETADENJE1_127 = format_GRADJEVISNKOZEMLJISTETADENJE1_127.readFeatures(json_GRADJEVISNKOZEMLJISTETADENJE1_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_127.addFeatures(features_GRADJEVISNKOZEMLJISTETADENJE1_127);
var lyr_GRADJEVISNKOZEMLJISTETADENJE1_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTETADENJE1_127, 
                style: style_GRADJEVISNKOZEMLJISTETADENJE1_127,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE TADENJE1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTETADENJE1_127.png" /> GRADJEVISNKO ZEMLJISTE TADENJE1'
            });
var format_GRADJEVINSKOZEMLJISTERUDNO1_128 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTERUDNO1_128 = format_GRADJEVINSKOZEMLJISTERUDNO1_128.readFeatures(json_GRADJEVINSKOZEMLJISTERUDNO1_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTERUDNO1_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTERUDNO1_128.addFeatures(features_GRADJEVINSKOZEMLJISTERUDNO1_128);
var lyr_GRADJEVINSKOZEMLJISTERUDNO1_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTERUDNO1_128, 
                style: style_GRADJEVINSKOZEMLJISTERUDNO1_128,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE RUDNO1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTERUDNO1_128.png" /> GRADJEVINSKO ZEMLJISTE RUDNO1'
            });
var format_GRADJEVINSKOZEMLJISTESIBNICA1_129 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTESIBNICA1_129 = format_GRADJEVINSKOZEMLJISTESIBNICA1_129.readFeatures(json_GRADJEVINSKOZEMLJISTESIBNICA1_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTESIBNICA1_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTESIBNICA1_129.addFeatures(features_GRADJEVINSKOZEMLJISTESIBNICA1_129);
var lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTESIBNICA1_129, 
                style: style_GRADJEVINSKOZEMLJISTESIBNICA1_129,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE SIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTESIBNICA1_129.png" /> GRADJEVINSKO ZEMLJISTE SIBNICA1'
            });
var format_GRADJEVINSKOZEMLJISTESIRCA1_130 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTESIRCA1_130 = format_GRADJEVINSKOZEMLJISTESIRCA1_130.readFeatures(json_GRADJEVINSKOZEMLJISTESIRCA1_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTESIRCA1_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTESIRCA1_130.addFeatures(features_GRADJEVINSKOZEMLJISTESIRCA1_130);
var lyr_GRADJEVINSKOZEMLJISTESIRCA1_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTESIRCA1_130, 
                style: style_GRADJEVINSKOZEMLJISTESIRCA1_130,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE SIRCA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTESIRCA1_130.png" /> GRADJEVINSKO ZEMLJISTE SIRCA1'
            });
var format_GRADJEVINSKOZEMLJISTESAVOVO1_131 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTESAVOVO1_131 = format_GRADJEVINSKOZEMLJISTESAVOVO1_131.readFeatures(json_GRADJEVINSKOZEMLJISTESAVOVO1_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTESAVOVO1_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTESAVOVO1_131.addFeatures(features_GRADJEVINSKOZEMLJISTESAVOVO1_131);
var lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTESAVOVO1_131, 
                style: style_GRADJEVINSKOZEMLJISTESAVOVO1_131,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE SAVOVO1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTESAVOVO1_131.png" /> GRADJEVINSKO ZEMLJISTE SAVOVO1'
            });
var format_GRADJEVINSKOZEMLJISTESAMAILA1_132 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTESAMAILA1_132 = format_GRADJEVINSKOZEMLJISTESAMAILA1_132.readFeatures(json_GRADJEVINSKOZEMLJISTESAMAILA1_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTESAMAILA1_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTESAMAILA1_132.addFeatures(features_GRADJEVINSKOZEMLJISTESAMAILA1_132);
var lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTESAMAILA1_132, 
                style: style_GRADJEVINSKOZEMLJISTESAMAILA1_132,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE SAMAILA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTESAMAILA1_132.png" /> GRADJEVINSKO ZEMLJISTE SAMAILA1'
            });
var format_GRADJEVINSKOZEMLJISTEPOPOVICI1_133 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPOPOVICI1_133 = format_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.readFeatures(json_GRADJEVINSKOZEMLJISTEPOPOVICI1_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPOPOVICI1_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.addFeatures(features_GRADJEVINSKOZEMLJISTEPOPOVICI1_133);
var lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPOPOVICI1_133, 
                style: style_GRADJEVINSKOZEMLJISTEPOPOVICI1_133,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE POPOVICI1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPOPOVICI1_133.png" /> GRADJEVINSKO ZEMLJISTE POPOVICI1'
            });
var format_GRADJEVINSKOZEMLJISTERIBNICA1_134 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTERIBNICA1_134 = format_GRADJEVINSKOZEMLJISTERIBNICA1_134.readFeatures(json_GRADJEVINSKOZEMLJISTERIBNICA1_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTERIBNICA1_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTERIBNICA1_134.addFeatures(features_GRADJEVINSKOZEMLJISTERIBNICA1_134);
var lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTERIBNICA1_134, 
                style: style_GRADJEVINSKOZEMLJISTERIBNICA1_134,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE RIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTERIBNICA1_134.png" /> GRADJEVINSKO ZEMLJISTE RIBNICA1'
            });
var format_GRADJEVISNKOZEMLJISTEPROGORELICA1_135 = new ol.format.GeoJSON();
var features_GRADJEVISNKOZEMLJISTEPROGORELICA1_135 = format_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.readFeatures(json_GRADJEVISNKOZEMLJISTEPROGORELICA1_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVISNKOZEMLJISTEPROGORELICA1_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.addFeatures(features_GRADJEVISNKOZEMLJISTEPROGORELICA1_135);
var lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVISNKOZEMLJISTEPROGORELICA1_135, 
                style: style_GRADJEVISNKOZEMLJISTEPROGORELICA1_135,
                popuplayertitle: 'GRADJEVISNKO ZEMLJISTE PROGORELICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVISNKOZEMLJISTEPROGORELICA1_135.png" /> GRADJEVISNKO ZEMLJISTE PROGORELICA1'
            });
var format_GRADJEVINSKOZEMLJISTEPLANA1_136 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPLANA1_136 = format_GRADJEVINSKOZEMLJISTEPLANA1_136.readFeatures(json_GRADJEVINSKOZEMLJISTEPLANA1_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPLANA1_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPLANA1_136.addFeatures(features_GRADJEVINSKOZEMLJISTEPLANA1_136);
var lyr_GRADJEVINSKOZEMLJISTEPLANA1_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPLANA1_136, 
                style: style_GRADJEVINSKOZEMLJISTEPLANA1_136,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE PLANA1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPLANA1_136.png" /> GRADJEVINSKO ZEMLJISTE PLANA1 '
            });
var format_GRADJEVINSKOZEMLJISTERATINA1_137 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTERATINA1_137 = format_GRADJEVINSKOZEMLJISTERATINA1_137.readFeatures(json_GRADJEVINSKOZEMLJISTERATINA1_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTERATINA1_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTERATINA1_137.addFeatures(features_GRADJEVINSKOZEMLJISTERATINA1_137);
var lyr_GRADJEVINSKOZEMLJISTERATINA1_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTERATINA1_137, 
                style: style_GRADJEVINSKOZEMLJISTERATINA1_137,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE RATINA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTERATINA1_137.png" /> GRADJEVINSKO ZEMLJISTE RATINA1'
            });
var format_GRADJEVINSKOZEMLJISTEREKA1_138 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEREKA1_138 = format_GRADJEVINSKOZEMLJISTEREKA1_138.readFeatures(json_GRADJEVINSKOZEMLJISTEREKA1_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEREKA1_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEREKA1_138.addFeatures(features_GRADJEVINSKOZEMLJISTEREKA1_138);
var lyr_GRADJEVINSKOZEMLJISTEREKA1_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEREKA1_138, 
                style: style_GRADJEVINSKOZEMLJISTEREKA1_138,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE REKA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEREKA1_138.png" /> GRADJEVINSKO ZEMLJISTE REKA1'
            });
var format_GRADJEVINSKOZEMLJISTEPREDOLE1_139 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPREDOLE1_139 = format_GRADJEVINSKOZEMLJISTEPREDOLE1_139.readFeatures(json_GRADJEVINSKOZEMLJISTEPREDOLE1_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPREDOLE1_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPREDOLE1_139.addFeatures(features_GRADJEVINSKOZEMLJISTEPREDOLE1_139);
var lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPREDOLE1_139, 
                style: style_GRADJEVINSKOZEMLJISTEPREDOLE1_139,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE PREDOLE1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPREDOLE1_139.png" /> GRADJEVINSKO ZEMLJISTE PREDOLE1 '
            });
var format_GRADJEVINSKOZEMLJISTEPOLUMIR1_140 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPOLUMIR1_140 = format_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.readFeatures(json_GRADJEVINSKOZEMLJISTEPOLUMIR1_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPOLUMIR1_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.addFeatures(features_GRADJEVINSKOZEMLJISTEPOLUMIR1_140);
var lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPOLUMIR1_140, 
                style: style_GRADJEVINSKOZEMLJISTEPOLUMIR1_140,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE POLUMIR1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPOLUMIR1_140.png" /> GRADJEVINSKO ZEMLJISTE POLUMIR1 '
            });
var format_GRADJEVINSKOZEMLJISTEPECENOG1_141 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPECENOG1_141 = format_GRADJEVINSKOZEMLJISTEPECENOG1_141.readFeatures(json_GRADJEVINSKOZEMLJISTEPECENOG1_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPECENOG1_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPECENOG1_141.addFeatures(features_GRADJEVINSKOZEMLJISTEPECENOG1_141);
var lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPECENOG1_141, 
                style: style_GRADJEVINSKOZEMLJISTEPECENOG1_141,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE PECENOG1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPECENOG1_141.png" /> GRADJEVINSKO ZEMLJISTE PECENOG1 '
            });
var format_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142 = format_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.readFeatures(json_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.addFeatures(features_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142);
var lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142, 
                style: style_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE PETROPOLJE1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.png" /> GRADJEVINSKO ZEMLJISTE PETROPOLJE1 '
            });
var format_GRADJEVINSKOZEMLJISTEKAMENICA1_143 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEKAMENICA1_143 = format_GRADJEVINSKOZEMLJISTEKAMENICA1_143.readFeatures(json_GRADJEVINSKOZEMLJISTEKAMENICA1_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEKAMENICA1_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEKAMENICA1_143.addFeatures(features_GRADJEVINSKOZEMLJISTEKAMENICA1_143);
var lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEKAMENICA1_143, 
                style: style_GRADJEVINSKOZEMLJISTEKAMENICA1_143,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE KAMENICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEKAMENICA1_143.png" /> GRADJEVINSKO ZEMLJISTE KAMENICA1'
            });
var format_GRADJEVINSKOZEMLJISTEMRSAC1_144 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMRSAC1_144 = format_GRADJEVINSKOZEMLJISTEMRSAC1_144.readFeatures(json_GRADJEVINSKOZEMLJISTEMRSAC1_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMRSAC1_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMRSAC1_144.addFeatures(features_GRADJEVINSKOZEMLJISTEMRSAC1_144);
var lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMRSAC1_144, 
                style: style_GRADJEVINSKOZEMLJISTEMRSAC1_144,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MRSAC1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMRSAC1_144.png" /> GRADJEVINSKO ZEMLJISTE MRSAC1 '
            });
var format_GRADJEVINSKOZEMLJISTEPEKCANICA1_145 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEPEKCANICA1_145 = format_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.readFeatures(json_GRADJEVINSKOZEMLJISTEPEKCANICA1_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEPEKCANICA1_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.addFeatures(features_GRADJEVINSKOZEMLJISTEPEKCANICA1_145);
var lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEPEKCANICA1_145, 
                style: style_GRADJEVINSKOZEMLJISTEPEKCANICA1_145,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE PEKCANICA1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEPEKCANICA1_145.png" /> GRADJEVINSKO ZEMLJISTE PEKCANICA1 '
            });
var format_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146 = format_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.readFeatures(json_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.addFeatures(features_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146);
var lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146, 
                style: style_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ORLJA GLAVA1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.png" /> GRADJEVINSKO ZEMLJISTE ORLJA GLAVA1 '
            });
var format_GRADJEVINSKOZEMLJISTEOPLANICI1i_147 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEOPLANICI1i_147 = format_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.readFeatures(json_GRADJEVINSKOZEMLJISTEOPLANICI1i_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEOPLANICI1i_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.addFeatures(features_GRADJEVINSKOZEMLJISTEOPLANICI1i_147);
var lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEOPLANICI1i_147, 
                style: style_GRADJEVINSKOZEMLJISTEOPLANICI1i_147,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE OPLANICI1 i',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEOPLANICI1i_147.png" /> GRADJEVINSKO ZEMLJISTE OPLANICI1 i'
            });
var format_GRADJEVINSKOZEMLJISTELOPATNICA1_148 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTELOPATNICA1_148 = format_GRADJEVINSKOZEMLJISTELOPATNICA1_148.readFeatures(json_GRADJEVINSKOZEMLJISTELOPATNICA1_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTELOPATNICA1_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTELOPATNICA1_148.addFeatures(features_GRADJEVINSKOZEMLJISTELOPATNICA1_148);
var lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTELOPATNICA1_148, 
                style: style_GRADJEVINSKOZEMLJISTELOPATNICA1_148,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE LOPATNICA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTELOPATNICA1_148.png" /> GRADJEVINSKO ZEMLJISTE LOPATNICA1'
            });
var format_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149 = format_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.readFeatures(json_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.addFeatures(features_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149);
var lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149, 
                style: style_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MILAKOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.png" /> GRADJEVINSKO ZEMLJISTE MILAKOVAC1'
            });
var format_GRADJEVINSKOZEMLJISTEMETIKOS1_150 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMETIKOS1_150 = format_GRADJEVINSKOZEMLJISTEMETIKOS1_150.readFeatures(json_GRADJEVINSKOZEMLJISTEMETIKOS1_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMETIKOS1_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMETIKOS1_150.addFeatures(features_GRADJEVINSKOZEMLJISTEMETIKOS1_150);
var lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMETIKOS1_150, 
                style: style_GRADJEVINSKOZEMLJISTEMETIKOS1_150,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE METIKOS1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMETIKOS1_150.png" /> GRADJEVINSKO ZEMLJISTE METIKOS1'
            });
var format_GRADJEVINSKOZEMLJISTEMILOCAJ1_151 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMILOCAJ1_151 = format_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.readFeatures(json_GRADJEVINSKOZEMLJISTEMILOCAJ1_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMILOCAJ1_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.addFeatures(features_GRADJEVINSKOZEMLJISTEMILOCAJ1_151);
var lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMILOCAJ1_151, 
                style: style_GRADJEVINSKOZEMLJISTEMILOCAJ1_151,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MILOCAJ1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMILOCAJ1_151.png" /> GRADJEVINSKO ZEMLJISTE MILOCAJ1'
            });
var format_GRADJEVINSKOZEMLJISTEMELJANICA_152 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMELJANICA_152 = format_GRADJEVINSKOZEMLJISTEMELJANICA_152.readFeatures(json_GRADJEVINSKOZEMLJISTEMELJANICA_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMELJANICA_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMELJANICA_152.addFeatures(features_GRADJEVINSKOZEMLJISTEMELJANICA_152);
var lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMELJANICA_152, 
                style: style_GRADJEVINSKOZEMLJISTEMELJANICA_152,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MELJANICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMELJANICA_152.png" /> GRADJEVINSKO ZEMLJISTE MELJANICA '
            });
var format_GRADJEVINSKOZEMLJISTEMILAVCICI1_153 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMILAVCICI1_153 = format_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.readFeatures(json_GRADJEVINSKOZEMLJISTEMILAVCICI1_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMILAVCICI1_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.addFeatures(features_GRADJEVINSKOZEMLJISTEMILAVCICI1_153);
var lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMILAVCICI1_153, 
                style: style_GRADJEVINSKOZEMLJISTEMILAVCICI1_153,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MILAVCICI1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMILAVCICI1_153.png" /> GRADJEVINSKO ZEMLJISTE MILAVCICI1'
            });
var format_GRADJEVINSKOZEMLJISTEMATARUGE1_154 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMATARUGE1_154 = format_GRADJEVINSKOZEMLJISTEMATARUGE1_154.readFeatures(json_GRADJEVINSKOZEMLJISTEMATARUGE1_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMATARUGE1_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMATARUGE1_154.addFeatures(features_GRADJEVINSKOZEMLJISTEMATARUGE1_154);
var lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMATARUGE1_154, 
                style: style_GRADJEVINSKOZEMLJISTEMATARUGE1_154,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MATARUGE1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMATARUGE1_154.png" /> GRADJEVINSKO ZEMLJISTE MATARUGE1'
            });
var format_GRADJEVINSDKOZEMLJISTEKONAREVO1_155 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEKONAREVO1_155 = format_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.readFeatures(json_GRADJEVINSDKOZEMLJISTEKONAREVO1_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEKONAREVO1_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.addFeatures(features_GRADJEVINSDKOZEMLJISTEKONAREVO1_155);
var lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEKONAREVO1_155, 
                style: style_GRADJEVINSDKOZEMLJISTEKONAREVO1_155,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE KONAREVO1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEKONAREVO1_155.png" /> GRADJEVINSDKO ZEMLJISTE KONAREVO1'
            });
var format_GRADJEVINSKOZEMLJISTEMAGLIC1_156 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMAGLIC1_156 = format_GRADJEVINSKOZEMLJISTEMAGLIC1_156.readFeatures(json_GRADJEVINSKOZEMLJISTEMAGLIC1_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMAGLIC1_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMAGLIC1_156.addFeatures(features_GRADJEVINSKOZEMLJISTEMAGLIC1_156);
var lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMAGLIC1_156, 
                style: style_GRADJEVINSKOZEMLJISTEMAGLIC1_156,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MAGLIC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMAGLIC1_156.png" /> GRADJEVINSKO ZEMLJISTE MAGLIC1'
            });
var format_GRADJEVINSKOZEMLJISTEKRUSEVICA_157 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEKRUSEVICA_157 = format_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.readFeatures(json_GRADJEVINSKOZEMLJISTEKRUSEVICA_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.addFeatures(features_GRADJEVINSKOZEMLJISTEKRUSEVICA_157);
var lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_157, 
                style: style_GRADJEVINSKOZEMLJISTEKRUSEVICA_157,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE KRUSEVICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEKRUSEVICA_157.png" /> GRADJEVINSKO ZEMLJISTE KRUSEVICA '
            });
var format_GRADJEVINSKOZEMLJISTELADJEVCI_158 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTELADJEVCI_158 = format_GRADJEVINSKOZEMLJISTELADJEVCI_158.readFeatures(json_GRADJEVINSKOZEMLJISTELADJEVCI_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTELADJEVCI_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTELADJEVCI_158.addFeatures(features_GRADJEVINSKOZEMLJISTELADJEVCI_158);
var lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTELADJEVCI_158, 
                style: style_GRADJEVINSKOZEMLJISTELADJEVCI_158,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE LADJEVCI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTELADJEVCI_158.png" /> GRADJEVINSKO ZEMLJISTE LADJEVCI '
            });
var format_GRADJEVINSKOZEMLJISTELAZAC1_159 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTELAZAC1_159 = format_GRADJEVINSKOZEMLJISTELAZAC1_159.readFeatures(json_GRADJEVINSKOZEMLJISTELAZAC1_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTELAZAC1_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTELAZAC1_159.addFeatures(features_GRADJEVINSKOZEMLJISTELAZAC1_159);
var lyr_GRADJEVINSKOZEMLJISTELAZAC1_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTELAZAC1_159, 
                style: style_GRADJEVINSKOZEMLJISTELAZAC1_159,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE LAZAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTELAZAC1_159.png" /> GRADJEVINSKO ZEMLJISTE LAZAC1'
            });
var format_GRADJEVINSKOZEMLJISTEKRUSEVICA_160 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEKRUSEVICA_160 = format_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.readFeatures(json_GRADJEVINSKOZEMLJISTEKRUSEVICA_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.addFeatures(features_GRADJEVINSKOZEMLJISTEKRUSEVICA_160);
var lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEKRUSEVICA_160, 
                style: style_GRADJEVINSKOZEMLJISTEKRUSEVICA_160,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE KRUSEVICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEKRUSEVICA_160.png" /> GRADJEVINSKO ZEMLJISTE KRUSEVICA '
            });
var format_GRADJEVINSDKOZEMLJISTEBRZNA_161 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEBRZNA_161 = format_GRADJEVINSDKOZEMLJISTEBRZNA_161.readFeatures(json_GRADJEVINSDKOZEMLJISTEBRZNA_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEBRZNA_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEBRZNA_161.addFeatures(features_GRADJEVINSDKOZEMLJISTEBRZNA_161);
var lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEBRZNA_161, 
                style: style_GRADJEVINSDKOZEMLJISTEBRZNA_161,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE BRZNA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEBRZNA_161.png" /> GRADJEVINSDKO ZEMLJISTE BRZNA '
            });
var format_GRADJEVINSKOZEMLJISTEGLEDIC_162 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEGLEDIC_162 = format_GRADJEVINSKOZEMLJISTEGLEDIC_162.readFeatures(json_GRADJEVINSKOZEMLJISTEGLEDIC_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEGLEDIC_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEGLEDIC_162.addFeatures(features_GRADJEVINSKOZEMLJISTEGLEDIC_162);
var lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEGLEDIC_162, 
                style: style_GRADJEVINSKOZEMLJISTEGLEDIC_162,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE GLEDIC ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEGLEDIC_162.png" /> GRADJEVINSKO ZEMLJISTE GLEDIC '
            });
var format_GRADJEVINSKOZEMLJISTEDRAZINICI_163 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDRAZINICI_163 = format_GRADJEVINSKOZEMLJISTEDRAZINICI_163.readFeatures(json_GRADJEVINSKOZEMLJISTEDRAZINICI_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDRAZINICI_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDRAZINICI_163.addFeatures(features_GRADJEVINSKOZEMLJISTEDRAZINICI_163);
var lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDRAZINICI_163, 
                style: style_GRADJEVINSKOZEMLJISTEDRAZINICI_163,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DRAZINICI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDRAZINICI_163.png" /> GRADJEVINSKO ZEMLJISTE DRAZINICI '
            });
var format_GRADJEVINSKOZEMLJISTEDJAKOVOI_164 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDJAKOVOI_164 = format_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.readFeatures(json_GRADJEVINSKOZEMLJISTEDJAKOVOI_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDJAKOVOI_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.addFeatures(features_GRADJEVINSKOZEMLJISTEDJAKOVOI_164);
var lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDJAKOVOI_164, 
                style: style_GRADJEVINSKOZEMLJISTEDJAKOVOI_164,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DJAKOVOI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDJAKOVOI_164.png" /> GRADJEVINSKO ZEMLJISTE DJAKOVOI '
            });
var format_GRADJEVINSKOZEMLJISTECUKOJEVAC_165 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTECUKOJEVAC_165 = format_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.readFeatures(json_GRADJEVINSKOZEMLJISTECUKOJEVAC_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTECUKOJEVAC_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.addFeatures(features_GRADJEVINSKOZEMLJISTECUKOJEVAC_165);
var lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTECUKOJEVAC_165, 
                style: style_GRADJEVINSKOZEMLJISTECUKOJEVAC_165,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE CUKOJEVAC ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTECUKOJEVAC_165.png" /> GRADJEVINSKO ZEMLJISTE CUKOJEVAC '
            });
var format_GRADJEVINSKOZEMLJISTECERJE_166 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTECERJE_166 = format_GRADJEVINSKOZEMLJISTECERJE_166.readFeatures(json_GRADJEVINSKOZEMLJISTECERJE_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTECERJE_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTECERJE_166.addFeatures(features_GRADJEVINSKOZEMLJISTECERJE_166);
var lyr_GRADJEVINSKOZEMLJISTECERJE_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTECERJE_166, 
                style: style_GRADJEVINSKOZEMLJISTECERJE_166,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE CERJE ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTECERJE_166.png" /> GRADJEVINSKO ZEMLJISTE CERJE '
            });
var format_GRADJEVINSDKOZEMLJISTEBREZOVA_167 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEBREZOVA_167 = format_GRADJEVINSDKOZEMLJISTEBREZOVA_167.readFeatures(json_GRADJEVINSDKOZEMLJISTEBREZOVA_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEBREZOVA_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEBREZOVA_167.addFeatures(features_GRADJEVINSDKOZEMLJISTEBREZOVA_167);
var lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEBREZOVA_167, 
                style: style_GRADJEVINSDKOZEMLJISTEBREZOVA_167,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE BREZOVA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEBREZOVA_167.png" /> GRADJEVINSDKO ZEMLJISTE BREZOVA '
            });
var format_GRADJEVINSKOZEMLJISTEGOTOVAC1_168 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEGOTOVAC1_168 = format_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.readFeatures(json_GRADJEVINSKOZEMLJISTEGOTOVAC1_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEGOTOVAC1_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.addFeatures(features_GRADJEVINSKOZEMLJISTEGOTOVAC1_168);
var lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEGOTOVAC1_168, 
                style: style_GRADJEVINSKOZEMLJISTEGOTOVAC1_168,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE GOTOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEGOTOVAC1_168.png" /> GRADJEVINSKO ZEMLJISTE GOTOVAC1'
            });
var format_GRADJEVINSDKOZEMLJISTEBZOVIK_169 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEBZOVIK_169 = format_GRADJEVINSDKOZEMLJISTEBZOVIK_169.readFeatures(json_GRADJEVINSDKOZEMLJISTEBZOVIK_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEBZOVIK_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEBZOVIK_169.addFeatures(features_GRADJEVINSDKOZEMLJISTEBZOVIK_169);
var lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEBZOVIK_169, 
                style: style_GRADJEVINSDKOZEMLJISTEBZOVIK_169,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE BZOVIK ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEBZOVIK_169.png" /> GRADJEVINSDKO ZEMLJISTE BZOVIK '
            });
var format_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170 = format_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.readFeatures(json_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.addFeatures(features_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170);
var lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170, 
                style: style_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE BAPSKO POLJE ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.png" /> GRADJEVINSKO ZEMLJISTE BAPSKO POLJE '
            });
var format_GRADJEVINSKOZEMLJISTEDEDEVCI_171 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDEDEVCI_171 = format_GRADJEVINSKOZEMLJISTEDEDEVCI_171.readFeatures(json_GRADJEVINSKOZEMLJISTEDEDEVCI_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDEDEVCI_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDEDEVCI_171.addFeatures(features_GRADJEVINSKOZEMLJISTEDEDEVCI_171);
var lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDEDEVCI_171, 
                style: style_GRADJEVINSKOZEMLJISTEDEDEVCI_171,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DEDEVCI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDEDEVCI_171.png" /> GRADJEVINSKO ZEMLJISTE DEDEVCI '
            });
var format_GRADJEVINSKOZEMLJISTEDOLAC_172 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDOLAC_172 = format_GRADJEVINSKOZEMLJISTEDOLAC_172.readFeatures(json_GRADJEVINSKOZEMLJISTEDOLAC_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDOLAC_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDOLAC_172.addFeatures(features_GRADJEVINSKOZEMLJISTEDOLAC_172);
var lyr_GRADJEVINSKOZEMLJISTEDOLAC_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDOLAC_172, 
                style: style_GRADJEVINSKOZEMLJISTEDOLAC_172,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DOLAC ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDOLAC_172.png" /> GRADJEVINSKO ZEMLJISTE DOLAC '
            });
var format_GRADJEVINSDKOZEMLJISTEBUKOVICA_173 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEBUKOVICA_173 = format_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.readFeatures(json_GRADJEVINSDKOZEMLJISTEBUKOVICA_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEBUKOVICA_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.addFeatures(features_GRADJEVINSDKOZEMLJISTEBUKOVICA_173);
var lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEBUKOVICA_173, 
                style: style_GRADJEVINSDKOZEMLJISTEBUKOVICA_173,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE BUKOVICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEBUKOVICA_173.png" /> GRADJEVINSDKO ZEMLJISTE BUKOVICA '
            });
var format_GRADJEVINSKOZEMLJISTEGOKCANICA_174 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEGOKCANICA_174 = format_GRADJEVINSKOZEMLJISTEGOKCANICA_174.readFeatures(json_GRADJEVINSKOZEMLJISTEGOKCANICA_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEGOKCANICA_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEGOKCANICA_174.addFeatures(features_GRADJEVINSKOZEMLJISTEGOKCANICA_174);
var lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEGOKCANICA_174, 
                style: style_GRADJEVINSKOZEMLJISTEGOKCANICA_174,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE GOKCANICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEGOKCANICA_174.png" /> GRADJEVINSKO ZEMLJISTE GOKCANICA '
            });
var format_GRADJEVINSKOZEMLJISTEBARE_175 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEBARE_175 = format_GRADJEVINSKOZEMLJISTEBARE_175.readFeatures(json_GRADJEVINSKOZEMLJISTEBARE_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEBARE_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEBARE_175.addFeatures(features_GRADJEVINSKOZEMLJISTEBARE_175);
var lyr_GRADJEVINSKOZEMLJISTEBARE_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEBARE_175, 
                style: style_GRADJEVINSKOZEMLJISTEBARE_175,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE BARE ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEBARE_175.png" /> GRADJEVINSKO ZEMLJISTE BARE '
            });
var format_GRADJEVINSKOZEMLJISTEGODACICA_176 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEGODACICA_176 = format_GRADJEVINSKOZEMLJISTEGODACICA_176.readFeatures(json_GRADJEVINSKOZEMLJISTEGODACICA_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEGODACICA_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEGODACICA_176.addFeatures(features_GRADJEVINSKOZEMLJISTEGODACICA_176);
var lyr_GRADJEVINSKOZEMLJISTEGODACICA_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEGODACICA_176, 
                style: style_GRADJEVINSKOZEMLJISTEGODACICA_176,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE GODACICA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEGODACICA_176.png" /> GRADJEVINSKO ZEMLJISTE GODACICA '
            });
var format_GRADJEVINSKOZEMLJISTEDRAKCICI_177 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDRAKCICI_177 = format_GRADJEVINSKOZEMLJISTEDRAKCICI_177.readFeatures(json_GRADJEVINSKOZEMLJISTEDRAKCICI_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDRAKCICI_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDRAKCICI_177.addFeatures(features_GRADJEVINSKOZEMLJISTEDRAKCICI_177);
var lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDRAKCICI_177, 
                style: style_GRADJEVINSKOZEMLJISTEDRAKCICI_177,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DRAKCICI ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDRAKCICI_177.png" /> GRADJEVINSKO ZEMLJISTE DRAKCICI '
            });
var format_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178 = format_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.readFeatures(json_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.addFeatures(features_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178);
var lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178, 
                style: style_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE TRGOVOVISTE1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.png" /> GRADJEVINSKO ZEMLJISTE TRGOVOVISTE1'
            });
var format_GRADJEVINSKOZEMLJISTEDRLUPA_179 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDRLUPA_179 = format_GRADJEVINSKOZEMLJISTEDRLUPA_179.readFeatures(json_GRADJEVINSKOZEMLJISTEDRLUPA_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDRLUPA_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDRLUPA_179.addFeatures(features_GRADJEVINSKOZEMLJISTEDRLUPA_179);
var lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDRLUPA_179, 
                style: style_GRADJEVINSKOZEMLJISTEDRLUPA_179,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DRLUPA ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDRLUPA_179.png" /> GRADJEVINSKO ZEMLJISTE DRLUPA '
            });
var format_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180 = format_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.readFeatures(json_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.addFeatures(features_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180);
var lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180, 
                style: style_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE DRAGOSINJCE ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.png" /> GRADJEVINSKO ZEMLJISTE DRAGOSINJCE '
            });
var format_GRADJEVINSKOZEMLJISTECVETKE_181 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTECVETKE_181 = format_GRADJEVINSKOZEMLJISTECVETKE_181.readFeatures(json_GRADJEVINSKOZEMLJISTECVETKE_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTECVETKE_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTECVETKE_181.addFeatures(features_GRADJEVINSKOZEMLJISTECVETKE_181);
var lyr_GRADJEVINSKOZEMLJISTECVETKE_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTECVETKE_181, 
                style: style_GRADJEVINSKOZEMLJISTECVETKE_181,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE CVETKE ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTECVETKE_181.png" /> GRADJEVINSKO ZEMLJISTE CVETKE '
            });
var format_GRADJEVINSDKOZEMLJISTEBRESNIK_182 = new ol.format.GeoJSON();
var features_GRADJEVINSDKOZEMLJISTEBRESNIK_182 = format_GRADJEVINSDKOZEMLJISTEBRESNIK_182.readFeatures(json_GRADJEVINSDKOZEMLJISTEBRESNIK_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSDKOZEMLJISTEBRESNIK_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSDKOZEMLJISTEBRESNIK_182.addFeatures(features_GRADJEVINSDKOZEMLJISTEBRESNIK_182);
var lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSDKOZEMLJISTEBRESNIK_182, 
                style: style_GRADJEVINSDKOZEMLJISTEBRESNIK_182,
                popuplayertitle: 'GRADJEVINSDKO ZEMLJISTE BRESNIK ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSDKOZEMLJISTEBRESNIK_182.png" /> GRADJEVINSDKO ZEMLJISTE BRESNIK '
            });
var format_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183 = format_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.readFeatures(json_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.addFeatures(features_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183);
var lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183, 
                style: style_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE BOGUTOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.png" /> GRADJEVINSKO ZEMLJISTE BOGUTOVAC1'
            });
var format_GRADJEVINSKOZEMLJISTEROCEVICI1_184 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEROCEVICI1_184 = format_GRADJEVINSKOZEMLJISTEROCEVICI1_184.readFeatures(json_GRADJEVINSKOZEMLJISTEROCEVICI1_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEROCEVICI1_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEROCEVICI1_184.addFeatures(features_GRADJEVINSKOZEMLJISTEROCEVICI1_184);
var lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEROCEVICI1_184, 
                style: style_GRADJEVINSKOZEMLJISTEROCEVICI1_184,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE ROCEVICI1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEROCEVICI1_184.png" /> GRADJEVINSKO ZEMLJISTE ROCEVICI1'
            });
var format_GRADJEVINSKOZEMLJISTERAVNICA2_185 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTERAVNICA2_185 = format_GRADJEVINSKOZEMLJISTERAVNICA2_185.readFeatures(json_GRADJEVINSKOZEMLJISTERAVNICA2_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTERAVNICA2_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTERAVNICA2_185.addFeatures(features_GRADJEVINSKOZEMLJISTERAVNICA2_185);
var lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTERAVNICA2_185, 
                style: style_GRADJEVINSKOZEMLJISTERAVNICA2_185,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE RAVNICA2',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTERAVNICA2_185.png" /> GRADJEVINSKO ZEMLJISTE RAVNICA2'
            });
var format_GRADJEVINSKOZEMLJISTEMLANCA_186 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMLANCA_186 = format_GRADJEVINSKOZEMLJISTEMLANCA_186.readFeatures(json_GRADJEVINSKOZEMLJISTEMLANCA_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMLANCA_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMLANCA_186.addFeatures(features_GRADJEVINSKOZEMLJISTEMLANCA_186);
var lyr_GRADJEVINSKOZEMLJISTEMLANCA_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMLANCA_186, 
                style: style_GRADJEVINSKOZEMLJISTEMLANCA_186,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MLANCA',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMLANCA_186.png" /> GRADJEVINSKO ZEMLJISTE MLANCA'
            });
var format_GRADJEVINSKOZEMLJISTELESEVO2_187 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTELESEVO2_187 = format_GRADJEVINSKOZEMLJISTELESEVO2_187.readFeatures(json_GRADJEVINSKOZEMLJISTELESEVO2_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTELESEVO2_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTELESEVO2_187.addFeatures(features_GRADJEVINSKOZEMLJISTELESEVO2_187);
var lyr_GRADJEVINSKOZEMLJISTELESEVO2_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTELESEVO2_187, 
                style: style_GRADJEVINSKOZEMLJISTELESEVO2_187,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE LESEVO2',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTELESEVO2_187.png" /> GRADJEVINSKO ZEMLJISTE LESEVO2'
            });
var format_GRADJEVINSKOZEMLJISTEMILICI1_188 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEMILICI1_188 = format_GRADJEVINSKOZEMLJISTEMILICI1_188.readFeatures(json_GRADJEVINSKOZEMLJISTEMILICI1_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEMILICI1_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEMILICI1_188.addFeatures(features_GRADJEVINSKOZEMLJISTEMILICI1_188);
var lyr_GRADJEVINSKOZEMLJISTEMILICI1_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEMILICI1_188, 
                style: style_GRADJEVINSKOZEMLJISTEMILICI1_188,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE MILICI1 ',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEMILICI1_188.png" /> GRADJEVINSKO ZEMLJISTE MILICI1 '
            });
var format_GRADJEVINSKOZEMLJISTEREKA1_189 = new ol.format.GeoJSON();
var features_GRADJEVINSKOZEMLJISTEREKA1_189 = format_GRADJEVINSKOZEMLJISTEREKA1_189.readFeatures(json_GRADJEVINSKOZEMLJISTEREKA1_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRADJEVINSKOZEMLJISTEREKA1_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRADJEVINSKOZEMLJISTEREKA1_189.addFeatures(features_GRADJEVINSKOZEMLJISTEREKA1_189);
var lyr_GRADJEVINSKOZEMLJISTEREKA1_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRADJEVINSKOZEMLJISTEREKA1_189, 
                style: style_GRADJEVINSKOZEMLJISTEREKA1_189,
                popuplayertitle: 'GRADJEVINSKO ZEMLJISTE REKA1',
                interactive: true,
                title: '<img src="styles/legend/GRADJEVINSKOZEMLJISTEREKA1_189.png" /> GRADJEVINSKO ZEMLJISTE REKA1'
            });
var format_GUOBREZNA_190 = new ol.format.GeoJSON();
var features_GUOBREZNA_190 = format_GUOBREZNA_190.readFeatures(json_GUOBREZNA_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOBREZNA_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOBREZNA_190.addFeatures(features_GUOBREZNA_190);
var lyr_GUOBREZNA_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOBREZNA_190, 
                style: style_GUOBREZNA_190,
                popuplayertitle: 'GUO BREZNA ',
                interactive: true,
                title: '<img src="styles/legend/GUOBREZNA_190.png" /> GUO BREZNA '
            });
var format_GUOUSCE1_191 = new ol.format.GeoJSON();
var features_GUOUSCE1_191 = format_GUOUSCE1_191.readFeatures(json_GUOUSCE1_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOUSCE1_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOUSCE1_191.addFeatures(features_GUOUSCE1_191);
var lyr_GUOUSCE1_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOUSCE1_191, 
                style: style_GUOUSCE1_191,
                popuplayertitle: 'GUO USCE1',
                interactive: true,
                title: '<img src="styles/legend/GUOUSCE1_191.png" /> GUO USCE1'
            });
var format_GUOPECENOG1_192 = new ol.format.GeoJSON();
var features_GUOPECENOG1_192 = format_GUOPECENOG1_192.readFeatures(json_GUOPECENOG1_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOPECENOG1_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOPECENOG1_192.addFeatures(features_GUOPECENOG1_192);
var lyr_GUOPECENOG1_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOPECENOG1_192, 
                style: style_GUOPECENOG1_192,
                popuplayertitle: 'GUO PECENOG1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOPECENOG1_192.png" /> GUO PECENOG1 '
            });
var format_GUOBAPSKOPOLJE_193 = new ol.format.GeoJSON();
var features_GUOBAPSKOPOLJE_193 = format_GUOBAPSKOPOLJE_193.readFeatures(json_GUOBAPSKOPOLJE_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOBAPSKOPOLJE_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOBAPSKOPOLJE_193.addFeatures(features_GUOBAPSKOPOLJE_193);
var lyr_GUOBAPSKOPOLJE_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOBAPSKOPOLJE_193, 
                style: style_GUOBAPSKOPOLJE_193,
                popuplayertitle: 'GUO BAPSKO POLJE ',
                interactive: true,
                title: '<img src="styles/legend/GUOBAPSKOPOLJE_193.png" /> GUO BAPSKO POLJE '
            });
var format_GUOSUMARICE1_194 = new ol.format.GeoJSON();
var features_GUOSUMARICE1_194 = format_GUOSUMARICE1_194.readFeatures(json_GUOSUMARICE1_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOSUMARICE1_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOSUMARICE1_194.addFeatures(features_GUOSUMARICE1_194);
var lyr_GUOSUMARICE1_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOSUMARICE1_194, 
                style: style_GUOSUMARICE1_194,
                popuplayertitle: 'GUO SUMARICE1',
                interactive: true,
                title: '<img src="styles/legend/GUOSUMARICE1_194.png" /> GUO SUMARICE1'
            });
var format_GUOVITKOVAC1_195 = new ol.format.GeoJSON();
var features_GUOVITKOVAC1_195 = format_GUOVITKOVAC1_195.readFeatures(json_GUOVITKOVAC1_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOVITKOVAC1_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOVITKOVAC1_195.addFeatures(features_GUOVITKOVAC1_195);
var lyr_GUOVITKOVAC1_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOVITKOVAC1_195, 
                style: style_GUOVITKOVAC1_195,
                popuplayertitle: 'GUO VITKOVAC1',
                interactive: true,
                title: '<img src="styles/legend/GUOVITKOVAC1_195.png" /> GUO VITKOVAC1'
            });
var format_GUOROCEVICI1_196 = new ol.format.GeoJSON();
var features_GUOROCEVICI1_196 = format_GUOROCEVICI1_196.readFeatures(json_GUOROCEVICI1_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOROCEVICI1_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOROCEVICI1_196.addFeatures(features_GUOROCEVICI1_196);
var lyr_GUOROCEVICI1_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOROCEVICI1_196, 
                style: style_GUOROCEVICI1_196,
                popuplayertitle: 'GUO ROCEVICI1',
                interactive: true,
                title: '<img src="styles/legend/GUOROCEVICI1_196.png" /> GUO ROCEVICI1'
            });
var format_GUOPETROPOLJE1_197 = new ol.format.GeoJSON();
var features_GUOPETROPOLJE1_197 = format_GUOPETROPOLJE1_197.readFeatures(json_GUOPETROPOLJE1_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOPETROPOLJE1_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOPETROPOLJE1_197.addFeatures(features_GUOPETROPOLJE1_197);
var lyr_GUOPETROPOLJE1_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOPETROPOLJE1_197, 
                style: style_GUOPETROPOLJE1_197,
                popuplayertitle: 'GUO PETROPOLJE1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOPETROPOLJE1_197.png" /> GUO PETROPOLJE1 '
            });
var format_GUORIBNICA1_198 = new ol.format.GeoJSON();
var features_GUORIBNICA1_198 = format_GUORIBNICA1_198.readFeatures(json_GUORIBNICA1_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUORIBNICA1_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUORIBNICA1_198.addFeatures(features_GUORIBNICA1_198);
var lyr_GUORIBNICA1_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUORIBNICA1_198, 
                style: style_GUORIBNICA1_198,
                popuplayertitle: 'GUO RIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/GUORIBNICA1_198.png" /> GUO RIBNICA1'
            });
var format_GUOTOLISNICA1_199 = new ol.format.GeoJSON();
var features_GUOTOLISNICA1_199 = format_GUOTOLISNICA1_199.readFeatures(json_GUOTOLISNICA1_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOTOLISNICA1_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOTOLISNICA1_199.addFeatures(features_GUOTOLISNICA1_199);
var lyr_GUOTOLISNICA1_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOTOLISNICA1_199, 
                style: style_GUOTOLISNICA1_199,
                popuplayertitle: 'GUO TOLISNICA1',
                interactive: true,
                title: '<img src="styles/legend/GUOTOLISNICA1_199.png" /> GUO TOLISNICA1'
            });
var format_GUOLAZAC1_200 = new ol.format.GeoJSON();
var features_GUOLAZAC1_200 = format_GUOLAZAC1_200.readFeatures(json_GUOLAZAC1_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOLAZAC1_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOLAZAC1_200.addFeatures(features_GUOLAZAC1_200);
var lyr_GUOLAZAC1_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOLAZAC1_200, 
                style: style_GUOLAZAC1_200,
                popuplayertitle: 'GUO LAZAC1',
                interactive: true,
                title: '<img src="styles/legend/GUOLAZAC1_200.png" /> GUO LAZAC1'
            });
var format_GUOSIBNICA1_201 = new ol.format.GeoJSON();
var features_GUOSIBNICA1_201 = format_GUOSIBNICA1_201.readFeatures(json_GUOSIBNICA1_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOSIBNICA1_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOSIBNICA1_201.addFeatures(features_GUOSIBNICA1_201);
var lyr_GUOSIBNICA1_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOSIBNICA1_201, 
                style: style_GUOSIBNICA1_201,
                popuplayertitle: 'GUO SIBNICA1',
                interactive: true,
                title: '<img src="styles/legend/GUOSIBNICA1_201.png" /> GUO SIBNICA1'
            });
var format_GUOVRDILA1_202 = new ol.format.GeoJSON();
var features_GUOVRDILA1_202 = format_GUOVRDILA1_202.readFeatures(json_GUOVRDILA1_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOVRDILA1_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOVRDILA1_202.addFeatures(features_GUOVRDILA1_202);
var lyr_GUOVRDILA1_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOVRDILA1_202, 
                style: style_GUOVRDILA1_202,
                popuplayertitle: 'GUO VRDILA1',
                interactive: true,
                title: '<img src="styles/legend/GUOVRDILA1_202.png" /> GUO VRDILA1'
            });
var format_GUOLESEVO1_203 = new ol.format.GeoJSON();
var features_GUOLESEVO1_203 = format_GUOLESEVO1_203.readFeatures(json_GUOLESEVO1_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOLESEVO1_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOLESEVO1_203.addFeatures(features_GUOLESEVO1_203);
var lyr_GUOLESEVO1_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOLESEVO1_203, 
                style: style_GUOLESEVO1_203,
                popuplayertitle: 'GUO LESEVO1',
                interactive: true,
                title: '<img src="styles/legend/GUOLESEVO1_203.png" /> GUO LESEVO1'
            });
var format_GUOPOPOVICI1_204 = new ol.format.GeoJSON();
var features_GUOPOPOVICI1_204 = format_GUOPOPOVICI1_204.readFeatures(json_GUOPOPOVICI1_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOPOPOVICI1_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOPOPOVICI1_204.addFeatures(features_GUOPOPOVICI1_204);
var lyr_GUOPOPOVICI1_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOPOPOVICI1_204, 
                style: style_GUOPOPOVICI1_204,
                popuplayertitle: 'GUO POPOVICI1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOPOPOVICI1_204.png" /> GUO POPOVICI1 '
            });
var format_GUOOPLANICI1_205 = new ol.format.GeoJSON();
var features_GUOOPLANICI1_205 = format_GUOOPLANICI1_205.readFeatures(json_GUOOPLANICI1_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOOPLANICI1_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOOPLANICI1_205.addFeatures(features_GUOOPLANICI1_205);
var lyr_GUOOPLANICI1_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOOPLANICI1_205, 
                style: style_GUOOPLANICI1_205,
                popuplayertitle: 'GUO OPLANICI1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOOPLANICI1_205.png" /> GUO OPLANICI1 '
            });
var format_GUOMRSAC1_206 = new ol.format.GeoJSON();
var features_GUOMRSAC1_206 = format_GUOMRSAC1_206.readFeatures(json_GUOMRSAC1_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMRSAC1_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMRSAC1_206.addFeatures(features_GUOMRSAC1_206);
var lyr_GUOMRSAC1_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMRSAC1_206, 
                style: style_GUOMRSAC1_206,
                popuplayertitle: 'GUO MRSAC1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOMRSAC1_206.png" /> GUO MRSAC1 '
            });
var format_GUOBUKOVICA_207 = new ol.format.GeoJSON();
var features_GUOBUKOVICA_207 = format_GUOBUKOVICA_207.readFeatures(json_GUOBUKOVICA_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOBUKOVICA_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOBUKOVICA_207.addFeatures(features_GUOBUKOVICA_207);
var lyr_GUOBUKOVICA_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOBUKOVICA_207, 
                style: style_GUOBUKOVICA_207,
                popuplayertitle: 'GUO BUKOVICA ',
                interactive: true,
                title: '<img src="styles/legend/GUOBUKOVICA_207.png" /> GUO BUKOVICA '
            });
var format_GUOMILAVCICI1_208 = new ol.format.GeoJSON();
var features_GUOMILAVCICI1_208 = format_GUOMILAVCICI1_208.readFeatures(json_GUOMILAVCICI1_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMILAVCICI1_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMILAVCICI1_208.addFeatures(features_GUOMILAVCICI1_208);
var lyr_GUOMILAVCICI1_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMILAVCICI1_208, 
                style: style_GUOMILAVCICI1_208,
                popuplayertitle: 'GUO MILAVCICI1',
                interactive: true,
                title: '<img src="styles/legend/GUOMILAVCICI1_208.png" /> GUO MILAVCICI1'
            });
var format_GUODRLUPA1_209 = new ol.format.GeoJSON();
var features_GUODRLUPA1_209 = format_GUODRLUPA1_209.readFeatures(json_GUODRLUPA1_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUODRLUPA1_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUODRLUPA1_209.addFeatures(features_GUODRLUPA1_209);
var lyr_GUODRLUPA1_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUODRLUPA1_209, 
                style: style_GUODRLUPA1_209,
                popuplayertitle: 'GUO DRLUPA1',
                interactive: true,
                title: '<img src="styles/legend/GUODRLUPA1_209.png" /> GUO DRLUPA1'
            });
var format_GUOMUSINAREKA1_210 = new ol.format.GeoJSON();
var features_GUOMUSINAREKA1_210 = format_GUOMUSINAREKA1_210.readFeatures(json_GUOMUSINAREKA1_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMUSINAREKA1_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMUSINAREKA1_210.addFeatures(features_GUOMUSINAREKA1_210);
var lyr_GUOMUSINAREKA1_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMUSINAREKA1_210, 
                style: style_GUOMUSINAREKA1_210,
                popuplayertitle: 'GUO MUSINA REKA1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOMUSINAREKA1_210.png" /> GUO MUSINA REKA1 '
            });
var format_GUOMILICI1_211 = new ol.format.GeoJSON();
var features_GUOMILICI1_211 = format_GUOMILICI1_211.readFeatures(json_GUOMILICI1_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMILICI1_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMILICI1_211.addFeatures(features_GUOMILICI1_211);
var lyr_GUOMILICI1_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMILICI1_211, 
                style: style_GUOMILICI1_211,
                popuplayertitle: 'GUO MILICI1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOMILICI1_211.png" /> GUO MILICI1 '
            });
var format_GUOMETIKOSI1_212 = new ol.format.GeoJSON();
var features_GUOMETIKOSI1_212 = format_GUOMETIKOSI1_212.readFeatures(json_GUOMETIKOSI1_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMETIKOSI1_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMETIKOSI1_212.addFeatures(features_GUOMETIKOSI1_212);
var lyr_GUOMETIKOSI1_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMETIKOSI1_212, 
                style: style_GUOMETIKOSI1_212,
                popuplayertitle: 'GUO METIKOSI1',
                interactive: true,
                title: '<img src="styles/legend/GUOMETIKOSI1_212.png" /> GUO METIKOSI1'
            });
var format_GUOGLEDIC1_213 = new ol.format.GeoJSON();
var features_GUOGLEDIC1_213 = format_GUOGLEDIC1_213.readFeatures(json_GUOGLEDIC1_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOGLEDIC1_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOGLEDIC1_213.addFeatures(features_GUOGLEDIC1_213);
var lyr_GUOGLEDIC1_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOGLEDIC1_213, 
                style: style_GUOGLEDIC1_213,
                popuplayertitle: 'GUO GLEDIC1',
                interactive: true,
                title: '<img src="styles/legend/GUOGLEDIC1_213.png" /> GUO GLEDIC1'
            });
var format_GUODEDEVCI1_214 = new ol.format.GeoJSON();
var features_GUODEDEVCI1_214 = format_GUODEDEVCI1_214.readFeatures(json_GUODEDEVCI1_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUODEDEVCI1_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUODEDEVCI1_214.addFeatures(features_GUODEDEVCI1_214);
var lyr_GUODEDEVCI1_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUODEDEVCI1_214, 
                style: style_GUODEDEVCI1_214,
                popuplayertitle: 'GUO DEDEVCI1',
                interactive: true,
                title: '<img src="styles/legend/GUODEDEVCI1_214.png" /> GUO DEDEVCI1'
            });
var format_GUOCVETKE1_215 = new ol.format.GeoJSON();
var features_GUOCVETKE1_215 = format_GUOCVETKE1_215.readFeatures(json_GUOCVETKE1_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOCVETKE1_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOCVETKE1_215.addFeatures(features_GUOCVETKE1_215);
var lyr_GUOCVETKE1_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOCVETKE1_215, 
                style: style_GUOCVETKE1_215,
                popuplayertitle: 'GUO CVETKE1',
                interactive: true,
                title: '<img src="styles/legend/GUOCVETKE1_215.png" /> GUO CVETKE1'
            });
var format_GUOGOKCANICA1_216 = new ol.format.GeoJSON();
var features_GUOGOKCANICA1_216 = format_GUOGOKCANICA1_216.readFeatures(json_GUOGOKCANICA1_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOGOKCANICA1_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOGOKCANICA1_216.addFeatures(features_GUOGOKCANICA1_216);
var lyr_GUOGOKCANICA1_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOGOKCANICA1_216, 
                style: style_GUOGOKCANICA1_216,
                popuplayertitle: 'GUO GOKCANICA1',
                interactive: true,
                title: '<img src="styles/legend/GUOGOKCANICA1_216.png" /> GUO GOKCANICA1'
            });
var format_GUOGODACICA1_217 = new ol.format.GeoJSON();
var features_GUOGODACICA1_217 = format_GUOGODACICA1_217.readFeatures(json_GUOGODACICA1_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOGODACICA1_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOGODACICA1_217.addFeatures(features_GUOGODACICA1_217);
var lyr_GUOGODACICA1_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOGODACICA1_217, 
                style: style_GUOGODACICA1_217,
                popuplayertitle: 'GUO GODACICA1',
                interactive: true,
                title: '<img src="styles/legend/GUOGODACICA1_217.png" /> GUO GODACICA1'
            });
var format_GUODRAGOSINJCI1_218 = new ol.format.GeoJSON();
var features_GUODRAGOSINJCI1_218 = format_GUODRAGOSINJCI1_218.readFeatures(json_GUODRAGOSINJCI1_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUODRAGOSINJCI1_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUODRAGOSINJCI1_218.addFeatures(features_GUODRAGOSINJCI1_218);
var lyr_GUODRAGOSINJCI1_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUODRAGOSINJCI1_218, 
                style: style_GUODRAGOSINJCI1_218,
                popuplayertitle: 'GUO DRAGOSINJCI1',
                interactive: true,
                title: '<img src="styles/legend/GUODRAGOSINJCI1_218.png" /> GUO DRAGOSINJCI1'
            });
var format_GUODRAKCICI1_219 = new ol.format.GeoJSON();
var features_GUODRAKCICI1_219 = format_GUODRAKCICI1_219.readFeatures(json_GUODRAKCICI1_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUODRAKCICI1_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUODRAKCICI1_219.addFeatures(features_GUODRAKCICI1_219);
var lyr_GUODRAKCICI1_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUODRAKCICI1_219, 
                style: style_GUODRAKCICI1_219,
                popuplayertitle: 'GUO DRAKCICI1',
                interactive: true,
                title: '<img src="styles/legend/GUODRAKCICI1_219.png" /> GUO DRAKCICI1'
            });
var format_GUODOLAC1_220 = new ol.format.GeoJSON();
var features_GUODOLAC1_220 = format_GUODOLAC1_220.readFeatures(json_GUODOLAC1_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUODOLAC1_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUODOLAC1_220.addFeatures(features_GUODOLAC1_220);
var lyr_GUODOLAC1_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUODOLAC1_220, 
                style: style_GUODOLAC1_220,
                popuplayertitle: 'GUO DOLAC1 ',
                interactive: true,
                title: '<img src="styles/legend/GUODOLAC1_220.png" /> GUO DOLAC1 '
            });
var format_GUORAVNICA2_221 = new ol.format.GeoJSON();
var features_GUORAVNICA2_221 = format_GUORAVNICA2_221.readFeatures(json_GUORAVNICA2_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUORAVNICA2_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUORAVNICA2_221.addFeatures(features_GUORAVNICA2_221);
var lyr_GUORAVNICA2_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUORAVNICA2_221, 
                style: style_GUORAVNICA2_221,
                popuplayertitle: 'GUO RAVNICA2',
                interactive: true,
                title: '<img src="styles/legend/GUORAVNICA2_221.png" /> GUO RAVNICA2'
            });
var format_GUOMILAKOVAC2_222 = new ol.format.GeoJSON();
var features_GUOMILAKOVAC2_222 = format_GUOMILAKOVAC2_222.readFeatures(json_GUOMILAKOVAC2_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMILAKOVAC2_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMILAKOVAC2_222.addFeatures(features_GUOMILAKOVAC2_222);
var lyr_GUOMILAKOVAC2_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMILAKOVAC2_222, 
                style: style_GUOMILAKOVAC2_222,
                popuplayertitle: 'GUO MILAKOVAC2',
                interactive: true,
                title: '<img src="styles/legend/GUOMILAKOVAC2_222.png" /> GUO MILAKOVAC2'
            });
var format_GUOMLANCA_223 = new ol.format.GeoJSON();
var features_GUOMLANCA_223 = format_GUOMLANCA_223.readFeatures(json_GUOMLANCA_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMLANCA_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMLANCA_223.addFeatures(features_GUOMLANCA_223);
var lyr_GUOMLANCA_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMLANCA_223, 
                style: style_GUOMLANCA_223,
                popuplayertitle: 'GUO MLANCA',
                interactive: true,
                title: '<img src="styles/legend/GUOMLANCA_223.png" /> GUO MLANCA'
            });
var format_GUOBZOVIK_224 = new ol.format.GeoJSON();
var features_GUOBZOVIK_224 = format_GUOBZOVIK_224.readFeatures(json_GUOBZOVIK_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOBZOVIK_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOBZOVIK_224.addFeatures(features_GUOBZOVIK_224);
var lyr_GUOBZOVIK_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOBZOVIK_224, 
                style: style_GUOBZOVIK_224,
                popuplayertitle: 'GUO BZOVIK',
                interactive: true,
                title: '<img src="styles/legend/GUOBZOVIK_224.png" /> GUO BZOVIK'
            });
var format_GUOBAPSKOPOLJE_225 = new ol.format.GeoJSON();
var features_GUOBAPSKOPOLJE_225 = format_GUOBAPSKOPOLJE_225.readFeatures(json_GUOBAPSKOPOLJE_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOBAPSKOPOLJE_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOBAPSKOPOLJE_225.addFeatures(features_GUOBAPSKOPOLJE_225);
var lyr_GUOBAPSKOPOLJE_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOBAPSKOPOLJE_225, 
                style: style_GUOBAPSKOPOLJE_225,
                popuplayertitle: 'GUO BAPSKO POLJE',
                interactive: true,
                title: '<img src="styles/legend/GUOBAPSKOPOLJE_225.png" /> GUO BAPSKO POLJE'
            });
var format_GUOMILOCAJ2_226 = new ol.format.GeoJSON();
var features_GUOMILOCAJ2_226 = format_GUOMILOCAJ2_226.readFeatures(json_GUOMILOCAJ2_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMILOCAJ2_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMILOCAJ2_226.addFeatures(features_GUOMILOCAJ2_226);
var lyr_GUOMILOCAJ2_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMILOCAJ2_226, 
                style: style_GUOMILOCAJ2_226,
                popuplayertitle: 'GUO MILOCAJ 2 ',
                interactive: true,
                title: '<img src="styles/legend/GUOMILOCAJ2_226.png" /> GUO MILOCAJ 2 '
            });
var format_GUOMILOCAJ1_227 = new ol.format.GeoJSON();
var features_GUOMILOCAJ1_227 = format_GUOMILOCAJ1_227.readFeatures(json_GUOMILOCAJ1_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUOMILOCAJ1_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUOMILOCAJ1_227.addFeatures(features_GUOMILOCAJ1_227);
var lyr_GUOMILOCAJ1_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUOMILOCAJ1_227, 
                style: style_GUOMILOCAJ1_227,
                popuplayertitle: 'GUO MILOCAJ 1 ',
                interactive: true,
                title: '<img src="styles/legend/GUOMILOCAJ1_227.png" /> GUO MILOCAJ 1 '
            });
var format_zastitna_zona_40m_moravski_koridor_228 = new ol.format.GeoJSON();
var features_zastitna_zona_40m_moravski_koridor_228 = format_zastitna_zona_40m_moravski_koridor_228.readFeatures(json_zastitna_zona_40m_moravski_koridor_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zastitna_zona_40m_moravski_koridor_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zastitna_zona_40m_moravski_koridor_228.addFeatures(features_zastitna_zona_40m_moravski_koridor_228);
var lyr_zastitna_zona_40m_moravski_koridor_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zastitna_zona_40m_moravski_koridor_228, 
                style: style_zastitna_zona_40m_moravski_koridor_228,
                popuplayertitle: 'zastitna_zona_40m_moravski_koridor',
                interactive: true,
                title: '<img src="styles/legend/zastitna_zona_40m_moravski_koridor_228.png" /> zastitna_zona_40m_moravski_koridor'
            });
var format_zastitna_zona_80m_moravski_koridor_229 = new ol.format.GeoJSON();
var features_zastitna_zona_80m_moravski_koridor_229 = format_zastitna_zona_80m_moravski_koridor_229.readFeatures(json_zastitna_zona_80m_moravski_koridor_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zastitna_zona_80m_moravski_koridor_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zastitna_zona_80m_moravski_koridor_229.addFeatures(features_zastitna_zona_80m_moravski_koridor_229);
var lyr_zastitna_zona_80m_moravski_koridor_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zastitna_zona_80m_moravski_koridor_229, 
                style: style_zastitna_zona_80m_moravski_koridor_229,
                popuplayertitle: 'zastitna_zona_80m_moravski_koridor',
                interactive: true,
                title: '<img src="styles/legend/zastitna_zona_80m_moravski_koridor_229.png" /> zastitna_zona_80m_moravski_koridor'
            });
var format_autoputEKSPROPRIJACIJA_230 = new ol.format.GeoJSON();
var features_autoputEKSPROPRIJACIJA_230 = format_autoputEKSPROPRIJACIJA_230.readFeatures(json_autoputEKSPROPRIJACIJA_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_autoputEKSPROPRIJACIJA_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_autoputEKSPROPRIJACIJA_230.addFeatures(features_autoputEKSPROPRIJACIJA_230);
var lyr_autoputEKSPROPRIJACIJA_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_autoputEKSPROPRIJACIJA_230, 
                style: style_autoputEKSPROPRIJACIJA_230,
                popuplayertitle: 'auto put —EKSPROPRIJACIJA',
                interactive: true,
                title: '<img src="styles/legend/autoputEKSPROPRIJACIJA_230.png" /> auto put —EKSPROPRIJACIJA'
            });
var format_AUTOPUTparcele_vodnih_povrsina_231 = new ol.format.GeoJSON();
var features_AUTOPUTparcele_vodnih_povrsina_231 = format_AUTOPUTparcele_vodnih_povrsina_231.readFeatures(json_AUTOPUTparcele_vodnih_povrsina_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUTOPUTparcele_vodnih_povrsina_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUTOPUTparcele_vodnih_povrsina_231.addFeatures(features_AUTOPUTparcele_vodnih_povrsina_231);
var lyr_AUTOPUTparcele_vodnih_povrsina_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AUTOPUTparcele_vodnih_povrsina_231, 
                style: style_AUTOPUTparcele_vodnih_povrsina_231,
                popuplayertitle: 'AUTO PUT-parcele_vodnih_povrsina',
                interactive: true,
                title: '<img src="styles/legend/AUTOPUTparcele_vodnih_povrsina_231.png" /> AUTO PUT-parcele_vodnih_povrsina'
            });
var lyr_granica_katastarska_opstina_232 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/rpj2/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "rpj:katastarska_opstina",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'granica_katastarska_opstina',
                            popuplayertitle: 'granica_katastarska_opstina',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_granica_katastarska_opstina_232, 0]);
var lyr_granica_opstina_233 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/rpj2/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "rpj:opstina",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'granica_opstina',
                            popuplayertitle: 'granica_opstina',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_granica_opstina_233, 0]);
var lyr_granica_naselje_234 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/rpj2/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "rpj:naselje",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'granica_naselje',
                            popuplayertitle: 'granica_naselje',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_granica_naselje_234, 0]);
var lyr_ParceleujavnojsvojiniKNstatus_235 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/javnasvojina2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ownership:dkp_parcels_public_property",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Parcele u javnoj svojini (KN status)',
                            popuplayertitle: 'Parcele u javnoj svojini (KN status)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ParceleujavnojsvojiniKNstatus_235, 0]);
var lyr_kucni_broj_236 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/adresni2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ar:kucni_broj",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'kucni_broj',
                            popuplayertitle: 'kucni_broj',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_kucni_broj_236, 0]);
var lyr_naziv_ulica_237 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/adresni2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ar:ulica",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'naziv_ulica',
                            popuplayertitle: 'naziv_ulica',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_naziv_ulica_237, 0]);
var lyr_Objekti_238 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/novidkp2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dkp:parcelparts_only_utm",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Objekti',
                            popuplayertitle: 'Objekti',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Objekti_238, 0]);
var lyr_Katastarskeparcele_239 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ogc-tmp.geosrbija.rs/novidkp2/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dkp:parcels_only_utm",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Katastarske parcele',
                            popuplayertitle: 'Katastarske parcele',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Katastarskeparcele_239, 0]);
var format_VOJSKAkompleksposebnenamene_240 = new ol.format.GeoJSON();
var features_VOJSKAkompleksposebnenamene_240 = format_VOJSKAkompleksposebnenamene_240.readFeatures(json_VOJSKAkompleksposebnenamene_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOJSKAkompleksposebnenamene_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOJSKAkompleksposebnenamene_240.addFeatures(features_VOJSKAkompleksposebnenamene_240);
var lyr_VOJSKAkompleksposebnenamene_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOJSKAkompleksposebnenamene_240, 
                style: style_VOJSKAkompleksposebnenamene_240,
                popuplayertitle: 'VOJSKA - kompleks posebne namene',
                interactive: true,
                title: '<img src="styles/legend/VOJSKAkompleksposebnenamene_240.png" /> VOJSKA - kompleks posebne namene'
            });
var format_VOJSKAzona2_241 = new ol.format.GeoJSON();
var features_VOJSKAzona2_241 = format_VOJSKAzona2_241.readFeatures(json_VOJSKAzona2_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOJSKAzona2_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOJSKAzona2_241.addFeatures(features_VOJSKAzona2_241);
var lyr_VOJSKAzona2_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOJSKAzona2_241, 
                style: style_VOJSKAzona2_241,
                popuplayertitle: 'VOJSKA zona 2 ',
                interactive: true,
                title: '<img src="styles/legend/VOJSKAzona2_241.png" /> VOJSKA zona 2 '
            });
var format_VOJSKAzona1_242 = new ol.format.GeoJSON();
var features_VOJSKAzona1_242 = format_VOJSKAzona1_242.readFeatures(json_VOJSKAzona1_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOJSKAzona1_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOJSKAzona1_242.addFeatures(features_VOJSKAzona1_242);
var lyr_VOJSKAzona1_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOJSKAzona1_242, 
                style: style_VOJSKAzona1_242,
                popuplayertitle: 'VOJSKA zona 1',
                interactive: true,
                title: '<img src="styles/legend/VOJSKAzona1_242.png" /> VOJSKA zona 1'
            });
var group_VOJSKA = new ol.layer.Group({
                                layers: [lyr_VOJSKAkompleksposebnenamene_240,lyr_VOJSKAzona2_241,lyr_VOJSKAzona1_242,],
                                fold: 'close',
                                title: 'VOJSKA'});
var group_KATASTAR = new ol.layer.Group({
                                layers: [lyr_granica_katastarska_opstina_232,lyr_granica_opstina_233,lyr_granica_naselje_234,lyr_ParceleujavnojsvojiniKNstatus_235,lyr_kucni_broj_236,lyr_naziv_ulica_237,lyr_Objekti_238,lyr_Katastarskeparcele_239,],
                                fold: 'open',
                                title: 'KATASTAR'});
var group_AUTOPUT = new ol.layer.Group({
                                layers: [lyr_zastitna_zona_40m_moravski_koridor_228,lyr_zastitna_zona_80m_moravski_koridor_229,lyr_autoputEKSPROPRIJACIJA_230,lyr_AUTOPUTparcele_vodnih_povrsina_231,],
                                fold: 'close',
                                title: 'AUTO PUT'});
var group_GRANICEGUO = new ol.layer.Group({
                                layers: [lyr_GUOBREZNA_190,lyr_GUOUSCE1_191,lyr_GUOPECENOG1_192,lyr_GUOBAPSKOPOLJE_193,lyr_GUOSUMARICE1_194,lyr_GUOVITKOVAC1_195,lyr_GUOROCEVICI1_196,lyr_GUOPETROPOLJE1_197,lyr_GUORIBNICA1_198,lyr_GUOTOLISNICA1_199,lyr_GUOLAZAC1_200,lyr_GUOSIBNICA1_201,lyr_GUOVRDILA1_202,lyr_GUOLESEVO1_203,lyr_GUOPOPOVICI1_204,lyr_GUOOPLANICI1_205,lyr_GUOMRSAC1_206,lyr_GUOBUKOVICA_207,lyr_GUOMILAVCICI1_208,lyr_GUODRLUPA1_209,lyr_GUOMUSINAREKA1_210,lyr_GUOMILICI1_211,lyr_GUOMETIKOSI1_212,lyr_GUOGLEDIC1_213,lyr_GUODEDEVCI1_214,lyr_GUOCVETKE1_215,lyr_GUOGOKCANICA1_216,lyr_GUOGODACICA1_217,lyr_GUODRAGOSINJCI1_218,lyr_GUODRAKCICI1_219,lyr_GUODOLAC1_220,lyr_GUORAVNICA2_221,lyr_GUOMILAKOVAC2_222,lyr_GUOMLANCA_223,lyr_GUOBZOVIK_224,lyr_GUOBAPSKOPOLJE_225,lyr_GUOMILOCAJ2_226,lyr_GUOMILOCAJ1_227,],
                                fold: 'close',
                                title: 'GRANICE GUO'});
var group_GRADJEVINSKAZEMLJISTA = new ol.layer.Group({
                                layers: [lyr_GRADJEVINSKOZEMLJISTEADRANI_109,lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110,lyr_GRADJEVINSKOZEMLJISTEZASAD1_111,lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112,lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113,lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114,lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115,lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116,lyr_GRADJEVINSKOZEMLJISTEVRH1_117,lyr_GRADJEVINSKOZEMLJISTEVRBA1_118,lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119,lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120,lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121,lyr_GRADJEVISNKOZEMLJISTEUSCE1_122,lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123,lyr_GRADJEVISNKOZEMLJISTETADENJE1_124,lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125,lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126,lyr_GRADJEVISNKOZEMLJISTETADENJE1_127,lyr_GRADJEVINSKOZEMLJISTERUDNO1_128,lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129,lyr_GRADJEVINSKOZEMLJISTESIRCA1_130,lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131,lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132,lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133,lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134,lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135,lyr_GRADJEVINSKOZEMLJISTEPLANA1_136,lyr_GRADJEVINSKOZEMLJISTERATINA1_137,lyr_GRADJEVINSKOZEMLJISTEREKA1_138,lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139,lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140,lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141,lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142,lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143,lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144,lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145,lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146,lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147,lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148,lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149,lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150,lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151,lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152,lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153,lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154,lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155,lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156,lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157,lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158,lyr_GRADJEVINSKOZEMLJISTELAZAC1_159,lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160,lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161,lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162,lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163,lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164,lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165,lyr_GRADJEVINSKOZEMLJISTECERJE_166,lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167,lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168,lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169,lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170,lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171,lyr_GRADJEVINSKOZEMLJISTEDOLAC_172,lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173,lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174,lyr_GRADJEVINSKOZEMLJISTEBARE_175,lyr_GRADJEVINSKOZEMLJISTEGODACICA_176,lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177,lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178,lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179,lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180,lyr_GRADJEVINSKOZEMLJISTECVETKE_181,lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182,lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183,lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184,lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185,lyr_GRADJEVINSKOZEMLJISTEMLANCA_186,lyr_GRADJEVINSKOZEMLJISTELESEVO2_187,lyr_GRADJEVINSKOZEMLJISTEMILICI1_188,lyr_GRADJEVINSKOZEMLJISTEREKA1_189,],
                                fold: 'close',
                                title: 'GRADJEVINSKA ZEMLJISTA'});
var group_SUMSKAZEMLJISTA = new ol.layer.Group({
                                layers: [lyr_SUMSKOZEMLJISTEADRANI_32,lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33,lyr_SUMSKOZEMLJISTECERJE_34,lyr_SUMSKOZEMLJISTEDOLAC_35,lyr_SUMSKOZEMLJISTEBZOVIK_36,lyr_SUMSKOZEMLJISTEBUKOVICA_37,lyr_SUMSKOZEMLJISTEDEDEVCI_38,lyr_SUMSKOZEMLJISTEDRAKCICI_39,lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40,lyr_SUMSKOZEMLJISTEDJAKOVO_41,lyr_SUMSKOZEMLJISTEGOKCANICA_42,lyr_SUMSKOZEMLJISTEDRAZINICI_43,lyr_SUMSKOZEMLJISTECVETKE_44,lyr_SUMSKOZEMLJISTEGOTOVAC1_45,lyr_SUMSKOZEMLJISTEBREZNA_46,lyr_SUMSKOZEMLJISTEGLEDIC_47,lyr_SUMSKOZEMLJISTEDRLUPA_48,lyr_SUMSKOZEMLJISTEKAMENICA1_49,lyr_SUMSKOZEMLJISTEGODACICA_50,lyr_SUMSKOZEMLJISTEBRESNIK_51,lyr_SUMSKOZEMLJISTEKONAREVO1_52,lyr_SUMSKOZEMLJISTECUKOJEVAC_53,lyr_SUMSKOZEMLJISTEKRUSEVICA_54,lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55,lyr_SUMSKOZEMLJISTELESEVO1_56,lyr_SUMSKOZEMLJISTELADJEVCI_57,lyr_SUMSKOZEMLJISTEBARE_58,lyr_SUMSKOZEMLJISTELAZAC1_59,lyr_SUMSKOZEMLJISTEMAGLIC1_60,lyr_SUMSKOZEMLJISTEMILOCAJ1_61,lyr_SUMSKOZEMLJISTEMILICI1_62,lyr_SUMSKOZEMLJISTEMETIKOS1_63,lyr_SUMSKOZEMLJISTELOPATNICA1_64,lyr_SUMSKOZEMLJISTEPEKCANICA1_65,lyr_SUMSKOZEMLJISTEMILAVCICI1_66,lyr_SUMSKOZEMLJISTEMATARUGE1_67,lyr_SUMSKOZEMLJISTEMELJANICA_68,lyr_SUMSKOZEMLJISTEMLANCA1_69,lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70,lyr_SUMSKOZEMLJISTEPETROPOLJE1_71,lyr_SUMSKOZEMLJISTEMUSINAREKA1_72,lyr_SUMSKOZEMLJISTEPECENOG1_73,lyr_SUMSKOZEMLJISTEPOPOVICI1_74,lyr_SUMSKOZEMLJISTEPREDOLE1_75,lyr_SUMSKOZEMLJISTEPROGORELICA1_76,lyr_SUMSKOZEMLJISTEPOLUMIR1_77,lyr_SUMSKOZEMLJISTERATINA1_78,lyr_SUMSKOZEMLJISTERIBNICA1_79,lyr_SUMSKOZEMLJISTEOPLANICI1_80,lyr_SUMSKOZEMLJISTEMRSAC1_81,lyr_SUMSKOZEMLJISTEROCEVICI1_82,lyr_SUMSKOZEMLJISTEREKA_83,lyr_SUMSKOZEMLJISTERUDNJAK1_84,lyr_SUMSKOZEMLJISTESAMAILA1_85,lyr_SUMSKOZEMLJISTEPLANA1_86,lyr_SUMSKOZEMLJISTERUDNO1_87,lyr_SUMSKOZEMLJISTESIRCA1_88,lyr_SUMSKOZEMLJISTESTUBL1_89,lyr_SUMSKOZEMLJISTESAVOVO1_90,lyr_SUMSKOZEMLJISTETRGOVISTE1_91,lyr_SUMSKOZEMLJISTEUSCE1_92,lyr_SUMSKOZEMLJISTETADENJE1_93,lyr_SUMSKOZEMLJISTEVRBA1_94,lyr_SUMSKOZEMLJISTEVITANOVAC1_95,lyr_SUMSKOZEMLJISTEVRH1_96,lyr_SUMSKOZEMLJISTEVRDILA1_97,lyr_SUMSKOZEMLJISTETAVNIK1_98,lyr_SUMSKOZEMLJISTEZAKLOPACA1_99,lyr_SUMSKOZMELJISTESIBNICA1_100,lyr_SUMSKOZEMLJISTEZAKUTA1_101,lyr_SUMSKOZEMLJISTETOLISNICA1_102,lyr_SUMSKOZEMLJISTEZAMCANJE_103,lyr_SUMSKOZEMLJISTEVITKOVAC1_104,lyr_SUMSKOZEMLJISTEZASAD1_105,lyr_SUMSKOZEMLJISTEBREZOVA_106,lyr_SUMSKOZEMLJISTERAVNICA1_107,lyr_SUMSKOZEMLJISTEMILAKOVAC_108,],
                                fold: 'close',
                                title: 'SUMSKA ZEMLJISTA'});
var group_ZASTITEIGRANICEPROSTORNIPLAN = new ol.layer.Group({
                                layers: [lyr_ppppngranicaplanaIbarskeelektrane_23,lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24,lyr_Ggranicarezervatabiosferemabgolija_25,lyr_PPPNParkaprirodeGolija_26,lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27,lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28,lyr_PPPPNAerodromMoravadetaljnarazrada_29,lyr_GRANICAPLANOVA_30,lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31,],
                                fold: 'close',
                                title: 'ZASTITE I GRANICE PROSTORNI PLAN'});
var group_Zeljin = new ol.layer.Group({
                                layers: [lyr_Zona_3_19,lyr_Zona_2_20,lyr_Zona_1_21,lyr_Zeljin_22,],
                                fold: 'close',
                                title: 'Zeljin'});
var group_Stolovi = new ol.layer.Group({
                                layers: [lyr_Zona_3_15,lyr_Zona_2_16,lyr_Zona_1_17,lyr_Stolovi_18,],
                                fold: 'close',
                                title: 'Stolovi'});
var group_Golija = new ol.layer.Group({
                                layers: [lyr_Zona_3_11,lyr_Zona_2_12,lyr_Zona_1_13,lyr_Golija_14,],
                                fold: 'close',
                                title: 'Golija'});
var group_PlaninaJelica = new ol.layer.Group({
                                layers: [lyr_Zona_3_7,lyr_Zona_2_8,lyr_Zona_1_9,lyr_Jelica_10,],
                                fold: 'close',
                                title: 'Planina Jelica'});
var group_GocGvozdac = new ol.layer.Group({
                                layers: [lyr_Zona_3_3,lyr_Zona_2_4,lyr_Zona_1_5,lyr_Goc_Gvozdac_6,],
                                fold: 'close',
                                title: 'Goc Gvozdac'});
var group_ORTOFOTO = new ol.layer.Group({
                                layers: [lyr_Geosrbija_0,lyr_ESRISatellite_1,lyr_GoogleSatellite_2,],
                                fold: 'open',
                                title: 'ORTOFOTO'});

lyr_Geosrbija_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Zona_3_3.setVisible(true);lyr_Zona_2_4.setVisible(true);lyr_Zona_1_5.setVisible(true);lyr_Goc_Gvozdac_6.setVisible(true);lyr_Zona_3_7.setVisible(true);lyr_Zona_2_8.setVisible(true);lyr_Zona_1_9.setVisible(true);lyr_Jelica_10.setVisible(true);lyr_Zona_3_11.setVisible(true);lyr_Zona_2_12.setVisible(true);lyr_Zona_1_13.setVisible(true);lyr_Golija_14.setVisible(true);lyr_Zona_3_15.setVisible(true);lyr_Zona_2_16.setVisible(true);lyr_Zona_1_17.setVisible(true);lyr_Stolovi_18.setVisible(true);lyr_Zona_3_19.setVisible(true);lyr_Zona_2_20.setVisible(true);lyr_Zona_1_21.setVisible(true);lyr_Zeljin_22.setVisible(true);lyr_ppppngranicaplanaIbarskeelektrane_23.setVisible(true);lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.setVisible(true);lyr_Ggranicarezervatabiosferemabgolija_25.setVisible(true);lyr_PPPNParkaprirodeGolija_26.setVisible(true);lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.setVisible(true);lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.setVisible(true);lyr_PPPPNAerodromMoravadetaljnarazrada_29.setVisible(true);lyr_GRANICAPLANOVA_30.setVisible(true);lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31.setVisible(true);lyr_SUMSKOZEMLJISTEADRANI_32.setVisible(true);lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33.setVisible(true);lyr_SUMSKOZEMLJISTECERJE_34.setVisible(true);lyr_SUMSKOZEMLJISTEDOLAC_35.setVisible(true);lyr_SUMSKOZEMLJISTEBZOVIK_36.setVisible(true);lyr_SUMSKOZEMLJISTEBUKOVICA_37.setVisible(true);lyr_SUMSKOZEMLJISTEDEDEVCI_38.setVisible(true);lyr_SUMSKOZEMLJISTEDRAKCICI_39.setVisible(true);lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40.setVisible(true);lyr_SUMSKOZEMLJISTEDJAKOVO_41.setVisible(true);lyr_SUMSKOZEMLJISTEGOKCANICA_42.setVisible(true);lyr_SUMSKOZEMLJISTEDRAZINICI_43.setVisible(true);lyr_SUMSKOZEMLJISTECVETKE_44.setVisible(true);lyr_SUMSKOZEMLJISTEGOTOVAC1_45.setVisible(true);lyr_SUMSKOZEMLJISTEBREZNA_46.setVisible(true);lyr_SUMSKOZEMLJISTEGLEDIC_47.setVisible(true);lyr_SUMSKOZEMLJISTEDRLUPA_48.setVisible(true);lyr_SUMSKOZEMLJISTEKAMENICA1_49.setVisible(true);lyr_SUMSKOZEMLJISTEGODACICA_50.setVisible(true);lyr_SUMSKOZEMLJISTEBRESNIK_51.setVisible(true);lyr_SUMSKOZEMLJISTEKONAREVO1_52.setVisible(true);lyr_SUMSKOZEMLJISTECUKOJEVAC_53.setVisible(true);lyr_SUMSKOZEMLJISTEKRUSEVICA_54.setVisible(true);lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55.setVisible(true);lyr_SUMSKOZEMLJISTELESEVO1_56.setVisible(true);lyr_SUMSKOZEMLJISTELADJEVCI_57.setVisible(true);lyr_SUMSKOZEMLJISTEBARE_58.setVisible(true);lyr_SUMSKOZEMLJISTELAZAC1_59.setVisible(true);lyr_SUMSKOZEMLJISTEMAGLIC1_60.setVisible(true);lyr_SUMSKOZEMLJISTEMILOCAJ1_61.setVisible(true);lyr_SUMSKOZEMLJISTEMILICI1_62.setVisible(true);lyr_SUMSKOZEMLJISTEMETIKOS1_63.setVisible(true);lyr_SUMSKOZEMLJISTELOPATNICA1_64.setVisible(true);lyr_SUMSKOZEMLJISTEPEKCANICA1_65.setVisible(true);lyr_SUMSKOZEMLJISTEMILAVCICI1_66.setVisible(true);lyr_SUMSKOZEMLJISTEMATARUGE1_67.setVisible(true);lyr_SUMSKOZEMLJISTEMELJANICA_68.setVisible(true);lyr_SUMSKOZEMLJISTEMLANCA1_69.setVisible(true);lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70.setVisible(true);lyr_SUMSKOZEMLJISTEPETROPOLJE1_71.setVisible(true);lyr_SUMSKOZEMLJISTEMUSINAREKA1_72.setVisible(true);lyr_SUMSKOZEMLJISTEPECENOG1_73.setVisible(true);lyr_SUMSKOZEMLJISTEPOPOVICI1_74.setVisible(true);lyr_SUMSKOZEMLJISTEPREDOLE1_75.setVisible(true);lyr_SUMSKOZEMLJISTEPROGORELICA1_76.setVisible(true);lyr_SUMSKOZEMLJISTEPOLUMIR1_77.setVisible(true);lyr_SUMSKOZEMLJISTERATINA1_78.setVisible(true);lyr_SUMSKOZEMLJISTERIBNICA1_79.setVisible(true);lyr_SUMSKOZEMLJISTEOPLANICI1_80.setVisible(true);lyr_SUMSKOZEMLJISTEMRSAC1_81.setVisible(true);lyr_SUMSKOZEMLJISTEROCEVICI1_82.setVisible(true);lyr_SUMSKOZEMLJISTEREKA_83.setVisible(true);lyr_SUMSKOZEMLJISTERUDNJAK1_84.setVisible(true);lyr_SUMSKOZEMLJISTESAMAILA1_85.setVisible(true);lyr_SUMSKOZEMLJISTEPLANA1_86.setVisible(true);lyr_SUMSKOZEMLJISTERUDNO1_87.setVisible(true);lyr_SUMSKOZEMLJISTESIRCA1_88.setVisible(true);lyr_SUMSKOZEMLJISTESTUBL1_89.setVisible(true);lyr_SUMSKOZEMLJISTESAVOVO1_90.setVisible(true);lyr_SUMSKOZEMLJISTETRGOVISTE1_91.setVisible(true);lyr_SUMSKOZEMLJISTEUSCE1_92.setVisible(true);lyr_SUMSKOZEMLJISTETADENJE1_93.setVisible(true);lyr_SUMSKOZEMLJISTEVRBA1_94.setVisible(true);lyr_SUMSKOZEMLJISTEVITANOVAC1_95.setVisible(true);lyr_SUMSKOZEMLJISTEVRH1_96.setVisible(true);lyr_SUMSKOZEMLJISTEVRDILA1_97.setVisible(true);lyr_SUMSKOZEMLJISTETAVNIK1_98.setVisible(true);lyr_SUMSKOZEMLJISTEZAKLOPACA1_99.setVisible(true);lyr_SUMSKOZMELJISTESIBNICA1_100.setVisible(true);lyr_SUMSKOZEMLJISTEZAKUTA1_101.setVisible(true);lyr_SUMSKOZEMLJISTETOLISNICA1_102.setVisible(true);lyr_SUMSKOZEMLJISTEZAMCANJE_103.setVisible(true);lyr_SUMSKOZEMLJISTEVITKOVAC1_104.setVisible(true);lyr_SUMSKOZEMLJISTEZASAD1_105.setVisible(true);lyr_SUMSKOZEMLJISTEBREZOVA_106.setVisible(true);lyr_SUMSKOZEMLJISTERAVNICA1_107.setVisible(true);lyr_SUMSKOZEMLJISTEMILAKOVAC_108.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEADRANI_109.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEZASAD1_111.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112.setVisible(true);lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVRH1_117.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVRBA1_118.setVisible(true);lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.setVisible(true);lyr_GRADJEVISNKOZEMLJISTEUSCE1_122.setVisible(true);lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123.setVisible(true);lyr_GRADJEVISNKOZEMLJISTETADENJE1_124.setVisible(true);lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125.setVisible(true);lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126.setVisible(true);lyr_GRADJEVISNKOZEMLJISTETADENJE1_127.setVisible(true);lyr_GRADJEVINSKOZEMLJISTERUDNO1_128.setVisible(true);lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129.setVisible(true);lyr_GRADJEVINSKOZEMLJISTESIRCA1_130.setVisible(true);lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131.setVisible(true);lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.setVisible(true);lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134.setVisible(true);lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPLANA1_136.setVisible(true);lyr_GRADJEVINSKOZEMLJISTERATINA1_137.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEREKA1_138.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.setVisible(true);lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.setVisible(true);lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158.setVisible(true);lyr_GRADJEVINSKOZEMLJISTELAZAC1_159.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.setVisible(true);lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.setVisible(true);lyr_GRADJEVINSKOZEMLJISTECERJE_166.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDOLAC_172.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEBARE_175.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEGODACICA_176.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177.setVisible(true);lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.setVisible(true);lyr_GRADJEVINSKOZEMLJISTECVETKE_181.setVisible(true);lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184.setVisible(true);lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMLANCA_186.setVisible(true);lyr_GRADJEVINSKOZEMLJISTELESEVO2_187.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEMILICI1_188.setVisible(true);lyr_GRADJEVINSKOZEMLJISTEREKA1_189.setVisible(true);lyr_GUOBREZNA_190.setVisible(true);lyr_GUOUSCE1_191.setVisible(true);lyr_GUOPECENOG1_192.setVisible(true);lyr_GUOBAPSKOPOLJE_193.setVisible(true);lyr_GUOSUMARICE1_194.setVisible(true);lyr_GUOVITKOVAC1_195.setVisible(true);lyr_GUOROCEVICI1_196.setVisible(true);lyr_GUOPETROPOLJE1_197.setVisible(true);lyr_GUORIBNICA1_198.setVisible(true);lyr_GUOTOLISNICA1_199.setVisible(true);lyr_GUOLAZAC1_200.setVisible(true);lyr_GUOSIBNICA1_201.setVisible(true);lyr_GUOVRDILA1_202.setVisible(true);lyr_GUOLESEVO1_203.setVisible(true);lyr_GUOPOPOVICI1_204.setVisible(true);lyr_GUOOPLANICI1_205.setVisible(true);lyr_GUOMRSAC1_206.setVisible(true);lyr_GUOBUKOVICA_207.setVisible(true);lyr_GUOMILAVCICI1_208.setVisible(true);lyr_GUODRLUPA1_209.setVisible(true);lyr_GUOMUSINAREKA1_210.setVisible(true);lyr_GUOMILICI1_211.setVisible(true);lyr_GUOMETIKOSI1_212.setVisible(true);lyr_GUOGLEDIC1_213.setVisible(true);lyr_GUODEDEVCI1_214.setVisible(true);lyr_GUOCVETKE1_215.setVisible(true);lyr_GUOGOKCANICA1_216.setVisible(true);lyr_GUOGODACICA1_217.setVisible(true);lyr_GUODRAGOSINJCI1_218.setVisible(true);lyr_GUODRAKCICI1_219.setVisible(true);lyr_GUODOLAC1_220.setVisible(true);lyr_GUORAVNICA2_221.setVisible(true);lyr_GUOMILAKOVAC2_222.setVisible(true);lyr_GUOMLANCA_223.setVisible(true);lyr_GUOBZOVIK_224.setVisible(true);lyr_GUOBAPSKOPOLJE_225.setVisible(true);lyr_GUOMILOCAJ2_226.setVisible(true);lyr_GUOMILOCAJ1_227.setVisible(true);lyr_zastitna_zona_40m_moravski_koridor_228.setVisible(true);lyr_zastitna_zona_80m_moravski_koridor_229.setVisible(true);lyr_autoputEKSPROPRIJACIJA_230.setVisible(true);lyr_AUTOPUTparcele_vodnih_povrsina_231.setVisible(true);lyr_granica_katastarska_opstina_232.setVisible(true);lyr_granica_opstina_233.setVisible(true);lyr_granica_naselje_234.setVisible(true);lyr_ParceleujavnojsvojiniKNstatus_235.setVisible(true);lyr_kucni_broj_236.setVisible(true);lyr_naziv_ulica_237.setVisible(true);lyr_Objekti_238.setVisible(true);lyr_Katastarskeparcele_239.setVisible(true);lyr_VOJSKAkompleksposebnenamene_240.setVisible(true);lyr_VOJSKAzona2_241.setVisible(true);lyr_VOJSKAzona1_242.setVisible(true);
var layersList = [group_ORTOFOTO,group_GocGvozdac,group_PlaninaJelica,group_Golija,group_Stolovi,group_Zeljin,group_ZASTITEIGRANICEPROSTORNIPLAN,group_SUMSKAZEMLJISTA,group_GRADJEVINSKAZEMLJISTA,group_GRANICEGUO,group_AUTOPUT,group_KATASTAR,group_VOJSKA];
lyr_Zona_3_3.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'povrsine': 'Povrsina podrucija', 'tip': 'Tip zastite', });
lyr_Zona_2_4.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_1_5.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Goc_Gvozdac_6.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_3_7.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'povrsine': 'Povrsina podrucija', 'tip': 'Tip zastite', });
lyr_Zona_2_8.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_1_9.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Jelica_10.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_3_11.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'povrsine': 'Povrsina podrucija', 'tip': 'Tip zastite', });
lyr_Zona_2_12.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_1_13.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Golija_14.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_3_15.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'povrsine': 'Povrsina podrucija', 'tip': 'Tip zastite', });
lyr_Zona_2_16.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_1_17.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Stolovi_18.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_3_19.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'povrsine': 'Povrsina podrucija', 'tip': 'Tip zastite', });
lyr_Zona_2_20.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zona_1_21.set('fieldAliases', {'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'reg_broj': 'reg_broj', 'naziv': 'Naziv zastite', 'tip_dobra': 'tip_dobra', 'god': 'god', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_Zeljin_22.set('fieldAliases', {'reg_broj': 'reg_broj', 'tip_dobra': 'tip_dobra', 'naziv': 'Naziv zastite', 'god': 'god', 'NazivCIR': 'NazivCIR', 'TipDobraCI': 'TipDobraCI', 'tip': 'Tip zastite', 'povrsine': 'Povrsina podrucija', });
lyr_ppppngranicaplanaIbarskeelektrane_23.set('fieldAliases', {'fid': 'fid', 'layer': 'PLAN', });
lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.set('fieldAliases', {'fid': 'fid', });
lyr_Ggranicarezervatabiosferemabgolija_25.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'popis_48': 'popis_48', 'popis_53': 'popis_53', 'popis_61': 'popis_61', 'popis_71': 'popis_71', 'popis_81': 'popis_81', 'popis_91': 'popis_91', 'popis_02': 'popis_02', 'ko_id': 'ko_id', 'ko_naziv': 'ko_naziv', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'id1': 'id1', });
lyr_PPPNParkaprirodeGolija_26.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'vrsta_plan': 'vrsta_plan', 'id_vrste_p': 'id_vrste_p', 'dokument_l': 'dokument_l', 'azuriranje': 'azuriranje', 'izvor_poda': 'izvor_poda', 'vrsta_doku': 'vrsta_doku', 'status': 'status', 'broj_odluk': 'broj_odluk', 'id1': 'id1', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_PPPPNAerodromMoravadetaljnarazrada_29.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GRANICAPLANOVA_30.set('fieldAliases', {'fid': 'fid', 'layer': 'PLAN', });
lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'naziv': 'naziv', 'shape_leng': 'shape_leng', 'shape_area': 'POVRSINA', 'stepen_zas': 'stepen_zas', 'oznaka_rez': 'oznaka_rez', 'id1': 'id1', });
lyr_SUMSKOZEMLJISTEADRANI_32.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTECERJE_34.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDOLAC_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBZOVIK_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBUKOVICA_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDEDEVCI_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDRAKCICI_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDJAKOVO_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEGOKCANICA_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDRAZINICI_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTECVETKE_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEGOTOVAC1_45.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'PRAVILA': 'PRAVILA', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBREZNA_46.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEGLEDIC_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEDRLUPA_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEKAMENICA1_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEGODACICA_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBRESNIK_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEKONAREVO1_52.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTECUKOJEVAC_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEKRUSEVICA_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55.set('fieldAliases', {'fid': 'fid', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTELESEVO1_56.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTELADJEVCI_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBARE_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTELAZAC1_59.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMAGLIC1_60.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMILOCAJ1_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMILICI1_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMETIKOS1_63.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTELOPATNICA1_64.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPEKCANICA1_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMILAVCICI1_66.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMATARUGE1_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMELJANICA_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMLANCA1_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPETROPOLJE1_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMUSINAREKA1_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPECENOG1_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPOPOVICI1_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPREDOLE1_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPROGORELICA1_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPOLUMIR1_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTERATINA1_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTERIBNICA1_79.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEOPLANICI1_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMRSAC1_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEROCEVICI1_82.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEREKA_83.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTERUDNJAK1_84.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTESAMAILA1_85.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEPLANA1_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTERUDNO1_87.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTESIRCA1_88.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTESTUBL1_89.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTESAVOVO1_90.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTETRGOVISTE1_91.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEUSCE1_92.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTETADENJE1_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEVRBA1_94.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEVITANOVAC1_95.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEVRH1_96.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEVRDILA1_97.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTETAVNIK1_98.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEZAKLOPACA1_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZMELJISTESIBNICA1_100.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEZAKUTA1_101.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTETOLISNICA1_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEZAMCANJE_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEVITKOVAC1_104.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEZASAD1_105.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEBREZOVA_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTERAVNICA1_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_SUMSKOZEMLJISTEMILAKOVAC_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'TEXT': 'PARVILA', });
lyr_GRADJEVINSKOZEMLJISTEADRANI_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEZASAD1_111.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVRH1_117.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVRBA1_118.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTEUSCE1_122.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTERUDNO1_128.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTESIRCA1_130.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPLANA1_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTERATINA1_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_138.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'path': 'path', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTELAZAC1_159.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161.set('fieldAliases', {'fid': 'fid', 'brparcele': 'brparcele', 'povrsina': 'povrsina', 'status': 'status', 'status_par': 'status_par', 'opstina_ma': 'opstina_ma', 'opstina_im': 'opstina_im', 'opstina__1': 'opstina__1', 'maticnibro': 'maticnibro', 'kat_opstin': 'kat_opstin', 'kat_opst_1': 'kat_opst_1', 'status_dkp': 'status_dkp', 'dkp_status': 'dkp_status', 'parcela_id': 'parcela_id', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTECERJE_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.set('fieldAliases', {'fid': 'fid', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDOLAC_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEBARE_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEGODACICA_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTECVETKE_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.set('fieldAliases', {'fid': 'fid', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'PRAVILA GRADJENJA', });
lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'pravila_web', });
lyr_GRADJEVINSKOZEMLJISTEMLANCA_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'pravila_web', });
lyr_GRADJEVINSKOZEMLJISTELESEVO2_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'pravila_web', });
lyr_GRADJEVINSKOZEMLJISTEMILICI1_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'pravila_web': 'pravila_web', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_189.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'pravila_web': 'pravila_web', });
lyr_GUOBREZNA_190.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOUSCE1_191.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOPECENOG1_192.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOBAPSKOPOLJE_193.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOSUMARICE1_194.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOVITKOVAC1_195.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOROCEVICI1_196.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOPETROPOLJE1_197.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUORIBNICA1_198.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOTOLISNICA1_199.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOLAZAC1_200.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOSIBNICA1_201.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOVRDILA1_202.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOLESEVO1_203.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOPOPOVICI1_204.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOOPLANICI1_205.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMRSAC1_206.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOBUKOVICA_207.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMILAVCICI1_208.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUODRLUPA1_209.set('fieldAliases', {'fid': 'fid', });
lyr_GUOMUSINAREKA1_210.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMILICI1_211.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMETIKOSI1_212.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOGLEDIC1_213.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUODEDEVCI1_214.set('fieldAliases', {'fid': 'fid', 'LEYER': 'LEYER', });
lyr_GUOCVETKE1_215.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOGOKCANICA1_216.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOGODACICA1_217.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUODRAGOSINJCI1_218.set('fieldAliases', {'fid': 'fid', });
lyr_GUODRAKCICI1_219.set('fieldAliases', {'fid': 'fid', });
lyr_GUODOLAC1_220.set('fieldAliases', {'fid': 'fid', 'LEYER': 'LEYER', });
lyr_GUORAVNICA2_221.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMILAKOVAC2_222.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMLANCA_223.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOBZOVIK_224.set('fieldAliases', {'fid': 'fid', 'LAYER': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOBAPSKOPOLJE_225.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMILOCAJ2_226.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_GUOMILOCAJ1_227.set('fieldAliases', {'fid': 'fid', 'layer': 'GRANICA UREDJENIH OSNOVA', });
lyr_zastitna_zona_40m_moravski_koridor_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_zastitna_zona_80m_moravski_koridor_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_autoputEKSPROPRIJACIJA_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AUTOPUTparcele_vodnih_povrsina_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VOJSKAkompleksposebnenamene_240.set('fieldAliases', {'fid': 'fid', 'layer': 'VOJSKA -ZASTITNA ZONA', });
lyr_VOJSKAzona2_241.set('fieldAliases', {'fid': 'fid', 'layer': 'VOJSKA -ZASTITNA ZONA', });
lyr_VOJSKAzona1_242.set('fieldAliases', {'fid': 'fid', 'layer': 'VOJSKA -ZASTITNA ZONA', 'transparency': 'transparency', });
lyr_Zona_3_3.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'povrsine': 'TextEdit', 'tip': 'TextEdit', });
lyr_Zona_2_4.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_1_5.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Goc_Gvozdac_6.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_3_7.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'povrsine': 'TextEdit', 'tip': 'TextEdit', });
lyr_Zona_2_8.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_1_9.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Jelica_10.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_3_11.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'povrsine': 'TextEdit', 'tip': 'TextEdit', });
lyr_Zona_2_12.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_1_13.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Golija_14.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_3_15.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'povrsine': 'TextEdit', 'tip': 'TextEdit', });
lyr_Zona_2_16.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_1_17.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Stolovi_18.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_3_19.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'povrsine': 'TextEdit', 'tip': 'TextEdit', });
lyr_Zona_2_20.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zona_1_21.set('fieldImages', {'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'reg_broj': 'Range', 'naziv': 'TextEdit', 'tip_dobra': 'TextEdit', 'god': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_Zeljin_22.set('fieldImages', {'reg_broj': 'Range', 'tip_dobra': 'TextEdit', 'naziv': 'TextEdit', 'god': 'TextEdit', 'NazivCIR': 'TextEdit', 'TipDobraCI': 'TextEdit', 'tip': 'TextEdit', 'povrsine': 'TextEdit', });
lyr_ppppngranicaplanaIbarskeelektrane_23.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_Ggranicarezervatabiosferemabgolija_25.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'popis_48': 'TextEdit', 'popis_53': 'TextEdit', 'popis_61': 'TextEdit', 'popis_71': 'TextEdit', 'popis_81': 'TextEdit', 'popis_91': 'TextEdit', 'popis_02': 'TextEdit', 'ko_id': 'TextEdit', 'ko_naziv': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'id1': 'TextEdit', });
lyr_PPPNParkaprirodeGolija_26.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'vrsta_plan': 'TextEdit', 'id_vrste_p': 'TextEdit', 'dokument_l': 'TextEdit', 'azuriranje': 'TextEdit', 'izvor_poda': 'TextEdit', 'vrsta_doku': 'TextEdit', 'status': 'TextEdit', 'broj_odluk': 'TextEdit', 'id1': 'TextEdit', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_PPPPNAerodromMoravadetaljnarazrada_29.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GRANICAPLANOVA_30.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'naziv': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'stepen_zas': 'TextEdit', 'oznaka_rez': 'TextEdit', 'id1': 'TextEdit', });
lyr_SUMSKOZEMLJISTEADRANI_32.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTECERJE_34.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDOLAC_35.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBZOVIK_36.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBUKOVICA_37.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDEDEVCI_38.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDRAKCICI_39.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDJAKOVO_41.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEGOKCANICA_42.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDRAZINICI_43.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTECVETKE_44.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEGOTOVAC1_45.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'PRAVILA': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBREZNA_46.set('fieldImages', {'fid': 'TextEdit', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': 'TextEdit', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEGLEDIC_47.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEDRLUPA_48.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEKAMENICA1_49.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEGODACICA_50.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBRESNIK_51.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEKONAREVO1_52.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTECUKOJEVAC_53.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEKRUSEVICA_54.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55.set('fieldImages', {'fid': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTELESEVO1_56.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTELADJEVCI_57.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBARE_58.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTELAZAC1_59.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMAGLIC1_60.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMILOCAJ1_61.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMILICI1_62.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMETIKOS1_63.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTELOPATNICA1_64.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPEKCANICA1_65.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMILAVCICI1_66.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMATARUGE1_67.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMELJANICA_68.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMLANCA1_69.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPETROPOLJE1_71.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMUSINAREKA1_72.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPECENOG1_73.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPOPOVICI1_74.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPREDOLE1_75.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPROGORELICA1_76.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPOLUMIR1_77.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTERATINA1_78.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTERIBNICA1_79.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEOPLANICI1_80.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMRSAC1_81.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEROCEVICI1_82.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEREKA_83.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTERUDNJAK1_84.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTESAMAILA1_85.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEPLANA1_86.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTERUDNO1_87.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTESIRCA1_88.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTESTUBL1_89.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTESAVOVO1_90.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTETRGOVISTE1_91.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEUSCE1_92.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTETADENJE1_93.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEVRBA1_94.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEVITANOVAC1_95.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEVRH1_96.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEVRDILA1_97.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTETAVNIK1_98.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEZAKLOPACA1_99.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZMELJISTESIBNICA1_100.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEZAKUTA1_101.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTETOLISNICA1_102.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEZAMCANJE_103.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEVITKOVAC1_104.set('fieldImages', {'fid': 'TextEdit', 'LAYER': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEZASAD1_105.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEBREZOVA_106.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTERAVNICA1_107.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SUMSKOZEMLJISTEMILAKOVAC_108.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEADRANI_109.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEZASAD1_111.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVRH1_117.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVRBA1_118.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTEUSCE1_122.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_124.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_127.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTERUDNO1_128.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTESIRCA1_130.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPLANA1_136.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTERATINA1_137.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_138.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.set('fieldImages', {'fid': 'TextEdit', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': 'TextEdit', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', 'path': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTELAZAC1_159.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.set('fieldImages', {'fid': 'TextEdit', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': 'TextEdit', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161.set('fieldImages', {'fid': 'TextEdit', 'brparcele': '', 'povrsina': '', 'status': '', 'status_par': '', 'opstina_ma': '', 'opstina_im': '', 'opstina__1': '', 'maticnibro': '', 'kat_opstin': '', 'kat_opst_1': '', 'status_dkp': '', 'dkp_status': '', 'parcela_id': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.set('fieldImages', {'fid': 'TextEdit', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': 'TextEdit', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTECERJE_166.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.set('fieldImages', {'fid': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDOLAC_172.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEBARE_175.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEGODACICA_176.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTECVETKE_181.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.set('fieldImages', {'fid': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMLANCA_186.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTELESEVO2_187.set('fieldImages', {'fid': 'TextEdit', 'layer': '', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEMILICI1_188.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'pravila_web': 'TextEdit', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_189.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', 'pravila_web': 'TextEdit', });
lyr_GUOBREZNA_190.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOUSCE1_191.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOPECENOG1_192.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOBAPSKOPOLJE_193.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOSUMARICE1_194.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOVITKOVAC1_195.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOROCEVICI1_196.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOPETROPOLJE1_197.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUORIBNICA1_198.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOTOLISNICA1_199.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOLAZAC1_200.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOSIBNICA1_201.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOVRDILA1_202.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOLESEVO1_203.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOPOPOVICI1_204.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOOPLANICI1_205.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMRSAC1_206.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOBUKOVICA_207.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMILAVCICI1_208.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUODRLUPA1_209.set('fieldImages', {'fid': 'TextEdit', });
lyr_GUOMUSINAREKA1_210.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMILICI1_211.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMETIKOSI1_212.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOGLEDIC1_213.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUODEDEVCI1_214.set('fieldImages', {'fid': 'TextEdit', 'LEYER': '', });
lyr_GUOCVETKE1_215.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOGOKCANICA1_216.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOGODACICA1_217.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUODRAGOSINJCI1_218.set('fieldImages', {'fid': 'TextEdit', });
lyr_GUODRAKCICI1_219.set('fieldImages', {'fid': 'TextEdit', });
lyr_GUODOLAC1_220.set('fieldImages', {'fid': 'TextEdit', 'LEYER': '', });
lyr_GUORAVNICA2_221.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMILAKOVAC2_222.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMLANCA_223.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOBZOVIK_224.set('fieldImages', {'fid': 'TextEdit', 'LAYER': '', });
lyr_GUOBAPSKOPOLJE_225.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMILOCAJ2_226.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_GUOMILOCAJ1_227.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_zastitna_zona_40m_moravski_koridor_228.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_zastitna_zona_80m_moravski_koridor_229.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_autoputEKSPROPRIJACIJA_230.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AUTOPUTparcele_vodnih_povrsina_231.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_VOJSKAkompleksposebnenamene_240.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_VOJSKAzona2_241.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_VOJSKAzona1_242.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'transparency': 'Range', });
lyr_Zona_3_3.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'povrsine': 'inline label - visible with data', 'tip': 'inline label - visible with data', });
lyr_Zona_2_4.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_1_5.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Goc_Gvozdac_6.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_3_7.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'povrsine': 'inline label - visible with data', 'tip': 'inline label - visible with data', });
lyr_Zona_2_8.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_1_9.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Jelica_10.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_3_11.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'povrsine': 'inline label - visible with data', 'tip': 'inline label - visible with data', });
lyr_Zona_2_12.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_1_13.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Golija_14.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'tip': 'inline label - visible with data', 'povrsine': 'hidden field', });
lyr_Zona_3_15.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'povrsine': 'inline label - visible with data', 'tip': 'inline label - visible with data', });
lyr_Zona_2_16.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_1_17.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Stolovi_18.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - always visible', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'tip': 'hidden field', 'povrsine': 'hidden field', });
lyr_Zona_3_19.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'povrsine': 'inline label - visible with data', 'tip': 'inline label - visible with data', });
lyr_Zona_2_20.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zona_1_21.set('fieldLabels', {'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'reg_broj': 'hidden field', 'naziv': 'inline label - visible with data', 'tip_dobra': 'inline label - visible with data', 'god': 'inline label - visible with data', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_Zeljin_22.set('fieldLabels', {'reg_broj': 'hidden field', 'tip_dobra': 'inline label - visible with data', 'naziv': 'inline label - visible with data', 'god': 'inline label - visible with data', 'NazivCIR': 'hidden field', 'TipDobraCI': 'hidden field', 'tip': 'inline label - visible with data', 'povrsine': 'inline label - visible with data', });
lyr_ppppngranicaplanaIbarskeelektrane_23.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ppppnIBARSKEELEKTRANEdirektnosprovodjenje_24.set('fieldLabels', {'fid': 'hidden field', });
lyr_Ggranicarezervatabiosferemabgolija_25.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'popis_48': 'no label', 'popis_53': 'no label', 'popis_61': 'no label', 'popis_71': 'no label', 'popis_81': 'no label', 'popis_91': 'no label', 'popis_02': 'no label', 'ko_id': 'no label', 'ko_naziv': 'no label', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'id1': 'hidden field', });
lyr_PPPNParkaprirodeGolija_26.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'vrsta_plan': 'inline label - visible with data', 'id_vrste_p': 'hidden field', 'dokument_l': 'hidden field', 'azuriranje': 'hidden field', 'izvor_poda': 'inline label - visible with data', 'vrsta_doku': 'inline label - visible with data', 'status': 'hidden field', 'broj_odluk': 'inline label - visible with data', 'id1': 'hidden field', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIIZONE_27.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'inline label - visible with data', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparen': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_PPPPNMANASTIRSTUDENICAGRANICAIZONE_28.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'inline label - visible with data', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparen': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_PPPPNAerodromMoravadetaljnarazrada_29.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GRANICAPLANOVA_30.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ZASTITNAPODRUCJAREZIMIZASTITE_31.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'naziv': 'inline label - visible with data', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'stepen_zas': 'inline label - visible with data', 'oznaka_rez': 'inline label - visible with data', 'id1': 'hidden field', });
lyr_SUMSKOZEMLJISTEADRANI_32.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBAPSKOPOLJE_33.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTECERJE_34.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDOLAC_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBZOVIK_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBUKOVICA_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDEDEVCI_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDRAKCICI_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDRAGOSINJCE_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDJAKOVO_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEGOKCANICA_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDRAZINICI_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTECVETKE_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEGOTOVAC1_45.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'PRAVILA': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBREZNA_46.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEGLEDIC_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEDRLUPA_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEKAMENICA1_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEGODACICA_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBRESNIK_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEKONAREVO1_52.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTECUKOJEVAC_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEKRUSEVICA_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBOGUTOVAC1_55.set('fieldLabels', {'fid': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTELESEVO1_56.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTELADJEVCI_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBARE_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTELAZAC1_59.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMAGLIC1_60.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMILOCAJ1_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMILICI1_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMETIKOS1_63.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTELOPATNICA1_64.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPEKCANICA1_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMILAVCICI1_66.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMATARUGE1_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMELJANICA_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMLANCA1_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEORLJAGLAVA1_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPETROPOLJE1_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMUSINAREKA1_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPECENOG1_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPOPOVICI1_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPREDOLE1_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPROGORELICA1_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPOLUMIR1_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTERATINA1_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTERIBNICA1_79.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEOPLANICI1_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMRSAC1_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEROCEVICI1_82.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEREKA_83.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTERUDNJAK1_84.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTESAMAILA1_85.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEPLANA1_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTERUDNO1_87.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTESIRCA1_88.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTESTUBL1_89.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTESAVOVO1_90.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTETRGOVISTE1_91.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEUSCE1_92.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTETADENJE1_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEVRBA1_94.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEVITANOVAC1_95.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEVRH1_96.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEVRDILA1_97.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTETAVNIK1_98.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEZAKLOPACA1_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZMELJISTESIBNICA1_100.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEZAKUTA1_101.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTETOLISNICA1_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEZAMCANJE_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEVITKOVAC1_104.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEZASAD1_105.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEBREZOVA_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTERAVNICA1_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_SUMSKOZEMLJISTEMILAKOVAC_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'TEXT': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEADRANI_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_110.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEZASAD1_111.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEZAMCANJE_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTEZAKLOPACA1_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEZAKUTA1_114.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVRDILA1_115.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVITANOVAC1_116.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVRH1_117.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVRBA1_118.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTERUDNJAK1_119.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_120.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEVITKOVAC1_121.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTEUSCE1_122.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTESTUBAL1_123.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTETAVNIK1_125.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTETOLISNICA1_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTETADENJE1_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTERUDNO1_128.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTESIBNICA1_129.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTESIRCA1_130.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTESAVOVO1_131.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTESAMAILA1_132.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPOPOVICI1_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTERIBNICA1_134.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVISNKOZEMLJISTEPROGORELICA1_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPLANA1_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTERATINA1_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_138.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPREDOLE1_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPOLUMIR1_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPECENOG1_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPETROPOLJE1_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEKAMENICA1_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMRSAC1_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEPEKCANICA1_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEORLJAGLAVA1_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEOPLANICI1i_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTELOPATNICA1_148.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMILAKOVAC1_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMETIKOS1_150.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMILOCAJ1_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMELJANICA_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMILAVCICI1_153.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMATARUGE1_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEKONAREVO1_155.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMAGLIC1_156.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_157.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTELADJEVCI_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTELAZAC1_159.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEKRUSEVICA_160.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEBRZNA_161.set('fieldLabels', {'fid': 'hidden field', 'brparcele': 'hidden field', 'povrsina': 'hidden field', 'status': 'hidden field', 'status_par': 'hidden field', 'opstina_ma': 'hidden field', 'opstina_im': 'hidden field', 'opstina__1': 'hidden field', 'maticnibro': 'hidden field', 'kat_opstin': 'hidden field', 'kat_opst_1': 'hidden field', 'status_dkp': 'hidden field', 'dkp_status': 'hidden field', 'parcela_id': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEGLEDIC_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDRAZINICI_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDJAKOVOI_164.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'no label', 'ext': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTECUKOJEVAC_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTECERJE_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEBREZOVA_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEGOTOVAC1_168.set('fieldLabels', {'fid': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEBZOVIK_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEBAPSKOPOLJE_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDEDEVCI_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDOLAC_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEBUKOVICA_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEGOKCANICA_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEBARE_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEGODACICA_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDRAKCICI_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTETRGOVOVISTE1_178.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDRLUPA_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEDRAGOSINJCE_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTECVETKE_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSDKOZEMLJISTEBRESNIK_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEBOGUTOVAC1_183.set('fieldLabels', {'fid': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEROCEVICI1_184.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTERAVNICA2_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMLANCA_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTELESEVO2_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEMILICI1_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'pravila_web': 'inline label - visible with data', });
lyr_GRADJEVINSKOZEMLJISTEREKA1_189.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'header label - always visible', 'pravila_web': 'inline label - visible with data', });
lyr_GUOBREZNA_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOUSCE1_191.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOPECENOG1_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOBAPSKOPOLJE_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOSUMARICE1_194.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOVITKOVAC1_195.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOROCEVICI1_196.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOPETROPOLJE1_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUORIBNICA1_198.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOTOLISNICA1_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOLAZAC1_200.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOSIBNICA1_201.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOVRDILA1_202.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOLESEVO1_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOPOPOVICI1_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOOPLANICI1_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMRSAC1_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOBUKOVICA_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMILAVCICI1_208.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUODRLUPA1_209.set('fieldLabels', {'fid': 'hidden field', });
lyr_GUOMUSINAREKA1_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMILICI1_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMETIKOSI1_212.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOGLEDIC1_213.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUODEDEVCI1_214.set('fieldLabels', {'fid': 'hidden field', 'LEYER': 'no label', });
lyr_GUOCVETKE1_215.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOGOKCANICA1_216.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOGODACICA1_217.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUODRAGOSINJCI1_218.set('fieldLabels', {'fid': 'hidden field', });
lyr_GUODRAKCICI1_219.set('fieldLabels', {'fid': 'hidden field', });
lyr_GUODOLAC1_220.set('fieldLabels', {'fid': 'hidden field', 'LEYER': 'no label', });
lyr_GUORAVNICA2_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMILAKOVAC2_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMLANCA_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOBZOVIK_224.set('fieldLabels', {'fid': 'hidden field', 'LAYER': 'no label', });
lyr_GUOBAPSKOPOLJE_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMILOCAJ2_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GUOMILOCAJ1_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_zastitna_zona_40m_moravski_koridor_228.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_zastitna_zona_80m_moravski_koridor_229.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_autoputEKSPROPRIJACIJA_230.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_AUTOPUTparcele_vodnih_povrsina_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VOJSKAkompleksposebnenamene_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VOJSKAzona2_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VOJSKAzona1_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'transparency': 'hidden field', });
lyr_VOJSKAzona1_242.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});