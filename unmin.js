{
	"map" : {
		"layers" : [{
			"opacity" : 1.0,
			"args" : ["No background"],
			"group" : "background",
			"name" : "No background",
			"title" : "No background",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "0",
			"fixed" : true,
			"type" : "OpenLayers.Layer"
		}, {
			"opacity" : 1.0,
			"args" : ["OpenStreetMap"],
			"group" : "background",
			"name" : "OpenStreetMap",
			"title" : "OpenStreetMap",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "0",
			"fixed" : true,
			"type" : "OpenLayers.Layer.OSM"
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "osm",
			"title" : "MapQuest OpenStreetMap",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "1",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "AerialWithLabels",
			"title" : "Bing Aerial With Labels",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "2",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "World Physical Map",
			"format" : "jpeg",
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "3",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Physical Map",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "World Street Map",
			"format" : "jpeg",
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "4",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Street Map",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "Topographic Info",
			"format" : "jpeg",
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "5",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Topography",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "World Shaded Relief",
			"format" : "jpeg",
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "6",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Shaded Relief",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "World Imagery",
			"format" : "jpeg",
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "7",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Imagery",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "Ocean_Basemap",
			"format" : "jpeg",
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "8",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI World Ocean Basemap",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "Light Gray Canvas Base",
			"format" : "jpeg",
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "9",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "ESRI Light Gray Reference",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "NatGeo_World_Map",
			"format" : "jpeg",
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",
			"selected" : false,
			"visibility" : false,
			"source" : "10",
			"tiled" : false,
			"layerid" : "show:0",
			"title" : "National Geographic World Map",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "SATELLITE",
			"title" : "Google Satellite",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "11",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "TERRAIN",
			"title" : "Google Terrain",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "11",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "HYBRID",
			"title" : "Google Hybrid",
			"url" : null,
			"selected" : false,
			"visibility" : false,
			"source" : "11",
			"fixed" : true
		}, {
			"opacity" : 1.0,
			"group" : "background",
			"name" : "ROADMAP",
			"title" : "Google Roadmap",
			"url" : null,
			"selected" : false,
			"visibility" : true,
			"source" : "11",
			"fixed" : true
		}, {
			"styles" : "",
			"abstract" : "Roads",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["ScaleRank", "SOV_A3", "Note", "UIDENT_1", "FeatureCla", "Type"],
				"propertyNames" : {
					"ScaleRank" : "Scalerank",
					"SOV_A3" : "Sov_A3",
					"Note" : "Note",
					"UIDENT_1" : "Uident_1",
					"FeatureCla" : "Featurecla",
					"Type" : "Type"
				}
			},
			"group" : "Transportation",
			"title" : "Roads",
			"selected" : false,
			"bbox" : [-166.53248206565988, 7.997570932184107, -52.72651149202634, 70.28700516674117],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:_m_roads_Znk",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4326",
			"attributes" : [{
				"header" : "Scalerank",
				"id" : "ScaleRank",
				"searchable" : false
			}, {
				"header" : "Sov_A3",
				"id" : "SOV_A3",
				"searchable" : true
			}, {
				"header" : "Note",
				"id" : "Note",
				"searchable" : false
			}, {
				"header" : "Uident_1",
				"id" : "UIDENT_1",
				"searchable" : false
			}, {
				"header" : "Featurecla",
				"id" : "FeatureCla",
				"searchable" : false
			}, {
				"header" : "Type",
				"id" : "Type",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-166.53248206565988, 7.997570932184107, -52.72651149202634, 70.28700516674117]
		}, {
			"styles" : "principal_aquifers_of_the_48_conterminou_5a8",
			"abstract" : "This map layer contains the shallowest principal aquifers of the conterminous United States, Hawaii, Puerto Rico, and the U.S. Virgin Islands, portrayed as polygons.  The map layer was developed as part of the effort to produce the maps published at 1:2,500,000 in the printed series \"Ground Water Atlas of the United States\".  The published maps contain base and cultural features not included in these data.  This is a replacement for the July 1998 map layer called Principal Aquifers of the 48 Conterminous United States.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["OBJECTID", "ROCK_NAME", "ROCK_TYPE", "AQ_NAME", "AQ_CODE", "Shape_Leng", "Shape_Area"],
				"propertyNames" : {
					"Shape_Area" : "Shape_Area",
					"OBJECTID" : "Objectid",
					"AQ_NAME" : "Aq_Name",
					"AQ_CODE" : "Aq_Code",
					"Shape_Leng" : "Shape_Leng",
					"ROCK_NAME" : "Rock_Name",
					"ROCK_TYPE" : "Rock_Type"
				}
			},
			"group" : "Rivers, Streams, Lakes",
			"title" : "Principal Aquifers of the 48 Conterminous United States, Hawaii, Puerto Rico, and the U.S. Virgin Islands",
			"selected" : false,
			"bbox" : [-160.236053332639, 17.6746926217152, -64.5661622435396, 49.3856196512481],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:principal_aquifers_of_the_48_conterminou_5a8",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Objectid",
				"id" : "OBJECTID",
				"searchable" : false
			}, {
				"header" : "Rock_Name",
				"id" : "ROCK_NAME",
				"searchable" : true
			}, {
				"header" : "Rock_Type",
				"id" : "ROCK_TYPE",
				"searchable" : false
			}, {
				"header" : "Aq_Name",
				"id" : "AQ_NAME",
				"searchable" : true
			}, {
				"header" : "Aq_Code",
				"id" : "AQ_CODE",
				"searchable" : false
			}, {
				"header" : "Shape_Leng",
				"id" : "Shape_Leng",
				"searchable" : false
			}, {
				"header" : "Shape_Area",
				"id" : "Shape_Area",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-160.23605333263896, 17.674692621168738, -64.5661622435396, 49.38561965031615]
		}, {
			"styles" : "",
			"abstract" : "This map layer contains hydrologic unit boundaries and codes for the United States, Puerto Rico, and the U.S. Virgin Islands.  It was revised for inclusion in the National Atlas of the United States of America, and updated to match the streams file created by the USGS National Mapping Division (NMD) for the National Atlas of the United States of America. This is a revised version of the November 2002 map layer.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["AREA", "PERIMETER", "HUCS00M020", "PLYTYPE", "HUC", "REG_NAME", "MAP_LABEL", "SUB_NAME", "ACC_NAME", "CAT_NAME", "HUC2", "HUC4", "HUC6", "REG", "SUB", "ACC", "CAT", "CAT_NUM"],
				"propertyNames" : {
					"PERIMETER" : "Perimeter",
					"ACC" : "Acc",
					"ACC_NAME" : "Acc_Name",
					"HUCS00M020" : "Hucs00M020",
					"SUB" : "Sub",
					"CAT_NAME" : "Cat_Name",
					"HUC" : "Huc",
					"AREA" : "Area",
					"REG_NAME" : "Reg_Name",
					"CAT_NUM" : "Cat_Num",
					"CAT" : "Cat",
					"PLYTYPE" : "Plytype",
					"MAP_LABEL" : "Map_Label",
					"SUB_NAME" : "Sub_Name",
					"HUC2" : "Huc2",
					"HUC4" : "Huc4",
					"REG" : "Reg",
					"HUC6" : "Huc6"
				}
			},
			"group" : "Rivers, Streams, Lakes",
			"title" : "1:2,000,000-Scale Hydrologic Unit Boundaries",
			"selected" : false,
			"bbox" : [-179.133392333984, 17.6746921539307, 179.788208007812, 71.3980484008789],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:_scale_hydrologic_unit_boundarie_yyw",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Area",
				"id" : "AREA",
				"searchable" : false
			}, {
				"header" : "Perimeter",
				"id" : "PERIMETER",
				"searchable" : false
			}, {
				"header" : "Hucs00M020",
				"id" : "HUCS00M020",
				"searchable" : false
			}, {
				"header" : "Plytype",
				"id" : "PLYTYPE",
				"searchable" : false
			}, {
				"header" : "Huc",
				"id" : "HUC",
				"searchable" : false
			}, {
				"header" : "Reg_Name",
				"id" : "REG_NAME",
				"searchable" : true
			}, {
				"header" : "Map_Label",
				"id" : "MAP_LABEL",
				"searchable" : false
			}, {
				"header" : "Sub_Name",
				"id" : "SUB_NAME",
				"searchable" : true
			}, {
				"header" : "Acc_Name",
				"id" : "ACC_NAME",
				"searchable" : false
			}, {
				"header" : "Cat_Name",
				"id" : "CAT_NAME",
				"searchable" : false
			}, {
				"header" : "Huc2",
				"id" : "HUC2",
				"searchable" : false
			}, {
				"header" : "Huc4",
				"id" : "HUC4",
				"searchable" : false
			}, {
				"header" : "Huc6",
				"id" : "HUC6",
				"searchable" : false
			}, {
				"header" : "Reg",
				"id" : "REG",
				"searchable" : false
			}, {
				"header" : "Sub",
				"id" : "SUB",
				"searchable" : false
			}, {
				"header" : "Acc",
				"id" : "ACC",
				"searchable" : false
			}, {
				"header" : "Cat",
				"id" : "CAT",
				"searchable" : false
			}, {
				"header" : "Cat_Num",
				"id" : "CAT_NUM",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-179.13339233398398, 17.67469215338424, 179.788208007812, 71.39804840030934]
		}, {
			"styles" : "blm_areas_of_critcal_environmental_conce_6eo",
			"abstract" : "This is an aggregate national dataset describing the geographic boundaries of the ACEC within the BLM managed public lands. The designated ACECs are \"areas within the public lands where special management attention is required to protect and prevent irreparable damage to important historic, cultural, or scenic values, fish and wildlife resources or other natural systems of processes, or to protect life and safety from natural hazards.\"",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["OBJECTID", "ACEC_ID", "LOC_ACEC_I", "ACEC_NAME", "CASEFILE_N", "LUP_NAME", "ACEC_EST_A", "ROD_DATE", "GIS_ACRES", "ADMIN_ST", "ADM_OFC_CD", "ADM_UNIT_C", "SENSITIVIT", "COMMENTS", "GlobalID", "Shape_Leng", "Shape_Area"],
				"propertyNames" : {
					"ADM_UNIT_C" : "Adm_Unit_C",
					"SENSITIVIT" : "Sensitivit",
					"LOC_ACEC_I" : "Loc_Acec_I",
					"ADM_OFC_CD" : "Adm_Ofc_Cd",
					"OBJECTID" : "Objectid",
					"ACEC_NAME" : "Acec_Name",
					"GlobalID" : "Globalid",
					"CASEFILE_N" : "Casefile_N",
					"LUP_NAME" : "Lup_Name",
					"COMMENTS" : "Comments",
					"GIS_ACRES" : "Gis_Acres",
					"ACEC_ID" : "Acec_Id",
					"Shape_Area" : "Shape_Area",
					"ADMIN_ST" : "Admin_St",
					"ACEC_EST_A" : "Acec_Est_A",
					"Shape_Leng" : "Shape_Leng",
					"ROD_DATE" : "Rod_Date"
				}
			},
			"group" : "Environmental Resources, Conservation",
			"title" : "BLM Areas of Critcal Environmental Concern",
			"selected" : false,
			"bbox" : [-165.857348549011, 31.3323970632343, -103.452640847223, 69.4717975944333],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:blm_areas_of_critcal_environmental_conce_6eo",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Objectid",
				"id" : "OBJECTID",
				"searchable" : false
			}, {
				"header" : "Acec_Id",
				"id" : "ACEC_ID",
				"searchable" : true
			}, {
				"header" : "Loc_Acec_I",
				"id" : "LOC_ACEC_I",
				"searchable" : false
			}, {
				"header" : "Acec_Name",
				"id" : "ACEC_NAME",
				"searchable" : false
			}, {
				"header" : "Casefile_N",
				"id" : "CASEFILE_N",
				"searchable" : false
			}, {
				"header" : "Lup_Name",
				"id" : "LUP_NAME",
				"searchable" : false
			}, {
				"header" : "Acec_Est_A",
				"id" : "ACEC_EST_A",
				"searchable" : false
			}, {
				"header" : "Rod_Date",
				"id" : "ROD_DATE",
				"searchable" : false
			}, {
				"header" : "Gis_Acres",
				"id" : "GIS_ACRES",
				"searchable" : false
			}, {
				"header" : "Admin_St",
				"id" : "ADMIN_ST",
				"searchable" : false
			}, {
				"header" : "Adm_Ofc_Cd",
				"id" : "ADM_OFC_CD",
				"searchable" : false
			}, {
				"header" : "Adm_Unit_C",
				"id" : "ADM_UNIT_C",
				"searchable" : false
			}, {
				"header" : "Sensitivit",
				"id" : "SENSITIVIT",
				"searchable" : false
			}, {
				"header" : "Comments",
				"id" : "COMMENTS",
				"searchable" : false
			}, {
				"header" : "Globalid",
				"id" : "GlobalID",
				"searchable" : false
			}, {
				"header" : "Shape_Leng",
				"id" : "Shape_Leng",
				"searchable" : false
			}, {
				"header" : "Shape_Area",
				"id" : "Shape_Area",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-165.857348549011, 31.332397062395753, -103.45264084722298, 69.47179759381457]
		}, {
			"styles" : "us_shale_basins_pg1",
			"abstract" : "Sedimentary basins associated with the EIA shale plays as of 5-6-2011. Sedimentary basin which do not have shale plays as of publication date are not included in this file. Sources for the basins are mostly from the US Geological Survey and state agencies such as the WY Geological Survey.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["NAME", "Shape_Leng", "Shape_Area"],
				"propertyNames" : {
					"Shape_Leng" : "Shape_Leng",
					"Shape_Area" : "Shape_Area",
					"NAME" : "Name"
				}
			},
			"group" : "Shale Formations",
			"title" : "US Shale Basins",
			"selected" : false,
			"bbox" : [-121.977489431, 25.7724819650001, -73.603535499, 49.0024395],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : true,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:us_shale_basins_pg1",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Name",
				"id" : "NAME",
				"searchable" : true
			}, {
				"header" : "Shape_Leng",
				"id" : "Shape_Leng",
				"searchable" : false
			}, {
				"header" : "Shape_Area",
				"id" : "Shape_Area",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-121.97748943100001, 25.772481964260695, -73.603535499, 49.002439499066185]
		}, {
			"styles" : "",
			"abstract" : "This is a blob map of the general areas for shale plays in the US as of 5-6-2011. The polygons are constructed in a variety of ways which cannot be consistent due to the variety of data available and the maturity of each shale play. For example, some are outlines around active drilled areas, others are the USGS interpretation of the assesment unit, etc. See the attribute \"References\" for the literature source for each outline.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["Basin", "Shale_Play", "Age_Shale", "References", "Current", "SHAPE_Leng", "SHAPE_Area", "Layer", "Thick_ft", "Depth1_ft", "Depth2_ft"],
				"propertyNames" : {
					"Depth1_ft" : "Depth1_Ft",
					"Layer" : "Layer",
					"SHAPE_Area" : "Shape_Area",
					"Depth2_ft" : "Depth2_Ft",
					"Age_Shale" : "Age_Shale",
					"Current" : "Current",
					"References" : "References",
					"Shale_Play" : "Shale_Play",
					"SHAPE_Leng" : "Shape_Leng",
					"Basin" : "Basin",
					"Thick_ft" : "Thick_Ft"
				}
			},
			"group" : "Shale Formations",
			"title" : "US Shale Plays",
			"selected" : false,
			"bbox" : [-121.147889853, 27.605659621, -73.851722717, 49.0494421060001],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:us_shale_plays_5oi",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Basin",
				"id" : "Basin",
				"searchable" : true
			}, {
				"header" : "Shale_Play",
				"id" : "Shale_Play",
				"searchable" : true
			}, {
				"header" : "Age_Shale",
				"id" : "Age_Shale",
				"searchable" : true
			}, {
				"header" : "References",
				"id" : "References",
				"searchable" : false
			}, {
				"header" : "Current",
				"id" : "Current",
				"searchable" : false
			}, {
				"header" : "Shape_Leng",
				"id" : "SHAPE_Leng",
				"searchable" : false
			}, {
				"header" : "Shape_Area",
				"id" : "SHAPE_Area",
				"searchable" : false
			}, {
				"header" : "Layer",
				"id" : "Layer",
				"searchable" : false
			}, {
				"header" : "Thick_Ft",
				"id" : "Thick_ft",
				"searchable" : false
			}, {
				"header" : "Depth1_Ft",
				"id" : "Depth1_ft",
				"searchable" : false
			}, {
				"header" : "Depth2_Ft",
				"id" : "Depth2_ft",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-121.14788985300001, 27.605659620224625, -73.851722717, 49.0494421050665]
		}, {
			"styles" : "pa_unconventional_drilling_permits_1995__1bv",
			"abstract" : "The Permits Issued Detail Report is designed to show all unconventional Gas Drilling Permits that have been issued for Oil and/or Gas wells in the State of Pennsylvania. This report is not intended to indicate the current status of the well that was permitted, just simply that a permit was issued or reissued to reenter a bore. \n\nDownloaded on March 14, 2013\n\nhttp://www.portal.state.pa.us/portal/server.pt/community/oil_and_gas_reports/20297",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["REGION", "COUNTY_NAM", "MUNICIPALI", "PERMIT_ISS", "OPERATOR", "APPLICATIO", "AUTH_TYPE_", "WELL_API", "UNCONVENTI", "HORIZONTAL", "WELL_TYPE", "FARM_NAME", "LATITUDE_D", "LONGITUDE_", "LATITUDE_1", "LONGITUDE1", "OGO_NUM", "OPERATOR_A", "CITY", "STATE", "ZIP_CODE", "AUTHORIZAT", "CLIENT_ID", "PRIMARY_FA"],
				"propertyNames" : {
					"CLIENT_ID" : "Client_Id",
					"OPERATOR_A" : "Operator_A",
					"MUNICIPALI" : "Municipali",
					"OGO_NUM" : "Ogo_Num",
					"AUTH_TYPE_" : "Auth_Type_",
					"APPLICATIO" : "Applicatio",
					"COUNTY_NAM" : "County_Nam",
					"HORIZONTAL" : "Horizontal",
					"UNCONVENTI" : "Unconventi",
					"LATITUDE_D" : "Latitude_D",
					"PERMIT_ISS" : "Permit_Iss",
					"FARM_NAME" : "Farm_Name",
					"LONGITUDE1" : "Longitude1",
					"WELL_TYPE" : "Well_Type",
					"LONGITUDE_" : "Longitude_",
					"STATE" : "State",
					"LATITUDE_1" : "Latitude_1",
					"OPERATOR" : "Operator",
					"AUTHORIZAT" : "Authorizat",
					"ZIP_CODE" : "Zip_Code",
					"CITY" : "City",
					"PRIMARY_FA" : "Primary_Fa",
					"WELL_API" : "Well_Api",
					"REGION" : "Region"
				}
			},
			"group" : "Oil and/or Gas Wells or Permits",
			"title" : "PA Unconventional Drilling Permits 1995 - Jan. 2013",
			"selected" : false,
			"bbox" : [-80.5175170898438, 39.7219009399414, -75.194275, 41.998777],
			"source" : "13",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:pa_unconventional_drilling_permits_1995__1bv",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4269",
			"attributes" : [{
				"header" : "Region",
				"id" : "REGION",
				"searchable" : true
			}, {
				"header" : "County_Nam",
				"id" : "COUNTY_NAM",
				"searchable" : false
			}, {
				"header" : "Municipali",
				"id" : "MUNICIPALI",
				"searchable" : false
			}, {
				"header" : "Permit_Iss",
				"id" : "PERMIT_ISS",
				"searchable" : false
			}, {
				"header" : "Operator",
				"id" : "OPERATOR",
				"searchable" : false
			}, {
				"header" : "Applicatio",
				"id" : "APPLICATIO",
				"searchable" : false
			}, {
				"header" : "Auth_Type_",
				"id" : "AUTH_TYPE_",
				"searchable" : false
			}, {
				"header" : "Well_Api",
				"id" : "WELL_API",
				"searchable" : false
			}, {
				"header" : "Unconventi",
				"id" : "UNCONVENTI",
				"searchable" : false
			}, {
				"header" : "Horizontal",
				"id" : "HORIZONTAL",
				"searchable" : false
			}, {
				"header" : "Well_Type",
				"id" : "WELL_TYPE",
				"searchable" : false
			}, {
				"header" : "Farm_Name",
				"id" : "FARM_NAME",
				"searchable" : false
			}, {
				"header" : "Latitude_D",
				"id" : "LATITUDE_D",
				"searchable" : false
			}, {
				"header" : "Longitude_",
				"id" : "LONGITUDE_",
				"searchable" : false
			}, {
				"header" : "Latitude_1",
				"id" : "LATITUDE_1",
				"searchable" : false
			}, {
				"header" : "Longitude1",
				"id" : "LONGITUDE1",
				"searchable" : false
			}, {
				"header" : "Ogo_Num",
				"id" : "OGO_NUM",
				"searchable" : false
			}, {
				"header" : "Operator_A",
				"id" : "OPERATOR_A",
				"searchable" : false
			}, {
				"header" : "City",
				"id" : "CITY",
				"searchable" : false
			}, {
				"header" : "State",
				"id" : "STATE",
				"searchable" : false
			}, {
				"header" : "Zip_Code",
				"id" : "ZIP_CODE",
				"searchable" : false
			}, {
				"header" : "Authorizat",
				"id" : "AUTHORIZAT",
				"searchable" : false
			}, {
				"header" : "Client_Id",
				"id" : "CLIENT_ID",
				"searchable" : false
			}, {
				"header" : "Primary_Fa",
				"id" : "PRIMARY_FA",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-80.5175170898438, 39.7219009399414, -75.194275, 41.998777]
		}, {
			"styles" : "nd_oil_and_gas_wells_gsh",
			"abstract" : "Oil and gas wells updated typically weekly from NDIC Oil & Gas Database.  Downloaded 3-18-2013.\n\nMore data and information: http://chgis.fas.harvard.edu/frack/?q=taxonomy/term/21\n\n",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["file_no", "api_no", "operator", "well_name", "td", "spud_date", "field_name", "qq", "sec", "twp", "rng", "feet_ns", "fnsl", "feet_ew", "fewl", "latitude", "longitude", "well_type", "status", "symbol", "api", "datecreate", "datemodifi", "scribe", "County"],
				"propertyNames" : {
					"api_no" : "Api_No",
					"datecreate" : "Datecreate",
					"api" : "Api",
					"sec" : "Sec",
					"file_no" : "File_No",
					"operator" : "Operator",
					"well_name" : "Well_Name",
					"datemodifi" : "Datemodifi",
					"fnsl" : "Fnsl",
					"spud_date" : "Spud_Date",
					"feet_ns" : "Feet_Ns",
					"scribe" : "Scribe",
					"twp" : "Twp",
					"latitude" : "Latitude",
					"td" : "Td",
					"status" : "Status",
					"symbol" : "Symbol",
					"rng" : "Rng",
					"feet_ew" : "Feet_Ew",
					"field_name" : "Field_Name",
					"qq" : "Qq",
					"longitude" : "Longitude",
					"County" : "County",
					"well_type" : "Well_Type",
					"fewl" : "Fewl"
				}
			},
			"group" : "Oil and/or Gas Wells or Permits",
			"title" : "ND Oil and Gas Wells",
			"selected" : false,
			"bbox" : [-104.046305, 45.946105, -96.6767679999999, 48.9986224230001],
			"source" : "14",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:nd_oil_and_gas_wells_gsh",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4267",
			"attributes" : [{
				"header" : "File_No",
				"id" : "file_no",
				"searchable" : true
			}, {
				"header" : "Api_No",
				"id" : "api_no",
				"searchable" : false
			}, {
				"header" : "Operator",
				"id" : "operator",
				"searchable" : false
			}, {
				"header" : "Well_Name",
				"id" : "well_name",
				"searchable" : false
			}, {
				"header" : "Td",
				"id" : "td",
				"searchable" : false
			}, {
				"header" : "Spud_Date",
				"id" : "spud_date",
				"searchable" : false
			}, {
				"header" : "Field_Name",
				"id" : "field_name",
				"searchable" : false
			}, {
				"header" : "Qq",
				"id" : "qq",
				"searchable" : false
			}, {
				"header" : "Sec",
				"id" : "sec",
				"searchable" : false
			}, {
				"header" : "Twp",
				"id" : "twp",
				"searchable" : false
			}, {
				"header" : "Rng",
				"id" : "rng",
				"searchable" : false
			}, {
				"header" : "Feet_Ns",
				"id" : "feet_ns",
				"searchable" : false
			}, {
				"header" : "Fnsl",
				"id" : "fnsl",
				"searchable" : false
			}, {
				"header" : "Feet_Ew",
				"id" : "feet_ew",
				"searchable" : false
			}, {
				"header" : "Fewl",
				"id" : "fewl",
				"searchable" : false
			}, {
				"header" : "Latitude",
				"id" : "latitude",
				"searchable" : false
			}, {
				"header" : "Longitude",
				"id" : "longitude",
				"searchable" : false
			}, {
				"header" : "Well_Type",
				"id" : "well_type",
				"searchable" : false
			}, {
				"header" : "Status",
				"id" : "status",
				"searchable" : false
			}, {
				"header" : "Symbol",
				"id" : "symbol",
				"searchable" : false
			}, {
				"header" : "Api",
				"id" : "api",
				"searchable" : false
			}, {
				"header" : "Datecreate",
				"id" : "datecreate",
				"searchable" : false
			}, {
				"header" : "Datemodifi",
				"id" : "datemodifi",
				"searchable" : false
			}, {
				"header" : "Scribe",
				"id" : "scribe",
				"searchable" : false
			}, {
				"header" : "County",
				"id" : "County",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-104.04674249102172, 45.94597024680612, -96.676945250932, 48.99851955612251]
		}, {
			"styles" : "nd_oil_and_gas_horizontal_legs_pun",
			"abstract" : "Horizontal legs for horizontal drilling in ND.\n\nMore data and information: https://www.dmr.nd.gov/OaGIMS/viewer.htm",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["linekey", "datecreate", "datemodifi", "scribe", "SHAPE_len"],
				"propertyNames" : {
					"datemodifi" : "Datemodifi",
					"datecreate" : "Datecreate",
					"linekey" : "Linekey",
					"SHAPE_len" : "Shape_Len",
					"scribe" : "Scribe"
				}
			},
			"group" : "Oil and/or Gas Wells or Permits",
			"title" : "ND Oil and Gas Horizontal Legs",
			"selected" : false,
			"bbox" : [-104.058043072, 45.9466075750001, -100.49164892, 48.998864037],
			"source" : "14",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:nd_oil_and_gas_horizontal_legs_pun",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4267",
			"attributes" : [{
				"header" : "Linekey",
				"id" : "linekey",
				"searchable" : true
			}, {
				"header" : "Datecreate",
				"id" : "datecreate",
				"searchable" : false
			}, {
				"header" : "Datemodifi",
				"id" : "datemodifi",
				"searchable" : false
			}, {
				"header" : "Scribe",
				"id" : "scribe",
				"searchable" : false
			}, {
				"header" : "Shape_Len",
				"id" : "SHAPE_len",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-104.058480933592, 45.94647275452517, -100.49194233632988, 48.9987445326166]
		}, {
			"styles" : "",
			"abstract" : "The Colorado Oil and Gas Conservation Commission (COGCC) WELLS shapefile consists of over 98,000 oil and gas well locations within the State of Colorado. The well point data represent permitted locations, most of which have been drilled and completed, or drilled and abandoned. Some permitted locations were never drilled; these locations are also included in the shapefile. Well IDs and other header information are provided as attributes. The COGCC is the official repository for Colorado's oil and gas information.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["link_fld", "attrib_1", "attrib_2", "attrib_3", "symbol", "sdf_key", "facility_i", "facility_t", "facility_s", "operator_n", "well_num", "well_name", "field_code", "dist_n_s", "dir_n_s", "dist_e_w", "dir_e_w", "qtrqtr", "sec", "twp", "range", "meridian", "lat", "long", "ground_ele", "utm_x", "utm_y", "LocQual", "field_name", "name", "api_seq_nu", "api_county", "LocationID"],
				"propertyNames" : {
					"sdf_key" : "Sdf_Key",
					"api_county" : "Api_County",
					"sec" : "Sec",
					"ground_ele" : "Ground_Ele",
					"well_name" : "Well_Name",
					"dir_n_s" : "Dir_N_S",
					"field_code" : "Field_Code",
					"link_fld" : "Link_Fld",
					"long" : "Long",
					"twp" : "Twp",
					"qtrqtr" : "Qtrqtr",
					"meridian" : "Meridian",
					"api_seq_nu" : "Api_Seq_Nu",
					"well_num" : "Well_Num",
					"symbol" : "Symbol",
					"LocQual" : "Locqual",
					"LocationID" : "Locationid",
					"lat" : "Lat",
					"dist_e_w" : "Dist_E_W",
					"field_name" : "Field_Name",
					"name" : "Name",
					"facility_t" : "Facility_T",
					"operator_n" : "Operator_N",
					"utm_x" : "Utm_X",
					"utm_y" : "Utm_Y",
					"facility_s" : "Facility_S",
					"dir_e_w" : "Dir_E_W",
					"range" : "Range",
					"facility_i" : "Facility_I",
					"dist_n_s" : "Dist_N_S",
					"attrib_1" : "Attrib_1",
					"attrib_3" : "Attrib_3",
					"attrib_2" : "Attrib_2"
				}
			},
			"group" : "Oil and/or Gas Wells or Permits",
			"title" : "CO Oil and Gas Wells",
			"selected" : false,
			"bbox" : [140258.0, 4094166.0, 763051.0, 4545088.0],
			"source" : "14",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:co_oil_and_gas_wells_8av",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:26913",
			"attributes" : [{
				"header" : "Link_Fld",
				"id" : "link_fld",
				"searchable" : true
			}, {
				"header" : "Attrib_1",
				"id" : "attrib_1",
				"searchable" : false
			}, {
				"header" : "Attrib_2",
				"id" : "attrib_2",
				"searchable" : false
			}, {
				"header" : "Attrib_3",
				"id" : "attrib_3",
				"searchable" : false
			}, {
				"header" : "Symbol",
				"id" : "symbol",
				"searchable" : false
			}, {
				"header" : "Sdf_Key",
				"id" : "sdf_key",
				"searchable" : false
			}, {
				"header" : "Facility_I",
				"id" : "facility_i",
				"searchable" : false
			}, {
				"header" : "Facility_T",
				"id" : "facility_t",
				"searchable" : false
			}, {
				"header" : "Facility_S",
				"id" : "facility_s",
				"searchable" : false
			}, {
				"header" : "Operator_N",
				"id" : "operator_n",
				"searchable" : false
			}, {
				"header" : "Well_Num",
				"id" : "well_num",
				"searchable" : false
			}, {
				"header" : "Well_Name",
				"id" : "well_name",
				"searchable" : false
			}, {
				"header" : "Field_Code",
				"id" : "field_code",
				"searchable" : false
			}, {
				"header" : "Dist_N_S",
				"id" : "dist_n_s",
				"searchable" : false
			}, {
				"header" : "Dir_N_S",
				"id" : "dir_n_s",
				"searchable" : false
			}, {
				"header" : "Dist_E_W",
				"id" : "dist_e_w",
				"searchable" : false
			}, {
				"header" : "Dir_E_W",
				"id" : "dir_e_w",
				"searchable" : false
			}, {
				"header" : "Qtrqtr",
				"id" : "qtrqtr",
				"searchable" : false
			}, {
				"header" : "Sec",
				"id" : "sec",
				"searchable" : false
			}, {
				"header" : "Twp",
				"id" : "twp",
				"searchable" : false
			}, {
				"header" : "Range",
				"id" : "range",
				"searchable" : false
			}, {
				"header" : "Meridian",
				"id" : "meridian",
				"searchable" : false
			}, {
				"header" : "Lat",
				"id" : "lat",
				"searchable" : false
			}, {
				"header" : "Long",
				"id" : "long",
				"searchable" : false
			}, {
				"header" : "Ground_Ele",
				"id" : "ground_ele",
				"searchable" : false
			}, {
				"header" : "Utm_X",
				"id" : "utm_x",
				"searchable" : false
			}, {
				"header" : "Utm_Y",
				"id" : "utm_y",
				"searchable" : false
			}, {
				"header" : "Locqual",
				"id" : "LocQual",
				"searchable" : false
			}, {
				"header" : "Field_Name",
				"id" : "field_name",
				"searchable" : false
			}, {
				"header" : "Name",
				"id" : "name",
				"searchable" : false
			}, {
				"header" : "Api_Seq_Nu",
				"id" : "api_seq_nu",
				"searchable" : false
			}, {
				"header" : "Api_County",
				"id" : "api_county",
				"searchable" : false
			}, {
				"header" : "Locationid",
				"id" : "LocationID",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-109.27546833971114, 36.92491132541131, -101.87175098462107, 41.05559420192627]
		}, {
			"styles" : "co_oil_and_gas_horizontal_legs_6ji",
			"abstract" : "The Colorado Oil and Gas Conservation Commission (COGCC) DIRLINES shapefile contains more than 16,000 reference lines than can be used to connect oil and gas well surface locations to directionally drilled bottomhole locations on a map. Well API Numbers are provided as attributes. Users should also download the companion WELLS and DIR_BHLS shapefiles for the purpose of connecting well surface locations to bottomhole locations on a map. The COGCC is the official repository for Colorado's oil and gas information.\n\n",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["Id", "ET_ID"],
				"propertyNames" : {
					"ET_ID" : "Et_Id",
					"Id" : "Id"
				}
			},
			"group" : "Oil and/or Gas Wells or Permits",
			"title" : "CO Oil and Gas Horizontal Legs",
			"selected" : false,
			"bbox" : [141563.804854148, 4094264.38584047, 745646.781823987, 4544395.06106333],
			"source" : "14",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:co_oil_and_gas_horizontal_legs_6ji",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:26913",
			"attributes" : [{
				"header" : "Id",
				"id" : "Id",
				"searchable" : false
			}, {
				"header" : "Et_Id",
				"id" : "ET_ID",
				"searchable" : true
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-109.25958895022858, 36.926293151588034, -102.07873457211318, 41.04958342086009]
		}, {
			"styles" : "",
			"abstract" : "This dataset contains information extracted from PDF files hosted on FracFocus.org, voluntary disclosure reports submitted by oil and gas drilling operators about the chemicals they used in hydraulic fracturing operations across the United Sates. This dataset represents all of the information included in each individual report - as submitted by industry operators. We have added one column which calculates if a chemical abstract service number (CAS #) is valid (the checksum is correct), invalid (the number appears to be a CAS # but the checksum is wrong), or other (blanks, NULL, or something else does not resemble a CAS #), and for all valid CAS numbers we run a script that standardizes the spacing and punctuation. We record when we obtained the report from FracFocus for the first time and assign it a unique ID, but otherwise, all the data in our database appears exactly as they is recorded on FracFocus.org: typos, \"trade secrets,\" and all.\n\nThis database is provided free of charge for research and educational purposes.  If you use this database to produce a published work, all we ask is that you acknowledge SkyTruth in your website/blogpost/research report.\n\n\nhttp://frack.skytruth.org/fracking-chemical-database/frack-chemical-data-download\n",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["OBJECTID", "r_seqid", "pdf_seqid", "api", "fracture_d", "state", "county", "operator", "well_name", "production", "latitude", "longitude", "datum", "true_verti", "total_wate", "published"],
				"propertyNames" : {
					"fracture_d" : "Fracture_D",
					"total_wate" : "Total_Wate",
					"OBJECTID" : "Objectid",
					"latitude" : "Latitude",
					"true_verti" : "True_Verti",
					"datum" : "Datum",
					"state" : "State",
					"longitude" : "Longitude",
					"county" : "County",
					"production" : "Production",
					"r_seqid" : "R_Seqid",
					"api" : "Api",
					"pdf_seqid" : "Pdf_Seqid",
					"published" : "Published",
					"operator" : "Operator",
					"well_name" : "Well_Name"
				}
			},
			"group" : "Reports of Specific Chemicals Used",
			"title" : "FracFocus Reports as of 1-1-2013",
			"selected" : false,
			"bbox" : [-170.85891, 25.534, -63.612, 70.5080150000001],
			"source" : "12",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : true,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:fracfocus_reports_as_of_1_1_2013_67o",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4267",
			"attributes" : [{
				"header" : "Objectid",
				"id" : "OBJECTID",
				"searchable" : false
			}, {
				"header" : "R_Seqid",
				"id" : "r_seqid",
				"searchable" : false
			}, {
				"header" : "Pdf_Seqid",
				"id" : "pdf_seqid",
				"searchable" : false
			}, {
				"header" : "Api",
				"id" : "api",
				"searchable" : true
			}, {
				"header" : "Fracture_D",
				"id" : "fracture_d",
				"searchable" : false
			}, {
				"header" : "State",
				"id" : "state",
				"searchable" : true
			}, {
				"header" : "County",
				"id" : "county",
				"searchable" : true
			}, {
				"header" : "Operator",
				"id" : "operator",
				"searchable" : true
			}, {
				"header" : "Well_Name",
				"id" : "well_name",
				"searchable" : false
			}, {
				"header" : "Production",
				"id" : "production",
				"searchable" : true
			}, {
				"header" : "Latitude",
				"id" : "latitude",
				"searchable" : false
			}, {
				"header" : "Longitude",
				"id" : "longitude",
				"searchable" : false
			}, {
				"header" : "Datum",
				"id" : "datum",
				"searchable" : false
			}, {
				"header" : "True_Verti",
				"id" : "true_verti",
				"searchable" : false
			}, {
				"header" : "Total_Wate",
				"id" : "total_wate",
				"searchable" : false
			}, {
				"header" : "Published",
				"id" : "published",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-170.86238552901955, 25.53388498150859, -63.610544693997085, 70.50838612076888]
		}, {
			"opacity" : 0.68,
			"group" : "Georeferenced in Warper",
			"name" : "image",
			"title" : "Air Quality Monitoring - image",
			"buffer" : 0,
			"format" : "image/png",
			"selected" : false,
			"visibility" : false,
			"capability" : {
				"styles" : [],
				"metadataURLs" : [],
				"nestedLayers" : [],
				"dimensions" : {},
				"opaque" : false,
				"identifiers" : {},
				"cascaded" : 0,
				"queryable" : false,
				"authorityURLs" : {},
				"srs" : {
					"EPSG:900913" : true
				},
				"prefix" : "image",
				"bbox" : {
					"EPSG:4326" : {
						"srs" : "EPSG:4326",
						"bbox" : [-113.112, 36.0552, -89.3319, 49.6317]
					}
				},
				"keywords" : [],
				"formats" : ["image/tiff", "image/png", "image/gif", "image/jpeg", "application/x-pdf", "image/svg+xml"],
				"fixedWidth" : 0,
				"title" : "Air Quality Monitoring NGP States",
				"fixedHeight" : 0,
				"noSubsets" : false,
				"llbbox" : [-113.112, 36.0552, -89.3319, 49.6317],
				"infoFormats" : ["text/plain", "application/vnd.ogc.gml"],
				"name" : "image"
			},
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1795/z/x/y.png",
			"source" : "15",
			"cached" : true,
			"fixed" : false,
			"transparent" : true
		}, {
			"styles" : "ozonemonitoring_0nj",
			"abstract" : "Ozone Monitoring Stations digitized from map on Page 3 of:\nhttp://www.nature.nps.gov/air/permits/aris/networks/docs/ngpnAirQualitySummary.pdf",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["Name", "Description", "Start_Date", "End_Date", "String_Value_1", "String_Value_2", "Number_Value_1", "Number_Value_2"],
				"propertyNames" : {
					"Name" : "Name",
					"End_Date" : "End_Date",
					"String_Value_2" : "String_Value_2",
					"String_Value_1" : "String_Value_1",
					"Number_Value_2" : "Number_Value_2",
					"Number_Value_1" : "Number_Value_1",
					"Start_Date" : "Start_Date",
					"Description" : "Description"
				}
			},
			"group" : "Georeferenced in Warper",
			"title" : "Air Quality - Ozone Monitoring Stations",
			"selected" : false,
			"bbox" : [-103.22368322375, 43.5390161614793, -96.6318863496723, 47.6121109599674],
			"source" : "16",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:ozonemonitoring_0nj",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4326",
			"attributes" : [{
				"header" : "Name",
				"id" : "Name",
				"searchable" : true
			}, {
				"header" : "Description",
				"id" : "Description",
				"searchable" : false
			}, {
				"header" : "Start_Date",
				"id" : "Start_Date",
				"searchable" : false
			}, {
				"header" : "End_Date",
				"id" : "End_Date",
				"searchable" : false
			}, {
				"header" : "String_Value_1",
				"id" : "String_Value_1",
				"searchable" : false
			}, {
				"header" : "String_Value_2",
				"id" : "String_Value_2",
				"searchable" : false
			}, {
				"header" : "Number_Value_1",
				"id" : "Number_Value_1",
				"searchable" : false
			}, {
				"header" : "Number_Value_2",
				"id" : "Number_Value_2",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-103.22368322375, 43.5390161614793, -96.6318863496723, 47.6121109599674]
		}, {
			"opacity" : 1.0,
			"group" : "Georeferenced in Warper",
			"name" : "image",
			"title" : "Bakken Flares - image",
			"buffer" : 0,
			"format" : "image/png",
			"selected" : false,
			"visibility" : false,
			"capability" : {
				"styles" : [],
				"metadataURLs" : [],
				"nestedLayers" : [],
				"dimensions" : {},
				"opaque" : false,
				"identifiers" : {},
				"cascaded" : 0,
				"queryable" : false,
				"authorityURLs" : {},
				"srs" : {
					"EPSG:900913" : true
				},
				"prefix" : "image",
				"bbox" : {
					"EPSG:4326" : {
						"srs" : "EPSG:4326",
						"bbox" : [-106.695, 42.2973, -90.8568, 50.6066]
					}
				},
				"keywords" : [],
				"formats" : ["image/tiff", "image/png", "image/gif", "image/jpeg", "application/x-pdf", "image/svg+xml"],
				"fixedWidth" : 0,
				"title" : "Bakken Flares",
				"fixedHeight" : 0,
				"noSubsets" : false,
				"llbbox" : [-106.695, 42.2973, -90.8568, 50.6066],
				"infoFormats" : ["text/plain", "application/vnd.ogc.gml"],
				"name" : "image"
			},
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1796/z/x/y.png",
			"source" : "17",
			"cached" : true,
			"fixed" : false,
			"transparent" : true
		}, {
			"styles" : "bakkenflares_g8y",
			"abstract" : "Bakken Flares boundaries based on an image in Harpers article:  http://harpers.org/archive/2013/03/bakken-business/\n\nCaption for the image:  \"A composite of nighttime satellite images of the midwestern United States. Natural-gas flares from the Bakken formation are visible in red. Courtesy the National Geophysical Data Center.\"",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["Name", "Description", "Start_Date", "End_Date", "String_Value_1", "String_Value_2", "Number_Value_1", "Number_Value_2"],
				"propertyNames" : {
					"Name" : "Name",
					"End_Date" : "End_Date",
					"String_Value_2" : "String_Value_2",
					"String_Value_1" : "String_Value_1",
					"Number_Value_2" : "Number_Value_2",
					"Number_Value_1" : "Number_Value_1",
					"Start_Date" : "Start_Date",
					"Description" : "Description"
				}
			},
			"group" : "Georeferenced in Warper",
			"title" : "Bakken Flares",
			"selected" : false,
			"bbox" : [-104.108082637702, 47.1284785238031, -102.097584591105, 48.8199077688698],
			"source" : "16",
			"opacity" : 0.73,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:bakkenflares_g8y",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4326",
			"attributes" : [{
				"header" : "Name",
				"id" : "Name",
				"searchable" : true
			}, {
				"header" : "Description",
				"id" : "Description",
				"searchable" : false
			}, {
				"header" : "Start_Date",
				"id" : "Start_Date",
				"searchable" : false
			}, {
				"header" : "End_Date",
				"id" : "End_Date",
				"searchable" : false
			}, {
				"header" : "String_Value_1",
				"id" : "String_Value_1",
				"searchable" : false
			}, {
				"header" : "String_Value_2",
				"id" : "String_Value_2",
				"searchable" : false
			}, {
				"header" : "Number_Value_1",
				"id" : "Number_Value_1",
				"searchable" : false
			}, {
				"header" : "Number_Value_2",
				"id" : "Number_Value_2",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-104.108082637702, 47.1284785238031, -102.097584591105, 48.8199077688698]
		}, {
			"opacity" : 1.0,
			"group" : "Georeferenced in Warper",
			"name" : "image",
			"title" : "Extent of Bakken Formation - image",
			"buffer" : 0,
			"format" : "image/png",
			"selected" : false,
			"visibility" : false,
			"capability" : {
				"styles" : [],
				"metadataURLs" : [],
				"nestedLayers" : [],
				"dimensions" : {},
				"opaque" : false,
				"identifiers" : {},
				"cascaded" : 0,
				"queryable" : false,
				"authorityURLs" : {},
				"srs" : {
					"EPSG:900913" : true
				},
				"prefix" : "image",
				"bbox" : {
					"EPSG:4326" : {
						"srs" : "EPSG:4326",
						"bbox" : [-113.105, 42.2399, -91.6363, 54.0288]
					}
				},
				"keywords" : [],
				"formats" : ["image/tiff", "image/png", "image/gif", "image/jpeg", "application/x-pdf", "image/svg+xml"],
				"fixedWidth" : 0,
				"title" : "Extent of Bakken Formation",
				"fixedHeight" : 0,
				"noSubsets" : false,
				"llbbox" : [-113.105, 42.2399, -91.6363, 54.0288],
				"infoFormats" : ["text/plain", "application/vnd.ogc.gml"],
				"name" : "image"
			},
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1797/z/x/y.png",
			"source" : "18",
			"cached" : true,
			"fixed" : false,
			"transparent" : true
		}, {
			"styles" : "bakkenformation_fnm",
			"abstract" : "The extent of the Bakken Formation",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["Name", "Description", "Start_Date", "End_Date", "String_Value_1", "String_Value_2", "Number_Value_1", "Number_Value_2"],
				"propertyNames" : {
					"Name" : "Name",
					"End_Date" : "End_Date",
					"String_Value_2" : "String_Value_2",
					"String_Value_1" : "String_Value_1",
					"Number_Value_2" : "Number_Value_2",
					"Number_Value_1" : "Number_Value_1",
					"Start_Date" : "Start_Date",
					"Description" : "Description"
				}
			},
			"group" : "Georeferenced in Warper",
			"title" : "Bakken Formation",
			"selected" : false,
			"bbox" : [-108.679969849287, 46.9158392026068, -100.506141725426, 50.3973941095787],
			"source" : "19",
			"opacity" : 0.65,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : true,
			"transparent" : true,
			"name" : "geonode:bakkenformation_fnm",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4326",
			"attributes" : [{
				"header" : "Name",
				"id" : "Name",
				"searchable" : true
			}, {
				"header" : "Description",
				"id" : "Description",
				"searchable" : false
			}, {
				"header" : "Start_Date",
				"id" : "Start_Date",
				"searchable" : false
			}, {
				"header" : "End_Date",
				"id" : "End_Date",
				"searchable" : false
			}, {
				"header" : "String_Value_1",
				"id" : "String_Value_1",
				"searchable" : false
			}, {
				"header" : "String_Value_2",
				"id" : "String_Value_2",
				"searchable" : false
			}, {
				"header" : "Number_Value_1",
				"id" : "Number_Value_1",
				"searchable" : false
			}, {
				"header" : "Number_Value_2",
				"id" : "Number_Value_2",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-108.679969849287, 46.9158392026068, -100.506141725426, 50.3973941095787]
		}, {
			"styles" : "geonode_g2008_1",
			"abstract" : "The Global Administrative Unit Layers (GAUL) is a spatial database of the administrative units for all the countries in the world. It is a project of the Food and Agriculture Organization (FAO) of the United Nations.",
			"disabled" : false,
			"getFeatureInfo" : {
				"fields" : ["PERIMETER", "LAST_UPDAT", "EXP_YEAR1", "STR_YEAR1", "AREA", "STR_YEAR0", "REGION", "ADM0_NAME", "EXP_YEAR0", "G2008_1_", "ADM0_CODE", "G2008_1_ID", "ADM1_CODE", "CONTINENT", "ADM1_NAME", "the_geom"],
				"propertyNames" : {
					"PERIMETER" : "PERIMETER",
					"LAST_UPDAT" : "LAST_UPDAT",
					"STR_YEAR1" : "STR_YEAR1",
					"AREA" : "AREA",
					"STR_YEAR0" : "STR_YEAR0",
					"REGION" : "REGION",
					"ADM0_NAME" : "ADM0_NAME",
					"CONTINENT" : "CONTINENT",
					"G2008_1_" : "G2008_1_",
					"ADM0_CODE" : "ADM0_CODE",
					"ADM1_NAME" : "ADM1_NAME",
					"G2008_1_ID" : "G2008_1_ID",
					"ADM1_CODE" : "ADM1_CODE",
					"the_geom" : "the_geom",
					"EXP_YEAR1" : "EXP_YEAR1",
					"EXP_YEAR0" : "EXP_YEAR0"
				}
			},
			"group" : "Boundaries",
			"title" : "States",
			"selected" : true,
			"bbox" : [-180.0, -89.9000015258789, 180.0, 83.6274185180664],
			"source" : "19",
			"opacity" : 1.0,
			"format" : "image/png",
			"buffer" : 0,
			"visibility" : false,
			"tiled" : false,
			"transparent" : true,
			"name" : "geonode:g2008_1",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"srs" : "EPSG:4326",
			"attributes" : [{
				"header" : "PERIMETER",
				"id" : "PERIMETER",
				"searchable" : false
			}, {
				"header" : "LAST_UPDAT",
				"id" : "LAST_UPDAT",
				"searchable" : false
			}, {
				"header" : "EXP_YEAR1",
				"id" : "EXP_YEAR1",
				"searchable" : false
			}, {
				"header" : "STR_YEAR1",
				"id" : "STR_YEAR1",
				"searchable" : false
			}, {
				"header" : "AREA",
				"id" : "AREA",
				"searchable" : false
			}, {
				"header" : "STR_YEAR0",
				"id" : "STR_YEAR0",
				"searchable" : false
			}, {
				"header" : "REGION",
				"id" : "REGION",
				"searchable" : true
			}, {
				"header" : "ADM0_NAME",
				"id" : "ADM0_NAME",
				"searchable" : true
			}, {
				"header" : "EXP_YEAR0",
				"id" : "EXP_YEAR0",
				"searchable" : false
			}, {
				"header" : "G2008_1_",
				"id" : "G2008_1_",
				"searchable" : false
			}, {
				"header" : "ADM0_CODE",
				"id" : "ADM0_CODE",
				"searchable" : false
			}, {
				"header" : "G2008_1_ID",
				"id" : "G2008_1_ID",
				"searchable" : false
			}, {
				"header" : "ADM1_CODE",
				"id" : "ADM1_CODE",
				"searchable" : false
			}, {
				"header" : "CONTINENT",
				"id" : "CONTINENT",
				"searchable" : true
			}, {
				"header" : "ADM1_NAME",
				"id" : "ADM1_NAME",
				"searchable" : true
			}, {
				"header" : "the_geom",
				"id" : "the_geom",
				"searchable" : false
			}],
			"fixed" : false,
			"queryable" : [true],
			"llbbox" : [-180.0, -89.9000015258789, 180.0, 83.6274185180664]
		}],
		"center" : [-10681287.552762, 4558481.4195302],
		"zoom" : 5,
		"groups" : [{
			"expanded" : "false",
			"group" : "Boundaries"
		}, {
			"expanded" : "false",
			"group" : "Reports of Specific Chemicals Used"
		}, {
			"expanded" : "false",
			"group" : "Oil and/or Gas Wells or Permits"
		}, {
			"expanded" : "true",
			"group" : "Shale Formations"
		}, {
			"expanded" : "true",
			"group" : "Environmental Resources, Conservation"
		}, {
			"expanded" : "true",
			"group" : "Rivers, Streams, Lakes"
		}, {
			"expanded" : "false",
			"group" : "Transportation"
		}, {
			"expanded" : "true",
			"group" : "Georeferenced in Warper"
		}],
		"units" : "m",
		"maxResolution" : 156543.03390625,
		"maxExtent" : [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
		"projection" : "EPSG:900913"
	},
	"about" : {
		"urlsuffix" : "FrackMap",
		"abstract" : "A collection of data that might be useful in the geoanalysis of fracking issues in the United States.",
		"officialurl" : "",
		"introtext" : "<h3>The Harvard WorldMap Project</h3>  <p>WorldMap is an open source web mapping system that is currently  under construction. It is built to assist academic research and  teaching as well as the general public and supports discovery,  investigation, analysis, visualization, communication and archiving  of multi-disciplinary, multi-source and multi-format data,  organized spatially and temporally.</p>  <p>The first instance of WorldMap, focused on the continent of  Africa, is called AfricaMap. Since its beta release in November of  2008, the framework has been implemented in several geographic  locations with different research foci, including metro Boston,  East Asia, Vermont, Harvard Forest and the city of Paris. These web  mapping applications are used in courses as well as by individual  researchers.</p>  <h3>Introduction to the WorldMap Project</h3>  <p>WorldMap solves the problem of discovering where things happen.  It draws together an array of public maps and scholarly data to  create a common source where users can&#58;</p>  <ol>  <li>Interact with the best available public data for a  city/region/continent</li>  <li>See the whole of that area yet also zoom in to particular  places</li>  <li>Accumulate both contemporary and historical data supplied by  researchers and make it permanently accessible online</li>  <li>Work collaboratively across disciplines and organizations with  spatial information in an online environment</li>  </ol>  <p>The WorldMap project aims to accomplish these goals in stages,  with public and private support. It draws on the basic insight of  geographic information systems that spatiotemporal data becomes  more meaningful as more &quot;layers&quot; are added, and makes use of tiling  and indexing approaches to facilitate rapid search and  visualization of large volumes of disparate data.</p>  <p>WorldMap aims to augment existing initiatives for globally  sharing spatial data and technology such as <a href=\"http://www.gsdi.org/\" target=\"_blank\">GSDI</a> (Global Spatial Data  Infrastructure).WorldMap makes use of <a href=\"http://www.opengeospatial.org/\" target=\"_blank\">OGC</a> (Open Geospatial  Consortium) compliant web services such as <a href=\"http://en.wikipedia.org/wiki/Web_Map_Service\" target=\"_blank\">WMS</a> (Web  Map Service), emerging open standards such as <a href=\"http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification\" target=\"_blank\">WMS-C</a>  (cached WMS), and standards-based metadata formats, to enable  WorldMap data layers to be inserted into existing data  infrastructures.&nbsp;<br/>  <br/>  All WorldMap source code will be made available as <a href=\"http://www.opensource.org/\" target=\"_blank\">Open Source</a> for others to use  and improve upon.</p>",
		"title" : "FrackMap"
	},
	"topic_categories" : [["farming", "Farming & Agriculture"], ["biota", "Ecology & Biota"], ["boundaries", "Boundaries"], ["climatologyMeteorologyAtmosphere", "Climate & Weather"], ["economy", "Economic Activities & Employment"], ["elevation", "Elevation"], ["environment", "Environmental Resources, Conservation"], ["health", "Health & Human Ecology"], ["geoscientificInformation", "Earth Sciences"], ["imageryBaseMapsEarthCover", "Imagery & Base Maps"], ["location", "Place Locations"], ["planningCadastre", "Planning & Cadastral Data"], ["society", "Society & Demographics"], ["structure", "Structures"], ["transportation", "Transportation"], ["utilitiesCommunication", "Utilities & Infrastructure"], ["intelligenceMilitary", "Military Bases & Activities"], ["inlandWaters", "Rivers, Streams, Lakes"], ["oceans", "Oceans"]],
	"uid" : null,
	"first_visit" : false,
	"edit_map" : false,
	"sources" : {
		"20" : {
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource"
		},
		"1" : {
			"ptype" : "gxp_mapquestsource",
			"id" : "1"
		},
		"0" : {
			"ptype" : "gx_olsource",
			"id" : "0"
		},
		"3" : {
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "3"
		},
		"2" : {
			"ptype" : "gxp_bingsource",
			"id" : "2"
		},
		"5" : {
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "5"
		},
		"4" : {
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "4"
		},
		"7" : {
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "7"
		},
		"6" : {
			"url" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "6"
		},
		"9" : {
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "9"
		},
		"8" : {
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "8"
		},
		"local" : {
			"url" : "/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource"
		},
		"11" : {
			"ptype" : "gx_googlesource",
			"id" : "11"
		},
		"10" : {
			"url" : "http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",
			"ptype" : "gxp_arcrestsource",
			"id" : "10"
		},
		"13" : {
			"id" : "13",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource",
			"title" : "GeoNode Source"
		},
		"12" : {
			"id" : "12",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource",
			"title" : "GeoNode Source"
		},
		"15" : {
			"id" : "15",
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1795/z/x/y.png",
			"baseParams" : {
				"VERSION" : "1.1.1",
				"REQUEST" : "GetCapabilities",
				"TILED" : true,
				"SERVICE" : "WMS"
			},
			"ptype" : "gxp_wmscsource",
			"title" : "Map Warper WMS"
		},
		"14" : {
			"id" : "14",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource",
			"title" : "GeoNode Source"
		},
		"17" : {
			"id" : "17",
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1796/z/x/y.png",
			"baseParams" : {
				"VERSION" : "1.1.1",
				"REQUEST" : "GetCapabilities",
				"TILED" : true,
				"SERVICE" : "WMS"
			},
			"ptype" : "gxp_wmscsource",
			"title" : "Map Warper WMS"
		},
		"16" : {
			"id" : "16",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource",
			"title" : "GeoNode Source"
		},
		"19" : {
			"id" : "19",
			"url" : "http://worldmap.harvard.edu/geoserver/wms",
			"restUrl" : "/gs/rest",
			"ptype" : "gxp_gnsource",
			"title" : "GeoNode Source"
		},
		"18" : {
			"id" : "18",
			"url" : "http://warp.worldmap.harvard.edu/maps/tile/1797/z/x/y.png",
			"baseParams" : {
				"VERSION" : "1.1.1",
				"REQUEST" : "GetCapabilities",
				"TILED" : true,
				"SERVICE" : "WMS"
			},
			"ptype" : "gxp_wmscsource",
			"title" : "Map Warper WMS"
		}
	},
	"social_explorer" : [],
	"defaultSourceType" : "gxp_gnsource",
	"id" : 2937
}); 