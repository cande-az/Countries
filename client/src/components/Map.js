import React from "react";
import { GoogleMap, LoadScript} from "@react-google-maps/api";


const containerStyle = {
  width: "18em",
  height: "22em",
};

function Map({lat,lng}) {

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6.5}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Map;
