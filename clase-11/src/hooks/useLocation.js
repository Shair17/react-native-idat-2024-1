import {useState, useEffect, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';

// referencia de como se ve el tipo de dato
// ILocation {
// latitude: number;
// longitude: number;
// }

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  // boolean
  const [gpsAccessDenied, setGpsAccessDenied] = useState(false);
  // ILocation[]
  const [routeLines, setRouteLines] = useState([]);
  // ILocation
  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  // ILocation
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const watchId = useRef();
  const isMounted = useRef(false);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {enableHighAccuracy: true},
      );
    });
  };

  const callGetCurrentLocation = () => {
    getCurrentLocation()
      .then(location => {
        if (!isMounted.current) {
          return;
        }

        setGpsAccessDenied(false);
        setInitialPosition(location);
        setUserLocation(location);
        setRouteLines(routes => [...routes, location]);
        setHasLocation(true);
      })
      .catch(e => {
        if (e.err.code === 5) {
          setGpsAccessDenied(true);
        }
      });
  };

  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        if (!isMounted.current) {
          return;
        }

        const location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        setGpsAccessDenied(false);
        setUserLocation(location);
        setRouteLines(routes => [...routes, location]);
      },
      err => {
        if (err.code === 5) {
          setGpsAccessDenied(true);
        }
      },
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  };

  const stopFollowUserLocation = () => {
    if (watchId.current) {
      Geolocation.clearWatch(watchId.current);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    callGetCurrentLocation();
  }, []);

  return {
    hasLocation,
    gpsAccessDenied,
    initialPosition,
    getCurrentLocation,
    callGetCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
    userLocation,
    routeLines,
  };
};
