import React, { useEffect, useState, createRef } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import getPlacesData from './api';

function App() {

   const [places, setPlaces] = useState([]);
   const [coordinates, setCoordinates] = useState({});
   const [bounds, setBounds] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         ({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
         }
      )
   }, []);

   useEffect(() => {
      setIsLoading(true);
      if(bounds) {
         getPlacesData(bounds.sw, bounds.ne).then((data) => {

            var filteredData = data.filter(place => (
               // remove advertising
               'latitude' in place && 'longitude' in place
            ));

            filteredData.forEach(place => (
               place.ref = place?.ref ?? createRef()
            ));

            setPlaces(filteredData);
            setIsLoading(false);
         })
      }
   }, [coordinates, bounds]);

   return (
      <>
         <CssBaseline />
         <Header />
         <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
               <List places={places} isLoading={isLoading}
               />
            </Grid>
            <Grid item xs={12} md={8}>
               <Map
                  setCoordinates={setCoordinates}
                  setBounds={setBounds}
                  coordinates={coordinates}
                  places={places}
               />
            </Grid>
         </Grid>
      </>
   )
}

export default App;