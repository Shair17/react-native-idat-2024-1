import {Fragment} from 'react';
import {useCheckLocationsPermissions} from '../hooks/useCheckLocationsPermissions';

export const PermissionsProvider = ({children}) => {
  useCheckLocationsPermissions();

  return <Fragment>{children}</Fragment>;
};
