import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
import * as markersData from "../../../json/markersData.json";

export default function Map() {
  console.log('markersData', markersData.markers)
  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -34.86814466586775, lng: -61.52956740373243 }}
      >
        {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
        
        {markersData?.markers.map((marker, i) => (
          <Marker
            key={i}
            position={{
              lat: marker.coordinates[0],
              lng: marker.coordinates[1],
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
