"use strict";



mapboxgl.accessToken = 'pk.eyJ1Ijoib2xnYW5kaW5lIiwiYSI6ImNrdnYwcjl4bmJzdzgybnM3aDR1NnY0bDcifQ.bWNB-6Rq40ZoJadasYpmlw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [10.2039, 56.1629],
    zoom: 10,
});


const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.1997, 56.1539]
        },
        properties: {
          title: 'Mapbox',
          description: 'AROS'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.2183349, 56.124666]
        },
        properties: {
          title: 'Mapbox',
          description: 'the Infinite Bridge'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.2199, 56.1204]
        },
        properties: {
          title: 'Mapbox',
          description: 'Dyrehave'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.2152, 56.1387]
        },
        properties: {
          title: 'Mapbox',
          description: 'Båd Cafe'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.2093, 56.1515]
        },
        properties: {
          title: 'Mapbox',
          description: 'Street Food'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.2144, 56.1536]
        },
        properties: {
          title: 'Mapbox',
          description: 'DOKK 1'
        }
      }
    ]
  };
  
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

    
  }


  

  function searchOPT() {
    var x = document.getElementById('searchbar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  } 
  
    


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







/*    controls:
const nav = new mapboxgl.NavigationControl({
    visualizePitch: true,
    });



    map.addControl(nav, 'bottom-right',);
    

*/


//secret api code for mapbox
// sk.eyJ1Ijoib2xnYW5kaW5lIiwiYSI6ImNrdnV2OHpyZDE1dDEyb2x5bWk1cDFvMnQifQ.LiKbV7vb8LRvObd1u51IXQ

