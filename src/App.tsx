import {
  Coordination,
  Map,
  MapProps,
  Marker,
  Popup,
} from '@abolhasanashori/react-neshan-map';
import './App.css';
import { MapStyleNameType } from '@neshan-maps-platform/mapbox-gl/dist/src/parameters/parameters';

const defaultProps: MapProps = {
  mapKey: import.meta.env.VITE_MAP_KEY,
  center: [
    +import.meta.env.VITE_MAP_LONGITUDE,
    +import.meta.env.VITE_MAP_LATITUDE,
  ] as Coordination,
  zoom: +import.meta.env.VITE_MAP_ZOOM,
  mapType: import.meta.env.VITE_MAP_TYPE as MapStyleNameType,
};

function App() {
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
      <Marker lngLat={defaultProps.center as Coordination}>
        <Popup closeButton={false} show>
          Hello World
        </Popup>
      </Marker>
    </Map>
  );
}

export default App;
