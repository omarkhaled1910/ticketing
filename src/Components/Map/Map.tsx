import React from 'react'
import { GoogleMap, useJsApiLoader ,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};


const center = {
    lat: 30.050108,
    lng: 31.289196
  };
  

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(17)
    

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
    
        
    
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/> 
              </GoogleMap>
  ) : <></>
}

export default React.memo(Map)