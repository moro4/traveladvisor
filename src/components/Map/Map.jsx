import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

function Map({ setCoordinates, setBounds, coordinates, places}) {
   const classes = useStyles();
   const isDesktop = useMediaQuery('(min-width: 600px)');

   return (
      <div style={{ height: '85vh', width: '100%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={coordinates}
            defaultZoom={14}
            center={coordinates}
            margin={[50, 50, 50, 50]}
            onChange={(event) => {
               setCoordinates({ lat: event.center.lat, lng: event.center.lng });
               setBounds(
                  { ne: event.marginBounds.ne, sw: event.marginBounds.sw }
               );
            }}
            onChildClick={(child) => (
               places[+child].ref.current.scrollIntoView(
                  { behavior: 'smooth', block: 'start' })
            )}
         >
            {places?.map((place, index) => (
               <div className={classes.markerContainer}
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={index}
               >
                  {
                     isDesktop
                        ? (
                           <Paper elevation={3} className={classes.paper}>

                              <Typography className={classes.typography}
                                 variant="subtitle2" gutterBottom
                              >
                                 {place.name}
                              </Typography>

                              <img className={classes.pointer}
                                 src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                 alt={place.name}
                              />
                              <Rating size="small" value={Number(place.rating)}
                                 readOnly
                              />
                           </Paper>)
                        : (
                           <LocationOnOutlinedIcon color="primary"
                              fontSize="large" />)
                  }
               </div>
            ))}
         </GoogleMapReact>
      </div>
   )
}

export default Map;