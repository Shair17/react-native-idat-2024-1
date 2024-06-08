import {Fragment} from 'react';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({skipPermissionRequests: false});

export const GeolocationProvider = ({children}) => {
  return <Fragment>{children}</Fragment>;
};
