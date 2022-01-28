"use strict"
require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/widgets/BasemapGallery',
  'esri/widgets/Expand',
  'esri/widgets/Legend',
  "esri/widgets/LayerList",
  "esri/widgets/Search",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/AreaMeasurement2D",

], (Map, MapView, FeatureLayer, BasemapGallery, Expand, Legend, LayerList, Search, DistanceMeasurement2D,
  AreaMeasurement2D)=>{

  const map1 = new Map({
    basemap: "topo-vector",
    // layers: fl
    });
  const view = new MapView({
    map: map1,
    container: "map",
    center: [19.252482, 52.065221],
    zoom: 6.5
  });

  const Feature = new FeatureLayer({
    url:'https://services1.arcgis.com/mQcAehnytds8jMvo/arcgis/rest/services/lotniska_ms/FeatureServer'
    });


  map1.add(Feature);

  const search = new Search({
    view: view
  });
  view.ui.add(search, {position: "top-right"});

  const layerlist = new LayerList({
    view: view
  });
  view.ui.add(layerlist, {position: "bottom-right"});
  
  const base = new BasemapGallery({
    view: view
  });
  const expand = new Expand({
    view: view,
    content: base
  });
  view.ui.add(expand,{position: 'top-right'});

  const  legend = new Legend({
    view: view
  })
  view.ui.add(legend,{position: 'bottom-left'});

  let activeWidget = null;
  // kod js do aktywacji przyciskow miary
  view.ui.add("topbar", "top-right");

  document
    .getElementById("distanceButton")
    .addEventListener("click", function () {
      setActiveWidget(null);
      if (!this.classList.contains("active")) {
        setActiveWidget("distance");
      } else {
        setActiveButton(null);
      }
    });

  document
    .getElementById("areaButton")
    .addEventListener("click", function () {
      setActiveWidget(null);
      if (!this.classList.contains("active")) {
        setActiveWidget("area");
      } else {
        setActiveButton(null);
      }
    });

  function setActiveWidget(type) {
    switch (type) {
      case "distance":
        activeWidget = new DistanceMeasurement2D({
          view: view
        });

        // skip the initial 'new measurement' button
        activeWidget.viewModel.start();

        view.ui.add(activeWidget, "top-right");
        setActiveButton(document.getElementById("distanceButton"));
        break;
      case "area":
        activeWidget = new AreaMeasurement2D({
          view: view
        });

        // skip the initial 'new measurement' button
        activeWidget.viewModel.start();

        view.ui.add(activeWidget, "top-right");
        setActiveButton(document.getElementById("areaButton"));
        break;
      case null:
        if (activeWidget) {
          view.ui.remove(activeWidget);
          activeWidget.destroy();
          activeWidget = null;
        }
        break;
    }
  }

  function setActiveButton(selectedButton) {
    // focus the view to activate keyboard shortcuts for sketching
    view.focus();
    var elements = document.getElementsByClassName("active");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    if (selectedButton) {
      selectedButton.classList.add("active");
    }};




  let button1 = document.getElementById('button1');  //warszawa
  let button2 = document.getElementById('button2');  //poznan

  button1.addEventListener('click', function(){
      view.goTo({
        target: [20.968673, 52.166083],
        zoom: 13
  });

  });

  button2.addEventListener('click', function(){
      view.goTo({
        target: [16.826714, 52.419720],
        zoom: 13
  });

  });
})



