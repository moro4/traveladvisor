import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

function Map() {

   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width: 600px)');
   const coordinates = {lat: 10.99835602, lng: 77.01502627};

   return (
      <div style={{ height: '85vh', width: '100%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyA-eraJ-y5IErxg1ejTVuKZa3M-Hq3Osjw'}}
            defaultCenter={coordinates}
            defaultZoom={14}
            center={coordinates}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={() => {}}
            onChildClick={() => {}}
         >

         </GoogleMapReact>
      </div>
   )
}

export default Map;