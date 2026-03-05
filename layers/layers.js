var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_CartegologiqueimagedelaFranceau150000e_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/geologie",
                              attributions: ' ',
                              params: {
                                "LAYERS": "SCAN_D_GEOL50",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Carte géologique image de la France au 1/50 000e',
                            popuplayertitle: 'Carte géologique image de la France au 1/50 000e',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CartegologiqueimagedelaFranceau150000e_1, 0]);
var lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeI_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.ZNIEFF1.SEA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Zones naturelles d’intérêt écologique faunistique et floristique (ZNIEFF) marine type I',
                            popuplayertitle: 'Zones naturelles d’intérêt écologique faunistique et floristique (ZNIEFF) marine type I',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeI_2, 0]);
var lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeII_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.ZNIEFF2.SEA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Zones naturelles d’intérêt écologique faunistique et floristique (ZNIEFF) marine type II',
                            popuplayertitle: 'Zones naturelles d’intérêt écologique faunistique et floristique (ZNIEFF) marine type II',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeII_3, 0]);
var lyr_ZonescologiquesdenatureremarquableZNIEFF1_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.ZNIEFF1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Zones écologiques de nature remarquable (ZNIEFF 1)',
                            popuplayertitle: 'Zones écologiques de nature remarquable (ZNIEFF 1)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonescologiquesdenatureremarquableZNIEFF1_4, 0]);
var lyr_ZonesfonctionnellesdenatureremarquableZNIEFF2_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.ZNIEFF2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Zones fonctionnelles de nature remarquable (ZNIEFF 2)',
                            popuplayertitle: 'Zones fonctionnelles de nature remarquable (ZNIEFF 2)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesfonctionnellesdenatureremarquableZNIEFF2_5, 0]);
var lyr_SitesNATURA2000autitredeladirectiveHabitats_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.SIC",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sites NATURA 2000 au titre de la directive Habitats',
                            popuplayertitle: 'Sites NATURA 2000 au titre de la directive Habitats',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SitesNATURA2000autitredeladirectiveHabitats_6, 0]);
var lyr_SitesNATURA2000autitredeladirectiveOiseaux_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.ZPS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sites NATURA 2000 au titre de la directive Oiseaux',
                            popuplayertitle: 'Sites NATURA 2000 au titre de la directive Oiseaux',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SitesNATURA2000autitredeladirectiveOiseaux_7, 0]);
var lyr_RservesIntgralesdeParcsNationaux_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.RIPN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Réserves Intégrales de Parcs Nationaux',
                            popuplayertitle: 'Réserves Intégrales de Parcs Nationaux',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RservesIntgralesdeParcsNationaux_8, 0]);
var lyr_Rservesnaturellesnationales_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.RNN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Réserves naturelles nationales',
                            popuplayertitle: 'Réserves naturelles nationales',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Rservesnaturellesnationales_9, 0]);
var lyr_Rservesnaturellesrgionales_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDSITES.MNHN.RESERVES-REGIONALES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Réserves naturelles régionales',
                            popuplayertitle: 'Réserves naturelles régionales',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Rservesnaturellesrgionales_10, 0]);
var lyr_primtresdeprotectionderservesnaturelles_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.MNHN.RN.PERIMETER",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'périmètres de protection de réserves naturelles',
                            popuplayertitle: 'périmètres de protection de réserves naturelles',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_primtresdeprotectionderservesnaturelles_11, 0]);
var lyr_Parcsnationaux_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.PN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Parcs nationaux',
                            popuplayertitle: 'Parcs nationaux',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcsnationaux_12, 0]);
var lyr_Monumentsnationaux_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "POI.MONUMENTS_BDD_WLD_WM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Monuments nationaux',
                            popuplayertitle: 'Monuments nationaux',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Monumentsnationaux_13, 0]);
var lyr_Zonessensiblesauxremontesdenappes_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/risques",
                              attributions: ' ',
                              params: {
                                "LAYERS": "REMNAPPE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Zones sensibles aux remontées de nappes',
                            popuplayertitle: 'Zones sensibles aux remontées de nappes',
                            type: '',
                            opacity: 0.582000,
                            
                            
                          });
              wms_layers.push([lyr_Zonessensiblesauxremontesdenappes_14, 0]);
var lyr_Arrtsdeprotectiondegotope_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-v/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PROTECTEDAREAS.APG",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Arrêtés de protection de géotope',
                            popuplayertitle: 'Arrêtés de protection de géotope',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Arrtsdeprotectiondegotope_15, 0]);
