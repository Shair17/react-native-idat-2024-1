import {Platform} from 'react-native';
import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {
  openSettings,
  check,
  request,
  PERMISSIONS,
} from 'react-native-permissions';

const getInitialState = () => {
  return {
    locationStatus: 'unavailable',
  };
};

export const usePermissionsStore = create(
  combine(getInitialState(), set => ({
    checkLocationPermissions: async () => {
      let locationStatus = 'unavailable';

      if (Platform.OS === 'android') {
        locationStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      } else if (Platform.OS === 'ios') {
        locationStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else {
        console.log('sistema operativo no soportado');
      }

      set({locationStatus});
    },
    askLocationPermission: async () => {
      let locationStatus = 'unavailable';

      if (Platform.OS === 'android') {
        locationStatus = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
      } else if (Platform.OS === 'ios') {
        locationStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else {
        console.log('sistema operativo no soportado');
      }

      if (locationStatus === 'blocked') {
        await openSettings();
      }

      set({locationStatus});
    },
  })),
);
