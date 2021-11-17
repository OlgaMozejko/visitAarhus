"use strict";



mapboxgl.accessToken = 'pk.eyJ1Ijoib2xnYW5kaW5lIiwiYSI6ImNrdnYwcjl4bmJzdzgybnM3aDR1NnY0bDcifQ.bWNB-6Rq40ZoJadasYpmlw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [10.2039, 56.1629],
    zoom: 11,
});



map.on('load', () => {

  map.loadImage(
    '../icon/icon2.png',
    (error, image) => {
      if (error) throw error;
      if (!map.hasImage('mine')) map.addImage('mine', image);
  
  map.addSource('attractions', {

  'type': 'geojson',
  'data': {
  "type": "FeatureCollection",
  "features": [
  {
  "type": "Feature",
    "properties": {
  "title":
  "<strong>AROS</strong><p>museum</p>"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [10.1997, 56.1539]
    }
  },
  {
  "type": "Feature",
  "properties": {
    "title":
    "<strong>DOKK1</strong><p>architecture</p>",
  },
  "geometry": {
  "type": "Point",
  "coordinates": [10.2144, 56.1536]
  }
  },
  {
  "type": "Feature",
  "properties": {
    "title":
    "<strong>Den Gamble By</strong><p>museum</p>",
    },
  "geometry": {
  "type": "Point",
  "coordinates": [10.1921, 56.1588]
  }
  },
  ]
  }
  });

  
    map.addSource('food', {
  
    "type": "geojson",
    "data": {
    "type": "FeatureCollection",
    "features": [
    {
    "type": "Feature",
    "geometry": {
    "type": "Point",
    "coordinates": [10.2093, 56.1515]
    },
    "properties": {
      "title":
      '<strong>Street Food</strong><p>restaurants</p>',
    }
    },
    {
    "type": "Feature",
    "geometry": {
    "type": "Point",
    "coordinates": [10.2152, 56.1387]
    },
    "properties": {
      "title":
      "<strong>Båd Cafe</strong><p>cafe</p>",
     }
    },
    {
    "type": "Feature",
    "geometry": {
    "type": "Point",
    "coordinates": [10.2110421, 56.153872]
    },
    "properties": {
      "title":
      "<strong>Klokken</strong><p>restaurant</p>",
      }
    },
    ]
    }
    });

    
      map.addSource('activities', {
    
      "type": "geojson",
      "data": {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [10.2199, 56.1204]
      },
      "properties": {
        "title":
        "<strong>Dyrehave</strong><p>park</p>",
        }
      },
      {
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [10.2183349, 56.124666]
      },
      "properties": {
        "title":
        "<strong>the Infinite Bridge</strong><p>beach</p>",
        }
      },
      {
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [10.1979, 56.1366]
      },
      "properties": {
        "title":
        "<strong>Tivoli Friheden</strong><p>amusment park</p>",
        },
      },
      ]
      }
      });
    

  map.addLayer({
  'id': 'attractions',
  'type': 'symbol',
  'source': 'attractions',
  'layout': {
    'icon-image': 'mine',
    'icon-allow-overlap': true,
    'icon-size': 0.015,
    'visibility': 'visible',
    'icon-pitch-alignment': 'viewport',
    },
    'paint': {
      'icon-translate': [0, 40],
    }
  });

  map.addLayer({
    'id': 'food',
    'type': 'symbol',
    'source': 'food',
    'layout': {
      'icon-image': 'mine',
      'icon-allow-overlap': true,
      'icon-size': 0.015,
      'visibility': 'visible',
      'icon-pitch-alignment': 'viewport',
      },
      'paint': {
        'icon-translate': [0, 40],
      }
    });

    map.addLayer({
      'id': 'activities',
      'type': 'symbol',
      'source': 'activities',
      'layout': {
      'icon-image': 'mine',
      'icon-allow-overlap': true,
      'icon-size': 0.015,
      'visibility': 'visible',
      'icon-pitch-alignment': 'viewport',
      },
      'paint': {
        'icon-translate': [0, 40],
      }
      });



    }); });  

    // add layers to the menus


      map.on('idle', () => {
        // If these two layers were not added to the map, abort
        if (!map.getLayer('attractions') || !map.getLayer('food') || !map.getLayer('activities')) {
        return;
        }
         
        // Enumerate ids of the layers.
        const toggleableLayerIds = ['attractions', 'food', 'activities'];
         
        // Set up the corresponding toggle button for each layer.
        for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
        continue;
        }
         
        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
         
        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
        const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
         
        const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
        );
         
        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
        } else {
        this.className = 'active';
        map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
        );
        }
        };
         
        const layers = document.getElementById('menu1');
        layers.appendChild(link);
        }



         //       pop-ups 


        map.on('click', 'activities', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const title = e.features[0].properties.title;
           
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
           
          new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(title)
          .addTo(map);
          });
           
          // Change the cursor to a pointer when the mouse is over the places layer.
          map.on('mouseenter', 'activities', () => {
          map.getCanvas().style.cursor = 'pointer';
          });
           
          // Change it back to a pointer when it leaves.
          map.on('mouseleave', 'activities', () => {
          map.getCanvas().style.cursor = '';
          });
          


          map.on('click', 'food', (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const title = e.features[0].properties.title;
             
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
             
            new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(title)
            .addTo(map);
            });
             
            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'food', () => {
            map.getCanvas().style.cursor = 'pointer';
            });
             
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'food', () => {
            map.getCanvas().style.cursor = '';
            });



            map.on('click', 'attractions', (e) => {
              // Copy coordinates array.
              const coordinates = e.features[0].geometry.coordinates.slice();
              const title = e.features[0].properties.title;

              
               
              // Ensure that if the map is zoomed out such that multiple
              // copies of the feature are visible, the popup appears
              // over the copy being pointed to.
              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }
               
              new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(title)
              .addTo(map);
              });
               
              // Change the cursor to a pointer when the mouse is over the places layer.
              map.on('mouseenter', 'attractions', () => {
              map.getCanvas().style.cursor = 'pointer';
              });
               
              // Change it back to a pointer when it leaves.
              map.on('mouseleave', 'attractions', () => {
              map.getCanvas().style.cursor = '';
              });






        });








      // fetch and append of the data from the visit denmark data source
//converting into geojson 

/*
var _geolocations = [];
var _info = [];

async function getAll() {
    let response = await fetch("./data/data.json");
    let data = await response.json();
    console.log(data);
    _info = data;
    for (let i=0; i <= 582 ; i++) {
        let element = [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [_info.Address.GeoCoordinate.Latitude, _info.Address.GeoCoordinate.Longitude]
        },
        properties: {
            title: 'Mapbox',
            description: _info.Name
        }
    }];
    _geolocations.push(element);
    
}
console.log(_geolocations);

}

getAll();

*/
