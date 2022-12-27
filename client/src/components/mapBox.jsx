

import Map, {Marker, NavigationControl, FullscreenControl, GeolocateControl} from "react-map-gl";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken ="pk.eyJ1IjoiYmNsYXkiLCJhIjoiY2xieDFpdGdmMDJocDNwcGlkODlta3hsdSJ9.oBLUtqOO-APMWSU-qglGJg";


export default function MapBox({marker, setMarker}) {

// const mapContainerRef = useRef(null);

const [lng, setLng] = useState(-120.888872);
const [lat, setLat] = useState(47.306286);
const [zoom, setZoom] = useState(5.6);


const handleClick =(e) =>{
  const coordinates = e.lngLat;
  console.log(coordinates);

  setMarker({
    lng: coordinates.lng,
    lat: coordinates.lat
  })

  
 
 


}


  return (
  

    <Map
      mapboxAccessToken="pk.eyJ1IjoiYmNsYXkiLCJhIjoiY2xieDFpdGdmMDJocDNwcGlkODlta3hsdSJ9.oBLUtqOO-APMWSU-qglGJg"
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom,
        interactive: {
          doubleClickZoom: false,
        }
      }}
      style={{
        width: 600,
        height: 400,
        borderRadius: "15px",
        border: "3px solid black",
      }}
      mapStyle="mapbox://styles/bclay/clbwzl4og000314mb91qut7vr"
      onDblClick={handleClick}
    >
      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl position="top-right" />
      {marker && <Marker longitude={marker.lng} latitude={marker.lat} />}
    </Map>
  );
}



