import {useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionsStore} from '../stores/usePermissionsStore';

export const useCheckLocationsPermissions = () => {
  const checkLocationPermissions = usePermissionsStore(
    s => s.checkLocationPermissions,
  );

  useEffect(() => {
    checkLocationPermissions();

    const listener = state => {
      if (state !== 'active') {
        return;
      }

      checkLocationPermissions();
    };

    const suscription = AppState.addEventListener('change', listener);

    return () => {
      suscription.remove();
    };
  }, [checkLocationPermissions]);
};
