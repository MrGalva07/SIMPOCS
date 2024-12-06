'use client';
import React, { useEffect, useState } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '188px',
};

interface MapComponentProps {
  latitude: number;
  longitude: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isMounted || !isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={{ lat: latitude || -23.5505, lng: longitude || -46.6333 }} // Fallback seguro
    zoom={10}
  />
  );
};

export default MapComponent;
