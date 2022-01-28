
require([
    'esri/Map', 'esri/views/MapView',


    ], (Map, MapView))


    const map1 = new Map({
      basemap: "topo-vector",
      layers: fl
      });
    const view = new MapView({
      map: map1,
      container: "map",
      zoom: 6,
      center: [21, 52]
  });

  let btnZoom1 = document.getElementById('button1');  //warszawa
  let btnZoom2 = document.getElementById('button2');  //poznan

    btnZoom1.addEventListener('click', function(){
        let opts = {
        duration: 2000
        };
          view.goTo({
      target: [20.968673, 50.166083],
      zoom: 10
    }, opts);

  });

    btnZoom2.addEventListener('click', function(){
        let opts = {
        duration: 2000
        };
          view.goTo({
      target: [16.826714, 52.419720],
      zoom: 10
    }, opts);

  });