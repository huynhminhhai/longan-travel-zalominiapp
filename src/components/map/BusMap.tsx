import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const busStops = [
    { name: 'Bệnh viện Đa khoa', lat: 10.5453, lng: 106.4086 },
    { name: 'Nguyễn Thông', lat: 10.5470, lng: 106.4125 },
    { name: 'Châu Thị Kim', lat: 10.5492, lng: 106.4153 },
    { name: 'Hùng Vương', lat: 10.5525, lng: 106.4201 },
    { name: 'Nguyễn An Ninh', lat: 10.5550, lng: 106.4234 },
    { name: 'Hai Bà Trưng', lat: 10.5584, lng: 106.4281 },
    { name: 'Cách Mạng Tháng 8', lat: 10.5610, lng: 106.4325 },
    { name: 'Nguyễn Trung Trực', lat: 10.5642, lng: 106.4371 },
    { name: 'Trương Định', lat: 10.5669, lng: 106.4413 },
    { name: 'Võ Văn Tần', lat: 10.5703, lng: 106.4460 },
    { name: 'Trà Bình Quý', lat: 10.5731, lng: 106.4505 },
    { name: 'Hùng Vương (đoạn mới)', lat: 10.5757, lng: 106.4552 },
    { name: 'QL62', lat: 10.5801, lng: 106.4607 },
    { name: 'QL.N2', lat: 10.5900, lng: 106.4750 },
    { name: 'TT Thạnh Hóa', lat: 10.6050, lng: 106.4950 },
    { name: 'ĐT 836', lat: 10.6150, lng: 106.5100 },
    { name: 'QL62 (về Bình Hiệp)', lat: 10.6250, lng: 106.5250 },
    { name: 'Bãi đỗ xe Bình Hiệp', lat: 10.6400, lng: 106.5400 }
];

const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1042/1042263.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

const BusMap = () => {
    return (
        <MapContainer center={[busStops[0].lat, busStops[0].lng]} zoom={15} style={{ height: '500px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
            
            {busStops.map((stop, index) => (
                <Marker key={index} position={[stop.lat, stop.lng]} icon={customIcon}>
                    <Popup>{stop.name}</Popup>
                </Marker>
            ))}
            
            <Polyline positions={busStops.map(stop => [stop.lat, stop.lng])} color="red" weight={5} />
        </MapContainer>
    );
};

export default BusMap;
