import React from 'react'
import { Marker } from 'react-leaflet'
import IconLocation from './iconLocation';

const Markers = () => {
    return (
      <div>
        <Marker position={{ lat: "-33.6167", lng: "-70.5680" }} icon={IconLocation} />
      </div>
    );
}

export default Markers;
