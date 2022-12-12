

// import Map from 'ol/Map.js';
// import OSM from 'ol/source/OSM.js';
// import TileLayer from 'ol/layer/Tile.js';
// import View from 'ol/View.js';
import '../styles/mapStyle.css'

import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";

function DisplayMap() {
   
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;
    const startPosLonLat = [-120.563921, 47.142857];
    const startPos = fromLonLat(startPosLonLat)

    useEffect(() => {
        const initialMap = new Map({
          target: mapElement.current,
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: new View({
            center: startPos,
            zoom: 6.5,
          }),
        });
        setMap(initialMap);
    }, []);

    return (
      <div style={{height:'50vh',width:'100%'}} ref={mapElement} className="map-container" />
    );
}



//   const map = new Map({
//     target: "map",
//     layers: [
//       new TileLayer({
//         source: new OSM(),
//       }),
//     ],
//     view: new View({
//       center: [0, 0],
//       zoom: 2,
//     }),
//   });

//   return <div id="map"></div>;
// }
export default DisplayMap