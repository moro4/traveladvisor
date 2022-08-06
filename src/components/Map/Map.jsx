import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

function Map({setCoordinates, setBounds, coordinates}) {
   console.log('Initial coordinates in Map', coordinates);
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width: 600px)');

   return (
      <div style={{ height: '85vh', width: '100%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyA-eraJ-y5IErxg1ejTVuKZa3M-Hq3Osjw'}}
            defaultCenter={coordinates}
            defaultZoom={14}
            center={coordinates}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(event) => {
               setCoordinates({lat: event.center.lat, lng: event.center.lng});
               setBounds(
                  {ne: event.marginBounds.ne, sw: event.marginBounds.sw}
               );
            }}
            onChildClick={() => {}}
         >

         </GoogleMapReact>
      </div>
   )
}

export default Map;