var lyr_Expositionauretraitgonflementdesargiles_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/risques",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ALEARG_REALISE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Exposition au retrait-gonflement des argiles',
                            popuplayertitle: 'Exposition au retrait-gonflement des argiles',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Expositionauretraitgonflementdesargiles_16, 0]);
var lyr_MouvementsdeTerrain_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/risques",
                              attributions: ' ',
                              params: {
                                "LAYERS": "MVT_LOCALISE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Mouvements de Terrain',
                            popuplayertitle: 'Mouvements de Terrain',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MouvementsdeTerrain_17, 0]);

    var projection_Limitesadministrativesmisesjourencontinu_18 = ol.proj.get('EPSG:3857');
    var projectionExtent_Limitesadministrativesmisesjourencontinu_18 = projection_Limitesadministrativesmisesjourencontinu_18.getExtent();
    var size_Limitesadministrativesmisesjourencontinu_18 = ol.extent.getWidth(projectionExtent_Limitesadministrativesmisesjourencontinu_18) / 256;
    var resolutions_Limitesadministrativesmisesjourencontinu_18 = new Array(14);
    var matrixIds_Limitesadministrativesmisesjourencontinu_18 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Limitesadministrativesmisesjourencontinu_18[z] = size_Limitesadministrativesmisesjourencontinu_18 / Math.pow(2, z);
        matrixIds_Limitesadministrativesmisesjourencontinu_18[z] = z;
    }
    var lyr_Limitesadministrativesmisesjourencontinu_18 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/annexes/ressources/wmts/administratif.xml",
                                attributions: ' ',
                                "layer": "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Limitesadministrativesmisesjourencontinu_18,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Limitesadministrativesmisesjourencontinu_18),
                resolutions: resolutions_Limitesadministrativesmisesjourencontinu_18,
                matrixIds: matrixIds_Limitesadministrativesmisesjourencontinu_18
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Limites administratives mises à jour en continu.',
                            opacity: 1.0,
                            
                            
                          });

lyr_GoogleHybrid_0.setVisible(true);lyr_CartegologiqueimagedelaFranceau150000e_1.setVisible(true);lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeI_2.setVisible(true);lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeII_3.setVisible(true);lyr_ZonescologiquesdenatureremarquableZNIEFF1_4.setVisible(true);lyr_ZonesfonctionnellesdenatureremarquableZNIEFF2_5.setVisible(true);lyr_SitesNATURA2000autitredeladirectiveHabitats_6.setVisible(true);lyr_SitesNATURA2000autitredeladirectiveOiseaux_7.setVisible(true);lyr_RservesIntgralesdeParcsNationaux_8.setVisible(true);lyr_Rservesnaturellesnationales_9.setVisible(true);lyr_Rservesnaturellesrgionales_10.setVisible(true);lyr_primtresdeprotectionderservesnaturelles_11.setVisible(true);lyr_Parcsnationaux_12.setVisible(true);lyr_Monumentsnationaux_13.setVisible(true);lyr_Zonessensiblesauxremontesdenappes_14.setVisible(true);lyr_Arrtsdeprotectiondegotope_15.setVisible(true);lyr_Expositionauretraitgonflementdesargiles_16.setVisible(true);lyr_MouvementsdeTerrain_17.setVisible(true);lyr_Limitesadministrativesmisesjourencontinu_18.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CartegologiqueimagedelaFranceau150000e_1,lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeI_2,lyr_ZonesnaturellesdintrtcologiquefaunistiqueetfloristiqueZNIEFFmarinetypeII_3,lyr_ZonescologiquesdenatureremarquableZNIEFF1_4,lyr_ZonesfonctionnellesdenatureremarquableZNIEFF2_5,lyr_SitesNATURA2000autitredeladirectiveHabitats_6,lyr_SitesNATURA2000autitredeladirectiveOiseaux_7,lyr_RservesIntgralesdeParcsNationaux_8,lyr_Rservesnaturellesnationales_9,lyr_Rservesnaturellesrgionales_10,lyr_primtresdeprotectionderservesnaturelles_11,lyr_Parcsnationaux_12,lyr_Monumentsnationaux_13,lyr_Zonessensiblesauxremontesdenappes_14,lyr_Arrtsdeprotectiondegotope_15,lyr_Expositionauretraitgonflementdesargiles_16,lyr_MouvementsdeTerrain_17,lyr_Limitesadministrativesmisesjourencontinu_18];
