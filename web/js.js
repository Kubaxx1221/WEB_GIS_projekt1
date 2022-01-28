"use strict"
require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/widgets/BasemapGallery',
  'esri/widgets/Expand',
  'esri/widgets/Legend',
  "esri/widgets/LayerList",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/AreaMeasurement2D",
  "esri/widgets/Search"

], (Map, MapView, FeatureLayer, BasemapGallery, Expand, Legend, LayerList,DistanceMeasurement2D,
  AreaMeasurement2D, Search)=>{


  const map1 = new Map({
    basemap: "topo-vector",
    // layers: fl
    });
  const view = new MapView({
    map: map1,
    container: "map",
    zoom: 10,
    center: [20, 50],
  });
  console.log('robienie mapy');


  let button1 = document.getElementById('button1');  //warszawa
  let button2 = document.getElementById('button2');  //poznan

  button1.addEventListener('click', function(){
      let opts = {
      duration: 2000
      };
      view.goTo({
        target: [20.968673, 52.166083],
        zoom: 10
  }, opts);

  });

  button2.addEventListener('click', function(){
      let opts = {
      duration: 2000
      };
      view.goTo({
        target: [16.826714, 52.419720],
        zoom: 10
  }, opts);

  });


})



