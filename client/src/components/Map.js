import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const API= "AIzaSyCWI9rfmz6IwRHbC5oBIDt1xkc16ONfiKY"
const containerStyle = {
  width: "18em",
  height: "23em",
};

function Map({lat,lng}) {

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <LoadScript googleMapsApiKey={API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6.5}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Map;
