import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Map from './components/Map/Map';
import getPlacesData from './api';

function App() {

   const [places, setPlaces] = useState([]);
   const [coordinates, setCoordinates] = useState({});
   const [bounds, setBounds] = useState(null);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         ({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
         }
      )
   }, []);

   useEffect(() => {
      if(bounds) {
         console.log('Bounds in effect', bounds);
         console.log('Coordinates in effect', coordinates);
         getPlacesData(bounds.sw, bounds.ne).then((data) => {
            console.log('Data from API call', data);
            setPlaces(data);
         })
      }
   }, [coordinates, bounds]);

   return (
      <>
         <CssBaseline />
         <Header />
         <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
               <List places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
               <Map
                  setCoordinates={setCoordinates}
                  setBounds={setBounds}
                  coordinates={coordinates}
               />
            </Grid>
         </Grid>
      </>
   )
}

export default App;