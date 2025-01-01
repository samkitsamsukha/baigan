"use client"

// components/MapComponent.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png',
});

// Custom marker icon with red border
const customIcon = new L.Icon({
    iconUrl: '/leaflet/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: '/leaflet/images/marker-shadow.png',
});

// Function to create a red border around the marker
const createRedBorder = (marker) => {
    const border = L.divIcon({
        className: 'red-border',
        iconSize: [30, 45],
        iconAnchor: [15, 45],
    });
    return L.marker(marker.getLatLng(), { icon: border }).addTo(marker._map);
};

const MapComponent = () => {
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        setMapReady(true);
    }, []);

    // Coordinates for RV College of Engineering and Kengeri Police Station
    const rvCollegeCoords = [12.9342, 77.5011]; // RV College of Engineering
    const policeStationCoords = [12.9250, 77.5000]; // Kengeri Police Station

    if (!mapReady) {
        return null; // Render nothing until the map is ready
    }

    return (
        <MapContainer center={rvCollegeCoords} zoom={14} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={rvCollegeCoords} icon={customIcon}>
                <Popup>
                    RV College of Engineering
                </Popup>
            </Marker>
            <Marker position={policeStationCoords} icon={customIcon}>
                <Popup>
                    Kengeri Police Station
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;