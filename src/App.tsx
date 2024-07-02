import {
  Coordination,
  Map,
  MapProps,
  Marker,
  MarkerProps,
  Popup,
} from '@abolhasanashori/react-neshan-map';
import './App.css';
import { MapStyleNameType } from '@neshan-maps-platform/mapbox-gl/dist/src/parameters/parameters';
import { Attributes, useEffect, useState } from 'react';

const defaultProps = {
  mapKey: import.meta.env.VITE_MAP_KEY,
  center: [
    +import.meta.env.VITE_MAP_LONGITUDE,
    +import.meta.env.VITE_MAP_LATITUDE,
  ],
  zoom: +import.meta.env.VITE_MAP_ZOOM,
  mapType: import.meta.env.VITE_MAP_TYPE as MapStyleNameType,
} satisfies MapProps;

interface MarkerInstance extends MarkerProps, Attributes {}

function randomizer(num: number): number {
  return Math.floor(Math.random() * 400) / 1e4 + num;
}

function generateMarkers(center: Coordination, count = 10): MarkerInstance[] {
  return new Array(count).fill('').map(() => {
    const randomed = center.map(randomizer) as Coordination;

    return {
      key: randomed.join(','),
      lngLat: randomed,
    };
  });
}

const markers: MarkerInstance[] = generateMarkers(defaultProps.center);

function App() {
  const [marks, setMarks] = useState(markers);

  useEffect(() => {
    setInterval();
  }, []);

  return (
    <Map
      style={{
        width: '100%',
        height: '100%',
      }}
      mapTypeControllerOptions={{
        show: false,
      }}
      poi={false}
      traffic={false}
      {...defaultProps}
    >
      {marks.map(props => (
        <Marker {...props}>
          <Popup closeButton={false} show>
            {props.key as string}
          </Popup>
        </Marker>
      ))}
      {/* <Marker lngLat={defaultProps.center as Coordination}>
        <Popup closeButton={false} show>
          Hello World
        </Popup>
      </Marker> */}
    </Map>
  );
}

export default App;
