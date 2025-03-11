import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { openUrlInWebview } from 'services/zalo';

interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  img: string;
  markerImg: string;
}

interface Props {
  locations: Location[]; // Chuyển từ 1 location sang mảng locations
}

const MultipleLocationsMap: React.FC<Props> = ({ locations }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([locations[0].lat, locations[0].lng], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapRef.current);
    }

    locations.forEach((location) => {
      const customIcon = L.icon({
        iconUrl: location.markerImg,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo((mapRef as any).current)
        .bindPopup(`
          <div style="width: 180px">
            <img style="width: 100%; height: 100px; object-fit: cover" src="${location.img}" alt="${location.name}" />
            <div style="padding-block: 6px;">
              <div style="color: #355933; font-size: 13px; font-weight: 700; margin-bottom: 2px;">${location.name}</div>
              <div style="font-size: 11px;">
                <div style="margin-bottom: 4px;"><strong>Địa chỉ:</strong> ${location.address}</div>
                <button style="line-height: 1; padding: 6px; background-color: #355933; border-radius: 4px; color: #fff;" class="google-maps-link">Chỉ đường</button>
              </div>
            </div>
          </div>
        `);

        marker.on('popupopen', () => {
          const googleMapsLink = (marker.getPopup() as any).getElement()?.querySelector('.google-maps-link');
          if (googleMapsLink) {
            googleMapsLink.addEventListener('click', () => openGoogleMaps(location.lat, location.lng));
          }
        });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [locations]);

  const openGoogleMaps = async (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    await openUrlInWebview(googleMapsUrl, 'bottomSheet'); // Sử dụng hàm openUrlInWebview để mở Google Maps
  };

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MultipleLocationsMap;
